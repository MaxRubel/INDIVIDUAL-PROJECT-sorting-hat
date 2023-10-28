const enrolled=[
  {
    name:'',
    id: '',
    house: ''
  }
]

const expelled=[
  {
    name:'',
    id: '',
    house: ''
  }
]

function renderToDom(){

}


const studentArray=document.querySelector('#studentArray');

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

function hatToForm(){
  const sortingHat=document.querySelector('#sortingHat');
  let sortingHatImage='<img class="sortingHatPhoto" src="/images/sortingHat.png" height="300px" width="300px"></div>';
  
  const userForm=
    `<form>
      <div class="mb-3">
        <label for="studentName" class="form-label">Student Name</label>
        <input type="name" class="form-control" id="studentName" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">Please enter a lil' name for your student.</div>
      </div>
      <button type="submit" id="submit" class="btn btn-primary">Submit</button>
    </form>`;

  sortingHat.innerHTML=sortingHatImage;

  sortingHat.addEventListener('click', ()=>{
    sortingHat.innerHTML=userForm;
    console.log('hey');
  })

  form.addEventListener('submit', (event)=> {
    event.preventDefault();
    sortingHat.innerHTML=userForm;
    console.log("hey")
  })
}

hatToForm();
