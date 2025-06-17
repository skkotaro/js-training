export function sumMatrix(matrix1: number[][], matrix2: number[][]): any {
    let result: number[][] = [];
    if (matrix1.length === 0 || matrix2.length === 0) {
        throw new Error("Both matrices must be non-empty.");
    }
    for (let i = 0; i < matrix1.length; i++) {
        if (matrix1[i].length !== matrix2[i].length) {
            throw new Error("Matrices must have the same dimensions.");
        }
        for (let j = 0; j < matrix1[i].length; j++) {
            if (typeof matrix1[i][j] !== 'number' || typeof matrix2[i][j] !== 'number') {
                throw new Error("All elements must be numbers.");
            }
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
}

export function multiplyMatrix(matrix1: number[][], matrix2: number[][]): any {
    const result: number[][] = [];
    if (matrix1.length === 0 || matrix2.length === 0) {
        throw new Error("Both matrices must be non-empty.");
    }
    if (matrix1[0].length !== matrix2.length) {
        throw new Error("Not much length of matrix1[0] and matrix2.length");
    }
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrix1[0].length; k++) {
                console.log(matrix1[i][k]+"*"+matrix2[k][j]+"="+(matrix1[i][k] * matrix2[k][j]));
                sum += matrix1[i][k] * matrix2[k][j];
            }
                console.log("sum="+sum);
                result[i][j] = sum;
            }
    }
    console.log(result);
    return result;
}

const matrix1 = [
    [1, 2, 3],
    [4, 5, 6]
];
const matrix2 = [
    [7, 8],
    [9, 10],
    [11, 12]
];
multiplyMatrix(matrix1,matrix2);
