/**
 * MIT License, 2021
 * @author Amanda Filizola <amandapaivafilizola@gmail.com>
 */

import { risk_handler } from "../../src/controller/handler"
/**
 * Unit tests of handler
 */

describe('Validate execute function ', () => {
    let mock
    beforeEach(() => {
        return import('./mock').then(module => {
            mock = module
            jest.resetModules()
        })
    })

    test('with valid input ', () => {
        const handler = new risk_handler(mock.initial_input)
        let result = handler.execute()
        expect(result).toStrictEqual(mock.initial_input_result)
    })

    test('with invalid age input ', () => {
        const handler = new risk_handler(mock.initial_invalid_input)
        expect(() => handler.execute()).toThrow(Error)
    })

    test('with valid input ', () => {
        const handler = new risk_handler(mock.initial_input_2)
        let result = handler.execute()
        expect(result).toStrictEqual(mock.initial_input_result_2)
    })
})