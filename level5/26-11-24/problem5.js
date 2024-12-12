let mat1= [
    [3, 5, -2],
    [1, 4, 7],
    [-3, 2, 6]
];
let mat2 = [
    [2, -1, 4],
    [-3, 6, -1],
    [5, -2, 0]
];
let m1=mat1.length;
let m2=mat1[0].length;
let n1=mat2.length;
let n2=mat2[0].length;
const result = Array.from({ length: m1 }, ()   => Array(n2).fill(0));
for (let i = 0; i < m1; i++) {
    for (let j = 0; j < n2; j++) {
        for (let k = 0; k < m2; k++) {
            result[i][j] += mat1[i][k] * mat2[k][j];
        }
    }
}
console.log(result);