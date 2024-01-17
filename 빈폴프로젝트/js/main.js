// main JS 




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

///////////////////////////////////////////////////////////////////////////////////////////////////

const abtn = domFn.qsa(".btn");
const slider = domFn.qs(".slider");
const indic = domFn.qsa('.indic>ul>li');
// console.log(indic);

domFn.qsaEl(slider,'.main-slide').forEach((ele,idx)=>ele.setAttribute('data-seq',idx))


abtn.forEach((ele) => {
  ele.onclick = () => {
    let isR = ele.classList.contains("btn-right");
    let temp = domFn.qsa(".slider>div");

    // // console.log(ele.classList.contains('btn-right'));
    if (isR) {
      slider.style.left = "-100%";
      slider.style.transition = ".5s ease-in-out";
      
      setTimeout(() => {
        slider.appendChild(domFn.qsa(".slider>div")[0]);
        slider.style.left = "0";
        slider.style.transition = "none";
      }, 600);
    } 
      else {
      slider.insertBefore(temp[temp.length - 1], temp[0]);
      slider.style.left = "-100%";
      slider.style.transition = "none";

      setTimeout(() => {
        slider.style.left = "0";
        slider.style.transition = ".6s ease-in-out";
      }, 0);
    }

    // 변경된 순번 슬라이드 다시 읽기
    temp = domFn.qsa(".slider>div");

    // 인디케이터 on넣기
    let nowNum = temp[isR?1:0].getAttribute('data-seq');
    // console.log('순번:',nowNum);
    indic[nowNum].classList.add('on');
    indic.forEach(ele=>{
      // // console.log(ele.isSameNode(indic[nowNum]));
      if(!ele.isSameNode(indic[nowNum]))ele.classList.remove('on')
    }); //////// forEach ///////////

    
    clearAuto();
  }; ///////// click /////////////
}); //////////// forEach ////////////

let autoI, autoT;

function autoSlide() {
  autoI = setInterval(() => {
    slider.style.left = "-100%";
    slider.style.transition = ".6s ease-in-out";
    let one = domFn.qsa(".slider>div");
    let tempIndic = domFn.qsa('.indic>ul>li');
    one.forEach((ele,idx)=>{
      if(idx==1){
        let num = ele.getAttribute('data-seq');
        tempIndic.forEach((e,i)=>{
          if(Number(num) == i){
            e.classList.add('on');
          }
          else{
            e.classList.remove('on');
          }
        });
      }
    });
    setTimeout(() => {
      slider.appendChild(domFn.qsa(".slider>div")[0]);
      slider.style.left = "0";
      slider.style.transition = "none";
    }, 600);
  }, 7000);
}

autoSlide();

function clearAuto() {
  clearInterval(autoI);
  clearTimeout(autoT);
  autoT = setTimeout(autoSlide, 3000);
}


///////////////////////////////////////////////////////////////////////////////////////
// 스크롤 등장이벤트 
const scAct = domFn.qsa(".cbox");
const papa = domFn.qs('.main3');

// console.log(img);

// 스크롤 등장 액션 이벤트 설정
domFn.addEvt(window, "scroll", ()=>{
  let pos1 = papa.offsetTop;
  // console.log(pos1,papa.scrollTop);
  
  for (let x of scAct) addOn(x);
});
function addOn(ele) {
  let bTop = domFn.getBCR(ele);
  if (bTop < (window.scrollY/6)*3) ele.classList.add("on");
   else ele.classList.remove("on");

  }

//////////////////////////////////////////////////////////////////

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
/////////////////////////////////////////////////////////////////////
const sun = domFn.qs('.main2>.main2_img img');
const spapa = domFn.qs('.main2');

domFn.addEvt(window,'scroll',()=>{
  let scTop = this.scrollY;
  // console.log(scTop);
  if(scTop > spapa.offsetTop)
  sun.classList.add('on');
  else   
  sun.classList.remove('on');
})
//////////////////////////////////////////////////////////////
const img = domFn.qsa('.main4>div');
const mama = domFn.qs('.main4');

domFn.addEvt(window, "scroll", ()=>{
  for (let x of img) addOn2(x);
});

function addOn2(img) {
  let bTop = this.scrollY;
  if (bTop > (mama.offsetTop/3)*2)
  setInterval(() => {
    img.classList.add("on");
  }, 2000);
  else 
  img.classList.remove("on");
  // console.log(mama.offsetTop);
}