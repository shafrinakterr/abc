import { useState, useEffect } from "react";

const useSearchQuery = (search) => {
  const [searchData, setSearchData] = useState([]);
  

  useEffect(() => {
    const fetchNews = async () => {
     
      let url = "http://localhost:8000/v2/search?";
      if (search) {
        url += `q=${search}`;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        
        setSearchData(data.result);
        
      } catch (error) {
        console.error("Error fetching news:", error);
        
      }
    };

    fetchNews();
  }, [search]);

  return { searchData};
};

export default useSearchQuery;
