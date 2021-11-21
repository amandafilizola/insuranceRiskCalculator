/**
* @author Amanda Filizola <amandapaivafilizola@gmail.com>
*/

import { married, mortgaged, upper_age_limit, upper_income } from "../../constants";

export class algorithm_score_use_case {
    constructor(){}

    /**
     *
     * @param {{
     *      auto: { score: number, elegible: boolean },
     *      disability: { score: number, elegible: boolean },
     *      home: { score: number, elegible: boolean },
     *      life: { score: number, elegible: boolean }
     *  }} base_score
     */

    /**
     * If the user is over 60 years old, she is ineligible for disability and life insurance.
     * If the user is under 30 years old, deduct 2 risk points from all lines of insurance. If she is between 30 and 40 years old, deduct 1.
     * @param {number} age
     * @param {base_score} score
     * @returns {base_score}
     */
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

    /**
     * If the user has dependents, add 1 risk point to both the disability and life scores.
     * @param {number} dependents
     * @param {base_score} score
     * @returns {base_score}
     */
    process_dependents(dependents, score) {
        if(dependents > 0) {
            score.disability.score += 1
            score.life.score += 1
        }
        return score
    }

    /**
     * If the user's house is mortgaged, add 1 risk point to her home score and add 1 risk point to her disability score.
     * If the user doesn’t have income, vehicles or houses, she is ineligible for disability, auto, and home insurance, respectively.
     * @param {any} house
     * @param {base_score} score
     * @returns {base_score}
     */
    process_house(house, score) {
        if(house === 0) {
            score.home.elegible = false;
        } else if(house.ownership_status === mortgaged) {
            score.home.score += 1
            score.disability.score += 1
        }
        return score
    }

    /**
     * If her income is above $200k, deduct 1 risk point from all lines of insurance.
     * If the user doesn’t have income, vehicles or houses, she is ineligible for disability, auto, and home insurance, respectively.
     * @param {number} income
     * @param {base_score} score
     * @returns {base_score}
     */
    process_income(income, score) {
        if(income === 0) {
            score.disability.elegible = false
        } else if(income > upper_income) {
            score = this.subtract_all_scores(score, 1)
        }
        return score
    }

    /**
     * If the user is married, add 1 risk point to the life score and remove 1 risk point from disability.
     * @param {string} status
     * @param {base_score} score
     * @returns {base_score}
     */
    process_marital_status(status, score) {
        if(status === married) {
            score.life.score += 1
            score.disability.score -= 1
        }
        return score
    }

    /**
     * If the user's vehicle was produced in the last 5 years, add 1 risk point to that vehicle’s score.
     * If the user doesn’t have income, vehicles or houses, she is ineligible for disability, auto, and home insurance, respectively.
     * @param {any} vehicle
     * @param {base_score} score
     * @returns {base_score}
     */
    process_vehicle(vehicle, score) {
        const year = new Date().getFullYear();
        if(vehicle.year && (vehicle.year >= year - 5)) {
            score.auto.score += 1
        } else if(vehicle === 0 || !vehicle) {
            score.auto.elegible = false
        }
        return score
    }

    /**
     *  easy function to subtract all scores at once
     * @param {base_score} score
     * @param {number} subtract_number
     * @returns {base_score}
     */
    subtract_all_scores(score, subtract_number) {
        score.auto.score -= subtract_number
        score.disability.score -= subtract_number
        score.home.score -= subtract_number
        score.life.score -= subtract_number
        return score
    }
}
