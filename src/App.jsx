import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
// import ToggleSection from "./components/ToggleSection";
import FetchUsers from "./components/FetchUsers";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <h1 className="text-center">A simple react-test EXAMPLE</h1>

      <label htmlFor="myCheck">Check me</label>
      <input type="checkbox" name="checkbox" id="myCheck" checked={checked} onChange={() => setChecked(!checked)} />

      {/* <ToggleSection /> */}
      <FetchUsers />
    </>
  );
}

export default App;
