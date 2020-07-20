<template>
  <div>
	<el-container>
	  <el-header style="text-align: left">
		<el-row type="flex" align="middle" style="height: 100%;">
			<el-col :span="3"></el-col>
			<el-col :span="11" class="loc">
				<i class="el-icon-location"></i>
				宜昌
				<i class="el-icon-arrow-down" style="margin-right: 30px;"></i>
				<span style="color: #2C3E50;">定位所在地</span>
			</el-col>
			<el-col :span="10" style="font-size: 14px; color: #000;">
				<el-row>
					<el-col :span="3">
						<i class="el-icon-user"></i>
						登入
					</el-col>
					<el-col :span="3">
						<i class="el-icon-female"></i>
						注册
					</el-col>
					<el-col :span="4">
						<i class="el-icon-mobile-phone"></i>
						手机版本
					</el-col>
					<el-col :span="3">					
						公众号
						<i class="el-icon-arrow-down"></i>
					</el-col>
					<el-col :span="3">
						网站导航
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	  </el-header>	  
	  <el-main style="text-align: left;">
		<el-row type="flex">
			<el-col :span="2"></el-col>
			<el-col :span="4" style="margin-bottom: 20px;">
				<img style="width: 80%;" src="../assets/icon.png"/>
			</el-col>
			<el-col :span="11" style="padding-top: 30px;">
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				  <el-menu-item index="1" class="sub1">首页</el-menu-item>
				  <el-submenu index="2" style="width: 25%;" class="sub2">
				    <template slot="title">援助类型</template>
				    <el-menu-item index="2-1">选项1</el-menu-item>
				    <el-menu-item index="2-2">选项2</el-menu-item>
				    <el-menu-item index="2-3">选项3</el-menu-item>
				  </el-submenu>
				  <el-submenu index="3" style="width: 25%;" class="sub3">
					 <template slot="title">援助途径</template>
					 <el-menu-item index="3-1">选项1</el-menu-item>
					 <el-menu-item index="3-2">选项2</el-menu-item>
					 <el-menu-item index="3-3">选项3</el-menu-item> 
				  </el-submenu>
				  <el-menu-item index="4" class="sub1">预约律师</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="5" class="input_s">
				<el-input v-model="input" placeholder="请输入你想输入的内容..."></el-input>
				<el-button icon="el-icon-search" circle></el-button>
			</el-col>
			<el-col :span="2"></el-col>
		</el-row>
	  </el-main>
	</el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
	  input: ''
   }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.el-header {
/* 	padding: 0 10%; */
	background: rgb(240,240,240);
	background-color: #f8f8f8;
	border-color: #e7e7e7;
	border: 1px solid transparent;
	border-radius: 4px;
	max-height: 40px;
}
.loc {
	font-size: 14px;
	color: #2b73c8;
}
.el-main {
	background-color:#fff; 
	height: auto;
	box-shadow: 0px 7px 10px 0px  rgba(195,195,195,0.5);
	padding: 20px 20px 0 20px;
}
.sub1{
	color: #000 !important;
	font-size: 18px;
	font-weight: 500;
	width: 25%;
}
.sub1:hover{
	color: #69AF2F !important;
}
.sub2 >>> .el-submenu__title{
	color: #000 !important;
	font-size: 18px;
	font-weight: 500;
}
.sub2 >>> .el-submenu__title:hover{
	color: #69af2f !important;
}
.sub2 >>> .el-submenu__title i{
	font-size: 18px;
}
.sub3 >>> .el-submenu__title{
	color: #000 !important;
	font-size: 18px;
	font-weight: 500;
}
.sub3 >>> .el-submenu__title:hover{
	color: #69af2f !important;
}
.sub3 >>> .el-submenu__title i{
	font-size: 18px;
}
.input_s >>> .el-input {
	width: 75%;
}
.input_s >>> input{
	border-radius: 20px;
	background-color: #FAECE1;
}
.input_s >>> .el-button {
	color: #2EA642;
	font-size: 20px;
	border-color: #fff;
}
</style>
