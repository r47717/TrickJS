function _component(mount, factory, props) {
  const update = factory(props);

  let selectionName, selectionStart, selectionEnd;

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
              if (
                item === "oninput" &&
                nodeType === "input" &&
                node.getAttribute("type") === "text"
              ) {
                selectionName = node.getAttribute("name");
                selectionStart = node.selectionStart;
                selectionEnd = node.selectionEnd;
              }
              render();
            };
          }
          for (const item of Object.keys(attr)) {
            if (item === "checked") {
              node["checked"] = attr[item];
            } else {
              node.setAttribute(item, attr[item]);
            }
          }
          if (node.getAttribute("name") === selectionName) {
            node.focus();
            node.setSelectionRange(selectionStart, selectionEnd);
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

function component(factory) {
  return function (mount, props) {
    _component(mount, factory, props);
  };
}
