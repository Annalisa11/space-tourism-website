import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="mt-32 flex w-full flex-col items-center justify-center gap-8">
      <div className="font-dosis text-6xl uppercase text-white">Oh no..</div>
      <div className="font-dosis text-3xl uppercase text-white">
        Nothing to see here
      </div>
      <Link
        className="font-dosis px- rounded-md border-2 border-white p-4 px-8 text-lg uppercase text-white "
        to={"/"}
      >
        home
      </Link>
    </div>
  );
};

export default NoMatch;
