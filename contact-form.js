function sendMail (){
    var subject = document.getElementById('subject').value;
    var body = document.getElementById('body').value;
    var Mr = document.getElementById('Mr');
    var Mrs = document.getElementById('Mrs');
    var copy = document.getElementById('cc').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    
    var title;

    if (Mr.checked){
        title = Mr.value;

    } else if (Mrs.checked){
        title = Mrs.value;
        
    } else {
        alert("You need to select a title.");
        return;
    }

    var mailToLink = 'mailto:erikhummer99@gmail.com';
    var selectedSubject = '?subject=' + subject + " - " + title + lname;
    var message = '&body=' + body + "/" + fname + " " + lname;
    var ccTo = '&cc=' + copy;



    var compiledMail = mailToLink + selectedSubject + message + ccTo;

    console.log("This is the link:\n" + compiledMail);

    window.location.href = compiledMail;

}
