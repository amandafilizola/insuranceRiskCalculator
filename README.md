# Insurance Challenge
## How to run
This project depends on Node.js to run, so you need to have it installed already. Clone this repository, enter the folder, open a terminal on this folder and type:
```
npm install
```
and then:
```
npm run dev
```
That should start the server on localhost port 3333. To test the API, you will need some API client such as Postman or Insomnia. You will need to make a GET request to `localhost:3333/risk` with a valid payload on body of request such as below:
```json
{
  "age": 35,
  "dependents": 2,
  "house": { "ownership_status": "owned" },
  "income": 0,
  "marital_status": "married",
  "risk_questions": [0, 1, 0],
  "vehicle": { "year": 2018 }
}
```
that should output:
```json
{
    "auto": "regular",
    "disability": "ineligible",
    "home": "economic",
    "life": "regular"
}
```
## How to run tests
With the repository open on terminal, type
```
npm run test
```
to start a test run on Jest. Follow the instructions on the command line.

## Technical Decisions
### Language and Frameworks
For this project I needed one local server to run my API server, so Node.js + express was an easy choice, for I'm very fluent in Javascript/Typescript.
Also chose to use `snake_case` on the repository because many people have experience with Python and that casing is the most common there.
I commented most of my functions, along with the JsDocs to describe expected params and return types.

### Architecture
This is architecture was based on Clean Architecture layers and the Single Responsability Principle. More on this [blog](https://proandroiddev.com/why-you-need-use-cases-interactors-142e8a6fe576).

Presentation: index.js

Application: handler.js

Model/Domain: use-cases

![alt text](./architecture_schema.png "Image schema of architecture")

All use cases were divided by [one responsability](https://stackify.com/solid-design-principles/).
1. Validation
2. Base Score Building
3. Risk Algorithm Application
4. Final Score Classification.

That makes the repo easier to maintain, and keeps all responsabilities segregated.
