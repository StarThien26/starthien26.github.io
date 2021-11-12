!function(e) {
    var t = {};
    function n(i) {
        if (t[i])
            return t[i].exports;
        var o = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(i, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return i
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 100)
}({
    100: function(e, t, n) {
        ((e,t)=>{
            let i = {
                debug: "0",
                autoExecute: "1",
                recommendedRef: "",
                autoRestartWhenEmpty: !0,
                maxRestartTimes: 5,
                delayBetweenRestart: 2e3,
                ref: location.href,
                lazyLoadDistance: "${LAZY_LOAD_DISTANCE}"
            };
            if (e.PSTNativeSDK && "function" == typeof e.PSTNativeSDK.restart)
                return void e.PSTNativeSDK.restart(i);
            const o = n(38);
            let r = {
                style: {
                    container: "z-index:10;bottom:0;right:0;overflow-x:hidden",
                    heading: "text-transform:uppercase;",
                    box: "",
                    item_container: "position:relative;overflow:hidden;box-sizing:border-box;display:flex;word-wrap:break-word",
                    image_container: "flex-shrink:0;overflow: hidden",
                    image: "max-width:100%;max-height:100%",
                    body: "flex-grow:1",
                    title: "display:block",
                    sponsor: ""
                }
            }
              , a = {
                showedAd: "showedAd",
                stopped: "stopped",
                restarting: "restarting"
            }
              , c = {
                showedAd: [],
                stopped: [],
                restarting: []
            };
            const s = {
                waiting: "waiting",
                stopped: "stopped",
                running: "running"
            }
              , l = "Zxzm4XOLZyqF0nL2HhD3Tg=="
              , d = "https://native-feed.trackpush.com/feed/native/{pid}"
              , p = "https://native-feed.trackpush.com/widgets/findByIds"
              , u = "https://api.trackpush.com/native_ads_impression"
              , m = "_565007686e"
              , g = .5
              , f = 1e3
              , h = Number(i.lazyLoadDistance) || 350;
            let y = s.waiting
              , b = !1
              , w = !1
              , A = {}
              , v = {}
              , k = {}
              , E = 0;
            function S(e={}) {
                I(e),
                T()
            }
            function I(e={}) {
                C(i = Object.assign({}, i, e)),
                b = !0
            }
            function T() {
                if (y != s.waiting)
                    return void C("Start when AppStatus != waiting. Aborted.");
                y = s.running,
                w || (!function() {
                    let n = z(function() {
                        Object.keys(v).length != N().length ? Object.keys(A).forEach(e=>{
                            let n = A[e];
                            if (v[e])
                                return void C(`Skip trackImpressions for wid: ${n.id}, elementId ${e}. Tracked impression`);
                            let i = t.getElementById(e);
                            i && j(i) ? setTimeout(function() {
                                !v[e] && j(i) && (v[e] = !0,
                                function(e) {
                                    if (!u)
                                        return void C("TRACK_IMPRESSION_API_ENDPOINT not set. Skip");
                                    C(`Tracking impression for wid: ${e.id}`),
                                    fetch(u, {
                                        method: "POST",
                                        mode: "cors",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            pid: l,
                                            ref: location.href,
                                            wid: e.id
                                        })
                                    })
                                }(n))
                            }, f) : C(`Skip trackImpressions for wid: ${n.id}, elementId ${e}. Empty el or not in viewport`)
                        }
                        ) : C("Skip trackImpressions listener. Tracked impressions for all places")
                    }, 50)
                      , i = z(function() {
                        Object.keys(k).length != N().length ? Object.keys(A).forEach(n=>{
                            if (k[n])
                                return void C(`Skip lazyLoadImage for elementId ${n}. Loaded image`);
                            let i = A[n]
                              , o = Array.from(t.querySelectorAll(`#${n} .lazy-img`));
                            0 != o.length ? o.forEach(o=>{
                                (function(n, i) {
                                    let o = i.img_lazy_load_distance || h
                                      , r = e.innerHeight || t.documentElement.clientHeight
                                      , a = n.getBoundingClientRect();
                                    if (a.top < r + o && a.bottom > -1 * o)
                                        return "none" !== getComputedStyle(n).display;
                                    return !1
                                }
                                )(o, i.config) && (o.classList.remove("lazy-img"),
                                o.style.backgroundImage = `url('${o.dataset.src}')`,
                                C(`Lazy loading image for elementId: ${n} ${o.dataset.src}`))
                            }
                            ) : k[n] = !0
                        }
                        ) : C("Skip lazyLoadImage. Loaded image for all places ")
                    }, 50);
                    M(a.showedAd, function(e, t) {
                        let o = `_${t.id}_${(new Date).getTime()}`;
                        e.id = o,
                        A[o] = t,
                        n(),
                        i()
                    }),
                    M(a.stopped, function() {
                        y = s.stopped,
                        N().forEach(e=>{
                            e.innerHTML = ""
                        }
                        )
                    }),
                    M(a.restarting, function(e) {
                        y = s.waiting,
                        A = {},
                        v = {},
                        k = {},
                        !e && b || I(e),
                        T()
                    }),
                    t.addEventListener("scroll", n),
                    e.addEventListener("resize", n),
                    e.addEventListener("orientationchange", n),
                    t.addEventListener("scroll", i),
                    e.addEventListener("resize", i),
                    e.addEventListener("orientationchange", i)
                }(),
                w = !0);
                let n = N().map(e=>D(e)).filter(e=>e && e.trim().length > 0);
                if (0 != n.length)
                    E = 0,
                    function(e) {
                        return fetch(p, {
                            method: "POST",
                            mode: "cors",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                pid: l,
                                ref: "https://xidols.live/",
                                wids: e
                            })
                        }).then(e=>e.json()).then(e=>e.data || [])
                    }(n).then(_).catch(e=>{
                        C(e),
                        _([])
                    }
                    );
                else if (O(a.stopped),
                C("Empty widget ids"),
                i.autoRestartWhenEmpty && E < i.maxRestartTimes) {
                    let e = isNaN(Number(i.delayBetweenRestart)) ? 2e3 : Number(i.delayBetweenRestart);
                    setTimeout(()=>{
                        C(`Auto restart when empty widget ids (${++E})`),
                        O(a.restarting)
                    }
                    , e)
                }
            }
            function _(t) {
                let n = t.reduce((e,t)=>(e[t.id] = t,
                e), {});
                for (let t of N()) {
                    let o = D(t);
                    if (!o || !n[o] || !n[o].config) {
                        t.innerHTML = "",
                        C("Skip empty widget. wid:" + o);
                        continue
                    }
                    let r = n[o];
                    i = navigator.userAgent || navigator.vendor || e.opera,
                    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(i) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0, 4))) && (r.config.cols = r.config.mobile_cols || r.config.cols,
                    r.config.rows = r.config.mobile_rows || r.config.rows),
                    R(r).then(e=>x(t, r, e))
                }
                var i
            }
            function x(n, i, o) {
                let r = i.config;
                if (!r || !o || !Array.isArray(o) || 0 == o.length)
                    return n.innerHTML = "",
                    void C("Skip empty widget config. wid:" + i.id);
                if (n.style.cssText = $(r.style, "container"),
                !t.getElementById("pst-style-shared")) {
                    let e = t.createElement("style");
                    e.id = "pst-style-shared";
                    let n = "\n                #pst-nt-info {position: absolute;top:5px;right:0;z-index:1;cursor:pointer;line-height:1;padding:2px 3px;border-bottom-left-radius:5px}\n                #pst-nt-close {position:absolute;right:0;bottom:0;z-index:1;cursor:pointer;line-height:1}\n            ";
                    e.appendChild(t.createTextNode(n)),
                    t.getElementsByTagName("head")[0].appendChild(e)
                }
                let c = "";
                1 == r.show_ad_info && (c += '\n            <span id="pst-nt-info" onclick="window.open(\'https://pushtimize.com?utm_source=\' + location.host + \'&utm_medium=referral&utm_campaign=native-ads-info\')" class="pst-info">\n                <img style="height: 30px;position:relative;top:0;fill: #717171;" src="https://i.imgur.com/Vo9sX8c.png" alt="">\n            </span>'),
                1 == r.closeable && (c += '\n            <span id="pst-nt-close" onclick="this.parentNode.style.display=\'none\';">\n                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1N0UxQjZGNkQ4RUQxMUU0QURFRkY3QUNGRjFGNzJFQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1N0UxQjZGN0Q4RUQxMUU0QURFRkY3QUNGRjFGNzJFQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU3RTFCNkY0RDhFRDExRTRBREVGRjdBQ0ZGMUY3MkVDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU3RTFCNkY1RDhFRDExRTRBREVGRjdBQ0ZGMUY3MkVDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+me1ReQAAALdJREFUeNpi/P//P8OLFy8YgEANiHOA2AuIhRmIBCxAzYxAuhiIuxnIAExAbE+uZpgBkxkoACADdCg1AAOsXLmS4eHDhyhiID5InCgDLCwsUAyBaQaJowPG58+f/8dmCEyTjY0Nw5EjRxjCw8MZ5OXliXMBCIAUgzTv3LkTTGPTjNcAkAtANru7u4Np9DDBawDM+SBnW1lZgWlsAYvTgBMnTqD4GUSD+MePHyc+EClKB0PLAIAAAwDEsVKZoKC7RwAAAABJRU5ErkJggg==" alt="">\n            </span>');
                let s = r.append_html_function && "function" == typeof e[r.append_html_function] ? e[r.append_html_function] : function() {
                    return r.append_html || ""
                }
                  , l = o.map(e=>(e.target_link = `${e.target_link}${e.target_link.includes("?") ? "&" : "?"}wid=${i.id}&ctime=${(new Date).getTime()}`,
                e.image = `${e.image}${e.image.includes("?") ? "&" : "?"}wid=${i.id}&ctime=${(new Date).getTime()}`,
                e)).map(e=>(function(e, t, n, i) {
                    let o = 100 / t.cols;
                    n < 280 ? o = 100 : (n < 400 && o < 50 && (o = 50),
                    n < 550 && o < 33 && (o = 33),
                    n < 700 && o < 25 && (o = 25),
                    o < 25 && o * n / 100 < 150 && (o = 100 / Math.floor(n / 150)));
                    return `\n            <div class="pst-item-container ${e.type ? "pst-native" : "pst-recommended"}" style="width: ${o}%;max-width: ${o}%;flex-direction: ${"vertical" == t.type ? "column" : "row"};${$(t.style, "item_container")}">\n                <div class="pst-img-container" style="width: ${"vertical" == t.type ? 100 : 45}%;${$(t.style, "image_container")}">\n                    <a class="pst-img lazy-img" data-src="${L(e, "image")}" href="${e.target_link}" style="display: block;padding-top:66.67%;height: 0;background-color: #f3f4f4;background-position: center;background-size: cover;background-repeat: no-repeat;${$(t.style, "image")}" target="_blank" rel="nofollow noopener"></a>\n                </div>\n                <div class="pst-item-body" style="${$(t.style, "body")}">\n                    <a class="pst-item-title" style="${$(t.style, "title")}" target="_blank" href="${e.target_link}" rel="nofollow noopener">\n                        ${e.title}\n                    </a>\n                    ${t.sponsor && e.type ? '<div class="pst-item-sponsor" style="' + $(t.style, "sponsor") + '">' + t.sponsor + "</div>" : ""}\n                    ${i(e) || ""}\n                </div>\n            </div>`
                }
                )(e, r, n.clientWidth, s)).filter(e=>e.trim().length > 0).slice(0, r.cols * r.rows);
                n.innerHTML = `${c}\n            ${r.heading || 1 == r.show_ad_info ? '<div style="' + $(r.style, "heading") + '">' + (r.heading || "&nbsp;") + "</div>" : ""}\n            <div class="pst-box" style="display: flex;flex-wrap: wrap;${$(r.style, "box")}">\n                ${l.join("\n")}            \n            </div>\n        `,
                O(a.showedAd, n, i)
            }
            function R(e) {
                return fetch(function(e) {
                    let t = d.replace("{pid}", encodeURIComponent(l))
                      , n = new URLSearchParams({
                        ua: navigator.userAgent,
                        content_type: L(e, "config.content_type", ""),
                        ref: 1 == i.autoExecute ? "https://xidols.live/" : i.ref,
                        limit: e.config.cols * e.config.rows,
                        max_recommended: L(e, "config.max_recommended", 0),
                        recommended_period: L(e, "config.recommended_period", 86400),
                        recommended_params: L(e, "config.recommended_params", ""),
                        recommended_ref: i.recommendedRef || "",
                        uid: o.getUserId()
                    });
                    return `${t}${t.includes("?") ? "&" : "?"}${n.toString()}`
                }(e), {
                    mode: "cors"
                }).then(e=>e.text()).then(e=>{
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        return []
                    }
                }
                ).catch(e=>(C("Error when getAds.", e),
                []))
            }
            function N() {
                return Array.from(t.querySelectorAll(`.${m}`))
            }
            function D(e) {
                return e.getAttribute("data-wi")
            }
            function $(e, t) {
                return `${r.style[t] || ""};${function e(t) {
                    if (!t)
                        return "";
                    if (["string", "number"].includes(typeof t))
                        return t;
                    if (t.u)
                        return "custom" == t.u ? t.v : `${t.v}${t.u}`;
                    let n = "";
                    let i = "";
                    for (let o of Object.keys(t))
                        "custom" != o ? n += `${o}:${e(t[o])};` : i = e(t[o]) + ";";
                    return n + i
                }(L(e, t))}`
            }
            function j(n) {
                let i = e.innerHeight || t.documentElement.clientHeight
                  , o = e.innerWidth || t.documentElement.clientWidth
                  , r = n.getBoundingClientRect()
                  , a = Math.max(r.top > i ? i : r.top, 0)
                  , c = Math.max(r.right > o ? o : r.right, 0)
                  , s = Math.max(r.bottom > i ? i : r.bottom, 0)
                  , l = (c - Math.max(r.left > o ? o : r.left, 0)) * (s - a);
                return l > 0 && s - a == i || l >= r.height * r.width * g
            }
            function L(e, t, n=null) {
                if (!e || "object" != typeof e)
                    return n;
                if (["undefined", "function"].includes(typeof t) || null == t)
                    return e;
                for (t = Array.isArray(t) ? t : (t + "").split("."); t.length; ) {
                    let i = t.shift();
                    if (!e[i])
                        return n;
                    e = e[i]
                }
                return e
            }
            function O(e, ...t) {
                Array.isArray(c[e]) && (C("Firing event: " + e),
                c[e].forEach(e=>{
                    "function" == typeof e && e(...t)
                }
                ))
            }
            function M(e, t) {
                Array.isArray(c[e]) && (C("Registering callback for event: " + e),
                c[e].push(t))
            }
            function U(e, t) {
                void 0 !== i[e] && (i[e] = t)
            }
            function C(...e) {
                1 == i.debug && console.log(...e)
            }
            function z(e, t) {
                var n;
                return function() {
                    var i = this
                      , o = arguments;
                    clearTimeout(n),
                    n = setTimeout(function() {
                        e.apply(i, o)
                    }, t)
                }
            }
            o.init({
                pid: l
            }),
            e.PSTNativeSDK = {
                init: S,
                on: M,
                stop: function() {
                    O(a.stopped)
                },
                restart: function(e) {
                    E = 0,
                    O(a.restarting, e)
                },
                setOption: U,
                debug: function(e) {
                    U("debug", e)
                }
            },
            1 == i.autoExecute && (C("Auto execute"),
            S())
        }
        )(window, document)
    },
    38: function(e, t, n) {
        const i = "https://ptm-dtt-01.pushtimize.workers.dev".split(",")
          , o = "https://api.trackpush.com/sdk/leave-site?pid={pid}&_ref={ref}&uid={uid}"
          , r = parseInt("500")
          , a = "https://docbao24h.com/danh-cho-ban?pid={pid}&_ref={ref}&uid={uid}"
          , c = "0"
          , s = ()=>location.href.includes("pst_debug=1")
          , l = (e,t)=>e.replace(/{pid}/g, encodeURIComponent(t)).replace(/{ref}/g, encodeURIComponent(location.href)).replace(/{uid}/g, encodeURIComponent(p()))
          , d = e=>{
            localStorage.setItem("pst_ud", e)
        }
          , p = ()=>{
            let e = localStorage.getItem("pst_ud");
            if (e && e.match(/^[0-9a-fA-F]{24}$/))
                return e;
            let t = ((e=Math,t=Date,n=16,i=(t=>e.floor(t).toString(n)))=>i(t.now() / 1e3) + " ".repeat(n).replace(/./g, ()=>i(e.random() * n)))();
            return d(t),
            t
        }
        ;
        e.exports = {
            init(e={}) {
                if (window.ptmTrackedUser || !"https://user.trackpush.com/browsing?pid={pid}&_ref={ref}&uid={uid}".startsWith("http"))
                    return;
                window.ptmTrackedUser = !0;
                let t = p();
                (e=>{
                    function t(t) {
                        if (null != t.state && "" != t.state)
                            return;
                        if (location.href.includes("#google_"))
                            return;
                        if ("1" == c)
                            return void location.replace(l(a, e));
                        if (window.ptmTrackedBackAction)
                            return void history.back();
                        let n = setTimeout(()=>{
                            history.back()
                        }
                        , isNaN(r) ? 500 : r);
                        fetch(l(o, e), {
                            mode: "cors"
                        }).then(e=>{
                            window.ptmTrackedBackAction = !0,
                            clearTimeout(n),
                            history.back()
                        }
                        ).catch(e=>{
                            clearTimeout(n),
                            history.back()
                        }
                        )
                    }
                    function n() {
                        history.pushState({
                            pst: 1
                        }, null, null),
                        window.removeEventListener("popstate", t),
                        window.addEventListener("popstate", t)
                    }
                    ("1" == c || s()) && o && o.startsWith("http") && (document.referrer && (document.referrer.startsWith(`https://${location.hostname}`) || document.referrer.startsWith(`http://${location.hostname}`)) || "function" == typeof history.pushState && (window.ptmHandledBackAction || (window.ptmHandledBackAction = !0,
                    window.removeEventListener("load", n),
                    "complete" != document.readyState ? window.addEventListener("load", n) : n())))
                }
                )(e.pid);
                let n = document.querySelector('meta[property="og:title"]')
                  , i = document.querySelector('meta[property="og:image"]')
                  , u = document.querySelector('meta[property="og:description"]')
                  , m = document.querySelector("meta[name=description]");
                fetch(l("https://user.trackpush.com/browsing?pid={pid}&_ref={ref}&uid={uid}", e.pid), {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        title: n ? n.getAttribute("content") : document.querySelector("title").innerText,
                        description: u ? u.getAttribute("content") : m ? m.getAttribute("content") : "",
                        thumbnail: i ? i.getAttribute("content") : null
                    })
                }).then(e=>e.text()).then(n=>{
                    "function" == typeof e.userApiCallback && e.userApiCallback(null, n),
                    n && n != t && d(n)
                }
                ).catch(t=>{
                    e.userApiCallback && e.userApiCallback(t)
                }
                )
            },
            getUserId: p,
            getIpInfo: ()=>new Promise(e=>{
                let t = (()=>i[(new Date).getTime() % i.length])();
                if (!t || !t.startsWith("https://"))
                    return void e(null);
                let n = {
                    found: 0,
                    country: "unknown",
                    city: "unknown"
                }
                  , o = new AbortController;
                fetch(t, {
                    signal: o.signal
                }).then(e=>200 == e.status ? e.text() : "").then(t=>{
                    let n = (t || "").split(",");
                    e({
                        found: 1,
                        country: n[0],
                        city: n[1]
                    })
                }
                ).catch(()=>e(n)),
                setTimeout(()=>{
                    e(n),
                    o.abort()
                }
                , 1800)
            }
            ),
            isDebug: s,
            alertDebug: e=>{
                s() && alert(e)
            }
            ,
            logDebug: (...e)=>{
                s() && console.log(...e)
            }
        }
    }
});
