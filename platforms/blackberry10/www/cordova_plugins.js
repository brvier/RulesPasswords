cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.blackberry.community.clipboard/www/client.js",
        "id": "com.blackberry.community.clipboard.client",
        "clobbers": [
            "community.clipboard"
        ]
    },
    {
        "file": "plugins/com.verso.cordova.clipboard/www/clipboard.js",
        "id": "com.verso.cordova.clipboard.Clipboard",
        "clobbers": [
            "cordova.plugins.clipboard"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.blackberry.community.clipboard": "1.0.0",
    "com.verso.cordova.clipboard": "0.1.0",
    "org.apache.cordova.device": "0.2.13"
}
// BOTTOM OF METADATA
});