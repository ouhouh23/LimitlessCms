  <footer class="footer wrapper">
    <div class="footer__container">
      <div class="footer__icon-group">
        <?php render_component('logo') ?>

        <div class="footer__icons">
          <i class="social social_dark fa-brands fa-facebook-f"></i>

          <i class="social social_dark fa-solid fa-envelope"></i>

          <i class="social social_dark fa-brands fa-youtube"></i>

          <i class="social social_dark fa-brands fa-instagram"></i>

          <i class="social social_dark fa-brands fa-twitter"></i>
        </div>
      </div>

      <nav class="footer__navigation">
          <ul class="footer__group">
              <li class="is-selected">
                <a href="#" class="link link_large link_primary footer__link footer__heading">
                  hardcoded menu
                </a>
              </li>
              <li class="is-selected">
                <a href="#" class="link link_large link_primary footer__link footer__heading">
                  hardcoded menu
                </a>
              </li>
              <li class="is-selected">
                <a href="#" class="link link_large link_primary footer__link footer__heading">
                  hardcoded menu
                </a>
              </li>
          </ul>

          <ul class="footer__group">
              <li class="is-selected">
                <a href="#" class="link link_large link_primary footer__link footer__heading">
                  hardcoded menu
                </a>
              </li>
              <li class="is-selected">
                <a href="#" class="link link_large link_primary footer__link footer__heading">
                  hardcoded menu
                </a>
              </li>
              <li class="is-selected">
                <a href="#" class="link link_large link_primary footer__link footer__heading">
                  hardcoded menu
                </a>
              </li>
          </ul>

          <ul class="footer__group">
            <li class="is-selected">
              <a href="#" class="link link_large link_primary footer__link footer__heading">
                hardcoded menu
              </a>
            </li>
            <li class="is-selected">
              <a href="#" class="link link_large link_primary footer__link footer__heading">
                hardcoded menu
              </a>
            </li>
            <li class="is-selected">
              <a href="#" class="link link_large link_primary footer__link footer__heading">
                hardcoded menu
              </a>
            </li>
        </ul>
      </nav>
    
      <form class="form footer__form">
        <h3 class="caps caps_heavy form__heading footer__heading">Stay up to date!</h3>

        <div class="input input_compact form__item">
          <label class="paragraph_sm paragraph_heavy input__label" for="footer-form-1">
            Name
            <span class="input__required">*</span>
          </label>

          <input 
            type="text" 
            name="text-input" 
            placeholder="Jane Pollock"
            class="input__body paragraph_heavy" 
            id="footer-form-1" 
          />
        </div>

        <div class="input input_compact form__item">
          <label class="paragraph_sm paragraph_heavy input__label" for="footer-form-2">
            Email address
            <span class="input__required">*</span>
          </label>

          <input 
            type="email" 
            name="text-input" 
            placeholder="jane@example.com"
            class="input__body paragraph_heavy" 
            id="footer-form-2" 
          />
        </div>

        <button 
          type="button"
          class="button button_small button_primary form__button" 
        >
          Subscribe!
        </button>
      </form>
    </div>

    <div class="footer__copyrights">
      <span class="paragraph_tiny paragraph_light">
        ©2020 Limitless. Limitless is a 501(c)(3) tax-exempt charity. 
        All Rights Reserved. EIN: 90-1302804
      </span>
    </div>
  </footer>

  <?php wp_footer() ?>

</body>
</html>
