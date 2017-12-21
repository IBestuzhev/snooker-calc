import { connect, ActionCreator } from 'react-redux';
import * as React from 'react';
import { setNameActionType, setName } from "../actions/names";
import { FormEvent } from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';


const mapStateToProperty = (state: any) => state.names;

interface NameState {
    left: string,
    right: string,
}

interface NameProps extends NameState {
    setName?: (a: string, b: string) => void
}


class _NameForm extends React.Component<NameProps, NameState> {
    constructor(props: NameProps, context?: any) {
        super(props, context);
        let { left, right} = props;
        this.state = {left, right};
    }
    changer(field: keyof NameState) {
        return (e: any) => {
            let val: string = e.target.value;
            this.setState({[field as any]: val});
        }
    }
    submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        this.props.setName(this.state.left, this.state.right)
        return false;
    }
    render() {
        return (
            <div>
            <p>Form goes here</p>
            <p>{this.props.left} VS {this.props.right}</p>
            <form onSubmit={(e) => this.submit(e)} >
                <p>
                    <input type="text" value={this.state.left} onChange={this.changer('left')} />
                </p>
                <p>
                    <input type="text" value={this.state.right} onChange={this.changer('right')} />
                </p>
                <p>
                    <input type="submit" value="Submit"/>
                </p>
            </form>
            </div>
        );
    }
}

export const _NameFormSC: React.SFC<NameProps> = (props) => {
    let left: HTMLInputElement;
    let right: HTMLInputElement;

    let onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (left.value && right.value) {
            props.setName(left.value, right.value);
        }
    }

    return (
        <div>
        <Typography type="subheading" gutterBottom>{props.left} VS {props.right}</Typography>
        <form onSubmit={onSubmit} >
            <Grid container justify="center">
            <Grid item xs={6} sm={4} lg={3}>
                <TextField fullWidth inputRef={(i) => left = i} defaultValue={props.left} label="Left User" />

                {/* <input type="text" defaultValue={props.left} ref={(i) => left = i} /> */}
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
                <TextField fullWidth inputRef={(i) => right = i} defaultValue={props.right} label="Right User" />
            
                {/* <input type="text" defaultValue={props.right} ref={(i) => right = i} /> */}
            </Grid>
            <Grid item xs={12}>
                <Typography align="center">
                    <Button type="submit" raised color="primary">Submit</Button>
                </Typography>
            </Grid>
            </Grid>
        </form>
        </div>
    );
}

export const NameForm = connect(
    mapStateToProperty, 
    {setName}
)(_NameFormSC);