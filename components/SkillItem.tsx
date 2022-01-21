interface SkillItemProps {
  title: string;
  value: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ title, value }) => (
  <div className="flex w-min gap-1">
    <h1>{title}</h1>
    <div className={`h-full w-[1px] bg-gray-200`} />
    <p>{value}</p>
  </div>
);

export default SkillItem;
