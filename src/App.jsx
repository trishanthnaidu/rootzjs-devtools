import React from 'react';
import { createNode } from '@rootzjs/core';
import { Splash } from './components/Splash';
import { Master } from "./components/Master";
import { initConn } from './service/InitConn';
import { GuestInvitation } from './components/GuestInvitation';
import { getSessionId, whenConnected } from './components/actions/App';

import './assets/stylesheets/animate.css';

const initalState = {
      isConnected: false,
      hasHostArrived: false,
      hasSubmittedName: false
};
const sessionId = getSessionId();
const config = { sessionId: sessionId, type: 'host' };
const extractQueryFromURL = () => {
      try {
            return JSON.parse(decodeURIComponent(window.location.search).replace("?", ""));
      } catch {
            return {}
      }
}
const getFilters = props => {
      const queryData = extractQueryFromURL();
      if (Boolean(Object.keys(queryData).length) && queryData.hasOwnProperty("isInvite")) {
            return {
                  ...queryData
            }
      } else {
            return false
      }
}

const Component = ({
      props,
      state,
      actions
}) => {
      let conn = initConn();
      const configQueryString = getFilters();
      const isInvite = Boolean(configQueryString);
      React.useEffect(() => {
            conn.onopen = function () {
                  console.log(
                        "%cconnetion Ok...",
                        "color: #fff; font-size:12px;  border-radius: 3px; padding: 2px 0 2px 7px; text-align: center; background-color: #e91e63a9;"
                  );

                  if (!isInvite) {
                        conn.send(JSON.stringify(config));
                  }
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

      if (isInvite) {
            if (state.hasSubmittedName) {
                  return (
                        <Master {...props} config={config} version="0.1.0" />
                  )
            } else {
                  return (
                        <GuestInvitation conn={conn} config={configQueryString} />
                  )
            }
      } else {
            if (!state.hasHostArrived) {
                  return (
                        <Master {...props} config={config} version="0.1.0" />
                  )
            } else {
                  return (
                        <Splash config={config} />
                  )
            }
      }
}
const selfActions = [whenConnected];
const actions = [selfActions, []];

export const RootzjsOrg = createNode({
      actions,
      Component,
      id: "#App",
      state: initalState
})