const card = document.querySelectorAll('.card');
const card1 = document.querySelector('#card-1');
const card2 = document.querySelector('#card-2');
const next = document.querySelector('#next');
const modal = document.querySelector('.modal');

function rotate(target) {
    anime({
        targets: target,
        rotateY: {value: '+=360'},
        duration: 2000,
        easing: 'linear'
    })
}

card1.addEventListener('click', function() {
    rotate(card1);
});

card2.addEventListener('click', function() {
    rotate(card2);
});

next.addEventListener('click', function(){
    modal.innerHTML = `

    <!-- Add .modal-dialog-centered to .modal-dialog to vertically center the modal -->
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">


      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">START-UP</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <iframe class="mx-auto" style="width: 100%;" src="https://www.youtube.com/embed/BemKyzbLDDc?autoplay=1">
          </iframe>
          <button type="button" class="btn btn-dark btn-block mt-2 text-danger" data-dismiss="modal" onclick="location.href='vocab.html';">Check it out on Netflix</button>
          <button type="button" class="btn btn-primary btn-block text-white" id="next" onclick="location.href='resources.html'">Next</button>
        </div>
      </div>
    </div>`;
});

