<template >
<header class="bar bar-nav">
<h1 class="title">{{titleText}}</h1>
</header>
</template >

<style>
    .bar {
        position: fixed;
        right: 0;
        left: 0;
        z-index: 10;
        height: 2.2rem;
        padding-right: .5rem;
        padding-left: .5rem;
        background-color: #0993c7;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
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
                titleText: '消费记录'
            }  
        }
}

</script>