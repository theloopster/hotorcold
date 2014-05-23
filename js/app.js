
$(document).ready(function(){
	var randNum;
	var guesses = [];
	var newGame = function(){
		randNum = 1+Math.floor(Math.random()*100);
		guesses =[];
		console.log(randNum);
		$('#guessButton').fadeIn(50);
		$('#guessList').empty();
		$('#count').text(guesses.length);
	};
		newGame();
		
		
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
	$('.newGame').click(function(){
			newGame();
	});
	$('form').submit(function(e){
		event.preventDefault();
	})
	$('#guessButton').click(function(){
		var userGuess = $('input').val();
		console.log(userGuess);
		if (isNaN(+userGuess)||+userGuess %1 !=0||+userGuess<1||+userGuess>100){
			alert("Come on!");
		} else {
			guesses.push(userGuess);
			console.log(guesses);

		if(guesses[guesses.length-1]!=randNum){
			
			
			var delta = Math.abs(randNum-guesses[guesses.length-1]);
			if(delta > 50) {
				response = "Freezing";
			} else if (delta > 30) {
				response = "Cold";
			} else if	(delta > 20) {
				response = "Warm";
			} else if	(delta > 10){
				response = "Hot";
			} else if (delta >5) {
				response = "Very Hot";
			} else if (delta >0) {
				response = "On Fire!";
			}
			}
			 else {
				response = "Bravo!";
				$('#guessButton').fadeOut(200);
			};
 
		$('#guessList').prepend(guesses[guesses.length-1]+"  "+response+'<br>');
		$('#count').text(guesses.length);
		$('#userGuess').val("").focus();
	}
});
});




