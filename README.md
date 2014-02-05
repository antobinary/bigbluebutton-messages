bigbluebutton-messages
===================

This is a library of messages used in BigBlueButton.
The messages are structured as Javascript objects and
are converted into JSON.

This library was developed to be used with a webpage tool.
Both the library and the tool are under construction.

Note: some of the properties of the javasctipt objects contain
comments where I have modified the original message structure

Note: space characters are omitted before transmitting the json
message. Strings containing \s will appear with merged:
"text":"This is a sample message" //#Thisisasamplemessage

##Testing
cd tests/

nodeunit myTests.js
