# Module 3 - Node day 7 

## Getting this workshop to your computer!

1. Fork it from the GitHub repo page. (this will give you a copy of it in your account.)
2. Clone it to your computer using the `https` address.
    - On your computer, navigate to the folder where you have been saving your workshops. To through folders in the terminal, use
        - MAC: `ls` to view enclosed files/folders
        - WIN: `dir` to view enclosed files/folders
        - `cd <FOLDERNAME>` to move into a folder.
        - Use `cd ..` to go up one level (parent folder)
    - `git clone <URL>`
    - `cd` into the repo folder.
    - `code .`
    - Create a new branch to work from: `git checkout -b my-solutions`
    - Get to work!
    - Once you are done, stage the files with `git add .`
    - Commit them to the branch with `git commit -m 'I did it!`
    - Push it to GitHub `git push origin HEAD`
    - In the GitHub UI, open a PR
    - Done!!

---

## ASYNC / AWAIT

### Exercise 0 to Exercise 2

See the README in the `1-async-await` folder

---

## Promises in action

### Exercise 3 to Exercise 5

See the README folder in `2-promises-in-action`.

---

## Server Endpoints

- Create server endpoints for the these functions. We will be returning jokes to requests that our future frontend will make.
- You can name it whatever you like.
- You will use that endpoint from the Frontend `/make-me-laugh` page

## The Frontend

- Write the JS required to capture the user's joke choice.
- Use `onchange` to make it dynamic.
- Once a user selects a joke-type, a random joke should appear on the page.
- If the user re-selects, then the joke changes.
- To get the joke, contact your server ant the endpoint you created and `request` the type of joke the user wants to see.
