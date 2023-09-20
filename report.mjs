import process from "process";

process.report.reportOnUncaughtException = true;
process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.filename = "report.json"

function sampleError() {
    throw new Error ("oh nooooo");
}

sampleError();