
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
  }; /////// domFn 객체 /////////////


  const myvid = document.querySelector('#myvid');
myvid.addEventListener('timeupdate',()=>{
let isStop = myvid.paused;
    console.log('동영상재생중~',isStop);
 if(isStop){
        location.href = 'main.html';
 } 
}); 
/* 
// 대상: #myvid
const myvid = document.querySelector('#myvid');
// 이벤트 : timeupdate -> 동영상재생중 발생이벤트
myvid.addEventListener('timeupdate',()=>{
    // 1. 동영상 멈춤여부 알아내기 : 비디오요소.paused -> 멈춘상태면 true
    let isStop = myvid.paused;
    console.log('동영상재생중~',isStop);
    // 2. 멈춘상태이면 페이지이동 
    if(isStop){
        location.href = 'main.html';
    } // if 문
}); // timeupdate 함수  */


// const enter = domFn.qs('#enter');
// const span = domFn.qs('span');
// console.log('대상:',enter,span);

// 2. 이벤트 설정 및 함수구현 
// domFn.addEvt(span,'mouseover',()=>{
//     span.classList.add('on');
// }); // mouseover 이벤트 함수 
// domFn.addEvt(span,'mouseout',()=>{
//     span.classList.remove('on');
// }); // mouseover 이벤트 함수 

// const welcome = domFn.qs('#welcome');
// console.log(welcome);
 
// setInterval(() => {
//     welcome.style = `
//         display: block;
//         transition: 2s;
//         animation: wel-ani 2s forwards ;`
// }, 38500);

// setInterval(() => {
//     span.style = `
//         display: block;
//         transition: 2s;
//         animation: en-ani 2s forwards ;`
// }, 39500);