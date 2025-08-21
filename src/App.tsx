import './globals.css';
import HomeHero from './components/HomeHero/HomeHero';
import Xp from './components/Xp/Xp'
import { Toaster } from 'react-hot-toast';

import netflixPng from './assets/netlifx.png';
import SportsPng from './assets/E-sports.png';
import SpacetimePng from './assets/Spacetime.png';

import Aos from 'aos'
import 'aos/dist/aos.css'
import NavBar from './components/NavBar/NavBar';
import SectionProjects from './components/projects/SectionProjects';
import Conhecimentos from './components/Conhecimentos/Conhecimentos';
import FormContato from './components/FormContato';
import { useEffect } from 'react';

function App() {
  const projectsArray = [
    {
      uid: '1',
      data:
      {
        title: 'Netflix Clone',
        type: 'Clone',
        description: 'perfect clone of Netflix SPA, SRR with TMDB API, and Firebase auth, developed with the following technologies: Next12, tailwindcss, hero-icons etc...',
        link: {
          url: 'https://projeto--netflix.vercel.app/',
        },
        thumbnail: {
          url: `${netflixPng}`
        }
      }
    },
    {
      uid: '2',
      data:
      {
        title: 'NLW SpaceTime',
        type: 'Personal Academic Development',
        description: 'project developed during another NLW by rocketseat, the objective of the application is to be a timeline storing the best moments of our careers developed in next13, tailwindcss, typescript, OAuth authentication from github, zod for validations etc...',
        link: {
          url: 'https://github.com/marciojuniors2/NlwSpacetime',
        },
        thumbnail: {
          url: `${SpacetimePng}`
        }
      }
    },
    {
      uid: '3',
      data:
      {
        title: 'NLW - Esports - Ignite',
        type: 'E-sports Academic Development',
        description: 'Full Stack Development of an Esports, Web and Mobile Application, with the following technologies: Zod validators, tailwindcss, next12, typescript,  git OAuth etc..',
        link: {
          url: 'https://github.com/marciojuniors2/NLW-ESports',
        },
        thumbnail: {
          url: `${SportsPng}`
        }
      }
    }
  ];

  const projects = projectsArray.map((projeto: any) => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url,
  }))


  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className='flex flex-col w-screen h-screen overflow-hidden'>
      <section>
        <HomeHero />
      </section>
      <section>
        <Xp />
      </section>
      <section>
        <SectionProjects projetos={projects} />
      </section>
      <section>
        <Conhecimentos />
      </section>
      <section>
        <FormContato />
      </section>
      <Toaster />
    </div>
  );
}


export default App;