<template>
  <div class="coupon_wrap">
    <ul class="list">
      <li>
        <button class="xi-heart" @click="likeListBtn"></button>
        <ul class="like_book" :class="{active : likeBtn}">
          <li v-for="like in bookData.filter((v)=>v.like)" :key="like">
            <img :src="like.imgSrc" alt="">
          </li>
        </ul>
      </li>
      <li>
        <button class="xi-coupon" @click="couponLikeListBtn"></button>
        <ul class="like_book" :class="{active : couponBtn}">
          <li>
            사용가능한 쿠폰이 없습니다.
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>

import bookData from '@/assets/data/bookData'

export default {
  data () {
    return {
      bookData,
      likeBtn : false,
      couponBtn : false
    }
  },
  methods : {
    likeListBtn() {
      this.likeBtn = !this.likeBtn
    },
    couponLikeListBtn() {
      this.couponBtn = !this.couponBtn
    },
  },
}
</script>

<style lang="scss" scoped>
.coupon_wrap {position: fixed; right: 0; top: 100%; transform: translate(-50%,-120%); height: fit-content;
  .list {overflow: hidden; position: relative; width: 40rem; z-index: -1;
    &>li {width: 10rem; height: 12rem; background: #fffafa; border-radius: 1.5rem; margin: .5rem 0 .5rem calc(100% - 10rem);
      justify-content: center; align-items: center; display: flex; overflow: hidden;
      button {font-size: 3rem; width: 100%; height: 100%; position: relative; z-index: 2;
        &.xi-heart {color: #d83b3b;}
        &.xi-coupon {color: #468df7;}
      }
      .like_book {display: block; position: absolute; left: 100%; transition: .5s all; border-radius: 1.5rem 0 0 1.5rem; height: 88px;
      white-space: nowrap; cursor: grab;-ms-overflow-style: none;scrollbar-width: none; line-height: 78px;
      padding: .5rem; background: #ffecec; width: 30rem; z-index: -1;
      &::-webkit-scrollbar {display: none;}
        li {width: 6rem; margin: 0 .5rem; display: inline-block;}
        &.active {left: 0%; overflow-x: auto;}
      }
      .couponBtn {background: #468df7;}
    }
  }
}
</style>