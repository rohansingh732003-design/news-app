import { useEffect,useState } from "react";
import NewsItem from "./newsitem";


const Newsboard = ({category}) => {

  const [articles, setArticles] = useState([]);

 useEffect(() => {
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=b44e9fcedb624c248319e81bf2371e5f`;
  // "https://newsapi.org/v2/top-headlines?country=us&apiKey=b44e9fcedb624c248319e81bf2371e5f"
  
  

  fetch(url)
    .then(response => response.json())
    .then(data => {
      
      setArticles(data.articles || []);
    })
    .catch(error => {
      console.error("Error fetching news:", error);
      setArticles([]);
    });
}, [category]);


  return (
    <>
     <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
    <div className="d-flex justify-content-center flex-wrap">
     
     {articles.length > 0 ? (
  articles.map((news, index) => (
    <NewsItem
      key={news.url}
      title={news.title}
      description={news.description}
      src={news.urlToImage}
      url={news.url}
    />
  ))
) : (
  <p className="text-center">Loading news...</p>
)}

    </div>
    </>
  )
}

export default Newsboard
