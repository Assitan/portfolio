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
    "revision": "3b23b751dc4ab28eb1c69256b1d2143e"
  },
  {
    "url": "assets/css/styles.549b5b26.css",
    "revision": "93284a8eec78fc3c9ea51ef30bb9d82f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.c44f1614.js",
    "revision": "94fd09d9647a579dd2640f6beb8f5262"
  },
  {
    "url": "assets/js/2.4d1f28dc.js",
    "revision": "46e62d3d405d5ad00ed286d436fac682"
  },
  {
    "url": "assets/js/app.549b5b26.js",
    "revision": "2c456f3da704557925f35b0da968ea2b"
  },
  {
    "url": "en/index.html",
    "revision": "3156903e269b7c666042798c94485d71"
  },
  {
    "url": "index.html",
    "revision": "14b41ba307e5d9134a89dee22ad4df9e"
  },
  {
    "url": "logo-ak.png",
    "revision": "500933b79a1cc3b8f3ca9ce9cf15cd44"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
