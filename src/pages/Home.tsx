import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col p-8 lg:mx-auto lg:w-9/12 lg:flex-row lg:justify-between">
      <div className="flex flex-col items-center gap-4 lg:w-1/2 lg:items-start ">
        <h3>So, you want to travel to</h3>
        <h1 className="uppercase lg:text-[15rem]">space</h1>
        <p className="text-center md:px-16 lg:p-0 lg:text-justify lg:leading-9">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex items-center justify-center lg:basis-2/4 lg:items-end lg:justify-end">
        <Link
          to={"/destination"}
          className="mt-16 flex h-52 w-52 items-center justify-center rounded-full bg-white hover:cursor-pointer md:mt-48 lg:m-0 lg:h-96 lg:w-96 "
        >
          <p className="p-4 font-headline text-4xl uppercase text-black lg:text-5xl">
            Explore
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
