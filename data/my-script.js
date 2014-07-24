var likeButton = document.querySelector('.dating-button-sympathy');
if(!likeButton) {
	console.log('likeButton was not found');
} else {
	var likeButtonParent = likeButton.parentElement;
	//
	var startLikingLabel = 'Начать лайкать';
	var stopLikingLabel = 'Закончить лайкать'
	var roboButton = document.createElement('a');
	roboButton.className = 'standard_star blue-button dating-button-common';
	roboButton.innerHTML = startLikingLabel;
	roboButton.style = 'padding-left: 10px;';
	likeButtonParent.insertBefore(roboButton, likeButton);
	//
	var intervalId = null;
	roboButton.onclick = function() {
		if(!intervalId) {
			intervalId = setInterval(function() {
				likeButton.click();
			}, 500);
			roboButton.innerHTML = stopLikingLabel;
		} else {
			clearInterval(intervalId);
			intervalId = null;
			roboButton.innerHTML = startLikingLabel;			
		}
	}
}



