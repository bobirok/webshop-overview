<template>
    <div class="utilities-div wrapper-div">
        <div class="cards-collection">
            <UtilityCard v-bind:description=this.cardOne.description v-bind:icon=this.cardOne.icon v-bind:header=this.cardOne.header />
            <UtilityCard v-bind:description=this.cardTwo.description v-bind:icon=this.cardTwo.icon v-bind:header=this.cardTwo.header />
            <UtilityCard v-bind:description=this.cardThree.description v-bind:icon=this.cardThree.icon v-bind:header=this.cardThree.header />
        </div>
    </div>
</template>

<script>
import UtilityCard from './cards/UtilityCard'

export default {
    name: 'Utilities',
    components: { 
        UtilityCard
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