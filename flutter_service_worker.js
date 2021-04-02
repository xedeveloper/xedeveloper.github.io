'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ad1feff329665e5314d31705f975ab64",
".git/config": "57e5e75caf79411a1bbb0cdc793c630f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "295dde06baa2b5a8ee79d4b50553a46e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "90110bb418062be7d5d92fab91f3630c",
".git/logs/refs/heads/main": "5ccf61e803893526fd0609d21d524549",
".git/logs/refs/remotes/origin/main": "bf35ec8a3a272149ab099b834bfb472a",
".git/objects/00/b7149d466b4af0013cad24ed071d50c010ca19": "0d208882cece5786d212d928aeb5fb1d",
".git/objects/03/e4f7ee0db6711abc7a4657fc14fe558659c358": "548ecaf5edd9c9715dd23216cdde518f",
".git/objects/0d/7d9f2f6f3895ffd7101bc7eb502b825ab7767f": "e560e3f7cc9e063c8ff5c2faaeab2644",
".git/objects/1f/7b9d31870afbe6ffb91e9b628bb939f6b33254": "090ca254b89d146969d5cf091f574344",
".git/objects/1f/c37c736bb21c435904eea88581aac28a1588e1": "12ec527e5598cffd07c5478cb5a38c10",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/31/56210dc40faa5ecb7289784661657f773f4cab": "e7058378207cb9bdf8791c6873bce981",
".git/objects/43/97db402b283f64ef6774fac653716a41d03960": "0be94aedeb04ff62f841ef45a7ddf9d8",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/e8dd28c86f73bda6dd3404500c9f60a4b477a5": "f3a771eeda0197cb9138f0c2bb840461",
".git/objects/52/b5849f59d4d5a7333e60cb072f42daba8cf658": "ddbb7f056a8a95a2b4ac5e5fa4baa9f2",
".git/objects/58/ba3c019cacf5b79b9c8069be4e8a363d59de21": "1b5789d11a4b4eae33320a5877f35572",
".git/objects/59/bf2ae0aeaf76989337d43ce65892452728b508": "73790f918575f9717f09ec48e6e224b3",
".git/objects/69/4b018d5df608f330bc4e37c4096e0c296c7dee": "14ab4bf47b4f303d4e2a2706f9eb39b4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/f3949a4f23832ec176b2838bc1b279f80c907c": "2ba9ef93486001fc8fc4df582a97ae80",
".git/objects/7f/d94a28bd876f1c1b5e0f7482e8b477cc208509": "61be0434fed8785c0420c42cba7b4642",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/86/fc06a186e784de20ecbae82a18169d0d795f46": "c84532ba5a5221a6e1c654734d5269d9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9f/37857d8d1044f843f7e476d1369c0d6e7edadd": "ac58a8886ef221446c2f46c5a4adeaeb",
".git/objects/a0/9d8b9ddff5ffe9b7ed9ae47c16506ae1f790c7": "aa8aee23ba392ca85a938de09b3bbc17",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/cbb9d4378d2230d2d22d44362832f8d05a33dc": "568b0c440f47581ee36b22e2c8270707",
".git/objects/a5/1e72d576419d53c7c08353329702c803115516": "945bc05af77223167dba7339dbe3420b",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/c3eda64363133197327c58924e63f60bea3c4b": "4712e0b387e7532691486e289e95dd52",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/da5a7a9ddcb39143bd7fe40b4f188a029ba032": "e479fc3e90e9aa69f23d98cbcd76bb22",
".git/objects/de/d3caf9a99b7952eb48051740f4373d96d00272": "c96f122d019b9e62e20e510d7e377810",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/refs/heads/main": "4d680204d0445c517d3a3580de2bd159",
".git/refs/remotes/origin/main": "4d680204d0445c517d3a3580de2bd159",
"assets/AssetManifest.json": "262014b40f3c3d5ac3789261054a484a",
"assets/assets/fonts/DMSans-Bold.ttf": "071853031a2175ada019db9e6fd1585c",
"assets/assets/fonts/DMSans-Italic.ttf": "b89267290c0df2e03ae1b60bd14109c8",
"assets/assets/fonts/DMSans-Medium.ttf": "fbbc5a515be4021a9a36f048e25ad396",
"assets/assets/fonts/DMSans-Regular.ttf": "3e7f038b85daa739336e4a3476c687f2",
"assets/assets/images/Github.png": "3dc142f6f3b5b6cdfc8ec39d352ebb22",
"assets/assets/images/Instagram.png": "3d346cf09af132aa945709ef736c7e35",
"assets/assets/images/LinkedIn.png": "428634938e6f8dc68ddbea21e84a9f10",
"assets/assets/images/ProfileImage.png": "f0835596a20c5b7e9b5c70a0e2794591",
"assets/FontManifest.json": "9aa8f30b0a3c187472071cf89d72d74f",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "6b00c70041e75e5f6050974ee73f2f77",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e308fc433fc154acc0f0e390f7f9ca85",
"/": "e308fc433fc154acc0f0e390f7f9ca85",
"main.dart.js": "7e7d42ddadd1e5a35df97512c23dae9d",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
