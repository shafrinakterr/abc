import { useState } from "react";
import Header from "./Component/Header/Header";
import NewsBorad from "./Component/NewsBorad/NewsBorad";
import Footer from "./Component/footer/Footer";
import useNewsQuery from "./Component/hooks/useNewsQuery";
import useSearchQuery from "./Component/hooks/useSearchQuery";

const App = () => {
  const [category, setCategory] = useState("general");
  const { news, loading } = useNewsQuery(category);
  const [text, setText] = useState("");
  const { searchData } = useSearchQuery(text);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDebounce = (searchingText) => {
    setText(searchingText);
  };
  const data = text;
  return (
    <>
      <Header onDebouce={handleDebounce} handleChange={handleChange} />
      <div className="container mx-auto  gap-8 lg:gap-14">
        {searchData && searchData.length === 0 && <p className="text-5xl w-1/2 text-red-700  capitalize">{data} Data is not found</p>}
        <NewsBorad searchData={searchData} news={searchData ? searchData : news} loading={loading} />
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
