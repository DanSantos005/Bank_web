//Users definition
const users = [
  {
    email: 'Mali',
    password: 'password1',
    balance: 200,
  },
  {
    email: 'Gera',
    password: 'password2',
    balance: 290,
  },
  {
    email: 'Maui',
    password: 'password3',
    balance: 67,
  },
];

//Global variables definition
const loginPage = document.getElementById('login-box'),
  dashboard = document.getElementById('dashboard'),
  deposit = document.getElementById('deposit'),
  withdraw = document.getElementById('withdraw'),
  balance = document.getElementById('balance'),
  depositInput = document.getElementById('deposit-input'),
  withdrawInput = document.getElementById('withdraw-input'),
  depositBtn = document.getElementById('deposit-btn'),
  withdrawBtn = document.getElementById('withdraw-btn'),
  submitBtn = document.getElementById('submit-btn');

// Login event listener
submitBtn.addEventListener('click', () => {
  const email = document.getElementById('email-input').value;
  const password = document.getElementById('password-input').value;

  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    balance.innerText = user.balance;
    deposit.innerText = 0;
    withdraw.innerText = 0;
    loginPage.style.display = 'none';
    dashboard.classList.remove('d-none');
  } else {
    alert('Invalid email or password.');
  }
});

// Deposit input validation
depositInput.addEventListener('keyup', (event) => {
  if (event.key === '-') {
    event.preventDefault();
    depositInput.value = parseFloat(depositInput.value) || '';
  }
});

// Withdraw input validation
withdrawInput.addEventListener('keyup', (event) => {
  if (event.key === '-') {
    event.preventDefault();
    withdrawInput.value = parseFloat(withdrawInput.value) || '';
  }
});

// Deposit button event listener
depositBtn.addEventListener('click', () => {
  const value = parseFloat(depositInput.value);
  if (!value || value <= 0) {
    alert('Please enter a valid deposit amount.');
    return;
  }

  const newBalance = Number(balance.innerText) + value;

  // Validate new balance
  if (newBalance > 990) {
    alert('The deposit amount exceeds the maximum balance limit of $990.');
    return;
  }

  deposit.innerText = Number(deposit.innerText) + value;
  balance.innerText = newBalance;
  depositInput.value = '';
});

// Withdraw button event listener
withdrawBtn.addEventListener('click', () => {
  const value = parseFloat(withdrawInput.value);
  if (!value || value <= 0) {
    alert('Please enter a valid withdrawal amount.');
    return;
  }

  if (Number(value) > Number(balance.innerText)) {
    alert("Sorry, we cannot process your request. Not enough money in your account.");
    return;
  }

  const newBalance = Number(balance.innerText) - value;

  // Validate new balance
  if (newBalance < 10) {
    alert('The withdrawal amount exceeds the minimum balance limit of $10.');
    return;
  }

  withdraw.innerText = Number(withdraw.innerText) + value;
  balance.innerText = newBalance;
  withdrawInput.value = '';
});
