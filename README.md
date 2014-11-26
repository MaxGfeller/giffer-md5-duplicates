giffer-md5-duplicates
=====================

[Giffer](https://github.com/maxgfeller/giffer) will never download a GIF from the same URL. However, if the same GIF comes from different URLs (e.g. when two adapters find the same GIF on a different site) then giffer would download both of them.

`giffer-md5-duplicates` additionaly saves the md5 hash into the database and checks it before saving a new GIF.

# Usage

```javascript
giffer.plugin(require('giffer-md5-duplicates'))
```
