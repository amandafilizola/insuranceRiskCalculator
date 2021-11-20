/**
 * @author Amanda Filizola <amandapaivafilizola@gmail.com>
 */

import { risk_handler } from "./handler";

export function index(request, response) {
    try {
        const input = request.body;
        const handler = new risk_handler(input)

        handler.execute();

        return response.status(200).json({ "ok": "ok" })

    } catch(err) {
        return response.status(500).json({ "message": err.message })
    }
}
