<template>
    <section class="section">
        <div class="sch-wrap">
            <SearchBox/>
        </div>
    </section>
    <section class="section">
        <div class="bookListWrap">
            <div class="book_box" v-for="book in bookData.filter((v) => v.content === $route.query.type)" :key="book">
                <div class="book">
                    <div class="book_front">
                        <span>
                            <img :src="book.imgSrc" alt="" class="device2">
                        </span>
                    </div>
                    <div class="page">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="book_back">
                        <span class="cover"></span>
                    </div>
                </div>
                <div class="book_info">
                    <ul class="info">
                        <li>
                            <span>제목</span>
                            <strong>{{book.title}}</strong>
                        </li>
                        <li>
                            <span>발행일</span>
                            <strong>{{book.date}}</strong>
                        </li>
                    </ul>
                    <div class="shopping">
                        <button class="xi-heart" v-if="book.like" @click="likeBtn(book)"></button>
                        <button class="xi-heart-o" v-else @click="likeBtn(book)"></button>
                        <button class="xi-cart" v-if="book.cart" @click="cartBtn(book)"></button>
                        <button class="xi-cart-o" v-else @click="cartBtn(book)"></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue'
import bookData from "./../assets/data/bookData.js"

export default {
    components : { SearchBox },
    name : 'contentPage',
    props: [''],
    data () {
        return {
            bookData
        }
    },
    methods : {
        likeBtn(book) {
            book.like = !book.like
        },
        cartBtn(book) {
            book.cart = !book.cart
            this.$parent.$parent.cartSum()
        }
    }
}
</script>

<style lang="scss" scoped>
.sch-wrap {margin-top: 7rem;}
.bookListWrap {display: flex; width: 100%; flex-wrap: wrap;
    .book_box {width: 50%; margin-bottom: 3rem; display: flex; margin-top: 5rem;
        img {display: block; box-shadow: 0px 10px 12px #00000014; transition: .3s all;}
        &:hover {
            .book {
                .book_front {transform: rotateY(-34deg) translateZ(8px);
                    img {display: block; box-shadow: 0px 1px 1px #00000011;}
                }
                .page {visibility: visible; opacity: 1; width: 100%; transition: all .3s;
                    &>span {position: absolute;}
                }
                .book_back {visibility: visible; opacity: 1; width: 100%; transition: all .3s;
                    span {position: absolute;}
                }
            }
        }
        .book {position: relative; width: 20rem; height: 29rem; -webkit-perspective: 1000px; perspective: 1000px; -webkit-transform-style: preserve-3d; transform-style: preserve-3d; margin-bottom: 2rem;
            .book_front {transform: rotateY(-0) translateZ(0);  position: absolute; width: 100%; height: 100%; z-index: 9999;
                & > span {
                    &:first-child {background-color: #eee;}
                }
            }
            .page {transition: all .1s; visibility: hidden; opacity: 0; width: 1px; position: absolute; z-index: -1;
                &>span {position: static;}
            }
            .book_back {z-index: -1; transition: all .1s; visibility: hidden; opacity: 0; width: 1px; -webkit-transform: rotateY(-15deg) translateZ(-8px); transform: rotateY(-15deg) translateZ(-8px);
                span {background: #ececec; position: static;}
            }
        }
        .book_info {padding: 6rem; width: calc(100% - 20rem); display: flex; flex-wrap: wrap; align-items: center;
            .info {
                li {padding: 1rem 0;
                    span {width: 5rem; display: inline-block;}
                }
            }
            .shopping {width: 100%;
                button {width: 50%; border: 1px solid #ddd; transition: .3s all; padding: 1rem; margin-left: -1px; font-size: 2rem;
                    &.xi-heart {color: #d83b3b;}
                    &.xi-cart {color: #468df7;}
                }
            }
        }
    }
}
.page > span {
    background: linear-gradient(to right, #e1ddd8 0%, #fffbf6 100%);
    -webkit-box-shadow: inset 0 -1px 2px rgba(50, 50, 50, 0.1), inset -1px 0 1px rgba(150, 150, 150, 0.2);
    box-shadow: inset 0 -1px 2px rgba(50, 50, 50, 0.1), inset -1px 0 1px rgba(150, 150, 150, 0.2);
    border-radius: 0 5px 5px 0;
}

.book_front { -webkit-transform: rotateY(-34deg) translateZ(8px); transform: rotateY(-34deg) translateZ(8px);}

.book_back { -webkit-transform: rotateY(-15deg) translateZ(-8px); transform: rotateY(-15deg) translateZ(-8px); }

.page span:nth-child(1) { -webkit-transform: rotateY(-28deg); transform: rotateY(-28deg); }

.page span:nth-child(2) { -webkit-transform: rotateY(-30deg); transform: rotateY(-30deg); }

.page span:nth-child(3) { -webkit-transform: rotateY(-32deg); transform: rotateY(-32deg); }

.page span:nth-child(4) { -webkit-transform: rotateY(-34deg); transform: rotateY(-34deg); }

.page span:nth-child(5) { -webkit-transform: rotateY(-36deg); transform: rotateY(-36deg); }

.book_back, .book_back span, .book_front, .book_front span { position: absolute; top: 0; left: 0; width: 100%; height: 100%; -webkit-transform-style: preserve-3d; transform-style: preserve-3d; }

.book_back, .book_front { -webkit-transform-origin: 0 100%; transform-origin: 0 100%; }

.book_front {  z-index : 55; transition: all 0.3s ease, }

.page, .page > span { position: absolute; top: 0; left: 0; z-index: -1; -webkit-transform-style: preserve-3d; transform-style: preserve-3d; }

.page { width: 100%; height: 98%; top: 1%; left: 3%; z-index: -1; }

.page > span { width: 100%; height: 100%; transform-origin: left center; transition-timing-function: ease; }
.book .book_front span img.device2 {position: absolute; width: 100%; height: 100%; z-index: 9999;}
</style>