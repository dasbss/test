<template>
	<div>
		<div>
			<div class="caozuo">
					<el-input
					  style="width: 200px;"
					  type="textarea"
					  autosize
					  placeholder="搜索ID/用户名"
					  v-model="inputID">
					</el-input>
					<el-button type="primary" plain style="padding: 9.5px 10px;margin-right: 3%;"
					 @click="select" >搜索</el-button>
					<el-input
						  style="width: 200px;"
						  type="textarea"
						  autosize
						  placeholder="搜索评论"
						  v-model="inputComment">
					</el-input>	
				<el-button type="primary" plain style="padding: 9.5px 10px;"
				 @click="selectComment">搜索</el-button>
				<el-button type="info" plain style="padding: 9.5px 10px; margin-left: 10%;"
				 @click="$router.go(0)">重置</el-button>
			
			</div>
			<div class="table-calss">
			<table class="table">
				<tr>
					<td  style="width: 70px;">评论ID</td>
					<td  style="width: 200px;">评论人</td>
					<td  style="width: 775px;">内容</td>
					<td  style="width: 200px;">时间</td>
					<td  style="width: 100px;">点赞</td>
					<td  style="width: 140px;">操作</td>
				</tr>
			</table>
			<hr />
			<table class="tbale-data">
				<tr v-for="(i,key) in pagelist" :key="key">
					<td style="width: 70px;">{{i.cid}}</td>
					<td style="width: 195px;">{{i.cusername}}</td>
					<td style="width: 752px;">{{i.cinfo}}</td>
					<td style="width: 200px;">{{i.ctime}}</td>
					<td style="width: 93px;">{{i.cgood}}</td>
							
				<el-button type="danger"  plain  @click="deletes(i.cid)"
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
				inputComment:'',
				
			}
		},
		mounted(){
			axios.get("http://43.142.24.86:8890/api/PageSelectData",{
				params:{
					'cid':this.page
				}
			}).then(page=>{
				this.pagelist=page.data
			})
		},
		methods:{
			selectComment(){
				if(this.inputComment==''){
					this.$message({
					       message: '请输入评论！',
					       type: 'warning'
					     });
				}
				if(this.inputComment!=''){
				axios.get("http://43.142.24.86:8890/api/selectByCinfo",{
					params:{
						'cinfo':this.inputComment
					}
				}).then(find=>{
					this.pagelist=find.data.data
				})
				}
			},	
			select(){
				if(this.inputID==''){
					this.$message({
					       message: '请输入ID或用户名！',
					       type: 'warning'
					     });
				}
				if(this.inputID!=''){
				axios.get("http://43.142.24.86:8890/api/selectByCusername",{
					params:{
						'cusername':this.inputID
					}
				}).then(select=>{
					/* let arr=[]
					arr.push(select.data.data)
					this.pagelist=arr */
					this.pagelist=select.data.data
				})
				
				axios.get("http://43.142.24.86:8890/api/selectByCid",{
					params:{
						'cid':this.inputID
					}
				}).then(selectbyid=>{
				    let arr=[]
					arr.push(selectbyid.data.data)
					this.pagelist=arr 
				})
				}
			},
			pages(pagenum){
				this.page=pagenum
				console.log(pagenum)
				
			},
			addData(){
				
				if(this.bokename==''&&this.bokeinfo==''){
					 this.$message.error('用户名或密码不能为空，请输入!');
				}else if(this.bokename==''){
					this.$message({
					       message: '博客不能为空，请添加博客名！',
					       type: 'warning'
					     });
				}else if(this.bokeinfo==''){
					this.$message({
					       message: '内容不能为空，请添加博客内容！',
					       type: 'warning'
					     });
				}

				if(this.bokename!=''&&this.bokeinfo!=''){					
				axios.post("http://43.142.24.86:8890/addData",{
					'bokename':this.bokename,
					'bokeinfo':this.bokeinfo,
				}).then(add=>{
					  this.$message({
					          message: '添加成功！！！',
					          type: 'success'
					        });
						this.$router.go(0)
				})
			}
			},
			deletes(cid){	
				this.$confirm('此操作将永久删除该博客, 是否继续?', '提示', {
				      confirmButtonText: '确定',
				      cancelButtonText: '取消',
				      type: 'warning',
				      center: true
				    }).then(() => {
				      this.$message({
				        type: 'success',
				        message: '删除成功!',
						
				      });
					  axios.get("http://43.142.24.86:8890/api/deleteByCid",{
					  	params:{
					  		'cid':cid
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
				axios.post("http://43.142.24.86:8890/updateByIds",{
					'id':this.bokeid,
					'bokename':this.bokename,
					'bokeinfo':this.bokeinfo,	
				}).then(update=>{
					console.log(update.data.data)
					if(update.data.data==1){
					 this.$message({
					          message: '修改成功',
					          type: 'success'
					        });
							this.$router.go(0)
					}
					if(this.bokeinfo==''&& this.bokename==''){
						alert("博客名或内容不能为空，请输入!")
					}else if(this.id==''){
						alert("请输入ID!")
					}
				
					
				})
			}
		},
		watch:{
			page(){
				axios.get("http://43.142.24.86:8890/api/PageSelectData",{
					params:{
					'cid':this.page,
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