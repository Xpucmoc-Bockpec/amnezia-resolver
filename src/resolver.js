import { readSourceList } from './utils/read-source-list.js';
import { readHostnamesFromUrl } from './utils/read-hostnames-from-url.js';
import { resolveHostnames } from './utils/resolve-hostnames.js';
import { saveOutput } from './utils/save-output.js';


const output = [];

const hostnames = readSourceList('domains');

const resolvedIPs = await resolveHostnames(hostnames);

console.info(`Resolved ${resolvedIPs.length} IPs of ${hostnames.length} hostnames from domains.list`);

output.push(...resolvedIPs);

const customSources = readSourceList('custom-sources');

for (const url of customSources) {
  const hostnames = await readHostnamesFromUrl(url);
  const result = await resolveHostnames(hostnames);

  output.push(...result);

  console.info(`Resolved ${result.length} IPs of ${hostnames.length} hostnames from "${url}"`);
}

await saveOutput(output);

console.log('Done');
