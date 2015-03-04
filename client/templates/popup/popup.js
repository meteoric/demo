Template.popup.events({
  'click [data-action="showPopup"]': function(event, template) {
    IonPopup.show({
      title: 'A Popup',
      template: 'Here\'s a quick popup.',
      buttons: [{
        text: 'Close me',
        type: 'button-positive',
        onTap: function() {
          IonPopup.close();
        }
      }]
    });
  },

  'click [data-action="showAlert"]': function(event, template) {
    IonPopup.alert({
      title: 'An Alert',
      template: 'This is an alert!',
      okText: 'Got It.'
    });
  },

  'click [data-action="showConfirm"]': function(event, template) {
    IonPopup.confirm({
      title: 'Are you sure?',
      template: 'Are you <strong>really</strong> sure?',
      onOk: function() {
        console.log('Confirmed');
      },
      onCancel: function() {
        console.log('Cancelled');
      }
    });
  },

  'click [data-action="showPrompt"]': function(event, template) {
    IonPopup.prompt({
      title: 'Security Check',
      template: 'Please enter your password',
      okText: 'Submit',
      inputType: 'password',
      inputPlaceholder: 'Your Password'
    });
  }
});
