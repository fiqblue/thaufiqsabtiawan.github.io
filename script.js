window.onload = function () {
    // Data CV Anda
    var profileData = {
        name: "Thaufiq Sabtiawan",
        jobTitle: "Mahasiswa",
        email: "sabtiawan12@gmail.com",
        phone: "000",
    };

    var educationData = {
        // Data pendidikan Anda
        Asal 
    };

    var experienceData = {
        // Data pengalaman kerja Anda
    };

    var skillsData = {
        // Keahlian Anda
        
    };

    // Fungsi untuk mengisi data ke bagian profile
    function fillProfile() {
        var profileSection = document.getElementById("profile");
        var profileHTML = `
            <h2>${profileData.name}</h2>
            <p>${profileData.jobTitle}</p>
            <p>Email: ${profileData.email}</p>
            <p>Phone: ${profileData.phone}</p>
        `;
        profileSection.innerHTML = profileHTML;
    }

    // Fungsi untuk mengisi data ke bagian education
    function fillEducation() {
        var educationSection = document.getElementById("education");
        var educationHTML = `
            <!-- Tambahkan kode HTML untuk menampilkan data pendidikan -->
        `;
        educationSection.innerHTML = educationHTML;
    }

    // Fungsi untuk mengisi data ke bagian experience
    function fillExperience() {
        var experienceSection = document.getElementById("experience");
        var experienceHTML = `
            <!-- Tambahkan kode HTML untuk menampilkan data pengalaman kerja -->
        `;
        experienceSection.innerHTML = experienceHTML;
    }

    // Fungsi untuk mengisi data ke bagian skills
    function fillSkills() {
        var skillsSection = document.getElementById("skills");
        var skillsHTML = `
            <!-- Tambahkan kode HTML untuk menampilkan keahlian -->
        `;
        skillsSection.innerHTML = skillsHTML;
    }

    // Panggil fungsi untuk mengisi data ke dalam CV
    fillProfile();
    fillEducation();
    fillExperience();
    fillSkills();
};
