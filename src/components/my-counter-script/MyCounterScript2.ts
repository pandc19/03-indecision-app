import { useCounter } from '@/composables/useCounter';
import { computed, ref, defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    // const counter = ref(props.value);
    // const squareCounter = computed(() => counter.value * counter.value);

    const { counter, squareCounter } = useCounter(props.value);

    return {
      counter,
      squareCounter,
    };
  },
});
