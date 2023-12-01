import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import accountsRouter from './routes/accounts.route';

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

const PORT = 3000

app.use('/accounts', accountsRouter);

app.listen(PORT, () =>{
    console.log('Servidor Funcionando!');
    
})