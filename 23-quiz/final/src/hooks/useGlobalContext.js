import axios from 'axios';
import { computed, reactive, toRefs } from 'vue';

const API_ENDPOINT = 'https://opentdb.com/api.php?';

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const state = reactive({
  waiting: true,
  loading: false,
  questions: [],
  index: 0,
  correct: 0,
  error: false,
  quiz: {
    amount: 10,
    category: 'sports',
    difficulty: 'easy',
  },
  isModalOpen: false,
});

export default function useGlobalContext() {
  const fetchQuestions = async (url) => {
    state.loading = true;
    state.waiting = false;
    const response = await axios(url).catch((err) => console.log(err));
    if (!response) {
      state.waiting = true;
      return;
    }
    const data = response.data.results
    if (!data.length) {
      state.waiting = true;
      state.error = true;
      return;
    }
    state.questions = data;
    state.loading = false;
    state.waiting = false;
    state.error = false;
  }

  const question = computed(() => state.questions[state.index]?.question);

  const answers = computed(() => {
    if (!state.questions.length) {
      return [];
    }
    const { incorrect_answers, correct_answer } = state.questions[state.index];
    let answers = [...incorrect_answers];
    const tempIndex = Math.floor(Math.random() * 4);
    if (tempIndex === 3) {
      answers.push(correct_answer);
    } else {
      answers.push(answers[tempIndex]);
      answers[tempIndex] = correct_answer;
    }
    return answers;
  });

  const openModal = () => state.isModalOpen = true;

  const closeModal = () => {
    state.waiting = true;
    state.correct = 0;
    state.isModalOpen = false;
  }

  const nextQuestion = () => {
    const index = state.index + 1;
    if (index > state.questions.length - 1) {
      openModal();
      return 0;
    } else {
      state.index++;
    }
  }

  const checkAnswer = (answer) => {
    if (answer === state.questions[state.index]?.correct_answer) {
      state.correct++;
    }
    nextQuestion();
  }

  const handleSubmit = () => {
    const { amount, category, difficulty } = state.quiz;
    const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
    fetchQuestions(url)
  }

  return { ...toRefs(state), question, answers, handleSubmit, checkAnswer, closeModal };
}
