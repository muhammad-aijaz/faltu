export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)

    // only touch your images path
    if (url.pathname.startsWith('/images/')) {
      // clone the request and drop the Accept header
      const newReq = new Request(request, {
        headers: (() => {
          const h = new Headers(request.headers)
          h.delete('Accept')
          return h
        })()
      })
      return fetch(newReq)
    }

    // everything else unchanged
    return fetch(request)
  }
}
