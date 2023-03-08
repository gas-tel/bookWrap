<template>
  <div class="kakao_popup_wrap">
    <ul class="check_order_advice_row">
        <li>
            <strong class="form_name">새로운 배송지</strong>
            <span class="form">
                <input type="text" v-model="postcode" placeholder="우편번호">
                <input type="button" @click="execDaumPostcode()" value="우편번호 찾기">
                <input type="text" id="address" placeholder="주소" :value="address" class="long">
            </span>
        </li>
    </ul>
    <div class="check_box">
        <button class="cancel" @click="popupCancel()">취소</button>
        <button class="save">저장</button>
    </div>
  </div>
</template>

<script>
export default {
data() {
    return {
      postcode: "",
      address: "",
      extraAddress: "",
    };
  },
  methods: {
  popupCancel() {
    this.$parent.kakaoPopupBtn()
  },
    execDaumPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          if (this.extraAddress !== "") {
            this.extraAddress = "";
          }
          if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            this.address = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.address = data.jibunAddress;
          }
 
          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === "R") {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
              this.extraAddress += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== "" && data.apartment === "Y") {
              this.extraAddress +=
                this.extraAddress !== ""
                  ? `, ${data.buildingName}`
                  : data.buildingName;
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.extraAddress !== "") {
              this.extraAddress = `(${this.extraAddress})`;
            }
          } else {
            this.extraAddress = "";
          }
          // 우편번호를 입력한다.
          this.postcode = data.zonecode;
        },
      }).open();
    },
  },
}
</script>

<style lang="scss">
.kakao_popup_wrap {position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); padding: 2rem; background: #fff;
    border: 1px solid #ddd; border-radius: .5rem;
    .check_order_advice_row {padding: 2rem 1rem; border-bottom: 1px solid #E8E8E8;
        &>li {display: flex; align-items: baseline;
            &:not(:last-child) {margin-bottom: 2rem;}
            .form_name {width: 17rem; text-align: left;}
        }
        &.result {background: #F5F6F7; border-bottom: none; border-top: none;}
    }
    .check_box {display: flex; align-items: center; padding: 1rem 0 0; justify-content: center;
        button {padding: 1rem 2rem; border: 1px solid #ddd; margin: 0 .5rem;
            &.save {background: #686868; color: #fff; border: none;}
        }
    }
}
.form {
    input[type=text].long {display: block; width: 40rem; margin-top: 2rem;}
    input[type=button] {height: 3.65rem; line-height: 0.428571; color: #fff; font-size: 1.5rem; background: #686868; padding: 0.9rem 1.2rem; margin-left: -0.3rem; white-space: nowrap;}
}
</style>