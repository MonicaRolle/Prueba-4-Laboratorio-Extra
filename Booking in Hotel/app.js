function typeRoomSelected() {
    var room = document.getElementById("typeRoom");
    var typeRoom = room.options[room.selectedIndex].text;
    switch (typeRoom) {
        case "Standard":
            return 100;
        case "Junior suite":
            return 120;
        case "Suite":
            return 150;
    }

};

function spaAndTypeRoom() {
    var checkSpa = document.getElementById("spa").checked;
    return checkSpa ? typeRoomSelected() + 20 : typeRoomSelected();
}

function activityRoomSelected() {
    var activity = document.getElementById("activityRoom");
    var activityRoom = activity.options[activity.selectedIndex].text;
    switch (activityRoom) {
        case "Individual":
            return spaAndTypeRoom() * 0.75;
        case "Doble":
            return spaAndTypeRoom();
        case "Triple":
            return spaAndTypeRoom() * 1.25;
    }
}

function priceNight() {
    var night = parseInt(document.getElementById("number-night").value);
    return activityRoomSelected() * night;
}

function parking() {
    var parkingDay = parseInt(document.getElementById("number-parking").value);
    return parkingDay === 0 ? parkingDay : parkingDay * 10;
}

function calculation() {
    var booking = priceNight() + parking();
    document.getElementById("result").innerHTML = "Total Reserva: " + booking + "€"
}

document.getElementById("button-calculation").addEventListener("click", calculation);