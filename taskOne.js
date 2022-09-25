let csvToJson = require('convert-csv-to-json');

let jobsFile = './data/jobs.csv';
let reactionsFile = './data/reactions.csv';

let jobs = csvToJson.fieldDelimiter(',').getJsonFromCsv(jobsFile);
// console.log(jobs[0]);
let reactions = csvToJson.fieldDelimiter(',').getJsonFromCsv(reactionsFile);

reactions = reactions.filter(x => x.direction === 'true');
let reactions1 = [...reactions];
// console.log(reactions[0]);
//Task 2
let userSimilarityScore = {};
for (let i = 0; i < reactions.length; i++) {
    for (let j = 0; j < reactions1.length; j++) {
        if (reactions[i].user_id !== reactions1[j].user_id && reactions[i].job_id === reactions1[j].job_id) {
            let user_string = reactions[i].user_id + "_" + reactions1[j].user_id;
            let user_stringrev = reactions1[i].user_id + "_" + reactions[j].user_id;
            if (!userSimilarityScore.hasOwnProperty(user_string) && !userSimilarityScore.hasOwnProperty(user_stringrev)) {
                userSimilarityScore[user_string] = 1;
            }
            else {
                userSimilarityScore[user_string] += 1;
            }
        }
    }
}
let maxSimilarity = Object.keys(userSimilarityScore).reduce(function (a, b) { return userSimilarityScore[a] > userSimilarityScore[b] ? a : b });
console.log(`Max Similarity score is of users:${maxSimilarity.split("_")}`);
// console.log(`Max Similarity score is of users:${maxSimilarity.split("_")} and score is ${userSimilarityScore[maxSimilarity]}`);

