import Grid from '../Grid';
import ProjectCard from '../ProjectCard';
import SectionLabel from './SectionLabel';
import { CollectionIcon } from '@heroicons/react/solid';

const Projects: React.FC = () => {
  return (
    <section className="flex flex-col" data-aos="fade" id="projects">
      <SectionLabel icon={<CollectionIcon width={20} fill="black" />}>
        Projects
      </SectionLabel>
      <Grid>
        <ProjectCard
          title="QuizSchool"
          description="Making quizes never been easier"
          link="https://quizschool.cf"
        />

        <ProjectCard
          title="EZMeme"
          description="An easy to use Meme Generator"
          link="https://ezmeme.cf"
        />

        <ProjectCard
          title="PerMon"
          description="Performance monitoring from an other device"
          link="https://zalnars.github.io/PerMon/"
        />

        <ProjectCard
          title="ControllerAsInput"
          description="Allowing to use a Xbox controller as mouse"
          link="https://zalnars.github.io/ControllerAsInput/"
        />

        <ProjectCard
          title="LinkShake"
          description="Shake Multiple Links Together"
          link="https://linkshake.cf"
        />
      </Grid>
    </section>
  );
};

export default Projects;
