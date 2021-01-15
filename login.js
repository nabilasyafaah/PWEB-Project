function terimainput() {

    a = formLogin.elements["mail"].value; 
    b = formLogin.elements["password"].value;

    var table = document.getElementById("tableinput");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    
    cell1.innerHTML = a;
    cell2.innerHTML = b;


    alert("data berhasil di entry")
  }