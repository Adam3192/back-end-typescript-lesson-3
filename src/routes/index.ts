import {NextFunction, Request, Response, Router} from 'express';

const router = Router();

function helloWorld(req: Request, res: Response, next: NextFunction){
 res.send('Hello World')
}

function info(req: Request, res: Response, next: NextFunction){
 console.log(req.params);
 res.send('Server is running at port 3000');
}

router.get('/', helloWorld);
router.get('/info/:username', info)

export default router;

