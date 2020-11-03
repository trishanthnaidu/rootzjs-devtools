// IMPORT DEPENDECIES
import React from 'react';
import { AppTheme } from '../theme/App';
import { CssBaseline, } from './Matlib';
import { createNode } from '@rootzjs/core';
import { AppHeader } from './Header/AppHeader';
import { InvitationPlayground } from './Modules/Invitation';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// IMPORT ACTIONS
import { onErrorOccured } from './actions/Master';

// IMPORT STYLES
import { Styles } from '../styles/Master';

const Component = ({
        state,
        props,
        actions
}) => {
        const theme = "light";

        return (
                <AppTheme theme={theme} forComponent="APP">
                        <InvitationContent {...props} />
                </AppTheme>
        )
}

const InvitationContent = props => {
        const styl = Styles();
        return (
                <Router>
                        <Switch>
                                <div className={styl.root} >
                                        <CssBaseline />
                                        <AppHeader theme={props.theme} />
                                        <div className={styl.playgroundMasterContainer}>
                                                <Route exact path="/invite" component={() => <InvitationPlayground {...props} />} />
                                        </div>
                                </div>
                        </Switch>
                </Router>
        )
}

const selfActions = [onErrorOccured];
const actions = [selfActions, []]

export const GuestInvitation = createNode({
        actions,
        Component,
        id: "#GuestInvitationMaster",
})
