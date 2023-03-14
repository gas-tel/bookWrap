import { createStore } from "vuex";
import userDatas from './../assets/data/guest.js'

export default createStore({
    state : {
        userDatas : userDatas.guest1.address
    },
    getters : {

    },
    mutations : {
        userAdd(data,dataAdd) {
            return data.userDatas.push(dataAdd);
        }
    }
})