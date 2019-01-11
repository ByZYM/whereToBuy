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

			<div class="input-group input-group-lg">
				<span class="input-group-addon" id="sizing-addon2">商品名称</span>
				<input type="text" class="form-control" v-model="goods.name" placeholder="GoodName" aria-describedby="sizing-addon2">
			</div>
			<div class="input-group input-group-lg">
				<span class="input-group-addon" id="sizing-addon2">商品描述</span>
				<input type="text" class="form-control" v-model="goods.introduction" placeholder="GoodDetail" aria-describedby="sizing-addon2">
			</div>
			<div class="input-group input-group-lg">
				<span class="input-group-addon" id="sizing-addon2">商品价格</span>
				<input type="text" class="form-control" v-model="goods.price" placeholder="GoodPrice" aria-describedby="sizing-addon2">
			</div>

			<div class="form-group">
				<!--					<img style="width: 70px;height: 70px;border-radius: 70px;" v-if='pictureData!=null' :src="pictureData">
-->
				<!--<label v-else>{{picture.name}}</label>-->
				<span class="btn btn-success fileinput-button">
						<img v-if="pictureData!=null" :src="pictureData" alt="上传图片并添加商品">
						<label v-else>上传图片并添加商品</label>
				<input type="file" v-on:change="onChange($event)" id="exampleInputFile" capture="camera" accept="image/*" name="cameraInput" multiple="multiple" />
				</span>
			</div>

		</div>
		<div id="buttons">
			<div @click="reset">重置</div>
			<!--<div>添加</div>-->
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				goods: {
					sellerId: this.config.user.id
				},
				picture: null,
				pictureData: null
			}
		},
		methods: {
			reset(){
				this.goods={sellerId: this.config.user.id};this.pictureData=null
			},
			returnPrev() {
				this.$router.go(-1)
			},
			onChange: function(event) {
				var that = this;
				this.picture = event.target.files[0]; // get input file object

				var reader = new FileReader();
				reader.onload = function() {
					that.pictureData = reader.result;
				};
				reader.readAsDataURL(this.picture)

				var that = this;
				var formData = new FormData();
				formData.set('file', event.target.files[0]);
				console.log(formData.get('file'))
				// specify Content-Type, with formData as well
				this.$http.post(that.ip + '/upload', formData, {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}).then(function(res) {
					res.json().then(function(result) {
						console.log(result);
						if(result.success == true) {
							that.submitGoods()
						}
					});
				}, function(res) {
					console.log(res.body);
				});

				/*console.log(this.picture);
				var reader = new FileReader()
				reader.readAsDataURL(this.picture)
				var that = this
				reader.onload = function() {
					that.pictureData = this.result
					that.upload()
				}*/
			},
			submitGoods: function() {
				var vm = this
				this.$http.post(vm.ip + "/seller/addGoods?sellerId="+vm.goods.sellerId, vm.goods).then((res) => {
					var d = res.body
					console.log(d)
					console.log(vm.config.user)
					if(d.success == true) {
						alert("添加成功")
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.fileinput-button {
		position: relative;
		/*display: inline-block;*/
		display: block;
		overflow: hidden;
		flex: 2;
		height: 100px;
	}
	
	img {
		width: 100%;
		height: 100%;
	}
	.fileinput-button label{
		display: block;
		line-height: 100px;
	}
	.fileinput-button input {
		position: absolute;
		left: 0px;
		top: 0px;
		opacity: 0;
		-ms-filter: 'alpha(opacity=0)';
		width: 100%;
		height: 100%;
	}
	
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