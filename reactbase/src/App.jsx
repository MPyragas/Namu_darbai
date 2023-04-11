import "./App.css";
import Duprops from "./Components/Duprops";
import LabasZuiki from "./Components/LabasZuiki";
import Trysprops from "./Components/Trysprops";
import ZebraiBebrai from "./Components/ZebraiBebrai";

function App() {
  return (
    <div className="App">
      <LabasZuiki text="Labas, Zuiki!" />
      <ZebraiBebrai colornum={1} />
      <ZebraiBebrai colornum={2} />
      <Duprops text1="As esu pirmasis tekstas" text2="O as esu antrasis tekstas" />
      <Trysprops text1="Spalvingas tekstas" text2="Spalvingesnis tekstas" color="green" />
    
    </div>
  );
}

export default App;
