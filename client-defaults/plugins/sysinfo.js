/* global kiwi */

const pkg = require('./package.json');
const os = require('os');

kiwi.plugin('sysinfo', function (kiwi) {
    kiwi.state.$on('input.command.sysinfo', function (event, command, params) {
        console.log(os);
        kiwi.state.getActiveBuffer().say('[\x02Client:\x02 ' + pkg.name + ' v' + pkg.version + '] [\x02OS:\x02 ' + os.platform() + ' ' + os.arch + ' ' + os.release + ' ] [\x02CPU:\x02 ' + os.cpus().length + 'x - ' + os.cpus()[0].model + '] [\x02Memory:\x02 ' + ((os.totalmem - os.freemem) / 1000000) / 1024 + 'GB free out of ' + (os.totalmem / 1000000) / 1024 + 'GB]');
    });
});
