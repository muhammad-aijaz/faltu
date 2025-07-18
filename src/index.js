export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)

    if (url.pathname.startsWith('/images/')) {
      const newReq = new Request(request, {
        headers: (() => {
          const h = new Headers(request.headers)
          h.delete('Accept')
          return h
        })()
      })
      return fetch(newReq)
    }

    return fetch(request)
  }
}
