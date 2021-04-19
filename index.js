const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: 'ipc' });

let IDaplikacji = "ID_TWOJEJ_APLIKACJI";

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
            details : "Opis",
            assets : {
            large_image : "nazwa-obrazka", 
            large_text : "Tekst po najechaniu obrazka"
            },
            buttons : [{label : "Przycisk 1", url : "https://example.com/"},{label : "Przycisk 2", url : "https://example.com/"}]
        }
    }).then(x => {
        console.log(`Status jest wyświetlany przy pomocy aplikacji ${x.name}!`)
    })
})

client.login({ clientId : IDaplikacji }).catch(console.error);