// 1-1. 페이지변수
let pg_num = 0;
// 1-2. 휠상태 변수
let sts_wheel = 0;
// 1-3. 전체페이지수
let total_pg;
// 1-4. 전체 section 요소
let ele_page;

const domFn = {
  // 요소선택함수 ////////
  qs: (x) => document.querySelector(x),
  qsEl: (el, x) => el.querySelector(x),
  qsa: (x) => document.querySelectorAll(x),
  qsaEl: (el, x) => el.querySelectorAll(x),

  // 이벤트셋팅함수
  addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),

  // 바운딩 위치값 함수
  getBCR: (ele) => ele.getBoundingClientRect().top,

   // 옵셋탑값 반환함수
   getOT: (ele) => ele.offsetTop,
}; /////// domFn 객체 /////////////

const stage = domFn.qs("header>h1");
// // console.log("대상:", stage);
const myText = "BEANPOLE";
let hcode = "";
let seqNum = 0;
hcode += `<a href="main.html">`;
for (let x of myText) {
  if (x == " ") hcode += "&nbsp;&nbsp;";
  else hcode += 
  `<span style='transition-delay:${seqNum * 0.2}s'>${x}</span>`;

  seqNum++;
}
// // console.log(hcode);
///////////////////////////////////////////////////////////////////////
hcode+= `</a>`;
stage.innerHTML = hcode;

setInterval(() => {
  stage.classList.add("on");
}, 2000);

setInterval(() => {
  stage.classList.remove("on");
}, 4000);
console.log(stage);