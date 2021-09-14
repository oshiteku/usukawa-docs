---
sidebar_position: 2
---

# OBS Browser Source API

## Browser Source の作成

### Topic

```
PUB /broadcaster/browser-source/create
```

### Message Data

| key    | type    | optional | default | description                     |
| ------ | ------- | -------- | ------- | ------------------------------- |
| name   | string  | -        | -       | ソース名                        |
| url    | string  | -        | -       | Web ページの URL                |
| width  | integer | yes      | 800     | Browser Source の横幅ピクセル数 |
| height | integer | yes      | 600     | Browser Source の高さピクセル数 |

### メッセージ例

```json
{
  "topic": "broadcaster/browser-source/create",
  "type": "message",
  "data": {
      "name": "example browser source",
      "url": "https://example.com"
  }
}
```
