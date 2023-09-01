<template>
    <div class="support">
        <div class="container">
            <div class="left">
                <h1 class="title">Oneness</h1>
                <h1 class="mini-blast">Support Us</h1>
                <p>We cannot do this alone. Violet Mbiti Foundation knows the value of people coming together for
                    commonpurpose, and we want you to do this with us. With your support – in advocacy, in outreach, and
                    inproviding resources – you can push us
                </p>
                <a href="" class="learn-more">Learn More</a>
            </div>
            <div class="right">
                <img src="/images/childrenA.jpg" alt="" class="left__img">
                <img src="/images/childrenB.jpg" alt="" class="rigth__img">
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.support {
    width: 100%;
    display: grid;

    .container {
        margin: auto;
        height: 350px;
        width: 800px;
        max-width: 80vw;
        background-color: var(--fade-blue);
        border-radius: 5px;
        display: flex;
        padding: 3rem;
        gap: 2rem;

        .left {
            height: 100%;
            display: flex;
            flex-direction: column;
            max-width: 50%;

            .title {
                margin-bottom: 0.5rem;
            }

            .mini-blast {
                text-transform: uppercase;
            }

            p {
                margin-top: 1.5rem;
                font-weight: 200;
                max-width: 400px;
            }

            a {
                margin-top: 1rem;
                font-weight: 400;
                padding: 0.5rem 1rem;
                background-color: var(--blue);
                color: white;
                width: fit-content;
                border-radius: 5px;
            }
        }

        .right {
            height: 100%;
            display: flex;
            align-items: flex-end;
            gap: 1rem;

            img {
                height: 80%;
                overflow: hidden;
                object-fit: cover;
                border-radius: 5px;

                &.left__img {
                    align-self: flex-start;
                }

                &.right__img {
                    align-self: flex-end;
                }
            }
        }
    }
}
</style>