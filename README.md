Test task User application

[DEMO LINK](https://Oleksandr-Ivanchenko.github.io/test-task-abz/)

Adaptive layout - screen resolution 2560px, 1024px, 768px, 360px.

Technologies used - SASS (SCSS), HTML, React, Typescript, MaterialUI library, React router package

Due to the fact that I used regular expressions from the documentation, the linter gives an error.


1. During investigating mockup I decided to use MaterialUI library, because of similar input components, which takes more time to create it from scratch than another imported elements.

2. Than I implemented the "Working with a GET request" (worked with REST API (GET)) block whith users cards without a specific size for heights, because of situation when the text filled by the user is larger than the standard card. In card lis I dispayed 6 users from the API request results. "Show more" button is hidden when the last page of API request results is reached. 

4. Than I implemented Working with REST API (POST) – registration form block “Working with POST request”. 
To display radio buttons in the registration form, I use the GET /positions method from the API documentation. All fields (besides 'position' - there is no need to validate it)  has validation on front-end side according to mockups and API documentation.





