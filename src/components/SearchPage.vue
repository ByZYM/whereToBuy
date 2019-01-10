<template>
  <div class="container">
    <div id="top_container">
      <div class="row">
        <div class="col-xs-1 col-md-1 returnBtn">
          <img class="img-responsive" @click="returnPrev" src="../assets/return.png"  />
        </div>
        <div class="col-xs-11 col-md-11">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="搜索你想要的商品">
            <span class="input-group-addon "><span class="glyphicon glyphicon-search"></span></span>
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
          <a href="#">评论最多</a>
        </div>
        <div class="col-xs-4 col-md-4">
          <a href="#">评分最高</a>
        </div>
      </div>
    </div>
    <div id="bottom_container">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  data () {
    return {
      msg: 'Welcome to SearchPage'
    }
  },
  methods: {
    returnPrev () {
      this.$router.go(-1)
    }
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
