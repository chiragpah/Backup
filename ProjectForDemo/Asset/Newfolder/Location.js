function change(id) {
    let arr1 = ["delhi-selected.png", "ahd-selected.png", "bangalore-selected.png", "chd-selected.webp", "chennai-selected.png", "hyderabad-selected.png", "koch-selected.webp", "kolk-selected.webp", "mumbai-selected.png", "pune-selected.png"]
    let arr2 = ["ncr.webp", "ahd.webp", "bang.png", "chd.webp", "chen.webp", "hyderabad.png", "koch.webp", "kolk.webp", "mumbai.png", "pune.png"]
    let arr = ["Delhi", "Ahemdabad", "Banglore", "Chandigarh", "Chennai", "Hyderabad", "Kochi", "Kolkata", "Mumbai", "Pune"]
    for (let i = 1001; i <= 1010; i++) {
        if (document.getElementById(i).id == id)

            document.getElementById(i).src = "../Newfolder/cities/" + arr1[i - 1001]; ///Image Set Code
        else {
            document.getElementById(i).src = "../Newfolder/cities/" + arr2[i - 1001];
        }
        document.getElementById('LocationName').innerText = arr[id - 1001];     ///Location set code
    }



}
function filt() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("Ul");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}