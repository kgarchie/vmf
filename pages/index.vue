<template>
    <Title>Home</Title>
    <div ref="parent">
        <section class="page">
            <HomeLanding />
        </section>
        <section class="page">
            <HomeWeDo />
        </section>
        <section class="page">
            <HomeComposition />
        </section>
        <section class="page">
            <div class="wrapper">
                <HomeImpact />
                <HomeSupport />
            </div>
        </section>
        <section class="page last segmented">
            <HomeLoveFound />
            <Footer />
        </section>
    </div>
</template>
<script setup lang="ts">
import { FullPage } from '~/utils/FullPage'
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
<style scoped>
.wrapper {
    display: flex;
    height: 100%;
    max-height: 500px;
    flex-direction: column;
    justify-content: space-around;
    margin: auto;
}

.last {
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    margin: auto;
}
</style>