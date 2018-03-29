<template>
    <div class="main-container clearfix">
        <v-head></v-head>
        <side-bar></side-bar>
        <router-view class="content"></router-view>
    </div>
</template>

<script>
    import vHead from './common/Header'
    import sideBar from './common/Sidebar'
    import baseChart from '../components/Basechart'
    import vueChart from '../components/Vuechart'
    
    export default{
        name: 'Home',
        components:{
            vHead,
            sideBar,
            baseChart,
            vueChart
        },
    }    
</script>

<style>
    .clearfix::after {
        content: "";
        height: 0;
        display: block;
        clear: both;
    }
    .main-container {
        height: 100%;
    }

    .content {
        margin-left: 250px;
        height: 100%;
    }
</style>

