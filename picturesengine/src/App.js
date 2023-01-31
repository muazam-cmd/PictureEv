import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import searchImages from './api';
import ImageList from './Components/ImageList';

function App() {

  const [images, setImage] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImage(result);
  }
  return <div>
    <SearchBar onSubmit={handleSubmit} />
    <ImageList images={images} />
  </div>
}

export default App;