let count = 0;
function submit_click(event) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let data = [];
  console.log('Clicked');
  console.log(lastName.value);
  console.log(Subject.value);
  if (firstName.value.length < 1) {
    window.alert("Enter All Required Fields (*)");
  } else if (lastName.value.length < 1) {
    window.alert("Enter All Required Fields (*)");
  } else if (emailName.value.length < 1) {
    window.alert("Enter All Required Fields (*)");
  } else if (Subject.value.length < 1) {
    window.alert("Enter All Required Fields (*)");
  } else if (messageTxt.value.length < 1) {
    window.alert("Enter All Required Fields (*)");
  } else {
    count = count + 1;
    console.log('Thank You.. Message send');
    hide(document.querySelector('.contactMe'));
    appear(document.querySelector('.messageToUser'));
    var currentDate = new Date();
    /*let day = days[currentdate.getDay()];
    let month = months[currentdate.getMonth()];
    var datetime = "• " + day + " " + month + " " 
            + currentdate.getDate() + " "
            + currentdate.getFullYear() + " "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds()
            + "GMT+0300 (GMT+03:00)"; */
    let x = 'You sent message ' + count + ' times:';
    document.querySelector('.freeMessage').innerHTML = x;
    data.push(currentDate);
    let list = document.querySelector(".dateList");
    for (i = 0; i < data.length; ++i) {
      let li = document.createElement('li');
      li.innerText = data[i];
      list.appendChild(li);
    }

  }
}
function hide(elements) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = 'none';
  }
}
function appear(elements) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = 'block';
  }
}
function changing() {
  appear(document.querySelector('.contactMe'));
  hide(document.querySelector('.messageToUser'));
  firstName.value = '';
  lastName.value = '';
  emailName.value = '';
  Subject.value = '';
  messageTxt.value = '';
  telNumber.value = '';
  dateTxt.value = '';
  timeTxt.value = '';
}
let firstName = document.querySelector('#fname');
let lastName = document.querySelector('#lname');
let emailName = document.querySelector('#emailN');
let Subject = document.querySelector('#subjectN');
let messageTxt = document.querySelector('#messagjeN');
let telNumber = document.querySelector('#telN');
let dateTxt = document.querySelector('#dateN');
let timeTxt = document.querySelector('#appt');

let btn = document.querySelector('.submitButton');
btn.addEventListener('click', submit_click);