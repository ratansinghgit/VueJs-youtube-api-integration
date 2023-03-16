<template>
<div class="container">
    <Header></Header>
   <SearchBar @termChange = "onTermChange"></SearchBar> 
   <div class="row">
    <VideoDetail :video="selectedVideo"></VideoDetail>
    <VideoList v-bind:videos="videos" @videoSelect="onVideoSelect"></VideoList>
   </div>
   <router-view></router-view>
</div>

</template>

<script>
import axios from 'axios'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import Header from './components/Header.vue'

const API_KEY='AIzaSyBt1sGDnaAmXeQr8VeADkSQ4ns5XpiCnr8'
export default {
    name:"App",
    components:{
        SearchBar,
        VideoList,
        VideoDetail,
        Header,
    },
    data(){
        return {
            videos:[],
            selectedVideo:null
        }
    },
    methods:{
        onVideoSelect(video){
            this.selectedVideo = video
        },
        onTermChange:function(searchValue){
            axios.get('https://www.googleapis.com/youtube/v3/search',{
                params:{
                    key:API_KEY,
                    type:'video',
                    part:'snippet',
                    q:searchValue
                }
            }).then(response=>{
                this.videos = response.data.items
            }).catch(err=>{
            console.log("error===",err)
            })
        }
    }
}
</script>
