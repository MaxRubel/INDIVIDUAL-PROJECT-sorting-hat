//ALL FUNCTIONS
function event() {
  //MAIN ARRAY DATA
  let students = [
    {
      name: "Max",
      id: 0,
      house: "Gryffindor",
      status: "enrolled",
    },
    {
      name: "John",
      id: 1,
      house: "Slytherin",
      status: "enrolled",
    },
    {
      name: "Tatianna",
      id: 2,
      house: "Ravenclaw",
      status: "enrolled",
    },
    {
      name: "Jesse",
      id: 3,
      house: "Hufflepuff",
      status: "enrolled",
    },
  ];

  //RENDER STUDENTS
  function renderStudentCards(array) {
    let domString = "";
    let domStringEx = "";
    for (student of array) {
      if (student.status === "enrolled") {
        domString += `<table class="table table-dark table-striped" style="width: 600px">
      <thead>
        <tr style="height: 8px">
          <th scope="col" width="30%">${student.name}</th>
          <th id="${student.house}" scope="col" width="60%" >${student.house}</th>
          <th scope="col" id="expell"><button type="button" class="btn btn-danger" id="expell--${student.id}">Expell!</button></th>
        </tr>
      </thead>
      <tbody>
      `;
      } else if (student.status === "expelled") {
        domStringEx += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
         
          <p id="${student.house}">${student.house}</p>
          <p align="center"><button type="button" class="btn btn-danger" id="reEnroll--${student.id}">Re-enroll</button></p>
        </div>
      </div>
      `;
      }
      document.getElementById("studentArray").innerHTML = domString;
      document.getElementById("expelled").innerHTML = domStringEx;
    }
    if (domStringEx.length === 0) {
      document.getElementById("expelly").style.display = "none";
    } else {
      document.getElementById("expelly").style.display = "block";
    }
  }

  //SHOW ALL
  renderStudentCards(students);

  //CLICK ON HAT TO CREATE FORM
  const sortingHat = document.getElementById("sortingHat");
  sortingHat.addEventListener("click", () => {
    sortingHat.style.display = "none";
    inputForm.style.display = "flex";
  });

  //SUBMIT A NAME. CREATE A HOUSE. ADD TO ARRAY. RENDER
  const form = document.getElementById("submitStudent");
  nameInput = document.getElementById("studentName");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    while (nameInput.value.length === 0) {
      document.getElementById("error").style =
        "display:block; text-align: center";
      return;
    }
    const newStudent = {
      name: document.getElementById("studentName").value,
      id: students.length + 1,
      house: assignHouse(),
      status: "enrolled",
    };
    students.unshift(newStudent);
    document.getElementById("error").style = "display:none; text-align: center";
    form.reset();
    renderStudentCards(students);
  });

  //ASSIGN THE HOUSE
  function assignHouse() {
    const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
    let index = Math.floor(Math.random() * 4);
    return houses[index];
  }

  //FILTER FUNCTION
  const filter = (house) => {
    renderStudentCards(
      students.filter(
        (student) => student.house.toLowerCase() === house.toLowerCase()
      )
    );
    document.getElementById("expelled").innerHTML = "";
    document.getElementById("expelly").style.display = "none";
  };

  //FILTER BUTTON EVENT LISTENER
  const houseButtons = document.getElementById("houseButtons");
  houseButtons.addEventListener("click", (event) => {
    const id = event.target.id;
    if (
      id === "gryffindor" ||
      id === "slytherin" ||
      id === "ravenclaw" ||
      id === "hufflepuff"
    ) {
      filter(id);
    }
  });

  // SHOW ALL BUTTON
  document.getElementById("allHouses").addEventListener("click", () => {
    renderStudentCards(students);
  });

  //EXPELL FUNCTION
  addEventListener("click", (event) => {
    if (event.target.id.includes("expell")) {
      const [, id] = event.target.id.split("--");
      const index = students.findIndex((obj) => obj.id === Number(id));
      students[index].status = "expelled";
      renderStudentCards(students);
      return students;
    }
  });

  //RE-ENROLL FUNCTION
  addEventListener("click", (event) => {
    if (event.target.id.includes("reEnroll")) {
      const [, id] = event.target.id.split("--");
      const index = students.findIndex((obj) => obj.id === Number(id));
      students[index].status = "enrolled";
      renderStudentCards(students);
    }
  });
}

event();
