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
          <th scope="col" width="60%">${student.house}</th>
          <th scope="col" id="expell"><button type="button" class="btn btn-danger" id="expel--${student.id}">Expel!</button></th>
        </tr>
      </thead>
      <tbody>
      `;
      } else if (student.status === "expelled") {
        domStringEx += `<table class="table table-dark table-striped" style="width: 600px">
        <thead>
          <tr style="height: 10px;">
            <th scope="col" width="30%" style="background-color: red">${student.name}</th>
            <th scope="col" width="51%">${student.house}</th>
            <th scope="col" class="reEnroll" 
            style="
            display: flex;
            justify-content: right"
            padding: 0;
            >
            <button type="button" class="btn btn-danger" id="reEnroll--${student.id}">Re-enroll</button></th>
          </tr>
        </thead>
        <tbody>
        `;
      }
      document.getElementById("expelled").innerHTML = domStringEx;
      document.getElementById("studentArray").innerHTML = domString;
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
    if (nameInput.value.length === 0) {
      document.getElementById("error").style =
        "display:block; text-align: center";
      return;
    } else {
      const newStudent = {
        name: document.getElementById("studentName").value,
        id: students.length + 1,
        house: assignHouse(),
        status: "enrolled",
      };
      students.unshift(newStudent);
      document.getElementById("error").style =
        "display:none; text-align: center";
      form.reset();
      renderStudentCards(students);
    }
  });

  //ASSIGN THE HOUSE
  function assignHouse() {
    let randomInt = Math.floor(Math.random() * 12);
    if (randomInt >= 0 && randomInt < 3) {
      return "Gryffindor";
    } else if (randomInt >= 3 && randomInt < 6) {
      return "Slytherin";
    } else if (randomInt >= 6 && randomInt < 9) {
      return "Ravenclaw";
    } else if (randomInt >= 9 && randomInt <= 11) {
      return "Hufflepuff";
    }
  }

  //FILTER FUNCTION
  const filter = (house) => {
    let houseArray = [];
    for (student of students) {
      if (student.house === house) {
        houseArray.push(student);
      }
    }
    document.getElementById("studentArray").innerHTML = "";
    document.getElementById("expelled").innerHTML = "";
    renderStudentCards(houseArray);
  };

  //FILTER BUTTON EVENT LISTENERS
  document.querySelector("#gryffindor").addEventListener("click", () => {
    filter("Gryffindor");
  });
  document.querySelector("#slytherin").addEventListener("click", () => {
    filter("Slytherin");
  });
  document.querySelector("#ravenclaw").addEventListener("click", () => {
    filter("Ravenclaw");
  });
  document.querySelector("#hufflepuff").addEventListener("click", () => {
    filter("Hufflepuff");
  });
  document.querySelector("#allHouses").addEventListener("click", () => {
    renderStudentCards(students);
  });

  //EXPELL FUNCTION
  addEventListener("click", (event) => {
    if (event.target.id.includes("expel")) {
      const [, id] = event.target.id.split("--");
      const index = students.findIndex((obj) => obj.id === Number(id));
      students[index].status = "expelled";
      console.log(students[index]);
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
      // console.log(students[index].name);
      renderStudentCards(students);
    }
  });
}

event();
