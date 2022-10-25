importScripts("https://assets.pharmeasy.in/web-assets/dist/precache-manifest.760a5a4c5aecf54325d6271aea5226ab.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* workbox caching start here */
if (workbox) {
  //setting cache name and details
  workbox.core.setCacheNameDetails({
    prefix: 'pharmeasy-consumer-2021.6.1',
  });
  // precaching strategy, serve precached assets without waiting for service worker to update.
  workbox.core.skipWaiting();

  // sync service-workers if opened in simulatenous tabs
  workbox.core.clientsClaim();

  // precaching the assets
  // workbox.precaching.precacheAndRoute(self.__precacheManifest || [], {
  //   directoryIndex: null,
  //   cleanUrls: false,
  // });

  // adding cache first strategy for all images type at runtime. no need to precache it.
  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'pharmeasy-consumer-image',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 100,
          maxAgeSeconds: 12 * 30 * 24 * 60 * 60, // 365 Days
        }),
      ],
    })
  );

  // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    })
  );

  // Cache the underlying font files with a cache-first strategy for 1 year.
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
          maxEntries: 30,
        }),
      ],
    })
  );

  // runtime caching started here.

  // caching fetchArticle home page API
  workbox.routing.registerRoute(
    new RegExp('/api/home/fetchArticles'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'pharmeasy-api-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 15,
          maxAgeSeconds: 24 * 60 * 60, // 24 Hours
        }),
      ],
    })
  );

  // setting cache handler for all networkFirst requests.
  // serving offline page if network is gone.
  // Excluding api request from service worker so it will not give 200 response at first.
  // var networkFirst = new workbox.strategies.NetworkOnly();
  // workbox.routing.registerRoute(/^(?!(api|sandbox)\.juspay\.in)[a-z0-9+_.-]+$/, async ({ event }) => {
  //   try {
  //     return await networkFirst.handle({ event });
  //   } catch (error) {
  //     return caches.match(workbox.precaching.getCacheKeyForURL('/offline.html'));
  //   }
  // });
  // workbox.routing.registerRoute(/^((?!.*\/api\/.*).)*$/, async ({ event }) => {
  //   try {
  //     return await networkFirst.handle({ event });
  //   } catch (error) {
  //     return caches.match(workbox.precaching.getCacheKeyForURL('/offline.html'));
  //   }
  // });
  // // networkOnly strategy for start url page from manifest.
  // workbox.routing.registerRoute(/(.+)\?src=web-app$/, async ({ event }) => {
  //   try {
  //     return await networkFirst.handle({ event });
  //   } catch (error) {
  //     return caches.match(workbox.precaching.getCacheKeyForURL('/offline.html'));
  //   }
  // });
} else {
  console.log('Aww! Workbox is not loaded.');
}
/* workbox caching end here */

function logError(error) {
  if (Sentry) {
    Sentry.withScope((scope) => {
      scope.setTag('category', 'ServiceWorkerError');
      Sentry.captureException(error);
    });
  }
}

try {
  importScripts('https://s3-eu-west-1.amazonaws.com/static.wizrocket.com/js/sw_webpush.js');
} catch (error) {
  logError(error);
}

try {
  importScripts('https://assets.pharmeasy.in/web-assets/idb.js');
} catch (error) {
  logError(error);
}

// **** helper code, to be moved to a different file later ****

function getUrlParams(search) {
  let hashes = search.slice(search.indexOf('?') + 1).split('&');
  return hashes.reduce((params, hash) => {
    let [key, val] = hash.split('=');
    return Object.assign(params, { [key]: decodeURIComponent(val) });
  }, {});
}

function buildURL(url, params, queryParams = {}) {
  const segments = url.split('/');
  let newUrl = segments
    .map((segment) => {
      const offset = segment.indexOf(':') + 1;
      if (!offset) {
        return segment;
      }

      const key = segment.slice(offset);

      return params[key];
    })
    .join('/');

  if (Object.keys(queryParams).length !== 0 && queryParams.constructor === Object) {
    let queryParam = '';
    Object.keys(queryParams).forEach((key) => {
      queryParam += `${key}=${queryParams[key]}&`;
    });
    newUrl += `?${queryParam.slice(0, -1)}`;
  }

  return newUrl;
}

const deepLinkMap = {
  'deeplink/referral': '/account/refer-and-earn?src=header',
  'deeplink/diagnostic_order_details': '/account/orders/diagnostics/:order_id',
  'deeplink/medical_order': '/account/orders/0/:medicine_order_id',
  'deeplink/subscription': '/account/refill/:subscription_id',
  'deeplink/subscription_confirm': '/account/refill/:subscription_id/confirm-refill',
  'deeplink/diag_test_selection': '/diagnostics/all-tests',
  'deeplink/diag_package_selection': '/diagnostics/all-packages/:selected_lab_id',
  'deeplink/wallet': '/account/wallet?src=header',
  'deeplink/cart': '/cart?src=header',
  'deeplink/ecommerce_order': '/account/orders/3/:ecommerce_order_id',
  'deeplink/place_medicine_order': '/medicine-order?src=header',
  'deeplink/place_healthcare_order': '/health-care?src=header',
  'deeplink/home_orders_list': '/account/orders/medicine?src=header',
  'deeplink/home_manage_refills': '/account/refills/active?src=accounts-sidenav',
  'deeplink/article_details': '/blog/:article_id',
  'deeplink/navigation_articles_home': '/blog',
  'deeplink/account_meidical_records': '/account/medical-records?src=header',
  'deeplink/account_active_offers': '/offers?src=header',
  'deeplink/healthcare_product_list': '/health-wellness/products/:category_id',
  'deeplink/healthcare_product_details': '/health-wellness/:product_id',
  'deeplink/package_lab_list': '/diagnostics/all-labs',
  'deeplink/medicine_details': '/account/orders/0/:medicine_id',
  'deeplink/manage_refill': '/account/refill/:subscription_id',
  'deeplink/diagnostics_search_results': '/diagnostics/search/all',
};

self.helpers = {
  getURLFromDeepLink(deepLink) {
    if (!deepLink) {
      return '';
    }

    const key = `deeplink${deepLink.split('//deeplink')[1].split('?')[0]}`;

    const queryString = deepLink.split('?')[1];

    const queryParams = getUrlParams(queryString);

    const url = deepLinkMap[key];

    /**
     * If url has some dynamic routes path then we send them as a dynamic params
     * otherwise we will consider received queryparams as url query params and
     * send it as a query params not as a dynamic key.
     */
    if (url.includes(':')) {
      return buildURL(url, queryParams);
    }
    return buildURL(url, '', queryParams);
  },
};

// ****** service worker code starts from here ********

const IDB_VERSION = 1;
const IDB_NAME = 'service-worker-idb';
const IDB_NOTIF_STORE = 'push-notifications-store';

self.addEventListener('fetch', function () {
  // no-op for now
  // need to add caching for static assets
  // and pre-fetching of dynamic code
});

self.addEventListener('activate', function (event) {
  event.waitUntil(createDB(IDB_NOTIF_STORE));
});

function createDB(storeName) {
  idb.open(IDB_NAME, IDB_VERSION, (upgradeDB) => {
    if (!upgradeDB.objectStoreNames.contains(storeName)) {
      upgradeDB.createObjectStore(storeName, {
        keyPath: 'id',
        autoIncrement: true,
      });
    }
  });
}

self.addEventListener('push', function (event) {
  // console.log(`[PE-Service Worker] Push had this data: "${event.data.text()}"`);

  /* Put the notification data in indexed db, and consume it in the app */

  idb
    .open(IDB_NAME, IDB_VERSION)
    .then((serviceWorkerDB) => {
      const tx = serviceWorkerDB.transaction(IDB_NOTIF_STORE, 'readwrite');
      tx.objectStore(IDB_NOTIF_STORE).put({
        data: event.data.text(),
      });
      return tx.complete;
    })
    .then(() => {
      self.clients.matchAll().then((clients) => {
        clients.forEach(function (client) {
          client.postMessage({ eventName: 'PUSH_NOTIFICATION_STORED' });
        });
      });
    });
});

self.addEventListener('notificationclick', function (event) {
  event.stopPropagation();
  event.preventDefault();
  event.notification.close();
  var deepLink =
    event.srcElement && event.srcElement.globalNotificationData && event.srcElement.globalNotificationData.deepLink;

  if (!deepLink) {
    console.error('Deeplink not found for the notification.');
    return;
  }

  event.waitUntil(clients.openWindow(self.helpers.getURLFromDeepLink(deepLink)));
});

