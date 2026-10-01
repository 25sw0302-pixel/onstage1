const programs = {
  1: {
    category: "특강",
    title: "스무 살의 첫 이력서",
    image: "https://picsum.photos/seed/onstage1/600/800",

    date: "2026년 10월 8일 (수) 오후 4시",
    place: "본관 3층 시청각실",
    duration: "90분",
    target: "2·3학년",
    capacity: "40명",
    price: "무료",

    intro1:
      "취업 담당 인사팀에서 8년을 일한 강사가 실제로 받아본 이력서 이야기를 합니다. 잘 쓴 이력서보다 흔한 실수를 먼저 봅니다.",

    intro2:
      "후반 30분은 각자 가져온 이력서를 그 자리에서 고쳐보는 시간입니다. 초안이 없어도 참여할 수 있습니다.",

    guide:
      "정원 40명으로 제한되며 신청자 우선 입장입니다. 신청 후 참석이 어려워지면 하루 전까지 알려주세요."
  },
  2: {
    category: "공연",
    title: "밴드 새벽 다섯 시",
    image: "https://picsum.photos/seed/onstage2/600/800",

    date: "2026년 10월 11일 (토) 오후 6시",
    place: "대강당",
    duration: "100분",
    target: "전교생 및 학부모",
    capacity: "200명",
    price: "3,000원",

    intro1:
      "결성 4년 차 3인조 밴드의 첫 학교 공연입니다. 자작곡 위주로 아홉 곡을 준비했습니다.",

    intro2:
      "공연 후 20분간 악기와 장비를 직접 만져볼 수 있는 시간이 있습니다.",

    guide:
      "정원 200명으로 제한되며 신청자 우선 입장입니다. 신청 후 참석이 어려워지면 하루 전까지 알려주세요."
  },

  3: {
    category: "워크숍",
    title: "하루 만에 만드는 도자 컵",
    image: "https://picsum.photos/seed/onstage3/600/800",

    date: "2026년 10월 15일 (수) 오후 3시",
    place: "본관 2층 미술실",
    duration: "120분",
    target: "전 학년",
    capacity: "16명",
    price: "8,000원 (재료비)",

    intro1:
      "물레 없이 손으로만 빚는 방식이라 처음이어도 괜찮습니다. 완성한 컵은 가마에서 구운 뒤 2주 후에 받습니다.",

    intro2:
      "앞치마는 준비되어 있습니다. 손톱이 긴 경우 작업이 어려울 수 있습니다.",

    guide:
      "정원 16명으로 제한되며 신청자 우선 입장입니다. 신청 후 참석이 어려워지면 하루 전까지 알려주세요."
  },

  4: {
    category: "특강",
    title: "알고리즘이 나를 고르는 방식",
    image: "https://picsum.photos/seed/onstage4/600/800",

    date: "2026년 10월 17일 (금) 오후 4시",
    place: "도서관 세미나실",
    duration: "80분",
    target: "전 학년",
    capacity: "30명",
    price: "무료",

    intro1:
      "추천 알고리즘이 무엇을 보고 무엇을 보여주는지, 실제 사례를 뜯어봅니다.",

    intro2:
      "각자 휴대폰의 추천 목록을 열어 비교해보는 시간이 포함되어 있습니다.",

    guide:
      "정원 30명으로 제한되며 신청자 우선 입장입니다. 신청 후 참석이 어려워지면 하루 전까지 알려주세요."
  },

  5: {
    category: "공연",
    title: "흥, 다시 — 국악 크로스오버",
    image: "https://picsum.photos/seed/onstage5/600/800",

    date: "2026년 10월 22일 (수) 오후 7시",
    place: "대강당",
    duration: "90분",
    target: "전교생 및 지역 주민",
    capacity: "200명",
    price: "무료",

    intro1:
      "가야금과 신시사이저가 함께 무대에 오릅니다. 판소리 다섯 대목을 현대적으로 재구성했습니다.",

    intro2:
      "1부는 원곡 그대로, 2부는 편곡 버전으로 같은 곡을 들려줍니다.",

    guide:
      "정원 200명으로 제한되며 신청자 우선 입장입니다. 신청 후 참석이 어려워지면 하루 전까지 알려주세요."
  },

  6: {
    category: "워크숍",
    title: "필름 카메라로 학교 찍기",
    image: "https://picsum.photos/seed/onstage6/600/800",

    date: "2026년 10월 25일 (토) 오전 10시",
    place: "운동장 집합 후 이동",
    duration: "180분",
    target: "전 학년",
    capacity: "12명",
    price: "12,000원 (필름·인화비)",

    intro1:
      "1회용 필름 카메라를 하나씩 받아 학교 안을 돌며 27컷을 다 씁니다. 찍은 사진은 되돌릴 수 없습니다.",

    intro2:
      "인화한 사진은 11월 중 학교 복도에 전시합니다.",

    guide:
      "정원 12명으로 제한되며 신청자 우선 입장입니다. 신청 후 참석이 어려워지면 하루 전까지 알려주세요."
  },

  7: {
    category: "특강",
    title: "빚 없이 시작하는 스무 살",
    image: "https://picsum.photos/seed/onstage7/600/800",

    date: "2026년 10월 29일 (수) 오후 4시",
    place: "본관 3층 시청각실",
    duration: "90분",
    target: "3학년",
    capacity: "40명",
    price: "무료",

    intro1:
      "첫 월급, 첫 카드, 첫 계약서를 앞둔 사람이 알아야 할 것들을 다룹니다.",

    intro2:
      "소액 대출 광고가 어떤 방식으로 만들어지는지 실제 문구를 놓고 분석합니다.",

    guide:
      "정원 40명으로 제한되며 신청자 우선 입장입니다. 신청 후 참석이 어려워지면 하루 전까지 알려주세요."
  },

  8: {
    category: "공연",
    title: "청소년 재즈 앙상블 정기연주회",
    image: "https://picsum.photos/seed/onstage8/600/800",

    date: "2026년 11월 5일 (수) 오후 6시 30분",
    place: "대강당",
    duration: "110분",
    target: "전교생 및 학부모",
    capacity: "200명",
    price: "무료",

    intro1:
      "지역 청소년 20명이 반년간 연습한 곡들을 연주합니다. 스탠더드 재즈 여섯 곡과 창작곡 두 곡입니다.",

    intro2:
      "중간 휴식 15분이 있습니다.",

    guide:
      "정원 200명으로 제한되며 신청자 우선 입장입니다. 신청 후 참석이 어려워지면 하루 전까지 알려주세요."
  },
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("받은 ID:", id);

const data = programs[id];

if (data) {
  document.getElementById("detail-image").src = data.image;
  document.getElementById("detail-image").alt = data.title;

  document.getElementById("detail-category").textContent = data.category;
  document.getElementById("detail-title").textContent = data.title;

  document.getElementById("detail-date").textContent = data.date;
  document.getElementById("detail-place").textContent = data.place;
  document.getElementById("detail-duration").textContent = data.duration;
  document.getElementById("detail-target").textContent = data.target;
  document.getElementById("detail-capacity").textContent = data.capacity;
  document.getElementById("detail-price").textContent = data.price;

  document.getElementById("detail-intro1").textContent = data.intro1;
  document.getElementById("detail-intro2").textContent = data.intro2;
  document.getElementById("detail-guide").textContent = data.guide;

} else {
  document.getElementById("detail-title").textContent =
    "프로그램을 찾을 수 없습니다.";
}