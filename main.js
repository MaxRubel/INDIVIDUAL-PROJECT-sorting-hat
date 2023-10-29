const students = [
  {
    name: "max",
    id: 0,
    house: "Gryffindor",
    enrolled: true,
  },
  {
    name: "jake",
    id: 0,
    house: "Slytherin",
    enrolled: true,
  },
  {
    name: "pete",
    id: 0,
    house: "Ravenclaw",
    enrolled: true,
  },
  {
    name: "john",
    id: 1,
    house: "Hufflepuff",
    enrolled: true,
  },
];

const expelled = [];

//RENDER ENROLLED STUDENS
function renderStudentCards(array) {
  let domString = "";
  for (student of array) {
    domString += `<table class="table table-dark table-striped" style="width: 600px">
    <thead>
      <tr>
        <th scope="col" width="30%">${student.name}</th>
        <th scope="col" width="60%">${student.house}</th>
        <th scope="col"><button type="button" class="btn btn-danger" id="expel--${student.id}">Expel!</button></th>
      </tr>
    </thead>
    <tbody>
    `;
  }
  document.querySelector("#studentArray").innerHTML = domString;
}

// function renderExpelled() {
//   let domString = "";
//   for (student of expelled) {
//     domString += `<table class="table table-dark table-striped" style="width: 600px">
//     <thead>
//       <tr>
//         <th scope="col" width="30%">${student.name}</th>
//         <th scope="col" width="60%">${student.house}</th>
//         <th scope="col"><button type="button" class="btn btn-danger" id="expel--${student.id}">Delete</button></th>
//       </tr>
//     </thead>
//     <tbody>
//     `;
//   }
//   document.querySelector("#expelled").innerHTML = domString;
// }

function event() {
  const sortingHat = document.querySelector("#sortingHat");
  const inputForm = document.querySelector("#inputForm");

  //SHOW ALL
  renderStudentCards(students);

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
  });

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

  //FILTER FUNCTION
  const filter = (house) => {
    let houseArray = [];
    for (student of students) {
      if (student.house === house) {
        console.log(student);
        houseArray.push(student);
      }
    }
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

  //EXPELL STUDENT FUNCTION
  studentArray.addEventListener("click", (event) => {
    if (event.target.id.includes("expel")) {
      const [, id] = event.target.id.split("--");
      const index = students.findIndex((obj) => obj.id === Number(id));
      // expelled.push(students[id]);
      students.splice(index, 1);
      renderStudentCards(students);
      // renderExpelled();
    }
  });
}

event();
