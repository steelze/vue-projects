<template>
  <main>
    <section class="quiz quiz-small">
      <form class="setup-form">
        <h2>setup quiz</h2>
        <!-- Amount -->
        <div class="form-control">
          <label fr="amount">number of questions</label>
          <input type="number" name="amount" id="amount" v-model.number="quiz.amount" class="form-input" min="1" max="50"
          />
        </div>
        <!-- Category -->
        <div class="form-control">
          <label for="category">category</label>
          <select name="category" id="category" class="form-input" v-model="quiz.category">
            <option value="sports">sports</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
          </select>
        </div>
        <!-- Difficulty -->
        <div class="form-control">
          <label for="difficulty">select difficulty</label>
          <select name="difficulty" id="difficulty" class="form-input" v-model="quiz.difficulty">
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        <p class="error" v-if="error">
          can't generate questions, please try different options
        </p>
        <button type="submit" @click.prevent="handleSubmit" class="submit-btn">
          start
        </button>
      </form>
    </section>
  </main>
</template>

<script>
import useGlobalContext from '@/hooks/useGlobalContext';

export default {
  name: 'Form',
  setup() {
    const { quiz, handleSubmit, error } = useGlobalContext();

    return { quiz, handleSubmit, error };
  }
}
</script>
