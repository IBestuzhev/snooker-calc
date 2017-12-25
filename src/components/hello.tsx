import * as React from "react";
import { Bundle } from "./utils";

const WelcomeContent = require("../content/welcome.md").default;
const RulesContent = require("bundle-loader?lazy&name=rules!../content/rules.md");

export const Hello: React.SFC = (props) => (
    <div>
    <WelcomeContent />
    <hr/>
    <Bundle showLoader={true} load={RulesContent} >{
        (Rules: any) => (
            (Rules)
            ?
            <Rules />
            :
            <span>loading...</span>
        )
    }</Bundle>
    </div>
);