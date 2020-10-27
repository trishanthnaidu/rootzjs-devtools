import React from 'react';
import { createLeaf } from '@rootzjs/core';
import { onMenuOpen } from '../actions/Header';
import { Tooltip, IconButton, MenuRounded } from '../Matlib';
// styles
import { Styles } from "../../styles/AppHeader";

const Component = ({ actions }) => {
        const styl = Styles();

        return (
                <div className={styl.logoContainer}>
                        <Tooltip title={`open filter section`} >
                                <IconButton component="span" className={styl.hamburger}>
                                        <MenuRounded onClick={actions.onMenuOpen} />
                                </IconButton>
                        </Tooltip>
                </div>
        )
}

const selfActions = [];
const nodeActions = [onMenuOpen];
const actions = [selfActions, nodeActions];

export const MobileToolbar = createLeaf({
        actions,
        Component,
        id: "#MobileToolbar",
        nodeId: "#AppDrawer",
})