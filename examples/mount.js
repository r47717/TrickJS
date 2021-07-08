counter(document.getElementById("counter"), { title: "Counter 1" });
counter(document.getElementById("counter2"), { title: "Counter 2" });

table(document.getElementById("table"), {
  header: ["First Name", "Last Name", "Phone", "Actions"],
  body: [["Ivan", "Petrov", "+18471111111"]],
});

tabs(document.getElementById("tabs"), {
  tabs: ["Tab1", "Tab2", "Tab3"],
  tabsContent: ["Content of tab1", "Content of tab2", "Content of tab3"],
});
