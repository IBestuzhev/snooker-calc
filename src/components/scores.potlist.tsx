import withStyles from "material-ui/styles/withStyles";
import { StatePot, PlayerPos } from "../reducers/scores";
import * as _ from "lodash";
import * as React from "react";
import Typography from "material-ui/Typography";
import Chip from "material-ui/Chip";
import Avatar from "material-ui/Avatar";
import { connect } from "react-redux";
import { StateGlobal } from "../reducers/index";
import { getPotListSelector } from "../reducers/scores";


export type ballColors = "ball1" | "ball2" | "ball3" | "ball4" | "ball5" | "ball6" | "ball7" 
interface PotListOwnProps {
    player: PlayerPos
}
interface PotListConnectedProps {
    pots: StatePot[]
}


export const BallStyles = {
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

const connector = connect(
    () => {
        const selector = getPotListSelector()
        return (s: StateGlobal, p: PotListOwnProps) => ({pots: selector(s, p.player)})
    }
)

export const PotsList = connector(withStyles(BallStyles)<PotListConnectedProps & PotListOwnProps>((props) => {
    let stats = _.chain(props.pots)
        .filter(i => i.score > 0 && !i.isFaul && !i.isFreeball)
        .countBy(i => i.score)
        .toPairs()
        .sortBy(e => e[0])
        .value();
    console.log(props)
    return (
        <div>
        {stats.map(([score, count], i) => (
            <Typography key={i} gutterBottom component="div">
            <Chip 
                classes={{avatar: props.classes[`ball${score}` as ballColors]}} 
                label={`${count}`} 
                avatar={<Avatar>{score}</Avatar>} 
                style={{marginLeft: props.player == 'right' ? "auto": 0}}/>
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
}))
