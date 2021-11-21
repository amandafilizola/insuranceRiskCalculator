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
that should make the server start on localhost port 3333. To test the API, you will need some API client such as Postman or Insomnia. You will need to make a GET request to `localhost:3333/risk` with a valid payload on body of request such as below:
```
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
```
{
    "auto": "regular",
    "disability": "ineligible",
    "home": "economic",
    "life": "regular"
}
```







