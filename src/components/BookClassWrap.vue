<template>
  <!-- <li :class="menuTitle"> -->
    <li :class="{active : this.bookType === menuTitle, menuTitle}">
    <button @click="clickBookClass(this)">{{menuTitle}}</button>
    <ul class="book-list-ui" v-if="bookType === this.contentType">
      <li v-for="book in bookData.filter((v) => v.content === this.contentType)" :key="book" :class="{bookInfo : book.animation === true}">
        <img :src="book.imgSrc" alt="" :class="{wrap_item}" @click="bookInfo(book)">
        <span v-if="book.animation" class="thisInfobg" @click="bgClick(book)"></span>
        <span v-if="book.animation" class="thisInfo">
          <span class="title"><em>제목</em><span>{{book.title}}</span></span>
          <span class="date"><em>발행일</em><span>{{book.date}}</span></span>
          <span class="salesValue"><em>이달의 순위</em><span>{{this.bookRank}}위</span></span>
        </span>
      </li>
    </ul>
  </li>
</template>

<script>
import bookData from "./../assets/data/bookData.js"
 
export default {
  props:['menuTitle','contentType','active','bookType'],
  name : 'BookClassWrap',
  data () {
    return {
      bookData,
      contentsType : this.contentType,
      itemLength : 0,
      activeYn: false,
      activeBook : false,
      bookRank : 0
    }
  },
  methods: {
    clickBookClass() {
      this.$parent.activeBookList(this)
    },
    bookInfo(book) {
      this.$parent.bookAnimation()
      this.activeBook = !this.activeBook
      let rank = [...bookData].sort((a,b)=>b.salesValue - a.salesValue)
      rank.map((v)=>{
        if(v.title === book.title) this.bookRank = v;
      })
      this.bookRank = rank.findIndex(i => i.title === book.title)+1;
      console.log(this.bookRank);
      book.animation = !book.animation
    },
    bgClick(book){
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
  .book-list-ui {position: absolute; left: 0rem; top: calc(-50vh + 0rem); transform: rotate(-0deg); width: 100%;
  animation-duration: .2s; animation-fill-mode: forwards; animation-name: slidein; animation-timing-function: ease-in; 
    li {position: absolute; width: 40rem; height: 35rem; border-radius: 5px;animation-fill-mode: forwards; animation-timing-function: ease-in; position: absolute; transform: .3s all;
        &.bookInfo {animation-duration: 5s; display: flex;
          @for $i from 0 to 11 {
            &:nth-child(#{$i}) {animation-name: slideEnd+$i; z-index: $i*1; animation-duration: 1s; animation-timing-function: ease;}
          }
          img {position: relative; z-index: 101;}
          .thisInfobg {position: relative; display: block;
            &::after {display: block; content: ''; width: 300vw; height: 300vh; position: absolute; top: -150vh; left: -150vw; animation: slidebg 3s; animation-fill-mode: forwards;}
          }
          .thisInfo {position: relative; color: #fff; padding: 3rem; transition: 5s;
            &>span {white-space: nowrap; display: block; margin: 0 0 2rem 2rem; display: flex; font-size: 2rem; align-items: center; height: 3rem;
              @for $i from 1 to 4 {
                &:nth-child(#{$i}) 
                   {animation-name: bookInfoText+$i; z-index: $i*1; animation-duration: $i*.9s; animation-timing-function: ease; opacity: 0; animation-fill-mode: forwards;}
              }
              em {width: 10rem; display: block; font-size: 1.6rem;}
            }
          }
        }
        &:hover {
          img {cursor: pointer;}
        }
      img { width: 25rem; height: 35rem; box-shadow: 0px 4px 10px #00000014;}
      @for $i from 0 to 11 {
        &:nth-child(#{$i}) {animation-duration: $i*.05s; animation-name: slideNode+$i;}
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
          left: ($i * 65px); top: (-90+ $i * 10px); transform: rotate((-15 + $i * 3deg));
        }
      }
    }
  }
  @for $i from 1 to 11 {
    @keyframes slideEnd#{$i} {
      @if($i < 5){
        0% {
          left: ($i * 60px); transform: rotate((-15 + $i * 4deg)); top: (-90+ $i * 10px);  z-index: 0 !important;
        }
        10% {
          left: ($i * 60px); transform: rotate((0deg));  top: (-90+ $i * 10px);
        }
        30% {
          left: ($i * 60px); top: (-190+ $i * 10px);  z-index: 100 !important;
        }
        100% {
          left : 0; top: (-190+ $i * 10px); transform: rotate((0deg));  z-index: 100 !important;
        }
      } @else {
        0% {
          left: ($i * 65px); transform: rotate((-15 + $i * 4deg)); top: (-90+ $i * 10px);  z-index: 0 !important;
        }
        10% {
          left: ($i * 65px); transform: rotate((0deg));  top: (-90+ $i * 10px);
        }
        30% {
          left: ($i * 65px); top: (-190+ $i * 10px);
        }
        100% {
          left : 0; top: (-190+ $i * 10px); transform: rotate((0deg));  z-index: 100 !important;
        }
      }
    }
  }
  @keyframes slidebg {
    0% {
      background: rgba(0,0,0,0);
    }
    90% {
      background: rgba(0,0,0,.8);
    }
    100% {
      backdrop-filter: blur(10px); background: rgba(0,0,0,.8);
    }
  }
  @for $i from 1 to 4 {
    @keyframes bookInfoText#{$i} {
      0% {
        opacity: 0; margin-top: -2rem;
      }
      80% {
        opacity: 0; margin-top: -2rem;
      }
      100% {
        opacity: 1; margin-top: 0;
      }
    }
  }
</style>