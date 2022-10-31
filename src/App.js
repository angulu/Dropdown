import Dropdown from "./components/Dropdown";
import { top100Films } from "./data";
import "./App.css";

function App() {
  return (
   <main>
      <Dropdown options={top100Films} onChange={() => {}} width={500} multiple/>
      <Dropdown options={top100Films} onChange={() => {}} width={500}/>
   </main>
  );
}

export default App;
