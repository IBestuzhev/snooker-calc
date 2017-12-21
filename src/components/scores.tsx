import {StateGlobal} from "../reducers/index"
import * as React from "react";
import { connect } from "react-redux";
import { StateName } from "../reducers/names";
import { StateScore, StatePot, PlayerPos } from "../reducers/scores";
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


interface ScoreStateProps {
    users: StateName,
    starter: StateStarter,
    potsLeft: StatePot[],
    potsRight: StatePot[],
    scoreLeft: number,
    scoreRight: number,
    pottedReds: number,
    scoreOnTable: number
}
interface ScoreCanPot {
    canPotFreeball: PlayerPos | undefined,
    canPotColor: (player: PlayerPos, score: number) => boolean,
    showMissBtn: boolean
}
interface ScoreActionProps {
    actionPot: typeof actionPot,
    actionUndo: typeof actionUndo,
    actionFaul: typeof actionFaul,
    actionFreeball: typeof actionFreeball,
    actionFinalMiss: typeof actionFinalMiss,
}
type ScoreProps = ScoreStateProps & ScoreActionProps & ScoreCanPot

function mapStateToProps(state: StateGlobal): ScoreStateProps & ScoreCanPot {
    let starter = state.starter;

    let potsLeft = state.score.pots.filter((p) => p.player === 'left')
    let potsRight = state.score.pots.filter(p => p.player == 'right')
    // p => (!p.isFaul && !p.isFreeball && p.score == 1) ? 1 : 0
    let pottedReds = state.score.pots.reduce((s, p) => ((!p.isFaul && !p.isFreeball && p.score == 1) ? s + 1 : s), 0)
    let scoreLeft = potsLeft.reduce((s, p) => (s + p.score), 0);
    let scoreRight = potsRight.reduce((s, p) => (s + p.score), 0);

    pottedReds += (15 - starter.redRemaining);
    scoreLeft += starter.left
    scoreRight += starter.right

    let scoreOnTable = (15 - pottedReds) * 8 + (2 + 3 + 4 + 5 + 6 + 7)
    let lastPot: StatePot, lastSuccessPot: StatePot, canPotFreeball: PlayerPos;
    let showMissBtn = false;
    let hasPottedFinal = state.score.pots.some(p => p.score == 0)
    showMissBtn = pottedReds >= 15 && ! hasPottedFinal;
    
    if (state.score.pots.length > 0) {
        lastPot = state.score.pots.slice(-1)[0];
        lastSuccessPot = state.score.pots.filter(p => !p.isFaul && !p.isFreeball).slice(-1)[0]
        if (lastPot.isFaul && lastPot.score > 0) {
            canPotFreeball = lastPot.player;
        }
    }
    let canPotColor: (p: PlayerPos, s: number) => boolean = (player, score) => {
        if (score === 1) {
            return pottedReds < 15
        }
        if (pottedReds < 15) {
            return lastPot && lastPot.player == player && lastPot.score == 1;
        }
        if (hasPottedFinal) {
            return score == (Math.max(1, lastSuccessPot.score) + 1)
        }
        if (lastPot && lastPot.score == 1) {
            return lastPot.player == player
        }
        return true
    }
    if (hasPottedFinal && lastSuccessPot.score > 0) {
        let sub = lastSuccessPot.score;
        while (sub > 1) {
            scoreOnTable -= sub;
            sub--;
        }
    }
    return {
        users: state.names, starter: state.starter,
        potsLeft, potsRight, pottedReds, scoreLeft, scoreRight, scoreOnTable,
        canPotColor, canPotFreeball, showMissBtn}
}

type ballColors = "ball1" | "ball2" | "ball3" | "ball4" | "ball5" | "ball6" | "ball7" 
const BallStyles = {
    ball1: {
        backgroundColor: "red",
    },
    ball2: {
        backgroundColor: "yellow",
        color: "black!important"
    },
    ball3: {
        backgroundColor: "green",
    },
    ball4: {
        backgroundColor: "brown"
    },
    ball5: {
        backgroundColor: "blue"
    },
    ball6: {
        backgroundColor: "pink",
        color: "black!important"
    },
    ball7: {
        backgroundColor: "black"
    },
    ballDisabled: {
        opacity: 0.2
    },
    smallAvatar: {
        width: 20,
        height: 20,
        display: "inline-block",
        borderRadius: "50%",
        color: "white",
        marginTop: "8px"
    },
    btnBlock: {
        display: "block",
        width: "100%",
    }
}

// React.SFC<{pots: StatePot[], classes: any}>
const PotsList = withStyles(BallStyles)<{pots: StatePot[], align?: "right"}>((props) => {
    let stats = _.chain(props.pots)
        .filter(i => i.score > 0 && !i.isFaul && !i.isFreeball)
        .countBy(i => i.score)
        .toPairs()
        .sortBy(e => e[0])
        .value();
    console.log(props.classes)
    return (
        <div>
        {stats.map(([score, count], i) => (
            <Typography key={i} gutterBottom component="div">
            <Chip 
                classes={{avatar: props.classes[`ball${score}` as ballColors]}} 
                label={`${count}`} 
                avatar={<Avatar>{score}</Avatar>} 
                style={{marginLeft: props.align == 'right' ? "auto": 0}}/>
            </Typography>
        ))}
        <ul className="potter">
            {props.pots.map((pot, index) => (
                <li key={index}>
                    {pot.score}
                    {pot.isFaul ? 'FAUL' : null}
                    {pot.isFreeball ? '(Free Ball)' : null}
                </li>
            ))}
        </ul>
        </div>
    )
})

const Potter = withWidth()<ScoreActionProps & ScoreCanPot & {drawerOpener: () => void}>(withStyles(BallStyles)((props) => {
    let freeballChecker = (player: PlayerPos) => props.canPotFreeball == player
    let fireBoth = (player: PlayerPos, score: number) => {
        props.actionPot(player, score)
        if (props.showMissBtn) {
            props.actionFinalMiss(false)
        }
    }
    let {classes} = props;
    return (
        <div>
            <h3>Scoring</h3>
            {[1, 2, 3, 4, 5, 6, 7].map(score => (
                <Grid container key={`score-${score}`} spacing={0}>
                {/* <p key={`score-${score}`}> */}
                    <Grid item xs={5}>
                    <Typography align="center">
                    <Button 
                        className={classes.btnBlock}
                        dense={isWidthDown("sm", props.width)}
                        onClick={() => fireBoth("left", score)}
                        disabled={!props.canPotColor("left", score)}>
                            {/* <Avatar className={`${classes.smallAvatar} ${classes["ball" + score as ballColors]} ${!props.canPotColor("left", score) ? classes.ballDisabled:""}`}>{score}</Avatar> to Left */}
                            <Hidden smDown>
                                to Left
                            </Hidden>
                            <Hidden smUp>
                                &lt;&lt;
                            </Hidden>
                    </Button>
                    </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography align="center">
                        <span className={`${classes.smallAvatar} ${classes["ball" + score as ballColors]}`}>{score}</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                    <Typography align="center">
                    <Button 
                        className={classes.btnBlock}
                        dense={isWidthDown("sm", props.width)}
                        onClick={() => fireBoth("right", score)}
                        disabled={!props.canPotColor("right", score)}>
                            {/* <Avatar className={`${classes.smallAvatar} ${classes["ball" + score as ballColors]} ${!props.canPotColor("right", score) ? classes.ballDisabled:""}`}>{score}</Avatar> to Right */}
                            <Hidden smDown>
                                to Right
                            </Hidden>
                            <Hidden smUp>
                                &gt;&gt;
                            </Hidden>
                    </Button>
                    </Typography>
                    </Grid>
                {/* </p> */}
                </Grid>
            ))}
            {props.showMissBtn ? 
            <Typography align="center" component="div">
            <Button 
                raised
                color="primary"
                hidden={!props.showMissBtn} 
                onClick={() => props.actionFinalMiss(true)}>Begin final stage</Button>
            </Typography>
            : null}
            <h3>Fauls</h3>
            <Typography align="center" component="div">
            <Button 
                raised
                color="accent"
                onClick={() => props.drawerOpener()}>
                Add Faul Points
            </Button>
            </Typography>
            {/* {[4, 5, 6, 7].map(score => (
                <p key={`faul-${score}`}>
                    <button onClick={() => props.actionFaul("left", score)}>{score} to Left</button>
                    <button onClick={() => props.actionFaul("right", score)}>{score} to Right</button>
                </p>
            ))} */}
            <h3>Free ball</h3>
            <Typography align="center">
                <Button 
                    onClick={() => props.actionFreeball("left")} 
                    disabled={!freeballChecker("left")}
                    raised
                    color="primary" 
                >
                    <Hidden smDown>
                        to Left
                    </Hidden>
                    <Hidden smUp>
                        &lt;&lt;
                    </Hidden>
                </Button>
                <Button 
                    onClick={() => props.actionFreeball("right")} 
                    disabled={!freeballChecker("right")}
                    raised
                    color="primary"
                >
                    <Hidden smDown>
                        to Right
                    </Hidden>
                    <Hidden smUp>
                        &gt;&gt;
                    </Hidden>
                </Button>
            </Typography>
            <h3>Undo</h3>
            <Typography align="center">
                <Button onClick={() => props.actionUndo()} raised color="accent">Undo last action</Button>
            </Typography>
        </div>
    )
}))

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
        // console.log(this.state)
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
                {/* {this.props.users.left} (+{this.props.starter.left}) */}
                {/* <br/> */}
                {/* {this.props.scoreLeft} */}
                <PotsList pots={this.props.potsLeft} />
            </Grid>
            <Grid item xs={6} sm={8}>
                Scoreboards ({this.props.scoreLeft - this.props.scoreRight} difference, 
                {this.props.scoreOnTable} scores left,
                {15 - this.props.pottedReds} Reds remaining)
                ({this.props.starter.redRemaining} reds at the start)
                <Potter 
                    canPotColor={this.props.canPotColor}
                    canPotFreeball={this.props.canPotFreeball}
                    showMissBtn={this.props.showMissBtn}
                    actionPot={this.props.actionPot} 
                    actionUndo={this.props.actionUndo} 
                    actionFaul={this.props.actionFaul}
                    actionFreeball={this.props.actionFreeball}
                    actionFinalMiss={this.props.actionFinalMiss}
                    drawerOpener={() => this.setState({faulDrawerOpen: true})}
                    />
            </Grid>
            <Grid item xs={3} sm={2}>
                {/* {this.props.users.right} (+{this.props.starter.right}) */}
                {/* <br/> */}
                {/* {this.props.scoreRight} */}
                <PotsList pots={this.props.potsRight} align="right" />
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
    mapStateToProps,
    {actionPot, actionUndo, actionFaul, actionFreeball, actionFinalMiss}
)(ScoreBoardDesign)