import withWidth, { isWidthDown } from "material-ui/utils/withWidth";
import { PlayerPos, CanPotSelector } from "../reducers/scores";
import withStyles from "material-ui/styles/withStyles";
import { BallStyles, ballColors } from "./scores.potlist";
import * as React from "react";
import { Grid, Typography, Button, Hidden } from "material-ui";
import { connect } from "react-redux";
import { actionPot, actionUndo, actionFaul, actionFreeball, actionFinalMiss } from "../actions/scores";
import { StateGlobal } from "../reducers/index";

interface ScoreActionProps {
    actionPot: typeof actionPot,
    actionUndo: typeof actionUndo,
    actionFaul: typeof actionFaul,
    actionFreeball: typeof actionFreeball,
    actionFinalMiss: typeof actionFinalMiss,
}
interface ScoreCanPot {
    canPotFreeball: PlayerPos | undefined,
    canPotColor: (player: PlayerPos, score: number) => boolean,
    showMissBtn: boolean
}

type drawerOpener = {drawerOpener: () => void}

const connector = connect<ScoreCanPot, ScoreActionProps>(
    CanPotSelector,
    {actionPot, actionUndo, actionFaul, actionFreeball, actionFinalMiss}
)


export const Potter = connector<ScoreActionProps & ScoreCanPot & drawerOpener>(withWidth()(withStyles(BallStyles)((props) => {
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
})))