<script setup lang="ts">

</script>

<template>
  <div class="program">
    <div class="container">
      <div class="writeup">
        <h1 class="title">Our Programs</h1>
        <p>Budget Advocacy with a focus on health, water, environment and climate change, renewable energy, education.
          In governance we utilize community monitoring strategies such as ​expenditure tracking , evidence brief,
          scorecard</p>
      </div>
      <div class="cards">
        <ProgramCard/>
        <ProgramCard/>
        <ProgramCard/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.program {
  width: 100%;
  display: flex;

  @media screen and (max-height: 650px) {
    margin-top: 5rem;
  }

  .container {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 5px;
    color: var(--blue);
    background-color: var(--fade-blue);

    .writeup {
      width: 100%;
      max-width: 800px;
      padding: 1rem;
      margin: auto;

      .title {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.5;
      }
    }

    .cards{
      display: flex;
    }
  }
}
</style>