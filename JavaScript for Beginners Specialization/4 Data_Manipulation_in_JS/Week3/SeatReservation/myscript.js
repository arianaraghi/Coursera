const reservedSeats = {
    record1: {
        seat: "b19",
        owner: {
            fname: "Joe",
            lname: "Smith"
        }
    },
    record2: {
        seat: "b20",
        owner: {
            fname: "Joe",
            lname: "Smith"
        }
    },
    record3: {
        seat: "b21",
        owner: {
            fname: "Joe",
            lname: "Smith"
        }
    },
    record4: {
        seat: "b22",
        owner: {
            fname: "Joe",
            lname: "Smith"
        }
    }
};

(function () {
    'use strict';

    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'];

    let html = '';
    let counter = 1;

    const left = document.getElementById('left');
    const right = document.getElementById('right');
    const middle = document.getElementById('middle');


    let userSeats = [];
    const allSeats = document.querySelectorAll('.a');

    rows.forEach(row => {
        html = `<div class="label">${row.toUpperCase()}</div>`
        for (let i = 1; i < 4; i++) {
            html += `<div class = "a" id="${row}${counter}">${counter}</div>`;
            counter++;
        }
        left.innerHTML += html;
        html = '';
        for (let i = 4; i < 13; i++) {
            html += `<div class = "a" id="${row}${counter}">${counter}</div>`;
            counter++;
        }
        middle.innerHTML += html;
        html = '';
        for (let i = 13; i < 16; i++) {
            html += `<div class = "a" id="${row}${counter}">${counter}</div>`;
            counter++;
        }
        html += `<div class="label">${row.toUpperCase()}</div>`
        right.innerHTML += html;
        html = '';
    });

    reservedSeatsHandler();

    
    allSeats.forEach(seat => {
        seat.addEventListener('click', e => {
            e.preventDefault();
            seatSelectionProcess(e.target.id);
        });
    });

    manageConfirmForm();

    document.getElementById('reserve').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('resform').style.display = 'block';

    });

    document.getElementById('cancel').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('resform').style.display = 'none';
    });

    document.getElementById('confirmres').addEventListener('submit', function (e) {
        e.preventDefault();
        processReservation();
        document.getElementById('resform').style.display = 'none';
        manageConfirmForm();
    });









    function processReservation() {
        const hardCodeRecords = Object.keys(reservedSeats).length;
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        let counter = 1;
        let nextRecord = '';

        userSeats.forEach(seat => {
            document.getElementById(seat).className = 'r';
            document.getElementById(seat).innerHTML = 'R';
            nextRecord = `record${hardCodeRecords + counter}`;
            reservedSeats[nextRecord] = {
                seat: seat,
                owner: {
                    fname: fname,
                    lname: lname
                }
            };
            counter++;
        });

        userSeats = [];
    }



    function manageConfirmForm() {

        if (userSeats.length != 0) {
            document.getElementById('confirmres').style.display = 'block';
            document.getElementById('selectedseats').innerHTML = `You have selected seats ${userSeats.sort().toString().replace(/,/g, ", ").replace(/,(?=[^,]*$)/, " and")}.`;
            if (userSeats.length === 1) {
                document.getElementById('selectedseats').innerHTML = `You have selected seat ${userSeats.toString()}.`;
            }
        }
        else {
            document.getElementById('confirmres').style.display = 'none';
            document.getElementById('selectedseats').innerHTML = `You need to select some seats to reserve. <br><a href = "#" id = "error">Close</a> this dialog box and pick at least one seat.`;
            document.getElementById('error').addEventListener('click', function (e) {
                e.preventDefault();
                document.getElementById('resform').style.display = 'none';
            })
        }
    }


    function seatSelectionProcess(thisSeat) {
        const index = userSeats.indexOf(thisSeat);
        if (index === -1) {
            userSeats.push(thisSeat);
            document.getElementById(thisSeat).className = 's';
        }
        else {
            userSeats.splice(index, 1);
            document.getElementById(thisSeat).className = 'a';
        }
        manageConfirmForm();

    }

    function reservedSeatsHandler() {
        for (const key in reservedSeats) {
            const theSeat = document.getElementById(reservedSeats[key].seat);
            theSeat.className = 'r';
            theSeat.innerHTML = 'R';
        }
    }
})();