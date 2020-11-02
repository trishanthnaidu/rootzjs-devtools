import React from 'react';
import Crypto from 'crypto-js';
import { createNode } from '@rootzjs/core';
import { Splash } from './components/Splash';
import { Master } from "./components/Master";
import { initConn } from './service/InitConn';

import './assets/stylesheets/animate.css';

let sessionId = "";
const whenConnected = data => ({
      isConnected: data.isConnected || false,
      hasGuestArrived: data.hasGuestArrived || false
});
const actions = [[whenConnected], []];
const initalState = { isConnected: false, hasGuestArrived: false };
const cachedSessionId = sessionStorage.getItem("__rootzSessionId");

// use cached SessionId id present
if (Boolean(cachedSessionId)) {
      sessionId = cachedSessionId;
} else {
      sessionId = Crypto.MD5(new Date().getTime());
      sessionStorage.setItem("__rootzSessionId", sessionId);
}
const config = { sessionId: sessionId, type: 'host' };

const Component = ({
      props,
      state,
      actions
}) => {
      React.useEffect(() => {
            let conn = initConn();
            conn.onopen = function () {
                  console.log(
                        "%cconnetion Ok...",
                        "color: #fff; font-size:12px;  border-radius: 3px; padding: 2px 0 2px 7px; text-align: center; background-color: #e91e63a9;"
                  );
                  conn.send(JSON.stringify(config));
            };
            conn.onerror = function (error) {
                  console.log(
                        "%cSorry, but there\'s some problem with your connection or the server is down",
                        "color: #fff; font-size:12px;  border-radius: 3px; padding: 2px 0 2px 7px; text-align: center; background-color: #e91e63a9;"
                  )
            };
            conn.onmessage = function (resp) {
                  try {
                        let data = JSON.parse(resp.data);
                        actions.whenConnected(data);
                  } catch (e) {
                        console.log(
                              "%cInvalid JSON",
                              "color: #fff; font-size:12px;  border-radius: 3px; padding: 2px 0 2px 7px; text-align: center; background-color: #e91e63a9;"
                        )
                        return;
                  }
            };
      }, []);

      if (state.hasGuestArrived) {
            return (
                  <Master {...props} version="0.1.0" />
            )
      } else {
            return (
                  <Splash config={config} />
            )
      }

}

export const RootzjsOrg = createNode({
      actions,
      Component,
      id: "#Root",
      state: initalState
})