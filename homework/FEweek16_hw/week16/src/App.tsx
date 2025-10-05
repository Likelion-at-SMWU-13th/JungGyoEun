import "./App.css";
import { Platform, type Platform as PlatformType } from "./types/Platform";

interface LoveProgram {
  title: string;
  season: number;
  isOngoing: boolean;
  favoriteCouple: string;
  myRating: string;
  platform: PlatformType;
}

const myLovePrograms: LoveProgram[] = [
  {
    title: "환승연애",
    season: 4,
    isOngoing: true,
    favoriteCouple: "조유석♡곽민경",
    myRating: "⭐️⭐️⭐️⭐️⭐️",
    platform: Platform.TVING,
  },
  {
    title: "하트시그널",
    season: 4,
    isOngoing: true,
    favoriteCouple: "김현우♡오영주",
    myRating: "⭐️⭐️⭐️⭐️⭐️",
    platform: Platform.TVING,
  },
  {
    title: "하트페어링",
    season: 1,
    isOngoing: false,
    favoriteCouple: "안지민♡이제연",
    myRating: "⭐️⭐️⭐️⭐️⭐️",
    platform: Platform.TVING,
  },
  {
    title: "내 새끼의 연애",
    season: 1,
    isOngoing: true,
    favoriteCouple: "전수완♡이탁수",
    myRating: "⭐️⭐️",
    platform: Platform.TVING,
  },
  {
    title: "솔로지옥",
    season: 4,
    isOngoing: false,
    favoriteCouple: "김진영♡신슬기",
    myRating: "⭐️⭐️⭐️",
    platform: Platform.NETFLIX,
  },
  {
    title: "연애남매",
    season: 1,
    isOngoing: false,
    favoriteCouple: "박재형♡김지원",
    myRating: "⭐️⭐️⭐️⭐️",
    platform: Platform.WAVVE,
  },
];

function introduceLoveProgram(item: LoveProgram[]): void {
  console.log("연친자의 시청 연프를 소개합니다..😽 \n");
  item.forEach((item) => {
    console.log(`🎬 제목: ${item.title}`);
    console.log(`⏳ 시즌: ${item.season}`);
    console.log(`▶️ 방영 중: ${item.isOngoing ? "Yes!" : "No!"}`);
    console.log(`👩‍❤️‍👨 최애 커플: ${item.favoriteCouple}`);
    console.log(`⭐ 개인 평점: ${item.myRating}`);
    console.log(`📺 플랫폼: ${item.platform}\n`);
    console.log(`\n`);
  });
}

function App() {
  introduceLoveProgram(myLovePrograms);
  return <div></div>;
}

export default App;
