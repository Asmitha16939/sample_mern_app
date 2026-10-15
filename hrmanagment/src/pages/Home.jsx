import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

function Home(){
    return (
        <div>
            <div id="carouselStacked" class="carousel slide">
  <div class="d-flex justify-content-between align-items-center">
    <h5 class="mb-0">Top controls</h5>
    <div>
      <button class="btn-icon btn-sm" type="button" data-bs-target="#carouselStacked" data-bs-slide="prev">
        <span class="carousel-icon-prev" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="btn-icon btn-sm" type="button" data-bs-target="#carouselStacked" data-bs-slide="next">
        <span class="carousel-icon-next" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div class="carousel-inner rounded-5">
    <div class="carousel-item active">
      <img src={image1} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={image2} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={image3} class="d-block w-100" alt="..."></img>
    </div>
  </div>
</div>
            
            
        </div>
    )
    

    

}
export default Home