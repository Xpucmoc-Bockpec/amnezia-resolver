import { generateAmneziaConfig } from './services/generate-amnezia-config.js';
import { fetchDomainsFromUrl, readFile } from './services/domain-fetcher.js';
import { generateOpenvpnConfig } from './services/generate-openvpn-config.js';

const domains = [
  ...readFile('domains'),
];

const sources = readFile('custom-sources');

for (const source of sources) {
  const domainsFromSource = await fetchDomainsFromUrl(source);

  domains.push(...domainsFromSource);
}

console.info(`Found ${domains.length} domains`);

generateAmneziaConfig(domains);
generateOpenvpnConfig(domains);
