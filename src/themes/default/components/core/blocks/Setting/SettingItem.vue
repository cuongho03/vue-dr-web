<template>
  <a-row type="flex" style="width:100%; padding: 13px 0 8px 0;">
    <a-col :span="10" :order="1" style="text-align:left">
      <span style="font-size:14px; font-weight:bold">{{ item.title }}</span>
    </a-col>
    <a-col :span="14" :order="2" style="text-align:right; padding-right:2px">
      <div v-if="!item.description">
        <a-icon type="right" :style="{fontSize:'20px'}" />
      </div>
      <div v-else>
        <span style="font-size:15px">{{ item.description }}</span>
      </div>
    </a-col>
  </a-row>
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
      description: String
    }
  },
  computed: {
  }
};
</script>
