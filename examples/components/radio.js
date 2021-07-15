const radio = component((props) => {
  const { name, items } = props;
  let checkedIndex = 2;

  return () => [
    ...items.map((item, index) => ({
      "div.radio-item": [
        {
          input: "",
          attr: {
            name,
            type: "radio",
            value: item,
            checked: index === checkedIndex,
          },
          on: {
            onclick: () => {
              checkedIndex = index;
            },
          },
        },
        {
          span: item,
          on: {
            onclick: () => {
              checkedIndex = index;
            },
          },
        },
      ],
    })),
    {
      "div.selected-lang": [
        "Selected Language: ",
        { span: `${items[checkedIndex]}` },
      ],
    },
  ];
});
