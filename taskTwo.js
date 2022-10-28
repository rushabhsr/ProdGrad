let csvToJson = require('convert-csv-to-json');

let jobsFile = './data/jobs.csv';
let reactionsFile = './data/reactions.csv';

let jobs = csvToJson.fieldDelimiter(',').getJsonFromCsv(jobsFile);
console.log(jobs[0]);
let jobs1 = [...jobs];
let reactions = csvToJson.fieldDelimiter(',').getJsonFromCsv(reactionsFile);

reactions = reactions.filter(x => x.direction === 'true');
// let reactions1 = [...reactions];
console.log(reactions[0]);
//Task 2
let jobCount = {};
for (let i = 0; i < reactions.length; i++) {
    if (!jobCount.hasOwnProperty(reactions[i].user_id)) {
        jobCount[reactions[i].user_id] = [reactions[i].job_id];
    } else {
        if (!jobCount[reactions[i].user_id].includes(reactions[i].job_id))
            jobCount[reactions[i].user_id].push(reactions[i].job_id);
    }
}
console.log(`jobCount: ${jobCount["5193"]}`);
let cmpUserMap = {};
for (const user in jobCount) {
    for (let i = 0; i < jobCount[user].length; i++) {
    let currJob = jobs.filter(x => x === user[i])
    if (!cmpUserMap.hasOwnProperty(currJob.company_id)) {
        cmpUserMap[currJob.company_id] = user
    } else {
        if (!jobCount[reactions[i].user_id].includes(reactions[i].job_id))
            jobCount[reactions[i].user_id].push(reactions[i].job_id);
    }
    }
}
let cmpSimilarityScore = {};
// let maxSimilarity = Object.keys(cmpSimilarityScore).reduce(function (a, b) { return cmpSimilarityScore[a] > cmpSimilarityScore[b] ? a : b });
// console.log(`Max Similarity score is of users:${maxSimilarity.split("_")} and score is ${cmpSimilarityScore[maxSimilarity]}`);
