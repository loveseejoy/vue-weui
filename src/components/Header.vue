<template >
<header class="bar bar-nav">
<h1 class="title">{{titleText}}</h1>
</header>
</template >

<style>
    .bar {
        right: 0;
        left: 0;
        height: 2.2rem;
        padding-right: .5rem;
        padding-left: .5rem;
        background-color: #0993c7;
        color: #FFF;
    }
    
    .title {
    position: absolute;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0 -.5rem;
    font-size: .85rem;
    font-weight: 500;
    line-height: 2.2rem;
    color: #FFF;
    text-align: center;
    white-space: nowrap;
}
</style>

<script>
export default {  
        data () {  
            return {  
                titleText: '每日消费'
            }  
        }
}

</script>