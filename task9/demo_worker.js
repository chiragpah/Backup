var i = 1;

function timedCount() {
    i = 1 * i;

    postMessage(i);
    i++;
    setTimeout("timedCount()", 500);
}

timedCount();