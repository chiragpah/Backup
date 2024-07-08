function validCheck() {
    var a = Number(document.getElementById('idss').value);
    var n = document.getElementById('fname').value;
    var l = document.getElementById('lname').value;
    var dte1 = document.getElementById('dte').value;
    var chk1 = document.getElementById('chk1');
    var chk2 = document.getElementById('chk2');
    var chk3 = document.getElementById('chk3');
    var chk4 = document.getElementById('chk4');
    var mob = document.getElementById('contact').value;

    if (a < 10001 || a > 15000) {
        alert('Emp ID is not Valid');
        a.focus();
    }
    else {
        if (n.length < 3 || n.length > 15)
            alert('Emp Name is not valid');
        else {
            if (l.length < 5 || l.length > 25)
                alert('Last name not valid');
            else {
                var date1 = new Date(dte1);
                var date2 = new Date("12/03/2023");
                if (date1 > date2)
                    alert('date not valid');
                else {
                    if (mob.length < 10)
                        alert('Mobile No not valid')
                    else {
                        if (chk1.checked == true || chk2.checked == true || chk3.checked == true || chk4.checked == true)
                            document.getElementById('f1').action = 'success.html';
                        else
                            alert('Select atleast one Program');
                    }
                }

            }
        }

    }


}
