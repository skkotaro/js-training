/* eslint no-sparse-arrays: 0 */
import { sumMatrix, multiplyMatrix } from "./index.ts";

describe("行列の加算と掛け算のテスト", () => {
  describe("sumMatrixのテスト", () => {
    it("正しい行列の加算を確認", () => {
      const matrix1 = [
        [1, 2, 3],
        [4, 5, 6],
      ];
      const matrix2 = [
        [7, 8, 9],
        [10, 11, 12],
      ];
      const expected = [
        [8, 10, 12],
        [14, 16, 18],
      ];
      expect(sumMatrix(matrix1, matrix2)).toEqual(expected);
    });

    it("行列が空の場合はエラーをスロー", () => {
      const matrix1: number[][] = [];
      const matrix2 = [
        [1, 2],
        [3, 4],
      ];
      expect(() => sumMatrix(matrix1, matrix2)).toThrow("Both matrices must be non-empty.");
    });

    it("行列のサイズが一致しない場合はエラーをスロー", () => {
      const matrix1 = [
        [1, 2],
        [3, 4],
      ];
      const matrix2 = [
        [5, 6, 7],
        [8, 9, 10],
      ];
      expect(() => sumMatrix(matrix1, matrix2)).toThrow("Matrices must have the same dimensions.");
    });

    it("行列に数値以外の要素が含まれる場合はエラーをスロー", () => {
      const matrix1 = [
        [1, 2],
        [3, "invalid" as any],
      ];
      const matrix2 = [
        [5, 6],
        [7, 8],
      ];
      expect(() => sumMatrix(matrix1, matrix2)).toThrow("All elements must be numbers.");
    });
  });

  describe("multiplyMatrixのテスト", () => {
    it("正しい行列の掛け算を確認", () => {
      const matrix1 = [
        [1, 2, 3],
        [4, 5, 6],
      ];
      const matrix2 = [
        [7, 8],
        [9, 10],
        [11, 12],
      ];
      const expected = [
        [58, 64],
        [139, 154],
      ];
      expect(multiplyMatrix(matrix1, matrix2)).toEqual(expected);
    });

    it("行列が空の場合はエラーをスロー", () => {
      const matrix1: number[][] = [];
      const matrix2 = [
        [1, 2],
        [3, 4],
      ];
      expect(() => multiplyMatrix(matrix1, matrix2)).toThrow("Both matrices must be non-empty.");
    });

    it("行列のサイズが掛け算可能でない場合はエラーをスロー", () => {
      const matrix1 = [
        [1, 2],
        [3, 4],
      ];
      const matrix2 = [
        [5, 6],
      ];
      expect(() => multiplyMatrix(matrix1, matrix2)).toThrow("Not much length of matrix1[0] and matrix2.length");
    });
  });
});