const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin')
const scoreCounter = document.querySelector('#counter');

let count = 0;

//Key Events for Avatar to Move
window.addEventListener('keyup', function(e){
	//Move Character Down - Adding 50 pixels to the top
	if(e.key === 'ArrowDown') {
		const currTop = position(avatar.style.top)
		avatar.style.top = `${currTop + 50}px`;			//set the avatar's top position
	} 
	//Move Character Up - Subtracting 50px
	else if(e.key === 'ArrowUp'){
		const currTop = position(avatar.style.top)
		avatar.style.top = `${currTop - 50}px`;			//set the avatar's top position
	}
	//Move Character Left - Subtract 50px
	else if(e.key === 'ArrowLeft'){
		const currLeft = position(avatar.style.left)
		avatar.style.left = `${currLeft - 50}px`;			//set the avatar's left position	
		avatar.style.transform = 'scale(-1, 1)';			//reverse an image direction to look left
	}
	//Move Character Right - Add 50px
	else if(e.key === 'ArrowRight'){
		const currLeft = position(avatar.style.left)
		avatar.style.left = `${currLeft + 50}px`;			//set the avatar's left position
		avatar.style.transform = 'scale(1, 1)';				//reverse an image direction to look right
	}
	//If The avatar touches the coin, move the coin to random location and keep track of the score;
	if(isTouching(avatar, coin)){
		moveCoin();
		count++;			
		scoreCounter.innerHTML = count;
	} 
})

//Function to Identify Position - remove the px from the string and turn to integer
const position = (pos) => {
	if(!pos) return 100;	//if the current avatar's top is an empty string, return 100 which is the position the avatar is at (look at css);
	return parseInt(pos.slice(0, -2));
};


//Function to Move Coin
const moveCoin = () => {
	const yDirection = Math.floor(Math.random() * window.innerHeight)	//show how much height user has in current window
	const xDirection = Math.floor(Math.random() * window.innerWidth)	//show how much width user has in current window
	coin.style.top = `${yDirection}px`
	coin.style.left = `${xDirection}px`
}

//Call Function When Page Intializes
moveCoin();


//Determine if Touching
function isTouching(a, b) {
	const aRect = a.getBoundingClientRect(); //returns the size of an element and its position relative to the viewport
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

	




