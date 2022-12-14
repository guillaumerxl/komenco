import LayoutDashboard from '@views/layouts/dashboard.vue'

const context = require.context('.', true, /\.route\.js$/)
const Children = []

context.keys().forEach(key => {
  const definitions = context(key).default || context(key)
  
  if (Array.isArray(definitions)) {
    Children.push(...definitions)
  } else {
    Children.push(definitions)
  }
})

export default {
  path: '/',
  components: {
    default: LayoutDashboard,
  },

  children: Children,
}