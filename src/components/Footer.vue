<template>
    <footer class="footer page-footer">
        <div class="container footer-description">
            <div class="left-extras col s6">
                <p><i class="material-icons">work</i> Careers</p>
                <p><i class="material-icons">local_phone</i> + 31 981 222 22</p>
                <p><i class="material-icons">location_on</i>Find us!</p>
            </div>
            <div class="right-extras col s6">
                <p><i class="material-icons">lightbulb_outline</i>Innovative</p>
                <p><i class="material-icons">insert_emoticon</i> Happy customers</p>
                <p><i class="material-icons">timeline</i> Improvement</p>
                <p><i class="material-icons">timer</i> Time savers</p>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
                <a class="left white-text">© 2014 Copyright Text</a>
                <a class="grey-text text-lighten-4 right">Made by Boris</a>  
            </div>
        </div>
    </footer>    
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {

        }
    }
}
</script>

<style lang='scss'>
@import '../styles/variables';

.page-footer {
    background: $blueColor;
    p {
        vertical-align: middle;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        i {
            margin-right: 5px;
        }
    }
}

.footer-description {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.left-extras, .right-extras {
    text-align: left;
}
</style>