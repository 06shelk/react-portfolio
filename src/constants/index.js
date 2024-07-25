import port01 from "../assets/img/port01.png";
import port02 from "../assets/img/port02.png";
import port03 from "../assets/img/port03.png";
import port04 from "../assets/img/port04.png";
import port05 from "../assets/img/port05.png";
import port06 from "../assets/img/port06.png";

export const skipText = [
  {
    title: "#header",
    text: "헤더 영역 바로가기",
  },
  {
    title: "#intro",
    text: "소개 영역 바로가기",
  },
  {
    title: "#skill",
    text: "스킬 영역 바로가기",
  },
  {
    title: "#project",
    text: "프로젝트 영역 바로가기",
  },
  {
    title: "#contact",
    text: "연락처 영역 바로가기",
  },
  {
    title: "#footer",
    text: "푸터 영역 바로가기",
  },
]


export const headerNav = [
    {
      title: "about",
      url: "#about",
    },
    {
      title: "skill",
      url: "#skill",
    },
    {
      title: "project",
      url: "#project",
    },
    {
      title: "contact",
      url: "#contact",
    },
];


export const introText = [
  {
    title: "HELLO",
    sp: "I'M SEOLHWA"
  },
  {
    title: "PERSONALITY",
    sp: "POSITIVE"
  },
  {
    title: "DREAM",
    sp: "BOUNDLESS"
  },
  {
    title: "HOVER ME",
    sp: "BLOG",
    a: "https://seolstudy.tistory.com/",
  },
  {
    title: "ARCHIVING",
    sp: "GITHUB",
    a: "https://github.com/06shelk/",
  }
]


export const aboutText = [
  {
    title: "이설화",
    img: "user",
  },
  {
    title: "2006.02.17",
    img: "cakeBirthday",
  },
  {
    title: "서울특별시 구로구",
    img: "home",
  },
  {
    title: "w2232@e-mirim.hs.kr",
    img: "envelope",
  },
  {
    title: "010-2673-4349",
    img: "phoneCall",
  }
]




export const skillText = [
  {
    title: "HTML",
    per: "90%",
  },
  {
    title: "CSS",
    per: "85%",
  },
  {
    title: "JAVASCRIPT",
    per: "85%",
  },
  {
    title: "REACT",
    per: "70%",
  },
  {
    title: "PYTHON",
    per: "75%",
  },
  {
    title: "JAVA",
    per: "40%",
  },
  {
    title: "C",
    per: "30%",
  },
  {
    title: "PHP",
    per: "65%",
  },
  {
    title: "SPRING",
    per: "20%",
  },
];


export const projectText = [
 
  {
    title: "GEMMI",
    img: port01,
    desc: [
      "주식 초보자들이 개념을 쉽게 익힐 수 있는 웹사이트입니다. ",
      "주식 관련 용어를 쉽게 익히도록 도와주는 단어 학습과 주식 시뮬레이션 게임을 포함하고 있습니다. ",
      "NODEJS를 통한 웹서버 구축을 할 수 있었습니다. ",
    ],
    period: "2024.02 ~ 2024.06",
    tech: "REACT, SCSS, NODEJS",
    work: "주식 api 사용, 컴포넌트 구현, 이름 입력 기능, 단어 게임, DB에 이름 저장",
    person: "3",
    myWork: " 주식 어휘 모음 및 주식 단어 게임 기능, 랭킹 기능",
    source: "GEMMI",
    view: "https://github.com/06shelk/ITShow-project"
  },
  {
    title: "말로 하세요",
    img: port02,
    desc : [
      "음성을 활용한 2가지 게임으로 구성된 웹서비스입니다. ",
      "사람과의 대화를 통해서만 진행할 수 있는 게임을 컴퓨터 음성 API를 활용하여 만들고자 하였습니다. ",
      "webkit api를 사용하여 목소리를 인식합니다.",
      "",
    ],
    period: "2024.02 ~ 2024.06",
    tech: "HTML, CSS, JAVASCRIPT, PHP",
    work: "사용자 음성 인식을 통한 단어 확인, 끝말잇기 게임 기능, 발음테스트 기능, 게임 랭킹 기능",
    myWork: "발음테스트 기능,사용자 음성 인식 기능",
    person: "3",
    source: "말로 하세요",
    view: "https://github.com/Please-say/pleaseSay"
  },
  {
    title: "PORTFOLIO",
    img: port03,
    desc: [
      "포토폴리오 웹서비스입니다. ",
      "react-router-dom을 사용하여 라우터 기능을 구현했습니다. ",
      "GSAP와 SCSS를 사용하여 디자인을 꾸몄습니다. ",
    ],
    period: "2024.06 ~ 2024.07",
    person: "1",
    tech: "REACT, SCSS, GSAP",
    source: "PORTFOLIO",
    view: "https://github.com/06shelk/react-portfolio"
  },
  {
    title: "하루한곡",
    img: port04,
    desc: [
      "하루에 한 곡 노래를 추천하는 웹서비스입니다. ",
      "사람들이 새로운 음악을 경험하고 음악 취향을 확장시키도록 돕기 위해서 만들었습니다. ",
      "사용자의 로그인 정보와 커뮤니티 기능을 위해 php와 mysql을 처음 사용해보며 언어를 익힐 수 있었습니다. ",
    ],
    period: "2023.09 ~ 2023.11",
    tech: "HTML, CSS, JAVASCRIPT, PHP",
    work: "하루에 한 곡 노래 추천 기능, playlist 기능, 커뮤니티 기능, 로그인 기능",
    myWork: "로그인 기능, 커뮤니티 기능, 하루 한 곡 노래 저장 기능",
    source: "하루한곡",
    person: "2",
    view: "https://github.com/06shelk/OneSongADay"
  },
  {
    title: "패션세대",
    img: port05,
    desc: [
      "패션 유행에 대해 알아보는 웹서비스입니다. ",
      "간단한 이야기 형식을 통해 세대를 쉽게 이해할 수 있습니다. ",
      "media-query를 사용하여 다양한 화면 레이아웃을 나타냈습니다. ",
    ],
    period: "2023.09~ 2023.11",
    tech: "HTML, CSS, JAVASCRIPT",
    work: "반응형 레이아웃",
    myWork: "레이아웃 구성, 메인화면 기능 구현",
    source: "패션세대",
    person: "2",
    view: "https://github.com/06shelk/fashion-generation_Project",
  },
  {
    title: "단어놀이팡",
    img: port06,
    desc: [
      "아동이 단어를 쉽게 외울 수 있도록 돕는 웹서비스입니다. ",
      "slick-slider 라이브러리를 사용하여 이미지 슬라이드 구현했습니다. ",
      "낚시 게임 : 움직이는 요소 기능",
      "과일 게임 : 화면 안에서의 좌표 값을 랜덤으로 받아서 화면에 나오는 요소 기능",
      "순서 게임 : 정해진 시간 안에 화면에 나타나는 요소 기능",
    ],
    period: "2023.09~ 2023.11",
    tech: "HTML, CSS, JAVASCRIPT",
    myWork: "이미지 슬라이드 구현, 낚시 게임, 과일 게임",
    source: "단어놀이팡",
    person: "2",
    view: "https://github.com/06shelk/2023-WSM-Project-Playingwithwords",
  },
  
];
