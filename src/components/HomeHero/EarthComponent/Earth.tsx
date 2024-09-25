import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import earthTexture from '../../../assets/earth.png';
import './Earth.css'; // Crie um arquivo Earth.css no mesmo diretório

// Função debounce para evitar múltiplas execuções do redimensionamento
function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return function (this: void, ...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

const Earth = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inicializando o renderizador e a cena
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio); // Ajusta o ratio de pixels para melhorar a performance em mobile
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(renderer.domElement);
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    const earthSize = parseFloat(getComputedStyle(containerRef.current!).getPropertyValue('--earth-size'));
    const geometry = new THREE.SphereGeometry(earthSize, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(earthTexture as string);
    const material = new THREE.MeshStandardMaterial({ map: texture });
    const earth = new THREE.Mesh(geometry, material);

    scene.add(earth);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    // Função de renderização
    const rendererRender = () => {
      requestAnimationFrame(rendererRender);
      earth.rotation.y += 0.001; // Velocidade de rotação
      renderer.render(scene, camera);
    };

    // Função para atualizar o tamanho da tela e ajustar a câmera
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Aplica debounce no redimensionamento para melhorar a performance
    const debouncedResize = debounce(handleResize, 100);

    window.addEventListener('resize', debouncedResize);

    rendererRender(); // Inicia a renderização

    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="earth-small earth-medium earth-large"
    />
  );
};

export default Earth;
