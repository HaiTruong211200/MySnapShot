import { useContext, useEffect } from "react";
import Gallery from "./Gallery";
import Loader from "./Loader";
import PhotoContext from "../context/Context";

function Body({ searchItem }) {
  const { images, loading, handleSearch } = useContext(PhotoContext);

  useEffect(() => {
    handleSearch(searchItem);
  }, [searchItem]);

  return <div>{loading ? <Loader /> : <Gallery images={images} />}</div>;
}

export default Body;
