document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");
  const themeSwitcher = document.getElementById("theme-switcher");
  const currencySwitcher = document.getElementById("currency-switcher");
  const body = document.body;

  let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  let currentCurrency = localStorage.getItem('currency') || "₹";
  const exchangeRate = 0.012; // 1 Rupee = 0.012 USD (example rate)

  // Theme switching
  const currentTheme = localStorage.getItem("theme") || "dark";
  body.classList.add(`${currentTheme}-theme`);

  themeSwitcher.addEventListener("click", () => {
    if (body.classList.contains("dark-theme")) {
      body.classList.replace("dark-theme", "light-theme");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.replace("light-theme", "dark-theme");
      localStorage.setItem("theme", "dark");
    }
  });

  function updateCurrency(amount, toDollar = false) {
    if (toDollar) {
      return (amount * exchangeRate).toFixed(2);
    } else {
      return (amount / exchangeRate).toFixed(2);
    }
  }

  function formatAmount(amount) {
    return currentCurrency === "$" 
      ? updateCurrency(amount, true) 
      : amount.toFixed(2);
  }

  function updateDisplayedAmounts() {
    expenses.forEach(expense => {
      const listItem = document.querySelector(`li[data-id="${expense.id}"]`);
      if (listItem) {
        const amountSpan = listItem.querySelector('.amount');
        amountSpan.textContent = `${currentCurrency}${formatAmount(expense.amount)}`;
      }
    });
    updateTotal();
  }

  currencySwitcher.addEventListener("click", () => {
    currentCurrency = currentCurrency === "₹" ? "$" : "₹";
    localStorage.setItem('currency', currentCurrency);
    currencySwitcher.textContent = currentCurrency === "₹" ? "₹ / $" : "$ / ₹";
    updateDisplayedAmounts();
  });

  function updateExpenseList() {
    expenseList.innerHTML = '';
    expenses.forEach(expense => {
      const li = document.createElement('li');
      li.setAttribute('data-id', expense.id);
      li.innerHTML = `
        <div class="expense-info">
          <span class="expense-name">${expense.name}</span>
          <span class="amount">${currentCurrency}${formatAmount(expense.amount)}</span>
        </div>
        <button class="delete-btn">Delete</button>
      `;
      expenseList.appendChild(li);
    });
  }

  function calculateTotal() {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  function updateTotal() {
    const totalAmount = calculateTotal();
    totalAmountDisplay.textContent = `${currentCurrency}${formatAmount(totalAmount)}`;
  }

  function saveExpensesToLocal() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }

  expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = expenseNameInput.value.trim();
    let amount = parseFloat(expenseAmountInput.value.trim());

    if (name !== "" && !isNaN(amount) && amount > 0) {
      if (currentCurrency === "$") {
        amount = updateCurrency(amount); // Convert to Rupees for storage
      }
      const newExpense = {
        id: Date.now(),
        name,
        amount
      };
      expenses.push(newExpense);
      saveExpensesToLocal();

      expenseNameInput.value = "";
      expenseAmountInput.value = "";
      updateExpenseList();
      updateTotal();
    }
  });

  expenseList.addEventListener("click", (e) => {
    if (e.target.classList.contains('delete-btn')) {
      const li = e.target.closest('li');
      const expenseId = parseInt(li.getAttribute('data-id'));
      expenses = expenses.filter(expense => expense.id !== expenseId);
      saveExpensesToLocal();
      li.remove();
      updateTotal();
    }
  });

  // Initial setup
  currencySwitcher.textContent = currentCurrency === "₹" ? "₹ / $" : "$ / ₹";
  updateExpenseList();
  updateTotal();
});
