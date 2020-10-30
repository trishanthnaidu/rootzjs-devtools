import React from 'react';
import { createLeaf } from '@rootzjs/core';
import {
        Button,
        InputBase,
        DoneRounded
} from '../../Matlib';
import { Styles } from '../styles/setupInstructions';

const initialState = { copyToClipboard: false }
const onCopyToClipboard = ref => {
        ref.current.children[0].select();
        document.execCommand("copy");
        return {
                copyToClipboard: true
        }
};
const onSetupInstructionsClick = () => ({ index: "2" });
const selfActions = [onCopyToClipboard];
const nodeActions = [onSetupInstructionsClick];
const actions = [selfActions, nodeActions];

const Component = ({
        props,
        state,
        actions
}) => {
        const styl = Styles();
        const linkRef = React.useRef(null);
        return (
                <div className={styl.root}>
                        <InputBase
                                ref={linkRef}
                                defaultValue={`{ type: "guest", sessionId: "${props.config.id}" }`}
                                className={styl.inputBase}
                        />
                        <div id="config" className={styl.configContainer}>
                                <div className={styl.braces}>{"{"}</div>
                                <div className={styl.codeLine}>
                                        <span className={styl.key}>type</span>
                                        <span className={styl.operator}>:&nbsp;</span>
                                        <span className={styl.string}>"guest"</span>
                                </div>
                                <div className={styl.codeLine}>
                                        <span className={styl.key}>sessionId</span>
                                        <span className={styl.operator}>:&nbsp;</span>
                                        <span className={styl.string}>"{props.config.id}"</span>
                                </div>
                                <div className={styl.braces}>{"}"}</div>

                        </div>
                        {
                                !state.copyToClipboard ?
                                        <Button
                                                className={styl.copyBtn}
                                                onClick={() => actions.onCopyToClipboard(linkRef)}>Copy to Clipboard
                                        </Button>
                                        :
                                        <Button
                                                className={styl.copiedBtn}
                                                onClick={() => actions.onCopyToClipboard(linkRef)}
                                                startIcon={<DoneRounded />}
                                        >Copied to Clipboard
                                        </Button>

                        }
                        <div className={styl.contentPoints}>
                                <span>New to Rootz Devtools? checkout </span>
                                <span className={styl.setupLink} onClick={actions.onSetupInstructionsClick}>Setup Instructions</span>
                        </div>
                </div>
        );
}

export const TrackingDetails = createLeaf({
        actions,
        Component,
        state: initialState,
        id: "#TrackingDetails",
        nodeId: "#SplashPlayground",
})