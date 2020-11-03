// IMPORT DEPENDECIES
import React from 'react';
import { createNode, createContract } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import {
      Menu,
      AppBar,
      Toolbar,
      Tooltip,
      MenuList,
      useTheme,
      InputBase,
      Typography,
      TabContext,
      IconButton,
      GroupAddRounded,
} from '../Matlib';

import { onThemeChange } from '../actions/Header'; // actions
// Import Components
import { MobileToolbar } from './MobileToolbar';
import { DesktopToolbar } from './DesktopToolbar';
import { Styles } from "../../styles/AppHeader";

const initialState = { anchorEl: null };
const handleClose = () => ({
      anchorEl: null
});
const onMenuOpen = evt => ({
      anchorEl: evt.currentTarget,
});

const Component = ({
      props,
      state,
      actions
}) => {
      let linkRef = React.useRef(null);
      const styl = Styles();
      const appTheme = useTheme();
      const isLight = props.theme === "light";
      const shareUrlQuery = encodeURIComponent(JSON.stringify({ ...props.config, isInvite: true }));
      const URL = `${window.location.origin}/invite?${shareUrlQuery}`;
      React.useEffect(() => {
            if (state.anchorEl != null) {
                  linkRef.current.children[0].select();
                  document.execCommand("copy");
                  setTimeout(() => {
                        actions.handleClose();
                  }, 3000);
            }
      }, [state.anchorEl])
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
                                    <Menu
                                          keepMounted
                                          elevation={0}
                                          getContentAnchorEl={null}
                                          anchorEl={state.anchorEl}
                                          onClose={actions.handleClose}
                                          open={Boolean(state.anchorEl)}
                                          className={styl.copyMenuWrapper}
                                          PopoverClasses={{
                                                paper: styl.copyMenuPaper
                                          }}
                                          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                          transformOrigin={{ vertical: "top", horizontal: "center" }}
                                    >
                                          <MenuList className={styl.copyMenuContainer}>
                                                <InputBase
                                                      readOnly
                                                      value={URL}
                                                      ref={linkRef}
                                                      className={styl.link}
                                                />
                                                <Typography className={styl.lblCopied}>Link Copied</Typography>
                                          </MenuList>
                                    </Menu>
                                    <Tooltip title={`Invite Guests`} >
                                          <IconButton className={styl.iconButton} onClick={actions.onMenuOpen} >
                                                <GroupAddRounded />
                                          </IconButton>
                                    </Tooltip>
                              </Toolbar>
                        </AppBar>
                  </TabContext>
            </div>
      );
}

const selfActions = [handleClose, onMenuOpen];
const contract = createContract({ "#ApplicationMaster": onThemeChange });
const actions = [selfActions, contract];

export const AppHeader = withRouter(
      createNode({
            actions,
            Component,
            id: "#AppHeader",
            state: initialState
      })
);