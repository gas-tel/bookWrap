<template>
  <div class="mypage_warp">
    <div class="my_page_title">
        <h3 class="private_title">마이페이지</h3>
        <div class="private_info">
            <span class="user">
                <strong><em>{{userData.guest1.name}}</em> 님</strong>의 My page
            </span>
            <a href="" class="btn_move">회원정보 수정<i class="xi-angle-right-min"></i></a>
        </div>
    </div>
    <div class="my_page_container">
        <ul class="my_page_side_menu">
            <li class="active">
                <a href="">
                    <span>주문/배송조회</span>
                    <i class="xi-angle-right-min"></i>
                </a>
            </li>
            <li>
                <a href="">
                    <span>반품/환불현황</span>
                    <i class="xi-angle-right-min"></i>
                </a>
            </li>
            <li>
                <a href="">
                    <span>나의 상담 내역</span>
                    <i class="xi-angle-right-min"></i>
                </a>
            </li>
            <li class="">
                <a href="">
                    <span>배송지 정보</span>
                    <i class="xi-angle-right-min"></i>
                </a>
            </li>
            <li>
                <a href="">
                    <span>수신동의 내역</span>
                    <i class="xi-angle-right-min"></i>
                </a>
            </li>
            <li>
                <a href="">
                    <span>회원정보 수정/탈퇴</span>
                    <i class="xi-angle-right-min"></i>
                </a>
            </li>
        </ul>
        <UserAddressInfo/>
    </div>
  </div>
</template>

<script>
import UserAddressInfo from '@/components/UserAddressInfo.vue'
import userData from './../assets/data/guest.js'

export default {
    components : {
        UserAddressInfo,
    },
    data() {
        return {
            userData
        }
    }
}
</script>

<style lang="scss" scoped>
    .btn_move {color: #686868; font-size: 1.4rem; border: 1px solid #ccc; padding: .4rem 1rem; height: fit-content; display: flex; align-items: center;
            background: #fff;
        i {width: 0.85rem;}
    }
    .section.top-section::after {background: #fff !important;}
    .mypage_warp {background: #fff; height: 100vh; width: 128rem; margin: 0 auto; margin-top: 10rem;
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
</style>