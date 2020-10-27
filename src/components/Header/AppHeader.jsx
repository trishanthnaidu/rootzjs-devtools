// IMPORT DEPENDECIES
import React from 'react';
import { createNode, createContract } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import {
      AppBar,
      Toolbar,
      SvgIcon,
      Tooltip,
      Divider,
      useTheme,
      TabContext,
      IconButton,
      MailRounded,
} from '../Matlib';

import { onThemeChange } from '../actions/Header'; // actions
// Import Components
import { ThemeToggler } from './ThemeToggler';
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
                                    <Tooltip title={`Subscribe on Youtube`} >
                                          <IconButton className={styl.iconButton}>
                                                <SvgIcon width="25px" height="25px" viewBox="0 0 50 50">
                                                      <path d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z" />
                                                      <path d="M20 31L20 17 32 24z" fill={appTheme.background["00"]} />
                                                </SvgIcon>
                                          </IconButton>
                                    </Tooltip>
                                    <Tooltip title={`Follow on Twitter`} >
                                          <IconButton className={styl.iconButton}>
                                                <SvgIcon width="25px" height="25px" viewBox="0 0 50 50">
                                                      <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
                                                </SvgIcon>
                                          </IconButton>
                                    </Tooltip>
                                    <Tooltip title={`Follow on Instagram`} >
                                          <IconButton className={styl.iconButton}>
                                                <SvgIcon width="25px" height="25px" viewBox="0 0 24 24">
                                                      <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
                                                </SvgIcon>
                                          </IconButton>
                                    </Tooltip>
                                    <Tooltip title={`Follow on Facebook`} >
                                          <IconButton className={`${styl.iconButton} ${styl.iconFB}`}>
                                                <SvgIcon width="25px" height="25px" viewBox="0 0 50 50">
                                                      <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                                                </SvgIcon>
                                          </IconButton>
                                    </Tooltip>
                                    {
                                          !appTheme.isMobile &&
                                          <React.Fragment>
                                                <Tooltip title={`Write Us`} >
                                                      <IconButton className={styl.iconButton}>
                                                            <MailRounded />
                                                      </IconButton>
                                                </Tooltip>
                                                <Divider className={styl.dividerVertical} orientation="vertical" />
                                          </React.Fragment>
                                    }
                                    <ThemeToggler isLight={isLight} onToggle={actions.onThemeChange} />
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