//Create one object named `photoSlideShow`
let photoSlideShow = {

	//An array called photoList that contains the names of the photos as strings
	photoList: ["photo1", "photo2", "photo3", "photo4"],

	//An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
	currentPhotoIndex: 0,

	//A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and logs the current photo name. Otherwise, log "End of slideshow";
	nextPhoto() {
		if (this.currentPhotoIndex < this.photoList.length - 1) {
			this.currentPhotoIndex++;
			console.log(this.photoList[this.currentPhotoIndex]);
		} else {
			console.log("End of slideshow");
		}
	},

	//A prevPhoto() function that does the same thing, but backwards.
	prevPhoto() {
		if (this.currentPhotoIndex > 0) {
			this.currentPhotoIndex--;
			console.log(this.photoList[this.currentPhotoIndex]);
		} else {
			console.log("Beginning of slideshow");
		}
	},

	//A function getCurrentPhoto() that returns the current photo from the list.
	getCurrentPhoto() {
		return this.photoList[this.currentPhotoIndex];
	}
};

console.log(photoSlideShow.getCurrentPhoto());
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();

