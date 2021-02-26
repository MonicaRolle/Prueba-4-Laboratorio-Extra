var booking = 0;
var parkingNight;
var nightRoom;
var activityNightRoom;

function typeRoomSelected() {
    var room = document.getElementById("typeRoom");
    var typeRoom = room.options[room.selectedIndex].text;
    switch (typeRoom) {
        case "Standard":
            nightRoom = 100
            break;
        case "Junior suite":
            nightRoom = 120;
            break;
        case "Suite":
            nightRoom = 150;
    }
    return nightRoom;
};


function spaAndTypeRoom() {
    var checkSpa = document.getElementById("spa").checked;
    return spa = checkSpa == true ? typeRoomSelected() + 20 : typeRoomSelected();
}

function activityRoomSelected() {
    var activity = document.getElementById("activityRoom");
    var activityRoom = activity.options[activity.selectedIndex].text;
    switch (activityRoom) {
        case "Individual":
            activityNightRoom = spaAndTypeRoom() * 0.75;
            break;
        case "Doble":
            activityNightRoom = spaAndTypeRoom();
            break;
        case "Triple":
            activityNightRoom = spaAndTypeRoom() * 1.25;
            break;
    }
    return activityNightRoom;
}
function priceNight() {
    var night = parseInt(document.getElementById("number-night").value);
    return priceNightTotal = activityRoomSelected() * night;
}
function parking() {
    var parkingDay = parseInt(document.getElementById("number-parking").value);
    if (parkingDay == 0) {
        parkingNight = parkingDay;
    } else if (parkingDay > 0) {
        parkingNight = parkingDay * 10;
    }
    return parkingNight;
}

function calculation() {

    booking = priceNight() + parking();
    document.getElementById("result").innerHTML = "Total Reserva: " + booking + "€"
}

document.getElementById("button-calculation").addEventListener("click", calculation);