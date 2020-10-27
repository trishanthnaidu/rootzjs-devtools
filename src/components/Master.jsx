// IMPORT DEPENDECIES
import React from 'react';
import { AppDrawer } from './Drawer';
import { CssBaseline } from './Matlib';
import { AppTheme } from '../theme/App';
import { createNode } from '@rootzjs/core';
import { AppHeader } from './Header/AppHeader';
import { windowErrorHandler, OopsSomethingWentWrong } from './Errors';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

// IMPORT ACTIONS
import { onErrorOccured } from './actions/Master';

// IMPORT MODULES 
import { StateRootz } from "./Modules/Rootz/State";
import { ActionRootz } from "./Modules/Rootz/Action";
import { ImpactRootz } from "./Modules/Rootz/Impact";
import { ComponentRootz } from "./Modules/Rootz/Component";

// IMPORT STYLES
import { Styles } from '../styles/Master';

const initialState = {
      theme: "dark",
      errorDetails: "",
      isAuthenticated: false,
      didSomethingWentWrong: false,
}

const Component = ({ state, props, actions }) => {
      const { theme } = state;

      React.useEffect(() => {
            windowErrorHandler(actions.onErrorOccured);
      }, []);

      return (
            <AppTheme theme={theme} forComponent="APP">
                  <ApplicationMaster {...props} {...state} />
            </AppTheme>
      )
}

const ApplicationMaster = props => {
      const styl = Styles();
      return (
            <Router>
                  <div className={styl.root} >
                        <CssBaseline />
                        <AppHeader theme={props.theme} />
                        <AppDrawer theme={props.theme} />
                        <PlaygroundRoute {...props} />
                        {
                              !props.didSomethingWentWrong ?
                                    <React.Fragment></React.Fragment>
                                    :
                                    <OopsSomethingWentWrong
                                          details={props.errorDetails}
                                          onReload={() => {
                                                window.location.reload(true)
                                          }}
                                    />
                        }
                  </div>
            </Router>
      )
}

const PlaygroundRoute = props => {
      const styl = Styles();
      const ComponentRootzComponent = () => <ComponentRootz {...props} />
      return (
            <div className={styl.playgroundMasterContainer}>
                  <Route exact path="/state-rootz" component={StateRootz} />
                  <Route exact path="/impact-rootz" component={ImpactRootz} />
                  <Route exact path="/action-rootz" component={ActionRootz} />
                  <Route exact path="/" render={() => <Redirect to="/component-rootz" />} />
                  <Route exact path="/component-rootz" component={ComponentRootzComponent} />
            </div>
      )
}

const selfActions = [onErrorOccured];
const actions = [selfActions,]

export const Master = createNode({
      actions,
      Component,
      id: "#Master",
      state: initialState,
})
