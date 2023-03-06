<template>
  <header :class="{popup : popup === true}">
    <section class="section top-section">
        <ul class="top-nav">
            <li>
                <router-link to="./home">HOME</router-link>
            </li>
            <li>
                <router-link :to="{
                  name: 'contentPage', 
                  query: {type: 'comic'}}
                ">COMIC</router-link>
            </li>
            <li>
                <router-link :to="{
                  name: 'contentPage', 
                  query: {type: 'novel'}}
                ">NOVEL</router-link>
            </li>
            <li>
                <router-link :to="{
                  name: 'contentPage', 
                  query: {type: 'essay'}}
                ">ESSAY</router-link>
            </li>
            <li>
                <router-link :to="{
                  name: 'contentPage', 
                  query: {type: 'education'}}
                ">EDUCATION</router-link>
            </li>
        </ul>
        <ul class="users">
            <li>
                <a href="">My page</a>
            </li>
            <li class="cart">
                <a href=""><i class="xi-cart-o"></i></a>
                <span class="cart_count">{{cart}}</span>
            </li>
        </ul>
    </section>
  </header>
  <router-view/>
</template>

<script>
import "./assets/css/common.css"
import data from './assets/data/bookData'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      data,
      cart : 0,
    }
  },
  methods : {
    cartSum() {
        const _this = this
        this.cart = 0;
        data.map(function(v){
          if(v.cart === true) _this.cart++
      })
    }
  }
}
</script>

<style lang="scss">
  #app {margin: 0 auto;}
  header {position: fixed; width: 100%; z-index: 10000; top: 0;
      &.popup {position: relative;}
      .users {
        .cart {font-size: 2rem; position: relative;
          .cart_count {position: absolute; font-size: 1rem; background: #fff; border-radius: 50%; color: #2292e2; width: 1.5rem; height: 1.5rem; display: flex; align-items: center; justify-content: center;
            position: absolute; top: -.5rem; right: .5rem;
          }
        }
      }
  }
</style>
