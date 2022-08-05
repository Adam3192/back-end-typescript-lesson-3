"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
function displayForm(req, res, next) {
    res.setHeader('Content-Type', "text/html");
    res.write("<html>");
    res.write("<head><title>Node Server</title></head>");
    res.write("<body>");
    res.write("<h2>Message Form</h2>");
    res.write(`<form method="POST" action="/messages"><input type="text" name="message"><button>Submit</button></form>`);
    res.write("</body>");
    res.write("</html>");
    return res.end();
}
function processForm(req, res, next) {
    console.log(req.body);
    // Redirecting to the /home route
    res.redirect(301, '/home');
}
router.get('/', displayForm);
router.post('/', processForm);
exports.default = router;
