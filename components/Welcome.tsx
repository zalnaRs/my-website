const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-start justify-center h-screen items-center lg:ml-0 ml-4 gap-2">
      <h1 className="sm:text-8xl text-4xl font-bold" data-aos="fade-up">
        Welcome,
      </h1>
      <h2
        className="sm:text-8xl text-4xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {"I'm "}
      </h2>
      <h3
        className="sm:text-8xl text-4xl"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        zalnaRs
      </h3>
    </div>
  );
};

export default Welcome;
