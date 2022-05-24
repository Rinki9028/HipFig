import { Api } from "./ComponentPages/Api";
import "./App.css";
import Header from './ComponentPages/Header'
import Home from "./ComponentPages/Home";
import HipFig from "./May/HipFig";

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App(){
    return (
      <>
        <h1 style={{height:"100px", marginTop:"-1%"}}><Header /></h1>
        <Home />
        <HipFig />
        <Api />
      </>
    )
  }                                                                                                                                          

export default App





// import "./App.css";
// import CheckItenery from "./Components/CheckItenery";
// import EduGaonTamp from "./Components/EduGaonTamp";
// import Itineraries from "./Components/Itineraries";
// import Navbar from "./Components/Navbar";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Itineraries />
//       <CheckItenery />
//       <EduGaonTamp/>
//       </>
//   );
// }

// export default App;
