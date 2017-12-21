import * as React from "react";
import { connect } from 'react-redux';

export interface HelloProps { compiler: string; framework: string; }

const mapStateToProps = (state: any) => state.base;
  

let _Hello: React.SFC<HelloProps> = (props) => <h1>Hello, from {props.compiler} and {props.framework} :D !</h1>;
export const Hello = connect(mapStateToProps, {})(_Hello);