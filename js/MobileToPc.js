var sUserAgent  =   navigator.userAgent;

var mobileAgents=['Android','iPhone','Symbian','WindowsPhone','iPod','BlackBerry','Windows CE','360 Phone Browser','Android Browser','Chrome Mobile','Chrome Mobile iOS','MIUI Browser','Mobile Safari','Mobile Silk','Nokia Browser','Nokia OSS Browser','Nokia Ovi Browser','Openwave Mobile Browser','Opera Mobile','MQQBrowser','WeChat'];

var goUrl = 0;

for( var i=0;i   <  mobileAgents.length;i++){
    if(sUserAgent.indexOf(mobileAgents[i]) > -1){
        goUrl = 1;
        break;

    }

}

if (goUrl == 0){
    var url = 'http://hehuo.lemeng.net';
    var path =  window.location.pathname;
    var start =  path.lastIndexOf('/');
    var module =  path.substring(start);
    if(!path){
        location = url;
    }else{
        location = url + '/index.php?s=/Index' + module + '.html';
    }
}