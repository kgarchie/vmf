<template>
    <div class="card">
        <div class="icon" v-html="svg"></div>
        <h2 class="card-header">{{ title }}</h2>
        <p>{{ text }}</p>
    </div>
</template>
<script setup lang="ts">
defineProps({
    title: String,
    text: String,
    svg: String
})
</script>
<style scoped lang="scss">
.card{
  width: 350px;
  max-width: 25vw;
  padding: 1rem;
  height: 100%;
  border-radius: 5px;
  border: 1px solid var(--blue);
  text-align: center;
  color: var(--blue);

  .icon{
    margin-bottom: 1.2em;

    svg{
      fill: var(--blue);;
    }
  }

  h2{
    margin-bottom: 0.5em;
    font-size: clamp(1.2rem, 1vw, 1.5rem);
  }

  p{
    font-size: clamp(0.8rem, 1vw, 1rem);
  }
}
</style>