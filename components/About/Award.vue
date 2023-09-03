<template>
  <div class="award">
    <div class="text">
      <h1 class="title">Award</h1>
      <p>Violet Mbiti Foundation was awarded as the organization of the month by Continental Newsletter "Network
        of African Youth for Development

        Violet Mbiti Foundation partners with International Budget Partnership Kenya in Machakos County and has
        carried out research on public availability of key county budget documents and the comprehensiveness of
        the contents of the budget document made available by counties.Violet Mbiti Foundation also took part in
        research in Machakos County on Transparency and Accountability of National Health Insurance Fund Related
        Funds at the Sub-National Level.</p>
    </div>
    <div class="image">
      <img src="/images/award.jpg" alt="">
    </div>
  </div>
</template>
<style scoped lang="scss">
.award {
  min-width: fit-content;
  max-height: 50vh;
  max-width: 90vw;
  display: flex;
  padding: 1rem;
  align-items: center;
  margin: auto;
  justify-content: center;
  border-radius: 5px;
  background-color: var(--fade-blue);

  .title{
    margin-left: 1rem;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p{
    width: 600px;
    max-width: 100%;
    padding: 0 1rem;
    color: var(--blue);
    display: inline-block;
  }

  .image{
    mix-blend-mode: multiply;
    display: grid;
    place-items: center;

    img{
      max-height: 40vh;
      object-position: center;
      object-fit: cover;
    }
  }
}
</style>
<script setup lang="ts">
</script>