<template>
  <div class="body">	
	  <hr>
	  <div class="main">
		  <div class="block">
		  		<div class="main-header">
					<div>
					<span id="main-header-span1">
					<a @click="$router.push('/indexlogin/'+$route.params.username)"
					style="cursor: pointer;">首页</a>
					</span>
					<span id="main-header-span2">
						<i>></i>
						<span class>{{commoditys}}</span>
						
						<span style="margin-left: 40%; cursor: pointer; color: black;">
							<a @click="$router.push('/indexlogin/'+$route.params.username)">
								<i class="fa fa-sign-out"></i>返回</a>
						</span>
	
					</span>
					<span id="mian-header-span-fill"></span>
					</div>
				
				</div>
				<div class="main-main">		
			 	<div class="main-left" >	
					<div class="magnifier" >
					 <img :src="pictures" width="160%" style="background-color: #f9f9f9;">
					</div>
				</div> 
					<div class="main-right" style="width: 60%;" >
						<div class="main-right-first">
							<span >
								{{commoditys}}
							</span>
							<br>
							<span id="sellpoint">
								{{infos}}
							</span>
						</div>
						<div class="main-right-second" >
					       <span id="main-right-second-span1">￥{{prices}}</span>
							<span id="main-right-second-span2">￥{{oldprices}}</span>
						</div>
						<!-- 促销 -->
						<div class="main-right-second-Promotion">
							
							<div id="main-right-second-Promotion-div1">促销:
							</div>
							<div id="main-right-second-Promotion-div2">
			
							<span id="main-right-second-Promotion-coupon">
								<span class="label">领券立享</span>
								<span class>10元  数码春季特惠,</span>
								&nbsp;&nbsp;
								<span>无门槛</span>
								&nbsp;&nbsp;
								<span class="c-coupon">
									<a href="#">领卷</a>
								</span>
							</span>
							</div>
						</div>
						<!-- 颜色 -->
						<div class="main-right-second-color">						
							<div id="main-right-second-color-div1">
								颜色:
							</div>
							<div id="main-right-second-color-div2">
							    <div @click="bordercolor" 
								:class="[showCode?'border':'Redborder']">
								白色</div>
							</div>						
						</div>
						<!-- 数量 -->
						<div class="main-right-second-quantity">
							<div id="main-right-second-quantity-div1">
								数量:
							</div>
							<div id="main-right-second-quantity-div2">
								<div id="main-right-second-quantity-div2-son1"
								@click="deletnum">-</div>
								
								<div id="main-right-second-quantity-div2-son2"
								>{{num}}</div>
								<div id="main-right-second-quantity-div2-son3"
								@click="addnum">+</div>
							</div>
						</div>
						
						
						<!-- 服务 -->
						<div class="main-right-second-service">
							<div id="main-right-second-service-div1">
								服务:
							</div>
							
							<div id="main-right-second-service-div2">
								<a href="#">❤15天无忧换货</a>&nbsp;&nbsp;
								<a href="#">❤满119包邮</a>&nbsp;&nbsp;
								<a href="#">❤商家发货</a>&nbsp;&nbsp;
								<a href="#">❤网易直营</a>
							</div>
						</div>
						
						<!-- 购买+加入购物车 -->
						<div class="main-right-second-purchase">
							  <div>
								  <div id="main-right-second-purchase-div1">
									  立即购买</div>
								  <div id="main-right-second-purchase-div2"
								  @click="shoppingcart">
									 <i class="fa fa-shopping-cart"></i>
									  加入购物车</div>
							  </div>
						</div>
					</div>
				</div>
		  </div>
	  </div>
	  
	  <!-- 尾部-->
	  <div class="tail">
		  <div class="tail-info">
		  <div class="tail-left">
			  <div class="tail-left-product-details"> 
				  <h4 @click="details">商品详情</h4>
				  <h4 @click="comment=false">评论</h4>
			  </div>
			  <!-- 图片+详情-->
			  <div class="tail-left-product-img"
			  v-show="comment?true:false">

				 <img :src="pictures" style="width: 80%; margin-top: -50px;">
			  </div>
			  
			  <div class="tail-left-comment"
				   style="width: 100%;background-color: #f9f9f9;"
				   v-show="comment?false:true"> 
				   <div v-for="(i,key) in commentlist" :key="key">
					  <span><i style="font-size: 14px; color: #666;">(用户)</i> {{i.cusername}} : </span>
					  <span> {{i.cinfo}}</span>
					  <span style="font-size: 12px;margin-left: 10%;">
					  <i class="fa fa-thumbs-o-up" style="cursor: pointer;"></i>{{i.cgood}}</span><br/>
					  <span style="font-size: 12px;">留言时间:{{i.ctime}}</span>
				   </div>
				   <div style="margin-top: 30px;">
					   <el-input
					     type="textarea"
					     :rows="3"
					     placeholder="请输入内容"
					     v-model="textarea">
					   </el-input>
					   <el-button
					   @click="addComment">发表</el-button>
				   </div>
			  </div>
			 
		  </div>
		  <div class="tail-right" style="margin-bottom: 20px;">
			  <div class="tail-right-hotItems">
				  <h4>热门商品</h4>
			  </div>
			  <div class="tail-right-hotItems-product">
			  <div id="tail-right-hotItems-product-div" v-for="(i,key) in selectlist" :key="key">
				  <div id="tail-right-hotItems-product-div-img">
				  <img :src="i.picture" width="95%" style="background-color: #f9f9f9;">
				  </div>
				  <div id="tail-right-hotItems-product-div-text">
					  <div>
						  <a @click="tzdetails(i.id)" style="cursor: pointer;"
						  class="tail-right-hotItems-product-div-text-a">
						     {{i.commodity}}
						  </a>
					  </div>
					  <div></div>
				  </div>
			  </div>
			  </div>
		  </div>
		  </div>
	  </div>

	               <!--侧边栏 -->
				<div class="sidebar">
					<div style="text-align: center; line-height: 60px; cursor: pointer;">
						<a @click="$router.push('/indexlogin/'+$route.params.username)">主页</a>
					</div>
					<div style="text-align:center;line-height: 25px;">
						<a href="#">100%正品</a>
					</div>
					<div style="text-align:center;line-height: 25px;">
						<a href="#">七天无理由</a>
					</div>
					<div @click="$router.push('/ShoppingCartlogin/'+$route.params.username)"
					style="text-align:center;line-height: 25px; cursor: pointer;">						
							<i class="fa fa-shopping-cart"></i>
							<br>
							购物车					
					</div>
					<div>
						<a href="#">
							<i class="fa fa-phone"></i>
							<br>
							联系客服
						</a>
					</div>
				</div>
    </div>
</template>

<script>
/* import PicZoom from 'vue-piczoom' */
import axios from 'axios'
export default {
      
	  data(){
		  return{
			 comment:true,
			 showCode:true,
			 num:0,
			 selectlist:'',
			 pictures:'',
			 prices:'',
			 pricesnum:'',
			 oldprices:'',
			 commoditys:'',
			 infos:'',
			 commentlist:'',
			 textarea: '',
			 good:0,
		  }
	  },
	  mounted(){
		  axios.get("http://43.142.24.86:8890/api/selectById",{
			 params:{
				 'id':this.$route.params.id, 
			 }
		  }).then(sbid=>{
			  this.infos=sbid.data.data.info
			  this.commoditys=sbid.data.data.commodity
			  this.oldprices=sbid.data.data.num
			  this.prices=sbid.data.data.price
			  this.pictures=sbid.data.data.picture		 
		  })
		  
		  axios.get("http://43.142.24.86:8890/api/selectListCommodity")
		  .then(sl=>{
			  this.selectlist=sl.data.data
		  })
		  
		  axios.get("http://43.142.24.86:8890/api/selectAllComment")
		  .then(cl=>{
		  		this.commentlist=cl.data.data
				
		  })
		
	  },
	/* components:{
	   		PicZoom
	   }, */
	  methods:{
		  addComment(){
			  if(this.textarea==''){
				  this.$message({
				         message: '评论不能为空!请输入',
				         type: 'warning'
				       });
			  }
			  if(this.textarea!=''){
			  axios.post("http://43.142.24.86:8890/api/insertComment",{
					  'cusername':this.$route.params.username,
					  'cinfo':this.textarea,
					  'cgood':this.good
			  }).then(addComment=>{
				    this.$message({
				             message: '评论成功！',
				             type: 'success'
				           }); 
						   this.$router.go(0)
				 
			  })
			  }
		  },
		  bordercolor(){
			  this.showCode=!this.showCode;
	      },
	      addnum(){
			  this.pricesnum=this.num++
		  },
		  deletnum(){
			 if(this.num>0){
				 this.num--
			 }
		  },
		  details(){
			  this.comment=true
		  },
		  tzdetails(id){
				this.$router.push('/detailslogin/'+this.$route.params.username+'/'+id)			  
			    this.$router.go(0)
		  },
		  shoppingcart(){
			  if(this.num==0){
				  this.$message({
				         message: '请选择商品数量!',
				         type: 'warning'
				       });
			  }
			  if(this.num!=0){
			  axios.post("http://43.142.24.86:8890/api/InertShoppingCart",{	  
					  'spicture':this.pictures,
					  'sinfo':this.commoditys,
					  'sprice':this.prices*this.pricesnum,  
					  'snum':this.pricesnum,  
			  }).then(sinsert=>{
				  this.$router.go(0)
				  this.$message({
				           message: '成功加入购物车！',
				           type: 'success'
				         });
			  })
		  }
		  }
      
},
}
</script>


<style scoped>
	.magnifier{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.magnifier-box img{
		height: 80%;
	}
	.magnifier-box{
		display: block;
	}
	.rotation-chart{
		width: 100%;
		height: 120px;	
		position: absolute;
		bottom: 0px;
	}
	/* 导航条 */
    .header{
		width: 99.8%;
		height: 75px;
	}
	.header div{
		width: 19.8%;
		height: 73px;
		float: left;
	}
	.s-logo{
		width: 20%;
		height: 72px;
		margin-right: 11.1%;
		border: solid black 1px;
	}
	.s-input input{
		width: 70%;	
		height: 30px;
		margin-top: 15px;
		border-radius: 10px;
		border: none;
		border: solid 1px black;
	}
	.s-lastbox{
		width: 18%;
		float: left;
	}
	.s-lastbox div{
		width: 20%;
		height: 73px;
		margin-left: 10px;
		border: solid 1px black;
	}
	
	/* 主体 */
	.main{
		width: 99.6%;
		height: 680px;
	}
	.main .block{
		margin-right: 20%;
		margin-left: 20%;
		margin-top: 20px;
		height: 100%;
	}
	.main .block .main-header{
		height: 50px;
		border-bottom: 1.5px solid black;
	}
	.main .block .main-header div{
		margin-top: 30px;
		margin-bottom:30px;
	}
	#main-header-span1 a{
		text-decoration: none;
		font-size: 19px;
	}
	#main-header-span2{
		color: cadetblue;
	}
    #mian-header-span3{
		margin-left: 55%;
	}
    /* 主体左边图片*/
	.main-main{
		margin-top: 10px;
	}
	.main-main .main-left{
		/* width: 39%;
		height: 553px; */
		float: left;	
	}
	element.style {
	    width: 200px;
	}
	.el-carousel__item h3 {
	  color: #475669;
	  opacity: 0.75;
	  line-height: 200px;
	  margin: 0;
	  text-align: center;
	}

	
	/* 主体右边*/
	.main-main .main-right{
		/* width: 56%;
		height: 439px; */
		float: right;
	}
/*    .main-right-first{
		width: 100%;
		height: 70px;
	} */
	.main-right-first span{
		font-size: 24px;
	}
	.main-right-first #sellpoint{
		font-size: 15px;
		color: darkgrey;
	}
	.main-right-second{
		margin-top: 50px;
		height: 60px;
	}
	#main-right-second-span1{
		color: crimson;
		font-size: 30px;
	}
	#main-right-second-span2{
		margin-left: 12px;
	    text-decoration: line-through;
	    color: #999;}
	.main-right-second-Promotion{
		width: 100%;
		height: 30px;
	}
	#main-right-second-Promotion-div1{
		color: #999;
		float: left;
		font-size: 15px;
		line-height: 30px;
		margin-right: 10px;
	}
	#main-right-second-Promotion-div2{
		width: 	90.5%;
		height: 30px;
		float: left;
		cursor: pointer;
		background-color: #fdf5f4;
		border: 1px solid #f8e2e0;
		line-height: 28px;
	}
	#main-right-second-Promotion-coupon{
		font-size: 13px;
	}
	#main-right-second-Promotion-coupon .label{
		color: #d33a31;
	    padding: 0 3px;
		margin-left: 5px;
	    border: 1px solid #d33a31;
	}
    #main-right-second-Promotion-coupon .c-coupon a{
		text-decoration: none;
		color: deepskyblue;
	}
    .main-right-second-color{
		width: 100%;
		height: 60px;
		font-size: 13px;
		margin-top: 20px !important;
	}
	#main-right-second-color-div1{
		color: #999;
		float: left;
		height: 60px;
		font-size: 15px;
		line-height: 50px;
		margin-right: 10px;
	}
	#main-right-second-color-div2{
		width: 	20.5%;
		height: 60px;
		float: left;
		line-height: 35px;
	
	}
	.border{
		margin-top: 8px;
		width: 70px;
		height: 40px;
		line-height: 35px;
		text-align: center;
		box-sizing: border-box;
		border: #999 1.5px solid;
		/* background-color: whitesmoke; */
	}
	.Redborder{
		margin-top: 8px;
		width: 70px;
		height: 40px;
		line-height: 35px;
		text-align: center;
		box-sizing: border-box;
		border: aliceblue 2px solid;
		border: 2px solid #d33a31;}
	.main-right-second-quantity{
		width: 100%;
		height: 60px;
		margin-top: 20px !important;
		font-size: 15px;
	}
	#main-right-second-quantity-div1{
		color: #999;
		float: left;
		height: 50px;
		margin-right: 10px;
		line-height: 34px;
	}
	#main-right-second-quantity-div2{
		float: left;
	}
	#main-right-second-quantity-div2 div{
		float: left;
		width: 40px;
		height: 35px;
		line-height: 35px;
		text-align: center;
		border:  #999 solid 1px;
	}
	#main-right-second-quantity-div2-son1{
		font-size: 40px;
		cursor: pointer;
	
	}
	#main-right-second-quantity-div2-son2{
		cursor: pointer;
		font-size: 16px;
		width: 70px !important;
	}
	#main-right-second-quantity-div2-son3{
		cursor:pointer;
		font-size: 30px;
	}
	.main-right-second-service div{
		float: left;
	}
	#main-right-second-service-div1{
		color: #999;
		float: left;
		height: 50px;
		margin-right: 10px;
		line-height: 34px;
	}
	#main-right-second-service-div2{
		font-size: 12px;
		line-height: 41px;
	}
	#main-right-second-service-div2 a{
		text-decoration: none;
	}
	#main-right-second-service-div2 a:hover{
		color: red;
	}
	.main-right-second-purchase{
		width:100%;
		height: 160px;
		margin-top: 70px;
	}
	#main-right-second-purchase-div1{
		width: 30%;
		height: 45px;
		float: left;
		color: #d33a31;
		cursor: pointer;
		font-size: 21px;
		line-height: 45px;
		text-align: center;
		margin-right: 10px;
		border: #d33a31 2px solid;
	}
	#main-right-second-purchase-div2{
		width: 30%;
		height: 49px;
		float: left;
		cursor: pointer;
		font-size: 21px;
		color: aliceblue;
		line-height: 45px;
		text-align: center;
		background-color: #d33a31;
	}
	
	
	/* 尾部 */
	.tail{
		width: 100%;
		height: 600px;
	}
	.tail-info{
		width: 60%;
		height: 600px;
		margin-left: 20%;
		margin-right: 20%;
		
	}
	.tail-left{
		width: 63%;
		height: 600px;
		float: left;
		margin-right: 40px;
	}
	.tail-left-product-details{
		width: 100%;
		height: 100px;
		font-size: 25px;
		line-height: 50px;
	}
	.tail-left-product-details h4{
		width: 50%;
		float: left;
		cursor: pointer;
		border-bottom: black solid 1px;
	}
	.tail-left-product-img img{
		width: 100%;
		height: 100%;
	}
	.tail-right{
		width: 32.1%;
		height: 600px;
		float: left;
		
	}
	.tail-right-hotItems{
		width: 100%;
		height: 50px;
		font-size: 25px;
		line-height: 50px;
		margin-bottom: 50px;
		border-bottom: black solid 1.6px;
	}
	#tail-right-hotItems-product-div{
		width: 100%;
		height: 110px;
		border: 0.5px solid #f8e2e0;
		
	}
	#tail-right-hotItems-product-div-img{
		width: 34%;
		height: 110px;
		border: 0.5px solid #f8e2e0;
		float: left;
	}
	#tail-right-hotItems-product-div-text{
		width: 65%;
		height:110px;
		float: left;		
	}	
	#tail-right-hotItems-product-div-text a{
		display: block;
		margin-top: 20px;
		text-decoration: none;
	}
	#tail-right-hotItems-product-div-text a:hover{
		text-decoration: underline 1px;
	}
	/* 侧边栏 */
	.sidebar{
		width: 58px;
		position: fixed;
		left: 82%;
		top:38%;
	}
	.sidebar div{
		width: 58px;
		height: 60px;
		border: black 1.5px solid;
	}
	.sidebar div a{
		text-indent: 1.3em;
		text-decoration: none;
		font-size: 17px;
		text-align: center;
	}
	.sidebar div a:hover{
		color:#d33a31;
	}
		
	
	
			
	
	
	
	
	
	
	
	
	
	
	
	@media (max-width:1450px) {
		#mian-header-span3{
			margin-left: 30%;
		}
	}
	
	@media(max-width:1535px){
		.tail-left{
			margin-right: 30px;
		}
	}
	@media(max-width:1200px){
		.tail-left{
			margin-right: 20px;
		}
	}
</style>
