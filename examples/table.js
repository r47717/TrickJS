const table = component((props) => {
  const header = ["First Name", "Last Name", "Phone", "Actions"];
  const body = [["Ivan", "Petrov", "+18471111111"]];

  let firstName = "";
  let lastName = "";
  let phone = "";

  return () => [
    { h1: `Employee Table - ${body.length} employees` },
    {
      table: [
        { thead: { tr: header.map((item) => ({ th: item })) } },
        {
          tbody: body.map((row, index) => ({
            tr: [
              ...row.map((cell) => ({ td: cell })),
              {
                button: "remove",
                on: {
                  onclick: () => body.splice(index, 1),
                },
              },
            ],
          })),
        },
      ],
    },
    {
      form: [
        {
          "div.table-row": [
            { span: "First Name:" },
            {
              input: "",
              attr: {
                type: "text",
                name: "first-name",
                value: firstName,
              },
              on: {
                oninput: (e) => {
                  firstName = e.target.value;
                },
              },
            },
          ],
        },
        {
          "div.table-row": [
            { span: "Last Name:" },
            {
              input: "",
              attr: {
                type: "text",
                name: "last-name",
                value: lastName,
              },
              on: {
                oninput: (e) => {
                  lastName = e.target.value;
                },
              },
            },
          ],
        },
        {
          "div.table-row": [
            { span: "Phone:" },
            {
              input: "",
              attr: {
                type: "text",
                name: "phone",
                value: phone,
              },
              on: {
                oninput: (e) => {
                  phone = e.target.value;
                },
              },
            },
          ],
        },
        {
          div: {
            button: "Add",
            on: {
              onclick: (e) => {
                e.preventDefault();
                body.push([firstName, lastName, phone]);
                firstName = "";
                lastName = "";
                phone = "";
              },
            },
          },
        },
      ],
    },
  ];
});

table(document.getElementById("table"));
