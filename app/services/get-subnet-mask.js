const isReserved = (parts) => {
  // 10.0.0.0 - 10.255.255.255
  if (parts[0] === 10) {
    return true;
  }

  // 172.16.0.0 - 172.31.255.255
  if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) {
    return true;
  }

  // 192.168.0.0 - 192.168.255.255
  if (parts[0] === 192 && parts[1] === 168) {
    return true;
  }

  return false;
}

export function getSubnetMask(ip) {
  if (!ip) {
    return null;
  }

  const parts = ip.split('.').map(Number);

  if (parts.length !== 4 || parts.some(part => part < 0 || part > 255) || isReserved(parts)) {
    return null;
  }

  return `${parts[0]}.${parts[1]}.${parts}.0/24`;
}
