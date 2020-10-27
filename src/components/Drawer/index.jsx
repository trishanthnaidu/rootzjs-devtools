import React from 'react';
import { createNode } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import {
    Drawer,
    useTheme,
    CompareRounded,
    TouchAppRounded,
    SwipeableDrawer,
    DeviceHubRounded,
    LowPriorityRounded,
    AccountTreeRounded,
    CompareArrowsRounded,
} from '../Matlib'; // toolkit components
import { DrawerSections } from './Sections'; // leaf components
import { MobileSection } from './MobileSections'; // leaf components
import { onMenuClose, onMenuOpen } from '../actions/Drawer'; // actions
// styles
import { Styles } from "../../styles/AppDrawer";

// initial state
const initialState = {
    isMenuOpen: false,
    activeSection: "Component rootz",
    section2: ['Component', 'State'],
    section1: ['Component', 'State', 'Action', 'Impact'],
    iconSvgMappings: {
        "Component": AccountTreeRounded,
        "State": DeviceHubRounded,
        "Action": TouchAppRounded,
        "Impact": LowPriorityRounded,
    },
    iconSvgMappings2: {
        "State": CompareArrowsRounded,
        "Component": CompareRounded,
    },
}

const Component = ({
    state,
    actions,
    props,
}) => {
    const styl = Styles();
    const theme = useTheme();

    return (
        <div className={styl.root}>
            {
                theme.isMobile ?
                    <SwipeableDrawer
                        className={styl.drawer}
                        classes={{ paper: styl.drawerPaperMobile }}
                        open={state.isMenuOpen}
                        onOpen={actions.onMenuOpen}
                        onClose={actions.onMenuClose}
                    >
                        <MobileSection history={props.history} {...state} />
                    </SwipeableDrawer>
                    :
                    <Drawer
                        className={styl.drawer}
                        variant="permanent"
                        classes={{ paper: styl.drawerPaper }}
                    >
                        <div className={styl.toolbar} />
                        <DrawerSections history={props.history} {...state} />
                    </Drawer>
            }
        </div>
    );
}

const contracts = [];
const selfActions = [onMenuOpen, onMenuClose];
const actions = [selfActions, contracts];

export const AppDrawer = withRouter(
    createNode({
        actions,
        Component,
        id: "#AppDrawer",
        state: initialState,
    })
);