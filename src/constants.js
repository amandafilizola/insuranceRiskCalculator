/**
 * MIT License, 2021
 * @author Amanda Filizola <amandapaivafilizola@gmail.com>
 */

export const valid_marital_status = [ 'married', 'single' ]
export const married = 'married'
export const single = 'single'
export const valid_ownership_status = ['owned', 'mortgaged']
export const mortgaged = 'mortgaged'
export const owned = 'owned'
export const blank = ''

export const inelegible = 'ineligible'
export const economic = 'economic'
export const regular = 'regular'
export const responsible = 'responsible'

export const valid_properties = [
    "age",
    "dependents",
    "house",
    "income",
    "marital_status",
    "risk_questions",
    "vehicle"
]
export const upper_age_limit = 60
export const upper_sub_2_age_limit = 30
export const lower_sub_1_age_limit = 30
export const upper_sub_1_age_limit = 40

export const upper_income = 200000
export const economic_upper_bound = 0
export const regular_lower_bound = 1
export const regular_upper_bound = 2
export const responsible_lower_bound = 3