/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cb01f2c8d7e649267b4a95fb9a98564f"
  },
  {
    "url": "assets/css/styles.20a0c06f.css",
    "revision": "93284a8eec78fc3c9ea51ef30bb9d82f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.cdb32486.js",
    "revision": "94fd09d9647a579dd2640f6beb8f5262"
  },
  {
    "url": "assets/js/2.f26b4261.js",
    "revision": "0ffc500f0c2e7b6b3910cd97742eb696"
  },
  {
    "url": "assets/js/app.20a0c06f.js",
    "revision": "63933f1c3102cf9defa53c8bf0294114"
  },
  {
    "url": "en/index.html",
    "revision": "20ac58502fd92b5e5312cd91052f001b"
  },
  {
    "url": "index.html",
    "revision": "269643c563d6e36ad7eee6eb1a7123a4"
  },
  {
    "url": "logo-ak.png",
    "revision": "500933b79a1cc3b8f3ca9ce9cf15cd44"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
