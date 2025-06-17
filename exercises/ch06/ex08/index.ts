export function restrict(target: any, template: any): any {
    if (target == null || template == null) {
        throw new TypeError("Cannot convert undefined or null to object");
    }

    const result = Object(target);
    const templateKeys = Object.keys(template);

    // 変更先のキーを取得
    for (const key of Object.keys(result)) {
        // templateに含まれていない場合はキーは削除
        if (!templateKeys.includes(key)) {
            delete result[key];
        }
    }

    return result;
}

export function substract(target: any, ...sources: any[]): any {
    if (target == null) {
        throw new TypeError("Cannot convert undefined or null to object");
    }

    const result = Object(target);
    const resultKeys = Object.keys(result);

    for (const source of sources) {

        //null, undefinedのチェック
        if (source === null) continue;

        // sourceのキーを取得
        for (const key of Object.keys(source)) {

            if (resultKeys.includes(key)) {
                // sourceのキーがresultに存在する場合は削除
                delete result[key];
            }
        }
    }

    return result;
}