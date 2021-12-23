<template>
	<div style="margin-left: 62px;
		  margin-top: 40px;">
		
		<h3 style="margin-left: 40%;">用户信息</h3>
		
		
		<div style="width: 100%;height: 6px;background-color: #f5f5f5;margin-bottom: 16px;"></div>
		<el-button type="success" round icon="el-icon-search" @click.native='TosearchUsers' size='mini'>搜索</el-button>
		<el-button type="primary" round icon="el-icon-circle-plus-outline" style="margin-bottom: 13px;" @click.native='ToAddUser' size='mini'>新增用户</el-button>
		
		<el-table @row-click='saveUserId'
		    :data="tableData"
		    border
		    style="width: 100%">
			
		    <el-table-column
		      prop="id"
		      label="用户ID"
		      >
		    </el-table-column>
		    <el-table-column width="100"
		      prop="account"
		      label="账号"
		      >
		    </el-table-column>
			

			
			<el-table-column
			  prop="role.role_name" width="100"
			  label="角色">
			</el-table-column>
			
			
			<el-table-column 
			    prop="password"
			    label="操作" width="450" style="text-align: center;">
				
				<template slot-scope="scope">
				        <!-- <el-tag
				          type="success"
				          disable-transitions>123</el-tag> -->
						  <el-button type="primary" round size='mini' icon="el-icon-lock" @click.native='TomodifyRole'>修改权限</el-button>
						  <el-button type="warning" round size='mini' icon="el-icon-s-custom" @click.native=TochangePassword >修改密码</el-button>
						  <el-button type="danger" round size='mini' icon="el-icon-delete" @click.native='DeleteUser()'>删除用户</el-button>
				      </template>
					  
			  </el-table-column>
			  
			  
		  </el-table>
		
		<!-- 修改用户角色-->
		<el-dialog
		  title="提示"
		  :visible.sync="dialogVisible"
		  width="45%"
		  >
		  <div>
		  <span style="margin-right: 25px;" >新的角色:</span>
		  
		   <el-select v-model="value" placeholder="请选择角色">
		      <el-option
		        v-for="item in options"
		        :key="item.value"
		        :label="item.label"
		        :value="item.value">
		      </el-option>
		    </el-select>
		  
		  </div>
		  

			
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click.native="modifyRole">确 定</el-button>
		  </span>
		</el-dialog>
				
				
		<!-- 通过条件查询用户 -->
		<el-dialog
			title="提示"
			:visible.sync="dialogVisible2"
				  width="45%"
				  >
				  <div>
				  <span style="margin-right: 3px;" >查询ID:</span>
				  <el-input v-model="inputrole_userId" placeholder="请输入用户ID" style="color: black;"></el-input>
				  </div>
				  
				  <div>
				  <span style="margin-right: 3px;" >查询账号:</span>
				  <el-input v-model="inputrole_account" placeholder="请输入用户账户" style="color: black;"></el-input>
				  </div>
				  
				  <div>
				  <span style="margin-right: 3px;" >查询角色:</span>
				  <el-select v-model="value" placeholder="请选择角色">
				     <el-option
				       v-for="item in options2"
				       :key="item.value"
				       :label="item.label"
				       :value="item.value">
				     </el-option>
				   </el-select>
				  </div>
					
				  <span slot="footer" class="dialog-footer">
				    <el-button @click="dialogVisible2 = false">取 消</el-button>
				    <el-button type="primary" @click="searchUsers">确 定</el-button>
				  </span>
				</el-dialog>
	
	
	
	
		<!-- 增加用户 -->
		<el-dialog
			title="提示"
			:visible.sync="dialogVisible3"
				  width="45%"
				  >
				  <div>
				  <span style="margin-right: 3px;" >账号:</span>
				  <el-input v-model="dialogVisible3_account" placeholder="请输入账号" style="color: black;"></el-input>
				  </div>
				  
				  <div>
				  <span style="margin-right: 3px;" >密码:</span>
				  <el-input v-model="dialogVisible3_password" placeholder="请输入密码" style="color: black;"></el-input>
				  </div>
				  
				  <div>
				  <span style="margin-right: 3px;" >查询角色:</span>
				  <el-select v-model="value" placeholder="请选择角色">
				     <el-option
				       v-for="item in options"
				       :key="item.value"
				       :label="item.label"
				       :value="item.value">
				     </el-option>
				   </el-select>
				  </div>
					
				  <span slot="footer" class="dialog-footer">
				    <el-button @click="dialogVisible3 = false">取 消</el-button>
				    <el-button type="primary" @click="addUser">确 定</el-button>
				  </span>
				</el-dialog>
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
		
		
	</div>
</template>

<script>
	import {getAllUsers,deleUser,updateUserRoleById,changePassword,searchUsersByQuery,adduser} from'network/usersManage.js'
	import {getAllrole} from 'network/roleManage.js'
	export default{
		name:'usersManage',
		mounted() {
			// 获取用户
			getAllUsers().then(res=>{
				console.log(res);
				this.tableData.push(...res);
			})
			
			getAllrole().then(res=>{
				this.options.splice(0);
				console.log(res);
				for(var i in res)
				{	if(res[i].id!==1){
					
					this.options.push({value:res[i].id,label:res[i].role_name});       
							   }
				}
			})
		},
		 data() {
		      return {

					tableData: [],
					selectUser:'',
					dialogVisible:false,
					options: [],
					options2: [],
					value: '',
					dialogVisible2:false,
					inputrole_userId:'',
					inputrole_account:'',
					dialogVisible3:false,
					dialogVisible3_account:'',
					dialogVisible3_password:''
					
		      }
		    },
			methods:{
				DeleteUser(){
					console.log(1);
					
					
					
					
					this.$confirm('此操作将永久删除该账号, 是否继续?', '提示', {
					          confirmButtonText: '确定',
					          cancelButtonText: '取消',
					          type: 'warning'
					        }).then(() => {
								if(this.selectUser.role_id==1){
									this.$message.error('不能删除超级用户！！');
									return ;
								}
								
								
								deleUser(this.selectUser.id).then(res=>{
									console.log(res);
									// 重新获取用户
									getAllUsers().then(res=>{
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
					// console.log(column);
				},
				TomodifyRole(){
					console.log(this.selectUser)

					this.dialogVisible=true;
					this.value='';
					this.options.splice(0);
					getAllrole().then(res=>{
						this.options.splice(0);
						console.log(res);
						for(var i in res)
						{	if(res[i].id!==1){
							
							this.options.push({value:res[i].id,label:res[i].role_name});       
									   }
						}
						console.log(this.options)
					})
					
				},
				modifyRole(){
					
					if(this.selectUser.role_id==1){
						this.$message.error('不能修改超级管理员！！');
						return ;
					}
										
					
					if(this.value==''){
						this.$message.error('角色名不能为空！');
					}else{
						updateUserRoleById(this.selectUser.id,this.value).then(res=>{
							console.log(res);
							if(res.success==1){
								
								this.dialogVisible=false;
								// 重新获取所有用户
								getAllUsers().then(res=>{
									this.tableData.splice(0)
									console.log(res);
									this.tableData.push(...res);
								})
								
								this.$message({
								  type: 'success',
								  message: res.info
								});
							}
						})
						console.log(this.value);

					}
					
				},
				TochangePassword(){
					console.log(1);
					this.$prompt('请输入新密码', '提示', {
					    confirmButtonText: '确定',
					    cancelButtonText: '取消',
					  }).then(({ value }) => {
							
							if(value==null){
								this.$message({
								  type: 'error',
								  message: '密码不能为空'
								});
								return ;
							}
							
											console.log(value)
											console.log(typeof value);
											changePassword(this.selectUser.id,value).then(res=>{
												console.log(res);
												if(res.success){
													this.$message({
													  type: 'success',
													  message: '修改成功！您的新密码是: ' + value
													});
												}else{
													this.$message({
													  type: 'error',
													  message: res.info
													});
												}
												
											})
					
										  
					  }).catch(() => {
					    this.$message({
					      type: 'info',
					      message: '取消修改密码'
					    });       
					  });
					},
			TosearchUsers(){
				console.log(1)
				this.dialogVisible2=true;
				getAllrole().then(res=>{
					this.options2.splice(0);
					console.log(res);
					this.options2.push({value:'',label:'所有'});
					for(var i in res)
					{	
						this.options2.push({value:res[i].id,label:res[i].role_name});       		  
					}
					
				})
			},
			searchUsers(){
				this.dialogVisible2=false;
				console.log(this.inputrole_userId);
				console.log(this.inputrole_account);
				console.log(this.value);
				searchUsersByQuery(this.inputrole_userId,this.inputrole_account,this.value).then(res=>{
					console.log(res);
					this.tableData.splice(0);
					if(res.success){
						this.tableData.push(...res.info);
					}
				})
			},
			ToAddUser(){
				console.log(1)
				this.dialogVisible3=true;
				
				getAllrole().then(res=>{
					this.options.splice(0);
					console.log(res);
					for(var i in res)
					{	if(res[i].id!==1){
						
						this.options.push({value:res[i].id,label:res[i].role_name});       
								   }
					}
				})
				
			},
			addUser(){
				console.log(this.dialogVisible3_account)
				console.log(this.dialogVisible3_password)
				console.log(this.value);
				if(!this.dialogVisible3_account||!this.dialogVisible3_password||!this.value){
					this.$message.error('选项不能为空，请重新检查');
					return; 
				}
				
				adduser(this.dialogVisible3_account,this.dialogVisible3_password,Number(this.value)).then(res=>{
					console.log(res);
					if(res.success=='1'){
						this.dialogVisible3=false;
						this.$message({
						  type: 'success',
						  message: '增加用户成功！'
						});
						getAllUsers().then(res=>{
							this.tableData.splice(0);
							this.tableData.push(...res);
						})					
					}else{
						this.$message.error('增加用户失败！该账号已存在！');
					}
				})
				
				
				
				
			}
				
			}
	}
</script>

<style>
	.cell{
		text-align: center;
	}
	.el-input__inner{
		color: black;
	}
	.el-input{
		width: 67%;
	}
	.el-dialog{
		/* background-color: bisque; */
	}
</style>
