<div align="center">
  <img src="https://raw.githubusercontent.com/sptruz/color-name/main/assets/logo.svg" alt="@MKAbuMattar/sptruz"
   width="400" height="200"
  />

  <h1>@sptruz/color-name</h1>

<a href="https://sptruz.vercel.app/">https://sptruz.vercel.app/</a>

  <p>@sptruz/color-name is a package for a list of color names.</p>
</div>

## Installation

### Node/npm

```sh
#npm
npm install --save @sptruz/color-name

#yarn
yarn add @sptruz/color-name

#pnpm
pnpm add @sptruz/color-name
```

### Deno

Unlike Node, Deno doesn't use a package management like NPM and instead depends on direct URL imports. You can access @sptruz/color-name on deno.land/x. This is how the most recent version may be imported:

You can also specify a particular version:

```ts
import * as sptruzColorName from 'https://deno.land/x/sptruz_color_name@0.0.0-beta.0.0.2/mod.ts';
```

or letest version:

```ts
import * as sptruzColorName from 'https://deno.land/x/sptruz_color_name/mod.ts';
```

### CDN

```html
<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/@sptruz/color-name/lib/index.umd.js"></script>

<!-- Unpkg -->
<script src="https://unpkg.com/@sptruz/color-name/lib/index.umd.js"></script>
```

> NOTE: There isn't much of a change in how it's used, but the remainder of this README assumes you're using npm and importing straight from the @sptruz/color-name.

## Basic usage

```ts
import sptruzColorName from '@sptruz/color-name';

(() => {
  // get value of Red
  console.log(sptruzColorName.Red);
  // output: { hex: '#ff0000', hsl: [ 0, 100, 50 ], rgb: [ 255, 0, 0 ] }

  // get hex value of Red
  console.log(sptruzColorName.Red.hex);
  // output: #ff0000

  // get hsl value of Red
  console.log(sptruzColorName.Red.hsl);
  // output: [ 0, 100, 50 ]

  // get rgb value of Red
  console.log(sptruzColorName.Red.rgb);
  // output: [ 255, 0, 0 ]
})();
```

## Supports

- color name value
  - hex value | example: `#ff0000`
  - hsl value | example: `[ 0, 100, 50 ]`
  - rgb value | example: `[ 255, 0, 0 ]`

## License

@sptruz/color-name is licensed under the [MIT License](https://raw.githubusercontent.com/sptruz/color-name/main/LICENSE).

Created with ♥ by [@MKAbuMattar](https://github.com/MKAbuMattar).
