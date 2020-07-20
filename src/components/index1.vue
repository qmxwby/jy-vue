<template>
    <div class="index1">
        <el-row>
            <el-col :span="3"><div class="hight1"></div></el-col>
            <el-col :span="18">
                <el-row :gutter="20">
                    <el-col :span="5">
                        <div class="hight2 bc_1">
                            <h4 class="h4c">团队介绍</h4>
                            <el-image
                                    style="width: 200px; height: 200px ;padding-top: 10px"
                                    :src="url"></el-image>
                            <h4 class="h4c2">咨询案件分类</h4>
                            <el-row :gutter="20" v-for="c_class in class_date">
                                <el-col :span="6" style="color: white">{{c_class.c1}}</el-col>
                                <el-col :span="6" style="color: white">{{c_class.c2}}</el-col>
                                <el-col :span="6" style="color: white">{{c_class.c3}}</el-col>
                                <el-col :span="6" style="color: white">{{c_class.c4}}</el-col>
                            </el-row>

                        </div>
                    </el-col>
                    <el-col :span="14">
                        <div class="hight1">
                            <el-tabs type="border-card" tab-position="bottom" :stretch="true">
                                <el-tab-pane class="tab_img" label="律师">
                                    <el-image
                                        style="width: 100%; height: 320px; "
                                        :src="url"></el-image>
                                </el-tab-pane>
                                <el-tab-pane label="律师">
                                    <el-image
                                        style="width: 100%; height: 320px "
                                        :src="url"></el-image>
                                </el-tab-pane>
                                <el-tab-pane label="快讯">
                                    <el-image
                                            style="width: 100%; height: 320px "
                                            :src="url"></el-image>
                                </el-tab-pane>
                                <el-tab-pane label="公告">
                                    <el-image
                                            style="width: 100%; height: 320px "
                                            :src="url"></el-image>
                                </el-tab-pane>
                            </el-tabs>
                            <div class="bc2">
                                <el-row :gutter="20">
                                    <el-col :span="4">
                                        <div class="enter_header">
                                            快速入口
                                        </div>
                                    </el-col>
                                    <el-col :span="5">
                                        <img style="padding-top: 30px;width: 40%; height: 40% " src="../assets/img/index1_enter1.png">
                                        <p style="margin: 0px">法律答疑</p>
                                    </el-col>
                                    <el-col :span="5">
                                        <img style="padding-top: 30px;width: 40%; height: 40% " src="../assets/img/index1_enter2.png">
                                        <p style="margin: 0px">线上交流</p>
                                    </el-col>
                                    <el-col :span="5">
                                        <img style="padding-top: 30px;width: 40%; height: 40% " src="../assets/img/index1_enter3.png">
                                        <p style="margin: 0px">电话交流</p>
                                    </el-col>
                                    <el-col :span="5">
                                        <img style="padding-top: 30px;width: 40%; height: 40% " src="../assets/img/index1_enter4.png">
                                        <p style="margin: 0px">法律文书</p>
                                    </el-col>
                                </el-row>

                            </div>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div class="hight1 bc_3">
                            <img style="width: 90%; height: 150px ;padding-top: 15px;padding-left: 12px" src='../assets/img/index1_bc4.jpg'>
                            <div class="bcimg_3">
                                <h3 style="margin: 0px">三峡大学</h3>
                                <h3 style="margin: 0px">法律援助中心</h3>
                                <a href="#">点击进入</a>
                            </div>
                            <img style="width: 90%; height: 100px ;padding-left: 12px" src='../assets/img/index1_bc4.jpg'>
                        </div>
                    </el-col>
                </el-row>

            </el-col>
            <el-col :span="3"></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'index1',
        data(){
            return{
                url: '',
                class_date:[{c1:'婚姻',c2:'刑法',c3:'房产',c4:'医疗'},
                    {c1:'婚姻',c2:'刑法',c3:'房产',c4:'医疗'},
                    {c1:'婚姻',c2:'刑法',c3:'房产',c4:'医疗'},
                    {c1:'婚姻',c2:'刑法',c3:'房产',c4:'医疗'},
                    {c1:'婚姻',c2:'刑法',c3:'房产',c4:'医疗'},
                    {c1:'婚姻',c2:'刑法',c3:'房产',c4:'医疗'},
                    {c1:'婚姻',c2:'刑法',c3:'房产',c4:'医疗'}]
            }
        }
    }
</script>

<style scoped>
    .index1{
        width: 100%;
        padding-top: 50px;
        padding-bottom: 20px;
        background-color: #e9e8e8;
    }
    .hight1{
        min-height: 500px;
    }
    .hight2{
        min-height: 480px;
    }
    .bc_1{
        background-color: darkgreen;
        padding: 10px;
    }
    .h4c{
        margin: 0px;
        color:#fff;
        text-align:left;

    }
    .h4c2{
        margin: 0px;
        color:#fff;
        text-align:left;
        padding-top: 30px;
    }
    .bc2{
        background: url('../assets/img/index1_bc1.jpg') no-repeat;
        background-size:100%;
        margin-top: 20px;
        min-height: 110px;
    }
    .bc_3{
        background-color: white;
    }
    .hight1 /deep/ .el-tabs__content{
        padding: 0px;
        margin: 0px;
        border: 0px;
    }
    .hight1 /deep/ .el-tabs__header{
        padding: 0px;
        margin: 0px;
        border: 0px;
    }
    .hight1 /deep/ .is-bottom{
        padding: 0px;
        margin: 0px;
        border: 0px;
    }
    .bcimg_3{
        width: 90%;
        height: 150px ;
        background: url("../assets/img/index1_bc3.jpg") no-repeat;
        margin-top: 10px;
        position: relative;
        right: -5%;
        text-align:center;
        color:#fff;
        padding-top: 50px;
    }
    .enter_header{
        min-height: 10px;
        padding-top: 30px;
        padding-left: 10px;
        font-weight:800;
        font-size: 20px;
        border-bottom: solid 4px;
    }
</style>
