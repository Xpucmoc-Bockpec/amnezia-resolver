# amnezia-resolver

Генерирует конфиг для сплит-туннелинга [AmneziaVPN](https://github.com/amnezia-vpn).

1. Резолвит IP адреса для доменов из списков:

    - [domains.list](./data/domains.list) — список доменов, отобранных вручную

    - [custom-sources.list](./data/custom-sources.list) — по прочим спискам, собираемых сообществом

2. Ежедневно автоматически выгружает актуальный [amnezia_sites.json](https://github.com/Xpucmoc-Bockpec/amnezia-resolver/releases/tag/latest) в формате релиза.

## Автоматическое обновление

```
(crontab -l 2> /dev/null; echo "0 */2 * * * curl https://github.com/Xpucmoc-Bockpec/amnezia-resolver/releases/download/latest/amnezia_sites.json > ~/Documents/amnezia_sites.json") | crontab -
```
