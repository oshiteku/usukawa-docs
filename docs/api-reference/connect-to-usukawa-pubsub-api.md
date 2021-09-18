---
sidebar_position: 1
---

# Pub/Sub API への接続

```javascript
const endpointKey = "your_usukawa_endpoint_key";
const port = 5555;
const ws = new WebSocket(`ws://localhost:${port}/ws/${endpointKey}`);

// Send Subscribe Request
ws.addEventListener("open", (event) => {
    const request = {
        topic: "hoge/fuga",
        type: "subscribe",
    }
    ws.send(JSON.stringify(request));
});

// Listen messages
ws.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    console.log('Message from usukawa ', message);
});
```
