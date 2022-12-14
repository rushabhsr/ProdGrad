# ProdGrad
Prograd Engineering Interview Task



### Task 1

In the `data` folder of this repo there is a CSV file called `reactions.csv`. It contains real data corresponding to how users on ProGrad have reacted to (saved or skipped) jobs on the platform.

The reaction data consists of four columns:

- `user_id` - the integer ID of the user who liked or disliked the job
- `job_id` - the integer ID of the job the user interacted with
- `direction` - whether the user liked (`true`) or disliked (`false`) the job
- `time` - the timestamp corresponding to when they reacted to the job

**Task**: The similarity score between two users is the number of jobs which they both like. Find the two users with the highest similarity.


**Answer**: _taskOne.js_
- Please perform npm install as soon as you clone the repository.

### Task 2

In the `data` folder there is an additional CSV file called `jobs.csv`. It contains unique integer IDs for over 12,000 jobs, along with integer IDs for the job's associated company.

**Task**: The similarity score between two companies is the number of users who like at least one job at both companies. Using both the `reactions.csv` and `jobs.csv` data, find the two companies with the highest similarity score.

**Answer**: _taskTwo.js_

### Task 3

Engineering at ProGrad is truly full-stack. Features are owned end-to-end, from backend and database-level work to front-end finishes.

We don't think it's fair to ask you to build something with a UI, as we know this can take a while and time is precious. Instead, we'd love to see an example of something you've already built and hear about what you learned building it.

**Task**: Share an example of something you've built using front-end web technologies.

- A link to a GitHub repo is ideal
- If the best example of your work is something you've done at a company, it's okay to link to a live deployed version
- If you can't link to anything, a screenshot is also fine
- Add 10-15 unit test cases to the project that you are planning to share.
- TestCases.xlsx contains the test cases.
**Answer**: _https://github.com/rushabhsr/ArtTales_

- You can find the HTML/CSS/JavaScript version of the same:
_https://art-tales.web.app/_

**Task**: Tell us about the biggest challenge you faced in building the above.

**Answer**: _While developing this full stack project, initially i struggled with splitting react components which after a while i was able to manage CRUD operations from the MongoDB (Only String Data). After that development for the same went smoothly for a while until i had to handle images (storing and retrieving) for the Admin to perform CRUD operations of his/her Arts that will be displayed; still i haven't implemented the same in this project._
