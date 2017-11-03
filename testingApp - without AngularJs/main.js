(function () {
  let username = 'walter.bates';
  let password = 'bpm';
  let sendButton = document.querySelector('button.js-submit');
  let genderRadios = document.getElementsByName('gender');
  let gender; // default value 'undefined'

  sendButton.addEventListener('click', showGender);

  function showGender(e) {

    e.preventDefault();

    for (let i = 0; i < genderRadios.length; i++) {
      if (genderRadios[i].checked) {
        gender = genderRadios[i].value;
        break;
      }
    }

    console.log(
      `Username: ${username}
         Password: ${password}
         Gender: ${gender}`
    );

    let data = "username=" + encodeURIComponent(username) +
      "&password=" + encodeURIComponent(password) +
      "&redirect=true";

    let request = {
      method: 'POST',
      url: 'http://localhost:8080/bonita/loginservice',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        document.location.href = xhttp.responseURL; // It will redirect to the response url
      }
    }
    xhttp.open('POST', 'http://localhost:8080/bonita/loginservice', true);
    xhttp.setRequestHeader('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8');
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send(data);

    console.log(`Data: ${data}`);
  }
})();
