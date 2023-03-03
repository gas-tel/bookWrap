<template>
  <header :class="{popup : popup === true}">
    <section class="section top-section">
        <ul class="top-nav">
            <li>
                <router-link to="./home">HOME</router-link>
            </li>
            <li>
                <router-link :to="{
                  name: 'contentPage', 
                  query: {type: 'comic'}}
                ">COMIC</router-link>
            </li>
            <li>
                <router-link :to="{
                  name: 'contentPage', 
                  query: {type: 'novel'}}
                ">NOVEL</router-link>
            </li>
            <li>
                <router-link :to="{
                  name: 'contentPage', 
                  query: {type: 'essay'}}
                ">ESSAY</router-link>
            </li>
            <li>
                <router-link :to="{
                  name: 'contentPage', 
                  query: {type: 'education'}}
                ">EDUCATION</router-link>
            </li>
        </ul>
        <ul class="users">
            <li>
                <a href="">My page</a>
            </li>
            <li>
                <a href="">cart</a>
            </li>
        </ul>
    </section>
  </header>
  <router-view/>
</template>

<script>
import "./assets/css/common.css"
import data from './assets/data/bookData'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      data
    }
  }
}
</script>

<style lang="scss">
  #app {margin: 0 auto;}

  header {
      &.popup {position: relative;}
  }
</style>
