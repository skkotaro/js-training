function sameNameVariables() {
    // グローバルのスコープでsameを定義
    const same: string = "global";
    console.log(same);
    {
        // ブロックのスコープでsameを定義
        const same = "in block";
        console.log(same); // in block
    }
    //ブロック内のsameはブロックのスコープで定義されているため、グローバルのsameを参照する
    console.log(same);
}

sameNameVariables();

