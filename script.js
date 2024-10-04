var selectedRow=null;
function onFormSubmit(){
    if(validate()){
    datas=readFormData()
    if(selectedRow==null){
    insertNewData(datas);
}
else{
    updateRow(datas);
}
    resetform();
}
}
function readFormData(){
    var formData={}
    formData["fullName"] =document.getElementById('fullName').value;
    formData["empCode"] = document.getElementById('empCode').value;
    formData['salary']=document.getElementById('salary').value;
    formData['city']=document.getElementById('city').value;
    return formData;
}

function insertNewData(data){
    var table =document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow();
    var cell1=newRow.insertCell(0);
    cell1.innerHTML=data.fullName;
    var cell2=newRow.insertCell(1);
    cell2.innerHTML=data.empCode;
    var cell3=newRow.insertCell(2);
    cell3.innerHTML=data.salary;
    var cell4=newRow.insertCell(3);
    cell4.innerHTML=data.city;
    var cell4=newRow.insertCell(4);
    cell4.innerHTML=`<a onClick="onEdit(this)">Edit</a>
                    <a onClick="onDelete(this)">Delete</a>`;
}

function resetform(){
    document.getElementById('fullName').value="";
    document.getElementById('empCode').value="";
    document.getElementById('salary').value="";
    document.getElementById('city').value="";
}

function onEdit(q){
    selectedRow=q.parentElement.parentElement;
    document.getElementById('fullName').value=selectedRow.cells[0].innerHTML;
    document.getElementById('empCode').value=selectedRow.cells[1].innerHTML;
    document.getElementById('salary').value=selectedRow.cells[2].innerHTML;
    document.getElementById('city').value=selectedRow.cells[3].innerHTML;
}

function updateRow(a){
    selectedRow.cells[0].innerHTML=a.fullName;
    selectedRow.cells[1].innerHTML=a.empCode;
    selectedRow.cells[2].innerHTML=a.salary;
    selectedRow.cells[3].innerHTML=a.city;
}

function onDelete(s){
    if(confirm("Do you want to delete")){
    row=s.parentElement.parentElement;
    document.getElementById('employeeList').deleteRow(row.rowIndex);
    resetform();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "" ||document.getElementById("empCode").value == "" || document.getElementById("salary").value == "" ||document.getElementById("city").value == "")  {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

