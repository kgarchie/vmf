<template>
    <div class="impact">
        <div class="container">
            <h1>Impact</h1>
            <div class="info">
                <p>Violet Mbiti Foundation has played an instrumental role in amendment of policies at the national level as
                    well as advocating for increase of budget allocation and absorption in our key program areas both at the
                    national and county level.
                </p>
                <a href="">Learn More</a>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.impact {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;

    .container {
        max-width: 800px;

        h1 {
            color: var(--blue);
        }

        .info {
            display: flex;
            margin-top: 1rem;
            gap: 5rem;
            align-items: center;
            font-weight: 200;

            p {
                max-width: 500px;
            }

            a {
                font-weight: 400;
                padding: 0.5rem 1rem;
                background-color: var(--blue);
                color: white;
                border-radius: 5px;
            }
        }
    }
}
</style>