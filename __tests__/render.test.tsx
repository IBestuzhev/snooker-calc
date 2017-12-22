import { PotsList } from "../src/components/scores";
import { StatePot } from "../src/reducers/scores";
import { mount } from 'enzyme';
import * as React from "react";
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';


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
        ];
        let PotWrapper = mount(<PotsList pots={pots} />)
        expect(PotWrapper.find("Chip").length).toBe(2);
    })
})