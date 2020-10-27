import React from 'react';
import { Styles } from '../styles/Storyboard';
import { ActionTreeComponent } from '../Charts/ActionTree';

export const ActionRootz = props => {
        const styl = Styles();
        return (
                <div className={styl.root}>
                        <ActionTreeComponent />
                </div>
        )
}