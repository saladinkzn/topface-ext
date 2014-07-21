function like() {
	console.log('like');
	var likeButton = document.querySelector('.dating-button-sympathy');
	likeButton.click();
}

self.port.on('like', like);

