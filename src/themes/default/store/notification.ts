
const notifications = [
  {
    title: 'Newest Covid-19 news',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,',
    expanded: false,
    time: '18 min ago',
    color: 'green'
  },
  {
    title: 'Did you get the App, yet?',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,',
    expanded: false,
    time: 'a day ago',
    color: 'orange'
  }
];
export const notificationStore = {
  state: {
    notifications: notifications
  },
  changeExpandedNotificationStatus (item, index) {
    let { notifications } = this.state;
    console.log('index', index);

    if (item && item.expanded) {
      notifications[index].expanded = false;
    } else {
      for (let noti of notifications) {
        noti.expanded = false;
      }
      notifications[index].expanded = true;
    }
  }
};
