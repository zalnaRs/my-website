import type { NextPage } from 'next';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Socials from '../components/sections/Socials';

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col ml-4 gap-1">
      <Projects />
      <Skills />
      <Socials />
    </div>
  );
};

export default IndexPage;
