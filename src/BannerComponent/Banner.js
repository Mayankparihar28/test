import "./Banner.css";
function Banner() {
  return (
    <div>
      {/* Hero Start */}
      <div class="container-fluid bg-primary py-5 mb-5 hero-header">
        <div class="container py-5">
          <div class="row justify-content-start">
            <div class="col-lg-8 text-center text-lg-start">
              {/* <h1 class="display-1 text-uppercase text-dark mb-lg-4">Pet Shop</h1> */}
              <h1 class="text-uppercase text-white mb-lg-4">BID YOUR TENDER</h1>
              <p class="fs-4 text-white mb-lg-4">
                Dolore tempor clita lorem rebum kasd eirmod dolore diam eos
                kasd. Kasd clita ea justo est sed kasd erat clita sea
              </p>
              <div class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <a class="btn btn-outline-light border-2 py-md-3 px-md-5 me-5">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
