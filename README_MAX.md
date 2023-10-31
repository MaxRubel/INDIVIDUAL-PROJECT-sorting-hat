Max's Sorting Hat  [![Netlify Status](https://api.netlify.com/api/v1/badges/4ab7e730-7ed3-4cfd-a988-66195e79a991/deploy-status)](https://app.netlify.com/sites/drt-sortinghat/deploys)
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->

My sorting hat page will add a name to the Hogwarts roster.  The user will click on the sorting add, enter a name, have the name be randomly assigned to one of four Harry Potter houses and will display on the roster.  Several other sorting options will help organize data including, a filter by house function, and an expel function.

[View App](#your-link)

## About the User
- The ideal user for this application is an administrator at Hogwarts.
- They have students that they would like to put into houses, and they're tired of the sorting hat's dramatics.  They decided to update to a more modern system of randomly assigning houses.
- This app helps solve the problem of dealing with the dramatic sorting hat.  He only comes to work two days a week and his methods are outdated.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- Click on the sorting hat to reveal the form.
- When a new student is added an object is created and that object is pushed into an array of students that then prints to the DOM.
- House Colors: The color of the student's card changes depending on which house they were sorted.
- Students can be expelled and dispalyed beneeath the roster in the subheading of Moldy Voldy's Evil Army.
- Expelled students can be re-enrolled, and their names will appear in the main array.

## Video Walkthrough of APP NAME <!-- A loom link is sufficient -->
https://www.loom.com/share/829b90d831ea441ba2db6bea724af210

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](#your-link)
- [Wireframes](#your-link)
- [Project Board](#your-link)

## Code Snippet 
  const sortingHat = document.getElementById("sortingHat");
  sortingHat.addEventListener("click", () => {
    sortingHat.style.display = "none";
    inputForm.style.display = "flex";
  });


## Contributors
- [Max Rubel](https://github.com/MaxRubel)
