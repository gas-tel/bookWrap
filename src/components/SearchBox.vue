<template>
    <div class="sch-box">
        <input type="text" placeholder="" v-model="searchText" @keyup.enter="submit">
        <button class="sch_btn" @click="submit">Search</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchText : ""
        }
    },
    methods : {
        submit() {
            this.$root.itemSearch(this.searchText)
            this.$root.navActive = 'search'
        }
    }
}
</script>

<style>

</style>