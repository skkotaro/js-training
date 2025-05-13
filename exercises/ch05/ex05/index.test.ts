import { objectEven } from "./index.ts";
it("例題をチェックする", () => {
    const o = { x: 1, y: 2, z: 3 };
    const answer = { y: 2 };
    expect(objectEven(o)).toEqual(answer);
    expect(o).toEqual({ x: 1, y: 2, z: 3 });
});