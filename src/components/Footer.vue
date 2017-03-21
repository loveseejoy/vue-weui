
<template>
    <div class="weui-tabbar">
        <router-link to="/" class="weui-tabbar__item weui-bar__item--on">
            <div class="weui-tabbar__icon"> <i class="sstfont sst-shouye"></i> </div>
            <p class="weui-tabbar__label">今日</p>
        </router-link>
        <router-link to="/history" class="weui-tabbar__item weui-bar__item--on">
            <div class="weui-tabbar__icon"> <i class="sstfont sst-xuetang"></i> </div>
            <p class="weui-tabbar__label">历史</p>
        </router-link>
    </div>
</template>

<style>
    .weui-tabbar {
        position: fixed;
        z-index: 2;
    }
    .weui-tabbar {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        position: absolute;
        z-index: 500;
        bottom: 0;
        width: 100%;
        background-color: #f7f7fa;
    }
</style>