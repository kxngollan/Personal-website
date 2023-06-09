
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyPaR6pOTIcn12V85T_wm1xff05t1KIIbG7IVgmBvCGOjCO7lFw9VdbR_w97j721J8l-g/exec'
  const form = document.forms['contactForm']
  const success = document.getElementById("success")
  const failure = document.getElementById("failure")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        form.reset();
        success.innerHTML = "Thank you! Message Successfully sent, will be in touch soon.";
      failure.innerHTMl = "";
      })
      .catch(error => {
        failure.innerText = "Error! Message failed to send. If issue carries on happening, please email: Ammmuza@gmail.com";
      success.innerHTML = "";
      })
  })
