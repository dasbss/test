<template>
	<div>
		<div class="section" style="margin-top: 3px;" >
			<div class="section-div" style="float: left; width: 20%; height: 480px; background-color: black;">
			</div>
			<div style="float: left; width: 60%;">
			  <el-carousel indicator-position="outside" height="480px">
			   <el-carousel-item><!-- v-for="item in 4" :key="item" -->
			   <img ref="img" width="1200px" style="margin: 0 auto;"
			   src='http://p3.music.126.net/OFsnkHN6hxT-Wnr8H1vXdQ==/109951167784247553.jpg'>   
			   </el-carousel-item>
			   <el-carousel-item>
			   <img ref="img" width="1200px" style="margin: 0 auto;"
			   src='http://p3.music.126.net/23jX9NMzK5dD7Z7xZ7eY4w==/109951167778463618.jpg'>   
			   </el-carousel-item>
			   <el-carousel-item>
			   <img ref="img" width="1200px" style="margin: 0 auto;"
			   src='http://p4.music.126.net/hz_AOSiXD8dRX1kPEZhK1w==/109951167746744022.jpg'>   
			   </el-carousel-item>
			  </el-carousel>
			</div>
			<div  class="section-div" style="float: left; width:20%; height: 480px; background-color: black;">
			</div>
		</div>
		<div class="main" style="height: 81px;">
			<div style="float: left; width: 100%;">
			<div style="float: left;  width: 20%;"></div>
			<div class="main-daohang" style="border-right: #d3dce6 1px solid;">
				<img src="http://p4.music.126.net/tKMAm5OvR-2lAj7dnEOhsg==/18623527952924939.jpg">
				<sapn>IP周边</sapn>
			</div>
			<div class="main-daohang" style="border-right: #d3dce6 1px solid;" >
				<img src="http://p3.music.126.net/PzH4QQKE5R97J9f2V-SvqQ==/18585045045959929.jpg">
				数码影音
			</div>
			<div class="main-daohang" style="border-right: #d3dce6 1px solid;">
				<img src="http://p3.music.126.net/UKhDHWnEMmoOo27PQmDPbA==/19117208672446378.jpg">
				热销产品
			</div>
			<div class="main-daohang" >
				<i class="el-icon-bank-card" style="font-size: 45px; line-height: 70px;
				vertical-align: top;"></i> &nbsp;
				支付商城
			</div>
			<div style="float: left;  width: 20%;"></div>
			</div>
		</div>
		<div class="bottom" style="margin-top: 20px;">
			<div style="width: 20%;"></div>
			<div style="width: 29%; margin-right: 30px;">
				<img src="http://p4.music.126.net/kQqf40w-NFhLXIksQPgSwg==/109951164207184328.jpg" style="width: 100%;">
			</div>
			<div style="width: 29%;">
				<img src="http://p4.music.126.net/QtFPuBnRPFatpnGsyNJYhw==/109951163973446450.jpg" style="width: 100%;">
			</div>
			<div style="width: 19%;"></div>
			
			<div class="bottom-edit" style="margin-right: 18%; margin-left: 20%;">
				
			<div class="edit" v-for="(i,key) in select"  :key="key" style="margin-right: 35px; margin-top: 8px;">	
				<div class="edit-box" @click="details(i.id)">
					<img class="img" :src="i.picture">
					<span>
					<a class="edit-box-div">{{i.commodity}}</a>
					</span><br/>
					<span style="color: #d33a31; display: block; text-align: center;">
						￥{{i.price}}</span>
				</div>
			</div>
			</div>
		</div>
		</div>
       
	</div>
</template>

<script>
import axios from 'axios'
export default {
	  data() {
	    return {
	      input: '',
		  select:'',
	    }
	  },
	  mounted(){
		  axios.get("http://43.142.24.86:8890/api/selectListCommodity")
		  .then(select=>{
			  this.select=select.data.data
		  })
	  },
	  methods:{
		  details(id){
				 this.$router.push('/details/'+id) 
			     this.$router.go(0)
		  }
	  }
	}
</script>

<style scoped>
	  /* 走马灯*/
	  .el-carousel__item h3 {
	    color: #475669;
	    font-size: 18px;
	    opacity: 0.75;
	    line-height: 300px;
	    margin: 0;
	  }
	  .el-carousel__item:nth-child(2n) {
	    background-color: #99a9bf;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	    background-color: #d3dce6;
	  }	  
	  .main div{
		  height: 75px;
		  border-bottom: #d3dce6 1px solid;
	  }
	  .main-daohang{
		 float: left;  
		 width: 14.8% ;
		 line-height: 65px;
		 text-align: center;
	  }
	  .main-daohang img{
		  vertical-align: top;
		  margin-top: 10px; 
		  margin-right: 10px;
	  }
	  .bottom div{
		  float: left;
		  height: 330px;
	  }
	  .edit{
		  width: 250px;
	  }
      .edit-box{
		  float: left;
		  cursor: pointer;
		  background-color: #f9f9f9; 
	  }
	  .edit-box-div:hover{
		  text-decoration: underline 1px;
	  }
	
</style>