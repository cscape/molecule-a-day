# Magoosh's Chrome New Tab Extension for Vocabulary

A simple Chrome extension that displays vocabulary words each time you open a new tab.

You can take a look at the [store listing](https://chrome.google.com/webstore/detail/magoosh-vocabulary/oooelhhaglnggehlocjjmgngfknfclak).

To keep the extension really fast, we need to package everything into the extension directory and have users download all required files (instead of using stylesheet links). This includes fonts, images, JSON, jQuery, and stylesheets.

# Developing

Developing the extension is really easy!

- Open Chrome and navigate to `chrome://extensions`
- Make sure the 'Developer Mode' checkbox is enabled in the top right corner of the page
- Click the 'Load unpacked extension...' link on the top of the page
- Navigate to the extension directory `/chrome-vocab-extension` and select it
- That's it! As you make changes to the files in the extension directory, the extension will update too.

For more info on setting up the extension for the first time and getting the development environment set up, 
[read this](https://developer.chrome.com/extensions/getstarted).

# Releasing

- bump the `version` in the manifest.json
- run `zip -r vocab.zip .` in the `chrome-vocab-extension` directory
- upload a new release in the [chrome developer dashboard](https://chrome.google.com/webstore/developer/dashboard)

# TODO

- translate to Coffeescript and set up compilation