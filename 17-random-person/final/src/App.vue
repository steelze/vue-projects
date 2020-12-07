<template>
  <main>
    <div class="block bcg-black"></div>
    <div class="block">
      <div class="container">
        <img :src="(state.person && state.person.image) || defaultImage" alt="random user" class="user-img" />
        <p class="user-title">My {{ state.label }} is</p>
        <p class="user-value">{{ state.value }}</p>
        <div class="values-list">
          <button class="icon" data-label="name" @mouseover="handleValue">
            <i class="material-icons">face</i>
          </button>
          <button class="icon" data-label="email" @mouseover="handleValue">
            <i class="material-icons">email</i>
          </button>
          <button class="icon" data-label="age" @mouseover="handleValue">
            <i class="material-icons">calendar_today</i>
          </button>
          <button class="icon" data-label="street" @mouseover="handleValue">
            <i class="material-icons">map</i>
          </button>
          <button class="icon" data-label="phone" @mouseover="handleValue">
            <i class="material-icons">phone</i>
          </button>
          <button class="icon" data-label="password" @mouseover="handleValue">
            <i class="material-icons">lock</i>
          </button>
        </div>
        <button class="btn" type="button" :disabled="state.loading" @click="getPerson">
          {{ state.loading ? 'loading...' : 'random user' }}
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: 'App',
  setup() {
    const url = 'https://randomuser.me/api/';
    const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

    const state = reactive({
      loading: true,
      person: null,
      label: 'name',
      value: 'random person',
    });

    const getPerson = async () => {
      state.loading = true;
      const response = await fetch(url);
      const data = await response.json();
      const person = data.results[0];
      const {
        phone, email,
        picture: { large: image },
        login: { password },
        name: { first, last },
        dob: { age },
        location: { street: { number, name } },
      } = person;

      const newPerson = {
        image,
        phone,
        email,
        password,
        age,
        street: `${number} ${name}`,
        name: `${first} ${last}`,
      };

      state.person = newPerson;
      state.loading = false;
      state.value = newPerson.name;
    }

    const handleValue = (e) => {
      if(state.loading) return;
      if (e.target.classList.contains('icon')) {
        state.label = e.target.dataset.label;
        state.value = state.person[state.label];
      }
    }

    getPerson();

    return { state, defaultImage, handleValue, getPerson };
  },
}
</script>
