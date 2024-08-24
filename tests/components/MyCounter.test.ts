import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';

describe('<MyCounter/>', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders the counter value correctly', () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });

    const [counterLabel, suqareLabel] = wrapper.findAll('h3');

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${value * value}`,
    );

    expect(counterLabel.text()).toContain(`Counter: ${value}`);
    expect(suqareLabel.text()).toContain(`Square: ${value * value}`);
  });

  test('increments the counter when +1 button is clicked', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });

    const [counterLabel, suqareLabel] = wrapper.findAll('h3');

    const btnIncrement = wrapper.find('button');
    await btnIncrement.trigger('click');

    expect(counterLabel.text()).toContain(`Counter: ${value + 1}`);
    expect(suqareLabel.text()).toContain(`Square: ${(value + 1) * (value + 1)}`);
  });

  test('decrements the counter when -1 button is clicked twice', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });

    const [counterLabel, suqareLabel] = wrapper.findAll('h3');

    const [, btnDecrement] = wrapper.findAll('button');
    await btnDecrement.trigger('click');
    await btnDecrement.trigger('click');

    expect(counterLabel.text()).toContain(`Counter: ${value - 2}`);
    expect(suqareLabel.text()).toContain(`Square: ${(value - 2) * (value - 2)}`);
  });
});
