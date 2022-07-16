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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8f2c589653716cdb80ae6b9ce012a376"
  },
  {
    "url": "assets/bg.jpeg",
    "revision": "5878374960d0f62be8a0ab7929a7fa40"
  },
  {
    "url": "assets/css/0.styles.4902914e.css",
    "revision": "2663cc212bd9c4bbe837ca5fe0d06439"
  },
  {
    "url": "assets/favicon.png",
    "revision": "8b391fc73d627aba09ca7a1574cd902c"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/code.2de987e3.png",
    "revision": "2de987e3c7f5fac01de87dd6d1d89203"
  },
  {
    "url": "assets/img/mulu.e14feae8.png",
    "revision": "e14feae8e0e103023f73865fbe4c92dc"
  },
  {
    "url": "assets/img/xinjian.c3330f96.png",
    "revision": "c3330f96bced124674b2243c4bd50919"
  },
  {
    "url": "assets/img/yuandanxiaoguo.3a01b788.png",
    "revision": "3a01b788317e4a4ae626ea7474256684"
  },
  {
    "url": "assets/js/1.0a834e89.js",
    "revision": "4ed32e9f73aaca570a4c99666f787f54"
  },
  {
    "url": "assets/js/10.4117f520.js",
    "revision": "78e5eeee43f5602170d7b4c80ec6a28d"
  },
  {
    "url": "assets/js/11.1141bfe9.js",
    "revision": "f4c35dfed742e2a5ee0e4d537040c1b2"
  },
  {
    "url": "assets/js/12.e0bdc835.js",
    "revision": "13051fffa6efa056e2f610f836eb4d5c"
  },
  {
    "url": "assets/js/13.44d5af5a.js",
    "revision": "288048502cf5fcacc2fbe044d29357b7"
  },
  {
    "url": "assets/js/14.4a856088.js",
    "revision": "9ebe78406daccc9a34d650536f3bd9e8"
  },
  {
    "url": "assets/js/15.a3ac8f12.js",
    "revision": "5e33d4ed92407df76e6248141e34192f"
  },
  {
    "url": "assets/js/16.4c4d333c.js",
    "revision": "9359a88b693520115dd9f1a45aabc136"
  },
  {
    "url": "assets/js/17.efe441ae.js",
    "revision": "2a174012412d3f98bc42d4589332e8a4"
  },
  {
    "url": "assets/js/3.4167712d.js",
    "revision": "b0e9e4b9b32f751b5c68ca1a6678c96b"
  },
  {
    "url": "assets/js/4.b8c4c814.js",
    "revision": "b6c6d9b23ff0521d7df67732bd914f53"
  },
  {
    "url": "assets/js/5.9e934d21.js",
    "revision": "619a421b197302792974c2cd9ca405a3"
  },
  {
    "url": "assets/js/6.259628ad.js",
    "revision": "3622e1cdc1d90266572995819bead499"
  },
  {
    "url": "assets/js/7.258a4686.js",
    "revision": "ecb37d0e8bfd5e7e1661c26aee31c74b"
  },
  {
    "url": "assets/js/8.20dbffd8.js",
    "revision": "9ca6815eb8d9f714bc5b3cd32983bbba"
  },
  {
    "url": "assets/js/9.3439655e.js",
    "revision": "2468d81a900fc8db10da470b0becc1a5"
  },
  {
    "url": "assets/js/app.161b4a4f.js",
    "revision": "6ba91344fb76ee11da9567464d2a20e6"
  },
  {
    "url": "assets/portrait.jpg",
    "revision": "87b5477e7cbef464316ae57457c44dd8"
  },
  {
    "url": "blog/2022/doc.html",
    "revision": "062ed1dc0e41697bd1beb6525302ecda"
  },
  {
    "url": "blog/2022/write.html",
    "revision": "ad07e4211772143e5f49320878e0fe2d"
  },
  {
    "url": "blog/2022/yuandan.html",
    "revision": "cf6bffeb7cedbe65a7828bf3fd50e410"
  },
  {
    "url": "categories/index.html",
    "revision": "1f028a32219934fbd74f10f5486ea98e"
  },
  {
    "url": "categories/个人日记/index.html",
    "revision": "4332e0ad596c87a4c490d7ce5982e12a"
  },
  {
    "url": "index.html",
    "revision": "7ef116f5f264149b7e525115c39ee229"
  },
  {
    "url": "net/index.html",
    "revision": "34d21085ca6813f82cae5431618b6080"
  },
  {
    "url": "net/route.html",
    "revision": "d03ab5e2a80d85b8b8ef94f81320a0f6"
  },
  {
    "url": "tag/index.html",
    "revision": "7faa56676532b80dbb3b535bc1e51370"
  },
  {
    "url": "tag/技巧/index.html",
    "revision": "fed4aa0927fec7c84f0acd337b1a49ad"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "223aa7c20061d01d7c95ee7863167a29"
  },
  {
    "url": "timeline/index.html",
    "revision": "1debd6415b06cb42c64c0a47c50bc123"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
