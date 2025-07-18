export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/images/')) {
      const newHeaders = new Headers(request.headers);
      newHeaders.delete('Accept');

      const newRequest = new Request(request, {
        headers: newHeaders,
      });

      return fetch(newRequest);
    }

    return fetch(request);
  }
};
