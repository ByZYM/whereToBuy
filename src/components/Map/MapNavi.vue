<template>
	<div class="container">
		<div id="map_container">

		</div>
		<div id="route_container">

		</div>
		<div class="button_container">
			<div class="col-xs-4">
				<button type="button" class="btn btn-primary">步行</button>
			</div>
			<div class="col-xs-4">
				<button type="button" class="btn btn-success">驾车</button>
			</div>
			<div class="col-xs-4">
				<button type="button" class="btn btn-info">飞机</button>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	mounted(){
		var map = new BMap.Map("map_container");          // 创建地图实例
		var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
		map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
		map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

		var marker = new BMap.Marker(point);        // 创建标注
		map.addOverlay(marker);                     // 将标注添加到地图中

		var geolocation = new BMap.Geolocation();
		geolocation.getCurrentPosition(function(r){
		if(this.getStatus() == BMAP_STATUS_SUCCESS){
			var mk = new BMap.Marker(r.point);
			map.addOverlay(mk);
			map.panTo(r.point);
			//console.log('您的位置：'+r.point.lng+','+r.point.lat);
		}
		else {
			alert('failed'+this.getStatus());
		}
});
	}
}

</script>

<style scoped="scoped">
.container{
	flex: 1;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
}
#map_container{
	width: 100%;
	height: 100%;
}
.button_container{
	width: 100%;
	position: absolute;
	bottom: 50px;
}
.button_container>div{
}
.button_container>div>button{
	border-radius: 50%;
	width: 100px;
	height: 100px;

}
</style>
