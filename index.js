var ran1=Math.floor(Math.random()*6)+1;
var ran2=Math.floor(Math.random()*6)+1;

function click1(){
  var image1= "dice"+ran1+".png";
  var dice1=document.querySelector(".dice1");
  dice1.setAttribute("src",image1);
  document.getElementsByTagName("button")[0].disabled=true;
  if(document.getElementsByTagName("button")[1].disabled){
    if(ran1>ran2){

      document.querySelector("h1").innerHTML="🚩Player 1 wins";
    }
    else if(ran1<ran2){

      document.querySelector("h1").innerHTML="Player 2 wins🚩";
    }
    else if(ran1==ran2){
      document.querySelector("h1").innerHTML="Draw!";
    }
    document.getElementsByTagName("button")[2].style.display="block";
  }

}
function click2(){
  var image2= "dice"+ran2+".png";
  var dice2=document.querySelector(".dice2");
  dice2.setAttribute("src",image2);
  document.getElementsByTagName("button")[1].disabled=true;
  if(document.getElementsByTagName("button")[0].disabled){

    if(ran1>ran2){

      document.querySelector("h1").innerHTML="🚩Player 1 wins";
    }
    else if(ran1<ran2){

      document.querySelector("h1").innerHTML="Player 2 wins🚩";
    }
    else if(ran1==ran2){
      document.querySelector("h1").innerHTML="Draw!";
    }

    document.getElementsByTagName("button")[2].style.display="block";
  }
}

function click3(){
  location.reload();
}
