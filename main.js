//Users definition
const users = [
  {
    userName: 'Mali',
    password: 'password1',
    balance: 200,
  },
  {
    userName: 'Gera',
    password: 'password2',
    balance: 290,
  },
  {
    userName: 'Maui',
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
  const userName = document.getElementById('user-input').value;
  const password = document.getElementById('password-input').value;

  const user = users.find((user) => user.userName === userName && user.password === password);

  if (user) {
    balance.innerText = user.balance;
    deposit.innerText = 0;
    withdraw.innerText = 0;
    loginPage.style.display = 'none';
    dashboard.classList.remove('d-none');
  } else {
    alert('Invalid username or password.');
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

  deposit.innerText = Number(deposit.innerText) + value; //deposits panel inner text
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

  withdraw.innerText = Number(withdraw.innerText) + value; //withdrawal panel inner text
  balance.innerText = newBalance;
  withdrawInput.value = '';
});
