let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let user = document.getElementById("user");
//  let user = this.elements[0];
    let pass = document.getElementById("pass");
//  let pass = this.element[1];
    console.log(user.value);
    console.log(pass.value);
    alert(`Hi ${user.value} , Your password is set to ${pass.value}`);
})