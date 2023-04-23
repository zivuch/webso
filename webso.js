const ws = new WebSocket("wss://pchess.net:8443");
ws.send("/start classical analysis");
