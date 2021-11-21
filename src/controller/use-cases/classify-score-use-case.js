/**
 * MIT License, 2021
 * @author Amanda Filizola <amandapaivafilizola@gmail.com>
 */

import {
    blank, economic, economic_upper_bound, inelegible,
    regular, regular_lower_bound, regular_upper_bound, responsible
} from "../../constants"


export class classify_score_use_case {
    constructor() { }

    /**
     * parses the score object to the expected result output
     * @param {{
     *      auto: { score: number, elegible: boolean },
     *      disability: { score: number, elegible: boolean },
     *      home: { score: number, elegible: boolean },
     *      life: { score: number, elegible: boolean }
     *  }} score
     * @returns {{ auto: string, disability: string, home: string, life: string }}
     */
    classify_score(score) {
        let result_score = {}
        for (let prop in score) {
            score[prop].elegible ? result_score[prop] = this.map_score(score[prop].score) : result_score[prop] = inelegible
        }
        return result_score
    }

    /**
     * processes the classification of the risk score number
     * 0 and below maps to “economic”.
     * 1 and 2 maps to “regular”.
     * 3 and above maps to “responsible”.
     *
     * @param {number} score_number
     * @returns {string}
     */
    map_score(score_number) {
        let classification = blank
        if (score_number <= economic_upper_bound) {
            classification = economic
        } else if (score_number >= regular_lower_bound && score_number <= regular_upper_bound) {
            classification = regular
        } else {
            classification = responsible
        }
        return classification
    }
}