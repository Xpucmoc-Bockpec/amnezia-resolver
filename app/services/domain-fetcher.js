import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';

export const readFile = (name) => {
  const path = resolve(process.cwd() + `/data/${name}.list`);

  return readFileSync(path)
    .toString()
    .replaceAll('\r', '')
    .split('\n')
    .filter(source => !!source);
}

export const fetchDomainsFromUrl = async (url) => {
  const result = await fetch(url);
  const content = await result.text();

  return content.replaceAll('\r', '')
    .split('\n')
    .filter(domain => !!domain);
}
