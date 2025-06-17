// 任意のオブジェクトを受け取り、そのオブジェクトのすべての独自プロパティ（列挙不可、プロパティ名が Symbol のものを含む）および列挙可能な継承プロパティのプロパティ名の配列を返す関数を作成しなさい。
// 継承プロパティのプロパティ名については Symbol のものは必須とはしない。

export function getAllPropertyName(obj:object) : string[] {
    const result : string[] = [];

    // 独自プロパティを取得
    const ownProperty: any = Object.getOwnPropertyNames(obj);
    for(let i = 0; i < ownProperty.length; i++) {
        result.push(ownProperty[i]);
    }

    // 列挙可能な継承プロパティを取得
    const ownSymbolProperty: any = Object.getOwnPropertySymbols(obj);
    for(let i = 0; i < ownSymbolProperty.length; i++) {
        result.push(ownSymbolProperty[i].toString());
    }

    // プロトタイプチェーンをたどって列挙可能なプロパティを取得
    let protoProperty: any = Object.getPrototypeOf(obj);
    while (protoProperty !== null) {
        const enumerableProperties: any = Object.keys(protoProperty);
        for (let i = 0; i < enumerableProperties.length; i++) {
            if (!result.includes(enumerableProperties[i])) {
                result.push(enumerableProperties[i]);
            }
        }
        protoProperty = Object.getPrototypeOf(protoProperty);
    }

    return result;
}
