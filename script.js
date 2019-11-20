      var nameF = document.querySelector("#name");
      var emailF = document.querySelector("#email");
      var checkboxF = document.querySelector("#agreeMent");
 
      function validate() {
        if(checkboxF.checked){
          document.getElementById("dng").innerHTML = "";
        }else{
          document.getElementById("dng").innerHTML = "Yanlışlıq var!";
        }
        if (document.getElementById('name').value == "") {
          nameF.classList.add("is-invalid");
          nameF.classList.replace("is-valid","is-invalid");
          document.getElementById('name_error').innerHTML = "Ad sahəsi boşdur!";
        } else {
          nameF.classList.remove("is-invalid");
          nameF.classList.add("is-valid");
          document.getElementById('name_error').innerHTML = "";
        }
        if (document.getElementById('email').value == "") {
          emailF.classList.add("is-invalid");
          emailF.classList.replace("is-valid","is-invalid");
          document.getElementById('email_error').innerHTML = "Email sahəsi boşdur!";
        } else {
          document.getElementById('email_error').innerHTML = "";
          emailF.classList.remove("is-invalid");
          emailF.classList.add("is-valid");
        }
      }
      
      
      // function validateIn(){
      //   if (document.getElementById('name').value == "") {
      //     nameF.classList.add("is-invalid");
      //     nameF.classList.replace("is-valid","is-invalid");
      //     document.getElementById('name_error').innerHTML = "Ad sahəsi boşdur!";
      //   } else {
      //     nameF.classList.replace("is-invalid","is-valid");
      //     document.getElementById('name_error').innerHTML = "";
      //   }
      // }
      // function validateIn2(){
      //   if (document.getElementById('email').value == "") {
      //     emailF.classList.add("is-invalid");
      //     emailF.classList.replace("is-valid","is-invalid");
      //     document.getElementById('email_error').innerHTML = "Email sahəsi boşdur!";
      //   } else {
      //     document.getElementById('email_error').innerHTML = "";
      //     emailF.classList.replace("is-invalid","is-valid");
      //   }
      // }
