const rpc = require('rpc-websockets').Client;

const ws = new rpc('ws://localhost:4000');
ws.on('open', () => {
    ws.subscribe('A');
    ws.subscribe('B');
    ws.subscribe('C');
    ws.on('A', () => console.log('A event was fired'));
    ws.on('B', () => console.log('B event was fired'));
    ws.on('C', () => console.log('C event was fired'));
});

