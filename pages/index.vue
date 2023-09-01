<template>
    <div class="main">
        <Title>Home</Title>
        <Landing />
        <WeDo />
        <Composition />
        <section class="page">
            <div class="wrapper">
                <Impact />
                <Support />
            </div>
        </section>
        <section class="page last segmented">
            <LoveFound />
            <Footer />
        </section>
    </div>
</template>
<style scoped>
.main {
    overflow: hidden;
    height: 100vh;
}

.wrapper{
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin: auto;
}

.last {
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    margin: auto;
}
</style>
<script setup lang="ts">
</script>