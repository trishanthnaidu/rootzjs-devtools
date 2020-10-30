export const initConn = () => {
        const ws = window.WebSocket || window.MozWebSocket;
        if (!window.WebSocket) {
                console.log(
                        "%cSorry, but your browser doesn\'t support WebSocket",
                        "color: #fff; font-size:12px;  border-radius: 3px; padding: 2px 0 2px 7px; text-align: center; background-color: #e91e63a9;"
                );
                return;
        }
        // connection
        let conn = new ws('ws://localhost:1918');
        return conn;
}