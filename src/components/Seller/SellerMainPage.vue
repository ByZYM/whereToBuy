<template>
	<div class="container">
		<div id="detail">
			<div class="tools">
				<div class="cog">
					<span class="glyphicon glyphicon-cog"></span>
				</div>
				<div class="message">
					<span class="glyphicon glyphicon-comment"></span>
				</div>
			</div>
			<div class="head">
				{{config.user.nickName}}
				<img src="../../assets/xiaowanzi.jpg" />
			</div>
			<div class="infos">
				<div class="info">
					<div>销量</div>
					<div>1.2万</div>
				</div>
				<div class="info">
					<div>好评率</div>
					<div>89%</div>
				</div>
				<div class="info">
					<div>访问量</div>
					<div>12.2万</div>
				</div>
			</div>

		</div>
		<div id="manage">
			<div class="myrow">
				<div class="mybutton" @click="MyShop">
					<img src="../../assets/ico/店铺 (1).png" /> 我的商铺
				</div>
				<div class="mybutton" @click="AddGood">
					<img src="../../assets/ico/礼品 (1).png" /> 添加商品
				</div>
				<div class="mybutton" @click="CommentReply">
					<img src="../../assets/ico/客户.png" /> 评论回复
				</div>
			</div>
			<div class="myrow">
				<div class="mybutton">
					<img src="../../assets/ico/火箭.png" /> 商品管理
				</div>
				<div class="mybutton">
					<img src="../../assets/ico/商品.png" /> 所有商品
				</div>
				<div class="mybutton" @click="SellerDetail">
					<img src="../../assets/ico/信息.png" /> 个人信息
				</div>
			</div>
		</div>
		<div id="buttons">
			<div @click="unlogin">切换账号</div>
			<div @click="unlogin">退出登录</div>
		</div>

	</div>
</template>

<script>
export default {
	methods:{
		MyShop:function(){
			this.$router.push({path:'/Seller/MyShop'});
		},
		AddGood:function(){
			this.$router.push({path:'/Seller/AddGood'});
		}
		,
		CommentReply:function(){
			this.$router.push({path:'/Seller/CommentReply'});
		}
		,
		SellerDetail:function(){
			this.$router.push({path:'/Seller/SellerDetail'});
		}
		,
		unlogin:function(){
			this.config.user={}
			this.$router.push({path:'/Seller/SellerLogin'});
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
		font-size: 20px;
		color: white;
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
		flex: 4;
		background-color: #fff;
		display: flex;
		flex-direction: column;
	}
	
	#manage>.myrow {
		flex: 1;
		display: flex;
		flex-direction: row;
	}
	
	#manage>.myrow>.mybutton {
		flex: 1;
		border: 1px solid #ddd;
		padding: 15px 15px 15px 15px;
		font-size: 20px;
		color: #000;
		font-weight: bold;
	}
	
	#manage>.myrow>.mybutton:hover {
		background-color: #ddd;
	}
	
	#manage>.myrow>.mybutton>img {
		width: 100%;
		height: 80%;
	}
	
	#buttons {
		flex: 1;
		background-color: #ddd;
		display: flex;
		flex-direction: row;
	}
	
	#buttons>div {
		flex: 1;
		text-align: center;
		font-size: 20px;
		line-height: 80px;
		font-weight: bold;
	}
	
	#buttons>div:first-child {
		background-color: rgb(243, 194, 117);
	}
	
	#buttons>div:last-child {
		background-color: rgb(242, 138, 101);
	}
</style>