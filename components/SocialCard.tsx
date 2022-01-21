import Card from './Card';

interface SocialCardProps {
  link: string;
  time: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ children, link, time }) => (
  <Card>
    <a href={link}>
      {children}
      <hr className="w-6" />
      <p>{time}</p>
    </a>
  </Card>
);

export default SocialCard;
