/**
* @author Amanda Filizola <amandapaivafilizola@gmail.com>
*/

import { married, mortgaged, upper_age_limit, upper_income } from "../../constants";

export class algorithm_score_use_case {
    constructor(){}

    process_age(age, score) {
        if(age > upper_age_limit) {
            score.disability.elegible = false
            score.life.elegible = false
        } else if (age < 30) {
            score = this.subtract_all_scores(score, 2)
        } else if (age < 40 && age > 30) {
            score = this.subtract_all_scores(score, 1)
        }
        return score
    }

    process_dependents(dependents, score) {
        if(dependents > 0) {
            score.disability.score += 1
            score.life.score += 1
        }
        return score
    }

    process_house(house, score) {
        if(house === 0) {
            score.home.elegible = false;
        } else if(house.ownership_status === mortgaged) {
            score.home.score += 1
            score.disability.score += 1
        }
        return score
    }

    process_income(income, score) {
        if(income === 0) {
            score.disability.elegible = false
        } else if(income > upper_income) {
            score = this.subtract_all_scores(score, 1)
        }
        return score
    }

    process_marital_status(status, score) {
        if(status === married) {
            score.life.score += 1
            score.disability.score -= 1
        }
        return score
    }

    process_vehicle(vehicle, score) {
        const year = new Date().getFullYear();
        if(vehicle.year && (vehicle.year >= year - 5)) {
            score.auto.score += 1
        }
        return score
    }

    subtract_all_scores(score, number) {
        score.auto.score -= number
        score.disability.score -= number
        score.home.score -= number
        score.life.score -= number
        return score
    }
}
