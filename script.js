const produkUnggulan = [
  {
    title: 'Classification of skin cancer with random oversampling using mobilenetv2',
    name: 'Soni Indra Maulana',
    nim: '210411100136',
    url: '#',
    description: "lorem ipsum dolor sit amet"
  },
  {
    title: 'Deteksi Abnormalitas Paru-Paru Pada Citra X-Ray Dada Menggunakan RetinaNet dengan Backbone ResNet50',
    name: 'Taufiqu Reza Yoga Pratama',
    url: '#',
    nim: '210411100014',
    description: "lorem ipsum dolor sit amet"
  },
  {
    title: 'deteksi wajah dengan pendekatan hog dan facial landmark',
    name: 'Muhammad muqtafin',
    url: 'https://huggingface.co/spaces/kaioooo/real-time-face-recognition-gradio',
    nim: '210411100218',
    description: "lorem ipsum dolor sit amet"
  },
  {
    title: 'IMPLEMENTASI ALGORITMA IMPROVED AUTOREGRESSIVE INTEGRATED MOVING AVERAGE PADA PREDIKSI PARTICULATE MATTER 2.5',
    name: 'MUHAMMAD KURNIA SANI',
    url: 'https://final-college-project-pezbvyfa5y62amudtfe5h7.streamlit.app',
    nim: '200411100046',
    description: "lorem ipsum dolor sit amet"
  },
  {
    title: 'Klasifikasi varietas beras menggunakan transfer learning dengan arsitektur Densenet201',
    name: 'Moch. Miftachur Rifqi Al Husain',
    url: '#',
    nim: '210411100125',
    description: "lorem ipsum dolor sit amet"
  }
];

// Fungsi bantuan yang dapat digunakan kembali untuk konversi ke Title Case
const toTitleCase = (str) => {
  if (!str || typeof str!== 'string') {
    return ''; // Penanganan edge case untuk input non-string atau null/undefined
  }
  return str
   .split(' ')
   .map(word => {
      if (word.length === 0) return ''; // Menangani spasi ganda
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
   .join(' ');
};

// Membuat larik baru dengan data yang telah diformat menggunakan map()
const produkUnggulanFormatted = produkUnggulan.map(produk => ({
  ...produk, // Menyalin semua properti asli untuk menjaga integritas data
   title: toTitleCase(produk.title),
   name: toTitleCase(produk.name)
 }));

 document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('projects-container');

  if (!container) {
      console.error('Project container not found!');
      return;
  }

  // --- IMPROVEMENT ---
  // 1. Create one big string from all the cards first.
  const allCardsHTML = produkUnggulanFormatted.map(project => {
      // Just return the string for each card
      return `
          <div class="bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
              <div class="p-6 flex-grow">
                  <h3 class="text-xl font-semibold text-slate-900 mb-2">
                      ${project.title}
                  </h3>
                  <p class="text-sm text-slate-500 mb-4">
                      by ${project.name}
                  </p>
                  <p class="text-slate-700 leading-relaxed">
                      ${project.description}
                  </p>
              </div>
              <div class="bg-slate-50 p-4">
                  <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                      Kunjungi Web
                  </a>
              </div>
          </div>
      `;
  }).join(''); // Use .join('') to combine the array of strings into one big string.

  // 2. Set the innerHTML only ONCE. This is much faster.
  container.innerHTML = allCardsHTML;
});