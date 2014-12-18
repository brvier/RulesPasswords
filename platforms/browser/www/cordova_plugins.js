cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.verso.cordova.clipboard/www/clipboard.js",
        "id": "com.verso.cordova.clipboard.Clipboard",
        "clobbers": [
            "cordova.plugins.clipboard"
        ]
    },
    {
        "file": "plugins/com.blackberry.community.clipboard/www/client.js",
        "id": "com.blackberry.community.clipboard.client",
        "clobbers": [
            "community.clipboard"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.verso.cordova.clipboard": "0.1.0",
    "com.blackberry.community.clipboard": "1.0.0"
}
// BOTTOM OF METADATA
});