import { actionFinalMiss } from "../src/actions/scores";
import { ACTION_FINAL_MISS } from "../src/actions/types";


describe("My Test case", () => {
    it("Check sum", () => {
        expect(1 + 2).toBe(3);
    })

    it("Check Action", () => {
        let action = actionFinalMiss(true)
        expect(action).toEqual({type: ACTION_FINAL_MISS, isMiss: true})
    })
})