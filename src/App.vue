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
                <router-link
                :to="{
                  name: 'myPage', 
                  query: {type: 'ADDRESS INFO'}}"
                @click="topNavBtn('mypage') " :class="{active : navActive === 'mypage'}">MY PAGE</router-link>
            </li>
            <li class="cart" >
                <router-link
                :to="{
                  name: 'myPage', 
                  query: {type: 'BASKET'}}"
                  @click="[topNavBtn('mypage')]" :class="{active : navActive === 'mypage'}">
                  <i class="xi-cart-o"></i>
                </router-link>
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
      navActive : 'home',
      mypagetype : 'BASKET',
      mypagetypeHome : 'ADDRESS INFO',
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
    itemSearch(text) {
      this.$router.push({ path: '/contentPage'})
      this.$router.push({ name: 'contentPage', query: {text: text} })
    },
    topNavBtn(focus) {
      this.navActive = focus
    },
    imgDragMethod() {
      if(document.querySelector('.like_book')) {
          document.querySelector('.like_book').setAttribute('draggable', false);
          const ele = document.querySelector('.like_book');
          ele.scrollTop = 100;
          ele.scrollLeft = 150;
          ele.style.cursor = 'grab';

              let pos = { top: 0, left: 0, x: 0, y: 0 };

              const mouseDownHandler = function (e) {
                  ele.style.cursor = 'grabbing';
                  ele.style.userSelect = 'none';

                  pos = {
                      left: ele.scrollLeft,
                      top: ele.scrollTop,
                      // Get the current mouse position
                      x: e.clientX,
                      y: e.clientY,
                  };

                  document.addEventListener('mousemove', mouseMoveHandler);
                  document.addEventListener('mouseup', mouseUpHandler);
              };

              const mouseMoveHandler = function (e) {
                  // How far the mouse has been moved
                  const dx = e.clientX - pos.x;
                  const dy = e.clientY - pos.y;

                  // Scroll the element
                  ele.scrollTop = pos.top - dy;
                  ele.scrollLeft = pos.left - dx;
              };

              const mouseUpHandler = function () {
                  ele.style.cursor = 'grab';
                  ele.style.removeProperty('user-select');

                  document.removeEventListener('mousemove', mouseMoveHandler);
                  document.removeEventListener('mouseup', mouseUpHandler);
              };

              // Attach the handler
              ele.addEventListener('mousedown', mouseDownHandler);

      }
      
    }
  },
  created() {
      this.cartSum();
  },
  watch: {
    '$route'() {
      this.$nextTick(function() {
        this.imgDragMethod()
      })
    }
  },
}
</script>

<style lang="scss">
img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
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
</style>
