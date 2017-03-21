
<template>
    <el-row align="bottom">
        <el-col :span="12">
            <el-col :span="6" :offset="6">
                <router-link to="/">
                    <div><i class="el-icon-edit"></i></div>
                    <div>今日</div>
                </router-link>
            </el-col>
        </el-col>
    
        <el-col :span="12">
            <el-col :span="6" :offset="6">
               <router-link to="/history">
                <div><i class="el-icon-menu"></i></div>
                <div>历史</div>
            </router-link>
            </el-col>
        </el-col>
    </el-row>
</template>