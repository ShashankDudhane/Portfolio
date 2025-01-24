const apiEndpoints = {
    academic: [
        {
            img: "Images/LifeSphere.png",
            title: "LifeSphere Organizer",
            desc: "Details about this academic project."
        },
        {
            img: "Images/jobportal.jpg",
            title: "Job Portal",
            desc: "Details about this academic project."
        }
    ],
    personal: [
        {
            img: "Images/portfolio.png",
            title: "My Portfolio",
            desc: "Details about this personal project."
        },
        {
            img: "Images/climateAwareTransportation.png",
            title: "Climate Aware Transportation",
            desc: "Details about this personal project."
        }
    ]
};

function filterProjects(type) {
    const academicBtn = document.getElementById('academic-btn');
    const personalBtn = document.getElementById('personal-btn');
    const projectsContainer = document.getElementById('projects-container');

    if (type === 'academic') {
        academicBtn.classList.add('bg-blue-500', 'text-white');
        personalBtn.classList.remove('bg-blue-500', 'text-white');
       
    } else {
        personalBtn.classList.add('bg-blue-500', 'text-white');
        academicBtn.classList.remove('bg-blue-500', 'text-white');
        
    }

    projectsContainer.innerHTML = '';
    apiEndpoints[type].forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = "bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-95 w-80";

        projectCard.innerHTML = `
            <div class="relative">
                <img src="${project.img}" alt="${project.title}" class="w-full h-48  cursor-pointer">
            </div>
            <div class="p-4">
                <h3 class="text-lg font-bold text-blue-700">${project.title}</h3>
                <p class="text-gray-600 text-sm mt-2">${project.desc}</p>
                <a href="https://github.com" target="_blank" class="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition">View Project</a>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

// Modal Logic
document.getElementById('projects-container').addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
        const modal = document.getElementById('image-modal');
        const modalImage = document.getElementById('modal-image');
        modalImage.src = event.target.src;
        modal.classList.remove('hidden');
    }
});

document.getElementById('close-modal').addEventListener('click', function () {
    document.getElementById('image-modal').classList.add('hidden');
});

// Set default view to Academic
window.onload = () => {
    filterProjects('academic');
};