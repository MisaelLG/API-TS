import express, { Router, Request, Response } from 'express';
import  {createAccount, getAccountBalance, getAllAccounts} from '../controller/accountsController';

const router: Router = express.Router();

// Ruta para crear una cuenta
router.post('/', createAccount );
  // Implementa la lógica para crear una cuenta);

// Ruta para obtener el saldo de una cuenta
router.get('/:id/balance', getAccountBalance);

router.get('/all', getAllAccounts);

export default router;