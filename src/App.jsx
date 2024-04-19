import "./App.css";
import Navbar from "./components/Navbar";
import Security from "./components/Security";
import NewComponent from "./components/NewComponent";

function App() {
  return (
    <>
      <Navbar />
      <div id="container" className="bg-gray-100 h-[100vh] relative top-[60px]">
        <NewComponent />
        <Security />
      </div>
    </>
  );
}

export default App;
