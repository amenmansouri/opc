<template>
  <div id="nav">
    <span>Orange</span>
    <span>prestations tv</span>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <div id="container">
    <router-view />
  </div>
</template>

<style >
html,
body {
  margin: 0;
  background: white;
  font-family: "Montserrat", helvetica, arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
}

* {
  box-sizing: border-box;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#container {
  position: relative;
  top:100px;
  bottom: 100px;
  padding: 20px;
}
#nav {
  display: flex;
  background-color: #000000FF;
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 1000;
  flex-direction: column;
  box-shadow: 0px 0px 120px -25px rgb(0 0 0 / 50%);
}
#nav span {
  font: italic small-caps bold 20px/30px Georgia, serif;
  color: #ff7500;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.link {
  display: block;
  text-align: center;
  color: #777;
  text-decoration: none;
  padding: 10px;
}
/* .bright_back {
  background: url("https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg");
}

.tomb_back {
  background: url("https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png");
} */
/* 
.ave_back {
  background: url("https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg");
} */
</style>
