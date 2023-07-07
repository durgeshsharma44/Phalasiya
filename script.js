const navbarHtml = `<nav class="navbar navbar-expand-lg bg-navBar" >
<div class="container-fluid">
  <a class="navbar-brand" href="index.html"><img src="ashoka.png" alt="logo" style="max-height:50px;"></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
      </li>
   
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
 Contact Us
</a>
<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
  <li><a class="dropdown-item" href="janpratinidhi.html">जनप्रतिनिधी  </a></li>
  <li><a class="dropdown-item" href="karmik.html">कार्मिक</a></li>
  
</ul>
</li>
<li class="nav-item">
<a class="nav-link active" aria-current="page" href="https://schemes.rajasthan.gov.in/scheme/flagship?lan=hi">Schemes</a>
</li>
     
    </ul>
  
    <img  style="right:2px; max-height:50px;" src="gehlot.jpg" alt="">
    
  </div>
</div>
</nav>`;


const footerHtml = `<div class="text-center">&copy Panchayat Samiti Phalasiya</div>`;

function webOnInit(){
  document.getElementById("navBar").innerHTML = navbarHtml;
  document.getElementById("fooTer").innerHTML = footerHtml;
}