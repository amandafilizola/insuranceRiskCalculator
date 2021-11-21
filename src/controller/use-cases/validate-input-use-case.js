/**
* @author Amanda Filizola <amandapaivafilizola@gmail.com>
*/
import '../../constants';
import { valid_ownership_status, valid_marital_status,valid_properties } from '../../constants';
export class validate_input_use_case {

    constructor() {
    };

    /**
     *
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
     *
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
        return Boolean(valid_properties.every((property) => input.hasOwnProperty(property)))
    }

    /**
     *
     * @param {number} input_number
     * @returns {boolean}
     */
    check_valid_number(input_number) {
        return Number.isInteger(input_number) && input_number >= 0
    }
    /**
     *
     * @param {string} status
     * @returns {boolean}
     */
    check_marital_status(status) {
        return Boolean(valid_marital_status.includes(status))
    }

    /**
     *
     * @param {number[]} risk_array
     * @returns {boolean}
     */
    check_risk_questions(risk_array) {
        return risk_array.every((item) => (item === 1 || item === 0))
    }

    /**
     *
     * @param {any} house
     * @returns {boolean}
     */
    check_house(house) {
        return (house === 0 ||
            (house.ownership_status && valid_ownership_status.includes(house.ownership_status)))
    }

    /**
     *
     * @param {any} vehicle
     * @returns {boolean}
     */
    check_vehicle(vehicle) {
        return (vehicle === 0 ||
            (vehicle.year && this.check_valid_number(vehicle.year)))
    }
}