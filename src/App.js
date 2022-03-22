import "./App.css";
import { MockmanApp } from "components";
import { Route, Routes } from "react-router";
import { Home, Error404 } from "pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mockman" element={<MockmanApp />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
