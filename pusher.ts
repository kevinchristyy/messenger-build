import Pusher from "pusher";
import ClientPusher from "pusher-js"

export const serverPusher = new Pusher({
    appId: "1535016",
    key: "d26b74717a8bdf8fc827",
    secret: "5d58d77aa24244ff2efb",
    cluster: "eu",
    useTLS: true
  });

export const clientPusher = new ClientPusher ('d26b74717a8bdf8fc827', {
    cluster: 'eu',
    forceTLS: true
  });