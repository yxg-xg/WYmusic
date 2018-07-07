<template>
  <div class="hello">
    <div class="hello-header">
      <div class="header">
        <h1>网易云音乐</h1>
      </div>
      <nav class="u-tab f-bd-btm f-bd">
        <li class="tabtitle" v-for="(tabtitle,index) in tabtitles" @click="tabClick(index)" :class="{'z-selected':index==isActive}">
          <div class="tabtxt">
            <span>{{tabtitle.tabtxt}}</span>
          </div>
        </li>
      </nav>
    </div>
    <div class="tabCon">
      <div class="tabConList" v-show="tabConListShow===0">
        <h2 class="tabConListTitle">推荐歌单</h2>
        <div class="tabConListMain">
          <!--第一个ul-->
          <div class="tabCon_ul clearfix">
            <a href="" class="tabCon_li"v-for="(tabConLi,index) in tabConLis" v-show="tabConLis.length-3>index">
              <div class="tabConImg">
                <img :src="tabConLi.tabConImgSrc" alt=""/>
              </div>
              <p class="tabConTxt">
                {{tabConLi.tabConTxt}}
              </p>
            </a>
          </div>
          <!--第二个ul-->
          <div class="tabCon_ul clearfix">
            <a href="" class="tabCon_li" v-for="(tabConLi,index) in tabConLis" v-show="tabConLis.length-4<index">
              <div class="tabConImg">
                <img :src="tabConLi.tabConImgSrc" alt=""/>
              </div>
              <p class="tabConTxt">
                {{tabConLi.tabConTxt}}
              </p>
            </a>
          </div>
        </div>
        <div class="musicList">
          <h2 class="tabConListTitle">最新音乐</h2>
          <div class="musicUl">
            <a href="/#/song" class="musicLi clearfix" v-for="(musicLi,index) in musicLis">
              <div class="musicName">
                <p>{{musicLi.music_name}}</p>
                <p>{{musicLi.music_writer}}</p>
              </div>
              <div class="musicStarImg">
                <span class="StarIcon indexIcon"></span>
              </div>
            </a>

          </div>
        </div>
      </div>
      <div class="tabConList" v-show="tabConListShow===1">
        <div class="tabHot clearfix">
          <div class="tabHotTitleCon">
            <div class="tabHotTitle indexIcon"></div>
          </div>
        </div>
        <div class="rankingList">
          <a href="" class="rankingListSong">
            <div class="rankingListNum">
              01
            </div>
            <div class="rankingListCon">
              <div class="rankingListName">
                <p>That Girl</p>
                <p>Olly Murs</p>
              </div>
              <div class="rankingListStar">
                <div class="StarIcon indexIcon"></div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="tabConList" v-show="tabConListShow===2">3</div>
    </div>

  </div>

</template>

<script>
  //import webpSrc from '../assets/img/logo.png'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        tabtitles:[
          {tabtxt:'推荐音乐'},
          {tabtxt:'热歌榜'},
          {tabtxt:'搜索'},
        ],
        tabConLis:[
          {tabConImgSrc: require('@/assets/img/wy1.webp'),tabConTxt:'华语速报新歌'},
          {tabConImgSrc:require('@/assets/img/wy2.webp'),tabConTxt:'华语速报新歌'},
          {tabConImgSrc:require('@/assets/img/wy3.webp'),tabConTxt:'华语速报新歌'},
          {tabConImgSrc:require('@/assets/img/wy4.webp'),tabConTxt:'华语速报新歌'},
          {tabConImgSrc:require('@/assets/img/wy5.webp'),tabConTxt:'华语速报新歌'},
          {tabConImgSrc:require('@/assets/img/wy6.webp'),tabConTxt:'华语速报新歌'},
        ],
        isActive:0,
        tabConListShow:0,
        musicLis:''
      }
    },
    methods:{
      tabClick(index){
        this.isActive = index;
        this.tabConListShow = index

      },

    },
    created:function(){
      //获取歌名
      this.$axios({
        method:'post',
        url:'/',
      }).then((res)=>{
        this.musicLis = res.data
      })

    },
    mounted:function(){

    }
  }
</script>

<style scoped lang="less">
  @import "HelloWorld.less"
</style>
