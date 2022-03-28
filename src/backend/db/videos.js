import { v4 as uuid } from "uuid";
// Image Import
import one from "assets/videos/one.jpg";
import two from "assets/videos/two.png";
import three from "assets/videos/three.png";
import four from "assets/videos/four.jpg";
import five from "assets/videos/five.png";
import six from "assets/videos/six.png";
import seven from "assets/videos/seven.jpg";
import eight from "assets/videos/eight.jpg";
import nine from "assets/videos/nine.jpg";

//Import Video
import nineVid from "assets/videos/nine.webp";

// Profile Pic import
import profile1 from "assets/profiles/profile1.jpeg";
import profile2 from "assets/profiles/profile2.jpeg";
import profile3 from "assets/profiles/profile3.jpeg";
import profile4 from "assets/profiles/profile4.jpeg";
import profile5 from "assets/profiles/profile5.jpeg";
import profile6 from "assets/profiles/profile6.jpeg";
import profile7 from "assets/profiles/profile7.jpeg";
import profile9 from "assets/profiles/profile9.jpeg";

/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: uuid(),
    title:
      "S1MPLE IS ADDICTED TO KNIFE KILLS!! KENNYS DOESN'T MISS CS:GO PRO SCENE!! Twitch Recap CSGO",
    url: "https://www.youtube.com/watch?v=iqugp3AcM9s",
    thumbnail: one,
    channel: "vLADOPARD",
    profile: profile1,
    category: "streaming",
    views: "20K",
    uploadTime: "2 weeks",
    playbackTime: 36,
    likes: "43,289",
  },
  {
    _id: uuid(),
    title:
      "PS5 Gameplay - Call Of Duty Vanguard Japan Jungle Mission Gameplay 4K 60FPS",
    url: "https://www.youtube.com/watch?v=50qC_tE9ypw",
    thumbnail: two,
    channel: "GameClips",
    profile: profile2,
    category: "streaming",
    views: "50K",
    uploadTime: "6 weeks",
    playbackTime: 8,
    trending: true,
    likes: "4,289",
  },
  {
    _id: uuid(),
    title:
      "SPIDER-MAN MILES MORALES PS5 Walkthrough Gameplay Part 1 - INTRO (Playstation 5)",
    url: "https://www.youtube.com/watch?v=qN3Y1DrMCX8",
    thumbnail: three,
    channel: "theRadBrad",
    profile: profile3,
    category: "gameplay",
    views: "4K",
    uploadtime: "2 months",
    playbackTime: 56,
    trending: false,
    likes: "289",
  },
  {
    _id: uuid(),
    title: "PlayStation 5 Review: Next Gen Gaming!",
    url: "https://www.youtube.com/watch?v=MepGo2xmVJw",
    thumbnail: four,
    channel: "Marques Brownlee",
    profile: profile4,
    category: "review",
    views: "70K",
    uploadTime: "1 year",
    playbackTime: 12,
    trending: false,
    likes: "89,289",
  },
  {
    _id: uuid(),
    title: "The Impossible Razer Laptop",
    url: "https://www.youtube.com/watch?v=e5AQNDOP1nA",
    thumbnail: five,
    channel: "Dave2D",
    profile: profile5,
    category: "review",
    views: "900K",
    uploadTime: "6 months",
    playbackTime: 6,
    trending: true,
    likes: "23,289",
  },
  {
    _id: uuid(),
    title: "Batman: Arkham Knight (PS5) 4K HDR Gameplay",
    url: "https://www.youtube.com/watch?v=LSeVJxnnJiM",
    thumbnail: six,
    channel: "FA GAMEZ",
    profile: profile6,
    category: "gameplay",
    views: "1.2M",
    uploadTime: "1 month",
    playbackTime: 14,
    trending: true,
    likes: "3,489",
  },
  {
    _id: uuid(),
    title: "Hype vs Reality - Keychron K2 Keyboard Review",
    url: "https://www.youtube.com/watch?v=cKjc9UFhZpY",
    thumbnail: seven,
    channel: "Hardware Canucks",
    profile: profile7,
    category: "accessories",
    views: "1.8M",
    uploadTime: "5 months",
    playbackTime: 9,
    trending: true,
    likes: "8,289",
  },
  {
    _id: uuid(),
    title: "Razer DeathAdder V2 - STILL The Best Gaming Mouse After 14 Years?",
    url: "https://www.youtube.com/watch?v=Ic-Y3osvnFk",
    thumbnail: eight,
    channel: "Hardware Canucks",
    profile: profile7,
    category: "accessories",
    views: "400K",
    uploadTime: "2 years",
    playbackTime: 18,
    trending: false,
    likes: "889",
  },
  {
    _id: uuid(),
    title: "THE BEST PRO ACES OF 2022! (INSANE PLAYS!) - CS:GO",
    url: "https://www.youtube.com/watch?v=2DMW3rvrEVc",
    thumbnail: nine,
    channel: "Snipe2DieTV - CS:GO Channel",
    profile: profile9,
    category: "gameplay",
    views: "7K",
    uploadTime: "22 hours",
    playbackTime: "12",
    trending: true,
    video: nineVid,
    likes: "76,006",
  },
];
