// Generate random numbers between 1 and 6 for both dice
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

// Update the dice images based on the random numbers
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

// Determine the winner and update the heading text accordingly
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML="It's a Draw!";
}   

// Reload the page when refresh button is clicked
var refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', function () {
    // Use location.reload() to refresh the current page
    location.reload();
});

