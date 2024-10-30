<template>
  <section class="container-fluid py-5 text-center">
    <div class="row">
      <div class="col-12 col-lg-7 text-lg-start">
        <p class="small-text text-uppercase mb-2">Our Company</p>
        <h1 class="display-4 font-weight-bold">We run all kinds of SEO services and software solution development that vow your success.</h1>
        <div class="d-flex align-items-center mt-4">
          <h2 class="display-1 text-primary fw-bold">38</h2>
          <p class="ms-3">
            <small class="text-muted">Years’ Experience in IT</small><br>
            <a href="#" class="text-dark fw-bold text-decoration-none">Learn more about our Success Stories</a>
          </p>
        </div>
      </div>
      <div class="col-12 col-lg-5 text-lg-start mt-4 mt-lg-0">
        <p class="lead">To help your business reach its full potential, to cut costs and save time, we provide a wide range of essential IT services that will modernize your operation system and allow your business to reach new heights. We operate with more efficiency and give you more room to expand and grow. In the tough competition of the modern era, technology can make all the difference. Digitalization of key aspects of your business may be the key to your ultimate success.</p>
        <a href="#" class="btn btn-link text-decoration-none">Discover Now <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // You can manage any dynamic content here if needed.
    };
  }
};
</script>

<style scoped>
/* Custom Styles */
.small-text {
  letter-spacing: 2px;
  color: #6c757d;
}

h1 {
  color: #2c3e50;
  font-size: 48px !important;
}
h2{
  font-size: 88px !important;
}

.text-primary {
  color: #d2b48c !important;
}

a.btn-link {
  color: #0066ff;
  font-weight: bold;
}

a.btn-link:hover {
  text-decoration: underline;
}
</style>
