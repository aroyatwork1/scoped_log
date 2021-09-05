# log-obj-json
## Get scoped log objects in JSON format

log-obj-json was created out of few simple purpose(s):
- Need not create JSON objects everywhere for logging purposes
- Optional CPU and memory information
- ✨Magic ✨

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd <project-folder>
npm i log-obj-json
```

## How to use
Below is given an example, which demonstrates the intent of the usage.
```sh
const scoped_log = require("scoped_log");
const flowObj = scoped_log.getFlowLogObj('--**--', "ADD_BY_IP", "edge_gw");
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