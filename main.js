const students = [
  {
    name: "max",
    id: 0,
    house: "hufflepuff",
    enrolled: true,
  },
  {
    name: "john",
    id: 1,
    house: "Gryff",
    enrolled: true,
  },
];

const studentArray = document.querySelector("#studentArray");

//RENDER ENROLLED STUDENS
function renderStudentCards(array) {
  let domString = "";
  for (student of array) {
    domString += ` 
      <div class="studentCard" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <p class="card-text">${student.house}</p>
          <a href="#" class="btn btn-primary" id="expel--${student.id}">Expel!</a>
        </div>
      </div> `;
  }
  studentArray.innerHTML = domString;
}

renderStudentCards(students);

function renderExpelled(array){
  let domString = "";
  for (student of array) {
    domString += ` 
      <div class="studentCard" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <p class="card-text">${student.house}</p>
          <a href="#" class="btn btn-primary" id="expel--${student.id}">Expel!</a>
        </div>
      </div> `;
  }
  studentArray.innerHTML = domString;
}

function hatToForm() {
  const sortingHat = document.querySelector("#sortingHat");
  const inputForm = document.querySelector("#inputForm");

  //CLICK ON HAT TO CREATE FORM
  sortingHat.addEventListener("click", () => {
    sortingHat.style.display = "none";
    inputForm.style.display = "block";
  });

  //SUBMIT A NAME. CREATE A HOUSE. ADD TO ARRAY. RENDER
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let newStudent = {
      name: document.querySelector("#studentName").value,
      id: students.length + 1,
      house: assignHouse(),
    };

    console.log(newStudent);
    students.push(newStudent);
    renderStudentCards(students);
    renderStudentCards(expelled);
  });
}

//ASSIGN THE HOUSE
function assignHouse() {
  let randomInt = Math.floor(Math.random() * 12);
  if (randomInt >= 0 && randomInt < 3) {
    return "Gryffindor";
  } else if (randomInt >= 3 && randomInt < 6) {
    return "Slythern";
  } else if (randomInt >= 6 && randomInt < 9) {
    return "Ravenclaw";
  } else if (randomInt >= 9 && randomInt <= 11) {
    return "HufflePuff";
  }
}

hatToForm();

studentArray.addEventListener("click", (event) => {
  const expelled = [];
  if (event.target.id.includes("expel")) {
    const [, id] = event.target.id.split("--");
    const index = students.findIndex((obj) => obj.id === Number(id));
    expelled.push(students[id]);
    students.splice(index, 1);
    renderStudentCards(students);
    console.log(expelled);
  }
});
