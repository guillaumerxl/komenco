import { createRouter, createWebHistory } from 'vue-router'

const context = require.context('./', true, /\.router\.js$/)
const Routes = []

context.keys().forEach(key => Routes.push(context(key).default))

export const router = createRouter({
  history: createWebHistory('/'),
  routes: Routes
})