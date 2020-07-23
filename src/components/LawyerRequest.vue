<template>
	<div style="background-color: #F0F0F0; margin-top: 30px;">
		<el-row type="flex" style="height: 100%;">
			<el-col :span="3"></el-col>
			<el-col :span="12">
				<h2 style="margin-bottom: 4px;">法律咨询</h2>
				<p style="margin-top: 4px;">如有问题在线提问，我们律师将在线为您解答</p>
			</el-col>
		</el-row>
		<el-row type="flex" style="height: 100%;">
			<el-col :span="3"></el-col>
			<el-col :span="18" style="padding-bottom: 40px;">
				<el-row type="flex" style="height: 100%;justify-content: space-between;padding-top: 40px;">
					<el-col :span="17">
						<el-card>
						<span class="input" style="display: block;">
							<input class="input__field" type="text" placeholder="在这里输入您的问题" />
							<hr class="hr_01" />
						</span>
						<el-button type="success" round style="margin-left: 5%;margin-top: 20px;background-color: #005E15;font-weight: 540;font-size: 14px;">提交问题</el-button>
						<p style="margin-left: 5%;color: #8D8D8D;">热门类别：婚姻家庭 刑事辩护 医疗纠纷 合同纠纷...<span style="float: right;margin-right: 5%;">更多<i class="el-icon-arrow-right"></i></span></p>
						</el-card>
						<el-card style="margin-top: 40px;">
							<el-tabs v-model="activeName" @tab-click="handleClick" class="tab">
								<el-tab-pane label="精选咨询" name="first">
									<el-row type="flex" style="height: 100%;">
										<el-col :span="9">
											<h3 style="width: 100%;">标题</h3>
											<div class="content">
												<p>孩子咳凑老不好，多半是肺热</p>
											</div>
										</el-col>
										<el-col :span="2"></el-col>
										<el-col :span="9">
											<h3 style="width: 100%;">标题</h3>
											<div class="content">
												<p>张三有罪？</p>
											</div>
										</el-col>									
									</el-row>
								</el-tab-pane>
								<el-tab-pane label="最新提问" name="second">
									<el-row type="flex" style="height: 100%;">
										<el-col :span="9">
											<h3 style="width: 100%;">标题1</h3>
											<div class="content">
												<p>罗翔讲法</p>
											</div>
										</el-col>
										<el-col :span="2"></el-col>
										<el-col :span="9">
											<h3 style="width: 100%;">标题1</h3>
											<div class="content">
												<p>内容正文...</p>
											</div>
										</el-col>									
									</el-row>
								</el-tab-pane>
								<el-tab-pane label="热门回复" name="third">
									<el-row type="flex" style="height: 100%;">
										<el-col :span="9">
											<h3 style="width: 100%;">标题2</h3>
											<div class="content">
												<p>内容正文...</p>
											</div>
										</el-col>
										<el-col :span="2"></el-col>
										<el-col :span="9">
											<h3 style="width: 100%;">标题2</h3>
											<div class="content">
												<p>内容正文...</p>
											</div>
										</el-col>									
									</el-row>
								</el-tab-pane>
							</el-tabs>
						</el-card>
					</el-col>
					<el-col :span="6">
						<el-card style="height: 100%;" class="tab-right">
							<div class="phone-f">
								<div class="phone">
									<img src="../assets/dianhua3.png" width="80%" height="80%" />
								</div>
								<p>电话咨询</p>
							</div>
							<div class="comment">
								<h3>评价</h3>
								<div class="content">
									<p>内容正文...</p>
								</div>
							</div>
						</el-card>
					</el-col>
				</el-row>
			</el-col>
			<el-col :span="3"></el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
	  data() {
		return {
		  input: '',
		  activeName: 'first'
		}
	  },
   methods: {
		handleClick(tab, event) {
		  console.log(tab, event);
		}
	  }
	};
</script>

<style scoped>
	.input{
		height: 60px;
		margin: 0 auto;
	}
	.input__field {
		display: block;
		margin: 0 auto;
		width: 90%;
		height: 90%;
		text-align: left;
		font-size: 22px;
		border: none;
		color: #757575;
	}
	.input__field:focus {
		outline: none;
	}
	.hr_01{
		background-color: #F0F0F0;
		height: 3px;
		border: none;
		width: 90%;
		margin-top: 0px;
	}
	.content {
		height: 100px;
		background-color: #ECECEC;
		padding: 10px 20px 10px 20px;
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
		font-size: 14px;
	}
	.el-tabs__item {
		font-size: 18px !important;
	}
	.el-tabs__active-bar {
		width: 75px !important;
	}
	.tab-right >>> .el-card__body{
		padding: 0px !important;
	}
	.phone-f{
		height: 150px;
		width: 100%;
		background-color: #074F40;
		padding-top: 50px;
	}
	.phone {
		width: 100px;
		height: 100px;
		background-color: #EEB37F;
		border-radius: 50%;
		margin: 0 auto;
	}
	.phone img{
		margin: 10px;
	}
	.phone-f p{
		font-size: 18px;
		text-align: center;
		color: white;
		margin-top: 4px;
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}
	.comment {
		padding: 20px;
	}
	.comment .content{
		height: 200px;
	}
</style>
