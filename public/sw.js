const CACHE_NAME = "lanier-plumbing-v1";
const STATIC_ASSETS = [
	"/",
	"/about",
	"/contact",
	"/hero-image.webp",
	// Add other static assets
];

self.addEventListener("install", (event) => {
	event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)));
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			return response || fetch(event.request);
		})
	);
});
