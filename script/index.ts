import fs from 'fs';
import path from 'path';

import data from './data/color.json';

(() => {
  const color = {};

  data.forEach((item) => {
    color[
      item.name
        .replace('À', 'A')
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .replace(/\s/g, '')
    ] = {
      hex: item.hex,
      hsl: item.hsl,
      rgb: item.rgb,
    };
  });

  const outPathts = path.join(__dirname, '../src/data/color.data.ts');

  fs.writeFileSync(
    outPathts,
    `const ColorName = ${JSON.stringify(
      color,
    )}${'\r\n'}export default ColorName;`,
    'utf8',
  );
})();
