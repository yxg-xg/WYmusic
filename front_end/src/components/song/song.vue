<template>
  <div class="song">
    <div class="songBg"></div>
    <div class="indistinct"></div>
    <div class="songMain">
      <div class="wyLogo"></div>


    </div>
  </div>

</template>
<script>
  export default{
    name: 'song',
    data(){
      return{

      }
    },
    methods:{},
    created:function(){
      console.log('song')
    }
  }
</script>
<style lang="css" scoped>
  @import "song.css"
</style>
