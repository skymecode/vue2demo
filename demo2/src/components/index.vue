<template>
  <div>
  <Head></Head>
    <!-- <router-view></router-view> -->

  </div>
</template>

<style>

</style>

<script>
    import Note from './note.vue'
    import Head from './head.vue'
  export default {
    name: 'Index',
    components: {
          Head,
        },
    data() {
        return {

        show: false
      };
    },
    methods:{
        handleTabClick(activeName) {
            console.log(activeName)
            if(activeName=='first'){
                console.log('执行')
                this.show=true;
            }
  }
    }
  }

</script>


