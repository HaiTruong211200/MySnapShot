import React, { useState } from "react";
import axios from "axios";
import Context from "./Context";
//import dotenv from "dotenv";

//dotenv.config();
const API_KEY = "bC2c30S8VlnXnC61FBTjaZDAnGafy4yNfFDY2pNa2rTqkHBKJmzbDAUI";

function Provider({ children }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.pexels.com/v1/search`, {
        headers: {
          Authorization: `${API_KEY}`,
        },
        params: {
          query: query,
          per_page: 20,
          page: 1,
        },
      });
      const imgUrls = response.data.photos.map((element) => element.src.medium);
      setImages(imgUrls);
      setLoading(false);
    } catch (err) {
      console.error("Error", err);
    }
  };
  return (
    <Context.Provider value={{ images, loading, handleSearch }}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
