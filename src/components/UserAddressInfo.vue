<template>
  <div class="my_page_content_list">
    <div class="my_page_content_row">
        <div class="check_box">
            <strong class="title">배송지 정보</strong>
        </div>
        <div class="check_row check_delivery">
            <strong class="title">기본배송지</strong>
            <div class="check_order_box">
                <div class="left">
                    <div class="box">
                        <strong><i class="xi-maker"></i>우리집</strong>
                    </div>
                    <div class="box">
                        <span>홍길동</span>
                        <span>010-5555-6666</span>
                    </div>
                    <div class="box">
                        <span>(34561)</span>
                        <span>대전광역시 유성구 문지로 282-19 (주)플랜아이</span>
                    </div>
                </div>
                <div class="right">
                    <div class="box">
                        <a href="" class="btn_move">기본배송지 수정</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="check_row check_advice_list delivery">
            <div class="delivery_title">
                <strong class="title">기본배송지</strong>
                <div class="tab_box">
                    <button>선택항목을 기본배송지로</button>
                    <button>선택항목 삭제</button>
                </div>
            </div>
            <div class="check_advice_list_table">
                <ul class="check_advice_list_table_head">
                    <li class="size_1"><input type="checkbox" name="" id=""></li>
                    <li class="size_1">배송자명</li>
                    <li class="size_2">받는 분</li>
                    <li class="size_2">연락처</li>
                    <li class="size_3">주소</li>
                    <li class="size_2">수정/삭제</li>
                </ul>
                <ul class="check_advice_list_table_body">
                    <li>
                        <ul class="check_advice_list_table_body_row">
                            <li class="size_1"><input type="checkbox" name="" id=""></li>
                            <li class="size_1"><i class="xi-maker"></i><b>친정집</b></li>
                            <li class="size_2">홍길동</li>
                            <li class="size_2">010-1111-2222</li>
                            <li class="size_3">(34561)대전광역시 유성구 문지로 282-19 (주)플랜아이</li>
                            <li class="size_2">
                                <button>수정</button>
                                <button>삭제</button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class="check_advice_list_table_body_row">
                            <li class="size_1"><input type="checkbox" name="" id=""></li>
                            <li class="size_1"><i class="xi-maker"></i><b>친정집</b></li>
                            <li class="size_2">홍길동</li>
                            <li class="size_2">010-1111-2222</li>
                            <li class="size_3">(34561)대전광역시 유성구 문지로 282-19 (주)플랜아이</li>
                            <li class="size_2">
                                <button>수정</button>
                                <button>삭제</button>
                            </li>
                        </ul>
                    </li>
                </ul>
                <button class="btn_add">신규배송지 추가</button>
            </div>
            <div class="check_advice_list_table">
                <ul class="check_advice_list_table_head">
                    <li class="size_1"><input type="checkbox" name="" id=""></li>
                    <li class="size_1">배송자명</li>
                    <li class="size_2">받는 분</li>
                    <li class="size_2">연락처</li>
                    <li class="size_3">주소</li>
                    <li class="size_2">수정/삭제</li>
                </ul>
                <ul class="check_advice_list_table_body">
                    <li>
                        <span class="empty">현재 배송지가 없습니다. “신규배송지 추가”를 눌러 추가해주세요. </span>
                    </li>
                </ul>
                <button class="btn_add">신규배송지 추가</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .my_page_content_list {width: calc(100% - 25rem); margin-left: 5rem;
        .my_page_content_row {
            .check_box {
                    .title {color: #fff; background-color: #444; font-size: 2rem; padding: 2rem; display: block; text-align: left; margin-bottom: 1.4rem;}
                }
                .order_turn {display: flex; justify-content: space-between; margin-bottom: 4rem;
                    li {width: calc(33.3333% - 1rem); background: #F5F6F7; padding: 2.1rem 3.2rem; display: flex; align-items: center; justify-content: space-between;
                        .left {display: flex; align-items: center;
                            i {background: #A7B0B9; width: 4.8rem; height: 4.8rem; border-radius: 50%; color: #fff; display: flex; align-items: center; 
                                font-size: 2.2rem; justify-content: center;}
                            span {font-size: 1.8rem; font-weight: 500; margin-left: .8rem;}
                        }
                        .right {
                            strong {font-size: 1.8rem;}
                        }
                    }
                    &.col2 {
                        li {width: calc(50% - 1rem);}
                    }
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
                    .title {margin-top: 4rem; padding-bottom: 1.2rem; display: flex; align-items: center; justify-content: left;
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
            &.form {min-height: 60rem; padding-bottom: 10rem;
                .alert {width: 50rem; border: 1px solid #ddd; padding: 5rem 3rem;
                    strong {display: block;}
                    span {font-size: 1.4rem;}
                }
                .row {display: flex; align-items: center; justify-content: center; width: 30rem; margin: 1rem 0;
                    span {width: 10rem; text-align: left; font-size: 1.4rem; font-weight: 200;}
                    input,strong {width: 20rem;}
                    &.phone {display: flex; align-items: center;
                        input {width: 15rem;}
                        button {width: 5rem; justify-content: center; margin: 0;}
                    }
                }
                form {text-align: center; margin: 2rem 0; display: flex; align-items: center; justify-content: center;}
                .idForm {display: none; justify-content: center; width: 51rem; margin: 0 auto; flex-wrap: wrap; padding: 2rem 10rem; position: relative;
                    button {margin-top: 3rem; display: flex; align-items: center;}
                    &::after {display: block; content: '\e97a'; font-family: 'xeicon'; font-size: 30rem; position: absolute; color: #A7B0B9; z-index: -1; right: -10rem; bottom: 0rem; transform: translate(50%, 50%);}
                    &.active {display: flex;}
                }
            }
        }
    }
</style>