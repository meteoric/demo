AutoForm.hooks({
  'edit-form': {
    onSuccess: function (operation, result, template) {
      alert('Post saved successfully!');
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
});
