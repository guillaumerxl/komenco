import { createApp } from 'vue'
import { router } from './router'
import { store } from './store'
import portal from 'portal-vue'
import App from '@views/layouts/router.vue'

const VARENVS = Object.keys(import.meta.env).filter(envKey => envKey.startsWith('VITE_'))

export const app = createApp(App)

for (const varenv of VARENVS) {
  const cleanName = varenv.replace(/^VITE_/, 'ENV_')
  
  app.config.globalProperties[cleanName] = import.meta.env[varenv]
}

app.use(router)
app.use(store)
app.use(portal)

