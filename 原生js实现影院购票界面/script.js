//获取DOM
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelected = document.getElementById('movie');

let ticketPrice = +movieSelected.value;

//渲染UI
populateUI();


function undateSeletedCount(){
    
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatIndex = [...selectedSeats].map((seat)=>[...seats].indexOf(seat));

    localStorage.setItem("selectedSeats",JSON.stringify(seatIndex));

    const selectedSeatsCount = selectedSeats.length;


    count.innerHTML = selectedSeatsCount;
    total.innerHTML = selectedSeatsCount * ticketPrice;
}

function setMovieData(movieIndex,moviePrice){
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);
}

movieSelected.addEventListener("change", e => {
    ticketPrice = e.target.value;
    setMovieData(e.target.selectedIndex,e.target.value);
    undateSeletedCount();

})


container.addEventListener('click',e=>{
    // console.log(2);
    if(e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied') 
    ){
        e.target.classList.toggle('selected');
        undateSeletedCount();
    }
})


function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    console.log(selectedSeats);
    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index)>-1){
                seat.classList.add("selected");
            }
        })
    }

    const selectedMovieIndex = JSON.parse(localStorage.getItem('selectedMovieIndex'));
    if(selectedMovieIndex!== null){
        movieSelected.selectedIndex = selectedMovieIndex;
    }
}

undateSeletedCount();