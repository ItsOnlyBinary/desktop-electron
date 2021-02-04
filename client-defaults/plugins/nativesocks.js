/* global kiwi */
const transport = require('irc-framework/src/transports/net');

kiwi.plugin('nativesocks', function (kiwi) {
    kiwi.on('network.connecting', function (event) {
        console.log('net connect', event);
        try {
            event.transport = transport;
            console.log('Set DefaultTransport to native sockets.');
        } catch (e) {
            console.log(e);
        }
    });
});
