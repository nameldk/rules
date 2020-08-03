/*
hostname = motibang.com
# motibang
^https?://motibang.com.+?/api/.+ url script-response-body motibang.js
*/

const url = $request.url;
let body = $response.body;
let body1 = body;

const path1 = '/api/1/dailyrequest';

if (~url.indexOf(path1)) {
    body = JSON.parse(body);
    if (body) {
        body.business_ads = [];
        body.is_individual_vip = 1;
        body.is_paid = 1;
        body.is_individual_vip = 1;
        body.had_been_paid = 1;
        body.vip_days_left = 100;
        body.has_ads = 0;
        body.ads = [];
    }
    body = JSON.stringify(body);
}

if (body) {
    $done({body})
} else {
    $done({body1})
}
