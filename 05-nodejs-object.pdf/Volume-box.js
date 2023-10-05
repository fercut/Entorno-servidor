function volumeOfBox(sizes) {
	const {width, length, height} = sizes;
	return width * length * height;
}

// Test.assertEquals(volumeOfBox({width: 11,length: 1, height: 2}), 22)
// Test.assertEquals(volumeOfBox({width: 1, length: 5,  height: 3}), 15)
// Test.assertEquals(volumeOfBox({width: 2, length: 1,  height: 1}), 2)
// Test.assertEquals(volumeOfBox({width: 2, length: 6,  height: 5}), 60)
// Test.assertEquals(volumeOfBox({width: 2, length: 5,  height: 3}), 30)
// Test.assertEquals(volumeOfBox({width: 2, length: 5,  height: 1}), 10)