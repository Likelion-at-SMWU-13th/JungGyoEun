import "./App.css";
import styled from "styled-components";

type Platform = "TVING" | "Netflix" | "Wavve";

interface LoveProgram {
  title: string;
  season: number;
  isOngoing: boolean;
  favoriteCouple: string;
  myRating: [number, string];
  platform: Platform;
}

const myLovePrograms: LoveProgram[] = [
  {
    title: "환승연애",
    season: 4,
    isOngoing: true,
    favoriteCouple: "조유석♡곽민경",
    myRating: [
      10,
      "\n시즌2가 너무나도 유명하지만 진짜는 1이라고 생각합니다.. 날것 그대로의 연프를 느껴보실 수 있을겁니🤔",
    ],
    platform: "TVING",
  },
  {
    title: "하트시그널",
    season: 4,
    isOngoing: true,
    favoriteCouple: "김현우♡오영주",
    myRating: [
      9,
      "\n개인적으로는 시즌 2를 추천드립니다. 핱시는 겨울에 보는 맛이 있기 때문에 ㅎㅎ..",
    ],
    platform: "TVING",
  },
  {
    title: "하트페어링",
    season: 1,
    isOngoing: false,
    favoriteCouple: "안지민♡이제연",
    myRating: [
      9,
      "\n왜 안 떴는지 모르겠지만!!! 결혼을 전제로하는 연애 프로그램이라 더 진지해서 조앗어요.. 본업들도 다들 훌륭해서 뭔가 몰입이 잘 되는 느낌!",
    ],
    platform: "TVING",
  },
  {
    title: "내 새끼의 연애",
    season: 1,
    isOngoing: true,
    favoriteCouple: "전수완♡이탁수",
    myRating: [
      5,
      "\n저는 연프 없이는 못 사는 사람이라 봤을 뿐.. 흡사 모솔연애를 보는 느낌이었습니다 ㅎ",
    ],
    platform: "TVING",
  },
  {
    title: "솔로지옥",
    season: 4,
    isOngoing: false,
    favoriteCouple: "김진영♡신슬기",
    myRating: [6, "과몰입은 아니지만 도파민용으로는 꽤나 흥미로와요"],
    platform: "Netflix",
  },
  {
    title: "연애남매",
    season: 1,
    isOngoing: false,
    favoriteCouple: "박재형♡김지원",
    myRating: [7, "가족끼리 서로 찐조언이 오갈 때에 보는 맛이 있는 프로그램!!"],
    platform: "Wavve",
  },
  {
    title: "모태솔로지만 연애는 하고 싶어",
    season: 1,
    isOngoing: false,
    favoriteCouple: "없어요 . . .",
    myRating: [8, "연애프로그램이라기보다는 개인의 성장일지?..ㅎㅎ"],
    platform: "Netflix",
  },
];

function introduceLoveProgram(item: LoveProgram[]): void {
  console.log("연친자의 시청 연프를 소개합니다..😽 \n");
  item.forEach((item) => {
    console.log(`🎬 제목: ${item.title}`);
    console.log(`⏳ 시즌: ${item.season}`);
    console.log(`▶️ 방영 중: ${item.isOngoing ? "Yes!" : "No!"}`);
    console.log(`👩‍❤️‍👨최애 커플: ${item.favoriteCouple}`);
    console.log(`⭐ 개인 후기: ${item.myRating}`);
    console.log(`📺 플랫폼: ${item.platform}\n`);
    console.log(`\n`);
  });
}

function App() {
  introduceLoveProgram(myLovePrograms);

  return (
    <Container>
      <Title>🦁멋사 2학기 5주차 과제🦁</Title>
      <Comment>제가 시청한 연프를 콘솔창에 소개합니다!</Comment>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  background: #ffdba2;
  color: #333;
  font-family: "Pretendard", sans-serif;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #e55400;
`;

const Comment = styled.p`
  font-size: 1.2rem;
  color: #444;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px 15px;
  border-radius: 12px;
`;
