const { build, loadNuxt } = require('nuxt')
const app = require('express')()

const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const host = process.env.HOST || '0.0.0.0'


async function start () {
  // We get Nuxt instance
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  // Render every route with Nuxt
  app.use(nuxt.render)

  // Build only in dev mode with hot-reloading
  if (isDev) {
    build(nuxt)
  }
  // Listen the server
  app.listen(port, host)
  console.log(`Server listening on ${host}:` + port + '.')
}

start()
