var likeButton = document.getElementById('startLiking');
var stopLikeButton = document.getElementById('stopLiking');
//
if(likeButton) {
	likeButton.onclick = function() {
		self.port.emit('startLike');
		// TODO: enable disable button
		// TODO: disable self
		likeButton.disabled = true;
		stopLikeButton.disabled = false;
	}
}
//
if(stopLikeButton) {
	stopLikeButton.onclick = function() {
		self.port.emit('stopLike');
		likeButton.disabled = false;
		stopLikeButton.disabled = true;
	}
}


