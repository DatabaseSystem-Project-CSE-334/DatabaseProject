document.getElementById('ProfileBtn').addEventListener('click', function() {
    document.querySelector('.PopupProfile').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.PopupProfile').style.display = 'none';
});

document.getElementById('DoctorBtn').addEventListener('click', function() {

    document.getElementById('UserSec').style.display = 'none';
    document.getElementById('Title').innerHTML = 'Your Patient List';
    document.getElementById('DocAppointmentList').style.display = 'flex'

});
document.getElementById('HomeSearchBtn').addEventListener('click', function() {

   // document.getElementById('UserSec').style.display = 'none';
   // document.getElementById('Title').innerHTML = 'Your Patient List';
    //document.getElementById('DocAppointmentList').style.display = 'flex'
    console.log("click");
    

});