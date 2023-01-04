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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "2df2b32a940ba87fdfcb998854611d79"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.6cf31e52.css",
    "revision": "cba2c70baa25652872d2866e16b73ec4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8bb90fe2.js",
    "revision": "b0fff5d1490c55d157254efb378f61d8"
  },
  {
    "url": "assets/js/11.d39b0c7b.js",
    "revision": "656a5ed610b75f3eb2c728cca996f75f"
  },
  {
    "url": "assets/js/12.b83abec8.js",
    "revision": "92e1d2b303b3359168a2509dda440b64"
  },
  {
    "url": "assets/js/13.de173725.js",
    "revision": "8d34de6cd0d7ff71d91b96e482507886"
  },
  {
    "url": "assets/js/14.a508dcc0.js",
    "revision": "27f18fdedaf4bcb79210eb32e835beb7"
  },
  {
    "url": "assets/js/15.f596fbc1.js",
    "revision": "37208c3cabdc7ea23b043bada4376043"
  },
  {
    "url": "assets/js/16.91708cce.js",
    "revision": "d40a7894d816fea5b7c70a93ff602a8c"
  },
  {
    "url": "assets/js/17.7ebba6b4.js",
    "revision": "44799fd0894c18c64991ebac4392b04a"
  },
  {
    "url": "assets/js/18.8c33b593.js",
    "revision": "fe0fc71492c5a7568e527e18f7574a19"
  },
  {
    "url": "assets/js/19.298b157d.js",
    "revision": "962f1b70be7fda7e0b7bae795e1aba5a"
  },
  {
    "url": "assets/js/2.a41d05a8.js",
    "revision": "7ac506ce36c4252457f85bf59089d782"
  },
  {
    "url": "assets/js/20.b1db9bf0.js",
    "revision": "06470254964664d28666ff4a34153d37"
  },
  {
    "url": "assets/js/21.161f1e99.js",
    "revision": "d38b784cbd5f000d458bbd8450a2c4df"
  },
  {
    "url": "assets/js/22.082a991f.js",
    "revision": "2270990c304048ff571fd754225d444d"
  },
  {
    "url": "assets/js/23.8a90956d.js",
    "revision": "942f06550d6cfe16def4ad19415b0d2b"
  },
  {
    "url": "assets/js/24.078d05ad.js",
    "revision": "ee62b74a474ff8a4c705e037293392e2"
  },
  {
    "url": "assets/js/26.6eebb66c.js",
    "revision": "c3a04e9016b9d59bd232297f93899973"
  },
  {
    "url": "assets/js/3.7a09bfc8.js",
    "revision": "b70c4a1d8f643966a3c0e6939be1218a"
  },
  {
    "url": "assets/js/4.9dd7276c.js",
    "revision": "e8f8e565da8944c5bb48f272a5ed9abc"
  },
  {
    "url": "assets/js/5.ab980df4.js",
    "revision": "ef7e1aae501b9185c97e349366c5ae60"
  },
  {
    "url": "assets/js/6.0b8a97dc.js",
    "revision": "8a6ceecad926fde38e13729d339c85da"
  },
  {
    "url": "assets/js/7.f070d823.js",
    "revision": "bbc2c3577b60f3a3d25c2831c24b72d9"
  },
  {
    "url": "assets/js/8.7c5f40f7.js",
    "revision": "305d1ca36060249a1668584b4a564945"
  },
  {
    "url": "assets/js/9.9b338f51.js",
    "revision": "75ca770c5dbd671d6e9dad2296fd20a8"
  },
  {
    "url": "assets/js/app.319d688c.js",
    "revision": "6c455e281399e1599752841c30e00545"
  },
  {
    "url": "conclusion/index.html",
    "revision": "28d58dfc48398141645db10102483d1b"
  },
  {
    "url": "design/index.html",
    "revision": "4bf5da3a5617c852285222bdedfe71fa"
  },
  {
    "url": "index.html",
    "revision": "cd03d29f0aafac17405a2382b945944e"
  },
  {
    "url": "intro/index.html",
    "revision": "fad3802d3ccb466be868330f87931f5f"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "b2bff10196bb3e8141abd3b5bcb1c148"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "3b232a7451cc8b8e77bb6022dcfae081"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "fded25aec1bd6b77e7fb80aaaf60c2fd"
  },
  {
    "url": "software/index.html",
    "revision": "1161610b868585c8663c715244edb32b"
  },
  {
    "url": "test/index.html",
    "revision": "18ef84172222a397d1f970756d327f2b"
  },
  {
    "url": "use cases/index.html",
    "revision": "20fc8038a8fcc97376df8202d09720af"
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
