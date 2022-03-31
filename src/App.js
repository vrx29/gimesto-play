import styles from "./App.module.css";
import { MockmanApp, Header } from "components";
import { Route, Routes } from "react-router";
import {
  Home,
  Error404,
  Discover,
  Trending,
  Login,
  SignUp,
  History,
  VideoPlayback,
  Liked,
} from "pages";
import { ProtectedRoute } from "routes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Discover />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/video/:videoId" element={<VideoPlayback />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/history"
            element={
              <ProtectedRoute path="/history">
                <History />
              </ProtectedRoute>
            }
          />
          <Route
            path="/liked"
            element={
              <ProtectedRoute path="/liked">
                <Liked />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error404 />} />
        </Route>
        <Route path="/mockman" element={<MockmanApp />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
