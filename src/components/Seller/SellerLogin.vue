<template>
	<div class="container">
		<div id="detail">
			<div class="tools">
				<div class="cog" @click="returnPrev()">
					<span class="glyphicon glyphicon-chevron-left"></span>
				</div>
				<div class="message">
					<span class="glyphicon glyphicon-user"></span>
				</div>
			</div>
			<div class="head">
				登录
			</div>

		</div>
		<div id="manage">
			<form>
				<div class="form-group">
					<div class="input-group input-group-lg">
						<span class="input-group-addon" id="sizing-addon1">账号</span>
						<input type="text" v-model="seller.username" class="form-control" placeholder="Account" aria-describedby="sizing-addon1">
					</div>
				</div>
				<div class="form-group">
					<div class="input-group input-group-lg">
						<span class="input-group-addon" id="sizing-addon3">密码</span>
						<input type="password" v-model="seller.password" class="form-control" placeholder="Password" aria-describedby="sizing-addon3">
					</div>
				</div>
				<button @click="submitSeller" class="btn btn-lg">提交</button>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				seller: {

				},
			}
		},
		methods: {
			submitSeller: function() {
				var vm = this
				this.$http.get(this.ip + "/seller/login", {
					params: this.seller
				}).then((res) => {
					if(res.bodyText!='') {
						console.log(vm.config.user)
						vm.config.user = res.body
						console.log(vm.config.user)
						//跳转
						this.$router.push({
							path: '/Seller/MainPage'
						});
					}else{
						alert("登录失败")
					}
				})
			},
			returnPrev() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	.container {
		flex: 1;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}
	
	#detail {
		width: 100%;
		background-color: rgb(66, 142, 218);
	}
	
	#detail>.tools {
		height: 40px;
	}
	
	#detail>.tools>.cog {
		position: absolute;
		font-size: ;
		top: 15px;
		left: 15px;
		color: #fff;
		font-size: 35px;
	}
	
	#detail>.tools>.message {
		position: absolute;
		font-size: ;
		top: 15px;
		right: 15px;
		color: #fff;
		font-size: 35px;
	}
	
	#detail>.head {
		text-align: center;
		font-size: 25px;
		color: white;
		margin-bottom: 10px;
		font-weight: bold;
		letter-spacing: 2px;
	}
	
	#detail>.head>img {
		display: block;
		margin: auto;
		width: 70px;
		height: 70px;
		border-radius: 50px;
	}
	
	#detail>.infos {
		display: flex;
		flex-direction: row;
		color: white;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	
	#detail>.infos>.info {
		flex: 1;
		font-size: 20px;
	}
	
	#detail>.infos>.info>div:first-child {
		position: relative;
		top: -10px;
	}
	
	#detail>.infos>.info>div:last-child {
		position: relative;
		top: 0px;
		bottom: 10px;
	}
	
	#detail>.infos>.info:first-child {
		border-right: 1px solid #fff;
	}
	
	#detail>.infos>.info:last-child {
		border-left: 1px solid #fff;
	}
	
	#manage {
		flex: 5;
		background-color: rgb(231, 235, 238);
		display: flex;
		flex-direction: column;
	}
	
	#manage>.reply {
		height: 90px;
		display: flex;
		padding: 10px;
		margin-bottom: 5px;
	}
	
	.fileinput-button {
		position: relative;
		display: inline-block;
		overflow: hidden;
	}
	
	.fileinput-button input {
		position: absolute;
		left: 0px;
		top: 0px;
		opacity: 0;
		-ms-filter: 'alpha(opacity=0)';
	}
	
	#manage>.reply:hover {
		background-color: rgb(186, 195, 202);
	}
	
	#manage>.reply>.user {
		/*display: inline-block;*/
		float: left;
	}
	
	#manage>.reply>.user>img {
		display: block;
		width: 50px;
		height: 50px;
		border-radius: 50px;
	}
	
	#manage>.reply>.comment-div {
		/*display: inline-block;*/
		flex: 1;
	}
	
	#manage>.reply>.comment-div>.comment {
		background-color: rgb(239, 244, 248);
		text-align: left;
		margin-bottom: 10px;
		font-weight: bold;
		padding: 10px 5px;
	}
	
	#manage>.reply>.comment-div>.reply-btn {
		background-color: rgb(58, 125, 133);
		border: none;
		width: 50px;
		color: white;
		float: right;
	}
	/*
	 
	 * <div class="reply">
				<div class="user">
					<img src="../../../build/logo.png" />
					用户1
				</div>
				<div class="comment-div">
					<div class="comment">
						衣服质量太差了，严重掉色，差评。
					</div>
					<button class="reply-btn">回复</button>
				</div>
			</div>
	 * 
	 * */
</style>