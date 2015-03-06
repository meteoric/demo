![](http://f.cl.ly/items/391y4708420P0H001k1G/meteoric.png)

# Meteor Ionic Demo

This is a demo of the various [Meteoric](https://github.com/meteoric) packages:

- [meteoric:ionic](https://github.com/meteoric/meteor-ionic)
- [meteoric:ionic-sass](https://github.com/meteoric/ionic-sass)
- [meteoric:ionicons-sass](https://github.com/meteoric/ionicons-sass)
- [meteoric:autoform-ionic](https://github.com/meteoric/autoform-ionic)
- [meteoric:useraccounts-ionic](https://github.com/meteoric/useraccounts-ionic)

See it in action here: [meteoric.github.io](http://meteoric.github.io)

## Running locally

Due to [some](https://github.com/meteoric/demo/issues/4) [issues](https://github.com/meteoric/demo/issues/6), you need to run the following for a fully-functional demo:

```sh
git clone git@github.com:meteoric/demo.git
meteor run  # will fail
^C
meteor add meteoric:ionic@0.1.17
meteor run
```

## License
[MIT License](https://github.com/meteoric/demo/blob/master/LICENSE)
