/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import thumb from "../../assets/thumb_lg.png";
const LeftBoard = ({ news }) => {
  
  return (
    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
      {news?.map((article, index) => (
        <div key={index} className="col-span-12 grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4">
            <a href={article.url} target="_blank">
              <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                {article.title}
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">{article.description}</p>
            <p className="mt-5 text-base text-[#5C5955]">
              {article.publishedAt}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <img
              className="w-full"
              src={article.urlToImage ? article.urlToImage : thumb}
              alt="thumb"
            />

            <p className="mt-5 text-base text-[#5C5955]">
              Illustration: {article.author}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftBoard;
