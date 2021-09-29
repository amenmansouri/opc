<template>
    
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" />

<div class="sticky-bx">
  <div class="hover-bx">
    <div class="ico-bx" id="sbx1">
      <i class="fa fa-2x fa-phone-square"></i>
    </div>
    <div class="ico-txt" id="sbt1">
      <span>Call Back</span>
    </div>
  </div>
  <br>
  <br>
  <div class="hover-bx">
    <div class="ico-bx" id="sbx2">
      <i class="fa fa-2x fa-pencil-square-o"></i>
    </div>
    <div class="ico-txt" id="sbt2">
      <span>Book An Appointment</span>
    </div>
  </div>
  <br>
  <br>
  <div class="hover-bx">
    <div class="ico-bx" id="sbx3">
      <i class="fa fa-2x fa-calendar"></i>
    </div>
    <div class="ico-txt" id="sbt3">
      <span>Camps & Events</span>
    </div>
  </div>
  <br>
  <br>
  <div class="hover-bx">
    <div class="ico-bx" id="sbx4">
      <i class="fa fa-2x fa-globe"></i>
    </div>
    <div class="ico-txt" id="sbt4">
      <span>Virtual Tour</span>
    </div>
  </div>
  <br>
  <br>
</div>
</template>
<style scoped>
.sticky-bx {
  position: fixed;
  right: 0px;
  top: 30%;
  padding: 16px;
  width: 60px;
  direction: rtl;
}
.hover-bx {
  direction: ltr;
  display: inline-block;
  background-color: #aeaeae;
  white-space: nowrap;
}
.ico-bx {
  display: inline-block;
}
.ico-txt {
  margin-left: 10px;
  padding: 0 6px;
  display: none;
}
.hover-bx:hover .ico-txt {
  display: inline-block;
  position: relative;
}
</style>