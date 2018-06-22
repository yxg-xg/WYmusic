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
          <h2 class="tabConListTitle">推荐歌单</h2>
          <div class="musicUl">
            <a href="" class="musicLi clearfix">
              <div class="musicName">
                <p>ALL THE WAYS</p>
                <p>Meghan Trainor</p>
              </div>
              <div class="musicStarImg">
                <span class="StarIcon indexIcon"></span>
              </div>
            </a>

          </div>
        </div>
      </div>
      <div class="tabConList" v-show="tabConListShow===1">2</div>
      <div class="tabConList" v-show="tabConListShow===2">3</div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tabtitles:[
        {tabtxt:'推荐音乐'},
        {tabtxt:'热歌榜'},
        {tabtxt:'搜索'},
      ],
      tabConLis:[
        {tabConImgSrc:'/static/img/wy1.webp',tabConTxt:'华语速报新歌'},
        {tabConImgSrc:'/static/img/wy2.webp',tabConTxt:'华语速报新歌'},
        {tabConImgSrc:'/static/img/wy3.webp',tabConTxt:'华语速报新歌'},
        {tabConImgSrc:'/static/img/wy4.webp',tabConTxt:'华语速报新歌'},
        {tabConImgSrc:'/static/img/wy5.webp',tabConTxt:'华语速报新歌'},
        {tabConImgSrc:'/static/img/wy6.webp',tabConTxt:'华语速报新歌'},
      ],
      isActive:0,
      tabConListShow:0,

    }
  },
  methods:{
    tabClick(index){
      this.isActive = index;
      this.tabConListShow = index
      //console.log(index)
    }
  }
  }
</script>

<style lang="css" scoped>
  @import "HelloWorld.css"
</style>
