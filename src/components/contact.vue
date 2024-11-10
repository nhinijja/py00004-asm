<template>
  <section id="contact" class="contact section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Contact</h2>
      <p>
        <span>Need Help?</span>
        <span class="description-title">Contact Us</span>
      </p>
    </div>
    <!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3156.27692857188!2d109.03052367139027!3d14.478970326972815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sus!4v1731223079173!5m2!1sen!2sus"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <!-- End Google Maps -->

      <div class="row gy-4">
        <div class="col-md-6">
          <div
            class="info-item d-flex align-items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <i class="icon bi bi-geo-alt flex-shrink-0"></i>
            <div>
              <h3>Address</h3>
              <p>08 Nguyễn Hiền, Hoai Nhon</p>
            </div>
          </div>
        </div>
        <!-- End Info Item -->

        <div class="col-md-6">
          <div
            class="info-item d-flex align-items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <i class="icon bi bi-telephone flex-shrink-0"></i>
            <div>
              <h3>Call Us</h3>
              <p>0377420495</p>
            </div>
          </div>
        </div>
        <!-- End Info Item -->

        <div class="col-md-6">
          <div
            class="info-item d-flex align-items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <i class="icon bi bi-envelope flex-shrink-0"></i>
            <div>
              <h3>Email Us</h3>
              <p>nhi81924@gmail.com</p>
            </div>
          </div>
        </div>
        <!-- End Info Item -->

        <div class="col-md-6">
          <div
            class="info-item d-flex align-items-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <i class="icon bi bi-clock flex-shrink-0"></i>
            <div>
              <h3>Opening Hours<br /></h3>
              <p>
                <strong>Mon-Sat:</strong> 11AM - 11PM;
                <strong>Sunday:</strong> Closed
              </p>
            </div>
          </div>
        </div>
        <!-- End Info Item -->
      </div>

      <!-- Contact Form -->
      <form
        action="forms/contact.php"
        method="post"
        class="php-email-form"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div class="row gy-4">
          <div class="col-md-6">
            <input
              type="text"
              name="name"
              class="form-control"
              placeholder="Your Name"
              required
            />
          </div>

          <div class="col-md-6">
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div class="col-md-12">
            <input
              type="text"
              class="form-control"
              name="subject"
              placeholder="Subject"
              required
            />
          </div>

          <div class="col-md-12">
            <textarea
              class="form-control"
              name="message"
              rows="6"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <div class="col-md-12 text-center">
            <div class="loading">Loading...</div>
            <div class="error-message"></div>
            <div class="sent-message">
              Your message has been sent. Thank you!
            </div>

            <button type="submit">Send Message</button>
          </div>
        </div>
      </form>
      <!-- End Contact Form -->
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
/* You can add custom styles for this page here */
</style>
