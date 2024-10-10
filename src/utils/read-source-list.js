import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';

export const readSourceList = (name) => {
  const path = resolve(process.cwd() + `/output/${name}.list`);

  return readFileSync(path).toString().replaceAll('\r', '').split('\n').filter(source => !!source);
}
