<template>
  <header>
    <section class="section top-section">
        <ul class="top-nav">
            <li>
                <router-link to="./home" @click="topNavBtn('home')" :class="{active : navActive === 'home'}" :topNavBtn="topNavBtn">HOME</router-link>
            </li>
            <li>
                <router-link @click="topNavBtn('comic')" :class="{active : navActive === 'comic'}" :to="{
                  name: 'contentPage', 
                  query: {type: 'comic'}}
                ">COMIC</router-link>
            </li>
            <li>
                <router-link @click="topNavBtn('novel')" :class="{active : navActive === 'novel'}" :to="{
                  name: 'contentPage', 
                  query: {type: 'novel'}}
                ">NOVEL</router-link>
            </li>
            <li>
                <router-link @click="topNavBtn('essay')" :class="{active : navActive === 'essay'}" :to="{
                  name: 'contentPage', 
                  query: {type: 'essay'}}
                ">ESSAY</router-link>
            </li>
            <li>
                <router-link @click="topNavBtn('education')" :class="{active : navActive === 'education'}" :to="{
                  name: 'contentPage', 
                  query: {type: 'education'}}
                ">EDUCATION</router-link>
            </li>
            <li>
                <router-link @click="topNavBtn('search')" :class="{active : navActive === 'search'}" :to="{
                  name: 'contentPage', 
                  query: {type: 'search'}}
                ">SEARCH</router-link>
            </li>
        </ul>
        <ul class="users">
            <li>
                <router-link to="./myPage" @click="topNavBtn('mypage')" :class="{active : navActive === 'mypage'}">MY PAGE</router-link>
            </li>
            <li class="cart" >
                <router-link :mypagetype="mypagetype"
                :to="{
                  name: 'myPage', 
                  query: {type: 'BASKET'}}" @click="[topNavBtn('mypage')]" :class="{active : navActive === 'mypage'}">
                  <i class="xi-cart-o"></i>
                </router-link>
                <span class="cart_count">{{cart}}</span>
            </li>
        </ul>
    </section>
  </header>
  <router-view/>
  <ul class="copyright">
    <li>
      <a href="">INFO</a>
    </li>
    <li>
			<strong>© leedongyeol</strong>
    </li>
  </ul>
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
      navActive : 'home',
      mypagetype : 'BASKET',
    }
  },
  methods : {
    cartSum() {
        const _this = this
        this.cart = 0;
        data.map(function(v){
          if(v.cart === true) _this.cart++
      })
    },
    topNavBtn(focus) {
      this.navActive = focus
    },
    itemSearch(text) {
      this.$router.push({ path: '/contentPage'})
      this.$router.push({ name: 'contentPage', query: {text: text} })
    }
  },
  created() {
      this.cartSum();
  }
}
</script>

<style lang="scss">
  #app {margin: 0 auto; height: 100vh; overflow-y: scroll; overflow-x: hidden;}
  header {position: fixed; width: 100%; z-index: 10000; top: 0;
      &.popup {position: relative;}
      .users {
        .cart {font-size: 2rem; position: relative;
          .cart_count {position: absolute; font-size: 1rem; background: #fff; border-radius: 50%; color: #000; width: 1.5rem; height: 1.5rem; display: flex; align-items: center; justify-content: center;
            position: absolute; top: -.5rem; right: .5rem;
          }
        }
      }
  }
  .copyright {display: inline-block; vertical-align: middle; position: fixed; right: 100px; bottom: 30px; transform: rotate(90deg); -webkit-transform: rotate(90deg); transform-origin: top right; transition: 0.3s; -webkit-transition: 0.3s;
    li {display: inline-block; vertical-align: middle; margin-left: 5rem; transition: 0.3s; 
      &:hover {
        &>* {font-size: 2rem; transform: rotate(-90deg); -webkit-transform: rotate(-90deg);}
      }
      &>* {display: inline-block; vertical-align: middle; position: relative; font-size: 1.5rem; font-weight: 600; color: #fff; line-height: 40px; transition: 0.3s; -webkit-transition: 0.3s;}
    }
  }
</style>
