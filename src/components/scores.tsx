import {StateGlobal} from "../reducers/index"
import * as React from "react";
import { connect } from "react-redux";
import { StateName } from "../reducers/names";
import { StateScore, StatePot, PlayerPos, ScoreBoardSelector } from "../reducers/scores";
import { actionPot, ScoreAction, actionUndo, actionFaul, actionFreeball, actionFinalMiss } from "../actions/scores";
import { StateStarter } from "../reducers/starter";
import Grid from 'material-ui/Grid';
import * as _ from 'lodash';
import Chip from "material-ui/Chip";
import Avatar from "material-ui/Avatar"
import Typography from "material-ui/Typography";
import withStyles from "material-ui/styles/withStyles";
import Drawer from 'material-ui/Drawer';
import Button from "material-ui/Button";
import BallIcon from "material-ui-icons/Lens";
import Badge from "material-ui/Badge";
import Hidden from "material-ui/Hidden";
import FormControl from "material-ui/Form/FormControl";
import FormLabel from "material-ui/Form/FormLabel";
import RadioGroup from "material-ui/Radio/RadioGroup";
import FormControlLabel from "material-ui/Form/FormControlLabel";
import Radio from "material-ui/Radio/Radio";

import withWidth from "material-ui/utils/withWidth";
import { WithWidthProps, isWidthDown } from 'material-ui/utils/withWidth';
import { PotsList, BallStyles, ballColors } from "./scores.potlist";
import { Potter } from "./scores.potter";


interface ScoreStateProps {
    users: StateName,
    starter: StateStarter,
    scoreLeft: number,
    scoreRight: number,
    pottedReds: number,
    scoreOnTable: number
}
type ScoreProps = ScoreStateProps & {actionFaul: typeof actionFaul}
type ScoreBoardState = {
    faulDrawerOpen: boolean,
    faulPoints: string
}

export class ScoreBoardDesign extends React.Component<ScoreProps, ScoreBoardState> {
    state = {
        faulDrawerOpen: false,
        faulPoints: "4"
    }
    render() {
        return (
            <div>
            <Grid container>
            <Grid item xs={6}>
                <Badge color="primary" badgeContent={`+${this.props.starter.left}`}>
                <Chip label={this.props.users.left} avatar={<Avatar>{this.props.scoreLeft || "0"}</Avatar>} />
                </Badge>
            </Grid>
            <Grid item xs={6}>
                <Typography align="right" component="div">
                <Badge color="primary" badgeContent={`+${this.props.starter.right}`}>
                <Chip label={this.props.users.right} avatar={<Avatar>{this.props.scoreRight || "0"}</Avatar>} />
                </Badge>
                </Typography>
            </Grid>
            <Grid item xs={3} sm={2}>
                <PotsList player="left" />
            </Grid>
            <Grid item xs={6} sm={8}>
                Scoreboards ({this.props.scoreLeft - this.props.scoreRight} difference, 
                {this.props.scoreOnTable} scores left,
                {15 - this.props.pottedReds} Reds remaining)
                ({this.props.starter.redRemaining} reds at the start)
                <Potter 
                    drawerOpener={() => this.setState({faulDrawerOpen: true})}
                    />
            </Grid>
            <Grid item xs={3} sm={2}>
                <PotsList player="right" />
            </Grid>
            </Grid>
            <Drawer open={this.state.faulDrawerOpen} anchor="bottom" onBackdropClick={e => this.setState({faulDrawerOpen: false})}>
                <div style={{padding: 20}}>
                <Typography type="display1">
                    Fauls (who failed, not who gains score)
                </Typography>
                <Grid container alignItems="flex-end">
                    <Grid item xs={6} sm={3} className="flex-order-btn-left">
                        <Button raised onClick={() => {
                            this.props.actionFaul("left", parseInt(this.state.faulPoints))
                            this.setState({faulDrawerOpen: false})
                        }}>
                            Left
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} className="flex-order-radio">
                        <FormControl>
                            <FormLabel>Points</FormLabel>
                            <RadioGroup
                                value={this.state.faulPoints}
                                onChange={(e, value) => {this.setState({faulPoints: value})}}>
                            {[4, 5, 6, 7].map(score => (
                                <FormControlLabel key={score} value={`${score}`} control={<Radio/>} label={`${score}`} />
                            ))}
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={3} className="flex-order-btn-right">
                        <Typography align="right" component="div">
                        <Button raised onClick={() => {
                            this.props.actionFaul("right", parseInt(this.state.faulPoints));
                            this.setState({faulDrawerOpen: false})
                        }}>
                            Right
                        </Button>
                        </Typography>
                    </Grid>
                </Grid>
                </div>
            </Drawer>
            </div>
        )
    }
}

export const ScoreBoard = connect(
    ScoreBoardSelector,
    {actionFaul}
)(ScoreBoardDesign)