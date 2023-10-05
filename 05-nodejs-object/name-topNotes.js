function getStudentsWithNamesAndTopNotes(students) {
	return students.map( ({ name, notes }) =>
		({
			name,
			topNote: Math.max(0,...notes)
		})
	)
}




// getStudentsWithNamesAndTopNotes([
//     { "name": "John", "notes": [3, 5, 4] },
//     { "name": "Max", "notes": [1, 4, 6] },
//     { "name": "Zygmund", "notes": [1, 2, 3] }
//   ])
//   ➞ [
//     { "name": "John", "topNote": 5 },
//     { "name": "Max", "topNote": 6 },
//     { "name": "Zygmund", "topNote": 3 }
//   ]