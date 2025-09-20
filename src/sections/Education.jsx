import { educationReviews } from '../constants/index.js';

const Education = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text text-center mb-8">EDUCATIONAL BACKGROUND</h3>

      <div className="education-container">
  {educationReviews.map((item) => (
    <div
      key={`review-${item.id}`}
      className="education-review"
    >
      {/* Image Cover Section */}
      <div className="education-contents">
        <img
          src={item.img}
          alt="reviewer"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 bg-gray-900 text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <p className="font-semibold text-lg">{item.school}</p>
        <p className="text-gray-300 text-sm font-light mb-2">{item.course}</p>
        <p className="text-gray-800 font-light bg-yellow-400 p-2 rounded-md">
          {item.review}
        </p>
      </div>
    </div>
  ))}
</div>


    </section>
  );
};

export default Education;







// <div class="row gy-4">
// <div class="col-md-4">
//   <div class="card-custom rounded-4 bg-black-500 shadow-effect">
//     <div class="client-content rounded-4">
//       <img class="custom-img-size" src="/css/style/images/techYves.jpg" alt="rutemeza">          
//              <!-- <iframe width="300" height="200" src="https://www.youtube.com/embed/qbfbAuLjc8s" title="learn how to  make an image dripping-Effect in adobe photoshop" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>dripping</iframe> -->
//     </div>
//     <div class="card-custom-content p-4">
//       <p class="text-brand mb-2">2022</p>
//       <h5 class="mb-4">YB_creativity my daily work activity tech solution</h5>
//       <!-- <a href="#" class="link-custom">Watch Tutorial</a> -->

//     </div>
//   </div>
// </div>
// <!--  -->
// <div class="col-md-4">
//   <div class="card-custom rounded-4 bg-base shadow-effect">
//     <div class="card-custom-image rounded-4">
//       <!-- <img class="rounded-4" src="/css/style/images/rut.org.jpg" alt="rfresh kbsa"> -->
//       <iframe width="300" height="200" src="https://www.youtube.com/embed/825SzItgeko?si=l-Br6QwBJleLfrBH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>animation</iframe>
//     </div>
//     <div class="card-custom-content p-4">
//       <p class="text-brand mb-2"> 2024</p>
//       <h5 class="mb-4">YB_creativity content creator </h5>


//       <a href="#" class="link-custom">Watch Tutorial</a>

//     </div>
//   </div>
// </div>
// <!--  -->

// <div class="col-md-4">
//   <div class="card-custom rounded-4 bg-base shadow-effect">
//     <div class="card-custom-image rounded-4">
//       <!-- <img class="rounded-4" src="/css/style/images/mudasobwa.jpg" alt="rfresh kbsa"> -->

//       <iframe width="300" height="200" src="https://www.youtube.com/embed/ZeuUnkvriPU?si=wQoMIUhJ9UceyMRy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//     </div>
//     <div class="card-custom-content p-4">
//       <p class="text-brand mb-2">2024</p>
//       <h5 class="mb-4">YB_creativity content creator</h5>


//       <a href="#" class="link-custom">Watch Tutorial</a>

//     </div>
//   </div>
// </div>
// </div>