import React from 'react';
import { createNode } from '@rootzjs/core';
import {
        Tab,
        Tabs,
        AppBar,
        TabPanel,
        TabContext,
} from '../../Matlib';
import { SetupInstructions } from './SetupInstructions';
import { TrackingDetails } from './TrackingDetails';
import { Styles } from '../styles/splash';

const initialState = { index: "1" }
const onTabsChange = (event, newValue) => ({ index: newValue });
const onChangeIndex = (index) => ({ index });
const selfActions = [onTabsChange, onChangeIndex];
const actions = [selfActions, []];
const a11yProps = index => ({ id: `full-width-tab-${index}`, 'aria-controls': `full-width-tabpanel-${index}` });


const Component = ({
        props,
        state,
        actions
}) => {
        const styl = Styles();
        return (
                <div className={styl.root}>
                        <div className={styl.heading}>
                                Welcome to Rootz Devtools
                        </div>
                        <TabContext value={state.index}>
                                <AppBar position="static" className={styl.appBar}>
                                        <Tabs
                                                value={state.index}
                                                textColor="primary"
                                                variant="fullWidth"
                                                onChange={actions.onTabsChange}
                                                TabIndicatorProps={{
                                                        style: {
                                                                display: "none",
                                                        }
                                                }}
                                                classes={{
                                                        root: styl.tabsRoot
                                                }}
                                        >
                                                <Tab
                                                        disableRipple
                                                        value="1"
                                                        label="Tracking Details"
                                                        className={styl.tabs}
                                                        classes={{
                                                                selected: styl.tabsSelected
                                                        }}
                                                />
                                                <Tab
                                                        disableRipple
                                                        value="2"
                                                        label="Setup Instructions"
                                                        className={styl.tabs}
                                                        classes={{
                                                                selected: styl.tabsSelected
                                                        }}
                                                />
                                        </Tabs>
                                </AppBar>
                                <TabPanel value="1" index={0}><TrackingDetails {...props} />
                                </TabPanel>
                                <TabPanel value="2" index={1}><SetupInstructions {...props} />
                                </TabPanel>
                        </TabContext>
                </div>
        );
}

export const SplashPlayground = createNode({
        actions,
        Component,
        id: "#SplashPlayground",
        state: initialState
})