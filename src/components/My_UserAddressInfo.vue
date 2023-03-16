<template>
        <KakaoAddressPopup v-if="kakaoPopup" :addIndex="addIndex"/>
        <div class="check_row check_delivery" v-for="(user, index) in this.userData" :key="user">
            <strong class="title" v-if="user.normal === true">기본 배송지</strong>
            <div class="check_order_box" v-if="user.normal === true">
                <div class="left">
                    <div class="box">
                        <strong><i class="xi-maker"></i>{{user.addName}}</strong>
                    </div>
                    <div class="box">
                        <span>{{user.name}}</span>
                        <span>{{user.addPhone}}</span>
                    </div>
                    <div class="box">
                        <span>{{user.postcode}}</span>
                        <span>{{user.address}}</span>
                    </div>
                </div>
                <div class="right">
                    <div class="box">
                        <button type="button" @click="kakaoPopupBtn(index)" class="btn_move">기본배송지 수정</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="check_row check_advice_list delivery">
            <div class="delivery_title">
                <strong class="title">기타 배송지</strong>
            </div>
            <div class="check_advice_list_table">
                <ul class="check_advice_list_table_head">
                    <li class="size_1">배송지명</li>
                    <li class="size_2">받는 분</li>
                    <li class="size_2">연락처</li>
                    <li class="size_3">주소</li>
                    <li class="size_2">수정/삭제</li>
                    <li class="size_2">배송지</li>
                </ul>
                <ul class="check_advice_list_table_body"  v-for="(user, index) in this.userData" :key="user">
                    <li v-if="user.normal === false">
                        <ul class="check_advice_list_table_body_row">
                            <li class="size_1"><i class="xi-maker"></i><b>{{user.addName}}</b></li>
                            <li class="size_2">{{user.name}}</li>
                            <li class="size_2">{{user.addPhone}}</li>
                            <li class="size_3">{{user.postcode}}{{user.address}}</li>
                            <li class="size_2">
                                <button @click="kakaoPopupBtn(index)">수정</button>
                                <button @click="addressDelete(index)">삭제</button>
                            </li>
                            <li class="size_2"><button @click="propsAddressIndex(index)">기본 배송지로</button></li>
                        </ul>
                    </li>
                </ul>
                <button class="btn_add" @click="kakaoPopupBtn(undefined)">신규배송지 추가</button>
            </div>
        </div>
</template>

<script>
import KakaoAddressPopup from '@/components/KakaoAddressPopup.vue';
import userDataJs from '@/assets/data/guest.js'
import { useStore } from "vuex"

export default {
    setup() {
        const store = useStore();
        const addUserDate = (data) => store.commit("userAdd", data)

        return { addUserDate }
    },
    components : {
        KakaoAddressPopup
    },
    data() {
        return {
            kakaoPopup : false,
            userData : userDataJs.guest1.address,        
            addIndex : -1,
        }
    },
    methods : {
        kakaoPopupBtn(index) {
            this.kakaoPopup = !this.kakaoPopup
            this.addIndex = index
            console.log(this);
        },
        propsAddressIndex(index) {
            this.userData.map((v)=> {if(v.normal === true) v.normal = false})
            this.userData[index].normal = true
            this.$forceUpdate();
        },
        addressDelete(index) {
            this.userData.splice(index, 1)
        },
    },
};
</script>

<style lang="scss">
    .btn_move {color: #686868; font-size: 1.4rem; border: 1px solid #ccc; padding: .4rem 1rem; height: fit-content; display: flex; align-items: center;
            background: #fff;
        i {width: 0.85rem;}
    }
    .check_row {margin-bottom: 4rem;
        &.check_order {
            .title {font-size: 2.4rem; justify-content: left; display: flex; align-items: center; margin-bottom: 1.2rem;
                em {font-size: 2rem; color: #767676; margin-left: .6rem;}
            }
            .check_order_box {border: 1px solid #ccc; padding: 2.4rem; display: flex; align-items: center; justify-content: space-between; margin-bottom: 4rem;
                .box {font-size: 1.4rem; color: #333; display: flex; align-items: center;
                    &>strong {font-size: 1.5rem; margin-right: 2rem;}
                    input[type=checkbox] {width: 2rem; height: 2rem; border-color: #ccc;}
                    label {margin-left: .4rem; margin-right: 1.6rem;}
                    .select_btn_box {display: flex;
                        button {width: 10rem; padding: 1rem 0; border: 1px solid #ccc; background: #F5F6F7; margin-left: -1px;
                            &.active {background: #fff; border-color: #444; position: relative; z-index: 1;}
                        }
                    }
                    .date_box {
                        input {border: 1px solid #ccc; padding: .9rem 1.1rem; }
                    }
                    select {width: 12rem; margin-right: .8rem;}
                    .search_box {width: 22rem; position: relative;
                        input {width: 100%;}
                        button {background: #686868; width: 5rem; height: 100%; position: absolute; right: 0; top: 0; color: #fff;}
                    }
                    .normal {background: #686868; width: 5rem; color: #fff; padding: 1rem 0;}
                    .refresh {padding: 0 1.6rem; background: none; width: auto;}
                }
            }
        }
        .check_order_box {display: flex; justify-content: space-between; border-bottom: 1px solid #E8E8E8;
            .left {display: flex; align-items: flex-start; padding: 2.6rem 0;
                .box {min-width: 16rem; flex-wrap: wrap; display: flex; padding: 0 1.2rem; font-size: 1.5rem; align-items: center;
                    i {color: #ED1824; font-size: 2rem;}
                    span {font-weight: 300;
                        label {margin-right: 2.4rem;}
                        ul {margin-top: 1rem; 
                            li {
                                &:not(:first-child) {margin-top: .5rem;}
                            }
                        }
                    }
                    span,strong {display: flex; align-items: center; flex-wrap: wrap; width: 100%; text-align: left;
                        &:not(:last-child) {margin-bottom: .8rem;}
                    }
                }
            }
            .right {display: flex; align-items: center;
                .box {padding-right: 1.2rem;}
            }
        }
        &.check_order_list {
            .check_order_list_title {display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; margin-top: 4rem;
                .left {display: flex; align-items: center;
                    strong {font-size: 1.8rem;}
                    span {font-size: 1.4rem; color: #333; display: inline-block; margin: 0 1.5rem;}
                }
                .right {
                    .btn_move {border: none;}
                }
            }
            .check_order_list_content {border-top: 2px solid #444444;
                li {padding: 1.2rem; display: flex; justify-content: space-between; align-items: center;
                    &:not(:last-child) {border-bottom: 1px solid #E8E8E8;}
                    .info {display: flex; align-items: center;
                        .img_box {border: 1px solid #e8e8e8; width: 12rem; height: 12rem; display: flex; align-items: center; justify-content: center;}
                        .info_text {margin-left: 1.6rem;
                            * {display: block; text-align: left;}
                            em {font-size: 1.4rem; color: #686868; margin-bottom: .5rem;}
                        }
                    }
                    .detail {display: flex; align-items: center;
                        &>* {width: 14.4rem;}
                        .price {
                            * {display: block;}
                            span {font-size: 1.4rem;}
                            em {font-size: 1.2rem; color: #767676; text-decoration: line-through;}
                        }
                        .number {font-size: 1.4rem;}
                        .condition {font-size: 1.4rem; font-weight: 800; text-decoration: none;
                            &.ing {
                                span {font-weight: 400; text-decoration: underline;}
                            }
                            &.return {
                                span {color: #ED1824; text-decoration: underline;}
                            }
                            &.return_com {
                                span {color: #1E58C4;}
                            }
                            .btn_move {width: fit-content; margin: 0 auto; margin-top: .5rem; font-weight: 400;}
                        }
                    }
                }
            }
            .check_order_list_result {background: #F5F6F7; display: flex; align-items: center; padding: 2rem 2.3rem; justify-content: space-between;
                .left {
                    button {width: 11rem; padding: 1rem 0; background: #fff; border: 1px solid #ddd; margin-right: .5rem; font-size: 1.4rem; font-weight: 300;}
                }
                .right {display: flex; align-items: center;
                    span {font-size: 1.5rem; font-weight: 300;}
                    strong {font-size: 2.4rem; font-weight: 800; margin: 0 .4rem 0 4rem;}
                }
            }
        }
        &.check_advice_list {
            .check_advice_list_title {display: flex; align-items: center; justify-content: left; font-size: 1.4rem; margin-bottom: 1.2rem;
                span {font-weight: 300; margin-right: .5rem;}
            }
            .check_advice_list_table {font-size: 1.3rem;
                .check_advice_list_table_head {display: flex; align-items: center; border-top: 2px solid #444; padding: 1.2rem; justify-content: space-between;
                    border-bottom: 1px solid #444;
                    li {width: calc(100% / 7); text-align: center;}
                }
                .check_advice_list_table_body {
                    &>li {
                        ul {display: flex; align-items: center; border-bottom: 1px solid #E8E8E8; padding: 2rem 1.2rem;
                            li {width: calc(100% / 7);
                                &.left_2line {
                                    span {display: block;}
                                }
                                button {padding: 1rem 1.2rem; border: 1px solid #ddd;}
                                strong {margin-bottom: .4rem; display: block;
                                    &.done {color: #767676; font-weight: 400;}
                                }
                            }
                        }
                    }
                }
            }
            &.delivery {
                .delivery_title {display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1.2rem;
                    .title {font-size: 2.4rem;}
                    .tab_box {display: flex; align-items: center;
                        button {color: #686868; font-size: 1.4rem; position: relative;
                            &:not(:first-child) {margin-left: 2.5rem;
                                &::after {display: block; content: ''; background: #ccc; width: 1px; height: 1.2rem; position: absolute; top: 50%;
                                    transform: translateY(-50%); left: -1.25rem;
                                }
                            }
                        }
                    }
                }
                .check_advice_list_table {text-align: right; margin-bottom: 5rem;
                    .check_advice_list_table_body {
                        &>li {
                            ul {
                                li {display: flex; align-items: center; justify-content: center;
                                    i {font-size: 1.8rem;}
                                    &.size_1 {width: 10%;}
                                    &.size_2 {width: 15%;}
                                    &.size_3 {width: 35%;}
                                    button {margin: 0 .2rem;}
                                }
                            }
                            .empty {width: 100%; text-align: center; display: block; padding: 3rem 0; font-size: 1.5rem; border-bottom: 1px solid #e8e8e8;}
                        }
                    }
                    .check_advice_list_table_head  {
                        li {
                            &.size_1 {width: 10%;}
                            &.size_2 {width: 15%;}
                            &.size_3 {width: 35%;}
                        }
                    }
                    .btn_add {padding: .9rem 1.1rem; color: #fff; background: #686868; margin-top: 2rem;}
                }
            }
        }
        &.check_order_advice {
            .check_order_advice_title {margin-top: 4rem; padding-bottom: 1.2rem; display: flex; align-items: center; justify-content: left;
                border-bottom: 2px solid #444;
                strong {font-size: 2.4rem;}
                span {font-size: 1.4rem; columns: #333; font-weight: 300; margin-left: 1.6rem;}
            }
        .check_order_advice_row {padding: 2rem 1rem; border-bottom: 1px solid #E8E8E8;
            &>li {display: flex; align-items: baseline;
                &:not(:last-child) {margin-bottom: 2rem;}
                .form_name {width: 17rem; text-align: left;}
            }
            &.result {background: #F5F6F7; border-bottom: none; border-top: none;}
        }
    }
    &.check_delivery {
        .title {padding-bottom: 1.2rem; display: flex; align-items: center; justify-content: left;
            border-bottom: 2px solid #444; font-size: 2.4rem;
        }
    }
    .alert_gap {font-size: 2rem; font-weight: 600; margin: 4rem 0; line-height: 3.2rem;}
    .form_gap {border: 1px solid #E8E8E8; padding: 4rem 0; text-align: center; font-size: 1.5rem;
        .row {display: flex; justify-content: left; align-items: center; width: 100%; max-width: 36.3rem; margin: 0 auto;
            &:not(:last-child) {margin-bottom: 1.2rem;}
            strong {width: 8.3rem; text-align: left;}
            span {font-weight: 300;}
        }
    }
    
}
</style>