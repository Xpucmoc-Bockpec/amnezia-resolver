import { Resolver } from 'node:dns';

const resolver = new Resolver();

resolver.setServers([
  '8.8.8.8',
  '8.8.4.4',
]);

export const resolveHostname = async (domainName) => {
  return new Promise((resolve, reject) => {
    resolver.resolve4(domainName, (error, result) => {
      if (error) {
        return reject(error);
      }

      return resolve(result);
    })
  });
}
