import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import Gallery1 from "./components/Gallery1";
import Gallery2 from "./components/Gallery2";
import Gallery3 from "./components/Gallery3";



function App() {
  return (
    <div className="App">
      <CustomNavbar />
<Gallery1  movieSearch="harry%20potter" />
<Gallery2 />
<Gallery3 />
     
    </div>
  );
}

export default App;
