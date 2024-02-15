/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import thumb from "../../assets/thumb.png";
const RightBoard = () => {
  const [science, setScience] = useState([]);
  

  useEffect(() => {
    const fetchScience = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/v2/top-headlines?category=science"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setScience(data.articles);
      } catch (error) {
        console.error("Error fetching science news:", error);
      }
    };

    fetchScience();
  }, []);
  return (
    <div className="col-span-12 self-start xl:col-span-4">
      {science?.map((artical, index) => (
        <div key={index} className="space-y-6 divide-y-2 divide-[#D5D1C9]">
          <div className="col-span-12 mb-6 md:col-span-8">
            <img className="w-full" src={artical.urlToImage ? artical.urlToImage: thumb} alt="thumb" />

            <div className="col-span-12 mt-6 md:col-span-4">
              <a href={artical.url} target="_blank">
                <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                  {artical.title}
                </h3>
              </a>
              <p className="text-base text-[#292219]">
                {artical.description}
              </p>
              <p className="mt-5 text-base text-[#94908C]">{artical.publishedAt}</p>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default RightBoard;
