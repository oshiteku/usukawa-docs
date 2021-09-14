---
sidebar_position: 2
---

# OBS Browser Source API

## Browser Source の作成

### Topic

```
PUB /broadcaster/browser-source/create
```

### Message

| key       | type   | description       |
| --------- | ------ | ----------------- |
| data.name | string | Browser Source 名 |
| data.url  | string | Web ページの URL  |

### メッセージ例

```json
{
  "topic": "broadcaster/browser-source/add",
  "type": "message",
  "data": {
      "name": "example browser source",
      "url": "https://example.com"
  }
}
```
