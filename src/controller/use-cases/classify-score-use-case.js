/**
* @author Amanda Filizola <amandapaivafilizola@gmail.com>
*/

import { economic, economic_upper_bound, inelegible, regular, regular_lower_bound, regular_upper_bound, responsible } from "../../constants"


export class classify_score_use_case {
    constructor(){}

    classify_score(score) {
        let result_score = {}
        for (let prop in score) {
            score[prop].elegible ? result_score[prop] = this.map_score(score[prop].score) : result_score[prop] = inelegible
        }
        return result_score
    }

    map_score(score_number) {
        let classification = '';
        if(score_number <= economic_upper_bound){
            classification = economic
        } else if(score_number >= regular_lower_bound && score_number <= regular_upper_bound) {
            classification = regular
        } else {
            classification = responsible
        }
        return classification
    }
}