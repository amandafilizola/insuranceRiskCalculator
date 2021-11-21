/**
 * @author Amanda Filizola <amandapaivafilizola@gmail.com>
 */

import { algorithm_score_use_case } from "./use-cases/algorithm-score-use-case";
import { base_score_use_case } from "./use-cases/base-score-use-case";
import { classify_score_use_case } from "./use-cases/classify-score-use-case";
import { validate_input_use_case } from "./use-cases/validate-input-use-case";

export class risk_handler {

    constructor(input) {
        this.input = input;
        this.validation_UC = new validate_input_use_case()
        this.base_score_UC = new base_score_use_case()
        this.algorithm_score_UC = new algorithm_score_use_case()
        this.classify_score_UC = new classify_score_use_case()
    };

    execute() {
        const valid_input = this.validation_UC.validate(this.input)
        if(valid_input === false) {
            throw new Error('invalid input from client');
        }

        const base_score = this.base_score_UC.getBaseScore(this.input.risk_questions)

        let algorithm_score = this.algorithm_score_UC.process_age(this.input.age, base_score);
        algorithm_score = this.algorithm_score_UC.process_dependents(this.input.dependents, algorithm_score);
        algorithm_score = this.algorithm_score_UC.process_house(this.input.house, algorithm_score);
        algorithm_score = this.algorithm_score_UC.process_income(this.input.income, algorithm_score);
        algorithm_score = this.algorithm_score_UC.process_marital_status(this.input.marital_status, algorithm_score);
        algorithm_score = this.algorithm_score_UC.process_vehicle(this.input.vehicle, algorithm_score);

        const result_score = this.classify_score_UC.classify_score(algorithm_score)
        return result_score
    }
}