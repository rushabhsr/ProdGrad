let csvToJson = require('convert-csv-to-json');

let jobsFile = './data/jobs.csv';
let reactionsFile = './data/reactions.csv';

let jobs = csvToJson.fieldDelimiter(',').getJsonFromCsv(jobsFile);
// console.log(jobs[0]);
let reactions = csvToJson.fieldDelimiter(',').getJsonFromCsv(reactionsFile);
reactions = reactions.filter(x => x.direction === 'true');
// console.log(reactions[0]);
//Task 2
let jobCmpMap = {};
for (let i = 0; i < jobs.length; i++) {
    // console.log(`${jobs[i].job_id}:${jobs[i].company_id}`)
    jobCmpMap[jobs[i].job_id] = jobs[i].company_id;
}

// console.log(`jobCmpMap: ${jobCmpMap["9975"]}`);
// console.log(`jobCmpMap: ${JSON.stringify(jobCmpMap)}`);
let cmpUserMap = {};
for (let i = 0; i < reactions.length; i++) {
    if (!cmpUserMap.hasOwnProperty(jobCmpMap[reactions[i].job_id])) {
        cmpUserMap[jobCmpMap[reactions[i].job_id]] = [reactions[i].user_id];
    } else {
        if (!cmpUserMap[jobCmpMap[reactions[i].job_id]].includes(reactions[i].user_id))
            cmpUserMap[jobCmpMap[reactions[i].job_id]].push(reactions[i].user_id);
    }
}
// console.log(`cmpUserMap: ${JSON.stringify(cmpUserMap)}`);
function countSimilarScore(a, b) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i])) {
            count++;
        }
    }
    return count;
}

let allCmps = Object.keys(cmpUserMap);
let cmpSimilarityScore = {};
for (let i = 0; i < allCmps.length; i++) {
    for (let j = 0; j != i && j < allCmps.length; j++) {
        let cmpStr = allCmps[i] + "_" + allCmps[j];
        let cmpStrrev = allCmps[j] + "_" + allCmps[i];
        if (!cmpSimilarityScore.hasOwnProperty(cmpStr) && !cmpSimilarityScore.hasOwnProperty(cmpStrrev)) {
            // cmpSimilarityScore[cmpStr] = countSimilarScore(cmpUserMap[allCmps[i]], cmpUserMap[allCmps[j]]);
            cmpSimilarityScore[cmpStr] = countSimilarScore(cmpUserMap[allCmps[i]], cmpUserMap[allCmps[j]]);
        }
    }
}

let maxSimilarity = Object.keys(cmpSimilarityScore).reduce(function (a, b) { return cmpSimilarityScore[a] > cmpSimilarityScore[b] ? a : b });
console.log(`Max Similarity score is of companies: ${maxSimilarity.split("_")} and score is ${cmpSimilarityScore[maxSimilarity]}`);
