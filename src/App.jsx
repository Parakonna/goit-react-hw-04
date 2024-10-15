
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchPhotos } from "../src/services/api"
import { InfinitySpin } from "react-loader-spinner";

//import ImageGallery from "./components/ImageGallery/ImageGallery";


const App = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [page, setPage] = useState(1);

  console.log(articles);
  
  useEffect(() => {
    async function fetchPhotos() {
      try {
        setLoading(true);
        const data = await fetchPhotos("react");
        setArticles(data);
        console.log(Object.data);
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, [])
  
  return (
    <>
     <SearchBar onSubmit={fetchPhotos}/> 
     {loading && (<InfinitySpin />)}
     {error && (<p>Error:&quot;{error}&quot</p>)}
  
</>
);
};

export default App

 //{articles !== null && (<ImageGallery articles={articles} />)}