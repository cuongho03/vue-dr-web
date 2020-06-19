<template>
  <div id="home">
    <div style="padding:50px 50px 30px 30px;width:100%;">
      <a-card style="width: 100%; " :body-style="{padding:'0px'}">
        <a-page-header
          style="border: 1px solid rgb(235, 237, 240), margin-top:30px;"
          title="Welcome, System Administrator"
        />
      </a-card>
      <div style="margin-top: 30px;">
        <a-row type="flex" :gutter="16">
          <a-col :xs="{ span: 24}" :sm="{ span: 24}" :md="{ span: 12}" :order="1" style>
            <a-card style="width: 100% " :body-style="{padding:'10px'}">
              <div style="margin:10px">
                <a-icon :style="{color:'#1890ff', fontSize:'40px'}" type="inbox" />
                <span style="font-size:22px;">Inbox</span>
              </div>
              <notification />
            </a-card>
          </a-col>
          <a-col :xs="{ span: 24}" :sm="{ span: 24}" :md="{ span: 12}" :order="2" style>
            <a-card style="width: 100%;" :body-style="{padding:'10px'}">
              <div style="margin:10px">
                <a-icon :style="{color:'#1890ff', fontSize:'40px'}" type="appstore" />
                <span style="font-size:22px;">Applications</span>
              </div>
              <application-list />
            </a-card>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
// query constructor
import { isServer, onlineHelper } from '@vue-storefront/core/helpers';
// Theme core components
import ApplicationList from 'theme/components/core/blocks/Applications/ApplicationList';
import Notification from 'theme/components/core/blocks/Notification/Notification';
// Theme local components
import { Logger } from '@vue-storefront/core/lib/logger';

export default {
  data () {
    return {
      loading: true
    };
  },

  components: {
    ApplicationList,
    Notification
  },
  computed: {},
  beforeCreate () {},
  async beforeMount () {},
  mounted () {},
  watch: {},
  async asyncData ({ store, route }) {
    // this is for SSR purposes to prefetch data
  },
  beforeRouteEnter (to, from, next) {
    next();
  }
};
</script>

<style lang="scss" scoped>
.new-collection {
  @media (max-width: 767px) {
    padding-top: 0;
  }
}
</style>
