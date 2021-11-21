/**
 * MIT License, 2021
 * @author Amanda Filizola <amandapaivafilizola@gmail.com>
 */

import { lower_sub_1_age_limit, married, mortgaged, owned, single, upper_age_limit, upper_income, upper_sub_2_age_limit } from "../../../src/constants";
import { algorithm_score_use_case } from "../../../src/controller/use-cases/algorithm-score-use-case";
import { initial_score } from "./mock";

const algorithm_score_UC = new algorithm_score_use_case()

/**
 * Unit tests of algorithm_score_use_case
 */
describe('Validate process_age function ', () => {
    let mock;

    beforeEach(() => {
        return import('./mock').then(module => {
            mock = module;
            jest.resetModules();
        });
    });

    test('with over 60 years old', () => {
        expect(algorithm_score_UC.process_age(upper_age_limit + 1, mock.initial_score).disability.elegible).toBe(false)
        expect(algorithm_score_UC.process_age(upper_age_limit + 1, mock.initial_score).life.elegible).toBe(false)
    })

    test('with less than 30 years old', () => {
        let result_score = algorithm_score_UC.process_age(upper_sub_2_age_limit - 1, mock.initial_score)
        expect(result_score.disability.score).toBe(-2)
        expect(result_score.life.score).toBe(-2)
        expect(result_score.auto.score).toBe(-2)
        expect(result_score.home.score).toBe(-2)
    })

    test('between 30 and 40 years old', () => {
        let result_score = algorithm_score_UC.process_age(lower_sub_1_age_limit + 1, mock.initial_score)
        expect(result_score.disability.score).toBe(-1)
        expect(result_score.life.score).toBe(-1)
        expect(result_score.auto.score).toBe(-1)
        expect(result_score.home.score).toBe(-1)
    })
})

describe('Validate process_dependents function ', () => {
    let mock;

    beforeEach(() => {
        return import('./mock').then(module => {
            mock = module;
            jest.resetModules();
        });
    });

    test('with one dependent', () => {
        let result_score = algorithm_score_UC.process_dependents(1, mock.initial_score)
        expect(result_score.disability.score).toBe(1)
        expect(result_score.life.score).toBe(1)
    })

    test('with many dependents', () => {
        let result_score = algorithm_score_UC.process_dependents(3, mock.initial_score)
        expect(result_score.disability.score).toBe(1)
        expect(result_score.life.score).toBe(1)
    })

    test('with no dependents', () => {
        let result_score = algorithm_score_UC.process_dependents(0, mock.initial_score)
        expect(result_score.disability.score).toBe(0)
        expect(result_score.life.score).toBe(0)
    })
})

describe('Validate process_house function ', () => {
    let mock;

    beforeEach(() => {
        return import('./mock').then(module => {
            mock = module;
            jest.resetModules();
        });
    });

    test('with inelegible to home if doesnt have any house with 0', () => {
        let result_score = algorithm_score_UC.process_house(0, mock.initial_score)
        expect(result_score.home.elegible).toBe(false)
    })

    test('with inelegible to home if doesnt have any ', () => {
        let result_score = algorithm_score_UC.process_house(undefined, mock.initial_score)
        expect(result_score.home.elegible).toBe(false)
    })

    test('with valid mortgaged house', () => {
        let result_score = algorithm_score_UC.process_house({ ownership_status: mortgaged }, mock.initial_score)
        expect(result_score.home.score).toBe(1)
        expect(result_score.disability.score).toBe(1)
    })

    test('with valid owned house', () => {
        let result_score = algorithm_score_UC.process_house({ ownership_status: owned }, mock.initial_score)
        expect(result_score.home.score).toBe(0)
        expect(result_score.disability.score).toBe(0)
    })

    test('with invalid ownership', () => {
        let result_score = algorithm_score_UC.process_house({ ownership_status: 'some string' }, mock.initial_score)
        expect(result_score.home.score).toBe(0)
        expect(result_score.disability.score).toBe(0)
    })
})

describe('Validate process_income function ', () => {
    let mock;

    beforeEach(() => {
        return import('./mock').then(module => {
            mock = module;
            jest.resetModules();
        });
    });

    test('without any income', () => {
        let result_score = algorithm_score_UC.process_income(0, mock.initial_score)
        expect(result_score.disability.elegible).toBe(false)
    })

    test('with more than limit income', () => {
        let result_score = algorithm_score_UC.process_income(upper_income+1, mock.initial_score)
        expect(result_score.disability.score).toBe(-1)
        expect(result_score.life.score).toBe(-1)
        expect(result_score.auto.score).toBe(-1)
        expect(result_score.home.score).toBe(-1)
    })

    test('with regular income', () => {
        let result_score = algorithm_score_UC.process_income(upper_income-1, mock.initial_score)
        expect(result_score.disability.score).toBe(0)
        expect(result_score.life.score).toBe(0)
        expect(result_score.auto.score).toBe(0)
        expect(result_score.home.score).toBe(0)
    })
})

describe('Validate process_marital_status function ', () => {
    let mock;

    beforeEach(() => {
        return import('./mock').then(module => {
            mock = module;
            jest.resetModules();
        });
    });

    test('with valid married status', () => {
        let result_score = algorithm_score_UC.process_marital_status(married, mock.initial_score)
        expect(result_score.life.score).toBe(1)
        expect(result_score.disability.score).toBe(-1)
    })

    test('with valid single status', () => {
        let result_score = algorithm_score_UC.process_marital_status(single, mock.initial_score)
        expect(result_score.home.score).toBe(0)
        expect(result_score.disability.score).toBe(0)
    })

    test('with invalid status', () => {
        let result_score = algorithm_score_UC.process_marital_status('some string', mock.initial_score)
        expect(result_score.home.score).toBe(0)
        expect(result_score.disability.score).toBe(0)
    })
})

describe('Validate process_vehicle function ', () => {
    let mock;

    beforeEach(() => {
        return import('./mock').then(module => {
            mock = module;
            jest.resetModules();
        });
    });

    test('with inelegible to vehicle if doesnt have any vehicle with 0', () => {
        let result_score = algorithm_score_UC.process_vehicle(0, mock.initial_score)
        expect(result_score.auto.elegible).toBe(false)
    })

    test('with inelegible to vehicle if doesnt have any', () => {
        let result_score = algorithm_score_UC.process_vehicle(undefined, mock.initial_score)
        expect(result_score.auto.elegible).toBe(false)
    })

    test('with valid vehicle on 5 year limit', () => {
        const year = new Date().getFullYear()
        let result_score = algorithm_score_UC.process_vehicle({ year }, mock.initial_score)
        expect(result_score.auto.score).toBe(1)
    })

    test('with valid vehicle out of 5 year limit', () => {
        const year = new Date().getFullYear()
        let result_score = algorithm_score_UC.process_vehicle({ year: year-6 }, mock.initial_score)
        expect(result_score.auto.score).toBe(0)
    })
})

describe('Validate subtract_all_scores function ', () => {
    let mock;

    beforeEach(() => {
        return import('./mock').then(module => {
            mock = module;
            jest.resetModules();
        });
    });

    test('subtract 1 from all lines', () => {
        let result_score = algorithm_score_UC.subtract_all_scores(mock.initial_score, 1)
        expect(result_score.disability.score).toBe(-1)
        expect(result_score.life.score).toBe(-1)
        expect(result_score.auto.score).toBe(-1)
        expect(result_score.home.score).toBe(-1)
    })

    test('subtract 3 from all lines', () => {
        let result_score = algorithm_score_UC.subtract_all_scores(mock.initial_score, 3)
        expect(result_score.disability.score).toBe(-3)
        expect(result_score.life.score).toBe(-3)
        expect(result_score.auto.score).toBe(-3)
        expect(result_score.home.score).toBe(-3)
    })
})