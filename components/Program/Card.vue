<script setup lang="ts">

</script>

<template>
  <div class="card">
    <div class="image">
      <img src="https://picsum.photos/300/300" alt="program image">
    </div>
    <div class="text">
      <p class="category">Category</p>
      <h3 class="title">Title</h3>
      <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  max-width: 300px;
  height: 100%;
  margin: 1rem;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  .image {
    width: 100%;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .text {
    padding: 1rem;

    .category {
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--blue);
    }

    .title {
      font-size: 1.2rem;
      font-weight: 500;
      margin: 0.4rem 0;
    }

    .description {
      font-size: 0.9rem;
      font-weight: 400;
      line-height: 1.5;
    }
  }
}
</style>