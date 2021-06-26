function component(mount, factory) {
  const update = factory();

  function dom(mnt, tree) {
    if (Array.isArray(tree)) {
      for (const c of tree) {
        dom(mnt, c);
      }
    } else {
      if (tree === false || tree === null || tree === undefined) {
        // no action
      } else if (typeof tree === "string" || typeof tree === "number") {
        mnt.appendChild(document.createTextNode("" + tree));
      } else {
        const on = tree["on"] || {};
        const attr = tree["attr"] || {};
        let nodeSpec = Object.keys(tree).find(
          (key) => key !== "on" && key !== "attr"
        );
        const [nodeType, ...classes] = nodeSpec.split(".");
        if (nodeType) {
          const node = document.createElement(nodeType);
          mnt.appendChild(node);
          for (const cls of classes) {
            node.classList.add(cls);
          }
          for (const item of Object.keys(on)) {
            node[item] = (e) => {
              on[item](e);
              render();
            };
          }
          for (const item of Object.keys(attr)) {
            node.setAttribute(item, attr[item]);
          }
          if (tree[nodeSpec]) {
            dom(node, tree[nodeSpec]);
          }
        }
      }
    }
  }

  function render() {
    while (mount.firstChild) {
      mount.removeChild(mount.lastChild);
    }
    dom(mount, update());
  }

  render();
}
