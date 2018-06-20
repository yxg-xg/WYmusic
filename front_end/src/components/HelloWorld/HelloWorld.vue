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
      isActive:0,
      tabConListShow:0
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
