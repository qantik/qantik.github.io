const options = {
  useEasing: true,
  useGrouping: true,
  decimal: '.',
};

function counter_percentage() {
    options.suffix = '%';
    const counter = new CountUp('counter3', 0, 99.999, 3, 5.0, options);
    counter.start();
}
