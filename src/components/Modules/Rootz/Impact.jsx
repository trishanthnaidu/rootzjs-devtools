import React from 'react';
import { createLeaf } from '@rootzjs/core';
import { ImpactTreeComponent } from '../Charts/Impact';
import { List, ListItem, ListItemText, Divider, ListSubheader } from '../../Matlib'; // toolkits

import { Styles } from '../styles/Impact';

const actionsItems = ["onThemeChange", "onErrorOccured", "onMenuClose", "onSectionClick", "onMenuOpen"];
const actionMap = {
        "onMenuOpen": ["#AppDrawer", "#DrawerSections"],
        "onMenuClose": ["#AppDrawer", "#DrawerSections"],
        "onThemeChange": "#Master",
        "onErrorOccured": "#Master",
        "onSectionClick": "#AppDrawer",
}
const intialState = {
        activeSection: ""
}
const onActionSelection = text => ({
        activeSection: text
});
const selfActions = [onActionSelection];
const nodeActions = [];
const actions = [selfActions, nodeActions];

export const Component = ({
        state,
        actions
}) => {
        const styl = Styles();
        return (
                <div className={styl.root}>
                        <div className={styl.actionSection}>
                                <List subheader={
                                        <ListSubheader component="div" className={styl.sectionTextHeader} >
                                                Actions
                                        </ListSubheader>
                                }>
                                        <Divider className={styl.divider} />
                                        {
                                                actionsItems.map((text, index) => {
                                                        return (
                                                                <ListItem
                                                                        button
                                                                        className={`${styl.listItem} ${state.activeSection === text && styl.activeSection}`}
                                                                        onClick={() => actions.onActionSelection(text)}
                                                                >
                                                                        <ListItemText primary={text} className={styl.sectionText} />
                                                                </ListItem>
                                                        )
                                                })
                                        }
                                </List>
                        </div>
                        <div className={styl.impactTree} >
                                <ImpactTreeComponent />
                        </div>
                </div>
        )
}

export const ImpactRootz = createLeaf({
        actions,
        Component,
        id: "#ImpactRootz",
        nodeId: "#Master",
        state: intialState,
})