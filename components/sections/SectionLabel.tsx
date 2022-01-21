interface SectionLabelProps {
  icon: React.ReactNode;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ children, icon }) => (
  <>
    <div className="flex items-center">
      <span className="mr-1">{icon}</span>
      <h1 className="text-2xl">{children}</h1>
    </div>
    <hr className="mb-1 w-52" />
  </>
);

export default SectionLabel;
