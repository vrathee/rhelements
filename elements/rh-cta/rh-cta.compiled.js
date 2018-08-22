!(function(r, e) {
  if ("function" == typeof define && define.amd)
    define(["../rhelement/rhelement.compiled.js"], e);
  else if ("undefined" != typeof exports)
    e(require("../rhelement/rhelement.compiled.js"));
  else {
    e(r.rhelementCompiled), (r.rhCta = {});
  }
})(this, function(r) {
  "use strict";
  var e,
    o = (e = r) && e.__esModule ? e : { default: e };
  var t = (function() {
    function t(r, e) {
      for (var o = 0; o < e.length; o++) {
        var t = e[o];
        (t.enumerable = t.enumerable || !1),
          (t.configurable = !0),
          "value" in t && (t.writable = !0),
          Object.defineProperty(r, t.key, t);
      }
    }
    return function(r, e, o) {
      return e && t(r.prototype, e), o && t(r, o), r;
    };
  })();
  var a = (function(r) {
    function e() {
      return (
        (function(r, e) {
          if (!(r instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
        (function(r, e) {
          if (!r)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !e || ("object" != typeof e && "function" != typeof e) ? r : e;
        })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, e.tag))
      );
    }
    return (
      (function(r, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (r.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(r, e)
              : (r.__proto__ = e));
      })(e, o.default),
      t(
        e,
        [
          {
            key: "html",
            get: function() {
              return '\n<style>\n:host {\n  --rhe-local-cta--BorderRadius: var(--rhe-cta--BorderRadius, var(--rhe-theme--BorderRadius, 5em));\n  --rhe-local-cta--link-color: var(--rhe-cta--link-color, var(--rhe-theme--link-color, blue));\n  --rhe-local-cta--link-color--hover: var(--rhe-cta--link-color--hover, var(--rhe-theme--link-color--hover, darkBlue));\n  --rhe-local-cta--link-color--inverted: var(--rhe-cta--link-color--inverted, var(--rhe-theme--link-color--inverted, white));\n  --rhe-local-cta--link-color--inverted--hover: var(--rhe-cta--link-color--inverted--hover, var(--rhe-theme--link-color--inverted--hover, lightGray)); }\n  :host ::slotted(a) {\n    font-family: "Overpass", Overpass, Helvetica, helvetica, arial, sans-serif;\n    font-weight: bold;\n    color: var(--rhe-local-cta--link-color); }\n  :host ::slotted(a:hover),\n  :host ::slotted(a:focus) {\n    color: var(--rhe-local-cta--link-color--hover); }\n\n:host([inverted]) ::slotted(a) {\n  color: var(--rhe-local-cta--link-color--inverted); }\n\n:host([inverted]) ::slotted(a:hover),\n:host([inverted]) ::slotted(a:focus) {\n  color: var(--rhe-local-cta--link-color--inverted--hover); }\n\n:host(.primary) {\n  --rhe-local-cta--primary-BorderRadius: var(--rhe-cta--primary-BorderRadius, var(--rhe-theme--global--border--BorderRadius, 5em));\n  --rhe-local-cta--primary-bg-color: var(--rhe-cta--primary-bg-color, var(--rhe-theme--color--primary, red));\n  --rhe-local-cta--primary-text-color: var(--rhe-cta--primary-text-color, var(--rhe-theme--color--white, white));\n  --rhe-local-cta--primary-bg-color--hover: var(--rhe-cta--primary-bg-color--hover, var(--rhe-theme--color--primary-shade2, darkRed)); }\n  :host(.primary) ::slotted(a) {\n    display: inline-block;\n    text-decoration: none;\n    transition: all 250ms cubic-bezier(0.465, 0.183, 0.153, 0.946);\n    padding: 0.5rem 2rem;\n    border: solid transparent 1px;\n    border-radius: var(--rhe-local-cta--primary-BorderRadius);\n    background: var(--rhe-local-cta--primary-bg-color);\n    color: var(--rhe-local-cta--primary-text-color); }\n  :host(.primary) ::slotted(a:hover),\n  :host(.primary) ::slotted(a:focus) {\n    background: var(--rhe-local-cta--primary-bg-color--hover); }\n\n:host(.secondary) {\n  --rhe-local-cta--secondary-BorderRadius: var(--rhe-cta--secondary-BorderRadius, var(--rhe-theme--global--border--BorderRadius, 5em));\n  --rhe-local-cta--secondary-bg-color: var(--rhe-cta--secondary-bg-color, var(--rhe-theme--color--transparent, transparent));\n  --rhe-local-cta--secondary-text-color: var(--rhe-cta--secondary-text-color, var(--rhe-theme--color--black, black));\n  --rhe-local-cta--secondary-border-color: var(--rhe-cta--secondary-border-color, var(--rhe-theme--color--black, black));\n  --rhe-local-cta--secondary-bg-color--hover: var(--rhe-cta--secondary-bg-color--hover, var(--rhe-theme--color--black, black));\n  --rhe-local-cta--secondary-text-color--hover: var(--rhe-cta--secondary-text-color--hover, var(--rhe-theme--color--white, white));\n  --rhe-local-cta--secondary-border-color--hover: var(--rhe-cta--secondary-border-color--hover, var(--rhe-theme--color--black, black));\n  --rhe-local-cta--secondary-bg-color--inverted: var(--rhe-cta--secondary-bg-color--inverted, var(--rhe-theme--color--transparent, transparent));\n  --rhe-local-cta--secondary-text-color--inverted: var(--rhe-cta--secondary-text-color--inverted, var(--rhe-theme--color--white, white));\n  --rhe-local-cta--secondary-border-color--inverted: var(--rhe-cta--secondary-border-color--inverted, var(--rhe-theme--color--white, white));\n  --rhe-local-cta--secondary-bg-color--inverted--hover: var(--rhe-cta--secondary-bg-color--inverted--hover, var(--rhe-theme--color--white, white));\n  --rhe-local-cta--secondary-text-color--inverted--hover: var(--rhe-cta--secondary-text-color--inverted--hover, var(--rhe-theme--color--black, black));\n  --rhe-local-cta--secondary-border-color--inverted--hover: var(--rhe-cta--secondary-border-color--inverted--hover, var(--rhe-theme--color--white, white)); }\n  :host(.secondary) ::slotted(a) {\n    display: inline-block;\n    text-decoration: none;\n    transition: all 250ms cubic-bezier(0.465, 0.183, 0.153, 0.946);\n    padding: 0.5rem 2rem;\n    border-radius: var(--rhe-local-cta--secondary-BorderRadius);\n    border: solid 1px;\n    border-color: var(--rhe-local-cta--secondary-border-color);\n    background: var(--rhe-local-cta--secondary-bg-color);\n    color: var(--rhe-local-cta--secondary-text-color); }\n  :host(.secondary) ::slotted(a:hover),\n  :host(.secondary) ::slotted(a:focus) {\n    border: solid 1px var(--rhe-local-cta--secondary-border-color--hover);\n    background: var(--rhe-local-cta--secondary-bg-color--hover);\n    color: var(--rhe-local-cta--secondary-text-color--hover); }\n\n:host([inverted].secondary) ::slotted(a) {\n  border: solid 1px var(--rhe-local-cta--secondary-border-color--inverted);\n  background: var(--rhe-local-cta--secondary-bg-color--inverted);\n  color: var(--rhe-local-cta--secondary-text-color--inverted); }\n\n:host([inverted].secondary) ::slotted(a:hover),\n:host([inverted].secondary) ::slotted(a:focus) {\n  border-color: var(--rhe-local-cta--secondary-border-color--inverted--hover);\n  background: var(--rhe-local-cta--secondary-bg-color--inverted--hover);\n  color: var(--rhe-local-cta--secondary-text-color--inverted--hover); }\n\n:host(.tertiary) {\n  display: inline-block;\n  --rhe-local-cta__arrow--spacing: var(--rhe-cta__arrow--spacing, var(--rhe-theme--spacing--xxs, 0.2em));\n  --rhe-local-cta--tertiary-text-color: var(--rhe-cta--tertiary-text-color, var(--rhe-theme--link-color, green));\n  --rhe-local-cta--tertiary-text-color--hover: var(--rhe-cta--tertiary-text-color--hover, var(--rhe-theme--link-color--hover, navyBlue));\n  --rhe-local-cta--tertiary-text-color--inverted: var(--rhe-cta--tertiary-text-color--inverted, var(--rhe-theme--link-color--inverted, white));\n  --rhe-local-cta--tertiary-text-color--inverted--hover: var(--rhe-cta--tertiary-text-color--inverted--hover, var(--rhe-theme--link-color--inverted--hover, lightGray)); }\n  :host(.tertiary) ::slotted(a) {\n    text-decoration: none;\n    color: var(--rhe-local-cta--tertiary-text-color); }\n    :host(.tertiary) ::slotted(a)::after {\n      margin-left: var(--rhe-local-cta__arrow--spacing);\n      vertical-align: middle;\n      border-style: solid;\n      border-width: 8px 5px 0;\n      border-color: transparent;\n      border-top-color: inherit;\n      transform: rotate(-90deg);\n      display: inline-block;\n      content: ""; }\n  :host(.tertiary) ::slotted(a:hover),\n  :host(.tertiary) ::slotted(a:focus) {\n    color: var(--rhe-local-cta--tertiary-text-color--hover); }\n\n:host([inverted].tertiary) ::slotted(a) {\n  color: var(--rhe-local-cta--tertiary-text-color--inverted); }\n\n:host([inverted].tertiary) ::slotted(a:hover),\n:host([inverted].tertiary) ::slotted(a:focus) {\n  color: var(--rhe-local-cta--tertiary-text-color--inverted--hover); }\n</style>\n\n<slot></slot>';
            }
          },
          {
            key: "styleUrl",
            get: function() {
              return "rh-cta.scss";
            }
          },
          {
            key: "templateUrl",
            get: function() {
              return "rh-cta.html";
            }
          }
        ],
        [
          {
            key: "tag",
            get: function() {
              return "rh-cta";
            }
          }
        ]
      ),
      t(e, [
        {
          key: "connectedCallback",
          value: function() {
            (function r(e, o, t) {
              null === e && (e = Function.prototype);
              var a = Object.getOwnPropertyDescriptor(e, o);
              if (void 0 === a) {
                var c = Object.getPrototypeOf(e);
                return null === c ? void 0 : r(c, o, t);
              }
              if ("value" in a) return a.value;
              var n = a.get;
              return void 0 !== n ? n.call(t) : void 0;
            })(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              "connectedCallback",
              this
            ).call(this);
            var r = this.children[0];
            r
              ? r && "a" !== r.tagName.toLowerCase()
                ? console.warn(
                    "The first child in the light DOM must be an anchor tag (<a>)"
                  )
                : (this.link = this.querySelector("a"))
              : console.warn(
                  "The first child in the light DOM must be an anchor tag (<a>)"
                );
          }
        },
        { key: "disconnectedCallback", value: function() {} }
      ]),
      e
    );
  })();
  o.default.create(a);
});
