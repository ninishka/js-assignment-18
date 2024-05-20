//.1
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  

  let firstNameInput = document.getElementById('first-name');
  let lastNameInput = document.getElementById('last-name');
  let emailInput = document.getElementById('email');
  let passwordInput = document.getElementById('password');
  let confirmPasswordInput = document.getElementById('confirm-password');
  let descriptionTextarea = document.getElementById('description');
  
  
  let firstNameError = document.createElement('p');
  let lastNameError = document.createElement('p');
  let emailError = document.createElement('p');
  let passwordError = document.createElement('p');
  let confirmPasswordError = document.createElement('p');
  let descriptionError = document.createElement('p');
  
  
  function clearErrors() {
    document.body.removeChild(firstNameError);
    document.body.removeChild(lastNameError);
    document.body.removeChild(emailError);
    document.body.removeChild(passwordError);
    document.body.removeChild(confirmPasswordError);
    document.body.removeChild(descriptionError);
  }
  
  // Validate each field
  let isValid = true;
  
  // First Name Validation
  if (firstNameInput.value.length < 6) {
    firstNameError.textContent = "First Name must be at least 6 characters.";
    document.body.appendChild(firstNameError);
    isValid = false;
  }
  
  // Last Name Validation
  if (lastNameInput.value.length < 6) {
    lastNameError.textContent = "Last Name must be at least 6 characters.";
    document.body.appendChild(lastNameError);
    isValid = false;
  }
  
  // Email Validation
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    document.body.appendChild(emailError);
    isValid = false;
  }
  
  // Password Validation
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    document.body.appendChild(passwordError);
    isValid = false;
  }
  
  // Confirm Password Validation
  if (passwordInput.value!== confirmPasswordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    document.body.appendChild(confirmPasswordError);
    isValid = false;
  }
  
  // Description Validation
  if (descriptionTextarea.value.length > 100) {
    descriptionError.textContent = "Description cannot exceed 100 characters.";
    document.body.appendChild(descriptionError);
    isValid = false;
  }
  
  
  if (isValid) {
    alert("Registration successful!");
    clearErrors(); 
  }
});

//.2

document.addEventListener('DOMContentLoaded', function() {
  const inputField = document.getElementById('inputField');
  const addButton = document.getElementById('addToListBtn');
  const outputList = document.getElementById('outputList');
  let itemListArray = [];

  addButton.addEventListener('click', function() {
      const inputValue = inputField.value.trim();
      if (inputValue!== '') {
          itemListArray.push(inputValue);
          updateOutputList();
      } else {
          alert('Please enter something.');
      }
  });

  function updateOutputList() {
      outputList.innerHTML = '';
      itemListArray.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = item;
          outputList.appendChild(listItem);
      });
  }
});

//.3
const people = [
  { name: 'Alice', surname: 'Smith', age: 20, profession: 'Engineer' },
  { name: 'Bob', surname: 'Johnson', age: 17, profession: 'Doctor' },
  { name: 'Charlie', surname: 'Williams', age: 22, profession: 'Teacher' },
  { name: 'David', surname: 'Brown', age: 15, profession: 'Artist' },
  { name: 'Eve', surname: 'Davis', age: 21, profession: 'Lawyer' }
];
const adults = people.filter(person => person.age > 18);

const personListElement = document.getElementById('personList');

adults.forEach(person => {
    const listItem = document.createElement('li');
    listItem.textContent = `${person.name} ${person.surname}, Age: ${person.age}, Profession: ${person.profession}`;
    personListElement.appendChild(listItem);
});






 //.4

document.addEventListener('DOMContentLoaded', function() {
  const userListDiv = document.getElementById('user-list');
  const users = [
      {
          id: 7,
          email: "michael.lawson@reqres.in",
          first_name: "Michael",
          last_name: "Lawson",
          image: "imgs-of-people/download22.jpg"
      },
      {
          id: 8,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          image: "imgs-of-people/download55.jpg"
      },
      {
          id: 9,
          email: "tobias.funke@reqres.in",
          first_name: "Tobias",
          last_name: "Funke",
          image: "imgs-of-people/download33.jpg"
      },
      {
          id: 10,
          email: "byron.fields@reqres.in",
          first_name: "Byron",
          last_name: "Fields",
          image: "imgs-of-people/download77.jpg"
      },
      {
          id: 11,
          email: "george.edwards@reqres.in",
          first_name: "George",
          last_name: "Edwards",
          image: "imgs-of-people/download44.jpg"
      },
      {
          id: 12,
          email: "rachel.howell@reqres.in",
          first_name: "Rachel",
          last_name: "Howell",
          image: "imgs-of-people/download66.jpg"
      }
  ];

  users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');
      
      const userImage = document.createElement('img');
      userImage.src = user.image;
      userCard.appendChild(userImage);

      const userInfo = document.createElement('p');
      userInfo.textContent = `${user.first_name} ${user.last_name}`;
      userCard.appendChild(userInfo);

      const buttonsContainer = document.createElement('div');
      buttonsContainer.classList.add('buttons-container');

      const infoButton = document.createElement('button');
      infoButton.classList.add('info-button');
      infoButton.textContent = 'Info';
      infoButton.onclick = () => alert(`Email: ${user.email}`);
      buttonsContainer.appendChild(infoButton);

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = () => {
          userListDiv.removeChild(userCard);
      };
      buttonsContainer.appendChild(deleteButton);

      userCard.appendChild(buttonsContainer);
      userListDiv.appendChild(userCard);
  });
});