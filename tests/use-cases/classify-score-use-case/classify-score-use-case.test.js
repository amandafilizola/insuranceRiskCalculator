/**
 * MIT License, 2021
 * @author Amanda Filizola <amandapaivafilizola@gmail.com>
 */

import { economic, economic_upper_bound, regular, regular_lower_bound, regular_upper_bound, responsible, responsible_lower_bound } from "../../../src/constants"
import { classify_score_use_case } from "../../../src/controller/use-cases/classify-score-use-case"
import { all_inelegible, all_inelegible_result, inelegible_auto, inelegible_auto_result, inelegible_disability_life, inelegible_disability_life_result, valid_economic_input, valid_economic_input_result, valid_regular_input, valid_regular_input_result, valid_responsible_input, valid_responsible_input_result } from "./mock"


const classify_score_UC = new classify_score_use_case()

/**
 * Unit tests of classify_score_use_case
 */
describe('Validate map_score function ', () => {
    test('with negative number', () => {
        expect(classify_score_UC.map_score(economic_upper_bound - 3)).toBe(economic)
    })

    test('on economic upper bound', () => {
        expect(classify_score_UC.map_score(economic_upper_bound)).toBe(economic)
    })

    test('on regular lower bound', () => {
        expect(classify_score_UC.map_score(regular_lower_bound)).toBe(regular)
    })

    test('on regular upper bound', () => {
        expect(classify_score_UC.map_score(regular_upper_bound)).toBe(regular)
    })

    test('on responsible lower bound', () => {
        expect(classify_score_UC.map_score(responsible_lower_bound)).toBe(responsible)
    })

    test('over responsible lower bound', () => {
        expect(classify_score_UC.map_score(responsible_lower_bound + 3)).toBe(responsible)
    })
})

describe('Validate classify_score function ', () => {
    test('with all economic', () => {
        expect(classify_score_UC.classify_score(valid_economic_input)).toStrictEqual(valid_economic_input_result)
    })

    test('with all regular', () => {
        expect(classify_score_UC.classify_score(valid_regular_input)).toStrictEqual(valid_regular_input_result)
    })

    test('with all responsible', () => {
        expect(classify_score_UC.classify_score(valid_responsible_input)).toStrictEqual(valid_responsible_input_result)
    })

    test('with inelegible auto', () => {
        expect(classify_score_UC.classify_score(inelegible_auto)).toStrictEqual(inelegible_auto_result)
    })

    test('with inelegible disability and life', () => {
        expect(classify_score_UC.classify_score(inelegible_disability_life)).toStrictEqual(inelegible_disability_life_result)
    })

    test('with all inelegible', () => {
        expect(classify_score_UC.classify_score(all_inelegible)).toStrictEqual(all_inelegible_result)
    })
})