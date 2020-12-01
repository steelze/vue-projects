<template>
  <section class="hero" @mouseover="$emit('close-submenu')">
    <div class="hero-center">
      <article class="hero-info">
        <h1>
          Payments infrastructure <br />
          for the internet
        </h1>
        <p>
          Millions of companies of all sizes—from startups to Fortune 500s—use
          Stripe’s software and APIs to accept payments, send payouts, and
          manage their businesses online.
        </p>
        <button class="btn">Start now</button>
      </article>
      <article class="hero-images">
        <img src="../assets/phone.svg" class="phone-img" alt="phone" />
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>
