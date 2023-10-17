function isSimilar(arrX, arrY) {
	const x = JSON.stringify(arrX);
	const y = JSON.stringify(arrY);
	 return x === y ? true : false;
	
}