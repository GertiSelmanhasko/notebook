import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notelist from "./components/Notelist";
import Notecreate from "./components/Notecreate";
import Noteedit from "./components/Noteedit";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notelist />} />
          <Route path="note/create" element={<Notecreate />} />
          <Route path="note/edit/:noteid" element={<Noteedit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
