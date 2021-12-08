/**
 * MIT License, 2021
 * @author Amanda Filizola <amandapaivafilizola@gmail.com>
 */

import { base_score_use_case } from "../../../src/controller/use-cases/base-score-use-case"

const base_score_UC = new base_score_use_case()

/**
 * Unit tests of base_score_use_case
 */
describe('Validate get_base_score function ', () => {

    test('with all all 1 inputs', () => {
        let base = 3
        const result = {
            auto: { score: base, elegible: true },
            disability: { score: base, elegible: true },
            home: { score: base, elegible: true },
            life: { score: base, elegible: true },
            umbrella: { score: base, elegible: false },
        }
        expect(base_score_UC.get_base_score([1, 1, 1])).toStrictEqual(result)
    })

    test('with all 0 inputs', () => {
        let base = 0
        const result = {
            auto: { score: base, elegible: true },
            disability: { score: base, elegible: true },
            home: { score: base, elegible: true },
            life: { score: base, elegible: true },
            umbrella: { score: base, elegible: false },
        }
        expect(base_score_UC.get_base_score([0, 0, 0])).toStrictEqual(result)
    })

    test('with all combination os 1 and 0 inputs', () => {
        let base = 2
        const result = {
            auto: { score: base, elegible: true },
            disability: { score: base, elegible: true },
            home: { score: base, elegible: true },
            life: { score: base, elegible: true },
            umbrella: { score: base, elegible: false },
        }
        expect(base_score_UC.get_base_score([1, 0, 1])).toStrictEqual(result)
    })

})