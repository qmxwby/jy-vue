<template>
	<div>
		<el-row type="flex" style="height: 100%;">
			<el-col :span="3"></el-col>
			<h2>热选律师</h2>
		</el-row>
		<el-row type="flex" style="height: 100%;">
			<el-col :span="3"></el-col>
			<el-col :span="18">
				<el-row type="flex" style="height: 100%;justify-content: space-between">
					<el-col :span="7" class="lawyer">
						<el-row type="flex" style="height: 100%;">
							<el-col :span="12">
								<h4 style="margin: 0;">某某律师</h4>
								<p style="font-size: 12px;">律师资料介绍 律师资料介绍 律师资料介绍</p>
								<br />
								<el-row type="flex" style="align-items: center;">
								<img src="../assets/dianhua.png" style="width: 20%;height: 20%;"/>
								<strong>183XXXXXXXX</strong>
								</el-row>
							</el-col>
							<el-col :span="12">
								<img src="../assets/renwu.png" style="width: 100%;height: 100%;"/>
							</el-col>
						</el-row>			
					</el-col>
					<el-col :span="7" class="lawyer">
						<el-row type="flex" style="height: 100%;">
							<el-col :span="12">
								<h4 style="margin: 0;">某某律师</h4>
								<p style="font-size: 12px;">律师资料介绍 律师资料介绍 律师资料介绍</p>
								<br />
								<el-row type="flex" style="align-items: center;">
								<img src="../assets/dianhua.png" style="width: 20%;height: 20%;"/>
								<strong>183XXXXXXXX</strong>
								</el-row>
							</el-col>
							<el-col :span="12">
								<img src="../assets/renwu6.png" style="width: 100%;height: 100%;"/>
							</el-col>
						</el-row>
					</el-col>
					<el-col :span="7" class="lawyer">
						<el-row type="flex" style="height: 100%;">
							<el-col :span="12">
								<h4 style="margin: 0;">某某律师</h4>
								<p style="font-size: 12px;">律师资料介绍 律师资料介绍 律师资料介绍 律师资料介绍</p>
								<br />
								<el-row type="flex" style="align-items: center;">
								<img src="../assets/dianhua.png" style="width: 20%;height: 20%;"/>
								<strong>183XXXXXXXX</strong>
								</el-row>								
							</el-col>
							<el-col :span="12">
								<img src="../assets/renwu14.png" style="width: 100%;height: 100%;"/>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
			</el-col>		
		</el-row>
		<el-row type="flex" style="height: 100%; margin-top: 25px">
			<el-col :span="3"></el-col>
			<el-col :span="18" class="lawyer_intro">
				<el-row type="flex" style="height: 100%;">
					<el-col :span="2"></el-col>
					<el-col :span="2">
						<img src="../assets/jiangz.png" style="width: 90%;height: 100%;"/>
					</el-col>
					<el-col :span="16">
						<el-row type="flex" style="height: 100%;justify-content: center;align-items: center;">
							<el-col :span="16">
								<p style="font-size: 20px;font-weight: 550;">专业团队 精选律师 官方认证 , 随时为你解决忧虑</p>
							</el-col>
							<el-col :span="6" class="click_btn">
							  <el-button type="warning" round>更多优秀律师， <span style="color: #E6A23C;">点击进入</span></el-button>
							</el-col>
						</el-row>
					</el-col>
					<el-col :span="4"></el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<script>
</script>

<style scoped="less">
	.lawyer {
		background-color: #C9EAFB;
		height: 170px;
		padding: 25px 15px 0 15px;
	}
	.lawyer_intro {
		background-image: url(../assets/c.jpg);
		height: 123px;
		padding: 20px 10px 20px 10px;
	}
	.click_btn >>> .el-button--warning {
		color: #000000;
		background-color: #DFF7E9;		
	}
	.click_btn >>> .el-button {
		border: 4px solid #E6A23C;
	}
</style>
