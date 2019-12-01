<template>
    <div class="utilities-div wrapper-div">
        <div class="cards-collection">
            <Card v-bind:description=this.cardOne.description v-bind:icon=this.cardOne.icon v-bind:header=this.cardOne.header />
            <Card v-bind:description=this.cardTwo.description v-bind:icon=this.cardTwo.icon v-bind:header=this.cardTwo.header />
            <Card v-bind:description=this.cardThree.description v-bind:icon=this.cardThree.icon v-bind:header=this.cardThree.header />
        </div>
    </div>
</template>

<script>
import Card from './cards/Card.vue'

export default {
    name: 'Utilities',
    components: { 
        Card
    },
    data() {
        return {
            cardOne: {
                icon: 'verified_user',
                header: 'Security',
                description: 'Security is on first place!'
            },
            cardTwo: {
                icon: 'payment',
                header: 'Payment',
                description: 'All kinds of payment included!'
            },
            cardThree: {
                icon: 'desktop_windows',
                header: 'Devices',
                description: 'Available on all devices!'
            }
        }
    }
}
</script>

<style>
.utilities-div {
    padding: 15px;
    background: #64b2cd;
}

.cards-collection {
    display: flex;
    flex-direction: row;
    justify-content: space-around
}
</style>