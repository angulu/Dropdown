import Dropdown from "./components/Dropdown";
import { top100Films } from "./data";
import "./App.css";

function App() {
  return (
   <main>
    <section>
      <Dropdown options={top100Films} onChange={(vals) => {}} multiple/>
    </section>

    <section>
      <Dropdown options={top100Films} onChange={(vals) => {}}/>
    </section>
   </main>
  );
}

export default App;
