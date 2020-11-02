import React from 'react';
import { createLeaf } from '@rootzjs/core';
import { Styles } from '../styles/setupInstructions';

const initialState = { copyToClipboard: false }
const onCopyToClipboard = () => ({ copyToClipboard: true });
const onTrackingDetailsClick = () => ({ index: "1" });
const selfActions = [onCopyToClipboard];
const nodeActions = [onTrackingDetailsClick];
const actions = [selfActions, nodeActions];

const Component = ({
        props,
        state,
        actions
}) => {
        debugger;
        const styl = Styles();
        return (
                <div className={styl.root}>
                        <div className={styl.contentPoints}>1.&nbsp;Install Rootz Devtools package</div>
                        <div className={styl.configContainer}>
                                <div className={styl.braces}>npm install @rootzjs/devtools --save</div>
                        </div>
                        <div className={styl.contentPoints}>
                                <span>2.&nbsp;Copy config from </span>
                                <span className={styl.setupLink} onClick={actions.onTrackingDetailsClick}>Tracking Details
                                </span>
                        </div>
                        <div className={styl.contentPoints}>3.&nbsp;Make following changes to root component of the application.
                                Once done you will be redirected to Rootz Devtools homepage.
                                <span className={styl.notation}> (If not refresh the current page or check whether you have entered the 
                                latest config in your application)</span>
                        </div>
                        <div className={styl.configContainer} style={{ width: "100%" }}>
                                <span className={styl.dataType}>import&nbsp;</span>
                                <span className={styl.braces}>{"{"}</span>
                                <span className={styl.key}>&nbsp;App&nbsp;</span>
                                <span className={styl.braces}>{"}"}</span>
                                <span className={styl.dataType}>&nbsp;from&nbsp;</span>
                                <span className={styl.string}>'./App'</span>
                                <span className={styl.braces}>;</span>
                                <div></div>
                                <span className={styl.dataType}>import&nbsp;</span>
                                <span className={styl.key}>&nbsp;RootzDevtools&nbsp;</span>
                                <span className={styl.dataType}>&nbsp;from&nbsp;</span>
                                <span className={styl.string}>'@rootzjs/devtools'</span>
                                <span className={styl.braces}>;</span>

                                <div className={styl.nextLine}></div>
                                <div className={styl.comments}>// Copy config from Tracking Details (copy latest)</div>
                                <span className={styl.dataType}>const&nbsp;</span>
                                <span className={styl.operator}>devtoolsConfig&nbsp;</span>
                                <span className={styl.equals}>=&nbsp;</span>
                                <span className={styl.braces}>{"{"}</span>
                                <div className={styl.codeLine}>
                                        <span className={styl.key}>Component</span>
                                        <span className={styl.operator}>:&nbsp;</span>
                                        <span className={styl.braces}>App,</span>
                                </div>
                                <div className={styl.codeLine}>
                                        <span className={styl.key}>environment</span>
                                        <span className={styl.operator}>:&nbsp;</span>
                                        <span className={styl.key}>process</span>
                                        <span className={styl.braces}>{"."}</span>
                                        <span className={styl.key}>env</span>
                                        <span className={styl.braces}>{"."}</span>
                                        <span className={styl.variable}>NODE_ENV</span>
                                        <span className={styl.braces}>,</span>
                                </div>
                                <div className={styl.codeLine}>
                                        <span className={styl.key}>config</span>
                                        <span className={styl.operator}>:&nbsp;</span>
                                        <span className={styl.braces}>{"{"}</span>
                                </div>
                                <div className={styl.codeLine} style={{ marginLeft: 70 }}>
                                        <span className={styl.key}>type</span>
                                        <span className={styl.operator}>:&nbsp;</span>
                                        <span className={styl.string}>"guest"</span>
                                        <span className={styl.braces}>,</span>
                                </div>
                                <div className={styl.codeLine} style={{ marginLeft: 70 }}>
                                        <span className={styl.key}>sessionId</span>
                                        <span className={styl.operator}>:&nbsp;</span>
                                        <span className={styl.string}>"{props.config.sessionId}"</span>
                                </div>
                                <div className={`${styl.codeLine} ${styl.braces}`} >{"}"}</div>
                                <div className={styl.braces}>{"}"}</div>

                                <div className={styl.nextLine}></div>
                                <span className={styl.dataType}>const&nbsp;</span>
                                <span className={styl.operator}>Main&nbsp;</span>
                                <span className={styl.equals}>=&nbsp;</span>
                                <span className={styl.braces}>RootzDevtools.</span>
                                <span className={styl.operator}>connect</span>
                                <span className={styl.braces}>{"(devtoolsConfig);"}</span>

                                <div className={styl.nextLine}></div>
                                <span className={styl.braces}>{"ReactDOM."}</span>
                                <span className={styl.operator}>render</span>
                                <span className={styl.braces}>{"(<"}</span>
                                <span className={styl.comp}>Main&nbsp;</span>
                                <span className={styl.braces}>{"/>, document."}</span>
                                <span className={styl.operator}>{"getElementById"}</span>
                                <span className={styl.braces}>{"("}</span>
                                <span className={styl.string}>{"'root'"}</span>
                                <span className={styl.braces}>{"));"}</span>
                        </div>
                </div>
        );
}

export const SetupInstructions = createLeaf({
        actions,
        Component,
        state: initialState,
        id: "#SetupInstructions",
        nodeId: "#SplashPlayground",
})