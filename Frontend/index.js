document.getElementById('ProfileBtn').addEventListener('click', function() {
    document.querySelector('.PopupProfile').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.PopupProfile').style.display = 'none';
});

document.getElementById('DoctorBtn').addEventListener('click', function() {

    document.getElementById('DisBlock').style.display = 'none';
    document.getElementById('DocAppointmentList').style.display = 'flex'

});