import { StateGlobal } from "../reducers/index";
import { StateStarter } from "../reducers/starter";
import { connect } from "react-redux";
import * as React from "react"
import { actionSetStart } from "../actions/starter";
import { Redirect } from "react-router";
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from "material-ui/Grid";

declare var publicPath: string;

let mapStateToProps: (state: StateGlobal) => StateStarter = state => state.starter
let connector = connect(mapStateToProps, {actionSetStart})

export class StarterDesign extends React.Component<StateStarter & {actionSetStart: typeof actionSetStart}, {fireRedirect: boolean}> {
    constructor(props: any) {
        super(props)
        this.state = {fireRedirect: false}
    }
    render () {
        let left: HTMLInputElement, right: HTMLInputElement, reds: HTMLInputElement;
        let {fireRedirect} = this.state;
        if (fireRedirect) {
            return <Redirect to={publicPath + "scores"} />
        }
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                this.props.actionSetStart(
                    parseInt(left.value),
                    parseInt(right.value),
                    parseInt(reds.value)
                )
                this.setState({fireRedirect: true})
            }}>
                <Grid container justify="flex-end">
                <Grid item xs={12} sm={4}>
                    <TextField fullWidth inputRef={i => left = i} defaultValue={`${this.props.left}`} label="Left" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField fullWidth label="Right" defaultValue={`${this.props.right}`} inputRef={i => right = i} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField fullWidth label="Reds on Table" defaultValue={`${this.props.redRemaining}`} inputRef={i => reds = i} />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Button raised color="primary" type="submit">Save</Button>
                    <Button color="accent" onClick={e => {
                        left.value = '0'
                        right.value = '0'
                        reds.value = '15'                 
                    }}>Reset</Button>
                </Grid>
                </Grid>
            </form>
        )
    }
}

export const Starter = connector(StarterDesign)
