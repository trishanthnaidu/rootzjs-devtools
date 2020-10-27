import React from 'react';
import { createLeaf } from '@rootzjs/core';
import { DrawerSections } from './Sections'; // components
import { onMenuClose } from '../actions/Drawer'; // actions 
import { Divider, IconButton, CloseRounded, } from '../Matlib'; // toolkits
// styles 
import { Styles } from "../../styles/AppDrawer";
import logo from '../../assets/images/logo.svg';

const Component = ({
        props,
        actions
}) => {
        const styl = Styles();

        return (
                <div className={styl.drawerMobileContainer} role="presentation">
                        <div className={styl.logoSectionDrawer}>
                                <div className={styl.logoContainer}>
                                        <IconButton className={styl.iconContainer} disabled>
                                                <img className={styl.logo} src={logo} alt="logo" />
                                        </IconButton>
                                </div>
                                <div className={styl.closeContainer}>
                                        <IconButton className={styl.iconContainer}>
                                                <CloseRounded onClick={actions.onCloseClick} />
                                        </IconButton>
                                </div>
                        </div>
                        <Divider className={styl.dividerMain} />
                        <DrawerSections {...props} />
                </div>
        )
}
const nodeActions = [];
const selfActions = [onMenuClose];
const actions = [selfActions, nodeActions];

export const MobileSection = createLeaf({
        actions,
        Component,
        id: "#MobileSection",
        nodeId: "#AppDrawer",
})