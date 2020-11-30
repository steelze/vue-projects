<template>
  <section class="section" :class="loading ? 'loading' : ''" id="app">
    <h1 v-if="loading">Loading...</h1>
    <div v-if="!loading">
      <div class="title">
        <h2>expierence</h2>
        <div class="underline"></div>
      </div>
      <div class="jobs-center">
        <div class="btn-container">
          <button
            type="button"
            v-for="(job, index) in jobs"
            :key="job.id"
            @click="current = index"
            :class="['job-btn', (index === current) && 'active-btn']"
          >
            {{ job.company }}
          </button>
        </div>
        <article class="job-info">
          <h3>{{ selectedJob.title }}</h3>
          <h4>{{ selectedJob.company }}</h4>
          <p class="job-date">{{ selectedJob.dates }}</p>
          <div class="job-desc" v-for="(duty, index) in selectedJob.duties" :key="index">
            <i class="material-icons job-icon">double_arrow</i>
            <p>{{ duty }}</p>
          </div>
        </article>
      </div>
      <button type="button" class="btn">
        more info
      </button>
    </div>
  </section>
</template>

<script>
const url = 'https://course-api.com/react-tabs-project';

export default {
  name: 'App',
  mounted() {
    this.fetchJobs();
  },
  data() {
    return {
      loading: true,
      jobs: [],
      current: 0,
    }
  },
  methods: {
    async fetchJobs() {
      const reponse = await fetch(url)
      const jobs = await reponse.json()
      this.jobs = jobs;
      this.loading = false;
    }
  },
  computed: {
    selectedJob() {
      return this.jobs[this.current];
    }
  }
}
</script>
