<template>
  <section class="relative overflow-hidden flex flex-col h-screen w-screen max-h-screen max-w-screen">
    <header class="flex items-center space-x-10 h-20 px-10 py-5">
      <h1>
        {{ ENV_APP_TITLE }}
      </h1>

      <nav>
        <ul class="flex items-center space-x-5">
          <li
            v-for="link in navigation"
            :key="link.title"
          >
            <component 
              :is="link.is" 
              :to="link.to"
              :href="link.href"
              :target="link.target"
            >
              {{ link.title }}
            </component>
          </li>
        </ul>
      </nav>
    </header>

    <section class="relative overflow-scroll flex-1 p-10">
      <router-view></router-view>
    </section>

    <footer class="h-20 p-2">

    </footer>
  </section>
</template>

<script setup>
  import { computed } from 'vue'

  const navigation = computed(() => {
    return [{
      title: 'Accueil',
      is: 'router-link',
      to: '/',
    }, {
      title: 'À propos',
      is: 'a',
      href: 'https://grxl.fr',
      target: '_blank',
    }]
  })
</script>
