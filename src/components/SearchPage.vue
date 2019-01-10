<template>
  <div class="container">
    <div id="top_container">
      <div class="row">
        <div class="col-xs-1 col-md-1 returnBtn">
          <img class="img-responsive" @click="returnPrev" src="../assets/return.png"  />
        </div>
        <div class="col-xs-11 col-md-11">
          <div class="input-group">
            <input v-model="keywords" type="text" class="form-control" placeholder="搜索你想要的商品">
            <span class="input-group-addon "><span @click="doSearch" class="glyphicon glyphicon-search"></span></span>
            <span class="input-group-addon "><span class="glyphicon glyphicon-list"></span></span>
          </div>
        </div>
      </div>
    </div>
    <div id="middle_container">
      <div class="row">
        <div class="col-xs-4 col-md-4">
          <a href="#">离我最近</a>
        </div>
        <div class="col-xs-4 col-md-4">
          <a @click="doOrderByComment" href="#">评论最多</a>
        </div>
        <div class="col-xs-4 col-md-4">
          <a @click="doOrderByScore" href="#">评分最高</a>
        </div>
      </div>
    </div>
    <div id="bottom_container">
      <div class="row outItem" v-for="(good, index) in searchByNameList">
        <div class="col-xs-4 col-md-4">
          <a @click="doClick(good.id, sellerList[good.sellerId].id)" href="#" class="thumbnail">
            <!--<img src="../assets/logo.png" alt="logo">-->
            <!--<img :src="goods.images.split(';')[1]"/>-->
            <img :src="good.images.split(';')[0]"/>
          </a>
        </div>
        <div class="col-xs-8 col-md-8">
          <div class="container">
            <div class="row">
              <sapn>{{good.name}}</sapn>
            </div>
            <div class="row itemDetails">
              <div class="col-xs-4 col-md-4"><span>{{typeList[good.type1Id]}} {{typeList[good.type2Id]}}</span></div>
              <div class="col-xs-4 col-md-4"><span>{{sellerList[good.sellerId].name}}</span></div>
              <div class="col-xs-4 col-md-4"><span>距离{{Math.floor(Math.random()*(100-50)+1)}}米</span></div>
            </div>
          </div>
        </div>
      </div>
      <!--<div class="row outItem">
        <div class="col-xs-4 col-md-4">
          <a href="#" class="thumbnail">
            <img src="../assets/logo.png" alt="logo">
          </a>
        </div>
        <div class="col-xs-8 col-md-8">
          <div class="container">
            <div class="row">
              <sapn>商品名</sapn>
            </div>
            <div class="row itemDetails">
              <div class="col-xs-4 col-md-4"><span>关键字</span></div>
              <div class="col-xs-4 col-md-4"><span>商铺名</span></div>
              <div class="col-xs-4 col-md-4"><span>距离几米</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row outItem">
        <div class="col-xs-4 col-md-4">
          <a href="#" class="thumbnail">
            <img src="../assets/logo.png" alt="logo">
          </a>
        </div>
        <div class="col-xs-8 col-md-8">
          <div class="container">
            <div class="row">
              <sapn>商品名</sapn>
            </div>
            <div class="row itemDetails">
              <div class="col-xs-4 col-md-4"><span>关键字</span></div>
              <div class="col-xs-4 col-md-4"><span>商铺名</span></div>
              <div class="col-xs-4 col-md-4"><span>距离几米</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row outItem">
        <div class="col-xs-4 col-md-4">
          <a href="#" class="thumbnail">
            <img src="../assets/logo.png" alt="logo">
          </a>
        </div>
        <div class="col-xs-8 col-md-8">
          <div class="container">
            <div class="row">
              <sapn>商品名</sapn>
            </div>
            <div class="row itemDetails">
              <div class="col-xs-4 col-md-4"><span>关键字</span></div>
              <div class="col-xs-4 col-md-4"><span>商铺名</span></div>
              <div class="col-xs-4 col-md-4"><span>距离几米</span></div>
            </div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  data () {
    return {
      searchByNameList:[],
      keywords:'',
      sellerList:[],
      typeList:[],
      msg: 'Welcome to SearchPage',
    }
  },
  methods: {
    returnPrev () {
      this.$router.go(-1)
    },
    doClick(goodId, sellerId){
//      this.$router.push({path: 'SearchDetail'})
      this.$router.push({name: 'SearchDetail', params: {goodId: goodId, sellerId: sellerId}})
    },
    doOrderByComment(){
      this.$http.get('http://39.108.70.119:8080/goods/userSearchByPage', {params:{keywords:this.keywords, pageNum: 1, pageSize:4, orderBy: 'comment'}}).then((res) => {
        this.searchByNameList=res.body.rows;
      });
    },
    doOrderByScore(){
      this.$http.get('http://39.108.70.119:8080/goods/userSearchByPage', {params:{keywords:this.keywords, pageNum: 1, pageSize:4, orderBy: 'score'}}).then((res) => {
        this.searchByNameList=res.body.rows;
      });
    },
    doSearch(){
      this.$http.get('http://39.108.70.119:8080/goods/userSearchByPage', {params:{keywords:this.keywords, pageNum: 1, pageSize:4}}).then((res) => {
        this.searchByNameList=res.body.rows;
      });
      this.$http.get('http://39.108.70.119:8080/type/findAll').then((res) => {
        for(var i=0;i<res.body.length;i++){
          var type = res.body[i];
          this.typeList[type.id]=type.name;
        }
      });
      this.$http.get('http://39.108.70.119:8080/seller/findAll').then((res) => {
        for(var i=0;i<res.body.length;i++){
          var seller = res.body[i];
          this.sellerList[seller.id]=seller;
        }
      });
    }
  },
  mounted(){
    this.$http.get('http://39.108.70.119:8080/goods/userSearchByPage', {params:{keywords:this.$route.params.keywords, pageNum: 1, pageSize:4}}).then((res) => {
      this.searchByNameList=res.body.rows;
    });
    this.$http.get('http://39.108.70.119:8080/type/findAll').then((res) => {
//      this.typeList=res.body;
      for(var i=0;i<res.body.length;i++){
        var type = res.body[i];
        this.typeList[type.id]=type.name;
//        alert(this.sellerList[seller.id]);
      }
    });
    this.$http.get('http://39.108.70.119:8080/seller/findAll').then((res) => {
//      this.searchByNameList=res.body;
//      alert(res.body);

      for(var i=0;i<res.body.length;i++){
        var seller = res.body[i];
//        this.sellerList[seller.id]=seller.name;
        this.sellerList[seller.id]=seller;
//        alert(this.sellerList[seller.id]);
      }
    });
//    alert(this.$route.params.keywords);
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
.itemDetails>div{
  padding: 0px 0px;
}
/*.outItem{
  border:1px solid red;
}*/
.returnBtn{
  padding: 0px 0px;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
</style>
