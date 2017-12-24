import * as React from "react";
import { connect } from 'react-redux';
import { Bundle } from "./utils";

const WelcomeContent = require("../content/welcome.md").default;
const RulesContent = require("bundle-loader?lazy&name=rules!../content/rules.md");

export interface HelloProps { compiler: string; framework: string; }

const mapStateToProps = (state: any) => state.base;
  
console.log(RulesContent)

let _Hello: React.SFC<HelloProps> = (props) => (
    <div>
    <h1>Hello, from {props.compiler} and {props.framework} :D !</h1>
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
export const Hello = connect(mapStateToProps, {})(_Hello);