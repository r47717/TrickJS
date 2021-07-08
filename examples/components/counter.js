const counter = component((props) => {
  let counter = 0;
  const latestValues = [];
  const maxLatestValues = 5;

  function updateLatestValues(cnt) {
    latestValues.push(cnt);
    if (latestValues.length > maxLatestValues) {
      latestValues.shift();
    }
  }

  return () => [
    { h1: (props && props.title) || "Counter" },
    { span: "Current value of counter: " },
    { span: { strong: `${counter}` } },
    {
      div: [
        counter < 10 && {
          "button.btn.increment": "increment",
          on: {
            onclick: () => {
              counter++;
              updateLatestValues(counter);
            },
          },
        },
        counter > 0 && {
          "button.btn.decrement": "decrement",
          on: {
            onclick: () => {
              counter--;
              updateLatestValues(counter);
            },
          },
        },
      ],
    },
    `Latest Values (${latestValues.length}):`,
    { div: latestValues.map((value) => ({ "span.latest": `${value}` })) },
  ];
});
