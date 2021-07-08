const tabs = component((props) => {
  const tabs = props.tabs;
  const tabsContent = props.tabsContent;
  let activeTab = 0;

  return () => [
    {
      "div.tabs-header": tabs.map((tab, i) => ({
        [i === activeTab ? "div.tab-item.active-tab" : "div.tab-item"]: tab,
        on: {
          onclick: () => {
            activeTab = i;
          },
        },
      })),
    },
    {
      div: tabsContent.map((item, i) => ({
        [i === activeTab ? "div.tab-content.active" : "div.tab-content"]: item,
      })),
    },
  ];
});
