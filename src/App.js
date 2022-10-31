import Dropdown from "./components/Dropdown";
import { top100Films } from "./data";

function App() {
  return (
   <>
    <Dropdown options={top100Films} onChange={(vals) => { console.log(vals)}} multiple/>
   </>
  );
}

export default App;
