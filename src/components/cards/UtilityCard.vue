<template>
    <div class="card teal lighten-2">
        <div class="utility-icon card-image waves-light">
            <h1><i class="large icon material-icons">{{icon}}</i></h1>
        </div>
        <div class="card-content">
            <span class="title card-title">{{ header }}</span>
            <p class="description">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UtilityCard',
    props: [
        'icon',
        'header',
        'description'
    ],
    data() {
        return {

        }
    }
}
</script>

<style>
.card {
    color: white;
    width: 24%;
}

.card-content .title {
    font-size: 36px;
}

.card-content .description {
    font-size: 20px;
}
</style>