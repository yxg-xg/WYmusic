<template>
  <div class="song">
    <div class="songBg"></div>
    <div class="indistinct"></div>
    <div class="songMain">
      <div class="wyLogo"></div>
      <div class="opticalDiskWrap">
        <div class="opticalDisk ">
          <transition name="a-circling">
            <div class="songImg" :class="{'a-circling':isCircling}">
              <img :src=songImg alt=""/>
            </div>
          </transition>

          <transition name="a-circling">
            <div class="song-light" :class="{'a-circling':isCircling}"></div>
          </transition>


          <div class="m-start" v-show="startShow">

          </div>
        </div>
        <div class="m-song-clickarea" @click="clickarea"></div>
      </div>
      <div class="broadcaster"></div>

    </div>
  </div>

</template>
<script>
  export default{
    name: 'song',
    data(){
      return{
        songImg:require("@/assets/img/songBg/thatGirl.webp"),
        startShow:true,
        isCircling:true,

      }
    },
    methods:{
      clickarea(){
        this.startShow = !this.startShow;
        this.isCircling = !this.isCircling;
        console.log()
      }
    },
    created:function(){
      console.log('song')
    }
  }
</script>
<style lang="less" scoped src="./song.less">
  //@import "song.css"
</style>
