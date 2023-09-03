<template>
  <div class="partners">
    <img src="/images/partnersBg.jpg" alt="" class="background">
  </div>
</template>

<style scoped lang="scss">
.partners{
  position: relative;
  isolation: isolate;

  .background{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
</style>
<script setup lang="ts">
</script>