import havardArt from "./data/harvardArt"
import GalleryNavigation from "./components/GalleryNavigation";
import harvardArt from "./data/harvardArt";

function App(prop) {
  return (
    <GalleryNavigation  galleries={harvardArt.records}/>
  );
}

export default App;
