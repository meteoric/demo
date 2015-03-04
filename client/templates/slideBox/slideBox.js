Template.slideBox.rendered = function() {
  IonSideMenu.snapper.disable();
};

Template.slideBox.destroyed = function() {
  IonSideMenu.snapper.enable();
};
