<template>
    <header :class="{popup : popup === true}">
        <section class="section top-section">
            <ul class="top-nav">
                <li>
                    <a href="">HOME</a>
                </li>
                <li>
                    <a href="">COMIC</a>
                </li>
                <li>
                    <a href="">NOVEL</a>
                </li>
                <li>
                    <a href="">ESSAY</a>
                </li>
                <li>
                    <a href="">EDUCATION</a>
                </li>
            </ul>
            <ul class="users">
                <li>
                    <a href="">My page</a>
                </li>
                <li>
                    <a href="">cart</a>
                </li>
            </ul>
        </section>
        <section class="section sch-section">
            <div class="sch-wrap">
                <div class="sch-box">
                    <select name="" id="">
                        <option value="">All</option>
                    </select>
                    <input type="text" placeholder="">
                    <button class="sch_btn">Search</button>
                </div>
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
                <button class="goBtn">MORE {{bookType}} <i class="xi-trending-flat"></i></button>
            </div>
        </section>
    </header>
</template>

<script>
import BookClassWrap from './BookClassWrap.vue'
export default {
  components: { BookClassWrap },
  data () {
    return {
        bookType : "comic",
        popup : false
    }
  },
  methods: {
    activeBookList(type) {
        this.bookType = type.contentType
    },
    bookAnimation() {
        this.popup = !this.popup
    }
  }
}
</script>

<style lang="scss">
    header {
        &.popup {position: relative;
            &::after {}
        }
        .section {display: flex; justify-content: space-between;
            &.top-section {color: #fff; position: relative;
                &::after {display: block; content: ''; width: 100%; position: fixed; background: rgb(34, 146, 226); height: 4rem; z-index: -1; left: 0;}
            }
            &.sch-section {height: 90rem; align-items: baseline;}
        }
        .top-nav,.users {display: flex; align-items: center; padding: 1rem 0;
            li {font-size: 1.4rem; position: relative; padding-right: 1.5rem;
                &:not(:last-child) {
                    &::after {display: block; content: ''; width: 1px; height: .8rem; background: rgb(214, 214, 214); position: absolute; right: .65rem; top: 50%; transform: translateY(-50%);}
                }
            }
        }
        .sch-wrap {display: flex; padding: 1rem 3rem; align-items: center; margin: 0 auto; flex-wrap: wrap; margin-top: 3rem; position: relative;
            .sch-box {border: 3px solid rgb(34, 146, 226); border-radius: 5rem; width: 40rem; display: flex; align-items: center; height: 4rem; box-sizing: border-box; 
            overflow: hidden; background: rgb(34, 146, 226); margin: 0 auto;
                select {border-radius: 5rem 0 0 5rem; border: none; font-size: 1.3rem; width: 10rem;}
                input[type=text] {border: none; width: calc(100% - 17rem); height: 4rem;}
                button {width: 7rem; background: rgb(34, 146, 226); color: #fff; height: 4rem; display: inline-block;}
            }
            .sch-categoty {display: flex; justify-content: center;  width: 100%; margin-top: 2rem;
                li {padding: 1rem;
                    button {color: #fff; font-size: 3rem; text-shadow: 0px 0px 3px rgb(34, 146, 226); transition: .3s all;
                        &:hover { text-shadow: 0px 0px 8px rgb(34, 146, 226);}
                    }
                }
            }
            .goBtn {background: rgb(34, 146, 226); border-radius: 5rem; color: #fff; padding: 1rem 1.5rem 1rem 3rem; display: flex; align-items: center; position: absolute; right: 0; 
            top: 66rem;
                i {font-size: 3rem; margin-left: 2rem;}
            }
        }
    }
</style>