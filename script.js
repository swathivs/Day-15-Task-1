document.getElementById("submit").onclick = function () {
  document.getElementById("table").style.display = "block";

  var table = document.getElementById("table");
  var row = table.insertRow(-1);
  var fname = row.insertCell(0);
  var lname = row.insertCell(1);
  var address = row.insertCell(2);
  var pincode = row.insertCell(3);
  var gender = row.insertCell(4);
  var food = row.insertCell(5);
  var state = row.insertCell(6);
  var country = row.insertCell(7);
  
  fname.innerHTML = document.getElementById("first-name").value;
  lname.innerHTML = document.getElementById("last-name").value;
  address.innerHTML = document.getElementById("address").value;
  pincode.innerHTML = document.getElementById("pincode").value;
  if (document.getElementById('male').checked) {
    gender.innerHTML = document.getElementById('male').value;
  }
  else if (document.getElementById('female').checked) {
    gender.innerHTML = document.getElementById('female').value;
  }

  var values=[];
  var checkboxes=document.getElementsByName("food");
  if(checkboxes.length<2){
    alert("Select atleast 2")
  }
  
  for(var i=0;i<checkboxes.length;i++){
    if(checkboxes[i].checked==true){
      values.push(checkboxes[i].value)
    }
  }
  food.innerHTML=values;
    
  state.innerHTML = document.getElementById("state").value;
  country.innerHTML = document.getElementById("country").value;
  return false;
}