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
import withStyles, { WithStyles } from "material-ui/styles/withStyles";
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
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from 'material-ui/Dialog';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';

import withWidth from "material-ui/utils/withWidth";
import { WithWidthProps, isWidthDown } from 'material-ui/utils/withWidth';
import { PotsList, BallStyles, ballColors } from "./scores.potlist";
import { Potter } from "./scores.potter";
import { AppBar, Tabs, Tab } from "material-ui";


interface ScoreStateProps {
    users: StateName,
    starter: StateStarter,
    allPots: StatePot[]
    scoreLeft: number,
    scoreRight: number,
    pottedReds: number,
    scoreOnTable: number
}
type ScoreProps = ScoreStateProps & {actionFaul: typeof actionFaul}
type ScoreBoardState = {
    faulDrawerOpen: boolean,
    faulPoints: string,
    potPopup: boolean,
    potFilter: (p: StatePot) => boolean
}

export class ScoreBoardDesign extends React.Component<ScoreProps & WithStyles<keyof typeof BallStyles> & WithWidthProps, ScoreBoardState> {
    state = {
        faulDrawerOpen: false,
        faulPoints: "4",
        potPopup: false,
        potFilter: (p: StatePot) => true
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
                <PotsList player="left" popupOpener={() => this.setState({potPopup: true})} />
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
                <PotsList player="right" popupOpener={() => this.setState({potPopup: true})} />
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
            <Dialog 
                    open={this.state.potPopup}
                    onClose={() => this.setState({potPopup: false})}
                    fullScreen={isWidthDown("sm", this.props.width)}
                    fullWidth={this.props.width == "sm"}>
                <DialogTitle>History of pots</DialogTitle>
                <DialogContent>
                    {/* Let Google help apps determine location. This means sending anonymous location data to */}
                    {/* Google, even when no apps are running. */}
                    <AppBar position="static">
                    <Tabs value={this.state.potFilter} onChange={(e, v) => {this.setState({potFilter: v})}} fullWidth>
                        <Tab value={(p: StatePot) => true} label="Both" />
                        <Tab value={(p: StatePot) => p.player == "left"} label={this.props.users.left} />
                        <Tab value={(p: StatePot) => p.player == 'right'} label={this.props.users.right} />
                    </Tabs>
                    </AppBar>
                    <List>
                        {this.props.allPots.filter(this.state.potFilter).map((pot, i) => (
                            <ListItem key={i}>
                                <ListItemAvatar>
                                    <Avatar classes={{root: this.props.classes[`ball${pot.score}` as ballColors]}}>{pot.score}</Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={
                                    pot.player === "right" ? 
                                    (
                                        <span>
                                            <span style={{fontSize: "1.5em"}}>&#8680;</span> {this.props.users.right}
                                        </span>
                                    ) : (
                                        <span><span style={{fontSize: "1.5em"}}>&#8678;</span> {this.props.users.left}</span>
                                    )
                                } />
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" autoFocus onClick={e => this.setState({potPopup: false})}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            </div>
        )
    }
}
export const ScoreBoard = connect<ScoreStateProps, {actionFaul: typeof actionFaul}>(
    ScoreBoardSelector,
    {actionFaul, }
)(withWidth()(withStyles(BallStyles)(ScoreBoardDesign)))