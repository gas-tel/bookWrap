<template>
  <div class="normal_row_wrap">
    <div class="normal_row_wrap_title">
      <strong>찜내역</strong>
    </div>
    <ul class="normal_row_wrap_content">
      <li v-for="book in userLikeList.filter((v)=>v.like === true)" :key="book">
        <span class="row_img_box">
          <img :src="book.imgSrc" alt="">
        </span>
        <span class="item_info">
          <em class="item_info_class">{{book.content}}</em>
          <span class="item_info_title">{{book.title}}<em>{{book.date}}</em></span>
          <span class="item_info_detail">
            <em>{{book.info}}</em>
          </span>
        </span>
        <div class="shopping">
            <button class="xi-heart" v-if="book.like" @click="likeBtn(book)">찜해제</button>
            <button class="xi-heart-o" v-else @click="likeBtn(book)">찜해제</button>
            <button class="xi-cart" v-if="book.cart" @click="cartBtn(book)">장바구니</button>
            <button class="xi-cart-o" v-else @click="cartBtn(book)">장바구니</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import userLikeList from '@/assets/data/bookData'
export default {
  data() {
    return {
      userLikeList
    }
  },
  methods : {
    likeBtn(book) {
        book.like = !book.like
    },
    cartBtn(book) {
        book.cart = !book.cart
        this.$parent.$parent.$parent.cartSum()
    },
  }
}
</script>

<style lang="scss">
  .normal_row_wrap_title {display: flex; justify-content: space-between; align-items: center;
      strong {font-size: 2.4rem;
          span {font-size: 1.8rem;}
      }
  }
  .normal_row_wrap_content {margin-top: 1.2rem; border-top: 2px solid #444;
    &>li {padding: 2rem 0; border-bottom: 1px solid #E8E8E8; display: flex; align-content: center; align-items: center;
        &>* {display: flex; align-items: center; justify-content: left; flex-wrap: wrap;}
        .name {width: 18rem;
            strong {display: block; font-size: 1.5rem; width: 100%; text-align: left;}
            em {font-size: 1.3rem;}
        }
        .content {width: calc(100% - 30rem); color: #444; font-size: 1.5rem; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; padding-right: 2rem;}
        .row_img_box {border: 1px solid #E8E8E8; max-width: 12rem; height: 12rem; margin: 0 1.5rem;}
          img {max-height: 100%;}
          .item_check {width: 3rem; 
            input {margin: 0 auto;}
          }
          .item_info {width: calc(100% - 29rem);
              * {width: 100%; text-align: left;}
              .item_info_class {color: #686868; font-size: 1.4rem;}
              .item_info_title {color: #222; font-size: 1.8rem;
                em {margin-left: 1rem; font-size: 1.3rem;}
              }
              .item_info_detail {
                  em {color: #686868; font-size: 1.3rem; word-break: keep-all; width: 80%; margin-top: 2rem;
    display: -webkit-box; white-space: normal; overflow: hidden; text-overflow: ellipsis; height: 3rem; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
                      &:not(:last-child) {margin-bottom: .5rem; font-weight: 200;}
                  }
              }
          }
      }
      .shopping {width: 12rem; display: flex; flex-wrap: wrap; height: 8rem;
          button {width: 100%; border: 1px solid #ddd; transition: .3s all; display: flex; align-content: center; justify-content: center;
          padding: 1rem; margin-left: -1px; font-size: 2rem; border-radius: .6rem; font-size: 1.3rem;
              &.xi-heart {color: #d83b3b;}
              &.xi-cart {color: #468df7;}
              &:first-child {margin-bottom: .5rem;}
              &::before {margin: .1rem .5rem 0 0;}
              &:hover {background: #b350a8; color:#fff; border-color: #b350a8;} 
          }
      }
  }
</style>