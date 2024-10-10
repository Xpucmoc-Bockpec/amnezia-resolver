import { Porro } from 'porro';
import { resolveHostname } from './resolve-hostname.js';

const bucket = new Porro({
  bucketSize: 500,
  interval: 1000,
  tokensPerInterval: 500,
});

export const resolveHostnameThrottled = async (hostname) => {
  const result = [];

  try {
    await bucket.throttle();

    const ips = await resolveHostname(hostname);

    for (const ip of ips) {
      result.push({
        hostname,
        ip,
      });
    }
  } catch (e) {
    console.debug(e.message);
  }

  return result;
}

export const resolveHostnames = async (hostnames) => {
  const results = await Promise.all(
    hostnames.map(hostname => resolveHostnameThrottled(hostname))
  );

  return results.flat();
}
