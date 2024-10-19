# amnezia-resolver

Ежедневно генерирует конфиг для сплит-туннелинга [AmneziaVPN](https://github.com/amnezia-vpn) и выгружает актуальный [amnezia_sites.json](https://github.com/Xpucmoc-Bockpec/amnezia-resolver/releases/tag/latest) в формате релиза.

**Резолвит IP адреса для доменов из списков:**

  - [domains.list](./data/domains.list) — список доменов, отобранных вручную

  - [custom-sources.list](./data/custom-sources.list) — по прочим спискам, собираемых сообществом

## Автоматическое обновление (MacOS)

```
(crontab -l 2> /dev/null; echo "0 */2 * * * curl https://github.com/Xpucmoc-Bockpec/amnezia-resolver/releases/download/latest/amnezia_sites.json > ~/Documents/amnezia_sites.json") | crontab -
```

<details>
  <summary><b>Выдать cron доступ к чтению и записи на диск</b></summary>
  <img width="947" alt="image" src="https://github.com/user-attachments/assets/20707a74-c4fc-4a5d-b4b2-95517cd5a2d1">

  - Нажать плюсик снизу
  - **Shift + Command + G** → `/usr/sbin/cron`
 </details>
