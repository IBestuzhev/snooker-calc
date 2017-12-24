import { PotsList } from "../src/components/scores.potlist";
import { StatePot } from "../src/reducers/scores";
import { mount } from 'enzyme';
import * as React from "react";
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { createStore } from "redux";
import { Provider } from "react-redux";


Enzyme.configure({ adapter: new (Adapter as () => void)() });

describe("Render Scores", () => {
    it("PotList test", () => {
        let pots: StatePot[] = [
            {
                player: "left",
                score: 1,
                isFreeball: false,
                isFaul: false
            },
            {
                player: "left",
                score: 4,
                isFreeball: false,
                isFaul: false
            },
            {
                player: "left",
                score: 1,
                isFreeball: false,
                isFaul: false
            },
            {
                player: "left",
                score: 1,
                isFreeball: false,
                isFaul: false
            },
        ];
        let defaultStoreState = {
            score: {
                pots: pots
            }
        }
        let store = createStore((s = defaultStoreState) => s, defaultStoreState)
        let PotWrapper = mount(<Provider store={store}><PotsList player="left" popupOpener={() => {}} /></Provider>)
        expect(PotWrapper.find("Chip").length).toBe(3);  // One for every type and +1 for last pot
    })
})