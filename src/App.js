import "./App.js";

// import HomePage from "./Pages/Home/Index";
import Graph from "./Pages/test/Graph";
import PersonsList from "./Component/PersonsList";
import PersonPost from "./Component/PersonPost";
import PersonDelete from "./Component/PersonDelete";


function App(){
  return (
    <div className='App'>
      {/* <HomePage/> */}
      {/* <Graph/> */}
      {/* <PersonsList/> */}
      <PersonPost/>
      {/* <PersonDelete/> */}
    </div>
  )
}

export default App;