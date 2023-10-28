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

const sortingHat=document.querySelector('#sortingHat');
const studentArray=document.querySelector('#studentArray');
sortingHat.addEventListener('click', ()=>{
  sortingHat.innerHTML=userForm;
  console.log('hey');
})

let sortingHatInner='<img class="sortingHatPhoto" src="/images/sortingHat.png" height="300px" width="300px"></div>';

const userForm=
`<form>
<div class="mb-3">
  <label for="studentName" class="form-label">Student Name</label>
  <input type="name" class="form-control" id="studentName" aria-describedby="emailHelp">
  <div id="emailHelp" class="form-text">Please enter a lil' name for your student.</div>
</div>
<button type="submit" id="submit" class="btn btn-primary">Submit</button>
</form>`;

sortingHat.innerHTML=sortingHatInner;

form.addEventListener('submit', (event)=> {
  event.preventDefault();
  console.log("hey")
})
