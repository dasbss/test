<template>
	<div>
		<div class="head" style="width: 100%; height: 70px;">
			<div id="head-info">
				<div id="head-info-one" style="width:55%; height: 70px; float: left;">
					<div id="head-info-one-logo" style="float: left;">
						<img src="../assets/img/logo.png" style="width: 65px; height: 60px;">
					</div>
					<div style="font-family:'楷体'; font-size: 30px;
					 line-height: 65px;float: left;">iua博客商城</div>
				</div>
				<div id="head-info-two" style="width: 30%; height: 70px; float: left;">
					<el-input v-model="input" placeholder="请输入内容" 
					style="line-height: 60px;"></el-input>
				</div>
				<div id="head-info-three" style="width: 14%; height: 70px; float: left;">
					<i class="fa fa-shopping-cart" 
					style="font-size: 40px; line-height: 65px; margin-left: 20%;
					cursor:pointer; margin-right: 15%;"
					@click="$router.push('/ShoppingCart')"></i>
					<div>0</div>
					<el-button style="padding: 5.5%; margin-bottom: 50px; "
					@click="$router.push('/')">登录</el-button>
				</div>
			</div>	
		</div>
		
		<div>
			<router-view name="header"></router-view>
		</div>
		
		<div class="bottombar" style="width: 100%; height: 160px;">
		  <div class="bottombar-div">
			 <div id="bottom-div-left">
				 <p style="font-size: 14px; color:#999; margin-top: 30px; padding-left: 20px;margin-bottom: 3px;">
					 服务条款 | 隐私政策 | 儿童隐私政策 | 版权投诉指引 | 联系我们
				 </p>
				 <span style="font-size: 14px; color: #666;padding-left: 20px;">
					 LQM公司版权所有©XXXX-XXXX广州IUA科技有限公司运营：粤网文[2022] XXXX号
				 </span><br>
				 <span style="font-size: 14px; color: #666;padding-left: 20px;">
				 	 经营许可证 出版物经营许可证信息备案: 粤网XX18681184957
				 </span><br>
				 <span style="font-size: 14px; color: #666;padding-left: 20px;">
				 	 举报邮箱 : qq18681184957@163.com
				 </span>
			 </div>
			 <div id="bottom-div-right" style="font-size: 35px; line-height: 150px;
			  text-align: center;">
				 <i class="el-icon-platform-eleme"></i> &nbsp;
				 <i class="el-icon-eleme"></i> &nbsp;
				 <i class="el-icon-setting"></i> &nbsp;
				 <i class="el-icon-user-solid"></i> &nbsp;
			 </div>
		</div>
		</div>
	</div>
</template>

<script>
	
</script>


<style scoped>
	#head-info{
		height: 70px;
		margin-left: 20%;
		margin-right: 20%;
	}
	#head-info div{
	}
	#head-info-three div{
		position: absolute; 
		left: 74.5%; 
		top: 9px;
		width: 17px;
		color: #fff;
		border: none;
		font-size:12px;
		border-radius: 20px;
		text-align: center; 
		background-color: #d33a31;
	}
	.bottombar{
			  position: absolute;
			  top: 2000px;
			  background-color: #f2f2f2;
	 }
	 .bottombar-div{
			  width: 58%;
			  height: 160px !important;
			  margin-left: 20%;
			  margin-right: 20%;
	 }
	 #bottom-div-left{
			  float: left;
			  width: 60%;
			  height: 160px;
			
	 }
	 #bottom-div-right{
			  float: left;
			  width: 38%;
			  height: 160px;
			  margin-left: 10px;
		
	 }
</style>