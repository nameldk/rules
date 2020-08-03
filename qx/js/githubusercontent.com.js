/**
hostname = raw.githubusercontent.com, gist.githubusercontent.com
# 处理响应头部
^https://(?:raw|gist)\.githubusercontent.com/.+\.js url script-response-body https://raw.githubusercontent.com/nameldk/rules/master/qx/js/githubusercontent.com.js
*/

let modifiedBody = $response.body;
let modifiedHeaders = $response.headers;

delete modifiedHeaders['Content-Security-Policy'];
modifiedHeaders['Content-Type'] = 'application/javascript; charset=utf-8';

$done({body: modifiedBody, headers: modifiedHeaders});
