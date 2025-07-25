/**
 * 弹出错误提示覆盖层
 */

const hmrConfigName = __hmrConfigName__;
const base$1 = __base$1__;

function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o$1) {
            return typeof o$1;
          }
        : function (o$1) {
            return o$1 &&
              "function" == typeof Symbol &&
              o$1.constructor === Symbol &&
              o$1 !== Symbol.prototype
              ? "symbol"
              : typeof o$1;
          }),
    _typeof(o)
  );
}

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

function _defineProperty(e, r, t) {
  return (
    (r = toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function h(e, attrs = {}, ...children) {
  const elem = document.createElement(e);
  for (const [k, v] of Object.entries(attrs)) elem.setAttribute(k, v);
  elem.append(...children);
  return elem;
}
const templateStyle = `
  :host {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    --monospace: 'SFMono-Regular', Consolas,
    'Liberation Mono', Menlo, Courier, monospace;
    --red: #ff5555;
    --yellow: #e2aa53;
    --purple: #cfa4ff;
    --cyan: #2dd9da;
    --dim: #c9c9c9;
  
    --window-background: #181818;
    --window-color: #d8d8d8;
  }
  
  .backdrop {
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    margin: 0;
    background: rgba(0, 0, 0, 0.66);
  }
  
  .window {
    font-family: var(--monospace);
    line-height: 1.5;
    max-width: 80vw;
    color: var(--window-color);
    box-sizing: border-box;
    margin: 30px auto;
    padding: 2.5vh 4vw;
    position: relative;
    background: var(--window-background);
    border-radius: 6px 6px 8px 8px;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    overflow: hidden;
    border-top: 8px solid var(--red);
    direction: ltr;
    text-align: left;
  }
  
  pre {
    font-family: var(--monospace);
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 1em;
    overflow-x: scroll;
    scrollbar-width: none;
  }
  
  pre::-webkit-scrollbar {
    display: none;
  }
  
  pre.frame::-webkit-scrollbar {
    display: block;
    height: 5px;
  }
  
  pre.frame::-webkit-scrollbar-thumb {
    background: #999;
    border-radius: 5px;
  }
  
  pre.frame {
    scrollbar-width: thin;
  }
  
  .message {
    line-height: 1.3;
    font-weight: 600;
    white-space: pre-wrap;
  }
  
  .message-body {
    color: var(--red);
  }
  
  .plugin {
    color: var(--purple);
  }
  
  .file {
    color: var(--cyan);
    margin-bottom: 0;
    white-space: pre-wrap;
    word-break: break-all;
  }
  
  .frame {
    color: var(--yellow);
  }
  
  .stack {
    font-size: 13px;
    color: var(--dim);
  }
  
  .tip {
    font-size: 13px;
    color: #999;
    border-top: 1px dotted #999;
    padding-top: 13px;
    line-height: 1.8;
  }
  
  code {
    font-size: 13px;
    font-family: var(--monospace);
    color: var(--yellow);
  }
  
  .file-link {
    text-decoration: underline;
    cursor: pointer;
  }
  
  kbd {
    line-height: 1.5;
    font-family: ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 0.75rem;
    font-weight: 700;
    background-color: rgb(38, 40, 44);
    color: rgb(166, 167, 171);
    padding: 0.15rem 0.3rem;
    border-radius: 0.25rem;
    border-width: 0.0625rem 0.0625rem 0.1875rem;
    border-style: solid;
    border-color: rgb(54, 57, 64);
    border-image: initial;
  }
  `;
const createTemplate = () =>
  h(
    "div",
    {
      class: "backdrop",
      part: "backdrop",
    },
    h(
      "div",
      {
        class: "window",
        part: "window",
      },
      h(
        "pre",
        {
          class: "message",
          part: "message",
        },
        h("span", {
          class: "plugin",
          part: "plugin",
        }),
        h("span", {
          class: "message-body",
          part: "message-body",
        })
      ),
      h("pre", {
        class: "file",
        part: "file",
      }),
      h("pre", {
        class: "frame",
        part: "frame",
      }),
      h("pre", {
        class: "stack",
        part: "stack",
      }),
      h(
        "div",
        {
          class: "tip",
          part: "tip",
        },
        "Click outside, press ",
        h("kbd", {}, "Esc"),
        " key, or fix the code to dismiss.",
        h("br"),
        "You can also disable this overlay by setting ",
        h("code", { part: "config-option-name" }, "server.hmr.overlay"),
        " to ",
        h("code", { part: "config-option-value" }, "false"),
        " in ",
        h("code", { part: "config-file-name" }, hmrConfigName),
        "."
      )
    ),
    h("style", {}, templateStyle)
  );
const fileRE = /(?:file:\/\/)?(?:[a-zA-Z]:\\|\/).*?:\d+:\d+/g;
const codeframeRE = /^(?:>?\s*\d+\s+\|.*|\s+\|\s*\^.*)\r?\n/gm;
const { HTMLElement = class {} } = globalThis;

var ErrorOverlay = class extends HTMLElement {
  constructor(err, links = true) {
    super();
    _defineProperty(this, "root", void 0);
    _defineProperty(this, "closeOnEsc", void 0);
    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(createTemplate());
    codeframeRE.lastIndex = 0;
    const hasFrame = err.frame && codeframeRE.test(err.frame);
    const message = hasFrame
      ? err.message.replace(codeframeRE, "")
      : err.message;
    if (err.plugin) this.text(".plugin", `[plugin:${err.plugin}] `);
    this.text(".message-body", message.trim());
    const [file] = (err.loc?.file || err.id || "unknown file").split(`?`);
    if (err.loc)
      this.text(".file", `${file}:${err.loc.line}:${err.loc.column}`, links);
    else if (err.id) this.text(".file", file);
    if (hasFrame) this.text(".frame", err.frame.trim());
    this.text(".stack", err.stack, links);
    this.root.querySelector(".window").addEventListener("click", (e) => {
      e.stopPropagation();
    });
    this.addEventListener("click", () => {
      this.close();
    });
    this.closeOnEsc = (e) => {
      if (e.key === "Escape" || e.code === "Escape") this.close();
    };
    document.addEventListener("keydown", this.closeOnEsc);
  }
  text(selector, text, linkFiles = false) {
    const el = this.root.querySelector(selector);
    if (!linkFiles) el.textContent = text;
    else {
      let curIndex = 0;
      let match;
      fileRE.lastIndex = 0;
      while ((match = fileRE.exec(text))) {
        const { 0: file, index } = match;
        const frag = text.slice(curIndex, index);
        el.appendChild(document.createTextNode(frag));
        const link = document.createElement("a");
        link.textContent = file;
        link.className = "file-link";
        // link.onclick = () => {
        //   fetch(
        //     new URL(
        //       `${base$1}__open-in-editor?file=${encodeURIComponent(file)}`,
        //       // import.meta.url
        //       file
        //     )
        //   );
        // };
        el.appendChild(link);
        curIndex += frag.length + file.length;
      }
      if (curIndex < text.length)
        el.appendChild(document.createTextNode(text.slice(curIndex)));
    }
  }
  close() {
    this.parentNode?.removeChild(this);
    document.removeEventListener("keydown", this.closeOnEsc);
  }
};

const overlayId = "vite-error-overlay";
const { customElements } = globalThis;
if (customElements && !customElements.get(overlayId))
  customElements.define(overlayId, ErrorOverlay);

function createErrorOverlay(err) {
  clearErrorOverlay();

  const { customElements } = globalThis;
  if (customElements) {
    const ErrorOverlayConstructor = customElements.get(overlayId);
    document.body.appendChild(new ErrorOverlayConstructor(err));
  }
}

function clearErrorOverlay() {
  document.querySelectorAll(overlayId).forEach((n) => n.close());
}
