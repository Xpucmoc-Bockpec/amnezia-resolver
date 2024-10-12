import { resolve } from 'node:path';
import { writeFileSync } from 'node:fs';
import { getSubnetMask } from './get-subnet-mask.js';
import { resolveDNSThrottled } from './dns-resolver.js';

export const generateAmneziaConfig = async (domains) => {
  const result = new Map();
  const outputPath = resolve(process.cwd() + `/output/amnezia_sites.json`);

  const resolvedIPs = await Promise.all(
    domains.map(domain => resolveDNSThrottled(domain))
  );

  for (const ip of resolvedIPs.flat()) {
    const mask = getSubnetMask(ip);

    result.set(mask, {
      ip: mask,
      hostname: mask,
    });
  }

  console.info(`Resolved ${result.size} IPs`);

  return writeFileSync(outputPath, JSON.stringify([...result.values()], null, 2));
}
