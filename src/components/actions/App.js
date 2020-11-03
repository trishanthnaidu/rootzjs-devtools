import Crypto from 'crypto-js';

export const whenConnected = data => ({
        isConnected: data.isConnected || false,
        hasGuestArrived: data.hasGuestArrived || false
});

export const getSessionId = () => {
        let sessionId = "";
        const cachedSessionId = sessionStorage.getItem("__rootzSessionId");
        // use cached SessionId id present
        if (Boolean(cachedSessionId)) {
                sessionId = cachedSessionId;
        } else {
                sessionId = Crypto.MD5(new Date().getTime());
                sessionStorage.setItem("__rootzSessionId", sessionId);
        }
}