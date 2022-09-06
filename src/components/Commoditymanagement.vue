<template>
	<div>
		<div>
			<div class="caozuo">
					<el-input
					  style="width: 200px;"
					  type="textarea"
					  autosize
					  placeholder="输入ID"
					  v-model="inputID">
					</el-input>
					<el-button type="primary" plain style="padding: 9.5px 10px;margin-right: 3%;"
					 @click="select" >搜索</el-button>
					<el-input
						  style="width: 200px;"
						  type="textarea"
						  autosize
						  placeholder="搜索商品"
						  v-model="inputCommodity">
					</el-input>	
				<el-button type="primary" plain style="padding: 9.5px 10px;"
				 @click="findByCommodity">搜索</el-button>
				<el-button type="info" plain style="padding: 9.5px 10px; margin-left: 10%;"
				 @click="$router.go(0)">重置</el-button>
				<!-- <el-button type="success"  plain style="padding: 9.5px 10px;"
				 @click="$router.push('/bokeAddData')">新增</el-button> -->
				 <el-button type="success" @click="dialogFormVisibles = true"  plain
				 style="margin-left: 5px; padding:9.5px 10px;">新增</el-button>      
				 <el-dialog title="新增数据" :visible.sync="dialogFormVisibles">
				   <el-form>
				    <el-form-item label="商品名:" :label-width="formLabelWidth">
				    <el-input v-model="commodity"  placeholder="添加商品介绍"></el-input>
				    </el-form-item>
				    <el-form-item label="内容:" :label-width="formLabelWidth">
				    <el-input v-model="info" placeholder="添加商品内容" type="textarea">
				    </el-input>
				    </el-form-item>
					<el-form-item label="价格:" :label-width="formLabelWidth">
					<el-input v-model="price"  placeholder="添加商品价格"></el-input>
					</el-form-item>
					<el-form-item label="上传图片地址:" :label-width="formLabelWidth">
					<el-input v-model="picture"  placeholder="添加图片地址"></el-input>
					</el-form-item>
				   </el-form>
				   <div slot="footer" class="dialog-footer">
				     <el-button @click="dialogFormVisibles = false">取 消</el-button>
				     <el-button type="primary" @click="addData" :plain="true">确 定</el-button>
				   </div>
				 </el-dialog>
			<!-- 	<button @click="$router.push('/bokeAddData')">新增</button> -->
				  <!--  <el-button type="danger"plain style="padding: 9.5px 10px;"
					 @click="pls">批量删除</el-button> -->
				
			</div>
			<div class="table-calss">
			<table class="table">
				<tr>
					<td  style="width: 70px;">商品ID</td>
					<td  style="width: 200px;">商品图片</td>
					<td  style="width: 500px;">商品介绍</td>
					<td  style="width: 450px;">商品内容</td>
					<td  style="width: 100px;">价格</td>
					<td  style="width: 140px;">操作</td>
				</tr>
			</table>
			<hr />
			<table class="tbale-data">
				<tr v-for="(i,key) in pagelist" :key="key">
					<td style="width: 70px; text-align: center;">{{i.id}}</td>
					<td style="width: 200px;">
						<img :src="i.picture" alt="" style="width: 70px;">
					</td>
					<td style="width: 500px;">
					{{i.commodity}}</td>
					<td style="width: 450px;">{{i.info}}</td>
					<td style="width: 93px;">￥{{i.price}}</td>
					
				<el-button type="warning" @click="dialogFormVisible = true"  plain
				style="margin-left: 5px; padding:9.5px 10px; margin-top: 25px;">更新</el-button>      
				<el-dialog title="修改博客" :visible.sync="dialogFormVisible">
				  <el-form>
					<el-form-item label="ID:" :label-width="formLabelWidth">
					<el-input v-model="id"  placeholder="修改商品ID"></el-input>
					</el-form-item>
					<el-form-item label="图片地址:" :label-width="formLabelWidth">
					<el-input v-model="picture"  placeholder="修改图片"></el-input>
					</el-form-item>
					<el-form-item label="介绍:" :label-width="formLabelWidth">
				    <el-input v-model="commodity"  placeholder="修改商品介绍"></el-input>
					</el-form-item>
				    <el-form-item label="内容:" :label-width="formLabelWidth">
				      <el-input v-model="info"  placeholder="修改商品内容"></el-input>
				    </el-form-item>
				    <el-form-item label="价格:" :label-width="formLabelWidth">
				      <el-input v-model="price" placeholder="修改商品价格" type="textarea">
				      </el-input>
				    </el-form-item>
				
				  </el-form>
				  <div slot="footer" class="dialog-footer">
				    <el-button @click="dialogFormVisible = false">取 消</el-button>
				    <el-button type="primary" @click="update" :plain="true">确 定</el-button>
				  </div>
				</el-dialog>	
					
				<el-button type="danger"  plain  @click="deletes(i.id)"
				style="margin-left: 5px; padding:9.5px 10px; margin-top: 5px;">删除</el-button>
				</tr>
				
			</table>			
			</div>
		</div>
		<div class="page">
			<div>
			<el-pagination
			  @current-change="pages"
			  background
			  layout="prev, pager, next"
			  :total="1000">
			</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				page:1,
				pagelist:'',
				dialogFormVisible: false,
				dialogFormVisibles:false,
				formLabelWidth: '120px',
				inputID:'',
				inputCommodity:'',
				picture:'',
				commodity:'',
				info:'',
				price:'',
			    bokename:'',
				bokeinfo:'',
				id:'',
			}
		},
		mounted(){
			axios.get("http://43.142.24.86:8890/api/PageDate",{
				params:{
					'id':this.page
				}
			}).then(page=>{
				this.pagelist=page.data
			})
		},
		methods:{
			findByCommodity(){
				if(this.inputCommodity==''){
					this.$message.error('内容不能为空，请输入!');
				}
				if(this.inputCommodity!=''){
				axios.get("http://43.142.24.86:8890/api/selectCommodity",{
					params:{
						'commodity':this.inputCommodity
					}
				}).then(find=>{
					this.pagelist=find.data.data
				})
				}
			},
		
			select(){
				if(this.inputID==''){
					 this.$message.error('ID不能为空，请输入!');
				}
				if(this.inputID!=''){
				axios.get("http://43.142.24.86:8890/api/selectById",{
					params:{
						'id':this.inputID
					}
				}).then(select=>{
					let arr=[]
					arr.push(select.data.data)
					this.pagelist=arr
				})
				}
				
			},
			pages(pagenum){
				this.page=pagenum
				console.log(pagenum)
				
			},
			addData(){
				
				if(this.commodity==''&&this.info==''){
					 this.$message.error('内容或介绍不能为空，请输入!');
				}else if(this.picture==''){
					this.$message({
					       message: '地址不能为空，请添加图片地址',
					       type: 'warning'
					     });
				}else if(this.price==''){
					this.$message({
					       message: '价格不能为空，请设置商品价格！',
					       type: 'warning'
					     });
				}

				if(this.price!=''&&this.commodity!=''&&this.info!=''&&this.picture!=''){					
				axios.post("http://43.142.24.86:8890/api/InsertCommodity",{
					'price':this.price,
					'info':this.info,
					'commodity':this.commodity,
					'picture':this.picture,
				}).then(add=>{
					  this.$message({
					          message: '添加成功！！！',
					          type: 'success'
					        });
						this.$router.go(0)
				})
			}
			},
			deletes(id){	
				this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
				      confirmButtonText: '确定',
				      cancelButtonText: '取消',
				      type: 'warning',
				      center: true
				    }).then(() => {
				      this.$message({
				        type: 'success',
				        message: '删除成功!',
						
				      });
					  axios.get("http://43.142.24.86:8890/api/DeleteById",{
					  	params:{
					  		'id':id
					  	}
					  }).then(dele=>{
					  	this.$router.go(0)
					  })
				    }).catch(() => {
				      this.$message({
				        type: 'info',
				        message: '已取消删除'
				      });
				    });
			},
			update(){
				axios.post("http://43.142.24.86:8890/api/updateAll",{				
						'id':this.id,
						'commodity':this.commodity,
						'info':this.info,
						'price':this.price,
						'picture':this.picture,
				}).then(update=>{
					console.log(update.data.data)
					if(update.data.data==1){
					 this.$message({
					          message: '修改成功',
					          type: 'success'
					        });
							this.$router.go(0)
					}
					if(this.commodity==''&& this.info==''){
						this.$message({
						       message: '请输入需要修改的商品内容或商品介绍',
						       type: 'warning'
						     });
					}else if(this.price==''){
						this.$message({
						       message: '价格不能为空!',
						       type: 'warning'
						     });
						
					}
				
					
				})
			}
		},
		watch:{
			page(){
				axios.get("http://43.142.24.86:8890/api/PageDate",{
					params:{
					'id':this.page,
				}}).then(page=>{
					  this.pagelist=page.data
					  console.log(page.data)
			})
			}
		}
	}
</script>

<style scoped>
	.caozuo{
		background-color:  #e9ebee;
	}
	.table tr td{
		background-color:  #e9ebee;
	}
	.table tr td{
		font-size:20px;
		cursor : pointer;
	}
	.tbale-data tr td{
		font-size:20px;
		width:300px;
		cursor : pointer;
	}
	.tbale-data tr:hover{
		background-color: antiquewhite;
	}
	
	.page div{
		 margin-left: 18%
	}
</style>