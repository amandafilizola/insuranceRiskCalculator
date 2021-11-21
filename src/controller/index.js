/**
 * @author Amanda Filizola <amandapaivafilizola@gmail.com>
 */

import { risk_handler } from "./handler"

/**
 * this function is responsible for receiving the http request,
 * instantiating the handler and returning a response to client
 * @param {any} request
 * @param {any} response
 * @returns {any}
 */
export function index(request, response) {
    try {
        const input = request.body
        const handler = new risk_handler(input)

        const result = handler.execute()

        return response.status(200).json(result)

    } catch(err) {
        return response.status(500).json({ "message": err.message })
    }
}
