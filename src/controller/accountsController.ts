import { Request, Response } from 'express';
import AccountService from '../services/accountService';

const accountService = new AccountService();

export  const createAccount = (req: Request, res: Response) => {
  try {
    // Obtén los datos necesarios de la solicitud
    const { id, balance } = req.body;

    // Llama al servicio para crear la cuenta
    const account = accountService.createAccount(id, balance);

    // Envía la respuesta
    res.status(201).json(account);
  } catch (error) {
    // Manejo de errores
    console.error('Error al crear la cuenta:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getAccountBalance = (req: Request, res: Response) => {
  try {
    // Obtén el ID de la cuenta de la solicitud
    const { id } = req.params;

    // Llama al servicio para obtener el saldo de la cuenta
    const balance = accountService.getAccountBalance(id);

    // Envía la respuesta
    res.json({ balance });
  } catch (error) {
    // Manejo de errores
    console.error('Error al obtener el saldo de la cuenta:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getAllAccounts = (req: Request, res: Response) => {
    try {
      // Llama al servicio para obtener todas las cuentas registradas
      const accounts = accountService.getAllAccounts();
  
      // Envía la respuesta
      res.json(accounts);
    } catch (error) {
      // Manejo de errores
      console.error('Error al obtener todas las cuentas:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };