<template>
    <div class="wrapper-div">
        <div class="slider-div s12">
            <button @click="prev()" class="btn previous"><i class="material-icons">navigate_before</i></button>
            <img id="sliderImage" src="../assets/logo.png" alt="">
            <button @click="next()" class="btn next"><i class="material-icons">navigate_next</i></button>
        </div>
    </div>
</template>

<script>
const imageTwo = require('../assets/1.jpg')
const imageOne = require('../assets/2.jpg')

export default {
    name: 'Slider',
    data() {
        return {
            image: undefined,
            images: [imageOne, imageTwo],
            timer: null,
            currentIndex: 0
        }
    },
    methods: {
        slide() {
            this.timer = setInterval(this.next, 6000)
        },
        next() {
            if(this.currentIndex >= this.images.length-1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
            this.image.src = this.images[this.currentIndex]
            this.timer = null
        },
        prev() {
            if(this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.images.length -1
            }
            this.image.src = this.images[this.currentIndex]
            this.timer = null;
        }
    },
    mounted() {
        this.image = document.getElementById("sliderImage")
        this.slide()
    }
}
</script>

<style lang="scss">
.slider-div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: #d9eeec;
    height: 100vh;
}

#sliderImage {
    width: 80%;
    height: 100%;
}

.previous, .next {
    border-radius: 50%;
    display: block;
    width: 75px;
    height: 75px;
    background: #da9833;
}

.previous {
    margin: auto auto;
}

.next {
    margin: auto auto;
}
</style>