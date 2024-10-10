# amnezia-resolver

Генерирует конфиг для сплит-туннелинга [AmneziaVPN](https://github.com/amnezia-vpn).

1. Резолвит IP адреса для доменов из списков:

    - [domains.list](./sources/domains.list) — список доменов, отобранных вручную

    - [custom-sources.list](./sources/custom-sources.list) — по прочим спискам, собираемых сообществом

2. Ежедневно автоматически выгружает актуальный [amnezia_sites.json](https://github.com/Xpucmoc-Bockpec/amnezia-resolver/releases/tag/latest) в формате релиза.

## Автоматическое обновление

> TODO
