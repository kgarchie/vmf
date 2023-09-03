<template>
  <div class="about">
    <div class="container">
      <div class="image">
        <img src="/images/handHeart.jpg" alt="">
      </div>
      <div class="text">
        <h1 class="title">About Us</h1>
        <p>Violet Mbiti Foundation is a legal entity registered under Registrar of Societies and engages in
          budget
          advocacy and governance at the national and county level. We bring evidence and people together
          to
          encourage action on Health, Water, Renewable Energy, Education, Environment and Climate Change.
          We
          are
          also the brain-child behind digital innovations namely "Adolescent and Youth SRHR Digital
          Platform",
          "Budget Café Discussions" and "Youth County Projects Kenya". Invest in Violet Mbiti Foundation
          because
          we are result-oriented and effective.Violet Mbiti Foundation reviews and analyzes policies to
          ensure
          they conform to the commitments our government has made as well as speak and respond to needs
          and
          realities. VMF has presence in the following counties where we work closely with partners namely:

          Machakos, Nairobi, Kajiado, Taita Taveta, Kilifi, Kitui, Makueni, West Pokot, Narok, Bomet and Siaya.
        </p>
        <p>
          We engage at the grassroots bringing the voices of the citizens at decision making tables. In
          Nairobi we
          are founding members of the MNH Coalition of Kenya which comprises civil society grassroots
          organizations spread across Nairobi County Championing for Reduced Teenage Pregnancies and
          Increase
          of
          1st and 4th Antenatal Care Visits.
        </p>
        <p>
          At the national level we work closely with International Budget Partnership (IBP) Kenya to
          influence
          the
          National Government to prioritize budget allocation as well as advocating for comprehensiveness
          of
          key
          Government budget documents. Click on this link to learn more about our engagement
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.about {
  width: 100%;
  margin: auto;

  @media screen and (max-height: 650px) {
    margin-top: 5rem;
  }

  .container {
    margin: auto;
    width: fit-content;
    max-width: 90vw;
    max-height: 80vh;
    background-color: var(--fade-blue);
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-radius: 5px;

    .image {
      width: 500px;
      height: 400px;
      max-height: 70vh;
      max-width: 50vw;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }
    }

    .text {
      width: 100%;
      max-width: 800px;
      padding: 1rem;

      .title {
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
      }

      p {
        margin-bottom: 1.2rem;
        color: var(--blue);
        text-align: justify;
      }
    }
  }
}
</style>