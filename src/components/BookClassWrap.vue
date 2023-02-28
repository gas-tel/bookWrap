<template>
  <!-- <li :class="menuTitle"> -->
    <li :class="{active : this.bookType === menuTitle, menuTitle}">
    <button @click="clickBookClass(this)">{{menuTitle}}</button>
    <ul class="book-list-ui" v-if="bookType === this.contentType">
      <li v-for="book in bookData.filter((v) => v.content === this.contentType)" :key="book" :class="{bookInfo : book.animation === true}">
        <img :src="book.imgSrc" alt="" :class="{wrap_item}" @click="bookInfo(book)">
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
      itemLength : 0,
      activeYn: false,
    }
  },
  methods: {
    clickBookClass() {
      this.$parent.activeBookList(this)
    },
    bookInfo(book) {
      book.animation = !book.animation
    }
  }
}
</script>

<style lang="scss" scoped>
  .menuTitle {
    &.active {
      button {color: rgb(34, 146, 226); text-shadow: none; font-weight: 700;}
    }
  }
  .book-list-ui {position: absolute; left: 0rem; top: calc(-50vh + 0rem); transform: rotate(-0deg);
  animation-duration: .2s;  animation-fill-mode: forwards; animation-name: slidein; animation-timing-function: ease-in; 
    li {position: absolute; width: 25rem; height: 35rem; border-radius: 5px;animation-fill-mode: forwards; animation-timing-function: ease-in; position: absolute; transform: .3s all;
        &:hover {z-index: 500;
          img {cursor: pointer;}
        }
        &.bookInfo {position: fixed; }
      img { width: 25rem; height: 35rem; box-shadow: 0px 4px 10px #00000014;}
      @for $i from 0 to 11 {
        &:nth-child(#{$i}) {animation-duration: $i*.05s; animation-name: slideNode+$i; z-index: $i*1;}
      }
    }
  }
  .menuNavBtn {display: none;}

  @keyframes slidein {
    0% {
      left: 0rem; top: calc(-50vh + 10rem); transform: rotate(-0deg);
    }
    100% {
      left: -10rem; top: calc(0vh + 28rem);
    }
  }
  @for $i from 1 to 11 {
    @keyframes slideNode#{$i} {
      @if($i < 5){
        0% {
          left: 0; transform: rotate(-3deg);
        }
        80% {
          left: 0; transform: rotate(-3deg); 
        }
        100% {
          left: ($i * 60px); top: ( + $i * -10px); transform: rotate((-15 + $i * 4deg));
        }
      } @else {
        0% {
          left: 0; transform: rotate(-10deg);
        }
        80% {
          left: 0; transform: rotate(-10deg);
        }
        100% {
          left: ($i * 65px); top: (-90+ $i * 10px); transform: rotate((-15 + $i * 4deg));
        }
      }
    }
  }
</style>