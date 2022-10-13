# DiscordRPC-template
To jest przykładowy program do wyświetlania statusu napisany w JavaScript z wykorzystaniem biblioteki [discord-rpc](https://www.npmjs.com/package/discord-rpc).

## Przykładowa edycja:
```javascript
const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: 'ipc' });

let IDaplikacji = "825411861926379531";

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
            details : "Zapraszamy na serwer!",
            assets : {
            large_image : "owieczka", 
            large_text : "Owieczka Community"
            },
            buttons : [{label : "Zaproszenie", url : "https://discord.gg/owieczka"}]
        }
    }).then(x => {
        console.log(`Status jest wyświetlany przy pomocy aplikacji ${x.name}!`)
    })
})

client.login({ clientId : IDaplikacji }).catch(console.error);
```
#### Wynik:
![obraz](https://user-images.githubusercontent.com/62960395/115250108-8e6a6300-a129-11eb-8c42-25ac8c0d4b90.png)


## Jak użyć programu? (dla niedoświadczonych)
1. Zainstaluj [Node.js](https://nodejs.org/en/),
2. Pobierz pliki i rozpakuj,
3. Wejdź na [discord.com/developers](https://discord.com/developers) i stwórz nową aplikację,
4. Skopiuj ID aplikacji,
5. Otwórz plik **index.js** w edytorze kodu i w **ID_TWOJEJ_APLIKACJI** wklej ID.
6. Zedytuj program według własnego pomysłu (zobacz przykład kodu powyżej),
7. W miejsce ścieżki folderu (np. `C:/DiscordRPC-template`) wpisz `cmd`,
8. W wierszu polecenia wpisz `npm i` i poczekaj na zainstalowanie modułów,
9. Aby włączyć program użyj polecenia `node .` lub `node index.js`.

## Jak dodać obrazek?
1. Wejdź na [discord.com/developers](https://discord.com/developers) i wybierz swoją aplikację,
2. W zakładce **Rich Presence** kliknij `Add Image(s)`, wybierz obraz i go nazwij,
3. W kodzie w nawiasach przy `large_image` wpisz nazwę obrazka,
4. Włącz status.

Jeżeli obrazek nie wyświetla się, poczekaj do 10 minut.

[Kontakt](https://discord.com/users/684739865598099490) **|** [Licencja](LICENSE)
