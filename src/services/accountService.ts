import Account from '../models/account';

class AccountService {
  private accounts: Account[];

  constructor() {
    this.accounts = [];
  }

  createAccount(id: string, balance: number): Account {
    const account: Account = {
      id,
      balance
    };

    this.accounts.push(account);

    return account;
  }

  getAccountBalance(id: string): number {
    const account = this.accounts.find((acc) => acc.id === id);

    if (!account) {
      throw new Error('Account not found');
    }

    return account.balance;
  }

  getAllAccounts(): Account[] {
    return this.accounts;
  }
}

export default AccountService;