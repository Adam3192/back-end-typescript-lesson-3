import {NextFunction, Request, Response, Router} from 'express';

const router = Router();

function displayForm(req: Request, res: Response, next: NextFunction) {
 res.setHeader('Content-Type', "text/html");
 res.write("<html>");
 res.write("<head><title>Node Server</title></head>");
 res.write("<body>");
 res.write("<h2>Message Form</h2>");
 res.write(`<form method="POST" action="/messages"><input type="text" name="message"><button>Submit</button></form>`)
 res.write("</body>");
 res.write("</html>");
 return res.end();
}

function processForm(req: Request, res: Response, next: NextFunction) {
 console.log(req.body);
 // Redirecting to the /home route
 res.redirect(301, '/home');
}

router.get('/', displayForm);
router.post('/', processForm);

export default router;
