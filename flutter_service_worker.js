'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e78a76369a3b08c61110160f0a8461dc",
"assets/AssetManifest.bin.json": "74d1ad92d58811d879790a6897af6ab7",
"assets/AssetManifest.json": "5b4d84aeffde9d1476e8186cf2238cd5",
"assets/assets/MyIcons.ttf": "b24d2756b54d3efc55defc8ca00f61fe",
"assets/FontManifest.json": "6aecabc01fb18cf915b263376014c419",
"assets/fonts/MaterialIcons-Regular.otf": "ea73665ac894603fc446762cbdd2548c",
"assets/NOTICES": "7920d7e3af06a560d18f34386e16bfea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "e235e84d78d85359983afa7ce57972d2",
"canvaskit/canvaskit.wasm": "1cad5e9e2c4168c298de52fa20f24c6c",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "5503c4348c0eea56c3943ff4bbc43f42",
"canvaskit/chromium/canvaskit.wasm": "76ab8d295df8b3ee1573884b7cc14702",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "2c827842e74dc4290b2a3946e746eeae",
"canvaskit/skwasm.wasm": "8102e027ddbe0b41c59eb0ec4f4d68ce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "835b59cc9d11b19a51fbf90ee27987cf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ed955080c6118a5d84aea1479cfa665a",
"/": "ed955080c6118a5d84aea1479cfa665a",
"main.dart.js": "c34088ebce34f058e81ba508228a48ea",
"manifest.json": "5d918d9f22fc640519bca1790270b656",
"testInterface/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"testInterface/.git/config": "b48b66b96347d3e36de71ae233c8d1c0",
"testInterface/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"testInterface/.git/FETCH_HEAD": "48a6306fa4a91081775c518f6e4cbca5",
"testInterface/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"testInterface/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"testInterface/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"testInterface/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"testInterface/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"testInterface/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"testInterface/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"testInterface/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"testInterface/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"testInterface/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"testInterface/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"testInterface/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"testInterface/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"testInterface/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"testInterface/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"testInterface/.git/index": "fdc1d125a1f5fd17251ff2ade092176d",
"testInterface/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"testInterface/.git/logs/HEAD": "954a888f5015bcc34353f17ac4983a19",
"testInterface/.git/logs/refs/heads/main": "954a888f5015bcc34353f17ac4983a19",
"testInterface/.git/logs/refs/remotes/origin/HEAD": "7bd1ec727d8a4b543301c2fe6c83446f",
"testInterface/.git/logs/refs/remotes/origin/main": "a73fe21406032849608698a302590303",
"testInterface/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"testInterface/.git/objects/ae/dfc6006c9dbdf38e94dfe89105c264dc779206": "e2ddf6f67cdff8ac1fb3fa8b1a112e84",
"testInterface/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"testInterface/.git/refs/heads/main": "cdd8d1ac8660d03c38187da0ddc18a75",
"testInterface/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"testInterface/.git/refs/remotes/origin/main": "cdd8d1ac8660d03c38187da0ddc18a75",
"version.json": "fc95c9f81e4bcd4ad0b5982c39216342"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
