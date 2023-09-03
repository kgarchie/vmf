<template>
  <Title>About</Title>
    <div ref="parent">
      <section class="page">
        <About />
      </section>
      <section class="page">
        <div class="partials">
          <AboutCards />
          <AboutAward />
        </div>
      </section>
      <section class="page">
        <AboutPartners />
      </section>
    </div>
</template>
<script setup lang="ts">
import {FullPage} from '~/utils/FullPage'

let fullPage: FullPage | null = new FullPage()

const parent = ref<HTMLElement | null>(null)

onMounted(() => {
  if (parent.value) fullPage!.init(parent.value)

  const scroll_circle = document.querySelector('.scroll-circle')
  scroll_circle?.addEventListener('click', () => {
    fullPage!.next()
  })
})

onUnmounted(() => {
  fullPage!.destroy()
  fullPage = null

  const scroll_circle = document.querySelector('.scroll-circle')
  scroll_circle?.removeEventListener('click', () => {
    fullPage!.next()
  })
})

nextTick(() => {
  if (process.client && parent.value) fullPage!.reInit(parent.value)
})
</script>
<style>
.partials{
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 2rem;

  @media screen and (max-height: 650px) {
    margin-top: 5rem;
    gap: 1rem;
  }
}
</style>