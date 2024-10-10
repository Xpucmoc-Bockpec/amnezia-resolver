export const readHostnamesFromUrl = async (url) => {
  const result = await fetch(url);
  const content = await result.text();

  return content.replaceAll('\r', '').split('\n').filter(domain => !!domain);
}
