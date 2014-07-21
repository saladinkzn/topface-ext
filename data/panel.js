var intervalId;
var likeButton = document.getElementById('startLiking');
if(likeButton) {
	likeButton.onclick = function() {
		self.port.emit('startLike');
		// TODO: enable disable button
		// TODO: disable self
	}
}
var stopLikeButton = document.getElementById('stopLiking');
if(stopLikeButton) {
	stopLikeButton.onclick = function() {
		self.port.emit('stopLike');
	}
}


