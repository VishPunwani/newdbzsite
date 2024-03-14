import Loader from "./Loader.jsx";
import Button from "./Button.jsx";
import Background from "./Background.jsx";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Background />
      <Button />
      <Loader />
    </div>
  );
}

export default App;
