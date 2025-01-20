let reset = document.querySelector(".reset");
let boxes = document.querySelectorAll(".box")
let diswin = document.querySelector(".winner")
let restart = document.querySelector(".restart");
let msg = document.querySelector(".msg-container");

let turn0 = true;
let winpatter = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
let count = 0;
boxes.forEach(box => {
  box.addEventListener("click",()=>{

    if (turn0) {
      box.innerText="0"
      turn0=false;
      if (box.innerText="0") {
        box.style.color="red"
      }
      
    } else {
      box.innerText="X"
      turn0=true
       if (box.innerText="X") {
        box.style.color="green"
      }
    }
   
    checkWin();
    box.disabled=true;
    count++
    console.log(count)
    if (count==9&& !checkWin()) {
      diswin.innerText="Draw"
      msg.classList.remove("hide")
    }
  })
});
let disable =()=>{
  for (const box of boxes) {
    box.disabled=true
  }
  
}
let enable =()=>{
  for (const box of boxes) {
    box.disabled=false;
    box.innerText=""
  }
  msg.classList.add("hide")
  count=0;
}

    
    let pat1val;
    let pat2val;
    let pat3val;
function checkWin() {
  for (const pattern of winpatter) {
     pat1val=boxes[pattern[0]].innerText;
     pat2val=boxes[pattern[1]].innerText;
     pat3val=boxes[pattern[2]].innerText;
  
    if (pat1val!=""&&pat2val!=""&&pat3val!="") {
      if (pat1val===pat2val&&pat2val===pat3val) {
        diswin.innerText=`winner is ${pat1val}`
        msg.classList.remove("hide")
        disable()
        return true
      }
    }
    
  }
 
}


restart.addEventListener("click",enable);
reset.addEventListener("click",enable);

