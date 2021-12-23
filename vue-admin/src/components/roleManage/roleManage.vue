<template>
	<div style="margin-left: 62px;
		  margin-top: 40px;">
		
		<h3 style="margin-left: 40%;">角色管理</h3>
		<div style="width: 100%;height: 6px;background-color: #f5f5f5;margin-bottom: 16px;"></div>
		<el-button type="primary" round icon="el-icon-circle-plus-outline" style="margin-bottom: 13px;"  size='mini' @click.native='ToAddRole'>新增角色</el-button>
		<el-table  @row-click='saveUserId'
		    :data="tableData"
		    border
		    style="width: 100%">
			
		    <el-table-column
		      prop="id"
		      label="角色ID"
		      >
		    </el-table-column>
		    <el-table-column width="100"
		      prop="role_name"
		      label="角色名"
		      >
		    </el-table-column>
			
	
			
			<el-table-column
			  prop="role_description" width="300"
			  label="角色权限描述">
			</el-table-column>
			
			
			<el-table-column 
			    prop="password"
			    label="操作" width="300" style="text-align: center;">
				<template slot-scope="scope">
				        <!-- <el-tag
				          type="success"
				          disable-transitions>123</el-tag> -->
						  <el-button type="primary" round size='mini' icon="el-icon-lock" @click.native='TomodifyRole()'>修改角色</el-button>
						  <el-button type="danger" round size='mini' icon="el-icon-delete" @click.native='DeleteRoleById' >删除角色</el-button>
				      </template>
					  
			  </el-table-column>
			  
			  
		  </el-table>
		
	<el-dialog
	  title="提示"
	  :visible.sync="dialogVisible"
	  width="45%"
	  >
	  <div>
	  <span style="margin-right: 3px;" >角色名:</span>
	  <el-input v-model="inputrole_name" placeholder="请输入角色名" style="color: black;"></el-input>
	  </div>
	  
	  <div>
	  <span style="margin-right: 3px;" >权限描述:</span>
	  <el-input v-model="inputrole_description" placeholder="请输入权限描述" style="color: black;"></el-input>
	  </div>
		
	  <span slot="footer" class="dialog-footer">
	    <el-button @click="dialogVisible = false">取 消</el-button>
	    <el-button type="primary" @click="AddRole">确 定</el-button>
	  </span>
	</el-dialog>
	
	
	
	
	
	<el-dialog
	  title="提示"
	  :visible.sync="dialogVisible2"
	  width="45%"
	  >
	  <div>
	  <span style="margin-right: 3px;" >修改角色名:</span>
	  <el-input v-model="dialogVisible2_role_name" placeholder="请输入角色名" style="color: black;"></el-input>
	  </div>
	  
	  <div>
	  <span style="margin-right: 3px;" >修改权限描述:</span>
	  <el-input v-model="dialogVisible2_role_description" placeholder="请输入权限描述" style="color: black;"></el-input>
	  </div>
		
	  <span slot="footer" class="dialog-footer">
	    <el-button @click="dialogVisible2 = false">取 消</el-button>
	    <el-button type="primary" @click.native='Modifyrole' >确 定</el-button>
	  </span>
	</el-dialog>
	
	
				
	
		
		
		
	</div>
</template>

<script>
	import {getAllrole,deleteRoleById,addRole,updateRoleInfoByid} from 'network/roleManage.js'
	export default{
		name:'roleManage',
		data() {
		     return {
		       tableData: [],
			   dialogVisible: false,
							// tableData: [],
							selectUser:'',
							inputrole_name:'',
							inputrole_description:'',
							dialogVisible2:false,
							dialogVisible2_role_name:'',
							dialogVisible2_role_description:''
							 
		     }
		   },
		   methods:{
			   DeleteRoleById(){
				   console.log(1)
				 
				   this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
				             confirmButtonText: '确定',
				             cancelButtonText: '取消',
				             type: 'warning'
				           }).then(() => {
							  if(this.selectUser.id==1){
							  	this.$message.error('不能删除超级管理员！！');
							  	return ;
							  }
							   
							   
							   
				   			deleteRoleById(this.selectUser.id).then(res=>{
				   				console.log(res);
				   				// 重新获取用户
				   				getAllrole().then(res=>{
				   					this.tableData.splice(0)
				   					console.log(res);
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

			   },
			   ToAddRole(){
				   console.log(1);
				   this.dialogVisible=true;
				   this.inputrole_name='';
				   this.inputrole_description='';
				   
			   },
			   AddRole(){
				   console.log(this.selectUser)
				   // if(this.selectUser.id==1){
				   // 	this.$message.error('不能修改超级管理员！！');
				   // 	return ;
				   // }

				   if(!this.inputrole_name||!this.inputrole_description){
					    this.$message.error('角色名或者角色权限描述不能为空！');
				   }else{
					   console.log(this.inputrole_name)
					   console.log(this.inputrole_description)
					   addRole(this.inputrole_name,this.inputrole_description).then(res=>{
						   console.log(res);
						   if(res.success){
							    this.dialogVisible=false;
								this.$message.success(res.info);
									this.tableData.splice(0);
									getAllrole().then(res=>{
										console.log(res);
										this.tableData.push(...res);
									})
								
								
						   }else{
							   this.$message.error(res.info);
						   }
						  
					   })
					      
				   }
				
				   
			   },
			   TomodifyRole(){
				   console.log(1);
				   this.dialogVisible2=true;
				   this.dialogVisible2_role_name='';
				   this.dialogVisible2_role_description='';
			   },
			   Modifyrole(){
				   if(!this.dialogVisible2_role_name||!this.dialogVisible2_role_description){
				   					    this.$message.error('角色名或者角色权限描述不能为空！');
										return ;
				   }

				   if(this.selectUser.id==1){
				   	this.$message.error('不能删除超级管理员！！');
				   	return ;
				   }
				   
				   updateRoleInfoByid(this.selectUser.id,this.dialogVisible2_role_name,this.dialogVisible2_role_description).then(res=>{
					   console.log(res);
					   if(res.success){
								this.dialogVisible2=false;
					   			this.$message.success(res.info);
					   			this.tableData.splice(0);
									getAllrole().then(res=>{
											console.log(res);
					   						this.tableData.push(...res);
					   									})
					   								
					   								
					   }else{
					   							   this.$message.error(res.info);
					   }
				   })

			   }
		   },
		   mounted() {
		   	getAllrole().then(res=>{
				console.log(res);
				this.tableData.push(...res);
			})
		   }
	}
</script>

<style>
	.cell{
		text-align: center;
	}
	.el-input__inner{
		color: #000000;
	}
	.el-input{
		width: 67%;
	}
</style>
