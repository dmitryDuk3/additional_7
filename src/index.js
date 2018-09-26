module.exports = function solveSudoku(matrix) {
result = matrix;
for (let i = 0; i < 9; i++) {
	for (let j = 0; j < 9; j++) {
		if (matrix[i][j] == 0) {
			result[i][j] = funcOne(result[i]);
		}
	}
}
  
let buffer = [];
for (let i = 0; i < 9; i++) {
	for (let j = 0; j < 9; j++) {
		if (matrix[j][i].length > 1) {
			buffer.push(i);
		}
	}
}
  
var array = [];
var subArray = [];
for (var j = 0; j < buffer.length; j++) {
	for (var i = 0; i < 9; i++) {
		if (!Array.isArray(matrix[i][buffer[j]])) {
			subArray.push(matrix[i][buffer[j]]);
		}
	}
	if (subArray.length != 0) {
    array.push(subArray);
  }
	var subArray = [];
}

for (var i = 0; i < 9; i++) {
	for (var j = 0; j < buffer.length; j++) {
		if (Array.isArray(matrix[i][buffer[j]])) {
			if (Array.isArray(array[j])) {
				result[i][buffer[j]] = funcTwo(array[j], matrix[i][buffer[j]]);
				if (Array.isArray(result[i][buffer[j]])) {
					if (result[i][buffer[j]].length == 1) {
            result[i][buffer[j]] = result[i][buffer[j]];     
          }
        }
      }
		}
	}
	if (subArray.length != 0) {
    array.push(subArray);
  }
	var subArray = [];
}
  
  return result;
}

function funcOne(array) {
  let result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < array.length; i++) {
    let k = result.indexOf(array[i]);
    if (k !== -1) result.splice(k, 1);
  }
  return result;
}

function funcTwo(arrayOne, result) {
  for (let i = 0; i < arrayOne.length; i++) {
    let k = result.indexOf(arrayOne[i]);
    if (k !== -1) result.splice(k, 1);
  }
  return result;
}