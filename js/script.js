const projects = document.getElementsByClassName('project-container');
const btnMore = document.getElementById('btn-more');

for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', togleModal);
}
document.getElementById('recent-project').addEventListener('click', togleModal);
document.getElementById('modal-bg').addEventListener('click', togleModal);

function togleModal(event) {
    document.body.classList.toggle('scroll-lock');
    document.getElementById('modal-bg').classList.toggle('hidden');
    if (!document.getElementById('modal-bg').classList.contains('hidden')) {

        let selProject = event.target

        while (selProject.dataset['path'] == null) {
            selProject = selProject.parentElement;
        }

        document.getElementById('iframe').src = selProject.dataset['path'];
    }
}


btnMore.addEventListener('click', function (event) {
   document.getElementsByTagName('main')[0].classList.toggle('open');
   document.getElementById('all-project').classList.toggle('open');
   btnMore.getElementsByTagName('i')[0].classList.toggle('fa-caret-up');
   btnMore.getElementsByTagName('i')[0].classList.toggle('fa-caret-down');
});



