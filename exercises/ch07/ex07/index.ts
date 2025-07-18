export function selectionSort (arr: number[]): number[] {
    const result = [...arr]; // 元の配列を変更しないためにコピーを作成
    const n = result.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (result[j] < result[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [result[i], result[minIndex]] = [result[minIndex], result[i]];
        }
    }
    return result;
}