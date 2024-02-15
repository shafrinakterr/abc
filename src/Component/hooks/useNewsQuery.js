import { useState, useEffect } from "react";

const useNewsQuery = (category) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true); 
      let url = 'http://localhost:8000/v2/top-headlines?';
      if (category) {
        url += `category=${category}`; 
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        setNews(data.articles);  
        setLoading(false); 
        
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false); 
      }
    };

    fetchNews();
  }, [category]);

  return { news, loading };
};

export default useNewsQuery;
