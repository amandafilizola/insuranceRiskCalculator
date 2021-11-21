/**
 * MIT License, 2021
 * @author Amanda Filizola <amandapaivafilizola@gmail.com>
 */

import { economic, regular, responsible, inelegible } from "../../../src/constants"

export const valid_economic_input = {
    auto: { score: 0, elegible: true },
    disability: { score: 0, elegible: true },
    home: { score: 0, elegible: true },
    life: { score: 0, elegible: true }
}
export const valid_economic_input_result = {
    auto: economic,
    disability: economic,
    home: economic,
    life: economic
}

export const valid_regular_input = {
    auto: { score: 1, elegible: true },
    disability: { score: 1, elegible: true },
    home: { score: 1, elegible: true },
    life: { score: 1, elegible: true }
}
export const valid_regular_input_result = {
    auto: regular,
    disability: regular,
    home: regular,
    life: regular
}

export const valid_responsible_input = {
    auto: { score: 3, elegible: true },
    disability: { score: 3, elegible: true },
    home: { score: 3, elegible: true },
    life: { score: 3, elegible: true }
}

export const valid_responsible_input_result = {
    auto: responsible,
    disability: responsible,
    home: responsible,
    life: responsible
}

export const inelegible_auto = {
    auto: { score: 3, elegible: false },
    disability: { score: 3, elegible: true },
    home: { score: 3, elegible: true },
    life: { score: 3, elegible: true }
}

export const inelegible_auto_result = {
    auto: inelegible,
    disability: responsible,
    home: responsible,
    life: responsible
}


export const inelegible_disability_life = {
    auto: { score: 3, elegible: true },
    disability: { score: 3, elegible: false },
    home: { score: 3, elegible: true },
    life: { score: 3, elegible: false }
}

export const inelegible_disability_life_result = {
    auto: responsible,
    disability: inelegible,
    home: responsible,
    life: inelegible
}


export const all_inelegible = {
    auto: { score: 3, elegible: false },
    disability: { score: 3, elegible: false },
    home: { score: 3, elegible: false },
    life: { score: 3, elegible: false }
}

export const all_inelegible_result = {
    auto: inelegible,
    disability: inelegible,
    home: inelegible,
    life: inelegible
}
