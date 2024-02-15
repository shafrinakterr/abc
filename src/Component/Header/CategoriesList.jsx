/* eslint-disable react/prop-types */

const CategoriesList = ({handleChange}) => {

  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center text-xl justify-center gap-5  font-semibold lg:text-base">
        <li>
          <button  onClick={handleChange} value="general">
            General
          </button>
        </li>
        <li>
          <button  onClick={handleChange} value="business">
            Business
          </button>
        </li>
        <li>
          <button  onClick={handleChange} value="entertainment">
            Entertainment
          </button>
        </li>
        <li>
          <button  onClick={handleChange} value="health">
            Health
          </button>
        </li>
        <li>
          <button  onClick={handleChange} value="science">
            Science
          </button>
        </li>
        <li>
          <button  onClick={handleChange} value="sports">
            Sports
          </button>
        </li>
        <li>
          <button  onClick={handleChange} value="technology">
            Technology
          </button>
        </li>
      </ul>
     
    </div>
  );
};

export default CategoriesList;
