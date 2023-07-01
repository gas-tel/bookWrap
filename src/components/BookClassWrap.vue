<template>
  <li :class="{active : this.bookType === menuTitle, menuTitle}">
    <button @click="clickBookClass(this)">{{menuTitle}}</button>
    <ul class="book-list-ui" v-if="bookType === this.contentType">
      <li v-for="book in bookData.filter((v) => v.content === this.contentType)" :key="book" :class="{bookInfo : book.animation === true}">
        <img :src="book.imgSrc" alt="" @click="bookInfo(book)">
        <span v-if="book.animation" class="thisInfobg" @click="bgClick(book)"></span>
        <span v-if="book.animation" class="thisInfo">
          <span class="title"><em>제목</em><span>{{book.title}}</span></span>
          <span class="date"><em>발행일</em><span>{{book.date}}</span></span>
          <span class="salesValue"><em>이달의 순위</em><span>{{this.bookRank}}위</span></span>
          <span class="bookInfo">{{book.info}}</span>
        </span>
      </li>
    </ul>
  </li>
</template>

<script>
import bookData from "@/assets/data/bookData.js"
 
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
    button {color: transparent; -webkit-text-stroke: 1px #fff; font-weight: bold; font-size: 5rem;}
    &.active {
      button {color: #992dfa; -webkit-text-stroke: 0; text-shadow: none; font-weight: 700;}
    }
  }
  .book-list-ui {position: absolute; transform: rotate(-0deg) translateX(-50%); width: 100%; left: 50%; margin-left: 8rem;
  animation-duration: .2s; animation-fill-mode: forwards; animation-name: slidein; animation-timing-function: ease-in; 
    li {position: absolute; border-radius: 5px;animation-fill-mode: forwards; padding: 0rem !important;
    animation-timing-function: ease-in; position: absolute; transition: .3s all;
        &:hover {margin-top: -3rem; transform: rotate(-0deg) translateX(-50%); }
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
              @for $i from 1 to 5 {
                &:nth-child(#{$i}) 
                   {animation-name: bookInfoText+$i; z-index: $i*1; animation-duration: $i*.6s; animation-timing-function: ease; opacity: 0; animation-fill-mode: forwards;}
              }
              em {width: 10rem; display: block; font-size: 1.6rem;}
            }
            .bookInfo {white-space: pre-line; max-width: 60rem; word-break: keep-all; display: -webkit-box;
    white-space: normal; overflow: hidden; text-overflow: ellipsis; height: 15rem; padding-top: 5rem; -webkit-line-clamp: 4; -webkit-box-orient: vertical;}
          }
          &::after {display: none !important;}
        }
        &:hover {
          img {cursor: pointer;}
        &::after {display: block; animation-name: bookhover; animation-duration: 1.5s; animation-iteration-count: infinite;
        animation-timing-function: ease; animation-fill-mode: forwards;}
        }
        &::after {display: none; content: '';width: 0; height: 0; position: absolute; top: -3rem; left: 50%; transform: translateX(-50%);
                  border-bottom: 20px solid rgba(0,0,0,0);
                  border-top: 20px solid #ac59f6;
                  border-left: 12px solid rgba(0,0,0,0);
                  border-right: 12px solid rgba(0,0,0,0);}
      img {width: 25rem; height: 35rem; box-shadow: 0px 4px 10px rgba(0,0,0,0);}
      @for $i from 0 to 11 {
        &:nth-child(#{$i}) {animation-duration: $i*.05s; animation-name: slideNode+$i;}
      }
    }
  }
  .menuNavBtn {display: none;}

  @keyframes slidein {
    0% {
      top: calc(-50vh + 10rem); transform: translateX(-50%);
    }
    100% {
      top: calc(0vh + 28rem); transform: translateX(-50%);
    }
  }
  @keyframes bookhover {
    0% {
      margin-top: -1rem;
    }
    50% {
      margin-top: -2rem;
    }
    100% {
      margin-top: -1rem;
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
          left: ($i * 80px); top: ( + $i * -10px); transform: rotate((-15 + $i * 4deg));
        }
      } @else {
        0% {
          left: 0; transform: rotate(-10deg);
        }
        80% {
          left: 0; transform: rotate(-10deg);
        }
        100% {
          left: ($i * 80px); top: (-90+ $i * 10px); transform: rotate((-15 + $i * 3deg));
        }
      }
    }
  }
  @for $i from 1 to 11 {
    @keyframes slideEnd#{$i} {
      @if($i < 5){
        0% {
          left: ($i * 80px); transform: rotate((-15 + $i * 4deg)); top: (-90+ $i * 10px);  z-index: 0 !important;
        }
        10% {
          left: ($i * 80px); transform: rotate((0deg));  top: (-90+ $i * 10px);
        }
        30% {
          left: ($i * 80px); top: (-190+ $i * 10px);  z-index: 100 !important;
        }
        100% {
          left : 0; top: (-190+ $i * 10px); transform: rotate((0deg));  z-index: 100 !important;
        }
      } @else {
        0% {
          left: ($i * 80px); transform: rotate((-15 + $i * 4deg)); top: (-90+ $i * 10px);  z-index: 0 !important;
        }
        10% {
          left: ($i * 80px); transform: rotate((0deg));  top: (-90+ $i * 10px);
        }
        30% {
          left: ($i * 80px); top: (-190+ $i * 10px);
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
  @for $i from 1 to 5 {
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
  @media(max-width: 1280px) {
    .book-list-ui {display: flex; flex-wrap: wrap; margin-left: 0; justify-content: center;
      &>li {position: static; animation-fill-mode: none; padding: 1rem !important; max-width: 50%;
        &:hover {transform: rotate(0); margin-top: 0;}
        &:nth-child(n+5) {display: none;}
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
            left: ($i * 20px); top: ( + $i * -3px); transform: rotate((-5 + $i * 1deg));
          }
        } @else {
          0% {
            left: 0; transform: rotate(-10deg); display: none;
          }
          80% {
            left: 0; transform: rotate(-10deg);
          }
          100% {display: none;
            left: ($i * 20px); top: (-30+ $i * 3px); transform: rotate((-5 + $i * 1deg));
          }
        }
      }
    }
  }
</style>