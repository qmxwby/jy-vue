<template>
    <div class="index42">
        <el-row type="flex" style="height: 100%;">
            <el-col :span="3"></el-col>
            <h2>经典案例</h2>
        </el-row>
        <el-row type="flex" style="height: 100%;">
            <el-col :span="3"></el-col>
            <el-col :span="13">
                <el-card class="box-card" shadow="always">
                    <div slot="header" class="clearfix">
                        <el-row>
                            <el-col :span="12" style="text-align: center">
                                <h4>案件</h4>
                            </el-col>
                            <el-col :span="6" style="text-align: center">
                                <h4>涉案金额</h4>
                            </el-col>
                            <el-col :span="6" style="text-align: center">
                                <h4>发布时间</h4>
                            </el-col>
                        </el-row>
                    </div>
                    <div style="max-height: 350px;overflow-y: scroll">
                        <el-row v-for="cases in cases" style="padding-bottom: 10px">
                            <el-col :span="12" style="text-align: center" class="elin">
                                <span>标题</span>
                                <el-input
                                        type="textarea"
                                        placeholder="请输入内容"
                                        v-model="cases.content"
                                        :disabled="true"
                                        autosize
                                        class="input_form">

                                </el-input>
                            </el-col>
                            <el-col :span="6" style="text-align: center">
                                <span style="color: #ffca00">金额</span>
                                <p>{{cases.money}}</p>
                            </el-col>
                            <el-col :span="6" style="text-align: center">
                                <span>时间</span>
                                <p>{{cases.date}}</p>
                            </el-col>
                        </el-row>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="4">
                <el-card class="box-card" shadow="hover" style="min-height: 492px;">
                    <h3 style="margin-top: 0px">关注公众号</h3>
                    <div class="wx">
                        <el-row :gutter="10">
                            <el-col :span="14">
                                <el-image
                                        style="width: 85%; height: 130px "
                                        :src="url"></el-image>
                            </el-col>
                            <el-col :span="8">
                                <p class="wx_text">关注解忧法创公众号了解更多资讯</p>
                            </el-col>
                        </el-row>


                    </div>
                </el-card>

            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: 'index42',
        data(){
            return{
                cases:[
                    {
                        content:'阿斯大沙发撒旦法撒旦法撒旦法撒旦法顿发',
                        money:'2345',
                        date:'2019-11-6'
                    },
                    {
                        content:'阿斯大沙发撒旦法撒旦法撒旦法撒旦法顿发',
                        money:'2345',
                        date:'2019-11-6'
                    },
                    {
                        content:'阿斯大沙发撒旦法撒旦法撒旦法撒旦法顿发',
                        money:'2345',
                        date:'2019-11-6'
                    }
                ],
            }
        }
    }
</script>

<style scoped>
    .wx{
        min-height: 20px;
        width: 100%;
        background-color: #2b73c8;
        padding: 20px;
        margin-left: -20px;
    }
    .index42{
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #e9e8e8;
    }
    .elin /deep/ .el-textarea__inner{
        min-hright:130px !important;
        height: 130px !important;
    }
    .wx_text{
        color: white;
        font-size: 20px;
        margin: 0px;
    }
</style>


