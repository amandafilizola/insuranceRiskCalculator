/**
* @author Amanda Filizola <amandapaivafilizola@gmail.com>
*/

export class base_score_use_case {
    constructor(){}

    getBaseScore(risk_questions_array) {
        const base = risk_questions_array.reduce((sum, item) => sum + item, 0)
        return {
            auto: { score: base, elegible: true },
            disability: { score: base, elegible: true },
            home: { score: base, elegible: true },
            life: { score: base, elegible: true },
        }
    }
}
