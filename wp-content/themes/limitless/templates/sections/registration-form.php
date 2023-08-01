<section class="form wrapper">
  <h1 class="heading_xxl heading_heavy form__heading">Registration form</h1>

  <form class="form__body" method="POST">
    <div class="input input_compact form__item">
      <label class="paragraph_sm paragraph_heavy input__label" for="input-form-1">
        Email address
        <span class="input__required">*</span>
      </label>

      <input 
        type="email" 
        name="email" 
        class="input__body paragraph_heavy" 
        id="input-form-1"
        required 
      />
    </div>

    <div class="input input_compact form__item">
      <label class="paragraph_sm paragraph_heavy input__label" for="input-form-2">
        Password
        <span class="input__required">*</span>
      </label>

      <input 
        type="password" 
        name="password" 
        class="input__body paragraph_heavy" 
        id="input-form-2"
        required 
      />
    </div>

    <?php 
      if(!empty($atts)) {
          render_element('components/message', '', $atts);
      }
    ?>

    <button 
      type="sumbit"
      class="button button_medium button_primary form__button" 
    >
      Register
    </button>
  </form>
</section>