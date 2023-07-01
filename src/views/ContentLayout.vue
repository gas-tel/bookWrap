<template>
    <section class="section">
        <div class="sch-wrap">
            <SearchBox/>
        </div>
    </section>
    <section class="section bookList_bg">
        <div class="bookListWrap">
            <div class="info" v-if="currentRoute.query.text">
                <div class="empty" v-if="bookData.filter((v)=>v.title.match(currentRoute.query.text))==0 ">
                    "<strong>{{currentRoute.query.text}}</strong>" 에 대한 검색결과가 없습니다.
                </div>
            </div>
            <div class="serch_wrap" v-if="currentRoute.query.text == null && $route.query.type == 'search'">
                <div class="alert">
                    <i class="xi-search"></i>
                    <strong>검색어를 입력해 주세요</strong>
                </div>
            </div>
            <div class="serch_wrap" v-if="currentRoute.query.text">
                <div class="book_box" v-for="book in bookData.filter((v)=>v.title.match(currentRoute.query.text))" :key="book">
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
                            <strong>{{book.title}}</strong>
                        </li>
                        <li>
                            <span>{{book.salesValue}}
                                <i class="xi-caret-up-min" v-if="book.salesValue > 30"></i>
                                <i class="xi-caret-down-min" v-else></i>
                                 · {{book.date}} · {{book.content}}</span>
                        </li>
                        <li v-if="book.sale > 0">
                            <span class="sale">{{book.sale}}%</span>
                            <strong>{{book.price-(book.price/book.sale)}}원</strong> 
                            <span class="salePec">{{book.price}}원</span>
                        </li>
                        <li v-else>
                            <strong>{{book.price}}원</strong> 
                        </li>
                        <li class="book_info">
                            {{book.info}}
                        </li>
                    </ul>
                    <div class="shopping">
                        <button class="xi-heart" v-if="book.like" @click="likeBtn(book)">찜하기</button>
                        <button class="xi-heart-o" v-else @click="likeBtn(book)">찜하기</button>
                        <button class="xi-cart" v-if="book.cart" @click="cartBtn(book)">장바구니</button>
                        <button class="xi-cart-o" v-else @click="cartBtn(book)">장바구니</button>
                    </div>
                </div>
            </div>
                </div>
            <div v-else class="book_box" v-for="book in bookData.filter((v) => v.content === $route.query.type)" :key="book">
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
                            <strong>{{book.title}}</strong>
                        </li>
                        <li>
                            <span>{{book.salesValue}}
                                <i class="xi-caret-up-min" v-if="book.salesValue > 30"></i>
                                <i class="xi-caret-down-min" v-else></i>
                                 · {{book.date}} · {{book.content}}</span>
                        </li>
                        <li v-if="book.sale > 0">
                            <span class="sale">{{book.sale}}%</span>
                            <strong>{{$filters.makeComma(book.price-(book.price/book.sale))}}원</strong> 
                            <span class="salePec">{{$filters.makeComma(book.price)}}원</span>
                        </li>
                        <li v-else>
                            <strong>{{$filters.makeComma(book.price)}}원</strong> 
                        </li>
                        <li class="book_info">
                            {{book.info}}
                        </li>
                    </ul>
                    <div class="shopping">
                        <button class="xi-heart" v-if="book.like" @click="likeBtn(book)">찜하기</button>
                        <button class="xi-heart-o" v-else @click="likeBtn(book)">찜하기</button>
                        <button class="xi-cart" v-if="book.cart" @click="cartBtn(book)">장바구니</button>
                        <button class="xi-cart-o" v-else @click="cartBtn(book)">장바구니</button>
                    </div>
                </div>
            </div>
        </div>
        <ContentSideBox/>
    </section>
        <Footer/>
</template>


<script>
import SearchBox from '@/components/SearchBox.vue'
import bookData from "@/assets/data/bookData.js"
import ContentSideBox from '@/components/ContentSideBox.vue'
import Footer from '@/components/FooterLayout.vue'

export default {
    components : { SearchBox, ContentSideBox, Footer },
    name : 'contentPage',
    props: ['text'],
    data () {
        return {
            bookData,
            searchText : "",
            currentRoute : this.$router.currentRoute,
            bookRanked : 0
        }
    },
    methods : {
        likeBtn(book) {
            book.like = !book.like
        },
        cartBtn(book) {
            book.cart = !book.cart
            this.$parent.$parent.cartSum()
        },
        contentBtn(bookType) {
            this.$parent.topNavBtn(bookType)
        },
    },
}
</script>

<style lang="scss" scoped>
// .bookList_bg {position: relative;
//     &::after {display: block; content: ''; position: absolute; 
//     width: 100vw;
//     height: 139vh;
//     left: 50%;
//     top: calc(50% + 8.1rem);
//     transform: translate(-50%,-50%);
//     background-image: linear-gradient(-225deg, #CBBACC 0%, #2580B3 100%);}
// }
.sch-wrap {margin-top: 7rem; z-index: 5;}
.alert {display: flex; align-items: baseline; font-size: 3rem; justify-content: center; width: 100%;
    strong {margin-left: 2rem;}
}
.bookListWrap {padding-top: 19rem;}
.bookListWrap,.serch_wrap {display: flex; width: 100%; flex-wrap: wrap; min-height: 50vh; position: relative; z-index: 5;
    .book_box {background: #fff; width: calc(50% - 2rem); height: fit-content; display: flex; margin : 1rem; border-radius: 2rem; padding: 0 3rem; border: 1px solid #d5d5d5; 
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
        .book {position: relative; width: 14rem; height: auto; -webkit-perspective: 1000px; perspective: 1000px; -webkit-transform-style: preserve-3d; transform-style: preserve-3d;
            .book_front {transform: rotateY(-0) translateZ(0);  position: absolute; width: 100%; height: 100%; z-index: 9999;
                & > span {
                    &:first-child {background-color: #eee;  border: 1px solid #ddd}
                }
            }
            .page {transition: all .1s; visibility: hidden; opacity: 0; width: 1px; position: absolute; z-index: -1;
                &>span {position: static;}
            }
            .book_back {z-index: -1; transition: all .1s; visibility: hidden; opacity: 0; width: 1px; -webkit-transform: rotateY(-15deg) translateZ(-8px); transform: rotateY(-15deg) translateZ(-8px);
                span {background: #ececec; position: static;}
            }
        }
        .book_info {padding: 3rem 0 3rem 5rem; width: 100%; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between;
            .info {width: calc(100% - 20rem);
                li {padding: 1rem 0;
                    span {display: inline-block;}
                    strong {font-size: 2rem;}
                    &.book_info {letter-spacing: 0; word-break: keep-all; display: -webkit-box; font-size: 1.3rem;
    white-space: normal; overflow: hidden; text-overflow: ellipsis; height: 6rem; padding-top: 1rem; -webkit-line-clamp: 3; -webkit-box-orient: vertical;}
                    .sale {color: #4dac27; margin-right: .5rem; font-size: 2rem;}
                    .salePec {font-size: 1.3rem; text-decoration: line-through; margin-left: .5rem;}
                }
            }
            .xi-caret-up-min {color: #d83b3b;}
            .xi-caret-down-min {color: #468df7;}
            .shopping {width: 12rem; display: flex; flex-wrap: wrap;
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

.book_back, .book_back span, .book_front, .book_front span { position: absolute;; top: 2rem; left: 0; width: 100%; height: 18rem; -webkit-transform-style: preserve-3d; transform-style: preserve-3d; }

.book_back, .book_front { -webkit-transform-origin: 0 100%; transform-origin: 0 100%; }

.book_front {  z-index : 55; transition: all 0.3s ease, }

.page, .page > span { position: absolute; top: 2rem; left: 0; z-index: -1; -webkit-transform-style: preserve-3d; transform-style: preserve-3d; }

.page { width: 100%; height: 17.5rem; top: 2.3rem; left: 3%; z-index: -1; }

.page > span { width: 100%; height: 100%; transform-origin: left center; transition-timing-function: ease; }
.book .book_front span img.device2 {position: absolute; width: 100%; height: 18rem; z-index: 9999;}
@media(max-width: 1280px) {
    .bookListWrap,.serch_wrap {
        .book_box {width: 100%;
            .book_info {padding: 3rem 0 3rem 2rem; width: 100%;
                .info {width: 100%;}
                .shopping {width: 100%; margin-top: 2rem;
                    button {max-width: 14rem;
                        &:first-child {margin-bottom: 0;}
                    }
                }
            }
        }
    }   
}

</style>