// Data structure to hold contacts
let contacts = [];

// Function to add a new contact
function addContact(name, phone, email) {
  contacts.push({ name, phone, email });
  renderContacts();
}

// Function to render contacts in the table
function renderContacts() {
  const contactList = document.getElementById("contactList");
  contactList.innerHTML = "";

  contacts.forEach((contact) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.phone}</td>
            <td>${contact.email}</td>
        `;
    contactList.appendChild(row);
  });
}

// Function to filter contacts by phone number
function filterContactsByPhone(phoneNumber) {
  const filteredContacts = contacts.filter((contact) =>
    contact.phone.includes(phoneNumber)
  );
  renderFilteredContacts(filteredContacts);
}

// Function to render filtered contacts
function renderFilteredContacts(filteredContacts) {
  const contactList = document.getElementById("contactList");
  contactList.innerHTML = "";

  filteredContacts.forEach((contact) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.phone}</td>
            <td>${contact.email}</td>
        `;
    contactList.appendChild(row);
  });
}

// Event listener for form submission
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && phone && email) {
    addContact(name, phone, email);
    form.reset();
  } else {
    alert("Please fill out all fields.");
  }
});

// Event listener for phone number filter input
const phoneFilterInput = document.getElementById("phoneFilter");
phoneFilterInput.addEventListener("input", function () {
  const phoneNumber = this.value.trim();
  if (phoneNumber) {
    filterContactsByPhone(phoneNumber);
  } else {
    renderContacts();
  }
});

// Initial render of contacts
renderContacts();
