const myfunction = () => {
  const container = document.getElementById("app");
  container.innerHTML = `<nav id="navbar" ></nav>  
  <div id="content" ></div> 
  <div id="footer" ></div> `;
};
myfunction();
//navbar start
const renderNav = () => {
  const container1 = document.getElementById("navbar");
  container1.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-info m-lg-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
  `;
  // code to render the navigation bar goes here
};
renderNav();
//navbar finish

//content start
const renderContent = () => {
  const container2 = document.getElementById("content");
  container2.innerHTML = ` <div class="container-fluid text-lg-start">
    <div class="cols-1 container-fluid">
      <div class="bg-primary p-2 mt-1">.bg-primary</div>
      <div class="bg-secondary p-2 mt-1">.bg-secondary</div>
      <div class="bg-success p-2 mt-1">.bg-success</div>
      <div class="bg-danger p-2 mt-1">.bg-danger</div>
      <div class="bg-warning p-2 mt-1">.bg-warning</div>
      <div class="bg-info p-2 mt-1">.bg-info</div>
      <div class="bg-light p-2 mt-1 mb-3">.bg-light</div>      
    </div>
    </div> `;

  // code to render the main content goes here
};
renderContent();
// content end

//footer start
const renderFooter = () => {
  const container3 = document.getElementById("footer");
  container3.innerHTML = ` <footer class="bg-dark text-white rgb(33,37,41) m-lg-3 p-3 ">
  <div class="container-fluid">
    <div class="row text-capitalize">
      <div class="col-6 ">&copy; 2002 Company, Inc.</div>
      <div class="col-6 text-end  ">
        <a href="#" class="text-secondary text-decoration-none">Home</a>
        <a href="#" class="text-secondary text-decoration-none">Features</a>
        <a href="#" class="text-secondary text-decoration-none">Pricing</a>
        <a href="#" class="text-secondary text-decoration-none">FAQs</a>
        <a href="#" class="text-secondary text-decoration-none">About</a>
      </div>
    </div>
</footer>   `;
  // code to render the footer goes here
};
renderFooter();
//footer finish
export { renderNav, renderContent, renderFooter, myfunction };
