const { performance } = require('perf_hooks');
const times = {};

module.exports = (label) => {
    const now = performance.now();

    if (!times[label]) {
        times[label] = now;
        return;
    }

    const beginTime = times[label];
    const elapsed = now - beginTime;
    delete times[label];
    return { label, elapsed: Number.parseFloat(elapsed.toFixed(2)) };
}