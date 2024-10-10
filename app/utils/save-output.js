import { resolve } from 'node:path';
import { writeFileSync } from 'node:fs';

export const saveOutput = (output) => {
  const path = resolve(process.cwd() + `/output/amnezia_sites.json`);

  return writeFileSync(path, JSON.stringify(output, null, 2));
}
