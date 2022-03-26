import { Heart, History, Home, Playlist, Trending, Watch } from "assets/icons";
import { v4 as uuid } from "uuid";
export const sideBarNav = [
  {
    _id: uuid(),
    linkTo: "/",
    linkName: "Discover",
    icon: <Home />,
  },
  {
    _id: uuid(),
    linkTo: "trending",
    linkName: "Trending",
    icon: <Trending />,
  },
  {
    _id: uuid(),
    linkTo: "history",
    linkName: "History",
    icon: <History />,
  },
  {
    _id: uuid(),
    linkTo: "playlist",
    linkName: "Playlist",
    icon: <Playlist />,
  },
  {
    _id: uuid(),
    linkTo: "liked",
    linkName: "Liked",
    icon: <Heart />,
  },
  {
    _id: uuid(),
    linkTo: "watch-later",
    linkName: "Watch Later",
    icon: <Watch />,
  },
];
