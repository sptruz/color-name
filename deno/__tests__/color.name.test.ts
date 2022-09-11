import { expect } from 'https://deno.land/x/expect@v0.2.6/mod.ts';
const test = Deno.test;

import ColorName from '../index.ts';

test('color name get hex', async () => {
  const color = ColorName.Red.hex;

  expect(color).toEqual('#ff0000');
});

test('color name get hsl', async () => {
  const color = ColorName.Red.hsl;

  expect(color).toEqual([0, 100, 50]);
});

test('color name get rgb', async () => {
  const color = ColorName.Red.rgb;

  expect(color).toEqual([255, 0, 0]);
});
