import React from 'react';
import { Styles } from '../styles/Storyboard';
import { DomTreeComponent } from '../Charts/DomTree';

export const ComponentRootz = props => {
    const styl = Styles();
    return (
        <div className={styl.root}>
            <DomTreeComponent />
        </div>
    )
}