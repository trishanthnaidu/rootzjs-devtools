import React from 'react';
import { createLeaf } from '@rootzjs/core';
import {
        Button,
        InputBase,
} from '../../Matlib';

import { Styles } from '../styles/invitation';


const Component = ({
        props,
}) => {
        const styl = Styles();
        const ref = React.useRef(null);
        const { conn, config } = props;
        const onSubmit = () => {
                conn.send(JSON.stringify(config));
        }
        React.useEffect(() => {
                ref.current.children[0].focus();
        }, []);
        return (
                <div className={styl.root}>
                        <div className={styl.container}>
                                <div className={styl.designWrapper}>

                                </div>
                                <div className={styl.inputWrapper}>
                                        <InputBase
                                                ref={ref}
                                                onKeyPress={evt => {
                                                        const code = evt.which || evt.charCode;
                                                        if (code === 13) {
                                                                onSubmit();
                                                        }
                                                }}
                                                className={styl.input}
                                                placeholder="Enter your name"
                                        />
                                        <Button className={styl.joinBtn} onClick={onSubmit}>Join</Button>
                                </div>
                        </div>
                </div>
        )
}

export const InvitationPlayground = createLeaf({
        Component,
        id: "#InvitationPlayground",
        nodeId: "#GuestInvitationMaster",
})