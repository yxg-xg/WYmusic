<template>
  <div class="song">
    <div class="songBg"></div>
    <div class="indistinct"></div>
    <div class="songMain">
      <div class="wyLogo"></div>
      <div class="opticalDiskWrap">
        <div class="opticalDisk ">
            <!--光碟-->
          <div class="songImgWrap" :style="{transform:deg}">
            <div class="songImg" ref="song" :class="{'a-circling':isCircling}"  >
              <img :src=songImg alt=""/>
            </div>
          </div>



            <!--光碟高亮部分-->
          <div class="song-light-wrap" :style="{transform:deg}">
            <div class="song-light" ref="song" :class="{'a-circling':isCircling}" ></div>
          </div>




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
        isCircling:false,
        deg:'',
        matrixArr:[]
      }
    },
    methods:{
      clickarea(){
        let matrix = "";
        this.startShow = !this.startShow;
        this.isCircling = !this.isCircling;
        var song = this.$refs.song;
        var songtr = window.getComputedStyle(song,null);
        var tr = songtr.getPropertyValue("transform");
        if(tr != "none"){
          this.matrixArr = tr
          //matrix=tr
          this.deg =matrix ;
        }else return

        console.log(this.matrixArr)
        console.log(tr)

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
