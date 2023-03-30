<template>
    <div class="sch-box">
        <input type="text" v-model="searchText" @keyup.enter="submit" :placeholder="placeholder" @click="this.placeholder = ''">
        <button class="sch_btn" @click="submit">Search</button>
    </div>
</template>

<script>
import bookData from '@/assets/data/bookData'

export default {
    data() {
        return {
            bookData,
            searchText : "",
            placeholder : ""
        }
    },
    methods : {
        submit() {
            this.$root.itemSearch(this.searchText)
            this.$root.navActive = 'search'
        },
        placeholderCreation() {
            const bookLength = this.bookData.length-1;
            const randomBook = Math.floor(Math.random()*bookLength);
            this.placeholder = `${this.bookData[randomBook].title} | ${this.bookData[randomBook].date}`
        }
    },
    created() {
        this.placeholderCreation();
    }
}
</script>

<style>

</style>