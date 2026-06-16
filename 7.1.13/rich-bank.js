const accounts = [
  { id: 1, owner: "Alice", balance: 500 },
  { id: 2, owner: "Bob", balance: 300 },
];

function getAccountById(id) {
  if (typeof id !== "number" || !Number.isFinite(id)) {
    throw new Error("Account must be a valid number");
  }
  for (const account of accounts) {
    if (account.id === id) {
      return account;
    }
  }
  throw new Error("Account does not exist");
}

function createAccount(newAccountId, newAccountOwner) {
  if (
    typeof newAccountId !== "number" ||
    newAccountId < 0 ||
    !Number.isFinite(newAccountId)
  ) {
    throw new Error("Account ID must be a valid, positive, finite number");
  }

  if (typeof newAccountOwner !== "string" || newAccountOwner.trim() === "") {
    throw new Error("Account Owner must be a valid, non-empty string");
  }

  for (const account of accounts) {
    if (newAccountId === account.id) {
      throw new Error("Account ID already exists.");
    }
  }

  const newAccount = {
    id: newAccountId,
    owner: newAccountOwner,
    balance: 0,
  };

  accounts.push(newAccount);
  return newAccount;
}

function isValidNumber(amount) {
  if (typeof amount !== "number" || amount < 1 || !Number.isFinite(amount)) {
    throw new Error(
      "Invalid value for amount: The amount must be a non-zero, positive, finite number.",
    );
  }
}

function depositMoney(accountId, amount) {
  isValidNumber(amount);
  const account = getAccountById(accountId);

  if (!account) {
    throw new Error("Account not found");
  }

  account.balance += amount;
  return account;
}

function withdrawMoney(accountId, amount) {
  isValidNumber(amount);
  const account = getAccountById(accountId);

  if (amount > account.balance) {
    throw new Error("Withdrawal amount exceeds balance.");
  }

  account.balance -= amount;
  return account;
}

function transferMoney(fromAccountId, toAccountId, amount) {
  isValidNumber(amount);
  const fromAccount = getAccountById(fromAccountId);
  const toAccount = getAccountById(toAccountId);

  if (fromAccountId === toAccountId) {
    throw new Error("Cannot transfer to the same account.");
  }

  if (amount > fromAccount.balance) {
    throw new Error("Insufficient balance");
  }

  fromAccount.balance -= amount;
  toAccount.balance += amount;
  return { fromAccount, toAccount };
}

/*
Hints:

getAccountById("1");

createAccount(1, "Alice");
createAccount("3", "Charlie");
createAccount(-3, "Charlie");
createAccount(3, ["Charlie"]);
createAccount(3, "");
createAccount(3, "  ");

depositMoney(1, "300")
depositMoney(1, -300)
depositMoney(1, 0)
depositMoney(1, Infinity)
depositMoney(4, 100)

withdrawMoney(1, -100)
withdrawMoney(1, 0)
withdrawMoney(1, 501)

transferMoney(1, 4, 100)
transferMoney(1, 2, 501);
transferMoney(1, 2, 100);
*/
