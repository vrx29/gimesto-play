import styles from "./App.module.css";
import { MockmanApp, Header } from "components";
import { Route, Routes } from "react-router";
import { Home, Error404, Discover, Trending } from "pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Discover />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        <Route path="/mockman" element={<MockmanApp />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
