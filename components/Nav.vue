<template>
    <nav class="nav">
        <div class="left">
            <span class="logo">Violet Mbiti Foundation</span>
        </div>
        <div class="right">
            <ul class="nav-links">
                <li class="nav-link"><NuxtLink>Home</NuxtLink></li>
                <li class="nav-link"><NuxtLink>About</NuxtLink></li>
                <li class="nav-link"><NuxtLink>Program</NuxtLink></li>
                <li class="nav-link"><NuxtLink>Contact</NuxtLink></li>
            </ul>
            <div class="search" ref="search">
                <img src="/icons/search.svg" alt="🔍" @click="toggleSearch" />
                <input type="text" placeholder="Search" ref="searchInput" @keyup.esc="toggleSearch" @keyup.enter="toggleSearch" />
            </div>
            <div class="action">
                <NuxtLink>Donate</NuxtLink>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
const searchInput = ref<HTMLElement | null>(null)

const toggleSearch = () => {
    searchInput.value?.classList.toggle('active')
}
</script>