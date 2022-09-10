const capitalize = (str: string) =>
  str
    .toLowerCase()
    .split(' ')
    .map((result) => result.charAt(0).toUpperCase() + result.slice(1))
    .join(' ');

export default capitalize;
