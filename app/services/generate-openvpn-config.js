import { resolve } from 'node:path';
import { writeFileSync } from 'node:fs';
import { getSubnetMask } from './get-subnet-mask.js';
import { resolveDNSThrottled } from './dns-resolver.js';

export const generateOpenvpnConfig = async (domains) => {
  const result = new Map();
  const outputPath = resolve(process.cwd() + `/output/openvpn.conf`);

  const resolvedIPs = await Promise.all(
    domains.map(domain => resolveDNSThrottled(domain))
  );

  for (const ip of resolvedIPs.flat()) {
    const mask = getSubnetMask(ip);

    result.set(mask, `push "route ${mask} 255.255.255.0"`);
  }

  console.info(`Resolved ${result.size} IPs`);

  return writeFileSync(outputPath, [...result.values()].join('\n'), null, 2);
}
