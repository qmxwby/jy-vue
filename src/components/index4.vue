<template>
    <div class="index4">
        <el-row type="flex" style="height: 100%;">
            <el-col :span="3"></el-col>
            <h2>法律知识</h2>
        </el-row>
        <el-row type="flex" style="height: 100%;">
            <el-col :span="3"></el-col>
            <el-col :span="18">
                <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
                    <el-tab-pane label="婚姻" name="first" >
                        <el-card shadow="hover">
                            <el-row :gutter="100" v-for="knowledges in knowledge" >
                                <el-col :span="8" v-for="data in knowledges.c1" >
                                    <h2 class="h2_border">{{data.num}}</h2>
                                    <h3>{{data.title}}</h3>
                                    <el-input
                                            type="textarea"
                                            placeholder="请输入内容"
                                            v-model="data.content"
                                            :disabled="true"
                                            autosize
                                            class="input_form">
                                    </el-input>
                                </el-col>
                                <el-col :span="8" v-for="data in knowledges.c2">
                                    <h2 class="h2_border">{{data.num}}</h2>
                                    <h3>{{data.title}}</h3>
                                    <el-input
                                            type="textarea"
                                            placeholder="请输入内容"
                                            v-model="data.content"
                                            :disabled="true"
                                            autosize
                                            class="input_form">
                                    </el-input>
                                </el-col>
                                <el-col :span="8" v-for="data in knowledges.c3">
                                    <h2 class="h2_border">{{data.num}}</h2>
                                    <h3>{{data.title}}</h3>
                                    <el-input
                                            type="textarea"
                                            placeholder="请输入内容"
                                            v-model="data.content"
                                            :disabled="true"
                                            autosize
                                            class="input_form">
                                    </el-input>
                                </el-col>
                            </el-row>
                            <el-collapse accordion v-model="activeNames" @change="handleChange" >
                                <el-collapse-item name="1" >
                                    <span class="collapse-title" slot="title">更多</span>
                                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                </el-collapse-item>
                            </el-collapse>
                        </el-card>
                    </el-tab-pane>
                    <el-tab-pane label="房产" name="second">
                        <el-card shadow="hover">
                            <el-row :gutter="100" v-for="knowledges in knowledge" >
                                <el-col :span="8" v-for="data in knowledges.c1" >
                                    <h2 class="h2_border">{{data.num}}</h2>
                                    <h3>{{data.title}}</h3>
                                    <el-input
                                            type="textarea"
                                            placeholder="请输入内容"
                                            v-model="data.content"
                                            :disabled="true"
                                            autosize
                                            class="input_form">
                                    </el-input>
                                </el-col>
                                <el-col :span="8" v-for="data in knowledges.c2">
                                    <h2 class="h2_border">{{data.num}}</h2>
                                    <h3>{{data.title}}</h3>
                                    <el-input
                                            type="textarea"
                                            placeholder="请输入内容"
                                            v-model="data.content"
                                            :disabled="true"
                                            autosize
                                            class="input_form">
                                    </el-input>
                                </el-col>
                                <el-col :span="8" v-for="data in knowledges.c3">
                                    <h2 class="h2_border">{{data.num}}</h2>
                                    <h3>{{data.title}}</h3>
                                    <el-input
                                            type="textarea"
                                            placeholder="请输入内容"
                                            v-model="data.content"
                                            :disabled="true"
                                            autosize
                                            class="input_form">
                                    </el-input>
                                </el-col>
                            </el-row>
                            <el-collapse accordion v-model="activeNames" @change="handleChange" >
                                <el-collapse-item name="1" >
                                    <span class="collapse-title" slot="title">更多</span>
                                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                </el-collapse-item>
                            </el-collapse>
                        </el-card>
                    </el-tab-pane>
                    <el-tab-pane label="劳动" name="third">

                    </el-tab-pane>
                    <el-tab-pane label="公司" name="fourth">

                    </el-tab-pane>
                </el-tabs>
            </el-col>

        </el-row>
        <div>

        </div>
    </div>

</template>

<script>
    export default {
        name: 'index4',
        data(){
            return{
                activeName: 'first',
                knowledge:[
                    {
                        c1:[{num:'01',title:'asd ',content:'阿斯大沙发撒旦阿斯顿发送到发士大夫撒打算的发送到发送到发送到发送到发顺丰大是大非法撒旦法撒旦法撒旦法顿发阿斯大沙发撒旦阿斯顿发送到发士大夫撒打算的发送到发送到发送到发送到发顺丰大是大非法撒旦法撒旦法撒旦法顿发'}],
                        c2:[{num:'01',title:'asd ',content:'阿斯大沙发撒旦法撒旦法撒旦法撒旦法顿发'}],
                        c3:[{num:'02',title:'asd ',content:'阿阿斯顿发'}],
                    },
                    {
                        c1:[{num:'01',title:'rew ',content:'胜多负少成本梵蒂冈是'}],
                        c2:[{num:'02',title:'wert ',content:'时光飞逝的风格'}],
                        c3:[{num:'03',title:'wrt ',content:'算法的公式'}]
                    }
                ],
                input: '11'
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>

<style scoped>
    .index4{
        width: 100%;
        padding-top: 10px;
        padding-bottom: 20px;
    }
    .h2_border{
        color: #69AF2F;
        border-bottom: solid 4px #69AF2F;
        max-width: 30%;
    }
    .input_form{
        min-height: 100px;
    }
    .input_form /deep/ .el-textarea__inner{
        min-hright:130px !important;
        height: 130px !important;
    }

</style>

