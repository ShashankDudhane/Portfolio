const certificates = [
  {
    image: 'Images/git.png',
    title: 'Git Training',
    description: 'Learn the fundamentals of Git, including version control, branching, and collaboration, to efficiently manage code and projects.'
  },
  {
    image: 'Images/sololearn.png',
    title: 'Web Development',
    description: ' Master the essentials of web development using HTML, CSS, and JavaScript to build responsive and interactive websites.'
  },
  {
    image: 'Images/Aicte.png',
    title: 'Android Development',
    description: 'Learn to develop dynamic and user-friendly Android applications using Java, focusing on UI design and core functionalities.'
  },
  {
    image: 'Images/java.png',
    title: 'Java',
    description: ' Gain expertise in Core Java, Servlets, JSP, and JDBC to build robust applications, from backend logic to dynamic web interfaces.'
  },
  {
    image: 'Images/vcs.jpg',
    title: 'Git Version Control',
    description: 'Learn the fundamentals of Git, including version control, branching, and collaboration, to efficiently manage code and projects.'
  },
  {
    image: 'Images/hackathon.jpg',
    title: 'Internal Hackathon',
    description: 'Participated in an exciting internal hackathon, collaborating with a team to develop innovative solutions and demonstrate problem-solving skills. It was an excellent opportunity to showcase creativity, coding expertise, and teamwork.'
  },
  {
    image: 'Images/corejava.jpg',
    title: ' Core Java',
    description: ' Gain expertise in Core Java concepts, Swing , Awt and JDBC to build robust applications, from backend logic to dynamic web interfaces.'
  }
  ,{
    image: 'Images/octanet.jpg',
    title: 'Octanet WebDev Internship',
    description: ' Gain hands-on experience in building dynamic and responsive websites using modern web technologies. This internship focuses on enhancing your skills in frontend developent.'
  },
  {
    image: 'Images/frontend.png',
    title: 'Frontend Development',
    description: ' I completed a course on Frontend Development, where I gained hands-on experience in building user interfaces using HTML, CSS, JavaScript  and React to create dynamic and responsive web applications.'
  }
];

let currentIndex = 0;

// DOM Elements
const certificateImage = document.getElementById('certificateImage');
const certificateTitle = document.getElementById('certificateTitle');
const certificateDescription = document.getElementById('certificateDescription');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');
const certificateLink = document.getElementById('certificateLink');

// Function to update certificate content
const updateCertificate = (index) => {
  const certificate = certificates[index];
  certificateImage.src = certificate.image;
  certificateTitle.textContent = certificate.title;
  certificateDescription.textContent = certificate.description;
  certificateLink.href = certificate.image; // Link to open the image in a new tab
};

// Initialize Certificate Content on Page Load
document.addEventListener('DOMContentLoaded', () => {
  updateCertificate(currentIndex);
});

// Event Listeners for Arrows
prevArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
  updateCertificate(currentIndex);
});

nextArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % certificates.length;
  updateCertificate(currentIndex);
});

// Open image in new window when clicked
certificateImage.addEventListener('click', (e) => {
  e.preventDefault();
  window.open(certificates[currentIndex].image, '_blank');
});