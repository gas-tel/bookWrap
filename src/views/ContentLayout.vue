<template>
    {{ $route.query.type }}
</template>

<script>
export default {
    name : 'contentPage',
    props: ['content'],
    data () {
        return {
            contentType : this.content
        }
    },
    created(){
    }
}
</script>

<style>

</style>