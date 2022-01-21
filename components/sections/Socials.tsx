import Grid from '../Grid';
import SectionLabel from './SectionLabel';
import { ChatIcon } from '@heroicons/react/solid';
import SocialCard from '../SocialCard';
import Card from '../Card';

const Socials: React.FC = () => {
  return (
    <section
      className="flex flex-col"
      data-aos="fade"
      data-aos-delay="400"
      id="socials"
    >
      <SectionLabel icon={<ChatIcon fill="black" width={20} />}>
        Socials
      </SectionLabel>
      <Grid>
        <SocialCard
          time="Check out my repos"
          link={'https://github.com/zalnaRs'}
        >
          Github
        </SocialCard>
        <SocialCard time="1-2 Days" link={'https://discord.gg/ydwXQXC'}>
          Join my Discord server
        </SocialCard>
        <SocialCard time="1-3 Days" link={'https://t.me/zalnaRs'}>
          Telegram
        </SocialCard>
        <SocialCard
          time="A Long Time (thezalnar@hotmail.com)"
          link={'mailto:thezalnar@hotmail.com'}
        >
          Send an email
        </SocialCard>
      </Grid>
    </section>
  );
};

export default Socials;
