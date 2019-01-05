<template>
  <div class="index">
    <div class="bgimg">
      <div class="top"></div>
      <div class="bottom">
        <button type="button" class="btn btn-default">注册</button>
        <button type="button" class="btn btn-primary">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Index'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.bgimg {
  background:url(../assets/xiaowanzi.jpg) no-repeat;
  background-size: 100% 100%;
  flex:1;
}

.bottom{
  //background-color: #fff;
  height:20%;
  width: 100%;
  position: absolute;
  bottom: 0px;
  padding: 5% 0;

}
  .bottom>button{
    width: 30%;
    height: 80%;
  }

  .bottom>button:first-child{
    margin-right:5%;
  }

  .bottom>button:last-child{
    margin-left:5%;
  }

</style>
