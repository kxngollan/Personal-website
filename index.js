// Menu Tab

var sidemeu = document.getElementById('sidemenu');

function openmenu() {
  sidemeu.style.right = '0';
}
function closemenu() {
  sidemeu.style.right = '-200px';
}

// Tablink Open/Close Script

const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName('tab-contents');

for (let i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener('click', () => {
    for (let j = 0; j < tablinks.length; j++) {
      tabcontents[j].classList.remove('active-tab');
      tablinks[j].classList.remove('active-link');
    }

    let tabname = tablinks[i].innerHTML;
    opentab(tabname);
  });
}

function opentab(tabname) {
  for (let i = 0; i < tablinks.length; i++) {
    if (tablinks[i].innerHTML === tabname) {
      tablinks[i].classList.add('active-link');
      tabcontents[i].classList.add('active-tab');
    }
  }
}

// Submission Script

const scriptURL =
  'https://script.google.com/macros/s/AKfycbyPaR6pOTIcn12V85T_wm1xff05t1KIIbG7IVgmBvCGOjCO7lFw9VdbR_w97j721J8l-g/exec';
const form = document.forms['contactForm'];
const success = document.getElementById('success');
const failure = document.getElementById('failure');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      form.reset();
      success.innerHTML =
        'Thank you! Message Successfully sent, will be in touch soon.';
    })
    .catch((error) => {
      failure.innerText =
        'Error! Message failed to send. If issue carries on happening, please email: Onlymuza@gmail.com';
    });
});
