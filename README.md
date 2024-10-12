# amnezia-resolver

Ежедневно генерирует конфиг для сплит-туннелинга [AmneziaVPN](https://github.com/amnezia-vpn) и выгружает актуальный [amnezia_sites.json](https://github.com/Xpucmoc-Bockpec/amnezia-resolver/releases/tag/latest) в формате релиза.

**Резолвит IP адреса для доменов из списков:**

  - [domains.list](./data/domains.list) — список доменов, отобранных вручную

  - [custom-sources.list](./data/custom-sources.list) — по прочим спискам, собираемых сообществом

## Автоматическое обновление (MacOS)

```
(crontab -l 2> /dev/null; echo "0 */2 * * * curl https://github.com/Xpucmoc-Bockpec/amnezia-resolver/releases/download/latest/amnezia_sites.json > ~/Documents/amnezia_sites.json") | crontab -
```
