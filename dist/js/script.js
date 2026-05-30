// Navbar-fixed
window.onscroll= function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});

const projects = {

    project1: {
        title: "Android Mobile Application called FitCal",
        desc: "A mobile application called FitCal which has the main feature can detect calories in food and also burn calories based on user activity.",

        // khusus screenshot HP
        imageClass: "max-h-[700px] object-contain",

        images: [
            "dist/img/mobile/1.jpeg",
            "dist/img/mobile/login.jpeg",
            "dist/img/mobile/register.jpeg",
            "dist/img/mobile/menu.jpeg",
            "dist/img/mobile/cek_kalori.jpeg",
            "dist/img/mobile/hasil_cek_kalori.jpeg",
            "dist/img/mobile/burn_kalori.jpeg",
            "dist/img/mobile/hasil_burn_kalori.jpeg",
            "dist/img/mobile/BMI.jpeg",
            "dist/img/mobile/hasil_BMI.jpeg"
        ]
    },

    project2: {
        title: "SPPD (Sistem Pengelolaan Perjalanan Dinas) ",
        desc: "adalah aplikasi berbasis web yang dirancang untuk mempermudah pengelolaan perjalanan dinas, mulai dari perencanaan, persetujuan, hingga pelaporan perjalanan dinas. Aplikasi ini memungkinkan pengguna untuk mengajukan permohonan perjalanan dinas, melacak status permohonan, dan mengelola data perjalanan dinas dengan efisien.",

        // khusus dashboard
        imageClass: "h-[350px] object-cover",

        images: [
            "dist/img/sppd/login.png",
            "dist/img/sppd/sppd1.png",
            "dist/img/sppd/sppd2.png",
            "dist/img/sppd/sppd3.png",
            "dist/img/sppd/sppd4.png",
            "dist/img/sppd/sppd5.png",
            "dist/img/sppd/sppd6.png",
            "dist/img/sppd/sppd7.png",
            "dist/img/sppd/sppd8.png",
            "dist/img/sppd/sadmin1.png",
            "dist/img/sppd/sadmin2.png"
        ]
    },

    project3: {
        title: "DMM (Dashboard Maketing Management)",
        desc: "Aplikasi berbasis web yang dirancang untuk membantu perusahaan dalam mengelola dan menganalisis data pemasaran mereka. Aplikasi ini menyediakan berbagai fitur seperti visualisasi data, pelaporan, dan analisis tren pemasaran untuk membantu perusahaan membuat keputusan yang lebih baik dalam strategi pemasaran mereka.",

        // khusus website
        imageClass: "h-[350px] object-cover",

        images: [
            "dist/img/dmm/dmm1.png",
            "dist/img/dmm/profiledmm.png",
            "dist/img/dmm/dmm2.png",
            "dist/img/dmm/dmm3.png",
            "dist/img/dmm/dmm4.png",
            "dist/img/dmm/dmm5.png",
            "dist/img/dmm/dmm6.png",
            "dist/img/dmm/dmm7.png",
            "dist/img/dmm/dmm8.png",
            "dist/img/dmm/dmm9.png",
        ]
    }
};

function openModal(projectKey) {

    const project = projects[projectKey];

    document.getElementById('modalTitle').innerText = project.title;
    document.getElementById('modalDesc').innerText = project.desc;

    const gallery = document.getElementById('gallery');

    gallery.innerHTML = '';

    project.images.forEach(image => {

        gallery.innerHTML += `
            <img
                src="${image}"
                class="w-full ${project.imageClass} rounded-xl shadow-md"
            >
        `;
    });

    document.getElementById('projectModal').classList.remove('hidden');
    document.getElementById('projectModal').classList.add('flex');
}

function closeModal() {
    document.getElementById('projectModal').classList.add('hidden');
    document.getElementById('projectModal').classList.remove('flex');
}