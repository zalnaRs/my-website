const Card: React.FC = ({ children }) => (
  <div className="transition-all shadow-md p-2 rounded-md border-[1px] border-gray-400 hover:border-black hover:shadow-lg cursor-pointer">
    {children}
  </div>
);

export default Card;
