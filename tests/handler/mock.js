export const initial_input = {
    "age": 35,
    "dependents": 2,
    "house": { "ownership_status": "owned" },
    "income": 0,
    "marital_status": "married",
    "risk_questions": [0, 1, 0],
    "vehicle": { "year": 2018 }
}

export const initial_input_result = {
    "auto": "regular",
    "disability": "ineligible",
    "home": "economic",
    "life": "regular",
    "umbrella": "economic"
}

export const initial_input_2 = {
    "age": 35,
    "dependents": 2,
    "house": { "ownership_status": "owned" },
    "income": 0,
    "marital_status": "married",
    "risk_questions": [1, 1, 1],
    "vehicle": { "year": 2018 }
}

export const initial_input_result_2 = {
    "auto": "responsible",
    "disability": "ineligible",
    "home": "regular",
    "life": "responsible",
    "umbrella": "ineligible"
}

export const initial_invalid_input = {
    "age": '35',
    "dependents": 2,
    "house": { "ownership_status": "owned" },
    "income": 0,
    "marital_status": "married",
    "risk_questions": [0, 1, 0],
    "vehicle": { "year": 2018 }
}