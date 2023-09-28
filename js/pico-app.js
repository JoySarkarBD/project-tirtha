/*! For license information please see pico-app.min.js.LICENSE */
!(function (t) {
  function e(e) {
    for (
      var a, s, r = e[0], l = e[1], c = e[2], u = 0, p = [];
      u < r.length;
      u++
    )
      (s = r[u]),
        Object.prototype.hasOwnProperty.call(i, s) && i[s] && p.push(i[s][0]),
        (i[s] = 0);
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (t[a] = l[a]);
    for (d && d(e); p.length; ) p.shift()();
    return o.push.apply(o, c || []), n();
  }
  function n() {
    for (var t, e = 0; e < o.length; e++) {
      for (var n = o[e], a = !0, r = 1; r < n.length; r++) {
        var l = n[r];
        0 !== i[l] && (a = !1);
      }
      a && (o.splice(e--, 1), (t = s((s.s = n[0]))));
    }
    return t;
  }
  var a = {},
    i = {
      1: 0,
    },
    o = [];
  function s(e) {
    if (a[e]) return a[e].exports;
    var n = (a[e] = {
      i: e,
      l: !1,
      exports: {},
    });
    return t[e].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = t),
    (s.c = a),
    (s.d = function (t, e, n) {
      s.o(t, e) ||
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: n,
        });
    }),
    (s.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(t, "__esModule", {
          value: !0,
        });
    }),
    (s.t = function (t, e) {
      if ((1 & e && (t = s(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          value: t,
        }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          s.d(
            n,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return n;
    }),
    (s.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return s.d(e, "a", e), e;
    }),
    (s.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (s.p = "/");
  var r = (window.webpackJsonp = window.webpackJsonp || []),
    l = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var c = 0; c < r.length; c++) e(r[c]);
  var d = l;
  o.push([298, 2]), n();
})({
  298: function (t, e, n) {
    "use strict";
    n(301);
    var a = pt(n(550)),
      i = pt(n(339));
    pt(n(340)),
      n(341),
      n(342),
      n(344),
      n(551),
      n(399),
      n(400),
      n(401),
      n(402),
      n(403),
      n(404),
      n(430),
      n(431),
      n(432),
      n(433),
      n(434),
      n(435),
      n(436),
      n(437),
      n(438),
      n(439),
      n(440),
      n(441),
      n(442),
      n(443);
    var o = pt(n(444)),
      s = pt(n(445)),
      r = pt(n(456)),
      l = pt(n(458)),
      c = pt(n(459)),
      d = pt(n(460)),
      u = pt(n(461)),
      p = pt(n(462)),
      f = pt(n(463)),
      m = pt(n(464)),
      g = pt(n(465)),
      h = pt(n(471)),
      b = pt(n(476)),
      v = pt(n(477)),
      w = pt(n(478)),
      _ = pt(n(479)),
      y = pt(n(480)),
      k = pt(n(481)),
      x = pt(n(482)),
      C = pt(n(483)),
      S = pt(n(484)),
      D = pt(n(485)),
      T = pt(n(486)),
      B = pt(n(487)),
      A = pt(n(488)),
      P = pt(n(489)),
      j = pt(n(490)),
      E = pt(n(491)),
      F = pt(n(492)),
      O = pt(n(493)),
      q = pt(n(494)),
      I = pt(n(495)),
      M = pt(n(496)),
      U = pt(n(501)),
      L = pt(n(502)),
      R = pt(n(513)),
      z = pt(n(514)),
      W = pt(n(515)),
      H = pt(n(517)),
      N = pt(n(518)),
      K = pt(n(519)),
      G = pt(n(520)),
      V = pt(n(521)),
      Y = pt(n(522)),
      Q = pt(n(523)),
      X = pt(n(524)),
      Z = pt(n(525)),
      J = pt(n(526)),
      tt = pt(n(527)),
      et = pt(n(528)),
      nt = pt(n(529)),
      at = pt(n(530)),
      it = pt(n(531)),
      ot = pt(n(532)),
      st = pt(n(533)),
      rt = pt(n(534)),
      lt = pt(n(535)),
      ct = pt(n(536)),
      dt = pt(n(537)),
      ut = pt(n(538));
    function pt(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    (window.tippy = a.default),
      (window.Swal = i.default),
      (0, E.default)(),
      (window.scrollToEl = dt.default),
      (window.isOutOfViewport = ut.default),
      $.notify.addStyle("undo-job", {
        html: "<div><div data-notify-html/></div>",
        classes: {
          base: {
            "white-space": "nowrap",
            "background-color": "#121212",
            padding: "10px 20px",
            "border-radius": "4px",
            color: "#fff",
          },
        },
      }),
      $(function () {
        (0, o.default)(),
          (0, s.default)(),
          (0, r.default)(),
          (0, M.default)(),
          (0, l.default)(),
          (0, c.default)(),
          (0, d.default)(),
          (0, u.default)(),
          (0, p.default)(),
          (0, k.default)(),
          (0, f.default)(),
          (0, m.default)(),
          (0, g.default)(),
          (0, F.default)(),
          (0, O.default)(),
          (0, h.default)(),
          (0, b.default)(),
          (0, v.default)(),
          (0, w.default)(),
          (0, _.default)(),
          (0, y.default)(),
          (0, x.default)(),
          (0, C.default)(),
          (0, S.default)(),
          (0, D.default)(),
          (0, T.default)(),
          (0, B.default)(),
          (0, A.default)(),
          (0, P.default)(),
          (0, j.default)(),
          (0, q.default)(),
          (0, I.default)(),
          (0, U.default)(),
          (0, L.default)(),
          (0, R.default)(),
          (0, z.default)(),
          (0, W.default)(),
          (0, H.default)(),
          (0, N.default)(),
          (0, K.default)(),
          (0, G.default)(),
          (0, V.default)(),
          (0, Y.default)(),
          (0, Q.default)(),
          (0, X.default)(),
          (0, Z.default)(),
          (0, J.default)(),
          (0, tt.default)(),
          (0, et.default)(),
          (0, nt.default)(),
          (0, at.default)(),
          (0, it.default)(),
          (0, ot.default)(),
          (0, st.default)(),
          (0, rt.default)(),
          (0, lt.default)(),
          (0, ct.default)(),
          $('[data-toggle="tooltip"]').tooltip(),
          $('[data-toggle="popover"]').popover(),
          (0, a.default)("[data-tippy-content]", {
            allowHTML: !0,
            popperOptions: {
              strategy: "fixed",
              modifiers: [
                {
                  name: "flip",
                  options: {
                    fallbackPlacements: ["bottom", "right"],
                  },
                },
                {
                  name: "preventOverflow",
                  options: {
                    altAxis: !0,
                    tether: !1,
                  },
                },
              ],
            },
          }),
          $(".deposit-method .deposit-method__header").matchHeight(),
          $(".deposit-method .deposit-method__body").matchHeight({
            property: "min-height",
          }),
          $(document).on(
            "click.bs.dropdown",
            ".dropdown-stick .dropdown-menu",
            function (t) {
              t.stopPropagation();
            }
          ),
          $('a[data-toggle="tab"]').on("shown.bs.tab", function (t) {
            $.fn.matchHeight._update();
          }),
          $(document).on("click", ".dropdown-close", function (t) {
            t.preventDefault(),
              $(this)
                .closest(".dropdown")
                .find("[data-toggle=dropdown]")
                .click();
          }),
          $(document).on("click", ".pw-banner-close", function (t) {
            t.preventDefault(), $(this).closest("div").hide();
          }),
          $(document).on(
            "click",
            "button.pw-offer-banner-close, span.pw-offer-banner-close",
            function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                $(this).closest("div").hide(),
                setCookie("surveyoffersBannerDismiss", new Date().getTime(), 1);
            }
          ),
          $(document).on("click", ".stop-closing .dropdown-menu", function (t) {
            t.stopPropagation();
          });
        var t = window.location.hash;
        t &&
          $(
            'ul.nav a[href="' + t + '"], ul.nav button[data-target="' + t + '"]'
          ).tab("show"),
          $(document).on("click", ".nav-tabs a", function (t) {
            $(this).tab("show");
            var e = $("body").scrollTop() || $("html").scrollTop();
            (window.location.hash = this.hash), $("html,body").scrollTop(e);
          }),
          $(".zawp-toggle").jqueryValueToggle(),
          $("[data-max-chars]").jqueryMaxChars(),
          $(".star-rating--fillable").jqueryStarRating(),
          $(".popular-categories__list").slick({
            variableWidth: !0,
          });
      }),
      (function (t) {
        t.extend({
          scrollToTop: function () {
            t("html,body").animate({
              scrollTop: 0,
            });
          },
          isValidUrl: function (t) {
            return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
              t
            );
          },
        });
      })(jQuery);
  },
  401: function (t, e, n) {
    "use strict";
    !(function (t) {
      t.extend({
        bannerAlert: function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = t(".pw-banner");
          a.addClass("alert"),
            a.html(
              "<span>" +
                e +
                '</span><button type="button" class="close pw-banner-close" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
            ),
            a.fadeIn("slow"),
            n ||
              setTimeout(function () {
                a.fadeOut();
              }, 5e3);
        },
        bannerSuccess: function (e) {
          var n = t(".pw-banner");
          n.addClass("notice"),
            n.html(
              "<span>" +
                e +
                '</span><button type="button" class="close pw-banner-close" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
            ),
            n.fadeIn("slow"),
            setTimeout(function () {
              n.fadeOut();
            }, 5e3);
        },
      });
    })(jQuery);
  },
  402: function (t, e, n) {
    "use strict";
    !(function (t) {
      t.fn.serializeObject = function () {
        var e = this,
          n = {},
          a = {},
          i = {
            validate: /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
            key: /[a-zA-Z0-9_]+|(?=\[\])/g,
            push: /^$/,
            fixed: /^\d+$/,
            named: /^[a-zA-Z0-9_]+$/,
          };
        return (
          (this.build = function (t, e, n) {
            return (t[e] = n), t;
          }),
          (this.push_counter = function (t) {
            return void 0 === a[t] && (a[t] = 0), a[t]++;
          }),
          t.each(t(this).serializeArray(), function () {
            if (i.validate.test(this.name)) {
              for (
                var a,
                  o = this.name.match(i.key),
                  s = this.value,
                  r = this.name;
                void 0 !== (a = o.pop());

              )
                (r = r.replace(new RegExp("\\[" + a + "\\]$"), "")),
                  a.match(i.push)
                    ? (s = e.build([], e.push_counter(r), s))
                    : a.match(i.fixed)
                    ? (s = e.build([], a, s))
                    : a.match(i.named) && (s = e.build({}, a, s));
              n = t.extend(!0, n, s);
            }
          }),
          n
        );
      };
    })(jQuery);
  },
  403: function (t, e, n) {
    "use strict";
    !(function (t, e) {
      function n() {
        (this._state = []),
          (this._defaults = {
            classHolder: "sbHolder",
            classHolderDisabled: "sbHolderDisabled",
            classSelector: "sbSelector",
            classOptions: "sbOptions",
            classGroup: "sbGroup",
            classSub: "sbSub",
            classDisabled: "sbDisabled",
            classToggleOpen: "sbToggleOpen",
            classToggle: "sbToggle",
            classFocus: "sbFocus",
            classActive: "sbActive",
            speed: 200,
            effect: "slide",
            onChange: null,
            onOpen: null,
            onClose: null,
          });
      }
      t.extend(n.prototype, {
        _isOpenSelectbox: function (t) {
          return !!t && this._getInst(t).isOpen;
        },
        _isDisabledSelectbox: function (t) {
          return !!t && this._getInst(t).isDisabled;
        },
        _attachSelectbox: function (e, n) {
          if (this._getInst(e)) return !1;
          var a,
            i,
            o,
            s,
            r = t(e),
            l = this,
            c = l._newInst(r),
            d = !1,
            u = (r.find("optgroup"), r.find("option")),
            p = u.length;
          function f() {
            var e,
              n,
              a = this.attr("id").split("_")[1];
            for (e in l._state)
              e !== a &&
                l._state.hasOwnProperty(e) &&
                (n = t("select[sb='" + e + "']")[0]) &&
                l._closeSelectbox(n);
          }
          function m() {
            var n = !(!arguments[1] || !arguments[1].sub),
              a = !(!arguments[1] || !arguments[1].disabled);
            arguments[0].each(function (r) {
              var u,
                f = t(this),
                m = t("<li>");
              f.is(":selected") &&
                (m.addClass(c.settings.classActive),
                i.text(f.text()),
                (d = !0)),
                r === p - 1 && m.addClass("last"),
                f.is(":disabled") || a
                  ? ((u = t("<span>", {
                      text: f.text(),
                    }).addClass(c.settings.classDisabled)),
                    n && u.addClass(c.settings.classSub),
                    u.appendTo(m))
                  : ((u = t("<a>", {
                      href: "#" + f.val(),
                      rel: f.val(),
                    })
                      .text(f.text())
                      .bind("click.sb", function (n) {
                        n && n.preventDefault && n.preventDefault();
                        var a = o,
                          i = t(this);
                        a.attr("id").split("_")[1],
                          l._changeSelectbox(e, i.attr("rel"), i.text()),
                          i
                            .parent()
                            .siblings()
                            .removeClass(c.settings.classActive),
                          i.parent().addClass(c.settings.classActive),
                          l._closeSelectbox(e);
                      })
                      .bind("mouseover.sb", function () {
                        var e = t(this);
                        e
                          .parent()
                          .siblings()
                          .find("a")
                          .removeClass(c.settings.classFocus),
                          e.addClass(c.settings.classFocus);
                      })
                      .bind("mouseout.sb", function () {
                        t(this).removeClass(c.settings.classFocus);
                      })),
                    n && u.addClass(c.settings.classSub),
                    u.appendTo(m)),
                m.appendTo(s);
            });
          }
          r.attr("sb", c.uid),
            t.extend(c.settings, l._defaults, n),
            (l._state[c.uid] = !1),
            r.hide(),
            (a = t("<div>", {
              id: "sbHolder_" + c.uid,
              class: c.settings.classHolder,
              tabindex: r.attr("tabindex"),
            })),
            (i = t("<a>", {
              id: "sbSelector_" + c.uid,
              href: "#",
              class: c.settings.classSelector,
              click: function (n) {
                n.preventDefault(), f.apply(t(this), []);
                var a = t(this).attr("id").split("_")[1];
                l._state[a] ? l._closeSelectbox(e) : l._openSelectbox(e);
              },
            })),
            (o = t("<a>", {
              id: "sbToggle_" + c.uid,
              href: "#",
              class: c.settings.classToggle,
              click: function (n) {
                n.preventDefault(), f.apply(t(this), []);
                var a = t(this).attr("id").split("_")[1];
                l._state[a] ? l._closeSelectbox(e) : l._openSelectbox(e);
              },
            })).appendTo(a),
            (s = t("<ul>", {
              id: "sbOptions_" + c.uid,
              class: c.settings.classOptions,
              css: {
                display: "none",
              },
            })),
            r.children().each(function (e) {
              var n,
                a = t(this),
                i = {};
              a.is("option")
                ? m(a)
                : a.is("optgroup") &&
                  ((n = t("<li>")),
                  t("<span>", {
                    text: a.attr("label"),
                  })
                    .addClass(c.settings.classGroup)
                    .appendTo(n),
                  n.appendTo(s),
                  a.is(":disabled") && (i.disabled = !0),
                  (i.sub = !0),
                  m(a.find("option"), i));
            }),
            d || i.text(u.first().text()),
            t.data(e, "selectbox", c),
            a
              .data("uid", c.uid)
              .bind("keydown.sb", function (e) {
                var n = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0,
                  a = t(this),
                  i = a.data("uid"),
                  o = a.siblings("select[sb='" + i + "']").data("selectbox"),
                  s = a.siblings(["select[sb='", i, "']"].join("")).get(0),
                  r = a.find("ul").find("a." + o.settings.classFocus);
                switch (n) {
                  case 37:
                  case 38:
                    r.length > 0 &&
                      (t("a", a).removeClass(o.settings.classFocus),
                      (c = r.parent().prevAll("li:has(a)").eq(0).find("a"))
                        .length > 0 &&
                        (c.addClass(o.settings.classFocus).focus(),
                        t("#sbSelector_" + i).text(c.text())));
                    break;
                  case 39:
                  case 40:
                    var c;
                    t("a", a).removeClass(o.settings.classFocus),
                      (c =
                        r.length > 0
                          ? r.parent().nextAll("li:has(a)").eq(0).find("a")
                          : a.find("ul").find("a").eq(0)).length > 0 &&
                        (c.addClass(o.settings.classFocus).focus(),
                        t("#sbSelector_" + i).text(c.text()));
                    break;
                  case 13:
                    r.length > 0 &&
                      l._changeSelectbox(s, r.attr("rel"), r.text()),
                      l._closeSelectbox(s);
                    break;
                  case 9:
                    s &&
                      (o = l._getInst(s)) &&
                      (r.length > 0 &&
                        l._changeSelectbox(s, r.attr("rel"), r.text()),
                      l._closeSelectbox(s));
                    var d = parseInt(a.attr("tabindex"), 10);
                    e.shiftKey ? d-- : d++,
                      t("*[tabindex='" + d + "']").focus();
                    break;
                  case 27:
                    l._closeSelectbox(s);
                }
                return e.stopPropagation(), !1;
              })
              .delegate("a", "mouseover", function (e) {
                t(this).addClass(c.settings.classFocus);
              })
              .delegate("a", "mouseout", function (e) {
                t(this).removeClass(c.settings.classFocus);
              }),
            i.appendTo(a),
            s.appendTo(a),
            a.insertAfter(r),
            t("html").on("mousedown", function (e) {
              e.stopPropagation(), t("select").selectbox("close");
            }),
            t(
              [
                ".",
                c.settings.classHolder,
                ", .",
                c.settings.classSelector,
              ].join("")
            ).mousedown(function (t) {
              t.stopPropagation();
            });
        },
        _detachSelectbox: function (e) {
          var n = this._getInst(e);
          if (!n) return !1;
          t("#sbHolder_" + n.uid).remove(),
            t.data(e, "selectbox", null),
            t(e).show();
        },
        _changeSelectbox: function (e, n, a) {
          var i,
            o = this._getInst(e);
          o &&
            ((i = this._get(o, "onChange")), t("#sbSelector_" + o.uid).text(a)),
            (n = n.replace(/\'/g, "\\'")),
            t(e)
              .find("option[value='" + n + "']")
              .prop("selected", !0),
            o && i
              ? i.apply(o.input ? o.input[0] : null, [n, o])
              : o && o.input && o.input.trigger("change");
        },
        _enableSelectbox: function (e) {
          var n = this._getInst(e);
          if (!n || !n.isDisabled) return !1;
          t("#sbHolder_" + n.uid).removeClass(n.settings.classHolderDisabled),
            (n.isDisabled = !1),
            t.data(e, "selectbox", n);
        },
        _disableSelectbox: function (e) {
          var n = this._getInst(e);
          if (!n || n.isDisabled) return !1;
          t("#sbHolder_" + n.uid).addClass(n.settings.classHolderDisabled),
            (n.isDisabled = !0),
            t.data(e, "selectbox", n);
        },
        _optionSelectbox: function (e, n, a) {
          var i = this._getInst(e);
          if (!i) return !1;
          (i[n] = a), t.data(e, "selectbox", i);
        },
        _openSelectbox: function (e) {
          var n = this._getInst(e);
          if (n && !n.isOpen && !n.isDisabled) {
            var a = t("#sbOptions_" + n.uid),
              i = parseInt(t(window).height(), 10),
              o = t("#sbHolder_" + n.uid).offset(),
              s = t(window).scrollTop(),
              r = a.prev().height(),
              l = i - (o.top - s) - r / 2,
              c = this._get(n, "onOpen");
            a.css({
              top: r + "px",
              maxHeight: l - r + "px",
            }),
              "fade" === n.settings.effect
                ? a.fadeIn(n.settings.speed)
                : a.slideDown(n.settings.speed),
              t("#sbToggle_" + n.uid).addClass(n.settings.classToggleOpen),
              (this._state[n.uid] = !0),
              (n.isOpen = !0),
              c && c.apply(n.input ? n.input[0] : null, [n]),
              t.data(e, "selectbox", n);
          }
        },
        _closeSelectbox: function (e) {
          var n = this._getInst(e);
          if (n && n.isOpen) {
            var a = this._get(n, "onClose");
            "fade" === n.settings.effect
              ? t("#sbOptions_" + n.uid).fadeOut(n.settings.speed)
              : t("#sbOptions_" + n.uid).slideUp(n.settings.speed),
              t("#sbToggle_" + n.uid).removeClass(n.settings.classToggleOpen),
              (this._state[n.uid] = !1),
              (n.isOpen = !1),
              a && a.apply(n.input ? n.input[0] : null, [n]),
              t.data(e, "selectbox", n);
          }
        },
        _newInst: function (t) {
          return {
            id: t[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
            input: t,
            uid: Math.floor(99999999 * Math.random()),
            isOpen: !1,
            isDisabled: !1,
            settings: {},
          };
        },
        _getInst: function (e) {
          try {
            return t.data(e, "selectbox");
          } catch (t) {
            throw "Missing instance data for this selectbox";
          }
        },
        _get: function (t, e) {
          return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
        },
      }),
        (t.fn.selectbox = function (e) {
          var n = Array.prototype.slice.call(arguments, 1);
          return ("string" == typeof e && "isDisabled" == e) ||
            ("option" == e &&
              2 == arguments.length &&
              "string" == typeof arguments[1])
            ? t.selectbox["_" + e + "Selectbox"].apply(
                t.selectbox,
                [this[0]].concat(n)
              )
            : this.each(function () {
                "string" == typeof e
                  ? t.selectbox["_" + e + "Selectbox"].apply(
                      t.selectbox,
                      [this].concat(n)
                    )
                  : t.selectbox._attachSelectbox(this, e);
              });
        }),
        (t.selectbox = new n()),
        (t.selectbox.version = "0.3");
    })(jQuery);
  },
  404: function (t, e, n) {
    "use strict";
    var a,
      i =
        (a = n(175)) && a.__esModule
          ? a
          : {
              default: a,
            };
    !(function (t, e, n) {
      var a = [],
        o = e.documentElement,
        s = "svg" === o.nodeName.toLowerCase(),
        r = [],
        l = {
          _version: "3.2.0",
          _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0,
          },
          _q: [],
          on: function (t, e) {
            var n = this;
            setTimeout(function () {
              e(n[t]);
            }, 0);
          },
          addTest: function (t, e, n) {
            r.push({
              name: t,
              fn: e,
              options: n,
            });
          },
          addAsyncTest: function (t) {
            r.push({
              name: null,
              fn: t,
            });
          },
        },
        c = function () {};
      function d(t, e) {
        return (void 0 === t ? "undefined" : (0, i.default)(t)) === e;
      }
      (c.prototype = l), (c = new c());
      var u = l._config.usePrefixes
        ? " -webkit- -moz- -o- -ms- ".split(" ")
        : [];
      function p() {
        return "function" != typeof e.createElement
          ? e.createElement(arguments[0])
          : s
          ? e.createElementNS.call(
              e,
              "http://www.w3.org/2000/svg",
              arguments[0]
            )
          : e.createElement.apply(e, arguments);
      }
      l._prefixes = u;
      var f = (l.testStyles = function (t, n, a, i) {
        var r,
          l,
          c,
          d,
          u = "modernizr",
          f = p("div"),
          m = (function () {
            var t = e.body;
            return t || ((t = p(s ? "svg" : "body")).fake = !0), t;
          })();
        if (parseInt(a, 10))
          for (; a--; )
            ((c = p("div")).id = i ? i[a] : u + (a + 1)), f.appendChild(c);
        return (
          ((r = p("style")).type = "text/css"),
          (r.id = "s" + u),
          (m.fake ? m : f).appendChild(r),
          m.appendChild(f),
          r.styleSheet
            ? (r.styleSheet.cssText = t)
            : r.appendChild(e.createTextNode(t)),
          (f.id = u),
          m.fake &&
            ((m.style.background = ""),
            (m.style.overflow = "hidden"),
            (d = o.style.overflow),
            (o.style.overflow = "hidden"),
            o.appendChild(m)),
          (l = n(f, t)),
          m.fake
            ? (m.parentNode.removeChild(m),
              (o.style.overflow = d),
              o.offsetHeight)
            : f.parentNode.removeChild(f),
          !!l
        );
      });
      c.addTest("touchevents", function () {
        var n;
        if (
          "ontouchstart" in t ||
          (t.DocumentTouch && e instanceof DocumentTouch)
        )
          n = !0;
        else {
          var a = [
            "@media (",
            u.join("touch-enabled),("),
            "heartz",
            ")",
            "{#modernizr{top:9px;position:absolute}}",
          ].join("");
          f(a, function (t) {
            n = 9 === t.offsetTop;
          });
        }
        return n;
      }),
        (function () {
          var t, e, n, i, o, s;
          for (var l in r)
            if (r.hasOwnProperty(l)) {
              if (
                ((t = []),
                (e = r[l]).name &&
                  (t.push(e.name.toLowerCase()),
                  e.options && e.options.aliases && e.options.aliases.length))
              )
                for (n = 0; n < e.options.aliases.length; n++)
                  t.push(e.options.aliases[n].toLowerCase());
              for (
                i = d(e.fn, "function") ? e.fn() : e.fn, o = 0;
                o < t.length;
                o++
              )
                1 === (s = t[o].split(".")).length
                  ? (c[s[0]] = i)
                  : (!c[s[0]] ||
                      c[s[0]] instanceof Boolean ||
                      (c[s[0]] = new Boolean(c[s[0]])),
                    (c[s[0]][s[1]] = i)),
                  a.push((i ? "" : "no-") + s.join("-"));
            }
        })(),
        (function (t) {
          var e = o.className,
            n = c._config.classPrefix || "";
          if ((s && (e = e.baseVal), c._config.enableJSClass)) {
            var a = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            e = e.replace(a, "$1" + n + "js$2");
          }
          c._config.enableClasses &&
            ((e += " " + n + t.join(" " + n)),
            s ? (o.className.baseVal = e) : (o.className = e));
        })(a),
        delete l.addTest,
        delete l.addAsyncTest;
      for (var m = 0; m < c._q.length; m++) c._q[m]();
      t.Modernizr = c;
    })(window, document);
  },
  430: function (t, e, n) {
    "use strict";
    var a,
      i =
        (a = n(175)) && a.__esModule
          ? a
          : {
              default: a,
            },
      o = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return (e.default = t), e;
      })(n(549));
    !(function (t) {
      var e = function (e, n) {
        (this.$self = e), (this.settings = t.extend(t.fn.donutpie.defaults, n));
      };
      (e.prototype.display = function () {
        var t = this.settings.radius / 2;
        (this.svg = o
          .select(this.$self[0])
          .append("svg")
          .attr("width", 2 * t)
          .attr("height", 2 * t)
          .append("g")
          .attr("class", "slices")
          .attr("transform", "translate(" + t + "," + t + ")")),
          (this.pie = o
            .pie()
            .sort(null)
            .value(function (t) {
              return t.hvalue;
            })),
          (this.arc = o
            .arc()
            .innerRadius(t * this.settings.thickness)
            .outerRadius(0.8 * t));
      }),
        (e.prototype.update = function (t) {
          this.svg
            .selectAll("arcs")
            .data(this.pie(t))
            .enter()
            .append("path")
            .attr("d", this.arc)
            .attr("fill", function (t) {
              return t.data.color;
            });
          var e = this.svg.append("text");
          e
            .append("tspan")
            .attr("x", 0)
            .attr("text-anchor", "middle")
            .attr("class", "donut-line1")
            .attr("dy", 0)
            .text(this.settings.line1),
            e
              .append("tspan")
              .attr("x", 0)
              .attr("text-anchor", "middle")
              .attr("class", "donut-line2")
              .attr("dy", 20)
              .text(this.settings.line2);
        }),
        (t.fn.donutpie = function (n) {
          var a = t(this),
            o = a.data("donutpie");
          if (!o) {
            var s =
              "object" == (void 0 === n ? "undefined" : (0, i.default)(n)) && n;
            (o = new e(a, s)), a.data("donutpie", o);
          }
          "string" == typeof n && t.fn.donutpie.methods[n]
            ? o[n].apply(o, Array.prototype.slice.call(arguments, 1))
            : "object" !== (void 0 === n ? "undefined" : (0, i.default)(n)) && n
            ? t.error("Method " + n + " does not exist in DonutPie")
            : o.display.apply(o, n);
        }),
        (t.fn.donutpie.methods = {
          display: 1,
          update: 1,
        }),
        (t.fn.donutpie.defaults = {
          radius: 240,
          thickness: 0.4,
          tooltip: !0,
          tooltipClass: "donut-pie-tooltip-bubble",
          line1: "",
          line2: "",
        });
    })(jQuery);
  },
  431: function (t, e, n) {
    "use strict";
    $.fn.jobSettingsEdit = function (t) {
      return this.each(function (e) {
        var n = $(this),
          a = n.text();
        n.css("position", "relative"),
          n.html(
            '<span id="efv-' +
              e +
              '">' +
              a +
              '</span><div id="ef-' +
              e +
              '" class="ef" style="left:' +
              (n.width() / 2 - 110) +
              'px"><input id="efi-' +
              e +
              '" type="text" value="' +
              a +
              '"><button id="efbc-' +
              e +
              '" class="btn btn-warning">Cancel</button><button id="efbs-' +
              e +
              '" class="btn btn-secondary">Save</button></div>'
          ),
          $("#efi-" + e).on("click", function (t) {
            t.stopPropagation();
          }),
          $("#efbc-" + e).on("click", function (t) {
            t.stopPropagation(), $("#ef-" + e).hide();
          }),
          $("#efbs-" + e).on("click", function (a) {
            var i = this;
            a.stopPropagation(), $(i).prop("disabled", !0);
            var o = n.data("url"),
              s = $("#efi-" + e).val();
            $.post(
              o,
              {
                Id: t.jobId,
                NewValue: s,
                csrf_token: csrf_token,
              },
              function (t) {
                t.ok
                  ? ($("#efv-" + e).text(t.value), $("#ef-" + e).hide())
                  : ($.bannerAlert(t.alert), $.scrollToTop()),
                  $(i).prop("disabled", !1);
              }
            );
          }),
          n.on("click", function (t) {
            t.stopPropagation();
            var n = $("#ef-" + e);
            if (($(".ef").hide(), n.show(), "block" == n.css("display"))) {
              var a = $("#efi-" + e),
                i = a.val().length;
              a.focus(), a[0].setSelectionRange(i, i);
              var o = isOutOfViewport(n[0]);
              if ((o.left && n.css("left", 0), o.right)) {
                var s = n[0].getBoundingClientRect();
                n.css(
                  "left",
                  n.position().left -
                    (s.right -
                      (window.innerWidth ||
                        document.documentElement.clientWidth)) -
                    20
                );
              }
            }
          }),
          $(document).on("click", function () {
            $(".ef").hide();
          });
      });
    };
  },
  432: function (t, e, n) {
    "use strict";
    $.fn.jobPositionsAdd = function (t) {
      return this.each(function (e) {
        var n = $(this);
        n.css("position", "relative"),
          n.append(
            '<div id="pa-' +
              e +
              '" class="ef" style="width:230px;left:' +
              (n.width() / 2 - 110) +
              'px;"><input class="ml-1" id="pai-' +
              e +
              '" type="text" value="0"><button id="pabc-' +
              e +
              '" class="btn btn-warning">Cancel</button><button id="pabs-' +
              e +
              '" class="btn btn-secondary">Add</button></div>'
          ),
          $("#pai-" + e).on("click", function (t) {
            t.preventDefault(), t.stopPropagation();
          }),
          $("#pabc-" + e).on("click", function (t) {
            t.preventDefault(), t.stopPropagation(), $("#pa-" + e).hide();
          }),
          $("#pabs-" + e).on("click", function (a) {
            var i = this;
            a.preventDefault(), a.stopPropagation(), $(i).prop("disabled", !0);
            var o = n.data("url") || n.attr("href"),
              s = $("#pai-" + e).val();
            $.post(
              o,
              {
                Id: t.jobId,
                Positions: s,
                csrf_token: csrf_token,
              },
              function (t) {
                t.ok
                  ? location.reload(!0)
                  : ($.bannerAlert(t.alert), $(i).prop("disabled", !1));
              }
            );
          }),
          n.on("click", function (t) {
            t.preventDefault(), t.stopPropagation();
            var n = $("#pa-" + e);
            if (($(".ef").hide(), n.show(), "block" == n.css("display"))) {
              var a = $("#pai-" + e),
                i = a.val().length;
              a.focus(), a[0].setSelectionRange(i, i);
              var o = isOutOfViewport(n[0]);
              if ((o.left && n[0].css("left", 0), o.right)) {
                var s = n[0].getBoundingClientRect();
                n[0].css(
                  "left",
                  n[0].position().left -
                    (s.right -
                      (window.innerWidth ||
                        document.documentElement.clientWidth)) -
                    20
                );
              }
            }
          }),
          $(document).on("click", function () {
            $(".ef").hide();
          });
      });
    };
  },
  433: function (t, e, n) {
    "use strict";
    $.fn.jobTargetingEdit = function (t) {
      var e = $(this);
      e.css("position", "relative"),
        $(document).on("click", "#tebs", function (n) {
          var a = this;
          n.preventDefault(), n.stopPropagation(), $(a).prop("disabled", !0);
          var i = e.data("url") || e.attr("href"),
            o = [];
          $.each($("input[name='country']:checked"), function () {
            o.push($(this).val());
          }),
            $.post(
              i,
              {
                Id: t.jobId,
                Countries: o.join(","),
                csrf_token: csrf_token,
              },
              function (t) {
                t.ok
                  ? location.reload()
                  : ($.bannerAlert(t.alert), $(a).prop("disabled", !1));
              }
            );
        }),
        $(document).on("click", "#jte", function (t) {
          t.stopPropagation();
        }),
        e.on("click", function (n) {
          n.preventDefault(), n.stopPropagation();
          var a = e.data("url") || e.attr("href");
          $(".ef").hide(),
            $.get(
              a,
              {
                Id: t.jobId,
              },
              function (t) {
                t.ok
                  ? ($("#jte").html(t.box), $("#jte").show())
                  : alert(t.alert);
              }
            );
        }),
        $(document).on("click", function () {
          $(".ef").hide();
        });
    };
  },
  434: function (t, e, n) {
    "use strict";
    $.fn.cintProfilers = function () {
      return this.each(function () {
        var t = $(this),
          e = t.find("ul"),
          n = [];
        t.find(".answer-selection").on("click", function () {
          t.find("ul").toggle();
        }),
          t.find(".answer-btn").on("click", function () {
            if (
              (e.hasClass("single_punch") &&
                (t.find("input").val($(this).data("value")),
                t.find(".answer-selection").text($(this).text()),
                e.hide()),
              e.hasClass("multi_punch"))
            ) {
              var a = $(this).data("value");
              if (
                ($(this).hasClass("selected")
                  ? (n = n.filter(function (t) {
                      return t !== a;
                    }))
                  : n.push(a),
                t.find("input").val(n.join(",")),
                $(this).toggleClass("selected"),
                n.length)
              ) {
                var i = n.length > 1 ? " + " + (n.length - 1) + " more" : "",
                  o = t.find("button.selected:first").text();
                t.find(".answer-selection").text("" + o + i);
              } else t.find(".answer-selection").text("Choose your answer(s)");
            }
          });
      });
    };
  },
  435: function (t, e, n) {
    "use strict";
    !(function (t) {
      t.fn.zawpFixedNav = function (e) {
        var n = t.extend(
          {
            offset: 0,
            wrapperClass: "navbar-wrapper",
            fixedClass: "fixed-top",
          },
          e
        );
        t(this).each(function (a, i) {
          var o,
            s,
            r,
            l,
            c,
            d = t(this),
            u = t(window),
            p = d.data("offset"),
            f = e.wrapperClass || d.data("wrapper-class"),
            m = e.fixedClass || d.data("fixed-class");
          function g() {
            function e() {
              t(this).scrollTop() >= o
                ? (d.addClass(m),
                  d.css({
                    position: "fixed",
                    top: p,
                  }))
                : (d.removeClass(m),
                  d.css({
                    position: "",
                    top: "",
                  }));
            }
            d.parent("." + f).length ||
              d.wrapAll('<div class="' + f + '"></div>'),
              (s = d.closest("." + f)),
              (o = s.offset().top - p),
              s.css({
                minHeight: d.outerHeight(),
              }),
              e(),
              u.scroll(e);
          }
          p || (p = n.offset),
            f || (f = n.wrapperClass),
            m || (m = n.fixedClass),
            d.length > 0 &&
              (u.ready(g).resize(
                ((r = g),
                200,
                function () {
                  var t = this,
                    e = arguments,
                    n = function () {
                      (c = null), r.apply(t, e);
                    },
                    a = l;
                  clearTimeout(c), (c = setTimeout(n, 200)), a && r.apply(t, e);
                })
              ),
              u.on("load", g));
        });
      };
    })(jQuery);
  },
  436: function (t, e, n) {
    "use strict";
    !(function (t) {
      t.fn.jqueryMaxChars = function (e) {
        var n = t.extend(
          {
            chars: 5,
            text: "load-more",
            counterClass: "max-chars-counter",
          },
          e
        );
        t(this).each(function (e, a) {
          var i = t(this),
            o = i.data("max-chars"),
            s = i.data("max-chars-text"),
            r = i.data("max-chars-counter-class");
          o || (o = n.chars), s || (s = n.text), r || (r = n.counterClass);
          var l = t('<p class="' + r + '"></p>');
          i.next("." + r).length || l.insertAfter(i),
            l.text(s),
            l.html(function (t, e) {
              return e.replaceAll(
                "{chars}",
                '<span class="' +
                  r +
                  '__chars">' +
                  (o - i.val().length) +
                  "</span>"
              );
            }),
            i.attr("maxlength") || i.attr("maxlength", o),
            i.on("keyup paste blur", function (e) {
              var n = o - t(this).val().length;
              l.find("." + r + "__chars").text(n);
            });
        });
      };
    })(jQuery);
  },
  437: function (t, e, n) {
    "use strict";
    !(function (t) {
      t.fn.jqueryStarRating = function (e) {
        var n = t.extend(
          {
            starClass: "star-rating__item",
            inputClass: "star-rating__input",
            counterClass: "star-rating__count",
          },
          e
        );
        t(this).each(function (e, a) {
          var i = t(this),
            o = i.data("max-chars-star-class"),
            s = i.data("max-chars-input-class"),
            r = i.data("max-chars-counter-class");
          o || (o = n.starClass),
            s || (s = n.inputClass),
            r || (r = n.counterClass);
          var l = i.find("." + o),
            c = i.find("." + s),
            d = i.find("." + r);
          l.on("mouseenter", function (e) {
            var n = t(this),
              a = n.add(n.prevAll());
            a
              .removeClass("star-rating__item--hovered-danger")
              .removeClass("star-rating__item--hovered-warning")
              .removeClass("star-rating__item--hovered-success"),
              a.length <= 1
                ? a.addClass("star-rating__item--hovered-danger")
                : 2 == a.length
                ? a.addClass("star-rating__item--hovered-warning")
                : a.addClass("star-rating__item--hovered-success"),
              n
                .nextAll()
                .removeClass("star-rating__item--hovered-danger")
                .removeClass("star-rating__item--hovered-warning")
                .removeClass("star-rating__item--hovered-success")
                .addClass("star-rating__item--hovered-notfilled"),
              d.text(a.length);
          }),
            l.on("click", function (e) {
              var n = t(this),
                a = n.add(n.prevAll()),
                i = n.nextAll();
              a
                .removeClass("star-rating__item--filled-danger")
                .removeClass("star-rating__item--filled-warning")
                .removeClass("star-rating__item--filled-success"),
                a.length <= 1
                  ? a.addClass("star-rating__item--filled-danger")
                  : 2 == a.length
                  ? a.addClass("star-rating__item--filled-warning")
                  : a.addClass("star-rating__item--filled-success"),
                i
                  .removeClass("star-rating__item--filled-danger")
                  .removeClass("star-rating__item--filled-warning")
                  .removeClass("star-rating__item--filled-success"),
                d.text(a.length),
                c.val(a.length).trigger("change");
            }),
            l.on("mouseleave", function (e) {
              var n = t(this);
              n
                .add(n.siblings())
                .removeClass("star-rating__item--hovered-danger")
                .removeClass("star-rating__item--hovered-warning")
                .removeClass("star-rating__item--hovered-success")
                .removeClass("star-rating__item--hovered-notfilled"),
                d.text(
                  i.find(
                    ".star-rating__item--filled-success, .star-rating__item--filled-warning, .star-rating__item--filled-danger"
                  ).length
                );
            });
        });
      };
    })(jQuery);
  },
  438: function (t, e, n) {
    "use strict";
    (window.insertParamToUrl = function (t, e) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = document.location.search,
        o = "" === i ? [] : i.substring(1).split("&");
      if (t) {
        (t = encodeURI(t)), (e = e ? encodeURI(e) : "");
        for (var s, r = o.length; r--; )
          if ((s = o[r].split("="))[0] == t) {
            (s[1] = e), (o[r] = s.join("="));
            break;
          }
        r < 0 && (o[o.length] = [t, e].join("="));
      }
      o = o.filter(function (t) {
        return "" !== t.split("=")[1];
      });
      var l = window.location.origin + (n || window.location.pathname);
      return (
        (l += o.length ? "?" + o.join("&") : ""),
        (l += window.location.hash),
        a && window.history.replaceState(null, null, l),
        l
      );
    }),
      (window.parse_query_string = function (t) {
        for (var e = t.split("&"), n = {}, a = 0; a < e.length; a++) {
          var i = e[a].split("="),
            o = decodeURIComponent(i[0]),
            s = decodeURIComponent(i[1]);
          if (void 0 === n[o]) n[o] = decodeURIComponent(s);
          else if ("string" == typeof n[o]) {
            var r = [n[o], decodeURIComponent(s)];
            n[o] = r;
          } else n[o].push(decodeURIComponent(s));
        }
        return n;
      }),
      (window.getUrlParameter = function (t, e) {
        var n,
          a,
          i = (
            e || decodeURIComponent(window.location.search.substring(1))
          ).split("&");
        for (a = 0; a < i.length; a++)
          if ((n = i[a].split("="))[0] === t) return void 0 === n[1] || n[1];
      });
  },
  439: function (t, e, n) {
    "use strict";
    window.copyToClipboard = function (t) {
      var e = document.createElement("textarea");
      (e.value = t),
        e.setAttribute("readonly", ""),
        (e.style.position = "absolute"),
        (e.style.left = "-9999px"),
        document.body.appendChild(e);
      var n =
        document.getSelection().rangeCount > 0 &&
        document.getSelection().getRangeAt(0);
      e.select(),
        document.execCommand("copy"),
        document.body.removeChild(e),
        n &&
          (document.getSelection().removeAllRanges(),
          document.getSelection().addRange(n));
    };
  },
  440: function (t, e, n) {
    "use strict";
    (window.setCookie = function (t, e, n) {
      var a = "";
      if (n) {
        var i = new Date();
        i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3),
          (a = "; expires=" + i.toUTCString());
      }
      document.cookie = t + "=" + (e || "") + a + "; path=/";
    }),
      (window.getCookie = function (t) {
        for (
          var e = t + "=", n = document.cookie.split(";"), a = 0;
          a < n.length;
          a++
        ) {
          for (var i = n[a]; " " == i.charAt(0); ) i = i.substring(1, i.length);
          if (0 == i.indexOf(e)) return i.substring(e.length, i.length);
        }
        return null;
      }),
      (window.eraseCookie = function (t) {
        document.cookie = t + "=; Max-Age=-99999999;";
      });
  },
  441: function (t, e, n) {
    "use strict";
    jQuery.fn.inputFilter = function (t) {
      return this.on(
        "input keydown keyup mousedown mouseup select contextmenu drop",
        function () {
          t(this.value)
            ? ((this.oldValue = this.value),
              (this.oldSelectionStart = this.selectionStart),
              (this.oldSelectionEnd = this.selectionEnd))
            : this.hasOwnProperty("oldValue")
            ? ((this.value = this.oldValue),
              this.setSelectionRange(
                this.oldSelectionStart,
                this.oldSelectionEnd
              ))
            : (this.value = "");
        }
      );
    };
  },
  442: function (t, e, n) {
    "use strict";
    var a, i, o, s;
    (s = n(175)) && s.__esModule,
      (i = [n(40)]),
      void 0 ===
        (o =
          "function" ==
          typeof (a = function (t) {
            function e(e, n, a) {
              "string" == typeof a &&
                (a = {
                  className: a,
                }),
                (this.options = _(w, t.isPlainObject(a) ? a : {})),
                this.loadHTML(),
                (this.wrapper = t(f.html)),
                this.options.clickToHide &&
                  this.wrapper.addClass(i + "-hidable"),
                this.wrapper.data(i, this),
                (this.arrow = this.wrapper.find("." + i + "-arrow")),
                (this.container = this.wrapper.find("." + i + "-container")),
                this.container.append(this.userContainer),
                e &&
                  e.length &&
                  ((this.elementType = e.attr("type")),
                  (this.originalElement = e),
                  (this.elem = k(e)),
                  this.elem.data(i, this),
                  this.elem.before(this.wrapper)),
                this.container.hide(),
                this.run(n);
            }
            var n =
                [].indexOf ||
                function (t) {
                  for (var e = 0, n = this.length; e < n; e++)
                    if (e in this && this[e] === t) return e;
                  return -1;
                },
              a = "notify",
              i = a + "js",
              o = a + "!blank",
              s = {
                t: "top",
                m: "middle",
                b: "bottom",
                l: "left",
                c: "center",
                r: "right",
              },
              r = ["l", "c", "r"],
              l = ["t", "m", "b"],
              c = ["t", "b", "l", "r"],
              d = {
                t: "b",
                m: null,
                b: "t",
                l: "r",
                c: null,
                r: "l",
              },
              u = function (e) {
                var n;
                return (
                  (n = []),
                  t.each(e.split(/\W+/), function (t, e) {
                    var a;
                    if (((a = e.toLowerCase().charAt(0)), s[a]))
                      return n.push(a);
                  }),
                  n
                );
              },
              p = {},
              f = {
                name: "core",
                html:
                  '<div class="' +
                  i +
                  '-wrapper">\n\t<div class="' +
                  i +
                  '-arrow"></div>\n\t<div class="' +
                  i +
                  '-container"></div>\n</div>',
                css:
                  "." +
                  i +
                  "-corner {\n\tposition: fixed;\n\tmargin: 5px;\n\tz-index: 1050;\n}\n\n." +
                  i +
                  "-corner ." +
                  i +
                  "-wrapper,\n." +
                  i +
                  "-corner ." +
                  i +
                  "-container {\n\tposition: relative;\n\tdisplay: block;\n\theight: inherit;\n\twidth: inherit;\n\tmargin: 3px;\n}\n\n." +
                  i +
                  "-wrapper {\n\tz-index: 1;\n\tposition: absolute;\n\tdisplay: inline-block;\n\theight: 0;\n\twidth: 0;\n}\n\n." +
                  i +
                  "-container {\n\tdisplay: none;\n\tz-index: 1;\n\tposition: absolute;\n}\n\n." +
                  i +
                  "-hidable {\n\tcursor: pointer;\n}\n\n[data-notify-text],[data-notify-html] {\n\tposition: relative;\n}\n\n." +
                  i +
                  "-arrow {\n\tposition: absolute;\n\tz-index: 2;\n\twidth: 0;\n\theight: 0;\n}",
              },
              m = {
                "border-radius": ["-webkit-", "-moz-"],
              },
              g = function (e, n) {
                if (!e) throw "Missing Style name";
                if (!n) throw "Missing Style definition";
                if (!n.html) throw "Missing Style HTML";
                var a = p[e];
                a && a.cssElem && (window.console, p[e].cssElem.remove()),
                  (n.name = e),
                  (p[e] = n);
                var o = "";
                n.classes &&
                  t.each(n.classes, function (e, a) {
                    return (
                      (o += "." + i + "-" + n.name + "-" + e + " {\n"),
                      t.each(a, function (e, n) {
                        return (
                          m[e] &&
                            t.each(m[e], function (t, a) {
                              return (o += "\t" + a + e + ": " + n + ";\n");
                            }),
                          (o += "\t" + e + ": " + n + ";\n")
                        );
                      }),
                      (o += "}\n")
                    );
                  }),
                  n.css && (o += "/* styles for " + n.name + " */\n" + n.css),
                  o &&
                    ((n.cssElem = h(o)),
                    n.cssElem.attr("id", "notify-" + n.name));
                var s = {},
                  r = t(n.html);
                b("html", r, s), b("text", r, s), (n.fields = s);
              },
              h = function (e) {
                var n;
                (n = y("style")).attr("type", "text/css"), t("head").append(n);
                try {
                  n.html(e);
                } catch (t) {
                  n[0].styleSheet.cssText = e;
                }
                return n;
              },
              b = function (e, n, a) {
                var i;
                return (
                  "html" !== e && (e = "text"),
                  v(n, "[" + (i = "data-notify-" + e) + "]").each(function () {
                    var n;
                    (n = t(this).attr(i)) || (n = o), (a[n] = e);
                  })
                );
              },
              v = function (t, e) {
                return t.is(e) ? t : t.find(e);
              },
              w = {
                clickToHide: !0,
                autoHide: !0,
                autoHideDelay: 5e3,
                arrowShow: !0,
                arrowSize: 5,
                breakNewLines: !0,
                elementPosition: "bottom",
                globalPosition: "top right",
                style: "bootstrap",
                className: "error",
                showAnimation: "slideDown",
                showDuration: 400,
                hideAnimation: "slideUp",
                hideDuration: 200,
                gap: 5,
              },
              _ = function (e, n) {
                var a;
                return (
                  ((a = function () {}).prototype = e), t.extend(!0, new a(), n)
                );
              },
              y = function (e) {
                return t("<" + e + "></" + e + ">");
              },
              $ = {},
              k = function (e) {
                var n;
                return (
                  e.is("[type=radio]") &&
                    ((n = e
                      .parents("form:first")
                      .find("[type=radio]")
                      .filter(function (n, a) {
                        return t(a).attr("name") === e.attr("name");
                      })),
                    (e = n.first())),
                  e
                );
              },
              x = function (t, e, n) {
                var a;
                if ("string" == typeof n) n = parseInt(n, 10);
                else if ("number" != typeof n) return;
                if (!isNaN(n))
                  return (
                    void 0 !== t[(a = s[d[e.charAt(0)]])] &&
                      ((e = s[a.charAt(0)]), (n = -n)),
                    void 0 === t[e] ? (t[e] = n) : (t[e] += n),
                    null
                  );
              },
              C = function (t, e, n) {
                if ("l" === t || "t" === t) return 0;
                if ("c" === t || "m" === t) return n / 2 - e / 2;
                if ("r" === t || "b" === t) return n - e;
                throw "Invalid alignment";
              },
              S = function t(e) {
                return (t.e = t.e || y("div")).text(e).html();
              };
            (e.prototype.loadHTML = function () {
              var e;
              (e = this.getStyle()),
                (this.userContainer = t(e.html)),
                (this.userFields = e.fields);
            }),
              (e.prototype.show = function (t, e) {
                var n, a, i, o, s;
                if (
                  ((a = (function (n) {
                    return function () {
                      if ((!t && !n.elem && n.destroy(), e)) return e();
                    };
                  })(this)),
                  (s = this.container.parent().parents(":hidden").length > 0),
                  (i = this.container.add(this.arrow)),
                  (n = []),
                  s && t)
                )
                  o = "show";
                else if (s && !t) o = "hide";
                else if (!s && t)
                  (o = this.options.showAnimation),
                    n.push(this.options.showDuration);
                else {
                  if (s || t) return a();
                  (o = this.options.hideAnimation),
                    n.push(this.options.hideDuration);
                }
                return n.push(a), i[o].apply(i, n);
              }),
              (e.prototype.setGlobalPosition = function () {
                var e = this.getPosition(),
                  n = e[0],
                  a = e[1],
                  o = s[n],
                  r = s[a],
                  l = n + "|" + a,
                  c = $[l];
                if (!c || !document.body.contains(c[0])) {
                  c = $[l] = y("div");
                  var d = {};
                  (d[o] = 0),
                    "middle" === r
                      ? (d.top = "45%")
                      : "center" === r
                      ? (d.left = "45%")
                      : (d[r] = 0),
                    c.css(d).addClass(i + "-corner"),
                    t("body").append(c);
                }
                return c.prepend(this.wrapper);
              }),
              (e.prototype.setElementPosition = function () {
                var e,
                  a,
                  i,
                  o,
                  u,
                  p,
                  f,
                  m,
                  g,
                  h,
                  b,
                  v,
                  w,
                  _,
                  y,
                  $,
                  k,
                  S,
                  D,
                  T,
                  B,
                  A,
                  P,
                  j,
                  E,
                  F,
                  O,
                  q;
                for (
                  P = (F = this.getPosition())[0],
                    A = F[1],
                    F[2],
                    b = this.elem.position(),
                    m = this.elem.outerHeight(),
                    v = this.elem.outerWidth(),
                    g = this.elem.innerHeight(),
                    h = this.elem.innerWidth(),
                    q = this.wrapper.position(),
                    u = this.container.height(),
                    p = this.container.width(),
                    S = s[P],
                    (f = {})[(B = s[(T = d[P])])] =
                      "b" === P ? m : "r" === P ? v : 0,
                    x(f, "top", b.top - q.top),
                    x(f, "left", b.left - q.left),
                    _ = 0,
                    $ = (O = ["top", "left"]).length;
                  _ < $;
                  _++
                )
                  (j = O[_]),
                    (D = parseInt(this.elem.css("margin-" + j), 10)) &&
                      x(f, j, D);
                if (
                  ((w = Math.max(
                    0,
                    this.options.gap - (this.options.arrowShow ? i : 0)
                  )),
                  x(f, B, w),
                  this.options.arrowShow)
                ) {
                  for (
                    i = this.options.arrowSize,
                      a = t.extend({}, f),
                      e =
                        this.userContainer.css("border-color") ||
                        this.userContainer.css("border-top-color") ||
                        this.userContainer.css("background-color") ||
                        "white",
                      y = 0,
                      k = c.length;
                    y < k;
                    y++
                  )
                    (E = s[(j = c[y])]),
                      j !== T &&
                        ((o = E === S ? e : "transparent"),
                        (a["border-" + E] = i + "px solid " + o));
                  x(f, s[T], i), n.call(c, A) >= 0 && x(a, s[A], 2 * i);
                } else this.arrow.hide();
                if (
                  (n.call(l, P) >= 0
                    ? (x(f, "left", C(A, p, v)), a && x(a, "left", C(A, i, h)))
                    : n.call(r, P) >= 0 &&
                      (x(f, "top", C(A, u, m)), a && x(a, "top", C(A, i, g))),
                  this.container.is(":visible") && (f.display = "block"),
                  this.container.removeAttr("style").css(f),
                  a)
                )
                  return this.arrow.removeAttr("style").css(a);
              }),
              (e.prototype.getPosition = function () {
                var t, e, a, i, o, s, d, p;
                if (
                  ((p =
                    this.options.position ||
                    (this.elem
                      ? this.options.elementPosition
                      : this.options.globalPosition)),
                  0 === (t = u(p)).length && (t[0] = "b"),
                  (e = t[0]),
                  n.call(c, e) < 0)
                )
                  throw "Must be one of [" + c + "]";
                return (
                  (1 === t.length ||
                    ((a = t[0]),
                    n.call(l, a) >= 0 && ((i = t[1]), n.call(r, i) < 0)) ||
                    ((o = t[0]),
                    n.call(r, o) >= 0 && ((s = t[1]), n.call(l, s) < 0))) &&
                    (t[1] = ((d = t[0]), n.call(r, d) >= 0 ? "m" : "l")),
                  2 === t.length && (t[2] = t[1]),
                  t
                );
              }),
              (e.prototype.getStyle = function (t) {
                var e;
                if (
                  (t || (t = this.options.style),
                  t || (t = "default"),
                  !(e = p[t]))
                )
                  throw "Missing style: " + t;
                return e;
              }),
              (e.prototype.updateClasses = function () {
                var e, n;
                return (
                  (e = ["base"]),
                  t.isArray(this.options.className)
                    ? (e = e.concat(this.options.className))
                    : this.options.className && e.push(this.options.className),
                  (n = this.getStyle()),
                  (e = t
                    .map(e, function (t) {
                      return i + "-" + n.name + "-" + t;
                    })
                    .join(" ")),
                  this.userContainer.attr("class", e)
                );
              }),
              (e.prototype.run = function (e, n) {
                var a, i, s, r, l;
                if (
                  (t.isPlainObject(n)
                    ? t.extend(this.options, n)
                    : "string" === t.type(n) && (this.options.className = n),
                  !this.container || e)
                ) {
                  if (this.container || e) {
                    for (s in ((i = {}),
                    t.isPlainObject(e) ? (i = e) : (i[o] = e),
                    i))
                      (a = i[s]),
                        (r = this.userFields[s]) &&
                          ("text" === r &&
                            ((a = S(a)),
                            this.options.breakNewLines &&
                              (a = a.replace(/\n/g, "<br/>"))),
                          (l = s === o ? "" : "=" + s),
                          v(
                            this.userContainer,
                            "[data-notify-" + r + l + "]"
                          ).html(a));
                    this.updateClasses(),
                      this.elem
                        ? this.setElementPosition()
                        : this.setGlobalPosition(),
                      this.show(!0),
                      this.options.autoHide &&
                        (clearTimeout(this.autohideTimer),
                        (this.autohideTimer = setTimeout(
                          this.show.bind(this, !1),
                          this.options.autoHideDelay
                        )));
                  }
                } else this.show(!1);
              }),
              (e.prototype.destroy = function () {
                this.wrapper.data(i, null), this.wrapper.remove();
              }),
              (t[a] = function (n, i, o) {
                return (
                  (n && n.nodeName) || n.jquery
                    ? t(n)[a](i, o)
                    : ((o = i), new e(null, (i = n), o)),
                  n
                );
              }),
              (t.fn[a] = function (n, a) {
                return (
                  t(this).each(function () {
                    var o = k(t(this)).data(i);
                    o && o.destroy(), new e(t(this), n, a);
                  }),
                  this
                );
              }),
              t.extend(t[a], {
                defaults: function (e) {
                  return t.extend(w, e);
                },
                addStyle: g,
                removeStyle: function (t) {
                  if (!t) throw "Missing Style name";
                  p[t] && delete p[t];
                },
                pluginOptions: w,
                getStyle: function (t) {
                  return p[t];
                },
                insertCSS: h,
              }),
              g("bootstrap", {
                html: "<div>\n<span data-notify-text></span>\n</div>",
                classes: {
                  base: {
                    "font-weight": "bold",
                    padding: "8px 15px 8px 14px",
                    "text-shadow": "0 1px 0 rgba(255, 255, 255, 0.5)",
                    "background-color": "#fcf8e3",
                    border: "1px solid #fbeed5",
                    "border-radius": "4px",
                    "white-space": "nowrap",
                    "padding-left": "25px",
                    "background-repeat": "no-repeat",
                    "background-position": "3px 7px",
                  },
                  error: {
                    color: "#B94A48",
                    "background-color": "#F2DEDE",
                    "border-color": "#EED3D7",
                    "background-image":
                      "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtRJREFUeNqkVc1u00AQHq+dOD+0poIQfkIjalW0SEGqRMuRnHos3DjwAH0ArlyQeANOOSMeAA5VjyBxKBQhgSpVUKKQNGloFdw4cWw2jtfMOna6JOUArDTazXi/b3dm55socPqQhFka++aHBsI8GsopRJERNFlY88FCEk9Yiwf8RhgRyaHFQpPHCDmZG5oX2ui2yilkcTT1AcDsbYC1NMAyOi7zTX2Agx7A9luAl88BauiiQ/cJaZQfIpAlngDcvZZMrl8vFPK5+XktrWlx3/ehZ5r9+t6e+WVnp1pxnNIjgBe4/6dAysQc8dsmHwPcW9C0h3fW1hans1ltwJhy0GxK7XZbUlMp5Ww2eyan6+ft/f2FAqXGK4CvQk5HueFz7D6GOZtIrK+srupdx1GRBBqNBtzc2AiMr7nPplRdKhb1q6q6zjFhrklEFOUutoQ50xcX86ZlqaZpQrfbBdu2R6/G19zX6XSgh6RX5ubyHCM8nqSID6ICrGiZjGYYxojEsiw4PDwMSL5VKsC8Yf4VRYFzMzMaxwjlJSlCyAQ9l0CW44PBADzXhe7xMdi9HtTrdYjFYkDQL0cn4Xdq2/EAE+InCnvADTf2eah4Sx9vExQjkqXT6aAERICMewd/UAp/IeYANM2joxt+q5VI+ieq2i0Wg3l6DNzHwTERPgo1ko7XBXj3vdlsT2F+UuhIhYkp7u7CarkcrFOCtR3H5JiwbAIeImjT/YQKKBtGjRFCU5IUgFRe7fF4cCNVIPMYo3VKqxwjyNAXNepuopyqnld602qVsfRpEkkz+GFL1wPj6ySXBpJtWVa5xlhpcyhBNwpZHmtX8AGgfIExo0ZpzkWVTBGiXCSEaHh62/PoR0p/vHaczxXGnj4bSo+G78lELU80h1uogBwWLf5YlsPmgDEd4M236xjm+8nm4IuE/9u+/PH2JXZfbwz4zw1WbO+SQPpXfwG/BBgAhCNZiSb/pOQAAAAASUVORK5CYII=)",
                  },
                  success: {
                    color: "#468847",
                    "background-color": "#DFF0D8",
                    "border-color": "#D6E9C6",
                    "background-image":
                      "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAutJREFUeNq0lctPE0Ecx38zu/RFS1EryqtgJFA08YCiMZIAQQ4eRG8eDGdPJiYeTIwHTfwPiAcvXIwXLwoXPaDxkWgQ6islKlJLSQWLUraPLTv7Gme32zoF9KSTfLO7v53vZ3d/M7/fIth+IO6INt2jjoA7bjHCJoAlzCRw59YwHYjBnfMPqAKWQYKjGkfCJqAF0xwZjipQtA3MxeSG87VhOOYegVrUCy7UZM9S6TLIdAamySTclZdYhFhRHloGYg7mgZv1Zzztvgud7V1tbQ2twYA34LJmF4p5dXF1KTufnE+SxeJtuCZNsLDCQU0+RyKTF27Unw101l8e6hns3u0PBalORVVVkcaEKBJDgV3+cGM4tKKmI+ohlIGnygKX00rSBfszz/n2uXv81wd6+rt1orsZCHRdr1Imk2F2Kob3hutSxW8thsd8AXNaln9D7CTfA6O+0UgkMuwVvEFFUbbAcrkcTA8+AtOk8E6KiQiDmMFSDqZItAzEVQviRkdDdaFgPp8HSZKAEAL5Qh7Sq2lIJBJwv2scUqkUnKoZgNhcDKhKg5aH+1IkcouCAdFGAQsuWZYhOjwFHQ96oagWgRoUov1T9kRBEODAwxM2QtEUl+Wp+Ln9VRo6BcMw4ErHRYjH4/B26AlQoQQTRdHWwcd9AH57+UAXddvDD37DmrBBV34WfqiXPl61g+vr6xA9zsGeM9gOdsNXkgpEtTwVvwOklXLKm6+/p5ezwk4B+j6droBs2CsGa/gNs6RIxazl4Tc25mpTgw/apPR1LYlNRFAzgsOxkyXYLIM1V8NMwyAkJSctD1eGVKiq5wWjSPdjmeTkiKvVW4f2YPHWl3GAVq6ymcyCTgovM3FzyRiDe2TaKcEKsLpJvNHjZgPNqEtyi6mZIm4SRFyLMUsONSSdkPeFtY1n0mczoY3BHTLhwPRy9/lzcziCw9ACI+yql0VLzcGAZbYSM5CCSZg1/9oc/nn7+i8N9p/8An4JMADxhH+xHfuiKwAAAABJRU5ErkJggg==)",
                  },
                  info: {
                    color: "#3A87AD",
                    "background-color": "#D9EDF7",
                    "border-color": "#BCE8F1",
                    "background-image":
                      "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYFAhkSsdes/QAAA8dJREFUOMvVlGtMW2UYx//POaWHXg6lLaW0ypAtw1UCgbniNOLcVOLmAjHZolOYlxmTGXVZdAnRfXQm+7SoU4mXaOaiZsEpC9FkiQs6Z6bdCnNYruM6KNBw6YWewzl9z+sHImEWv+vz7XmT95f/+3/+7wP814v+efDOV3/SoX3lHAA+6ODeUFfMfjOWMADgdk+eEKz0pF7aQdMAcOKLLjrcVMVX3xdWN29/GhYP7SvnP0cWfS8caSkfHZsPE9Fgnt02JNutQ0QYHB2dDz9/pKX8QjjuO9xUxd/66HdxTeCHZ3rojQObGQBcuNjfplkD3b19Y/6MrimSaKgSMmpGU5WevmE/swa6Oy73tQHA0Rdr2Mmv/6A1n9w9suQ7097Z9lM4FlTgTDrzZTu4StXVfpiI48rVcUDM5cmEksrFnHxfpTtU/3BFQzCQF/2bYVoNbH7zmItbSoMj40JSzmMyX5qDvriA7QdrIIpA+3cdsMpu0nXI8cV0MtKXCPZev+gCEM1S2NHPvWfP/hL+7FSr3+0p5RBEyhEN5JCKYr8XnASMT0xBNyzQGQeI8fjsGD39RMPk7se2bd5ZtTyoFYXftF6y37gx7NeUtJJOTFlAHDZLDuILU3j3+H5oOrD3yWbIztugaAzgnBKJuBLpGfQrS8wO4FZgV+c1IxaLgWVU0tMLEETCos4xMzEIv9cJXQcyagIwigDGwJgOAtHAwAhisQUjy0ORGERiELgG4iakkzo4MYAxcM5hAMi1WWG1yYCJIcMUaBkVRLdGeSU2995TLWzcUAzONJ7J6FBVBYIggMzmFbvdBV44Corg8vjhzC+EJEl8U1kJtgYrhCzgc/vvTwXKSib1paRFVRVORDAJAsw5FuTaJEhWM2SHB3mOAlhkNxwuLzeJsGwqWzf5TFNdKgtY5qHp6ZFf67Y/sAVadCaVY5YACDDb3Oi4NIjLnWMw2QthCBIsVhsUTU9tvXsjeq9+X1d75/KEs4LNOfcdf/+HthMnvwxOD0wmHaXr7ZItn2wuH2SnBzbZAbPJwpPx+VQuzcm7dgRCB57a1uBzUDRL4bfnI0RE0eaXd9W89mpjqHZnUI5Hh2l2dkZZUhOqpi2qSmpOmZ64Tuu9qlz/SEXo6MEHa3wOip46F1n7633eekV8ds8Wxjn37Wl63VVa+ej5oeEZ/82ZBETJjpJ1Rbij2D3Z/1trXUvLsblCK0XfOx0SX2kMsn9dX+d+7Kf6h8o4AIykuffjT8L20LU+w4AZd5VvEPY+XpWqLV327HR7DzXuDnD8r+ovkBehJ8i+y8YAAAAASUVORK5CYII=)",
                  },
                  warn: {
                    color: "#C09853",
                    "background-color": "#FCF8E3",
                    "border-color": "#FBEED5",
                    "background-image":
                      "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABJlBMVEXr6eb/2oD/wi7/xjr/0mP/ykf/tQD/vBj/3o7/uQ//vyL/twebhgD/4pzX1K3z8e349vK6tHCilCWbiQymn0jGworr6dXQza3HxcKkn1vWvV/5uRfk4dXZ1bD18+/52YebiAmyr5S9mhCzrWq5t6ufjRH54aLs0oS+qD751XqPhAybhwXsujG3sm+Zk0PTwG6Shg+PhhObhwOPgQL4zV2nlyrf27uLfgCPhRHu7OmLgAafkyiWkD3l49ibiAfTs0C+lgCniwD4sgDJxqOilzDWowWFfAH08uebig6qpFHBvH/aw26FfQTQzsvy8OyEfz20r3jAvaKbhgG9q0nc2LbZxXanoUu/u5WSggCtp1anpJKdmFz/zlX/1nGJiYmuq5Dx7+sAAADoPUZSAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdBgUBGhh4aah5AAAAlklEQVQY02NgoBIIE8EUcwn1FkIXM1Tj5dDUQhPU502Mi7XXQxGz5uVIjGOJUUUW81HnYEyMi2HVcUOICQZzMMYmxrEyMylJwgUt5BljWRLjmJm4pI1hYp5SQLGYxDgmLnZOVxuooClIDKgXKMbN5ggV1ACLJcaBxNgcoiGCBiZwdWxOETBDrTyEFey0jYJ4eHjMGWgEAIpRFRCUt08qAAAAAElFTkSuQmCC)",
                  },
                },
              }),
              t(function () {
                h(f.css).attr("id", "core-notify"),
                  t(document).on("click", "." + i + "-hidable", function (e) {
                    t(this).trigger("notify-hide");
                  }),
                  t(document).on(
                    "notify-hide",
                    "." + i + "-wrapper",
                    function (e) {
                      var n = t(this).data(i);
                      n && n.show(!1);
                    }
                  );
              });
          })
            ? a.apply(e, i)
            : a) || (t.exports = o);
  },
  443: function (t, e, n) {
    "use strict";
    !(function (t) {
      t.fn.jqueryValueToggle = function (e) {
        t.extend({}, e),
          this.each(function (e, n) {
            var a = t(this),
              i = a.find("input").eq(0),
              o = a.find("input").eq(1),
              s = a.find("label").filter(function () {
                return t(this).attr("for") === i.attr("id");
              }),
              r = a.find("label").filter(function () {
                return t(this).attr("for") === o.attr("id");
              }),
              l = a.find(".zawp-toggle__switch");
            function c() {
              i.is(":checked")
                ? a
                    .addClass("zawp-toggle--checked-first")
                    .removeClass("zawp-toggle--checked-last")
                : a
                    .addClass("zawp-toggle--checked-last")
                    .removeClass("zawp-toggle--checked-first");
            }
            a.hasClass("not-functional") ||
              (a.find("input").filter(":checked").length ||
                i.prop("checked", "checked"),
              l.length || i.after('<span class="zawp-toggle__switch"></span>'),
              i.addClass("zawp-toggle__input zawp-toggle__input--first"),
              s.addClass("zawp-toggle__label zawp-toggle__label--first"),
              o.addClass("zawp-toggle__input zawp-toggle__input--last"),
              r.addClass("zawp-toggle__label zawp-toggle__label--last"),
              a.hasClass("zawp-toggle--js") || a.addClass("zawp-toggle--js"),
              c(),
              a.on("change", "input", function (t) {
                c();
              }),
              l.on("click", function () {
                i.is(":checked")
                  ? (o.prop("checked", "checked"), o.trigger("change"))
                  : (i.prop("checked", "checked"), i.trigger("change")),
                  c();
              }));
          });
      };
    })(jQuery);
  },
  444: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(document).on("click", ".tfa", function () {
          var t = $(this),
            e = ($("#tfa-status"), t.data("action"));
          "enable" === e
            ? Swal.fire({
                title: "Scan with Google Authenticator App.",
                text: "Or type this code manually. " + qrCode,
                imageUrl: qrCodeUrl,
                imageHeight: 300,
                imageAlt: "QR Code",
              }).then(function (t) {
                t.isConfirmed
                  ? Swal.fire({
                      title: "Validate Your Two Factor Authentication",
                      text: "Type the code being displayed on Google Authenticator.",
                      input: "text",
                      preConfirm: function (t) {
                        if (t)
                          return $.post(
                            "/account/handle-2fa.php",
                            {
                              csrf_token: csrf_token,
                              action: e,
                              qrCode: qrCode,
                              code: t,
                            },
                            function (t) {
                              t.ok
                                ? Swal.fire({
                                    icon: "success",
                                    title: "Two Factor Authentication enabled.",
                                    showConfirmButton: !1,
                                    timer: 1e3,
                                  }).then(function () {
                                    localStorage.setItem(
                                      "activeTab",
                                      "#security"
                                    ),
                                      window.location.reload();
                                  })
                                : Swal.fire(t.error, "", "error");
                            }
                          );
                        Swal.showValidationMessage(
                          "Request failed: type the code being displayed on Google Authenticator."
                        );
                      },
                    })
                  : Swal.fire(
                      "Two Factor Authentication not enabled.",
                      "",
                      "error"
                    );
              })
            : $.post(
                "/account/handle-2fa.php",
                {
                  csrf_token: csrf_token,
                  action: "disable",
                  qrCode: qrCode,
                },
                function (t) {
                  t.ok
                    ? Swal.fire(
                        "Two Factor Authentication disabled.",
                        "",
                        "success"
                      ).then(function () {
                        localStorage.setItem("activeTab", "#security"),
                          window.location.reload();
                      })
                    : Swal.fire(
                        "Two Factor Authentication not disabled.",
                        "",
                        "error"
                      );
                }
              );
        }),
          $(document).on("click", ".check-answer", function (t) {
            t.preventDefault();
            var e = {
              csrf_token: csrf_token,
              Save: "CHECK ANSWER",
              answer: $("#answer").val(),
            };
            $.post("/account.php", e, function (t) {
              1 == t
                ? $(".new-security").removeClass("d-none")
                : Swal.fire(t, "", "error");
            });
          }),
          $(document).on("click", ".security-question", function (t) {
            t.preventDefault();
            var e = $("#answer") ? $("#answer").val() : "",
              n = {
                csrf_token: csrf_token,
                Save: "SAVE SECURITY QUESTION",
                newAnswer: $("#new-answer").val(),
                newQuestion: $("#new-question").val(),
                answer: e,
              };
            $.post("/account.php", n, function (t) {
              1 == t ? window.location.reload() : Swal.fire(t, "", "error");
            });
          }),
          $(document).on("click", ".recovery-keys", function (t) {
            $(".accordion-recovery").slideToggle("slow");
          }),
          $(document).on("click", ".unblock-employer", function (t) {
            t.preventDefault();
            var e = $(this);
            Swal.fire({
              title: "Are you sure?",
              icon: "info",
              showCancelButton: !0,
            }).then(function (t) {
              t.isConfirmed &&
                $.post(
                  e.attr("href"),
                  {
                    csrf_token: csrf_token,
                  },
                  function (t) {
                    t.ok ? window.location.reload() : $.bannerAlert(t.alert);
                  }
                );
            });
          }),
          $(document).on("click", ".load-more-referral-js", function (t) {
            t.preventDefault();
            var e = $(this),
              n = e.data("page"),
              a = e.data("action");
            $.post(
              "/account/referral-stats.php",
              {
                page: n,
                action: a,
              },
              function (t) {
                t.success
                  ? ($("#referral-activities").append(t.data),
                    t.has_more_results ? e.data("page", n + 1) : e.hide())
                  : e.hide();
              }
            );
          });
      });
  },
  445: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        var t = function (t) {
            var e = {
              csrf_token: csrf_token,
              levels: t.levels,
              success_rate: t.success_rate,
              region: t.region,
              countries: t.countries,
            };
            $("#too-few-warning").hide(),
              $.post("/lists/count-workers.php", e, function (t) {
                t.ok &&
                  ($("#workers-count").text(
                    "Result: " +
                      t.workers +
                      " worker" +
                      (1 === t.workers ? "" : "s")
                  ),
                  t.workers < 6 && $("#too-few-warning").show());
              });
          },
          e = function (t, e) {
            var n = $("#autogenerated-list"),
              a = n.data("filter");
            (a[t] = e),
              n.data(a),
              (function (t) {
                var e = {
                  csrf_token: csrf_token,
                  id: t.id,
                  levels: t.levels,
                  success_rate: t.success_rate,
                  countries: t.countries,
                  categories: t.categories,
                };
                $.post("/lists/filter-workers.php", e, function (t) {
                  $("#list-workers").html(t);
                });
              })(a);
          },
          n = function () {
            var t = $("input[name=list_region]:checked").val(),
              e = $("#list-country-options");
            e.html(""),
              listsGeo[t].forEach(function (t) {
                e.append(
                  '<div class="dropdown-option custom-control custom-checkbox"><input type="checkbox" name="list_countries" id="list-country-' +
                    t.cc +
                    '" class="custom-control-input" value="' +
                    t.cc +
                    '"><label for="list-country-' +
                    t.cc +
                    '" class="custom-control-label">' +
                    t.cn +
                    "</label></div>"
                );
              }),
              e.find('input[value="all"]').prop("checked", !0);
          };
        $(document).on("click", ".emp-list-view-auto", function (t) {
          t.preventDefault();
          var e = $(this).data("list-id");
          $.post(
            "/lists/autogenerated.php",
            {
              csrf_token: csrf_token,
              id: e,
            },
            function (t) {
              $("#emp-list-view").html(t),
                $("#autogenerated-list").data("filter", {
                  id: e,
                  levels: [],
                  success_rate: [],
                  countries: [],
                  categories: [],
                }),
                $(".table-checkable").checkableTable(),
                $(".range-slider").each(function () {
                  var t = $(this),
                    e = {
                      hide_min_max: !0,
                    };
                  "double" === t.data("type") &&
                    (e.extra_classes = "range-slider--double"),
                    t.ionRangeSlider(e);
                }),
                $('[data-df-type="irs-range"]').each(function (t, e) {
                  var n = $(e),
                    a = n.find("input"),
                    o = n.data("df-prefix") || "",
                    s = n.data("df-affix") || "";
                  a.on(
                    "change",
                    (0, i.default)(function () {
                      var t = a.val().split(";");
                      n.find(".dropdown-toggle span").text(
                        "" + o + t[0] + s + " - " + o + t[1] + s
                      );
                    }, 150)
                  ),
                    n.find('[data-df-event="apply"]').on("click", function (t) {
                      a.trigger("change");
                    }),
                    n.find('[data-df-event="close"]').on("click", function (t) {
                      a.data("ionRangeSlider").reset();
                    });
                }),
                tippy("[data-tippy-content]", {
                  allowHTML: !0,
                  popperOptions: {
                    strategy: "fixed",
                    modifiers: [
                      {
                        name: "flip",
                        options: {
                          fallbackPlacements: ["bottom", "right"],
                        },
                      },
                      {
                        name: "preventOverflow",
                        options: {
                          altAxis: !0,
                          tether: !1,
                        },
                      },
                    ],
                  },
                }),
                $("#emp-lists").fadeOut(400, function () {
                  $("#emp-list-view").fadeIn();
                });
            }
          );
        }),
          $(document).on("click", ".emp-list-view-custom", function (t) {
            t.preventDefault();
            var e = $(this).data("list-id");
            $.post(
              "/lists/custom.php",
              {
                csrf_token: csrf_token,
                id: e,
              },
              function (t) {
                $("#emp-list-view").html(t),
                  $(".table-checkable").checkableTable(),
                  tippy("[data-tippy-content]", {
                    allowHTML: !0,
                    popperOptions: {
                      strategy: "fixed",
                      modifiers: [
                        {
                          name: "flip",
                          options: {
                            fallbackPlacements: ["bottom", "right"],
                          },
                        },
                        {
                          name: "preventOverflow",
                          options: {
                            altAxis: !0,
                            tether: !1,
                          },
                        },
                      ],
                    },
                  }),
                  $("#emp-lists").fadeOut(400, function () {
                    $("#emp-list-view").fadeIn();
                  });
              }
            );
          }),
          $(document).on("click", ".emp-list-view-back", function (t) {
            t.preventDefault(),
              $("#emp-list-view").fadeOut(400, function () {
                location.reload();
              });
          }),
          $(document).on("click", ".remove-list", function (t) {
            t.preventDefault();
            var e = $(this).data("list-id");
            Swal.fire({
              title: "Are you sure?",
              icon: "warning",
              showCancelButton: !0,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, remove it!",
            }).then(function (t) {
              t.isConfirmed &&
                $.post(
                  "/lists/remove.php",
                  {
                    csrf_token: csrf_token,
                    id: e,
                  },
                  function (t) {
                    t.ok
                      ? location.reload()
                      : Swal.fire("Whoops!", t.alert, "error");
                  }
                );
            });
          }),
          $(document).on("click", ".leave-list", function (t) {
            t.preventDefault();
            var e = $(this).data("list-id");
            Swal.fire({
              title: "Are you sure?",
              icon: "warning",
              showCancelButton: !0,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, remove it!",
            }).then(function (t) {
              t.isConfirmed &&
                $.post(
                  "/lists/leave.php",
                  {
                    csrf_token: csrf_token,
                    id: e,
                  },
                  function (t) {
                    t.ok
                      ? location.reload()
                      : Swal.fire("Whoops!", t.alert, "error");
                  }
                );
            });
          }),
          $(document).on("click", ".lists-form", function (t) {
            t.preventDefault();
            var e = $(this).data("list-id");
            $.post(
              "/lists/form.php",
              {
                csrf_token: csrf_token,
                list: e,
              },
              function (t) {
                var a = $("#list-form");
                a.data("criteria", t.list),
                  a.find("input[name=id_list]").val(e),
                  a.find(".modal-title").text(t.title),
                  a.find("#list-name").val(t.list.name),
                  a.find("#list-description").val(t.list.description),
                  a.find(".range-slider").data("ionRangeSlider").update({
                    from: t.list.success_rate[0],
                    to: t.list.success_rate[1],
                  }),
                  $("#list-success-rate span").text(
                    t.list.success_rate[0] +
                      "% - " +
                      t.list.success_rate[1] +
                      "%"
                  ),
                  $("#list-levels span").text(
                    t.list.levels
                      .map(function (t) {
                        return "string" != typeof (e = t)
                          ? ""
                          : e.charAt(0).toUpperCase() + e.slice(1);
                        var e;
                      })
                      .join(", ")
                  ),
                  a.find("input[name=list_level]").each(function () {
                    t.list.levels.includes($(this).val())
                      ? $(this).prop("checked", !0)
                      : $(this).prop("checked", !1);
                  }),
                  $("#list-region-" + t.list.region).prop("checked", !0),
                  $("#list-region span").text(
                    $("#list-region-" + t.list.region)
                      .next("label")
                      .text()
                  ),
                  n();
                var i = [],
                  o = void 0;
                a.find("input[name=list_countries]").prop("checked", !1),
                  t.list.countries.forEach(function (t) {
                    (o = $("#list-country-" + t)).prop("checked", !0),
                      i.push(o.next("label").text());
                  }),
                  $("#list-country span").text(i.join(", ")),
                  $("#workers-count").text(
                    "Result: " +
                      t.workers +
                      " worker" +
                      (1 === t.workers ? "" : "s")
                  ),
                  $("#list-form").modal("show");
              }
            );
          }),
          $(document).on("click", ".lists-form-empty", function (t) {
            t.preventDefault(), $("#list-form-empty").modal("show");
          }),
          $(document).on("click", ".btn-save-list", function () {
            var t = $("#list-name").val();
            if ("" !== t) {
              var e = $("#list-form").data("criteria"),
                n = {
                  csrf_token: csrf_token,
                  id: e.id,
                  name: t,
                  description: $("#list-description").val(),
                  levels: e.levels,
                  success_rate: e.success_rate,
                  region: e.region,
                  countries: e.countries,
                };
              $.post("/lists/save.php", n, function (t) {
                t.ok
                  ? location.reload()
                  : Swal.fire("Whoops!", t.alert, "error");
              });
            } else Swal.fire("Whoops!", "Type a name to the list.", "error");
          }),
          $(document).on("click", ".btn-save-list-empty", function () {
            var t = $("#list-name-empty").val();
            if ("" !== t) {
              var e = $("#list-form-empty"),
                n = 1,
                a = null,
                i = null,
                o = null,
                s = null;
              e.data().workers
                ? ((n = 0), (a = e.data().workers))
                : e.data().idCampaign &&
                  ((n = 0),
                  (i = e.data().idCampaign),
                  (o = e.data().campaignTitle),
                  (s = e.data().idSatisfiedWorkersList));
              var r = {
                csrf_token: csrf_token,
                name: t,
                description: $("#list-description-empty").val(),
                empty_list: n,
                idWorker: a,
                idCampaign: i,
                campaignTitle: o,
                idSatisfiedWorkersList: s,
                action: $(this).data().action,
              };
              $.post("/lists/save.php", r, function (t) {
                t.ok
                  ? 0 != n
                    ? location.reload()
                    : (e.hide(),
                      i
                        ? Swal.fire(
                            "OK!",
                            "The list has been created.",
                            "success"
                          ).then(function () {
                            window.location.reload();
                          })
                        : Swal.fire(
                            "OK!",
                            "The list has been created and the user has been added.",
                            "success"
                          ))
                  : Swal.fire("Whoops!", t.alert, "error");
              });
            } else Swal.fire("Whoops!", "Type a name to the list.", "error");
          }),
          $(document).on("change", "input[name=list_level]", function () {
            var t = $(this),
              e = t.closest(".dropdown-options");
            "all" === t.val()
              ? t.is(":checked")
                ? e.find("input[type=checkbox]").each(function (t, e) {
                    "all" !== $(this).val() && $(this).prop("checked", !1);
                  })
                : $(this).prop("checked", !0)
              : e.find("input[type=checkbox]:checked").length
              ? $("#list-level-all").prop("checked", !1)
              : $("#list-level-all").prop("checked", !0);
          }),
          $(document).on("change", "input[name=list_countries]", function () {
            var t = $(this),
              e = $("#list-country-options");
            "all" === t.val()
              ? t.is(":checked")
                ? e.find("input[type=checkbox]").each(function (t, e) {
                    "all" !== $(this).val() && $(this).prop("checked", !1);
                  })
                : $(this).prop("checked", !0)
              : e.find("input[type=checkbox]:checked").length
              ? $("#list-country-all").prop("checked", !1)
              : $("#list-country-all").prop("checked", !0);
          }),
          $(document).on(
            "click",
            '[data-lm-event="apply-region"]',
            function (t) {
              n(), $(".lm-apply-countries").trigger("click");
            }
          ),
          $(document).on(
            "click",
            '[data-lm-event="apply-levels"]',
            function (e) {
              var n = $("#list-form"),
                a = n.data("criteria");
              (a.levels = $("input[name=list_level]:checked")
                .map(function (t, e) {
                  return $(e).val();
                })
                .get()),
                n.data("criteria", a),
                t(a);
            }
          ),
          $(document).on(
            "click",
            '[data-lm-event="apply-success-rate"]',
            function (e) {
              var n = $("#list-form"),
                a = n.data("criteria");
              (a.success_rate = $("input[name=list_success_rate]")
                .val()
                .split(";")),
                n.data("criteria", a),
                t(a);
            }
          ),
          $(document).on(
            "click",
            '[data-lm-event="apply-countries"]',
            function (e) {
              var n = $("#list-form"),
                a = n.data("criteria");
              (a.region = $("input[name=list_region]:checked").val()),
                (a.countries = $("input[name=list_countries]:checked")
                  .map(function (t, e) {
                    return $(e).val();
                  })
                  .get()),
                n.data("criteria", a),
                t(a);
            }
          ),
          $(document).on(
            "click",
            '[data-lm-event="filter-levels"]',
            function (t) {
              var n = $("input[name=filter_list_level]:checked")
                .map(function (t, e) {
                  return $(e).val();
                })
                .get();
              e("levels", n);
            }
          ),
          $(document).on(
            "click",
            '[data-lm-event="clear-filter-levels"]',
            function (t) {
              e("levels", []);
            }
          ),
          $(document).on(
            "click",
            '[data-lm-event="filter-success-rate"]',
            function (t) {
              var n = $("input[name=filter_list_success_rate]")
                .val()
                .split(";");
              e("success_rate", n);
            }
          ),
          $(document).on(
            "click",
            '[data-lm-event="clear-filter-success-rate"]',
            function (t) {
              e("success_rate", []);
            }
          ),
          $(document).on(
            "click",
            '[data-lm-event="filter-countries"]',
            function (t) {
              var n = $("input[name=filter_list_countries]:checked")
                .map(function (t, e) {
                  return $(e).val();
                })
                .get();
              e("countries", n);
            }
          ),
          $(document).on(
            "click",
            '[data-lm-event="clear-filter-countries"]',
            function (t) {
              e("countries", []);
            }
          ),
          $(document).on(
            "click",
            '[data-lm-event="filter-categories"]',
            function (t) {
              var n = $("input[name=filter_list_categories]:checked")
                .map(function (t, e) {
                  return $(e).val();
                })
                .get();
              e("categories", n);
            }
          ),
          $(document).on(
            "click",
            '[data-lm-event="clear-filter-categories"]',
            function (t) {
              e("categories", []);
            }
          ),
          $(document).on(
            "click",
            '[data-lm-event="open-custom-lists"]',
            function (t) {
              t.preventDefault();
              var e = $("#custom-lists-modal");
              e.data("workers", [$(this).data("id").toString()]),
                e.modal("show");
            }
          ),
          $(document).on(
            "click",
            '[data-lm-event="batch-open-custom-lists"]',
            function (t) {
              t.preventDefault();
              var e = $("#custom-lists-modal"),
                n = $("#list-workers")
                  .find("input[type=checkbox]:checked")
                  .map(function (t, e) {
                    return $(e).val();
                  })
                  .get();
              e.data("workers", n), e.modal("show");
            }
          ),
          $(document).on("click", '[data-lm-event="add-list"]', function (t) {
            t.preventDefault();
            var e = $("#custom-lists-modal"),
              n = e.data("workers"),
              a = $(this).data("list-id");
            n[0].length > 8 && (n = n[0].split(",")),
              $.post(
                "/lists/upd-list-workers.php",
                {
                  csrf_token: csrf_token,
                  list_id: a,
                  workers: n,
                  action: "add",
                },
                function (t) {
                  e.modal("hide"),
                    t.ok
                      ? Swal.fire("Great!", t.notice, "success")
                      : Swal.fire("Whoops!", t.alert, "error");
                }
              );
          }),
          $(document).on(
            "click",
            '[data-lm-event="remove-worker"]',
            function (t) {
              t.preventDefault();
              var e = [$(this).data("id").toString()],
                n = $("#list-workers").data("list-id"),
                a = parseInt($("#custom-workers-count").text(), 10) - 1,
                i = $(this).closest("tr");
              Swal.fire({
                title: "Are you sure?",
                icon: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, remove it!",
              }).then(function (t) {
                t.isConfirmed &&
                  $.post(
                    "/lists/upd-list-workers.php",
                    {
                      csrf_token: csrf_token,
                      list_id: n,
                      workers: e,
                      action: "remove",
                    },
                    function (t) {
                      t.ok
                        ? ($("#custom-workers-count").text(a),
                          i.remove(),
                          Swal.fire("Great!", t.notice, "success"))
                        : Swal.fire("Whoops!", t.alert, "error");
                    }
                  );
              });
            }
          ),
          $(document).on(
            "click",
            '[data-lm-event="batch-remove-worker"]',
            function (t) {
              t.preventDefault();
              var e = $("#list-workers").find("input[type=checkbox]:checked"),
                n = e
                  .map(function (t, e) {
                    return $(e).val();
                  })
                  .get(),
                a = $("#list-workers").data("list-id"),
                i = parseInt($("#custom-workers-count").text(), 10) - e.length;
              Swal.fire({
                title: "Are you sure?",
                icon: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, remove it!",
              }).then(function (t) {
                t.isConfirmed &&
                  $.post(
                    "/lists/upd-list-workers.php",
                    {
                      csrf_token: csrf_token,
                      list_id: a,
                      workers: n,
                      action: "remove",
                    },
                    function (t) {
                      t.ok
                        ? ($("#custom-workers-count").text(i),
                          e.each(function () {
                            $(this).closest("tr").remove();
                          }),
                          $("#list_select_all").trigger("click"),
                          Swal.fire("Great!", t.notice, "success"))
                        : Swal.fire("Whoops!", t.alert, "error");
                    }
                  );
              });
            }
          ),
          $(document).on(
            "click",
            '[data-lm-event="block-worker"]',
            function (t) {
              t.preventDefault();
              var e = [$(this).data("id").toString()],
                n = $("#list-workers").data("list-id"),
                a = parseInt($("#custom-workers-count").text(), 10) - 1,
                i = $(this).closest("tr");
              Swal.fire({
                title: "Are you sure?",
                icon: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, block it!",
              }).then(function (t) {
                t.isConfirmed &&
                  $.post(
                    "/lists/upd-list-workers.php",
                    {
                      csrf_token: csrf_token,
                      list_id: n,
                      workers: e,
                      action: "block",
                    },
                    function (t) {
                      t.ok
                        ? ($("#custom-workers-count").text(a),
                          i.remove(),
                          Swal.fire("Great!", t.notice, "success"))
                        : Swal.fire("Whoops!", t.alert, "error");
                    }
                  );
              });
            }
          ),
          $(document).on(
            "click",
            '[data-lm-event="batch-block-worker"]',
            function (t) {
              t.preventDefault();
              var e = $("#list-workers").find("input[type=checkbox]:checked"),
                n = e
                  .map(function (t, e) {
                    return $(e).val();
                  })
                  .get(),
                a = $("#list-workers").data("list-id"),
                i = parseInt($("#custom-workers-count").text(), 10) - e.length;
              Swal.fire({
                title: "Are you sure?",
                icon: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, block it!",
              }).then(function (t) {
                t.isConfirmed &&
                  $.post(
                    "/lists/upd-list-workers.php",
                    {
                      csrf_token: csrf_token,
                      list_id: a,
                      workers: n,
                      action: "block",
                    },
                    function (t) {
                      t.ok
                        ? ($("#custom-workers-count").text(i),
                          e.each(function () {
                            $(this).closest("tr").remove();
                          }),
                          $("#list_select_all").trigger("click"),
                          Swal.fire("Great!", t.notice, "success"))
                        : Swal.fire("Whoops!", t.alert, "error");
                    }
                  );
              });
            }
          ),
          $(document).on("click", "#custom-list-add-worker", function (t) {
            t.preventDefault(),
              (function t(e) {
                Swal.fire({
                  title: "Add worker",
                  input: "text",
                  inputLabel: "Enter the worker ID",
                  confirmButtonText: "Add",
                  showCancelButton: !0,
                  cancelButtonText: "Close",
                  showLoaderOnConfirm: !0,
                  inputValidator: function (t) {
                    if (!t) return "Please type the worker ID.";
                  },
                  preConfirm: function (t) {
                    return $.ajax({
                      url: "/ajax.php",
                      type: "post",
                      data: {
                        action: "add_worker_to_custom_list",
                        listId: e,
                        workerId: t,
                      },
                      success: function (t) {
                        if (t.success) {
                          var e = t.data.worker,
                            n =
                              parseInt(
                                $("#custom-workers-count")[0].innerText
                              ) + 1;
                          $("tr.no-workers").html(""),
                            $("#custom-workers-count").html(n);
                          var a =
                            '<tr>\n                                        <td>\n                                            <div class="d-flex align-items-center">\n                                                <div class="custom-control custom-checkbox custom-control-inline">\n                                                <input\n                                                    type="checkbox"\n                                                    id="list-worker-' +
                            e.id +
                            '"\n                                                    class="custom-control-input"\n                                                    value="' +
                            e.id +
                            '"\n                                                >\n                                                <label for="list-worker-' +
                            e.id +
                            '" class="custom-control-label text-primary font-weight-bold"></label>\n                                                </div>\n                                                <span>' +
                            e.nickname +
                            "</span>\n                                            </div>\n                                        </td>\n                                        <td>" +
                            e.worker_badge +
                            "</td>\n                                        <td>" +
                            e.success_rate +
                            "%</td>\n                                        <td>" +
                            e.country +
                            '</td>\n                                        <td class="text-right">\n                                            <a class="btn btn-link btn-icon py-0 text-gray disabled" href="#" data-tippy data-tippy-content="Add to list" data-lm-event="open-custom-lists" data-id="' +
                            e.id +
                            '"><i class="fas fa-plus"></i></a>\n                                            <a class="btn btn-link btn-icon py-0 text-gray" href="#" data-tippy data-tippy-content="Remove from list" data-lm-event="remove-worker" data-id="' +
                            e.id +
                            '"><i class="fas fa-trash-alt"></i></a>\n                                            <a class="btn btn-link btn-icon py-0 text-gray" href="#" data-tippy data-tippy-content="Block worker and remove from all lists" data-lm-event="block-worker" data-id="' +
                            e.id +
                            '"><i class="fas fa-lock"></i></a>\n                                        </td>\n                                    </tr>';
                          return $("#list-workers").append(a), t;
                        }
                        Swal.showValidationMessage(t.data.msg);
                      },
                    });
                  },
                  allowOutsideClick: function () {
                    return !Swal.isLoading();
                  },
                }).then(function (n) {
                  n.isConfirmed &&
                    Swal.fire({
                      icon: "success",
                      title: "Worker added",
                      confirmButtonText: "Add another one",
                      showCancelButton: !0,
                      cancelButtonText: "Close",
                    }).then(function (n) {
                      n.isConfirmed && t(e);
                    });
                });
              })($("#list-workers").data().listId);
          });
      });
    var a,
      i =
        (a = n(17)) && a.__esModule
          ? a
          : {
              default: a,
            };
  },
  456: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var a,
      i =
        (a = n(195)) && a.__esModule
          ? a
          : {
              default: a,
            };
    (e.default = function () {
      $("[data-cb-modal]").cbModal();
    }),
      (function (t) {
        t.fn.cbModal = function (e) {
          var n = t.extend(
            {
              modalId: "",
              title: "",
              type: "include",
              cols: 2,
              saveTo: "",
              api: "",
              items: "",
            },
            e
          );
          t(this).each(function (e, a) {
            var o,
              s,
              r,
              l = t(this),
              c = "_" + Math.random().toString(36).substr(2, 9) + "_" + e,
              d = "",
              u = l.data("cb-modal-options"),
              p = u.modalId || l.data("cb-modal-id"),
              f = u.title || l.data("cb-modal-title"),
              m = u.type || l.data("cb-modal-type"),
              g = u.cols || l.data("cb-modal-cols"),
              h = u.saveTo || l.data("cb-modal-save-to"),
              b = u.api || l.data("cb-modal-api"),
              v = u.items || l.data("cb-modal-items");
            p || (p = n.modalId),
              f || (f = n.title),
              m || (m = n.type),
              g || (g = n.cols),
              h || (h = n.saveTo),
              b || (b = n.api),
              v || (v = n.items),
              (r = "exclude" === m),
              (o = t(p)),
              (s = t(h)),
              o.length &&
                l.on("change", function (e) {
                  (d = s.length ? s.val() : ""),
                    e.target.checked && o.length && o.modal();
                  var n = o.find(".cb-modal__append"),
                    a = o.find(".cb-modal__title"),
                    l = o.find(".cb-modal__submit");
                  function u(t, e) {
                    var n = "";
                    t.forEach(function (t, e) {
                      var a = (function (t) {
                        var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : "",
                          n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : g,
                          a =
                            arguments.length > 3 && void 0 !== arguments[3]
                              ? arguments[3]
                              : r,
                          i = t.label ? t.label : "",
                          o = t.value ? t.value : i,
                          s = c + "_" + e,
                          l = a
                            ? "custom-checkbox-btn--danger"
                            : "custom-checkbox-btn--success",
                          u = "",
                          p = !1;
                        switch (n) {
                          case "3":
                            u = "col-md-4";
                            break;
                          case "4":
                            u = "col-md-3";
                            break;
                          default:
                            u = "col-md-6";
                        }
                        return (
                          d.indexOf(o) > -1 && (p = !0),
                          '<div class="' +
                            u +
                            ' mb-2">\n              <div class="custom-control custom-checkbox custom-checkbox-btn custom-checkbox-btn--small ' +
                            l +
                            '">\n                <input type="checkbox" id="' +
                            s +
                            '" class="custom-control-input" value="' +
                            o +
                            '"' +
                            (p ? 'checked="checked"' : "") +
                            '>\n                <label for="' +
                            s +
                            '" class="custom-control-label bg-gray border-0">' +
                            i +
                            "</label>\n              </div>\n            </div>"
                        );
                      })(t, e);
                      n += a;
                    }),
                      e.html(n);
                  }
                  n.html(""),
                    f ? a.show().html(f) : a.hide(),
                    b
                      ? t.ajax({
                          type: "GET",
                          url: b,
                          data: "data",
                          success: function (t) {
                            t.success && t.data && ((v = t.data), u(t.data, n));
                          },
                        })
                      : u(v),
                    l.on("click", function (e) {
                      e.preventDefault();
                      var a = [];
                      n
                        .find("input[type=checkbox]")
                        .filter(":checked")
                        .each(function (e, n) {
                          var i = t(n);
                          a.push(i.val());
                        }),
                        s.length && s.val(JSON.parse((0, i.default)(a))),
                        o.modal("hide");
                    });
                });
          });
        };
      })(jQuery);
  },
  458: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(document).on("click", "#load-more-jobs", function (t) {
          t.preventDefault();
          var e = $("#load-more-jobs"),
            n = e.data("page"),
            a = e.data("order"),
            i = e.data("filter"),
            o = e.data("folder"),
            s = e.data("show-declined"),
            r = e.data("search-term");
          $.post(
            "/employer.php",
            {
              page: n,
              sort: a,
              filter: i,
              Folder: o,
              showDeclined: s,
              s: r,
              csrf_token: csrf_token,
            },
            function (t) {
              t.length
                ? ($("#jobs-list").append(t),
                  e.data("page", n + 1),
                  tippy("[data-tippy-content]", {
                    allowHTML: !0,
                    popperOptions: {
                      strategy: "fixed",
                      modifiers: [
                        {
                          name: "flip",
                          options: {
                            fallbackPlacements: ["bottom", "right"],
                          },
                        },
                        {
                          name: "preventOverflow",
                          options: {
                            altAxis: !0,
                            tether: !1,
                          },
                        },
                      ],
                    },
                  }))
                : e.hide();
            }
          );
        }),
          $(document).on("click", "[data-campaign-id]", function (t) {
            var e = $(this).data("campaign-id");
            window.location = "/employer/campaign-details.php?Id=" + e;
          }),
          $(document).on("click", ".pw-emp-menu-item", function (t) {
            t.stopPropagation();
          }),
          $(document).on(
            "click",
            ".pw-declined-job-reason-action",
            function (t) {
              t.stopPropagation();
              var e,
                n,
                a = $(this);
              (e = function () {}),
                (n = $("#declinedJobReasonModal")),
                $("#declined-job-reason-modal-date").html(
                  a.data("declined-date")
                ),
                $("#declined-job-reason-modal-text").html(
                  a.data("declined-text")
                ),
                n.modal("show"),
                $("#confirm-declined-job-reason-btn")
                  .unbind()
                  .one("click", e)
                  .one("click", function () {
                    return n.modal("hide");
                  });
            }
          ),
          $(document).on("click", ".pw-emp-action", function (t) {
            t.preventDefault();
            var e,
              n,
              a = $(this);
            a.text().trim().startsWith("Stop")
              ? ((e = function () {
                  $.post(
                    a.attr("href"),
                    {
                      csrf_token: csrf_token,
                    },
                    function (t) {
                      t.ok ? location.reload() : $.bannerAlert(t.alert);
                    }
                  );
                }),
                (n = $("#stopJobModal")).modal("show"),
                $("#confirm-stop-btn")
                  .unbind()
                  .one("click", e)
                  .one("click", function () {
                    return n.modal("hide");
                  }))
              : $.post(
                  a.attr("href"),
                  {
                    csrf_token: csrf_token,
                  },
                  function (t) {
                    t.ok ? location.reload() : $.bannerAlert(t.alert);
                  }
                );
          }),
          $(document).on(
            "click",
            ".pw-force-unrated-tasks-satisfied",
            function (t) {
              t.preventDefault();
              var e,
                n,
                a = $(this);
              (e = function () {
                $.post(
                  a.attr("href"),
                  {
                    csrf_token: csrf_token,
                  },
                  function (t) {
                    t.ok ? location.reload() : $.bannerAlert(t.alert);
                  }
                );
              }),
                (n = $("#forceAllTasksSatisfiedModal")).modal("show"),
                $("#confirm-force-unrated-tasks-satisfied-btn")
                  .unbind()
                  .one("click", e)
                  .one("click", function () {
                    return n.modal("hide");
                  });
            }
          ),
          $(document).on("click", "#submitted-tasks-up", function (t) {
            $(document).scrollTop(0), $(this).hide();
          }),
          $(document).on("scroll", function () {
            $(this).scrollTop() > 200
              ? $("#submitted-tasks-up").show()
              : $("#submitted-tasks-up").hide();
          }),
          $(".bonus-amount").on("change", function (t) {
            var e = $(this).val();
            $(".bonus-amount").val(e);
          }),
          $("#task-details-modal").on("show.bs.modal", function (t) {
            var e = $(this);
            $.get($(t.relatedTarget).data("href"), function (t) {
              e.html(t);
            });
          }),
          $("#task-details-modal").on("hidden.bs.modal", function (t) {
            $(this).html("");
          }),
          $(document).on("change", "#revision-btn", function (t) {
            $("#emp-comment-label").text(
              "Your comment - Give specific and clear instructions to the worker so they can correctly revise your task."
            ),
              $("#revision-warning").show(),
              $("#not-satisfied-warning").hide(),
              $("#wrkr-sg").hide();
          }),
          $(document).on("change", "#not-satisfied-btn", function (t) {
            $("#emp-comment-label").text(
              "Your comment - A specific reason for declining payment is mandatory if you are not satisfied."
            ),
              $("#revision-warning").hide(),
              $("#not-satisfied-warning").show(),
              $("#wrkr-sg").show(),
              $("#satisfied-wsg").hide(),
              $("#not-satisfied-wsg").show(),
              $("#incorrect-btn").prop("checked", !0);
          }),
          $(document).on("change", "#satisfied-btn", function (t) {
            $("#emp-comment-label").text("Your comment (optional)"),
              $("#revision-warning").hide(),
              $("#not-satisfied-warning").hide(),
              $("#wrkr-sg").show(),
              $("#not-satisfied-wsg").hide(),
              $("#satisfied-wsg").show(),
              $("#good-btn").prop("checked", !0);
          }),
          $(document).on("click", "#rate-task", function (t) {
            var e = $("input[name=Task_rating]:checked").val(),
              n = $("#employer-comment").val();
            return "NOK" === e && "" === n.trim()
              ? (alert(
                  "You must enter a reason why you did not accept this task. This will help us in case the Worker complains."
                ),
                !1)
              : "REV" === e && "" === n.trim()
              ? (alert(
                  "You must enter a comment so the worker knows what to do before resubmitting the task."
                ),
                !1)
              : /click(?:ed)?\s+(?:any\s+)?(?:on\s+|(?:on\s+)?any\s+|\d+\s+|one\s+|two\s+)?(?:big\s+|(?:another\s+)?banner\s+)?ad|ad(?:vertisement|vertise)?(?:\s+url|\s+site|\s+link)|\(?advert(?:isement|ise)?s?\)?|(?:navigate|browse|url|multiple|the|big|google)\s+(?:on\s+|of\s+)?(?:the\s+)?a(?:\W)?d(?:\W)?s?\b|banner(?:\s+publicity)?|\Wa(?:\W)d(?:\W)?s?\b|\Wad(?:\W)s|(\W|^)+\d+ads?\b|google(?:ad|4d)|4ds|\Wads?(?:\W|$)/i.test(
                  n
                )
              ? (Swal.fire({
                  icon: "warning",
                  title: "Attention!",
                  html: '<p class="text-left">You are likely using language in your ratings which explicitly asks workers to click on ads.<br>Do not use this language. As per our policy, SEO Promote jobs are for legal incentivized traffic and search engine optimization only. if you are using jobs to directly create fraudulent click traffic this is expressly prohibited by our terms of service and your jobs will no longer be accepted. Also this will lead to reversal of your job ratings.</p>',
                  confirmButtonText: "Got It",
                }),
                !1)
              : ($(this).attr("disabled", !0),
                void $(this).closest("form").submit());
          }),
          $(document).on("click", ".block-worker", function (t) {
            var e = this;
            t.preventDefault(), t.stopPropagation();
            var n,
              a,
              i = $(this).closest("td");
            (n = function () {
              $.post(
                $(e).attr("href"),
                {
                  csrf_token: csrf_token,
                },
                function (t) {
                  t.ok
                    ? ($.bannerSuccess(t.notice),
                      i.html(
                        '<a href="' +
                          t.url +
                          '" class="text-danger unblock-worker" data-tippy="true" data-tippy-content="This worker is blocked. Click here to unblock."><i class="fas fa-lock"></i></a>'
                      ),
                      tippy("[data-tippy-content]", {
                        allowHTML: !0,
                        popperOptions: {
                          strategy: "fixed",
                          modifiers: [
                            {
                              name: "flip",
                              options: {
                                fallbackPlacements: ["bottom", "right"],
                              },
                            },
                            {
                              name: "preventOverflow",
                              options: {
                                altAxis: !0,
                                tether: !1,
                              },
                            },
                          ],
                        },
                      }))
                    : $.bannerAlert(t.alert);
                }
              );
            }),
              (a = $("#blockWrkrModal")).modal("show"),
              $("#confirm-block-btn")
                .unbind()
                .one("click", n)
                .one("click", function () {
                  return a.modal("hide");
                });
          }),
          $(document).on("click", ".unblock-worker", function (t) {
            var e = this;
            t.preventDefault(), t.stopPropagation();
            var n,
              a,
              i = $(this).closest("td");
            (n = function () {
              $.post(
                $(e).attr("href"),
                {
                  csrf_token: csrf_token,
                },
                function (t) {
                  t.ok
                    ? ($.bannerSuccess(t.notice),
                      i.html(
                        '<a href="' +
                          t.url +
                          '" class="text-gray block-worker" data-tippy="true" data-tippy-content="This worker is not blocked. Click here to block."><i class="fas fa-lock-open"></i></a>'
                      ),
                      tippy("[data-tippy-content]", {
                        allowHTML: !0,
                        popperOptions: {
                          strategy: "fixed",
                          modifiers: [
                            {
                              name: "flip",
                              options: {
                                fallbackPlacements: ["bottom", "right"],
                              },
                            },
                            {
                              name: "preventOverflow",
                              options: {
                                altAxis: !0,
                                tether: !1,
                              },
                            },
                          ],
                        },
                      }))
                    : $.bannerAlert(t.alert);
                }
              );
            }),
              (a = $("#unblockWrkrModal")).modal("show"),
              $("#confirm-unblock-btn")
                .unbind()
                .one("click", n)
                .one("click", function () {
                  return a.modal("hide");
                });
          }),
          $(document).on(
            "click",
            '[data-lm-event="open-custom-lists"]',
            function (t) {
              t.preventDefault();
              var e = $("#custom-lists-modal");
              e.data("workers", [$(this).data("id").toString()]),
                e.modal("show");
            }
          ),
          $(document).on(
            "click",
            '[data-lm-event="create-new-list"]',
            function (t) {
              t.preventDefault();
              var e = $("#list-form-empty");
              e.data("workers", [$(this).data("id").toString()]),
                e.modal("show");
            }
          );
      });
  },
  459: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var a,
      i =
        (a = n(196)) && a.__esModule
          ? a
          : {
              default: a,
            };
    e.default = function () {
      (0, i.default)($("textarea.autosize")),
        $("select").select2({
          theme: "pico",
        }),
        $(".form-label-over").each(function (t) {
          var e = $(this),
            n = e.find(".form-control").val();
          "" !== n && void 0 !== n
            ? e.addClass("form-label-over--is-filled")
            : e.addClass("form-label-over--is-not-filled");
        }),
        $(".form-label-over .form-control")
          .on("focus", function (t) {
            t.preventDefault(),
              $(this)
                .closest(".form-label-over")
                .addClass("form-label-over--is-active");
          })
          .on("blur", function (t) {
            t.preventDefault();
            var e = $(this),
              n = e.closest(".form-label-over");
            n.removeClass("form-label-over--is-active"),
              "" !== e.val() && void 0 !== e.val()
                ? (n.addClass("form-label-over--is-filled"),
                  n.removeClass("form-label-over--is-not-filled"))
                : (n.addClass("form-label-over--is-not-filled"),
                  n.removeClass("form-label-over--is-filled"));
          }),
        $(".range-slider").each(function () {
          var t = $(this),
            e = {
              hide_min_max: !0,
            };
          "double" === t.data("type") &&
            (e.extra_classes = "range-slider--double"),
            "single" === t.data("type") &&
              (e.extra_classes = "range-slider--single"),
            3 === t.data("decimals") &&
              (e.prettify = function (t) {
                return t.toFixed(3);
              }),
            t.ionRangeSlider(e);
        }),
        $(".open-modal").on("change", function (t) {
          var e = $(this).data("target-modal");
          t.target.checked && $(e).length && $(e).modal();
        }),
        $(".radio-group").each(function (t, e) {
          $(e)
            .find("label")
            .on("click", function (t) {
              t.preventDefault();
              var e = $(this);
              e.parent().addClass("active").siblings().removeClass("active"),
                e.siblings("input").prop("checked", "checked");
            });
        }),
        $("body").on("click", ".form-copy__btn", function (t) {
          t.preventDefault();
          var e = $(this).closest(".form-copy").find("input,textarea");
          e.length && (e[0].select(), document.execCommand("copy"));
        });
    };
  },
  460: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(document).on("click", "#optin button", function (t) {
          $.post(
            "/account/optin.php",
            {
              csrf_token: csrf_token,
              optin: $(this).data("optin"),
            },
            function (t) {
              t.ok ? $("#optin").remove() : $.bannerAlert(t.alert);
            }
          );
        });
      });
  },
  461: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(window),
          $("body"),
          $("body").off("click", ".proof-list__copy"),
          $("body").on("click", ".proof-list__copy", function (t) {
            t.preventDefault(),
              $(this)
                .closest(".proof-list__item")
                .find(".proof-list__text")
                .select(),
              document.execCommand("copy");
          });
      });
  },
  462: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(window),
          $("body").on("click", "[data-job-window]", function (t) {
            t.preventDefault(),
              (function (t) {
                $("#jobWindowSidePopup").html(""),
                  $.ajax({
                    type: "GET",
                    url: "/jobs/job-details.php?Id=" + t,
                    success: function (t) {
                      $("#jobWindowSidePopup").html(t);
                    },
                  });
              })($(this).data("job-id"));
          });
      });
  },
  463: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        var t = {
          data: [
            "English",
            "Abkhazian",
            "Afar",
            "Afrikaans",
            "Akan",
            "Albanian",
            "Amharic",
            "Arabic",
            "Armenian",
            "Assamese",
            "Awadhi",
            "Aymara",
            "Azerbaijani",
            "Balochi",
            "Bashkir",
            "Basque",
            "Belarussian",
            "Bengali",
            "Bhojpuri",
            "Bhutani",
            "Bihari",
            "Bislama",
            "Breton",
            "Bulgarian",
            "Burmese",
            "Catalan",
            "Cebuano",
            "Chechen",
            "Chinese",
            "Corsican",
            "Croatian",
            "Czech",
            "Dakhini",
            "Danish",
            "Dutch",
            "Esperanto",
            "Estonian",
            "Faeroese",
            "Fiji",
            "Finnish",
            "French",
            "Frisian",
            "Galician",
            "Georgian",
            "German",
            "Greek",
            "Greenlandic",
            "Guarani",
            "Gujarati",
            "Haitian Creole",
            "Hausa",
            "Hebrew",
            "Hindi",
            "Hungarian",
            "Icelandic",
            "Indonesian",
            "Interlingua",
            "Interlingue",
            "Inupiak",
            "Irish",
            "Italian",
            "Japanese",
            "Javanese",
            "Kabyle",
            "Kannada",
            "Kashmiri",
            "Kazakh",
            "Khmer",
            "Kinyarwanda",
            "Kirghiz",
            "Kirundi",
            "Konkani",
            "Korean",
            "Kurdish",
            "Laothian",
            "Latin",
            "Latvian",
            "Lingala",
            "Lithuanian",
            "Lombard",
            "Luxembourgish",
            "Macedonian",
            "Maithili",
            "Makhuwa",
            "Malagasy",
            "Malay",
            "Malayalam",
            "Maltese",
            "Maori",
            "Marathi",
            "Marwari",
            "Moldavian",
            "Mongolian",
            "Nauru",
            "Nepali",
            "Norwegian",
            "Occitan",
            "Oriya",
            "Oromo",
            "Pashto",
            "Persian",
            "Polish",
            "Portuguese",
            "Punjabi",
            "Quechua",
            "Rhaeto-Romance",
            "Rifian",
            "Romanian",
            "Russian",
            "Samoan",
            "Sangro",
            "Sanskrit",
            "Scottish Gaelic",
            "Serbian",
            "Serbo-Croatian",
            "Sesotho",
            "Setswana",
            "Shona",
            "Sindhi",
            "Sinhalese",
            "Siswati",
            "Slovak",
            "Slovenian",
            "Somali",
            "Spanish",
            "Sundanese",
            "Swahili",
            "Swedish",
            "Tagalog",
            "Tajik",
            "Tamazight",
            "Tamil",
            "Tatar",
            "Telugu",
            "Thai",
            "Tibetan",
            "Tigrinya",
            "Tonga",
            "Tsonga",
            "Tuareg",
            "Turkish",
            "Turkmen",
            "Twi",
            "Ukrainian",
            "Urdu",
            "Uyghur",
            "Uzbek",
            "Vietnamese",
            "Volapuk",
            "Welsh",
            "Wolof",
            "Xhosa",
            "Yiddish",
            "Yoruba",
            "Zulu",
          ],
          list: {
            match: {
              enabled: !0,
            },
          },
          theme: "square",
        };
        $(".manage-languages").each(function (e, n) {
          var a = $(n),
            i = a.find(".manage-languages__items"),
            o = a.find(".manage-languages__add");
          function s() {
            1 === a.find(".manage-languages__item").length
              ? a.find(".manage-languages__remove").hide()
              : a.find(".manage-languages__remove").show();
          }
          $(".manage-languages__remove"),
            i.each(function (e, n) {
              return $(n).find(".form-autocomplete input").easyAutocomplete(t);
            }),
            s(),
            o.on("click", function (e) {
              e.preventDefault();
              var n = Math.random().toString(36).substr(2, 9),
                a = $(
                  '<div class="manage-languages__item form-group row row-gutter-sm">\n        <div class="col-md-6">\n          <div class="form-autocomplete dropdown">\n            <label for="language_' +
                    n +
                    '" class="sr-only">Select Language</label>\n            <label for="language_' +
                    n +
                    '" class="form-autocomplete__icon"><i class="sg-icon-search"></i></label>\n            <input type="text" name="language[]" id="language_' +
                    n +
                    '" class="form-control typeahead" placeholder="Select Language">\n          </div>\n        </div>\n        <div class="col-md-6 skill-level-field d-flex align-items-center">\n          <select name="level[]" id="lang-level-' +
                    n +
                    '" class="form-control">\n            <option value="1">Beginner</option>\n            <option value="2">Intermediate</option>\n            <option value="3">Advanced</option>\n            <option value="4">Fluent</option>\n            <option value="5">Native Speaker</option>\n          </select>\n          <button type="button" class="btn manage-languages__remove text-gray" data-tippy="true" data-tippy-content="remove language">\n            <i class="fas fa-times"></i>\n          </button>\n        </div>\n      </div>'
                );
              i.append(a),
                a.find("select").select2({
                  theme: "pico",
                }),
                a.find(".form-autocomplete input").easyAutocomplete(t),
                s();
            }),
            $("body").on("click", ".manage-languages__remove", function (t) {
              t.preventDefault(),
                $(this).closest(".manage-languages__item").remove(),
                s();
            });
        });
      });
  },
  464: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var a,
      i =
        (a = n(195)) && a.__esModule
          ? a
          : {
              default: a,
            };
    e.default = function () {
      var t = $("body"),
        e = ($(window), $(".navbar")),
        n = $(".navbar-toggler"),
        a = $(".side-nav"),
        o = $(".navbar-btn--close");
      function s() {
        t.removeClass("side-nav-opened"),
          a.removeClass("side-nav--active"),
          t.removeClass("navbar-active"),
          n.removeClass("navbar-btn--active");
      }
      e.hasClass("navbar--is-sticky") ||
        e.zawpFixedNav({
          fixedClass: "navbar-fixed-top",
        }),
        $(".navbar .navbar-nav a, .profile-dropdown .dropdown-item").each(
          function (t, e) {
            var n = $(e),
              a = n.attr("href");
            "/" !== window.location.pathname &&
              (n.hasClass("dropdown-item")
                ? a === window.location.pathname && n.addClass("active")
                : a.indexOf(window.location.pathname) > -1 &&
                  n.addClass("active"));
          }
        ),
        n.on("mouseenter", function (t) {
          $(this).addClass("jq-hover"), a.addClass("jq-hover");
        }),
        n.on("mouseleave", function (t) {
          $(this).removeClass("jq-hover"), a.removeClass("jq-hover");
        }),
        n.on("click", function (e) {
          e.preventDefault(),
            a.hasClass("side-nav--active")
              ? s()
              : (t.addClass("side-nav-opened"),
                a.addClass("side-nav--active"),
                t.addClass("navbar-active"),
                n.addClass("navbar-btn--active"));
        }),
        o.on("click", function (t) {
          t.preventDefault(), s();
        }),
        a.find("a").on("click", function (t) {
          $(this).hasClass("list-group-header") || s();
        }),
        $(".close-system-alert").on("click", function (t) {
          var e = $($(this).parents()).data("alert");
          $.post(
            "/account/alert-mark-read.php",
            {
              csrf_token: csrf_token,
              id: e,
            },
            function () {}
          );
        }),
        $(".close-late-notification, .late-notification-link").on(
          "click",
          function (t) {
            $.post(
              "/notifications/mark-read.php",
              {
                csrf_token: csrf_token,
                id: $(this).data("notification-id"),
              },
              function () {}
            );
          }
        );
      var r = JSON.parse(localStorage.getItem("fill_profile_alert"));
      (r && r.tasks === tasks_ok && !r.show) ||
        (localStorage.setItem(
          "fill_profile_alert",
          (0, i.default)({
            tasks: tasks_ok,
            show: !0,
          })
        ),
        $(".fill-profile-alert").show()),
        $(".close-profile-alert").on("click", function (t) {
          t.preventDefault(),
            $($(this).parents()[1]).hide(),
            localStorage.setItem(
              "fill_profile_alert",
              (0, i.default)({
                tasks: tasks_ok,
                show: !1,
              })
            );
        });
    };
  },
  465: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(".progress--bg-auto").each(function (t, e) {
          var n = $(e).find(".progress-bar");
          if (n.length) {
            var a = parseFloat(n[0].style.width);
            a < 25
              ? n.addClass("bg-danger")
              : a < 50
              ? n.addClass("bg-warning")
              : a < 75
              ? n.addClass("bg-light-blue")
              : n.addClass("bg-primary");
          }
        }),
          $(".progress-bar-circle").each(function (t, e) {
            var n = $(e),
              a = n.data("progress-text") ? n.data("progress-text") : "0",
              o = n.data("progress-color")
                ? n.data("progress-color")
                : "#15D164",
              s = n.data("progress-value") ? n.data("progress-value") : "0",
              r = "<sup>%</sup>";
            a && (r += "<br><span>" + a + "</span>");
            var l = new i.default.Circle(this, {
              strokeWidth: 11,
              color: o,
              trailColor: "#D3DAE6",
              trailWidth: 11,
              easing: "easeInOut",
              duration: 1400,
              text: {
                value: "",
                alignToBottom: !1,
                style: {
                  color: "#203259",
                  position: "absolute",
                  left: "0",
                  top: "50%",
                  transform: {
                    prefix: !0,
                    value: "translateY(-50%)",
                  },
                },
              },
              from: {
                color: o,
              },
              to: {
                color: o,
              },
              step: function (t, e) {
                e.path.setAttribute("stroke", t.color);
                var n = Math.round(100 * e.value());
                0 === n ? e.setText("") : e.setText(n + r);
              },
            });
            (l.path.style.strokeLinecap = "round"),
              l.animate(parseInt(s, 10) / 100);
          });
      });
    var a,
      i =
        (a = n(466)) && a.__esModule
          ? a
          : {
              default: a,
            };
  },
  471: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var a,
      i =
        (a = n(472)) && a.__esModule
          ? a
          : {
              default: a,
            };
    e.default = function () {
      $(".steps-bar").each(function (t, e) {
        var n = $(e),
          a = n.find(".steps-bar__ul"),
          o = $(n.data("steps-target")),
          s = void 0,
          r = void 0,
          l = n.find(".steps-bar__nav--prev"),
          c = n.find(".steps-bar__nav--next"),
          d = void 0,
          u = void 0,
          p = $(".post-job");
        if (o.length > 0) {
          var f = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (m())
                return (
                  Swal.fire({
                    icon: "warning",
                    title: "Attention!",
                    html: '<p class="text-left">Please, be careful to avoid click fraud violations with your advertising partners while incentivizing traffic to your website or app. For your own protection, do not use wording in jobs that encourages clicking ads. SEO Promote jobs are for legal incentivized traffic and search engine optimization only.</p>',
                    confirmButtonText: "Got It",
                  }),
                  $(".submit-without-promotion").prop("disabled", !1),
                  $(".next-step-btn").prop("disabled", !1),
                  void $(".steps-bar__nav--next").removeClass("disabled")
                );
              t && $("input[name=promotion_amount]").val("0"),
                $.post(p.prop("action"), p.serialize(), function (t) {
                  t.ok
                    ? $(".steps-success-modal").modal({
                        backdrop: "static",
                        keyboard: !1,
                      })
                    : ($.bannerAlert(t.alert), $.scrollToTop()),
                    $(".submit-without-promotion").prop("disabled", !1),
                    $(".next-step-btn").prop("disabled", !1),
                    $(".steps-bar__nav--next").removeClass("disabled");
                });
            },
            m = function () {
              var t =
                  /click(?:ed)?\s+(?:any\s+)?(?:on\s+|(?:on\s+)?any\s+|\d+\s+|one\s+|two\s+)?(?:big\s+|(?:another\s+)?banner\s+)?ad|ad(?:vertisement|vertise)?(?:\s+url|\s+site|\s+link)|\(?advert(?:isement|ise)?s?\)?|(?:navigate|browse|url|multiple|the|big|google)\s+(?:on\s+|of\s+)?(?:the\s+)?a(?:\W)?d(?:\W)?s?\b|banner(?:\s+publicity)?|\Wa(?:\W)d(?:\W)?s?\b|\Wad(?:\W)s|(\W|^)+\d+ads?\b|google(?:ad|4d)|4ds|\Wads?(?:\W|$)/i,
                e = !1;
              return (
                t.test($("#jobTitle").val()) && (e = !0),
                t.test($("#workNotes").val()) && (e = !0),
                $("textarea[name='workSteps[]']").each(function () {
                  t.test($(this).val()) && (e = !0);
                }),
                $("textarea[name='proofSteps[]']").each(function () {
                  t.test($(this).val()) && (e = !0);
                }),
                $("input[name='vQuestions[]']").each(function () {
                  t.test($(this).val()) && (e = !0);
                }),
                $("input[name='vAnswers[]']").each(function () {
                  t.test($(this).val()) && (e = !0);
                }),
                e
              );
            },
            g = function (t) {
              var e = $(".pw-banner"),
                n = $("input[type=radio][name=zone]:checked").val(),
                a =
                  ($("input[type=radio][name=list]:checked").val(),
                  parseFloat($("#jobSettingsPayment").val()),
                  parseInt($("#jobSettingsScreenshots").val(), 10));
              switch ((e.hide(), t)) {
                case 0:
                  if ($('[name="list"]').length > 0) {
                    if (0 === $("input[type=radio][name=list]:checked").length)
                      return (
                        $.bannerAlert(
                          "You must select a list to proceed to the next step"
                        ),
                        $.scrollToTop(),
                        !1
                      );
                  } else if ("int" === n) {
                    if ($(".exclude-country:checked").length > 10)
                      return (
                        $.bannerAlert(
                          "You can exclude up to ten (10) countries when targeting International zone"
                        ),
                        $.scrollToTop(),
                        !1
                      );
                  } else if (
                    $(".exclude-country:visible").length &&
                    $(".exclude-country:visible").length ===
                      $(".exclude-country:checked").length
                  )
                    return (
                      $.bannerAlert(
                        "You can't exclude all countries from the zone"
                      ),
                      $.scrollToTop(),
                      !1
                    );
                  break;
                case 2:
                  var o = void 0,
                    s = void 0,
                    r = void 0,
                    l = [];
                  if (m())
                    return (
                      Swal.fire({
                        icon: "warning",
                        title: "Attention!",
                        html: '<p class="text-left">Please, be careful to avoid click fraud violations with your advertising partners while incentivizing traffic to your website or app. For your own protection, do not use wording in jobs that encourages clicking ads. SEO Promote jobs are for legal incentivized traffic and search engine optimization only.</p>',
                        confirmButtonText: "Got It",
                      }),
                      !1
                    );
                  var c = !1;
                  "" === $("#jobTitle").val().trim()
                    ? ($(".jobTitle.invalid-feedback").html(
                        "Please, enter the job title."
                      ),
                      (c = !0))
                    : $(".jobTitle.invalid-feedback").html("");
                  var d = [];
                  $("textarea[name='workSteps[]']").each(function () {
                    "" !== (o = $(this).val().trim()) && d.push(o),
                      (r = o.matchAll(
                        /\{\{(?!(?:PW_ID|JOB_ID)\b)(\w+?)\}\}/gi
                      ));
                    var t = !0,
                      e = !1,
                      n = void 0;
                    try {
                      for (
                        var a, s = (0, i.default)(r);
                        !(t = (a = s.next()).done);
                        t = !0
                      ) {
                        var c = a.value;
                        l.push(c[1].toUpperCase());
                      }
                    } catch (t) {
                      (e = !0), (n = t);
                    } finally {
                      try {
                        !t && s.return && s.return();
                      } finally {
                        if (e) throw n;
                      }
                    }
                  }),
                    0 === d.length
                      ? ($(".workStep.invalid-feedback.index-1").html(
                          "Please, enter the required work steps."
                        ),
                        (c = !0))
                      : $(".workStep.invalid-feedback.index-1").html("");
                  var u = $("#variables").val().split(/\n/);
                  if (
                    ((u = u.filter(function (t) {
                      return t.trim().length;
                    })).length > 1001
                      ? ($(".variables.invalid-feedback").html(
                          '"Variables values" are limited to the variable names header line plus 1000 lines of data.'
                        ),
                        (c = !0))
                      : $(".variables.invalid-feedback").html(""),
                    u.length < 2 && l.length > 0
                      ? ($(".variables.invalid-feedback").html(
                          'It seems you added variables in the work steps but did not inform the "Variables Values" field..'
                        ),
                        (c = !0))
                      : $(".variables.invalid-feedback").html(""),
                    u.length > 0 && 0 === l.length && $("#variables").val(""),
                    l.length > 0)
                  ) {
                    var p = u[0].toUpperCase().split(",");
                    l.every(function (t) {
                      return p.includes(t);
                    })
                      ? $(".variables.invalid-feedback").html("")
                      : ($(".variables.invalid-feedback").html(
                          'It seems you added variables in the work steps but did not inform the "Variables Values" field..'
                        ),
                        (c = !0)),
                      u.every(function (t) {
                        return l.length === t.split(",").length;
                      })
                        ? $(".variables.invalid-feedback").html("")
                        : ($(".variables.invalid-feedback").html(
                            'One of the "Variables Values" lines has more or less data. Check if your data has any additional comma or if anything is missing.'
                          ),
                          (c = !0)),
                      u.every(function (t) {
                        return t.length < 1025;
                      })
                        ? $(".variables.invalid-feedback").html("")
                        : ($.bannerAlert(
                            'One of the "Variables Values" lines has more than 1024 characters. Max of 1024 characters per line is allowed.'
                          ),
                          $(".variables.invalid-feedback").html(
                            'One of the "Variables Values" lines has more than 1024 characters. Max of 1024 characters per line is allowed.'
                          ),
                          (c = !0));
                  }
                  var f = [],
                    g = [],
                    h = [],
                    b = 0;
                  if (
                    ($("textarea[name='proofSteps[]']").each(function (t) {
                      (o = $(this).val().trim()),
                        (s = $("#proof-type-" + (t + 1)).val()),
                        "" !== o &&
                          (h.push(o),
                          ["text", "text-screenshot", "screenshot"].includes(
                            s
                          ) || f.push(t + 1)),
                        "text" === s && y(o) && g.push("proof " + (t + 1)),
                        ["text-screenshot", "screenshot"].includes(s) &&
                          (b += 1);
                    }),
                    0 === h.length
                      ? ($(".proof.invalid-feedback").html(
                          "Please, enter at least one proof."
                        ),
                        (c = !0))
                      : $(".proofs.invalid-feedback").html(""),
                    f.length > 0)
                  ) {
                    $(".proofTypes.invalid-feedback").html("");
                    for (var v = 0; v < f.length; v++)
                      $(".proofTypes.invalid-feedback.index-" + f[v]).html(
                        "Please, enter the proof type."
                      );
                    c = !0;
                  } else $(".proofTypes.invalid-feedback").html("");
                  if (
                    (g.length > 0 &&
                      ($.bannerAlert(
                        "Please, select the type screenshot for " + g.join(", ")
                      ),
                      $.scrollToTop()),
                    $("#jobSettingsScreenshots").val(b),
                    c)
                  )
                    return (
                      $.bannerAlert("Please, validate the fields.", !0),
                      $.scrollToTop(),
                      !1
                    );
                  if (b > 0) {
                    var w = $("#jobSettingsPayment"),
                      _ = $("input[type=radio][name=category]:checked").val(),
                      k =
                        ($("input[type=radio][name=subcategory]:checked"),
                        "37" === _ ? 0.04 : 0.05);
                    parseFloat(w.val()) < b * k &&
                      (w.val((b * k).toFixed(3)),
                      $(".jobSettingsPayment-2.invalid-feedback").html(
                        "The minimum payment per task has been changed because you've set a different worker level or increased the TTR or requested screenshots"
                      ));
                  }
                  break;
                case 3:
                  var x = parseInt($("#jobSettingsSpeed").val());
                  (c = !1),
                    x < 1 || x > 1e3
                      ? ($(".jobSettingsSpeed.invalid-feedback").html(
                          "Invalid speed. Speed must be between 1 and 1000."
                        ),
                        (c = !0))
                      : $(".jobSettingsSpeed.invalid-feedback").html("");
                  var C = parseInt($("#jobSettingsWorkers").val()),
                    S = picoworkers.getMinPositions();
                  C < S
                    ? ($(".jobSettingsWorkers.invalid-feedback").html(
                        "Invalid number of workers needed. Workers needed must be at least " +
                          S +
                          "."
                      ),
                      (c = !0))
                    : $(".jobSettingsWorkers.invalid-feedback").html(""),
                    a < 0 || a > 3
                      ? ($(".screenshots.invalid-feedback").html(
                          "Please, select between 0 and 3 screenshots."
                        ),
                        (c = !0))
                      : $(".screenshots.invalid-feedback").html("");
                  var D = $("#jobSettingsStartTime").val().trim(),
                    T = $("#jobSettingsEndTime").val().trim();
                  D.match(/^(([01][0-9]|2[0-3]):([0-5][0-9])|24:00)$/)
                    ? $(".jobSettingsStartTime.invalid-feedback").html("")
                    : ($(".jobSettingsStartTime.invalid-feedback").html(
                        "Please set the time in the format `HH:mm`, where `HH` ranges from 00 to 24 and `mm` ranges from 00 to 59."
                      ),
                      $("#advanced-settings").show(),
                      $("#jobSettingsStartTime").focus(),
                      (c = !0)),
                    T.match(/^(([01][0-9]|2[0-3]):([0-5][0-9])|24:00)$/)
                      ? $(".jobSettingsEndTime.invalid-feedback").html("")
                      : ($(".jobSettingsEndTime.invalid-feedback").html(
                          "Please set the time in the format `HH:mm`, where `HH` ranges from 00 to 24 and `mm` ranges from 00 to 59."
                        ),
                        $("#advanced-settings").show(),
                        $("#jobSettingsEndTime").focus(),
                        (c = !0)),
                    D >= T
                      ? ($(".jobSettingsStartTime.invalid-feedback").html(
                          "Start time cannot be greater than or equal to End time."
                        ),
                        $("#advanced-settings").show(),
                        $("#jobSettingsStartTime").focus(),
                        (c = !0))
                      : $(".jobSettingsStartTime.invalid-feedback").html("");
                  var B = parseInt($("#jobSettingsTTR").val()),
                    A = $("#jobSettingsTTRReason").val().trim();
                  if (
                    (B > 7 && "" == A
                      ? ($(".jobSettingsTTRReason.invalid-feedback").html(
                          "Please explain why you are asking for a Time to Rate higher than 7 days."
                        ),
                        $("#advanced-settings").show(),
                        $("#jobSettingsTTRReason").focus(),
                        (c = !0))
                      : $(".jobSettingsTTRReason.invalid-feedback").html(""),
                    picoworkers.updateTaskCost() && (c = !0),
                    $(".post-job__estimate-cost").hasClass("over-balance"))
                  )
                    return (
                      $.bannerAlert(
                        "You do not have enough funds to run this job. Consider depositing some money."
                      ),
                      $.scrollToTop(),
                      !1
                    );
                  if (c)
                    return (
                      $.bannerAlert("Please, validate the fields.", !0),
                      $.scrollToTop(),
                      !1
                    );
              }
              return !0;
            },
            h = function (t) {
              s.hide().removeClass("active").eq(t).fadeIn().addClass("active"),
                (d = $(".steps-bar__step").eq(t)),
                $(".steps-bar__step").removeClass("steps-bar__step--focus"),
                $(".steps-bar__step").removeClass("steps-bar__step--complete"),
                d.addClass("steps-bar__step--focus"),
                d.nextAll().length > 0 ? b() : v(),
                d.prevAll().length > 0
                  ? (w(), d.prevAll().addClass("steps-bar__step--complete"))
                  : _(),
                "Promotion" === s.eq(t).data("pw-step-name")
                  ? $("body").addClass("promotion-tab-enabled")
                  : $("body").removeClass("promotion-tab-enabled");
            },
            b = function () {
              c.removeClass("steps-bar__nav--disabled");
            },
            v = function () {
              c.addClass("steps-bar__nav--disabled");
            },
            w = function () {
              l.removeClass("steps-bar__nav--disabled");
            },
            _ = function () {
              l.addClass("steps-bar__nav--disabled");
            },
            y = function (t) {
              return !!t
                .replace(/\s/g, "")
                .match(
                  /scre?e?n?s?ho?o?r?[tp]|printscre?e?n?|screenimage|screengrab|pri?nt\.sc|picture|scnshot/i
                );
            };
          (s = o.find("[data-pw-step]")),
            (r = s.length),
            s.filter(".active").length || s.eq(0).addClass("active"),
            (u = s.index($("div.steps-step.active"))) > 0 ? w() : _(),
            a.html(""),
            s.each(function (t, e) {
              var n = $(
                '<li class="steps-bar__step">\n          <div class="steps-bar__step-icon">\n            <span>' +
                  $(e).data("pw-step-name") +
                  "</span>\n          </div>\n        </li>"
              );
              a.append(n);
            }),
            (d = a.find(".steps-bar__step").eq(u)).addClass(
              "steps-bar__step--focus"
            ),
            d.prevAll().length > 0 &&
              d.prevAll().addClass("steps-bar__step--complete"),
            l.on("click", function (t) {
              if (
                (t.preventDefault(),
                $(".pw-banner").hide(),
                $.scrollToTop(),
                d.length && d.index() > 0)
              ) {
                b();
                var e = d.prev();
                d.removeClass("steps-bar__step--focus"),
                  e
                    .removeClass("steps-bar__step--complete")
                    .addClass("steps-bar__step--focus"),
                  0 === e.index() && _(),
                  h(e.index()),
                  (d = e);
              }
            }),
            c.on("click", function (t) {
              if (
                (t.preventDefault(),
                $(".submit-without-promotion").prop("disabled", !0),
                $(".next-step-btn").prop("disabled", !0),
                $(".steps-bar__nav--next").addClass("disabled"),
                $(".pw-banner").hide(),
                $.scrollToTop(),
                d.length)
              ) {
                var e = d.index();
                if (!g(e))
                  return (
                    $(".submit-without-promotion").prop("disabled", !1),
                    $(".next-step-btn").prop("disabled", !1),
                    void $(".steps-bar__nav--next").removeClass("disabled")
                  );
                if ((w(), e > -1 && e < r - 1)) {
                  var n = d.next();
                  d
                    .removeClass("steps-bar__step--focus")
                    .addClass("steps-bar__step--complete"),
                    n
                      .removeClass("steps-bar__step--complete")
                      .addClass("steps-bar__step--focus"),
                    h(n.index()),
                    (d = n),
                    $(".submit-without-promotion").prop("disabled", !1),
                    $(".next-step-btn").prop("disabled", !1),
                    $(".steps-bar__nav--next").removeClass("disabled");
                } else f();
              } else $(".submit-without-promotion").prop("disabled", !1), $(".next-step-btn").prop("disabled", !1), $(".steps-bar__nav--next").removeClass("disabled");
            }),
            $(".submit-without-promotion").on("click", function (t) {
              if (
                (t.preventDefault(),
                $(this),
                $(".submit-without-promotion").prop("disabled", !0),
                $(".next-step-btn").prop("disabled", !0),
                $(".steps-bar__nav--next").addClass("disabled"),
                d.length)
              ) {
                var e = d.index();
                if (!g(e))
                  return (
                    $(".submit-without-promotion").prop("disabled", !1),
                    $(".next-step-btn").prop("disabled", !1),
                    void $(".steps-bar__nav--next").removeClass("disabled")
                  );
                f(!0);
              }
            }),
            $(".next-step-btn").on("click", function () {
              $(".steps-bar__nav--next").trigger("click");
            }),
            $(".goto-first-step").on("click", function (t) {
              var e = $(".steps-bar__step");
              $(".pw-banner").hide(),
                e.removeClass("steps-bar__step--focus"),
                e.removeClass("steps-bar__step--complete"),
                b(),
                _(),
                (d = e.eq(0)).addClass("steps-bar__step--focus"),
                $.scrollToTop(),
                h(0);
            }),
            $(document).on("click", ".post-job__steps-add", function () {
              var t, e, n, a, i, o;
              $(this).prop("disabled", !0),
                (t = $(".required-work .post-job__step").length + 1),
                (a = (n = (e = $(
                  ".required-work .post-job__step:last"
                )).clone()).find("textarea")),
                (i = n.find("label")),
                (o = n.find("div.workStep")),
                a.prop("id", "work" + t),
                a.val(""),
                i.prop("for", "work" + t),
                i.text("Step " + t),
                o.removeClass(),
                o.addClass("invalid-feedback d-block workStep index-" + t),
                n.find(".post-job__steps-delete").length ||
                  n
                    .children()
                    .first()
                    .append(
                      '<button type="button" class="btn btn-sm p-2 post-job__steps-delete text-gray" data-tippy="true" data-tippy-content="remove step">\n              <i class="fas fa-trash"></i>\n            </button>'
                    ),
                n.find(".text-label-join").addClass("flex-grow-1"),
                e.after(n),
                $(this).prop("disabled", !1);
            }),
            $(document).on("click", ".post-job__steps-delete", function () {
              $(this).closest(".post-job__step").remove();
            });
        }
      });
      var t = $(".post-job-summary");
      function e(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "radio";
        t.each(function (n, a) {
          var i = $(this),
            s = i.attr("name"),
            r = $('[data-summary-target="' + s + '"]').find("span");
          if ("radio" === e) r.text(i.siblings("label").text());
          else if ("checkbox" === e) {
            var l = [];
            t.each(function () {
              l.push($(this).siblings("label").text());
            }),
              r.text(l.join(", "));
          } else
            "boolean" === e
              ? i.is(":checked")
                ? r.text("yes")
                : r.text("no")
              : "multiinput" === e
              ? ((l = []),
                $('[name="' + s + '"]').each(function () {
                  $(this).val() && l.push(o($(this).val()));
                }),
                r.html(l.join("<br>")))
              : "proof-steps" === e
              ? ((l = []),
                $('[name="' + s + '"]').each(function (t) {
                  var e = $('[name="proofTypes[]"]')[t].value,
                    n = $(this).val();
                  n && e ? l.push("[" + e + "] " + o(n)) : n && l.push(o(n));
                }),
                r.html(l.join("<br>")))
              : "input" === e &&
                ("job_settings_payment" === s
                  ? r.text("" != i.val() ? parseFloat(i.val()).toFixed(3) : "")
                  : r.text(i.val()));
        });
      }
      function n(t) {
        $("[data-promotion-job-title]").text(t);
      }
      function a(t, e) {
        var n = $("[data-promotion-cat-id]");
        n.data("promotion-cat-id", t),
          n.find(".premium-positions__cat-name").text(e);
      }
      function o(t) {
        return t
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
      }
      t.find("[data-summary-target]").each(function (t, e) {
        var n = $(this),
          a = n.data("summary-target"),
          i = n.find("span");
        $("body").on("change", '[name="' + a + '"]', function () {
          switch (a) {
            case "zone":
            case "list":
            case "category":
            case "subcategory":
            case "autorate_tasks":
              i.text($(this).siblings("label").text());
              break;
            case "excludedCountries[]":
              var t = [];
              $('[name="' + a + '"]')
                .filter(":checked")
                .each(function () {
                  t.push($(this).siblings("label").text());
                }),
                i.text(t.join(", "));
              break;
            case "Pause_after_approval":
            case "notify_followers":
            case "hold_to_accept":
              $(this).is(":checked") ? i.text("yes") : i.text("no");
              break;
            case "workSteps[]":
              (t = []),
                $('[name="workSteps[]"]').each(function () {
                  var e = $(this).val();
                  e && t.push(o(e));
                }),
                i.html(t.join("<br>"));
              break;
            case "proofSteps[]":
            case "proofTypes[]":
              (t = []),
                $('[name="proofSteps[]"]').each(function (e) {
                  var n = $('[name="proofTypes[]"]')[e].value,
                    a = $(this).val();
                  a && n ? t.push("[" + n + "] " + o(a)) : a && t.push(o(a));
                }),
                i.html(t.join("<br> "));
              break;
            case "job_settings_payment":
              i.text(
                "" != $(this).val() ? parseFloat($(this).val()).toFixed(3) : ""
              );
              break;
            default:
              i.text($(this).val());
          }
        });
      }),
        e($('[name="zone"]').filter(":checked"), "radio"),
        e($('[name="excludedCountries[]"]').filter(":checked"), "checkbox"),
        e($('[name="list"]').filter(":checked"), "radio"),
        e($('[name="category"]').filter(":checked"), "radio"),
        e($('[name="subcategory"]').filter(":checked"), "radio"),
        e(
          $(
            '\n    [name="job_settings_level"],\n    [name="job_settings_speed"],\n    [name="job_settings_workers"],\n    [name="job_settings_payment"],\n    [name="job_settings_screenshots"],\n    [name="job_settings_hold_time"],\n    [name="job_settings_ttr"],\n    [name="job_settings_start_time"],\n    [name="job_settings_end_time"],\n    [name="job_title"],\n    [name="work_notes"]\n  '
          ),
          "input"
        ),
        e($('[name="hold_to_accept"]'), "boolean"),
        e($('[name="notify_followers"]'), "boolean"),
        e($('[name="Pause_after_approval"]'), "boolean"),
        e($('[name="autorate_tasks"]'), "radio"),
        e($('[name="workSteps[]"]'), "multiinput"),
        e($('[name="proofSteps[]"]'), "proof-steps"),
        t.find("[data-summary-clear]").on("click", function (t) {
          t.preventDefault(), (window.location = window.location.pathname);
        }),
        $(".proof-type").select2({
          width: "100%",
          theme: "pico",
          minimumResultsForSearch: -1,
        }),
        $(document).on("blur", '[name="job_title"]', function (t) {
          n($(this).val());
        }),
        $(document).on("change", '[name="category"]', function (t) {
          var e = $(this);
          a(e.val(), e.next("label").text());
        }),
        (function () {
          var t = $('[name="job_title"]'),
            e = $('[name="category"]').filter(":checked");
          t.length && n($('[name="job_title"]').val()),
            e.length && a(e.val(), e.next("label").text());
        })();
    };
  },
  476: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(".table-checkable").checkableTable();
      }),
      (function (t) {
        t.fn.checkableTable = function (e) {
          var n = t.extend(
            {
              wholeRowClick: !1,
              cancelText: "Cancel",
              showCancel: !0,
            },
            e
          );
          t(this).each(function (e, a) {
            var i = t(this),
              o = i.find("tbody > tr"),
              s = i.find("thead input[type=checkbox]"),
              r = i.find("thead .table-col-title"),
              l = o.find("input[type=checkbox]"),
              c = i.find(".table-col-action"),
              d = t(
                '<button class="btn btn-ghost btn-with-icon table-checkable__cancel p-0"><span>Cancel</span> <i class="sg-icon-close"></i></button>'
              ),
              u = r.text();
            function p() {
              l.each(function (e, n) {
                var a = t(n);
                (n.checked = !1),
                  a.closest("tr").removeClass("table-row--checked");
              }),
                g(),
                b(),
                r.text(u),
                d.css("opacity", 0);
            }
            function f() {
              (s[0].checked = !1), g(), b(), d.css("opacity", 1);
            }
            function m() {
              s.closest("tr").addClass("table-row--checked");
            }
            function g() {
              s.closest("tr").removeClass("table-row--checked");
            }
            function h() {
              i.addClass("table-checkable--checked");
            }
            function b() {
              i.removeClass("table-checkable--checked");
            }
            n.wholeRowClick &&
              o.on("click", function (e) {
                t(this).find("input[type=checkbox]"),
                  "checkbox" !== e.target.type &&
                    t(":checkbox", this).trigger("click");
              }),
              c.length && n.showCancel && (c.append(d), d.css("opacity", 0)),
              l.on("change", function (e) {
                var n = t(this),
                  a = o.find("input[type=checkbox]").filter(":checked").length;
                e.target.checked
                  ? n.closest("tr").addClass("table-row--checked")
                  : n.closest("tr").removeClass("table-row--checked"),
                  a > 0
                    ? (s.is(":checked") ||
                        ((s[0].checked = !0), m(), h(), d.css("opacity", 1)),
                      r.text(a + " selected"))
                    : (s.is(":checked") && f(), r.text(u));
              }),
              s.on("click", function (e) {
                e.target.checked
                  ? (l.each(function (e, n) {
                      var a = t(n);
                      (n.checked = !0),
                        a.closest("tr").addClass("table-row--checked");
                    }),
                    m(),
                    h(),
                    r.text(l.length + " selected"),
                    d.css("opacity", 1))
                  : p();
              }),
              r.on("click", function (t) {
                s.click();
              }),
              d.on("click", function (t) {
                t.preventDefault(), f(), p();
              });
          });
        };
      })(jQuery);
  },
  477: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(".toggle-on-click").toggleOnClick();
      }),
      (function (t) {
        t.fn.toggleOnClick = function (e) {
          var n = t.extend(
            {
              content: ".toggle-on-click__content",
              trigger: ".toggle-on-click__trigger",
              close: ".toggle-on-click__close",
            },
            e
          );
          t(this).each(function (e, a) {
            var i = t(this),
              o = i.find(n.trigger),
              s = i.find(n.content),
              r = i.find(n.close);
            s.hide(),
              o.on("click", function (t) {
                t.preventDefault(), o.hide(), s.show();
              }),
              r.on("click", function (t) {
                t.preventDefault(), o.show(), s.hide();
              });
          });
        };
      })(jQuery);
  },
  478: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $("[data-show-on-click], [data-hide-on-click]").pwToggle();
      }),
      (function (t) {
        t.fn.pwToggle = function (e) {
          t(this).each(function (e, n) {
            var a = t(this),
              i = t(a.data("show-on-click")),
              o = t(a.data("hide-on-click"));
            a.on("click", function (e) {
              e.preventDefault(),
                o.hide(),
                t(document).scrollTop(0),
                i.fadeIn();
            });
          });
        };
      })(jQuery);
  },
  479: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(document).on("click", ".pg-withdrawals", function (t) {
          t.preventDefault(),
            $.post($(this).attr("href"), {}, function (t) {
              $("#payments-list").html(t);
            });
        }),
          $(document).on("click", ".period-transactions", function (t) {
            t.preventDefault();
            var e = $(this).attr("href");
            localStorage.setItem(
              "transaction-period-filter",
              e.split("period=")[1]
            ),
              $.post($(this).attr("href"), {}, function (t) {
                $("#transactions-list").html(t);
              });
          });
        var t = $(window),
          e = !1,
          n = !1,
          a = $(".btn-billing-paginate");
        $(document).on("scroll", function () {
          a.length &&
            !a.is(":hidden") &&
            (e ||
              n ||
              (a.offset().top - (t.height() + t.scrollTop()) < 100 &&
                a.trigger("click")));
        }),
          $(document).on("click", ".btn-billing-paginate", function () {
            var t = $(this),
              a = parseInt(t.data("page"), 10);
            (e = !0),
              $.post(
                "/wallet/list-receipts.php",
                {
                  csrf_token: csrf_token,
                  page: a,
                },
                function (i) {
                  (e = !1),
                    i.length
                      ? (t.data("page", a + 1), $("tbody").append(i))
                      : ($(".btn-billing-paginate").hide(), (n = !0));
                }
              );
          });
        var i = 1,
          o = !1;
        "/wallet.php" == $(location).attr("pathname") &&
          ($(document).on("click", "#loadmore-transactions", function () {
            $.ajax({
              url: "/ajax.php",
              type: "post",
              data: {
                action: "load_more_transactions",
                page: (i += 1),
                fperiod: $("#fperiod").val(),
              },
              beforeSend: function (t) {
                $("#loadmore-transactions").html(
                  '<p class="mb-0 text-center w-100" style=""><i class="fas fa-spinner fa-spin"></i></p>'
                ),
                  $("#loadmore-transactions").prop("disabled", !0);
              },
              success: function (t) {
                t.data.data.length
                  ? ($("#loadmore-transactions").html("load more"),
                    $("#loadmore-transactions").prop("disabled", !1),
                    (o = !1),
                    t.data.data.map(function (t) {
                      var e =
                        "\n                <tr>\n                  <td>" +
                        t.formated_data +
                        "</td>\n                  <td>" +
                        t.short_description +
                        '</td>\n                  <td class="table-cell-cost text-' +
                        (t.amount < 0 ? "danger" : "primary") +
                        '"><small>$</small>' +
                        t.amount +
                        "</td>\n                </tr>\n              ";
                      $("#table-transactions").find("tbody").append(e);
                    }))
                  : ((o = !0), $("#loadmore-transactions").hide());
              },
            });
          }),
          $(document).ready(function () {
            $(document).on("scroll", function () {
              0 == o &&
                (function (e) {
                  if (e.length) {
                    var n = t.scrollTop(),
                      a = n + t.height(),
                      i = e.offset().top;
                    return i + e.height() > n && i < a;
                  }
                })($("#loadmore-transactions")) &&
                ((o = !0), $("#loadmore-transactions").trigger("click"));
            });
          })),
          $(document).on("click", ".transactions-status-filter", function (t) {
            t.preventDefault();
            var e = $(this).data("filter"),
              n = $(this).attr("href"),
              a = localStorage.getItem("transaction-period-filter");
            $.post(n + "&period=" + a, {}, function (t) {
              $("#transactions-list").html(t),
                $(".list-filter__selection.status").html(e);
            });
          });
      });
  },
  480: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        var t = $(".withdraw-method"),
          e = $(".withdraw-request"),
          n = $("#amounts"),
          a = $(".add-method"),
          i = $("input[name=amount_to_withdraw]"),
          o = $("button[type=submit]"),
          s = $("#withdraw-type"),
          r = $("#crypto-wallet"),
          l = $("#uphold-account"),
          c = $("#uphold-card"),
          d = $("#crypto-wallet-input"),
          u = $("#paypal-box"),
          p = $("#paypal-terms"),
          f = $("#crypto-box"),
          m = $("#uphold-box"),
          g = $("#crypto-terms"),
          h = $("#uphold-terms"),
          b = $("#crypto-range"),
          v = $("#token-title"),
          w = $("#token-field"),
          _ = $("#token"),
          y = $("#token-btn"),
          k = $("#token-submit"),
          x = !1,
          C = 0,
          S = "",
          D = function (t, e) {
            var n = Math.pow(10, e);
            return Math.round(t * n) / n;
          },
          T = function (t, e) {
            var n = D(t * (0.02 + e / 100 + 0.1), 2),
              a = D(t * (e / 100 + 0.1), 2),
              i = D(0.00567 * t, 2),
              o = D(0.0342 * t, 2);
            switch (S) {
              case "paypal":
              case "skrill":
              case "airtm":
                $("#crypto-range").hide(),
                  $(".withdraw-fee-amount").text("" + n.toFixed(2)),
                  $(".net-amount").text("" + (t - n).toFixed(2)),
                  $("#crypto-wallet-input").prop("required", !1),
                  $("#uphold-card").prop("required", !1);
                break;
              case "ltc":
                $("#crypto-range").show(),
                  $(".withdraw-fee-amount").text("" + a.toFixed(2)),
                  $(".net-amount").html(
                    (t - o - a).toFixed(2) +
                      " &mdash; " +
                      (t - i - a).toFixed(2)
                  ),
                  $("#crypto-wallet-input").prop("required", !0),
                  $("#uphold-card").prop("required", !1);
                break;
              case "uphold":
                $("#crypto-range").hide(),
                  $(".withdraw-fee-amount").text("" + n.toFixed(2)),
                  $(".net-amount").text("" + (t - n).toFixed(2)),
                  $("#crypto-wallet-input").prop("required", !1),
                  $("#uphold-card").prop("required", !0);
                break;
              case "payoneer":
                $("#crypto-range").hide(),
                  $(".withdraw-fee-amount").text("" + n.toFixed(2)),
                  $(".net-amount").text("" + (t - n).toFixed(2)),
                  $("#crypto-wallet-input").prop("required", !1),
                  $("#uphold-card").prop("required", !1);
            }
          };
        t.on("click", function (v) {
          v.preventDefault();
          var w = $(this),
            y = w.find("img"),
            k = parseFloat(w.data("fees")),
            D = w.data("withdraw-type"),
            B = parseFloat(w.data("amount-min")),
            A = parseFloat(w.data("amount-max"));
          (0 === B && 0 === A) ||
            ((C = k),
            (S = D),
            t.removeClass("active"),
            w.addClass("active"),
            e.addClass("withdraw-method--selected"),
            a.addClass("add-method--added"),
            n.show(),
            e.find(".withdraw-request__inactive").slideDown(300),
            a.find("img").attr("src", y.attr("src")),
            y.attr("width") && a.find("img").attr("width", y.attr("width")),
            T(A, k),
            s.val(D),
            i.data("ionRangeSlider").update({
              min: B,
              max: A,
              from: A,
            }),
            "paypal" === D
              ? (u.show(),
                m.hide(),
                l.hide(),
                c.prop("required", !1),
                f.hide(),
                b.hide(),
                r.hide(),
                d.prop("required", !1),
                p.prop("checked") && x && "" != _.val().trim()
                  ? o.removeAttr("disabled")
                  : o.attr("disabled", "disabled"))
              : "eth" === D || "ltc" === D
              ? (r.show(),
                d.prop("required", !0),
                m.hide(),
                l.hide(),
                c.prop("required", !1),
                f.show(),
                b.show(),
                u.hide(),
                g.prop("checked") &&
                x &&
                "" != _.val().trim() &&
                "" != d.val().trim()
                  ? o.removeAttr("disabled")
                  : o.attr("disabled", "disabled"))
              : "uphold" == D
              ? (m.show(),
                l.show(),
                c.prop("required", !0),
                f.hide(),
                u.hide(),
                b.hide(),
                r.hide(),
                d.prop("required", !1),
                "" != c.val() && h.prop("checked") && x && "" != _.val().trim()
                  ? o.removeAttr("disabled")
                  : o.attr("disabled", "disabled"))
              : (u.hide(),
                m.hide(),
                l.hide(),
                f.hide(),
                b.hide(),
                r.hide(),
                d.prop("required", !1),
                c.prop("required", !1),
                x && "" != _.val().trim()
                  ? o.removeAttr("disabled")
                  : o.attr("disabled", "disabled")));
        }),
          i.on("change", function () {
            var t = $(this).val();
            T(t, C);
          }),
          p.on("change", function () {
            p.prop("checked") && x && "" != _.val().trim()
              ? o.removeAttr("disabled")
              : o.attr("disabled", "disabled");
          }),
          g.on("change", function () {
            g.prop("checked") &&
            x &&
            "" != _.val().trim() &&
            "" != d.val().trim()
              ? o.removeAttr("disabled")
              : o.attr("disabled", "disabled");
          }),
          c.on("change", function () {
            "" != c.val() && x && "" != _.val().trim()
              ? o.removeAttr("disabled")
              : o.attr("disabled", "disabled");
          }),
          h.on("change", function () {
            "" != c.val() && h.prop("checked") && x && "" != _.val().trim()
              ? o.removeAttr("disabled")
              : o.attr("disabled", "disabled");
          }),
          d.on("input", function () {
            d.val(d.val().replace(/\s/gi, "")),
              g.prop("checked") &&
              x &&
              "" != _.val().trim() &&
              "" != d.val().trim()
                ? o.removeAttr("disabled")
                : o.attr("disabled", "disabled");
          }),
          _.on("input", function () {
            _.val(_.val().replace(/[^\d]/g, "")),
              "uphold" == $(".withdraw-method.active").data("withdraw-type")
                ? "" != c.val() &&
                  h.prop("checked") &&
                  x &&
                  "" != _.val().trim()
                  ? o.removeAttr("disabled")
                  : o.attr("disabled", "disabled")
                : "eth" == $(".withdraw-method.active").data("withdraw-type") ||
                  "ltc" == $(".withdraw-method.active").data("withdraw-type")
                ? g.prop("checked") &&
                  x &&
                  "" != _.val().trim() &&
                  "" != d.val().trim()
                  ? o.removeAttr("disabled")
                  : o.attr("disabled", "disabled")
                : "paypal" == $(".withdraw-method.active").data("withdraw-type")
                ? p.prop("checked") && x && "" != _.val().trim()
                  ? o.removeAttr("disabled")
                  : o.attr("disabled", "disabled")
                : x && "" != _.val().trim()
                ? o.removeAttr("disabled")
                : o.attr("disabled", "disabled");
          }),
          k.on("click", function () {
            $.post(
              "/payments/submit-token.php",
              {
                withdraw_type: $("#withdraw-type").val(),
              },
              function (t) {
                t.ok
                  ? ((x = !0),
                    v.text("Confirm your token"),
                    y.hide(),
                    w.show(),
                    "paypal" === s.val()
                      ? p.prop("checked")
                        ? o.removeAttr("disabled")
                        : o.attr("disabled", "disabled")
                      : "ltc" === s.val()
                      ? g.prop("checked") && "" != d.val().trim()
                        ? o.removeAttr("disabled")
                        : o.attr("disabled", "disabled")
                      : "uphold" === s.val()
                      ? "" != c.val() && h.prop("checked")
                        ? o.removeAttr("disabled")
                        : o.attr("disabled", "disabled")
                      : o.removeAttr("disabled"))
                  : Swal.fire("Something went wrong!", t.alert, "error");
              }
            );
          }),
          $(document).on("click", ".cancel-withdraw", function (t) {
            var e = this;
            t.preventDefault(), t.stopPropagation();
            var n,
              a,
              i = $(this).closest("tr");
            (n = function () {
              $.post($(e).attr("href"), {}, function (t) {
                var e = $(".pw-banner");
                t.ok
                  ? (e.addClass("notice"),
                    e.html(
                      '<span>Withdrawal has been canceled and refunded! Reload the page to see your updated balance.</span><button type="button" class="close pw-banner-close" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
                    ),
                    e.show(),
                    i.remove())
                  : (e.addClass("alert"),
                    e.html(
                      "<span>" +
                        t.alert +
                        '</span><button type="button" class="close pw-banner-close" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
                    ),
                    e.show());
              });
            }),
              (a = $("#cancelWithdrawModal")).modal("show"),
              $("#confirm-cancel-btn")
                .unbind()
                .one("click", n)
                .one("click", function () {
                  return a.modal("hide");
                });
          }),
          $(document).on("click", ".payoneer-connect", function (t) {
            t.preventDefault(),
              t.stopPropagation(),
              $.post("/payments/payoneer-connect.php", function (t) {
                t.success
                  ? (window.location.href = t.data.registration_link)
                  : Swal.fire("Something went wrong!", t.data.alert, "error");
              });
          });
      });
  },
  481: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        function t(t, e) {
          return t.length > e ? t.substr(0, e - 1) + "&hellip;" : t;
        }
        $(document).on("click", ".btn-hide-job", function (e) {
          e.preventDefault(), e.stopPropagation();
          var n = $(this).data("job-id"),
            a = $("a[data-job-id=" + n + "], tr[data-job-id=" + n + "]"),
            i = a.find(".js-job-item-name").text().trim();
          $.post(
            "/jobs/hide-job.php",
            {
              jobId: n,
              csrf_token: csrf_token,
            },
            function (e) {
              e.ok
                ? ($.notify(
                    'You have hidden the job "' +
                      t(i, 20) +
                      '". <span data-job-id="' +
                      n +
                      '">Click here to undo</span>',
                    {
                      position: "right bottom",
                      clickToHide: !1,
                      autoHide: !0,
                      autoHideDelay: 15e3,
                      className: "base-success",
                      style: "undo-job",
                    }
                  ),
                  a.hide())
                : $.notify(
                    'Error hidding the job "' +
                      t(i, 20) +
                      '". Details: ' +
                      t(e.alert, 30),
                    {
                      position: "right bottom",
                      clickToHide: !0,
                      autoHide: !0,
                      autoHideDelay: 15e3,
                      className: "",
                      style: "undo-job",
                    }
                  );
            }
          );
        }),
          $(document).on(
            "click",
            ".notifyjs-undo-job-base-success",
            function (e) {
              e.preventDefault(),
                e.stopPropagation(),
                "undefined" != typeof timerTimeout &&
                  clearTimeout(timerTimeout);
              var n = $(this),
                a = n.find("span").data("job-id");
              n.addClass("is-loading"),
                $.post(
                  "/jobs/unhide-job.php",
                  {
                    jobId: a,
                    csrf_token: csrf_token,
                  },
                  function (e) {
                    e.ok
                      ? (n.trigger("notify-hide"),
                        $(
                          "a[data-job-id=" + a + "], tr[data-job-id=" + a + "]"
                        ).show())
                      : $.notify(
                          'Error unhidding the job "' +
                            t(jobName, 20) +
                            '". Details: ' +
                            t(e.alert, 30),
                          {
                            position: "right bottom",
                            clickToHide: !0,
                            autoHide: !0,
                            autoHideDelay: 15e3,
                            className: "",
                            style: "undo-job",
                          }
                        );
                  }
                );
            }
          ),
          $(document).on("click", "[data-job-redirect]", function (t) {
            if ("A" !== t.target.nodeName) {
              t.preventDefault();
              var e = $(this).data("job-redirect");
              window.location.href = e;
            }
          }),
          $(document).on(
            "click",
            ".first-access-warning button.agree",
            function () {
              $(".first-access-warning").hide(),
                $(".overlay").hide(),
                $.post("account/set-first-access-off.php", !0, function (t) {});
            }
          );
      });
  },
  482: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        function t(t) {
          $.ajax({
            type: "GET",
            url: "/worker/task-details.php?Id=" + t,
            success: function (e) {
              $("#finishedJobSidePopup").html(e), $("#complain-tid").val(t);
            },
          });
        }
        $(document).on("click", "[data-task-window]", function (e) {
          e.preventDefault(), t($(this).data("task-id"));
        }),
          $(document).on("click", "#load-more-tasks", function (t) {
            t.preventDefault();
            var e = $("#load-more-tasks"),
              n = e.data("page"),
              a = e.data("order"),
              i = e.data("filter");
            $.post(
              "/worker.php",
              {
                page: n,
                sort: a,
                filter: i,
              },
              function (t) {
                t.length
                  ? ($("#tasks-list").append(t), e.data("page", n + 1))
                  : e.hide();
              }
            );
          }),
          $(document).on("click", ".side-popup-modal__submit", function (t) {
            t.preventDefault();
            var e = $(this).closest("form");
            $.post(e.attr("action"), e.serialize(), function (t) {
              $("#fileComplain").removeClass("side-popup-modal--visible"),
                e[0].reset(),
                $("#complain-result").html(t),
                $("#complainSubmitted").addClass("side-popup-modal--visible");
            });
          }),
          $(document).on("click", ".redo-task", function (t) {
            location.href = $(this).prop("href");
          }),
          $(document).on("click", ".delete-task", function (t) {
            var e = this;
            t.preventDefault(), t.stopPropagation();
            var n,
              a,
              i = $(this);
            (n = function () {
              $.post(
                $(e).attr("href"),
                {
                  csrf_token: csrf_token,
                },
                function (t) {
                  t.ok ? $.bannerSuccess(t.notice) : $.bannerAlert(t.alert),
                    i.closest("tr").remove();
                }
              );
            }),
              (a = $("#deleteTaskModal")).modal("show"),
              $("#deleteTaskModal .confirm-btn")
                .unbind()
                .one("click", n)
                .one("click", function () {
                  return a.modal("hide");
                });
          }),
          $(".results-bar").on(
            "click",
            ".unblock-employer, .block-employer",
            function (t) {
              var e,
                n,
                a = $(this);
              t.preventDefault(),
                t.stopPropagation(),
                a.hasClass("unblock-employer")
                  ? ((e = function () {
                      $.post(
                        a.attr("href"),
                        {
                          csrf_token: csrf_token,
                        },
                        function (t) {
                          if (t.ok) {
                            $.bannerSuccess(t.notice);
                            var e = a.find("i");
                            if (e.length > 0) {
                              if (
                                (a.attr(
                                  "href",
                                  a
                                    .attr("href")
                                    .replace(
                                      /\/unblock-employer/,
                                      "/block-employer"
                                    )
                                ),
                                a
                                  .removeClass("unblock-employer")
                                  .addClass("block-employer"),
                                e.removeClass("fa-lock").addClass("fa-ban"),
                                a.attr(
                                  "data-original-title",
                                  "Block all jobs from this employer"
                                ),
                                a.data("task-id"))
                              ) {
                                var n = $(
                                  "#finished-task-" + a.data("task-id")
                                );
                                n.attr(
                                  "href",
                                  n
                                    .attr("href")
                                    .replace(
                                      /\/unblock-employer/,
                                      "/block-employer"
                                    )
                                ),
                                  n
                                    .removeClass("unblock-employer")
                                    .addClass("block-employer"),
                                  n
                                    .find("i")
                                    .removeClass("fa-lock")
                                    .addClass("fa-ban"),
                                  n.attr(
                                    "data-original-title",
                                    "Block all jobs from this employer"
                                  );
                              }
                            } else window.location.href = "/jobs.php";
                          } else $.bannerAlert(t.alert);
                        }
                      );
                    }),
                    (n = $("#unblockEmpModal")).modal("show"),
                    $("#unblockEmpModal .confirm-btn")
                      .unbind()
                      .one("click", e)
                      .one("click", function () {
                        return n.modal("hide");
                      }))
                  : (function (t) {
                      var e = $("#blockEmpModal");
                      e.modal("show"),
                        $("#blockEmpModal .confirm-btn")
                          .unbind()
                          .one("click", function () {
                            $.post(
                              a.attr("href"),
                              {
                                csrf_token: csrf_token,
                              },
                              function (t) {
                                if (t.ok) {
                                  $.bannerSuccess(t.notice);
                                  var e = a.find("i");
                                  if (e.length > 0) {
                                    if (
                                      (a.attr(
                                        "href",
                                        a
                                          .attr("href")
                                          .replace(
                                            /\/block-employer/,
                                            "/unblock-employer"
                                          )
                                      ),
                                      a
                                        .removeClass("block-employer")
                                        .addClass("unblock-employer"),
                                      e
                                        .removeClass("fa-ban")
                                        .addClass("fa-lock"),
                                      a.attr(
                                        "data-original-title",
                                        "Unblock all jobs from this employer"
                                      ),
                                      a.data("task-id"))
                                    ) {
                                      var n = $(
                                        "#finished-task-" + a.data("task-id")
                                      );
                                      n.attr(
                                        "href",
                                        n
                                          .attr("href")
                                          .replace(
                                            /\/block-employer/,
                                            "/unblock-employer"
                                          )
                                      ),
                                        n
                                          .removeClass("block-employer")
                                          .addClass("unblock-employer"),
                                        n
                                          .find("i")
                                          .removeClass("fa-ban")
                                          .addClass("fa-lock"),
                                        n.attr(
                                          "data-original-title",
                                          "Unblock all jobs from this employer"
                                        );
                                    }
                                  } else window.location.href = "/jobs.php";
                                } else $.bannerAlert(t.alert);
                              }
                            );
                          })
                          .one("click", function () {
                            return e.modal("hide");
                          });
                    })();
            }
          ),
          $(".bl-unbl-employer").on("click", "a, font", function (t) {
            var e,
              n,
              a = $(this);
            (a.hasClass("unblock-employer") || a.hasClass("block-employer")) &&
              (t.preventDefault(),
              t.stopPropagation(),
              a.hasClass("unblock-employer")
                ? ((e = function () {
                    $.post(
                      a.attr("href"),
                      {
                        csrf_token: csrf_token,
                      },
                      function (t) {
                        if (t.ok) {
                          $.bannerSuccess(t.notice);
                          var e = a.find("i");
                          if (e.length > 0) {
                            if (
                              (a.attr(
                                "href",
                                a
                                  .attr("href")
                                  .replace(
                                    /\/unblock-employer/,
                                    "/block-employer"
                                  )
                              ),
                              a
                                .removeClass("unblock-employer")
                                .addClass("block-employer"),
                              e.removeClass("fa-lock").addClass("fa-ban"),
                              a.attr(
                                "data-original-title",
                                "Block all jobs from this employer"
                              ),
                              a.data("task-id"))
                            ) {
                              var n = $("#finished-task-" + a.data("task-id"));
                              n.attr(
                                "href",
                                n
                                  .attr("href")
                                  .replace(
                                    /\/unblock-employer/,
                                    "/block-employer"
                                  )
                              ),
                                n
                                  .removeClass("unblock-employer")
                                  .addClass("block-employer"),
                                n
                                  .find("i")
                                  .removeClass("fa-lock")
                                  .addClass("fa-ban"),
                                n.attr(
                                  "data-original-title",
                                  "Block all jobs from this employer"
                                );
                            }
                          } else window.location.href = "/jobs.php";
                        } else $.bannerAlert(t.alert);
                      }
                    );
                  }),
                  (n = $("#unblockEmpModal")).modal("show"),
                  $("#unblockEmpModal .confirm-btn")
                    .unbind()
                    .one("click", e)
                    .one("click", function () {
                      return n.modal("hide");
                    }))
                : (function (t) {
                    var e = $("#blockEmpModal");
                    e.modal("show"),
                      $("#blockEmpModal .confirm-btn")
                        .unbind()
                        .one("click", function () {
                          $.post(
                            a.attr("href"),
                            {
                              csrf_token: csrf_token,
                            },
                            function (t) {
                              if (t.ok) {
                                $.bannerSuccess(t.notice);
                                var e = a.find("i");
                                if (e.length > 0) {
                                  if (
                                    (a.attr(
                                      "href",
                                      a
                                        .attr("href")
                                        .replace(
                                          /\/block-employer/,
                                          "/unblock-employer"
                                        )
                                    ),
                                    a
                                      .removeClass("block-employer")
                                      .addClass("unblock-employer"),
                                    e.removeClass("fa-ban").addClass("fa-lock"),
                                    a.attr(
                                      "data-original-title",
                                      "Unblock all jobs from this employer"
                                    ),
                                    a.data("task-id"))
                                  ) {
                                    var n = $(
                                      "#finished-task-" + a.data("task-id")
                                    );
                                    n.attr(
                                      "href",
                                      n
                                        .attr("href")
                                        .replace(
                                          /\/block-employer/,
                                          "/unblock-employer"
                                        )
                                    ),
                                      n
                                        .removeClass("block-employer")
                                        .addClass("unblock-employer"),
                                      n
                                        .find("i")
                                        .removeClass("fa-ban")
                                        .addClass("fa-lock"),
                                      n.attr(
                                        "data-original-title",
                                        "Unblock all jobs from this employer"
                                      );
                                  }
                                } else window.location.href = "/jobs.php";
                              } else $.bannerAlert(t.alert);
                            }
                          );
                        })
                        .one("click", function () {
                          return e.modal("hide");
                        });
                  })());
          }),
          $(document).on("click", ".fl-unfl-employer", function (t) {
            t.preventDefault();
            var e = $(this);
            $.post(
              e.attr("href"),
              {
                csrf_token: csrf_token,
              },
              function (t) {
                t.ok
                  ? (Swal.fire("Done!", t.notice, "success"),
                    e.text(t.label),
                    e.attr("href", t.url))
                  : Swal.fire("Whoops!", t.alert, "danger");
              }
            );
          }),
          $(window).on("load", function () {
            var e = new URL(window.location.href).searchParams.get("task");
            e &&
              (t(e),
              $(".side-popup-bg").addClass("side-popup--visible"),
              $(".side-popup-bg").show(),
              $("#finishedJobSidePopup").addClass("side-popup--visible"));
          });
      });
  },
  483: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(document).on("click", "#supportTab a", function (t) {
          t.preventDefault();
          var e = $(this),
            n = e.attr("href"),
            a = n.split("-")[1];
          return (
            $(n).html("<p>Loading messages...</p>"),
            $.post("/support.php?Folder=" + a, function (t) {
              $(n).html(t);
            }),
            e.tab("show"),
            !1
          );
        }),
          $(document).on("click", ".messages-list a", function (t) {
            t.preventDefault();
            var e = $(this),
              n = e.data("id");
            return (
              $.get("/support/message.php?Id=" + n, function (t) {
                $("#message-content").html(t),
                  e.addClass("messages-item--read"),
                  $("#message-modal").modal("show");
              }),
              !1
            );
          }),
          $(document).on("click", ".move-msg-btn", function (t) {
            t.preventDefault();
            var e = $(this);
            return (
              $.post(
                e.attr("href"),
                {
                  csrf_token: csrf_token,
                },
                function (t) {
                  if (t.ok) {
                    var n = e.attr("href").split("=")[1];
                    $("a[data-id=" + n + "]").remove(),
                      $("#message-modal").modal("hide");
                  }
                }
              ),
              !1
            );
          }),
          $(document).on("click", ".support-categories a", function (t) {
            t.preventDefault();
            var e = $(this).data("category-id");
            $(".support-categories a").removeClass("active"),
              $(this).addClass("active"),
              $("#category").val(e);
          }),
          $(document).on("click", "#ticketsTab a", function (t) {
            t.preventDefault();
            var e = $(this),
              n = e.attr("href"),
              a = n.split("-")[1];
            return (
              $(n).html("<p>Loading messages...</p>"),
              $.post("/tickets.php?status=" + a, function (t) {
                $(n).html(t);
              }),
              e.tab("show"),
              !1
            );
          });
      });
  },
  484: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var a,
      i =
        (a = n(195)) && a.__esModule
          ? a
          : {
              default: a,
            };
    e.default = function () {
      $(".day-stats").each(function (t, e) {
        var n = $(e),
          a = n.data("points");
        n.data("donut-text-1"),
          n.data("donut-text-2"),
          (a = a ? JSON.parse((0, i.default)(a)) : "");
        var o = this.offsetWidth - 27 - 27,
          s = 0,
          r = 0,
          l = 0,
          c = 0,
          d = 0;
        a.forEach(function (t) {
          (t.x || t.y) &&
            (0 === s && (r = t.x),
            t.x > l && (l = t.x),
            t.x < r && (r = t.x),
            t.y > d && (d = t.y),
            t.y < c && (c = t.y),
            s++);
        });
        var p = u.scaleLinear().domain([r, l]).range([0, o]),
          f = u.scaleLinear().domain([c, d]).range([290, 0]),
          m = u
            .line()
            .x(function (t, e) {
              return p(t.x);
            })
            .y(function (t) {
              return f(t.y);
            }),
          g = u.range(a.length).map(function (t) {
            return a[t];
          }),
          h = u
            .select(this)
            .append("svg")
            .attr("width", o + 27 + 27)
            .attr("height", 350)
            .append("g")
            .attr("transform", "translate( 27,30 )");
        h.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate( 0,290 )")
          .call(u.axisBottom(p));
        var b = f.tickFormat(10),
          v = h.selectAll("g.y").data(f.ticks(10), String);
        v.select("text").text(b),
          v
            .enter()
            .insert("g", "a")
            .attr("class", "y")
            .attr("transform", function (t) {
              return "translate(0," + f(t) + ")";
            })
            .attr("background-fill", "#FFEEB6")
            .append("line")
            .attr("stroke", function (t) {
              return "#D3DAE6";
            })
            .attr("stroke-dasharray", 4)
            .attr("x1", 0)
            .attr("x2", o),
          h
            .append("g")
            .attr("class", "y axis")
            .attr("font-size", "15px")
            .call(u.axisLeft(f)),
          h.append("path").datum(g).attr("class", "line").attr("d", m),
          h
            .selectAll(".point-dot")
            .data(g)
            .enter()
            .append("circle")
            .attr("class", "point-dot")
            .attr("cx", function (t, e) {
              return p(t.x);
            })
            .attr("cy", function (t) {
              return f(t.y);
            })
            .attr("r", 5)
            .on("mouseover", function (t, e, n) {})
            .on("mouseout", function () {}),
          n.find("svg .point-dot").each(function (t, e) {
            $(e);
            var n = a[t] ? a[t] : {},
              i = "";
            (i += '<div class="chart-tip">'),
              (i +=
                '<p class="chart-tip__header"><strong>' +
                n.title +
                "</strong> <span>" +
                n.date +
                "</span></p>"),
              n.fields.forEach(function (t) {
                i +=
                  '<p class="chart-tip__list-item"><span>' +
                  t.name +
                  "</span> <strong>" +
                  t.value +
                  "</strong></p>";
              }),
              (i += "</div>"),
              tippy(e, {
                content: i,
                theme: "chart",
                placement: "bottom-start",
                interactive: !0,
              });
          });
      });
    };
    var o = n(198),
      s = n(13),
      r = n(197),
      l = n(1),
      c = n(32),
      d = n(200),
      u = {
        scaleLinear: o.scaleLinear,
        select: s.select,
        selectAll: s.selectAll,
        line: r.line,
        range: l.range,
        axisBottom: d.axisBottom,
        axisLeft: d.axisLeft,
        transition: c.transition,
      };
  },
  485: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(".nav-accordion").each(function (t, e) {
          var n = $(e),
            a = n.find(".nav-accordion__item"),
            i = n.find(".nav-accordion__link");
          n.find(".nav-accordion__submenu").hide(),
            a.filter(".active").find(".nav-accordion__submenu").show(),
            i.on("click", function (t) {
              t.preventDefault();
              var e = $(this).closest("li"),
                n = e.find("ul");
              e.hasClass("active")
                ? (e.removeClass("active"), n.slideUp(300))
                : (e
                    .addClass("active")
                    .siblings("li")
                    .removeClass("active")
                    .find("ul")
                    .slideUp(300),
                  n.slideDown(300));
            });
        });
      });
  },
  486: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(document).on("click", ".mark-all-notifications-read", function (t) {
          t.preventDefault(),
            $.post(
              "/notifications/mark-all-read.php",
              {
                csrf_token: csrf_token,
              },
              function () {
                $(".dot--red").hide(), $(".red.notification-blob").hide();
              }
            );
        }),
          $(document).on("click", ".notification a", function (t) {
            t.preventDefault();
            var e = $(this).attr("href"),
              n = $(this).closest(".notification-id").data("notificationid");
            $.post(
              "/notifications/mark-read.php",
              {
                csrf_token: csrf_token,
                id: n,
              },
              function () {
                window.location = e;
              }
            );
          });
      });
  },
  487: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $("body").on("click", '[data-custom-toggle="modal"]', function (t) {
          var e = $(this),
            n = $(e.data("target"));
          n.length > 0 && (t.preventDefault(), n.modal("show"));
        });
      });
  },
  488: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $("body"),
          $("[data-setting-toggle]").each(function (t, e) {
            var n = $(e),
              a = n.find("input");
            "darkmode" === n.data("setting-toggle") &&
              a.on("change", function (t) {
                $(".switch-darkmode").trigger("click");
              });
          });
      });
  },
  489: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $("[data-job-filter].dropdown-multiple .dropdown-menu").click(function (
          t
        ) {
          t.stopPropagation();
        });
        var t = $(".results-bar").find(".results-bar__total");
        function e(t) {
          var e = [];
          return (
            t.filter(":checked").each(function (t, n) {
              var a = $(n);
              e.push(a.val());
            }),
            e
          );
        }
        $("[data-load-more]").each(function (n, a) {
          var o = $(window),
            s = $(a),
            r = $(".jobs__items"),
            l = s.find("[data-load-more-btn]"),
            c = s.find(".load-more-loaded"),
            d = !1,
            u = s.data("job-list-layout"),
            p = s.data("load-more-max"),
            f = s.data("load-more-limit"),
            m = s.data("load-more-page"),
            g = getUrlParameter("sort"),
            h = getUrlParameter("level"),
            b = getUrlParameter("category"),
            v = getUrlParameter("sub_category"),
            w = getUrlParameter("location"),
            _ = getUrlParameter("cost"),
            y = getUrlParameter("empstats"),
            k = getUrlParameter("s"),
            x = !1,
            C = !1,
            S = s.find('[data-job-filter="level"]'),
            D = s.find('[data-job-filter="sort"]'),
            T = s.find('[data-job-filter="location"]'),
            B = s.find('[data-job-filter="cost"]'),
            A = s.find('[data-job-filter="empstats"]'),
            P = s.find('[data-job-filter="search"]'),
            j = [],
            E = [],
            F = $('[data-job-filter="category"]'),
            O = $('[data-job-filter="sub-category"]'),
            q = O.find(".page-filter__options"),
            I = [];
          function M() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            c.hide(),
              (g = getUrlParameter("sort")),
              (b = getUrlParameter("category")),
              (v = getUrlParameter("sub_category")),
              (w = getUrlParameter("location")),
              (h = getUrlParameter("level")),
              (_ = getUrlParameter("cost")),
              (k = getUrlParameter("s")),
              (m = e ? m + 1 : 1),
              (d = !0),
              e && (x = !0),
              $.ajax({
                url: "/ajax.php",
                type: "post",
                data: {
                  action: "load_more_jobs",
                  layout: u,
                  limit: f,
                  max: p,
                  page: m,
                  sort: g,
                  category: b,
                  sub_category: v,
                  location: w,
                  level: h,
                  cost: _,
                  empstats: y,
                  s: k,
                },
                beforeSend: function () {
                  e ? l.addClass("disabled btn-is-loading") : l.hide(),
                    r.addClass("is-loading");
                },
                success: function (n) {
                  m < p ? l.show() : (c.hide(), l.hide()),
                    n.data.html
                      ? (1 === m &&
                          $("#job-search-results").text(n.data.totalResults),
                        e
                          ? r.html(function (t, e) {
                              return e + n.data.html;
                            })
                          : r.html(function () {
                              return n.data.html;
                            }),
                        tippy("[data-tippy-content]", {
                          allowHTML: !0,
                          popperOptions: {
                            strategy: "fixed",
                            modifiers: [
                              {
                                name: "flip",
                                options: {
                                  fallbackPlacements: ["bottom", "right"],
                                },
                              },
                              {
                                name: "preventOverflow",
                                options: {
                                  altAxis: !0,
                                  tether: !1,
                                },
                              },
                            ],
                          },
                        }))
                      : ((C = !0),
                        e
                          ? (c.show(), l.hide())
                          : (t.find("span").text("0"),
                            r.html(
                              '<p class="text-center mb-0 mt-4">No jobs were found matching your criteria.</p>'
                            )));
                },
              }).always(function (t) {
                r.removeClass("is-loading"),
                  (d = !1),
                  e && (l.removeClass("disabled btn-is-loading"), (x = !1));
              });
          }
          O.addClass("disabled"),
            p <= 1 && l.hide(),
            s.find("[data-job-filter]").each(function (t, e) {
              var n = $(e),
                a = n.find('[data-toggle="dropdown"]');
              n.find("[data-job-filter-action]").on("click", function (t) {
                a.dropdown("hide");
              });
            }),
            (j = e(S.find("input[type=checkbox]"))),
            S.on("change", 'input[type="checkbox"]', function (t) {
              var e = $(this),
                n = e.val();
              if (e.is(":checked")) j.push(n);
              else {
                var a = j.indexOf(n);
                -1 !== a && j.splice(a, 1);
              }
              insertParamToUrl("level", j.join(","), "", !0);
            }),
            S.find('[data-job-filter-action="apply"]').on(
              "click",
              function (t) {
                M();
                var e =
                  S.find("input[type=checkbox]")
                    .filter(":checked")
                    .next("label")
                    .map(function () {
                      return $(this).text();
                    })
                    .get()
                    .join(", ") ||
                  S.find(".dropdown-toggle").data("placeholder");
                S.find(".dropdown-toggle span").text(e);
              }
            ),
            S.find('[data-job-filter-action="close"]').on(
              "click",
              function (t) {
                var e = S.find(".dropdown-toggle");
                S.find("input[type=checkbox]:checked").prop("checked", !1),
                  (j = []),
                  insertParamToUrl("level", "", "", !0),
                  e.find("span").text(e.data("placeholder")),
                  M();
              }
            ),
            (I = e(O.find("input[type=checkbox]"))),
            F.find('input[type="radio"]').on("change", function (t) {
              (b = $(this).val()),
                F.find(".dropdown-toggle span").text(
                  $(this).siblings("label").text()
                ),
                insertParamToUrl("category", b, "", !0);
            }),
            F.find('[data-job-filter-action="apply"]').on(
              "click",
              function (t) {
                O.removeClass("disabled"),
                  (I = []),
                  insertParamToUrl("sub_category", "", "", !0),
                  $.ajax({
                    url: "/ajax.php",
                    type: "post",
                    data: {
                      action: "get_sub_categories",
                      category: b,
                    },
                    beforeSend: function (t) {
                      q.html(
                        '<p class="mb-0 text-center w-100" style=""><i class="fas fa-spinner fa-spin"></i></p>'
                      );
                    },
                    success: function (t) {
                      if (t.data) {
                        var e = "";
                        for (var n in t.data)
                          t.data.hasOwnProperty(n) &&
                            (e +=
                              '<div class="page-filter__option custom-control custom-checkbox"><input type="checkbox" name="category" id="pageFiltersSubCategory' +
                              n +
                              '" class="custom-control-input" value="' +
                              n +
                              '"><label for="pageFiltersSubCategory' +
                              n +
                              '" class="custom-control-label">' +
                              t.data[n] +
                              "</label></div>");
                        q.html(e);
                      } else
                        q.html(
                          '<p class="mb-0">No sub categories found for the selected category.</p></p>'
                        );
                    },
                  }),
                  M();
              }
            ),
            F.find('[data-job-filter-action="close"]').on(
              "click",
              function (t) {
                var e = F.find(".dropdown-toggle");
                F.find("input[type=radio]:checked").prop("checked", !1),
                  (b = ""),
                  insertParamToUrl("category", "", "", !0),
                  e.find("span").text(e.data("placeholder")),
                  O.find("input[type=checkbox]:checked").prop("checked", !1),
                  insertParamToUrl("sub_category", "", "", !0),
                  O.find(".page-filter__options").html(
                    '<p class="mb-0">Please select a category first</p>'
                  ),
                  O.addClass("disabled"),
                  M();
              }
            ),
            O.on("change", 'input[type="checkbox"]', function (t) {
              var e = $(this),
                n = e.val();
              if (e.is(":checked")) I.push(n);
              else {
                var a = I.indexOf(n);
                -1 !== a && I.splice(a, 1);
              }
              insertParamToUrl("sub_category", I.join(","), "", !0);
            }),
            O.find('[data-job-filter-action="close"]').on(
              "click",
              function (t) {
                var e = O.find(".dropdown-toggle");
                O.find("input[type=checkbox]:checked").prop("checked", !1),
                  (I = []),
                  insertParamToUrl("sub_category", "", "", !0),
                  e.find("span").text(e.data("placeholder")),
                  M();
              }
            ),
            O.find('[data-job-filter-action="apply"]').on(
              "click",
              function (t) {
                M();
                var e = O.find(".dropdown-toggle"),
                  n = O.find("input[type=checkbox]")
                    .filter(":checked")
                    .next("label")
                    .map(function () {
                      return $(this).text();
                    })
                    .get();
                n.length
                  ? e.find("span").text(n.join(", "))
                  : e.find("span").text(e.data("placeholder"));
              }
            ),
            D.find(".dropdown-menu a").on("click", function (t) {
              t.preventDefault();
              var e = $(this),
                n = e.closest(".dropdown"),
                a = e.data("value");
              e.addClass("active").siblings().removeClass("active"),
                n.find(".dropdown-sortby__selection").text(e.text()),
                insertParamToUrl("sort", a, "", !0),
                M();
            }),
            (E = e(T.find("input[type=checkbox]"))),
            T.on("change", 'input[type="checkbox"]', function (t) {
              var e = $(this),
                n = e.val();
              if (e.is(":checked")) E.push(n);
              else {
                var a = E.indexOf(n);
                -1 !== a && E.splice(a, 1);
              }
              insertParamToUrl("location", E.join(","), "", !0);
            }),
            T.find('[data-job-filter-action="apply"]').on(
              "click",
              function (t) {
                M();
                var e =
                  T.find("input[type=checkbox]")
                    .filter(":checked")
                    .next("label")
                    .map(function () {
                      return $(this).text();
                    })
                    .get()
                    .join(", ") ||
                  T.find(".dropdown-toggle").data("placeholder");
                T.find(".dropdown-toggle span").text(e);
              }
            ),
            T.find('[data-job-filter-action="close"]').on(
              "click",
              function (t) {
                var e = T.find(".dropdown-toggle");
                T.find("input[type=checkbox]:checked").prop("checked", !1),
                  (E = []),
                  insertParamToUrl("location", "", "", !0),
                  e.find("span").text(e.data("placeholder")),
                  M();
              }
            ),
            B.find("input").on(
              "change",
              (0, i.default)(function () {
                $(this);
                var t = $(this).val().split(";"),
                  e = t[0] || 0.2,
                  n = t[1] || 2;
                B.find(".dropdown-toggle span").text(
                  "$" +
                    parseFloat(e).toFixed(3) +
                    " - $" +
                    parseFloat(n).toFixed(3)
                );
              }, 150)
            ),
            B.find('[data-job-filter-action="apply"]').on(
              "click",
              function (t) {
                var e = B.find("input").val();
                insertParamToUrl("cost", e, "", !0), M();
              }
            ),
            B.find('[data-job-filter-action="close"]').on(
              "click",
              function (t) {
                B.find("input").data("ionRangeSlider").reset(),
                  insertParamToUrl("cost", "", "", !0),
                  B.find(".dropdown-toggle span").text(B.data("placeholder")),
                  M();
              }
            ),
            A.on("change", 'input[type="radio"]', function (t) {
              (y = $(this).val()),
                A.find(".dropdown-toggle span").text(
                  $(this).siblings("label").text()
                ),
                insertParamToUrl("empstats", y, "", !0);
            }),
            A.find('[data-job-filter-action="apply"]').on(
              "click",
              function (t) {
                M();
              }
            ),
            A.find('[data-job-filter-action="close"]').on(
              "click",
              function (t) {
                var e = A.find(".dropdown-toggle");
                A.find("input[type=radio]:checked").prop("checked", !1),
                  (y = ""),
                  insertParamToUrl("empstats", "", "", !0),
                  e.find("span").text(e.data("placeholder")),
                  M();
              }
            ),
            P.find("input").on("keyup", function (t) {
              13 !== t.which ||
                d ||
                ((k = $(this).val()),
                insertParamToUrl("s", k, "", !0),
                P.find(".clear-search").show(),
                M());
            }),
            P.find(".clear-search").on("click", function (t) {
              P.find("input").val(""),
                insertParamToUrl("s", "", "", !0),
                $(this).hide(),
                M();
            }),
            l.on("click", function (t) {
              t.preventDefault(), M(!0);
            }),
            $(document).scroll(function () {
              x ||
                C ||
                (l.length &&
                  !l.is(":hidden") &&
                  l.offset().top - (o.height() + o.scrollTop()) < 100 &&
                  l.trigger("click"));
            });
        });
      });
    var a,
      i =
        (a = n(17)) && a.__esModule
          ? a
          : {
              default: a,
            };
  },
  490: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {});
  },
  491: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(window).on("load", function () {
          getCookie("picoCookieDismiss") ||
            ($("body").append(
              '<div class="cookie-bar" id="cookieConsentContainer"><div class="container-fluid container-fluid--max"><div class="cookie-bar__inner"><p class="cookie-bar__desc">This Website uses cookies to make the website work, for traffic measurement and optimization of page content. By using our Website, you agree to the use of cookies for these purposes. You can read more about cookies, including how to disable them, in our <a href="/privacy.php">privacy and cookie policy.</a></p><a class="cookie-bar__btn btn btn-primary" href="#">Understood</a></div></div></div>'
            ),
            $(".cookie-bar").fadeIn(),
            $("body").on("click", ".cookie-bar__btn", function (t) {
              t.preventDefault(),
                setCookie("picoCookieDismiss", "1", 7),
                $(".cookie-bar").fadeOut();
            }));
        });
      });
  },
  492: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(window);
        var t = $("body"),
          e = $(".side-popup"),
          n = $('<div class="side-popup-bg"></div>'),
          a = null;
        if (e.length) {
          var i = function (e) {
            var a = $(e);
            a.length &&
              (t.removeClass("side-popup-is-open"),
              a.removeClass("side-popup--visible"),
              n.fadeOut(300).removeClass("side-popup-bg--visible"));
          };
          n.appendTo(t),
            t.on("click", "[data-side-popup]", function (e) {
              var i,
                o = $(this),
                s = $(e.target),
                r = o.data("side-popup");
              s.hasClass("fa-ban") ||
                s.hasClass("fa-redo") ||
                s.hasClass("fa-trash") ||
                !($(r).length > 0) ||
                ($(e.target).hasClass("footable-toggle") &&
                  $(e.target).hasClass("sg-icon-more")) ||
                (e.preventDefault(),
                (a = $(this)).closest(".job-bar")
                  ? a.closest(".job-bar").addClass("active")
                  : a.addClass("active"),
                (i = $(r)).length &&
                  (t.addClass("side-popup-is-open"),
                  i.addClass("side-popup--visible"),
                  n.fadeIn(500).addClass("side-popup-bg--visible")));
            }),
            t.on("click", "[data-side-popup-close]", function (t) {
              var e = $(this),
                n = e.data("side-popup-close");
              n || (n = "#" + e.closest(".side-popup").attr("id")),
                $(n).length > 0 &&
                  (t.preventDefault(),
                  null !== a && (a.removeClass("active"), (a = null)),
                  i(n));
            }),
            n.on("click", function (t) {
              t.preventDefault(),
                null !== a && (a.removeClass("active"), (a = null)),
                i(e);
            });
        }
      });
  },
  493: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(window);
        var t = $("body");
        $(".side-popup-modal").length &&
          (t.on("click", "[data-side-popup-modal]", function (t) {
            var e,
              n = $(this).data("side-popup-modal");
            $(n).length > 0 &&
              (t.preventDefault(),
              (e = $(n)).length && e.addClass("side-popup-modal--visible"));
          }),
          t.on("click", "[data-side-popup-modal-close]", function (t) {
            var e,
              n = $(this),
              a = n.data("side-popup-close");
            a || (a = "#" + n.closest(".side-popup-modal").attr("id")),
              $(a).length > 0 &&
                (t.preventDefault(),
                (e = $(a)).length &&
                  e.removeClass("side-popup-modal--visible"));
          }));
      });
  },
  494: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        window.location.hash;
        var t = $(".navbar");
        $('a.smooth-scroll[href^="#"]').on("click", function (e) {
          var n = $(this),
            a = n.attr("href"),
            i = $(a);
          "#" !== a &&
            !n.data("toggle") &&
            i.length &&
            (e.preventDefault(),
            (function (e) {
              $("html, body").animate(
                {
                  scrollTop: e.offset().top - (t.outerHeight() + 10),
                },
                500
              );
            })(i));
        });
      });
  },
  495: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        if ($("section").hasClass("user-history")) {
          var t = !1,
            e = !1;
          $(document).on("scroll", function () {
            var n = $(window);
            if ($("#notification-tab").hasClass("active")) {
              var a =
                (i = $(".load-more.notification")).offset().top -
                (n.height() + n.scrollTop());
              !t &&
                a < 100 &&
                i.length &&
                i.is(":visible") &&
                i.trigger("click");
            } else {
              var i,
                o =
                  (i = $(".load-more.log")).offset().top -
                  (n.height() + n.scrollTop());
              !e &&
                o < 100 &&
                i.length &&
                i.is(":visible") &&
                i.trigger("click");
            }
          }),
            $(".load-more.notification").on("click", function () {
              t = !0;
              var e = parseInt($("#page-notification").val(), 10) + 1,
                n = parseInt($("#all-notification").val(), 10);
              e <= n
                ? $.ajax({
                    url: "user-history.php",
                    type: "POST",
                    data: {
                      page: e,
                      type: "notification",
                      csrf_token: csrf_token,
                    },
                    beforeSend: function () {
                      $(".load-more.notification").text("Loading...");
                    },
                    success: function (a) {
                      var i = void 0;
                      $("#page-notification").val(e),
                        (t = !1),
                        a.list.forEach(function (t) {
                          (i =
                            "#gig" === t.url
                              ? '<tr><td><div class="notification notification-id d-flex justify-content-between align-items-center" data-notificationid="' +
                                t.id +
                                '"><div>' +
                                t.notification +
                                "</div>" +
                                (t.seen
                                  ? ""
                                  : '<div><span class="dot dot--red"></span></div>') +
                                "</td><tr>"
                              : '<tr><td><div class="notification notification-id d-flex justify-content-between align-items-center" data-notificationid="' +
                                t.id +
                                '"><a class="notification-item" href="' +
                                t.url +
                                '"><i class="sg-icon-lightening text-' +
                                t.notification_type +
                                '"></i> ' +
                                t.notification +
                                "</a>" +
                                (t.seen
                                  ? ""
                                  : '<div><span class="dot dot--red"></span></div>') +
                                "</div></td><tr>"),
                            $("#notification-tab tbody").append(i);
                        }),
                        e < n && a.loadmore
                          ? $(".load-more.notification").text("Load more")
                          : $(".load-more.notification").fadeOut();
                    },
                  })
                : $(".load-more.notification").fadeOut();
            }),
            $(".load-more.log").on("click", function () {
              e = !0;
              var t = parseInt($("#page-log").val(), 10) + 1,
                n = parseInt($("#all-log").val(), 10);
              t <= n
                ? $.ajax({
                    url: "user-history.php",
                    type: "POST",
                    data: {
                      page: t,
                      type: "log",
                      csrf_token: csrf_token,
                    },
                    beforeSend: function () {
                      $(".load-more.log").text("Loading...");
                    },
                    success: function (a) {
                      $("#page-log").val(t),
                        (e = !1),
                        a.list.forEach(function (t) {
                          "SJ_CAMPAIGN" === t.element_type
                            ? $("#log-tab tbody").append(
                                '<tr><td><a class="notification-item" href="/employer/campaign-details.php?Id=' +
                                  t.id_campaign +
                                  '"><strong>' +
                                  t.datetime9 +
                                  " &mdash;</strong> " +
                                  t.action_description +
                                  "</a></td><tr>"
                              )
                            : $("#log-tab tbody").append(
                                "<tr><td><strong>" +
                                  t.datetime9 +
                                  " &mdash;</strong> " +
                                  t.action_description +
                                  "</td><tr>"
                              );
                        }),
                        t < n && a.loadmore
                          ? $(".load-more.log").text("Load more")
                          : $(".load-more.log").fadeOut();
                    },
                  })
                : $(".load-more.log").fadeOut();
            });
        }
      });
  },
  496: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var a,
      i =
        (a = n(497)) && a.__esModule
          ? a
          : {
              default: a,
            };
    (e.default = function () {
      $("[data-donut]").zaDonut();
    }),
      (function (t) {
        t.fn.zaDonut = function (e) {
          var n = t.extend(
            {
              width: 130,
              height: 130,
              stroke: 10,
              total: 100,
              value: 0,
              title: "",
              text: "{value}/{total}",
              text2: "",
              defaultColor: "#D3DAE6",
              progressColor: "#22AB59",
            },
            e
          );
          function a(t, e) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              a =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "",
              o = document.createElementNS("http://www.w3.org/2000/svg", t);
            return (
              (0, i.default)(n).map(function (t) {
                return o.setAttribute(t[0], t[1]);
              }),
              a && (o.textContent = a),
              e.appendChild(o),
              o
            );
          }
          t(this).each(function (e, i) {
            var o = t(this),
              s = Math.random().toString(36).substr(2, 9),
              r = o.data("donut-width"),
              l = o.data("donut-height"),
              c = o.data("donut-stroke"),
              d = o.data("donut-total"),
              u = o.data("donut-value"),
              p = o.data("donut-title"),
              f = o.data("donut-text"),
              m = o.data("donut-text2"),
              g = o.data("donut-default-color"),
              h = o.data("donut-progress-color");
            r || (r = n.width),
              l || (l = n.height),
              c || (c = n.stroke),
              d || (d = n.total),
              u || (u = n.value),
              p || (p = n.title),
              f || (f = n.text),
              m || (m = n.text2),
              g || (g = n.defaultColor),
              h || (h = n.progressColor),
              o.html(
                '<svg class="za-donut" id="donut_' +
                  s +
                  '" width="' +
                  r +
                  '" height="' +
                  l +
                  '">\n          <circle class="za-donut__circle-bg"\n            stroke="' +
                  g +
                  '"\n            stroke-width="' +
                  c +
                  '"\n            fill="transparent"\n            r="52"\n            cx="' +
                  r / 2 +
                  '"\n            cy="' +
                  l / 2 +
                  '"\n          />\n          <circle\n            class="za-donut__circle"\n            stroke="' +
                  h +
                  '"\n            stroke-width="' +
                  c +
                  '"\n            stroke-linecap="round"\n            fill="transparent"\n            r="52"\n            cx="' +
                  r / 2 +
                  '"\n            cy="' +
                  l / 2 +
                  '"\n          />\n        </svg>'
              );
            var b = o.find("svg");
            _(p, 50, "za-donut__title"),
              _(f, 75, "za-donut__text"),
              _(m, 88, "za-donut__text2");
            var v = o.find(".za-donut__circle")[0],
              w = 2 * v.r.baseVal.value * Math.PI;
            function _(e) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 40,
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "za-donut__text";
              if (e) {
                e.indexOf("{total}");
                var o = e.indexOf("{value}") > -1;
                (e = e.replace("{total}", d)),
                  a(
                    "text",
                    b[0],
                    {
                      class: i,
                      x: "50%",
                      "dominant-baseline": "middle",
                      "text-anchor": "middle",
                      y: n,
                    },
                    ""
                  );
                var s = b.find("." + i);
                return (
                  o
                    ? t({
                        counter: 0,
                      }).animate(
                        {
                          counter: u,
                        },
                        {
                          duration: 1e3,
                          easing: "swing",
                          step: function () {
                            var t = e;
                            (t = t.replace("{value}", Math.ceil(this.counter))),
                              s.text(t);
                          },
                        }
                      )
                    : ((e = e.replace("{value}", u)), s.text(e)),
                  s
                );
              }
            }
            (v.style.strokeDasharray = w + " " + w),
              (v.style.strokeDashoffset = "" + w),
              d && (u = (100 * u) / d),
              t({
                counter: 0,
              }).animate(
                {
                  counter: u,
                },
                {
                  duration: 500,
                  easing: "swing",
                  step: function () {
                    var t, e;
                    (t = Math.ceil(this.counter)),
                      (e = w - (t / 100) * w),
                      (v.style.strokeDashoffset = e);
                  },
                }
              );
          });
        };
      })(jQuery);
  },
  501: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(document).on("click", '[data-df-event="apply"]', function (t) {
          t.preventDefault();
          var e = $(this).closest(".dropdown"),
            n = e.find(".dropdown-toggle"),
            a = e
              .find("input:checked")
              .next("label")
              .map(function () {
                return $(this).text();
              })
              .get();
          a.length
            ? n.find("span").text(a.join(", "))
            : n.find("span").text(n.data("placeholder")),
            n.dropdown("hide");
        }),
          $(document).on("click", '[data-df-event="clear"]', function (t) {
            t.preventDefault();
            var e = $(this).closest(".dropdown"),
              n = e.find(".dropdown-toggle");
            e.find("input[type=checkbox]:checked").prop("checked", !1),
              e.find("input[type=radio]:checked").prop("checked", !1),
              n.find("span").text(n.data("placeholder")),
              n.dropdown("hide");
          }),
          $('[data-df-type="irs-range"]').each(function (t, e) {
            var n = $(e),
              a = n.find("input"),
              o = n.data("df-prefix") || "",
              s = n.data("df-affix") || "";
            a.on(
              "change",
              (0, i.default)(function () {
                var t = a.val().split(";");
                n.find(".dropdown-toggle span").text(
                  "" + o + t[0] + s + " - " + o + t[1] + s
                );
              }, 150)
            ),
              n.find('[data-df-event="apply"]').on("click", function (t) {
                a.trigger("change");
              }),
              n.find('[data-df-event="close"]').on("click", function (t) {
                a.data("ionRangeSlider").reset();
              });
          });
      });
    var a,
      i =
        (a = n(17)) && a.__esModule
          ? a
          : {
              default: a,
            };
  },
  502: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var a = s(n(503)),
      i = s(n(506)),
      o = s(n(17));
    function s(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    e.default = function () {
      if ("undefined" != typeof Chart) {
        var t = $(".promotion-chart"),
          e = $(".promotion-chart__slider"),
          n = $(".promotion-chart__custom");
        if (0 != t.length) {
          var s = $('[data-promotion-total="all"]'),
            r = $('[data-promotion-total="cat"]'),
            l = (0, i.default)(
              {
                length: 74,
              },
              function (t, e) {
                return e + 2;
              }
            ),
            c = t.data("pw-chart-data"),
            d = parseInt(t.data("pw-chart-top-bidder"));
          e.ionRangeSlider({
            hide_min_max: !0,
            min: 2,
            from: 2,
            max: 75,
            step: 0.01,
            prefix: "$",
            prettify: function (t) {
              return t.toFixed(2);
            },
          });
          var u = e.data("ionRangeSlider"),
            p = new Chart("promotionChart", {
              type: "line",
              data: {
                labels: l,
                datasets: [
                  {
                    data: [].map(function (t) {
                      return t > 1 ? Math.log(t) : t;
                    }),
                    borderColor: "#FEC40F",
                    tension: 0.4,
                    fill: {
                      target: "origin",
                      above: "#FEC40F",
                    },
                  },
                  {
                    data: c.map(function (t) {
                      return t > 1 ? Math.log(t) : t;
                    }),
                    borderColor: "#FFF3CF",
                    tension: 0.4,
                    fill: {
                      target: "origin",
                      above: "#FFF3CF",
                    },
                  },
                ],
              },
              options: {
                interaction: {
                  intersect: !1,
                  axis: "xy",
                  mode: "nearest",
                },
                plugins: {
                  legend: {
                    display: !1,
                  },
                  tooltip: {
                    displayColors: !1,
                    callbacks: {
                      title: function (t) {
                        var e = parseInt(t[0].label);
                        return (
                          "Bid Amount: " +
                          (e < 75 ? "$" + e + " - $" + (e + 1) : "$" + e)
                        );
                      },
                      label: function (t) {
                        var e = t.raw > 0 ? Math.round(Math.exp(t.raw)) : t.raw;
                        if ((1 === t.raw && (e = 1), 1 === t.datasetIndex))
                          return "Featured Jobs: " + e;
                      },
                    },
                  },
                },
                elements: {
                  point: {
                    radius: 0,
                  },
                },
                scales: {
                  x: {
                    ticks: {
                      display: !0,
                      maxRotation: 0,
                      minRotaion: 0,
                      align: "center",
                      crossAlign: "near",
                      padding: 10,
                      stepSize: 1,
                      autoSkip: !1,
                      callback: function (t, e, n) {
                        return 0 === e
                          ? "Base price"
                          : e > 0 && e === d
                          ? "Top bidder"
                          : "";
                      },
                    },
                    grid: {
                      borderWidth: 0,
                      drawOnChartArea: !1,
                      drawTicks: !0,
                    },
                  },
                  y: {
                    display: !1,
                    suggestedMin: 0,
                    suggestedMax: 1,
                  },
                },
              },
            });
          n.val((2).toFixed(2)),
            n.on("keydown", function (t) {
              var e = $(this);
              ("Enter" !== t.code && "Tab" !== t.code) ||
                (t.preventDefault(), f(parseFloat(e.val())));
            }),
            n.inputFilter(function (t) {
              return /^\d+(\.\d{0,2})?$/.test(t);
            }),
            n.on("blur", function (t) {
              var e = $(this);
              f(parseFloat(e.val()));
            }),
            e.on(
              "change",
              (0, o.default)(function () {
                var t = $(this).data("from");
                n.val(t.toFixed(2)),
                  (p.data.datasets[0].data = c
                    .slice(0, (0, a.default)(t) - 2 + 1)
                    .map(function (t) {
                      return t > 1 ? Math.log(t) : t;
                    })),
                  p.update();
              }, 0)
            ),
            m(2, r.data("promotion-cat-id")),
            e.on(
              "change",
              (0, o.default)(function () {
                m($(this).data("from"), r.data("promotion-cat-id"));
              }, 150)
            ),
            $(document).on(
              "change",
              "input[type=radio][name=category]",
              function () {
                m(2, $(this).val()),
                  n.val((2).toFixed(2)),
                  u.update({
                    from: 2,
                  }),
                  (p.data.datasets[0].data = []),
                  p.update();
              }
            );
        }
      }
      function f(t) {
        t > 75 && (t = 75),
          t < 2 && (t = 2),
          n.val(t.toFixed(2)),
          u.update({
            from: t,
          }),
          m(t, r.data("promotion-cat-id"));
      }
      function m(t, e) {
        $.ajax({
          url: "/ajax.php",
          type: "post",
          data: {
            action: "get_job_predictions",
            amount: t,
            cat: e,
          },
          beforeSend: function (t) {},
          success: function (t) {
            if (t.data) {
              var e = t.data.total_in_all,
                n = t.data.total_in_cat;
              s.find(".premium-positions__total").text(e + 1),
                r.find(".premium-positions__total").text(n + 1);
            }
          },
        });
      }
    };
  },
  513: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(".profile-toggle input").on("change", function (t) {
          var e = $(this).closest(".profile-toggle"),
            n = e.find('[name="profiletype"]').filter(":checked"),
            a = Swal.fire({
              customClass: {
                popup: "no-content",
              },
              timerProgressBar: !0,
              didOpen: function () {
                Swal.showLoading();
              },
            });
          n.length
            ? $.ajax({
                url: "/ajax.php",
                type: "post",
                data: {
                  action: "update_profile_type",
                  type: n.val(),
                },
                success: function (t) {
                  var i = e.find('[for="' + n.attr("id") + '"]');
                  setTimeout(function () {
                    a.close(),
                      Swal.fire({
                        title: "Done!",
                        text:
                          "Your profile type has been switched to '" +
                          i.text() +
                          "'",
                        icon: "success",
                        confirmButtonText: "UNDERSTOOD",
                        customClass: {
                          confirmButton: "btn btn-secondary btn-md",
                        },
                        buttonsStyling: !1,
                        timer: 2500,
                      }).then(function (e) {
                        window.location.href = t.data.redirect_to;
                      }),
                      setTimeout(function () {
                        window.location.href = t.data.redirect_to;
                      }, 1e3);
                  }, 500);
                },
              })
            : e.closest(".modal").modal("hide");
        }),
          $(".switch-profile-text").on("click", function (t) {
            var e = $(this).data("change-profile-to"),
              n = Swal.fire({
                customClass: {
                  popup: "no-content",
                },
                timerProgressBar: !0,
                didOpen: function () {
                  Swal.showLoading();
                },
              });
            e &&
              $.ajax({
                url: "/ajax.php",
                type: "post",
                data: {
                  action: "update_profile_type",
                  type: e,
                },
                success: function (t) {
                  setTimeout(function () {
                    n.close(),
                      Swal.fire({
                        title: "Done!",
                        text:
                          "Your profile type has been switched to '" +
                          ("employer" === e ? "buyer" : "freelancer") +
                          "'",
                        icon: "success",
                        confirmButtonText: "UNDERSTOOD",
                        customClass: {
                          confirmButton: "btn btn-secondary btn-md",
                        },
                        buttonsStyling: !1,
                        timer: 2500,
                      }).then(function (e) {
                        window.location.href = t.data.redirect_to;
                      }),
                      setTimeout(function () {
                        window.location.href = t.data.redirect_to;
                      }, 1e3);
                  }, 500);
                },
              });
          });
      });
  },
  514: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        var t = $("body");
        $(".switch-darkmode").on("click", function (e) {
          var n = $(this),
            a = n.data("change-darkmode-to"),
            i = $('[data-setting-toggle="darkmode"]').find(
              ".setting-toggle__label-disable"
            ),
            o = $('[data-setting-toggle="darkmode"]').find(
              ".setting-toggle__label-enable"
            );
          $.post("/account/set-darkmode.php", "Toggle=" + a),
            "on" == a
              ? (t.addClass("dark-mode"),
                $(".navbar-brand__regular").addClass("d-none"),
                $(".navbar-brand__dark-mode").removeClass("d-none"),
                n
                  .removeClass("zawp-toggle--checked-first")
                  .addClass("zawp-toggle--checked-last"),
                n.data("change-darkmode-to", "off"),
                $('[data-setting-toggle="darkmode"]').attr(
                  "checked",
                  "checked"
                ),
                i.show().removeClass("d-none"),
                o.hide().addClass("d-none"))
              : (t.removeClass("dark-mode"),
                $(".navbar-brand__dark-mode").addClass("d-none"),
                $(".navbar-brand__regular").removeClass("d-none"),
                n
                  .removeClass("zawp-toggle--checked-last")
                  .addClass("zawp-toggle--checked-first"),
                n.data("change-darkmode-to", "on"),
                $('[data-setting-toggle="darkmode"]').removeAttr("checked"),
                o.show().removeClass("d-none"),
                i.hide().addClass("d-none"));
        });
      });
  },
  515: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        if ($("body").hasClass("switch-tour-pending")) {
          var t = new i.default.Tour({
            useModalOverlay: !0,
            defaultStepOptions: {
              classes: "show-md",
              scrollTo: !0,
            },
          });
          (window.picoSwitchTour = t),
            t.addStep({
              id: "new-toggle-step-1",
              title: "New toggle",
              text: "Here, with the help of toggle, you can easily switch between the accounts of the employer and the worker, and accordingly see the appropriate functionality.",
              canClickTarget: !1,
              attachTo: {
                element: ".switch-profile-text--desktop",
                on: "bottom",
              },
              classes: "",
              buttons: [
                {
                  text: "Next",
                  action: t.next,
                },
                {
                  text: "Skip",
                  action: t.complete,
                },
              ],
            }),
            t.addStep({
              id: "new-toggle-step-2",
              title: "It’s much easier to use",
              text: "It’s much more convenient, you can only see relevant features, and it has become much easier to use, as there are fewer of these choices and only those are needed now.",
              canClickTarget: !1,
              attachTo: {
                element: ".switch-profile-text--desktop",
                on: "bottom",
              },
              classes: "",
              buttons: [
                {
                  text: "Next",
                  action: t.next,
                },
                {
                  text: "Skip",
                  action: t.complete,
                },
              ],
            }),
            t.on("complete", function () {});
        }
      });
    var a,
      i =
        (a = n(516)) && a.__esModule
          ? a
          : {
              default: a,
            };
  },
  517: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        var t =
          /click(?:ed)?\s+(?:any\s+)?(?:on\s+|(?:on\s+)?any\s+|\d+\s+|one\s+|two\s+)?(?:big\s+|(?:another\s+)?banner\s+)?ad|ad(?:vertisement|vertise)?(?:\s+url|\s+site|\s+link)|\(?advert(?:isement|ise)?s?\)?|(?:navigate|browse|url|multiple|the|big|google)\s+(?:on\s+|of\s+)?(?:the\s+)?a(?:\W)?d(?:\W)?s?\b|banner(?:\s+publicity)?|\Wa(?:\W)d(?:\W)?s?\b|\Wad(?:\W)s|(\W|^)+\d+ads?\b|google(?:ad|4d)|4ds|\Wads?(?:\W|$)/i;
        $(document).on("keyup", ".alert-on-type", function (e) {
          t.test($(this).val()) &&
            Swal.fire({
              icon: "warning",
              title: "Attention!",
              html: '<p class="text-left">Please, be careful to avoid click fraud violations with your advertising partners while incentivizing traffic to your website or app. For your own protection, do not use wording in jobs that encourages clicking ads. SEO Promote jobs are for legal incentivized traffic and search engine optimization only.</p>',
              confirmButtonText: "Got It",
            });
        }),
          $(document).on("keyup", ".alert-on-type-task", function (e) {
            t.test($(this).val()) &&
              Swal.fire({
                icon: "warning",
                title: "Attention!",
                html: '<p class="text-left">SEO Promote jobs are for legal incentivized traffic and search engine optimization only. if you are using jobs to directly create fraudulent click traffic this is expressly prohibited by our terms of service and your jobs/tasks will no longer be accepted.</p>',
                confirmButtonText: "Got It",
              });
          }),
          $(document).on("keyup", ".alert-on-type-task-comment", function (e) {
            t.test($(this).val()) &&
              Swal.fire({
                icon: "warning",
                title: "Attention!",
                html: '<p class="text-left">You are likely using language in your ratings which explicitly asks workers to click on ads.<br>Do not use this language. As per our policy, SEO Promote jobs are for legal incentivized traffic and search engine optimization only. if you are using jobs to directly create fraudulent click traffic this is expressly prohibited by our terms of service and your jobs will no longer be accepted. Also this will lead to reversal of your job ratings.</p>',
                confirmButtonText: "Got It",
              });
          });
      });
  },
  518: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(".switch-to-landing__toggle").on("click", function (t) {
          t.preventDefault();
          var e = $(this);
          (pw_landing_page =
            "business" === pw_landing_page ? "worker" : "business"),
            "business" === pw_landing_page
              ? (e
                  .find(".zawp-toggle")
                  .removeClass("zawp-toggle--checked-first")
                  .addClass("zawp-toggle--checked-last"),
                $("body")
                  .removeClass("home--worker")
                  .addClass("home--business"))
              : (e
                  .find(".zawp-toggle")
                  .removeClass("zawp-toggle--checked-last")
                  .addClass("zawp-toggle--checked-first"),
                $("body")
                  .removeClass("home--business")
                  .addClass("home--worker")),
            setCookie("pw_landing", pw_landing_page, 30);
        });
      }),
      (window.pw_landing_page = getCookie("pw_landing") || "business");
  },
  519: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(".gig-card__wrap").matchHeight({
          property: "min-height",
        }),
          $(document).on("click", "#gigs-list [data-gig-action]", function (t) {
            t.preventDefault(), t.stopPropagation();
            var e = $(this),
              n = e.closest(".gigs-list-item"),
              a = e.data("gig-action"),
              i = e.data("gig-id");
            switch (a) {
              case "seller-delete-gig":
                Swal.fire({
                  showCloseButton: !0,
                  title: "Delete this gig?",
                  text: "Gigs are meant to be permanent ads. If you delete this gig you will not be able to restore it and you will be blocked from posting another gig for 1 hour. Please consider keeping your gig live.",
                  icon: "",
                  confirmButtonText: "DELETE",
                  cancelButtonText: "CANCEL",
                  buttonsStyling: !1,
                  focusConfirm: !1,
                  showCancelButton: !0,
                  customClass: {
                    popup: "gigs-popup",
                    confirmButton: "btn btn-danger btn-md",
                    cancelButton: "btn btn-gray btn-md",
                  },
                }).then(function (t) {
                  t.isConfirmed &&
                    (n.addClass("is-loading"),
                    $.ajax({
                      url: "/gigs-ajax.php",
                      type: "post",
                      data: {
                        action: "delete_gig",
                        gig_id: i,
                        csrf_token: csrf_token,
                      },
                      success: function (t) {
                        t.success
                          ? (n.removeClass("is-loading"),
                            n.remove(),
                            Swal.fire({
                              showCloseButton: !1,
                              icon: t.data.deleted ? "success" : "error",
                              title: t.data.deleted ? "Success!" : "Error",
                              html: "<p>" + t.data.msg + "</p>",
                              confirmButtonText: "OK",
                              buttonsStyling: !1,
                              focusConfirm: !1,
                              showDenyButton: !1,
                              customClass: {
                                popup:
                                  "gigs-popup animate__animated animate__fadeInDown",
                                confirmButton: "btn btn-primary btn-md",
                              },
                            }).then(function () {
                              window.location.href =
                                "buyer-delete-gig" == a
                                  ? "/buyer/requested-gigs.php"
                                  : "/seller/posted-gigs.php";
                            }))
                          : Swal.fire({
                              showCloseButton: !1,
                              icon: "error",
                              title: "Error!",
                              html: t.data.msg,
                              confirmButtonText: "OK",
                              buttonsStyling: !1,
                              focusConfirm: !1,
                              showDenyButton: !1,
                              customClass: {
                                popup:
                                  "gigs-popup animate__animated animate__fadeInDown",
                                confirmButton: "btn btn-primary btn-md",
                              },
                            }).then(function () {
                              window.location.reload();
                            });
                      },
                      error: function (t, e, n) {
                        Swal.fire({
                          showCloseButton: !1,
                          icon: "error",
                          title: "Error!",
                          html:
                            "Something went wrong deleting the " +
                            ("delete-draft" == a ? "draft" : "gig") +
                            ". Please try again.",
                          confirmButtonText: "OK",
                          buttonsStyling: !1,
                          focusConfirm: !1,
                          showDenyButton: !1,
                          customClass: {
                            popup:
                              "gigs-popup animate__animated animate__fadeInDown",
                            confirmButton: "btn btn-primary btn-md",
                          },
                        }).then(function () {
                          window.location.reload();
                        });
                      },
                    }));
                });
                break;
              case "seller-pause-gig":
                Swal.fire({
                  showCloseButton: !0,
                  title: "Pause this gig?",
                  text: "This gig won't be found when browsing gigs for hiring.",
                  icon: "",
                  confirmButtonText: "PAUSE",
                  cancelButtonText: "CANCEL",
                  buttonsStyling: !1,
                  focusConfirm: !1,
                  showCancelButton: !0,
                  customClass: {
                    popup: "gigs-popup",
                    confirmButton: "btn btn-info btn-md",
                    cancelButton: "btn btn-gray btn-md",
                  },
                }).then(function (t) {
                  t.isConfirmed &&
                    (n.addClass("is-loading"),
                    $.ajax({
                      url: "/gigs-ajax.php",
                      type: "post",
                      data: {
                        action: "pause_gig",
                        gig_id: i,
                        csrf_token: csrf_token,
                      },
                      success: function (t) {
                        t.success
                          ? (n.removeClass("is-loading"),
                            Swal.fire({
                              showCloseButton: !1,
                              icon: t.data.paused ? "success" : "error",
                              title: t.data.paused ? "Success!" : "Error",
                              html: "<p>" + t.data.msg + "</p>",
                              confirmButtonText: "OK",
                              buttonsStyling: !1,
                              focusConfirm: !1,
                              showDenyButton: !1,
                              customClass: {
                                popup:
                                  "gigs-popup animate__animated animate__fadeInDown",
                                confirmButton: "btn btn-primary btn-md",
                              },
                            }).then(function () {
                              window.location.href = "/seller/posted-gigs.php";
                            }))
                          : Swal.fire({
                              showCloseButton: !1,
                              icon: "error",
                              title: "Error!",
                              html: t.data.msg,
                              confirmButtonText: "OK",
                              buttonsStyling: !1,
                              focusConfirm: !1,
                              showDenyButton: !1,
                              customClass: {
                                popup:
                                  "gigs-popup animate__animated animate__fadeInDown",
                                confirmButton: "btn btn-primary btn-md",
                              },
                            }).then(function () {
                              window.location.reload();
                            });
                      },
                      error: function (t, e, n) {
                        Swal.fire({
                          showCloseButton: !1,
                          icon: "error",
                          title: "Error!",
                          html: "Something went wrong pausing the gig. Please try again.",
                          confirmButtonText: "OK",
                          buttonsStyling: !1,
                          focusConfirm: !1,
                          showDenyButton: !1,
                          customClass: {
                            popup:
                              "gigs-popup animate__animated animate__fadeInDown",
                            confirmButton: "btn btn-primary btn-md",
                          },
                        }).then(function () {
                          window.location.reload();
                        });
                      },
                    }));
                });
                break;
              case "seller-resume-gig":
                Swal.fire({
                  showCloseButton: !0,
                  title: "Resume this gig?",
                  text: "This gig will be available when browsing gigs for hiring.",
                  icon: "",
                  confirmButtonText: "RESUME",
                  cancelButtonText: "CANCEL",
                  buttonsStyling: !1,
                  focusConfirm: !1,
                  showCancelButton: !0,
                  customClass: {
                    popup: "gigs-popup",
                    confirmButton: "btn btn-primary btn-md",
                    cancelButton: "btn btn-gray btn-md",
                  },
                }).then(function (t) {
                  t.isConfirmed &&
                    (n.addClass("is-loading"),
                    $.ajax({
                      url: "/gigs-ajax.php",
                      type: "post",
                      data: {
                        action: "resume_gig",
                        gig_id: i,
                        csrf_token: csrf_token,
                      },
                      success: function (t) {
                        t.success
                          ? (n.removeClass("is-loading"),
                            Swal.fire({
                              showCloseButton: !1,
                              icon: t.data.running ? "success" : "error",
                              title: t.data.running ? "Success!" : "Error",
                              html: "<p>" + t.data.msg + "</p>",
                              confirmButtonText: "OK",
                              buttonsStyling: !1,
                              focusConfirm: !1,
                              showDenyButton: !1,
                              customClass: {
                                popup:
                                  "gigs-popup animate__animated animate__fadeInDown",
                                confirmButton: "btn btn-primary btn-md",
                              },
                            }).then(function () {
                              window.location.href = "/seller/posted-gigs.php";
                            }))
                          : Swal.fire({
                              showCloseButton: !1,
                              icon: "error",
                              title: "Error!",
                              html: t.data.msg,
                              confirmButtonText: "OK",
                              buttonsStyling: !1,
                              focusConfirm: !1,
                              showDenyButton: !1,
                              customClass: {
                                popup:
                                  "gigs-popup animate__animated animate__fadeInDown",
                                confirmButton: "btn btn-primary btn-md",
                              },
                            }).then(function () {
                              window.location.reload();
                            });
                      },
                      error: function (t, e, n) {
                        Swal.fire({
                          showCloseButton: !1,
                          icon: "error",
                          title: "Error!",
                          html: "Something went wrong resuming the gig. Please try again.",
                          confirmButtonText: "OK",
                          buttonsStyling: !1,
                          focusConfirm: !1,
                          showDenyButton: !1,
                          customClass: {
                            popup:
                              "gigs-popup animate__animated animate__fadeInDown",
                            confirmButton: "btn btn-primary btn-md",
                          },
                        }).then(function () {
                          window.location.reload();
                        });
                      },
                    }));
                });
                break;
              case "seller-publish-gig":
                Swal.fire({
                  showCloseButton: !0,
                  title: "Publish this gig?",
                  text: "You won't be able to edit this gig after publishing it.",
                  icon: "",
                  confirmButtonText: "PUBLISH",
                  cancelButtonText: "CANCEL",
                  buttonsStyling: !1,
                  focusConfirm: !1,
                  showCancelButton: !0,
                  customClass: {
                    popup: "gigs-popup",
                    confirmButton: "btn btn-primary btn-md",
                    cancelButton: "btn btn-gray btn-md",
                  },
                }).then(function (t) {
                  t.isConfirmed &&
                    (n.addClass("is-loading"),
                    $.ajax({
                      url: "/gigs-ajax.php",
                      type: "post",
                      data: {
                        action: "publish_gig",
                        gig_id: i,
                        csrf_token: csrf_token,
                      },
                      success: function (t) {
                        t.success
                          ? (n.removeClass("is-loading"),
                            Swal.fire({
                              showCloseButton: !1,
                              icon: t.data.published ? "success" : "error",
                              title: t.data.published ? "Success!" : "Error",
                              html: "<p>" + t.data.msg + "</p>",
                              confirmButtonText: "OK",
                              buttonsStyling: !1,
                              focusConfirm: !1,
                              showDenyButton: !1,
                              customClass: {
                                popup:
                                  "gigs-popup animate__animated animate__fadeInDown",
                                confirmButton: "btn btn-primary btn-md",
                              },
                            }).then(function () {
                              window.location.href = "/seller/posted-gigs.php";
                            }))
                          : Swal.fire({
                              showCloseButton: !1,
                              icon: "error",
                              title: "Error!",
                              html: t.data.msg,
                              confirmButtonText: "OK",
                              buttonsStyling: !1,
                              focusConfirm: !1,
                              showDenyButton: !1,
                              customClass: {
                                popup:
                                  "gigs-popup animate__animated animate__fadeInDown",
                                confirmButton: "btn btn-primary btn-md",
                              },
                            }).then(function () {
                              window.location.reload();
                            });
                      },
                      error: function (t, e, n) {
                        Swal.fire({
                          showCloseButton: !1,
                          icon: "error",
                          title: "Error!",
                          html: "Something went wrong publishing the gig. Please try again.",
                          confirmButtonText: "OK",
                          buttonsStyling: !1,
                          focusConfirm: !1,
                          showDenyButton: !1,
                          customClass: {
                            popup:
                              "gigs-popup animate__animated animate__fadeInDown",
                            confirmButton: "btn btn-primary btn-md",
                          },
                        }).then(function () {
                          window.location.reload();
                        });
                      },
                    }));
                });
                break;
              case "seller-edit-gig":
                window.location.href = "/seller/edit-gig.php?id=" + i;
                break;
              case "share":
                $(e.data("target")).modal("show");
            }
          }),
          $(document).on(
            "click",
            ".pw-declined-gig-reason-action, .pw-under-review-gig-reason-action, .pw-cancelled-gig-reason-action",
            function (t) {
              t.preventDefault(), t.stopPropagation();
              var e,
                n = $(this),
                a = $("#gigStatusReasonModal");
              "declined" == n.data("status")
                ? (a.find("#modal-title").html("DECLINE"),
                  a.find("#modal-action-text").html("declined"),
                  a.find("#modal-action-reason-text").html("not approving"),
                  $("#gig-status-reason-modal-date").html(
                    n.data("declined-date")
                  ),
                  $("#gig-status-reason-modal-text").html(
                    n.data("declined-text")
                  ))
                : "under-review" == n.data("status")
                ? (a.find("#modal-title").html("UNDER REVIEW"),
                  a.find("#modal-action-text").html("set under review"),
                  a.find("#modal-action-reason-text").html("status change"),
                  $("#gig-status-reason-modal-date").html(
                    n.data("under-review-date")
                  ),
                  $("#gig-status-reason-modal-text").html(
                    n.data("under-review-text")
                  ))
                : "cancelled" == n.data("status") &&
                  (a.find("#modal-title").html("CANCELLATION"),
                  a.find("#modal-action-text").html("cancelled"),
                  a.find("#modal-action-reason-text").html("cancelling"),
                  $("#gig-status-reason-modal-date").html(
                    n.data("cancelled-date")
                  ),
                  $("#gig-status-reason-modal-text").html(
                    n.data("cancelled-text")
                  )),
                (e = function () {}),
                a.modal("show"),
                $("#confirm-gig-status-reason-btn")
                  .unbind()
                  .one("click", e)
                  .one("click", function () {
                    return a.modal("hide");
                  });
            }
          ),
          $(document).on(
            "click",
            "#gigs-list .gigs-list-item.posted-gig",
            function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                (window.location.href =
                  "/seller/gig-details.php?id=" + $(this).data("gig-id"));
            }
          ),
          $(".gig-owner-info__inner").on("click", function (t) {
            t.preventDefault(),
              t.stopPropagation(),
              (window.location.href = $(this).parent().data("profile-url"));
          });
      });
  },
  520: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(".gig-card__wrap").matchHeight({
          property: "min-height",
        }),
          $(document).on(
            "click",
            "#gig-orders-list [data-order-action]",
            function (t) {
              t.preventDefault(), t.stopPropagation();
              var e = $(this),
                n = e.closest(".gigs-list-item"),
                a = e.data("order-action"),
                i = e.data("order-id"),
                o = e.data("order-type");
              switch (a) {
                case "delete-order":
                  Swal.fire({
                    showCloseButton: !0,
                    title:
                      "Confirm deleting the gig " +
                      ("requested" == o ? "request " : "") +
                      "order",
                    text: "The order will be removed from the list and you will not be able to restore it",
                    icon: "",
                    confirmButtonText: "DELETE",
                    cancelButtonText: "CANCEL",
                    buttonsStyling: !1,
                    focusConfirm: !1,
                    showCancelButton: !0,
                    customClass: {
                      popup: "gigs-popup",
                      confirmButton: "btn btn-danger btn-md",
                      cancelButton: "btn btn-gray btn-md",
                    },
                  }).then(function (t) {
                    t.isConfirmed &&
                      (n.addClass("is-loading"),
                      $.ajax({
                        url: "/gigs-ajax.php",
                        type: "post",
                        data: {
                          action: "delete_order",
                          order_id: i,
                          csrf_token: csrf_token,
                        },
                        success: function (t) {
                          t.success
                            ? Swal.fire({
                                showCloseButton: !1,
                                icon: t.data.deleted ? "success" : "error",
                                title: t.data.deleted ? "Success!" : "Error",
                                html: "<p>" + t.data.msg + "</p>",
                                confirmButtonText: "OK",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showDenyButton: !1,
                                customClass: {
                                  popup:
                                    "gigs-popup animate__animated animate__fadeInDown",
                                  confirmButton: "btn btn-primary btn-md",
                                },
                              }).then(function () {
                                window.location.reload();
                              })
                            : (n.removeClass("is-loading"),
                              Swal.fire({
                                showCloseButton: !1,
                                icon: "error",
                                title: "Error!",
                                html: t.data.msg,
                                confirmButtonText: "OK",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showDenyButton: !1,
                                customClass: {
                                  popup:
                                    "gigs-popup animate__animated animate__fadeInDown",
                                  confirmButton: "btn btn-primary btn-md",
                                },
                              }));
                        },
                        error: function (t, e, i) {
                          n.removeClass("is-loading"),
                            Swal.fire({
                              showCloseButton: !1,
                              icon: "error",
                              title: "Error!",
                              html:
                                "Something went wrong deleting the " +
                                ("delete-draft" == a ? "draft" : "gig") +
                                ". Please try again.",
                              confirmButtonText: "OK",
                              buttonsStyling: !1,
                              focusConfirm: !1,
                              showDenyButton: !1,
                              customClass: {
                                popup:
                                  "gigs-popup animate__animated animate__fadeInDown",
                                confirmButton: "btn btn-primary btn-md",
                              },
                            });
                        },
                      }));
                  });
                  break;
                case "hire-gig":
                  Swal.fire({
                    showCloseButton: !0,
                    title: "Hire this gig and open the chat?",
                    text: "The gig payment price will be held in reserve from your spendable balance at this time and a live chat feature will open. The gig payment will only be paid to the freelancer after you approve the gig is complete and you are satisfied.",
                    icon: "",
                    confirmButtonText: "HIRE",
                    cancelButtonText: "CANCEL",
                    buttonsStyling: !1,
                    focusConfirm: !1,
                    showCancelButton: !0,
                    customClass: {
                      popup: "gigs-popup animate__animated animate__fadeInDown",
                      confirmButton: "btn btn-primary btn-md",
                      cancelButton: "btn btn-gray btn-md",
                    },
                  }).then(function (t) {
                    t.isConfirmed &&
                      (n.addClass("is-loading"),
                      $.ajax({
                        url: "/gigs-ajax.php",
                        type: "post",
                        data: {
                          action: "hire_gig",
                          gig_id: e.data("gig-id"),
                          csrf_token: csrf_token,
                        },
                        success: function (t) {
                          t.success
                            ? (window.location.href = "/browse-gigs.php")
                            : "invalid_gig" === t.data.error ||
                              "invalid_order" === t.data.error ||
                              "cannot_hire" === t.data.error
                            ? Swal.fire({
                                showCloseButton: !1,
                                icon: "error",
                                title: "Error!",
                                html: t.data.msg,
                                confirmButtonText: "OK",
                                denyButtonText: "BROWSE GIGS",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showDenyButton: !0,
                                customClass: {
                                  popup:
                                    "gigs-popup animate__animated animate__fadeInDown",
                                  confirmButton: "btn btn-primary btn-md",
                                  denyButton: "btn btn-gray btn-md",
                                },
                              }).then(function (t) {
                                t.isDenied
                                  ? (window.location.href = "/browse-gigs.php")
                                  : window.location.reload();
                              })
                            : "money_required" === t.data.error
                            ? Swal.fire({
                                showCloseButton: !0,
                                title:
                                  "There are not enough funds in your account",
                                text: "You do not have enough funds in your account, go to your wallet to top up",
                                icon: "",
                                confirmButtonText: "GO TO WALLET",
                                denyButtonText: "BROWSE GIGS",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showCancelButton: !1,
                                showDenyButton: !0,
                                customClass: {
                                  popup: "gigs-popup",
                                  confirmButton: "btn btn-primary btn-md",
                                  denyButton: "btn btn-gray btn-md",
                                },
                              }).then(function (t) {
                                t.isConfirmed
                                  ? (window.location.href =
                                      "/wallet.php?tab=deposits")
                                  : t.isDenied
                                  ? (window.location.href = "/browse-gigs.php")
                                  : window.location.reload();
                              })
                            : Swal.fire({
                                showCloseButton: !1,
                                icon: "error",
                                title: "Error!",
                                html: "Something went wrong sending the offer. Please try again.",
                                confirmButtonText: "OK",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showDenyButton: !1,
                                customClass: {
                                  popup:
                                    "gigs-popup animate__animated animate__fadeInDown",
                                  confirmButton: "btn btn-primary btn-md",
                                },
                              }).then(function () {
                                window.location.reload();
                              });
                        },
                        error: function (t, e, n) {
                          Swal.fire({
                            showCloseButton: !1,
                            icon: "error",
                            title: "Error!",
                            html: "Something went wrong sending the offer. Please try again.",
                            confirmButtonText: "OK",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }).then(function () {
                            window.location.reload();
                          });
                        },
                      }));
                  });
                  break;
                case "hire-again":
                  Swal.fire({
                    showCloseButton: !0,
                    title: "Hire this gig again?",
                    text: "The gig payment price will be held in reserve from your spendable balance at this time and a live chat feature will open. The gig payment will only be paid to the freelancer after you approve the gig is complete and you are satisfied.",
                    icon: "",
                    confirmButtonText: "HIRE AGAIN",
                    cancelButtonText: "CANCEL",
                    buttonsStyling: !1,
                    focusConfirm: !1,
                    showCancelButton: !0,
                    customClass: {
                      popup: "gigs-popup animate__animated animate__fadeInDown",
                      confirmButton: "btn btn-primary btn-md",
                      cancelButton: "btn btn-gray btn-md",
                    },
                  }).then(function (t) {
                    t.isConfirmed &&
                      (n.addClass("is-loading"),
                      $.ajax({
                        url: "/gigs-ajax.php",
                        type: "post",
                        data: {
                          action: "hire_again",
                          order_id: i,
                          csrf_token: csrf_token,
                        },
                        success: function (t) {
                          t.success
                            ? (window.location.href = "/browse-gigs.php")
                            : "invalid_gig" === t.data.error ||
                              "invalid_order" === t.data.error ||
                              "cannot_hire" === t.data.error
                            ? Swal.fire({
                                showCloseButton: !1,
                                icon: "error",
                                title: "Error!",
                                html: t.data.msg,
                                confirmButtonText: "OK",
                                denyButtonText: "BROWSE GIGS",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showDenyButton: !0,
                                customClass: {
                                  popup:
                                    "gigs-popup animate__animated animate__fadeInDown",
                                  confirmButton: "btn btn-primary btn-md",
                                  denyButton: "btn btn-gray btn-md",
                                },
                              }).then(function (t) {
                                t.isDenied
                                  ? (window.location.href = "/browse-gigs.php")
                                  : window.location.reload();
                              })
                            : "money_required" === t.data.error
                            ? Swal.fire({
                                showCloseButton: !0,
                                title:
                                  "There are not enough funds in your account",
                                text: "You do not have enough funds in your account, go to your wallet to top up",
                                icon: "",
                                confirmButtonText: "GO TO WALLET",
                                denyButtonText: "BROWSE GIGS",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showCancelButton: !1,
                                showDenyButton: !0,
                                customClass: {
                                  popup: "gigs-popup",
                                  confirmButton: "btn btn-primary btn-md",
                                  denyButton: "btn btn-gray btn-md",
                                },
                              }).then(function (t) {
                                t.isConfirmed
                                  ? (window.location.href =
                                      "/wallet.php?tab=deposits")
                                  : t.isDenied
                                  ? (window.location.href = "/browse-gigs.php")
                                  : window.location.reload();
                              })
                            : Swal.fire({
                                showCloseButton: !1,
                                icon: "error",
                                title: "Error!",
                                html: "Something went wrong sending the offer. Please try again.",
                                confirmButtonText: "OK",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showDenyButton: !1,
                                customClass: {
                                  popup:
                                    "gigs-popup animate__animated animate__fadeInDown",
                                  confirmButton: "btn btn-primary btn-md",
                                },
                              }).then(function () {
                                window.location.reload();
                              });
                        },
                        error: function (t, e, n) {
                          Swal.fire({
                            showCloseButton: !1,
                            icon: "error",
                            title: "Error!",
                            html: "Something went wrong sending the offer. Please try again.",
                            confirmButtonText: "OK",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }).then(function () {
                            window.location.reload();
                          });
                        },
                      }));
                  });
                  break;
                case "decline-order":
                  Swal.fire({
                    showCloseButton: !0,
                    title: "Decline this order?",
                    text: "Decline the order if you do not want to work for the client who sent it or you are too busy to accept more work.",
                    icon: "",
                    confirmButtonText: "DECLINE",
                    cancelButtonText: "CANCEL",
                    buttonsStyling: !1,
                    focusConfirm: !1,
                    showCancelButton: !0,
                    customClass: {
                      popup: "gigs-popup",
                      confirmButton: "btn btn-danger btn-md",
                      cancelButton: "btn btn-gray btn-md",
                    },
                  }).then(function (t) {
                    t.isConfirmed &&
                      (n.addClass("is-loading"),
                      $.ajax({
                        url: "/gigs-ajax.php",
                        type: "post",
                        data: {
                          action: "decline_order",
                          order_id: i,
                          csrf_token: csrf_token,
                        },
                        success: function (t) {
                          window.location.reload();
                        },
                        error: function (t, e, n) {
                          Swal.fire({
                            showCloseButton: !1,
                            icon: "error",
                            title: "Error!",
                            html: "Something went wrong declining the offer. Please try again.",
                            confirmButtonText: "OK",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }).then(function () {
                            window.location.reload();
                          });
                        },
                      }));
                  });
                  break;
                case "cancel-order":
                  Swal.fire({
                    showCloseButton: !0,
                    title: "Are you sure you want to cancel the order?",
                    text: "If you cancel the order, the freelancer will not be able to accept it and will get notified of the cancellation.",
                    icon: "",
                    confirmButtonText: "CANCEL ORDER",
                    cancelButtonText: "KEEP ORDER",
                    buttonsStyling: !1,
                    focusConfirm: !1,
                    showCancelButton: !0,
                    customClass: {
                      popup: "gigs-popup",
                      confirmButton: "btn btn-danger btn-md",
                      cancelButton: "btn btn-gray btn-md",
                    },
                  }).then(function (t) {
                    t.isConfirmed &&
                      (n.addClass("is-loading"),
                      $.ajax({
                        url: "/gigs-ajax.php",
                        type: "post",
                        data: {
                          action: "cancel_order",
                          order_id: i,
                          csrf_token: csrf_token,
                        },
                        success: function (t) {
                          window.location.href = "/buyer/hired-gigs.php";
                        },
                        error: function (t, e, n) {
                          Swal.fire({
                            showCloseButton: !1,
                            icon: "error",
                            title: "Error!",
                            html: "Something went wrong cancelling the offer. Please try again.",
                            confirmButtonText: "OK",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }).then(function () {
                            window.location.reload();
                          });
                        },
                      }));
                  });
                  break;
                case "accept-order":
                  n.addClass("is-loading"),
                    $.ajax({
                      url: "/gigs-ajax.php",
                      type: "post",
                      data: {
                        action: "accept_order",
                        order_id: i,
                        csrf_token: csrf_token,
                      },
                      success: function (t) {
                        t.data.accepted
                          ? window.location.reload()
                          : Swal.fire({
                              showCloseButton: !1,
                              icon: "error",
                              title: "Error!",
                              html: "Something went wrong accepting the offer. Please try again.",
                              confirmButtonText: "OK",
                              buttonsStyling: !1,
                              focusConfirm: !1,
                              showDenyButton: !1,
                              customClass: {
                                popup:
                                  "gigs-popup animate__animated animate__fadeInDown",
                                confirmButton: "btn btn-primary btn-md",
                              },
                            }).then(function () {
                              window.location.reload();
                            });
                      },
                      error: function (t, e, n) {
                        Swal.fire({
                          showCloseButton: !1,
                          icon: "error",
                          title: "Error!",
                          html: "Something went wrong accepting the offer. Please try again.",
                          confirmButtonText: "OK",
                          buttonsStyling: !1,
                          focusConfirm: !1,
                          showDenyButton: !1,
                          customClass: {
                            popup:
                              "gigs-popup animate__animated animate__fadeInDown",
                            confirmButton: "btn btn-primary btn-md",
                          },
                        }).then(function () {
                          window.location.reload();
                        });
                      },
                    });
                  break;
                case "review-order":
                  window.location.href = "/seller/order-details.php?id=" + i;
                  break;
                case "approve-order":
                  window.location.href = "/buyer/approve-order.php?id=" + i;
                  break;
                case "finish-order":
                  window.location.href = "/seller/finish-order.php?id=" + i;
                  break;
                case "open-chat":
                  window.location.href = "/gigs/chat.php?id=" + i;
                  break;
                case "stop-order":
                  Swal.fire({
                    showCloseButton: !0,
                    title: "Stop this order?",
                    text: "The money will be returned to the buyer and you will not be able to finish this order",
                    icon: "",
                    confirmButtonText: "STOP ORDER",
                    cancelButtonText: "CANCEL",
                    buttonsStyling: !1,
                    focusConfirm: !1,
                    showCancelButton: !0,
                    customClass: {
                      popup: "gigs-popup",
                      confirmButton: "btn btn-danger btn-md",
                      cancelButton: "btn btn-gray btn-md",
                    },
                  }).then(function (t) {
                    t.isConfirmed &&
                      (n.addClass("is-loading"),
                      $.ajax({
                        url: "/gigs-ajax.php",
                        type: "post",
                        data: {
                          action: "stop_order",
                          order_id: i,
                          csrf_token: csrf_token,
                        },
                        success: function (t) {
                          t.success
                            ? t.data.stopped
                              ? (window.location.href =
                                  "/seller/gig-orders.php")
                              : Swal.fire({
                                  showCloseButton: !1,
                                  icon: "error",
                                  title: "Error!",
                                  html: t.data.msg,
                                  confirmButtonText: "OK",
                                  buttonsStyling: !1,
                                  focusConfirm: !1,
                                  showDenyButton: !1,
                                  customClass: {
                                    popup:
                                      "gigs-popup animate__animated animate__fadeInDown",
                                    confirmButton: "btn btn-primary btn-md",
                                  },
                                }).then(function () {
                                  window.location.href =
                                    "/seller/gig-orders.php";
                                })
                            : Swal.fire({
                                showCloseButton: !1,
                                icon: "error",
                                title: "Error!",
                                html: t.data.msg,
                                confirmButtonText: "OK",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showDenyButton: !1,
                                customClass: {
                                  popup:
                                    "gigs-popup animate__animated animate__fadeInDown",
                                  confirmButton: "btn btn-primary btn-md",
                                },
                              }).then(function () {
                                window.location.reload();
                              });
                        },
                        error: function (t, e, n) {
                          Swal.fire({
                            showCloseButton: !1,
                            icon: "error",
                            title: "Error!",
                            html: "Something went wrong stopping the gig. Please try again.",
                            confirmButtonText: "OK",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }).then(function () {
                            window.location.reload();
                          });
                        },
                      }));
                  });
                  break;
                case "export-chat":
                  window.location.href = "/gigs/export-chat.php?id=" + i;
                  break;
                case "suggest-order-price":
                  Swal.fire({
                    showCloseButton: !0,
                    title: "Suggest a new price",
                    text: "Please note: An additional fee will be added to the client.",
                    input: "text",
                    inputPlaceholder: "Price ($)",
                    inputValidator: function (t) {
                      if (!t) return "Please, enter a valid price.";
                      var n = parseFloat(t),
                        a = parseFloat(e.data("gig-min-price")),
                        i = parseFloat(e.data("gig-max-price"));
                      return n != t
                        ? "Please, enter a valid price."
                        : n < a
                        ? ($(".swal2-input").val(
                            n.toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                          ),
                          "Minimum price for this gig is $" +
                            a.toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }))
                        : n > i
                        ? ($(".swal2-input").val(
                            n.toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                          ),
                          "Gig max price is $" +
                            i.toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }))
                        : void $(".swal2-input").val(
                            n.toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                          );
                    },
                    icon: "",
                    confirmButtonText: "SEND",
                    cancelButtonText: "CANCEL",
                    buttonsStyling: !1,
                    focusConfirm: !1,
                    showCancelButton: !0,
                    customClass: {
                      popup: "gigs-popup animate__animated animate__fadeInDown",
                      confirmButton: "btn btn-primary btn-md",
                      cancelButton: "btn btn-danger-2 btn-md",
                    },
                  }).then(function (t) {
                    t.isConfirmed &&
                      (n.addClass("is-loading"),
                      $.ajax({
                        url: "/gigs-ajax.php",
                        type: "post",
                        data: {
                          action: "suggest_order_price",
                          order_id: i,
                          suggested_price: t.value,
                          csrf_token: csrf_token,
                        },
                        success: function (t) {
                          Swal.fire({
                            showCloseButton: !0,
                            title: t.data.price_suggested
                              ? "Success!"
                              : "Something went wrong!",
                            html: "<p>" + t.data.msg + "</p>",
                            confirmButtonText: "OK",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }).then(function () {
                            window.location.reload();
                          });
                        },
                        error: function (t, e, n) {
                          Swal.fire({
                            showCloseButton: !1,
                            icon: "error",
                            title: "Error!",
                            html: "Something went wrong suggesting the new price. Please try again.",
                            confirmButtonText: "OK",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }).then(function () {
                            window.location.reload();
                          });
                        },
                      }));
                  });
                  break;
                case "accept-order-price":
                  Swal.fire({
                    showCloseButton: !0,
                    title: "Accept new price?",
                    text: "Money held in reserve previously for this gig will be returned and the new price will be held in reserve from your spendable balance.",
                    icon: "",
                    confirmButtonText: "ACCEPT",
                    cancelButtonText: "CANCEL",
                    buttonsStyling: !1,
                    focusConfirm: !1,
                    showCancelButton: !0,
                    customClass: {
                      popup: "gigs-popup animate__animated animate__fadeInDown",
                      confirmButton: "btn btn-primary btn-md",
                      cancelButton: "btn btn-danger-2 btn-md",
                    },
                  }).then(function (t) {
                    t.isConfirmed &&
                      (n.addClass("is-loading"),
                      $.ajax({
                        url: "/gigs-ajax.php",
                        type: "post",
                        data: {
                          action: "accept_order_price",
                          order_id: i,
                          suggested_price: e.data("gig-suggested-price"),
                          csrf_token: csrf_token,
                        },
                        success: function (t) {
                          t.success
                            ? Swal.fire({
                                showCloseButton: !0,
                                title: t.data.price_accepted
                                  ? "Success!"
                                  : "Something went wrong!",
                                html: "<p>" + t.data.msg + "</p>",
                                confirmButtonText: "OK",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showDenyButton: !1,
                                customClass: {
                                  popup:
                                    "gigs-popup animate__animated animate__fadeInDown",
                                  confirmButton: "btn btn-primary btn-md",
                                },
                              }).then(function () {
                                window.location.reload();
                              })
                            : Swal.fire({
                                showCloseButton: !1,
                                icon: "error",
                                title: "Error!",
                                html: t.data.msg,
                                confirmButtonText: "OK",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showDenyButton: !1,
                                customClass: {
                                  popup:
                                    "gigs-popup animate__animated animate__fadeInDown",
                                  confirmButton: "btn btn-primary btn-md",
                                },
                              }).then(function () {
                                window.location.reload();
                              });
                        },
                        error: function (t, e, n) {
                          Swal.fire({
                            showCloseButton: !1,
                            icon: "error",
                            title: "Error!",
                            html: "Something went wrong accepting new gig price. Please try again.",
                            confirmButtonText: "OK",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }).then(function () {
                            window.location.reload();
                          });
                        },
                      }));
                  });
              }
            }
          ),
          $(document).on(
            "click",
            "#gig-orders-list .gigs-list-item.hired-gig",
            function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                (window.location.href =
                  "/buyer/order-details.php?id=" + $(this).data("order-id"));
            }
          ),
          $(document).on(
            "click",
            "#gig-orders-list .gigs-list-item.requested-gig",
            function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                (window.location.href =
                  "/buyer/gig-request-order-details.php?id=" +
                  $(this).data("order-id"));
            }
          ),
          $(document).on(
            "click",
            "#gig-orders-list .gigs-list-item.gig-ordered",
            function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                (window.location.href =
                  "/seller/order-details.php?id=" + $(this).data("order-id"));
            }
          ),
          $(document).on(
            "click",
            "#gig-orders-list .gigs-list-item.gig-requested-ordered",
            function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                (window.location.href =
                  "/seller/gig-request-order-details.php?id=" +
                  $(this).data("order-id"));
            }
          ),
          $(document).on("select2:select", "#seller_status", function (t) {
            var e = t.params.data.id,
              n = $(t.params.data.element).data("oid");
            $.ajax({
              url: "/seller/update-seller-status.php",
              type: "post",
              data: {
                status: e,
                order_id: n,
                csrf_token: csrf_token,
              },
              success: function (t) {
                Swal.fire({
                  showCloseButton: !1,
                  icon: t.success ? "success" : "error",
                  title: t.success ? "Success!" : "Error",
                  html: "<p>" + t.msg + "</p>",
                  confirmButtonText: "OK",
                  buttonsStyling: !1,
                  focusConfirm: !1,
                  showDenyButton: !1,
                  customClass: {
                    popup: "gigs-popup animate__animated animate__fadeInDown",
                    confirmButton: "btn btn-primary btn-md",
                  },
                });
              },
              error: function (t, e, n) {
                Swal.fire({
                  showCloseButton: !1,
                  icon: "error",
                  title: "Error!",
                  html: "Something went wrong updating the freelancer workflow. Please try again.",
                  confirmButtonText: "OK",
                  buttonsStyling: !1,
                  focusConfirm: !1,
                  showDenyButton: !1,
                  customClass: {
                    popup: "gigs-popup animate__animated animate__fadeInDown",
                    confirmButton: "btn btn-primary btn-md",
                  },
                });
              },
            });
          });
      });
  },
  521: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(".gig-card__wrap").matchHeight({
          property: "min-height",
        }),
          $(document).on(
            "click",
            "#gig-orders-list [data-order-action]",
            function (t) {
              t.preventDefault(), t.stopPropagation();
              var e = $(this),
                n = e.closest(".gigs-list-item"),
                a = e.data("order-action"),
                i = e.data("order-id"),
                o = e.data("return-url");
              switch (a) {
                case "hire-gig-request":
                  Swal.fire({
                    showCloseButton: !0,
                    title: "Hire this gig request and open the chat?",
                    text: "The gig request payment price will be held in reserve from your spendable balance at this time and a live chat feature will open. The gig request payment will only be paid to the freelancer after you approve the gig request is complete and you are satisfied.",
                    icon: "",
                    confirmButtonText: "HIRE",
                    cancelButtonText: "CANCEL",
                    buttonsStyling: !1,
                    focusConfirm: !1,
                    showCancelButton: !0,
                    customClass: {
                      popup: "gigs-popup animate__animated animate__fadeInDown",
                      confirmButton: "btn btn-primary btn-md",
                      cancelButton: "btn btn-gray btn-md",
                    },
                  }).then(function (t) {
                    t.isConfirmed &&
                      (n.addClass("is-loading"),
                      $.ajax({
                        url: "/gigs-ajax.php",
                        type: "post",
                        data: {
                          action: "hire_gig_request",
                          order_id: i,
                          csrf_token: csrf_token,
                        },
                        success: function (t) {
                          t.success
                            ? window.location.reload()
                            : "invalid_gig" === t.data.error ||
                              "invalid_order" === t.data.error ||
                              "cannot_hire" === t.data.error
                            ? Swal.fire({
                                showCloseButton: !1,
                                icon: "error",
                                title: "Error!",
                                html: t.data.msg,
                                confirmButtonText: "OK",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showDenyButton: !0,
                                customClass: {
                                  popup:
                                    "gigs-popup animate__animated animate__fadeInDown",
                                  confirmButton: "btn btn-primary btn-md",
                                  denyButton: "btn btn-gray btn-md",
                                },
                              }).then(function () {
                                window.location.reload();
                              })
                            : "money_required" === t.data.error
                            ? Swal.fire({
                                showCloseButton: !0,
                                title:
                                  "There are not enough funds in your account",
                                text: "You do not have enough funds in your account, go to your wallet to top up",
                                icon: "",
                                confirmButtonText: "GO TO WALLET",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showCancelButton: !1,
                                showDenyButton: !1,
                                customClass: {
                                  popup: "gigs-popup",
                                  confirmButton: "btn btn-primary btn-md",
                                  denyButton: "btn btn-gray btn-md",
                                },
                              }).then(function (t) {
                                t.isConfirmed
                                  ? (window.location.href =
                                      "/wallet.php?tab=deposits")
                                  : window.location.reload();
                              })
                            : Swal.fire({
                                showCloseButton: !1,
                                icon: "error",
                                title: "Error!",
                                html: "Something went wrong accepting the offer. Please try again.",
                                confirmButtonText: "OK",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showDenyButton: !1,
                                customClass: {
                                  popup:
                                    "gigs-popup animate__animated animate__fadeInDown",
                                  confirmButton: "btn btn-primary btn-md",
                                },
                              }).then(function () {
                                window.location.reload();
                              });
                        },
                        error: function (t, e, n) {
                          Swal.fire({
                            showCloseButton: !1,
                            icon: "error",
                            title: "Error!",
                            html: "Something went wrong accepting the offer. Please try again.",
                            confirmButtonText: "OK",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }).then(function () {
                            window.location.reload();
                          });
                        },
                      }));
                  });
                  break;
                case "cancel-gig-request-order":
                  Swal.fire({
                    showCloseButton: !0,
                    title: "Are you sure you want to cancel the order?",
                    text: "If you cancel the order, the buyer will not be able to accept it and will get notified of the cancellation.",
                    icon: "",
                    confirmButtonText: "CANCEL ORDER",
                    cancelButtonText: "KEEP ORDER",
                    buttonsStyling: !1,
                    focusConfirm: !1,
                    showCancelButton: !0,
                    customClass: {
                      popup: "gigs-popup",
                      confirmButton: "btn btn-danger btn-md",
                      cancelButton: "btn btn-gray btn-md",
                    },
                  }).then(function (t) {
                    t.isConfirmed &&
                      (n.addClass("is-loading"),
                      $.ajax({
                        url: "/gigs-ajax.php",
                        type: "post",
                        data: {
                          action: "cancel_gig_request_order",
                          order_id: i,
                          csrf_token: csrf_token,
                        },
                        success: function (t) {
                          o
                            ? window.location.href.endsWith(o)
                              ? window.location.reload()
                              : (window.location.href = o)
                            : (window.location.href = "/seller/gig-orders.php");
                        },
                        error: function (t, e, n) {
                          Swal.fire({
                            showCloseButton: !1,
                            icon: "error",
                            title: "Error!",
                            html: "Something went wrong cancelling the offer. Please try again.",
                            confirmButtonText: "OK",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }).then(function () {
                            window.location.reload();
                          });
                        },
                      }));
                  });
                  break;
                case "decline-gig-request-order":
                  Swal.fire({
                    showCloseButton: !0,
                    title: "Decline this gig request order?",
                    text: "Decline the gig request order if you do not want to hire the freelancer who sent it.",
                    icon: "",
                    confirmButtonText: "DECLINE",
                    cancelButtonText: "CANCEL",
                    buttonsStyling: !1,
                    focusConfirm: !1,
                    showCancelButton: !0,
                    customClass: {
                      popup: "gigs-popup",
                      confirmButton: "btn btn-danger btn-md",
                      cancelButton: "btn btn-gray btn-md",
                    },
                  }).then(function (t) {
                    t.isConfirmed &&
                      (n.addClass("is-loading"),
                      $.ajax({
                        url: "/gigs-ajax.php",
                        type: "post",
                        data: {
                          action: "decline_gig_request_order",
                          order_id: i,
                          csrf_token: csrf_token,
                        },
                        success: function (t) {
                          window.location.reload();
                        },
                        error: function (t, e, n) {
                          Swal.fire({
                            showCloseButton: !1,
                            icon: "error",
                            title: "Error!",
                            html: "Something went wrong declining the gig request order. Please try again.",
                            confirmButtonText: "OK",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }).then(function () {
                            window.location.reload();
                          });
                        },
                      }));
                  });
              }
            }
          ),
          $(document).on(
            "click",
            "#gig-orders-list .gigs-list-item.hired-gig",
            function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                (window.location.href =
                  "/buyer/order-details.php?id=" + $(this).data("order-id"));
            }
          );
      });
  },
  522: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        var t = $(".respond-gig-request"),
          e = t.find(".respond-gig-request-submit"),
          n = parseFloat(t.data("min-gig-request-price")),
          a = parseFloat(t.data("max-gig-request-price")),
          o = t.find('[name="price"]'),
          s = t.find('[name="answers[]"]');
        function r() {
          var i =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            s = !0,
            r = parseFloat(o.val());
          o.val() && r == o.val()
            ? r < n
              ? ($(".invalid-feedback." + $(this).attr("name")).html(
                  "Minimum gig request price is $" +
                    n.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                ),
                (s = !1))
              : r > a
              ? ($(".invalid-feedback." + $(this).attr("name")).html(
                  "Gig max price is $" +
                    a.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                ),
                (s = !1))
              : $(".invalid-feedback.price").html("")
            : (i &&
                $(".invalid-feedback.price").html(
                  "Please, enter a valid price."
                ),
              (s = !1));
          var l = t.find('[name="answers[]"]');
          return (
            l.each(function (t, e) {
              "" == e.value.trim() && (s = !1);
            }),
            s
              ? (e.removeAttr("disabled"), $(".pw-banner").hide())
              : (e.attr("disabled", "disabled"),
                i &&
                  ($.bannerAlert("Please, validate the fields", !0),
                  $.scrollToTop())),
            s
          );
        }
        function l(n) {
          "submit" == n && e.html("<span>SEND</span>"),
            e.removeAttr("disabled"),
            $(".gig-imgs-uploader").removeAttr("disabled"),
            t.removeAttr("disabled"),
            t.find(":input").removeAttr("disabled");
        }
        t.hasClass("new") && e.attr("disabled", "disabled"),
          s.on("input focusout", function (t) {
            t.preventDefault();
            var e = $(this);
            e.val() && e.val() && e.val().length > 5
              ? e.closest("div").next(".invalid-feedback.answers").html("")
              : e
                  .closest("div")
                  .next(".invalid-feedback.answers")
                  .html("Please, detail your answer"),
              r();
          }),
          o.on(
            "input focusout",
            (0, i.default)(function (t) {
              t.preventDefault();
              var e = parseFloat($(this).val());
              $(this).val() && e == $(this).val()
                ? e < n
                  ? $(".invalid-feedback." + $(this).attr("name")).html(
                      "Minimum gig request price is $" +
                        n.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                    )
                  : e > a
                  ? $(".invalid-feedback." + $(this).attr("name")).html(
                      "Gig request max price is $" +
                        a.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                    )
                  : ("focusout" == t.type &&
                      $(this).val(
                        e.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      ),
                    $(".invalid-feedback." + $(this).attr("name")).html(""))
                : $(".invalid-feedback." + $(this).attr("name")).html(
                    "Please, enter a valid price."
                  ),
                r();
            }, 200)
          ),
          $(".gig-imgs-uploader--drop").on("mouseenter", function (t) {
            $("body").addClass("droppable");
          }),
          $(".gig-imgs-uploader--drop").on("mouseleave", function (t) {
            $("body").removeClass("droppable");
          }),
          $(".gig-imgs-uploader--drop")
            .not("input")
            .on("click", function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                $("#uploader").trigger("click");
            }),
          $("#uploader").on("click", function (t) {
            t.stopPropagation();
          }),
          e.on("click", function (n) {
            if ((n.preventDefault(), r(!0))) {
              var a = (function () {
                var e = new FormData(),
                  n = t.serializeArray();
                if (
                  ($.each(n, function (t, n) {
                    e.append(n.name, n.value);
                  }),
                  "undefined" != typeof Uploader)
                )
                  for (
                    var a = Uploader.settings.fileInput.files, i = 0;
                    a && i < a.length;
                    i++
                  )
                    e.append("images[]", a[i]);
                return e;
              })();
              a.append("action", "send-response"),
                e.html("<span>PLEASE WAIT...</span>"),
                e.attr("disabled", "disabled"),
                $(".gig-imgs-uploader").attr("disabled"),
                t.attr("disabled", !0),
                t.find(":input").attr("disabled", !0),
                $(".invalid-feedback").html(""),
                $.ajax({
                  url: t.prop("action"),
                  method: "post",
                  data: a,
                  processData: !1,
                  contentType: !1,
                  success: function (t, e) {
                    t.ok
                      ? Swal.fire({
                          showCloseButton: !0,
                          title: "Gig request responded!",
                          html: "<p>Your gig request response was sent.<br>You will be notified once the buyer respond it.</p>",
                          confirmButtonText: "GOT IT",
                          buttonsStyling: !1,
                          focusConfirm: !1,
                          showDenyButton: !1,
                          customClass: {
                            popup:
                              "gigs-popup animate__animated animate__fadeInDown",
                            confirmButton: "btn btn-primary btn-md",
                          },
                        }).then(function () {
                          window.location.replace(
                            "/seller/gig-requests-responses.php"
                          );
                        })
                      : (l("submit"),
                        $.bannerAlert(t.alert, !0),
                        $.scrollToTop());
                  },
                  error: function (t, e, n) {
                    l("submit"),
                      $.bannerAlert(
                        "Something went wrong. Please try again.",
                        !0
                      ),
                      $.scrollToTop();
                  },
                });
            }
          });
      });
    var a,
      i =
        (a = n(17)) && a.__esModule
          ? a
          : {
              default: a,
            };
  },
  523: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(".gig-card__wrap").matchHeight({
          property: "min-height",
        }),
          $(document).on(
            "click",
            "#gig-requests-list [data-request-action]",
            function (t) {
              t.preventDefault(), t.stopPropagation();
              var e = $(this),
                n = e.closest(".gigs-list-item"),
                a = e.data("request-action"),
                i = e.data("request-id");
              switch (a) {
                case "add-response":
                  window.location.href =
                    "/seller/gig-request-details.php?id=" + i + "#respond";
                  break;
                case "buyer-view-responses":
                  window.location.href =
                    "/buyer/gig-request-details.php?id=" + i + "#responses";
                  break;
                case "view-responses":
                  window.location.href =
                    "/seller/gig-request-details.php?id=" + i + "#responses";
                  break;
                case "view-my-response":
                  window.location.href =
                    "/seller/gig-request-details.php?id=" + i + "#my-response";
                  break;
                case "manage-gig-request":
                  window.location.href =
                    "/buyer/gig-request-details.php?id=" + i;
                  break;
                case "edit-gig-request":
                  window.location.href = "/buyer/gig-request-edit.php?id=" + i;
                  break;
                case "pause-gig-request":
                  Swal.fire({
                    showCloseButton: !0,
                    title: "Pause this gig request?",
                    text: "This gig request won't be found when browsing gig requests for hiring.",
                    icon: "",
                    confirmButtonText: "PAUSE",
                    cancelButtonText: "CANCEL",
                    buttonsStyling: !1,
                    focusConfirm: !1,
                    showCancelButton: !0,
                    customClass: {
                      popup: "gigs-popup",
                      confirmButton: "btn btn-info btn-md",
                      cancelButton: "btn btn-gray btn-md",
                    },
                  }).then(function (t) {
                    t.isConfirmed &&
                      (n.addClass("is-loading"),
                      $.ajax({
                        url: "/gigs-ajax.php",
                        type: "post",
                        data: {
                          action: "pause_gig_request",
                          request_id: i,
                          csrf_token: csrf_token,
                        },
                        success: function (t) {
                          t.success
                            ? Swal.fire({
                                showCloseButton: !1,
                                icon: t.data.paused ? "success" : "error",
                                title: t.data.paused ? "Success!" : "Error",
                                html: "<p>" + t.data.msg + "</p>",
                                confirmButtonText: "OK",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showDenyButton: !1,
                                customClass: {
                                  popup:
                                    "gigs-popup animate__animated animate__fadeInDown",
                                  confirmButton: "btn btn-primary btn-md",
                                },
                              }).then(function () {
                                window.location.href =
                                  "/buyer/requested-gigs.php";
                              })
                            : Swal.fire({
                                showCloseButton: !1,
                                icon: "error",
                                title: "Error!",
                                html: t.data.msg,
                                confirmButtonText: "OK",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showDenyButton: !1,
                                customClass: {
                                  popup:
                                    "gigs-popup animate__animated animate__fadeInDown",
                                  confirmButton: "btn btn-primary btn-md",
                                },
                              }).then(function () {
                                window.location.reload();
                              });
                        },
                        error: function (t, e, n) {
                          Swal.fire({
                            showCloseButton: !1,
                            icon: "error",
                            title: "Error!",
                            html: "Something went wrong pausing the gig request. Please try again.",
                            confirmButtonText: "OK",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }).then(function () {
                            window.location.reload();
                          });
                        },
                      }));
                  });
                  break;
                case "resume-gig-request":
                  Swal.fire({
                    showCloseButton: !0,
                    title: "Resume this gig request?",
                    text: "This gig request will be available when browsing gig requests for hiring.",
                    icon: "",
                    confirmButtonText: "RESUME",
                    cancelButtonText: "CANCEL",
                    buttonsStyling: !1,
                    focusConfirm: !1,
                    showCancelButton: !0,
                    customClass: {
                      popup: "gigs-popup",
                      confirmButton: "btn btn-primary btn-md",
                      cancelButton: "btn btn-gray btn-md",
                    },
                  }).then(function (t) {
                    t.isConfirmed &&
                      (n.addClass("is-loading"),
                      $.ajax({
                        url: "/gigs-ajax.php",
                        type: "post",
                        data: {
                          action: "resume_gig_request",
                          request_id: i,
                          csrf_token: csrf_token,
                        },
                        success: function (t) {
                          t.success
                            ? Swal.fire({
                                showCloseButton: !1,
                                icon: t.data.running ? "success" : "error",
                                title: t.data.running ? "Success!" : "Error",
                                html: "<p>" + t.data.msg + "</p>",
                                confirmButtonText: "OK",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showDenyButton: !1,
                                customClass: {
                                  popup:
                                    "gigs-popup animate__animated animate__fadeInDown",
                                  confirmButton: "btn btn-primary btn-md",
                                },
                              }).then(function () {
                                window.location.href =
                                  "/buyer/requested-gigs.php";
                              })
                            : Swal.fire({
                                showCloseButton: !1,
                                icon: "error",
                                title: "Error!",
                                html: t.data.msg,
                                confirmButtonText: "OK",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showDenyButton: !1,
                                customClass: {
                                  popup:
                                    "gigs-popup animate__animated animate__fadeInDown",
                                  confirmButton: "btn btn-primary btn-md",
                                },
                              }).then(function () {
                                window.location.reload();
                              });
                        },
                        error: function (t, e, n) {
                          Swal.fire({
                            showCloseButton: !1,
                            icon: "error",
                            title: "Error!",
                            html: "Something went wrong resuming the gig request. Please try again.",
                            confirmButtonText: "OK",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }).then(function () {
                            window.location.reload();
                          });
                        },
                      }));
                  });
                  break;
                case "publish-gig-request":
                  Swal.fire({
                    showCloseButton: !0,
                    title: "Publish this gig request?",
                    text: "You won't be able to edit this gig request after publishing it.",
                    icon: "",
                    confirmButtonText: "PUBLISH",
                    cancelButtonText: "CANCEL",
                    buttonsStyling: !1,
                    focusConfirm: !1,
                    showCancelButton: !0,
                    customClass: {
                      popup: "gigs-popup",
                      confirmButton: "btn btn-primary btn-md",
                      cancelButton: "btn btn-gray btn-md",
                    },
                  }).then(function (t) {
                    t.isConfirmed &&
                      (n.addClass("is-loading"),
                      $.ajax({
                        url: "/gigs-ajax.php",
                        type: "post",
                        data: {
                          action: "publish_gig_request",
                          request_id: i,
                          csrf_token: csrf_token,
                        },
                        success: function (t) {
                          t.success
                            ? Swal.fire({
                                showCloseButton: !1,
                                icon: t.data.published ? "success" : "error",
                                title: t.data.published ? "Success!" : "Error",
                                html: "<p>" + t.data.msg + "</p>",
                                confirmButtonText: "OK",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showDenyButton: !1,
                                customClass: {
                                  popup:
                                    "gigs-popup animate__animated animate__fadeInDown",
                                  confirmButton: "btn btn-primary btn-md",
                                },
                              }).then(function () {
                                window.location.href =
                                  "/buyer/requested-gigs.php";
                              })
                            : Swal.fire({
                                showCloseButton: !1,
                                icon: "error",
                                title: "Error!",
                                html: t.data.msg,
                                confirmButtonText: "OK",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showDenyButton: !1,
                                customClass: {
                                  popup:
                                    "gigs-popup animate__animated animate__fadeInDown",
                                  confirmButton: "btn btn-primary btn-md",
                                },
                              }).then(function () {
                                window.location.reload();
                              });
                        },
                        error: function (t, e, n) {
                          Swal.fire({
                            showCloseButton: !1,
                            icon: "error",
                            title: "Error!",
                            html: "Something went wrong publishing the gig request. Please try again.",
                            confirmButtonText: "OK",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }).then(function () {
                            window.location.reload();
                          });
                        },
                      }));
                  });
                  break;
                case "delete-gig-request-draft":
                case "delete-gig-request":
                  Swal.fire({
                    showCloseButton: !0,
                    title: "Delete this gig request?",
                    text: "You will not be able to restore and use this gig request to hire freelancers.",
                    icon: "",
                    confirmButtonText: "DELETE",
                    cancelButtonText: "CANCEL",
                    buttonsStyling: !1,
                    focusConfirm: !1,
                    showCancelButton: !0,
                    customClass: {
                      popup: "gigs-popup",
                      confirmButton: "btn btn-danger btn-md",
                      cancelButton: "btn btn-gray btn-md",
                    },
                  }).then(function (t) {
                    t.isConfirmed &&
                      (n.addClass("is-loading"),
                      $.ajax({
                        url: "/gigs-ajax.php",
                        type: "post",
                        data: {
                          action: "delete_gig_request",
                          request_id: i,
                          csrf_token: csrf_token,
                        },
                        success: function (t) {
                          t.success
                            ? (n.removeClass("is-loading"),
                              n.remove(),
                              Swal.fire({
                                showCloseButton: !1,
                                icon: t.data.deleted ? "success" : "error",
                                title: t.data.deleted ? "Success!" : "Error",
                                html: "<p>" + t.data.msg + "</p>",
                                confirmButtonText: "OK",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showDenyButton: !1,
                                customClass: {
                                  popup:
                                    "gigs-popup animate__animated animate__fadeInDown",
                                  confirmButton: "btn btn-primary btn-md",
                                },
                              }).then(function () {
                                window.location.reload();
                              }))
                            : Swal.fire({
                                showCloseButton: !1,
                                icon: "error",
                                title: "Error!",
                                html: t.data.msg,
                                confirmButtonText: "OK",
                                buttonsStyling: !1,
                                focusConfirm: !1,
                                showDenyButton: !1,
                                customClass: {
                                  popup:
                                    "gigs-popup animate__animated animate__fadeInDown",
                                  confirmButton: "btn btn-primary btn-md",
                                },
                              }).then(function () {
                                window.location.reload();
                              });
                        },
                        error: function (t, e, n) {
                          Swal.fire({
                            showCloseButton: !1,
                            icon: "error",
                            title: "Error!",
                            html:
                              "Something went wrong deleting the " +
                              ("delete-draft" == a ? "draft" : "gig request") +
                              ". Please try again.",
                            confirmButtonText: "OK",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }).then(function () {
                            window.location.reload();
                          });
                        },
                      }));
                  });
              }
            }
          ),
          $(document).on(
            "click",
            "#gig-requests-list .gigs-list-item.requested-gig",
            function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                (window.location.href =
                  "/buyer/gig-request-details.php?id=" +
                  $(this).data("request-id"));
            }
          ),
          $(document).on(
            "click",
            "#gig-requests-list .gigs-list-item.gig-request",
            function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                (window.location.href =
                  "/seller/gig-request-details.php?id=" +
                  $(this).data("request-id"));
            }
          ),
          $(document).on(
            "click",
            "#gig-orders-list .gigs-list-item.gig-request-response",
            function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                (window.location.href =
                  "/seller/gig-request-details.php?id=" +
                  $(this).data("request-id"));
            }
          ),
          $(".gig-request-order-status-block").each(function (t, e) {
            var n = $(e),
              a = $("#gig-orders-list");
            getUrlParameter("order_status");
            function i() {
              var t = {
                action: "filter_gig_request_orders",
                order_status: getUrlParameter("order_status"),
                request_id: n.data("request-id"),
                csrf_token: csrf_token,
              };
              $.ajax({
                url: "/gigs-ajax.php",
                type: "post",
                data: t,
                beforeSend: function () {
                  a.addClass("is-loading");
                },
                success: function (t) {
                  t.success
                    ? (a.html(t.data.html_orders),
                      tippy("[data-tippy-content]", {
                        allowHTML: !0,
                        popperOptions: {
                          strategy: "fixed",
                          modifiers: [
                            {
                              name: "flip",
                              options: {
                                fallbackPlacements: ["bottom", "right"],
                              },
                            },
                            {
                              name: "preventOverflow",
                              options: {
                                altAxis: !0,
                                tether: !1,
                              },
                            },
                          ],
                        },
                      }))
                    : a.html(
                        '<p class="text-center mb-0 mt-4">No gig requests orders were found matching your criteria.</p>'
                      );
                },
              }).always(function (t) {
                a.removeClass("is-loading");
              });
            }
            n
              .find('[data-gig-request-order-filter="status"]')
              .find(".dropdown-menu a")
              .on("click", function (t) {
                t.preventDefault(), t.stopPropagation();
                var e = $(this),
                  n = e.closest(".dropdown"),
                  a = e.data("value");
                e.addClass("active").siblings().removeClass("active"),
                  n.find(".list-filter__selection").text(e.text()),
                  n.dropdown("toggle"),
                  insertParamToUrl("order_status", a, "", !0),
                  e.data("gig-request-target") &&
                    (location.hash = "#" + e.data("gig-request-target")),
                  i();
              }),
              $(".paginate-gig-reviews").on("click", function (t) {
                var e = $(this),
                  a = null;
                e.hasClass("next")
                  ? (a = n.data("next-page"))
                  : e.hasClass("prev") && (a = n.data("prev-page")),
                  a &&
                    (insertParamToUrl("reviews_page", a, "", !0),
                    e.data("gig-target") &&
                      (location.hash = "#" + e.data("gig-target")),
                    i());
              });
          });
      });
  },
  524: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        function t(t) {
          var e = [];
          return (
            t.filter(":checked").each(function (t, n) {
              var a = $(n);
              e.push(a.val());
            }),
            e
          );
        }
        function e(t) {
          var e = $("#shareModal").html();
          if (void 0 !== e) {
            var n = $("input.share-box__field-input").val();
            (n = $("<div />").text(n).html()),
              (t = $("<div />").text(t).html()),
              (e = e.replaceAll(n, t)),
              $("#shareModal").html(e);
          }
        }
        $("[data-gig-filter].dropdown-multiple .dropdown-menu").click(function (
          t
        ) {
          t.stopPropagation();
        }),
          $(".results-bar--gigs").each(function (n, a) {
            var o = $(a),
              s = $(".gigs-list"),
              r = $(window),
              l = $(".gig-cards").find("[data-load-more-gigs-btn]"),
              c = $(".gig-cards").find(".load-more-gigs-loaded"),
              d = $(".gig-cards").data("load-more-gigs-limit"),
              u = $(".gig-cards").data("load-more-gigs-page"),
              p = getUrlParameter("sort"),
              f = getUrlParameter("category"),
              m = getUrlParameter("sub_category"),
              g = getUrlParameter("location"),
              h = getUrlParameter("price"),
              b = getUrlParameter("status"),
              v = getUrlParameter("s"),
              w = !1,
              _ = !1,
              y = o.find('[data-gig-filter="status"]'),
              k = [],
              x = $('[data-gig-filter="sort"]'),
              C = o.find('[data-gig-filter="price"]'),
              S = o.find('[data-gig-filter="search-term"]'),
              D = o.find('[data-gig-filter="clear-filters"]'),
              T = $('[data-gig-filter="category"]'),
              B = $('[data-gig-filter="sub-category"]'),
              A = B.find(".page-filter__options"),
              P = [],
              j = T.data("gig-filter-url");
            0 == T.find('input[type="radio"]:checked').length &&
              B.addClass("disabled");
            var E = $('[data-gig-filter="location"]'),
              F = (E.find(".page-filter__options"), []);
            function O() {
              var t = T.find(".dropdown-toggle");
              T.find("input[type=radio]:checked").prop("checked", !1),
                (f = ""),
                insertParamToUrl("category", "", j, !0),
                t.find("span").text(t.data("placeholder")),
                B.find("input[type=checkbox]:checked").prop("checked", !1),
                insertParamToUrl("sub_category", "", j, !0),
                B.find(".page-filter__options").html(
                  '<p class="mb-0">Please select a category first</p>'
                ),
                B.addClass("disabled");
            }
            function q() {
              var t = B.find(".dropdown-toggle");
              B.find("input[type=checkbox]:checked").prop("checked", !1),
                (P = []),
                insertParamToUrl("sub_category", "", j, !0),
                t.find("span").text(t.data("placeholder"));
            }
            function I() {
              var t = y.find(".dropdown-toggle");
              y.find("input[type=checkbox]:checked").prop("checked", !1),
                (k = []),
                insertParamToUrl("status", "", j, !0),
                t.find("span").text(t.data("placeholder"));
            }
            function M() {
              var t = E.find(".dropdown-toggle");
              E.find("input[type=checkbox]:checked").prop("checked", !1),
                (F = []),
                insertParamToUrl("location", "", j, !0),
                t.find("span").text(t.data("placeholder"));
            }
            function U() {
              var t = C.find("input"),
                e = t.data("ionRangeSlider");
              e.reset(),
                e.update({
                  from: C.data("from"),
                  to: C.data("to"),
                }),
                t.val(""),
                insertParamToUrl("price", "", j, !0),
                C.find(".dropdown-toggle span").text(C.data("placeholder"));
            }
            function L() {
              insertParamToUrl("s", "", j, !0);
            }
            function R() {
              var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              c.hide(),
                (f = getUrlParameter("category")),
                (m = getUrlParameter("sub_category")),
                (b = getUrlParameter("status")),
                (p = getUrlParameter("sort")),
                (g = getUrlParameter("location")),
                (h = getUrlParameter("price")),
                (v = getUrlParameter("s")),
                (u = t ? u + 1 : 1),
                t && (w = !0),
                $.ajax({
                  url: "/gigs-ajax.php",
                  type: "post",
                  data: {
                    action: $(".gigs-list").data("action"),
                    category: f,
                    sub_category: m,
                    status: b,
                    sort: p,
                    location: g,
                    price: h,
                    s: v,
                    csrf_token: csrf_token,
                    limit: d,
                    page: u,
                  },
                  beforeSend: function () {
                    t ? l.addClass("disabled btn-is-loading") : l.hide(),
                      s.addClass("is-loading");
                  },
                  success: function (n) {
                    e(n.data.share_url),
                      n.data.has_more_results
                        ? l.show()
                        : (n.data.gigs_count > 0 && c.show(), l.hide()),
                      n.data.html.trim()
                        ? (t
                            ? s.html(function (t, e) {
                                return e + n.data.html;
                              })
                            : s.html(function () {
                                return n.data.html;
                              }),
                          tippy("[data-tippy-content]", {
                            allowHTML: !0,
                            popperOptions: {
                              strategy: "fixed",
                              modifiers: [
                                {
                                  name: "flip",
                                  options: {
                                    fallbackPlacements: ["bottom", "right"],
                                  },
                                },
                                {
                                  name: "preventOverflow",
                                  options: {
                                    altAxis: !0,
                                    tether: !1,
                                  },
                                },
                              ],
                            },
                          }))
                        : ((_ = !0),
                          t
                            ? (c.show(), l.hide())
                            : s.html(
                                '<div class="col-12"><p class="text-center mb-0 mt-4">No gigs were found matching your criteria.</p></div>'
                              ));
                  },
                }).always(function (e) {
                  s.removeClass("is-loading"),
                    t && (l.removeClass("disabled btn-is-loading"), (w = !1));
                });
            }
            ((getUrlParameter("category") &&
              "" != getUrlParameter("category")) ||
              (getUrlParameter("sub_category") &&
                "" != getUrlParameter("sub_category")) ||
              (getUrlParameter("location") &&
                "" != getUrlParameter("location")) ||
              (getUrlParameter("status") && "" != getUrlParameter("status")) ||
              (getUrlParameter("price") && "" != getUrlParameter("price"))) &&
              D.show(),
              getUrlParameter("s") &&
                "" != getUrlParameter("s") &&
                S.find('[data-gig-filter-action="close"]').show(),
              o.find("[data-gig-filter]").each(function (t, e) {
                var n = $(e),
                  a = n.find('[data-toggle="dropdown"]');
                n.find("[data-gig-filter-action]").on("click", function (t) {
                  a.dropdown("hide");
                });
              }),
              (P = t(B.find("input[type=checkbox]"))),
              (k = t(y.find("input[type=checkbox]"))),
              (F = t(E.find("input[type=checkbox]"))),
              T.find('input[type="radio"]').on("change", function (t) {
                (f = $(this).val()),
                  T.find(".dropdown-toggle span").text(
                    $(this).siblings("label").text()
                  ),
                  insertParamToUrl("category", f, j, !0);
              }),
              T.find('[data-gig-filter-action="apply"]').on(
                "click",
                function (t) {
                  q(),
                    B.removeClass("disabled"),
                    (P = []),
                    insertParamToUrl("sub_category", "", j, !0),
                    $.ajax({
                      url: "/gigs-ajax.php",
                      type: "post",
                      data: {
                        action: "get_sub_categories",
                        category: f,
                        csrf_token: csrf_token,
                      },
                      beforeSend: function (t) {
                        A.html(
                          '<p class="mb-0 text-center w-100" style=""><i class="fas fa-spinner fa-spin"></i></p>'
                        );
                      },
                      success: function (t) {
                        if (t.data) {
                          var e = "";
                          for (var n in t.data)
                            e +=
                              '<div class="page-filter__option custom-control custom-checkbox"><input type="checkbox" name="category" id="pageFiltersSubCategory' +
                              n +
                              '" class="custom-control-input" value="' +
                              n +
                              '"><label for="pageFiltersSubCategory' +
                              n +
                              '" class="custom-control-label">' +
                              t.data[n].title +
                              "</label></div>";
                          A.html(e),
                            $("h1.seo-h1").html(t.seo.tag_h1),
                            (document.title =
                              t.seo.page_title + " | SproutGigs"),
                            $("meta[name=description").attr(
                              "content",
                              t.seo.meta_description
                            ),
                            $("p.seo-content").html(t.seo.content);
                        } else
                          A.html(
                            '<p class="mb-0">No sub categories found for the selected category.</p></p>'
                          );
                      },
                    }),
                    D.show(),
                    R();
                }
              ),
              T.find('[data-gig-filter-action="close"]').on(
                "click",
                function (t) {
                  O(), q(), R();
                }
              ),
              B.on("change", 'input[type="checkbox"]', function (t) {
                var e = $(this),
                  n = e.val();
                if (e.is(":checked")) P.push(n);
                else {
                  var a = P.indexOf(n);
                  -1 !== a && P.splice(a, 1);
                }
                insertParamToUrl("sub_category", P.join(","), j, !0);
              }),
              B.find('[data-gig-filter-action="close"]').on(
                "click",
                function (t) {
                  q(), R();
                }
              ),
              B.find('[data-gig-filter-action="apply"]').on(
                "click",
                function (t) {
                  D.show(), R();
                  var e = B.find(".dropdown-toggle"),
                    n = B.find("input[type=checkbox]")
                      .filter(":checked")
                      .next("label")
                      .map(function () {
                        return $(this).text();
                      })
                      .get();
                  n.length
                    ? e.find("span").text(n.join(", "))
                    : e.find("span").text(e.data("placeholder"));
                }
              ),
              y.on("change", 'input[type="checkbox"]', function (t) {
                var e = $(this),
                  n = e.val();
                if (e.is(":checked")) k.push(n);
                else {
                  var a = k.indexOf(n);
                  -1 !== a && k.splice(a, 1);
                }
                insertParamToUrl("status", k.join(","), j, !0);
              }),
              y
                .find('[data-gig-filter-action="close"]')
                .on("click", function (t) {
                  I(), R();
                }),
              y
                .find('[data-gig-filter-action="apply"]')
                .on("click", function (t) {
                  D.show(), R();
                  var e = y.find(".dropdown-toggle"),
                    n = y
                      .find("input[type=checkbox]")
                      .filter(":checked")
                      .next("label")
                      .map(function () {
                        return $(this).text();
                      })
                      .get();
                  n.length
                    ? e.find("span").text(n.join(", "))
                    : e.find("span").text(e.data("placeholder"));
                }),
              x.find(".dropdown-menu a").on("click", function (t) {
                t.preventDefault(), t.stopPropagation();
                var e = $(this),
                  n = e.closest(".dropdown"),
                  a = e.data("value");
                e.addClass("active").siblings().removeClass("active"),
                  n.find(".dropdown-sortby__selection").text(e.text()),
                  n.dropdown("toggle"),
                  insertParamToUrl("sort", a, "", !0),
                  R();
              }),
              E.on("change", 'input[type="checkbox"]', function (t) {
                var e = $(this),
                  n = e.val();
                if (e.is(":checked")) F.push(n);
                else {
                  var a = F.indexOf(n);
                  -1 !== a && F.splice(a, 1);
                }
                insertParamToUrl("location", F.join(","), j, !0);
              }),
              E.find('[data-gig-filter-action="apply"]').on(
                "click",
                function (t) {
                  D.show(), R();
                  var e =
                    E.find("input[type=checkbox]")
                      .filter(":checked")
                      .next("label")
                      .map(function () {
                        return $(this).text();
                      })
                      .get()
                      .join(", ") ||
                    E.find(".dropdown-toggle").data("placeholder");
                  E.find(".dropdown-toggle span").text(e);
                }
              ),
              E.find('[data-gig-filter-action="close"]').on(
                "click",
                function (t) {
                  M(), R();
                }
              ),
              C.find("input").on(
                "change",
                (0, i.default)(function () {
                  $(this);
                  var t = $(this).val().split(";"),
                    e = t[0] || 1,
                    n = t[1] || 15;
                  C.find(".dropdown-toggle span").text("$" + e + " - $" + n);
                }, 150)
              ),
              C.find('[data-gig-filter-action="apply"]').on(
                "click",
                function (t) {
                  var e = C.find("input").val(),
                    n = e.split(";");
                  n[0],
                    n[1],
                    insertParamToUrl("price", e, j, !0),
                    D.show(),
                    R();
                }
              ),
              C.find('[data-gig-filter-action="close"]').on(
                "click",
                function (t) {
                  U(), R();
                }
              ),
              D.on("click", function (t) {
                D.hide(),
                  O(),
                  q(),
                  0 != y.length && I(),
                  0 != E.length && M(),
                  0 != C.length && U(),
                  R();
              }),
              S.find('[data-gig-filter-action="close"]').on(
                "click",
                function (t) {
                  $(this).hide(), L(), R();
                }
              ),
              S.find('[data-gig-filter-action="apply"]').on(
                "click",
                function (t) {
                  var e = S.find("input").val();
                  insertParamToUrl("s", e, j, !0),
                    S.find('[data-gig-filter-action="close"]').show(),
                    R();
                }
              ),
              S.find('[data-gig-filter-action="close"]').on(
                "click",
                function (t) {
                  S.find("input").val(""), L(), $(this).hide(), R();
                }
              ),
              S.find("input").on("keypress", function (t) {
                13 == t.which &&
                  S.find('[data-gig-filter-action="apply"]').trigger("click");
              }),
              l.on("click", function (t) {
                t.preventDefault(), R(!0);
              }),
              $(document).scroll(function () {
                w ||
                  _ ||
                  (l.length &&
                    !l.is(":hidden") &&
                    l.offset().top - (r.height() + r.scrollTop()) < 100 &&
                    l.trigger("click"));
              });
          });
      });
    var a,
      i =
        (a = n(17)) && a.__esModule
          ? a
          : {
              default: a,
            };
  },
  525: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        var t = $(".post-gig-review"),
          e = t.find(".post-gig-review__submit"),
          n = t.find(".post-gig-review__cancel"),
          a = t.find('[name="rating"]'),
          o = t.find('[name="comment"]');
        function s() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = !0;
          return (
            a.val() > 0 && a.val() <= 5
              ? $(".invalid-feedback.rating").html("")
              : (t &&
                  $(".invalid-feedback.rating").html(
                    "Please, enter a valid rating."
                  ),
                (n = !1)),
            o.val()
              ? $(".invalid-feedback.comment").html("")
              : (t &&
                  $(".invalid-feedback.comment").html(
                    "Please, enter the review comment."
                  ),
                (n = !1)),
            n
              ? (e.removeAttr("disabled"), $(".pw-banner").hide())
              : (e.attr("disabled", "disabled"),
                t &&
                  ($.bannerAlert("Please, validate the fields", !0),
                  $.scrollToTop())),
            n
          );
        }
        e.attr("disabled", "disabled"),
          o.on(
            "input",
            (0, i.default)(function (t) {
              t.preventDefault(),
                $(this).val()
                  ? $(".invalid-feedback." + $(this).attr("name")).html("")
                  : $(".invalid-feedback." + $(this).attr("name")).html(
                      "Please, enter the review comment."
                    ),
                s();
            }, 200)
          ),
          a.on(
            "change",
            (0, i.default)(function (t) {
              t.preventDefault(),
                $(this).val() > 0 && $(this).val() < 5
                  ? $(".invalid-feedback." + $(this).attr("name")).html("")
                  : $(".invalid-feedback." + $(this).attr("name")).html(
                      "Please, enter a valid rating."
                    ),
                s();
            }, 200)
          ),
          e.on("click", function (a) {
            a.preventDefault(),
              s(!0) &&
                (e.html("<span>PLEASE WAIT...</span>"),
                e.attr("disabled", "disabled"),
                n.addClass("disabled"),
                $(".invalid-feedback").html(""),
                $.post(t.prop("action"), t.serialize())
                  .done(function (a) {
                    a.ok
                      ? Swal.fire({
                          showCloseButton: !1,
                          icon: "success",
                          title: "Thanks for your review!",
                          html:
                            "<p>Your review has been added to the " +
                            t.data("reviewee") +
                            " account.</p>",
                          confirmButtonText: "GO TO GIGS",
                          buttonsStyling: !1,
                          focusConfirm: !1,
                          showDenyButton: !1,
                          customClass: {
                            popup:
                              "gigs-popup animate__animated animate__fadeInDown",
                            confirmButton: "btn btn-primary btn-md",
                          },
                        }).then(function () {
                          window.location.replace(n.attr("href"));
                        })
                      : (e.html("<span>POST REVIEW</span>"),
                        e.removeAttr("disabled"),
                        n.removeClass("disabled"),
                        $.bannerAlert(a.alert, !0),
                        $.scrollToTop());
                  })
                  .fail(function (t, a, i) {
                    e.html("<span>POST REVIEW</span>"),
                      e.removeAttr("disabled"),
                      n.removeClass("disabled"),
                      $.bannerAlert(
                        "Something went wrong. Please try again.",
                        !0
                      ),
                      $.scrollToTop();
                  }));
          }),
          $(".reviews-block__header").each(function (t, e) {
            var n = $(e),
              a = $("#gig-reviews-list-" + n.data("side")),
              i = $(".js-reviews-block." + n.data("side")),
              o = $(".reviews-block__count." + n.data("side")),
              s = getUrlParameter("reviews_sort"),
              r = getUrlParameter("reviews_show"),
              l = getUrlParameter("reviews_page"),
              c =
                (getUrlParameter("id"), n.find('[data-review-filter="sort"]')),
              d = n.find('[data-review-filter="show"]');
            function u() {
              (s = getUrlParameter("reviews_sort")),
                (r = getUrlParameter("reviews_show")),
                (l = getUrlParameter("reviews_page"));
              var t = {
                action: "filter_reviews",
                reviews_sort: s,
                reviews_show: r,
                reviews_page: l,
                side: n.data("side"),
                uid: n.data("uid"),
                csrf_token: csrf_token,
              };
              n.data("id") && (t.id = n.data("id")),
                $.ajax({
                  url: "/gigs-ajax.php",
                  type: "post",
                  data: t,
                  beforeSend: function () {
                    i.addClass("is-loading");
                  },
                  success: function (t) {
                    t.success
                      ? (i.html(t.data.html_reviews),
                        o.html(t.data.html_reviews_rating),
                        n.data("next-page", t.data.next_page),
                        n.data("prev-page", t.data.prev_page),
                        t.data.next_page
                          ? $(".paginate-gig-reviews.next").removeClass(
                              "disabled"
                            )
                          : $(".paginate-gig-reviews.next").addClass(
                              "disabled"
                            ),
                        t.data.prev_page
                          ? $(".paginate-gig-reviews.prev").removeClass(
                              "disabled"
                            )
                          : $(".paginate-gig-reviews.prev").addClass(
                              "disabled"
                            ),
                        tippy("[data-tippy-content]", {
                          allowHTML: !0,
                          popperOptions: {
                            strategy: "fixed",
                            modifiers: [
                              {
                                name: "flip",
                                options: {
                                  fallbackPlacements: ["bottom", "right"],
                                },
                              },
                              {
                                name: "preventOverflow",
                                options: {
                                  altAxis: !0,
                                  tether: !1,
                                },
                              },
                            ],
                          },
                        }))
                      : a.html(
                          '<p class="text-center mb-0 mt-4">No reviews were found matching your criteria.</p>'
                        );
                  },
                }).always(function (t) {
                  i.removeClass("is-loading");
                });
            }
            c.find(".dropdown-menu a").on("click", function (t) {
              t.preventDefault(), t.stopPropagation();
              var e = $(this),
                n = e.closest(".dropdown"),
                a = e.data("value");
              e.addClass("active").siblings().removeClass("active"),
                n.find(".list-filter__selection").text(e.text()),
                n.dropdown("toggle"),
                insertParamToUrl("reviews_sort", a, "", !0),
                e.data("gig-target") &&
                  (location.hash = "#" + e.data("gig-target")),
                u();
            }),
              d.find(".dropdown-menu a").on("click", function (t) {
                t.preventDefault(), t.stopPropagation();
                var e = $(this),
                  n = e.closest(".dropdown"),
                  a = e.data("value");
                e.addClass("active").siblings().removeClass("active"),
                  n.find(".list-filter__selection").text(e.text()),
                  n.dropdown("toggle"),
                  insertParamToUrl("reviews_show", a, "", !0),
                  e.data("gig-target") &&
                    (location.hash = "#" + e.data("gig-target")),
                  u();
              }),
              $(".paginate-gig-reviews").on("click", function (t) {
                var e = $(this),
                  a = null;
                e.hasClass("next")
                  ? (a = n.data("next-page"))
                  : e.hasClass("prev") && (a = n.data("prev-page")),
                  a &&
                    (insertParamToUrl("reviews_page", a, "", !0),
                    e.data("gig-target") &&
                      (location.hash = "#" + e.data("gig-target")),
                    u());
              });
          });
      });
    var a,
      i =
        (a = n(17)) && a.__esModule
          ? a
          : {
              default: a,
            };
  },
  526: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        var t = $(".add-links");
        t.each(function (t, e) {
          var n = $(e),
            a = n.find(".add-links__add"),
            i = n.find("ul");
          a.on("click", function (t) {
            t.preventDefault(),
              i.find("li").length <= 5 &&
                (i.append(
                  '<li class="add-links__item">\n        <div class="add-links__item-inner">\n          <input type="url" name="links[]" class="form-control links" placeholder="e.g. https://example.org" maxlength="255">\n          <button type="button" class="add-links__open btn btn-link btn-icon" style="display: none;"><i class="fas fa-external-link-alt"></i></button>\n        </div>\n        <button type="button" class="add-links__delete btn btn-icon text-body" style="display: none;"><i class="fas fa-trash-alt"></i></button>\n      </li>\n      <div class="invalid-feedback links d-block"></div>'
                ),
                (i = n.find("ul")).find("li").length > 1 &&
                  i.find(".add-links__delete").show(),
                5 == i.find("li").length && a.hide());
          }),
            i.on("keyup", "input", function (t) {
              t.preventDefault();
              var e = $(this);
              e.val(e.val().replace(/\s/, "")),
                e.val()
                  ? e.val() &&
                    $.isValidUrl(e.val()) &&
                    e.val().toLowerCase().startsWith("https://")
                    ? (e.closest("li").next(".invalid-feedback.links").html(""),
                      e.siblings(".add-links__open").fadeIn())
                    : (e
                        .closest("li")
                        .next(".invalid-feedback.links")
                        .html(
                          "Please, enter a valid url (e.g. https://www.example.org)"
                        ),
                      e.siblings(".add-links__open").fadeOut())
                  : (e.closest("li").next(".invalid-feedback.links").html(""),
                    e.siblings(".add-links__open").fadeOut()),
                h();
            }),
            i.on("click", ".add-links__delete", function (t) {
              t.preventDefault();
              var e = $(this);
              e.closest("li").next(".invalid-feedback").remove(),
                e.closest("li").remove(),
                i.find("li").length <= 1 && i.find(".add-links__delete").hide(),
                i.find("li").length < 5 && a.show(),
                h();
            }),
            i.on("click", ".add-links__open", function (t) {
              t.preventDefault();
              var e = $(this).closest("li").find("input").val();
              window.open(e, "_blank", "noreferrer");
            });
        });
        var e = $(".post-gig"),
          n = e.find(".post-gig__submit"),
          a = e.find(".post-gig__submit-custom"),
          o = e.find(".post-gig__save-draft"),
          s = e.find(".post-gig__delete-draft"),
          r = e.find(".post-gig__cancel"),
          l = parseFloat(e.data("max-gig-price")),
          c = e.find('[name="title"]'),
          d = e.find('[name="category"]'),
          u = e.find('[name="subcategory"]'),
          p = e.find('[name="delivery_time"]'),
          f = e.find('[name="revisions"]'),
          m = e.find('[name="price"]'),
          g = e.find('[name="description"]');
        function h() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            i = !0;
          c.val()
            ? $(".invalid-feedback.title").html("")
            : (t &&
                $(".invalid-feedback.title").html(
                  "Please, enter the gig title."
                ),
              (i = !1)),
            d.val()
              ? $(".invalid-feedback.category").html("")
              : (t &&
                  $(".invalid-feedback.category").html(
                    "Please, select a category."
                  ),
                (i = !1)),
            u.val()
              ? $(".invalid-feedback.sub-category").html("")
              : (t &&
                  $(".invalid-feedback.sub-category").html(
                    "Please, select a subcategory."
                  ),
                (i = !1)),
            p.val()
              ? $(".invalid-feedback.delivery-time").html("")
              : (t &&
                  $(".invalid-feedback.delivery-time").html(
                    "Please, select a delivery time."
                  ),
                (i = !1)),
            f.val() && parseInt(f.val()) == f.val()
              ? $(".invalid-feedback.revisions").html("")
              : (t &&
                  $(".invalid-feedback.revisions").html(
                    "Please, enter a valid number of revisions."
                  ),
                (i = !1));
          var s = parseFloat(m.val()),
            r = parseFloat(u.find(":selected").data("min-price"));
          m.val() && s == m.val()
            ? "" != u.val() && s < r
              ? ($(".invalid-feedback.price").html(
                  "Minimum gig price for subcategory <i>" +
                    u.find(":selected").text() +
                    "</i> is $" +
                    r.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                ),
                (i = !1))
              : s > l
              ? ($(".invalid-feedback." + $(this).attr("name")).html(
                  "Gig max price is $" +
                    l.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                ),
                (i = !1))
              : $(".invalid-feedback.price").html("")
            : (t &&
                $(".invalid-feedback.price").html(
                  "Please, enter a valid price."
                ),
              (i = !1)),
            g.val()
              ? $(".invalid-feedback.description").html("")
              : (t &&
                  $(".invalid-feedback.description").html(
                    "custom" == g.data("gig-type")
                      ? "Please, enter the gig requirements and deliverables."
                      : "Please, enter the gig overview."
                  ),
                (i = !1));
          var h = e.find('[name="links[]"]');
          return (
            h.each(function (t) {
              !$(this).val() ||
                ($.isValidUrl($(this).val()) &&
                  $(this).val().toLowerCase().startsWith("https://")) ||
                (i = !1);
            }),
            i
              ? (n.removeAttr("disabled"),
                a.removeAttr("disabled"),
                o.removeAttr("disabled"),
                $(".pw-banner").hide())
              : (n.attr("disabled", "disabled"),
                a.attr("disabled", "disabled"),
                o.attr("disabled", "disabled"),
                t &&
                  ($.bannerAlert("Please, validate the fields", !0),
                  $.scrollToTop())),
            i
          );
        }
        function b() {
          var t = new FormData(),
            n = e.serializeArray();
          if (
            ($.each(n, function (e, n) {
              t.append(n.name, n.value);
            }),
            "undefined" != typeof Uploader)
          )
            for (
              var a = Uploader.settings.fileInput.files, i = 0;
              a && i < a.length;
              i++
            )
              t.append("images[]", a[i]);
          return t;
        }
        function v() {
          var t = b();
          t.append("action", "save_draft"),
            w("save-draft"),
            $.ajax({
              url: e.prop("action"),
              method: "post",
              data: t,
              processData: !1,
              contentType: !1,
              success: function (t, e) {
                t.ok
                  ? Swal.fire({
                      showCloseButton: !1,
                      icon: "success",
                      title: '<div class="text-center">Draft saved!</div>',
                      confirmButtonText: "OK",
                      buttonsStyling: !1,
                      focusConfirm: !1,
                      showDenyButton: !1,
                      customClass: {
                        popup:
                          "gigs-popup animate__animated animate__fadeInDown",
                        confirmButton: "btn btn-primary btn-md",
                      },
                    }).then(function () {
                      window.location.replace("/seller/posted-gigs.php");
                    })
                  : (_("save-draft"),
                    $.bannerAlert(
                      t.alert
                        ? t.alert
                        : "Something went wrong saving the draft. Please try again.",
                      !0
                    ),
                    $.scrollToTop(),
                    Swal.close());
              },
              error: function (t, e, n) {
                _("save-draft"),
                  $.bannerAlert(
                    "Something went wrong saving the draft. Please try again.",
                    !0
                  ),
                  $.scrollToTop(),
                  Swal.close();
              },
            });
        }
        function w(i) {
          "submit" == i
            ? n.html("<span>PLEASE WAIT...</span>")
            : "submit-custom" == i
            ? a.html("<span>PLEASE WAIT...</span>")
            : "save-draft" == i && o.html("<span>PLEASE WAIT...</span>"),
            n.attr("disabled", "disabled"),
            a.attr("disabled", "disabled"),
            o.attr("disabled", "disabled"),
            r.addClass("disabled"),
            s.addClass("disabled"),
            t.find(".add-links__add").addClass("disabled"),
            $(".gig-imgs-uploader").attr("disabled"),
            e.attr("disabled", !0),
            e.find(":input").attr("disabled", !0);
        }
        function _(i) {
          "submit" == i
            ? n.html("<span>PUBLISH</span>")
            : "submit-custom" == i
            ? a.html("<span>SEND TO FREELANCER</span>")
            : "save-draft" == i && o.html("<span>SAVE DRAFT</span>"),
            n.removeAttr("disabled"),
            a.removeAttr("disabled"),
            o.removeAttr("disabled"),
            r.removeClass("disabled"),
            s.removeClass("disabled"),
            t.find(".add-links__add").removeClass("disabled"),
            $(".gig-imgs-uploader").removeAttr("disabled"),
            e.removeAttr("disabled"),
            e.find(":input").removeAttr("disabled");
        }
        c.on(
          "input",
          (0, i.default)(function (t) {
            t.preventDefault(),
              $(this).val()
                ? $(".invalid-feedback." + $(this).attr("name")).html("")
                : $(".invalid-feedback." + $(this).attr("name")).html(
                    "Please, enter the gig title."
                  ),
              h();
          }, 200)
        ),
          g.on(
            "input",
            (0, i.default)(function (t) {
              t.preventDefault(),
                $(this).val()
                  ? $(".invalid-feedback." + $(this).attr("name")).html("")
                  : $(".invalid-feedback." + $(this).attr("name")).html(
                      "custom" == g.data("gig-type")
                        ? "Please, enter the gig requirements and deliverables."
                        : "Please, enter the gig overview."
                    ),
                h();
            }, 200)
          ),
          m.on(
            "input focusout",
            (0, i.default)(function (t) {
              t.preventDefault();
              var e = parseFloat($(this).val()),
                n = parseFloat(u.find(":selected").data("min-price"));
              $(this).val() && e == $(this).val()
                ? "" != u.val() && e < n
                  ? $(".invalid-feedback." + $(this).attr("name")).html(
                      "Minimum gig price for subcategory <i>" +
                        u.find(":selected").text() +
                        "</i> is $" +
                        n.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                    )
                  : e > l
                  ? $(".invalid-feedback." + $(this).attr("name")).html(
                      "Gig max price is $" +
                        l.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                    )
                  : ("focusout" == t.type &&
                      $(this).val(
                        e.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      ),
                    $(".invalid-feedback." + $(this).attr("name")).html(""))
                : $(".invalid-feedback." + $(this).attr("name")).html(
                    "Please, enter a valid price."
                  ),
                h();
            }, 200)
          ),
          f.on(
            "input focusout",
            (0, i.default)(function (t) {
              t.preventDefault();
              var e = parseInt($(this).val());
              $(this).val() && e == $(this).val()
                ? $(".invalid-feedback." + $(this).attr("name")).html("")
                : $(".invalid-feedback." + $(this).attr("name")).html(
                    "Please, enter a valid number of revisions."
                  ),
                h();
            }, 200)
          ),
          d.on(
            "change",
            (0, i.default)(function (t) {
              t.preventDefault(),
                e.addClass("is-loading"),
                $(".pw-banner").hide(),
                "" != d.val()
                  ? $.ajax({
                      url: "/gigs-ajax.php",
                      type: "post",
                      data: {
                        action: "get_sub_categories",
                        category: d.val(),
                        csrf_token: csrf_token,
                      },
                      beforeSend: function (t) {
                        u.empty();
                      },
                      success: function (t) {
                        if (t.data)
                          for (var e in (u.append(
                            $("<option></option>")
                              .attr("value", "")
                              .text("Select a subcategory")
                          ),
                          t.data))
                            u.append(
                              $("<option/>", {
                                value: e,
                                text: t.data[e].title,
                                "data-min-price": t.data[e].min_price,
                              })
                            );
                        else
                          $.bannerAlert(
                            "Something went wrong loading subcategories. Please try again.",
                            !0
                          ),
                            $.scrollToTop();
                      },
                    })
                  : (u.empty(),
                    u.append(
                      $("<option></option>")
                        .attr("value", "")
                        .text("Select a subcategory")
                    )),
                e.removeClass("is-loading"),
                h();
            }, 50)
          ),
          u.on(
            "change",
            (0, i.default)(function (t) {
              t.preventDefault(), h();
            }, 200)
          ),
          $(".gig-imgs-uploader--drop").on("mouseenter", function (t) {
            $("body").addClass("droppable");
          }),
          $(".gig-imgs-uploader--drop").on("mouseleave", function (t) {
            $("body").removeClass("droppable");
          }),
          $(".gig-imgs-uploader--drop")
            .not("input")
            .on("click", function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                $("#uploader").trigger("click");
            }),
          $("#uploader").on("click", function (t) {
            t.stopPropagation();
          }),
          n.on("click", function (t) {
            if ((t.preventDefault(), h(!0))) {
              var n = b();
              n.append("action", "publish"),
                w("submit"),
                $(".invalid-feedback").html(""),
                $.ajax({
                  url: e.prop("action"),
                  method: "post",
                  data: n,
                  processData: !1,
                  contentType: !1,
                  success: function (t, e) {
                    t.ok
                      ? "published" == t.action
                        ? Swal.fire({
                            showCloseButton: !0,
                            title: "Gig published!",
                            html: "<p>Your gig was sent to the admin moderation team.<br>Once approved, it will be published and available to buyers.</p>",
                            confirmButtonText: "GOT IT",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }).then(function () {
                            window.location.replace("/seller/posted-gigs.php");
                          })
                        : Swal.fire("Gig draft saved!", "", "success").then(
                            function () {
                              window.location.replace(
                                "/seller/posted-gigs.php"
                              );
                            }
                          )
                      : (_("submit"),
                        $.bannerAlert(t.alert, !0),
                        $.scrollToTop());
                  },
                  error: function (t, e, n) {
                    _("submit"),
                      $.bannerAlert(
                        "Something went wrong. Please try again.",
                        !0
                      ),
                      $.scrollToTop();
                  },
                });
            }
          }),
          a.on("click", function (t) {
            if ((t.preventDefault(), h(!0))) {
              var n = b();
              n.append("action", "custom-gig"),
                w("submit-custom"),
                $(".invalid-feedback").html(""),
                $.ajax({
                  url: e.prop("action"),
                  method: "post",
                  data: n,
                  processData: !1,
                  contentType: !1,
                  success: function (t, e) {
                    t.ok
                      ? Swal.fire({
                          showCloseButton: !0,
                          title: "Custom Gig Order created!",
                          html: "<p>Your custom gig order has been sent to the freelancer.</p>",
                          confirmButtonText: "GOT IT",
                          buttonsStyling: !1,
                          focusConfirm: !1,
                          showDenyButton: !1,
                          customClass: {
                            popup:
                              "gigs-popup animate__animated animate__fadeInDown",
                            confirmButton: "btn btn-primary btn-md",
                          },
                        }).then(function () {
                          window.location.replace("/browse-gigs.php");
                        })
                      : (_("submit-custom"),
                        $.bannerAlert(t.alert, !0),
                        $.scrollToTop());
                  },
                  error: function (t, e, n) {
                    _("submit-custom"),
                      $.bannerAlert(
                        "Something went wrong. Please try again.",
                        !0
                      ),
                      $.scrollToTop();
                  },
                });
            }
          }),
          o.on("click", function (t) {
            t.preventDefault(), h(!0) && v();
          }),
          s.on("click", function (t) {
            t.preventDefault(),
              Swal.fire({
                showCloseButton: !0,
                title: "After deleting, you will not be able to restore it!",
                text: e.data("delete-draft-message"),
                icon: "",
                confirmButtonText: "DELETE DRAFT",
                cancelButtonText: "KEEP DRAFT",
                buttonsStyling: !1,
                focusConfirm: !1,
                showCancelButton: !0,
                customClass: {
                  popup: "gigs-popup",
                  confirmButton: "btn btn-danger btn-md",
                  cancelButton: "btn btn-gray btn-md",
                },
              }).then(function (t) {
                t.isConfirmed &&
                  (e.addClass("is-loading"),
                  $.ajax({
                    url: "/gigs-ajax.php",
                    type: "post",
                    data: {
                      action: "seller_delete_gig",
                      gig_id: $("#gig_id").val(),
                      csrf_token: csrf_token,
                    },
                    success: function (t) {
                      t.success
                        ? setTimeout(function () {
                            Swal.fire(
                              t.data.deleted ? "Success" : "Error",
                              t.data.msg,
                              t.data.deleted ? "success" : "error"
                            ).then(function () {
                              window.location.href = "/seller/posted-gigs.php";
                            });
                          }, 1500)
                        : Swal.fire({
                            showCloseButton: !1,
                            icon: "error",
                            title: "Error!",
                            html: t.data.msg,
                            confirmButtonText: "OK",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }).then(function () {
                            window.location.reload();
                          });
                    },
                    error: function (t, e, n) {
                      Swal.fire({
                        showCloseButton: !1,
                        icon: "error",
                        title: "Error!",
                        html: "Something went wrong deleting the draft. Please try again.",
                        confirmButtonText: "OK",
                        buttonsStyling: !1,
                        focusConfirm: !1,
                        showDenyButton: !1,
                        customClass: {
                          popup:
                            "gigs-popup animate__animated animate__fadeInDown",
                          confirmButton: "btn btn-primary btn-md",
                        },
                      }).then(function () {
                        window.location.reload();
                      });
                    },
                  }));
              });
          }),
          r.on("click", function (t) {
            t.preventDefault(),
              Swal.fire({
                title: "If you cancel, your changes will not be saved!",
                confirmButtonText: "CANCEL",
                buttonsStyling: !1,
                focusConfirm: !1,
                showDenyButton: !0,
                showCloseButton: !0,
                denyButtonText: "SAVE DRAFT",
                customClass: {
                  popup: "gigs-popup",
                  confirmButton: "btn btn-danger btn-md",
                  denyButton: "btn btn-warning btn-md",
                },
              }).then(function (t) {
                t.isConfirmed
                  ? (n.attr("disabled", "disabled"),
                    o.attr("disabled", "disabled"),
                    r.addClass("disabled"),
                    (window.location.href = r.data("return-url")))
                  : t.isDenied && h(!0) && v();
              });
          });
      });
    var a,
      i =
        (a = n(17)) && a.__esModule
          ? a
          : {
              default: a,
            };
  },
  527: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        var t = $(".single-gig__gallery-big");
        $(".single-gig__gallery-thumbs"),
          t.slick({
            dots: !0,
            infinite: !0,
            speed: 500,
            fade: !0,
            cssEase: "linear",
            slidesToShow: 1,
            adaptiveHeight: !0,
          });
      });
  },
  528: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        var t = $(window),
          e = $(".site"),
          n = $(".gig-chat__editor"),
          o = $(".gig-chat__window"),
          s = $(".gig-chat__window-inner"),
          r = ($(".gig-chat__write"), $(".gig-chat__input")),
          l = $("#gig-chat-attachment-file"),
          c = $("#gig-chat-attachment-name"),
          d = $(".gig-chat__atts"),
          u = $(".upload-progress"),
          p = $(".gig-chat__send"),
          f = $(".gig-chat__window-empty"),
          m = !1,
          g = !1;
        function h() {
          var a = t.outerHeight(),
            i = (e.outerHeight(), n.offset().top);
          n.css({
            height: a - i - 42,
          }),
            b();
        }
        function b() {
          var t = s.length ? s[0] : "";
          t && t.scrollTo(0, t.scrollHeight);
        }
        function v() {
          return "" == r.val().trim() && "" == l.val().trim()
            ? (p.attr("disabled", "disabled"), !1)
            : (p.removeAttr("disabled"), !0);
        }
        function w() {
          if (l.val()) {
            var t = l.val();
            l.val(""),
              c.val(""),
              _([
                {
                  aws_url: t,
                },
              ]);
          }
        }
        function _(t) {
          t.length &&
            $.ajax({
              url: "/gigs-ajax.php",
              type: "post",
              data: {
                action: "chat_delete_uploaded_files",
                csrf_token: csrf_token,
                order_id: o.data("order-id"),
                files: t,
              },
            });
        }
        n.length &&
          ((0, i.default)(r),
          h(),
          t.on("resize", (0, a.default)(h, 200)),
          setTimeout(function () {
            return (function t() {
              if ("ACTIVE" == o.data("order-status")) {
                if (!g) {
                  g = !0;
                  var e = $(".gig-chat__window-message-text").last(),
                    n = $(".gig-chat__window-message-time").last(),
                    a = $(".gig-chat__window-message-time.seen").last();
                  $.ajax({
                    url: "/gigs-ajax.php",
                    type: "post",
                    data: {
                      action: "chat_load_messages",
                      csrf_token: csrf_token,
                      order_id: o.data("order-id"),
                      last_message: e.data("message"),
                      last_message_seen: a.data("message"),
                      profile_type: o.data("profile-type"),
                    },
                    success: function (a) {
                      $("#gig-price-value").html(
                        a.data.price.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      );
                      var i = void 0;
                      if (
                        (a.data.seen_messages.forEach(function (t) {
                          (i = $(
                            '.gig-chat__window-message-time[data-message="' +
                              t +
                              '"]'
                          )) &&
                            (i.addClass("seen"),
                            i.html(
                              i.text() +
                                ' <i class="ml-1 fas fa-check-double text-primary"></i>'
                            ));
                        }),
                        a.data.html)
                      ) {
                        var l = "",
                          c = "";
                        a.data.first_message_date != e.data("message-date") &&
                          0 == f.length &&
                          (c =
                            '<div class="gig-chat__window-separator"><span>Today</span></div>'),
                          f.length > 0 &&
                            (f.remove(),
                            (f = []),
                            (l =
                              "<p>PLEASE NOTE:\n                  <ul>\n                    <li><span>Be respectful and use professional language</span></li>\n                    <li>Your conversation must be related to the gig and remain on this website</li>\n                    <li>Don't share credit card, National ID # or card or any other private information</li>\n                    <li>Payment for your gig has already been reserved</li>\n                    <li>Please do not attempt to deal or pay off-site as we cannot protect both parties. Doing so may lead to account restrictions</li>\n                  </ul>\n                </p>")),
                          a.data.first_message_type == e.data("message-type") &&
                          a.data.first_message_timestamp -
                            e.data("message-timestamp") <
                            60
                            ? (n.html(""),
                              n
                                .closest(".gig-chat__window-message")
                                .css("margin-bottom", "-1.25rem"))
                            : n.html(
                                e.data("message-time") +
                                  (n.hasClass("seen")
                                    ? '<i class="ml-1 fas fa-check-double text-primary"></i>'
                                    : "")
                              ),
                          s.html(function (t, e) {
                            return e + c + l + a.data.html;
                          }),
                          b();
                      }
                      if (a.data.is_active) {
                        if (a.data.suggested_price > 0) {
                          $("#gig-new-price").html(
                            '<div class="gig-chat__gig-info gig-new-price-info">\n                    <div class="gig-chat__gig-price text-danger">New price:</div>\n                    <div class="gig-chat__gig-price text-danger" id="gig-new-suggested-price">\n                      <span>$</span><strong id="gig-new-price-value">' +
                              a.data.suggested_price.toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }) +
                              ' <i id="new-price-icon" class="far fa-question-circle" data-tippy="true" data-tippy-content="' +
                              ("worker" == a.data.chat_user
                                ? "<h4>Your new suggested price</h4><br>Waiting for client approval."
                                : "<h4>New gig price suggested by freelancer</h4><br>If you agree please accept it.") +
                              '" data-tippy-theme="training" data-tippy-interactive="true" data-tippy-maxwidth="265" data-tippy-placement="right-start"></i></strong>\n                    </div>\n                  </div>'
                          );
                          var u = document.getElementById("new-price-icon");
                          setTimeout(function () {
                            return tippy(u, {
                              allowHTML: !0,
                            });
                          }, 500);
                        } else $("#gig-new-price").html("");
                        "employer" == a.data.chat_user &&
                          ($(".gig-action-accept-new-price").remove(),
                          a.data.suggested_price > 0 &&
                            (a.data.suggested_price > a.data.price &&
                            a.data.spendable_money_available <
                              a.data.suggested_price - a.data.price
                              ? $("#gig-orders-list").prepend(
                                  '<a href="/wallet.php?tab=deposits" class="btn btn-danger btn-block gig-action gig-action-accept-new-price">DEPOSIT FUNDS TO ACCEPT NEW PRICE</a>'
                                )
                              : $("#gig-orders-list").prepend(
                                  '<button type="button" class="btn btn-block btn-primary btn-block gig-action gig-action-accept-new-price" data-order-action="accept-order-price" data-gig-suggested-price="' +
                                    a.data.suggested_price +
                                    '" data-order-id="' +
                                    a.data.order_id +
                                    '">ACCEPT NEW PRICE</button>'
                                ))),
                          setTimeout(function () {
                            return t();
                          }, 1e4);
                      } else {
                        p.attr("disabled", "disabled"),
                          r.attr("disabled", "disabled"),
                          r.val(""),
                          d.remove(),
                          $(".gig-action").remove(),
                          $("#gig-new-price").html(""),
                          f.length > 0 && (f.remove(), (f = []));
                        var m =
                          "" != s.html().trim()
                            ? '<div class="gig-chat__window-separator"><span></span></div>'
                            : "";
                        s.html(function (t, e) {
                          return (
                            e +
                            (m +
                              '\n                <div class="gig-chat__window-message gig-chat__window-message--received">\n                  <div class="gig-chat__window-message-wrap">\n                    <div class="gig-chat__window-message-texts">\n                      <div class="gig-chat__window-message-text">\n                        <p>PLEASE NOTE: This gig') +
                            ("requested" == o.data("order-type")
                              ? " request"
                              : "") +
                            " order is no longer active. Chat history is available for 30 days, after that it will be automatically removed.</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              "
                          );
                        }),
                          b();
                      }
                    },
                    error: function (t, e, n) {
                      Swal.fire({
                        showCloseButton: !1,
                        icon: "error",
                        title: "Error!",
                        html: "Something went wrong loading new messages. Please try again.",
                        confirmButtonText: "OK",
                        buttonsStyling: !1,
                        focusConfirm: !1,
                        showDenyButton: !1,
                        customClass: {
                          popup:
                            "gigs-popup animate__animated animate__fadeInDown",
                          confirmButton: "btn btn-primary btn-md",
                        },
                      }).then(function () {
                        window.location.reload();
                      });
                    },
                  }).always(function (t) {
                    g = !1;
                  });
                }
              } else
                p.attr("disabled", "disabled"),
                  r.attr("disabled", "disabled"),
                  r.val(""),
                  d.remove();
            })();
          }, 1e4),
          r.on("keypress", function (t) {
            if ("Enter" == t.key && !t.shiftKey)
              return v() && p.trigger("click"), !1;
          }),
          r.on("keyup input", function (t) {
            v();
          }),
          p.on("click", function (t) {
            t.preventDefault(),
              p.attr("disabled", "disabled"),
              $.ajax({
                url: "/gigs-ajax.php",
                type: "post",
                data: {
                  action: "chat_send_message",
                  csrf_token: csrf_token,
                  order_id: o.data("order-id"),
                  message: r.val(),
                  attachment_url: l.val(),
                  attachment_name: c.val(),
                  profile_type: o.data("profile-type"),
                },
                beforeSend: function () {
                  r.val("").css("height", "auto"),
                    l.val(""),
                    c.val(""),
                    u.removeClass("d-block").addClass("d-none"),
                    u.html("");
                },
                success: function (t) {
                  t.data.message_id ||
                    Swal.fire({
                      showCloseButton: !1,
                      icon: "error",
                      title: "Error!",
                      html: "Something went wrong sending your message. Please try again.",
                      confirmButtonText: "OK",
                      buttonsStyling: !1,
                      focusConfirm: !1,
                      showDenyButton: !1,
                      customClass: {
                        popup:
                          "gigs-popup animate__animated animate__fadeInDown",
                        confirmButton: "btn btn-primary btn-md",
                      },
                    });
                },
                error: function (t, e, n) {
                  Swal.fire({
                    showCloseButton: !1,
                    icon: "error",
                    title: "Error!",
                    html: "Something went wrong sending your message. Please try again.",
                    confirmButtonText: "OK",
                    buttonsStyling: !1,
                    focusConfirm: !1,
                    showDenyButton: !1,
                    customClass: {
                      popup: "gigs-popup animate__animated animate__fadeInDown",
                      confirmButton: "btn btn-primary btn-md",
                    },
                  }).then(function () {
                    window.location.reload();
                  });
                },
              }).always(function (t) {
                v();
              });
          }),
          $(document).on(
            "click",
            ".upload-progress .upload-progress__cancel",
            function (t) {
              (m = !0), w(), u.removeClass("d-block").addClass("d-none"), v();
            }
          ),
          $(".gig-chat-uploader").on("click", function (t) {
            $("a.btn.btn-link.btn-icon").trigger("click");
          }),
          $(".gig-chat-uploader").on("change", function (t) {
            t.preventDefault();
            for (
              var e = $(this), n = new FormData(), a = e[0].files, i = 0;
              a && i < a.length;
              i++
            ) {
              if (a[i].size > 6291456)
                return (
                  u.html(
                    '<div class="upload-progress__inner d-flex justify-content-between align-items-center">\n            <div class="upload-progress__file">\n              <span class="text-danger">Max file size is 6MB.</span>\n            </div>\n            <button class="btn btn-link p-0 upload-progress__cancel">\n              <i class="fas fa-times"></i>\n            </button>\n          </div>'
                  ),
                  u.removeClass("d-none").addClass("d-block"),
                  !1
                );
              n.append("files[]", a[i]);
            }
            n.append("file_type", e.attr("id")),
              n.append("order_id", $("#chatUploadForm").data("order-id")),
              n.append("csrf_token", csrf_token),
              $.ajax({
                xhr: function () {
                  var t = new window.XMLHttpRequest();
                  return (
                    t.upload.addEventListener(
                      "progress",
                      function (t) {
                        if (t.lengthComputable) {
                          var e = Math.ceil((t.loaded / t.total) * 100);
                          $(".progress-bar").width(e + "%"),
                            $(".upload-progress__percentage").html(e + "%");
                        }
                      },
                      !1
                    ),
                    t
                  );
                },
                type: "post",
                url: "/gigs/chat-upload.php",
                data: n,
                contentType: !1,
                cache: !1,
                processData: !1,
                beforeSend: function () {
                  $(".gig-chat-uploader").attr("disabled", "disabled"),
                    u.html(
                      '<div class="upload-progress__inner">\n            <div class="upload-progress__header">\n              <span>\n                <span>Uploading</span> &middot;\n                <span class="upload-progress__percentage">0%</span>\n              </span>\n              <button class="btn btn-link p-0 upload-progress__cancel">Cancel</button>\n            </div>\n            <div class="upload-progress__progress progress progress-sm">\n              <div class="progress-bar bg-primary" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>\n            </div>\n          </div>'
                    ),
                    u.removeClass("d-none").addClass("d-block"),
                    w();
                },
                error: function (t, e) {
                  $(".upload-progress__percentage").html(
                    "File upload failed, please try again."
                  ),
                    $(".progress-bar").width("100%"),
                    $(".progress-bar")
                      .removeClass("bg-primary")
                      .addClass("bg-danger"),
                    $(".upload-progress__cancel").html(
                      '<i class="fas fa-times"></i>'
                    );
                },
                success: function (t) {
                  if (t.success)
                    if (m) (m = !1), _(t.data.files);
                    else {
                      var e = t.data.files[0];
                      l.val(e.aws_url),
                        c.val(e.name),
                        $(".upload-progress__percentage").html(t.data.alert),
                        u.html(
                          '<div class="upload-progress__inner d-flex justify-content-between align-items-center">\n                <div class="upload-progress__file">\n                  <i class="fas fa-file"></i>\n                  <span>' +
                            e.name +
                            '</span>\n                </div>\n                <button class="btn btn-link p-0 upload-progress__cancel">\n                  <i class="fas fa-times"></i>\n                </button>\n              </div>'
                        );
                    }
                  else $(".upload-progress__percentage").html(t.data.alert);
                },
                complete: function (t) {
                  e.val("");
                },
              }).always(function (t) {
                $(".gig-chat-uploader").removeAttr("disabled"), v();
              });
          }));
      });
    var a = o(n(17)),
      i = o(n(196));
    function o(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
  },
  529: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        var t = $(".community");
        if (t.length) {
          var e = function () {
              r.is(":visible") || r.fadeIn();
            },
            n = function () {
              r.is(":visible") && r.fadeOut();
            },
            a = function (t) {
              return (
                '<li><a href="#' +
                t.itemId +
                '" data-search-cat-id="' +
                t.categoryId +
                '">\n        <span class="community-search__results-item-title">' +
                t.title +
                "</span>\n        " +
                (t.text, "\n      </a></li>")
              );
            },
            o = t.find(".community-search"),
            s = o.find("input[type=text]"),
            r = (o.find("[type=submit]"), $(".community-search__results")),
            l = r.find("ul");
          $(
            "\n      .community-items .community-items__text,\n      .community .accordion .accordion-item__header .btn,\n      .community .accordion .accordion-item__content\n    "
          ),
            o.on("submit", function (t) {
              t.preventDefault();
            }),
            s.on("click", function (t) {
              e();
            }),
            $(document).on("click", function (t) {
              $(t.target).closest(o).length || n();
            }),
            s.on(
              "keyup",
              (0, i.default)(function (t) {
                e(),
                  (function (t) {
                    t = t.toLowerCase();
                    var e = sproutCommunityResults.filter(function (e, n, a) {
                      var i = e.title ? e.title.toLowerCase() : "",
                        o = e.text ? e.text.toLowerCase() : "";
                      return i.includes(t) || o.includes(t);
                    });
                    if ((l.html(""), e.length))
                      for (var n = 0; n < e.length; n++) {
                        var i = e[n],
                          o = a(i);
                        l.append(o);
                      }
                    else
                      l.html(
                        '<li class="text-center"><span>No result found.</span></li>'
                      );
                  })($(this).val());
              }, 200)
            ),
            l.html(
              '<li class="text-center"><span>Type something to search</span></li>'
            ),
            (window.sproutCommunityResults = []),
            $(".community-items li").each(function (t, e) {
              var n = $(e),
                a = n.closest(".community-tab-pane").attr("id"),
                i = a + "-" + n.index();
              n.attr("id", i),
                sproutCommunityResults.push({
                  categoryId: a,
                  itemId: i,
                  title: n.find(".community-items__text").text(),
                  text: "",
                });
            }),
            $(".accordion-item").each(function (t, e) {
              var n = $(e),
                a = n.closest(".community-tab-pane").attr("id"),
                i = n.find(".btn"),
                o = n.find(".accordion-item__content"),
                s = i.text(),
                r = o.text(),
                l = a + "-" + n.index();
              n.attr("id", l),
                sproutCommunityResults.push({
                  categoryId: a,
                  itemId: l,
                  title: s,
                  text: r,
                });
            }),
            r.on("click", "a", function (t) {
              t.preventDefault();
              var e = $(this),
                a = e.data("search-cat-id"),
                i = $(e.attr("href"));
              $('[data-target="#' + a + '"]').trigger("click"),
                $(".search-result-highlighted").removeClass(
                  "search-result-highlighted"
                ),
                i.addClass("search-result-highlighted"),
                setTimeout(function () {
                  i.find(".btn") && i.find(".btn").trigger("click"),
                    scrollToEl(i, $(".navbar").outerHeight() + 10),
                    n();
                }, 300);
            });
        }
      });
    var a,
      i =
        (a = n(17)) && a.__esModule
          ? a
          : {
              default: a,
            };
  },
  530: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        var t = $(".quick-guide-modal"),
          e = $(".quick-guide-modal__slider"),
          n = $(".quick-guide-modal__dots"),
          a = $(".quick-guide-modal__prev"),
          i = $(".quick-guide-modal__next"),
          o = $(".quick-guide-modal__close");
        e.slick({
          rows: 0,
          arrows: !0,
          dots: !0,
          infinite: !1,
          appendDots: n,
          prevArrow: a,
          nextArrow: i,
        }),
          e.on("afterChange", function (t, e, n) {
            e.$slides.length - 1 == n
              ? (i.hide(), o.fadeIn())
              : (i.fadeIn(), o.hide());
          }),
          o.add(t.find(".close")).on("click", function () {
            t.modal("hide"),
              $.ajax({
                url: "/ajax.php",
                type: "post",
                data: {
                  action: "complete_quick_guide",
                },
                success: function (t) {},
              });
          });
      });
  },
  531: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        var t = $(".add-questions");
        t.each(function (t, e) {
          var n = $(e),
            a = n.find(".add-questions__add"),
            i = n.find("ul");
          a.on("click", function (t) {
            t.preventDefault(),
              i.find("li").length <= 5 &&
                (i.append(
                  '<li class="add-questions__item">\n        <div class="add-questions__item-inner">\n          <input type="text" name="questions[]" class="form-control questions" placeholder="Question" maxlength="255">\n        </div>\n        <button type="button" class="add-questions__delete btn btn-icon text-body" style="display: none;"><i class="fas fa-trash-alt"></i></button>\n      </li>\n      <div class="invalid-feedback questions d-block"></div>'
                ),
                (i = n.find("ul")).find("li").length > 1 &&
                  i.find(".add-questions__delete").show(),
                5 == i.find("li").length && a.hide());
          }),
            i.on("keyup", "input", function (t) {
              t.preventDefault();
              var e = $(this);
              e.val(),
                e.closest("li").next(".invalid-feedback.questions").html(""),
                m();
            }),
            i.on("click", ".add-questions__delete", function (t) {
              t.preventDefault();
              var e = $(this);
              e.closest("li").next(".invalid-feedback").remove(),
                e.closest("li").remove(),
                i.find("li").length <= 1 &&
                  i.find(".add-questions__delete").hide(),
                i.find("li").length < 5 && a.show(),
                m();
            }),
            i.on("click", ".add-questions__open", function (t) {
              t.preventDefault();
              var e = $(this).closest("li").find("input").val();
              window.open(e, "_blank", "noreferrer");
            });
        });
        var e = $(".post-gig-request"),
          n = e.find(".post-gig-request-submit"),
          a = e.find(".post-gig-request-save-draft"),
          o = e.find(".post-gig-request-delete-draft"),
          s = e.find(".post-gig-request-cancel"),
          r = parseFloat(e.data("max-gig-price")),
          l = e.find('[name="title"]'),
          c = e.find('[name="category"]'),
          d = e.find('[name="subcategory"]'),
          u = e.find('[name="budget"]'),
          p = e.find('[name="deadline"]'),
          f = e.find('[name="description"]');
        function m() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            e = !0;
          l.val()
            ? l.val().match(/^i\s*('\s*ll|will)\s+/i)
              ? ($(".invalid-feedback.title").html(
                  "PLEASE NOTE: It looks like you are trying to post a gig and not a request to hire freelancers. If you're trying to post a Gig and get hired, please switch to the Freelancer profile."
                ),
                (e = !1))
              : $(".invalid-feedback.title").html("")
            : (t &&
                $(".invalid-feedback.title").html(
                  "Please, enter the gig request title."
                ),
              (e = !1)),
            c.val()
              ? $(".invalid-feedback.category").html("")
              : (t &&
                  $(".invalid-feedback.category").html(
                    "Please, select a category."
                  ),
                (e = !1)),
            d.val()
              ? $(".invalid-feedback.sub-category").html("")
              : (t &&
                  $(".invalid-feedback.sub-category").html(
                    "Please, select a subcategory."
                  ),
                (e = !1));
          var i = parseFloat(u.val()),
            o = parseFloat(d.find(":selected").data("min-price"));
          return (
            u.val() && i == u.val()
              ? "" != d.val() && i < o
                ? ($(".invalid-feedback.price").html(
                    "Minimum gig budget for subcategory <i>" +
                      d.find(":selected").text() +
                      "</i> is $" +
                      o.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                  ),
                  (e = !1))
                : i > r
                ? ($(".invalid-feedback." + $(this).attr("name")).html(
                    "Gig max budget is $" +
                      r.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                  ),
                  (e = !1))
                : $(".invalid-feedback.price").html("")
              : (t &&
                  $(".invalid-feedback.price").html(
                    "Please, enter a valid budget."
                  ),
                (e = !1)),
            l.val()
              ? $(".invalid-feedback.deadline").html("")
              : (t &&
                  $(".invalid-feedback.deadline").html(
                    "Please, enter the gig deadline."
                  ),
                (e = !1)),
            f.val()
              ? $(".invalid-feedback.description").html("")
              : (t &&
                  $(".invalid-feedback.description").html(
                    "Please, enter the gig overview."
                  ),
                (e = !1)),
            e
              ? (n.removeAttr("disabled"),
                a.removeAttr("disabled"),
                $(".pw-banner").hide())
              : (n.attr("disabled", "disabled"),
                a.attr("disabled", "disabled"),
                t &&
                  ($.bannerAlert("Please, validate the fields", !0),
                  $.scrollToTop())),
            e
          );
        }
        function g() {
          var t = new FormData(),
            n = e.serializeArray();
          if (
            ($.each(n, function (e, n) {
              t.append(n.name, n.value);
            }),
            "undefined" != typeof Uploader)
          )
            for (
              var a = Uploader.settings.fileInput.files, i = 0;
              a && i < a.length;
              i++
            )
              t.append("images[]", a[i]);
          return t;
        }
        function h() {
          var t = g();
          t.append("action", "save_draft"),
            b("save-draft"),
            $.ajax({
              url: e.prop("action"),
              method: "post",
              data: t,
              processData: !1,
              contentType: !1,
              success: function (t, e) {
                t.ok
                  ? Swal.fire({
                      showCloseButton: !1,
                      icon: "success",
                      title: '<div class="text-center">Draft saved!</div>',
                      confirmButtonText: "OK",
                      buttonsStyling: !1,
                      focusConfirm: !1,
                      showDenyButton: !1,
                      customClass: {
                        popup:
                          "gigs-popup animate__animated animate__fadeInDown",
                        confirmButton: "btn btn-primary btn-md",
                      },
                    }).then(function () {
                      window.location.replace("/buyer/requested-gigs.php");
                    })
                  : (v("save-draft"),
                    $.bannerAlert(
                      t.alert
                        ? t.alert
                        : "Something went wrong saving the draft. Please try again.",
                      !0
                    ),
                    $.scrollToTop(),
                    Swal.close());
              },
              error: function (t, e, n) {
                v("save-draft"),
                  $.bannerAlert(
                    "Something went wrong saving the draft. Please try again.",
                    !0
                  ),
                  $.scrollToTop(),
                  Swal.close();
              },
            });
        }
        function b(i) {
          "submit" == i
            ? n.html("<span>PLEASE WAIT...</span>")
            : "save-draft" == i && a.html("<span>PLEASE WAIT...</span>"),
            n.attr("disabled", "disabled"),
            a.attr("disabled", "disabled"),
            s.addClass("disabled"),
            o.addClass("disabled"),
            t.find(".add-questions__add").addClass("disabled"),
            $(".gig-imgs-uploader").attr("disabled"),
            e.attr("disabled", !0),
            e.find(":input").attr("disabled", !0);
        }
        function v(i) {
          "submit" == i
            ? n.html("<span>PUBLISH</span>")
            : "save-draft" == i && a.html("<span>SAVE AS DRAFT</span>"),
            n.removeAttr("disabled"),
            a.removeAttr("disabled"),
            s.removeClass("disabled"),
            o.removeClass("disabled"),
            t.find(".add-questions__add").removeClass("disabled"),
            $(".gig-imgs-uploader").removeAttr("disabled"),
            e.removeAttr("disabled"),
            e.find(":input").removeAttr("disabled");
        }
        e.hasClass("new") &&
          (n.attr("disabled", "disabled"), a.attr("disabled", "disabled")),
          p.on("blur", function (t) {
            "" == $(this).val().trim() && $(this).attr("type", "text");
          }),
          p.on("focus", function (t) {
            "text" == $(this).attr("type") && $(this).attr("type", "date");
          }),
          l.on(
            "input",
            (0, i.default)(function (t) {
              t.preventDefault(),
                $(this).val()
                  ? $(this)
                      .val()
                      .match(/^i\s*('\s*ll|will)\s+/i)
                    ? $(".invalid-feedback." + $(this).attr("name")).html(
                        "PLEASE NOTE: It looks like you are trying to post a gig and not a request to hire freelancers. If you're trying to post a Gig and get hired, please switch to the Freelancer profile."
                      )
                    : $(".invalid-feedback." + $(this).attr("name")).html("")
                  : $(".invalid-feedback." + $(this).attr("name")).html(
                      "Please, enter the gig title."
                    ),
                m();
            }, 200)
          ),
          p.on(
            "input",
            (0, i.default)(function (t) {
              t.preventDefault(),
                $(this).val()
                  ? $(".invalid-feedback." + $(this).attr("name")).html("")
                  : $(".invalid-feedback." + $(this).attr("name")).html(
                      "Please, enter the gig deadline."
                    ),
                m();
            }, 200)
          ),
          p.on(
            "input",
            (0, i.default)(function (t) {
              t.preventDefault(),
                $(this).val()
                  ? $(".invalid-feedback." + $(this).attr("name")).html("")
                  : $(".invalid-feedback." + $(this).attr("name")).html(
                      "Please, enter the gig deadline."
                    ),
                m();
            }, 200)
          ),
          f.on(
            "input",
            (0, i.default)(function (t) {
              t.preventDefault(),
                $(this).val()
                  ? $(".invalid-feedback." + $(this).attr("name")).html("")
                  : $(".invalid-feedback." + $(this).attr("name")).html(
                      "Please, enter the gig overview."
                    ),
                m();
            }, 200)
          ),
          u.on(
            "input focusout",
            (0, i.default)(function (t) {
              t.preventDefault();
              var e = parseFloat($(this).val()),
                n = parseFloat(d.find(":selected").data("min-price"));
              $(this).val() && e == $(this).val()
                ? "" != d.val() && e < n
                  ? $(".invalid-feedback." + $(this).attr("name")).html(
                      "Minimum gig budget for subcategory <i>" +
                        d.find(":selected").text() +
                        "</i> is $" +
                        n.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                    )
                  : e > r
                  ? $(".invalid-feedback." + $(this).attr("name")).html(
                      "Gig max budget is $" +
                        r.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                    )
                  : ("focusout" == t.type &&
                      $(this).val(
                        e.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      ),
                    $(".invalid-feedback." + $(this).attr("name")).html(""))
                : $(".invalid-feedback." + $(this).attr("name")).html(
                    "Please, enter a valid budget."
                  ),
                m();
            }, 200)
          ),
          c.on(
            "change",
            (0, i.default)(function (t) {
              t.preventDefault(),
                e.addClass("is-loading"),
                $(".pw-banner").hide(),
                $(this).val(),
                "" != c.val()
                  ? $.ajax({
                      url: "/gigs-ajax.php",
                      type: "post",
                      data: {
                        action: "get_sub_categories",
                        category: c.val(),
                        csrf_token: csrf_token,
                      },
                      beforeSend: function (t) {
                        d.empty();
                      },
                      success: function (t) {
                        if (t.data)
                          for (var e in (d.append(
                            $("<option></option>")
                              .attr("value", "")
                              .text("Select a subcategory")
                          ),
                          t.data))
                            d.append(
                              $("<option/>", {
                                value: e,
                                text: t.data[e].title,
                                "data-min-price": t.data[e].min_request_price,
                              })
                            );
                        else
                          $.bannerAlert(
                            "Something went wrong loading subcategories. Please try again.",
                            !0
                          ),
                            $.scrollToTop();
                      },
                    })
                  : (d.empty(),
                    d.append(
                      $("<option></option>")
                        .attr("value", "")
                        .text("Select a subcategory")
                    )),
                e.removeClass("is-loading"),
                m();
            }, 50)
          ),
          d.on(
            "change",
            (0, i.default)(function (t) {
              t.preventDefault(), m();
            }, 200)
          ),
          $(".gig-imgs-uploader--drop").on("mouseenter", function (t) {
            $("body").addClass("droppable");
          }),
          $(".gig-imgs-uploader--drop").on("mouseleave", function (t) {
            $("body").removeClass("droppable");
          }),
          $(".gig-imgs-uploader--drop")
            .not("input")
            .on("click", function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                $("#uploader").trigger("click");
            }),
          $("#uploader").on("click", function (t) {
            t.stopPropagation();
          }),
          n.on("click", function (t) {
            if ((t.preventDefault(), m(!0))) {
              var n = g();
              n.append("action", "publish"),
                b("submit"),
                $(".invalid-feedback").html(""),
                $.ajax({
                  url: e.prop("action"),
                  method: "post",
                  data: n,
                  processData: !1,
                  contentType: !1,
                  success: function (t, e) {
                    t.ok
                      ? "published" == t.action
                        ? Swal.fire({
                            showCloseButton: !0,
                            title: "Gig request published!",
                            html: "<p>Your gig request was sent to the admin moderation team.<br>Once approved, it will be published and available to freelancers.</p>",
                            confirmButtonText: "GOT IT",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }).then(function () {
                            window.location.replace(
                              "/buyer/requested-gigs.php"
                            );
                          })
                        : Swal.fire("Gig draft saved!", "", "success").then(
                            function () {
                              window.location.replace(
                                "/buyer/requested-gigs.php"
                              );
                            }
                          )
                      : (v("submit"),
                        $.bannerAlert(t.alert, !0),
                        $.scrollToTop());
                  },
                  error: function (t, e, n) {
                    v("submit"),
                      $.bannerAlert(
                        "Something went wrong. Please try again.",
                        !0
                      ),
                      $.scrollToTop();
                  },
                });
            }
          }),
          a.on("click", function (t) {
            t.preventDefault(), m(!0) && h();
          }),
          o.on("click", function (t) {
            t.preventDefault(),
              Swal.fire({
                showCloseButton: !0,
                title: "After deleting, you will not be able to restore it!",
                text: e.data("delete-draft-message"),
                icon: "",
                confirmButtonText: "DELETE DRAFT",
                cancelButtonText: "KEEP DRAFT",
                buttonsStyling: !1,
                focusConfirm: !1,
                showCancelButton: !0,
                customClass: {
                  popup: "gigs-popup",
                  confirmButton: "btn btn-danger btn-md",
                  cancelButton: "btn btn-gray btn-md",
                },
              }).then(function (t) {
                t.isConfirmed &&
                  (e.addClass("is-loading"),
                  $.ajax({
                    url: "/gigs-ajax.php",
                    type: "post",
                    data: {
                      action: "delete_gig_request",
                      request_id: $("#gig_request_id").val(),
                      csrf_token: csrf_token,
                    },
                    success: function (t) {
                      t.success
                        ? setTimeout(function () {
                            Swal.fire(
                              t.data.deleted ? "Success" : "Error",
                              t.data.msg,
                              t.data.deleted ? "success" : "error"
                            ).then(function () {
                              window.location.href =
                                "/buyer/requested-gigs.php";
                            });
                          }, 1500)
                        : Swal.fire({
                            showCloseButton: !1,
                            icon: "error",
                            title: "Error!",
                            html: t.data.msg,
                            confirmButtonText: "OK",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }).then(function () {
                            window.location.reload();
                          });
                    },
                    error: function (t, e, n) {
                      Swal.fire({
                        showCloseButton: !1,
                        icon: "error",
                        title: "Error!",
                        html: "Something went wrong deleting the draft. Please try again.",
                        confirmButtonText: "OK",
                        buttonsStyling: !1,
                        focusConfirm: !1,
                        showDenyButton: !1,
                        customClass: {
                          popup:
                            "gigs-popup animate__animated animate__fadeInDown",
                          confirmButton: "btn btn-primary btn-md",
                        },
                      }).then(function () {
                        window.location.reload();
                      });
                    },
                  }));
              });
          }),
          s.on("click", function (t) {
            t.preventDefault(),
              Swal.fire({
                title: "If you cancel, your changes will not be saved!",
                confirmButtonText: "CANCEL",
                buttonsStyling: !1,
                focusConfirm: !1,
                showDenyButton: !0,
                showCloseButton: !0,
                denyButtonText: "SAVE DRAFT",
                customClass: {
                  popup: "gigs-popup",
                  confirmButton: "btn btn-danger btn-md",
                  denyButton: "btn btn-warning btn-md",
                },
              }).then(function (t) {
                t.isConfirmed
                  ? (n.attr("disabled", "disabled"),
                    a.attr("disabled", "disabled"),
                    s.addClass("disabled"),
                    (window.location.href = s.data("return-url")))
                  : t.isDenied && m(!0) && h();
              });
          });
      });
    var a,
      i =
        (a = n(17)) && a.__esModule
          ? a
          : {
              default: a,
            };
  },
  532: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        var t = $(".single-gig-request__gallery-big"),
          e = $(".single-gig-request__gallery-thumbs"),
          n = $(".gig-request-response__questions");
        t.slick({
          rows: 0,
          asNavFor: e,
          infinite: !1,
        }),
          e.slick({
            rows: 0,
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: t,
            infinite: !1,
            focusOnSelect: !0,
            centerMode: !1,
          }),
          n.slick({
            rows: 0,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !1,
          });
        var a = $(".gig-request-response"),
          i = $(".gig-request-response__toggle");
        function o(t) {
          var e = t.find(".gig-request-response__body"),
            n = t.find(".gig-request-response__toggle");
          t.removeClass("gig-request-response--opened"),
            e.slideUp(),
            n.find("span").text("View full response"),
            n.find("i").removeClass("fa-caret-up").addClass("fa-caret-down");
        }
        function s(t) {
          var e = t.find(".gig-request-response__body"),
            n = t.find(".gig-request-response__toggle");
          t.addClass("gig-request-response--opened"),
            e.slideDown(),
            n.find("span").text("Hide response"),
            n.find("i").removeClass("fa-caret-down").addClass("fa-caret-up");
        }
        a.each(function (t, e) {
          var n = $(e);
          0 !== t && o(n);
        }),
          i.on("click", function (t) {
            t.preventDefault();
            var e = $(this).closest(".gig-request-response");
            e.hasClass("gig-request-response--opened")
              ? o(e)
              : (s(e),
                e.find(".slick-list").css("height", "auto"),
                e.find(".slick-track").css("width", "auto"),
                e
                  .find(".slick-slide.slick-current.slick-active")
                  .css("width", "auto"));
          }),
          s(a.eq(0));
      });
  },
  533: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        var t = $(".worker-request-form__attach-gig"),
          e = $(".worker-request-form__gig");
        t.on("click", function (t) {
          t.preventDefault();
          var n = $(this);
          $.ajax({
            url: "/ajax.php",
            type: "post",
            data: {
              action: "get_gig_details",
              gig_id: "",
            },
            success: function (t) {
              t.success &&
                t.data.data &&
                (n.hide(), e.html(t.data.data).show());
            },
          });
        });
      });
  },
  534: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(document).on("click", ".js-delete-gig-public-question", function (t) {
          t.preventDefault(), t.stopPropagation();
          var e = $(this),
            n = e.closest("div.public-question");
          Swal.fire({
            showCloseButton: !0,
            title: "Delete & Report Spam?",
            text: "Would you also like to report spam? In this case questioner will be blocked from posting new questions.",
            icon: "",
            confirmButtonText: "DELETE",
            denyButtonText: "DELETE & REPORT SPAM",
            buttonsStyling: !1,
            focusConfirm: !1,
            showDenyButton: !0,
            customClass: {
              popup: "gigs-popup animate__animated animate__fadeInDown",
              confirmButton: "btn btn-primary btn-md",
              denyButton: "btn btn-danger btn-md",
            },
          }).then(function (t) {
            (t.isConfirmed || t.isDenied) &&
              (n.addClass("is-loading"),
              $.ajax({
                url: "/gigs-ajax.php",
                type: "post",
                data: {
                  action: "delete_gig_public_question",
                  question_id: e.data("question-id"),
                  report_spam: t.isDenied ? 1 : 0,
                  csrf_token: csrf_token,
                },
                success: function (t) {
                  t.success
                    ? window.location.reload()
                    : Swal.fire({
                        showCloseButton: !1,
                        icon: "error",
                        title: "Error!",
                        html: "Something went wrong deleting the question. Please try again.",
                        confirmButtonText: "OK",
                        buttonsStyling: !1,
                        focusConfirm: !1,
                        showDenyButton: !1,
                        customClass: {
                          popup:
                            "gigs-popup animate__animated animate__fadeInDown",
                          confirmButton: "btn btn-primary btn-md",
                        },
                      }).then(function () {
                        window.location.reload();
                      });
                },
                error: function (t, e, n) {
                  Swal.fire({
                    showCloseButton: !1,
                    icon: "error",
                    title: "Error!",
                    html: "Something went wrong sending the offer. Please try again.",
                    confirmButtonText: "OK",
                    buttonsStyling: !1,
                    focusConfirm: !1,
                    showDenyButton: !1,
                    customClass: {
                      popup: "gigs-popup animate__animated animate__fadeInDown",
                      confirmButton: "btn btn-primary btn-md",
                    },
                  }).then(function () {
                    window.location.reload();
                  });
                },
              }));
          });
        }),
          $(document).on(
            "click",
            "#gig-public-questions .public-question__like",
            function (t) {
              t.preventDefault();
              var e = $(this);
              e.removeClass("public-question__like"),
                e.trigger("focusout"),
                $.ajax({
                  url: "/gigs-ajax.php",
                  type: "post",
                  data: {
                    action: "like_gig_public_answer",
                    question_id: e.data("question-id"),
                    csrf_token: csrf_token,
                  },
                  success: function (t) {
                    t.success &&
                      (e.addClass("public-question__like--liked"),
                      t.total_likes > 0 && e.find("span").text(t.total_likes));
                  },
                });
            }
          );
        var t = $(".post-gig-public-question"),
          e = t.find(".post-gig-public-question-submit"),
          n = t.find('[name="public_question_text"]');
        function a(n) {
          "submit" == n && e.html("<span>POST QUESTION</span>"),
            e.removeAttr("disabled"),
            t.removeAttr("disabled"),
            t.find(":input").removeAttr("disabled");
        }
        function o() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            a = !0;
          return (
            n.val()
              ? n.val().length < 10
                ? (t &&
                    $(".invalid-feedback.public_question_text").html(
                      "Please detail your question."
                    ),
                  (a = !1))
                : $(".invalid-feedback.public_question_text").html("")
              : (t &&
                  $(".invalid-feedback.public_question_text").html(
                    "Please, enter your question."
                  ),
                (a = !1)),
            a
              ? (e.removeAttr("disabled"), $(".pw-banner").hide())
              : (e.attr("disabled", "disabled"),
                t &&
                  ($.bannerAlert("Please, validate the fields", !0),
                  $.scrollToTop())),
            a
          );
        }
        function s(t, e) {
          "submit" == e &&
            $("#btn-answer-gig-public-question-" + t).html(
              $("#btn-answer-gig-public-question-" + t).data("initial-label")
            ),
            $("#btn-answer-gig-public-question-" + t).removeAttr("disabled"),
            $("#answer-gig-public-question-" + t).removeAttr("disabled"),
            $("#answer-gig-public-question-" + t)
              .find(":input")
              .removeAttr("disabled");
        }
        function r(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !0,
            a = $("#public_question_text_" + t);
          return (
            a.val()
              ? a.val().length < 10
                ? (e &&
                    $(".invalid-feedback.public_question_text_" + t).html(
                      "Please detail your answer."
                    ),
                  (n = !1))
                : $(".invalid-feedback.public_question_text_" + t).html("")
              : (e &&
                  $(".invalid-feedback.public_question_text_" + t).html(
                    "Please, enter your answer."
                  ),
                (n = !1)),
            n
              ? $("#btn-answer-gig-public-question-" + t).removeAttr("disabled")
              : $("#btn-answer-gig-public-question-" + t).attr(
                  "disabled",
                  "disabled"
                ),
            n
          );
        }
        n.on(
          "input",
          (0, i.default)(function (t) {
            t.preventDefault(),
              n.val()
                ? n.val().length < 10
                  ? $(".invalid-feedback.public_question_text").html(
                      "Please detail your question."
                    )
                  : $(".invalid-feedback.public_question_text").html("")
                : $(".invalid-feedback.public_question_text").html(
                    "Please, enter your question."
                  ),
              o();
          }, 200)
        ),
          e.on("click", function (n) {
            if ((n.preventDefault(), n.stopPropagation(), o(!0))) {
              var i = $(this).data("modal"),
                s = (function () {
                  var e = new FormData(),
                    n = t.serializeArray();
                  return (
                    $.each(n, function (t, n) {
                      e.append(n.name, n.value);
                    }),
                    e
                  );
                })();
              s.append("action", "post_gig_public_question"),
                e.html("<span>PLEASE WAIT...</span>"),
                e.attr("disabled", "disabled"),
                t.attr("disabled", !0),
                t.find(":input").attr("disabled", !0),
                $(".invalid-feedback").html(""),
                i > 0
                  ? Swal.fire({
                      showCloseButton: !0,
                      title: "Take a moment to read!",
                      html: "Before you post a question, please make sure it is relevant to the gig. We want to keep the discussion focused on the gig to ensure that the questions and answers are helpful to everyone.<br><br>Please avoid posting spam or nonsense as it may result in your account being flagged or removed from the platform. We appreciate your cooperation in keeping our community a productive and friendly place for all.",
                      icon: "",
                      confirmButtonText: "SEND THE QUESTION",
                      denyButtonText: "DO NOT SEND THE QUESTION",
                      buttonsStyling: !1,
                      focusConfirm: !1,
                      showDenyButton: !0,
                      customClass: {
                        popup:
                          "gigs-popup animate__animated animate__fadeInDown",
                        confirmButton: "btn btn-primary btn-md",
                        denyButton: "btn btn-danger btn-md",
                      },
                    }).then(function (t) {
                      t.isConfirmed
                        ? $.ajax({
                            url: "/gigs-ajax.php",
                            method: "post",
                            data: s,
                            processData: !1,
                            contentType: !1,
                            success: function (t, e) {
                              t.success
                                ? window.location.reload()
                                : (a("submit"),
                                  $(
                                    ".invalid-feedback.public_question_text"
                                  ).html(t.data.msg));
                            },
                            error: function (t, e, n) {
                              a("submit"),
                                $(
                                  ".invalid-feedback.public_question_text"
                                ).html(
                                  "Something went wrong. Please try again."
                                );
                            },
                          })
                        : a("submit");
                    })
                  : $.ajax({
                      url: "/gigs-ajax.php",
                      method: "post",
                      data: s,
                      processData: !1,
                      contentType: !1,
                      success: function (t, e) {
                        t.success
                          ? window.location.reload()
                          : (a("submit"),
                            $(".invalid-feedback.public_question_text").html(
                              t.data.msg
                            ));
                      },
                      error: function (t, e, n) {
                        a("submit"),
                          $(".invalid-feedback.public_question_text").html(
                            "Something went wrong. Please try again."
                          );
                      },
                    });
            }
          }),
          $(".btn-edit-gig-public-question").on("click", function (t) {
            t.preventDefault();
            var e = $(this);
            $("#answered-gig-public-question-" + e.data("question-id"))
              .removeClass("d-block")
              .addClass("d-none"),
              $("#answer-gig-public-question-" + e.data("question-id"))
                .removeClass("d-none")
                .addClass("d-block");
          }),
          $(".public-question-text").on(
            "input",
            (0, i.default)(function (t) {
              t.preventDefault();
              var e = $(this),
                n = e.data("question-id");
              e.val()
                ? e.val().trim().length < 10
                  ? $(".invalid-feedback.public_question_text_" + n).html(
                      "Please detail your answer."
                    )
                  : $(".invalid-feedback.public_question_text_" + n).html("")
                : $(".invalid-feedback.public_question_text_" + n).html(
                    "Please, enter your answer."
                  ),
                r(n, !1);
            }, 200)
          ),
          $(".btn-answer-gig-public-question").on("click", function (t) {
            t.preventDefault(), t.stopPropagation();
            var e,
              n = $(this).data("question-id");
            if (r(n, !0)) {
              var a = (function (t) {
                var e = new FormData(),
                  n = $("#answer-gig-public-question-" + t).serializeArray();
                return (
                  $.each(n, function (t, n) {
                    e.append(n.name, n.value);
                  }),
                  e
                );
              })(n);
              a.append("action", "answer_gig_public_question"),
                (e = n),
                $("#btn-answer-gig-public-question-" + e).html(
                  "PLEASE WAIT..."
                ),
                $("#btn-answer-gig-public-question-" + e).attr(
                  "disabled",
                  "disabled"
                ),
                $("#answer-gig-public-question-" + e).attr("disabled", !0),
                $("#answer-gig-public-question-" + e)
                  .find(":input")
                  .attr("disabled", !0),
                $(".invalid-feedback.public_question_text_" + n).html(""),
                $.ajax({
                  url: "/gigs-ajax.php",
                  method: "post",
                  data: a,
                  processData: !1,
                  contentType: !1,
                  success: function (t, e) {
                    t.success
                      ? window.location.reload()
                      : (s(n, "submit"),
                        $(".invalid-feedback.public_question_text_" + n).html(
                          "Something went wrong. Please try again."
                        ));
                  },
                  error: function (t, e, a) {
                    s(n, "submit"),
                      $(".invalid-feedback.public_question_text_" + n).html(
                        "Something went wrong. Please try again."
                      );
                  },
                });
            }
          }),
          $(".public-questions").each(function (t, e) {
            var n = $(e),
              a = $("#gig-public-questions"),
              i = $(".js-public-questions-block"),
              o = getUrlParameter("id_question"),
              s = getUrlParameter("questions_sort"),
              r = getUrlParameter("questions_page");
            function l() {
              (s = getUrlParameter("questions_sort")),
                (r = getUrlParameter("questions_page"));
              var t = {
                action: "filter_gig_public_questions",
                questions_sort: s,
                questions_page: r,
                side: n.data("side"),
                gig_id: n.data("gig-id"),
                uid: n.data("uid"),
                id_question: o,
                csrf_token: csrf_token,
              };
              $.ajax({
                url: "/gigs-ajax.php",
                type: "post",
                data: t,
                beforeSend: function () {
                  i.addClass("is-loading");
                },
                success: function (t) {
                  t.success
                    ? (i.html(t.data.html_questions),
                      n.data("next-page", t.data.next_page),
                      n.data("prev-page", t.data.prev_page),
                      t.data.next_page
                        ? $(".paginate-public-questions.next").removeClass(
                            "disabled"
                          )
                        : $(".paginate-public-questions.next").addClass(
                            "disabled"
                          ),
                      t.data.prev_page
                        ? $(".paginate-public-questions.prev").removeClass(
                            "disabled"
                          )
                        : $(".paginate-public-questions.prev").addClass(
                            "disabled"
                          ),
                      tippy("[data-tippy-content]", {
                        allowHTML: !0,
                        popperOptions: {
                          strategy: "fixed",
                          modifiers: [
                            {
                              name: "flip",
                              options: {
                                fallbackPlacements: ["bottom", "right"],
                              },
                            },
                            {
                              name: "preventOverflow",
                              options: {
                                altAxis: !0,
                                tether: !1,
                              },
                            },
                          ],
                        },
                      }))
                    : a.html(
                        '<p class="text-center mb-0 mt-4">No public questions were found matching your criteria.</p>'
                      );
                },
              }).always(function (t) {
                i.removeClass("is-loading");
              });
            }
            n
              .find('[data-public-questions-filter="sort"]')
              .find(".dropdown-menu a")
              .on("click", function (t) {
                t.preventDefault(), t.stopPropagation();
                var e = $(this),
                  n = e.closest(".dropdown"),
                  a = e.data("value");
                e.addClass("active").siblings().removeClass("active"),
                  n.find(".list-filter__selection").text(e.text()),
                  n.dropdown("toggle"),
                  insertParamToUrl("questions_sort", a, "", !0),
                  e.data("gig-target") &&
                    (location.hash = "#" + e.data("gig-target")),
                  l();
              }),
              $(".paginate-public-questions").on("click", function (t) {
                var e = $(this),
                  a = null;
                e.hasClass("next")
                  ? (a = n.data("next-page"))
                  : e.hasClass("prev") && (a = n.data("prev-page")),
                  a &&
                    (insertParamToUrl("questions_page", a, "", !0),
                    e.data("gig-target") &&
                      (location.hash = "#" + e.data("gig-target")),
                    l());
              });
          });
      });
    var a,
      i =
        (a = n(17)) && a.__esModule
          ? a
          : {
              default: a,
            };
  },
  535: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function () {
        $(".offer-cards").find("h4").matchHeight({
          property: "min-height",
        }),
          $(".survey-providers--slider").slick({
            rows: 0,
            variableWidth: !0,
            swipeToSlide: !0,
            arrows: !0,
            dots: !1,
            infinite: !1,
          });
        var t = $(".interactive-banner__slides");
        t.each(function (e, n) {
          $(n).slick({
            rows: 0,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: t.find(".interactive-banner__next"),
            prevArrow: !1,
            draggable: !1,
            fade: !0,
            arrows: !0,
            dots: !1,
            infinite: !1,
          });
        });
        var e = $("#view-all-surveys"),
          n = $("#view-all-offers"),
          a = $(".back-btn"),
          o = $("#featured"),
          s = $("#all-surveys"),
          r = $("#all-offers");
        e.on("click", function (t) {
          t.preventDefault(),
            e.data("count") > 0 &&
              (o.removeClass("d-block").addClass("d-none"),
              r.removeClass("d-block").addClass("d-none"),
              s.removeClass("d-none").addClass("d-block"),
              $.scrollToTop());
        }),
          n.on("click", function (t) {
            t.preventDefault(),
              n.data("count") > 0 &&
                (o.removeClass("d-block").addClass("d-none"),
                s.removeClass("d-block").addClass("d-none"),
                r.removeClass("d-none").addClass("d-block"),
                $.scrollToTop());
          }),
          a.on("click", function (t) {
            t.preventDefault(),
              s.removeClass("d-block").addClass("d-none"),
              r.removeClass("d-block").addClass("d-none"),
              o.removeClass("d-none").addClass("d-block"),
              $.scrollToTop();
          }),
          $(
            "[data-surveys-offers-filter].dropdown-multiple .dropdown-menu"
          ).click(function (t) {
            t.stopPropagation();
          }),
          $(".results-bar--surveys-offers").each(function (t, e) {
            var n = $(e),
              a = n.data("target"),
              i = $("#" + a + "-list"),
              o = n.data("collection"),
              s = $("#" + a + "-total"),
              r = $("#details-modal"),
              l = "",
              c = "",
              d = [],
              u = [],
              p = "",
              f = o.filter(function () {
                return !0;
              }),
              m = n.find('[data-surveys-offers-filter="category"]'),
              g = n.find('[data-surveys-offers-filter="devices"]'),
              h = n.find('[data-surveys-offers-filter="providers"]'),
              b = $('[data-surveys-offers-filter="sort-' + a + '"]'),
              v = n.find('[data-surveys-offers-filter="search-term"]'),
              w = n.find('[data-surveys-offers-filter="clear-filters"]');
            function _() {
              var t = m.find(".dropdown-toggle");
              m.find("input[type=radio]:checked").prop("checked", !1),
                (c = ""),
                t.find("span").text(t.data("placeholder"));
            }
            function y() {
              var t = g.find(".dropdown-toggle");
              g.find("input[type=checkbox]:checked").prop("checked", !1),
                (d = []),
                t.find("span").text(t.data("placeholder"));
            }
            function k() {
              var t = h.find(".dropdown-toggle");
              h.find("input[type=checkbox]:checked").prop("checked", !1),
                (u = []),
                t.find("span").text(t.data("placeholder"));
            }
            function x() {
              p = "";
            }
            function C() {
              if (o.length > 0) {
                i.addClass("is-loading");
                var t = {};
                "" != p.trim()
                  ? (t.search_term = p)
                  : ("" != c && (t.categories = c),
                    0 !== d.length && (t.devices = d),
                    0 !== u.length && (t.provider = u)),
                  (f = o.filter(function (e) {
                    for (var n in t)
                      if ("categories" == n) {
                        if (void 0 === e[n] || !e[n].includes(t[n])) return !1;
                      } else {
                        if ("devices" == n) {
                          if (void 0 === e[n]) return !1;
                          var a = !1;
                          return (
                            t[n].forEach(function (t) {
                              e[n].includes(t) && (a = !0);
                            }),
                            a
                          );
                        }
                        if ("provider" == n) {
                          if (void 0 === e[n]) return !1;
                          var i = !1;
                          return (
                            t[n].forEach(function (t) {
                              e[n] != t || (i = !0);
                            }),
                            i
                          );
                        }
                        if (
                          "search_term" == n &&
                          !e.title.toLowerCase().includes(t[n].toLowerCase()) &&
                          !e.description
                            .toLowerCase()
                            .includes(t[n].toLowerCase())
                        )
                          return !1;
                      }
                    return !0;
                  })),
                  S(),
                  D(),
                  i.removeClass("is-loading");
              }
            }
            function S() {
              f.sort(function (t, e) {
                return "HIGHEST_REWARD" == l
                  ? t.reward > e.reward
                    ? -1
                    : t.reward < e.reward
                    ? 1
                    : 0
                  : "LOWEST_REWARD" == l
                  ? t.reward < e.reward
                    ? -1
                    : t.reward > e.reward
                    ? 1
                    : 0
                  : "OLDEST" == l
                  ? t.created_at < e.created_at
                    ? -1
                    : t.created_at > e.created_at
                    ? 1
                    : 0
                  : "NEWEST" == l
                  ? t.created_at > e.created_at
                    ? -1
                    : t.created_at < e.created_at
                    ? 1
                    : 0
                  : e.featured - t.featured ||
                    e.rating - t.rating ||
                    e.rating_count - t.rating_count ||
                    t.title.localeCompare(e.title);
              });
            }
            function D() {
              if (o.length > 0)
                if ((s.text(f.length), f.length > 0)) {
                  S();
                  var t = "";
                  f.forEach(function (e) {
                    (t +=
                      '\n              <div class="offer-card col-lg-2 col-md-4 col-sm-6" data-idx="' +
                      e.idx +
                      '">\n                <a href="#" class="offer-card__inner text-dark offer-card-item">\n                  <div class="offer-card__featured">\n                    <img src="' +
                      e.img_url +
                      '" alt="' +
                      e.title +
                      '">\n                    <div class="offer-card__labels">'),
                      e.featured &&
                        (t +=
                          '<div class="offer-card__label bg-primary text-white featured"><i class="fas fa-fire"></i> <span>FEATURED</span></div>'),
                      e.delay_in_credit &&
                        (t +=
                          '<div class="offer-card__label bg-warning delay_in_credit"><span>DELAY IN CREDITING</span></div>'),
                      (t +=
                        '<div class="offer-card__label bg-warning ' +
                        ("started" == e.status ? "d-block" : "d-none") +
                        ' started"><span>STARTED</span></div>'),
                      "finished" == e.status &&
                        (t +=
                          '<div class="offer-card__label finished"><span class="status status--primary" style="font-size: .625rem; font-weight: 700;">COMPLETED</span></div>'),
                      (t +=
                        '</div>\n                  </div>\n                  <div class="offer-card__text-wrap">\n                    <h4 class="mb-3">' +
                        e.title +
                        '</h4>\n                    <p class="text-gray-light">' +
                        e.provider +
                        '</p>\n                    <div class="d-flex align-items-center justify-content-between">\n                      <div class="offer-card__price fw-bold text-lg"><small>$</small><span>' +
                        e.reward.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }) +
                        '</span></div>\n                      <div class="text-gray-light d-flex align-items-center">'),
                      e.devices.forEach(function (e, n) {
                        t +=
                          "apple" == e
                            ? '<i class="fab fa-apple' +
                              (0 == n ? "" : " ml-1") +
                              '" title="iOS"></i>'
                            : "android" == e
                            ? '<i class="fab fa-android' +
                              (0 == n ? "" : " ml-1") +
                              '" title="Android"></i>'
                            : '<i class="fas fa-laptop' +
                              (0 == n ? "" : " ml-1") +
                              '" title="Desktop"></i>';
                      }),
                      (t +=
                        "</div>\n                    </div>\n                  </div>\n                </a>\n              </div>\n            ");
                  }),
                    i.html(function () {
                      return t;
                    });
                } else
                  i.html(
                    '<div class="col-12"><p class="text-center mb-0 mt-4">No ' +
                      a +
                      " were found matching your criteria.</p></div>"
                  );
            }
            function T(t) {
              t.removeClass("d-none").addClass("d-block");
            }
            function B(t) {
              t.removeClass("d-block").addClass("d-none");
            }
            n.find("[data-surveys-offers-filter]").each(function (t, e) {
              var n = $(e),
                a = n.find('[data-toggle="dropdown"]');
              n.find("[data-surveys-offers-filter-action]").on(
                "click",
                function (t) {
                  a.dropdown("hide");
                }
              );
            }),
              m.find('input[type="radio"]').on("change", function (t) {
                (c = $(this).val()),
                  m
                    .find(".dropdown-toggle span")
                    .text($(this).siblings("label").text());
              }),
              m
                .find('[data-surveys-offers-filter-action="apply"]')
                .on("click", function (t) {
                  w.show(), C();
                }),
              m
                .find('[data-surveys-offers-filter-action="close"]')
                .on("click", function (t) {
                  _(), C();
                }),
              g.on("change", 'input[type="checkbox"]', function (t) {
                var e = $(this),
                  n = e.val();
                if (e.is(":checked")) d.push(n);
                else {
                  var a = d.indexOf(n);
                  -1 !== a && d.splice(a, 1);
                }
              }),
              g
                .find('[data-surveys-offers-filter-action="close"]')
                .on("click", function (t) {
                  y(), C();
                }),
              g
                .find('[data-surveys-offers-filter-action="apply"]')
                .on("click", function (t) {
                  w.show(), C();
                  var e = g.find(".dropdown-toggle"),
                    n = g
                      .find("input[type=checkbox]")
                      .filter(":checked")
                      .next("label")
                      .map(function () {
                        return $(this).text();
                      })
                      .get();
                  n.length
                    ? e.find("span").text(n.join(", "))
                    : e.find("span").text(e.data("placeholder"));
                }),
              b.find(".dropdown-menu a").on("click", function (t) {
                t.preventDefault(),
                  t.stopPropagation(),
                  i.addClass("is-loading");
                var e = $(this),
                  n = e.closest(".dropdown"),
                  a = e.data("value");
                e.addClass("active").siblings().removeClass("active"),
                  n.find(".dropdown-sortby__selection").text(e.text()),
                  n.dropdown("toggle"),
                  (l = a),
                  S(),
                  D(),
                  i.removeClass("is-loading");
              }),
              h.on("change", 'input[type="checkbox"]', function (t) {
                var e = $(this),
                  n = e.val();
                if (e.is(":checked")) u.push(n);
                else {
                  var a = u.indexOf(n);
                  -1 !== a && u.splice(a, 1);
                }
              }),
              h
                .find('[data-surveys-offers-filter-action="apply"]')
                .on("click", function (t) {
                  w.show(), C();
                  var e =
                    h
                      .find("input[type=checkbox]")
                      .filter(":checked")
                      .next("label")
                      .map(function () {
                        return $(this).text();
                      })
                      .get()
                      .join(", ") ||
                    h.find(".dropdown-toggle").data("placeholder");
                  h.find(".dropdown-toggle span").text(e);
                }),
              h
                .find('[data-surveys-offers-filter-action="close"]')
                .on("click", function (t) {
                  k(), C();
                }),
              w.on("click", function (t) {
                w.hide(), _(), 0 != g.length && y(), 0 != h.length && k(), C();
              }),
              v
                .find('[data-surveys-offers-filter-action="close"]')
                .on("click", function (t) {
                  $(this).hide(), x(), C();
                }),
              v
                .find('[data-surveys-offers-filter-action="apply"]')
                .on("click", function (t) {
                  (p = v.find("input").val()),
                    v
                      .find('[data-surveys-offers-filter-action="close"]')
                      .show(),
                    C();
                }),
              v
                .find('[data-surveys-offers-filter-action="close"]')
                .on("click", function (t) {
                  v.find("input").val(""), x(), $(this).hide(), C();
                }),
              v.find("input").on("keypress", function (t) {
                13 == t.which &&
                  v
                    .find('[data-surveys-offers-filter-action="apply"]')
                    .trigger("click");
              }),
              i.on("click", ".offer-card-item", function (t) {
                t.preventDefault(), t.stopPropagation();
                var e = $(this).parent().data("idx");
                !(function (t, e) {
                  $(".surveys-offers-section").addClass("is-loading"),
                    r.find("#img_url").attr({
                      alt: t.title,
                      title: t.title,
                      src: t.img_url,
                    }),
                    t.featured
                      ? T(r.find(".offer-popup__label.featured"))
                      : B(r.find(".offer-popup__label.featured")),
                    "delay_in_credit" == t.status
                      ? T(r.find(".offer-popup__label.delay_in_credit"))
                      : B(r.find(".offer-popup__label.delay_in_credit")),
                    "started" == t.status
                      ? (T(r.find(".offer-popup__label.started")),
                        B(r.find(".offer-popup__label.finished")))
                      : "finished" == t.status
                      ? (T(r.find(".offer-popup__label.finished")),
                        B(r.find(".offer-popup__label.started")))
                      : (B(r.find(".offer-popup__label.finished")),
                        B(r.find(".offer-popup__label.started")));
                  var n = "";
                  t.categories.forEach(function (t, e) {
                    n +=
                      '<div class="offer-popup__cat symbol symbol--gray' +
                      (0 == e ? "" : " ml-1") +
                      '">' +
                      t.toUpperCase() +
                      "</div>";
                  }),
                    r.find("#categories").html(n);
                  var a,
                    i = "";
                  t.devices.forEach(function (t, e) {
                    i +=
                      "apple" == t
                        ? '<i class="fab fa-apple' +
                          (0 == e ? "" : " ml-1") +
                          '" title="iOS"></i>'
                        : "android" == t
                        ? '<i class="fab fa-android' +
                          (0 == e ? "" : " ml-1") +
                          '" title="Android"></i>'
                        : '<i class="fas fa-laptop' +
                          (0 == e ? "" : " ml-1") +
                          '" title="Desktop"></i>';
                  }),
                    r.find("#devices").html(i),
                    r.find("#title").html(t.title);
                  for (var o = "", s = 1; s <= 5; s++)
                    s <= t.rating
                      ? (o +=
                          '<span class="star-rating__item star-rating__item--filled-' +
                          (t.rating >= 3
                            ? "success"
                            : t.rating < 2
                            ? "danger"
                            : "warning") +
                          '"><i class="fas fa-star"></i></span>')
                      : (o +=
                          '<span class="star-rating__item"><i class="fas fa-star"></i></span>');
                  r.find("#rating").html(o),
                    r.find("#rating-count").html(
                      "" +
                        parseFloat(t.rating).toLocaleString("en-US", {
                          minimumFractionDigits: 1,
                          maximumFractionDigits: 1,
                        })
                    ),
                    r
                      .find("#rating-reviews")
                      .html("(" + t.rating_count + " reviews)"),
                    r.find("#reward").html(
                      "<small>$</small>" +
                        t.reward.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                    ),
                    r.find("#img-provider").attr({
                      alt: t.provider,
                      title: t.provider,
                      src:
                        "/assets/images/surveys-offers/" +
                        ((a = t.provider),
                        a.toLowerCase().replace(" ", "") + ".png"),
                    }),
                    r.find("#description").html(t.description);
                  var l = "";
                  "steps" in t &&
                    ("Ayet Studios" == t.provider
                      ? (l = t.steps)
                      : t.steps.forEach(function (t, e) {
                          l += "<li>" + t + "</li>";
                        })),
                    r.find("#steps-description").html(l),
                    "" != l ? T(r.find("#steps")) : B(r.find("#steps")),
                    r.find("#activities").html(""),
                    r.find("#offer-popup-activities-tab").data("page", -1),
                    r
                      .find("#offer-popup-activities-tab")
                      .data("partner-id", t.provider),
                    r
                      .find("#offer-popup-activities-tab")
                      .data("partner-resource-id", t.id),
                    r.find("#reviews").html(""),
                    r.find("#offer-popup-reviews-tab").data("page", -1),
                    r
                      .find("#offer-popup-reviews-tab")
                      .data("partner-id", t.provider),
                    r
                      .find("#offer-popup-reviews-tab")
                      .data("partner-resource-id", t.id),
                    r
                      .find('button[data-target="#offer-popup-information"]')
                      .tab("show"),
                    r.find("#goto-form #partner_id").val(t.provider),
                    r.find("#goto-form #partner_resource_id").val(t.id),
                    r.find("#goto-form #type").val(t.type),
                    r.find("#goto-form #title").val(t.title),
                    r.find("#goto-form #url").val(t.url),
                    r.find("#goto-form #reward").val(t.reward),
                    r.find("#goto-form #idx").val(e),
                    r
                      .find("#goto-btn")
                      .html(
                        "Go to the " +
                          ("surveys" == t.type ? "Survey" : "Offer")
                      ),
                    $(".surveys-offers-section").removeClass("is-loading");
                })(o[e], e),
                  r.modal("show");
              }),
              r.find("#goto-form").submit(function (t) {
                var e = $(this),
                  n = e.find("#idx").val();
                return (
                  ("S" == e.find("#idx").val() ? "surveys" : "offers") == a &&
                    ((o[n].status = "started"),
                    T(
                      i
                        .find('[data-idx="' + n + '"]')
                        .find(".offer-card__label.started")
                    ),
                    T(
                      $("#featured-" + a + "-list")
                        .find('[data-idx="' + n + '"]')
                        .find(".offer-card__label.started")
                    ),
                    T(r.find(".offer-popup__label.started"))),
                  !0
                );
              });
          }),
          $(".offer-card-item.featured").on("click", function (t) {
            t.preventDefault(), t.stopPropagation();
            var e = $(this),
              n = e.parent().data("idx"),
              a = e.parent().data("target");
            $("#" + a + "-list")
              .find('[data-idx="' + n + '"]')
              .find(".offer-card-item")
              .trigger("click");
          }),
          $(document).on(
            "submit",
            "#ys-profilers-form.YourSurveys-profilers-form",
            function (t) {
              t.preventDefault();
              var e = new FormData(),
                n = $(
                  "#ys-profilers-form.YourSurveys-profilers-form"
                ).serializeArray();
              $.each(n, function (t, n) {
                e.append(n.name, n.value);
              }),
                e.append("csrf_token", csrf_token),
                $.ajax({
                  url: "/surveys-offers.php",
                  type: "post",
                  data: e,
                  processData: !1,
                  contentType: !1,
                  beforeSend: function () {
                    $("#ys-profilers-submit-btn").attr("disabled", !1);
                  },
                  success: function (t) {
                    t.success
                      ? t.profilers
                        ? ($("#YourSurveysProfilersModal").modal("hide"),
                          $("#YourSurveys-modal-form").html(t.modal_html),
                          $(
                            "#YourSurveysProfilersModal #YourSurveys-modal-form .profiler-box"
                          ).cintProfilers())
                        : window.location.reload()
                      : $("#ys-profilers-submit-btn").attr("disabled", !1);
                  },
                  error: function (t, e, n) {
                    Swal.fire({
                      showCloseButton: !1,
                      icon: "error",
                      title: "Error!",
                      html: "Something went wrong. Please try again.",
                      confirmButtonText: "OK",
                      buttonsStyling: !1,
                      focusConfirm: !1,
                      showDenyButton: !1,
                      customClass: {
                        confirmButton: "btn btn-primary btn-md",
                      },
                    }).then(function () {
                      window.location.reload();
                    });
                  },
                });
            }
          ),
          $(".offer.surveys-offers-provider").on("click", function (t) {
            t.preventDefault(), t.stopPropagation();
            var e = $(this).data("provider");
            $("#" + e + "-offerwall").modal("show"),
              $.ajax({
                url: "/partners/surveys-offers-access.php",
                type: "post",
                data: {
                  provider: e,
                  csrf_token: csrf_token,
                },
              });
          }),
          $(document).on(
            "show.bs.tab",
            "#offer-popup-reviews-tab, #offer-popup-activities-tab",
            function (t) {
              if ($("#details-modal").hasClass("show")) {
                var e = $(this),
                  n = e.data("list");
                e.data("page") < 1 &&
                  (e.data("page", 1),
                  $.ajax({
                    url: "/partners/details-modal.php",
                    type: "post",
                    data: {
                      partner_id: e.data("partner-id"),
                      partner_resource_id: e.data("partner-resource-id"),
                      list: n,
                      csrf_token: csrf_token,
                    },
                    beforeSend: function () {
                      $("#" + n).addClass("is-loading");
                    },
                    success: function (t) {
                      t.success
                        ? $("#" + n).html(t.html)
                        : $("#" + n).html(
                            '<li class="d-flex justify-content-center">Something went wrong loading the ' +
                              n +
                              ". Please try again.</li>"
                          ),
                        $("#" + n).removeClass("is-loading");
                    },
                    error: function (t, e, a) {
                      $("#" + n).html(
                        '<li class="d-flex justify-content-center">Something went wrong loading the ' +
                          n +
                          ". Please try again.</li>"
                      ),
                        $("#" + n).removeClass("is-loading");
                    },
                  }));
              }
            }
          ),
          $(".load-more-activities-js").on("click", function (t) {
            t.preventDefault();
            var e = $(this),
              n = e.data("page"),
              a = e.data("action"),
              i = e.data("last-id");
            $.post(
              "/partners/activities.php",
              {
                page: n,
                action: a,
                last_id: i,
                csrf_token: csrf_token,
              },
              function (t) {
                t.success
                  ? ($("#" + a + "-activities").append(t.data),
                    t.has_more_results
                      ? (e.data("page", n + 1), e.data("last-id", t.last_id))
                      : e.hide())
                  : e.hide();
              }
            );
          });
        var l = $("#review-modal");
        $(
          "#requires-review-activities .add-review, #all-activities .add-review"
        ).on("click", function (t) {
          t.preventDefault();
          var e = $(this);
          l.find("#activity-id").val() != e.data("activity-id") &&
            (l
              .find("#review-summary")
              .html(
                "You have completed the offer <b>" +
                  e.data("item-title") +
                  "</b> from Provider <b>" +
                  e.data("item-provider") +
                  "</b>"
              ),
            l
              .find("#review-for")
              .html(
                "Review for " +
                  ("O" == e.data("item-type") ? "offer" : "survey")
              ),
            l.find("#partner-id").val(e.data("partner-id")),
            l.find("#partner-resource-id").val(e.data("partner-resource-id")),
            l.find("#activity-id").val(e.data("activity-id"))),
            l.modal("show");
        });
        var c = $(".post-survey-offer-review"),
          d = c.find(".post-survey-offer-review__submit"),
          u = c.find('[name="rating"]'),
          p = c.find('[name="comment"]');
        function f() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            e = !0;
          return (
            u.val() > 0 && u.val() <= 5
              ? $(".invalid-feedback.rating").html("")
              : (t &&
                  $(".invalid-feedback.rating").html(
                    "Please, enter a valid rating."
                  ),
                (e = !1)),
            p.val()
              ? $(".invalid-feedback.comment").html("")
              : (t &&
                  $(".invalid-feedback.comment").html(
                    "Please, enter the review comment."
                  ),
                (e = !1)),
            e
              ? (d.removeAttr("disabled"), $(".pw-banner").hide())
              : (d.attr("disabled", "disabled"),
                t &&
                  ($.bannerAlert("Please, validate the fields", !0),
                  $.scrollToTop())),
            e
          );
        }
        d.attr("disabled", "disabled"),
          p.on(
            "input",
            (0, i.default)(function (t) {
              t.preventDefault(),
                $(this).val()
                  ? $(".invalid-feedback." + $(this).attr("name")).html("")
                  : $(".invalid-feedback." + $(this).attr("name")).html(
                      "Please, enter the review comment."
                    ),
                f();
            }, 200)
          ),
          u.on(
            "change",
            (0, i.default)(function (t) {
              t.preventDefault(),
                $(this).val() > 0 && $(this).val() < 5
                  ? $(".invalid-feedback." + $(this).attr("name")).html("")
                  : $(".invalid-feedback." + $(this).attr("name")).html(
                      "Please, enter a valid rating."
                    ),
                f();
            }, 200)
          ),
          d.on("click", function (t) {
            t.preventDefault(),
              f(!0) &&
                (d.html("<span>PLEASE WAIT...</span>"),
                d.attr("disabled", "disabled"),
                $(".invalid-feedback").html(""),
                $.post(c.attr("action"), c.serialize())
                  .done(function (t) {
                    l.modal("hide"),
                      t.success
                        ? ($(
                            "#all-activities-" +
                              t.activity_id +
                              " .activity-action"
                          ).html(t.rating_html),
                          $(
                            "#requires-review-activities-" +
                              t.activity_id +
                              " .activity-action"
                          ).html(t.rating_html),
                          Swal.fire({
                            showCloseButton: !1,
                            icon: "success",
                            title: "Thanks for your review!",
                            html: "<p>Your feedback is valuable to us as we strive to improve our services and enhance user experience.</p>",
                            confirmButtonText: "OK",
                            buttonsStyling: !1,
                            focusConfirm: !1,
                            showDenyButton: !1,
                            customClass: {
                              popup:
                                "gigs-popup animate__animated animate__fadeInDown",
                              confirmButton: "btn btn-primary btn-md",
                            },
                          }))
                        : (d.html("<span>POST REVIEW</span>"),
                          d.removeAttr("disabled"),
                          $.bannerAlert(
                            "Something went wrong. Please try again.",
                            !0
                          ),
                          $.scrollToTop());
                  })
                  .fail(function (t, e, n) {
                    l.modal("hide"),
                      d.html("<span>POST REVIEW</span>"),
                      d.removeAttr("disabled"),
                      $.bannerAlert(
                        "Something went wrong. Please try again.",
                        !0
                      ),
                      $.scrollToTop();
                  }));
          });
      });
    var a,
      i =
        (a = n(17)) && a.__esModule
          ? a
          : {
              default: a,
            };
  },
  536: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      i(n(196));
    var a = i(n(17));
    function i(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    e.default = function () {
      var t = $("body"),
        e = ($("surveys-offers-section"), $(".offers-chat")),
        n = $(".offers-chat-open"),
        i = $(".offers-chat-close"),
        o = $(".offers-chat__editor-input"),
        s = $(".offers-chat__editor-submit"),
        r = $(".offers-chat__editor-emoji"),
        l = $(".offers-chat__emoji-picker"),
        c = $(".offers-chat__usertags");
      n.on("click", function (a) {
        a.preventDefault(),
          t.addClass("offers-chat-opened"),
          e.addClass("offers-chat--opened"),
          n.hide();
      }),
        i.on("click", function (a) {
          a.preventDefault(),
            t.removeClass("offers-chat-opened"),
            e.removeClass("offers-chat--opened"),
            n.show();
        }),
        o.on(
          "keyup",
          (0, a.default)(function (t) {
            t.preventDefault();
            var e = $(this).val();
            e ? s.removeAttr("disabled") : s.attr("disabled", "disabled");
            var n = e.match(/#(\w+)$/);
            if (n) {
              var a = n[1],
                i = d.filter(function (t) {
                  return -1 !== t.name.indexOf(a);
                });
              c.html(
                i
                  .map(function (t) {
                    return (
                      '<div class="offers-chat__usertags-item"><img src="' +
                      t.imageUrl +
                      '" alt="' +
                      t.name +
                      '"><span data-key="' +
                      t.key +
                      '">' +
                      t.name +
                      "</span></div>"
                    );
                  })
                  .join("")
              ).show();
            } else c.hide();
            (32 !== t.which && 27 !== t.which) || c.hide();
          }, 150)
        );
      var d = [
        {
          imageUrl: "path/to/image1.jpg",
          key: "anket",
          name: "Bir anket doldurun",
        },
        {
          imageUrl: "path/to/image2.jpg",
          key: "savings",
          name: "Big Savings: Get 50% off on Bicyс …",
        },
        {
          imageUrl: "path/to/image3.jpg",
          key: "binge",
          name: "Binge-Worthy",
        },
        {
          imageUrl: "path/to/image4.jpg",
          key: "deliciousness",
          name: "Bite into Deliciousness",
        },
        {
          imageUrl: "path/to/image5.jpg",
          key: "bookworm",
          name: "Bookworm's Paradise",
        },
      ];
      o.on("keyup", function (t) {
        var e = $(this)
          .val()
          .match(/#([\w\s]+)$/);
        if (e) {
          var n = e[1],
            a = d.filter(function (t) {
              return (
                ("string" == typeof t.name && t.name.includes(n)) ||
                ("string" == typeof t.key && t.key.includes(n))
              );
            });
          c.html(
            a
              .map(function (t) {
                return (
                  '<div class="suggestion">\n            <img src="' +
                  t.imageUrl +
                  '" alt="' +
                  t.name +
                  '">\n            <span data-key="' +
                  t.key +
                  '">' +
                  t.name +
                  "</span>\n          </div>"
                );
              })
              .join("")
          ).show();
        } else c.hide();
        (32 !== t.which && 27 !== t.which) || c.hide();
      }),
        $(document).on("click", ".suggestion", function () {
          var t = $(this).find("span").text(),
            e = $(".chat-textarea")
              .val()
              .replace(/#([\w\s]+)$/, "#" + t + " ");
          $(".chat-textarea").val(e), c.hide();
        }),
        r.on("click", function (t) {
          t.preventDefault(), l.show();
        }),
        $(document).on("click", function (t) {
          var e = $(this);
          e.closest(".offers-chat__emoji-picker").length ||
            e.hasClass("offers-chat__editor-emoji") ||
            e.closest(".offers-chat__editor-emoji").length ||
            l.hide();
        });
    };
  },
  537: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        function a() {
          $("html,body").animate({
            scrollTop: t.offset().top - e,
          });
        }
        t.length &&
          (n > 0
            ? setTimeout(function () {
                a();
              }, n)
            : a());
      });
  },
  538: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function (t) {
        var e = t.getBoundingClientRect(),
          n = {};
        return (
          (n.top = e.top < 0),
          (n.left = e.left < 0),
          (n.bottom =
            e.bottom >
            (window.innerHeight || document.documentElement.clientHeight)),
          (n.right =
            e.right >
            (window.innerWidth || document.documentElement.clientWidth)),
          (n.any = n.top || n.left || n.bottom || n.right),
          (n.all = n.top && n.left && n.bottom && n.right),
          n
        );
      });
  },
});
