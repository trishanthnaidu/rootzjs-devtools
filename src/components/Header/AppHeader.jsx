// IMPORT DEPENDECIES
import React from 'react';
import { createNode, createContract } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import {
      AppBar,
      Toolbar,
      useTheme,
      TabContext,
} from '../Matlib';

import { onThemeChange } from '../actions/Header'; // actions
// Import Components
import { MobileToolbar } from './MobileToolbar';
import { DesktopToolbar } from './DesktopToolbar';

import { Styles } from "../../styles/AppHeader";
const Component = ({
      props,
      actions
}) => {
      const styl = Styles();
      const appTheme = useTheme();
      const isLight = props.theme === "light";

      return (
            <div className={styl.root}>
                  <TabContext value={props.history.location.pathname}>
                        <AppBar position="fixed" color="primary" className={styl.appBar}>
                              <Toolbar variant="dense">
                                    {
                                          appTheme.isMobile ?
                                                <MobileToolbar />
                                                :
                                                <DesktopToolbar isLight={isLight} />
                                    }
                              </Toolbar>
                        </AppBar>
                  </TabContext>
            </div>
      );
}

const selfActions = [];
const contract = createContract({ "#Master": onThemeChange });
const actions = [selfActions, contract];

export const AppHeader = withRouter(
      createNode({
            actions,
            Component,
            id: "#AppHeader"
      })
);