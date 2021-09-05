const osu = require("node-os-utils");
const osCmd = osu.osCmd;
const cpu = osu.cpu;
const mem = osu.mem;

function getFlowLogObj(prefix, flowType, svc) {
	return {		
		prefix: prefix,
		flowType: flowType,		
		svc: `[${svc}]`
	};
}

function getModuleLogObj(flowLogObj, file) {
	flowLogObj['file'] = `[${file}]`;
	return flowLogObj;
}

async function getLogObj(moduleLogObj, method, message="", body={}, includeStats=false) {
	let stat_obj = {};

	if(includeStats) {
		stat_obj = {
			cpu: {
				cpuPercentage: await cpu.usage(),
				cpuFree: await cpu.free(),
			},
			memory: await mem.info()
		};
	}

	moduleLogObj['method'] = method;
	moduleLogObj['message'] = message;
	moduleLogObj['body'] = body;	
	moduleLogObj['stat_obj'] = stat_obj;
	moduleLogObj['timestamp'] = new Date().toISOString();

	return moduleLogObj;
}

module.exports = {
	getFlowLogObj: getFlowLogObj,
	getModuleLogObj: getModuleLogObj,
	getLogObj: getLogObj
};