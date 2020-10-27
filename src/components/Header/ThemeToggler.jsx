import React from 'react';
import { createLeaf } from '@rootzjs/core';
import { Switch, Tooltip, Brightness3Rounded, Brightness7Rounded } from '../Matlib';
// styles
import { Styles } from "../../styles/AppHeader";

const Component = ({ props, actions }) => {
        const styl = Styles();

        return (
                <Tooltip title={`toggle to ${props.isLight ? "dark" : "light"} theme`} >
                        <Switch
                                size="small"
                                color="primary"
                                checked={!props.isLight}
                                className={styl.checkbox}
                                onChange={props.onToggle}
                                icon={<Brightness3Rounded className={styl.themeTogglerDay} />}
                                checkedIcon={<Brightness7Rounded className={styl.themeTogglerNight} />}
                                classes={{
                                        track: styl.checkBoxTrack
                                }}
                        />
                </Tooltip>
        )
}

export const ThemeToggler = createLeaf({
        Component,
        id: "#ThemeToggler",
        nodeId: "#AppHeader",
})