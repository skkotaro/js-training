//極座標 r と theta をプロパティにもち、ゲッターとセッターをもつ読み書き可のアクセサプロパティとしてデカルト座標 x と y をもつオブジェクトを実装しなさい。のテスト
import { polar } from "./index.ts";
describe("極座標 r と theta をプロパティにもち、ゲッターとセッターをもつ読み書き可のアクセサプロパティとしてデカルト座標 x と y をもつオブジェクトのテスト", () => {
    it("x と y のゲッターの確認", () => {
        let polarObj1 = Object.create(polar);
        polarObj1.r = Math.sqrt(2);
        polarObj1.theta = Math.PI / 4; // 45度
        expect(polarObj1.x).toBeCloseTo(1, 4); // √2 * 5 / 2
        expect(polarObj1.y).toBeCloseTo(1, 4); // √2 * 5 / 2
    });

    it("x のセッターの確認", () => {
        let polarObj2 = Object.create(polar);
        polarObj2.x = 3;
        expect(polarObj2.r).toBeCloseTo(3, 4);
        expect(polarObj2.theta).toBeCloseTo(0, 4);
        expect(polarObj2.y).toBeCloseTo(0, 4);
    });

    it("y のセッターの確認", () => {
        let polarObj3 = Object.create(polar);
        polarObj3.y = 4;
        expect(polarObj3.r).toBeCloseTo(4, 4);
        expect(polarObj3.theta).toBeCloseTo(Math.PI / 2, 4);
        expect(polarObj3.x).toBeCloseTo(0, 4);
    });
    //xとyを両方設定した場合の確認
    it("x と y を両方設定した場合の確認", () => {
        let polarObj4 = Object.create(polar);
        polarObj4.x = Math.sqrt(8);
        polarObj4.y = Math.sqrt(8);
        expect(polarObj4.r).toBeCloseTo(4, 4);
        expect(polarObj4.theta).toBeCloseTo(Math.PI / 4, 4); // 45度
    });
    it("NaN を設定した場合のエラー確認", () => {
        expect(() => { polar.x = NaN; }).toThrowError("x must not be NaN");
        expect(() => { polar.y = NaN; }).toThrowError("y must not be NaN");
    });
})