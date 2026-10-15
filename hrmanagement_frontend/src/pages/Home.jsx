import image1 from '../assets/image1.webp'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

function Home(){
       return(
        <div>
          <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
export default Home