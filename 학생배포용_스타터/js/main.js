const menuBtn = document.querySelector('#menuBtn');
const gnb     = document.querySelector('#gnb');

if (menuBtn && gnb) {        // 요소가 있을 때만 실행 (아래 설명 참고)

  menuBtn.addEventListener('click', function () {

  const menuBtn = document.querySelector('#menuBtn');
  const gnb     = document.querySelector('#gnb');

if (menuBtn && gnb) {

  menuBtn.addEventListener('click', function () {

    gnb.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', gnb.classList.contains('is-open'));

  });
}
  });

}


/* ───────────────────────────────────────────────────────────────
   ② 카테고리 필터              ▸ index.html 에서만 동작
   ─────────────────────────────────────────────────────────────── */

const chips = document.querySelectorAll('#filters .chip');
const cards = document.querySelectorAll('#cardGrid .card');

if (chips.length > 0) {

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {

      // 2-1. 누른 칩만 진하게
      chips.forEach(function (c) { c.classList.remove('is-active'); });
      chip.classList.add('is-active');

      // 2-2. 카드 걸러내기
      const want = chip.dataset.filter;
      cards.forEach(function (card) {
        const match = (want === 'all' || card.dataset.cat === want);
        card.classList.toggle('is-hidden', !match);
      });


    });
  });

}


/* ───────────────────────────────────────────────────────────────
   ③ 신청 폼 검사               ▸ apply.html 에서만 동작
   ───────────────────────────────────────────────────────────────
   ⚠ 시작하기 전에 apply.html 의 <form> 에 novalidate 를 붙이세요.
     그래야 브라우저 기본 오류 풍선 대신 우리가 만든 메시지가 나옵니다.
   ─────────────────────────────────────────────────────────────── */

const form        = document.querySelector('#applyForm');
const formScreen  = document.querySelector('#formScreen');
const doneScreen  = document.querySelector('#doneScreen');

/* 도우미 함수 ▸ 완성본 제공
   오류 표시를 켜고 끄는 일을 한 곳에 모아두었습니다.
   항목마다 같은 코드를 반복해서 쓰지 않기 위해서입니다. */
function setError(fieldEl, errorEl, show) {
  fieldEl.classList.toggle('has-error', show);
  errorEl.classList.toggle('is-show', show);
}

if (form) {

  form.addEventListener('submit', function (e) {

    e.preventDefault();
    /* ↑ 이 한 줄이 없으면 페이지가 새로고침되면서
         아무 일도 안 일어난 것처럼 보입니다. 절대 지우지 마세요. */

    let ok = true;   // 하나라도 틀리면 false 로 바꿀 예정


    /* ── 3-1. 이름 ▸ 완성본 제공. 나머지 항목은 이 형식을 따라 하세요 ── */
    const name    = document.querySelector('#name');
    const nameBad = name.value.trim() === '';        // 비어 있으면 true
    setError(name.closest('.field'), document.querySelector('#err-name'), nameBad);
    if (nameBad) ok = false;

    /* .trim() 은 앞뒤 공백을 지웁니다. 공백만 입력한 경우를 걸러냅니다.
       .closest('.field') 는 이 input을 감싸고 있는 .field 를 찾아 올라갑니다. */


    // 연락처
    const tel = document.querySelector('#tel');
    const telBad = !tel.checkValidity();
    setError(tel.closest('.field'), document.querySelector('#err-tel'), telBad);
    if (telBad) ok = false;

    // 이메일
    const email = document.querySelector('#email');
    const emailBad = !email.checkValidity();
    setError(email.closest('.field'), document.querySelector('#err-email'), emailBad);
    if (emailBad) ok = false;


    // 참가 인원
    const count = document.querySelector('#count');
    const n = Number(count.value);
    const countBad = !(n >= 1 && n <= 4) || count.value === '';
    setError(count.closest('.field'), document.querySelector('#err-count'), countBad);
    if (countBad) ok = false;


    // 희망 좌석
    const seat = document.querySelector('input[name="seat"]:checked');
    const seatBad = !seat;
    setError(document.querySelector('#err-seat').closest('.field'),
             document.querySelector('#err-seat'), seatBad);
    if (seatBad) ok = false;


    // 동의
    const agree = document.querySelector('#agree');
    const agreeBad = !agree.checked;
    setError(agree.closest('.field'), document.querySelector('#err-agree'), agreeBad);
    if (agreeBad) ok = false;



    /* ── 3-7. 하나라도 틀렸으면 여기서 멈춤 ▸ 완성본 ────────── */
    if (!ok) return;


    document.querySelector('#r-name').textContent  = name.value;
    document.querySelector('#r-tel').textContent   = tel.value;
    document.querySelector('#r-seat').textContent  = seat.value;
    document.querySelector('#r-count').textContent = count.value + '명';



    /* ── 3-9. 화면 바꾸기 ▸ 완성본 ────────────────────────────
       신청 폼을 숨기고 완료 화면을 보이게 합니다. */
    formScreen.classList.add('is-hidden');
    doneScreen.classList.remove('is-hidden');
    window.scrollTo(0, 0);

  });

}

const filterButtons = document.querySelectorAll(".chip");
const programCards = document.querySelectorAll(".card");

filterButtons.forEach(button => {
  button.addEventListener("click", function () {

    filterButtons.forEach(btn => {
      btn.classList.remove("is-active");
    });

    this.classList.add("is-active");

    const filter = this.dataset.filter;

    programCards.forEach(card => {
      const category = card.dataset.cat;

      if (filter === "all" || category === filter) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });

  });
});

/* ════════════════════════════════════════════════════════════════
   참고 : if (menuBtn && gnb) 같은 줄은 왜 있나요?
   ════════════════════════════════════════════════════════════════
   이 파일 하나를 세 페이지가 함께 씁니다.
   그런데 #applyForm 은 apply.html 에만 있고, #filters 는 index.html 에만
   있습니다. 없는 요소를 붙잡으려 하면 이런 오류가 납니다.

       Cannot read properties of null

   그래서 '있을 때만 실행하라'는 조건을 감싸 둔 것입니다.
   오류 메시지는 F12 → Console 탭에서 볼 수 있습니다.
   ════════════════════════════════════════════════════════════════ */
