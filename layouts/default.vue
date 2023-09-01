<template>
    <div ref="parent" class="parent">
        <Nav />
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { throttle } from '~/utils/limit'

const sections = ref<Element[]>([])
const parent = ref<HTMLElement | null>(null)

function initialiseSections() {
    sections.value = Array.from(document.querySelectorAll('section.page'))
    sections.value[0].classList.add('active')

    const dotsParent = document.querySelector('.landing .aside')
    let dotsContainer = document.querySelector('.dots-container')

    if (dotsContainer) {
        dotsContainer.innerHTML = ''
    } else if (process.client) {
        dotsContainer = document.createElement('div')
    }

    if (!dotsContainer) return console.warn("DEBUG: No (.landing .aside) found")

    dotsContainer.classList.add('dots-container')

    sections.value.forEach((_, index) => {
        const dot = document.createElement('div')
        dot.classList.add('dot')
        if (index === 0) dot.classList.add('active')

        if (!dotsContainer) return console.warn("DEBUG: No (.landing .aside) found")
        dotsContainer.appendChild(dot)

        dot.addEventListener('click', () => {
            const currentSection = parent.value?.querySelector('.page.active')
            const nextSection = sections.value[index]

            if (currentSection) currentSection.classList.remove('active')
            if (nextSection) nextSection.classList.add('active')

            const currentDot = parent.value?.querySelector('.dot.active')
            if (currentDot) currentDot.classList.remove('active')

            dot.classList.add('active')

            nextSection.scrollIntoView({ behavior: 'smooth' })
        })
    })

    dotsParent?.prepend(dotsContainer)
}

function mouseScroll(delta: number) {
    function scroll(direction: 'UP' | 'DOWN') {
        const currentSectionIndex = sections.value.findIndex((section) => section.classList.contains('active'))
        const nextSectionIndex = direction === 'UP' ? currentSectionIndex - 1 : currentSectionIndex + 1

        if (nextSectionIndex < 0 || nextSectionIndex > sections.value.length - 1) return

        const currentSection = sections.value[currentSectionIndex]
        const nextSection = sections.value[nextSectionIndex]

        currentSection.classList.remove('active')
        nextSection.classList.add('active')

        const currentDot = parent.value?.querySelector('.dot.active')
        if (currentDot) currentDot.classList.remove('active')

        const nextDot = parent.value?.querySelector(`.dot:nth-child(${nextSectionIndex + 1})`)
        if (nextDot) nextDot.classList.add('active')

        nextSection.scrollIntoView({ behavior: 'smooth' })
    }

    if (delta > 0) {
        scroll('UP')
    } else {
        scroll('DOWN')
    }
}

function handleMouseWheelScroll(context: any) {
    const delta = (event: any) => {
        if (event.wheelDelta) return event.wheelDelta
        if (event.detail) return -event.detail
        alert('Your browser doesn\'t support mouse wheel event')
    }

    const handlScroll = throttle((event: any) => mouseScroll(delta(event)), 500, context)
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        parent.value?.addEventListener('DOMMouseScroll', handlScroll)
    } else {
        parent.value?.addEventListener('mousewheel', handlScroll)
    }
}

function handleTouchScroll() {
    let touchStartY = 0
    parent.value?.addEventListener('touchstart', (event) => {
        touchStartY = event.touches[0].clientY
    })
    parent.value?.addEventListener('touchend', (event) => {
        const touchEndY = event.changedTouches[0].clientY
        const delta = touchEndY - touchStartY

        mouseScroll(delta)
    })
    parent.value?.addEventListener('touchmove', (event) => {
        event.preventDefault()
    })
}

const handleResize = throttle(() => {
    const currentSection = parent.value?.querySelector('.page.active')
    if (currentSection) currentSection.scrollIntoView({ behavior: 'smooth' })
}, 500, this)


onMounted(() => {
    initialiseSections()
    handleMouseWheelScroll(this)
    handleTouchScroll()
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})

nextTick(() => {
    if (process.client) initialiseSections()
})
</script>