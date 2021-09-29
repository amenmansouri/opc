<template>
  <!-- <a class="link" href="https://codepen.io/simoberny/pen/qxxOqj" target="_blank"
    >Dark Version</a
  > -->
  <div class="movie_card" :style="{backgroundImage:`url(${formatUrl(program?.fullscreenimageurl)})`}">
    <div class="info_section">
      <div class="movie_header">
        <img
          class="locandina"
          :src= "formatUrl(program?.imageurl)"
        />
        <h1>{{program?.title[0]?.value}}</h1>
        <h4>{{program?.subtitle}}</h4>
        <span class="minutes">{{formatDuration(program.duration)}}</span>
        <p class="type">{{program?.subtitle}}</p>
      </div>
      <div class="movie_desc">
        <p class="text">
          <!-- Set in a world where fantasy creatures live side by side with humans.
          A human cop is forced to work with an Orc to find a weapon everyone is
          prepared to kill for. -->
        </p>
      </div>
      <div class="movie_social">
        <ul>
          <li><span class="circle"> hd</span></li>
          <li><span class="circle"> sd</span></li>
          <li><span class="circle"> uhd</span></li>
        </ul>
      </div>
    </div>
  </div>

</template>
<script lang="ts">
import { Program } from "@/store/state";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "ProgramCard",
  props:{
      program:{
          required:true,
          type: Object as PropType<Program>
      }
  },
  methods:{
      formatDuration(value:string):string{        
        return value.substring(2,value.length).toLowerCase()
     },
      formatUrl(value:string):string{
       return 'https://statics.ocs.fr'.concat(value)
     }
  }
});
</script>
<style scoped>
.movie_card {
  position: relative;
  display: block;
  width: 1000px;
  height: 250px;
  margin: 80px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
  background-size: 500px 250px;
  
}
.movie_card:hover {
  transform: scale(1.02);
  box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
  transition: all 0.4s;
}
.movie_card .info_section {
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
}
.movie_card .info_section .movie_header {
  position: relative;
  padding: 25px;
  height: 30%;
}
.movie_card .info_section .movie_header h1 {
  color: black;
  font-weight: 400;
}
.movie_card .info_section .movie_header h4 {
  color: #555;
  font-weight: 400;
}
.movie_card .info_section .movie_header .minutes {
  display: inline-block;
  margin-top: 15px;
  color: #555;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.movie_card .info_section .movie_header .type {
  display: inline-block;
  color: #959595;
  margin-left: 10px;
}
.movie_card .info_section .movie_header .locandina {
  position: relative;
  float: left;
  margin-right: 20px;
  height: 150px;
  width: 100px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
}
.movie_card .info_section .movie_desc {
  padding: 25px;
  height: 45%;
}
.movie_card .info_section .movie_desc .text {
  color: #545454;
}
.movie_card .info_section .movie_social {
  height: 25%;
  padding-left: 15px;
  padding-bottom: 20px;
}
.movie_card .info_section .movie_social ul {
  list-style: none;
  padding: 0;
}
.movie_card .info_section .movie_social ul li {
  display: inline-block;
  color: rgba(0, 0, 0, 0.3);
  transition: color 0.3s;
  transition-delay: 0.15s;
  margin: 0 10px;
}
.movie_card .info_section .movie_social ul li:hover {
  transition: color 0.3s;
  color: rgba(0, 0, 0, 0.7);
}
.movie_card .info_section .movie_social ul li .circle{
  font-size: 19px;
  height: 50px;
  width: 50px;
  background-color: #bbb;
  border-radius: 50%;
  text-transform: uppercase;
  color: #545454;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: 0px 0px 120px 25px rgba(0, 0, 0, 0.4);
}
.movie_card .blur_back {
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  right: 0;
  background-size: cover;
  border-radius: 11px;
}

@media screen and (min-width: 768px) {
  .movie_header {
    width: 65%;
  }

  .movie_desc {
    width: 50%;
  }

  .info_section {
    background: linear-gradient(to right, #e5e6e6 50%, transparent 100%);
  }

  .blur_back {
    width: 80%;
    background-position: -100% 10% !important;
  }
}
@media screen and (max-width: 768px) {
  .movie_card {
    width: 95%;
    margin: 70px auto;
    min-height: 350px;
    height: auto;
  }

  .blur_back {
    width: 100%;
    background-position: 50% 50% !important;
  }

  .movie_header {
    width: 100%;
    margin-top: 85px;
  }

  .movie_desc {
    width: 100%;
  }

  .info_section {
    background: linear-gradient(to top, #e5e6e6 50%, transparent 100%);
    display: inline-grid;
  }
}
</style>