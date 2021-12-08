/**
 * MIT License, 2021
 * @author Amanda Filizola <amandapaivafilizola@gmail.com>
 */

export class base_score_use_case {
    constructor() { }

    /**
     * calculates base risk from sum of given array and mounts base score object
     * @param {number[]} risk_questions_array
     * @returns {{
     *      auto: { score: number, elegible: boolean },
     *      disability: { score: number, elegible: boolean },
     *      home: { score: number, elegible: boolean },
     *      life: { score: number, elegible: boolean },
     *      umbrella: { score: number, elegible: boolean }
     *  }}
     */
    get_base_score(risk_questions_array) {
        const base = risk_questions_array.reduce((sum, item) => sum + item, 0)
        return {
            auto: { score: base, elegible: true },
            disability: { score: base, elegible: true },
            home: { score: base, elegible: true },
            life: { score: base, elegible: true },
            umbrella: { score: base, elegible: false },
        }
    }
}
