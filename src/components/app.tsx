import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Hello } from "./hello";
import { NameForm } from './names';
import { ScoreBoard } from './scores';
import { Starter } from './starter';

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import withWidth from "material-ui/utils/withWidth";
import { WithWidthProps } from 'material-ui/utils/withWidth';

import { MuiThemeProvider, createMuiTheme, withTheme } from 'material-ui/styles';

import './app.scss'
import Hidden from 'material-ui/Hidden';
import Drawer from 'material-ui/Drawer';
import { WithStyles } from 'material-ui/styles/withStyles';
import withStyles from 'material-ui/styles/withStyles';

import HomeIcon from "material-ui-icons/Home";
import PeopleIcon from "material-ui-icons/People";
import PollIcon from "material-ui-icons/Poll";
import BuildIcon from "material-ui-icons/Build";


class NavButton2 extends React.Component<{to: string, inversed?: boolean}> {
    static contextTypes = {
        router: (Link as any).contextTypes.router
    }
    handleNavigation() {
        this.context.router.history.push(this.props.to);
    }
    render() {
        let isMatch = this.props.to == this.context.router.route.location.pathname;
        let baseColor: "contrast" | "default" = this.props.inversed ? "default" : "contrast"
        return (
            <Button color={isMatch ? "accent":baseColor} onClick={() => this.handleNavigation()}>{this.props.children}</Button>
        )
    }
}

const NavButton = withTheme()<{to: string, inversed?: boolean, exact?: boolean}>(props => {
    console.log(props)
    let baseColor: "contrast" | "default" = props.inversed ? "default" : "contrast"
    return (
        <Button color={baseColor} 
                dense={!props.inversed}
                component={subProps => (
                    <NavLink exact={props.exact} 
                             to={props.to} 
                             activeStyle={{color: props.theme.palette.secondary.A200}} 
                             {...subProps} />)}>
            {props.children}
        </Button>
    );
})
const NavMenu = withStyles((theme) => ({
    iconGutter: {
        marginRight: theme.spacing.unit,
    }
}))<{inversed?: boolean}>((props) => (
    <div style={{display: "flex", flexDirection: "inherit"}}>
        <NavButton exact to="/" inversed={props.inversed}><HomeIcon className={props.classes.iconGutter} /> Intro</NavButton>
        <NavButton to="/names" inversed={props.inversed}><PeopleIcon className={props.classes.iconGutter} />Names</NavButton>
        <NavButton to="/scores" inversed={props.inversed}><PollIcon className={props.classes.iconGutter} />Score Board</NavButton>
        <NavButton to="/starter" inversed={props.inversed}><BuildIcon className={props.classes.iconGutter} />Set Start data</NavButton>
    </div>
))

export const App = withWidth()(
class extends React.Component<WithWidthProps> {
    state = {
        drawerOpen: false
    }
    render() {
        return (
            <MuiThemeProvider theme={createMuiTheme()}>
            <div style={{padding: 20, maxWidth: "960px", margin: "0 auto", marginTop: "80px"}}>
            <AppBar >
                <Toolbar>
                    <Typography type="title" color="inherit" style={{flex:1}}>
                        Snooker calculator
                    </Typography>
                    <Hidden smDown>
                        <NavMenu />
                    </Hidden>
                    <Hidden smUp>
                        <Button color="contrast" onClick={() => this.setState({drawerOpen: true})}>Menu</Button>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={this.props.width == 'xs' && this.state.drawerOpen} onClick={() => this.setState({drawerOpen: false})}>
                <NavMenu inversed />
            </Drawer>
            {/* <div> */}
                {this.props.children}
                <Switch>
                    <Route exact path="/" component={Hello} />
                    <Route path="/names" component={NameForm} />
                    <Route path="/scores" component={ScoreBoard} />
                    <Route path="/starter" component={Starter} />
                    <Redirect to="/" />
                </Switch>
            </div>
            </MuiThemeProvider>
        );
    }
}
)
// export const App = withStyles(theme => ({flex: {}}))(_App)
// export const App = (_App)
