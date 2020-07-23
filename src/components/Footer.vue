<template>
	<div style="width: 100%; padding: 40px 0; height: 200px;">
		<el-row type="flex" style="height: 100%; width: 100%;padding: 40px 10%;background-color: #97ffb5;">
			<el-col :span="1"></el-col>
			<el-col :span="6" style="padding-top: 20px;">
				<img src="../assets/icon.png" />
			</el-col>
			<el-col :span="4" >
				<div style="display: flex;align-items: center;">
				<img src="../assets/dianhua3.png" width="50px" height="50px" style="padding-top: 10px;"/>
				<span class="fw_phone">&nbsp;服务热线</span>	
				</div>
				<p class="phone">400 4000 8848</p>
				<p class="phone_time">接听时间： </p>
				<p class="phone_time">9:00-11:00&nbsp;14:30-17:00</p>
			</el-col>
			<el-col :span="2"></el-col>
			<el-col :span="2">
				<h3>关于我们</h3>
				<h5>法律声明</h5>
				<h5>意见反馈</h5>
			</el-col>
			<el-col :span="2"></el-col>
			<el-col :span="2">
				<h3>合作加盟</h3>
				<h5>律师加盟</h5>
				<h5>市场合作</h5>
			</el-col>
			<el-col :span="2"></el-col>
			<el-col :span="2">
				<h3 style="margin-left: 10px;">关注我们</h3>
				<img src="../assets/b.jpg" width="100%" height="70%" />
			</el-col>
		</el-row>
	</div>
</template>

<script>
</script>

<style scoped>
	.fw_phone {
		font-size: 20px;
		margin-left: 10px;
	}
	.phone{
		margin-left: 20px;
		font-size: 18px;
		margin-bottom: 0;
	}
	.phone_time{
		font-size: 14px;
		margin: 5px 0 0 20px;
	}
</style>
