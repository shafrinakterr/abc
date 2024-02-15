/* eslint-disable react/prop-types */

import LeftBoard from "./LeftBoard";
import RightBoard from "./RightBoard";

const NewsBorad = ({ news, loading}) => {
  
  

  return (
    <main className="my-10 ">
      {loading ? (
        <p className="text-5xl font-semibold text-center">Loading...</p>
      ) : (
        <div className="container grid grid-cols-12 gap-8 mx-auto  ">
          <LeftBoard news={news}> </LeftBoard>

          <RightBoard  ></RightBoard>
        </div>
      )}
    </main>
  );
};

export default NewsBorad;
