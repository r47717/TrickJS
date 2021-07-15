counter("#counter", { title: "Counter 1" });
counter("#counter2", { title: "Counter 2" });

table("#table", {
  header: ["First Name", "Last Name", "Phone", "Actions"],
  body: [["Ivan", "Petrov", "+18471111111"]],
});

tabs("#tabs", {
  tabs: ["Tab1", "Tab2", "Tab3"],
  tabsContent: ["Content of tab1", "Content of tab2", "Content of tab3"],
});

radio("#radio", {
  name: "lang",
  items: ["english", "spanish", "german", "chineese", "italian", "japan"],
});

clock("#clock");
