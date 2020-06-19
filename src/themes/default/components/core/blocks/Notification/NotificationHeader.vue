<template>
  <div class="card-container" :style="{borderLeftColor: item.color}">
    <a-row type="flex" style="width:100%">
      <a-col :span="5" :order="1" style="text-align:center">
        <a-avatar class="avatar-border" style="color:#010615" :size="50" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </a-col>
      <a-col :span="18" :order="2">
        <a-row type="flex" style="width:100%">
          <span style="font-size:18px; padding-top:15px">{{ item.title }}</span>
        </a-row>
      </a-col>
      <a-col :span="1" :order="3">
        <div style="width:100%; text-align:right;">
          <div class="right-markup" :style="{backgroundColor: item.color}" />
        </div>
      </a-col>
    </a-row>
    <div style="width:100%; text-align:right;margin-top:-4px">
      <span style="font-size:11px; color:gray; padding-right:10px">{{ item.time }}</span>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
    };
  },
  props: {
    item: {
      title: String,
      color: String,
      time: String
    }
  }
};
</script>

<style lang="scss" scoped>
  .card-container{
      width: 100%;
      border-radius: 5px;
      border-left: 7px solid ;
      padding-top:20px;
      box-shadow: -1px 2px 4px 0px #b9b2b2;
  }
  .avatar-border{
    border: 2px solid lightsteelblue;
    border-radius:30px ;
    width: 50px;
    height: 50px;
  }
  .right-markup{
    position: absolute;
    height:10px;
    width:50px;
    border-radius: 50% / 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    transform: rotate(90deg);
    right: -20px;
    margin-top: 16px;
  }
</style>
