
function Random(){
    var randomNumberP1 = Math.floor(Math.random()*6+1);
    var randomNumberP2 = Math.floor(Math.random()*6+1);
    var str1= randomNumberP1.toString();
    var str2= randomNumberP2.toString();
    document.querySelector(".img1").setAttribute("src", "images/dice"+ str1 +".png"); 
    document.querySelector(".img2").setAttribute("src", "images/dice"+ str2 +".png"); 
    if (randomNumberP1 > randomNumberP2) {
        document.querySelector(".container h1").innerHTML = "Player 1 Win!!";
    }
    else if(randomNumberP2 > randomNumberP1){
        document.querySelector(".container h1").innerHTML = "Player 2 Win!!";
    }
    else {
        document.querySelector(".container h1").innerHTML = "TIE";
    }
    return ("randomNumberP1 randomNumberP2");
}
