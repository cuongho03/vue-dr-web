<template>
  <div class="header">
    <header
      class="fixed w-100 brdr-bottom-1 bg-cl-primary brdr-cl-secondary"
      :class="{ 'is-visible': navVisible }"
    >
      <div class="w-100" style="padding:10px;text-align:right">
        <div>
          <a-icon
            @click="goto('/')"
            :style="{marginRight: '10px'}"
            class="icon"
            :class="{'icon__active':(name === '/')}"
            type="home"
          />
          <a-icon
            @click="goto('/message')"
            :style="{marginRight: '10px'}"
            :class="{'icon__active':(name === '/message')}"
            class="icon"
            type="message"
          />

          <a-badge :count="5">
            <a-icon
              @click="goto('/notifications')"
              type="bell"
              class="icon"
              :class="{'icon__active':(name === '/notifications')}"
            />
          </a-badge>
          <a-popover placement="bottomRight" trigger="click">
            <template slot="content" style="padding:0">
              <setting class="icon" />
            </template>

            <a-icon
              type="setting"
              :style="{ fontSize: '24px' , paddingTop:'10px',paddingLeft:'20px', paddingRight:'10px'}"
            />
          </a-popover>
        </div>
      </div>
    </header>
    <div class="header-placeholder" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { navigationTabStore } from 'theme/store/navigationTab';
import Setting from '../Setting/Setting';

export default {
  name: 'Header',
  components: {
    Setting
  },

  data () {
    return {
      navVisible: true,
      isScrolling: false,
      scrollTop: 0,
      lastScrollTop: 0,
      navbarHeight: 54,
      tab: navigationTabStore.state.tab,
      name: this.$route.name
    };
  },
  computed: {
    ...mapState({})
  },
  mounted () {
    let routeName = this.$route.name;

    let index = -1;
    if (routeName === 'home') {
      index = 0;
    } else if (routeName === 'setting') {
      index = 2;
    } else if (routeName === 'notification') {
      index = 1;
    } else {
      index = -1;
    }
    navigationTabStore.changeTab(index);
  },
  beforeMount () {
    window.addEventListener(
      'scroll',
      () => {
        this.isScrolling = true;
      },
      { passive: true }
    );

    setInterval(() => {
      if (this.isScrolling) {
        this.hasScrolled();
        this.isScrolling = false;
      }
    }, 250);
  },
  methods: {
    goto (name) {
      this.$data.name = name;
      this.$router.push(name);
    },
    changeTab (index) {
      navigationTabStore.changeTab(index);
    },
    gotoAccount () {
      this.$bus.$emit('modal-toggle', 'modal-signup');
    },
    hasScrolled () {
      this.scrollTop = window.scrollY;
      if (
        this.scrollTop > this.lastScrollTop &&
        this.scrollTop > this.navbarHeight
      ) {
        this.navVisible = false;
      } else {
        this.navVisible = true;
      }
      this.lastScrollTop = this.scrollTop;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~theme/css/variables/colors";
@import "~theme/css/helpers/functions/color";
$color-icon-hover: color(secondary, $colors-background);

header {
  height: 54px;
  top: -55px;
  z-index: 3;
  transition: top 0.2s ease-in-out;
  &.is-visible {
    top: 0;
  }
}
.icon {
  font-size: 24px;
  &:hover,
  &:focus {
    opacity: 0.8;
    cursor: pointer;
  }
  &__active {
    border-bottom: 2px solid rgb(254, 140, 0);
    height: 35px;
  }
}
.right-icons {
  //for edge
  float: right;
}
.header-placeholder {
  height: 54px;
}
.links {
  text-decoration: underline;
}
@media (max-width: 767px) {
  .row.middle-xs {
    margin: 0 -15px;

    &.py5 {
      margin: 0;
    }
  }
  .col-xs-2:first-of-type {
    padding-left: 0;
  }
  .col-xs-2:last-of-type {
    padding-right: 0;
  }
  a,
  span {
    font-size: 12px;
  }
}
</style>
