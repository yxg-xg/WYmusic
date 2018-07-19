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
  var difference_matrix
  export default{
    name: 'song',
    data(){
      return{
        songImg:require("@/assets/img/songBg/thatGirl.webp"),
        startShow:true,
        isCircling:false,
        deg:'',
        arr_matrix_sub:[],
        df_matrixs_one:"",
        df_matrixs_two:0,
        df_matrixs_three:"",
        df_matrixs_four:""
      }
    },
    methods:{
      clickarea(){
        var song = this.$refs.song;
        var songtr = window.getComputedStyle(song,null);
        var matrix = songtr.getPropertyValue("transform");

        this.startShow = !this.startShow;
        this.isCircling = !this.isCircling;
        //截取matrix前4个数据
        let matrix_sub = matrix.substring(7,46);
        //split() 使用逗号分割字符串成数组
        this.arr_matrix_sub = matrix_sub.split(",");
        //1减去matrix的差值(0deg) = matrix(1, 0, 0, 1, 0, 0)




        if(matrix != "none"){
          this.df_matrixs_one = this.df_matrixs_one - -(1- this.arr_matrix_sub[0]);
          this.df_matrixs_two = this.df_matrixs_two +this.arr_matrix_sub[1];
          //console.log(this.df_matrix_one)
          this.deg=matrix

        }else return


        console.log(this.df_matrixs_two)


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
