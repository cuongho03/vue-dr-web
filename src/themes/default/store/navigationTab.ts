const tab = {
  index: -1
};
export const navigationTabStore = {
  state: {
    tab: tab
  },
  changeTab (tabIndex) {
    let { tab } = this.state;
    tab.index = tabIndex;
  }
};
