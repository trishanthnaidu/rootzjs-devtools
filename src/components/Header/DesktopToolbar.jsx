import React from 'react';
import { createLeaf } from '@rootzjs/core';
import { IconButton } from '../Matlib';
// styles
import { Styles } from "../../styles/AppHeader";
import logo from '../../assets/images/logo.svg';
import logoDark from '../../assets/images/logoDark.svg';
import titleLogo from '../../assets/images/title.svg';

const navigateTo = (history, route) => {
        history.push(route);
}

const Component = ({ props }) => {
        const styl = Styles();
        const { isLight, history } = props;

        return (
                <React.Fragment>
                        <div className={styl.logoContainer}>
                                <IconButton className={styl.iconContainer} disabled>
                                        <img className={styl.logo} src={isLight ? logo : logoDark} alt="logo" />
                                        <img className={styl.logoTitle} src={titleLogo} alt="logo" />
                                </IconButton>
                        </div>
                </React.Fragment>
        )
}

export const DesktopToolbar = createLeaf({
        Component,
        id: "#DesktopToolbar",
        nodeId: "#AppHeader"
})