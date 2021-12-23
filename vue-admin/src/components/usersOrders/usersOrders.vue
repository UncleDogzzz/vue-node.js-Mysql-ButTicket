<template>
	<div style="margin-left: 62px;
		  margin-top: 40px;">
		
		<h3 style="margin-left: 40%;">用户订单</h3>
		<div style="width: 100%;height: 6px;background-color: #f5f5f5;margin-bottom: 29px;"></div>
		<el-table 
		  @row-click='saveUserId'
		    :data="tableData"
		    border
		    style="width: 100%">
			
		    <el-table-column
		      prop="id"
		      label="订单号"
			  width="100"
		      >
		    </el-table-column>
		    <el-table-column width="100"
		      prop="user.account"
		      label="用户账号"
		      >
		    </el-table-column>
			
	
			
			<el-table-column
			  prop="cinema.name" width="200"
			  label="电影院">
			</el-table-column>
			
			<el-table-column
			  prop="movicedetail.name" width="200"
			  label="电影名">
			</el-table-column>
			<el-table-column
			  prop="seat" width="100"
			  label="座位">
			</el-table-column>
			
			
			<el-table-column 
			    prop="password"
			    label="操作" width="200" style="text-align: center;">
				
				<template slot-scope="scope">
				        <!-- <el-tag
				          type="success"
				          disable-transitions>123</el-tag> -->
						  <el-button type="danger" round size='mini' icon="el-icon-delete" @click.native='DeleteUserOrders()' >删除订单</el-button>
				      </template>
					  
			  </el-table-column>
			  
			  
		  </el-table>
		
	
	
				
	
		
		
		
	</div>
</template>

<script>
	import{getAllUsersOrders,deleteUsersOrders} from 'network/usersOrders.js'
	export default{
		name:'usersOrders',
		data() {
		     return {
		       tableData: [],
							// tableData: [],
							selectUser:''
		     }
		   },
		   methods:{
			   DeleteUserOrders(){
				   console.log(1)
				   this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
				             confirmButtonText: '确定',
				             cancelButtonText: '取消',
				             type: 'warning'
				           }).then(() => {
				   			deleteUsersOrders(this.selectUser.id).then(res=>{
				   				console.log(res);
				   				// 重新获取用户
				   				getAllUsersOrders().then(res=>{
				   					this.tableData.splice(0)
				   					console.log(res);
				   					for(var i in res){
				   					res[i].seat=res[i].seat.replace(/(\{|\}|\")/g,'');
				   					}
				   					this.tableData.push(...res);
				   				})
				   				this.$message({
				   				  type: 'success',
				   				  message: res.info
				   				});

				   			})
				   			
				   
				           }).catch(() => {
				             this.$message({
				               type: 'info',
				               message: '已取消删除'
				             });          
				           });
				   
			   },
			   saveUserId(row){
				   console.log(row.id);
				   this.selectUser=row;
			   }
		   },
		   mounted() {
		   	getAllUsersOrders().then(res=>{
				console.log(res);
				for(var i in res){
				res[i].seat=res[i].seat.replace(/(\{|\}|\")/g,'');
				}
				this.tableData.push(...res);
			})
		   }
	}
</script>

<style>
	.cell{
		text-align: center;
	}
</style>
