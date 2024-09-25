import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import earthTexture from '../../../assets/earth.png';
import './Earth.css';

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
    // Criação do renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(document.documentElement.clientWidth, document.documentElement.clientHeight);
    renderer.domElement.style.display = 'block'; // Remove qualquer margin default

    // Anexa o canvas gerado pelo Three.js ao containerRef
    if (containerRef.current) {
      containerRef.current.innerHTML = ''; // Limpa o container antes de adicionar o novo canvas
      containerRef.current.appendChild(renderer.domElement);
    }

    // Cena e câmera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, document.documentElement.clientWidth / document.documentElement.clientHeight, 0.1, 1000);

    // Posiciona a câmera mais distante e ajusta conforme o tamanho da tela
    const distanceFromEarth = 10;
    camera.position.set(0, 0, distanceFromEarth); // Centraliza a câmera

    // Tamanho da Terra com base na propriedade CSS
    const earthSize = parseFloat(getComputedStyle(containerRef.current!).getPropertyValue('--earth-size')) || 1.5;
    const geometry = new THREE.SphereGeometry(earthSize, 64, 64);

    // Carrega a textura
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(earthTexture as string, (texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.needsUpdate = true;
    }, undefined, (error) => {
      console.error('Erro ao carregar a textura:', error);
    });

    // Aplica a textura ao material da Terra
    const material = new THREE.MeshStandardMaterial({ map: texture });
    const earth = new THREE.Mesh(geometry, material);

    // Centraliza a Terra na cena
    earth.position.set(0, 0, 0);
    scene.add(earth);

    // Adiciona iluminação
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    // Função de renderização da cena
    const renderScene = () => {
      earth.rotation.y += 0.001; // Rotação contínua
      renderer.render(scene, camera);
      requestAnimationFrame(renderScene); // Chama renderScene continuamente
    };

    // Função de redimensionamento da tela
    const handleResize = () => {
      const width = document.documentElement.clientWidth;
      const height = document.documentElement.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const debouncedResize = debounce(handleResize, 100);
    window.addEventListener('resize', debouncedResize);

    renderScene(); // Chama a renderização inicial

    // Limpa os eventos e animação ao desmontar o componente
    return () => {
      window.removeEventListener('resize', debouncedResize);
      renderer.dispose(); // Limpa o renderizador
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="earth-container earth-small earth-medium earth-large"
    />
  );
};

export default Earth;
