<template>
  <div class="mainPage" id="vfor">
    <div class="container">
      <div class="top">
        <a href="#" style="float: left;">定位</a>
        <a href="#" style="float: right;">登录</a>
      </div>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="搜索你想要的商品">
        <span class="input-group-addon" id="basic-addon2"><span class="glyphicon glyphicon-search"></span></span>
      </div>

      <div id="myCarousel" class="carousel slide">
        <!-- 轮播（Carousel）指标 -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <!-- 轮播（Carousel）项目 -->
        <div class="carousel-inner">
          <div class="item active">
            <img src="../assets/logo.png" height="160" width="160" alt="First slide"/>
          </div>
          <div class="item">
            <img src="../assets/logo.png" height="160" width="160" alt="Second slide"/>
          </div>
          <div class="item">
            <img src="../assets/logo.png" height="160" width="160" alt="Third slide"/>
          </div>
        </div>
        <!-- 轮播（Carousel）导航 -->
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-xs-6">
            <span>精选</span>
          </div>
          <div class="col-xs-6">
            <span>热门</span>
          </div>
        </div>
      </div>

      <div class="container" >
        <div class="row">
          <span>分类商品</span>
        </div>
        <div class="box">
          <div class="row">
            <div v-if="index<6" v-for="(cat , index) in catList" class="col-xs-4 col-md-4">
              <a href="#" class="thumbnail">
                <img :src="require('../assets/catIcon/'+index+'.jpg')"/>
                <!--<img src="../assets/catIcon/0.jpg"/>-->
                {{cat.name}}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="newGoods container">
        <div class="row">
          <span>新品推荐</span>
        </div>
        <div class="box">
          <div class="row">
            <div v-for="goods in newGoodsList" class="col-xs-4 col-md-4">
              <a href="#" class="thumbnail">
                <!--<img src="{{goods.images.split(';')[0]}}" alt="logo">-->
                <!--<img :src="require(''+goods.images.split(';')[0]+'')"/>-->
                <!--<img :src="require('../assets/catIcon/'+index+'.jpg')"/>-->

                <img src="../assets/catIcon/3.jpg"/>
                <!--<img :src="[require(''+goods.images.split(';')[0]+'')]"/>-->
              </a>
              {{goods.name}}
              <!--{{goods.images.split(';')[0]}}-->
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  el: '#vfor',
//  name: 'MainPage',
  data () {
    return {
      catList:[],
      newGoodsList:[]
    }
//    return {
//      msg: 'Welcome to MainPage'
//    }
  },
  mounted(){
    this.$http.get('http://39.108.70.119:8080/type/findAll').then((res) => {
      this.catList=res.body;
    });
    this.$http.get('http://39.108.70.119:8080/goods/newGoods').then((res) => {
      this.newGoodsList=res.body;
//      alert(this.newGoodsList[0].images);
    });

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainPage{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.container>div{
  margin-bottom: 10px;
}
.top{
  zoom:1;
  overflow: hidden;
}
.top>a{
  height: 2em;
}
.input-group{
  height:50px;
}
.input-group>input{
  height:50px;
}
.input-group>span{
  height:50px;
}

.carousel-inner img{
  margin: auto;
}
.box{
  /*border-color: #c70c15;*/
  border:1px solid red;
}
/*.row>div{*/
  /*padding: 0px 0px;*/
/*}*/
/*.recommend{*/
  /*zoom:1;*/
  /*overflow: hidden;*/
/*}*/
/*.recommend>div{*/
  /*background-color: #c776c5;*/
  /*height: 60px;*/
  /*width: 45%;*/
/*}*/
/*.recommend-left{*/
  /*float: left;*/
/*}*/
/*.recommend-right{*/
  /*float: right;*/
/*}*/
/*.sortedGoods{*/
  /*border-color: #c70c15;*/
  /*border: dashed;*/
/*}*/
/*.sortedGoodsItem>img{*/
  /*margin-left: 20px;*/
  /*margin-right: 20px;*/
/*}*/
/*.newGoods{*/
  /*border-color: #c70c15;*/
  /*border: dashed;*/
/*}*/

</style>
