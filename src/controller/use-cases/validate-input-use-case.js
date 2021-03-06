/**
 * MIT License, 2021
 * @author Amanda Filizola <amandapaivafilizola@gmail.com>
 */
import '../../constants'
import { valid_ownership_status, valid_marital_status, valid_properties } from '../../constants'
export class validate_input_use_case {

    constructor() {
    }

    /**
     * initial validate function
     * @param {{ age: number,
     *          dependents: number,
     *          house: any,
     *          income: any,
     *          marital_status: string,
     *          risk_questions: number[],
     *          vehicle: any}} input
     * @returns {boolean}
     */
    validate(input) {
        return Boolean(
            this.check_all_inputs(input) &&
            this.check_valid_number(input.age) &&
            this.check_valid_number(input.dependents) &&
            this.check_valid_number(input.income) &&
            this.check_marital_status(input.marital_status) &&
            this.check_risk_questions(input.risk_questions) &&
            this.check_house(input.house))
    }

    /**
     * validates if all necessary inputs exist
     * @param {{ age: number,
     *          dependents: number,
     *          house: any,
     *          income: any,
     *          marital_status: string,
     *          risk_questions: number[],
     *          vehicle: any}} input
     * @returns {boolean}
     */
    check_all_inputs(input) {
        return Boolean(valid_properties.map((property) => input.hasOwnProperty(property)).every(item => item === true))
    }

    /**
     * validates if input is a number equal or greater than 0
     * @param {number} input_number
     * @returns {boolean}
     */
    check_valid_number(input_number) {
        return Number.isInteger(input_number) && input_number >= 0
    }
    /**
     * validates if input of status string is valid: ["married", "single"]
     * @param {string} status
     * @returns {boolean}
     */
    check_marital_status(status) {
        return Boolean(valid_marital_status.includes(status))
    }

    /**
     * validates if array of risk questions only consists of 1s and 0s
     * @param {number[]} risk_array
     * @returns {boolean}
     */
    check_risk_questions(risk_array) {
        return Array.isArray(risk_array) && risk_array.every((item) => (item === 1 || item === 0))
    }

    /**
     * validates if input of house string is valid: ['owned', 'mortgaged']
     * @param {any} house
     * @returns {boolean}
     */
    check_house(house) {
        return Boolean(((house === 0 || !house) ||
            (house && house.ownership_status && valid_ownership_status.includes(house.ownership_status))))
    }

    /**
     * validates if input of vehicle year is valid
     * @param {any} vehicle
     * @returns {boolean}
     */
    check_vehicle(vehicle) {
        return Boolean(((vehicle === 0 || !vehicle) ||
            (vehicle.year && this.check_valid_number(vehicle.year))))
    }
}