# Trying

`$ node app`

```
/Users/tgfjt/sample-svg2ttf/node_modules/svg2ttf/node_modules/svgpath/lib/path_parse.js:45
  this.max    = path.length;
                    ^
TypeError: Cannot read property 'length' of undefined
    at new State (/Users/tgfjt/sample-svg2ttf/node_modules/svg2ttf/node_modules/svgpath/lib/path_parse.js:45:21)
    at pathParse (/Users/tgfjt/sample-svg2ttf/node_modules/svg2ttf/node_modules/svgpath/lib/path_parse.js:216:15)
    at new SvgPath (/Users/tgfjt/sample-svg2ttf/node_modules/svg2ttf/node_modules/svgpath/lib/svgpath.js:27:16)
    at /Users/tgfjt/sample-svg2ttf/node_modules/svg2ttf/index.js:133:19
    at arrayEach (/Users/tgfjt/sample-svg2ttf/node_modules/svg2ttf/node_modules/lodash/index.js:1289:13)
    at Function.<anonymous> (/Users/tgfjt/sample-svg2ttf/node_modules/svg2ttf/node_modules/lodash/index.js:3345:13)
    at svg2ttf (/Users/tgfjt/sample-svg2ttf/node_modules/svg2ttf/index.js:128:5)
    at Object.<anonymous> (/Users/tgfjt/sample-svg2ttf/app.js:6:14)
    at Module._compile (module.js:430:26)
    at Object.Module._extensions..js (module.js:448:10)
```

# glyphs

```js
[ { contours: [], id: 0, height: 0, name: '', width: 0 },
  { contours: [],
    id: 1,
    height: 512,
    name: 'view',
    width: 512,
    d: 'M9.468765368 264.691291L9.468765368 246.315487C123.302832 62.395646 388.931551 62.395646 502.765617 246.315487L502.765617 264.691291C388.931551 448.6111329000001 123.302832 448.6111329000001 9.468765368 264.691291zM256.117191 145.121436C193.191322 145.121436 142.283125 194.585865 142.283125 255.514946C142.283125 316.4671422 193.191322 365.8391142 256.117191 365.8391142C318.947683 365.8391142 369.951258 316.4671422 369.951258 255.514946C369.951258 194.585865 318.947683 145.121436 256.117191 145.121436z M313.034225 255.514946C313.034225 225.004177 287.544359 200.318191 256.117191 200.318191C224.690023 200.318191 199.176313 225.004177 199.176313 255.514946C199.176313 286.04883 224.690023 310.642359 256.117191 310.642359C287.544359 310.642359 313.034225 286.04883 313.034225 255.514946' },
  { contours: [], id: 2, height: 0, name: 'v', width: 0 },
  { contours: [], id: 3, height: 0, name: 'i', width: 0 },
  { contours: [], id: 4, height: 0, name: 'e', width: 0 },
  { contours: [], id: 5, height: 0, name: 'w', width: 0 } ]
```

# edit svg2ttf/index.js

Works fine.

```diff
diff --git a/index.js b/index.js
index 9804026..c5b94f8 100644
--- a/index.js
+++ b/index.js
@@ -126,6 +126,7 @@ function svg2ttf(svgString, options) {
   });

   _.forEach(glyphs, function (glyph) {
+    if (!glyph.d) return;

     //SVG transformations
     var svgPath = new SvgPath(glyph.d)
```
