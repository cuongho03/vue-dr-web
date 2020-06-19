<template>
  <div id="home">
    <page-title title="Settings" />
    <section>
      <a-list-item>
        <a-row type="flex" style="width:100%">
          <a-col :span="5" :order="1" style="text-align:center">
            <a-avatar style="color:#010615" :size="64" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </a-col>
          <a-col :span="19" :order="2">
            <a-row type="flex" style="width:100%">
              <span style="font-size:22px; padding-top:5px">System Administrator</span>
            </a-row>
            <a-row type="flex" style="width:100%">
              <span style="font-size:16px">Login: 04/06/2020</span>
            </a-row>
          </a-col>
        </a-row>
      </a-list-item>
      <a-divider style="margin:0px" />
      <a-list style="margin-left:10px" size="small" :data-source="settingItems">
        <a-list-item style="padding-left:0px;" slot="renderItem" slot-scope="item">
          <setting-item :item="item" />
        </a-list-item>
      </a-list>
      <a-divider style="margin:0 0 0 10px" />
      <a-list-item style="margin-left:10px">
        <a-row type="flex" style="width:100%;padding: 9px 0 4px 0;">
          <span style="font-size:18px; color:red">Log out</span>
        </a-row>
      </a-list-item>
      <a-divider style="margin:0px" />
    </section>
  </div>
</template>

<script>
// query constructor
import { isServer, onlineHelper } from '@vue-storefront/core/helpers'
// Theme core components
import SettingItem from 'theme/components/core/blocks/Setting/SettingItem'
// Theme local components
import { Logger } from '@vue-storefront/core/lib/logger'
import PageTitle from 'theme/components/core/blocks/Applications/PageTitle'
const settingItems = [
  {
    title: 'Instance',
    description: 'Central-lung-hospital'
  },
  {
    title: 'Version',
    description: '1.0.0'
  },
  {
    title: 'Security'
  },
  {
    title: 'Privacy policy'
  },
  {
    title: 'Legal Disclosures'
  }
];
export default {
  data () {
    return {
      settingItems: settingItems
    }
  },

  components: {
    SettingItem,
    PageTitle
  },
  computed: {

    isOnline () {
      return onlineHelper.isOnline
    }

  },
  beforeCreate () {

  },
  async beforeMount () {

  },
  mounted () {

  },
  watch: {

  },
  async asyncData ({ store, route }) { // this is for SSR purposes to prefetch data

  },
  beforeRouteEnter (to, from, next) {
    next()
  }
}
</script>

<style lang="scss" scoped>
  .new-collection {
    @media (max-width: 767px) {
      padding-top: 0;
    }
  }
</style>
