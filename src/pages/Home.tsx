import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h3>So, you want to travel to</h3>
      <h1 className="uppercase">space</h1>
      <p className="text-md text-center">
        Let's face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we'll give you a truly out of this world
        experience!
      </p>
      <Link
        to={"/destination"}
        className="mt-16 flex h-52 w-52 items-center justify-center rounded-full bg-white hover:cursor-pointer"
      >
        <p className="p-4 font-headline text-4xl uppercase text-black">
          Explore
        </p>
      </Link>
    </div>
  );
};

export default Home;
