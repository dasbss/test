<template>
	<div>	
	<div class="heard">
		<div class="heard-div1">
			<div class="heard-logo" >
				<img src="../assets/img/logo.png" alt=""
				style="margin-left: 200px;">
			</div>
			<div class="heard-logo">
				<h5 style="font-size: 25px; margin-top: 70px; margin-left: 40px;
				font-family: monospace; font-size: 30px;"
				>欢迎登录iua商城</h5>
			</div>
		</div>
		<div class="heard-div2" >
			<a href="#" style="color: #999; 
			text-decoration: none; display: block;
			margin-top: 90px; width: 100px;
			float: left; margin-right: 20px;">调查问卷</a>
			<p  @click="$router.push('/index')"
			style="margin-top: 90px; display: block;
			text-decoration: none;
			cursor:pointer" >主页</p>
		</div>
	</div>
	
	<div class="main" style="background-color:rgba(175, 175, 120, 0.1);">
		 <p style="text-align: center; line-height: 50px; color: #999;">
			 依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！ 新版已上线，将更有利于保护您的个人隐私。
		 </p>
	</div>
	
	<div class="bigbox">
		<div class="box" id="boxs">
			
			
			
			
			
			
			
			
			
			
			
		    <div class="box-login"	v-show="loginshow==true?true:false">
				<div class="box-login-heared" 
				style="background-color: cornsilk; height: 30px; text-indent: 2em ; color: #999;">
					我们不会以任何理由要求您转账汇款，谨防诈骗。
				</div>
				<div style="height: 50px; border-bottom:#999 solid 1px; font-size: 18px;
				text-align: center; line-height: 51px;" class="box-login-vip">
					登&nbsp;&nbsp;录
				</div>
				<div class="box-login-input" style="margin-top: 50px;"> 
						<div class="box-login-logo" style="
						float: left; margin-left: 41px; 
						width:9.5%; height:37px; 
						border: #999 solid 1px; 
						text-align:center; font-size: 22px; line-height: 35px;">
							<i class="fa fa-user-o"></i>
						</div>
						<div class="box-login-input2" style="float:left; width: 70%;
						height: 34px;">
							<input type="text" placeholder="邮箱/用户名/账号" style="width: 97%;
							height: 37px; border: #999 1px solid; 
							outline:medium; text-indent: 1em;"
							v-model="username">						
							<!-- outline:medium;输入框选中不显示边框	 -->
						</div>
				</div>			
				<div class="box-login-password" style="margin-top: 115px;">
					<div class="box-login-passwordlogo" style="
					border: 1px solid #999;
					width: 9.5%; height: 37px;
					float: left;  margin-left: 41px;
					text-align:center; font-size: 24px; line-height: 35px;">
					<i class="fa fa-lock"></i>
					</div>
					<div class="box-login-password-input" style="float: left; width: 70%; height:34px;">
						<input type="password" placeholder="密码"  style="width: 97%;height: 37px;
						border: #999 1px solid; outline:medium; text-indent: 1em;"
						v-model="password">
					</div>
				</div>
				<div class="forgetPassword" style="	margin-top: 170px;
				height: 20px; display: flex;justify-content: flex-end;">
					<div style="margin-right: 18px;
						width:20%;height: 20px;">
					<a href="#" style="font-size: 13px; color: #999;
					text-decoration: none;	">忘记密码</a></div>
				</div>		
				<div class="login-button" style="width: 79%; height: 40px; 
				margin-top: 18px;
				margin-left:10% ;
				margin-right: 10% ;
				background-color: #d33a31;
				font-size: 20px;
				color: #fff;
				text-align: center;
				line-height: 38px;
				cursor:pointer;
				 " @click="viplogin">
					登&nbsp;&nbsp;录
				</div>	
				<div class="wechatAndQQAndRegister"
				style="
				border: #999 1px solid;
				margin-top: 45px;
				height: 52px;
				display: flex;
				background-color: #fff;">			
				<div class="qq"
					style="
					height: 52px;
					flex: 0 0 20%;
					display: flex;
					margin-left: 32px;">
					<div style="
					width: 100%;
					height:30px; 
					margin-top: 10px;
					flex: 0 0 45%;
					">
					<img src="../assets/img/qq2.png">
					</div>	
					<div style="float: left; width: 50%;height: 30px;
					flex: 0 0 10%;line-height: 50px;"> 
					<a href="#" style="text-decoration: none;">QQ</a>
					</div>					
				    </div>
					<div class="wechat"
					style="
					height: 52px;
					flex: 0 0 20%;
					display: flex;">			
					<div style="
					width: 100%;
					height:30px; 
					margin-top: 10px;
					flex: 0 0 45%;					">
					<img src="../assets/img/wechat.png">
					</div>
					<div style="float: left; width: 50%;height: 30px;
					flex: 0 0 50%;line-height: 50px;"> 
					<a href="#" style="text-decoration: none;">微信</a>
					</div>				
					</div>
					<div class="register"
					style="		
					height: 52px;
					flex: 0 0 50%;
					display: flex;
					justify-content: flex-end;">
						<div class="register-div" 
						style="		
						width: 50%;
						height:52px ;">
						<a href="#" style="text-decoration: none;
						line-height: 45px;" @click="register">注册会员</a></div>
					</div>
				</div>
			</div>
			
			
			
			
			
			
			
			
			<!-- 登录 -->
			<div class="box-login" v-show="loginshow==true?false:true">
				<div class="box-login-heared" 
				style="background-color: cornsilk; height: 30px; text-indent: 2em ; color: #999;">
					我们不会以任何理由要求您转账汇款，谨防诈骗。
				</div>
						<!-- 注册 -->
				<div style="height: 50px; border-bottom:#999 solid 1px; font-size: 18px;
				text-align: center; line-height: 51px;" class="box-login-vip">
					用户注册
				</div>
				<div class="box-login-input" style="margin-top: 50px;"> 
						<div class="box-login-logo" style="
						float: left; margin-left: 41px; 
						width:9.5%; height:37px; 
						border: #999 solid 1px; 
						text-align:center; font-size: 22px; line-height: 35px;">
							<i class="fa fa-user-o"></i>
						</div>
						<div class="box-login-input2" style="float:left; width: 70%;
						height: 34px;">
							<input type="text" placeholder="输入注册用户名  邮箱/手机号" style="width: 97%;
							height: 37px; border: #999 1px solid; 
							outline:medium; text-indent: 1em;"
							v-model="username">						
							<!-- outline:medium;输入框选中不显示边框	 -->
						</div>
				</div>	
				<div class="box-login-password" style="margin-top: 115px;">
					<div class="box-login-passwordlogo" style="
					border: 1px solid #999;
					width: 9.5%; height: 37px;
					float: left;  margin-left: 41px;
					text-align:center; font-size: 24px; line-height: 35px;">
					<i class="fa fa-lock"></i>
					</div>
					<div class="box-login-password-input" style="float: left; width: 70%; height:34px;">
						<input type="password" placeholder="输入注册密码"  style="width: 97%;height: 37px;
						border: #999 1px solid; outline:medium; text-indent: 1em;"
						v-model="password">
					</div>
				</div>
				<div class="forgetPassword" style="	margin-top: 170px;
				height: 20px; display: flex;justify-content: flex-end;">
					<div style="margin-right: 18px;
						width:20%;height: 20px;">
					<a href="#" style="font-size: 13px; color: #999;
					text-decoration: none;	">忘记密码</a></div>
				</div>		
				<div class="login-button" style="width: 79%; height: 40px; 
				margin-top: 18px;
				margin-left:10% ;
				margin-right: 10% ;
				background-color: #d33a31;
				font-size: 20px;
				color: #fff;
				text-align: center;
				line-height: 38px;
				cursor:pointer;
				 " @click="add">
					确&nbsp;&nbsp;定
				</div>	
				<div class="wechatAndQQAndRegister"
				style="
				border: #999 1px solid;
				margin-top: 45px;
				height: 52px;
				display: flex;
				background-color: #fff;">			
				<div class="qq"
					style="
					height: 52px;
					flex: 0 0 20%;
					display: flex;
					margin-left: 32px;">
					<div style="
					width: 100%;
					height:30px; 
					margin-top: 10px;
					flex: 0 0 45%;
					">
					<img src="../assets/img/qq2.png">
					</div>	
					<div style="float: left; width: 50%;height: 30px;
					flex: 0 0 10%;line-height: 50px;"> 
					<a href="#" style="text-decoration: none;">QQ</a>
					</div>					
				    </div>
					<div class="wechat"
					style="
					height: 52px;
					flex: 0 0 20%;
					display: flex;">			
					<div style="
					width: 100%;
					height:30px; 
					margin-top: 10px;
					flex: 0 0 45%;					">
					<img src="../assets/img/wechat.png">
					</div>
					<div style="float: left; width: 50%;height: 30px;
					flex: 0 0 50%;line-height: 50px;"> 
					<a href="#" style="text-decoration: none;">微信</a>
					</div>				
					</div>
					<div class="register"
					style="		
					height: 52px;
					flex: 0 0 50%;
					display: flex;
					justify-content: flex-end;">
						<div class="register-div" 
						style="		
						width: 50%;
						height:52px ;">
						<a href="#" style="text-decoration: none;
						line-height: 45px;" @click="register">登录</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
	
	<div class="tailbar">
		<table>
			<th>
				<td>关于我们</td>
				<td>联系我们</td>
				<td>人才招聘</td>
				<td>广告服务</td>
				<td>友情链接 </td>
				<td>English Site</td>
			</th>
		</table>
	</div>
	<div style="text-align: center;">
		
            Copyright © 2004-2022  LQM.com 版权所有
        
	</div>

	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				username:'',
				password:'',
				loginshow:true,

				
			}
			
		},
		methods:{
			viplogin(){
			if(this.username==''){
					 this.$message.error('用户名不能为空，请重新输入！');
			}else if(this.password==''){
					 this.$message.error('密码不能为空，请重新输入！');
			}
			if(this.username!=''&&this.password!=''){
			axios.get("http://43.142.24.86:8890/api/login",{
				params:{
				 'username':this.username,
				 'password':this.password,
				}
			}).then(dl=>{		
				if(dl.data!=null){
					this.$message({
					  type: 'success',
					  message: '登录成功!',					
					});
					 this.$router.push('/indexlogin/'+dl.data.data.username)
				}else{
					 this.$message.error('用户名或密码错误，请重新输入！');
				}		
			})
			}
			},
			register(){
				this.loginshow=!this.loginshow	
			},
			add(){
				if(this.username==''&&this.password==''){
					 this.$message.error('用户名或密码不能为空，请输入!');
				}else if(this.username==''){
					this.$message({
					       message: '用户名不能为空，请输入！',
					       type: 'warning'
					     });
				}else if(this.password==''){
					this.$message({
					       message: '密码不能为空，请输入！',
					       type: 'warning'
					     });
				}
				if(this.username!=''&&this.password!=''){
				axios.post("http://43.142.24.86:8890/api/InsertUser",{
					'username':this.username,
					'password':this.password,
				}).then(add=>{
						this.$message({
						  type: 'success',
						  message: '注册成功!',					
						});	
						this.$router.go(0)
						
				})
				}
			},
		}
		
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	
	.heard{
		width: 100%;
		height: 115px;
		display: flex;
		
	}  
	.heard .heard-div1{   
		flex: 80%;
		height: 115px;
		display: flex;
	}
	.heard-logo{
		width:20% ;
		height: 115px;
		flex: 0 0 20%;
		
	}
	.heard .heard-div2{
        flex: 0 0 20%;
		height: 115px;
	}
	.main{
		width: 100%;
		height: 50px;
	}
	.bigbox{
		width: 100%;
		height: 900px;
		background-repeat: no-repeat;	
		background-size: cover;
		background-image: url("https://pic.616pic.com/bg_w1180/00/12/54/dZC66S2Jf5.jpg!/fw/1120");
		height: 500px;
		float: left;
		display: flex;
	    justify-content: flex-end;
	}

	.box-login{
        float: right;
        width: 395px;
		height: 428px;	
		margin-top: 25px;
		margin-right: 300px;
		background-color:rgba(255, 255, 255, 0.78)
	}
	.box-login-vip:hover{
		color: red;
	}
	.tailbar{
		margin-left: 15%;
	}
	.tailbar{
		margin-right: 15%;
	}
	.tailbar table th td{
		padding: 20px 73px;
		color: #999;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
	}

</style>