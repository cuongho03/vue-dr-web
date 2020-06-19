<template>
  <div class="content-container" style="width:100%;">
    <div style="height:15px" />
    <div v-if="item.expanded" style="width:100%; padding:0px 10px 10px 15px">
      <span style="font-size:14px">{{ item.content }}</span>
      <div style="width:100%; text-align:center; margin-top :10px">
        <a-button type="primary">
          Click here
        </a-button>
      </div>
      <div style="width:100%; margin-top :10px">
        <a-row type="flex" style="width:100%">
          <a-col :span="3" :order="1" style="text-align:center">
            <icon-font type="icon-facebook" :style="{fontSize:'30px', color:'#4267b2'}" />
          </a-col>
          <a-col :span="21" :order="2" style="padding-top: 4px">
            <span style="font-size:16px;color:#4267b2">Share with friends on facebook</span>
          </a-col>
        </a-row>
        <a-row type="flex" style="width:100%">
          <a-col :span="3" :order="1" style="text-align:center">
            <icon-font type="icon-twitter" :style="{fontSize:'30px', color:'#1da1f2'}" />
          </a-col>
          <a-col :span="21" :order="2" style="padding-top: 4px">
            <span style="font-size:16px;color:#1da1f2">Share with friends on twitter</span>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from 'ant-design-vue';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
});
export default {
  data () {
    return {
    };
  },
  props: {
    item: {
      content: String,
      expanded: Boolean
    }
  },
  components: {

    IconFont
  }
};
</script>

<style lang="scss" scoped>
    .icons-list >>> .anticon {
        margin-right: 6px;
        font-size: 24px;
    }
    .content-container{
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        background-color: #f0f2f5;
        box-shadow: -1px 2px 4px 0px #b9b2b2;
    }
</style>
