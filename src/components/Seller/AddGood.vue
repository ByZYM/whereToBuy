<template>
	<div class="container">
		<div id="detail">
			<div class="tools">
				<div class="cog" @click="returnPrev()">
					<span class="glyphicon glyphicon-chevron-left"></span>
				</div>
				<div class="message">
					<span class="glyphicon glyphicon-comment"></span>
				</div>
			</div>
			<div class="head">
				<img src="../../assets/ico/设置.png" /> 添加商品
			</div>

		</div>
		<div id="manage">
			<img src="../../assets/ico/客户.png" alt="添加图片">
			<div class="input-group input-group-lg">
				<span class="input-group-addon" id="sizing-addon2">商品名称</span>
				<input type="text" class="form-control" placeholder="GoodName" aria-describedby="sizing-addon2">
			</div>
			<div class="input-group input-group-lg">
				<span class="input-group-addon" id="sizing-addon2">商品描述</span>
				<input type="text" class="form-control" placeholder="GoodDetail" aria-describedby="sizing-addon2">
			</div>
			<div class="input-group input-group-lg">
				<span class="input-group-addon" id="sizing-addon2">商品价格</span>
				<input type="text" class="form-control" placeholder="GoodPrice" aria-describedby="sizing-addon2">
			</div>
			<div class="input-group input-group-lg">
				<span class="input-group-addon" id="sizing-addon2">添加时间</span>
				<input type="text" class="form-control" placeholder="AddTime" aria-describedby="sizing-addon2">
			</div>

		</div>
		<div id="buttons">
			<div>重置</div>
			<div>添加</div>
		</div>

	</div>
</template>

<script>
	export default {
		methods: {
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
		flex: 5;
		background-color: #fff;
		display: flex;
		flex-direction: column;
	}
	
	#manage>img {
		flex: 2;
		height: 100px;
	}
	
	#manage>div {
		flex: 1;
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