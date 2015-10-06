var express = require('express');///we're just requiring the express module.
var app = express();


//below is what the variable app returns..just an object with all the functions that the express module provides
// { [Function]
//   init: [Function],
//   defaultConfiguration: [Function],
//   lazyrouter: [Function],
//   handle: [Function],
//   use: [Function: use],
//   route: [Function],
//   engine: [Function],
//   param: [Function],
//   set: [Function],
//   path: [Function],
//   enabled: [Function],
//   disabled: [Function],
//   enable: [Function],
//   disable: [Function],
//   get: [Function],
//   post: [Function],
//   put: [Function],
//   head: [Function],
//   delete: [Function],
//   options: [Function],
//   trace: [Function],
//   copy: [Function],
//   lock: [Function],
//   mkcol: [Function],
//   move: [Function],
//   purge: [Function],
//   propfind: [Function],
//   proppatch: [Function],
//   unlock: [Function],
//   report: [Function],
//   mkactivity: [Function],
//   checkout: [Function],
//   merge: [Function],
//   'm-search': [Function],
//   notify: [Function],
//   subscribe: [Function],
//   unsubscribe: [Function],
//   patch: [Function],
//   search: [Function],
//   connect: [Function],
//   all: [Function],
//   del: [Function],
//   render: [Function],
//   listen: [Function],
//   setMaxListeners: [Function: setMaxListeners],
//   emit: [Function: emit],
//   addListener: [Function: addListener],
//   on: [Function: addListener],
//   once: [Function: once],
//   removeListener: [Function: removeListener],
//   removeAllListeners: [Function: removeAllListeners],
//   listeners: [Function: listeners],
//   request: { app: [Circular] },
//   response: { app: [Circular] },
//   cache: {},
//   settings:
//    { 'x-powered-by': true,
//      etag: 'weak',
//      'etag fn': [Function: wetag],
//      env: 'development',
//      'query parser': 'extended',
//      'query parser fn': [Function],
//      'subdomain offset': 2,
//      'trust proxy': false,
//      'trust proxy fn': [Function: trustNone],
//      view: [Function: View],
//      views: '<<<<<obfuscated>>>>>>>',
//      'jsonp callback name': 'callback' },
//   engines: {},
//   _events: { mount: [Function] },
//   locals:
//    { settings:
//       { 'x-powered-by': true,
//         etag: 'weak',
//         'etag fn': [Function: wetag],
//         env: 'development',
//         'query parser': 'extended',
//         'query parser fn': [Function],
//         'subdomain offset': 2,
//         'trust proxy': false,
//         'trust proxy fn': [Function: trustNone],
//         view: [Function: View],
//         views: '<<<<<obfuscated>>>>>>>',
//         'jsonp callback name': 'callback' } },
//   mountpath: '/' }


// Environments
var env = process.env.NODE_ENV || 'development';
var envConfig = require('./config/env')[env];

// Express configuration -- require() loads an external module.
//using require config without the .jds e
require('./config/config')(app, envConfig);

// Databasee
require('./config/database')(envConfig)

// Routes
require('./config/routes')(app);

// Start server
app.listen(envConfig.port, function(){
  console.log('Server listening on port ' + envConfig.port);
});
