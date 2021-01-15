function terimainput() {

    a = formLogin.elements["firstName"].value; 
    b = formLogin.elements["lastName"].value; 
    c = formLogin.elements["mail"].value; 
    d = formLogin.elements["password"].value;
    e = formLogin.elements["birthdaytime"].value; 

    var table = document.getElementById("tableinput");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4);
    
    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = c;
    cell4.innerHTML = d;
    cell5.innerHTML = e;

    alert("data berhasil di entry")
  }