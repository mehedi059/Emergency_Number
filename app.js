(function () {
  var D = window.SHOHAY;
  var S = { tab: "home", lang: "bn", cat: null, q: "", div: "", dist: "", upz: "" };
  var T = {
    bn: { app: "Emergency Number", home: "হোম", find: "জেলা", fav: "প্রিয়", about: "পরিচিতি", search: "নাম বা নাম্বার খুঁজুন", cats: "বিভাগ", sos: "জরুরি নাম্বার",
      back: "← ফিরে যান", div: "বিভাগ নির্বাচন করুন", dist: "জেলা নির্বাচন করুন", soon: "নাম্বার শীঘ্রই যোগ হবে", web: "অফিসিয়াল ওয়েবসাইট",
      nofav: "এখনও কিছু যোগ করা হয়নি। যেকোনো নাম্বারের পাশে ⭐ চাপলে এখানে জমা হবে।", nores: "কিছু পাওয়া যায়নি। অন্য শব্দে খুঁজে দেখুন।", upz: "সব উপজেলা", loc: "আমার অবস্থান SMS-এ পাঠান", locfail: "অবস্থান পাওয়া যায়নি। ফোনের লোকেশন চালু করে অ্যাপকে অনুমতি দিন।", pick: "বিভাগ ও জেলা বেছে নিন, সেই জেলার নাম্বার দেখাবে।",
      dev: "ডেভেলপার", err: "ভুল নাম্বার জানান", note: "নাম্বার বদলে যেতে পারে। জরুরি সময়ে ৯৯৯-এ কল করুন।", ver: "সংস্করণ" },
    en: { app: "Emergency Number", home: "Home", find: "District", fav: "Saved", about: "About", search: "Search name or number", cats: "Categories", sos: "Emergency numbers",
      back: "← Back", div: "Select division", dist: "Select district", soon: "Number coming soon", web: "Official website",
      nofav: "Nothing saved yet. Tap ⭐ next to any number to keep it here.", nores: "No results. Try a different word.", upz: "All upazilas", loc: "Send my location by SMS", locfail: "Could not get your location. Turn on location and allow the app.", pick: "Choose a division and district to see its numbers.",
      dev: "Developer", err: "Report a wrong number", note: "Numbers may change. In an emergency, call 999.", ver: "Version" }
  };
  var favs = [];
  try { favs = JSON.parse(localStorage.getItem("shohay_favs") || "[]"); } catch (e) {}
  function saveFavs() { try { localStorage.setItem("shohay_favs", JSON.stringify(favs)); } catch (e) {} }
  function t(k) { return T[S.lang][k]; }
  function nm(o) { return S.lang === "bn" ? o.b : o.e; }
  function alt(o) { return S.lang === "bn" ? o.e : o.b; }
  function tel(p) { return "tel:" + p.replace(/[^\d+]/g, ""); }

  var all = [];
  D.categories.forEach(function (c) { c.items.forEach(function (x) { all.push(x); }); });
  D.districts.forEach(function (d) { d.items.forEach(function (x) { all.push(x); }); });

  function row(x) {
    var on = favs.indexOf(x.e) > -1;
    var main = x.p
      ? '<div class="num">' + x.p + "</div>"
      : '<div class="soon">' + t("soon") + "</div>";
    var web = x.w ? '<a class="web" href="' + x.w + '" target="_blank" rel="noopener">' + t("web") + "</a>" : "";
    return '<div class="row"><button class="star' + (on ? " on" : "") + '" data-fav="' + x.e + '">' + (on ? "★" : "☆") + "</button>" +
      '<div class="n"><div>' + nm(x) + "</div><small>" + alt(x) + "</small>" + (x.n ? '<div class="who">👤 ' + x.n + "</div>" : "") + main + web + "</div>" +
      (x.p ? '<a class="call" href="' + tel(x.p) + '" aria-label="Call">📞</a>' : "") + "</div>";
  }
  function list(items) { return items.map(row).join(""); }
  function glist(items) {
    var last = null, out = "";
    items.forEach(function (x) {
      var g = x.g ? nm(x.g) : "";
      if (g !== last) { if (g) out += "<h2>" + g + "</h2>"; last = g; }
      out += row(x);
    });
    return out;
  }
  function foot() {
    return '<div class="foot">' + t("note") + "<br>" + t("dev") + ": Md. Mehedi Hasan</div>";
  }

  function homeView() {
    var h = '<input id="q" type="search" placeholder="' + t("search") + '" value="' + S.q.replace(/"/g, "") + '">';
    if (S.q.trim()) {
      var q = S.q.trim().toLowerCase();
      var r = all.filter(function (x) {
        return (x.b + " " + x.e + " " + (x.n || "") + " " + x.p).toLowerCase().indexOf(q) > -1;
      });
      return h + (r.length ? list(r) : '<div class="empty">' + t("nores") + "</div>");
    }
    if (S.cat) {
      var c = D.categories.filter(function (c) { return c.id === S.cat; })[0];
      return '<button class="back" data-back="1">' + t("back") + "</button><h2>" + c.i + " " + nm(c) + "</h2>" + list(c.items) + foot();
    }
    var sos = all.filter(function (x) { return x.s; }).map(function (x) {
      return '<a href="' + tel(x.p) + '"><b>' + x.p + "</b><span>" + nm(x) + "</span></a>";
    }).join("");
    var cats = D.categories.map(function (c) {
      return '<button data-cat="' + c.id + '"><i>' + c.i + "</i>" + nm(c) + "</button>";
    }).join("");
    return h + "<h2>" + t("sos") + '</h2><div class="sos">' + sos + '</div><button class="locbtn" data-loc="1">📍 ' + t("loc") + "</button><h2>" + t("cats") + '</h2><div class="cats">' + cats + "</div>" + foot();
  }

  function findView() {
    var divs = [], seen = {};
    D.districts.forEach(function (d) { if (!seen[d.div.e]) { seen[d.div.e] = 1; divs.push(d.div); } });
    var h = '<select id="div"><option value="">' + t("div") + "</option>" +
      divs.map(function (d) { return '<option value="' + d.e + '"' + (S.div === d.e ? " selected" : "") + ">" + nm(d) + "</option>"; }).join("") + "</select>";
    var ds = D.districts.filter(function (d) { return d.div.e === S.div; });
    h += '<select id="dist"' + (S.div ? "" : " disabled") + '><option value="">' + t("dist") + "</option>" +
      ds.map(function (d) { return '<option value="' + d.e + '"' + (S.dist === d.e ? " selected" : "") + ">" + nm(d) + "</option>"; }).join("") + "</select>";
    var cur = ds.filter(function (d) { return d.e === S.dist; })[0];
    var items = cur ? cur.items : [];
    if (cur) {
      var us = [], sn = {};
      cur.items.forEach(function (x) { if (x.u && !sn[x.u.e]) { sn[x.u.e] = 1; us.push(x.u); } });
      if (us.length) {
        h += '<select id="upz"><option value="">' + t("upz") + "</option>" +
          us.map(function (u) { return '<option value="' + u.e + '"' + (S.upz === u.e ? " selected" : "") + ">" + nm(u) + "</option>"; }).join("") + "</select>";
      }
      if (S.upz) items = items.filter(function (x) { return x.u && x.u.e === S.upz; });
    }
    return h + (cur ? glist(items) : '<div class="empty">' + t("pick") + "</div>") + foot();
  }

  function favView() {
    var r = all.filter(function (x) { return favs.indexOf(x.e) > -1; });
    return r.length ? list(r) : '<div class="empty">' + t("nofav") + "</div>";
  }

  function aboutView() {
    return '<div class="about"><b style="font-size:20px">' + t("app") + "</b> · " + t("ver") + " " + D.version + "<br>" + t("dev") + ": <b>Md. Mehedi Hasan</b><br>" +
      '✉ <a href="mailto:mehedisub59@gmail.com">mehedisub59@gmail.com</a><br>' +
      '🌐 <a href="https://facebook.com/mehedi.am">facebook.com/mehedi.am</a><br>' +
      '💻 <a href="https://github.com/mehedi059">github.com/mehedi059</a><br><br>' +
      '<a href="mailto:mehedisub59@gmail.com?subject=Emergency%20Number%20wrong%20number">' + t("err") + "</a></div>" + foot();
  }

  function render() {
    document.getElementById("ttl").textContent = t("app");
    document.getElementById("lang").textContent = S.lang === "bn" ? "EN" : "বাংলা";
    var v = { home: homeView, find: findView, fav: favView, about: aboutView }[S.tab]();
    var m = document.getElementById("app");
    m.innerHTML = v;
    var tabs = [["home", "🏠"], ["find", "📍"], ["fav", "⭐"], ["about", "ℹ️"]];
    document.getElementById("nav").innerHTML = tabs.map(function (x) {
      return '<button data-tab="' + x[0] + '" class="' + (S.tab === x[0] ? "on" : "") + '"><b>' + x[1] + "</b>" + t(x[0]) + "</button>";
    }).join("");
    var q = document.getElementById("q");
    if (q) q.oninput = function () {
      S.q = q.value; var pos = q.selectionStart; render();
      var n = document.getElementById("q"); n.focus(); n.setSelectionRange(pos, pos);
    };
    var dv = document.getElementById("div");
    if (dv) dv.onchange = function () { S.div = dv.value; S.dist = ""; S.upz = ""; render(); };
    var ds = document.getElementById("dist");
    if (ds) ds.onchange = function () { S.dist = ds.value; S.upz = ""; render(); };
    var uz = document.getElementById("upz");
    if (uz) uz.onchange = function () { S.upz = uz.value; render(); };
  }

  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-tab],[data-cat],[data-back],[data-fav],[data-loc],#lang");
    if (!el) return;
    if (el.id === "lang") S.lang = S.lang === "bn" ? "en" : "bn";
    else if (el.dataset.tab) { S.tab = el.dataset.tab; S.cat = null; S.q = ""; }
    else if (el.dataset.cat) S.cat = el.dataset.cat;
    else if (el.dataset.back) S.cat = null;
    else if (el.dataset.loc) { shareLoc(); return; }
    else if (el.dataset.fav) {
      var i = favs.indexOf(el.dataset.fav);
      if (i > -1) favs.splice(i, 1); else favs.push(el.dataset.fav);
      saveFavs();
    }
    var main = document.getElementById("app"), top = main.scrollTop;
    render();
    if (el.dataset.fav) main.scrollTop = top;
  });
  function plug(n) {
    var C = window.Capacitor;
    if (!C || (C.isNativePlatform && !C.isNativePlatform())) return null;
    try { return (C.Plugins && C.Plugins[n]) || (C.registerPlugin && C.registerPlugin(n)); } catch (e) { return null; }
  }
  function shareLoc() {
    var G = plug("Geolocation");
    function send(p) {
      var body = (S.lang === "bn" ? "আমি বিপদে আছি। আমার অবস্থান: " : "I need help. My location: ") +
        "https://maps.google.com/?q=" + p.coords.latitude.toFixed(6) + "," + p.coords.longitude.toFixed(6);
      window.location.href = "sms:?body=" + encodeURIComponent(body);
    }
    function fail() { alert(t("locfail")); }
    if (G) {
      G.requestPermissions().then(function () {
        return G.getCurrentPosition({ enableHighAccuracy: true, timeout: 15000 });
      }).then(send).catch(fail);
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(send, fail, { enableHighAccuracy: true, timeout: 15000 });
    } else fail();
  }

  var AppPlugin = plug("App");
  if (AppPlugin && AppPlugin.addListener) {
    AppPlugin.addListener("backButton", function () {
      if (S.tab === "home" && !S.cat && !S.q) AppPlugin.exitApp();
      else { S.tab = "home"; S.cat = null; S.q = ""; render(); }
    });
  }
  render();
})();
