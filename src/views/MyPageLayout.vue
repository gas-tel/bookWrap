<template>
  <div class="mypage_warp">
    <div class="my_page_title">
        <h3 class="private_title">MY PAGE</h3>
        <div class="private_info">
            <span class="user">
                <strong><em>{{userData.guest1.name}}</em> 님</strong>
            </span>
        </div>
    </div>
    <div class="my_page_container">
        <ul class="my_page_side_menu">
            <li :class="{active : this.goList === 'ADDRESS INFO'}">
                <button @click="goBtn('ADDRESS INFO')">
                    <span>ADDRESS INFO
                    </span>
                    <i class="xi-angle-right-min"></i>
                </button>
            </li>
            <li :class="{active : this.goList === 'WISH LIST'}">
                <button @click="goBtn('WISH LIST')">
                    <span>WISH LIST</span>
                    <i class="xi-angle-right-min"></i>
                </button>
            </li>
            <li :class="{active : this.goList === 'BASKET'}">
                <button @click="goBtn('BASKET')">
                    <span>BASKET</span>
                    <i class="xi-angle-right-min"></i>
                </button>
            </li>
            <li :class="{active : this.goList === 'ORDER LIST'}">
                <button @click="goBtn('ORDER LIST')">
                    <span>ORDER LIST</span>
                    <i class="xi-angle-right-min"></i>
                </button>
            </li>
        </ul>
        <div class="my_page_content_list">
            <div class="my_page_content_row">
                <div class="check_box">
                    <strong class="title">{{goList}}</strong>
                </div>
                <AddressInfo v-if="goList === 'ADDRESS INFO'"/>
                <WishList v-if="goList === 'WISH LIST'"/>
                <BasketList v-if="goList === 'BASKET'"/>
                <OrderList v-if="goList === 'ORDER LIST'" :emitMsg="emitMsg"/>
            </div>
        </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import AddressInfo from '@/components/My_UserAddressInfo.vue'
import OrderList from '@/components/My_OrderList.vue'
import userData from './../assets/data/guest.js'
import WishList from '@/components/My_wishList.vue'
import BasketList from '@/components/My_ basket.vue'
import bookData from '@/assets/data/bookData.js'
import Footer from '@/components/FooterLayout.vue'

export default {
    props : ['type'],
    components : {
        AddressInfo,
        OrderList,
        WishList,
        BasketList,
        Footer
    },
    data() {
        return {
            userData,
            bookData,
            goList: 'ADDRESS INFO',
            page : this.$route.query.type,
            emitMsg : ""
        }
    },
    computed : {
    },
    methods : {
        goBtn(list) {
            this.goList = list
        },
        goBasket() {
            if(this.page==='BASKET') this.goList = this.page
        },
        basketSetting() {
            this.orderList = bookData.filter((v)=>v.order)
        },
    },
    watch : {
        $route(link){
            link.fullPath === '/myPage?type=BASKET' 
                ? this.goList = 'BASKET'
                : this.goList = 'ADDRESS INFO'
        },
    },
    mounted() {
        this.goBasket()
    }
}
</script>

<style lang="scss" scoped>
    .my_page_content_list {width: calc(100% - 25rem); margin-left: 5rem;
        .my_page_content_row {
            .check_box {
                    .title {color: #fff; background-color: #444; font-size: 2rem; padding: 2rem; display: block; text-align: left; margin-bottom: 5.4rem;}
                }
        }
    }
    .section.top-section::after {background: #fff !important;}
    .mypage_warp {background: #fff; min-height: 100vh; width: 128rem; margin: 0 0 0 10rem; margin-top: 10rem;
        .my_page_title {display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;
            .private_title {font-size: 3.6rem; font-weight: 800;}
            .private_info {display: flex; align-items: center;
                .user {font-size: 2rem;}
                .btn_move {margin-left: 1.1rem;}
            }
        }
        .my_page_container {display: flex; justify-content: left;
            .my_page_side_menu {border: 1px solid #e8e8e8; box-shadow: 0px 4px 12px #00000014;box-shadow: 0px 4px 12px #00000014; width: 20rem; height: fit-content; top: 16rem;
                padding: 1.4rem 0; position: sticky;
                li {padding: .8rem 2rem; font-size: 1.5rem;
                    a {display: flex; align-items: center; justify-content: space-between;}
                    i {opacity: 0; visibility: hidden; transition: .3s all;}
                    &.active {
                        font-weight: 800;
                        i {opacity: 1; visibility: visible;}
                    }
                }
            }
        }
    }
    @media(max-width: 1750px) {
        .mypage_warp {margin: 0 auto;}
    }
    @media(max-width: 1280px){
        .mypage_warp {width: 100%;
            .my_page_title {display: none;}
            .my_page_container {
                .my_page_side_menu {position: fixed; width: 100%; top: 4rem; z-index: 10; background: #fff;}
                .my_page_content_list {margin-left: 0; margin-top: 11rem; width: 100%;}
            }
        }
    }
</style>