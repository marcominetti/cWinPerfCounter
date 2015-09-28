// Attempt to load each of the available .node files for the current processor
// architecture until one succeeds, or throw an exception if none do.
module.exports = require("./build/Release/cwinperfcounter-next.node")["cWinPerfCounter"];
