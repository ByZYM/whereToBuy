<template>
  <div class="container">
    <div id="top_container">
      <div class="row">
        <div class="col-xs-1 col-md-1 returnBtn">
          <img class="img-responsive" @click="returnPrev" src="../assets/return.png"/>
        </div>
        <div class="col-xs-11 col-md-11">
          <h4>商品详情页</h4>
        </div>
      </div>
    </div>

    <div id="middle_container">
      <div id="myCarousel" class="carousel slide">
        <!-- 轮播（Carousel）指标 -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <!-- 轮播（Carousel）项目 -->
        <!--<div class="carousel-inner">
          <div class="item active">
            <img src="../assets/logo.png" height="160" width="160" alt="First slide"/>
          </div>
          <div class="item">
            <img src="../assets/logo.png" height="160" width="160" alt="Second slide"/>
          </div>
          <div class="item">
            <img src="../assets/logo.png" height="160" width="160" alt="Third slide"/>
          </div>
        </div>-->
        <div class="carousel-inner">
          <div v-if="index==0" class="item active" v-for="(image, index) in SomeImages">
            <img :src="image" height="160" width="160"/>
          </div>
          <div v-else class="item">
            <img :src="image" height="160" width="160"/>
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
    </div>

    <!--<div class="container">
      <div class="box">
        <div class="row">
          <div class="col-xs-3 col-md-3">
            <a href="#" class="thumbnail">
              <img src="../assets/logo.png" alt="logo">
            </a>
          </div>
          <div class="col-xs-3 col-md-3">
            <a href="#" class="thumbnail">
              <img src="../assets/logo.png" alt="logo">
            </a>
          </div>
          <div class="col-xs-3 col-md-3">
            <a href="#" class="thumbnail">
              <img src="../assets/logo.png" alt="logo">
            </a>
          </div>
          <div class="col-xs-3 col-md-3">
            <a href="#" class="thumbnail">
              <img src="../assets/logo.png" alt="logo">
            </a>
          </div>
        </div>
      </div>
    </div>-->

    <div id="bottom_container">
      <!--<div class="row">
        <div class="col-xs-8 col-md-8">
          <sapn>我是一个很长的地址</sapn>
        </div>
        <div class="col-xs-4 col-md-4">
          <a href="#">去这里</a>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-5 col-md-5">
          <sapn>{{searchOne.name}}</sapn>
        </div>
        <div class="col-xs-5 col-md-5">
          <sapn>{{searchOne.price}}</sapn>
        </div>
        <div class="col-xs-2 col-md-2">
          <san class="glyphicon glyphicon-thumbs-up"></san>
        </div>
      </div>
      <div class="row">
        <sapn>详情信息</sapn>
      </div>
      <div class="row">
        <div class="col-xs-8 col-md-8">
          <sapn>商铺详细信息</sapn>
        </div>
        <div class="col-xs-4 col-md-4">
          <san class="glyphicon glyphicon-heart-empty"></san>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-8 col-md-8">
          <sapn>评论</sapn>
        </div>
        <div class="col-xs-4 col-md-4">
          <san class="glyphicon glyphicon-thumbs-up"></san>
        </div>
      </div>-->

      <div class="panel panel-default">
        <div class="panel-body">
          <div class="row">
            <div class="col-xs-8 col-md-8">
              <sapn>地址:{{searchOneSeller.address}}</sapn>
            </div>
            <div class="col-xs-4 col-md-4">
              <a href="#">去这里</a>
            </div>
          </div>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-body">
          <div class="row">
            <div class="col-xs-5 col-md-5">
              <sapn>{{searchOneGood.name}}</sapn>
            </div>
            <div class="col-xs-5 col-md-5">
              <sapn>{{searchOneGood.price}}</sapn>
            </div>
            <div class="col-xs-2 col-md-2">
              <san class="glyphicon glyphicon-thumbs-up"></san>
            </div>
          </div>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-body">
          <div class="row">
            <sapn>{{searchOneGood.introduction}}</sapn>
          </div>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-body">
          <div class="row">
            <div class="col-xs-8 col-md-8">
              <sapn>商铺详细信息</sapn>
            </div>
            <div class="col-xs-4 col-md-4">
              <san class="glyphicon glyphicon-heart-empty"></san>
            </div>
          </div>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-body">
          <div class="row">
            <div class="col-xs-8 col-md-8">
              <sapn>评论</sapn>
            </div>
            <div class="col-xs-4 col-md-4">
              <san class="glyphicon glyphicon-thumbs-up"></san>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'SearchDetail',
  data () {
    return {
      searchOneGood:{},
      searchOneSeller:{},
      SomeImages:[],
      msg: 'Welcome to SearchDetail'
    }
  },
  methods: {
    returnPrev () {
      this.$router.go(-1)
    }
  },
  mounted(){
//    alert(this.$route.params.id);
    this.$http.get('http://39.108.70.119:8080/goods/findOne?id='+this.$route.params.goodId).then((res) => {
      this.searchOneGood=res.body;
      this.SomeImages=this.searchOneGood.images.split(";");
    });
    this.$http.get('http://39.108.70.119:8080/seller/findOne?id='+this.$route.params.sellerId).then((res) => {
      this.searchOneSeller=res.body;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.carousel-inner img{
  margin: auto;
}
.row{
  /*border:1px solid red;*/
  margin-right: 0;
  margin-left: 0;
}
.row>div{
  padding: 0 0;
}
.returnBtn{
  padding: 0px 0px;
}
</style>
