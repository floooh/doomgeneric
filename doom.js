
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);var aa=[],ba="./this.program";function r(a,b){throw b;}var ca="object"===typeof window,t="function"===typeof importScripts,da="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node,u="",ea,v,w,x,y;
if(da)u=t?require("path").dirname(u)+"/":__dirname+"/",ea=function(a,b){x||(x=require("fs"));y||(y=require("path"));a=y.normalize(a);return x.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||A("Assertion failed: undefined");return a},v=function(a,b,c){x||(x=require("fs"));y||(y=require("path"));a=y.normalize(a);x.readFile(a,function(d,f){d?c(d):b(f.buffer)})},1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==
typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof fa))throw a;}),process.on("unhandledRejection",A),r=function(a,b){if(noExitRuntime||0<ha)throw process.exitCode=a,b;process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(ca||t)t?u=self.location.href:"undefined"!==typeof document&&document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;
b.open("GET",a,!1);b.send(null);return b.responseText},t&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),v=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ia=e.print||console.log.bind(console),B=e.printErr||console.warn.bind(console);
for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=null;e.arguments&&(aa=e.arguments);e.thisProgram&&(ba=e.thisProgram);e.quit&&(r=e.quit);var C;e.wasmBinary&&(C=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!==typeof WebAssembly&&A("no native wasm support detected");var ja,ka=!1;function la(a){var b=e["_"+a];b||A("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}
function ma(a,b,c){var d={string:function(m){var p=0;if(null!==m&&void 0!==m&&0!==m){var q=(m.length<<2)+1;p=D(q);E(m,F,p,q)}return p},array:function(m){var p=D(m.length);na.set(m,p);return p}};a=la(a);var f=[],h=0;if(c)for(var g=0;g<c.length;g++){var n=d[b[g]];n?(0===h&&(h=oa()),f[g]=n(c[g])):f[g]=c[g]}b=a.apply(null,f);b=function(m){0!==h&&pa(h);return m}(b)}var qa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ra(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&qa)return qa.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var h=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=a[b++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function G(a,b){return a?ra(F,a,b):""}
function E(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var n=a.charCodeAt(++h);g=65536+((g&1023)<<10)|n&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ta(a){var b=sa(a)+1,c=D(b);E(a,na,c,b);return c}var ua,na,F,va,wa,H,xa,ya,I;
function za(){var a=ja.buffer;ua=a;e.HEAP8=na=new Int8Array(a);e.HEAP16=va=new Int16Array(a);e.HEAP32=H=new Int32Array(a);e.HEAPU8=F=new Uint8Array(a);e.HEAPU16=wa=new Uint16Array(a);e.HEAPU32=xa=new Uint32Array(a);e.HEAPF32=ya=new Float32Array(a);e.HEAPF64=I=new Float64Array(a)}var J,Aa=[],Ba=[],Ca=[],Da=[],Ea=[],ha=0;function Fa(){var a=e.preRun.shift();Aa.unshift(a)}var K=0,Ga=null,L=null;e.preloadedImages={};e.preloadedAudios={};
function A(a){if(e.onAbort)e.onAbort(a);B(a);ka=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ha(){return M.startsWith("data:application/octet-stream;base64,")}var M;M="doom.wasm";if(!Ha()){var Ia=M;M=e.locateFile?e.locateFile(Ia,u):u+Ia}function Ja(){var a=M;try{if(a==M&&C)return new Uint8Array(C);if(w)return w(a);throw"both async and sync fetching of the wasm failed";}catch(b){A(b)}}
function Ka(){if(!C&&(ca||t)){if("function"===typeof fetch&&!M.startsWith("file://"))return fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Ja()});if(v)return new Promise(function(a,b){v(M,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ja()})}
function N(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.tc;"number"===typeof c?void 0===b.Sb?J.get(c)():J.get(c)(b.Sb):c(void 0===b.Sb?null:b.Sb)}}}var La=[null,[],[]],Ma={},Na=0;function Oa(){for(var a=O.length-1;0<=a;--a)Pa(a);O=[];P=[]}var P=[];function Qa(){if(Na&&Ra.Nb)for(var a=0;a<P.length;++a){var b=P[a];P.splice(a,1);--a;b.Ec.apply(null,b.pc)}}var O=[];function Pa(a){var b=O[a];b.target.removeEventListener(b.Hb,b.ic,b.Ib);O.splice(a,1)}
function Q(a){function b(d){++Na;Ra=a;Qa();a.Kb(d);Qa();--Na}if(a.Jb)a.ic=b,a.target.addEventListener(a.Hb,b,a.Ib),O.push(a),Sa||(Da.push(Oa),Sa=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].Hb==a.Hb&&Pa(c--)}var Sa,Ra,Ta,R,Ua,Va,Wa,Xa,Ya=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function S(a){a=2<a?G(a):a;return Ya[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function Za(a){return 0>Ya.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function $a(a,b,c,d,f,h){Ta||(Ta=T(176));a={target:S(a),Nb:!0,Hb:h,Jb:d,Kb:function(g){var n=Ta;I[n>>3]=g.timeStamp;var m=n>>2;H[m+2]=g.location;H[m+3]=g.ctrlKey;H[m+4]=g.shiftKey;H[m+5]=g.altKey;H[m+6]=g.metaKey;H[m+7]=g.repeat;H[m+8]=g.charCode;H[m+9]=g.keyCode;H[m+10]=g.which;E(g.key||"",F,n+44,32);E(g.code||"",F,n+76,32);E(g.char||"",F,n+108,32);E(g.locale||"",F,n+140,32);J.get(d)(f,n,b)&&g.preventDefault()},Ib:c};Q(a)}
function ab(a,b,c){I[a>>3]=b.timeStamp;a>>=2;H[a+2]=b.screenX;H[a+3]=b.screenY;H[a+4]=b.clientX;H[a+5]=b.clientY;H[a+6]=b.ctrlKey;H[a+7]=b.shiftKey;H[a+8]=b.altKey;H[a+9]=b.metaKey;va[2*a+20]=b.button;va[2*a+21]=b.buttons;H[a+11]=b.movementX;H[a+12]=b.movementY;c=Za(c);H[a+13]=b.clientX-c.left;H[a+14]=b.clientY-c.top}
function U(a,b,c,d,f,h){R||(R=T(72));a=S(a);Q({target:a,Nb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Hb:h,Jb:d,Kb:function(g){g=g||event;ab(R,g,a);J.get(d)(f,R,b)&&g.preventDefault()},Ib:c})}
function V(a,b,c,d,f){Ua||(Ua=T(260));Q({target:a,Hb:f,Jb:d,Kb:function(h){h=h||event;var g=Ua,n=document.pointerLockElement||document.Ub||document.Wb||document.Vb;H[g>>2]=!!n;var m=n&&n.id?n.id:"";E(n?n==window?"#window":n==screen?"#screen":n&&n.nodeName?n.nodeName:"":"",F,g+4,128);E(m,F,g+132,128);J.get(d)(20,g,b)&&h.preventDefault()},Ib:c})}function bb(a,b,c,d,f){Q({target:a,Hb:f,Jb:d,Kb:function(h){h=h||event;J.get(d)(38,0,b)&&h.preventDefault()},Ib:c})}
function cb(a,b,c,d){Va||(Va=T(36));a=S(a);Q({target:a,Hb:"resize",Jb:d,Kb:function(f){f=f||event;if(f.target==a){var h=document.body;if(h){var g=Va;H[g>>2]=f.detail;H[g+4>>2]=h.clientWidth;H[g+8>>2]=h.clientHeight;H[g+12>>2]=innerWidth;H[g+16>>2]=innerHeight;H[g+20>>2]=outerWidth;H[g+24>>2]=outerHeight;H[g+28>>2]=pageXOffset;H[g+32>>2]=pageYOffset;J.get(d)(10,g,b)&&f.preventDefault()}}},Ib:c})}
function db(a,b,c,d,f,h){Wa||(Wa=T(1696));a=S(a);Q({target:a,Nb:"touchstart"==h||"touchend"==h,Hb:h,Jb:d,Kb:function(g){for(var n={},m=g.touches,p=0;p<m.length;++p){var q=m[p];n[q.identifier]=q}m=g.changedTouches;for(p=0;p<m.length;++p)q=m[p],q.lc=1,n[q.identifier]=q;m=g.targetTouches;for(p=0;p<m.length;++p)n[m[p].identifier].nc=1;m=Wa;I[m>>3]=g.timeStamp;q=m>>2;H[q+3]=g.ctrlKey;H[q+4]=g.shiftKey;H[q+5]=g.altKey;H[q+6]=g.metaKey;q+=7;var hb=Za(a),ib=0;for(p in n){var z=n[p];H[q]=z.identifier;H[q+
1]=z.screenX;H[q+2]=z.screenY;H[q+3]=z.clientX;H[q+4]=z.clientY;H[q+5]=z.pageX;H[q+6]=z.pageY;H[q+7]=z.lc;H[q+8]=z.nc;H[q+9]=z.clientX-hb.left;H[q+10]=z.clientY-hb.top;q+=13;if(31<++ib)break}H[m+8>>2]=ib;J.get(d)(f,m,b)&&g.preventDefault()},Ib:c})}function eb(a,b,c,d,f,h){a={target:S(a),Hb:h,Jb:d,Kb:function(g){g=g||event;J.get(d)(f,0,b)&&g.preventDefault()},Ib:c};Q(a)}
function fb(a,b,c,d){Xa||(Xa=T(104));Q({target:a,Nb:!0,Hb:"wheel",Jb:d,Kb:function(f){f=f||event;var h=Xa;ab(h,f,a);I[h+72>>3]=f.deltaX;I[h+80>>3]=f.deltaY;I[h+88>>3]=f.deltaZ;H[h+96>>2]=f.deltaMode;J.get(d)(9,h,b)&&f.preventDefault()},Ib:c})}
function gb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function jb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function kb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function lb(a){a.xc=a.getExtension("WEBGL_multi_draw")}
var mb=1,nb=[],W=[],ob=[],pb=[],qb=[],X=[],rb=[],sb={};function Y(a){tb||(tb=a)}function ub(a){for(var b=mb++,c=a.length;c<b;c++)a[c]=null;return b}function vb(a,b){a.Yb||(a.Yb=a.getContext,a.getContext=function(d,f){f=a.Yb(d,f);return"webgl"==d==f instanceof WebGLRenderingContext?f:null});var c=a.getContext("webgl",b);return c?wb(c,b):0}function wb(a,b){var c=ub(rb),d={vc:c,attributes:b,version:b.mc,Rb:a};a.canvas&&(a.canvas.oc=d);rb[c]=d;("undefined"===typeof b.Xb||b.Xb)&&xb(d);return c}
function xb(a){a||(a=yb);if(!a.kc){a.kc=!0;var b=a.Rb;gb(b);jb(b);kb(b);b.rc=b.getExtension("EXT_disjoint_timer_query");lb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var tb,yb,zb=["default","low-power","high-performance"];function Ab(a,b,c,d){for(var f=0;f<a;f++){var h=Z[c](),g=h&&ub(d);h?(h.name=g,d[g]=h):Y(1282);H[b+4*f>>2]=g}}
function Bb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Y(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:Y(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){Y(1280);B("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:Y(1280);B("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else Y(1281)}function Cb(a){var b=sa(a)+1,c=T(b);E(a,F,c,b);return c}
function Db(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Eb(a,b,c,d,f){a-=5120;a=1==a?F:4==a?H:6==a?ya:5==a||28922==a?xa:wa;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>h,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}
var Z,Pb={ca:function(){return 0},db:function(){return 0},fb:function(){},gb:function(){},ab:function(){},bb:function(){},D:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},L:function(a,b,c){a=S(a);if(!a)return-4;a=Za(a);I[b>>3]=a.width;I[c>>3]=a.height;return 0},_a:function(a,b,c){F.copyWithin(a,b,b+c)},sa:function(a,b){function c(d){J.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},$a:function(a){var b=F.length;a>>>=0;if(2147483648<a)return!1;for(var c=
1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ja.grow(Math.min(2147483648,d)-ua.byteLength+65535>>>16);za();var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},C:function(a,b,c){a=S(a);if(!a)return-4;a.width=b;a.height=c;return 0},X:function(a,b,c,d){$a(a,b,c,d,2,"keydown");return 0},V:function(a,b,c,d){$a(a,b,c,d,1,"keypress");return 0},W:function(a,b,c,d){$a(a,b,c,d,3,"keyup");return 0},ba:function(a,b,c,d){U(a,b,c,d,5,"mousedown");
return 0},_:function(a,b,c,d){U(a,b,c,d,33,"mouseenter");return 0},Z:function(a,b,c,d){U(a,b,c,d,34,"mouseleave");return 0},$:function(a,b,c,d){U(a,b,c,d,8,"mousemove");return 0},aa:function(a,b,c,d){U(a,b,c,d,6,"mouseup");return 0},Q:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Ub||document.body.Wb||document.body.Vb))return-1;a=S(a);if(!a)return-4;V(a,b,c,d,"pointerlockchange");V(a,b,c,d,"mozpointerlockchange");V(a,b,c,d,"webkitpointerlockchange");
V(a,b,c,d,"mspointerlockchange");return 0},P:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Ub||document.body.Wb||document.body.Vb))return-1;a=S(a);if(!a)return-4;bb(a,b,c,d,"pointerlockerror");bb(a,b,c,d,"mozpointerlockerror");bb(a,b,c,d,"webkitpointerlockerror");bb(a,b,c,d,"mspointerlockerror");return 0},Ia:function(a,b,c,d){cb(a,b,c,d);return 0},R:function(a,b,c,d){db(a,b,c,d,25,"touchcancel");return 0},S:function(a,b,c,d){db(a,b,c,d,23,"touchend");return 0},
T:function(a,b,c,d){db(a,b,c,d,24,"touchmove");return 0},U:function(a,b,c,d){db(a,b,c,d,22,"touchstart");return 0},O:function(a,b,c,d){eb(a,b,c,d,31,"webglcontextlost");return 0},N:function(a,b,c,d){eb(a,b,c,d,32,"webglcontextrestored");return 0},Y:function(a,b,c,d){a=S(a);return"undefined"!==typeof a.onwheel?(fb(a,b,c,d),0):-1},ea:function(a,b){b>>=2;b={alpha:!!H[b],depth:!!H[b+1],stencil:!!H[b+2],antialias:!!H[b+3],premultipliedAlpha:!!H[b+4],preserveDrawingBuffer:!!H[b+5],powerPreference:zb[H[b+
6]],failIfMajorPerformanceCaveat:!!H[b+7],mc:H[b+8],wc:H[b+9],Xb:H[b+10],jc:H[b+11],yc:H[b+12],zc:H[b+13]};a=S(a);return!a||b.jc?0:vb(a,b)},Xa:function(a,b){a=rb[a];b=G(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&gb(Z);"OES_vertex_array_object"==b&&jb(Z);"WEBGL_draw_buffers"==b&&kb(Z);"WEBGL_multi_draw"==b&&lb(Z);return!!a.Rb.getExtension(b)},lb:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},Za:function(a){yb=rb[a];e.qc=Z=yb&&yb.Rb;
return!a||Z?0:-5},mb:function(a){Fb(a)},da:function(){return 0},cb:function(a,b,c,d){a=Ma.uc(a);b=Ma.sc(a,b,c);H[d>>2]=b;return 0},Ya:function(){},eb:function(a,b,c,d){for(var f=0,h=0;h<c;h++){for(var g=H[b+8*h>>2],n=H[b+(8*h+4)>>2],m=0;m<n;m++){var p=F[g+m],q=La[a];0===p||10===p?((1===a?ia:B)(ra(q,0)),q.length=0):q.push(p)}f+=n}H[d>>2]=f;return 0},b:function(a){Z.activeTexture(a)},B:function(a,b){Z.attachShader(W[a],X[b])},c:function(a,b){Z.bindBuffer(a,nb[b])},k:function(a,b){Z.bindFramebuffer(a,
ob[b])},Da:function(a,b){Z.bindRenderbuffer(a,pb[b])},a:function(a,b){Z.bindTexture(a,qb[b])},H:function(a,b,c,d){Z.blendColor(a,b,c,d)},I:function(a,b){Z.blendEquationSeparate(a,b)},J:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},Fa:function(a,b,c,d){Z.bufferData(a,c?F.subarray(c,c+b):b,d)},m:function(a,b,c,d){Z.bufferSubData(a,b,F.subarray(d,d+c))},la:function(a){Z.clear(a)},oa:function(a,b,c,d){Z.clearColor(a,b,c,d)},na:function(a){Z.clearDepth(a)},ma:function(a){Z.clearStencil(a)},i:function(a,
b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},ta:function(a){Z.compileShader(X[a])},Aa:function(a,b,c,d,f,h,g,n){Z.compressedTexImage2D(a,b,c,d,f,h,n?F.subarray(n,n+g):null)},ya:function(){var a=ub(W),b=Z.createProgram();b.name=a;b.Qb=b.Ob=b.Pb=0;b.Tb=1;W[a]=b;return a},va:function(a){var b=ub(X);X[b]=Z.createShader(a);return b},E:function(a){Z.cullFace(a)},La:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=nb[d];f&&(Z.deleteBuffer(f),f.name=0,nb[d]=null)}},h:function(a,b){for(var c=0;c<a;++c){var d=
H[b+4*c>>2],f=ob[d];f&&(Z.deleteFramebuffer(f),f.name=0,ob[d]=null)}},u:function(a){if(a){var b=W[a];b?(Z.deleteProgram(b),b.name=0,W[a]=null):Y(1281)}},M:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=pb[d];f&&(Z.deleteRenderbuffer(f),f.name=0,pb[d]=null)}},q:function(a){if(a){var b=X[a];b?(Z.deleteShader(b),X[a]=null):Y(1281)}},Ka:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=qb[d];f&&(Z.deleteTexture(f),f.name=0,qb[d]=null)}},t:function(a){Z.depthFunc(a)},s:function(a){Z.depthMask(!!a)},
d:function(a){Z.disable(a)},K:function(a){Z.disableVertexAttribArray(a)},ga:function(a,b,c){Z.drawArrays(a,b,c)},ha:function(a,b,c,d){Z.drawElements(a,b,c,d)},f:function(a){Z.enable(a)},ib:function(a){Z.enableVertexAttribArray(a)},F:function(a){Z.frontFace(a)},Ga:function(a,b){Ab(a,b,"createBuffer",nb)},Ea:function(a,b){Ab(a,b,"createRenderbuffer",pb)},Ba:function(a,b){Ab(a,b,"createTexture",qb)},qa:function(a,b){return Z.getAttribLocation(W[a],G(b))},e:function(a,b){Bb(a,b)},wa:function(a,b,c,d){a=
Z.getProgramInfoLog(W[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(H[c>>2]=b)},A:function(a,b,c){if(c)if(a>=mb)Y(1281);else if(a=W[a],35716==b)a=Z.getProgramInfoLog(a),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b){if(!a.Qb)for(b=0;b<Z.getProgramParameter(a,35718);++b)a.Qb=Math.max(a.Qb,Z.getActiveUniform(a,b).name.length+1);H[c>>2]=a.Qb}else if(35722==b){if(!a.Ob)for(b=0;b<Z.getProgramParameter(a,35721);++b)a.Ob=Math.max(a.Ob,Z.getActiveAttrib(a,b).name.length+
1);H[c>>2]=a.Ob}else if(35381==b){if(!a.Pb)for(b=0;b<Z.getProgramParameter(a,35382);++b)a.Pb=Math.max(a.Pb,Z.getActiveUniformBlockName(a,b).length+1);H[c>>2]=a.Pb}else H[c>>2]=Z.getProgramParameter(a,b);else Y(1281)},ra:function(a,b,c,d){a=Z.getShaderInfoLog(X[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(H[c>>2]=b)},y:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(X[a]),null===a&&(a="(unknown error)"),H[c>>2]=a?a.length+1:0):35720==b?(a=Z.getShaderSource(X[a]),H[c>>2]=a?a.length+
1:0):H[c>>2]=Z.getShaderParameter(X[a],b):Y(1281)},Ma:function(a){var b=sb[a];if(!b){switch(a){case 7939:b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Cb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||Y(1280);b=b&&Cb(b);break;case 7938:b=Cb("OpenGL ES 2.0 ("+Z.getParameter(7938)+")");break;case 35724:b=Z.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b=
"OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Cb(b);break;default:Y(1280)}sb[a]=b}return b},l:function(a,b){b=G(b);if(a=W[a]){var c=a,d=c.Mb,f=c.fc,h;if(!d)for(c.Mb=d={},c.ec={},h=0;h<Z.getProgramParameter(c,35718);++h){var g=Z.getActiveUniform(c,h);var n=g.name;g=g.size;var m=Db(n);m=0<m?n.slice(0,m):n;var p=c.Tb;c.Tb+=g;f[m]=[g,p];for(n=0;n<g;++n)d[p]=n,c.ec[p++]=m}c=a.Mb;d=0;f=b;h=Db(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,f=b.slice(0,h));if((f=a.fc[f])&&d<f[0]&&(d+=f[1],c[d]=c[d]||Z.getUniformLocation(a,
b)))return d}else Y(1281);return-1},xa:function(a){a=W[a];Z.linkProgram(a);a.Mb=0;a.fc={}},G:function(a,b){Z.polygonOffset(a,b)},Ca:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},pa:function(a,b,c,d){Z.scissor(a,b,c,d)},ua:function(a,b,c,d){for(var f="",h=0;h<b;++h){var g=d?H[d+4*h>>2]:-1;f+=G(H[c+4*h>>2],0>g?void 0:g)}Z.shaderSource(X[a],f)},Ja:function(a,b,c){Z.stencilFunc(a,b,c)},ja:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},r:function(a){Z.stencilMask(a)},Ha:function(a,b,c){Z.stencilOp(a,
b,c)},ia:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},za:function(a,b,c,d,f,h,g,n,m){Z.texImage2D(a,b,c,d,f,h,g,n,m?Eb(n,g,d,f,m):null)},g:function(a,b,c){Z.texParameteri(a,b,c)},hb:function(a,b,c,d,f,h,g,n,m){var p=null;m&&(p=Eb(n,g,f,h,m));Z.texSubImage2D(a,b,c,d,f,h,g,n,p)},z:function(a,b){var c=Z,d=c.uniform1i;var f=Z.hc;if(f){var h=f.Mb[a];"number"===typeof h&&(f.Mb[a]=h=Z.getUniformLocation(f,f.ec[a]+(0<h?"["+h+"]":"")));a=h}else Y(1282),a=void 0;d.call(c,a,b)},j:function(a){a=W[a];Z.useProgram(a);
Z.hc=a},jb:function(a,b){Z.vertexAttribDivisor(a,b)},kb:function(a,b,c,d,f,h){Z.vertexAttribPointer(a,b,c,!!d,f,h)},x:function(a,b,c,d){Z.viewport(a,b,c,d)},Va:function(){e.Zb=function(a){0!=Gb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.Zb)},Ua:function(){e.dc=function(a){a=a.clipboardData.getData("text");ma("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.dc)},Ta:function(a){e.Bc=[];a=G(a);a=document.getElementById(a);e.$b=function(b){b.stopPropagation();
b.preventDefault()};e.ac=function(b){b.stopPropagation();b.preventDefault()};e.bc=function(b){b.stopPropagation();b.preventDefault()};e.cc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;e.Cc=c;Hb(c.length);var d;for(d=0;d<c.length;d++)ma("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Ib(b.clientX,b.clientY)};a.addEventListener("dragenter",e.$b,!1);a.addEventListener("dragleave",e.ac,!1);a.addEventListener("dragover",e.bc,!1);a.addEventListener("drop",e.cc,!1)},
Oa:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Jb()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},Qa:function(a){a=G(a);e.Lb=document.getElementById(a);e.Lb||console.log("sokol_app.h: invalid target:"+a);e.Lb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Sa:function(){window.removeEventListener("beforeunload",e.Zb)},Ra:function(){window.removeEventListener("paste",e.dc)},Pa:function(a){a=G(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.$b);a.removeEventListener("dragleave",e.ac);a.removeEventListener("dragover",e.bc);a.removeEventListener("drop",e.cc)},v:function(){e.Lb&&e.Lb.requestPointerLock&&e.Lb.requestPointerLock()},Na:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var f=d.getContext("2d"),
h=f.createImageData(a,b);h.data.set(F.subarray(c,c+a*b*4));f.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},w:function(a,b,c,d,f,h){b=G(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var n=0<d;n&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(this.readyState==
this.DONE)if(206==this.status||200==this.status&&!n){var m=new Uint8Array(g.response),p=m.length;p<=h?(F.set(m,f),Kb(a,d,p)):Lb(a)}else Mb(a,this.status)};g.send()},fa:function(a,b){b=G(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");Nb(a,d)}else Mb(a,this.status)};c.send()},Wa:function(){return performance.now()},ka:function(a){if(da){if(!a)return 1;a=G(a);if(!a.length)return 0;
a=require("child_process").Dc(a,[],{Ac:!0,stdio:"inherit"});var b=function(c,d){return c<<8|d};return null===a.status?b(0,function(c){switch(c){case "SIGHUP":return 1;case "SIGQUIT":return 3;case "SIGFPE":return 8;case "SIGKILL":return 9;case "SIGALRM":return 14;case "SIGTERM":return 15}return 2}(a.signal)):a.status<<8|0}if(!a)return 0;H[Ob()>>2]=52;return-1}};
(function(){function a(f){e.asm=f.exports;ja=e.asm.nb;za();J=e.asm.Gb;Ba.unshift(e.asm.ob);K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==Ga&&(clearInterval(Ga),Ga=null),L&&(f=L,L=null,f()))}function b(f){a(f.instance)}function c(f){return Ka().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(f,function(h){B("failed to asynchronously prepare wasm: "+h);A(h)})}var d={a:Pb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return B("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return C||"function"!==typeof WebAssembly.instantiateStreaming||Ha()||M.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(M,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){B("wasm streaming compile failed: "+h);B("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.ob).apply(null,arguments)};var T=e._malloc=function(){return(T=e._malloc=e.asm.pb).apply(null,arguments)},Jb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Jb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.qb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.rb).apply(null,arguments)};
var Gb=e.__sapp_html5_get_ask_leave_site=function(){return(Gb=e.__sapp_html5_get_ask_leave_site=e.asm.sb).apply(null,arguments)},Hb=e.__sapp_emsc_begin_drop=function(){return(Hb=e.__sapp_emsc_begin_drop=e.asm.tb).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.ub).apply(null,arguments)};var Ib=e.__sapp_emsc_end_drop=function(){return(Ib=e.__sapp_emsc_end_drop=e.asm.vb).apply(null,arguments)};
e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.wb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.xb).apply(null,arguments)};
var Nb=e.__sfetch_emsc_head_response=function(){return(Nb=e.__sfetch_emsc_head_response=e.asm.yb).apply(null,arguments)},Kb=e.__sfetch_emsc_get_response=function(){return(Kb=e.__sfetch_emsc_get_response=e.asm.zb).apply(null,arguments)},Mb=e.__sfetch_emsc_failed_http_status=function(){return(Mb=e.__sfetch_emsc_failed_http_status=e.asm.Ab).apply(null,arguments)},Lb=e.__sfetch_emsc_failed_buffer_too_small=function(){return(Lb=e.__sfetch_emsc_failed_buffer_too_small=e.asm.Bb).apply(null,arguments)},Ob=
e.___errno_location=function(){return(Ob=e.___errno_location=e.asm.Cb).apply(null,arguments)},oa=e.stackSave=function(){return(oa=e.stackSave=e.asm.Db).apply(null,arguments)},pa=e.stackRestore=function(){return(pa=e.stackRestore=e.asm.Eb).apply(null,arguments)},D=e.stackAlloc=function(){return(D=e.stackAlloc=e.asm.Fb).apply(null,arguments)},Qb;function fa(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function Rb(){Qb||Sb();Qb||(L=Rb)};
function Sb(a){function b(){if(!Qb&&(Qb=!0,e.calledRun=!0,!ka)){N(Ba);N(Ca);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Tb){var c=a,d=e._main;c=c||[];var f=c.length+1,h=D(4*(f+1));H[h>>2]=ta(ba);for(var g=1;g<f;g++)H[(h>>2)+g]=ta(c[g-1]);H[(h>>2)+f]=0;try{var n=d(f,h);Fb(n)}catch(m){m instanceof fa||"unwind"==m||((c=m)&&"object"===typeof m&&m.stack&&(c=[m,m.stack]),B("exception thrown: "+c),r(1,m))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=
e.postRun.shift(),Ea.unshift(c);N(Ea)}}a=a||aa;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Fa();N(Aa);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Sb;function Fb(a){if(!(noExitRuntime||0<ha)){if(e.onExit)e.onExit(a);ka=!0}r(a,new fa(a))}if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Tb=!0;
e.noInitialRun&&(Tb=!1);Sb();