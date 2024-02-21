function seatPlan(){
    const seat = document.getElementById('seat-plan');
    seat.scrollIntoView({ behavior: "smooth" });
}

const seatSelect = document.getElementById('seat-selection');
const seats = seatSelect.querySelectorAll('.btn');
let seatNumber = 32;
let perSeatCount = 0;
let totalTicketPrice = 0;
let grandTotalPrice = 0;

for(i = 0; i < seats.length; i++){
    let allSeat = seats[i];
    allSeat.addEventListener('click', function(){

        allSeat.classList.add('pointer-events-none');

        if(perSeatCount < 4){
            const addElement = document.getElementById('adding');
            addElement.classList.add('space-y-4');
            const div = document.createElement('div');
            div.classList.add('flex');
            div.classList.add('justify-around');
            addElement.appendChild(div);
            const p = document.createElement('p');
            p.innerText = allSeat.innerText;
            const p1 = document.createElement('p');
            p1.innerText = 'Economy'
            const p2 = document.createElement('p');
            p2.innerText = '550'
            div.appendChild(p);
            div.appendChild(p1);
            div.appendChild(p2);

            seatNumber = seatNumber - 1;
            setInnerText('seat-count', seatNumber);
            allSeat.classList.add('bg-blue-600');

            perSeatCount = perSeatCount + 1;
            setInnerText('add-seat', perSeatCount);

            totalTicketPrice = totalTicketPrice + 550;
            setInnerText('total-price', totalTicketPrice);

            grandTotalPrice = totalTicketPrice;
            setInnerText('grand-total', grandTotalPrice);

        }

        if ((perSeatCount === 4)) {
            enableBtn('coupon-btn');
            alert('Your Highest selection is 4 tickets!');
        }

        if (perSeatCount > 0) {
            enableBtn('nextBtn');
        }

    })
}

const couponBtn = document.getElementById('coupon-btn');
couponBtn.addEventListener('click', function () {

    const couponCode = document.getElementById('coupon-input').value;

    if (couponCode === 'NEW15') {
        let new15 = (totalTicketPrice * 15) / 100;

        grandTotalPrice = grandTotalPrice - new15;

        setInnerText('grand-total', grandTotalPrice);
        document.getElementById('coupon-field').classList.add('hidden');
    }
    else if (couponCode === 'Couple 20') {
        const couple20 = (totalTicketPrice * 20) / 100;
        grandTotalPrice = grandTotalPrice - couple20;
        setInnerText('grand-total', grandTotalPrice);
        document.getElementById('coupon-field').classList.add('hidden');
    }
    else {
        alert('Invalid Code! Please Enter a Valid Coupon Code')
    }
})

const num = document.getElementById('number')
num.addEventListener('input', function () {
    const numberValue = parseInt(num.value)
    if (perSeatCount > 0 && numberValue > -1 ) {
        enableBtn('next-btn')
    }

});


const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', function () {
    document.getElementById('header').classList.add('hidden');
    document.getElementById('main').classList.add('hidden');
    document.getElementById('footer').classList.add('hidden');
    document.getElementById('popup').classList.remove('hidden');

});

const returnBtn = document.getElementById('continue-btn');
returnBtn.addEventListener('click', function () {
    location.reload()
});
