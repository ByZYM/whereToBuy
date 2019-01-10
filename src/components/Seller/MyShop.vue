<template>
	<div class="container">
		<div id="myshop">
			<div class="tools">
				<div class="cog" @click="returnPrev()">
					<span class="glyphicon glyphicon-chevron-left"></span>
				</div>
				<div class="message">
					<span class="glyphicon glyphicon-user"></span>
				</div>
			</div>
			<div class="head">
				<img :src="config.user.images" />{{config.user.nickName}}
			</div>
			<div class="infos">
				<label style="font-size: 16px;line-height: 18px;font-weight: normal;color: #999;">基础信息</label>
				<div class="info">
					<div class="shopname-left">
						<label>店铺名</label>
						<label>{{config.user.nickName}}</label>
					</div>
					<div class="shopname-right">

						<div><button>修改</button></div>
					</div>
				</div>

				<div class="info">
					<div class="shopname-left">
						<label>服务电话</label>
						<label>{{config.user.phone}}</label>
					</div>
					<div class="shopname-right">
						<div><button>修改</button></div>
					</div>
				</div>
				<div class="info">
					<div class="shopname-left">
						<label>所在地</label>
						<label>四川-成都</label>
					</div>
					<div class="shopname-right">

					</div>
				</div>
				<div class="info">
					<div class="shopname-left">
						<label>商店号</label>
						<label>NO.152352L</label>
					</div>
					<div class="shopname-right">

					</div>
				</div>
				<div class="info">
					<div class="shopname-left">
						<label>开店时间</label>
						<label>2015-09-25</label>
					</div>
					<div class="shopname-right">

					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			returnPrev() {
				this.$router.go(-1)
			},
		},
		mounted() {
			var vm = this
			console.log(vm.config.user)
			this.$http.get(this.ip + '/seller/findOne', {
				params:vm.config.user
			}).then(function(res) {
				res.json().then(function(result) {
					console.log(result);
				});
			}, function(res) {
				console.log(res)
				if(res.body.length > 0) {

				}
			});
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
	
	#myshop {
		width: 100%;
		background-color: rgb(66, 142, 218);
		display: flex;
		flex-direction: column;
	}
	
	#myshop>.tools {
		height: 40px;
	}
	
	#myshop>.tools>.cog {
		position: absolute;
		font-size: ;
		top: 15px;
		left: 15px;
		color: #fff;
		font-size: 35px;
	}
	
	#myshop>.tools>.message {
		position: absolute;
		font-size: ;
		top: 15px;
		right: 15px;
		color: #fff;
		font-size: 35px;
	}
	
	#myshop>.head {
		margin-top: 20px;
		text-align: center;
		font-size: 20px;
		color: white;
	}
	
	#myshop>.head>img {
		display: block;
		margin: auto;
		width: 70px;
		height: 70px;
		border-radius: 50px;
	}
	
	#myshop>.infos {
		background-color: rgb(231, 235, 238);
		height: 100vh;
		flex: 1;
		text-align: left;
	}
	
	#myshop>.infos>.info {
		background-color: rgb(211, 220, 227);
		height: 45px;
		line-height: 45px;
		font-weight: bold;
		margin-bottom: 10px;
		display: flex;
	}
	
	#myshop>.infos>.info>.shopname-left {
		display: inline-block;
		flex: 8;
	}
	
	#myshop>.infos>.info>.shopname-left>label:last-child {
		float: right;
	}
	
	#myshop>.infos>.info>.shopname-right {
		flex: 2;
		float: right;
	}
	
	#myshop>.infos>.info>.shopname-right>div {
		float: right;
		height: 20px;
		line-height: 20px;
		width: 60px;
	}
	
	#myshop>.infos>.info>.shopname-right>div>button {
		float: right;
		margin-top: 13px;
		margin-right: 13px;
		background-color: rgb(232, 137, 45);
		height: 20px;
		line-height: 20px;
		border: none;
	}
</style>