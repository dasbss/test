<template>
	<div>
		<div class="shoppringcart">
			<div class="shoppringcart-div">
				<div style="font-size: 20px;">购物车
				</div>
				<hr />
				<div style="margin-top: 30px;">
					<table>
						<tr>
							<td>	
							</td>
							<td style="width: 100px;"></td>
							<td style="width: 600px;">商品</td>
							<td style="width: 50px;"></td>
							<td style="width: 130px;">数量</td>
							<td style="width: 100px;">价格</td>
							<td>操作</td>
						</tr>
					</table>
				</div>
				
				<div style="border: 1px solid rgba(0, 0, 0, 0.1);">
				<div style="height: 100px; width: 100%;
				text-align: center; line-height: 100px;font-size: 25px; color: #666;
				cursor: pointer;"
				@click="$router.push('/')"> 暂无商品加入购物车，添加购物车请先登录</div>
				<!-- 	<table>
						<tr v-for="(i,key) in list" :key="key">
							<td>
								<input type="checkbox" v-model="chengbox" :value="i.sid">
							</td>
							<td style="width:100px">
								<img :src="i.spicture" width="80%">
							</td>
							<td style="width: 600px;">
								{{i.sinfo}}
							</td>
							<td style="width: 50px;"></td>
							<td style="width: 110px;">
								{{i.snum}}
							</td>
							<td style="width: 120px;">
								￥{{i.sprice}}
							</td>
							<td @click="deletes(i.sid)" style="cursor: pointer;">×</td>
						</tr>
					</table> -->
					<div style="height: 50px;" class="jiesuan">
						<div style="width: 10%; height: 50px;">
						</div>
						<div style="width: 69%; height: 50px; font-size: 14px; color: #666;
						line-height: 50px;">
							已经选中X件商品
						</div>
						<div style="width: 8%; height: 50px;line-height: 50px;">合计: ￥xxxx</div>
						<div style="width: 11.5%;height: 50px;line-height: 50px;text-align: center;
						float: right; background-color: #d33a31; color:#fff ;">结 算</div>
					</div>
				
				</div>
				<div style="margin-top: 40px;font-size: 20px;">
					热门推荐
					<hr />
					<div style="margin-top: 30px;">
						<div v-for="(i,key) in select" :key="key"
						class="xiangqing" style="width: 250px;"
						@click="details(i.id)">
							<img :src="i.picture" alt="">
							<div style="font-size: 15px;">
								<span>{{i.commodity}}</span>
							</div>
							<div>
								<span style="color: #d33a31; display: block;
								 text-align: center;">
									￥{{i.price}}</span>
							</div>
						</div>
					</div>
				</div>	
			</div>
		</div>
		<div class="sidebar">
			<div style="text-align: center; line-height: 60px; cursor: pointer;">
				<a @click="$router.push('/index')">主页</a>
			</div>
			<div style="text-align:center;line-height: 25px;">
				<a href="#">100%正品</a>
			</div>
			<div style="text-align:center;line-height: 25px;">
				<a href="#">七天无理由</a>
			</div>
			<div>
				<a href="#">
					<i class="fa fa-shopping-cart"></i>
					<br>
					购物车
				</a>
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
	import axios from 'axios'
	export default{
		data(){
			return{
				chengbox:[],
				list:'',
				select:'',
			}
		},
		mounted(){
			axios.get("http://43.142.24.86:8890/api/selectListCommodity")
			.then(select=>{
				this.select=select.data.data
			})
			axios.get("http://43.142.24.86:8890/api/SelectShoppingCart")
			.then(select=>{
				this.list=select.data.data
			})
			
		/* 	axios.get("http://localhost:10000/order/orderSelectListCommodity")
			.then(select=>{
				 this.select=select.data.data
			}) */
		},
		methods:{
			details(id){
				this.$router.push('/details/'+id)
				this.$router.go(0)
			},
			deletes(sid){
			axios.get("http://43.142.24.86:8890/api/deleteShoppingCartBysId",{
				params:{
					'sid':sid
				}
			}).then(de=>{
				 this.$message({
				   type: 'info',
				   message: '已取消'
				 });
				 this.$router.go(0) 
			})
		}
		},
	}
</script>

<style scoped>
	.shoppringcart{
/* 		height: 500px; */
		
	}
	.shoppringcart-div{
		margin-left: 20%;
		margin-right: 20%;
/* 		height: 500px; */
	}
	.shoppringcart-div2{
	width: 100%;
	}
	.shoppringcart-div ul li{
		list-style: none;
	}
	.jiesuan div{
		float: left;

	}
	.xiangqing{
		float: left;
		cursor: pointer;
		margin-right: 30px;
		margin-top: 20px;
		background-color: #f9f9f9; 
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
</style>