
let modifiedBody = $response.body;
let modifiedHeaders = $response.headers;

delete modifiedHeaders['Content-Security-Policy'];
modifiedHeaders['Content-Type'] = 'application/javascript; charset=utf-8';

$done({body: modifiedBody, headers: modifiedHeaders});
