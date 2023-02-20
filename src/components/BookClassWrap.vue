<template>
  <li :class="menuTitle">
    <button @click="clickBookClass(this)">{{menuTitle}}dd</button>
    <ul class="book-list-ui" v-if="bookType === this.contentType">
      <li v-for="book in bookData.filter((v) => v.content === this.contentType)" :key="book">
        <img :src="book.imgSrc" alt="" :class="wrap_item">
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
      this.$parent.activeBookList(this)
      document.querySelector('.sch-categoty').childNodes.forEach((v)=>{
        v.classList.remove('active')
      })
      document.querySelector(`.${this.contentsType}`).classList.add('active')
    }
  }
}
</script>

<style lang="scss" scoped>
  .comic, .novel, .essay, .education {
    &.active {
      button {color: rgb(34, 146, 226); text-shadow: none; font-weight: 700;}
    }
  }
  .book-list-ui {position: absolute; left: 0rem; top: calc(-50vh + 0rem); transform: rotate(-0deg);
  animation-duration: .2s;  animation-fill-mode: forwards; animation-name: slidein; animation-timing-function: ease-in; 
    li {position: absolute; width: 25rem; height: 35rem; border-radius: 5px;
      img {animation-fill-mode: forwards; animation-timing-function: ease-in; position: absolute; width: 25rem; height: 35rem; box-shadow: 0px 4px 10px #00000014;}
      @for $i from 1 to 10 {
        &:nth-child(#{$i}) img {animation-duration: $i*.1s; animation-name: slideNode+$i; z-index: $i*1;}
      }
    }
  }
  .menuNavBtn {display: none;}

  @keyframes slidein {
    0% {
      left: 0rem; top: calc(-50vh + 10rem); transform: rotate(-0deg);
    }
    100% {
      left: -10rem; top: calc(0vh + 28rem);transform: rotate(-10deg);
    }
  }
  @for $i from 1 to 10 {
    @keyframes slideNode#{$i} {
      @if($i >= 5){
        0% {
          left: 0; transform: rotate(0);
        }
        80% {
          left: 0; transform: rotate(0); top: auto; 
        }
        100% {
          left: ($i * 65px); top: (-30 + $i * 15px); transform: rotate(($i * 2.5deg));
        }
      } @else {
        0% {
          left: 0; transform: rotate(0);
        }
        80% {
          left: 0; transform: rotate(0);
        }
        100% {
          left: ($i * 70px); top: ($i * 5px); transform: rotate(($i * 2deg));
        }
      }
    }
  }
</style>