Template.actionSheet.events({
  'click [data-action=showActionSheet]': function (event, template) {
    IonActionSheet.show({
      titleText: 'ActionSheet Example',
      buttons: [
        { text: 'Share <i class="icon ion-share"></i>' },
        { text: 'Move <i class="icon ion-arrow-move"></i>' },
      ],
      destructiveText: 'Delete',
      cancelText: 'Cancel',
      cancel: function() {
        console.log('Cancelled!');
      },
      buttonClicked: function(index) {
        if (index === 0) {
          console.log('Shared!');
        }
        if (index === 1) {
          console.log('Moved!');
        }
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('Destructive Action!');
        return true;
      }
    });
  }
});
