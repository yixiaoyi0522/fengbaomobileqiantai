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
    var url = 'http://www.lemeng.net';
    var path =  window.location.pathname;
    var start =  path.lastIndexOf('/');
    var module =  path.substring(start);
    if(!path || module == '/index'){
        location = url;
    }
    if(module == '/help_generalize6'){
        module = '/help.html#Help_6';
    }
    if(module == '/help_generalize7'){
        module = '/help.html#Help_7';
    }
    if(module == '/help_generalize8'){
        module = '/help.html#Help_8';
    }
    if(module == '/help_generalize9'){
        module = '/help.html#Help_9';
    }
    if(module == '/help_generalize10'){
        module = '/help.html#Help_10';
    }
    var reg = new RegExp("^/[0-9]*$");
    if(reg.test(module)) {
        var test = path.indexOf('/');
        var modules = path.substring(test, start);
        if (modules == '/news' || modules == '/notice') {
            module = modules + module;
        }
    }
    if(module == '/help' || module == '/map' || module == '/lemeng'){
        module = module + '.html'; //判断加.html
    }
        location = url  + module;


}