/**
 * @author Amanda Filizola <amandapaivafilizola@gmail.com>
 */

import { base_score_use_case } from "./use-cases/base-score-use-case";
import { validate_input_use_case } from "./use-cases/validate-input-use-case";

export class risk_handler {

    constructor(input) {
        this.input = input;
        this.validation_UC = new validate_input_use_case()
        this.base_score_UC = new base_score_use_case()
    };

    execute() {
        const valid_input = this.validation_UC.validate(this.input)
        if(valid_input === false) {
            throw new Error('invalid input from client');
        }
        const base_score = this.base_score_UC.getBaseScore(this.input.risk_questions)
    }
}