import Grid from '../Grid';
import SectionLabel from './SectionLabel';
import { StarIcon } from '@heroicons/react/solid';
import SkillItem from '../SkillItem';

const Skills: React.FC = () => {
  return (
    <section
      className="flex flex-col"
      data-aos="fade"
      data-aos-delay="200"
      id="skills"
    >
      <SectionLabel icon={<StarIcon fill="black" width={20} />}>
        Skills
      </SectionLabel>
      <Grid>
        <SkillItem title="JSON" value="100%" />
        <SkillItem title="HTML5" value="95%" />
        <SkillItem title="CSS3" value="95%" />
        <SkillItem title="Javascript" value="85%" />
        <SkillItem title="Typescript" value="50%" />
        <SkillItem title="C#" value="30%" />
        <SkillItem title="SQL" value="10%" />
        <SkillItem title="Go" value="5%" />
      </Grid>
    </section>
  );
};

export default Skills;
