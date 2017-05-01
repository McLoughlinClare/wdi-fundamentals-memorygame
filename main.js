console.log("Up and running!");

var cards = [
{
	rank:"queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{ 
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king", 
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
//array to store the cards that have been turned.
var cardsInPlay = [];

//if 2 cards are in play, function to see if the cards have matched.
var checkForMatch = function(){
	
	if (cardsInPlay[0]===cardsInPlay[1]){
		alert("You found a match!");
	}
	else {
		alert ("Sorry, try again");
	}
};

//function to flip over card to reveal picture underneath.
var flipCard = function(){
	cardId = this.getAttribute('data-id');
	console.log("User Flipped " +cards[cardId].rank + ' of ' +cards[cardId].suit);
	console.log("the image is " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute ('src', cards[cardId].cardImage);
	//function to see if 2 cards have been played, call checkForMatch and then clear suit.
	if (cardsInPlay.length === 2){
	checkForMatch();
	cardsInPlay = [];
}
};

//Function to create the game board. Loop through cards to create array, with event listener
//to listen for a click, to flip the board.
var createBoard = function(){
	for (var i = 0; i< cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
}

createBoard();