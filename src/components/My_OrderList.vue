<template>
  <div class="check_box">
    <ul class="order_turn">
        <li>
            <span class="left">
                <i class="xi-message-o"></i>
                <span>주문접수</span>
            </span>
            <strong>{{this.orderList.length}}</strong>
        </li>
        <li>
            <span class="left">
                <i class="xi-truck"></i>
                <span>배송중</span>
            </span>
            <strong>0</strong>
        </li>
        <li>
            <span class="left">
                <i class="xi-check"></i>
                <span>배송완료</span>
            </span>
            <strong>0</strong>
        </li>
    </ul>
  </div>
  <div class="check_row check_order_list">
    <div class="check_order_list_title">
        <div class="left">
            <span>주문번호 5DDBB4</span>
        </div>
        <div class="right" v-if="this.emitMsg === ''">
            <span>배송 요청 사항 : 없음 </span>
        </div>
        <div class="right" v-else>
            <span>배송 요청 사항 : {{this.emitMsg}}</span>
        </div>
    </div>
    <ul class="check_order_list_content">
        <li v-for="order in orderList" :key="order">
            <span class="info">
                <span class="img_box">
                    <img :src="order.imgSrc" alt="">
                </span>
                <span class="info_text">
                    <em>출판일 : {{order.date}}</em>
                    <strong>{{order.title}}</strong>
                </span>
            </span>
            <span class="detail">
                <span class="price">
                    <span>{{$filters.makeComma(order.price - (order.price/order.sale))}}</span>
                    <em>{{$filters.makeComma(order.price)}}</em>
                </span>
                <span class="number">{{order.content}}</span>
                <strong class="condition ing">주문접수</strong>
            </span>
        </li>
    </ul>
    <div class="check_order_list_result">
        <div class="left">
            <button>주문취소</button>
        </div>
        <div class="right">
            <span>총 결제금액</span>
            <strong>{{$filters.makeComma(orderPriceSum)}}</strong>
            <em>원</em>
        </div>
    </div>
</div>
</template>

<script>
import orderData from '@/assets/data/bookData'

export default {
  props : ['emitMsg'],
  data() {
    return {
        orderData,
        orderList : [],
      orderPriceSum : 0,
    }
  },
  methods : {
        orderCheck() {
            orderData.map((v)=> {
                if(v.order && v.cart === false) {
                    this.orderList.push(v)
                    this.orderPriceSum += (v.price-(v.price/v.sale))
                }
            })
            if(this.orderPriceSum === 0) this.orderPriceSum = 0
            else if(this.orderPriceSum <= 30000) this.orderPriceSum+=5000
        }
    },
    created() {
        this.orderCheck();
    }
}
</script>

<style lang="scss" scoped>
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
                      .img_box {border: 1px solid #e8e8e8; width: 12rem; height: 12rem; display: flex; align-items: center; justify-content: center;
                        img {max-height: 100%; max-width: 100%;}
                      }
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
</style>