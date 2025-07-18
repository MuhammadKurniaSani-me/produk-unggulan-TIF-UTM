const produkUnggulan = [
  {
    title: 'Classification of skin cancer with random oversampling using mobilenetv2',
    name: 'Soni Indra Maulana',
    nim: '210411100136',
    url: '#',
    description: "lorem ipsum dolor sit amet",
    topic: 'Classification',
    tech: ['TensorFlow', 'Keras', 'MobileNetV2'] // Added tech tags
  },
  {
    title: 'Deteksi Abnormalitas Paru-Paru Pada Citra X-Ray Dada Menggunakan RetinaNet dengan Backbone ResNet50',
    name: 'Taufiqu Reza Yoga Pratama',
    url: '#',
    nim: '210411100014',
    description: "lorem ipsum dolor sit amet",
    topic: 'Object Detection',
    tech: ['PyTorch', 'RetinaNet', 'ResNet50'] // Added tech tags
  },
  {
    title: 'deteksi wajah dengan pendekatan hog dan facial landmark',
    name: 'Muhammad muqtafin',
    url: '#',
    nim: '210411100218',
    description: "lorem ipsum dolor sit amet",
    topic: 'Object Detection',
    tech: ['OpenCV', 'Dlib', 'HOG'] // Added tech tags
  },
  {
    title: 'IMPLEMENTASI ALGORITMA IMPROVED AUTOREGRESSIVE INTEGRATED MOVING AVERAGE PADA PREDIKSI PARTICULATE MATTER 2.5',
    name: 'MUHAMMAD KURNIA SANI',
    url: 'https://final-college-project-pezbvyfa5y62amudtfe5h7.streamlit.app',
    nim: '200411100046',
    description: "lorem ipsum dolor sit amet",
    topic: 'Forecasting',
    tech: ['Python', 'ARIMA', 'Streamlit'] // Added tech tags
  },
  {
    title: 'Klasifikasi varietas beras menggunakan transfer learning dengan arsitektur Densenet201',
    name: 'Moch. Miftachur Rifqi Al Husain',
    url: '#',
    nim: '210411100125',
    description: "lorem ipsum dolor sit amet",
    topic: 'Classification',
    tech: ['TensorFlow', 'DenseNet201'] // Added tech tags
  }
];

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

  const allCardsHTML = produkUnggulanFormatted.map(project => {
      // Dynamically create the tech tags HTML
      const techTagsHTML = project.tech.map(tag => 
          `<span class="inline-block bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium px-3 py-1 rounded-full mr-2 mb-2">
              #${tag}
          </span>`
      ).join('');

      return `
          <div class="bg-white border border-slate-200 rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:bg-slate-50 hover:-translate-y-1">
              
              <div class="flex-grow">
                  <h3 class="text-xl font-bold text-slate-900 mb-3">
                      ${project.title}
                  </h3>
                  <span class="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      ${project.topic}
                  </span>
                  <p class="text-sm text-slate-600 mb-1">by ${project.name}</p>
                  <p class="text-xs text-slate-500 mb-4">NIM ${project.nim}</p>
                  <p class="text-slate-700 leading-relaxed">${project.description}</p>
              </div>

              <div class="mt-4">
                  ${techTagsHTML}
              </div>

              <div class="mt-6 pt-6 border-t border-slate-200">
                   <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="block w-full text-center bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-500 transition-colors">
                      Kunjungi Web
                  </a>
              </div>
          </div>
      `;
  }).join('');

  container.innerHTML = allCardsHTML;
});