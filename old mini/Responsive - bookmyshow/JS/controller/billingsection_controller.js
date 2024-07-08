
// Function to count checked checkboxes
function countCheckedCheckboxes() {
    let checkboxes = document.getElementsByClassName('checkbox');
    let checkedCount = 0;

    // Using for...of loop to iterate over checkboxes
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            checkedCount++;
        }
    }

    let foodbill = checkedCount * 500;    
    document.getElementById('result').innerText = 'Number of food coupons selected : ' + checkedCount;
    document.getElementById('total').innerText ='Food section bill: ' + foodbill;
}


