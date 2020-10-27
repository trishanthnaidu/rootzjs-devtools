import React from 'react';
import { Styles } from '../styles/Storyboard';
import { StateTreeComponent } from '../Charts/StateTree';

export const StateRootz = props => {
        const styl = Styles();
        return (
                <div className={styl.root}>
                        <StateTreeComponent />
                </div>
        )
}