import express, { NextFunction, Request, Response } from 'express';
import messageRoutes from './routes/messages'
import routes from './routes/index';
import path from 'path'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/home', routes);
app.use('/messages', messageRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
 res.sendFile(path.join(__dirname, 'views', 'not-found.html'))
})

app.listen(3000);
