<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <router-link :to="{ name: 'Index'}">Index</router-link>
    <router-link :to="{ name: 'Login'}">Login</router-link>
    <router-link :to="{ name: 'Register'}">Register</router-link>
    <router-link :to="{ name: 'MainPage'}">MainPage</router-link>
    <router-link :to="{ name: 'MapNavi'}">MapNavi</router-link>
    <router-link :to="{ name: 'SearchPage'}">SearchPage</router-link>
    <router-link :to="{ name: 'SearchDetail'}">SearchDetail</router-link>
    <router-link :to="{ name: 'SellerMainPage'}">SellerMainPage</router-link>
		<router-link :to="{ name: 'MyShop'}">MyShop</router-link>
		<router-link :to="{ name: 'AddGood'}">AddGood</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    asd(){
      this.$http.get("http://39.108.70.119:8080/goods/findAll").then(function (res) {
//        alert(res.body);
      })
    },
    returnPrev(){
      alert("asd");
      this.$http.get("http://39.108.70.119:8080/goods/findAll").then(function (res) {
        alert(res.body);
      })
    }
  },
  mounted(){
    this.asd();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
