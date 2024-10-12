import { Resolver } from 'node:dns';
import { Porro } from 'porro';

const bucket = new Porro({
  bucketSize: 500,
  interval: 1000,
  tokensPerInterval: 500,
});

const resolver = new Resolver();

resolver.setServers([
  '8.8.8.8',
  '8.8.4.4',
]);

export const resolveDNS = async (domainName) => {
  return new Promise((resolve, reject) => {
    resolver.resolve4(domainName, (error, result) => {
      if (error) {
        return reject(error);
      }

      return resolve(result);
    })
  });
}

export const resolveDNSThrottled = async (hostname) => {
  const result = [];

  try {
    await bucket.throttle();

    const ips = await resolveDNS(hostname);

    result.push(...ips);
  } catch (e) {
    console.debug(e.message);
  }

  return result;
}
