import { useFetch } from "hooks";

const { createContext, useContext } = require("react");

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const {
    state: { data: videos, error },
  } = useFetch({
    api: "/api/videos",
    property: "videos",
  });

  const {
    state: { data: categories },
  } = useFetch({
    api: "/api/categories",
    property: "categories",
  });

  return (
    <VideoContext.Provider value={{ videos, categories }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
