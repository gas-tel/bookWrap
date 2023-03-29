<template>
    <section class="section sch-section">
        <div class="sch-wrap">
            <SearchBox/>
            <ul class="sch-categoty">
                <BookClassWrap 
                    menuTitle="comic"
                    contentType="comic"
                    :bookType=this.bookType
                />
                <BookClassWrap 
                    menuTitle="novel"
                    contentType="novel"
                    :bookType=this.bookType
                />
                <BookClassWrap 
                    menuTitle="essay"
                    contentType="essay"
                    :bookType=this.bookType
                />
                <BookClassWrap 
                    menuTitle="education"
                    contentType="education"
                    :bookType=this.bookType
                />
            </ul>
            <router-link :to="{
                name: 'contentPage', 
                query: {type: bookType}}
            " @click="contentActive(bookType)" :click="navActive"><button class="goBtn" >MORE {{bookType}} <i class="xi-trending-flat"></i></button></router-link>
        </div>
    </section>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue'
import BookClassWrap from './../components/BookClassWrap.vue'

export default {
  props : ['navActive'],
  components: { BookClassWrap, SearchBox },
  name : 'DefaultLayout',
  data () {
    return {
        bookType : "comic",
        popup : false,
    }
  },
  methods: {
    activeBookList(type) {
        this.bookType = type.contentType
    },
    bookAnimation() {
        this.popup = !this.popup
    },
    contentActive(bookType) {
        this.$parent.$parent.topNavBtn(bookType)
    },
  }
}
</script>

<style lang="scss">
    .section {display: flex; justify-content: space-between; 
        &.top-section {color: #fff; position: relative;
            &::after {display: block; content: ''; width: 100%; position: fixed; background: #000; height: 4.5rem; z-index: -1; left: 0;}
        }
        &.sch-section {height: calc(100vh - 4rem); overflow: hidden; background: #000; width: 100%; align-items: baseline; margin-top: 4rem;
            &::before {content: ""; position: fixed; left: 0; right: 0; top: 0; bottom: 0; z-index: 999999; background-image: url(./../assets/img/common/noise.png); background-repeat: repeat;
    opacity: 0.1; pointer-events: none; animation-name: noise; animation-duration: 0.2s; animation-iteration-count: infinite; animation-timing-function: linear;
}
        }
    }
    .top-nav,.users {display: flex; align-items: center; padding: 1rem 0;
        li {font-size: 1.4rem; position: relative; padding-right: 1.5rem;
            &:not(:last-child) {
                &::after {display: block; content: ''; width: 1px; height: .8rem; background: rgb(214, 214, 214); position: absolute; right: .65rem; top: 50%; transform: translateY(-50%);}
            }
            a.active {color: #d648fd;}
        }
    }
    .sch-wrap {display: flex; padding: 1rem 3rem; align-items: center; margin: 0 auto; flex-wrap: wrap; margin-top: 3rem; position: relative;
        .sch-box {border: 3px solid #992dfa; border-radius: 5rem; width: 40rem; display: flex; align-items: center; height: 4rem; box-sizing: border-box; 
        overflow: hidden; background: rgb(34, 146, 226); margin: 0 auto;
            select {border-radius: 5rem 0 0 5rem; border: none; font-size: 1.3rem; width: 10rem;}
            input[type=text] {border: none; width: calc(100% - 7rem); height: 4rem;}
            button {width: 7rem; background : #992dfa; height: 4rem; display: inline-block; color: #fff;}
        }
        .sch-categoty {display: flex; justify-content: center;  width: 100%; margin-top: 2rem; position: relative;
            li {padding: 1rem 3rem;
                button {transition: .3s all;
                    &:hover {text-shadow: 0px 0px 1px #d648fd; -webkit-text-stroke: 0 !important;}
                }
                &.active {
                    button:hover {text-shadow: none;}
                }
            }
        }
        .goBtn {background-image: linear-gradient(135deg, #d648fd 0%, #992dfa 100%); border-radius: 5rem; color: #fff; padding: 1rem 1.5rem 1rem 3rem; display: flex; align-items: center; position: absolute; right: 15rem; 
        top: 76rem;
            i {font-size: 3rem; margin-left: 2rem;}
        }
    }
    @keyframes noise {
    from {
        background-position: left top;
    }

    25% {
        background-position: right top;
    }

    50% {
        background-position: right bottom;
    }

    75% {
        background-position: left bottom;
    }

    to {
        background-position: left top;
    }
}
</style>