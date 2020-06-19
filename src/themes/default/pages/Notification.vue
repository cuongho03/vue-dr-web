<template>
  <div>
    <section>
      <div v-for="(item,index) in notifications" :key="item.title">
        <div class="container w-100" @click="toggleNotification(item,index)" style="padding:10px 10px 0px 10px">
          <notification-header :item="item" />
        </div>
        <div class="container w-100" style="padding:0 17px 10px 17px">
          <notification-content :item="item" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// query constructor
import { isServer, onlineHelper } from '@vue-storefront/core/helpers';

import { notificationStore } from 'theme/store/notification';
import NotificationHeader from 'theme/components/core/blocks/Notification/NotificationHeader';
import NotificationContent from 'theme/components/core/blocks/Notification/NotificationContent';

export default {
  data () {
    return {
      notifications: notificationStore.state.notifications
    }
  },
  methods: {
    toggleNotification (item, index) {
      notificationStore.changeExpandedNotificationStatus(item, index);
    }
  },
  components: {
    NotificationHeader,
    NotificationContent
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
