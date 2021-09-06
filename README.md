# log-obj-json
## Get scoped log objects in JSON format

log-obj-json was created out of few simple purpose(s):
- Need not create JSON objects everywhere for logging purposes
- Optional CPU and memory information
- ✨Magic ✨

## Installation

log-obj-json requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd <project-folder>
npm i log-obj-json
```

## How to use
The intent of this package is to provide a common logging object, which can be created and used at different levels of abstraction.
Generally speaking, We may want to put debug logs for a certain flow starting from the application's main entry point, like app.js and we
need to have the same flow traced through all the routes, middleware(s), controller, service, and other helper functions. The idea is to create a global flow object in app.js and use it to create more and more specific objects for logging as the flow trickles from the application entry point to the last method that you want the flow to be traced. This allows re-use and a minimal number of logging objects to get created.


Below is given an example, which demonstrates the intent of the usage.
```sh
const scoped_log = require("log-obj-json");
const flowObj = scoped_log.getFlowLogObj('--**--', "some-flow-name", "some-m-svc");
const flowModuleObj = scoped_log.getModuleLogObj(flowObj, "somefile.js");

setInterval(async () => {	
	const log_obj = await scoped_log.getLogObj(flowModuleObj, "somemethod", "", {}, true);	
	console.dir(JSON.stringify(log_obj));
}, 1000);
```


## Development

Want to contribute? Great!

Drop me an email at aroyatwork@protonmail.com or fork as you like!!

## License

MIT

**Free Software, Hell Yeah!**