function checkTime(){
    let pattern = /^(a|aa)+$/;
    let text = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!";
    const start = performance.now();
    console.log(pattern.test(text));
    const end = performance.now();
    console.log(`実行時間: ${end - start}ミリ秒`);
}

checkTime();