<template>
  <li>
    <button @click="clickBookClass(this)">{{menuTitle}}</button>
    <ul class="book-list-ui" v-if="bookType === this.contentType">
      <li v-for="book in bookData.filter((v) => v.content === this.contentType)" :key="book">
        <img :src="book.imgSrc" alt="">
      </li>
    </ul>
  </li>
</template>

<script>
import bookData from "./../assets/data/bookData.js"
 
export default {
  props:['menuTitle','contentType','active','bookType'],
  data () {
    return {
      bookData,
      contentsType : this.contentType,
      bookList : document.querySelector('.book-list-ui'),
      itemLength : 0,
    }
  },
  methods: {
    clickBookClass() {
      this.bookList = document.querySelector('.book-list-ui')
      const _this = this
      const bookLoad = new Promise(function (resolve){
        _this.$parent.activeBookList(_this)
        setTimeout(function(){
          resolve()
        },500)
      })
      bookLoad.then(function(){
        sibar()
      })
      function sibar(){
        const items = _this.bookList.childNodes;
        for(let item in items){
          if(items[item].childNodes){
            items[item].className = "dd"
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .book-list-ui {position: absolute; left: 0rem; top: calc(-50vh + 0rem); transform: rotate(-0deg);
  animation-duration: .15s;  animation-fill-mode: forwards; animation-name: slidein; animation-timing-function: ease-in; 
    li {position: absolute; width: 24rem; 
      img {animation-fill-mode: forwards; animation-timing-function: ease-in; position: absolute;}
      &:nth-child(2) img {animation-duration: .3s; animation-name: slideNode1; z-index: 1;}
      &:nth-child(3) img {animation-duration: .45s; animation-name: slideNode2; z-index: 2;}
      &:nth-child(4) img {animation-duration: .6s; animation-name: slideNode3; z-index: 3;}
      &:nth-child(5) img {animation-duration: .75s; animation-name: slideNode4; z-index: 4;}
      &:nth-child(6) img {animation-duration: .9s; animation-name: slideNode5; z-index: 5;}
      &:nth-child(7) img {animation-duration: 1.05s; animation-name: slideNode6; z-index: 6;}
      &:nth-child(8) img {animation-duration: 1.2s; animation-name: slideNode7; z-index: 7;}
      &:nth-child(9) img {animation-duration: 1.35s; animation-name: slideNode8; z-index: 8;}
      &:nth-child(10) img {animation-duration: 1.5s; animation-name: slideNode9; z-index: 9;}
    }
  }

@keyframes slidein {
  0% {
    left: 0rem; top: calc(-50vh + 10rem); transform: rotate(-0deg);
  }
  100% {
    left: 5rem; top: calc(0vh + 28rem);transform: rotate(-10deg);
  }
}
@keyframes slideNode1 {
  0% {
    left: 0; transform: rotate(0);
  }
  50% {
    left: 0; transform: rotate(0);
  }
  100% {
    left: 7rem; top: -2rem; transform: rotate(5deg);
  }
}
@keyframes slideNode2 {
  0% {
    left: 0; transform: rotate(0);
  }
  33% {
    left: 0; transform: rotate(0);
  }
  100% {
    left: 9rem; top: -3rem; transform: rotate(3deg);
  }
}
@keyframes slideNode3 {
  0% {
    left: 0; transform: rotate(0);
  }
  50% {
    left: 0; transform: rotate(0);
  }
  100% {
    left: 11rem; top: -2rem; transform: rotate(5deg);
  }
}
@keyframes slideNode4 {
  0% {
    left: 0; transform: rotate(0);
  }
  50% {
    left: 0; transform: rotate(0);
  }
  100% {
    left: 13rem; top: -2rem; transform: rotate(5deg);
  }
}
@keyframes slideNode5 {
  0% {
    left: 0; transform: rotate(0);
  }
  50% {
    left: 0; transform: rotate(0);
  }
  100% {
    left: 15rem; top: -2rem; transform: rotate(5deg);
  }
}
@keyframes slideNode6 {
  0% {
    left: 0; transform: rotate(0);
  }
  50% {
    left: 0; transform: rotate(0);
  }
  100% {
    left: 17rem; top: -2rem; transform: rotate(5deg);
  }
}
@keyframes slideNode7 {
  0% {
    left: 0; transform: rotate(0);
  }
  50% {
    left: 0; transform: rotate(0);
  }
  100% {
    left: 19rem; top: -2rem; transform: rotate(5deg);
  }
}
@keyframes slideNode8 {
  0% {
    left: 0; transform: rotate(0);
  }
  50% {
    left: 0; transform: rotate(0);
  }
  100% {
    left: 21rem; top: -2rem; transform: rotate(5deg);
  }
}
@keyframes slideNode9 {
  0% {
    left: 0; transform: rotate(0);
  }
  50% {
    left: 0; transform: rotate(0);
  }
  100% {
    left: 23rem; top: -2rem; transform: rotate(5deg);
  }
}
</style>