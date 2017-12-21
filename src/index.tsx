import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppContainer} from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import { Hello } from "./components/hello";
// import { NameForm } from './components/names';
import { App } from './components/app';
import { rootReducer } from "./reducers";

function getStore() {
    const store = createStore(rootReducer);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers/index', () => {
            const nextRootReducer = require('./reducers/index').rootReducer;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

const store = getStore();

// function render(App: any, Hello: any, NameForm: any) {
function render(App: any) {
    return ReactDOM.render(
        <AppContainer>
        <Provider store={store}>
            <Router>
                <App>
                    {/* <Route path="/hello/" component={Hello} />
                    <Route path="/names/" component={NameForm} /> */}
                </App>
            </Router>
        </Provider>
        </AppContainer>,
        document.getElementById("example")
    )
}

render(App);

if (module.hot) {
    const reload = () => {
        let NextApp = require("./components/app").App;
        // let NextHello = require("./components/hello").Hello;
        // let NextName = require("./components/names").NameForm;
        render(NextApp) 
        
    }
    // module.hot.accept('./components/hello', reload);
    module.hot.accept('./components/app', reload);
    // module.hot.accept('./components/names', reload);
}
