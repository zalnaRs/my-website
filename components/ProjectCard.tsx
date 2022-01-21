import Card from './Card';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
}) => (
  <Card>
    <a href={link} className="flex flex-col items-center justify-center">
      <h1 className="text-xl">{title}</h1>
      <hr className="w-6" />
      <p>{description}</p>
    </a>
  </Card>
);

export default ProjectCard;
