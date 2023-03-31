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
        <button class="xi-coupon"></button>
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
      likeBtn : false
    }
  },
  methods : {
    likeListBtn() {
      this.likeBtn = !this.likeBtn
    }
  }
}
</script>

<style lang="scss" scoped>
.coupon_wrap {position: sticky; right: 0; top: 50%; transform: translateY(-50%); height: fit-content;
  .list {overflow: hidden; position: relative; width: 40rem;
    &>li {width: 10rem; height: 12rem; background: #fffafa; border-radius: 1.5rem; margin: .5rem 0 .5rem calc(100% - 10rem);
      justify-content: center; align-items: center; display: flex; overflow: hidden;
      button {font-size: 3rem; width: 100%; height: 100%;
        &.xi-heart {color: #d83b3b;}
        &.xi-coupon {color: #468df7;}
      }
      .like_book {display: block; position: absolute; left: 100%; transition: .5s all; white-space: nowrap;
        li {width: 6rem; margin: 0 .5rem; display: inline-block;}
        &.active {left: 0%; width: 30rem; overflow-x: scroll;}
      }
    }
  }
}
</style>