const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const modalButton = document.querySelector('.modal_close');

let modalShown = false; 

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
};



modalTrigger.onclick = () => {
    openModal();
};

modalButton.onclick = (event) => {
    closeModal();
};

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
};


// const scrollHandler = () => {
//     if (!modalShown && (window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
//         openModal();
//         modalShown = true; 
//         window.removeEventListener('scroll', scrollHandler);
//     }
// };

// window.addEventListener('scroll', scrollHandler);




setTimeout(openModal, 10000);