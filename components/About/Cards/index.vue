<script setup lang="ts">
const svgInnovation = `
<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M44.6667 33.48V9.34001C44.6667 6.94001 42.7067 5.16001 40.3267 5.36001H40.2067C36.0067 5.72001 29.6267 7.86001 26.0667 10.1L25.7267 10.32C25.1467 10.68 24.1867 10.68 23.6067 10.32L23.1067 10.02C19.5467 7.80001 13.1867 5.68001 8.98669 5.34001C6.60669 5.14001 4.66669 6.94001 4.66669 9.32001V33.48C4.66669 35.4 6.22669 37.2 8.14669 37.44L8.72669 37.52C13.0667 38.1 19.7667 40.3 23.6067 42.4L23.6867 42.44C24.2267 42.74 25.0867 42.74 25.6067 42.44C29.4467 40.32 36.1667 38.1 40.5267 37.52L41.1867 37.44C43.1067 37.2 44.6667 35.4 44.6667 33.48Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.6667 10.98V40.98" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.1667 16.98H11.6667" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.6667 22.98H11.6667" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

const svgRespect = `
<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M44.6667 33.48V9.34001C44.6667 6.94001 42.7067 5.16001 40.3267 5.36001H40.2067C36.0067 5.72001 29.6267 7.86001 26.0667 10.1L25.7267 10.32C25.1467 10.68 24.1867 10.68 23.6067 10.32L23.1067 10.02C19.5467 7.80001 13.1867 5.68001 8.98669 5.34001C6.60669 5.14001 4.66669 6.94001 4.66669 9.32001V33.48C4.66669 35.4 6.22669 37.2 8.14669 37.44L8.72669 37.52C13.0667 38.1 19.7667 40.3 23.6067 42.4L23.6867 42.44C24.2267 42.74 25.0867 42.74 25.6067 42.44C29.4467 40.32 36.1667 38.1 40.5267 37.52L41.1867 37.44C43.1067 37.2 44.6667 35.4 44.6667 33.48Z"
        stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M24.6667 10.98V40.98" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
    <path d="M16.1667 16.98H11.6667" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
    <path d="M17.6667 22.98H11.6667" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
</svg>`

const svgIntegrity = `
<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.33328 44H44.3333" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M35.4533 20C39.1333 20 42.1133 22.68 42.1133 26V44" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.55328 44V26C6.55328 22.68 9.53328 20 13.2133 20H26.9333" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.4533 20V14.34C11.4533 11.94 13.6133 10 16.2933 10H32.3933C35.0533 10 37.2133 11.94 37.2133 14.34V20" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M41.2733 28H40.3733C38.8933 28 37.6733 29.2 37.6733 30.7V31.32C37.6733 32.8 36.4733 34.02 34.9733 34.02C33.4933 34.02 32.2733 32.82 32.2733 31.32V30.7C32.2733 29.22 31.0733 28 29.5733 28C28.0933 28 26.8733 29.2 26.8733 30.7V31.32C26.8733 32.8 25.6733 34.02 24.1733 34.02C22.6933 34.02 21.4733 32.82 21.4733 31.32V30.7C21.5333 29.2 20.3333 28 18.8533 28C17.3733 28 16.1533 29.2 16.1533 30.7" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.39328 27.96L8.13328 27.98C9.61328 28 10.7933 29.2 10.7933 30.68V31.34C10.7933 32.82 11.9933 34.04 13.4933 34.04" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.3333 10V6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M32.3333 10V6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.3333 10V4" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
</script>

<template>
  <div class="cards">
    <AboutCardsCard
        :title="'Innovation'"
        :text="`For us, this means creating opportunities and creative solutions: we will continue to identify and explore unchartered opportunities for growth and sustainability, mitigate risks, and provide the best services that we can.`"
        :svg="svgInnovation"
    />
    <AboutCardsCard
        :title="'Respect'"
        :text="`We will serve with respect, honouring the people we serve, our communities, partners and one another. We will highly value the relationships we build with our communities, partners, stakeholders and  each other.`"
        :svg="svgRespect"
    />
    <AboutCardsCard
        :title="'Integrity'"
        :text="`We will be consistent, honest, accountable and transparent in what we say and do. We will safeguard the integrity and dignity of those we serve.`"
        :svg="svgIntegrity"
    />
  </div>
</template>
<style scoped>
.cards{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  max-height: calc(50vh - 5rem);
}
</style>