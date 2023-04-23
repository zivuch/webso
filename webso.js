const ws = new WebSocket("ws://pchess.net:8443");
ws.send("/start classical analysis");
