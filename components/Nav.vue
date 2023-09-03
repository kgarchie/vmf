<template>
  <nav class="nav">
    <div class="left">
      <NuxtLink to="/" class="logo">Violet Mbiti Foundation</NuxtLink>
    </div>
    <div class="right">
      <ul class="nav-links" ref="navLinks">
        <li class="nav-link">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="nav-link">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li class="nav-link">
          <NuxtLink to="/program">Program</NuxtLink>
        </li>
        <li class="nav-link">
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
      <div class="blur-veil" ref="blurVeil"></div>
      <div class="search" ref="search">
        <img src="/icons/search.svg" alt="🔍" @click="toggleSearch"/>
        <input type="text" placeholder="Search" ref="searchInput" @keyup.esc="toggleSearch"
               @keyup.enter="toggleSearch"/>
      </div>
      <div class="action">
        <NuxtLink>Donate</NuxtLink>
      </div>
      <div class="ham" @click="toggleActive($event.currentTarget, 'add')">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import {CloseOnEscapeOrClickOutside} from "~/utils/DOM";

const search = ref<HTMLElement | null>(null)
const searchInput = ref<HTMLElement | null>(null)
const navLinks = ref<HTMLElement | null>(null)
const blurVeil = ref<HTMLElement | null>(null)

const toggleSearch = () => {
  searchInput.value?.classList.toggle('active')
}

function toggleActive(el: HTMLElement, blur: string | null = null) {
  el.classList.toggle('active')
  navLinks.value?.classList.toggle('active')
  if (blur === 'remove') blurVeil.value?.classList.remove('active')
  else if (blur === 'add') blurVeil.value?.classList.add('active')
}

const closeSearch = () => searchInput.value?.classList.remove('active')
let closeHandler: CloseOnEscapeOrClickOutside | null = null

onMounted(() => {
  closeHandler = new CloseOnEscapeOrClickOutside(search.value, closeSearch)

  Array.from(navLinks.value?.children as HTMLCollectionOf<HTMLElement>).forEach((link) => {
    link.addEventListener('click', () => {
      toggleActive(document.querySelector('.ham') as HTMLElement, 'remove')
    })
  })
})

onUnmounted(() => {
  closeHandler?.remove()
  closeHandler = null
})
</script>
<style scoped>
.blur-veil {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(10px);
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
}

.blur-veil.active {
  opacity: 1;
  pointer-events: all;
}
</style>