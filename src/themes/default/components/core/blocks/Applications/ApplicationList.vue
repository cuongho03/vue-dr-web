<template>
  <div class="test" style="margin:10px">
    <a-row type="flex" style="width:100%">
      <a-col v-for="(item) in data" :key="item.title" :xs="{span: 12}" :sm="{ span: 12}" :md="{ span: 6}" :order="1" style="text-align:left">
        <div style="text-align:center">
          <div style="margin-bottom:5px">
            <a-avatar style="color:#1890ff;background-color: #97cbe9" :size="64" :icon="item.icon" />
          </div>
          <div>
            <span style="font-size:22px; padding-top:5px">{{ item.title }}</span>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
const data = [
  {
    title: 'Dr.Voice',
    icon: 'user'
  },
  {
    title: 'TeleVid',
    icon: 'idcard'
  }
];
export default {
  data () {
    return {
      data
    };
  },
  computed: {

  }
};
</script>
