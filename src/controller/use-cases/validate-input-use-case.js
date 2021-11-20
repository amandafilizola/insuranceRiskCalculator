/**
* @author Amanda Filizola <amandapaivafilizola@gmail.com>
*/
import '../../constants';
import { valid_ownership_status, valid_marital_status,valid_properties } from '../../constants';
export class validate_input_use_case {

    constructor() {
    };

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

    check_all_inputs(input) {
        return Boolean(valid_properties.every((property) => input.hasOwnProperty(property)))
    }

    check_valid_number(number) {
        return Number.isInteger(number) && number >= 0
    }

    check_marital_status(status) {
        return Boolean(valid_marital_status.includes(status))
    }

    check_risk_questions(array) {
        return array.every((item) => (item === 1 || item === 0))
    }

    check_house(house) {
        return (house === 0 ||
            (house.ownership_status && valid_ownership_status.includes(house.ownership_status)))
    }

    check_vehicle(vehicle) {
        return (vehicle === 0 ||
            (vehicle.year && this.check_valid_number(vehicle.year)))
    }
}