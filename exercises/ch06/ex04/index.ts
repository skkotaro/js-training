// Object.defineProperty() を使うと、writable 属性/enumerable 属性/configurable 属性を設定してオブジェクトのプロパティを定義できる。
// このメソッドを使って明示的に各属性を設定したプロパティを定義し、プロパティの変更、削除、hasOwnProperty と propertyIsEnumerable の結果に対してどのように影響するか確認するコードを書きなさい。


for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
            const obj:any = {};
            Object.defineProperty(obj, "x", {
                value: 1,
                writable: Boolean(i),
                enumerable: Boolean(j),
                configurable: Boolean(k),
            });
            console.log(
                `writable:${Boolean(i)}, enumerable:${Boolean(j)}, configurable:${Boolean(k)}`
            );
            console.log("hasOwnProperty: " + obj.hasOwnProperty("x")); // true
            console.log("propertyIsEnumerable: " + obj.propertyIsEnumerable("x")); // true
            //プロパティの変更
            try {
                console.log("プロパティの変更後");
                obj.x = 2;
            } catch (e) {
                console.log(e);
            } finally {
                console.log("hasOwnProperty: " + obj.hasOwnProperty("x"));
                console.log("propertyIsEnumerable: " + obj.propertyIsEnumerable("x"));
            }
            //プロパティの削除
            try {
                console.log("プロパティの削除後");
                delete obj.x;
            } catch (e) {
                console.log(e);
            } finally {
                console.log("hasOwnProperty: " + obj.hasOwnProperty("x"));
                console.log("propertyIsEnumerable: " + obj.propertyIsEnumerable("x"));
            }
        }
    }
}

// writable:false, enumerable:false, configurable:false
// hasOwnProperty: true
// propertyIsEnumerable: false
// writable:false, enumerable:false, configurable:true
// hasOwnProperty: true
// propertyIsEnumerable: false
// writable:false, enumerable:true, configurable:false
// hasOwnProperty: true
// propertyIsEnumerable: true
// writable:false, enumerable:true, configurable:true
// hasOwnProperty: true
// propertyIsEnumerable: true
// writable:true, enumerable:false, configurable:false
// hasOwnProperty: true
// propertyIsEnumerable: false
// writable:true, enumerable:false, configurable:true
// hasOwnProperty: true
// propertyIsEnumerable: false
// writable:true, enumerable:true, configurable:false
// hasOwnProperty: true
// propertyIsEnumerable: true
// writable:true, enumerable:true, configurable:true
// hasOwnProperty: true
// propertyIsEnumerable: true