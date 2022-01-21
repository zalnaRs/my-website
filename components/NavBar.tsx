import Image from 'next/image';

const NavBar: React.FC = () => {
  return (
    <nav className="flex gap-2 m-2 border-[1px] border-gray-200 p-2 rounded-full sticky top-1 backdrop-blur-lg bg-white">
      <Image
        src={'/profile.png'}
        width={40}
        height={40}
        className="rounded-full"
      />
      <ul className="flex gap-2 items-center">
        <li>
          <a
            href="#projects"
            className="transition-colors text-gray-600 hover:text-black"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="transition-colors text-gray-600 hover:text-black"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#socials"
            className="transition-colors text-gray-600 hover:text-black"
          >
            Socials
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
