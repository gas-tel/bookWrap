<template>
    <div class="sch-box">
        <input type="text" v-model="searchText" @keyup.enter="submit(searchText)" :placeholder="placeholder" @click="this.placeholder = ''">
        <button class="sch_btn" @click="submit(searchText)">Search</button>
    </div>
    <ul class="rank-box">
        <li v-for="(rank) in this.bookRankList.slice(0,5)" :key="rank" >
            <span @click="submit(rank.title)">{{rank.title}}</span>
        </li>
    </ul>
</template>

<script>
import bookData from '@/assets/data/bookData'

export default {
    data() {
        return {
            bookData,
            searchText : "",
            placeholder : "",
            bookRankList : [...bookData]
        }
    },
    methods : {
        submit(title) {
            title 
                ? this.$root.itemSearch(title)
                : this.$root.itemSearch(this.searchText)
            this.$root.navActive = 'search'
        },
        placeholderCreation() {
            const bookLength = this.bookData.length-1;
            const randomBook = Math.floor(Math.random()*bookLength);
            this.placeholder = `${this.bookData[randomBook].title} | ${this.bookData[randomBook].date}`
        },
        bookPowerRank() {
            this.bookRankList.sort((a,b)=>b.salesValue - a.salesValue)
        }
    },
    created() {
        this.placeholderCreation();
        this.bookPowerRank();

    }
}
</script>

<style>

</style>