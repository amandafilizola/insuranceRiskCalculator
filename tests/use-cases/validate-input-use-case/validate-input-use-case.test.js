/**
 * MIT License, 2021
 * @author Amanda Filizola <amandapaivafilizola@gmail.com>
 */

import { validate_input_use_case } from "../../../src/controller/use-cases/validate-input-use-case"
import { valid_input } from "./mock"

const validate_UC = new validate_input_use_case()

/**
 * Unit tests of validate_input_use_case
 */
describe('Validate check_all_inputs function ', () => {

    test('with all valid inputs', () => {
        expect(validate_UC.check_all_inputs(valid_input)).toBe(true)
    })

    test('with missing vehicle input ', () => {
        const { vehicle, ...invalid_input_no_vehicle } = valid_input
        expect(validate_UC.check_all_inputs(invalid_input_no_vehicle)).toBe(false)
    })

    test('with missing house input ', () => {
        const { house, ...invalid_input_no_vehicle } = valid_input
        expect(validate_UC.check_all_inputs(invalid_input_no_vehicle)).toBe(false)
    })

    test('with missing house input ', () => {
        const { house, ...invalid_input_no_vehicle } = valid_input
        expect(validate_UC.check_all_inputs(invalid_input_no_vehicle)).toBe(false)
    })
})

describe('Validate check_valid_number function ', () => {
    test('with valid positive input', () => {
        expect(validate_UC.check_valid_number(35)).toBe(true)
    })

    test('with valid zero input', () => {
        expect(validate_UC.check_valid_number(0)).toBe(true)
    })

    test('with NaN input', () => {
        expect(validate_UC.check_valid_number('35')).toBe(false)
    })

    test('with negative input', () => {
        expect(validate_UC.check_valid_number(-35)).toBe(false)
    })
})

describe('Validate check_marital_status function ', () => {
    test('with valid married input', () => {
        expect(validate_UC.check_marital_status('married')).toBe(true)
    })

    test('with valid single input', () => {
        expect(validate_UC.check_marital_status('single')).toBe(true)
    })

    test('with invalid input', () => {
        expect(validate_UC.check_marital_status('some string')).toBe(false)
    })
})

describe('Validate check_risk_questions function ', () => {
    test('with valid risk array input', () => {
        expect(validate_UC.check_risk_questions([0, 1, 0])).toBe(true)
    })

    test('with invalid NaN input', () => {
        expect(validate_UC.check_risk_questions(['some string', 0, NaN])).toBe(false)
    })

    test('with invalid not array input', () => {
        expect(validate_UC.check_risk_questions('')).toBe(false)
    })
})

describe('Validate check_house function ', () => {
    test('with valid house 0 input', () => {
        expect(validate_UC.check_house(0)).toBe(true)
    })

    test('with valid house input', () => {
        expect(validate_UC.check_house(valid_input.house)).toBe(true)
    })

    test('with invalid input of ownershipstatus', () => {
        expect(validate_UC.check_house({ ownership_status: 'some string' })).toBe(false)
    })

    test('with invalid not object or 0 input', () => {
        expect(validate_UC.check_house('')).toBe(false)
    })
})

describe('Validate check_vehicle function ', () => {
    test('with valid vehicle 0 input', () => {
        expect(validate_UC.check_vehicle(0)).toBe(true)
    })

    test('with valid vehicle input', () => {
        expect(validate_UC.check_vehicle(valid_input.vehicle)).toBe(true)
    })

    test('with invalid input of year as string', () => {
        expect(validate_UC.check_vehicle({ year: 'some string' })).toBe(false)
    })

    test('with invalid input of year as NaN', () => {
        expect(validate_UC.check_vehicle({ year: NaN })).toBe(false)
    })

    test('with invalid not object or 0 input', () => {
        expect(validate_UC.check_vehicle('')).toBe(false)
    })
})