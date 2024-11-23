(() => {
  var e = {
      5831: function (e, t, r) {
        var n = {
          "./": "6707",
          "./client": "2712",
          "./client.ts": "2712",
          "./document": "5974",
          "./document.ts": "5974",
          "./dom/attr": "8959",
          "./dom/attr.ts": "8959",
          "./dom/beacon": "2863",
          "./dom/beacon.ts": "2863",
          "./dom/cookie": "1197",
          "./dom/cookie.ts": "1197",
          "./dom/css": "7339",
          "./dom/css.ts": "7339",
          "./dom/document": "1938",
          "./dom/document.ts": "1938",
          "./dom/element": "2439",
          "./dom/element.ts": "2439",
          "./dom/fontface": "6643",
          "./dom/fontface.ts": "6643",
          "./dom/history": "461",
          "./dom/history.ts": "461",
          "./dom/intersectionobserver": "3951",
          "./dom/intersectionobserver.ts": "3951",
          "./dom/navigation": "2410",
          "./dom/navigation.ts": "2410",
          "./dom/open": "8805",
          "./dom/open.ts": "8805",
          "./dom/origin": "3261",
          "./dom/origin.ts": "3261",
          "./dom/performance": "4475",
          "./dom/performance.ts": "4475",
          "./dom/serviceworker": "5707",
          "./dom/serviceworker.ts": "5707",
          "./dom/storage": "9227",
          "./dom/storage.ts": "9227",
          "./events": "5008",
          "./events.ts": "5008",
          "./global": "2237",
          "./global.ts": "2237",
          "./helpers": "7932",
          "./helpers.ts": "7932",
          "./index": "6707",
          "./index.ts": "6707",
          "./location": "8971",
          "./location.ts": "8971",
          "./natives": "3498",
          "./natives.ts": "3498",
          "./shared/antiantidebugger": "8278",
          "./shared/antiantidebugger.ts": "8278",
          "./shared/blob": "9447",
          "./shared/blob.ts": "9447",
          "./shared/caches": "4169",
          "./shared/caches.ts": "4169",
          "./shared/err": "5146",
          "./shared/err.ts": "5146",
          "./shared/error": "7651",
          "./shared/error.ts": "7651",
          "./shared/eval": "4423",
          "./shared/eval.ts": "4423",
          "./shared/event": "8231",
          "./shared/event.ts": "8231",
          "./shared/function": "7636",
          "./shared/function.ts": "7636",
          "./shared/import": "7341",
          "./shared/import.ts": "7341",
          "./shared/indexeddb": "2930",
          "./shared/indexeddb.ts": "2930",
          "./shared/postmessage": "2625",
          "./shared/postmessage.ts": "2625",
          "./shared/realm": "6594",
          "./shared/realm.ts": "6594",
          "./shared/requests/eventsource": "2738",
          "./shared/requests/eventsource.ts": "2738",
          "./shared/requests/fetch": "106",
          "./shared/requests/fetch.ts": "106",
          "./shared/requests/websocket": "7219",
          "./shared/requests/websocket.ts": "7219",
          "./shared/requests/xmlhttprequest": "7481",
          "./shared/requests/xmlhttprequest.ts": "7481",
          "./shared/sourcemaps": "6321",
          "./shared/sourcemaps.ts": "6321",
          "./shared/trustedTypes": "1587",
          "./shared/trustedTypes.ts": "1587",
          "./shared/unproxy": "2370",
          "./shared/unproxy.ts": "2370",
          "./shared/worker": "8475",
          "./shared/worker.ts": "8475",
          "./shared/wrap": "7706",
          "./shared/wrap.ts": "7706",
          "./swruntime": "633",
          "./swruntime.ts": "633",
          "./worker/importScripts": "5425",
          "./worker/importScripts.ts": "5425",
        };
        function o(e) {
          return r(a(e));
        }
        function a(e) {
          if (!r.o(n, e)) {
            var t = Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return n[e];
        }
        (o.keys = function () {
          return Object.keys(n);
        }),
          (o.resolve = a),
          (e.exports = o),
          (o.id = "5831");
      },
      2712: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            ScramjetClient: function () {
              return g;
            },
          });
        var n = r(6707),
          o = r(9777),
          a = r(5974),
          s = r(2237),
          i = r(7932),
          l = r(8971),
          c = r(3498),
          u = r(4471),
          f = r(7706),
          p = r(5008);
        class g {
          global;
          documentProxy;
          globalProxy;
          locationProxy;
          serviceWorker;
          bare;
          descriptors;
          natives;
          wrapfn;
          cookieStore;
          eventcallbacks;
          meta;
          constructor(e) {
            if (
              ((this.global = e),
              (this.descriptors = {}),
              (this.natives = {}),
              (this.cookieStore = new u.hc()),
              (this.eventcallbacks = new Map()),
              o.a in e)
            )
              throw (
                (console.error(
                  "attempted to initialize a scramjet client, but one is already loaded - this is very bad",
                ),
                Error())
              );
            (this.serviceWorker = this.global.navigator.serviceWorker),
              n.iswindow &&
                ((this.documentProxy = (0, a.createDocumentProxy)(this, e)),
                (e.document[o.a] = this)),
              (this.locationProxy = (0, l.createLocationProxy)(this, e)),
              (this.globalProxy = (0, s.createGlobalProxy)(this, e)),
              (this.wrapfn = (0, f.createWrapFn)(this, e)),
              n.iswindow
                ? (this.bare = new u.dg())
                : (this.bare = new u.dg(
                    new Promise((e) => {
                      addEventListener("message", ({ data: t }) => {
                        "object" == typeof t &&
                          "$scramjet$type" in t &&
                          "baremuxinit" === t.$scramjet$type &&
                          e(t.port);
                      });
                    }),
                  ));
            let t = this;
            (this.meta = {
              get origin() {
                return t.url;
              },
              get base() {
                if (n.iswindow) {
                  let e = t.global.document.querySelector("base");
                  if (e) {
                    let r = e.getAttribute("href"),
                      n = r.indexOf("#");
                    if (!(r = r.substring(0, -1 === n ? void 0 : n)))
                      return t.url;
                    return new URL(r, t.url.origin);
                  }
                }
                return t.url;
              },
            }),
              (e[o.a] = this);
          }
          get frame() {
            if (!n.iswindow) return null;
            let e = this.descriptors["window.frameElement"]
              ? this.descriptors["window.frameElement"].get.call(this.global)
              : this.global.window.frameElement;
            if (!e) return null;
            let t = e[o.D];
            if (!t) {
              let e = this.global.window;
              for (; e.parent != e; ) {
                if (!e.frameElement) return null;
                if (e.frameElement && e.frameElement[o.D])
                  return e.frameElement[o.D];
                e = e.parent.window;
              }
            }
            return t;
          }
          loadcookies(e) {
            this.cookieStore.load(e);
          }
          hook() {
            let e = r(5831),
              t = [];
            for (let r of e.keys()) {
              let n = e(r);
              r.endsWith(".ts") &&
                ((r.startsWith("./dom/") && "window" in this.global) ||
                  (r.startsWith("./worker/") &&
                    "WorkerGlobalScope" in this.global) ||
                  r.startsWith("./shared/")) &&
                t.push(n);
            }
            for (let e of (t.sort((e, t) => {
              let r = e.order || 0;
              return r - (t.order || 0);
            }),
            t))
              !e.enabled || e.enabled(this)
                ? e.default(this, this.global)
                : e.disabled && e.disabled(this, this.global);
          }
          get url() {
            return new URL((0, u.Sd)(this.global.location.href));
          }
          set url(e) {
            e instanceof URL && (e = e.toString());
            let t = new p.NavigateEvent(e);
            this.frame && this.frame.dispatchEvent(t),
              !t.defaultPrevented &&
                (this.global.location.href = (0, u.dm)(t.url, this.meta));
          }
          Proxy(e, t) {
            if (Array.isArray(e)) {
              for (let r of e) this.Proxy(r, t);
              return;
            }
            let r = e.split("."),
              n = r.pop(),
              o = r.reduce((e, t) => e?.[t], this.global);
            if (!o) return;
            let a = Reflect.get(o, n);
            (this.natives[e] = a), this.RawProxy(o, n, t);
          }
          RawProxy(e, t, r) {
            if (!e || !t || !Reflect.has(e, t)) return;
            let n = Reflect.get(e, t);
            delete e[t];
            let o = {};
            r.construct &&
              (o.construct = function (e, t, n) {
                let o;
                let a = !1,
                  s = {
                    fn: e,
                    this: null,
                    args: t,
                    newTarget: n,
                    return: (e) => {
                      (a = !0), (o = e);
                    },
                    call: () => (
                      (a = !0),
                      (o = Reflect.construct(s.fn, s.args, s.newTarget))
                    ),
                  };
                return (r.construct(s), a)
                  ? o
                  : Reflect.construct(s.fn, s.args, s.newTarget);
              }),
              r.apply &&
                (o.apply = function (e, t, n) {
                  let o;
                  let a = !1,
                    s = {
                      fn: e,
                      this: t,
                      args: n,
                      newTarget: null,
                      return: (e) => {
                        (a = !0), (o = e);
                      },
                      call: () => (
                        (a = !0), (o = Reflect.apply(s.fn, s.this, s.args))
                      ),
                    },
                    i = Error.prepareStackTrace;
                  Error.prepareStackTrace = function (e, t) {
                    if (
                      t[0].getFileName() &&
                      !t[0]
                        .getFileName()
                        .startsWith(location.origin + u.vc.prefix)
                    )
                      return { stack: e.stack };
                  };
                  try {
                    r.apply(s);
                  } catch (e) {
                    if (e instanceof Error) {
                      if (e.stack instanceof Object)
                        (e.stack = e.stack.stack),
                          console.error("ERROR FROM SCRAMJET INTERNALS", e);
                      else throw e;
                    } else throw e;
                  }
                  return ((Error.prepareStackTrace = i), a)
                    ? o
                    : Reflect.apply(s.fn, s.this, s.args);
                }),
              (o.getOwnPropertyDescriptor = i.getOwnPropertyDescriptorHandler),
              (e[t] = new Proxy(n, o));
          }
          Trap(e, t) {
            if (Array.isArray(e)) {
              for (let r of e) this.Trap(r, t);
              return;
            }
            let r = e.split("."),
              n = r.pop(),
              o = r.reduce((e, t) => e?.[t], this.global);
            if (!o) return;
            let a = (0, c.nativeGetOwnPropertyDescriptor)(o, n);
            return (this.descriptors[e] = a), this.RawTrap(o, n, t);
          }
          RawTrap(e, t, r) {
            if (!e || !t || !Reflect.has(e, t)) return;
            let n = (0, c.nativeGetOwnPropertyDescriptor)(e, t),
              o = {
                this: null,
                get: function () {
                  return n && n.get.call(this.this);
                },
                set: function (e) {
                  n && n.set.call(this.this, e);
                },
              };
            delete e[t];
            let a = {};
            return (
              r.get
                ? (a.get = function () {
                    return (o.this = this), r.get(o);
                  })
                : n?.get && (a.get = n.get),
              r.set
                ? (a.set = function (e) {
                    (o.this = this), r.set(o, e);
                  })
                : n?.set && (a.set = n.set),
              r.enumerable
                ? (a.enumerable = r.enumerable)
                : n?.enumerable && (a.enumerable = n.enumerable),
              r.configurable
                ? (a.configurable = r.configurable)
                : n?.configurable && (a.configurable = n.configurable),
              Object.defineProperty(e, t, a),
              n
            );
          }
        }
      },
      5974: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            createDocumentProxy: function () {
              return a;
            },
          });
        var n = r(4471),
          o = r(7932);
        function a(e, t) {
          return new Proxy(t.document, {
            get: (t, r) =>
              "location" === r
                ? e.locationProxy
                : "defaultView" === r
                  ? e.globalProxy
                  : Reflect.get(t, r),
            set(t, r, o) {
              if ("location" === r) {
                location.href = (0, n.dm)(o, e.meta);
                return;
              }
              return Reflect.set(t, r, o);
            },
            getOwnPropertyDescriptor: o.getOwnPropertyDescriptorHandler,
          });
        }
      },
      8959: function (e, t, r) {
        "use strict";
        function n(e, t) {
          e.Trap("Element.prototype.attributes", {
            get(e) {
              let t = e.get(),
                r = new Proxy(t, {
                  get(e, n, o) {
                    let a = Reflect.get(e, n);
                    return "length" === n
                      ? Object.keys(r).length
                      : "getNamedItem" === n
                        ? (e) => r[e]
                        : "getNamedItemNS" === n
                          ? (e, t) => r[`${e}:${t}`]
                          : n in NamedNodeMap.prototype &&
                              "function" == typeof a
                            ? new Proxy(a, {
                                apply: (e, n, o) =>
                                  n === r
                                    ? Reflect.apply(e, t, o)
                                    : Reflect.apply(e, n, o),
                              })
                            : ("string" != typeof n && "number" != typeof n) ||
                                isNaN(Number(n))
                              ? this.has(e, n)
                                ? a
                                : void 0
                              : t[Object.keys(r)[n]];
                  },
                  ownKeys(e) {
                    return Reflect.ownKeys(e).filter((t) => this.has(e, t));
                  },
                  has: (e, r) =>
                    "symbol" == typeof r
                      ? Reflect.has(e, r)
                      : !(
                          r.startsWith("data-scramjet-") ||
                          t[r]?.name?.startsWith("data-scramjet-")
                        ) && Reflect.has(e, r),
                });
              return r;
            },
          }),
            e.Trap("Attr.prototype.value", {
              get: (e) => e.this.ownerElement.getAttribute(e.this.name),
              set: (e, t) => e.this.ownerElement.setAttribute(e.this.name, t),
            });
        }
        r.r(t),
          r.d(t, {
            default: function () {
              return n;
            },
          });
      },
      2863: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return o;
            },
          });
        var n = r(4471);
        function o(e, t) {
          e.Proxy("Navigator.prototype.sendBeacon", {
            apply(t) {
              t.args[0] = (0, n.dm)(t.args[0], e.meta);
            },
          });
        }
      },
      1197: function (e, t, r) {
        "use strict";
        function n(e, t) {
          e.serviceWorker.addEventListener("message", ({ data: t }) => {
            "scramjet$type" in t &&
              "cookie" === t.scramjet$type &&
              e.cookieStore.setCookies([t.cookie], new URL(t.url));
          }),
            e.Trap("Document.prototype.cookie", {
              get: () => e.cookieStore.getCookies(e.url, !0),
              set(t, r) {
                e.cookieStore.setCookies([r], e.url),
                  e.serviceWorker.controller &&
                    e.serviceWorker.controller.postMessage({
                      scramjet$type: "cookie",
                      cookie: r,
                      url: e.url.href,
                    });
              },
            }),
            delete t.cookieStore;
        }
        r.r(t),
          r.d(t, {
            default: function () {
              return n;
            },
          });
      },
      7339: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return o;
            },
          });
        var n = r(4471);
        function o(e) {
          e.Proxy("CSSStyleDeclaration.prototype.setProperty", {
            apply(t) {
              t.args[1] && (t.args[1] = (0, n.U5)(t.args[1], e.meta));
            },
          }),
            e.Proxy("CSSStyleDeclaration.prototype.getPropertyValue", {
              apply(e) {
                let t = e.call();
                if (!t) return t;
                e.return((0, n.Od)(t));
              },
            }),
            e.Trap("CSSStyleDeclaration.prototype.cssText", {
              set(t, r) {
                t.set((0, n.U5)(r, e.meta));
              },
              get: (e) => (0, n.Od)(e.get()),
            }),
            e.Trap("HTMLElement.prototype.style", {
              get(t) {
                let r = t.get();
                return new Proxy(r, {
                  get(e, t) {
                    let o = Reflect.get(e, t);
                    return "function" == typeof o
                      ? new Proxy(o, {
                          apply: (e, t, n) => Reflect.apply(e, r, n),
                        })
                      : t in CSSStyleDeclaration.prototype || !o
                        ? o
                        : (0, n.Od)(o);
                  },
                  set: (t, r, o) =>
                    "cssText" == r || "" == o || "string" != typeof o
                      ? Reflect.set(t, r, o)
                      : Reflect.set(t, r, (0, n.U5)(o, e.meta)),
                });
              },
              set(e, t) {
                e.set(t);
              },
            });
        }
      },
      1938: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return o;
            },
          });
        var n = r(4471);
        function o(e, t) {
          e.Proxy("Document.prototype.write", {
            apply(t) {
              if (t.args[0])
                try {
                  t.args[0] = (0, n.r4)(t.args[0], e.cookieStore, e.meta, !1);
                } catch {}
            },
          }),
            e.Proxy("Document.prototype.writeln", {
              apply(t) {
                if (t.args[0])
                  try {
                    t.args[0] = (0, n.r4)(t.args[0], e.cookieStore, e.meta, !1);
                  } catch {}
              },
            });
        }
      },
      2439: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return i;
            },
          });
        var n = r(9777),
          o = r(2712),
          a = r(3498),
          s = r(4471);
        function i(e, t) {
          t.Element.prototype.getAttribute;
          let r = t.Element.prototype.setAttribute;
          t.Element.prototype.hasAttribute;
          let i = {
              nonce: [t.HTMLElement],
              integrity: [t.HTMLScriptElement, t.HTMLLinkElement],
              csp: [t.HTMLIFrameElement],
              credentialless: [t.HTMLIFrameElement],
              src: [
                t.HTMLImageElement,
                t.HTMLMediaElement,
                t.HTMLIFrameElement,
                t.HTMLEmbedElement,
                t.HTMLScriptElement,
                t.HTMLSourceElement,
              ],
              href: [t.HTMLAnchorElement, t.HTMLLinkElement, t.SVGUseElement],
              data: [t.HTMLObjectElement],
              action: [t.HTMLFormElement],
              formaction: [t.HTMLButtonElement, t.HTMLInputElement],
              srcdoc: [t.HTMLIFrameElement],
              srcset: [t.HTMLImageElement, t.HTMLSourceElement],
              imagesrcset: [t.HTMLLinkElement],
            },
            l = [t.HTMLAnchorElement.prototype, t.HTMLAreaElement.prototype],
            c = [
              (0, a.nativeGetOwnPropertyDescriptor)(
                t.HTMLAnchorElement.prototype,
                "href",
              ),
              (0, a.nativeGetOwnPropertyDescriptor)(
                t.HTMLAreaElement.prototype,
                "href",
              ),
            ];
          for (let e of Object.keys(i))
            for (let t of i[e]) {
              let r = (0, a.nativeGetOwnPropertyDescriptor)(t.prototype, e);
              Object.defineProperty(t.prototype, e, {
                get() {
                  return [
                    "src",
                    "data",
                    "href",
                    "action",
                    "formaction",
                  ].includes(e)
                    ? (0, s.Sd)(r.get.call(this))
                    : r.get.call(this);
                },
                set(t) {
                  return this.setAttribute(e, t);
                },
              });
            }
          for (let t of [
            "protocol",
            "hash",
            "host",
            "hostname",
            "origin",
            "pathname",
            "port",
            "search",
          ])
            for (let r in l) {
              let n = l[r],
                o = c[r];
              e.RawTrap(n, t, {
                get(e) {
                  let r = o.get.call(e.this);
                  return r ? new URL((0, s.Sd)(r))[t] : r;
                },
              });
            }
          e.Trap("Node.prototype.baseURI", {
            get() {
              let r = t.document.querySelector("base");
              return r ? new URL(r.href, e.url.origin).href : e.url.origin;
            },
            set: () => !1,
          }),
            e.Proxy("Element.prototype.setAttribute", {
              apply(t) {
                let [r, n] = t.args,
                  o = s.Gq.find((e) => {
                    let n = e[r.toLowerCase()];
                    return (
                      !!n &&
                      ("*" === n ||
                        ("function" != typeof n &&
                          n.includes(t.this.tagName.toLowerCase())))
                    );
                  });
                o &&
                  ((t.args[1] = o.fn(n, e.meta, e.cookieStore)),
                  t.fn.call(t.this, `data-scramjet-${t.args[0]}`, n));
              },
            }),
            e.Proxy("Element.prototype.setAttributeNS", {
              apply(t) {
                let [n, o, a] = t.args,
                  i = s.Gq.find((e) => {
                    let r = e[o.toLowerCase()];
                    return (
                      !!r &&
                      ("*" === r ||
                        ("function" != typeof r &&
                          r.includes(t.this.tagName.toLowerCase())))
                    );
                  });
                i &&
                  ((t.args[2] = i.fn(a, e.meta, e.cookieStore)),
                  r.call(t.this, `data-scramjet-${t.args[1]}`, a));
              },
            }),
            e.Proxy("Element.prototype.getAttribute", {
              apply(e) {
                let [t] = e.args;
                e.fn.call(e.this, `data-scramjet-${t}`) &&
                  e.return(e.fn.call(e.this, `data-scramjet-${t}`));
              },
            }),
            e.Trap("Element.prototype.innerHTML", {
              set(r, n) {
                let o;
                if (r.this instanceof t.HTMLScriptElement)
                  o = (0, s.Zs)(n, "(anonymous script element)", e.meta);
                else if (r.this instanceof t.HTMLStyleElement)
                  o = (0, s.U5)(n, e.meta);
                else
                  try {
                    o = (0, s.r4)(n, e.cookieStore, e.meta);
                  } catch {
                    o = n;
                  }
                r.set(o);
              },
              get(r) {
                if (r.this instanceof t.HTMLScriptElement) {
                  let t = e.natives["Element.prototype.getAttribute"].call(
                    r.this,
                    "data-scramjet-script-source-src",
                  );
                  return t ? atob(t) : r.get();
                }
                return r.this instanceof t.HTMLStyleElement
                  ? r.get()
                  : (0, s.WT)(r.get());
              },
            }),
            e.Trap("Element.prototype.outerHTML", {
              set(t, r) {
                t.set((0, s.r4)(r, e.cookieStore, e.meta));
              },
              get: (e) => (0, s.WT)(e.get()),
            }),
            e.Proxy("Element.prototype.insertAdjacentHTML", {
              apply(t) {
                if (t.args[1])
                  try {
                    t.args[1] = (0, s.r4)(t.args[1], e.cookieStore, e.meta, !1);
                  } catch {}
              },
            }),
            e.Trap("HTMLIFrameElement.prototype.contentWindow", {
              get(e) {
                let t = e.get();
                if (!t) return t;
                if (n.a in t.self)
                  return t.location.href.includes("accounts.google.com")
                    ? null
                    : t.self[n.a].globalProxy;
                {
                  let e = new o.ScramjetClient(t.self);
                  return e.hook(), e.globalProxy;
                }
              },
            }),
            e.Trap("HTMLIFrameElement.prototype.contentDocument", {
              get(t) {
                let r = e.descriptors[
                  "HTMLIFrameElement.prototype.contentWindow"
                ].get.apply(t.this);
                if (!r) return r;
                if (n.a in r.self) return r.self[n.a].documentProxy;
                {
                  let e = new o.ScramjetClient(r.self);
                  return e.hook(), e.documentProxy;
                }
              },
            }),
            e.Trap("TreeWalker.prototype.currentNode", {
              get: (e) => e.get(),
              set: (r, n) =>
                n == e.documentProxy ? r.set(t.document) : r.set(n),
            }),
            e.Trap("Node.prototype.ownerDocument", {
              get(e) {
                let t = e.get();
                if (!t) return null;
                let r = t[n.a];
                return r ? r.documentProxy : t;
              },
            }),
            e.Trap(
              [
                "Node.prototype.parentNode",
                "Node.prototype.parentElement",
                "Node.prototype.previousSibling",
                "Node.prototype.nextSibling",
              ],
              {
                get(e) {
                  let t = e.get();
                  if (!(t instanceof Document)) return t;
                  let r = t[n.a];
                  return r ? r.documentProxy : t;
                },
              },
            ),
            e.Proxy("Node.prototype.getRootNode", {
              apply(e) {
                let t = e.call();
                if (!(t instanceof Document)) return e.return(t);
                let r = t[n.a];
                return r ? e.return(r.documentProxy) : e.return(t);
              },
            }),
            e.Proxy("DOMParser.prototype.parseFromString", {
              apply(t) {
                if ("text/html" === t.args[1])
                  try {
                    t.args[0] = (0, s.r4)(t.args[0], e.cookieStore, e.meta, !1);
                  } catch {}
              },
            });
        }
      },
      6643: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return o;
            },
          });
        var n = r(4471);
        function o(e, t) {
          e.Proxy("FontFace", {
            construct(t) {
              t.args[1] = (0, n.U5)(t.args[1], e.meta);
            },
          });
        }
      },
      461: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return a;
            },
          });
        var n = r(4471),
          o = r(5008);
        function a(e, t) {
          e.Proxy("History.prototype.pushState", {
            apply(t) {
              (t.args[2] || "" === t.args[2]) &&
                (t.args[2] = (0, n.dm)(t.args[2], e.meta)),
                t.call();
              let r = new o.UrlChangeEvent(e.url.href);
              e.frame && e.frame.dispatchEvent(r);
            },
          }),
            e.Proxy("History.prototype.replaceState", {
              apply(t) {
                (t.args[2] || "" === t.args[2]) &&
                  (t.args[2] = (0, n.dm)(t.args[2], e.meta)),
                  t.call();
                let r = new o.UrlChangeEvent(e.url.href);
                e.frame && e.frame.dispatchEvent(r);
              },
            });
        }
      },
      3951: function (e, t, r) {
        "use strict";
        function n(e) {
          e.Proxy("IntersectionObserver", {
            construct(e) {
              e.args[1] && e.args[1].root && (e.args[1].root = document),
                e.call();
            },
          });
        }
        r.r(t),
          r.d(t, {
            default: function () {
              return n;
            },
          });
      },
      2410: function (e, t, r) {
        "use strict";
        function n(e, t) {
          delete t.navigation;
        }
        r.r(t),
          r.d(t, {
            default: function () {
              return n;
            },
          });
      },
      8805: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return s;
            },
          });
        var n = r(4471),
          o = r(2712),
          a = r(9777);
        function s(e) {
          e.Proxy("window.open", {
            apply(t) {
              t.args[0] && (t.args[0] = (0, n.dm)(t.args[0], e.meta)),
                ["_parent", "_top", "_unfencedTop"].includes(t.args[1]) &&
                  (t.args[1] = "_self");
              let r = t.call();
              if (!r) return t.return(r);
              if (a.a in r.self)
                return t.return(r.self[a.a].globalProxy.window);
              {
                let e = new o.ScramjetClient(r.self);
                return e.hook(), t.return(e.globalProxy);
              }
            },
          }),
            e.Trap("opener", {
              get(e) {
                let t = e.get();
                return t && a.a in t.self ? t.self[a.a].globalProxy : void 0;
              },
            }),
            e.Trap("window.frameElement", {
              get(e) {
                let t = e.get();
                return t ? (t.ownerDocument.defaultView[a.a] ? t : null) : t;
              },
            });
        }
      },
      3261: function (e, t, r) {
        "use strict";
        function n(e, t) {
          e.Trap("origin", { get: () => e.url.origin, set: () => !1 }),
            e.Trap("Document.prototype.URL", {
              get: () => e.url.href,
              set: () => !1,
            }),
            e.Trap("Document.prototype.documentURI", {
              get: () => e.url.href,
              set: () => !1,
            }),
            e.Trap("Document.prototype.domain", {
              get: () => e.url.hostname,
              set: () => !1,
            });
        }
        r.r(t),
          r.d(t, {
            default: function () {
              return n;
            },
          });
      },
      4475: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return o;
            },
          });
        var n = r(4471);
        function o(e, t) {
          e.Trap("PerformanceEntry.prototype.name", {
            get: (e) => (0, n.Sd)(e.get()),
          });
        }
      },
      5707: function (e, t, r) {
        "use strict";
        let n;
        r.r(t),
          r.d(t, {
            default: function () {
              return u;
            },
            disabled: function () {
              return c;
            },
            enabled: function () {
              return l;
            },
            order: function () {
              return i;
            },
          });
        var o = r(4471),
          a = r(7932),
          s = r(8810);
        let i = 2,
          l = (e) => (0, s.Sp)("serviceworkers", e.url);
        function c(e, t) {
          Reflect.deleteProperty(Navigator.prototype, "serviceWorker");
        }
        function u(e, t) {
          let r;
          e.Proxy("EventTarget.prototype.addEventListener", {
            apply(e) {
              r === e.this && e.return(void 0);
            },
          }),
            e.Proxy("EventTarget.prototype.removeEventListener", {
              apply(e) {
                r === e.this && e.return(void 0);
              },
            }),
            e.Proxy("navigator.serviceWorker.getRegistration", {
              apply(e) {
                e.return(new Promise((e) => e(r)));
              },
            }),
            e.Proxy("navigator.serviceWorker.getRegistrations", {
              apply(e) {
                e.return(new Promise((e) => e([r])));
              },
            }),
            e.Trap("navigator.serviceWorker.ready", {
              get: (e) => (console.log(r), new Promise((e) => e(r))),
            }),
            e.Proxy("navigator.serviceWorker.register", {
              apply(t) {
                t.args[0] instanceof URL && (t.args[0] = t.args[0].href);
                let s = (0, o.dm)(t.args[0], e.meta) + "?dest=serviceworker";
                t.args[1] &&
                  "module" === t.args[1].type &&
                  (s += "&type=module");
                let i = new e.natives.SharedWorker(s).port;
                n.call(
                  e.serviceWorker.controller,
                  {
                    scramjet$type: "registerServiceWorker",
                    port: i,
                    origin: e.url.origin,
                  },
                  [i],
                );
                let l = new Proxy(
                  { __proto__: ServiceWorkerRegistration.prototype },
                  {
                    get: (e, r) =>
                      "installing" === r || "waiting" === r
                        ? null
                        : "active" === r
                          ? i
                          : "scope" === r
                            ? t.args[0]
                            : "unregister" === r || "addEventListener" === r
                              ? () => {}
                              : Reflect.get(e, r),
                    getOwnPropertyDescriptor: a.getOwnPropertyDescriptorHandler,
                  },
                );
                (r = l), t.return(new Promise((e) => e(l)));
              },
            });
        }
        self.ServiceWorker && (n = ServiceWorker.prototype.postMessage);
      },
      9227: function (e, t, r) {
        "use strict";
        function n(e, t) {
          let r = {
              get(t, r) {
                switch (r) {
                  case "getItem":
                    return (r) => t.getItem(e.url.host + "@" + r);
                  case "setItem":
                    return (r, n) => t.setItem(e.url.host + "@" + r, n);
                  case "removeItem":
                    return (r) => t.removeItem(e.url.host + "@" + r);
                  case "clear":
                    return () => {
                      for (let r in Object.keys(t))
                        r.startsWith(e.url.host) && t.removeItem(r);
                    };
                  case "key":
                    return (r) => {
                      let n = Object.keys(t).filter((t) =>
                        t.startsWith(e.url.host),
                      );
                      return t.getItem(n[r]);
                    };
                  case "length":
                    return Object.keys(t).filter((t) =>
                      t.startsWith(e.url.host),
                    ).length;
                  default:
                    if (r in Object.prototype || "symbol" == typeof r)
                      return Reflect.get(t, r);
                    return (
                      console.log("GET", r, t == n),
                      t.getItem(e.url.host + "@" + r)
                    );
                }
              },
              set: (t, r, o) => (
                t == n && console.log("SET", r, o, t === n),
                t.setItem(e.url.host + "@" + r, o),
                !0
              ),
              ownKeys: (t) =>
                Reflect.ownKeys(t)
                  .filter(
                    (t) => "string" == typeof t && t.startsWith(e.url.host),
                  )
                  .map((t) =>
                    "string" == typeof t
                      ? t.substring(e.url.host.length + 1)
                      : t,
                  ),
              getOwnPropertyDescriptor: (t, r) => ({
                value: t.getItem(e.url.host + "@" + r),
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              defineProperty: (t, r, n) => (
                t.setItem(e.url.host + "@" + r, n.value), !0
              ),
            },
            n = t.localStorage;
          t.sessionStorage;
          let o = new Proxy(t.localStorage, r),
            a = new Proxy(t.sessionStorage, r);
          delete t.localStorage,
            delete t.sessionStorage,
            (t.localStorage = o),
            (t.sessionStorage = a);
        }
        r.r(t),
          r.d(t, {
            default: function () {
              return n;
            },
          });
      },
      5008: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            NavigateEvent: function () {
              return n;
            },
            ScramjetContextInit: function () {
              return a;
            },
            UrlChangeEvent: function () {
              return o;
            },
          });
        class n extends Event {
          url;
          constructor(e) {
            super("navigate"), (this.url = e);
          }
        }
        class o extends Event {
          url;
          constructor(e) {
            super("urlchange"), (this.url = e);
          }
        }
        class a extends Event {
          window;
          constructor(e) {
            super("contextInit"), (this.window = e);
          }
        }
      },
      2237: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            UNSAFE_GLOBALS: function () {
              return i;
            },
            createGlobalProxy: function () {
              return l;
            },
          });
        var n = r(6707),
          o = r(9777),
          a = r(2712),
          s = r(7932);
        let i = [
          "window",
          "self",
          "globalThis",
          "this",
          "parent",
          "top",
          "location",
          "document",
          "eval",
          "frames",
        ];
        function l(e, t) {
          return new Proxy(t, {
            get(t, r) {
              let s = Reflect.get(t, r);
              if (
                n.iswindow &&
                ("string" == typeof r || "number" == typeof r) &&
                !isNaN(Number(r)) &&
                s
              ) {
                let e = s.self;
                if (e) {
                  if (o.a in e) return e[o.a].globalProxy;
                  {
                    let t = new a.ScramjetClient(e);
                    return t.hook(), t.globalProxy;
                  }
                }
              }
              if ("$scramjet" !== r)
                return "string" == typeof r && i.includes(r) ? e.wrapfn(s) : s;
            },
            set(t, r, n) {
              if ("location" === r) {
                e.url = n;
                return;
              }
              return Reflect.set(t, r, n);
            },
            has: (e, t) => "$scramjet" !== t && Reflect.has(e, t),
            ownKeys: (e) => Reflect.ownKeys(e).filter((e) => "$scramjet" !== e),
            defineProperty: (e, t, r) => (
              !r.get && !r.set && (r.writable = !0),
              (r.configurable = !0),
              Reflect.defineProperty(e, t, r)
            ),
            getOwnPropertyDescriptor: s.getOwnPropertyDescriptorHandler,
          });
        }
      },
      7932: function (e, t, r) {
        "use strict";
        function n(e, t) {
          return Reflect.getOwnPropertyDescriptor(e, t);
        }
        r.r(t),
          r.d(t, {
            getOwnPropertyDescriptorHandler: function () {
              return n;
            },
          });
      },
      6707: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            isdedicated: function () {
              return p;
            },
            isemulatedsw: function () {
              return d;
            },
            isshared: function () {
              return g;
            },
            issw: function () {
              return f;
            },
            iswindow: function () {
              return c;
            },
            isworker: function () {
              return u;
            },
          });
        var n = r(8810),
          o = r(9777),
          a = r(2712),
          s = r(5008),
          i = r(633),
          l = r(1762).Z;
        let c = "window" in self,
          u = "WorkerGlobalScope" in self,
          f = "ServiceWorkerGlobalScope" in self,
          p = "DedicatedWorkerGlobalScope" in self,
          g = "SharedWorkerGlobalScope" in self,
          d =
            "serviceworker" ===
            new URL(self.location.href).searchParams.get("dest");
        if ((l.log("scrammin"), !(o.a in self))) {
          (0, n.t8)();
          let e = new a.ScramjetClient(self);
          self.COOKIE && e.loadcookies(self.COOKIE),
            e.hook(),
            d && new i.ScramjetServiceWorkerRuntime(e).hook();
          let t = new s.ScramjetContextInit(e.global.window);
          e.frame?.dispatchEvent(t);
        }
        "document" in self &&
          document?.currentScript &&
          document.currentScript.remove();
      },
      8971: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            createLocationProxy: function () {
              return i;
            },
          });
        var n = r(3498),
          o = r(4471),
          a = r(5008),
          s = r(6707);
        function i(e, t) {
          let r = s.iswindow ? t.Location : t.WorkerLocation,
            i = {};
          Object.setPrototypeOf(i, r.prototype), (i.constructor = r);
          let l = s.iswindow ? t.location : r.prototype;
          for (let r of [
            "protocol",
            "hash",
            "host",
            "hostname",
            "href",
            "origin",
            "pathname",
            "port",
            "search",
          ]) {
            let o = (0, n.nativeGetOwnPropertyDescriptor)(l, r);
            if (!o) continue;
            let s = { configurable: !0, enumerable: !0 };
            o.get && (s.get = new Proxy(o.get, { apply: () => e.url[r] })),
              o.set &&
                (s.set = new Proxy(o.set, {
                  apply(n, o, s) {
                    if ("href" === r) {
                      e.url = s[0];
                      return;
                    }
                    if ("hash" === r) {
                      t.location.hash = s[0];
                      let r = new a.UrlChangeEvent(e.url.href);
                      e.frame && e.frame.dispatchEvent(r);
                      return;
                    }
                    let i = new URL(e.url.href);
                    (i[r] = s[0]), (e.url = i);
                  },
                })),
              Object.defineProperty(i, r, s);
          }
          return (
            (i.toString = new Proxy(t.location.toString, {
              apply: () => e.url.href,
            })),
            t.location.valueOf &&
              (i.valueOf = new Proxy(t.location.valueOf, {
                apply: () => e.url.href,
              })),
            t.location.assign &&
              (i.assign = new Proxy(t.location.assign, {
                apply(r, n, a) {
                  (a[0] = (0, o.dm)(a[0], e.meta)),
                    Reflect.apply(r, t.location, a);
                },
              })),
            t.location.reload &&
              (i.reload = new Proxy(t.location.reload, {
                apply(e, r, n) {
                  Reflect.apply(e, t.location, n);
                },
              })),
            t.location.replace &&
              (i.replace = new Proxy(t.location.replace, {
                apply(r, n, a) {
                  (a[0] = (0, o.dm)(a[0], e.meta)),
                    Reflect.apply(r, t.location, a);
                },
              })),
            i
          );
        }
      },
      3498: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            nativeFunction: function () {
              return n;
            },
            nativeGetOwnPropertyDescriptor: function () {
              return o;
            },
          });
        let n = self.Function,
          o = self.Object.getOwnPropertyDescriptor;
      },
      8278: function (e, t, r) {
        "use strict";
        function n(e) {
          e.Proxy("console.clear", {
            apply(e) {
              e.return(void 0);
            },
          });
          let t = console.log;
          e.Trap("console.log", { set(e, t) {}, get: (e) => t });
        }
        r.r(t),
          r.d(t, {
            default: function () {
              return n;
            },
          });
      },
      9447: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return o;
            },
          });
        var n = r(4471);
        function o(e) {
          e.Proxy("URL.createObjectURL", {
            apply(t) {
              let r = t.call();
              r.startsWith("blob:")
                ? t.return((0, n.ls)(r, e.meta))
                : t.return(r);
            },
          }),
            e.Proxy("URL.revokeObjectURL", {
              apply(e) {
                e.args[0] = (0, n.Ag)(e.args[0]);
              },
            });
        }
      },
      4169: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return o;
            },
          });
        var n = r(4471);
        function o(e, t) {
          e.Proxy("CacheStorage.prototype.open", {
            apply(t) {
              t.args[0] = `${e.url.origin}@${t.args[0]}`;
            },
          }),
            e.Proxy("CacheStorage.prototype.has", {
              apply(t) {
                t.args[0] = `${e.url.origin}@${t.args[0]}`;
              },
            }),
            e.Proxy("CacheStorage.prototype.match", {
              apply(t) {
                ("string" == typeof t.args[0] || t.args[0] instanceof URL) &&
                  (t.args[0] = (0, n.dm)(t.args[0].toString(), e.meta));
              },
            }),
            e.Proxy("CacheStorage.prototype.delete", {
              apply(t) {
                t.args[0] = `${e.url.origin}@${t.args[0]}`;
              },
            }),
            e.Proxy("Cache.prototype.add", {
              apply(t) {
                ("string" == typeof t.args[0] || t.args[0] instanceof URL) &&
                  (t.args[0] = (0, n.dm)(t.args[0].toString(), e.meta));
              },
            }),
            e.Proxy("Cache.prototype.addAll", {
              apply(t) {
                for (let r = 0; r < t.args[0].length; r++)
                  ("string" == typeof t.args[0][r] ||
                    t.args[0][r] instanceof URL) &&
                    (t.args[0][r] = (0, n.dm)(t.args[0][r].toString(), e.meta));
              },
            }),
            e.Proxy("Cache.prototype.put", {
              apply(t) {
                ("string" == typeof t.args[0] || t.args[0] instanceof URL) &&
                  (t.args[0] = (0, n.dm)(t.args[0].toString(), e.meta));
              },
            }),
            e.Proxy("Cache.prototype.match", {
              apply(t) {
                ("string" == typeof t.args[0] || t.args[0] instanceof URL) &&
                  (t.args[0] = (0, n.dm)(t.args[0].toString(), e.meta));
              },
            }),
            e.Proxy("Cache.prototype.matchAll", {
              apply(t) {
                ((t.args[0] && "string" == typeof t.args[0]) ||
                  (t.args[0] && t.args[0] instanceof URL)) &&
                  (t.args[0] = (0, n.dm)(t.args[0].toString(), e.meta));
              },
            }),
            e.Proxy("Cache.prototype.keys", {
              apply(t) {
                ((t.args[0] && "string" == typeof t.args[0]) ||
                  (t.args[0] && t.args[0] instanceof URL)) &&
                  (t.args[0] = (0, n.dm)(t.args[0].toString(), e.meta));
              },
            }),
            e.Proxy("Cache.prototype.delete", {
              apply(t) {
                ("string" == typeof t.args[0] || t.args[0] instanceof URL) &&
                  (t.args[0] = (0, n.dm)(t.args[0].toString(), e.meta));
              },
            });
        }
      },
      5146: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            argdbg: function () {
              return a;
            },
            default: function () {
              return s;
            },
            enabled: function () {
              return o;
            },
          });
        var n = r(8810);
        let o = (e) => (0, n.Sp)("captureErrors", e.url);
        function a(e, t = []) {
          switch (typeof e) {
            case "string":
              e.includes("localhost:1337/scramjet/") && e.includes("m3u8");
              break;
            case "object":
              if (
                e &&
                e[Symbol.iterator] &&
                "function" == typeof e[Symbol.iterator]
              )
                for (let r in e) {
                  let n = Object.getOwnPropertyDescriptor(e, r);
                  if (n && n.get) continue;
                  let o = e[r];
                  !t.includes(o) && (t.push(o), a(o, t));
                }
          }
        }
        function s(e, t) {
          (t.$scramerr = function (e) {
            console.warn("CAUGHT ERROR", e);
          }),
            (t.$scramdbg = function (e, t) {
              return e && "object" == typeof e && e.length > 0 && a(e), a(t), t;
            }),
            e.Proxy("Promise.prototype.catch", {
              apply(e) {
                e.args[0] &&
                  (e.args[0] = new Proxy(e.args[0], {
                    apply(e, t, r) {
                      Reflect.apply(e, t, r);
                    },
                  }));
              },
            });
        }
      },
      7651: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return s;
            },
            enabled: function () {
              return a;
            },
          });
        var n = r(8810),
          o = r(4471);
        let a = (e) => (0, n.Sp)("cleanerrors", e.url);
        function s(e, t) {
          let r = (e, t) => {
            let r = e.stack;
            for (let e = 0; e < t.length; e++) {
              let n = t[e].getFileName();
              if (n.endsWith(o.vc.files.client)) {
                let e = r.split("\n"),
                  t = e.find((e) => e.includes(n));
                e.splice(t, 1), (r = e.join("\n"));
                continue;
              }
              try {
                r = r.replaceAll(n, (0, o.Sd)(n));
              } catch {}
            }
            return r;
          };
          e.Trap("Error.prepareStackTrace", { get: (e) => r, set(e) {} });
        }
      },
      4423: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return o;
            },
            indirectEval: function () {
              return a;
            },
          });
        var n = r(4471);
        function o(e, t) {
          Object.defineProperty(t, n.vc.globals.rewritefn, {
            value: function (t) {
              return "string" != typeof t ? t : (0, n.Zs)(t, null, e.meta);
            },
            writable: !1,
            configurable: !1,
          });
        }
        function a(e) {
          return "string" != typeof e
            ? e
            : (0, this.global.eval)((0, n.Zs)(e, null, this.meta));
        }
      },
      8231: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return c;
            },
          });
        var n = r(6707),
          o = r(9777),
          a = r(7932),
          s = r(3498),
          i = r(2370);
        let l = Symbol.for("scramjet original onevent function");
        function c(e, t) {
          let r = {
            message: {
              _init() {
                return (
                  ("object" != typeof this.data ||
                    !("$scramjet$type" in this.data)) &&
                  !0
                );
              },
              ports() {
                return this.ports;
              },
              source() {
                if (null === this.source) return null;
                let e = this.source[o.a];
                return e ? e.globalProxy : this.source;
              },
              origin() {
                return "object" == typeof this.data &&
                  "$scramjet$origin" in this.data
                  ? this.data.$scramjet$origin
                  : e.url.origin;
              },
              data() {
                return "object" == typeof this.data &&
                  "$scramjet$data" in this.data
                  ? this.data.$scramjet$data
                  : this.data;
              },
            },
          };
          function c(e) {
            return new Proxy(e, {
              apply(e, n, o) {
                let s = o[0];
                if (s.isTrusted) {
                  let t = s.type;
                  if (t in r) {
                    let n = r[t];
                    if (n._init && !1 === n._init.call(s)) return;
                    o[0] = new Proxy(s, {
                      get: (t, r, o) =>
                        r in n ? n[r].call(t) : Reflect.get(e, r, o),
                      getOwnPropertyDescriptor:
                        a.getOwnPropertyDescriptorHandler,
                    });
                  }
                }
                return (
                  !t.event &&
                    Object.defineProperty(t, "event", {
                      get: () => o[0],
                      configurable: !0,
                    }),
                  Reflect.apply(e, n, o)
                );
              },
              getOwnPropertyDescriptor: a.getOwnPropertyDescriptorHandler,
            });
          }
          e.Proxy("EventTarget.prototype.addEventListener", {
            apply(t) {
              if (((0, i.unproxy)(t, e), "function" != typeof t.args[1]))
                return;
              let r = t.args[1],
                n = c(r);
              t.args[1] = n;
              let o = e.eventcallbacks.get(t.this);
              (o ||= []).push({
                event: t.args[0],
                originalCallback: r,
                proxiedCallback: n,
              }),
                e.eventcallbacks.set(t.this, o);
            },
          }),
            e.Proxy("EventTarget.prototype.removeEventListener", {
              apply(t) {
                if (((0, i.unproxy)(t, e), "function" != typeof t.args[1]))
                  return;
                let r = e.eventcallbacks.get(t.this);
                if (!r) return;
                let n = r.findIndex(
                  (e) =>
                    e.event === t.args[0] && e.originalCallback === t.args[1],
                );
                if (-1 === n) return;
                let o = r.splice(n, 1);
                e.eventcallbacks.set(t.this, r),
                  (t.args[1] = o[0].proxiedCallback);
              },
            }),
            e.Proxy("EventTarget.prototype.dispatchEvent", {
              apply(t) {
                (0, i.unproxy)(t, e);
              },
            });
          let u = [t.self, t.MessagePort.prototype];
          for (let o of (n.iswindow && u.push(t.HTMLElement.prototype),
          t.Worker && u.push(t.Worker.prototype),
          u))
            for (let t of Reflect.ownKeys(o))
              if ("string" == typeof t && t.startsWith("on") && r[t.slice(2)]) {
                let r = (0, s.nativeGetOwnPropertyDescriptor)(o, t);
                if (!r.get || !r.set || !r.configurable) continue;
                e.RawTrap(o, t, {
                  get(e) {
                    return this[l] ? this[l] : e.get();
                  },
                  set(e, t) {
                    if (((this[l] = t), "function" != typeof t))
                      return e.set(t);
                    e.set(c(t));
                  },
                });
              }
        }
      },
      7636: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return a;
            },
          });
        var n = r(4471);
        function o(e, t) {
          let r = e.call().toString(),
            o = (0, n.Zs)(`return ${r}`, null, t.meta);
          e.return(e.fn(o)());
        }
        function a(e, t) {
          let r = {
            apply(t) {
              o(t, e);
            },
            construct(t) {
              o(t, e);
            },
          };
          e.Proxy("Function", r),
            e.RawProxy(function () {}.constructor.prototype, "constructor", r),
            e.RawProxy(
              async function () {}.constructor.prototype,
              "constructor",
              r,
            ),
            e.RawProxy(function* () {}.constructor.prototype, "constructor", r),
            e.RawProxy(
              async function* () {}.constructor.prototype,
              "constructor",
              r,
            );
        }
      },
      7341: function (e, t, r) {
        "use strict";
        let n;
        r.r(t), r.d(t, { default: () => S });
        var o = r("4471"),
          a = r("8810");
        let s =
          "undefined" != typeof TextDecoder
            ? new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })
            : {
                decode: () => {
                  throw Error("TextDecoder not available");
                },
              };
        "undefined" != typeof TextDecoder && s.decode();
        let i = null;
        function l() {
          return (
            (null === i || i.buffer !== n.memory.buffer) &&
              (i = new Uint8Array(n.memory.buffer)),
            i
          );
        }
        function c(e, t) {
          return (e >>>= 0), s.decode(l().slice(e, e + t));
        }
        let u = 0,
          f =
            "undefined" != typeof TextEncoder
              ? new TextEncoder("utf-8")
              : {
                  encode: () => {
                    throw Error("TextEncoder not available");
                  },
                },
          p = function (e, t) {
            let r = f.encode(e);
            return t.set(r), { read: e.length, written: r.length };
          };
        function g(e, t, r) {
          if (void 0 === r) {
            let r = f.encode(e),
              n = t(r.length, 1) >>> 0;
            return (
              l()
                .subarray(n, n + r.length)
                .set(r),
              (u = r.length),
              n
            );
          }
          let n = e.length,
            o = t(n, 1) >>> 0,
            a = l(),
            s = 0;
          for (; s < n; s++) {
            let t = e.charCodeAt(s);
            if (t > 127) break;
            a[o + s] = t;
          }
          if (s !== n) {
            0 !== s && (e = e.slice(s)),
              (o = r(o, n, (n = s + 3 * e.length), 1) >>> 0);
            let t = p(e, l().subarray(o + s, o + n));
            (s += t.written), (o = r(o, n, s, 1) >>> 0);
          }
          return (u = s), o;
        }
        let d = null;
        function y() {
          return (
            (null === d || d.buffer !== n.memory.buffer) &&
              (d = new DataView(n.memory.buffer)),
            d
          );
        }
        function m(e) {
          let t = n.__wbindgen_export_4.get(e);
          return n.__externref_table_dealloc(e), t;
        }
        function h(e, t) {
          try {
            return e.apply(this, t);
          } catch (t) {
            let e = (function (e) {
              let t = n.__externref_table_alloc();
              return n.__wbindgen_export_4.set(t, e), t;
            })(t);
            n.__wbindgen_exn_store(e);
          }
        }
        async function b(e, t) {
          if ("function" == typeof Response && e instanceof Response) {
            if ("function" == typeof WebAssembly.instantiateStreaming)
              try {
                return await WebAssembly.instantiateStreaming(e, t);
              } catch (t) {
                if ("application/wasm" != e.headers.get("Content-Type"))
                  console.warn(
                    "`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
                    t,
                  );
                else throw t;
              }
            let r = await e.arrayBuffer();
            return await WebAssembly.instantiate(r, t);
          }
          {
            let r = await WebAssembly.instantiate(e, t);
            return r instanceof WebAssembly.Instance
              ? { instance: r, module: e }
              : r;
          }
        }
        function w() {
          let e = {};
          return (
            (e.wbg = {}),
            (e.wbg.__wbindgen_error_new = function (e, t) {
              return Error(c(e, t));
            }),
            (e.wbg.__wbindgen_string_new = function (e, t) {
              return c(e, t);
            }),
            (e.wbg.__wbg_call_3bfa248576352471 = function () {
              return h(function (e, t, r) {
                return e.call(t, r);
              }, arguments);
            }),
            (e.wbg.__wbindgen_string_get = function (e, t) {
              let r = "string" == typeof t ? t : void 0;
              var o,
                a =
                  null == (o = r)
                    ? 0
                    : g(r, n.__wbindgen_malloc, n.__wbindgen_realloc),
                s = u;
              y().setInt32(e + 4, s, !0), y().setInt32(e + 0, a, !0);
            }),
            (e.wbg.__wbg_get_ef828680c64da212 = function () {
              return h(function (e, t) {
                return Reflect.get(e, t);
              }, arguments);
            }),
            (e.wbg.__wbg_toString_4b677455b9167e31 = function (e) {
              return e.toString();
            }),
            (e.wbg.__wbg_set_e864d25d9b399c9f = function () {
              return h(function (e, t, r) {
                return Reflect.set(e, t, r);
              }, arguments);
            }),
            (e.wbg.__wbindgen_is_function = function (e) {
              return "function" == typeof e;
            }),
            (e.wbg.__wbg_new_1cabf49927794f50 = function () {
              return h(function (e, t) {
                return new URL(c(e, t));
              }, arguments);
            }),
            (e.wbg.__wbg_call_5fb7c8066a4a4825 = function () {
              return h(function (e, t, r, n) {
                return e.call(t, r, n);
              }, arguments);
            }),
            (e.wbg.__wbindgen_boolean_get = function (e) {
              return "boolean" == typeof e ? (e ? 1 : 0) : 2;
            }),
            (e.wbg.__wbg_new_e69b5f66fda8f13c = function () {
              return {};
            }),
            (e.wbg.__wbindgen_uint8_array_new = function (e, t) {
              var r,
                o,
                a = ((r = e),
                (o = t),
                (r >>>= 0),
                l().subarray(r / 1, r / 1 + o)).slice();
              return n.__wbindgen_free(e, 1 * t, 1), a;
            }),
            (e.wbg.__wbg_new_034f913e7636e987 = function () {
              return [];
            }),
            (e.wbg.__wbindgen_number_new = function (e) {
              return e;
            }),
            (e.wbg.__wbg_scramtag_51d94caa8a743d31 = function (e) {
              let t = g(
                  "10000000000".replace(/[018]/g, (e) =>
                    (
                      e ^
                      (crypto.getRandomValues(new Uint8Array(1))[0] &
                        (15 >> (e / 4)))
                    ).toString(16),
                  ),
                  n.__wbindgen_malloc,
                  n.__wbindgen_realloc,
                ),
                r = u;
              y().setInt32(e + 4, r, !0), y().setInt32(e + 0, t, !0);
            }),
            (e.wbg.__wbg_now_d3cbc9581625f686 = function (e) {
              return e.now();
            }),
            (e.wbg.__wbg_self_bf91bf94d9e04084 = function () {
              return h(function () {
                return self.self;
              }, arguments);
            }),
            (e.wbg.__wbg_window_52dd9f07d03fd5f8 = function () {
              return h(function () {
                return window.window;
              }, arguments);
            }),
            (e.wbg.__wbg_globalThis_05c129bf37fcf1be = function () {
              return h(function () {
                return globalThis.globalThis;
              }, arguments);
            }),
            (e.wbg.__wbg_global_3eca19bb09e9c484 = function () {
              return h(function () {
                return global.global;
              }, arguments);
            }),
            (e.wbg.__wbindgen_is_undefined = function (e) {
              return void 0 === e;
            }),
            (e.wbg.__wbg_newnoargs_1ede4bf2ebbaaf43 = function (e, t) {
              return Function(c(e, t));
            }),
            (e.wbg.__wbg_call_a9ef466721e824f2 = function () {
              return h(function (e, t) {
                return e.call(t);
              }, arguments);
            }),
            (e.wbg.__wbindgen_throw = function (e, t) {
              throw Error(c(e, t));
            }),
            (e.wbg.__wbindgen_init_externref_table = function () {
              let e = n.__wbindgen_export_4,
                t = e.grow(4);
              e.set(0, void 0),
                e.set(t + 0, void 0),
                e.set(t + 1, null),
                e.set(t + 2, !0),
                e.set(t + 3, !1);
            }),
            e
          );
        }
        function v(e, t) {
          e.wbg.memory =
            t ||
            new WebAssembly.Memory({ initial: 21, maximum: 16384, shared: !0 });
        }
        function x(e, t, r) {
          if (
            ((n = e.exports),
            (P.__wbindgen_wasm_module = t),
            (d = null),
            (i = null),
            void 0 !== r && ("number" != typeof r || 0 === r || r % 65536 != 0))
          )
            throw "invalid stack size";
          return n.__wbindgen_start(r), n;
        }
        async function P(e, t) {
          let r;
          if (void 0 !== n) return n;
          void 0 !== e &&
            (Object.getPrototypeOf(e) === Object.prototype
              ? ({ module_or_path: e, memory: t, thread_stack_size: r } = e)
              : console.warn(
                  "using deprecated parameters for the initialization function; pass a single object instead",
                )),
            void 0 === e && (e = new URL("rewriter_bg.wasm", ""));
          let o = w();
          ("string" == typeof e ||
            ("function" == typeof Request && e instanceof Request) ||
            ("function" == typeof URL && e instanceof URL)) &&
            (e = fetch(e)),
            v(o, t);
          let { instance: a, module: s } = await b(await e, o);
          return x(a, s, r);
        }
        !(function (e, t) {
          let r;
          if (void 0 !== n) return;
          void 0 !== e &&
            (Object.getPrototypeOf(e) === Object.prototype
              ? ({ module: e, memory: t, thread_stack_size: r } = e)
              : console.warn(
                  "using deprecated parameters for `initSync()`; pass a single object instead",
                ));
          let o = w();
          v(o, t),
            !(e instanceof WebAssembly.Module) &&
              (e = new WebAssembly.Module(e)),
            x(new WebAssembly.Instance(e, o), e, r);
        })({
          module: new WebAssembly.Module(
            Uint8Array.from(atob(self.WASM), (e) => e.charCodeAt(0)),
          ),
        }),
          (Error.stackTraceLimit = 50);
        let _ = new TextDecoder();
        function S(e, t) {
          let r = e.natives.Function;
          (t[o.vc.globals.importfn] = function (t) {
            return function (o) {
              let s = new URL(o, t).href;
              return r(
                `return import("${(function (e, t) {
                  if (
                    (e instanceof URL && (e = e.href),
                    e.startsWith("javascript:"))
                  )
                    return (
                      "javascript:" +
                      (function (e, t, r) {
                        if ((0, a.Sp)("naiiveRewriter", r.origin)) {
                          let t =
                            "string" == typeof e
                              ? e
                              : new TextDecoder().decode(e);
                          return (
                            console.log("naiive"),
                            (function (e) {
                              return (
                                "string" != typeof e &&
                                  (e = new TextDecoder().decode(e)),
                                `
		with (${a.h3.config.globals.wrapfn}(globalThis)) {

			${e}

		}
	`
                              );
                            })(t)
                          );
                        }
                        return (e = (function (e, t, r) {
                          let o;
                          let {
                            js: s,
                            errors: i,
                            duration: c,
                          } = (o =
                            "string" == typeof e
                              ? (function (e, t, r, o) {
                                  let a = g(
                                      e,
                                      n.__wbindgen_malloc,
                                      n.__wbindgen_realloc,
                                    ),
                                    s = u,
                                    i = g(
                                      t,
                                      n.__wbindgen_malloc,
                                      n.__wbindgen_realloc,
                                    ),
                                    l = u,
                                    c = g(
                                      r,
                                      n.__wbindgen_malloc,
                                      n.__wbindgen_realloc,
                                    ),
                                    f = u,
                                    p = n.rewrite_js(a, s, i, l, c, f, o);
                                  if (p[2]) throw m(p[1]);
                                  return m(p[0]);
                                })(e, r.base.href, t || "(unknown)", a.h3)
                              : (function (e, t, r, o) {
                                  let a = (function (e, t) {
                                      let r = t(1 * e.length, 1) >>> 0;
                                      return (
                                        l().set(e, r / 1), (u = e.length), r
                                      );
                                    })(e, n.__wbindgen_malloc),
                                    s = u,
                                    i = g(
                                      t,
                                      n.__wbindgen_malloc,
                                      n.__wbindgen_realloc,
                                    ),
                                    c = u,
                                    f = g(
                                      r,
                                      n.__wbindgen_malloc,
                                      n.__wbindgen_realloc,
                                    ),
                                    p = u,
                                    d = n.rewrite_js_from_arraybuffer(
                                      a,
                                      s,
                                      i,
                                      c,
                                      f,
                                      p,
                                      o,
                                    );
                                  if (d[2]) throw m(d[1]);
                                  return m(d[0]);
                                })(
                                  new Uint8Array(e),
                                  r.base.href,
                                  t || "(unknown)",
                                  a.h3,
                                ));
                          for (let e of i) console.error("oxc parse error", e);
                          {
                            let e;
                            (e =
                              c < 1n
                                ? "BLAZINGLY FAST"
                                : c < 500n
                                  ? "decent speed"
                                  : "really slow"),
                              console.log(
                                `oxc rewrite for "${t || "(unknown)"}" was ${e} (${c}ms)`,
                              );
                          }
                          return "string" == typeof e ? _.decode(s) : s;
                        })(e, null, r));
                      })(e.slice(11), null, t)
                    );
                  if (e.startsWith("blob:"))
                    return location.origin + a.h3.config.prefix + e;
                  if (e.startsWith("data:"))
                    return location.origin + a.h3.config.prefix + e;
                  else {
                    if (e.startsWith("mailto:") || e.startsWith("about:"))
                      return e;
                    let r = t.base.href;
                    return (
                      r.startsWith("about:") &&
                        (r = (function (e) {
                          e instanceof URL && (e = e.href);
                          let t = location.origin + a.h3.config.prefix;
                          if (e.startsWith("javascript:")) return e;
                          if (e.startsWith("blob:")) return e;
                          if (e.startsWith(t + "blob:"))
                            return e.substring(t.length);
                          else if (e.startsWith(t + "data:"))
                            return e.substring(t.length);
                          else if (
                            e.startsWith("mailto:") ||
                            e.startsWith("about:")
                          )
                            return e;
                          else if (
                            (function (e, t) {
                              try {
                                return new URL(e, void 0);
                              } catch {
                                return null;
                              }
                            })(e)
                          )
                            return a.h3.codec.decode(
                              e.slice(
                                (location.origin + a.h3.config.prefix).length,
                              ),
                            );
                          else return e;
                        })(self.location.href)),
                      location.origin +
                        a.h3.config.prefix +
                        a.h3.codec.encode(new URL(e, r).href)
                    );
                  }
                })(s, e.meta)}")`,
              )();
            };
          }),
            (t[o.vc.globals.metafn] = function (e) {
              return {
                url: e,
                resolve: function (t) {
                  return new URL(t, e).href;
                },
              };
            });
        }
      },
      2930: function (e, t, r) {
        "use strict";
        function n(e, t) {
          e.Proxy("IDBFactory.prototype.open", {
            apply(t) {
              t.args[0] = `${e.url.origin}@${t.args[0]}`;
            },
          }),
            e.Trap("IDBDatabase.prototype.name", {
              get(e) {
                let t = e.get();
                return t.substring(t.indexOf("@") + 1);
              },
            });
        }
        r.r(t),
          r.d(t, {
            default: function () {
              return n;
            },
          });
      },
      2625: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return s;
            },
          });
        var n = r(6707),
          o = r(9777),
          a = r(6594);
        function s(e) {
          n.iswindow &&
            e.Proxy("window.postMessage", {
              apply(e) {
                let t;
                let {
                    constructor: { constructor: r },
                  } = (t =
                    "object" == typeof e.args[0] && null !== e.args[0]
                      ? e.args[0]
                      : "object" == typeof e.args[2] && null !== e.args[2]
                        ? e.args[2]
                        : a.POLLUTANT in e.this &&
                            "object" == typeof e.this[a.POLLUTANT] &&
                            null !== e.this[a.POLLUTANT]
                          ? e.this[a.POLLUTANT]
                          : {}),
                  n = r("return globalThis")()[o.a],
                  s = r("...args", "this(...args)");
                (e.args[0] = {
                  $scramjet$messagetype: "window",
                  $scramjet$origin: n.url.origin,
                  $scramjet$data: e.args[0],
                }),
                  "string" == typeof e.args[1] && (e.args[1] = "*"),
                  "object" == typeof e.args[1] &&
                    (e.args[1].targetOrigin = "*"),
                  e.return(s.call(e.fn, ...e.args));
              },
            });
          let t = ["MessagePort.prototype.postMessage"];
          self.Worker && t.push("Worker.prototype.postMessage"),
            !n.iswindow && t.push("self.postMessage"),
            e.Proxy(t, {
              apply(e) {
                e.args[0] = {
                  $scramjet$messagetype: "worker",
                  $scramjet$data: e.args[0],
                };
              },
            });
        }
      },
      6594: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            POLLUTANT: function () {
              return o;
            },
            default: function () {
              return a;
            },
          });
        var n = r(4471);
        let o = Symbol.for("scramjet realm pollutant");
        function a(e, t) {
          Object.defineProperty(t.Object.prototype, n.vc.globals.setrealmfn, {
            value(e) {
              return (
                Object.defineProperty(this, o, {
                  value: e,
                  writable: !1,
                  configurable: !0,
                  enumerable: !1,
                }),
                this
              );
            },
            writable: !0,
            configurable: !0,
            enumerable: !1,
          });
        }
      },
      2738: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return o;
            },
          });
        var n = r(4471);
        function o(e) {
          e.Proxy("EventSource", {
            construct(t) {
              t.args[0] = (0, n.dm)(t.args[0], e.meta);
            },
          }),
            e.Trap("EventSource.prototype.url", {
              get(e) {
                (0, n.Sd)(e.get());
              },
            });
        }
      },
      106: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return a;
            },
          });
        var n = r(6707),
          o = r(4471);
        function a(e, t) {
          e.Proxy("fetch", {
            apply(t) {
              ("string" == typeof t.args[0] || t.args[0] instanceof URL) &&
                ((t.args[0] = (0, o.dm)(t.args[0].toString(), e.meta)),
                n.isemulatedsw && (t.args[0] += "?from=swruntime"));
            },
          }),
            e.Proxy("Request", {
              construct(t) {
                ("string" == typeof t.args[0] || t.args[0] instanceof URL) &&
                  ((t.args[0] = (0, o.dm)(t.args[0].toString(), e.meta)),
                  n.isemulatedsw && (t.args[0] += "?from=swruntime"));
              },
            }),
            e.Trap("Response.prototype.url", {
              get: (e) => (0, o.Sd)(e.get()),
            }),
            e.Trap("Request.prototype.url", { get: (e) => (0, o.Sd)(e.get()) });
        }
      },
      7219: function (e, t, r) {
        "use strict";
        function n(e, t) {
          let r = new WeakMap();
          e.Proxy("WebSocket", {
            construct(n) {
              let o = new EventTarget();
              Object.setPrototypeOf(o, t.WebSocket.prototype),
                (o.constructor = n.fn);
              let a = (e) =>
                  new Proxy(e, {
                    get: (e, t) => "isTrusted" === t || Reflect.get(e, t),
                  }),
                s = e.bare.createWebSocket(n.args[0], n.args[1], null, {
                  "User-Agent": t.navigator.userAgent,
                  Origin: e.url.origin,
                }),
                i = {
                  extensions: "",
                  protocol: "",
                  url: n.args[0],
                  binaryType: "blob",
                  barews: s,
                  captureListeners: {},
                  listeners: {},
                };
              function l(e) {
                i["on" + e.type]?.(a(e)), o.dispatchEvent(e);
              }
              s.addEventListener("open", () => {
                l(new Event("open"));
              }),
                s.addEventListener("close", (e) => {
                  l(new CloseEvent("close", e));
                }),
                s.addEventListener("message", async (e) => {
                  let t = e.data;
                  "string" == typeof t ||
                    ("byteLength" in t
                      ? "blob" === i.binaryType
                        ? (t = new Blob([t]))
                        : Object.setPrototypeOf(t, ArrayBuffer.prototype)
                      : "arrayBuffer" in t &&
                        "arraybuffer" === i.binaryType &&
                        Object.setPrototypeOf(
                          (t = await t.arrayBuffer()),
                          ArrayBuffer.prototype,
                        )),
                    l(
                      new MessageEvent("message", {
                        data: t,
                        origin: e.origin,
                        lastEventId: e.lastEventId,
                        source: e.source,
                        ports: e.ports,
                      }),
                    );
                }),
                s.addEventListener("error", () => {
                  l(new Event("error"));
                }),
                r.set(o, i),
                n.return(o);
            },
          }),
            e.Proxy("EventTarget.prototype.addEventListener", {
              apply(e) {
                let t = r.get(e.this);
                if (!t) return;
                let [n, o, a] = e.args;
                if (
                  ("object" == typeof a && a.capture) ||
                  ("boolean" == typeof a && a)
                ) {
                  let e = (t.captureListeners[n] ??= []);
                  e.push(o), (t.captureListeners[n] = e);
                } else {
                  let e = (t.listeners[n] ??= []);
                  e.push(o), (t.listeners[n] = e);
                }
                e.return(void 0);
              },
            }),
            e.Proxy("EventTarget.prototype.removeEventListener", {
              apply(e) {
                let t = r.get(e.this);
                if (!t) return;
                let [n, o, a] = e.args;
                if (
                  ("object" == typeof a && a.capture) ||
                  ("boolean" == typeof a && a)
                ) {
                  let e = (t.captureListeners[n] ??= []),
                    r = e.indexOf(o);
                  -1 !== r && e.splice(r, 1), (t.captureListeners[n] = e);
                } else {
                  let e = (t.listeners[n] ??= []),
                    r = e.indexOf(o);
                  -1 !== r && e.splice(r, 1), (t.listeners[n] = e);
                }
                e.return(void 0);
              },
            }),
            e.Trap("WebSocket.prototype.binaryType", {
              get: (e) => r.get(e.this).binaryType,
              set(e, t) {
                let n = r.get(e.this);
                ("blob" === t || "arraybuffer" === t) && (n.binaryType = t);
              },
            }),
            e.Trap("WebSocket.prototype.bufferedAmount", { get: () => 0 }),
            e.Trap("WebSocket.prototype.extensions", {
              get: (e) => r.get(e.this).extensions,
            }),
            e.Trap("WebSocket.prototype.onclose", {
              get: (e) => r.get(e.this).onclose,
              set(e, t) {
                r.get(e.this).onclose = t;
              },
            }),
            e.Trap("WebSocket.prototype.onerror", {
              get: (e) => r.get(e.this).onerror,
              set(e, t) {
                r.get(e.this).onerror = t;
              },
            }),
            e.Trap("WebSocket.prototype.onmessage", {
              get: (e) => r.get(e.this).onmessage,
              set(e, t) {
                r.get(e.this).onmessage = t;
              },
            }),
            e.Trap("WebSocket.prototype.onopen", {
              get: (e) => r.get(e.this).onopen,
              set(e, t) {
                r.get(e.this).onopen = t;
              },
            }),
            e.Trap("WebSocket.prototype.url", {
              get: (e) => r.get(e.this).url,
            }),
            e.Trap("WebSocket.prototype.protocol", {
              get: (e) => r.get(e.this).protocol,
            }),
            e.Trap("WebSocket.prototype.readyState", {
              get: (e) => r.get(e.this).barews.readyState,
            }),
            e.Proxy("WebSocket.prototype.send", {
              apply(e) {
                let t = r.get(e.this);
                e.return(t.barews.send(e.args[0]));
              },
            }),
            e.Proxy("WebSocket.prototype.close", {
              apply(e) {
                let t = r.get(e.this);
                void 0 === e.args[0] && (e.args[0] = 1e3),
                  void 0 === e.args[1] && (e.args[1] = ""),
                  e.return(t.barews.close(e.args[0], e.args[1]));
              },
            });
        }
        r.r(t),
          r.d(t, {
            default: function () {
              return n;
            },
          });
      },
      7481: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return a;
            },
          });
        var n = r(8810),
          o = r(4471);
        function a(e, t) {
          let r;
          t.Worker &&
            (0, n.Sp)("syncxhr", e.url) &&
            (r = new (e.natives.Worker ? e.natives.Worker : Worker)(
              o.vc.files.sync,
            ));
          let a = Symbol("xhr original args"),
            s = Symbol("xhr headers");
          e.Proxy("XMLHttpRequest.prototype.open", {
            apply(t) {
              t.args[1] && (t.args[1] = (0, o.dm)(t.args[1], e.meta)),
                (t.this[a] = t.args);
            },
          }),
            e.Proxy("XMLHttpRequest.prototype.setRequestHeader", {
              apply(e) {
                (e.this[s] || (e.this[s] = {}))[e.args[0]] = e.args[1];
              },
            }),
            e.Proxy("XMLHttpRequest.prototype.send", {
              apply(t) {
                let o = t.this[a];
                if (!o || o[2]) return;
                if (!(0, n.Sp)("syncxhr", e.url)) {
                  console.warn("ignoring request - sync xhr disabled in flags");
                  return;
                }
                let i = new SharedArrayBuffer(1024, {
                    maxByteLength: 0x7fffffff,
                  }),
                  l = new DataView(i);
                e.natives["Worker.prototype.postMessage"].call(r, {
                  sab: i,
                  args: o,
                  headers: t.this[s],
                  body: t.args[0],
                });
                let c = performance.now();
                for (; 0 === l.getUint8(0); )
                  if (performance.now() - c > 1e3) throw Error("xhr timeout");
                let u = l.getUint16(1),
                  f = l.getUint32(3),
                  p = new Uint8Array(f);
                p.set(new Uint8Array(i.slice(7, 7 + f)));
                let g = new TextDecoder().decode(p),
                  d = l.getUint32(7 + f),
                  y = new Uint8Array(d);
                y.set(new Uint8Array(i.slice(11 + f, 11 + f + d)));
                let m = new TextDecoder().decode(y);
                e.RawTrap(t.this, "status", { get: () => u }),
                  e.RawTrap(t.this, "responseText", { get: () => m }),
                  e.RawTrap(t.this, "response", {
                    get: () =>
                      "arraybuffer" === t.this.responseType ? y.buffer : m,
                  }),
                  e.RawTrap(t.this, "responseXML", {
                    get: () => new DOMParser().parseFromString(m, "text/xml"),
                  }),
                  e.RawTrap(t.this, "getAllResponseHeaders", {
                    get: () => () => g,
                  }),
                  e.RawTrap(t.this, "getResponseHeader", {
                    get: () => (e) => {
                      let t = RegExp(`^${e}: (.*)$`, "m").exec(g);
                      return t ? t[1] : null;
                    },
                  }),
                  t.return(void 0);
              },
            }),
            e.Trap("XMLHttpRequest.prototype.responseURL", {
              get: (e) => (0, o.Sd)(e.get()),
            });
        }
      },
      6321: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return s;
            },
            enabled: function () {
              return a;
            },
          });
        var n = r(8810);
        let o = {},
          a = (e) => (0, n.Sp)("sourcemaps", e.url);
        function s(e, t) {
          Object.defineProperty(t, "$scramjet$pushsourcemap", {
            value: (e, t) => {
              o[t] = e;
            },
            enumerable: !1,
            writable: !1,
            configurable: !1,
          });
          let r = "/*scramtag ";
          e.Proxy("Function.prototype.toString", {
            apply(e) {
              let t = e.fn.call(e.this),
                n = "",
                a = t.indexOf("/*s");
              if (-1 === a) return e.return(t);
              let s = t.indexOf(" ", a + r.length),
                i = parseInt(t.substring(a + r.length, s)) - a,
                l = t.indexOf("*/", a),
                c = t.substring(s + 1, l);
              t = t.replace(/\/\*scramtag.*?\*\//g, "");
              let u = o[c],
                f = 0,
                p = 0,
                g = 0;
              for (; g < u.length; ) {
                let [e, r, o] = u[g];
                if (r < i) {
                  g++;
                  continue;
                }
                if (r - i + p > t.length) break;
                (n += t.slice(f, r - i + p)),
                  (n += e),
                  (p += o - r - e.length),
                  (f = r - i + p + e.length),
                  g++;
              }
              return (n += t.slice(f)), e.return(n);
            },
          });
        }
      },
      1587: function (e, t, r) {
        "use strict";
        function n(e, t) {
          delete t.TrustedHTML,
            delete t.TrustedScript,
            delete t.TrustedScriptURL,
            delete t.TrustedTypePolicy,
            delete t.TrustedTypePolicyFactory,
            t.__defineGetter__("trustedTypes", () => void 0);
        }
        r.r(t),
          r.d(t, {
            default: function () {
              return n;
            },
          });
      },
      2370: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return a;
            },
            order: function () {
              return o;
            },
            unproxy: function () {
              return s;
            },
          });
        var n = r(6707);
        let o = 3;
        function a(e, t) {
          for (let r of [t])
            for (let t in r)
              try {
                "function" == typeof r[t] &&
                  e.RawProxy(r, t, {
                    apply(t) {
                      s(t, e);
                    },
                  });
              } catch {}
          if (n.iswindow) {
            for (let r of [
              t.Node.prototype,
              t.MutationObserver.prototype,
              t.document,
              t.MouseEvent.prototype,
            ])
              for (let t in r)
                try {
                  "function" == typeof r[t] &&
                    e.RawProxy(r, t, {
                      apply(t) {
                        s(t, e);
                      },
                    });
                } catch {}
            e.Proxy("Object.defineProperty", {
              apply(t) {
                s(t, e);
              },
            }),
              e.Proxy("Object.getOwnPropertyDescriptor", {
                apply(t) {
                  let r = t.call();
                  r &&
                    (r.get &&
                      e.RawProxy(r, "get", {
                        apply(t) {
                          s(t, e);
                        },
                      }),
                    r.set &&
                      e.RawProxy(r, "set", {
                        apply(t) {
                          s(t, e);
                        },
                      }),
                    t.return(r));
                },
              });
          }
        }
        function s(e, t) {
          let r = t.global;
          for (let n in (e.this === t.globalProxy && (e.this = r),
          e.this === t.documentProxy && (e.this = r.document),
          e.args))
            e.args[n] === t.documentProxy && (e.args[n] = r.document),
              e.args[n] === t.globalProxy && (e.args[n] = r);
        }
      },
      8475: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return a;
            },
          });
        var n = r(6707),
          o = r(4471);
        function a(e, t) {
          t.Worker &&
            e.Proxy("Worker", {
              construct({ args: t, call: r }) {
                t[0] instanceof URL && (t[0] = t[0].href),
                  (t[0] = (0, o.dm)(t[0], e.meta) + "?dest=worker"),
                  t[1] && "module" === t[1].type && (t[0] += "&type=module");
                let n = r(),
                  a = new o.ut();
                (async () => {
                  let t = await a.getInnerPort();
                  e.natives["Worker.prototype.postMessage"].call(
                    n,
                    { $scramjet$type: "baremuxinit", port: t },
                    [t],
                  );
                })();
              },
            }),
            n.iswindow &&
              (e.Proxy("Worklet.prototype.addModule", {
                apply(t) {
                  t.args[0] && (t.args[0] = (0, o.dm)(t.args[0], e.meta));
                },
              }),
              e.Proxy("SharedWorker", {
                construct({ args: t, call: r }) {
                  t[0] instanceof URL && (t[0] = t[0].href),
                    (t[0] = (0, o.dm)(t[0], e.meta) + "?dest=worker"),
                    t[1] &&
                      "string" == typeof t[1] &&
                      (t[1] = `${e.url.origin}@${t[1]}`),
                    t[1] &&
                      "object" == typeof t[1] &&
                      ("module" === t[1].type && (t[0] += "&type=module"),
                      t[1].name &&
                        (t[1].name = `${e.url.origin}@${t[1].name}`));
                  let n = r(),
                    a = new o.ut();
                  (async () => {
                    let t = await a.getInnerPort();
                    e.natives["MessagePort.prototype.postMessage"].call(
                      n.port,
                      { $scramjet$type: "baremuxinit", port: t },
                      [t],
                    );
                  })();
                },
              }));
        }
      },
      7706: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            createWrapFn: function () {
              return i;
            },
            default: function () {
              return c;
            },
            order: function () {
              return l;
            },
          });
        var n = r(6707),
          o = r(9777),
          a = r(4471),
          s = r(4423);
        function i(e, t) {
          return function (r) {
            if (r === t) return e.globalProxy;
            if (r === t.location) return e.locationProxy;
            if (r === eval) return s.indirectEval.bind(e);
            if (n.iswindow) {
              if (r === t.parent)
                return o.a in t.parent.self
                  ? t.parent.self[o.a].globalProxy
                  : e.globalProxy;
              if (r === t.document) return e.documentProxy;
              else if (r === t.top) {
                let e = t.self;
                for (;;) {
                  let t = e.parent.self;
                  if (t === e || !(o.a in t)) break;
                  e = t;
                }
                return e[o.a].globalProxy.window;
              }
            }
            return r;
          };
        }
        let l = 4;
        function c(e, t) {
          Object.defineProperty(t, a.vc.globals.wrapfn, {
            value: e.wrapfn,
            writable: !1,
            configurable: !1,
          }),
            Object.defineProperty(t, a.vc.globals.wrapthisfn, {
              value: function (r) {
                return r === t ? e.globalProxy : r;
              },
              writable: !1,
              configurable: !1,
            }),
            (t.$scramitize = function (e) {
              return (
                "string" == typeof e && e.includes("scramjet"),
                "string" == typeof e && e.includes(location.origin),
                n.iswindow && e instanceof Document && e.defaultView.$scramjet,
                e
              );
            }),
            Object.defineProperty(t, a.vc.globals.trysetfn, {
              value: function (e, t, r) {
                if (e instanceof Location) return (locationProxy.href = r), !0;
              },
              writable: !1,
              configurable: !1,
            });
        }
      },
      633: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            ScramjetServiceWorkerRuntime: function () {
              return a;
            },
          });
        var n = r(4471),
          o = r(1762).Z;
        class a {
          client;
          recvport;
          constructor(e) {
            (this.client = e),
              (self.onconnect = (t) => {
                let r = t.ports[0];
                o.log("sw", "connected"),
                  r.addEventListener("message", (t) => {
                    console.log("sw", t.data),
                      "scramjet$type" in t.data &&
                        ("init" === t.data.scramjet$type
                          ? ((this.recvport = t.data.scramjet$port),
                            this.recvport.postMessage({
                              scramjet$type: "init",
                            }))
                          : s.call(this, e, t.data));
                  }),
                  r.start();
              });
          }
          hook() {
            (this.client.global.registration = {
              scope: this.client.url.href,
              active: {
                scriptURL: this.client.url.href,
                state: "activated",
                onstatechange: null,
                onerror: null,
                postMessage: () => {},
                addEventListener: () => {},
                removeEventListener: () => {},
                dispatchEvent: (e) => {},
              },
              showNotification: async () => {},
              unregister: async () => !0,
              update: async () => {},
              installing: null,
              waiting: null,
            }),
              (this.client.global.ServiceWorkerGlobalScope =
                this.client.global);
          }
        }
        function s(e, t) {
          let r = this.recvport,
            a = t.scramjet$type,
            s = t.scramjet$token;
          if ("fetch" === a) {
            o.log("ee", t);
            let a = e.eventcallbacks.get(self);
            if (!a) return;
            for (let i of a) {
              if ("fetch" !== i.event) continue;
              let a = t.scramjet$request,
                l = new e.natives.Request((0, n.Sd)(a.url), {
                  body: a.body,
                  headers: new Headers(a.headers),
                  method: a.method,
                  mode: "same-origin",
                });
              Object.defineProperty(l, "destination", {
                value: a.destinitation,
              });
              let c = new Event("fetch");
              c.request = l;
              let u = !1;
              (c.respondWith = (e) => {
                (u = !0),
                  (async () => {
                    let t = {
                      scramjet$type: "fetch",
                      scramjet$token: s,
                      scramjet$response: {
                        body: (e = await e).body,
                        headers: Array.from(e.headers.entries()),
                        status: e.status,
                        statusText: e.statusText,
                      },
                    };
                    o.log("sw", "responding", t), r.postMessage(t, [e.body]);
                  })();
              }),
                o.log("to fn", c),
                i.proxiedCallback(
                  (function (e) {
                    return new Proxy(e, {
                      get: (e, t, r) => "isTrusted" === t || Reflect.get(e, t),
                    });
                  })(c),
                ),
                !u &&
                  (console.log("sw", "no response"),
                  r.postMessage({
                    scramjet$type: "fetch",
                    scramjet$token: s,
                    scramjet$response: !1,
                  }));
            }
          }
        }
      },
      5425: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return o;
            },
          });
        var n = r(4471);
        function o(e, t) {
          e.Proxy("importScripts", {
            apply(t) {
              for (let r in t.args) t.args[r] = (0, n.dm)(t.args[r], e.meta);
            },
          });
        }
      },
      1762: function (e, t, r) {
        "use strict";
        r.d(t, {
          Z: function () {
            return n;
          },
        });
        let n = {
          fmt: function (e, t, ...r) {
            let n = Error.prepareStackTrace;
            Error.prepareStackTrace = (e, t) => {
              t.shift(), t.shift(), t.shift();
              let r = "";
              for (let e = 1; e < Math.min(2, t.length); e++)
                t[e].getFunctionName() &&
                  (r += `${t[e].getFunctionName()} -> ` + r);
              return (r += t[0].getFunctionName() || "Anonymous");
            };
            let o = (function () {
              try {
                throw Error();
              } catch (e) {
                return e.stack;
              }
            })();
            Error.prepareStackTrace = n;
            let a = console[e] || console.log;
            a(
              `%c${o}%c ${t}`,
              `
		background-color: ${{ log: "#000", warn: "#f80", error: "#f00", debug: "transparent" }[e]};
		color: ${{ log: "#fff", warn: "#fff", error: "#fff", debug: "gray" }[e]};
		padding: ${{ log: 2, warn: 4, error: 4, debug: 0 }[e]}px;
		font-weight: bold;
		font-family: monospace;
		font-size: 0.9em;
	`,
              `${"debug" === e ? "color: gray" : ""}`,
              ...r,
            );
          },
          log: function (e, ...t) {
            this.fmt("log", e, ...t);
          },
          warn: function (e, ...t) {
            this.fmt("warn", e, ...t);
          },
          error: function (e, ...t) {
            this.fmt("error", e, ...t);
          },
          debug: function (e, ...t) {
            this.fmt("debug", e, ...t);
          },
        };
      },
      8810: function (e, t, r) {
        "use strict";
        r.d(t, {
          Sp: function () {
            return s;
          },
          h3: function () {
            return n;
          },
          t8: function () {
            return a;
          },
        }),
          !("$scramjet" in self) &&
            (self.$scramjet = {
              version: { build: "f561029", version: "1.0.2-dev" },
              codec: {},
              flagEnabled: s,
            });
        let n = self.$scramjet,
          o = Function;
        function a() {
          (n.codec.encode = o("url", n.config.codec.encode)),
            (n.codec.decode = o("url", n.config.codec.decode));
        }
        function s(e, t) {
          let r = n.config.defaultFlags[e];
          for (let r in n.config.siteFlags) {
            let o = n.config.siteFlags[r];
            if (new RegExp(r).test(t.href) && e in o) return o[e];
          }
          return r;
        }
      },
      4471: function (e, t, r) {
        "use strict";
        r.d(t, {
          Ag: function () {
            return u;
          },
          Gq: function () {
            return w;
          },
          Od: function () {
            return p;
          },
          Sd: function () {
            return l;
          },
          U5: function () {
            return f;
          },
          WT: function () {
            return d;
          },
          Zs: function () {
            return m;
          },
          dg: function () {
            return o;
          },
          dm: function () {
            return i;
          },
          hc: function () {
            return v;
          },
          ls: function () {
            return c;
          },
          r4: function () {
            return g;
          },
          ut: function () {
            return s;
          },
          vc: function () {
            return x;
          },
        });
        var n = r(8810);
        let {
            util: { BareClient: o, ScramjetHeaders: a, BareMuxConnection: s },
            url: {
              rewriteUrl: i,
              unrewriteUrl: l,
              rewriteBlob: c,
              unrewriteBlob: u,
            },
            rewrite: {
              rewriteCss: f,
              unrewriteCss: p,
              rewriteHtml: g,
              unrewriteHtml: d,
              rewriteSrcset: y,
              rewriteJs: m,
              rewriteHeaders: h,
              rewriteWorkers: b,
              htmlRules: w,
            },
            CookieStore: v,
          } = n.h3.shared,
          x = n.h3.config;
      },
      9777: function (e, t, r) {
        "use strict";
        r.d(t, {
          D: function () {
            return o;
          },
          a: function () {
            return n;
          },
        });
        let n = Symbol.for("scramjet client global"),
          o = Symbol.for("scramjet frame handle");
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var a = (t[n] = { exports: {} });
    return e[n](a, a.exports, r), a.exports;
  }
  (r.d = function (e, t) {
    for (var n in t)
      r.o(t, n) &&
        !r.o(e, n) &&
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    r("6707");
})();
//# sourceMappingURL=scramjet.client.js.map
