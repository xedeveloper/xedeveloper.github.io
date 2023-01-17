'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "616c48083459dcc7b71de9ca030e6ebe",
"/": "616c48083459dcc7b71de9ca030e6ebe",
"main.dart.js": "260e9bd6b5e410b700240b017ef086f8",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "e205bd0a92de8b34071526f05085a5cf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5da416f974fc9ccfd6d7b6a35c007e3a",
".git/config": "f9dbc698fcacb45cb88f328f9dcbdb44",
".git/objects/61/8262d40417bb7ba4f4a4b5138ad5f3d5ab8e3e": "7e021feb0c537a60faee6e6d8a134d5f",
".git/objects/0d/7d9f2f6f3895ffd7101bc7eb502b825ab7767f": "e560e3f7cc9e063c8ff5c2faaeab2644",
".git/objects/95/7e8fd449c9b61c2755909f0a47da00918f152c": "063622030b586ebd3edb9267b74c9429",
".git/objects/59/bf2ae0aeaf76989337d43ce65892452728b508": "73790f918575f9717f09ec48e6e224b3",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/0c/888b98ce57fabca4673a2cb5dd66c40cdfdae4": "69cbcc35302b558e65038b8ac2aa33b1",
".git/objects/0c/efe282871530073bce4b78926a3954c21b7733": "13bec29c931aae3bd5ad7d3d80ee059f",
".git/objects/50/fea8c0000e4fc63d3763e1cc6bfd9c6d4b8653": "14fda2cf450633a6ced25b3fdebf3a29",
".git/objects/50/fc233e0d6c685d955f6cc678a95d5b94de880c": "48b99169a6e714f1d4a6ceaeca29fdcd",
".git/objects/03/e4f7ee0db6711abc7a4657fc14fe558659c358": "548ecaf5edd9c9715dd23216cdde518f",
".git/objects/04/8a1ed74bd0b5171df8e1f5d45ec96302a63d4f": "1c980add93d8fe166dc39cc96fa05eb4",
".git/objects/6a/642d2640fda8a748ebc33025dc7b0594ae60c5": "2e6f0283e092e23455b67457ce945d91",
".git/objects/69/4b018d5df608f330bc4e37c4096e0c296c7dee": "14ab4bf47b4f303d4e2a2706f9eb39b4",
".git/objects/51/d2d0cdee55baef387849c899a3af36469012f9": "cc08c52d7a235d7e23e248d3527164fc",
".git/objects/3d/78b2c660f4dc7d4c395d36dfa210cf1540e366": "805f77a2860a47548b0f5b2b96ae6789",
".git/objects/58/ba3c019cacf5b79b9c8069be4e8a363d59de21": "1b5789d11a4b4eae33320a5877f35572",
".git/objects/67/d79656a2fdf9e174153a078668157fd60012c1": "acdd95815956cf9704e2a1a4908f29c1",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/5a/b176ad3eba3647ec6fc25dccb727ca99e1d977": "fff8e518256b8e3aaad1afa85d0d02c2",
".git/objects/5f/b8c7e541e0371bd9731d0214e2ecc1c26273e3": "22212f2e1a8bd1e5fc6b22c722746724",
".git/objects/33/a361821380dd5def73a5ed47d1076d211b4300": "b3f51e720ad6ae660738a2548472bebf",
".git/objects/a4/cbb9d4378d2230d2d22d44362832f8d05a33dc": "568b0c440f47581ee36b22e2c8270707",
".git/objects/a4/b5d712cb031ee32c9c1086dd32674b393905ac": "b5179ddefb40061646576d97c0776f83",
".git/objects/d0/51dc19ca9794a5b8f09f4e63160ccd9b98af25": "9b9062596b9441704df2236974a5baff",
".git/objects/be/66e26902358d8002aa4f08b1d59f5408df45c4": "28633149a929a96c150b9e5376e92413",
".git/objects/b3/c3eda64363133197327c58924e63f60bea3c4b": "4712e0b387e7532691486e289e95dd52",
".git/objects/b4/32d6e79cadf48c4a4f60d4fe5c46347b336619": "3ae717bc45596e38c364da340522f3c5",
".git/objects/a5/1e72d576419d53c7c08353329702c803115516": "945bc05af77223167dba7339dbe3420b",
".git/objects/bd/da5a7a9ddcb39143bd7fe40b4f188a029ba032": "e479fc3e90e9aa69f23d98cbcd76bb22",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/fae148c3398d19f9c5b73734751e3fe1a8167e": "f5ceb654162d1d80d306c8bb45fbead3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/8e730052e15f47be9dbb818911ac4bfc8cb59b": "bf4c47ece47b50033b6ec901fdadc87a",
".git/objects/f4/1be71c9151193666b0eba754a5a6d2c27643ae": "107589edf17d1df2da46dcb523ac6298",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f6a7f1b1445358d38b74adc1f5f7fd3f9b94b6": "8de8a13ee57ab7eca83af0990c1f1a9e",
".git/objects/eb/3d23d4c7b12d65124f5fbb4ad3ed6b7190837a": "0a1a92018d3ea230514a5567d83354b3",
".git/objects/c7/a4fd03773cc4c870fb6c14d0f7f99e0e7838bf": "e2b4d7b2db7d7a02c92099880510d13f",
".git/objects/c0/fcc6eec8566d44e2dcca95b7b9d5497918a148": "f2b81a57df535ee6e60c6d6d002b72f0",
".git/objects/fc/cdf1870d3ae46d457283cd6d33fed9a3aa8a90": "e42c18b1dbaae87885a75131dc7528c9",
".git/objects/fc/19e5a576834b8e0003bd8c11e8270521f91d34": "5fb37680d06827d68e866526ae8495f4",
".git/objects/f2/24e60290db61d6d7980cd53d4f9d7aea86b4c5": "e85e67f55685d766bb5c070efffa1b3c",
".git/objects/f2/c1966419127a41cdbf55f9d2c7b187d4d6267c": "4a613b5e7b70f8872bd3daf7cc463ce0",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/e3/fca9ca3a373b1297e342fa93f07ec864da3313": "76e0e8f0ad17b2d320607acb7eff618c",
".git/objects/ca/c8913159064dc588652f0ecc9446a1056eff41": "466b2e67c337e25eae5874a8dc367c55",
".git/objects/fb/4113a25d9d3cd69c0743e9e65549bdd7c41049": "ce7b768801a7200e75512fb963150189",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/8f99997c79d84d4f0da102f710780a73db52cc": "e06bf18a0afec85c01caa6f9df485764",
".git/objects/11/2e4971b01e96459abed904eea213424b932d42": "c4fb5c386db344329d1bdd9f51418359",
".git/objects/7d/21e1befc3a388071afcfaf4dce5c269f4cf76c": "297eac08b3fd9ee3c4c4e1a9592d46dd",
".git/objects/7d/cb9a78a2afa8641d053f640ba2d6100b6c41dc": "f649ed8c26afe80048a681b08a08171e",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/42/bb32090e230b87c6d0a93571ea9debf054fd91": "2b89b36c8eec3d88bd667faae16ce248",
".git/objects/1f/c37c736bb21c435904eea88581aac28a1588e1": "12ec527e5598cffd07c5478cb5a38c10",
".git/objects/1f/7b9d31870afbe6ffb91e9b628bb939f6b33254": "090ca254b89d146969d5cf091f574344",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/17/109800b11006d8028a1aeba5f82df03e43ff17": "b8cd36962a522db8604a5d5cc8bdb56d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/5678bb8c5b07989383a0d592de7179616f7d02": "901007ae427a5320b940211416b700f9",
".git/objects/4d/6f7120ca41f0398614e0938850d929e2262fcb": "0bd4cbc0c6f526a781085df16657e02e",
".git/objects/86/fc06a186e784de20ecbae82a18169d0d795f46": "c84532ba5a5221a6e1c654734d5269d9",
".git/objects/72/cfc215afbbe5a84a767b39146eeedd1ab3a945": "5a6d01582113f2d2f7481388ed18718c",
".git/objects/2a/8d525b6c446f5fbda0943ebdb3662a523efa82": "b1d37245ab23cf3a4e7cb0fa8278836c",
".git/objects/43/97db402b283f64ef6774fac653716a41d03960": "0be94aedeb04ff62f841ef45a7ddf9d8",
".git/objects/88/f42f6cc2729948c5df9b870c4644043752c591": "6c69535db43e8a0f4171c33e2609f53f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/37857d8d1044f843f7e476d1369c0d6e7edadd": "ac58a8886ef221446c2f46c5a4adeaeb",
".git/objects/00/12f213e6118b891bfb3900dcd4a6d8be8b5edc": "5313c677527a3916c1e118eb17a9dbe9",
".git/objects/00/b7149d466b4af0013cad24ed071d50c010ca19": "0d208882cece5786d212d928aeb5fb1d",
".git/objects/6e/f7b6af11c686a21410dcb6f3b0346eae730e68": "6f766d410667ad977c5cc8edf02bf93f",
".git/objects/6e/53f63f792d0a26c2c2319fb520d6ff4381494f": "a78154a6f61fc369c7a5e4fc59e7693e",
".git/objects/09/2294e8d54428ddc60d2a4d5374690a4078e69c": "abd042d3f45f0a9f39d44897d2c13ed8",
".git/objects/31/56210dc40faa5ecb7289784661657f773f4cab": "e7058378207cb9bdf8791c6873bce981",
".git/objects/3a/ab603c7edadaf7857d97b2875b955e334be00a": "c49c8f7af7bde37422cb00074752a97c",
".git/objects/54/8379797b96417cae124b211ab2b410481093b8": "37dc4e86d3033e9cb77b34568dc492fc",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/fcd48770111e5eb98f099d03807457ffbffa40": "73dbf1236c28b3bbe3a0ed98e5e71779",
".git/objects/5e/0eade0505ce3f9bab532f41e88208a12f90c43": "420a8f2977ee59bc6c79663f2e8da6cf",
".git/objects/06/f48d8f5cd1df009c7cdf07e13e0cecdf9db44c": "61a2907eee78066fe68d8f1a4bdac59c",
".git/objects/52/b5849f59d4d5a7333e60cb072f42daba8cf658": "ddbb7f056a8a95a2b4ac5e5fa4baa9f2",
".git/objects/55/7c9851b987e99896a2ff5a706197ac3761eaf2": "92412c8d2d4a45c4e30f8eb3250e29a1",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a0/9d8b9ddff5ffe9b7ed9ae47c16506ae1f790c7": "aa8aee23ba392ca85a938de09b3bbc17",
".git/objects/a0/ba4a758fff892c6067aa1f0d6c1ba4aea37a7c": "79868d88f7068bc3a822c8403d9e33f1",
".git/objects/b1/1ab78ed2cd6f1695fb21162dda9357ef7ee6eb": "124fbab258c85384ff7d78691d3dd86a",
".git/objects/d5/ead7bf00ac7c46b28991d9da8ecc129a57fe95": "5a214f081d948596c3397a4cf012bb84",
".git/objects/d2/59eb042e6a2d418fa2b40dc3ea39bd62d09d1d": "bf4e1243bbb922429e3383e24bc798fe",
".git/objects/af/f030c448be2ef26881970b615d80924425585f": "9dff558e1ea643b95ac08602223403d7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/10ea70e905dc53e39a02ee27d8de4dabba3bf2": "c9cb208ab3885b1e31cf346e8efaf3a3",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/d3caf9a99b7952eb48051740f4373d96d00272": "c96f122d019b9e62e20e510d7e377810",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/7c492fda9448d5f7b6d007b8331a943c79381b": "2260e87fae83b64e30436713170feb13",
".git/objects/c3/fbeddca94c2c72a3036135675f84f8e4d7ae41": "1dc9ee25b8fc9dd22a2f13eabbf6bd57",
".git/objects/c3/6a0549813d0bfe5864e4d0c8cf37c1a08210a9": "926b395778a6bdc65b6238a51201d3de",
".git/objects/cd/374524e320b7b2240ede780abfa3cedf4b0228": "1f9f5dc2535bd9623d40ae1f1172fe87",
".git/objects/cc/55c1de3d0f733de990c1eaf36cdc4b0df03f6b": "ef97266970110d36c0e9cb183916f1ed",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f0/7b912a207bde30bd83057f71e88b62b1b1a075": "caad80dd88d8e4fa2f9283da5d73a87c",
".git/objects/f7/1ad8e500dc7d12b422294d93ce7cf49663b6ef": "0c4145034c983c77478c8a852c7f5665",
".git/objects/ff/49cbac4d75b74c55605ed96aaede3d9ade1361": "a398a5ec0b17b23478ffc5cf7c753074",
".git/objects/f8/75b874c903ec54e3536c63621dadbfa234be29": "136b3d43b035468788353c1468687ede",
".git/objects/f8/b72350a682b599fc6bed3ddfaf2abce4b9fec5": "494f26ad002a6c2b8e20d1ea96f3d140",
".git/objects/e0/fa13c5845483391b518e82e8db35b431311324": "d19fa135c6c0fa240995736238983c5e",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/2c/03087a8f6a96b45d0b4529f9432abf9d970906": "fd7e7f36a2fc739166180a8b65609179",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/62a34743702c82f2061c31ffb0561c3bf1ac23": "69200617f6a6418b561018910598e567",
".git/objects/83/4ef55f03b21890622ef7984ce3face729df033": "9afd2a778d0db85839e1025293179b48",
".git/objects/1b/c98750efbf0e61e8ee91d4a9b7f5b5281758fd": "bda18e57afe0648f4fb302839e3da13e",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/4a/23e7938f392121c0cb344c4962ce99e6f98851": "3c20aa1ea2e0fa7d42eefad1cdf1e11c",
".git/objects/4a/20f8cf3e28ceff4d33979c1d389b762144aad8": "f49d6bcd0a1daeda40ed252f30cc7b61",
".git/objects/4f/e8dd28c86f73bda6dd3404500c9f60a4b477a5": "f3a771eeda0197cb9138f0c2bb840461",
".git/objects/8d/3046ecc212a2a14c4122edaee4b06ea30829a1": "132393731d11a4c621db751d5252c60a",
".git/objects/8d/a62e52b31fa0489c8d4a5ceeceb9f26036bd79": "be895dd85eced7825c6fc8d9ae90bdef",
".git/objects/15/9b99bfbf64317af2aac0b379930f2674b6a607": "e53e1be7b790e6d0d4dcf56a8a7b4f99",
".git/objects/71/ab01955a909ba6f70b59e73adadfe2a096b50a": "1bb27814d9ddcad3b481ec60695c0baa",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/47/789d52712412b75ee6f1f12d64fbf3af9c38c7": "f488b1298b0737aeac112f7024869779",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/7f/d94a28bd876f1c1b5e0f7482e8b477cc208509": "61be0434fed8785c0420c42cba7b4642",
".git/objects/7a/f3949a4f23832ec176b2838bc1b279f80c907c": "2ba9ef93486001fc8fc4df582a97ae80",
".git/HEAD": "9ca7dc0aac2a438305abe15ad0cc35c9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6e04a97fe5fe66d938029fdb11d149eb",
".git/logs/refs/heads/web/v2": "ffa33d9db9414f12b7e5ed667d47320e",
".git/logs/refs/heads/main": "fae6a25cab65a036487fad589c5e94b1",
".git/logs/refs/remotes/origin/web/v2": "edd14805d487e509d1d741c86b7379ef",
".git/logs/refs/remotes/origin/main": "c324cdc70c5d99fc25f03ab75c2ddb33",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/web/v2": "25971df3ddc9ed9a9df57ad7e1fc7b8c",
".git/refs/heads/main": "e5a3e9aa9c021e7072a6128f899db51c",
".git/refs/remotes/origin/web/v2": "25971df3ddc9ed9a9df57ad7e1fc7b8c",
".git/refs/remotes/origin/main": "69f5cc0440ef841071ccf537e7a8e110",
".git/index": "0207ca7feb7cd93df2ec7ebe94e6d493",
".git/COMMIT_EDITMSG": "fa8762da9297c40372cd6d9df319d26e",
".git/FETCH_HEAD": "48b319e9d0bcadec5694f733b0605118",
"assets/AssetManifest.json": "36dffda51b2cc6ffa98d3498c9123cd8",
"assets/NOTICES": "20d5604de50a755a5009f6b862601c42",
"assets/FontManifest.json": "adc65003be4c2a2184f31c09d78d2f8d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "b5c6d3e6b5b9cae9feb9d20baa8d73c3",
"assets/fonts/manrope/Manrope-Medium.ttf": "36bd05140475db525b9617f601c201a6",
"assets/fonts/manrope/Manrope-SemiBold.ttf": "be79203f7047b78f1374f8658fe01208",
"assets/fonts/manrope/Manrope-ExtraBold.ttf": "5167c303a88f05722db3b07c584cbb40",
"assets/fonts/manrope/Manrope-Regular.ttf": "d132ed5224d61c7c2c71e44cd2750999",
"assets/fonts/manrope/Manrope-ExtraLight.ttf": "fc80ad19afcbea34e8dbdedb9e60bd45",
"assets/fonts/manrope/Manrope-Light.ttf": "d0704eb4a339c1895bf5d7a153a25c84",
"assets/fonts/manrope/Manrope-Bold.ttf": "2af19b388ce4f0e3617fed61faea284e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/svg/ic_LinkedIn.svg": "b24095797a43b22d6920a34841223127",
"assets/assets/images/svg/ic_email.svg": "f3107a5e87e3631f0536477cb96720c8",
"assets/assets/images/svg/ic_github.svg": "8e24f5da1b523fb8041ee294a4ef54a7",
"assets/assets/images/svg/ic_instagram.svg": "dac61636f887c53a8d870a2614d77981",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
