// IMPORT DEPENDECIES
import React from 'react';
import { AppTheme } from '../theme/App';
import { CssBaseline, } from './Matlib';
import { createNode } from '@rootzjs/core';
import { AppHeader } from './Header/AppHeader';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// IMPORT ACTIONS
import { onErrorOccured } from './actions/Master';

// IMPORT STYLES
import { Styles } from '../styles/Master';

const Component = ({
        state,
        props,
}) => {
        const theme = "light";
        return (
                <AppTheme theme={theme} forComponent="APP">
                        <SplashContent theme={theme} {...props} />
                </AppTheme>
        )
}

const SplashContent = props => {
        const styl = Styles();
        const Body = () => <InvitationBody {...props} />
        return (
                <Router>
                        <Switch>
                                <div className={styl.root} >
                                        <CssBaseline />
                                        <AppHeader theme={props.theme} />
                                        <div className={styl.playgroundMasterContainer}>
                                                <Route exact path="/invite" component={Body} />
                                        </div>
                                </div>
                        </Switch>
                </Router>
        )
}

const InvitationBody = () => {

}


const selfActions = [onErrorOccured];
const actions = [selfActions,]

export const GuestInvitation = createNode({
        actions,
        Component,
        id: "#GuestInvitation",
})