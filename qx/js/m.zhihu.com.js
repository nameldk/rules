
let modifiedBody = $response.body;
let modifiedHeaders = $response.headers;

modifiedHeaders['Content-Security-Policy'] = "default-src * 'unsafe-inline' blob:; script-src * 'self' 'unsafe-inline' blob: *.zhihu.com g.alicdn.com qzonestyle.gtimg.cn res.wx.qq.com open.mobile.qq.com 'unsafe-eval' unpkg.zhimg.com unicom.zhimg.com captcha.gtimg.com captcha.guard.qcloud.com pagead2.googlesyndication.com cpro.baidustatic.com pos.baidu.com dup.baidustatic.com i.hao61.net  hm.baidu.com zz.bdstatic.com *.githubusercontent.com www.googletagmanager.com resource:; style-src * 'self' 'unsafe-inline' *.zhihu.com unicom.zhimg.com *.githubusercontent.com resource: captcha.gtimg.com";

let script = '<script type="text/javascript" src="https://raw.githubusercontent.com/nameldk/user-script/master/zhihu.com/zhihu.m.better.js"></script>';
modifiedBody = modifiedBody.replace('</html>', script + '</html>');

$done({body: modifiedBody, headers: modifiedHeaders});
