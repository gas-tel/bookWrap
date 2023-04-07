<template>
  <div class="normal_row_container">
    <h2 class="section_title">상품 결제하기</h2>
    <div class="normal_row_wrap">
        <div class="normal_row_wrap_title">
            <strong>장바구니</strong>
        </div>
        <ul class="normal_row_wrap_content">
          <li v-for="data in bookData.filter((v)=>v.cart===true)" :key="data">
                <span class="item_check">
                    <input type="checkbox" name="" id="" checked @click="chkAdd(data,$event)" 
                     :class="[data.id]"/>
                </span>
              <span class="row_img_box">
                  <img :src="data.imgSrc" alt="">
              </span>
              <span class="item_info">
                  <em class="item_info_class">{{data.content}}</em>
                  <span class="item_info_title">{{data.title}}</span>
                  <span class="item_info_detail">
                      <em>{{data.date}}</em>
                      <em>{{data.info}}</em>
                  </span>
              </span>
              <span class="cost" data-rate="1">
                  <span class="origin_price" v-if="data.sale > 0">{{$filters.makeComma(data.price)}}원</span>
                  <strong class="price" v-if="data.sale > 0">{{$filters.makeComma(data.price-(data.price/data.sale))}}<em>원</em></strong>
                  <strong class="price" v-else>{{data.price}}<em>원</em></strong>
                  <span class="sale" v-if="data.sale > 0">({{data.sale}}% 할인)</span>
              </span>
          </li>
            <li class="basket_empty" v-if="bookData.filter((v)=>v.cart===true).length === 0">
                장바구니가 비어있습니다. <i class="xi-message-o"></i>
            </li>
        </ul>
    </div>
    <div class="normal_row_wrap">
        <div class="normal_row_wrap_title">
            <strong>주문자 정보</strong>
        </div>
        <ul class="normal_row_wrap_content user_info">
            <li>
                <strong>회원구분</strong>
                <span>{{user.sort}}</span>
            </li>
            <li>
                <strong>이름</strong>
                <span>{{user.name}}</span>
            </li>
            <li>
                <strong>휴대전화</strong>
                <span>{{user.phone}}</span>
            </li>
            <li>
                <strong>이메일</strong>
                <span>{{user.mail}}</span>
            </li>
        </ul>
    </div>
    <div class="normal_row_wrap">
        <div class="normal_row_wrap_title">
            <strong>배송지 정보</strong>
        </div>                                                                                                                                                                          
        <ul class="normal_row_wrap_content user_info type2 pd_10">
            <li class="radio_row">
                <strong>배송지 선택</strong>
                <span class="radio_wrap">
                    <span v-for="(add, index) in user.address" :key="add">
                        <input type="radio" name="shipInfo" :id="index" :checked="add.normal" @click="deliverAdd = index" onclick="">
                        <label :for="index" @click="deliverAdd = index">{{add.name}}{{index}}</label>
                    </span>
                </span>
            </li>
            <li>
                <strong>수령자 명</strong>
                <span v-if="user.address[deliverAdd]">{{user.address[deliverAdd].name}}</span>
            </li>
            <li>
                <strong>연락처</strong>
                <span v-if="user.address[deliverAdd]">{{user.address[deliverAdd].addPhone}}</span>
            </li>
            <li>
                <strong>배송지</strong>
                <span v-if="user.address[deliverAdd]">{{user.address[deliverAdd].postcode}}</span>
                <span v-if="user.address[deliverAdd]">{{user.address[deliverAdd].address}}</span>
            </li>
            <li>
                <strong>택배배송 요청사항</strong>
                <ul class="user_request">
                    <li>
                        <select name="deliverMsg" v-model="requestMsg">
                            <option :value="'직접입력'">직접입력</option>
                            <option :value="'현관문 앞에 놓아주세요.'">현관문 앞에 놓아주세요.</option>
                            <option :value="'경비실에 맡겨주세요.'">경비실에 맡겨주세요.</option>
                            <option :value="'택배함에 넣어주세요.'">택배함에 넣어주세요.</option>
                            <option :value="'배송전 연락바랍니다.'">배송전 연락바랍니다.</option>
                            <option :value="'초인종 누르지 마시고 노크해주세요.'">초인종 누르지 마시고 노크해주세요.</option>
                            <option :value="'수령자 본인에게 직접 배송해주세요.'">수령자 본인에게 직접 배송해주세요.</option>
                        </select>
                    </li>
                    <li v-if="this.requestMsg === '직접입력'">
                        <input v-model="userMsg" type="text" name="dlvryMemo" id="dlvryMemo" placeholder="50자 이내로 입력해주세요." autocomplete="off">
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="normal_row_wrap">
        <div class="normal_row_wrap_title">
            <strong>결제 정보</strong>
        </div>
        <ul class="normal_row_wrap_content user_info type2">
            <li class="radio_row">
                <strong>결제수단</strong>
                <span class="radio_wrap">
                    <input type="radio" name="paymentMethodCd" id="paymentMethodCd1" checked>
                    <label for="paymentMethodCd1">신용카드</label>
                    <input type="radio" name="paymentMethodCd" id="paymentMethodCd2" >
                    <label for="paymentMethodCd2">실시간 계좌이체</label>
                </span>
            </li>
            <li>
                <strong>구매금액</strong>
                <ul class="payment_list">
                    <li v-for="price in bookData.filter((v)=>v.order && v.cart)" :key="price">
                        <span>{{$filters.makeComma(price.title)}}</span>
                        <span >{{$filters.makeComma(price.price)}}<em>원</em></span>
                    </li>
                    <li class="payment_list_sum">
                        <strong>최종 결제금액</strong>
                        <strong>{{$filters.makeComma(priceSum)}}<em>원</em></strong>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    <p class="product_detail_header_alert">
        <input type="hidden" name="orderPrice" value="4444">  <!-- 주문금액 -->
        <input type="hidden" name="dlvryPrice" value="5000">  <!-- 배송금액 -->
        <input type="hidden" name="discountPrice" value="0">  <!-- 할인금액 -->
        <input type="hidden" name="paymentPrice" value="9444">  <!-- 결제금액 -->
        <strong>주문 내용을 모두 확인 하였으며, 결제에 동의합니다.</strong>
    </p>
    <button class="btn_max" type="button" @click="payment()">{{$filters.makeComma(priceSum)}}원 결제하기</button>
</div>
<div class="purchase_wrap deliver_wrap">
  <div class="btn_request">
      <span class="request_alert">주문 내용을 모두 확인 하였으며, 결제에 동의합니다.</span>
      <button class="buy" type="button" @click="payment()">결제하기</button>
  </div>
  <div class="deliver product">
      <div class="deliver_title">
          <span><i class="xi-basket"></i>주문상품 : {{itemLength}}</span>
      </div>
      <ul class="basket_list">
          <li v-for="price in bookData.filter((v)=>v.order && v.cart)" :key="price">
              <span>{{price.title}}</span>
              <em>1</em>
          </li>
      </ul>
  </div>
  <ul class="product_info">
      <li>
          <span class="title">배송비 (30,000원 이상 무료)</span>
          <span class="info" :class="{active : this.priceSum >= 30000}">
              5,000 
          </span>
      </li>
  </ul>
  <div class="product_cost">
      <div class="cost">
          <span class="title">최종결제금액</span>
          <strong class="info">{{$filters.makeComma(priceSum)}}<em>원</em></strong>
      </div>
  </div>
</div>
</template>

<script>
import bookData from '@/assets/data/bookData'
import user from '@/assets/data/guest'

export default {
  data () {
    return {
      bookData,
      user : user.guest1,
      deliverAdd : 0,
      priceSum : 0,
      orderList : [],
      add : [],
      itemLength : 0,
      requestMsg : "직접입력",
      userMsg : "",
    }
  },
  methods : {
    chkAdd(e,item) {
        this.itemLength = 0;
        const itemArr = document.querySelectorAll('.item_check input')
        itemArr.forEach((v)=>{ if(v.checked) this.itemLength++ })
        if(e && item){
            item.target.checked ? e.order = true || this.itemLength++ : e.order = false
        } else {
            this.bookData.map((v)=> {
                if(v.cart){
                    v.order = true
                }
            })
        }
        this.priceCalc()
    },
    priceCalc() {
        this.priceSum = 0;
        bookData.map((v)=>{
            if(v.cart && v.order) this.priceSum += v.price-(v.price/v.sale)
        })
        if(this.priceSum === 0) this.priceSum = 0
        else if(this.priceSum <= 30000) this.priceSum+=5000
    },
    payment() {
        const item = bookData.filter((v)=>v.order)
        this.orderList.push(item)
        alert(`${this.priceSum}원 결제 완료`)
        this.requestMsg === '직접입력' ? this.emitMsg = this.userMsg : this.emitMsg = this.requestMsg
        this.$parent.emitMsg = this.emitMsg;
        const itemArr = document.querySelectorAll('.item_check input')
        itemArr.forEach((el)=>{ if(el.checked === true){
            bookData.map((v)=>{
                if(el.className == v.id) {
                     v.cart = false
                     v.order = true
                }
            })
        }})
        this.$root.cartSum()
        this.priceCalc()
        this.$forceUpdate()
    }
  },
  mounted() {
    this.priceCalc()
    this.chkAdd()
  }
}
</script>

<style lang="scss" scoped>
.normal_row_container {width: 103rem; padding-left: 2rem;
  .section_title {width: 100%; text-align: left; font-size: 3.6rem; margin-top: 0rem!important;}
  .section_title {font-size: 3.8rem; letter-spacing: -.057rem; line-height: 4.5rem; margin: 10rem 0 3rem;}
  .normal_row_wrap {
        &:not(:last-child) {margin-bottom: 4rem;}
        .normal_row_wrap_title {display: flex; justify-content: space-between; align-items: center;
            strong {font-size: 2.4rem;
                span {font-size: 1.8rem;}
            }
            .general_chk {display: flex; align-items: center;
                input {border: 1px solid #ccc; width: 2rem; height: 2rem;}
                label {font-size: 2.4rem; font-weight: 700; margin-left: 1rem;}
            }
            .general_del {color: #686868; font-size: 1.4rem;
                button {background: none; border: none; cursor: pointer; margin-left: 2rem; position: relative;
                    &:not(:last-child) {
                        &::after {display: block; content: ''; font-size: 10px; position: absolute; width: 1px; height: 1.2rem; background: #ccc; top: 50%; 
                            right: -1.25rem; transform: translateY(-50% );}
                    }
                    &:hover {font-weight: 700;}
                }
            }
        }
        .normal_row_wrap_content {margin-top: 1.2rem; border-top: 2px solid #444;
            &.pd_10 {
              &>li {padding: 1rem 0 !important;}
            }
            .basket_empty {padding: 4rem; display: flex; justify-content: center;
                i {margin-top: -1.5rem;}
            }
            &>li {padding: 2rem 0; border-bottom: 1px solid #E8E8E8; display: flex; align-content: center;
                &>* {display: flex; align-items: center; justify-content: left; flex-wrap: wrap;}
                .name {width: 18rem;
                    strong {display: block; font-size: 1.5rem; width: 100%; text-align: left;}
                    em {font-size: 1.3rem;}
                    .item_info {width: calc(100% - 45rem);}
                }
                .content {width: calc(100% - 30rem); color: #444; font-size: 1.5rem; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; padding-right: 2rem;}
                .rate {width: 12rem;
                    li {
                        &.on {
                            .xi-star-o {color: #ED1824;
                                &::before {content: '\ea0f';}
                            }
                        }
                    }
                }
            }
            &.user_info {border-bottom: 1px solid #ddd;
                &>li {padding: 1rem 0; border-bottom: none; font-size: 1.5rem; color: #333; align-items: baseline;
                    &:first-child {padding-top: 2rem;}
                    &:last-child {padding-bottom: 2rem;}
                    &>strong {width: 17rem; padding-left: 1rem;}
                    &>span {font-weight: 300;}
                }
                &.type2 {
                    &>li {padding: 2rem 0;
                        &>span {flex-wrap: wrap;
                            em {width: 100%; text-align: left; margin-top: .8rem;}
                            &.phone {
                                em {width: auto; padding: 0 .5rem;}
                            }
                        }
                        .user_request {width: 100%; max-width: 56.4rem;
                            li {width: 100%; text-align: left; display: flex; align-items: center;
                                &:not(:last-child) {margin-bottom: .8rem;}
                                select, input[type=text] {width: 100%;}
                                input {padding-left: 1.5rem;}
                                input[type=checkbox] {border: 1px solid #ccc; width: 2rem; height: 2rem; border-radius: .2rem; margin-right: .4rem;}
                                label {font-size: 1.5rem; color: #333;}
                                .user_request_input_list {max-width: 32.5rem;
                                    li {display: flex;
                                        span {width: 14.5rem; color: #686868; font-size: 1.3rem;}
                                        input {width: calc(100% - 14.5rem);}
                                    }
                                }
                            }
                        }
                        .payment_list {max-width: 32.5rem;
                            li {display: flex; width: 100%; justify-content: space-between; margin-bottom: .8rem;
                                span {color: #686868; font-size: 1.3rem;}
                                input {width: calc(100% - 14.5rem);}
                                &.payment_list_sum {padding-top: 1.5rem; margin-bottom: 0; border-top: 1px solid #E8E8E8;}
                            }
                        }
                    }
                }
            }
        }
        .pagination {margin-top: 3rem;}
        .radio_row {background: #F5F6F7;}
        input {accent-color: #ED1B24;}
        .radio_wrap {display: flex; align-items: center;
          label {margin: 0 2rem 0 .5rem;}
        }
    }
    .form {width: calc(100% - 17rem); text-align: left;
        input[type=radio] {width: 2rem; height: 2rem;}
        label {margin: 0 2rem 0 .4rem; font-size: 1.5rem; font-weight: 300;}
        select {width: 20rem;}
        input[type=text] {width: 20rem;
            &.long {display: block; width: 43rem; margin-top: 2rem;}
            &.short {width: 10rem;}
        }
        button {color: #fff; font-size: 1.5rem; margin-right: 50rem; background: #686868; padding: .9rem 1.2rem; margin-left: -.3rem; white-space: nowrap;}
        em {font-size: 1.5rem;
            span {color: #686868;}
        }
    }
    .product_detail_header_alert {background: #EEEEEE; display: flex; width: 100%; justify-content: center; padding: 3rem 0; flex-wrap: wrap; margin-top: 4rem;
        strong {width: 100%; font-size: 2rem; text-align: center;}
        span {display: inline-block; margin-top: 1rem;}
    }
    .btn_max {background: #ED1824; color: #fff; width: 100%; padding: 1.8rem 0; font-size: 2rem; font-weight: 700; margin: 2rem 0 10rem;}
    
}
.purchase_wrap {top: 30rem; width: 33rem; border: 1px solid #ccc; padding: 3.6rem 2.4rem; height: fit-content; position: fixed; margin-left: 105rem;
      .product_name {
          .product_name_sub {font-size: 1.4rem; margin-top: 0;}
          .product_name_main {font-size: 1.8rem; letter-spacing: -.027rem;}
      }
      .product_info {padding: 1.5rem 0; margin-top: 4rem;
          li {display: flex; justify-content: space-between;
              .title {width: auto;}
          }
      }
      .product_cost {
          .cost {display: flex; justify-content: space-between;
              .title {width: auto;}
              .info {font-size: 2.8rem;
                  em {font-size: 1.8rem;}
              }
          }
      }
      .btn_request {position: absolute; width: 100%; left: 0; bottom: -18rem;
          button {font-size: 1.8rem; padding: 2rem 0;}
          .alert {font-size: 1.3rem; padding-right: 2rem;
              em {font-size: 1.2rem;}
              i {right: 1.5rem;}
          }
      }
      &.deliver_wrap {padding: 0;
          .deliver {background: #F5F6F7; padding: 2.4rem; color: #686868; font-size: 1.3rem;
              .deliver_title {display: flex; justify-content: space-between; align-items: center;
                  &>span {font-size: 1.5rem; color: #333; font-weight: 800; display: flex; align-items: center;
                      i {font-size: 1.8rem; margin-right: .5rem;}
                  }
                  button {font-size: 1.4rem; display: flex; align-items: center;}
              }
              .deliver_user {margin: 1rem 0;}
              .deliver_add {
                  span {display: block;}
              }
              &.product {background: #fff;
                  .deliver_title {margin-bottom: .8rem;}
                  .basket_list {font-size: 1.3rem; color: #686868;
                      li {display: flex; justify-content: space-between; margin: .4rem 0; font-weight: 200;}
                  }
              }
          }
          .product_info {margin: 0; padding: 2.4rem 0; margin: 0 2.4rem;}
          .product_cost {border-top: none; padding: 2.4rem;
              .cost {
                  .title {color: #ED1824;}
              }
          }
          .btn_request {bottom: -11rem; justify-content: center;
              span {color: #686868; font-size: 1.3rem; margin-bottom: 1.25rem;}
              .buy {width: 100%; font-size: 2rem;}
          }
      }
      .product_info, .product_cost {padding: 3rem 0; border-top: 1px solid #E8E8E8; margin-bottom: -1px;
            &:not(:last-child) {border-bottom: 1px solid #E8E8E8;}
            .title {color: #333; font-size: 1.5rem; width: 15rem; display: inline-block;}
            .info {color: #686868; font-size: 1.5rem; font-weight: 200;
                &.active {text-decoration: line-through ;}
            }
        }
        .product_info {
            li {
                &:not(:last-child) {margin-bottom: 1rem;}
            }
        }
        .product_cost {
            .figures {display: flex; align-items: center; margin-bottom: 3rem; padding-bottom: 3rem; border-bottom: 1px solid #E8E8E8;}
            .cost {display: flex; align-items: center;
                .info {color: #ED1824; font-size: 3.2rem; font-weight: 800;
                    em {font-size: 2rem; font-weight: 600; margin-left: .5rem;}
                }
            }
            .btn_request {margin-top: 2.5rem;}
        }
        .btn_request {display: flex; justify-content: space-between; flex-wrap: wrap;
        button {padding: 2.4rem 0; font-size: 2rem; font-weight: 500;
            &.buy {background: #ED1824; color: #fff; width: calc(50% - .4rem); }
            &.basket {border: 1px solid #444; color: #333; width: calc(50% - .4rem); }
            &.alert {background: #444; color: #fff; font-size: 1.8rem; width: 100%; margin-top: .8rem; position: relative; padding: 1.8rem 0; 
                opacity: 0; visibility: hidden; transition: .3s all;
                &.active {opacity: 1; visibility: visible;}
                em {font-size: 1.6rem; margin-left: 1.2rem; font-weight: 200; text-decoration: underline;}
                i {position: absolute; top: 50%; transform: translateY(-50%); right: 2rem;}
            }
        }
    }
  }
  .normal_row_wrap_content {
    .cost {justify-content: right !important; width: 30rem; flex-wrap: nowrap !important; align-items: flex-end !important; padding-bottom: 2rem;
      .origin_price {text-decoration: line-through; margin-block: .25rem;}
      .price {font-size: 2.5rem; padding-left: 1rem;}
      .sale {color: #ED1824; margin-block: .25rem;}
    }
  }
</style>