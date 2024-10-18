//div#box 객체를 가져온다.
let div_Box=window.document.getElementById("box");
let position=0;

function moveBox(){
    if(position<200){
        position+=1;
        div_Box.style.left=position+"px";
        //계속해서 moveBox() 불러주는 콜백기능 부여
    }else{
        position=0;
        div_Box.style.left=position+"px";
    }
    window.requestAnimationFrame(moveBox)
}

moveBox();