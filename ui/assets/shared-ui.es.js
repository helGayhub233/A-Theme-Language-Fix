function us(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let r = 0; r < s.length; r++)
    n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const qi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ji = /* @__PURE__ */ us(qi);
function Sr(e) {
  return !!e || e === "";
}
function kn(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = Ie(s) ? Xi(s) : kn(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else {
    if (Ie(e))
      return e;
    if (fe(e))
      return e;
  }
}
const Gi = /;(?![^(]*\))/g, Ki = /:(.+)/;
function Xi(e) {
  const t = {};
  return e.split(Gi).forEach((n) => {
    if (n) {
      const s = n.split(Ki);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ie(e) {
  let t = "";
  if (Ie(e))
    t = e;
  else if (Y(e))
    for (let n = 0; n < e.length; n++) {
      const s = ie(e[n]);
      s && (t += s + " ");
    }
  else if (fe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const W = (e) => Ie(e) ? e : e == null ? "" : Y(e) || fe(e) && (e.toString === Or || !q(e.toString)) ? JSON.stringify(e, Cr, 2) : String(e), Cr = (e, t) => t && t.__v_isRef ? Cr(e, t.value) : Mt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
} : Mr(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : fe(t) && !Y(t) && !Dr(t) ? String(t) : t, ue = {}, Ct = [], Ye = () => {
}, Qi = () => !1, eo = /^on[^a-z]/, An = (e) => eo.test(e), hs = (e) => e.startsWith("onUpdate:"), Se = Object.assign, fs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, to = Object.prototype.hasOwnProperty, ee = (e, t) => to.call(e, t), Y = Array.isArray, Mt = (e) => Sn(e) === "[object Map]", Mr = (e) => Sn(e) === "[object Set]", q = (e) => typeof e == "function", Ie = (e) => typeof e == "string", ps = (e) => typeof e == "symbol", fe = (e) => e !== null && typeof e == "object", $r = (e) => fe(e) && q(e.then) && q(e.catch), Or = Object.prototype.toString, Sn = (e) => Or.call(e), no = (e) => Sn(e).slice(8, -1), Dr = (e) => Sn(e) === "[object Object]", ms = (e) => Ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, gn = /* @__PURE__ */ us(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Cn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, so = /-(\w)/g, ht = Cn((e) => e.replace(so, (t, n) => n ? n.toUpperCase() : "")), ro = /\B([A-Z])/g, nt = Cn((e) => e.replace(ro, "-$1").toLowerCase()), Lr = Cn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Pn = Cn((e) => e ? `on${Lr(e)}` : ""), Qt = (e, t) => !Object.is(e, t), Un = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, xn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Wn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let zs;
const io = () => zs || (zs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let Xe;
class oo {
  constructor(t = !1) {
    this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = Xe, !t && Xe && (this.index = (Xe.scopes || (Xe.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = Xe;
      try {
        return Xe = this, t();
      } finally {
        Xe = n;
      }
    }
  }
  on() {
    Xe = this;
  }
  off() {
    Xe = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this.active = !1;
    }
  }
}
function ao(e, t = Xe) {
  t && t.active && t.effects.push(e);
}
const gs = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Fr = (e) => (e.w & ft) > 0, Rr = (e) => (e.n & ft) > 0, lo = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= ft;
}, co = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      Fr(r) && !Rr(r) ? r.delete(e) : t[n++] = r, r.w &= ~ft, r.n &= ~ft;
    }
    t.length = n;
  }
}, qn = /* @__PURE__ */ new WeakMap();
let Zt = 0, ft = 1;
const Jn = 30;
let je;
const Et = Symbol(""), Gn = Symbol("");
class ws {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, ao(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = je, n = ct;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = je, je = this, ct = !0, ft = 1 << ++Zt, Zt <= Jn ? lo(this) : Ys(this), this.fn();
    } finally {
      Zt <= Jn && co(this), ft = 1 << --Zt, je = this.parent, ct = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    je === this ? this.deferStop = !0 : this.active && (Ys(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ys(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let ct = !0;
const Pr = [];
function Pt() {
  Pr.push(ct), ct = !1;
}
function Ut() {
  const e = Pr.pop();
  ct = e === void 0 ? !0 : e;
}
function Re(e, t, n) {
  if (ct && je) {
    let s = qn.get(e);
    s || qn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = gs()), Ur(r);
  }
}
function Ur(e, t) {
  let n = !1;
  Zt <= Jn ? Rr(e) || (e.n |= ft, n = !Fr(e)) : n = !e.has(je), n && (e.add(je), je.deps.push(e));
}
function it(e, t, n, s, r, i) {
  const o = qn.get(e);
  if (!o)
    return;
  let a = [];
  if (t === "clear")
    a = [...o.values()];
  else if (n === "length" && Y(e))
    o.forEach((l, d) => {
      (d === "length" || d >= s) && a.push(l);
    });
  else
    switch (n !== void 0 && a.push(o.get(n)), t) {
      case "add":
        Y(e) ? ms(n) && a.push(o.get("length")) : (a.push(o.get(Et)), Mt(e) && a.push(o.get(Gn)));
        break;
      case "delete":
        Y(e) || (a.push(o.get(Et)), Mt(e) && a.push(o.get(Gn)));
        break;
      case "set":
        Mt(e) && a.push(o.get(Et));
        break;
    }
  if (a.length === 1)
    a[0] && Kn(a[0]);
  else {
    const l = [];
    for (const d of a)
      d && l.push(...d);
    Kn(gs(l));
  }
}
function Kn(e, t) {
  const n = Y(e) ? e : [...e];
  for (const s of n)
    s.computed && Zs(s);
  for (const s of n)
    s.computed || Zs(s);
}
function Zs(e, t) {
  (e !== je || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const uo = /* @__PURE__ */ us("__proto__,__v_isRef,__isVue"), Br = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ps)
), ho = /* @__PURE__ */ bs(), fo = /* @__PURE__ */ bs(!1, !0), po = /* @__PURE__ */ bs(!0), Ws = /* @__PURE__ */ mo();
function mo() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = oe(this);
      for (let i = 0, o = this.length; i < o; i++)
        Re(s, "get", i + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(oe)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Pt();
      const s = oe(this)[t].apply(this, n);
      return Ut(), s;
    };
  }), e;
}
function bs(e = !1, t = !1) {
  return function(s, r, i) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && i === (e ? t ? Mo : Yr : t ? zr : Hr).get(s))
      return s;
    const o = Y(s);
    if (!e && o && ee(Ws, r))
      return Reflect.get(Ws, r, i);
    const a = Reflect.get(s, r, i);
    return (ps(r) ? Br.has(r) : uo(r)) || (e || Re(s, "get", r), t) ? a : Ee(a) ? o && ms(r) ? a : a.value : fe(a) ? e ? Zr(a) : _s(a) : a;
  };
}
const go = /* @__PURE__ */ Vr(), wo = /* @__PURE__ */ Vr(!0);
function Vr(e = !1) {
  return function(n, s, r, i) {
    let o = n[s];
    if (Dt(o) && Ee(o) && !Ee(r))
      return !1;
    if (!e && (!vn(r) && !Dt(r) && (o = oe(o), r = oe(r)), !Y(n) && Ee(o) && !Ee(r)))
      return o.value = r, !0;
    const a = Y(n) && ms(s) ? Number(s) < n.length : ee(n, s), l = Reflect.set(n, s, r, i);
    return n === oe(i) && (a ? Qt(r, o) && it(n, "set", s, r) : it(n, "add", s, r)), l;
  };
}
function bo(e, t) {
  const n = ee(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && it(e, "delete", t, void 0), s;
}
function xo(e, t) {
  const n = Reflect.has(e, t);
  return (!ps(t) || !Br.has(t)) && Re(e, "has", t), n;
}
function vo(e) {
  return Re(e, "iterate", Y(e) ? "length" : Et), Reflect.ownKeys(e);
}
const jr = {
  get: ho,
  set: go,
  deleteProperty: bo,
  has: xo,
  ownKeys: vo
}, _o = {
  get: po,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, yo = /* @__PURE__ */ Se({}, jr, {
  get: fo,
  set: wo
}), xs = (e) => e, Mn = (e) => Reflect.getPrototypeOf(e);
function dn(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = oe(e), i = oe(t);
  n || (t !== i && Re(r, "get", t), Re(r, "get", i));
  const { has: o } = Mn(r), a = s ? xs : n ? Es : en;
  if (o.call(r, t))
    return a(e.get(t));
  if (o.call(r, i))
    return a(e.get(i));
  e !== r && e.get(t);
}
function un(e, t = !1) {
  const n = this.__v_raw, s = oe(n), r = oe(e);
  return t || (e !== r && Re(s, "has", e), Re(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function hn(e, t = !1) {
  return e = e.__v_raw, !t && Re(oe(e), "iterate", Et), Reflect.get(e, "size", e);
}
function qs(e) {
  e = oe(e);
  const t = oe(this);
  return Mn(t).has.call(t, e) || (t.add(e), it(t, "add", e, e)), this;
}
function Js(e, t) {
  t = oe(t);
  const n = oe(this), { has: s, get: r } = Mn(n);
  let i = s.call(n, e);
  i || (e = oe(e), i = s.call(n, e));
  const o = r.call(n, e);
  return n.set(e, t), i ? Qt(t, o) && it(n, "set", e, t) : it(n, "add", e, t), this;
}
function Gs(e) {
  const t = oe(this), { has: n, get: s } = Mn(t);
  let r = n.call(t, e);
  r || (e = oe(e), r = n.call(t, e)), s && s.call(t, e);
  const i = t.delete(e);
  return r && it(t, "delete", e, void 0), i;
}
function Ks() {
  const e = oe(this), t = e.size !== 0, n = e.clear();
  return t && it(e, "clear", void 0, void 0), n;
}
function fn(e, t) {
  return function(s, r) {
    const i = this, o = i.__v_raw, a = oe(o), l = t ? xs : e ? Es : en;
    return !e && Re(a, "iterate", Et), o.forEach((d, h) => s.call(r, l(d), l(h), i));
  };
}
function pn(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = oe(r), o = Mt(i), a = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, d = r[e](...s), h = n ? xs : t ? Es : en;
    return !t && Re(i, "iterate", l ? Gn : Et), {
      next() {
        const { value: f, done: w } = d.next();
        return w ? { value: f, done: w } : {
          value: a ? [h(f[0]), h(f[1])] : h(f),
          done: w
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function at(e) {
  return function(...t) {
    return e === "delete" ? !1 : this;
  };
}
function Eo() {
  const e = {
    get(i) {
      return dn(this, i);
    },
    get size() {
      return hn(this);
    },
    has: un,
    add: qs,
    set: Js,
    delete: Gs,
    clear: Ks,
    forEach: fn(!1, !1)
  }, t = {
    get(i) {
      return dn(this, i, !1, !0);
    },
    get size() {
      return hn(this);
    },
    has: un,
    add: qs,
    set: Js,
    delete: Gs,
    clear: Ks,
    forEach: fn(!1, !0)
  }, n = {
    get(i) {
      return dn(this, i, !0);
    },
    get size() {
      return hn(this, !0);
    },
    has(i) {
      return un.call(this, i, !0);
    },
    add: at("add"),
    set: at("set"),
    delete: at("delete"),
    clear: at("clear"),
    forEach: fn(!0, !1)
  }, s = {
    get(i) {
      return dn(this, i, !0, !0);
    },
    get size() {
      return hn(this, !0);
    },
    has(i) {
      return un.call(this, i, !0);
    },
    add: at("add"),
    set: at("set"),
    delete: at("delete"),
    clear: at("clear"),
    forEach: fn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    e[i] = pn(i, !1, !1), n[i] = pn(i, !0, !1), t[i] = pn(i, !1, !0), s[i] = pn(i, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [Io, No, To, ko] = /* @__PURE__ */ Eo();
function vs(e, t) {
  const n = t ? e ? ko : To : e ? No : Io;
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(ee(n, r) && r in s ? n : s, r, i);
}
const Ao = {
  get: /* @__PURE__ */ vs(!1, !1)
}, So = {
  get: /* @__PURE__ */ vs(!1, !0)
}, Co = {
  get: /* @__PURE__ */ vs(!0, !1)
}, Hr = /* @__PURE__ */ new WeakMap(), zr = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), Mo = /* @__PURE__ */ new WeakMap();
function $o(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Oo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : $o(no(e));
}
function _s(e) {
  return Dt(e) ? e : ys(e, !1, jr, Ao, Hr);
}
function Do(e) {
  return ys(e, !1, yo, So, zr);
}
function Zr(e) {
  return ys(e, !0, _o, Co, Yr);
}
function ys(e, t, n, s, r) {
  if (!fe(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = Oo(e);
  if (o === 0)
    return e;
  const a = new Proxy(e, o === 2 ? s : n);
  return r.set(e, a), a;
}
function $t(e) {
  return Dt(e) ? $t(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Dt(e) {
  return !!(e && e.__v_isReadonly);
}
function vn(e) {
  return !!(e && e.__v_isShallow);
}
function Wr(e) {
  return $t(e) || Dt(e);
}
function oe(e) {
  const t = e && e.__v_raw;
  return t ? oe(t) : e;
}
function qr(e) {
  return xn(e, "__v_skip", !0), e;
}
const en = (e) => fe(e) ? _s(e) : e, Es = (e) => fe(e) ? Zr(e) : e;
function Jr(e) {
  ct && je && (e = oe(e), Ur(e.dep || (e.dep = gs())));
}
function Gr(e, t) {
  e = oe(e), e.dep && Kn(e.dep);
}
function Ee(e) {
  return !!(e && e.__v_isRef === !0);
}
function he(e) {
  return Lo(e, !1);
}
function Lo(e, t) {
  return Ee(e) ? e : new Fo(e, t);
}
class Fo {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : oe(t), this._value = n ? t : en(t);
  }
  get value() {
    return Jr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || vn(t) || Dt(t);
    t = n ? t : oe(t), Qt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : en(t), Gr(this));
  }
}
function b(e) {
  return Ee(e) ? e.value : e;
}
const Ro = {
  get: (e, t, n) => b(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return Ee(r) && !Ee(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Kr(e) {
  return $t(e) ? e : new Proxy(e, Ro);
}
function Xr(e) {
  const t = Y(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = tn(e, n);
  return t;
}
class Po {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
}
function tn(e, t, n) {
  const s = e[t];
  return Ee(s) ? s : new Po(e, t, n);
}
var Qr;
class Uo {
  constructor(t, n, s, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Qr] = !1, this._dirty = !0, this.effect = new ws(t, () => {
      this._dirty || (this._dirty = !0, Gr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const t = oe(this);
    return Jr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Qr = "__v_isReadonly";
function Bo(e, t, n = !1) {
  let s, r;
  const i = q(e);
  return i ? (s = e, r = Ye) : (s = e.get, r = e.set), new Uo(s, r, i || !r, n);
}
function dt(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (i) {
    $n(i, t, n);
  }
  return r;
}
function Ze(e, t, n, s) {
  if (q(e)) {
    const i = dt(e, t, n, s);
    return i && $r(i) && i.catch((o) => {
      $n(o, t, n);
    }), i;
  }
  const r = [];
  for (let i = 0; i < e.length; i++)
    r.push(Ze(e[i], t, n, s));
  return r;
}
function $n(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const o = t.proxy, a = n;
    for (; i; ) {
      const d = i.ec;
      if (d) {
        for (let h = 0; h < d.length; h++)
          if (d[h](e, o, a) === !1)
            return;
      }
      i = i.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      dt(l, null, 10, [e, o, a]);
      return;
    }
  }
  Vo(e, n, r, s);
}
function Vo(e, t, n, s = !0) {
  console.error(e);
}
let nn = !1, Xn = !1;
const Ae = [];
let et = 0;
const Ot = [];
let rt = null, _t = 0;
const ei = /* @__PURE__ */ Promise.resolve();
let Is = null;
function ti(e) {
  const t = Is || ei;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function jo(e) {
  let t = et + 1, n = Ae.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    sn(Ae[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function Ns(e) {
  (!Ae.length || !Ae.includes(e, nn && e.allowRecurse ? et + 1 : et)) && (e.id == null ? Ae.push(e) : Ae.splice(jo(e.id), 0, e), ni());
}
function ni() {
  !nn && !Xn && (Xn = !0, Is = ei.then(ri));
}
function Ho(e) {
  const t = Ae.indexOf(e);
  t > et && Ae.splice(t, 1);
}
function zo(e) {
  Y(e) ? Ot.push(...e) : (!rt || !rt.includes(e, e.allowRecurse ? _t + 1 : _t)) && Ot.push(e), ni();
}
function Xs(e, t = nn ? et + 1 : 0) {
  for (; t < Ae.length; t++) {
    const n = Ae[t];
    n && n.pre && (Ae.splice(t, 1), t--, n());
  }
}
function si(e) {
  if (Ot.length) {
    const t = [...new Set(Ot)];
    if (Ot.length = 0, rt) {
      rt.push(...t);
      return;
    }
    for (rt = t, rt.sort((n, s) => sn(n) - sn(s)), _t = 0; _t < rt.length; _t++)
      rt[_t]();
    rt = null, _t = 0;
  }
}
const sn = (e) => e.id == null ? 1 / 0 : e.id, Yo = (e, t) => {
  const n = sn(e) - sn(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function ri(e) {
  Xn = !1, nn = !0, Ae.sort(Yo);
  const t = Ye;
  try {
    for (et = 0; et < Ae.length; et++) {
      const n = Ae[et];
      n && n.active !== !1 && dt(n, null, 14);
    }
  } finally {
    et = 0, Ae.length = 0, si(), nn = !1, Is = null, (Ae.length || Ot.length) && ri();
  }
}
function Zo(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || ue;
  let r = n;
  const i = t.startsWith("update:"), o = i && t.slice(7);
  if (o && o in s) {
    const h = `${o === "modelValue" ? "model" : o}Modifiers`, { number: f, trim: w } = s[h] || ue;
    w && (r = n.map((v) => v.trim())), f && (r = n.map(Wn));
  }
  let a, l = s[a = Pn(t)] || s[a = Pn(ht(t))];
  !l && i && (l = s[a = Pn(nt(t))]), l && Ze(l, e, 6, r);
  const d = s[a + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, Ze(d, e, 6, r);
  }
}
function ii(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, a = !1;
  if (!q(e)) {
    const l = (d) => {
      const h = ii(d, t, !0);
      h && (a = !0, Se(o, h));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !i && !a ? (fe(e) && s.set(e, null), null) : (Y(i) ? i.forEach((l) => o[l] = null) : Se(o, i), fe(e) && s.set(e, o), o);
}
function On(e, t) {
  return !e || !An(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ee(e, t[0].toLowerCase() + t.slice(1)) || ee(e, nt(t)) || ee(e, t));
}
let Oe = null, oi = null;
function _n(e) {
  const t = Oe;
  return Oe = e, oi = e && e.type.__scopeId || null, t;
}
function Qn(e, t = Oe, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && ar(-1);
    const i = _n(t);
    let o;
    try {
      o = e(...r);
    } finally {
      _n(i), s._d && ar(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Bn(e) {
  const { type: t, vnode: n, proxy: s, withProxy: r, props: i, propsOptions: [o], slots: a, attrs: l, emit: d, render: h, renderCache: f, data: w, setupState: v, ctx: p, inheritAttrs: N } = e;
  let M, F;
  const K = _n(e);
  try {
    if (n.shapeFlag & 4) {
      const X = r || s;
      M = Qe(h.call(X, X, f, i, v, w, p)), F = l;
    } else {
      const X = t;
      M = Qe(X.length > 1 ? X(i, { attrs: l, slots: a, emit: d }) : X(i, null)), F = t.props ? l : Wo(l);
    }
  } catch (X) {
    Gt.length = 0, $n(X, e, 1), M = G(pt);
  }
  let Z = M;
  if (F && N !== !1) {
    const X = Object.keys(F), { shapeFlag: ne } = Z;
    X.length && ne & 7 && (o && X.some(hs) && (F = qo(F, o)), Z = Lt(Z, F));
  }
  return n.dirs && (Z = Lt(Z), Z.dirs = Z.dirs ? Z.dirs.concat(n.dirs) : n.dirs), n.transition && (Z.transition = n.transition), M = Z, _n(K), M;
}
const Wo = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || An(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, qo = (e, t) => {
  const n = {};
  for (const s in e)
    (!hs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Jo(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: a, patchFlag: l } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return s ? Qs(s, o, d) : !!o;
    if (l & 8) {
      const h = t.dynamicProps;
      for (let f = 0; f < h.length; f++) {
        const w = h[f];
        if (o[w] !== s[w] && !On(d, w))
          return !0;
      }
    }
  } else
    return (r || a) && (!a || !a.$stable) ? !0 : s === o ? !1 : s ? o ? Qs(s, o, d) : !0 : !!o;
  return !1;
}
function Qs(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !On(n, i))
      return !0;
  }
  return !1;
}
function Go({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Ko = (e) => e.__isSuspense;
function Xo(e, t) {
  t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : zo(e);
}
function Qo(e, t) {
  if (ye) {
    let n = ye.provides;
    const s = ye.parent && ye.parent.provides;
    s === n && (n = ye.provides = Object.create(s)), n[e] = t;
  }
}
function Vn(e, t, n = !1) {
  const s = ye || Oe;
  if (s) {
    const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && q(t) ? t.call(s.proxy) : t;
  }
}
function ea(e, t) {
  return Ts(e, null, { flush: "post" });
}
const er = {};
function ut(e, t, n) {
  return Ts(e, t, n);
}
function Ts(e, t, { immediate: n, deep: s, flush: r, onTrack: i, onTrigger: o } = ue) {
  const a = ye;
  let l, d = !1, h = !1;
  if (Ee(e) ? (l = () => e.value, d = vn(e)) : $t(e) ? (l = () => e, s = !0) : Y(e) ? (h = !0, d = e.some((F) => $t(F) || vn(F)), l = () => e.map((F) => {
    if (Ee(F))
      return F.value;
    if ($t(F))
      return At(F);
    if (q(F))
      return dt(F, a, 2);
  })) : q(e) ? t ? l = () => dt(e, a, 2) : l = () => {
    if (!(a && a.isUnmounted))
      return f && f(), Ze(e, a, 3, [w]);
  } : l = Ye, t && s) {
    const F = l;
    l = () => At(F());
  }
  let f, w = (F) => {
    f = M.onStop = () => {
      dt(F, a, 4);
    };
  };
  if (on)
    return w = Ye, t ? n && Ze(t, a, 3, [
      l(),
      h ? [] : void 0,
      w
    ]) : l(), Ye;
  let v = h ? [] : er;
  const p = () => {
    if (!!M.active)
      if (t) {
        const F = M.run();
        (s || d || (h ? F.some((K, Z) => Qt(K, v[Z])) : Qt(F, v))) && (f && f(), Ze(t, a, 3, [
          F,
          v === er ? void 0 : v,
          w
        ]), v = F);
      } else
        M.run();
  };
  p.allowRecurse = !!t;
  let N;
  r === "sync" ? N = p : r === "post" ? N = () => $e(p, a && a.suspense) : (p.pre = !0, a && (p.id = a.uid), N = () => Ns(p));
  const M = new ws(l, N);
  return t ? n ? p() : v = M.run() : r === "post" ? $e(M.run.bind(M), a && a.suspense) : M.run(), () => {
    M.stop(), a && a.scope && fs(a.scope.effects, M);
  };
}
function ta(e, t, n) {
  const s = this.proxy, r = Ie(e) ? e.includes(".") ? ai(s, e) : () => s[e] : e.bind(s, s);
  let i;
  q(t) ? i = t : (i = t.handler, n = t);
  const o = ye;
  Ft(this);
  const a = Ts(r, i.bind(s), n);
  return o ? Ft(o) : It(), a;
}
function ai(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function At(e, t) {
  if (!fe(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Ee(e))
    At(e.value, t);
  else if (Y(e))
    for (let n = 0; n < e.length; n++)
      At(e[n], t);
  else if (Mr(e) || Mt(e))
    e.forEach((n) => {
      At(n, t);
    });
  else if (Dr(e))
    for (const n in e)
      At(e[n], t);
  return e;
}
function Ne(e) {
  return q(e) ? { setup: e, name: e.name } : e;
}
const qt = (e) => !!e.type.__asyncLoader, li = (e) => e.type.__isKeepAlive;
function na(e, t) {
  ci(e, "a", t);
}
function sa(e, t) {
  ci(e, "da", t);
}
function ci(e, t, n = ye) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Dn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      li(r.parent.vnode) && ra(s, t, n, r), r = r.parent;
  }
}
function ra(e, t, n, s) {
  const r = Dn(t, e, s, !0);
  As(() => {
    fs(s[t], r);
  }, n);
}
function Dn(e, t, n = ye, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      Pt(), Ft(n);
      const a = Ze(t, n, e, o);
      return It(), Ut(), a;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const ot = (e) => (t, n = ye) => (!on || e === "sp") && Dn(e, (...s) => t(...s), n), ia = ot("bm"), cn = ot("m"), oa = ot("bu"), aa = ot("u"), ks = ot("bum"), As = ot("um"), la = ot("sp"), ca = ot("rtg"), da = ot("rtc");
function ua(e, t = ye) {
  Dn("ec", e, t);
}
function wt(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    i && (a.oldValue = i[o].value);
    let l = a.dir[s];
    l && (Pt(), Ze(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Ut());
  }
}
const ha = Symbol();
function He(e, t, n, s) {
  let r;
  const i = n && n[s];
  if (Y(e) || Ie(e)) {
    r = new Array(e.length);
    for (let o = 0, a = e.length; o < a; o++)
      r[o] = t(e[o], o, void 0, i && i[o]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, i && i[o]);
  } else if (fe(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (o, a) => t(o, a, void 0, i && i[a]));
    else {
      const o = Object.keys(e);
      r = new Array(o.length);
      for (let a = 0, l = o.length; a < l; a++) {
        const d = o[a];
        r[a] = t(e[d], d, a, i && i[a]);
      }
    }
  else
    r = [];
  return n && (n[s] = r), r;
}
function Ss(e, t, n = {}, s, r) {
  if (Oe.isCE || Oe.parent && qt(Oe.parent) && Oe.parent.isCE)
    return G("slot", t === "default" ? null : { name: t }, s && s());
  let i = e[t];
  i && i._c && (i._d = !1), E();
  const o = i && di(i(n)), a = Le(te, {
    key: n.key || o && o.key || `_${t}`
  }, o || (s ? s() : []), o && e._ === 1 ? 64 : -2);
  return !r && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), i && i._c && (i._d = !0), a;
}
function di(e) {
  return e.some((t) => vi(t) ? !(t.type === pt || t.type === te && !di(t.children)) : !0) ? e : null;
}
const es = (e) => e ? Ei(e) ? Ls(e) || e.proxy : es(e.parent) : null, yn = /* @__PURE__ */ Se(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => e.props,
  $attrs: (e) => e.attrs,
  $slots: (e) => e.slots,
  $refs: (e) => e.refs,
  $parent: (e) => es(e.parent),
  $root: (e) => es(e.root),
  $emit: (e) => e.emit,
  $options: (e) => Cs(e),
  $forceUpdate: (e) => e.f || (e.f = () => Ns(e.update)),
  $nextTick: (e) => e.n || (e.n = ti.bind(e.proxy)),
  $watch: (e) => ta.bind(e)
}), fa = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: a, appContext: l } = e;
    let d;
    if (t[0] !== "$") {
      const v = o[t];
      if (v !== void 0)
        switch (v) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (s !== ue && ee(s, t))
          return o[t] = 1, s[t];
        if (r !== ue && ee(r, t))
          return o[t] = 2, r[t];
        if ((d = e.propsOptions[0]) && ee(d, t))
          return o[t] = 3, i[t];
        if (n !== ue && ee(n, t))
          return o[t] = 4, n[t];
        ts && (o[t] = 0);
      }
    }
    const h = yn[t];
    let f, w;
    if (h)
      return t === "$attrs" && Re(e, "get", t), h(e);
    if ((f = a.__cssModules) && (f = f[t]))
      return f;
    if (n !== ue && ee(n, t))
      return o[t] = 4, n[t];
    if (w = l.config.globalProperties, ee(w, t))
      return w[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return r !== ue && ee(r, t) ? (r[t] = n, !0) : s !== ue && ee(s, t) ? (s[t] = n, !0) : ee(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i } }, o) {
    let a;
    return !!n[o] || e !== ue && ee(e, o) || t !== ue && ee(t, o) || (a = i[0]) && ee(a, o) || ee(s, o) || ee(yn, o) || ee(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ee(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let ts = !0;
function pa(e) {
  const t = Cs(e), n = e.proxy, s = e.ctx;
  ts = !1, t.beforeCreate && tr(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: i,
    methods: o,
    watch: a,
    provide: l,
    inject: d,
    created: h,
    beforeMount: f,
    mounted: w,
    beforeUpdate: v,
    updated: p,
    activated: N,
    deactivated: M,
    beforeDestroy: F,
    beforeUnmount: K,
    destroyed: Z,
    unmounted: X,
    render: ne,
    renderTracked: ge,
    renderTriggered: Pe,
    errorCaptured: ke,
    serverPrefetch: pe,
    expose: Q,
    inheritAttrs: We,
    components: mt,
    directives: H,
    filters: L
  } = t;
  if (d && ma(d, s, null, e.appContext.config.unwrapInjectedRef), o)
    for (const T in o) {
      const D = o[T];
      q(D) && (s[T] = D.bind(n));
    }
  if (r) {
    const T = r.call(n, n);
    fe(T) && (e.data = _s(T));
  }
  if (ts = !0, i)
    for (const T in i) {
      const D = i[T], V = q(D) ? D.bind(n, n) : q(D.get) ? D.get.bind(n, n) : Ye, se = !q(D) && q(D.set) ? D.set.bind(n) : Ye, ae = _e({
        get: V,
        set: se
      });
      Object.defineProperty(s, T, {
        enumerable: !0,
        configurable: !0,
        get: () => ae.value,
        set: (re) => ae.value = re
      });
    }
  if (a)
    for (const T in a)
      ui(a[T], s, n, T);
  if (l) {
    const T = q(l) ? l.call(n) : l;
    Reflect.ownKeys(T).forEach((D) => {
      Qo(D, T[D]);
    });
  }
  h && tr(h, e, "c");
  function P(T, D) {
    Y(D) ? D.forEach((V) => T(V.bind(n))) : D && T(D.bind(n));
  }
  if (P(ia, f), P(cn, w), P(oa, v), P(aa, p), P(na, N), P(sa, M), P(ua, ke), P(da, ge), P(ca, Pe), P(ks, K), P(As, X), P(la, pe), Y(Q))
    if (Q.length) {
      const T = e.exposed || (e.exposed = {});
      Q.forEach((D) => {
        Object.defineProperty(T, D, {
          get: () => n[D],
          set: (V) => n[D] = V
        });
      });
    } else
      e.exposed || (e.exposed = {});
  ne && e.render === Ye && (e.render = ne), We != null && (e.inheritAttrs = We), mt && (e.components = mt), H && (e.directives = H);
}
function ma(e, t, n = Ye, s = !1) {
  Y(e) && (e = ns(e));
  for (const r in e) {
    const i = e[r];
    let o;
    fe(i) ? "default" in i ? o = Vn(i.from || r, i.default, !0) : o = Vn(i.from || r) : o = Vn(i), Ee(o) && s ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (a) => o.value = a
    }) : t[r] = o;
  }
}
function tr(e, t, n) {
  Ze(Y(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ui(e, t, n, s) {
  const r = s.includes(".") ? ai(n, s) : () => n[s];
  if (Ie(e)) {
    const i = t[e];
    q(i) && ut(r, i);
  } else if (q(e))
    ut(r, e.bind(n));
  else if (fe(e))
    if (Y(e))
      e.forEach((i) => ui(i, t, n, s));
    else {
      const i = q(e.handler) ? e.handler.bind(n) : t[e.handler];
      q(i) && ut(r, i, e);
    }
}
function Cs(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: i, config: { optionMergeStrategies: o } } = e.appContext, a = i.get(t);
  let l;
  return a ? l = a : !r.length && !n && !s ? l = t : (l = {}, r.length && r.forEach((d) => En(l, d, o, !0)), En(l, t, o)), fe(t) && i.set(t, l), l;
}
function En(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && En(e, i, n, !0), r && r.forEach((o) => En(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const a = ga[o] || n && n[o];
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const ga = {
  data: nr,
  props: xt,
  emits: xt,
  methods: xt,
  computed: xt,
  beforeCreate: Me,
  created: Me,
  beforeMount: Me,
  mounted: Me,
  beforeUpdate: Me,
  updated: Me,
  beforeDestroy: Me,
  beforeUnmount: Me,
  destroyed: Me,
  unmounted: Me,
  activated: Me,
  deactivated: Me,
  errorCaptured: Me,
  serverPrefetch: Me,
  components: xt,
  directives: xt,
  watch: ba,
  provide: nr,
  inject: wa
};
function nr(e, t) {
  return t ? e ? function() {
    return Se(q(e) ? e.call(this, this) : e, q(t) ? t.call(this, this) : t);
  } : t : e;
}
function wa(e, t) {
  return xt(ns(e), ns(t));
}
function ns(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Me(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function xt(e, t) {
  return e ? Se(Se(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function ba(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Se(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Me(e[s], t[s]);
  return n;
}
function xa(e, t, n, s = !1) {
  const r = {}, i = {};
  xn(i, Ln, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), hi(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : Do(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function va(e, t, n, s) {
  const { props: r, attrs: i, vnode: { patchFlag: o } } = e, a = oe(r), [l] = e.propsOptions;
  let d = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const h = e.vnode.dynamicProps;
      for (let f = 0; f < h.length; f++) {
        let w = h[f];
        if (On(e.emitsOptions, w))
          continue;
        const v = t[w];
        if (l)
          if (ee(i, w))
            v !== i[w] && (i[w] = v, d = !0);
          else {
            const p = ht(w);
            r[p] = ss(l, a, p, v, e, !1);
          }
        else
          v !== i[w] && (i[w] = v, d = !0);
      }
    }
  } else {
    hi(e, t, r, i) && (d = !0);
    let h;
    for (const f in a)
      (!t || !ee(t, f) && ((h = nt(f)) === f || !ee(t, h))) && (l ? n && (n[f] !== void 0 || n[h] !== void 0) && (r[f] = ss(l, a, f, void 0, e, !0)) : delete r[f]);
    if (i !== a)
      for (const f in i)
        (!t || !ee(t, f) && !0) && (delete i[f], d = !0);
  }
  d && it(e, "set", "$attrs");
}
function hi(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, a;
  if (t)
    for (let l in t) {
      if (gn(l))
        continue;
      const d = t[l];
      let h;
      r && ee(r, h = ht(l)) ? !i || !i.includes(h) ? n[h] = d : (a || (a = {}))[h] = d : On(e.emitsOptions, l) || (!(l in s) || d !== s[l]) && (s[l] = d, o = !0);
    }
  if (i) {
    const l = oe(n), d = a || ue;
    for (let h = 0; h < i.length; h++) {
      const f = i[h];
      n[f] = ss(r, l, f, d[f], e, !ee(d, f));
    }
  }
  return o;
}
function ss(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const a = ee(o, "default");
    if (a && s === void 0) {
      const l = o.default;
      if (o.type !== Function && q(l)) {
        const { propsDefaults: d } = r;
        n in d ? s = d[n] : (Ft(r), s = d[n] = l.call(null, t), It());
      } else
        s = l;
    }
    o[0] && (i && !a ? s = !1 : o[1] && (s === "" || s === nt(n)) && (s = !0));
  }
  return s;
}
function fi(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, a = [];
  let l = !1;
  if (!q(e)) {
    const h = (f) => {
      l = !0;
      const [w, v] = fi(f, t, !0);
      Se(o, w), v && a.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!i && !l)
    return fe(e) && s.set(e, Ct), Ct;
  if (Y(i))
    for (let h = 0; h < i.length; h++) {
      const f = ht(i[h]);
      sr(f) && (o[f] = ue);
    }
  else if (i)
    for (const h in i) {
      const f = ht(h);
      if (sr(f)) {
        const w = i[h], v = o[f] = Y(w) || q(w) ? { type: w } : w;
        if (v) {
          const p = or(Boolean, v.type), N = or(String, v.type);
          v[0] = p > -1, v[1] = N < 0 || p < N, (p > -1 || ee(v, "default")) && a.push(f);
        }
      }
    }
  const d = [o, a];
  return fe(e) && s.set(e, d), d;
}
function sr(e) {
  return e[0] !== "$";
}
function rr(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function ir(e, t) {
  return rr(e) === rr(t);
}
function or(e, t) {
  return Y(t) ? t.findIndex((n) => ir(n, e)) : q(t) && ir(t, e) ? 0 : -1;
}
const pi = (e) => e[0] === "_" || e === "$stable", Ms = (e) => Y(e) ? e.map(Qe) : [Qe(e)], _a = (e, t, n) => {
  if (t._n)
    return t;
  const s = Qn((...r) => Ms(t(...r)), n);
  return s._c = !1, s;
}, mi = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (pi(r))
      continue;
    const i = e[r];
    if (q(i))
      t[r] = _a(r, i, s);
    else if (i != null) {
      const o = Ms(i);
      t[r] = () => o;
    }
  }
}, gi = (e, t) => {
  const n = Ms(t);
  e.slots.default = () => n;
}, ya = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = oe(t), xn(t, "_", n)) : mi(t, e.slots = {});
  } else
    e.slots = {}, t && gi(e, t);
  xn(e.slots, Ln, 1);
}, Ea = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = ue;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? i = !1 : (Se(r, t), !n && a === 1 && delete r._) : (i = !t.$stable, mi(t, r)), o = t;
  } else
    t && (gi(e, t), o = { default: 1 });
  if (i)
    for (const a in r)
      !pi(a) && !(a in o) && delete r[a];
};
function wi() {
  return {
    app: null,
    config: {
      isNativeTag: Qi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ia = 0;
function Na(e, t) {
  return function(s, r = null) {
    q(s) || (s = Object.assign({}, s)), r != null && !fe(r) && (r = null);
    const i = wi(), o = /* @__PURE__ */ new Set();
    let a = !1;
    const l = i.app = {
      _uid: Ia++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: ja,
      get config() {
        return i.config;
      },
      set config(d) {
      },
      use(d, ...h) {
        return o.has(d) || (d && q(d.install) ? (o.add(d), d.install(l, ...h)) : q(d) && (o.add(d), d(l, ...h))), l;
      },
      mixin(d) {
        return i.mixins.includes(d) || i.mixins.push(d), l;
      },
      component(d, h) {
        return h ? (i.components[d] = h, l) : i.components[d];
      },
      directive(d, h) {
        return h ? (i.directives[d] = h, l) : i.directives[d];
      },
      mount(d, h, f) {
        if (!a) {
          const w = G(s, r);
          return w.appContext = i, h && t ? t(w, d) : e(w, d, f), a = !0, l._container = d, d.__vue_app__ = l, Ls(w.component) || w.component.proxy;
        }
      },
      unmount() {
        a && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(d, h) {
        return i.provides[d] = h, l;
      }
    };
    return l;
  };
}
function rs(e, t, n, s, r = !1) {
  if (Y(e)) {
    e.forEach((w, v) => rs(w, t && (Y(t) ? t[v] : t), n, s, r));
    return;
  }
  if (qt(s) && !r)
    return;
  const i = s.shapeFlag & 4 ? Ls(s.component) || s.component.proxy : s.el, o = r ? null : i, { i: a, r: l } = e, d = t && t.r, h = a.refs === ue ? a.refs = {} : a.refs, f = a.setupState;
  if (d != null && d !== l && (Ie(d) ? (h[d] = null, ee(f, d) && (f[d] = null)) : Ee(d) && (d.value = null)), q(l))
    dt(l, a, 12, [o, h]);
  else {
    const w = Ie(l), v = Ee(l);
    if (w || v) {
      const p = () => {
        if (e.f) {
          const N = w ? ee(f, l) ? f[l] : h[l] : l.value;
          r ? Y(N) && fs(N, i) : Y(N) ? N.includes(i) || N.push(i) : w ? (h[l] = [i], ee(f, l) && (f[l] = h[l])) : (l.value = [i], e.k && (h[e.k] = l.value));
        } else
          w ? (h[l] = o, ee(f, l) && (f[l] = o)) : v && (l.value = o, e.k && (h[e.k] = o));
      };
      o ? (p.id = -1, $e(p, n)) : p();
    }
  }
}
const $e = Xo;
function Ta(e) {
  return ka(e);
}
function ka(e, t) {
  const n = io();
  n.__VUE__ = !0;
  const { insert: s, remove: r, patchProp: i, createElement: o, createText: a, createComment: l, setText: d, setElementText: h, parentNode: f, nextSibling: w, setScopeId: v = Ye, insertStaticContent: p } = e, N = (c, u, m, y = null, _ = null, S = null, O = !1, k = null, C = !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !Ht(c, u) && (y = Je(c), re(c, _, S, !0), c = null), u.patchFlag === -2 && (C = !1, u.dynamicChildren = null);
    const { type: I, ref: U, shapeFlag: R } = u;
    switch (I) {
      case $s:
        M(c, u, m, y);
        break;
      case pt:
        F(c, u, m, y);
        break;
      case Jt:
        c == null && K(u, m, y, O);
        break;
      case te:
        mt(c, u, m, y, _, S, O, k, C);
        break;
      default:
        R & 1 ? ne(c, u, m, y, _, S, O, k, C) : R & 6 ? H(c, u, m, y, _, S, O, k, C) : (R & 64 || R & 128) && I.process(c, u, m, y, _, S, O, k, C, me);
    }
    U != null && _ && rs(U, c && c.ref, S, u || c, !u);
  }, M = (c, u, m, y) => {
    if (c == null)
      s(u.el = a(u.children), m, y);
    else {
      const _ = u.el = c.el;
      u.children !== c.children && d(_, u.children);
    }
  }, F = (c, u, m, y) => {
    c == null ? s(u.el = l(u.children || ""), m, y) : u.el = c.el;
  }, K = (c, u, m, y) => {
    [c.el, c.anchor] = p(c.children, u, m, y, c.el, c.anchor);
  }, Z = ({ el: c, anchor: u }, m, y) => {
    let _;
    for (; c && c !== u; )
      _ = w(c), s(c, m, y), c = _;
    s(u, m, y);
  }, X = ({ el: c, anchor: u }) => {
    let m;
    for (; c && c !== u; )
      m = w(c), r(c), c = m;
    r(u);
  }, ne = (c, u, m, y, _, S, O, k, C) => {
    O = O || u.type === "svg", c == null ? ge(u, m, y, _, S, O, k, C) : pe(c, u, _, S, O, k, C);
  }, ge = (c, u, m, y, _, S, O, k) => {
    let C, I;
    const { type: U, props: R, shapeFlag: B, transition: z, dirs: J } = c;
    if (C = c.el = o(c.type, S, R && R.is, R), B & 8 ? h(C, c.children) : B & 16 && ke(c.children, C, null, y, _, S && U !== "foreignObject", O, k), J && wt(c, null, y, "created"), R) {
      for (const le in R)
        le !== "value" && !gn(le) && i(C, le, null, R[le], S, c.children, y, _, Ce);
      "value" in R && i(C, "value", null, R.value), (I = R.onVnodeBeforeMount) && Ke(I, y, c);
    }
    Pe(C, c, c.scopeId, O, y), J && wt(c, null, y, "beforeMount");
    const de = (!_ || _ && !_.pendingBranch) && z && !z.persisted;
    de && z.beforeEnter(C), s(C, u, m), ((I = R && R.onVnodeMounted) || de || J) && $e(() => {
      I && Ke(I, y, c), de && z.enter(C), J && wt(c, null, y, "mounted");
    }, _);
  }, Pe = (c, u, m, y, _) => {
    if (m && v(c, m), y)
      for (let S = 0; S < y.length; S++)
        v(c, y[S]);
    if (_) {
      let S = _.subTree;
      if (u === S) {
        const O = _.vnode;
        Pe(c, O, O.scopeId, O.slotScopeIds, _.parent);
      }
    }
  }, ke = (c, u, m, y, _, S, O, k, C = 0) => {
    for (let I = C; I < c.length; I++) {
      const U = c[I] = k ? lt(c[I]) : Qe(c[I]);
      N(null, U, u, m, y, _, S, O, k);
    }
  }, pe = (c, u, m, y, _, S, O) => {
    const k = u.el = c.el;
    let { patchFlag: C, dynamicChildren: I, dirs: U } = u;
    C |= c.patchFlag & 16;
    const R = c.props || ue, B = u.props || ue;
    let z;
    m && bt(m, !1), (z = B.onVnodeBeforeUpdate) && Ke(z, m, u, c), U && wt(u, c, m, "beforeUpdate"), m && bt(m, !0);
    const J = _ && u.type !== "foreignObject";
    if (I ? Q(c.dynamicChildren, I, k, m, y, J, S) : O || D(c, u, k, null, m, y, J, S, !1), C > 0) {
      if (C & 16)
        We(k, u, R, B, m, y, _);
      else if (C & 2 && R.class !== B.class && i(k, "class", null, B.class, _), C & 4 && i(k, "style", R.style, B.style, _), C & 8) {
        const de = u.dynamicProps;
        for (let le = 0; le < de.length; le++) {
          const we = de[le], Ve = R[we], kt = B[we];
          (kt !== Ve || we === "value") && i(k, we, Ve, kt, _, c.children, m, y, Ce);
        }
      }
      C & 1 && c.children !== u.children && h(k, u.children);
    } else
      !O && I == null && We(k, u, R, B, m, y, _);
    ((z = B.onVnodeUpdated) || U) && $e(() => {
      z && Ke(z, m, u, c), U && wt(u, c, m, "updated");
    }, y);
  }, Q = (c, u, m, y, _, S, O) => {
    for (let k = 0; k < u.length; k++) {
      const C = c[k], I = u[k], U = C.el && (C.type === te || !Ht(C, I) || C.shapeFlag & 70) ? f(C.el) : m;
      N(C, I, U, null, y, _, S, O, !0);
    }
  }, We = (c, u, m, y, _, S, O) => {
    if (m !== y) {
      if (m !== ue)
        for (const k in m)
          !gn(k) && !(k in y) && i(c, k, m[k], null, O, u.children, _, S, Ce);
      for (const k in y) {
        if (gn(k))
          continue;
        const C = y[k], I = m[k];
        C !== I && k !== "value" && i(c, k, I, C, O, u.children, _, S, Ce);
      }
      "value" in y && i(c, "value", m.value, y.value);
    }
  }, mt = (c, u, m, y, _, S, O, k, C) => {
    const I = u.el = c ? c.el : a(""), U = u.anchor = c ? c.anchor : a("");
    let { patchFlag: R, dynamicChildren: B, slotScopeIds: z } = u;
    z && (k = k ? k.concat(z) : z), c == null ? (s(I, m, y), s(U, m, y), ke(u.children, m, U, _, S, O, k, C)) : R > 0 && R & 64 && B && c.dynamicChildren ? (Q(c.dynamicChildren, B, m, _, S, O, k), (u.key != null || _ && u === _.subTree) && bi(c, u, !0)) : D(c, u, m, U, _, S, O, k, C);
  }, H = (c, u, m, y, _, S, O, k, C) => {
    u.slotScopeIds = k, c == null ? u.shapeFlag & 512 ? _.ctx.activate(u, m, y, O, C) : L(u, m, y, _, S, O, C) : $(c, u, C);
  }, L = (c, u, m, y, _, S, O) => {
    const k = c.component = Fa(c, y, _);
    if (li(c) && (k.ctx.renderer = me), Ra(k), k.asyncDep) {
      if (_ && _.registerDep(k, P), !c.el) {
        const C = k.subTree = G(pt);
        F(null, C, u, m);
      }
      return;
    }
    P(k, c, u, m, _, S, O);
  }, $ = (c, u, m) => {
    const y = u.component = c.component;
    if (Jo(c, u, m))
      if (y.asyncDep && !y.asyncResolved) {
        T(y, u, m);
        return;
      } else
        y.next = u, Ho(y.update), y.update();
    else
      u.el = c.el, y.vnode = u;
  }, P = (c, u, m, y, _, S, O) => {
    const k = () => {
      if (c.isMounted) {
        let { next: U, bu: R, u: B, parent: z, vnode: J } = c, de = U, le;
        bt(c, !1), U ? (U.el = J.el, T(c, U, O)) : U = J, R && Un(R), (le = U.props && U.props.onVnodeBeforeUpdate) && Ke(le, z, U, J), bt(c, !0);
        const we = Bn(c), Ve = c.subTree;
        c.subTree = we, N(
          Ve,
          we,
          f(Ve.el),
          Je(Ve),
          c,
          _,
          S
        ), U.el = we.el, de === null && Go(c, we.el), B && $e(B, _), (le = U.props && U.props.onVnodeUpdated) && $e(() => Ke(le, z, U, J), _);
      } else {
        let U;
        const { el: R, props: B } = u, { bm: z, m: J, parent: de } = c, le = qt(u);
        if (bt(c, !1), z && Un(z), !le && (U = B && B.onVnodeBeforeMount) && Ke(U, de, u), bt(c, !0), R && gt) {
          const we = () => {
            c.subTree = Bn(c), gt(R, c.subTree, c, _, null);
          };
          le ? u.type.__asyncLoader().then(
            () => !c.isUnmounted && we()
          ) : we();
        } else {
          const we = c.subTree = Bn(c);
          N(null, we, m, y, c, _, S), u.el = we.el;
        }
        if (J && $e(J, _), !le && (U = B && B.onVnodeMounted)) {
          const we = u;
          $e(() => Ke(U, de, we), _);
        }
        (u.shapeFlag & 256 || de && qt(de.vnode) && de.vnode.shapeFlag & 256) && c.a && $e(c.a, _), c.isMounted = !0, u = m = y = null;
      }
    }, C = c.effect = new ws(
      k,
      () => Ns(I),
      c.scope
    ), I = c.update = () => C.run();
    I.id = c.uid, bt(c, !0), I();
  }, T = (c, u, m) => {
    u.component = c;
    const y = c.vnode.props;
    c.vnode = u, c.next = null, va(c, u.props, y, m), Ea(c, u.children, m), Pt(), Xs(), Ut();
  }, D = (c, u, m, y, _, S, O, k, C = !1) => {
    const I = c && c.children, U = c ? c.shapeFlag : 0, R = u.children, { patchFlag: B, shapeFlag: z } = u;
    if (B > 0) {
      if (B & 128) {
        se(I, R, m, y, _, S, O, k, C);
        return;
      } else if (B & 256) {
        V(I, R, m, y, _, S, O, k, C);
        return;
      }
    }
    z & 8 ? (U & 16 && Ce(I, _, S), R !== I && h(m, R)) : U & 16 ? z & 16 ? se(I, R, m, y, _, S, O, k, C) : Ce(I, _, S, !0) : (U & 8 && h(m, ""), z & 16 && ke(R, m, y, _, S, O, k, C));
  }, V = (c, u, m, y, _, S, O, k, C) => {
    c = c || Ct, u = u || Ct;
    const I = c.length, U = u.length, R = Math.min(I, U);
    let B;
    for (B = 0; B < R; B++) {
      const z = u[B] = C ? lt(u[B]) : Qe(u[B]);
      N(c[B], z, m, null, _, S, O, k, C);
    }
    I > U ? Ce(c, _, S, !0, !1, R) : ke(u, m, y, _, S, O, k, C, R);
  }, se = (c, u, m, y, _, S, O, k, C) => {
    let I = 0;
    const U = u.length;
    let R = c.length - 1, B = U - 1;
    for (; I <= R && I <= B; ) {
      const z = c[I], J = u[I] = C ? lt(u[I]) : Qe(u[I]);
      if (Ht(z, J))
        N(z, J, m, null, _, S, O, k, C);
      else
        break;
      I++;
    }
    for (; I <= R && I <= B; ) {
      const z = c[R], J = u[B] = C ? lt(u[B]) : Qe(u[B]);
      if (Ht(z, J))
        N(z, J, m, null, _, S, O, k, C);
      else
        break;
      R--, B--;
    }
    if (I > R) {
      if (I <= B) {
        const z = B + 1, J = z < U ? u[z].el : y;
        for (; I <= B; )
          N(null, u[I] = C ? lt(u[I]) : Qe(u[I]), m, J, _, S, O, k, C), I++;
      }
    } else if (I > B)
      for (; I <= R; )
        re(c[I], _, S, !0), I++;
    else {
      const z = I, J = I, de = /* @__PURE__ */ new Map();
      for (I = J; I <= B; I++) {
        const Fe = u[I] = C ? lt(u[I]) : Qe(u[I]);
        Fe.key != null && de.set(Fe.key, I);
      }
      let le, we = 0;
      const Ve = B - J + 1;
      let kt = !1, Vs = 0;
      const jt = new Array(Ve);
      for (I = 0; I < Ve; I++)
        jt[I] = 0;
      for (I = z; I <= R; I++) {
        const Fe = c[I];
        if (we >= Ve) {
          re(Fe, _, S, !0);
          continue;
        }
        let Ge;
        if (Fe.key != null)
          Ge = de.get(Fe.key);
        else
          for (le = J; le <= B; le++)
            if (jt[le - J] === 0 && Ht(Fe, u[le])) {
              Ge = le;
              break;
            }
        Ge === void 0 ? re(Fe, _, S, !0) : (jt[Ge - J] = I + 1, Ge >= Vs ? Vs = Ge : kt = !0, N(Fe, u[Ge], m, null, _, S, O, k, C), we++);
      }
      const js = kt ? Aa(jt) : Ct;
      for (le = js.length - 1, I = Ve - 1; I >= 0; I--) {
        const Fe = J + I, Ge = u[Fe], Hs = Fe + 1 < U ? u[Fe + 1].el : y;
        jt[I] === 0 ? N(null, Ge, m, Hs, _, S, O, k, C) : kt && (le < 0 || I !== js[le] ? ae(Ge, m, Hs, 2) : le--);
      }
    }
  }, ae = (c, u, m, y, _ = null) => {
    const { el: S, type: O, transition: k, children: C, shapeFlag: I } = c;
    if (I & 6) {
      ae(c.component.subTree, u, m, y);
      return;
    }
    if (I & 128) {
      c.suspense.move(u, m, y);
      return;
    }
    if (I & 64) {
      O.move(c, u, m, me);
      return;
    }
    if (O === te) {
      s(S, u, m);
      for (let R = 0; R < C.length; R++)
        ae(C[R], u, m, y);
      s(c.anchor, u, m);
      return;
    }
    if (O === Jt) {
      Z(c, u, m);
      return;
    }
    if (y !== 2 && I & 1 && k)
      if (y === 0)
        k.beforeEnter(S), s(S, u, m), $e(() => k.enter(S), _);
      else {
        const { leave: R, delayLeave: B, afterLeave: z } = k, J = () => s(S, u, m), de = () => {
          R(S, () => {
            J(), z && z();
          });
        };
        B ? B(S, J, de) : de();
      }
    else
      s(S, u, m);
  }, re = (c, u, m, y = !1, _ = !1) => {
    const { type: S, props: O, ref: k, children: C, dynamicChildren: I, shapeFlag: U, patchFlag: R, dirs: B } = c;
    if (k != null && rs(k, null, m, c, !0), U & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const z = U & 1 && B, J = !qt(c);
    let de;
    if (J && (de = O && O.onVnodeBeforeUnmount) && Ke(de, u, c), U & 6)
      Be(c.component, m, y);
    else {
      if (U & 128) {
        c.suspense.unmount(m, y);
        return;
      }
      z && wt(c, null, u, "beforeUnmount"), U & 64 ? c.type.remove(c, u, m, _, me, y) : I && (S !== te || R > 0 && R & 64) ? Ce(I, u, m, !1, !0) : (S === te && R & 384 || !_ && U & 16) && Ce(C, u, m), y && xe(c);
    }
    (J && (de = O && O.onVnodeUnmounted) || z) && $e(() => {
      de && Ke(de, u, c), z && wt(c, null, u, "unmounted");
    }, m);
  }, xe = (c) => {
    const { type: u, el: m, anchor: y, transition: _ } = c;
    if (u === te) {
      qe(m, y);
      return;
    }
    if (u === Jt) {
      X(c);
      return;
    }
    const S = () => {
      r(m), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: O, delayLeave: k } = _, C = () => O(m, S);
      k ? k(c.el, S, C) : C();
    } else
      S();
  }, qe = (c, u) => {
    let m;
    for (; c !== u; )
      m = w(c), r(c), c = m;
    r(u);
  }, Be = (c, u, m) => {
    const { bum: y, scope: _, update: S, subTree: O, um: k } = c;
    y && Un(y), _.stop(), S && (S.active = !1, re(O, c, u, m)), k && $e(k, u), $e(() => {
      c.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve());
  }, Ce = (c, u, m, y = !1, _ = !1, S = 0) => {
    for (let O = S; O < c.length; O++)
      re(c[O], u, m, y, _);
  }, Je = (c) => c.shapeFlag & 6 ? Je(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : w(c.anchor || c.el), st = (c, u, m) => {
    c == null ? u._vnode && re(u._vnode, null, null, !0) : N(u._vnode || null, c, u, null, null, null, m), Xs(), si(), u._vnode = c;
  }, me = {
    p: N,
    um: re,
    m: ae,
    r: xe,
    mt: L,
    mc: ke,
    pc: D,
    pbc: Q,
    n: Je,
    o: e
  };
  let Ue, gt;
  return t && ([Ue, gt] = t(me)), {
    render: st,
    hydrate: Ue,
    createApp: Na(st, Ue)
  };
}
function bt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function bi(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (Y(s) && Y(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let a = r[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[i] = lt(r[i]), a.el = o.el), n || bi(o, a));
    }
}
function Aa(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, a;
  const l = e.length;
  for (s = 0; s < l; s++) {
    const d = e[s];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        a = i + o >> 1, e[n[a]] < d ? i = a + 1 : o = a;
      d < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
const Sa = (e) => e.__isTeleport, te = Symbol(void 0), $s = Symbol(void 0), pt = Symbol(void 0), Jt = Symbol(void 0), Gt = [];
let ze = null;
function E(e = !1) {
  Gt.push(ze = e ? null : []);
}
function Ca() {
  Gt.pop(), ze = Gt[Gt.length - 1] || null;
}
let rn = 1;
function ar(e) {
  rn += e;
}
function xi(e) {
  return e.dynamicChildren = rn > 0 ? ze || Ct : null, Ca(), rn > 0 && ze && ze.push(e), e;
}
function A(e, t, n, s, r, i) {
  return xi(x(e, t, n, s, r, i, !0));
}
function Le(e, t, n, s, r) {
  return xi(G(e, t, n, s, r, !0));
}
function vi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ht(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ln = "__vInternal", _i = ({ key: e }) => e != null ? e : null, wn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? Ie(e) || Ee(e) || q(e) ? { i: Oe, r: e, k: t, f: !!n } : e : null;
function x(e, t = null, n = null, s = 0, r = null, i = e === te ? 0 : 1, o = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _i(t),
    ref: t && wn(t),
    scopeId: oi,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null
  };
  return a ? (Ds(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ie(n) ? 8 : 16), rn > 0 && !o && ze && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && ze.push(l), l;
}
const G = Ma;
function Ma(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === ha) && (e = pt), vi(e)) {
    const a = Lt(e, t, !0);
    return n && Ds(a, n), rn > 0 && !i && ze && (a.shapeFlag & 6 ? ze[ze.indexOf(e)] = a : ze.push(a)), a.patchFlag |= -2, a;
  }
  if (Va(e) && (e = e.__vccOpts), t) {
    t = $a(t);
    let { class: a, style: l } = t;
    a && !Ie(a) && (t.class = ie(a)), fe(l) && (Wr(l) && !Y(l) && (l = Se({}, l)), t.style = kn(l));
  }
  const o = Ie(e) ? 1 : Ko(e) ? 128 : Sa(e) ? 64 : fe(e) ? 4 : q(e) ? 2 : 0;
  return x(e, t, n, s, r, o, i, !0);
}
function $a(e) {
  return e ? Wr(e) || Ln in e ? Se({}, e) : e : null;
}
function Lt(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: i, children: o } = e, a = t ? Oa(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && _i(a),
    ref: t && t.ref ? n && r ? Y(r) ? r.concat(wn(t)) : [r, wn(t)] : wn(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== te ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Lt(e.ssContent),
    ssFallback: e.ssFallback && Lt(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function De(e = " ", t = 0) {
  return G($s, null, e, t);
}
function Os(e, t) {
  const n = G(Jt, null, e);
  return n.staticCount = t, n;
}
function ce(e = "", t = !1) {
  return t ? (E(), Le(pt, null, e)) : G(pt, null, e);
}
function Qe(e) {
  return e == null || typeof e == "boolean" ? G(pt) : Y(e) ? G(
    te,
    null,
    e.slice()
  ) : typeof e == "object" ? lt(e) : G($s, null, String(e));
}
function lt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Lt(e);
}
function Ds(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (Y(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ds(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Ln in t) ? t._ctx = Oe : r === 3 && Oe && (Oe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    q(t) ? (t = { default: t, _ctx: Oe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [De(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Oa(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = ie([t.class, s.class]));
      else if (r === "style")
        t.style = kn([t.style, s.style]);
      else if (An(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(Y(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Ke(e, t, n, s = null) {
  Ze(e, t, 7, [
    n,
    s
  ]);
}
const Da = wi();
let La = 0;
function Fa(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Da, i = {
    uid: La++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new oo(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: fi(s, r),
    emitsOptions: ii(s, r),
    emit: null,
    emitted: null,
    propsDefaults: ue,
    inheritAttrs: s.inheritAttrs,
    ctx: ue,
    data: ue,
    props: ue,
    attrs: ue,
    slots: ue,
    refs: ue,
    setupState: ue,
    setupContext: null,
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Zo.bind(null, i), e.ce && e.ce(i), i;
}
let ye = null;
const yi = () => ye || Oe, Ft = (e) => {
  ye = e, e.scope.on();
}, It = () => {
  ye && ye.scope.off(), ye = null;
};
function Ei(e) {
  return e.vnode.shapeFlag & 4;
}
let on = !1;
function Ra(e, t = !1) {
  on = t;
  const { props: n, children: s } = e.vnode, r = Ei(e);
  xa(e, n, r, t), ya(e, s);
  const i = r ? Pa(e, t) : void 0;
  return on = !1, i;
}
function Pa(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = qr(new Proxy(e.ctx, fa));
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Ba(e) : null;
    Ft(e), Pt();
    const i = dt(s, e, 0, [e.props, r]);
    if (Ut(), It(), $r(i)) {
      if (i.then(It, It), t)
        return i.then((o) => {
          lr(e, o, t);
        }).catch((o) => {
          $n(o, e, 0);
        });
      e.asyncDep = i;
    } else
      lr(e, i, t);
  } else
    Ii(e, t);
}
function lr(e, t, n) {
  q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : fe(t) && (e.setupState = Kr(t)), Ii(e, n);
}
let cr;
function Ii(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && cr && !s.render) {
      const r = s.template || Cs(e).template;
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config, { delimiters: a, compilerOptions: l } = s, d = Se(Se({
          isCustomElement: i,
          delimiters: a
        }, o), l);
        s.render = cr(r, d);
      }
    }
    e.render = s.render || Ye;
  }
  Ft(e), Pt(), pa(e), Ut(), It();
}
function Ua(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Re(e, "get", "$attrs"), t[n];
    }
  });
}
function Ba(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Ua(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ls(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Kr(qr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in yn)
          return yn[n](e);
      }
    }));
}
function Va(e) {
  return q(e) && "__vccOpts" in e;
}
const _e = (e, t) => Bo(e, t, on), ja = "3.2.41", Ha = "http://www.w3.org/2000/svg", yt = typeof document < "u" ? document : null, dr = yt && /* @__PURE__ */ yt.createElement("template"), za = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t ? yt.createElementNS(Ha, e) : yt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => yt.createTextNode(e),
  createComment: (e) => yt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => yt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, s, r, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      dr.innerHTML = s ? `<svg>${e}</svg>` : e;
      const a = dr.content;
      if (s) {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      o ? o.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function Ya(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Za(e, t, n) {
  const s = e.style, r = Ie(n);
  if (n && !r) {
    for (const i in n)
      is(s, i, n[i]);
    if (t && !Ie(t))
      for (const i in t)
        n[i] == null && is(s, i, "");
  } else {
    const i = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = i);
  }
}
const ur = /\s*!important$/;
function is(e, t, n) {
  if (Y(n))
    n.forEach((s) => is(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Wa(e, t);
    ur.test(n) ? e.setProperty(nt(s), n.replace(ur, ""), "important") : e[s] = n;
  }
}
const hr = ["Webkit", "Moz", "ms"], jn = {};
function Wa(e, t) {
  const n = jn[t];
  if (n)
    return n;
  let s = ht(t);
  if (s !== "filter" && s in e)
    return jn[t] = s;
  s = Lr(s);
  for (let r = 0; r < hr.length; r++) {
    const i = hr[r] + s;
    if (i in e)
      return jn[t] = i;
  }
  return t;
}
const fr = "http://www.w3.org/1999/xlink";
function qa(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(fr, t.slice(6, t.length)) : e.setAttributeNS(fr, t, n);
  else {
    const i = Ji(t);
    n == null || i && !Sr(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
  }
}
function Ja(e, t, n, s, r, i, o) {
  if (t === "innerHTML" || t === "textContent") {
    s && o(s, r, i), e[t] = n == null ? "" : n;
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const l = n == null ? "" : n;
    (e.value !== l || e.tagName === "OPTION") && (e.value = l), n == null && e.removeAttribute(t);
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Sr(n) : n == null && l === "string" ? (n = "", a = !0) : l === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(t);
}
function Ga(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ka(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Xa(e, t, n, s, r = null) {
  const i = e._vei || (e._vei = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [a, l] = Qa(t);
    if (s) {
      const d = i[t] = nl(s, r);
      Ga(e, a, d, l);
    } else
      o && (Ka(e, a, o, l), i[t] = void 0);
  }
}
const pr = /(?:Once|Passive|Capture)$/;
function Qa(e) {
  let t;
  if (pr.test(e)) {
    t = {};
    let s;
    for (; s = e.match(pr); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : nt(e.slice(2)), t];
}
let Hn = 0;
const el = /* @__PURE__ */ Promise.resolve(), tl = () => Hn || (el.then(() => Hn = 0), Hn = Date.now());
function nl(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Ze(sl(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = tl(), n;
}
function sl(e, t) {
  if (Y(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (r) => !r._stopped && s && s(r));
  } else
    return t;
}
const mr = /^on[a-z]/, rl = (e, t, n, s, r = !1, i, o, a, l) => {
  t === "class" ? Ya(e, s, r) : t === "style" ? Za(e, n, s) : An(t) ? hs(t) || Xa(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : il(e, t, s, r)) ? Ja(e, t, s, i, o, a, l) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), qa(e, t, s, r));
};
function il(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && mr.test(t) && q(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || mr.test(t) && Ie(n) ? !1 : t in e;
}
function ol(e, t) {
  const n = Ne(e);
  class s extends Fs {
    constructor(i) {
      super(n, i, t);
    }
  }
  return s.def = n, s;
}
const al = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Fs extends al {
  constructor(t, n = {}, s) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && s ? s(this._createVNode(), this.shadowRoot) : this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this._connected = !0, this._instance || this._resolveDef();
  }
  disconnectedCallback() {
    this._connected = !1, ti(() => {
      this._connected || (br(null, this.shadowRoot), this._instance = null);
    });
  }
  _resolveDef() {
    if (this._resolved)
      return;
    this._resolved = !0;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    new MutationObserver((s) => {
      for (const r of s)
        this._setAttr(r.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (s) => {
      const { props: r, styles: i } = s, o = !Y(r), a = r ? o ? Object.keys(r) : r : [];
      let l;
      if (o)
        for (const d in this._props) {
          const h = r[d];
          (h === Number || h && h.type === Number) && (this._props[d] = Wn(this._props[d]), (l || (l = /* @__PURE__ */ Object.create(null)))[d] = !0);
        }
      this._numberProps = l;
      for (const d of Object.keys(this))
        d[0] !== "_" && this._setProp(d, this[d], !0, !1);
      for (const d of a.map(ht))
        Object.defineProperty(this, d, {
          get() {
            return this._getProp(d);
          },
          set(h) {
            this._setProp(d, h);
          }
        });
      this._applyStyles(i), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then(t) : t(this._def);
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    this._numberProps && this._numberProps[t] && (n = Wn(n)), this._setProp(ht(t), n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, s = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), s && (n === !0 ? this.setAttribute(nt(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(nt(t), n + "") : n || this.removeAttribute(nt(t))));
  }
  _update() {
    br(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = G(this._def, Se({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, n.emit = (r, ...i) => {
        this.dispatchEvent(new CustomEvent(r, {
          detail: i
        }));
      };
      let s = this;
      for (; s = s && (s.parentNode || s.host); )
        if (s instanceof Fs) {
          n.parent = s._instance;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const s = document.createElement("style");
      s.textContent = n, this.shadowRoot.appendChild(s);
    });
  }
}
function ll(e) {
  const t = yi();
  if (!t)
    return;
  const n = () => os(t.subTree, e(t.proxy));
  ea(n), cn(() => {
    const s = new MutationObserver(n);
    s.observe(t.subTree.el.parentNode, { childList: !0 }), As(() => s.disconnect());
  });
}
function os(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      os(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    gr(e.el, t);
  else if (e.type === te)
    e.children.forEach((n) => os(n, t));
  else if (e.type === Jt) {
    let { el: n, anchor: s } = e;
    for (; n && (gr(n, t), n !== s); )
      n = n.nextSibling;
  }
}
function gr(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    for (const s in t)
      n.setProperty(`--${s}`, t[s]);
  }
}
const cl = ["ctrl", "shift", "alt", "meta"], dl = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => cl.some((n) => e[`${n}Key`] && !t.includes(n))
}, Kt = (e, t) => (n, ...s) => {
  for (let r = 0; r < t.length; r++) {
    const i = dl[t[r]];
    if (i && i(n, t))
      return;
  }
  return e(n, ...s);
}, ul = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Xt = (e, t) => (n) => {
  if (!("key" in n))
    return;
  const s = nt(n.key);
  if (t.some((r) => r === s || ul[r] === s))
    return e(n);
}, hl = /* @__PURE__ */ Se({ patchProp: rl }, za);
let wr;
function fl() {
  return wr || (wr = Ta(hl));
}
const br = (...e) => {
  fl().render(...e);
}, pl = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, ml = /* @__PURE__ */ x("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M11 19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v5Zm-3 1a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3ZM8 9a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h3Zm1-3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1ZM13 5a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3V5Zm3-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3ZM16 15a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3h-3Zm-1 3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1Z"
}, null, -1), gl = [
  ml
];
function wl(e, t) {
  return E(), A("svg", pl, gl);
}
const bl = { render: wl }, xl = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, vl = /* @__PURE__ */ x("path", { d: "M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" }, null, -1), _l = /* @__PURE__ */ x("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
}, null, -1), yl = /* @__PURE__ */ x("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
}, null, -1), El = [
  vl,
  _l,
  yl
];
function Il(e, t) {
  return E(), A("svg", xl, El);
}
const Nl = { render: Il }, Tl = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, kl = /* @__PURE__ */ x("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M5 2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h1a1 1 0 1 0 0-2H5a1 1 0 0 1-1-1V8.056h9V9h-1a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3h-4V5a3 3 0 0 0-3-3H5Zm8 4.056H4V5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v1.056ZM11 12a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v1.056h-9V12Zm0 3.056h9V19a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-3.944Z"
}, null, -1), Al = [
  kl
];
function Sl(e, t) {
  return E(), A("svg", Tl, Al);
}
const Cl = { render: Sl }, Ml = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, $l = /* @__PURE__ */ x("path", { d: "M16.105 4.627A8.001 8.001 0 0 0 9.002 18.93a8.001 8.001 0 0 0 10.43-2.168c.299-.404.85-.557 1.286-.306.521.302.705.973.349 1.46-2.975 4.067-8.6 5.323-13.065 2.746C3.22 17.9 1.58 11.785 4.342 7.002c2.761-4.783 8.877-6.422 13.66-3.66a1 1 0 0 1 .366 1.365l-3.634 6.294a2 2 0 1 1-1.732-1l1.071-1.854a4.002 4.002 0 0 0-3.07 7.319 4.002 4.002 0 0 0 4.924-.734c.342-.368.892-.527 1.327-.276.521.302.707.978.317 1.437a6.002 6.002 0 0 1-9.765-6.891 6.002 6.002 0 0 1 7.289-2.625l1.01-1.75Z" }, null, -1), Ol = [
  $l
];
function Dl(e, t) {
  return E(), A("svg", Ml, Ol);
}
const Ll = { render: Dl }, Fl = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Rl = /* @__PURE__ */ x("path", {
  "clip-rule": "evenodd",
  d: "M14.894 7.922C15.565 7.317 16 6.485 16 5.5 16 3.404 14.03 2 12 2 9.97 2 8 3.404 8 5.5c0 .985.435 1.817 1.106 2.422a6.363 6.363 0 0 0-1.595 1.59L5.707 7.706a1 1 0 1 0-1.414 1.414l2.25 2.25a8.862 8.862 0 0 0-.425 1.636A1.025 1.025 0 0 0 6 13H3a1 1 0 1 0 0 2h3.013c.042.798.183 1.566.41 2.283l-2.13 2.131a1 1 0 1 0 1.414 1.414l1.617-1.616c.11.17.226.335.348.494C8.723 21.073 10.245 22 12 22c1.755 0 3.277-.927 4.328-2.294.122-.159.238-.323.348-.494l1.617 1.616a1 1 0 1 0 1.414-1.414l-2.13-2.13c.227-.718.368-1.486.41-2.284H21a1 1 0 1 0 0-2h-3c-.04 0-.08.002-.118.007a8.861 8.861 0 0 0-.424-1.637l2.249-2.249a1 1 0 0 0-1.414-1.414l-1.804 1.804a6.365 6.365 0 0 0-1.595-1.59ZM12 7c-1.283 0-2-.835-2-1.5S10.717 4 12 4s2 .835 2 1.5S13.283 7 12 7ZM8.462 17.052a.995.995 0 0 1 .088.216c.194.453.434.863.707 1.218.503.654 1.103 1.107 1.743 1.337V9.177c-.64.23-1.24.683-1.743 1.337C8.497 11.5 8 12.907 8 14.5c0 .93.17 1.796.462 2.552Zm7.076 0A7.096 7.096 0 0 0 16 14.5c0-1.594-.498-3-1.257-3.986C14.24 9.86 13.64 9.407 13 9.177v10.646c.64-.23 1.24-.683 1.743-1.337.273-.355.513-.765.707-1.218a.998.998 0 0 1 .088-.216Z"
}, null, -1), Pl = [
  Rl
];
function Ul(e, t) {
  return E(), A("svg", Fl, Pl);
}
const Bl = { render: Ul }, Vl = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, jl = /* @__PURE__ */ x("path", { d: "M19 18a1 1 0 0 1-1-1V3a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1Z" }, null, -1), Hl = /* @__PURE__ */ x("path", { d: "M3 5a1 1 0 0 1 1 1v13a1 1 0 0 0 1 1h17a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V6a1 1 0 0 1 1-1Z" }, null, -1), zl = /* @__PURE__ */ x("path", { d: "M7 18a1 1 0 0 1-1-1v-6.5a1 1 0 0 1 2 0V17a1 1 0 0 1-1 1ZM10 17a1 1 0 1 0 2 0V8a1 1 0 1 0-2 0v9ZM14 17a1 1 0 1 0 2 0v-5a1 1 0 1 0-2 0v5Z" }, null, -1), Yl = [
  jl,
  Hl,
  zl
];
function Zl(e, t) {
  return E(), A("svg", Vl, Yl);
}
const Wl = { render: Zl }, ql = {
  viewBox: "0 0 16 16",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, Jl = /* @__PURE__ */ x("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8 1.333A3.333 3.333 0 1 0 8 8a3.333 3.333 0 0 0 0-6.667ZM6 4.667a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
}, null, -1), Gl = /* @__PURE__ */ x("path", { d: "M5.333 9.333A3.333 3.333 0 0 0 2 12.667V14a.667.667 0 1 0 1.333 0v-1.333a2 2 0 0 1 2-2h5.334a2 2 0 0 1 2 2V14A.667.667 0 1 0 14 14v-1.333a3.333 3.333 0 0 0-3.333-3.334H5.333Z" }, null, -1), Kl = [
  Jl,
  Gl
];
function Xl(e, t) {
  return E(), A("svg", ql, Kl);
}
const xr = { render: Xl }, Ql = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, ec = /* @__PURE__ */ x("path", {
  "clip-rule": "evenodd",
  d: "M11.649 1.064a1 1 0 0 1 .702 0l8 3A1 1 0 0 1 21 5v7c0 3.446-2.282 6.2-4.341 8.003a22.684 22.684 0 0 1-4.104 2.836 8.28 8.28 0 0 1-.076.04l-.022.01-.006.004h-.002s-.002.001-.449-.893l-.448.894-.003-.001-.006-.004-.022-.01a8.28 8.28 0 0 1-.35-.188 22.686 22.686 0 0 1-3.83-2.689C5.281 18.2 3 15.447 3 12V5a1 1 0 0 1 .649-.936l8-3ZM12 22l-.448.894c.282.14.614.141.895 0L12 22Zm0-1.137a20.69 20.69 0 0 0 3.341-2.365C17.282 16.8 19 14.553 19 12V5.693l-7-2.625-7 2.625V12c0 2.554 1.718 4.8 3.659 6.497A20.692 20.692 0 0 0 12 20.863Z"
}, null, -1), tc = [
  ec
];
function nc(e, t) {
  return E(), A("svg", Ql, tc);
}
const sc = { render: nc }, rc = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, ic = /* @__PURE__ */ x("path", {
  "clip-rule": "evenodd",
  d: "M8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 9.874A4.002 4.002 0 0 0 6 2a4 4 0 0 0-1 7.874V16a3 3 0 0 0 3 3h3a1 1 0 1 0 0-2H8a1 1 0 0 1-1-1V9.874ZM16 18a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-2 0a4.002 4.002 0 0 1 3-3.874V8a1 1 0 0 0-1-1h-3a1 1 0 1 1 0-2h3a3 3 0 0 1 3 3v6.126A4.002 4.002 0 0 1 18 22a4 4 0 0 1-4-4Z"
}, null, -1), oc = [
  ic
];
function ac(e, t) {
  return E(), A("svg", rc, oc);
}
const lc = { render: ac }, cc = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, dc = /* @__PURE__ */ x("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
}, null, -1), uc = /* @__PURE__ */ x("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M13 5h-2V2a1 1 0 1 0-2 0v3H7a2 2 0 0 0-2 2v2H2a1 1 0 1 0 0 2h3v2H2a1 1 0 1 0 0 2h3v2a2 2 0 0 0 2 2h2v3a1 1 0 1 0 2 0v-3h2v3a1 1 0 1 0 2 0v-3h2a2 2 0 0 0 2-2v-2h3a1 1 0 1 0 0-2h-3v-2h3a1 1 0 1 0 0-2h-3V7a2 2 0 0 0-2-2h-2V2a1 1 0 1 0-2 0v3ZM7 8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8Z"
}, null, -1), hc = [
  dc,
  uc
];
function fc(e, t) {
  return E(), A("svg", cc, hc);
}
const vr = { render: fc }, pc = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, mc = /* @__PURE__ */ x("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M7.05 3.05A7 7 0 0 1 19 8c0 3.353.717 5.435 1.378 6.646.332.608.655 1.007.88 1.244a3.026 3.026 0 0 0 .306.284l.002.002A1 1 0 0 1 21 18H3a1 1 0 0 1-.566-1.824l.003-.002.052-.042c.053-.044.141-.123.254-.242.224-.237.547-.636.88-1.244C4.282 13.435 5 11.353 5 8a7 7 0 0 1 2.05-4.95ZM5.15 16h13.7a9.421 9.421 0 0 1-.228-.396C17.783 14.065 17 11.647 17 8A5 5 0 0 0 7 8c0 3.647-.783 6.065-1.622 7.604-.076.14-.153.271-.229.396ZM9.768 20.135a1 1 0 0 1 1.367.363 1 1 0 0 0 1.73 0 1 1 0 1 1 1.73 1.004 3 3 0 0 1-5.19 0 1 1 0 0 1 .363-1.367Z"
}, null, -1), gc = [
  mc
];
function wc(e, t) {
  return E(), A("svg", pc, gc);
}
const bc = { render: wc }, xc = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, vc = /* @__PURE__ */ x("path", { d: "M4.903 4.944C6.866 2.98 9.231 2 12 2s5.121.981 7.056 2.944C21.02 6.879 22 9.23 22 12s-.981 5.134-2.944 7.097C17.122 21.032 14.77 22 12 22s-5.134-.968-7.097-2.903C2.968 17.134 2 14.769 2 12s.968-5.121 2.903-7.056Zm1.371 12.782C7.86 19.285 9.77 20.064 12 20.064s4.126-.78 5.686-2.338C19.27 16.14 20.064 14.23 20.064 12s-.793-4.126-2.378-5.685c-1.56-1.587-3.455-2.38-5.686-2.38s-4.14.793-5.726 2.38C4.715 7.874 3.935 9.769 3.935 12c0 2.231.78 4.14 2.34 5.726ZM14.5 15.87l-3.427-2.5a.497.497 0 0 1-.202-.403V6.355c0-.323.161-.484.484-.484h1.29c.323 0 .484.161.484.484v5.726l2.702 1.935c.242.188.268.417.08.686l-.726 1.048c-.188.269-.416.31-.685.121Z" }, null, -1), _c = [
  vc
];
function yc(e, t) {
  return E(), A("svg", xc, _c);
}
const Ec = { render: yc }, Ic = {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Nc = /* @__PURE__ */ x("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M3.333 2.667a.667.667 0 0 0-.666.666v9.334a.667.667 0 0 0 .666.666H6a.667.667 0 0 1 0 1.334H3.333a2 2 0 0 1-2-2V3.333a2 2 0 0 1 2-2H6a.667.667 0 0 1 0 1.334H3.333Z",
  fill: "#4A4954"
}, null, -1), Tc = /* @__PURE__ */ x("path", {
  d: "M11.138 4.195a.667.667 0 0 0-.943.943l2.195 2.195H6a.667.667 0 0 0 0 1.334h6.39l-2.195 2.195a.667.667 0 0 0 .943.943l3.333-3.333.005-.005a.664.664 0 0 0 .19-.465M14.476 7.533ZM11.138 4.195l3.333 3.333-3.333-3.333Z",
  fill: "#4A4954"
}, null, -1), kc = [
  Nc,
  Tc
];
function Ac(e, t) {
  return E(), A("svg", Ic, kc);
}
const Sc = { render: Ac }, Cc = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Mc = /* @__PURE__ */ x("path", {
  d: "M9 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H9ZM9 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM13 12a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM9 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM13 16a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z",
  fill: "currentColor"
}, null, -1), $c = /* @__PURE__ */ x("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M7 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7.961a3 3 0 0 0-1.126-2.342l-3.701-2.962A3 3 0 0 0 13.297 2H7ZM6 5a1 1 0 0 1 1-1h6.298a1 1 0 0 1 .625.22l3.702 2.96a1 1 0 0 1 .375.781V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5Z",
  fill: "currentColor"
}, null, -1), Oc = [
  Mc,
  $c
];
function Dc(e, t) {
  return E(), A("svg", Cc, Oc);
}
const Ni = { render: Dc }, Lc = {
  viewBox: "0 0 16 16",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, Fc = /* @__PURE__ */ Os('<g clip-path="url(#a)" fill-rule="evenodd" clip-rule="evenodd"><path d="M8 6.667a1.333 1.333 0 1 0 0 2.666 1.333 1.333 0 0 0 0-2.666ZM5.333 8a2.667 2.667 0 1 1 5.334 0 2.667 2.667 0 0 1-5.334 0Z"></path><path d="M8 1.333A.667.667 0 0 0 7.333 2v.116a1.767 1.767 0 0 1-1.07 1.617.666.666 0 0 1-.177.048 1.767 1.767 0 0 1-1.819-.404l-.005-.006-.04-.04a.669.669 0 0 0-.944 0 .667.667 0 0 0 0 .944l.045.045a1.767 1.767 0 0 1 .362 1.93 1.767 1.767 0 0 1-1.61 1.136H2A.667.667 0 0 0 2 8.72h.116a1.767 1.767 0 0 1 1.615 1.067 1.767 1.767 0 0 1-.354 1.946l-.006.005-.04.04a.669.669 0 0 0 0 .944.667.667 0 0 0 .944 0l.045-.045a1.766 1.766 0 0 1 1.93-.362 1.766 1.766 0 0 1 1.136 1.61V14a.667.667 0 1 0 1.334 0v-.116a1.767 1.767 0 0 1 1.067-1.615 1.768 1.768 0 0 1 1.946.354l.005.006.04.04a.67.67 0 0 0 .944 0 .667.667 0 0 0 0-.944l-.045-.045a1.766 1.766 0 0 1-.355-1.946 1.766 1.766 0 0 1 1.615-1.067H14a.667.667 0 1 0 0-1.334h-.116a1.767 1.767 0 0 1-1.617-1.07.668.668 0 0 1-.048-.177 1.766 1.766 0 0 1 .404-1.819l.006-.005.04-.04a.67.67 0 0 0 0-.944.666.666 0 0 0-.944 0l-.045.045a1.766 1.766 0 0 1-1.946.355 1.767 1.767 0 0 1-1.067-1.615V2A.667.667 0 0 0 8 1.333ZM12.933 10l.61.27a.434.434 0 0 0 .085.475l.037.037a2.002 2.002 0 0 1 0 2.83l-.472-.472.472.471a2 2 0 0 1-2.83 0l-.037-.036a.432.432 0 0 0-.476-.085l-.006.003a.433.433 0 0 0-.263.395V14a2 2 0 1 1-4 0v-.05a.433.433 0 0 0-.283-.391.618.618 0 0 1-.04-.016.434.434 0 0 0-.475.085l-.037.037a2.002 2.002 0 0 1-3.416-1.415 2 2 0 0 1 .587-1.415l.036-.037a.434.434 0 0 0 .085-.476l-.003-.006a.433.433 0 0 0-.395-.263H2a2 2 0 1 1 0-4h.05a.433.433 0 0 0 .391-.283.662.662 0 0 1 .016-.04.433.433 0 0 0-.085-.475l-.036-.037a2 2 0 1 1 2.829-2.83l.037.037a.433.433 0 0 0 .475.085.667.667 0 0 1 .133-.043.433.433 0 0 0 .19-.355V2a2 2 0 1 1 4 0v.058a.434.434 0 0 0 .263.396l.006.003a.433.433 0 0 0 .476-.085l.037-.036a2 2 0 0 1 3.416 1.414 2 2 0 0 1-.587 1.415l-.036.037a.432.432 0 0 0-.085.475.662.662 0 0 1 .043.133.434.434 0 0 0 .355.19H14a2 2 0 0 1 0 4h-.058a.434.434 0 0 0-.396.263L12.933 10Z"></path></g><defs><clipPath id="a"><path d="M0 0h16v16H0z"></path></clipPath></defs>', 2), Rc = [
  Fc
];
function Pc(e, t) {
  return E(), A("svg", Lc, Rc);
}
const Rs = { render: Pc }, Uc = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Bc = /* @__PURE__ */ x("g", { "clip-path": "url(#clip0_2_492)" }, [
  /* @__PURE__ */ x("path", { d: "M8.663 2.009A9 9 0 0 1 17.479 8h.52a6.002 6.002 0 0 1 5.497 8.398 6 6 0 0 1-2.628 2.87 1 1 0 1 1-.957-1.756A4 4 0 0 0 17.999 10h-1.26a1 1 0 0 1-.968-.75A7 7 0 1 0 3.75 15.638a1 1 0 0 1-1.499 1.324A9 9 0 0 1 8.663 2.01Z" }),
  /* @__PURE__ */ x("path", { d: "M14.086 15.5H7.5a1 1 0 1 0 0 2h6.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-3.999a.997.997 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.415l2.293 2.293Z" })
], -1), Vc = [
  Bc
];
function jc(e, t) {
  return E(), A("svg", Uc, Vc);
}
const Hc = { render: jc }, zc = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Yc = /* @__PURE__ */ Os('<path d="M4 12a8 8 0 1 1 15.761 1.948c-.097.389-.005.808.279 1.091.52.521 1.398.356 1.595-.353A10.01 10.01 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 .93.127 1.831.365 2.686.197.71 1.075.874 1.596.354.283-.284.375-.703.278-1.092A8.017 8.017 0 0 1 4 12Z"></path><path clip-rule="evenodd" d="M13 17a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4Zm2 1v2h2v-2h-2ZM5 17a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4Zm2 1v2h2v-2H7Z"></path><path clip-rule="evenodd" d="M10 14s.448-1 1-1h3a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0v-1a1 1 0 0 0-1-1h-3c-.552 0-1-1-1-1Z"></path><path clip-rule="evenodd" d="M13 14a1 1 0 0 0-1-1h-2a3 3 0 0 0-3 3v1a1 1 0 1 0 2 0v-1a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1ZM10 6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-4Zm3 2h-2v2h2V8Z"></path><path d="M11 12h2v1h-2v-1Z"></path>', 5), Zc = [
  Yc
];
function Wc(e, t) {
  return E(), A("svg", zc, Zc);
}
const qc = { render: Wc }, Jc = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Gc = /* @__PURE__ */ x("path", {
  "clip-rule": "evenodd",
  d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11-1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm0-4a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
}, null, -1), Kc = [
  Gc
];
function Xc(e, t) {
  return E(), A("svg", Jc, Kc);
}
const Qc = { render: Xc }, ed = {
  dashboard: bl,
  discovery: Nl,
  targets: Cl,
  scans: Ll,
  vulnerabilities: Bl,
  reports: Wl,
  users: xr,
  "scan-profiles": sc,
  "issue-trackers": lc,
  wafs: vr,
  "exclude-hours": Ec,
  settings: Rs,
  proxy: Hc,
  memory: vr,
  "settings-email": bc,
  netscan: qc,
  info: Qc,
  supervisor_account: Ni,
  profile: xr,
  logout: Sc
}, Ti = /* @__PURE__ */ Ne({
  __name: "NavMenuIcon",
  props: {
    name: null,
    class: null
  },
  setup(e) {
    const t = e, n = ed[t.name];
    return (s, r) => (E(), Le(b(n), {
      class: ie(t.class)
    }, null, 8, ["class"]));
  }
}), td = {
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, nd = /* @__PURE__ */ x("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M3.529 5.529c.26-.26.682-.26.943 0L8 9.057 11.53 5.53a.667.667 0 1 1 .943.942l-4 4a.667.667 0 0 1-.943 0l-4-4a.667.667 0 0 1 0-.942Z",
  fill: "#0C4ABC"
}, null, -1), sd = [
  nd
];
function rd(e, t) {
  return E(), A("svg", td, sd);
}
const id = { render: rd }, od = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, ad = /* @__PURE__ */ x("path", {
  "clip-rule": "evenodd",
  d: "M8.293 18.707a1 1 0 0 1 0-1.414L13.586 12 8.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0Z"
}, null, -1), ld = [
  ad
];
function cd(e, t) {
  return E(), A("svg", od, ld);
}
const dd = { render: cd }, ud = "sidenavbar-area", hd = "nav-menu-parent", fd = "notification-are-skeleton", pd = "notification-area-read-button-skeleton", md = "notify-toggle", gd = "notification-area", wd = { class: "mb-1" }, bd = ["data-test", "aria-label", "onKeyup"], xd = ["tabindex", "onClick"], _r = /* @__PURE__ */ Ne({
  __name: "NavMenuItem",
  props: {
    navItem: null,
    isMainContent: { type: Boolean },
    isMenuExpanded: { type: Boolean },
    expandedParentId: null,
    currentPath: null
  },
  emits: ["setActiveParent", "navigate"],
  setup(e, { emit: t }) {
    const n = e, {
      expandedParentId: s,
      navItem: r,
      currentPath: i
    } = Xr(n), o = _e(() => {
      var p;
      return ((p = r.value) == null ? void 0 : p.menuItems) || [];
    }), a = _e(
      () => s.value === r.value.id && n.isMenuExpanded
    ), l = () => {
      a.value ? t("setActiveParent", "") : t("setActiveParent", r.value.id), d(void 0, r.value);
    }, d = (p, N) => {
      p && (p.stopPropagation(), p.preventDefault()), N && t("navigate", N);
    }, h = (p, N) => {
      p && p.find((F) => i.value.includes(F.url)) && t("setActiveParent", N);
    };
    cn(() => {
      o.value && h(o.value, r.value.id);
    }), ut(o, (p) => {
      p && h(p, r.value.id);
    });
    const f = _e(
      () => o.value.find((p) => i.value.includes(p.url))
    ), w = _e(
      () => f.value ? f.value.id : ""
    ), v = _e(
      () => !f.value && i.value.includes(r.value.url)
    );
    return (p, N) => (E(), A("div", wd, [
      x("a", {
        tabindex: "0",
        role: "button",
        "data-test": b(hd),
        class: ie([
          " shd-flex shd-w-auto shd-min-w-min shd-cursor-pointer shd-items-center shd-border-[1px] shd-py-1.5",
          b(a) ? "shd-bg-surface-50 shd-rounded-t" : "shd-rounded",
          b(v) ? "shd-bg-black shd-font-semibold shd-text-white" : "shd-text-regular hover:shd-bg-surface-50 focus:shd-bg-surface-50"
        ]),
        "aria-label": b(r).name + " accordion menu",
        onClick: l,
        onKeyup: [
          Xt(l, ["enter"]),
          Xt(l, ["space"])
        ]
      }, [
        G(Ti, {
          name: b(r).slug,
          class: ie([
            e.isMainContent ? "shd-mx-2.5 shd-w-6" : "shd-mx-3 shd-my-1 shd-w-4",
            b(v) ? "iconWhite" : "iconBlack"
          ])
        }, null, 8, ["name", "class"]),
        e.isMenuExpanded ? (E(), A("span", {
          key: 0,
          class: ie([
            "shd-whitespace-nowrap shd-capitalize",
            b(v) ? "shd-bg-black shd-font-semibold shd-text-white" : "shd-text-regular"
          ]),
          "data-test": "nav-menu-main-text"
        }, W(b(r).name), 3)) : ce("", !0),
        b(o).length && e.isMenuExpanded && b(a) ? (E(), Le(b(id), {
          key: 1,
          class: ie([
            "shd-mr-1 shd-ml-auto shd-h-4 shd-w-4",
            b(v) ? "iconWhite" : "iconBlack"
          ])
        }, null, 8, ["class"])) : ce("", !0),
        b(o).length && e.isMenuExpanded && !b(a) ? (E(), Le(b(dd), {
          key: 2,
          class: ie([
            "shd-mr-1 shd-ml-auto shd-h-4 shd-w-4",
            b(v) ? "iconWhite" : "iconBlack"
          ])
        }, null, 8, ["class"])) : ce("", !0)
      ], 42, bd),
      x("div", {
        class: ie({
          "shd-bg-surface-50 shd-whitespace-nowrap shd-rounded-bl shd-rounded-br shd-p-0 shd-pl-1": !0,
          open: b(a),
          collapsible: !0
        }),
        "data-test": "nav-menu-child"
      }, [
        (E(!0), A(te, null, He(b(o), (M) => (E(), A("div", {
          key: M.id,
          class: ie([
            "shd-p-1",
            b(w) === M.id ? "shd-bg-black" : "hover:shd-bg-surface-50 shd-bg-white"
          ])
        }, [
          x("a", {
            href: "#",
            class: ie([
              "shd-block shd-p-1 shd-no-underline",
              b(w) === M.id ? "shd-bg-black shd-font-semibold shd-text-white" : "shd-text-regular"
            ]),
            tabindex: b(a) ? "" : -1,
            onClick: (F) => d(F, M)
          }, W(M.name), 11, xd)
        ], 2))), 128))
      ], 2)
    ]));
  }
}), vd = /* @__PURE__ */ Ne({
  __name: "SkeletonComponent",
  props: {
    shape: { default: "rectangle" },
    size: { default: "" },
    width: { default: "100%" },
    height: { default: "1rem" },
    background: { default: "shd-bg-divider-border" }
  },
  setup(e) {
    const t = e, { size: n, width: s, height: r } = Xr(t), i = _e(
      () => n != null && n.value ? {
        width: n.value,
        height: n.value
      } : {
        width: s.value,
        height: r.value
      }
    );
    return (o, a) => (E(), A("div", {
      style: kn(b(i)),
      class: ie(["shd-skeleton shd-relative shd-overflow-hidden", [
        e.shape === "circle" ? "shd-rounded-full" : "shd-rounded-md",
        e.background
      ]])
    }, null, 6));
  }
}), _d = `.shd-skeleton:after{--tw-content: "";content:var(--tw-content);position:absolute;left:0px;right:0px;top:0px;height:100%;--tw-translate-x: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@-webkit-keyframes shd-left-to-right{0%{transform:translate(-100%)}to{transform:translate(100%)}}@keyframes shd-left-to-right{0%{transform:translate(-100%)}to{transform:translate(100%)}}.shd-skeleton:after{-webkit-animation:shd-left-to-right 1.2s infinite;animation:shd-left-to-right 1.2s infinite;z-index:10;background-image:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.4),rgba(255,255,255,0))}
`, Ps = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, Nt = /* @__PURE__ */ Ps(vd, [["styles", [_d]]]), yr = /* @__PURE__ */ Ne({
  __name: "NavMenuItemLoading",
  props: {
    isMainContent: { type: Boolean },
    isMenuExpanded: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (E(), A("div", {
      class: ie(["mb-1 shd-items-center shd-py-1.5", { "shd-flex": e.isMenuExpanded }])
    }, [
      G(Nt, {
        size: e.isMainContent ? "1.5rem" : "1rem",
        class: ie([e.isMainContent ? "shd-mx-2.5" : "shd-mx-3 shd-my-1", "shd-flex-shrink-0"])
      }, null, 8, ["size", "class"]),
      e.isMenuExpanded ? (E(), Le(Nt, {
        key: 0,
        class: "shd-mr-6"
      })) : ce("", !0)
    ], 2));
  }
});
var In = function() {
  return In = Object.assign || function(t) {
    for (var n, s = 1, r = arguments.length; s < r; s++) {
      n = arguments[s];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, In.apply(this, arguments);
};
function zn(e, t) {
  if (!Boolean(e))
    throw new Error(t);
}
function yd(e) {
  return typeof e == "object" && e !== null;
}
function Ed(e, t) {
  if (!Boolean(e))
    throw new Error(
      t != null ? t : "Unexpected invariant triggered."
    );
}
const Id = /\r\n|[\n\r]/g;
function as(e, t) {
  let n = 0, s = 1;
  for (const r of e.body.matchAll(Id)) {
    if (typeof r.index == "number" || Ed(!1), r.index >= t)
      break;
    n = r.index + r[0].length, s += 1;
  }
  return {
    line: s,
    column: t + 1 - n
  };
}
function Nd(e) {
  return ki(
    e.source,
    as(e.source, e.start)
  );
}
function ki(e, t) {
  const n = e.locationOffset.column - 1, s = "".padStart(n) + e.body, r = t.line - 1, i = e.locationOffset.line - 1, o = t.line + i, a = t.line === 1 ? n : 0, l = t.column + a, d = `${e.name}:${o}:${l}
`, h = s.split(/\r\n|[\n\r]/g), f = h[r];
  if (f.length > 120) {
    const w = Math.floor(l / 80), v = l % 80, p = [];
    for (let N = 0; N < f.length; N += 80)
      p.push(f.slice(N, N + 80));
    return d + Er([
      [`${o} |`, p[0]],
      ...p.slice(1, w + 1).map((N) => ["|", N]),
      ["|", "^".padStart(v)],
      ["|", p[w + 1]]
    ]);
  }
  return d + Er([
    [`${o - 1} |`, h[r - 1]],
    [`${o} |`, f],
    ["|", "^".padStart(l)],
    [`${o + 1} |`, h[r + 1]]
  ]);
}
function Er(e) {
  const t = e.filter(([s, r]) => r !== void 0), n = Math.max(...t.map(([s]) => s.length));
  return t.map(([s, r]) => s.padStart(n) + (r ? " " + r : "")).join(`
`);
}
function Td(e) {
  const t = e[0];
  return t == null || "kind" in t || "length" in t ? {
    nodes: t,
    source: e[1],
    positions: e[2],
    path: e[3],
    originalError: e[4],
    extensions: e[5]
  } : t;
}
class Us extends Error {
  constructor(t, ...n) {
    var s, r, i;
    const { nodes: o, source: a, positions: l, path: d, originalError: h, extensions: f } = Td(n);
    super(t), this.name = "GraphQLError", this.path = d != null ? d : void 0, this.originalError = h != null ? h : void 0, this.nodes = Ir(
      Array.isArray(o) ? o : o ? [o] : void 0
    );
    const w = Ir(
      (s = this.nodes) === null || s === void 0 ? void 0 : s.map((p) => p.loc).filter((p) => p != null)
    );
    this.source = a != null ? a : w == null || (r = w[0]) === null || r === void 0 ? void 0 : r.source, this.positions = l != null ? l : w == null ? void 0 : w.map((p) => p.start), this.locations = l && a ? l.map((p) => as(a, p)) : w == null ? void 0 : w.map((p) => as(p.source, p.start));
    const v = yd(
      h == null ? void 0 : h.extensions
    ) ? h == null ? void 0 : h.extensions : void 0;
    this.extensions = (i = f != null ? f : v) !== null && i !== void 0 ? i : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
      message: {
        writable: !0,
        enumerable: !0
      },
      name: {
        enumerable: !1
      },
      nodes: {
        enumerable: !1
      },
      source: {
        enumerable: !1
      },
      positions: {
        enumerable: !1
      },
      originalError: {
        enumerable: !1
      }
    }), h != null && h.stack ? Object.defineProperty(this, "stack", {
      value: h.stack,
      writable: !0,
      configurable: !0
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, Us) : Object.defineProperty(this, "stack", {
      value: Error().stack,
      writable: !0,
      configurable: !0
    });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let t = this.message;
    if (this.nodes)
      for (const n of this.nodes)
        n.loc && (t += `

` + Nd(n.loc));
    else if (this.source && this.locations)
      for (const n of this.locations)
        t += `

` + ki(this.source, n);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
}
function Ir(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
function ve(e, t, n) {
  return new Us(`Syntax Error: ${n}`, {
    source: e,
    positions: [t]
  });
}
class kd {
  constructor(t, n, s) {
    this.start = t.start, this.end = n.end, this.startToken = t, this.endToken = n, this.source = s;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  }
}
class Ai {
  constructor(t, n, s, r, i, o) {
    this.kind = t, this.start = n, this.end = s, this.line = r, this.column = i, this.value = o, this.prev = null, this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }
}
var St;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(St || (St = {}));
var ls;
(function(e) {
  e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(ls || (ls = {}));
var j;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(j || (j = {}));
function Ad(e) {
  return e === 9 || e === 32;
}
function an(e) {
  return e >= 48 && e <= 57;
}
function Si(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Ci(e) {
  return Si(e) || e === 95;
}
function Sd(e) {
  return Si(e) || an(e) || e === 95;
}
function Cd(e) {
  var t;
  let n = Number.MAX_SAFE_INTEGER, s = null, r = -1;
  for (let o = 0; o < e.length; ++o) {
    var i;
    const a = e[o], l = Md(a);
    l !== a.length && (s = (i = s) !== null && i !== void 0 ? i : o, r = o, o !== 0 && l < n && (n = l));
  }
  return e.map((o, a) => a === 0 ? o : o.slice(n)).slice(
    (t = s) !== null && t !== void 0 ? t : 0,
    r + 1
  );
}
function Md(e) {
  let t = 0;
  for (; t < e.length && Ad(e.charCodeAt(t)); )
    ++t;
  return t;
}
var g;
(function(e) {
  e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment";
})(g || (g = {}));
class $d {
  constructor(t) {
    const n = new Ai(g.SOF, 0, 0, 0, 0);
    this.source = t, this.lastToken = n, this.token = n, this.line = 1, this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  advance() {
    return this.lastToken = this.token, this.token = this.lookahead();
  }
  lookahead() {
    let t = this.token;
    if (t.kind !== g.EOF)
      do
        if (t.next)
          t = t.next;
        else {
          const n = Dd(this, t.end);
          t.next = n, n.prev = t, t = n;
        }
      while (t.kind === g.COMMENT);
    return t;
  }
}
function Od(e) {
  return e === g.BANG || e === g.DOLLAR || e === g.AMP || e === g.PAREN_L || e === g.PAREN_R || e === g.SPREAD || e === g.COLON || e === g.EQUALS || e === g.AT || e === g.BRACKET_L || e === g.BRACKET_R || e === g.BRACE_L || e === g.PIPE || e === g.BRACE_R;
}
function Bt(e) {
  return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
}
function Fn(e, t) {
  return Mi(e.charCodeAt(t)) && $i(e.charCodeAt(t + 1));
}
function Mi(e) {
  return e >= 55296 && e <= 56319;
}
function $i(e) {
  return e >= 56320 && e <= 57343;
}
function Tt(e, t) {
  const n = e.source.body.codePointAt(t);
  if (n === void 0)
    return g.EOF;
  if (n >= 32 && n <= 126) {
    const s = String.fromCodePoint(n);
    return s === '"' ? `'"'` : `"${s}"`;
  }
  return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function be(e, t, n, s, r) {
  const i = e.line, o = 1 + n - e.lineStart;
  return new Ai(t, n, s, i, o, r);
}
function Dd(e, t) {
  const n = e.source.body, s = n.length;
  let r = t;
  for (; r < s; ) {
    const i = n.charCodeAt(r);
    switch (i) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++r;
        continue;
      case 10:
        ++r, ++e.line, e.lineStart = r;
        continue;
      case 13:
        n.charCodeAt(r + 1) === 10 ? r += 2 : ++r, ++e.line, e.lineStart = r;
        continue;
      case 35:
        return Ld(e, r);
      case 33:
        return be(e, g.BANG, r, r + 1);
      case 36:
        return be(e, g.DOLLAR, r, r + 1);
      case 38:
        return be(e, g.AMP, r, r + 1);
      case 40:
        return be(e, g.PAREN_L, r, r + 1);
      case 41:
        return be(e, g.PAREN_R, r, r + 1);
      case 46:
        if (n.charCodeAt(r + 1) === 46 && n.charCodeAt(r + 2) === 46)
          return be(e, g.SPREAD, r, r + 3);
        break;
      case 58:
        return be(e, g.COLON, r, r + 1);
      case 61:
        return be(e, g.EQUALS, r, r + 1);
      case 64:
        return be(e, g.AT, r, r + 1);
      case 91:
        return be(e, g.BRACKET_L, r, r + 1);
      case 93:
        return be(e, g.BRACKET_R, r, r + 1);
      case 123:
        return be(e, g.BRACE_L, r, r + 1);
      case 124:
        return be(e, g.PIPE, r, r + 1);
      case 125:
        return be(e, g.BRACE_R, r, r + 1);
      case 34:
        return n.charCodeAt(r + 1) === 34 && n.charCodeAt(r + 2) === 34 ? Vd(e, r) : Rd(e, r);
    }
    if (an(i) || i === 45)
      return Fd(e, r, i);
    if (Ci(i))
      return jd(e, r);
    throw ve(
      e.source,
      r,
      i === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : Bt(i) || Fn(n, r) ? `Unexpected character: ${Tt(e, r)}.` : `Invalid character: ${Tt(e, r)}.`
    );
  }
  return be(e, g.EOF, s, s);
}
function Ld(e, t) {
  const n = e.source.body, s = n.length;
  let r = t + 1;
  for (; r < s; ) {
    const i = n.charCodeAt(r);
    if (i === 10 || i === 13)
      break;
    if (Bt(i))
      ++r;
    else if (Fn(n, r))
      r += 2;
    else
      break;
  }
  return be(
    e,
    g.COMMENT,
    t,
    r,
    n.slice(t + 1, r)
  );
}
function Fd(e, t, n) {
  const s = e.source.body;
  let r = t, i = n, o = !1;
  if (i === 45 && (i = s.charCodeAt(++r)), i === 48) {
    if (i = s.charCodeAt(++r), an(i))
      throw ve(
        e.source,
        r,
        `Invalid number, unexpected digit after 0: ${Tt(
          e,
          r
        )}.`
      );
  } else
    r = Yn(e, r, i), i = s.charCodeAt(r);
  if (i === 46 && (o = !0, i = s.charCodeAt(++r), r = Yn(e, r, i), i = s.charCodeAt(r)), (i === 69 || i === 101) && (o = !0, i = s.charCodeAt(++r), (i === 43 || i === 45) && (i = s.charCodeAt(++r)), r = Yn(e, r, i), i = s.charCodeAt(r)), i === 46 || Ci(i))
    throw ve(
      e.source,
      r,
      `Invalid number, expected digit but got: ${Tt(
        e,
        r
      )}.`
    );
  return be(
    e,
    o ? g.FLOAT : g.INT,
    t,
    r,
    s.slice(t, r)
  );
}
function Yn(e, t, n) {
  if (!an(n))
    throw ve(
      e.source,
      t,
      `Invalid number, expected digit but got: ${Tt(
        e,
        t
      )}.`
    );
  const s = e.source.body;
  let r = t + 1;
  for (; an(s.charCodeAt(r)); )
    ++r;
  return r;
}
function Rd(e, t) {
  const n = e.source.body, s = n.length;
  let r = t + 1, i = r, o = "";
  for (; r < s; ) {
    const a = n.charCodeAt(r);
    if (a === 34)
      return o += n.slice(i, r), be(e, g.STRING, t, r + 1, o);
    if (a === 92) {
      o += n.slice(i, r);
      const l = n.charCodeAt(r + 1) === 117 ? n.charCodeAt(r + 2) === 123 ? Pd(e, r) : Ud(e, r) : Bd(e, r);
      o += l.value, r += l.size, i = r;
      continue;
    }
    if (a === 10 || a === 13)
      break;
    if (Bt(a))
      ++r;
    else if (Fn(n, r))
      r += 2;
    else
      throw ve(
        e.source,
        r,
        `Invalid character within String: ${Tt(
          e,
          r
        )}.`
      );
  }
  throw ve(e.source, r, "Unterminated string.");
}
function Pd(e, t) {
  const n = e.source.body;
  let s = 0, r = 3;
  for (; r < 12; ) {
    const i = n.charCodeAt(t + r++);
    if (i === 125) {
      if (r < 5 || !Bt(s))
        break;
      return {
        value: String.fromCodePoint(s),
        size: r
      };
    }
    if (s = s << 4 | Wt(i), s < 0)
      break;
  }
  throw ve(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${n.slice(
      t,
      t + r
    )}".`
  );
}
function Ud(e, t) {
  const n = e.source.body, s = Nr(n, t + 2);
  if (Bt(s))
    return {
      value: String.fromCodePoint(s),
      size: 6
    };
  if (Mi(s) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
    const r = Nr(n, t + 8);
    if ($i(r))
      return {
        value: String.fromCodePoint(s, r),
        size: 12
      };
  }
  throw ve(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`
  );
}
function Nr(e, t) {
  return Wt(e.charCodeAt(t)) << 12 | Wt(e.charCodeAt(t + 1)) << 8 | Wt(e.charCodeAt(t + 2)) << 4 | Wt(e.charCodeAt(t + 3));
}
function Wt(e) {
  return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
}
function Bd(e, t) {
  const n = e.source.body;
  switch (n.charCodeAt(t + 1)) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: `
`,
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw ve(
    e.source,
    t,
    `Invalid character escape sequence: "${n.slice(
      t,
      t + 2
    )}".`
  );
}
function Vd(e, t) {
  const n = e.source.body, s = n.length;
  let r = e.lineStart, i = t + 3, o = i, a = "";
  const l = [];
  for (; i < s; ) {
    const d = n.charCodeAt(i);
    if (d === 34 && n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34) {
      a += n.slice(o, i), l.push(a);
      const h = be(
        e,
        g.BLOCK_STRING,
        t,
        i + 3,
        Cd(l).join(`
`)
      );
      return e.line += l.length - 1, e.lineStart = r, h;
    }
    if (d === 92 && n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 && n.charCodeAt(i + 3) === 34) {
      a += n.slice(o, i), o = i + 1, i += 4;
      continue;
    }
    if (d === 10 || d === 13) {
      a += n.slice(o, i), l.push(a), d === 13 && n.charCodeAt(i + 1) === 10 ? i += 2 : ++i, a = "", o = i, r = i;
      continue;
    }
    if (Bt(d))
      ++i;
    else if (Fn(n, i))
      i += 2;
    else
      throw ve(
        e.source,
        i,
        `Invalid character within String: ${Tt(
          e,
          i
        )}.`
      );
  }
  throw ve(e.source, i, "Unterminated string.");
}
function jd(e, t) {
  const n = e.source.body, s = n.length;
  let r = t + 1;
  for (; r < s; ) {
    const i = n.charCodeAt(r);
    if (Sd(i))
      ++r;
    else
      break;
  }
  return be(
    e,
    g.NAME,
    t,
    r,
    n.slice(t, r)
  );
}
const Hd = 10, Oi = 2;
function zd(e) {
  return Rn(e, []);
}
function Rn(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return Yd(e, t);
    default:
      return String(e);
  }
}
function Yd(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const n = [...t, e];
  if (Zd(e)) {
    const s = e.toJSON();
    if (s !== e)
      return typeof s == "string" ? s : Rn(s, n);
  } else if (Array.isArray(e))
    return qd(e, n);
  return Wd(e, n);
}
function Zd(e) {
  return typeof e.toJSON == "function";
}
function Wd(e, t) {
  const n = Object.entries(e);
  if (n.length === 0)
    return "{}";
  if (t.length > Oi)
    return "[" + Jd(e) + "]";
  const s = n.map(
    ([r, i]) => r + ": " + Rn(i, t)
  );
  return "{ " + s.join(", ") + " }";
}
function qd(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > Oi)
    return "[Array]";
  const n = Math.min(Hd, e.length), s = e.length - n, r = [];
  for (let i = 0; i < n; ++i)
    r.push(Rn(e[i], t));
  return s === 1 ? r.push("... 1 more item") : s > 1 && r.push(`... ${s} more items`), "[" + r.join(", ") + "]";
}
function Jd(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const n = e.constructor.name;
    if (typeof n == "string" && n !== "")
      return n;
  }
  return t;
}
const Gd = function(t, n) {
  return t instanceof n;
};
class Di {
  constructor(t, n = "GraphQL request", s = {
    line: 1,
    column: 1
  }) {
    typeof t == "string" || zn(!1, `Body must be a string. Received: ${zd(t)}.`), this.body = t, this.name = n, this.locationOffset = s, this.locationOffset.line > 0 || zn(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || zn(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function Kd(e) {
  return Gd(e, Di);
}
function Xd(e, t) {
  return new Qd(e, t).parseDocument();
}
class Qd {
  constructor(t, n = {}) {
    const s = Kd(t) ? t : new Di(t);
    this._lexer = new $d(s), this._options = n, this._tokenCounter = 0;
  }
  parseName() {
    const t = this.expectToken(g.NAME);
    return this.node(t, {
      kind: j.NAME,
      value: t.value
    });
  }
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: j.DOCUMENT,
      definitions: this.many(
        g.SOF,
        this.parseDefinition,
        g.EOF
      )
    });
  }
  parseDefinition() {
    if (this.peek(g.BRACE_L))
      return this.parseOperationDefinition();
    const t = this.peekDescription(), n = t ? this._lexer.lookahead() : this._lexer.token;
    if (n.kind === g.NAME) {
      switch (n.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (t)
        throw ve(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      switch (n.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(n);
  }
  parseOperationDefinition() {
    const t = this._lexer.token;
    if (this.peek(g.BRACE_L))
      return this.node(t, {
        kind: j.OPERATION_DEFINITION,
        operation: St.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    const n = this.parseOperationType();
    let s;
    return this.peek(g.NAME) && (s = this.parseName()), this.node(t, {
      kind: j.OPERATION_DEFINITION,
      operation: n,
      name: s,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  parseOperationType() {
    const t = this.expectToken(g.NAME);
    switch (t.value) {
      case "query":
        return St.QUERY;
      case "mutation":
        return St.MUTATION;
      case "subscription":
        return St.SUBSCRIPTION;
    }
    throw this.unexpected(t);
  }
  parseVariableDefinitions() {
    return this.optionalMany(
      g.PAREN_L,
      this.parseVariableDefinition,
      g.PAREN_R
    );
  }
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: j.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(g.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(g.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  parseVariable() {
    const t = this._lexer.token;
    return this.expectToken(g.DOLLAR), this.node(t, {
      kind: j.VARIABLE,
      name: this.parseName()
    });
  }
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: j.SELECTION_SET,
      selections: this.many(
        g.BRACE_L,
        this.parseSelection,
        g.BRACE_R
      )
    });
  }
  parseSelection() {
    return this.peek(g.SPREAD) ? this.parseFragment() : this.parseField();
  }
  parseField() {
    const t = this._lexer.token, n = this.parseName();
    let s, r;
    return this.expectOptionalToken(g.COLON) ? (s = n, r = this.parseName()) : r = n, this.node(t, {
      kind: j.FIELD,
      alias: s,
      name: r,
      arguments: this.parseArguments(!1),
      directives: this.parseDirectives(!1),
      selectionSet: this.peek(g.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  parseArguments(t) {
    const n = t ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(g.PAREN_L, n, g.PAREN_R);
  }
  parseArgument(t = !1) {
    const n = this._lexer.token, s = this.parseName();
    return this.expectToken(g.COLON), this.node(n, {
      kind: j.ARGUMENT,
      name: s,
      value: this.parseValueLiteral(t)
    });
  }
  parseConstArgument() {
    return this.parseArgument(!0);
  }
  parseFragment() {
    const t = this._lexer.token;
    this.expectToken(g.SPREAD);
    const n = this.expectOptionalKeyword("on");
    return !n && this.peek(g.NAME) ? this.node(t, {
      kind: j.FRAGMENT_SPREAD,
      name: this.parseFragmentName(),
      directives: this.parseDirectives(!1)
    }) : this.node(t, {
      kind: j.INLINE_FRAGMENT,
      typeCondition: n ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  parseFragmentDefinition() {
    const t = this._lexer.token;
    return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(t, {
      kind: j.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      variableDefinitions: this.parseVariableDefinitions(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    }) : this.node(t, {
      kind: j.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  parseFragmentName() {
    if (this._lexer.token.value === "on")
      throw this.unexpected();
    return this.parseName();
  }
  parseValueLiteral(t) {
    const n = this._lexer.token;
    switch (n.kind) {
      case g.BRACKET_L:
        return this.parseList(t);
      case g.BRACE_L:
        return this.parseObject(t);
      case g.INT:
        return this.advanceLexer(), this.node(n, {
          kind: j.INT,
          value: n.value
        });
      case g.FLOAT:
        return this.advanceLexer(), this.node(n, {
          kind: j.FLOAT,
          value: n.value
        });
      case g.STRING:
      case g.BLOCK_STRING:
        return this.parseStringLiteral();
      case g.NAME:
        switch (this.advanceLexer(), n.value) {
          case "true":
            return this.node(n, {
              kind: j.BOOLEAN,
              value: !0
            });
          case "false":
            return this.node(n, {
              kind: j.BOOLEAN,
              value: !1
            });
          case "null":
            return this.node(n, {
              kind: j.NULL
            });
          default:
            return this.node(n, {
              kind: j.ENUM,
              value: n.value
            });
        }
      case g.DOLLAR:
        if (t)
          if (this.expectToken(g.DOLLAR), this._lexer.token.kind === g.NAME) {
            const s = this._lexer.token.value;
            throw ve(
              this._lexer.source,
              n.start,
              `Unexpected variable "$${s}" in constant value.`
            );
          } else
            throw this.unexpected(n);
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(!0);
  }
  parseStringLiteral() {
    const t = this._lexer.token;
    return this.advanceLexer(), this.node(t, {
      kind: j.STRING,
      value: t.value,
      block: t.kind === g.BLOCK_STRING
    });
  }
  parseList(t) {
    const n = () => this.parseValueLiteral(t);
    return this.node(this._lexer.token, {
      kind: j.LIST,
      values: this.any(g.BRACKET_L, n, g.BRACKET_R)
    });
  }
  parseObject(t) {
    const n = () => this.parseObjectField(t);
    return this.node(this._lexer.token, {
      kind: j.OBJECT,
      fields: this.any(g.BRACE_L, n, g.BRACE_R)
    });
  }
  parseObjectField(t) {
    const n = this._lexer.token, s = this.parseName();
    return this.expectToken(g.COLON), this.node(n, {
      kind: j.OBJECT_FIELD,
      name: s,
      value: this.parseValueLiteral(t)
    });
  }
  parseDirectives(t) {
    const n = [];
    for (; this.peek(g.AT); )
      n.push(this.parseDirective(t));
    return n;
  }
  parseConstDirectives() {
    return this.parseDirectives(!0);
  }
  parseDirective(t) {
    const n = this._lexer.token;
    return this.expectToken(g.AT), this.node(n, {
      kind: j.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(t)
    });
  }
  parseTypeReference() {
    const t = this._lexer.token;
    let n;
    if (this.expectOptionalToken(g.BRACKET_L)) {
      const s = this.parseTypeReference();
      this.expectToken(g.BRACKET_R), n = this.node(t, {
        kind: j.LIST_TYPE,
        type: s
      });
    } else
      n = this.parseNamedType();
    return this.expectOptionalToken(g.BANG) ? this.node(t, {
      kind: j.NON_NULL_TYPE,
      type: n
    }) : n;
  }
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: j.NAMED_TYPE,
      name: this.parseName()
    });
  }
  peekDescription() {
    return this.peek(g.STRING) || this.peek(g.BLOCK_STRING);
  }
  parseDescription() {
    if (this.peekDescription())
      return this.parseStringLiteral();
  }
  parseSchemaDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("schema");
    const s = this.parseConstDirectives(), r = this.many(
      g.BRACE_L,
      this.parseOperationTypeDefinition,
      g.BRACE_R
    );
    return this.node(t, {
      kind: j.SCHEMA_DEFINITION,
      description: n,
      directives: s,
      operationTypes: r
    });
  }
  parseOperationTypeDefinition() {
    const t = this._lexer.token, n = this.parseOperationType();
    this.expectToken(g.COLON);
    const s = this.parseNamedType();
    return this.node(t, {
      kind: j.OPERATION_TYPE_DEFINITION,
      operation: n,
      type: s
    });
  }
  parseScalarTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("scalar");
    const s = this.parseName(), r = this.parseConstDirectives();
    return this.node(t, {
      kind: j.SCALAR_TYPE_DEFINITION,
      description: n,
      name: s,
      directives: r
    });
  }
  parseObjectTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("type");
    const s = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), o = this.parseFieldsDefinition();
    return this.node(t, {
      kind: j.OBJECT_TYPE_DEFINITION,
      description: n,
      name: s,
      interfaces: r,
      directives: i,
      fields: o
    });
  }
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(g.AMP, this.parseNamedType) : [];
  }
  parseFieldsDefinition() {
    return this.optionalMany(
      g.BRACE_L,
      this.parseFieldDefinition,
      g.BRACE_R
    );
  }
  parseFieldDefinition() {
    const t = this._lexer.token, n = this.parseDescription(), s = this.parseName(), r = this.parseArgumentDefs();
    this.expectToken(g.COLON);
    const i = this.parseTypeReference(), o = this.parseConstDirectives();
    return this.node(t, {
      kind: j.FIELD_DEFINITION,
      description: n,
      name: s,
      arguments: r,
      type: i,
      directives: o
    });
  }
  parseArgumentDefs() {
    return this.optionalMany(
      g.PAREN_L,
      this.parseInputValueDef,
      g.PAREN_R
    );
  }
  parseInputValueDef() {
    const t = this._lexer.token, n = this.parseDescription(), s = this.parseName();
    this.expectToken(g.COLON);
    const r = this.parseTypeReference();
    let i;
    this.expectOptionalToken(g.EQUALS) && (i = this.parseConstValueLiteral());
    const o = this.parseConstDirectives();
    return this.node(t, {
      kind: j.INPUT_VALUE_DEFINITION,
      description: n,
      name: s,
      type: r,
      defaultValue: i,
      directives: o
    });
  }
  parseInterfaceTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("interface");
    const s = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), o = this.parseFieldsDefinition();
    return this.node(t, {
      kind: j.INTERFACE_TYPE_DEFINITION,
      description: n,
      name: s,
      interfaces: r,
      directives: i,
      fields: o
    });
  }
  parseUnionTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("union");
    const s = this.parseName(), r = this.parseConstDirectives(), i = this.parseUnionMemberTypes();
    return this.node(t, {
      kind: j.UNION_TYPE_DEFINITION,
      description: n,
      name: s,
      directives: r,
      types: i
    });
  }
  parseUnionMemberTypes() {
    return this.expectOptionalToken(g.EQUALS) ? this.delimitedMany(g.PIPE, this.parseNamedType) : [];
  }
  parseEnumTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("enum");
    const s = this.parseName(), r = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
    return this.node(t, {
      kind: j.ENUM_TYPE_DEFINITION,
      description: n,
      name: s,
      directives: r,
      values: i
    });
  }
  parseEnumValuesDefinition() {
    return this.optionalMany(
      g.BRACE_L,
      this.parseEnumValueDefinition,
      g.BRACE_R
    );
  }
  parseEnumValueDefinition() {
    const t = this._lexer.token, n = this.parseDescription(), s = this.parseEnumValueName(), r = this.parseConstDirectives();
    return this.node(t, {
      kind: j.ENUM_VALUE_DEFINITION,
      description: n,
      name: s,
      directives: r
    });
  }
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null")
      throw ve(
        this._lexer.source,
        this._lexer.token.start,
        `${mn(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    return this.parseName();
  }
  parseInputObjectTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("input");
    const s = this.parseName(), r = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
    return this.node(t, {
      kind: j.INPUT_OBJECT_TYPE_DEFINITION,
      description: n,
      name: s,
      directives: r,
      fields: i
    });
  }
  parseInputFieldsDefinition() {
    return this.optionalMany(
      g.BRACE_L,
      this.parseInputValueDef,
      g.BRACE_R
    );
  }
  parseTypeSystemExtension() {
    const t = this._lexer.lookahead();
    if (t.kind === g.NAME)
      switch (t.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    throw this.unexpected(t);
  }
  parseSchemaExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("schema");
    const n = this.parseConstDirectives(), s = this.optionalMany(
      g.BRACE_L,
      this.parseOperationTypeDefinition,
      g.BRACE_R
    );
    if (n.length === 0 && s.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: j.SCHEMA_EXTENSION,
      directives: n,
      operationTypes: s
    });
  }
  parseScalarTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    const n = this.parseName(), s = this.parseConstDirectives();
    if (s.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: j.SCALAR_TYPE_EXTENSION,
      name: n,
      directives: s
    });
  }
  parseObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("type");
    const n = this.parseName(), s = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), i = this.parseFieldsDefinition();
    if (s.length === 0 && r.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: j.OBJECT_TYPE_EXTENSION,
      name: n,
      interfaces: s,
      directives: r,
      fields: i
    });
  }
  parseInterfaceTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("interface");
    const n = this.parseName(), s = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), i = this.parseFieldsDefinition();
    if (s.length === 0 && r.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: j.INTERFACE_TYPE_EXTENSION,
      name: n,
      interfaces: s,
      directives: r,
      fields: i
    });
  }
  parseUnionTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("union");
    const n = this.parseName(), s = this.parseConstDirectives(), r = this.parseUnionMemberTypes();
    if (s.length === 0 && r.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: j.UNION_TYPE_EXTENSION,
      name: n,
      directives: s,
      types: r
    });
  }
  parseEnumTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("enum");
    const n = this.parseName(), s = this.parseConstDirectives(), r = this.parseEnumValuesDefinition();
    if (s.length === 0 && r.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: j.ENUM_TYPE_EXTENSION,
      name: n,
      directives: s,
      values: r
    });
  }
  parseInputObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("input");
    const n = this.parseName(), s = this.parseConstDirectives(), r = this.parseInputFieldsDefinition();
    if (s.length === 0 && r.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: j.INPUT_OBJECT_TYPE_EXTENSION,
      name: n,
      directives: s,
      fields: r
    });
  }
  parseDirectiveDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken(g.AT);
    const s = this.parseName(), r = this.parseArgumentDefs(), i = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const o = this.parseDirectiveLocations();
    return this.node(t, {
      kind: j.DIRECTIVE_DEFINITION,
      description: n,
      name: s,
      arguments: r,
      repeatable: i,
      locations: o
    });
  }
  parseDirectiveLocations() {
    return this.delimitedMany(g.PIPE, this.parseDirectiveLocation);
  }
  parseDirectiveLocation() {
    const t = this._lexer.token, n = this.parseName();
    if (Object.prototype.hasOwnProperty.call(ls, n.value))
      return n;
    throw this.unexpected(t);
  }
  node(t, n) {
    return this._options.noLocation !== !0 && (n.loc = new kd(
      t,
      this._lexer.lastToken,
      this._lexer.source
    )), n;
  }
  peek(t) {
    return this._lexer.token.kind === t;
  }
  expectToken(t) {
    const n = this._lexer.token;
    if (n.kind === t)
      return this.advanceLexer(), n;
    throw ve(
      this._lexer.source,
      n.start,
      `Expected ${Li(t)}, found ${mn(n)}.`
    );
  }
  expectOptionalToken(t) {
    return this._lexer.token.kind === t ? (this.advanceLexer(), !0) : !1;
  }
  expectKeyword(t) {
    const n = this._lexer.token;
    if (n.kind === g.NAME && n.value === t)
      this.advanceLexer();
    else
      throw ve(
        this._lexer.source,
        n.start,
        `Expected "${t}", found ${mn(n)}.`
      );
  }
  expectOptionalKeyword(t) {
    const n = this._lexer.token;
    return n.kind === g.NAME && n.value === t ? (this.advanceLexer(), !0) : !1;
  }
  unexpected(t) {
    const n = t != null ? t : this._lexer.token;
    return ve(
      this._lexer.source,
      n.start,
      `Unexpected ${mn(n)}.`
    );
  }
  any(t, n, s) {
    this.expectToken(t);
    const r = [];
    for (; !this.expectOptionalToken(s); )
      r.push(n.call(this));
    return r;
  }
  optionalMany(t, n, s) {
    if (this.expectOptionalToken(t)) {
      const r = [];
      do
        r.push(n.call(this));
      while (!this.expectOptionalToken(s));
      return r;
    }
    return [];
  }
  many(t, n, s) {
    this.expectToken(t);
    const r = [];
    do
      r.push(n.call(this));
    while (!this.expectOptionalToken(s));
    return r;
  }
  delimitedMany(t, n) {
    this.expectOptionalToken(t);
    const s = [];
    do
      s.push(n.call(this));
    while (this.expectOptionalToken(t));
    return s;
  }
  advanceLexer() {
    const { maxTokens: t } = this._options, n = this._lexer.advance();
    if (t !== void 0 && n.kind !== g.EOF && (++this._tokenCounter, this._tokenCounter > t))
      throw ve(
        this._lexer.source,
        n.start,
        `Document contains more that ${t} tokens. Parsing aborted.`
      );
  }
}
function mn(e) {
  const t = e.value;
  return Li(e.kind) + (t != null ? ` "${t}"` : "");
}
function Li(e) {
  return Od(e) ? `"${e}"` : e;
}
var bn = /* @__PURE__ */ new Map(), cs = /* @__PURE__ */ new Map(), Fi = !0, Nn = !1;
function Ri(e) {
  return e.replace(/[\s,]+/g, " ").trim();
}
function eu(e) {
  return Ri(e.source.body.substring(e.start, e.end));
}
function tu(e) {
  var t = /* @__PURE__ */ new Set(), n = [];
  return e.definitions.forEach(function(s) {
    if (s.kind === "FragmentDefinition") {
      var r = s.name.value, i = eu(s.loc), o = cs.get(r);
      o && !o.has(i) ? Fi && console.warn("Warning: fragment with name " + r + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : o || cs.set(r, o = /* @__PURE__ */ new Set()), o.add(i), t.has(i) || (t.add(i), n.push(s));
    } else
      n.push(s);
  }), In(In({}, e), { definitions: n });
}
function nu(e) {
  var t = new Set(e.definitions);
  t.forEach(function(s) {
    s.loc && delete s.loc, Object.keys(s).forEach(function(r) {
      var i = s[r];
      i && typeof i == "object" && t.add(i);
    });
  });
  var n = e.loc;
  return n && (delete n.startToken, delete n.endToken), e;
}
function su(e) {
  var t = Ri(e);
  if (!bn.has(t)) {
    var n = Xd(e, {
      experimentalFragmentVariables: Nn,
      allowLegacyFragmentVariables: Nn
    });
    if (!n || n.kind !== "Document")
      throw new Error("Not a valid GraphQL document.");
    bn.set(t, nu(tu(n)));
  }
  return bn.get(t);
}
function Rt(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  typeof e == "string" && (e = [e]);
  var s = e[0];
  return t.forEach(function(r, i) {
    r && r.kind === "Document" ? s += r.loc.source.body : s += r, s += e[i + 1];
  }), su(s);
}
function ru() {
  bn.clear(), cs.clear();
}
function iu() {
  Fi = !1;
}
function ou() {
  Nn = !0;
}
function au() {
  Nn = !1;
}
var zt = {
  gql: Rt,
  resetCaches: ru,
  disableFragmentWarnings: iu,
  enableExperimentalFragmentVariables: ou,
  disableExperimentalFragmentVariables: au
};
(function(e) {
  e.gql = zt.gql, e.resetCaches = zt.resetCaches, e.disableFragmentWarnings = zt.disableFragmentWarnings, e.enableExperimentalFragmentVariables = zt.enableExperimentalFragmentVariables, e.disableExperimentalFragmentVariables = zt.disableExperimentalFragmentVariables;
})(Rt || (Rt = {}));
Rt.default = Rt;
const Te = Rt, lu = ["data-test"], cu = {
  class: "shd-w-stretch shd-mb-2.5",
  "data-test": "primary-section"
}, du = {
  class: "shd-w-stretch shd-mt-auto",
  "data-test": "secondary-section"
}, uu = Te`
    fragment SideNavItem on MenuItem {
      id
      name
      url
      slug
      helpLink
      isFullyMigrated
    }
  `, hu = Te`
    fragment SideNavItemParent on MenuItem {
      ...SideNavItem
      menuItems {
        ...SideNavItem
      }
    }
    ${uu}
  `, fu = Te`
    fragment SideNavBar on Query {
      navigation {
        topMenu: menu {
          ...SideNavItemParent
        }
        bottomMenu: configurationMenu {
          ...SideNavItemParent
        }
  
      }
    }
    ${hu},
  `, pu = /* @__PURE__ */ Ne({
  __name: "TheSideNavBar",
  props: {
    isExpandedByToggle: { type: Boolean },
    sideNavBarData: null,
    warningWidthCompensation: { type: Boolean },
    currentPath: null
  },
  emits: ["onExpand", "onCollapse", "onNavigate"],
  setup(e, { emit: t }) {
    const n = he(!1), s = he(""), r = (o) => s.value = o, i = (o) => t("onNavigate", o);
    return (o, a) => (E(), A("aside", {
      class: ie({
        "shd-top-20": !e.warningWidthCompensation,
        "shd-top-28": e.warningWidthCompensation,
        "shd-fixed shd-bottom-0 shd-overflow-y-auto shd-scrollbar": !0,
        "shd-bg-white shd-shadow-[1px_0_rgb(218,218,218)]": !0,
        "shd-isolate shd-z-20 shd-row-span-2 shd-flex shd-w-16 shd-flex-col shd-flex-nowrap shd-items-start shd-justify-between shd-overflow-hidden shd-p-2.5 shd-duration-200 shd-ease-in-out": !0,
        "shd-w-56": e.isExpandedByToggle || n.value
      }),
      "data-test": ud,
      onMouseover: a[0] || (a[0] = (l) => !e.isExpandedByToggle && (n.value = !0)),
      onMouseleave: a[1] || (a[1] = (l) => !e.isExpandedByToggle && (n.value = !1)),
      onKeyup: [
        a[2] || (a[2] = Xt((l) => !n.value && o.$emit("onExpand"), ["enter"])),
        a[3] || (a[3] = Xt((l) => !n.value && o.$emit("onExpand"), ["space"])),
        a[4] || (a[4] = Xt((l) => !n.value && o.$emit("onCollapse"), ["escape"]))
      ]
    }, [
      x("div", cu, [
        e.sideNavBarData ? (E(!0), A(te, { key: 1 }, He(e.sideNavBarData.navigation.topMenu, (l) => (E(), Le(_r, {
          key: l.id,
          "is-menu-expanded": e.isExpandedByToggle || n.value,
          "nav-item": l,
          "is-main-content": !0,
          "expanded-parent-id": s.value,
          "current-path": e.currentPath,
          "data-test": "nav-menu",
          onSetActiveParent: r,
          onNavigate: i
        }, null, 8, ["is-menu-expanded", "nav-item", "expanded-parent-id", "current-path"]))), 128)) : (E(), A(te, { key: 0 }, He(5, (l) => G(yr, {
          key: l,
          "is-menu-expanded": e.isExpandedByToggle || n.value,
          "is-main-content": !0,
          "data-test": "nav-menu"
        }, null, 8, ["is-menu-expanded"])), 64))
      ]),
      x("div", du, [
        e.sideNavBarData ? (E(!0), A(te, { key: 1 }, He(e.sideNavBarData.navigation.bottomMenu, (l) => (E(), Le(_r, {
          key: l.id,
          "is-menu-expanded": e.isExpandedByToggle || n.value,
          "nav-item": l,
          "is-main-content": !1,
          "expanded-parent-id": s.value,
          "current-path": e.currentPath,
          "data-test": "nav-menu",
          onSetActiveParent: r,
          onNavigate: i
        }, null, 8, ["is-menu-expanded", "nav-item", "expanded-parent-id", "current-path"]))), 128)) : (E(), A(te, { key: 0 }, He(8, (l) => G(yr, {
          key: l,
          "is-menu-expanded": e.isExpandedByToggle || n.value,
          "is-main-content": !1,
          "data-test": "nav-menu"
        }, null, 8, ["is-menu-expanded"])), 64))
      ])
    ], 42, lu));
  }
}), Tr = {
  appNotifications: [
    {
      id: "cb0f121c-64b5-4ec3-aa01-dabf9d407a30",
      title: "Agent logs are ready!",
      detail: "Check the Agent logs!",
      isRead: !1,
      actionUrl: "/agents/commands/?FilterExpressions%5b0%5d.PropertyName=Id&FilterExpressions%5b0%5d.Operator=Equal&FilterExpressions%5b0%5d.Value=85dd5f95-283d-4daa-20f9-ae8204592ede",
      type: "SUCCESS"
    },
    {
      id: "6764fabc-51bd-4efc-b9b3-d7d774fdccd8",
      title: "Agent Updated!",
      detail: "Your Agent successfully updated to the latest version!",
      isRead: !1,
      actionUrl: "/agents/commands/?FilterExpressions%5b0%5d.PropertyName=Id&FilterExpressions%5b0%5d.Operator=Equal&FilterExpressions%5b0%5d.Value=85dd5f95-283d-4daa-20f9-ae8204592ede",
      type: "SUCCESS"
    }
  ],
  unreadNotificationsCount: 5,
  navigation: {
    userProfile: [
      {
        id: "68c2423a-66fb-4f0e-a329-eacc2077fa91",
        name: "Profile",
        url: "/#/profile",
        slug: "profile"
      },
      {
        id: "68c2423a-66fb-4f0e-a329-eacc2077fa92",
        name: "Logout",
        url: "/#/logout",
        slug: "logout"
      }
    ]
  },
  user: { firstName: "Donnie", lastName: "Darko" }
}, mu = {
  license: { access: !1, activated: !1, maintenanceExpired: !0 }
}, kr = {
  navigation: {
    topMenu: [
      {
        id: "310e1714-2cf1-4867-9d12-d2a9cbbc425f",
        name: "Dashboard",
        url: "/#/dashboard",
        slug: "dashboard",
        helpLink: "",
        isFullyMigrated: !1,
        menuItems: []
      },
      {
        id: "310e1714-2cf1-4867-9d12-d2a9cbbc425d",
        name: "Discovery (mocked)",
        url: "/#/discovery",
        helpLink: "https://www.acunetix.com/support/1",
        slug: "discovery",
        isFullyMigrated: !1,
        menuItems: [
          {
            id: "3aa4c95a-7c2f-4349-a0b1-9e57d897efc0",
            name: "Settings",
            url: "/#/discovery/settings",
            helpLink: "https://www.acunetix.com/support/2",
            slug: "discovery-settings",
            isFullyMigrated: !1
          },
          {
            id: "1af85629-8335-4a4a-890a-5bd6786aede2",
            name: "Inclusions",
            url: "/#/discovery/inclusions",
            helpLink: "https://www.acunetix.com/support/3",
            slug: "discovery-inclusions",
            isFullyMigrated: !1
          },
          {
            id: "1af85629-8335-4a4a-890a-5bd6786aede3",
            name: "Exclusions",
            url: "/#/discovery/exclusions",
            helpLink: "https://www.acunetix.com/support/4",
            slug: "discovery-exclusions",
            isFullyMigrated: !1
          }
        ]
      },
      {
        id: "e808b096-cc97-4ffd-8fc7-794cea08762e",
        name: "Targets",
        url: "/#/targets",
        helpLink: "https://www.acunetix.com/support/5",
        slug: "targets",
        isFullyMigrated: !1,
        menuItems: [
          {
            id: "083aa6dd-a703-418a-9087-c81e9f4f0c72",
            name: "Add Targets",
            url: "/#/targets/add-multiple",
            helpLink: "https://www.acunetix.com/support/6",
            slug: "add-targets",
            isFullyMigrated: !1
          },
          {
            id: "49d9f95f-ac25-47e2-b847-24d699aef777",
            name: "Target Groups",
            url: "/#/targets/target-groups",
            helpLink: "https://www.acunetix.com/support/7",
            slug: "target-groups",
            isFullyMigrated: !1
          }
        ]
      },
      {
        id: "4a40312d-8977-493a-822c-1a91663ec635",
        name: "Scans",
        url: "/#/scans",
        helpLink: "https://www.acunetix.com/support/8",
        slug: "scans",
        isFullyMigrated: !1,
        menuItems: []
      },
      {
        id: "62ded77a-8a08-4dba-a3fb-4075a617ffe8",
        name: "Vulnerabilities",
        url: "/#/vulnerabilities",
        helpLink: "https://www.acunetix.com/support/9",
        slug: "vulnerabilities",
        isFullyMigrated: !1,
        menuItems: []
      },
      {
        id: "dd9e436c-cb60-4f69-a3fb-64fcb1096b24",
        name: "Reports",
        url: "/#/reports",
        helpLink: "https://www.acunetix.com/support/10",
        slug: "reports",
        isFullyMigrated: !1,
        menuItems: []
      }
    ],
    bottomMenu: [
      {
        id: "68f7123d-c7c0-41d0-976d-b4e4917ab797",
        name: "Users",
        url: "/#/users",
        slug: "users",
        helpLink: "https://www.acunetix.com/support/10",
        isFullyMigrated: !1,
        menuItems: [
          {
            id: "d71ba65c-24e7-45ad-ae0f-9f3ac4c52e07",
            name: "Add User",
            url: "/#/users/add",
            helpLink: "https://www.acunetix.com/support/11",
            slug: "add-user",
            isFullyMigrated: !1
          },
          {
            id: "1c78d59f-0ae3-46f4-a2c2-b2b7d9d0d4ff",
            name: "Account Settings",
            url: "/#/users/account-settings",
            helpLink: "https://www.acunetix.com/support/12",
            slug: "account-settings",
            isFullyMigrated: !1
          }
        ]
      },
      {
        id: "a37a8135-f820-47b4-a68e-56388d34eec8",
        name: "Scan profiles",
        url: "/#/scan-profiles",
        helpLink: "https://www.acunetix.com/support/13",
        slug: "scan-profiles",
        isFullyMigrated: !1,
        menuItems: []
      },
      {
        id: "90a9ce16-4bca-4bdb-b0ef-88442c522111",
        name: "Network Scanner",
        url: "/#/network-scanner",
        helpLink: "https://www.acunetix.com/support/14",
        slug: "netscan",
        isFullyMigrated: !1,
        menuItems: []
      },
      {
        id: "90a9ce16-4bca-4bdb-b0ef-88442c5221e6",
        name: "Issue trackers",
        url: "/#/issue-trackers",
        helpLink: "https://www.acunetix.com/support/14",
        slug: "issue-trackers",
        isFullyMigrated: !1,
        menuItems: []
      },
      {
        id: "865e73f3-ae53-45f1-bb0c-0354b8bd7d88",
        name: "WAFs",
        url: "/#/wafs",
        helpLink: "https://www.acunetix.com/support/15",
        slug: "wafs",
        isFullyMigrated: !1,
        menuItems: []
      },
      {
        id: "865e73f3-ae53-45f1-bb0c-0354b8bd7dddd",
        name: "Email settings",
        url: "/#/settings-email",
        helpLink: "https://www.acunetix.com/support/15",
        slug: "settings-email",
        isFullyMigrated: !1,
        menuItems: []
      },
      {
        id: "865e73f3-ae53-45f1-bb0c-0354b8bd7d95",
        name: "Engines",
        url: "/#/engines",
        helpLink: "https://www.acunetix.com/support/15",
        slug: "memory",
        isFullyMigrated: !1,
        menuItems: []
      },
      {
        id: "720602f9-1232-4ee2-9f7c-8b24eb921323",
        name: "Excluded Hours",
        url: "/#/exclude-hours",
        helpLink: "https://www.acunetix.com/support/16",
        slug: "exclude-hours",
        isFullyMigrated: !1,
        menuItems: []
      },
      {
        id: "1618b47d-66c7-4e7d-8503-2a9db3a0bf7c",
        name: "Proxy Settings",
        url: "/#/proxy",
        helpLink: "https://www.acunetix.com/support/17",
        slug: "proxy",
        isFullyMigrated: !1,
        menuItems: []
      },
      {
        id: "1618b47d-66c7-4e7d-8503-2a9db3a0bf7b",
        name: "General Settings",
        url: "/#/settings",
        helpLink: "https://www.acunetix.com/support/17",
        slug: "settings",
        isFullyMigrated: !1,
        menuItems: []
      },
      {
        id: "1618b47d-66c7-4e7d-3232-2a9db3a0bf88",
        name: "About",
        url: "/#/settings",
        helpLink: "https://www.acunetix.com/support/17",
        slug: "info",
        isFullyMigrated: !1,
        menuItems: []
      }
    ]
  }
}, gu = {
  ...Tr,
  ...kr,
  ...mu,
  navigation: {
    ...Tr.navigation,
    ...kr.navigation
  }
}, Pi = new Date(), Ui = new Date();
Ui.setDate(Pi.getDate() - 1);
const wu = {
  systemUpdateInfo: {
    majorVersion: "15",
    minorVersion: "5",
    buildNumber: "20202021",
    updateStatus: "waiting_for_user",
    newUpdate: !0
  },
  manualInterventions: [
    {
      address: "https://php.testsparker.com",
      miSessionId: "1",
      targetId: "1231231"
    },
    {
      address: "http://testphp.vulnweb.com",
      miSessionId: "2",
      targetId: "444444"
    },
    {
      address: "https://php.testsparker.com",
      miSessionId: "23",
      targetId: "9999999"
    }
  ],
  appNotification: {
    appNotifications: {
      totalCount: 7,
      nodes: [
        {
          id: "2946578645696644267",
          resourceId: "f4538e37-f21f-4912-9ae5-31c565500cbd",
          resourceType: 5,
          eventTypeId: 405,
          consumed: !1,
          created: Pi.toDateString(),
          data: '{"ended": "2022-10-08T23:25:23.329037+02:00", "started": "2022-10-08T23:25:22.246201+02:00", "target_id": "4a4ab863-57ff-4452-8bf7-77be78dc8bed", "vuln_stats": null, "event_level": 0, "target_desc": ["https://php.testsparker.com", ""], "profile_name": "Full Scan", "scan_session_id": "35f22c23-5cbd-488d-bfd8-dad15b972023", "failed_job_count": 1}'
        },
        {
          id: "2946578645738587308",
          resourceId: "9a757789-d468-49cc-ba39-f3792cc9f63f",
          resourceType: 7,
          eventTypeId: 405,
          consumed: !1,
          created: Ui.toDateString(),
          data: '{"ended": "2022-10-08T23:25:23.329037+02:00", "started": "2022-10-08T23:25:22.246201+02:00", "target_id": "4a4ab863-57ff-4452-8bf7-77be78dc8bed", "vuln_stats": null, "event_level": 0, "target_desc": ["https://php.testsparker.com", ""], "profile_name": "Full Scan", "scan_session_id": "35f22c23-5cbd-488d-bfd8-dad15b972023", "failed_job_count": 1}'
        },
        {
          id: "2946578645738587308",
          resourceId: "9a757789-d468-49cc-ba39-f3792cc9f63f",
          resourceType: 5,
          eventTypeId: 405,
          consumed: !1,
          created: "2022-10-10 11:12:52.519083+02:00",
          data: '{"ended": "2022-10-08T23:25:23.329037+02:00", "started": "2022-10-08T23:25:22.246201+02:00", "target_id": "4a4ab863-57ff-4452-8bf7-77be78dc8bed", "vuln_stats": null, "event_level": 0, "target_desc": ["https://php.testsparker.com", ""], "profile_name": "Full Scan", "scan_session_id": "35f22c23-5cbd-488d-bfd8-dad15b972023", "failed_job_count": 1}'
        },
        {
          id: "2946578645738587308",
          resourceId: "9a757789-d468-49cc-ba39-f3792cc9f63f",
          resourceType: 8,
          eventTypeId: 801,
          consumed: !1,
          created: "2022-10-10 11:12:52.519083+02:00",
          data: '{"worker_name":"Engine 222","worker_decription":"Engine Description 222", "ended": "2022-10-08T23:25:23.329037+02:00", "started": "2022-10-08T23:25:22.246201+02:00", "target_id": "4a4ab863-57ff-4452-8bf7-77be78dc8bed", "vuln_stats": null, "event_level": 0, "target_desc": ["https://php.testsparker.com", ""], "profile_name": "Full Scan", "scan_session_id": "35f22c23-5cbd-488d-bfd8-dad15b972023", "failed_job_count": 1}'
        },
        {
          id: "2946578645738587308",
          resourceId: "9a757789-d468-49cc-ba39-f3792cc9f63f",
          resourceType: 8,
          eventTypeId: 803,
          data: '{"worker_name":"Engine 222","worker_decription":"Engine Description 222","ended": "2022-10-08T23:25:23.329037+02:00", "started": "2022-10-08T23:25:22.246201+02:00", "target_id": "4a4ab863-57ff-4452-8bf7-77be78dc8bed", "vuln_stats": null, "event_level": 0, "target_desc": ["https://php.testsparker.com", ""], "profile_name": "Full Scan", "scan_session_id": "35f22c23-5cbd-488d-bfd8-dad15b972023", "failed_job_count": 1}',
          consumed: !1,
          created: "2022-10-10 11:12:52.519083+02:00"
        },
        {
          id: "2946578645738587308",
          resourceId: "9a757789-d468-49cc-ba39-f3792cc9f63f",
          resourceType: 5,
          eventTypeId: 405,
          consumed: !0,
          created: "2022-10-5 11:12:52.519083+02:00",
          data: '{"ended": "2022-10-08T23:25:23.329037+02:00", "started": "2022-10-08T23:25:22.246201+02:00", "target_id": "4a4ab863-57ff-4452-8bf7-77be78dc8bed", "vuln_stats": null, "event_level": 0, "target_desc": ["https://php.testsparker.com", ""], "profile_name": "Full Scan", "scan_session_id": "35f22c23-5cbd-488d-bfd8-dad15b972023", "failed_job_count": 1}'
        },
        {
          id: "2946578645738587308",
          resourceId: "9a757789-d468-49cc-ba39-f3792cc9f63f",
          resourceType: 5,
          eventTypeId: 405,
          consumed: !0,
          created: "2022-10-6 11:12:52.519083+02:00",
          data: '{"ended": "2022-10-08T23:25:23.329037+02:00", "started": "2022-10-08T23:25:22.246201+02:00", "target_id": "4a4ab863-57ff-4452-8bf7-77be78dc8bed", "vuln_stats": null, "event_level": 0, "target_desc": ["https://php.testsparker.com", ""], "profile_name": "Full Scan", "scan_session_id": "35f22c23-5cbd-488d-bfd8-dad15b972023", "failed_job_count": 1}'
        }
      ]
    },
    unreadNotificationsCount: 5
  }
}, bu = (e) => {
  const t = he();
  if (e == "getSharedUIData")
    t.value = gu;
  else if (e == "getNotificationData")
    t.value = wu;
  else
    throw new Error("Unknown query " + e);
  return {
    result: t,
    loading: he(!1),
    error: he(null),
    refetch: () => {
    }
  };
}, Bi = (e) => {
  const t = sessionStorage.getItem("x-auth") || localStorage.getItem("x-auth") || "", n = "/graphql/", s = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Auth": t
    },
    body: JSON.stringify({ query: e })
  };
  return { requestURL: n, options: s };
};
function Vi(e) {
  var h, f, w, v;
  const t = (f = (h = e.loc) == null ? void 0 : h.source) == null ? void 0 : f.body, n = "name" in e.definitions[0] && ((w = e.definitions[0].name) == null ? void 0 : w.value);
  if (!t || !n)
    throw new Error("Empty query given");
  if (String((v = window.VITE_MOCK_GQL) != null ? v : "false").trim() == "true")
    return bu(n);
  const s = he(), r = he(!0), i = he(null), { requestURL: o, options: a } = Bi(t), l = (p, N) => {
    r.value = !0, fetch(p, N).then((M) => M.json()).then((M) => {
      s.value = M.data, r.value = !1;
    }).catch((M) => {
      i.value = M, r.value = !1;
    });
  }, d = () => {
    l(o, a);
  };
  return l(o, a), { result: s, loading: r, error: i, refetch: d };
}
async function Tn(e) {
  if (!e)
    throw new Error("Empty query given");
  const { requestURL: t, options: n } = Bi(e), s = await fetch(t, n);
  let r = "";
  if (s.ok) {
    const i = await s.json();
    return i != null && i.errors ? (r = JSON.parse(
      i.errors[0].message.replace(/'/g, '"').replace("None", "null")
    ).message, { error: r }) : { result: i.data };
  } else
    return r = s.statusText, { error: r };
}
const xu = "\u901A\u77E5", vu = "\u7248\u672C", _u = "\u4ECA\u5929", yu = "\u6628\u5929", Eu = "\u8F83\u65E9\u524D\u7684", Iu = "\u66F4\u65B0", Nu = {
  Notifications: xu,
  "Mark All Notifications as Read": "\u5C06\u6240\u6709\u901A\u77E5\u6807\u8BB0\u4E3A\u5DF2\u8BFB",
  Version: vu,
  "Manual Interventions": "\u624B\u52A8\u5E72\u9884",
  Today: _u,
  Yesterday: yu,
  Older: Eu,
  Update: Iu,
  "Scan Failed": "\u626B\u63CF\u5931\u8D25",
  "Scan Finished": "\u626B\u63CF\u5DF2\u5B8C\u6210",
  "Scan Done": "\u626B\u63CF\u5DF2\u5B8C\u6210",
  "New Scan": "\u65B0\u7684\u626B\u63CF",
  "Your Acunetix Proof of Concept license will expire on": "\u60A8\u7684 Acunetix \u6982\u5FF5\u8BC1\u660E\u8BB8\u53EF\u8BC1\u5C06\u4E8E\u4EE5\u4E0B\u65F6\u95F4\u5230\u671F",
  "Contact your Acunetix Representative to continue using Acunetix.": "\u8054\u7CFB\u60A8\u7684 Acunetix \u4EE3\u8868\u4EE5\u7EE7\u7EED\u4F7F\u7528 Acunetix\u3002",
  "Contact your customer success manager to renew.": "\u8054\u7CFB\u60A8\u7684\u5BA2\u6237\u6210\u529F\u7ECF\u7406\u4EE5\u7EED\u8BA2\u3002",
  "Your Acunetix Proof of Concept license has expired. Contact your Acunetix Representative to continue using Acunetix.": "\u60A8\u7684 Acunetix \u6982\u5FF5\u8BC1\u660E\u8BB8\u53EF\u8BC1\u5DF2\u8FC7\u671F\u3002\u8BF7\u8054\u7CFB\u60A8\u7684 Acunetix \u4EE3\u8868\u4EE5\u7EE7\u7EED\u4F7F\u7528 Acunetix\u3002",
  "Your license renewal is due on": "\u60A8\u7684\u8BB8\u53EF\u8BC1\u7EED\u8BA2\u5C06\u4E8E\u4EE5\u4E0B\u65F6\u95F4\u5230\u671F",
  "Your license EXPIRED on": "\u60A8\u7684\u8BB8\u53EF\u8BC1\u5DF2\u4E8E\u4EE5\u4E0B\u65F6\u95F4\u8FC7\u671F",
  "Your license has expired.": "\u60A8\u7684\u8BB8\u53EF\u8BC1\u5DF2\u8FC7\u671F\u3002",
  "Acunetix license required. Contact your sales representative or": "\u9700\u8981 Acunetix \u8BB8\u53EF\u8BC1\u3002\u8BF7\u8054\u7CFB\u60A8\u7684\u9500\u552E\u4EE3\u8868\u6216",
  "to continue using Acunetix.": "\u4EE5\u7EE7\u7EED\u4F7F\u7528 Acunetix\u3002",
  "Target not Responsive": "\u76EE\u6807\u4E0D\u54CD\u5E94",
  "Target Verification Failed": "\u76EE\u6807\u9A8C\u8BC1\u5931\u8D25",
  "Target Continuous Mode Disabled": "\u5DF2\u7981\u7528\u76EE\u6807\u8FDE\u7EED\u626B\u63CF\u6A21\u5F0F",
  "Report Created": "\u62A5\u544A\u5DF2\u521B\u5EFA",
  "Report Failed": "\u62A5\u544A\u5931\u8D25",
  "Export Failed": "\u5BFC\u51FA\u5931\u8D25",
  "Scan Scheduled": "\u626B\u63CF\u5DF2\u8BA1\u5212",
  "Scan Modified": "\u626B\u63CF\u5DF2\u4FEE\u6539",
  "Scan Deleted": "\u626B\u63CF\u5DF2\u5220\u9664",
  "Scan Started": "\u626B\u63CF\u5DF2\u5F00\u59CB",
  "Scan User Aborted": "\u626B\u63CF\u7528\u6237\u5DF2\u4E2D\u6B62",
  "Scan Recurrence Suspended": "\u5B9A\u671F\u626B\u63CF\u5DF2\u6682\u505C",
  "Scan Job Starting": "\u626B\u63CF\u4F5C\u4E1A\u5F00\u59CB",
  "Scan Job Completed": "\u626B\u63CF\u4F5C\u4E1A\u5DF2\u5B8C\u6210",
  "Scan Job Failed": "\u626B\u63CF\u4F5C\u4E1A\u5931\u8D25",
  "Scan Job Aborted": "\u626B\u63CF\u4F5C\u4E1A\u5DF2\u4E2D\u6B62",
  "Scan Paused": "\u626B\u63CF\u5DF2\u6682\u505C",
  "Scan Scanner Event": "\u626B\u63CF\u626B\u63CF\u7A0B\u5E8F\u4E8B\u4EF6",
  "Scan Crawler Memory Limited Reached": "\u5DF2\u8FBE\u5230\u626B\u63CF\u722C\u7F51\u7A0B\u5E8F\u5185\u5B58\u9650\u5236",
  "Scan Aborted By Scanner": "\u626B\u63CF\u5DF2\u88AB\u626B\u63CF\u7A0B\u5E8F\u4E2D\u6B62",
  "Scan AcuSensor Found": "\u627E\u5230\u626B\u63CF AcuSensor",
  "Scan AcuSensor Not Found": "\u672A\u627E\u5230\u626B\u63CF AcuSensor",
  "Scan Automatic Login Failed": "\u626B\u63CF\u81EA\u52A8\u767B\u5F55\u5931\u8D25",
  "Scan Invalid HTTP LoginDto": "\u626B\u63CF\u65E0\u6548\u7684 HTTP LoginDto",
  "Scan Login Sequence Required": "\u9700\u8981\u626B\u63CF\u767B\u5F55\u5E8F\u5217",
  "Scan Crawling": "\u626B\u63CF\u722C\u53D6",
  "Scan Deepscan": "\u626B\u63CF Deepscan",
  "Scan Manual Intervention": "\u626B\u63CF\u624B\u52A8\u5E72\u9884",
  "Scan Resumed": "\u626B\u63CF\u5DF2\u6062\u590D",
  "Initial Request": "\u521D\u59CB\u8BF7\u6C42",
  "Importer Failed": "\u5BFC\u5165\u7A0B\u5E8F\u5931\u8D25",
  "Target not responsive": "\u76EE\u6807\u4E0D\u54CD\u5E94",
  "LSR/Autologin not configured": "LSR/\u81EA\u52A8\u767B\u5F55\u672A\u914D\u7F6E",
  "Vulnerability discovered by AcuMonitor": "\u7531 AcuMonitor \u53D1\u73B0\u7684\u6F0F\u6D1E"
}, Tu = ["en", "cn"], ku = {
  cn: {
    ...Nu
  }
};
function Au(e) {
  const t = e.defaultLanguage, n = he(t);
  return { languageEntries: _e(() => ku[n.value]), setLanguage: (i) => {
    var o, a;
    i && Tu.includes(i) ? n.value = i : n.value = t, (a = (o = yi()) == null ? void 0 : o.proxy) == null || a.$forceUpdate();
  } };
}
const ji = Au({ defaultLanguage: "en" });
function Vt() {
  const { languageEntries: e } = ji;
  return { t: (n) => {
    if (!e.value)
      return n;
    const s = e.value[n];
    return s || n;
  } };
}
const Su = ["title", "href"], Cu = ["title"], Mu = Te`
    fragment LicenseWarning on License {
      activated
      maintenanceExpired
      maintenanceExpires
      maintenanceExpired
      productCode
      access
      key
    }
  `, $u = /* @__PURE__ */ Ne({
  __name: "HeaderLicenseWarning",
  props: {
    licenseData: null
  },
  emits: ["toggle"],
  setup(e, { emit: t }) {
    const n = e, { t: s } = Vt(), r = (p) => new Date(Date.parse(p)).toDateString(), i = tn(n, "licenseData"), o = 90, a = 7;
    let l = new Date();
    l = new Date(
      l.setDate(
        l.getDate() + o
      )
    );
    let d = new Date();
    d = new Date(
      d.setDate(
        d.getDate() + a
      )
    );
    const h = he(""), f = (p) => {
      t("toggle", !!p), h.value = p;
    }, w = he("DEFAULT"), v = (p) => {
      w.value = p, p !== "DEFAULT" && t("toggle", !0);
    };
    return ut(i, (p) => {
      if (!p)
        return;
      const N = he(
        p.maintenanceExpires ? new Date(Date.parse(p.maintenanceExpires)) : null
      );
      v("DEFAULT"), N.value && d > N.value && p.productCode === "AOPPOC" ? f(
        `${s(
          "Your Acunetix Proof of Concept license will expire on"
        )} ${r(String(N.value))}. ${s(
          "Contact your Acunetix Representative to continue using Acunetix."
        )}`
      ) : p.maintenanceExpired && p.productCode === "AOPPOC" ? f(
        s(
          "Your Acunetix Proof of Concept license has expired. Contact your Acunetix Representative to continue using Acunetix."
        )
      ) : N.value && l > N.value ? (f(
        `${N.value > new Date() ? s("Your license renewal is due on") : s("Your license EXPIRED on")} ${r(String(N.value))}.`
      ), v("CS_MAIL")) : p.maintenanceExpired ? (f(s("Your license has expired.")), v("CS_MAIL")) : p.activated && p.access || v("SALES_MAIL");
    }), (p, N) => {
      var M;
      return E(), A("div", {
        class: ie(["shd-w-full grid-header-warning shd-text-center shd-text-sm shd-leading-8 shd-bg-warning shd-text-warningText shd-duration-200 shd-ease-in-out", h.value || w.value !== "DEFAULT" ? "shd-h-8" : "shd-h-0"])
      }, [
        w.value === "CS_MAIL" ? (E(), A(te, { key: 0 }, [
          De(W(h.value) + " ", 1),
          x("a", {
            title: b(s)("License Renewal Request"),
            href: `mailto:customersuccess@acunetix.com?subject=License renewal request&body=License Renewal Request for ${(M = b(i)) == null ? void 0 : M.key}`,
            class: "shd-text-sm shd-leading-8 shd-text-warningText"
          }, W(b(s)("Contact your customer success manager to renew.")), 9, Su)
        ], 64)) : w.value === "SALES_MAIL" ? (E(), A(te, { key: 1 }, [
          De(W(b(s)("Acunetix license required. Contact your sales representative or")) + " ", 1),
          x("a", {
            title: b(s)("License Request"),
            href: "mailto:sales@acunetix.com",
            class: "shd-text-sm shd-leading-8 shd-text-warningText"
          }, W(b(s)("sales@acunetix.com")), 9, Cu),
          De(" " + W(b(s)("to continue using Acunetix.")), 1)
        ], 64)) : (E(), A(te, { key: 2 }, [
          De(W(h.value), 1)
        ], 64))
      ], 2);
    };
  }
});
function Pu(e, t) {
  return E(), A("svg", Ou, Ru);
}
const Uu = { render: Pu }, Bu = {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Vu = /* @__PURE__ */ x("path", {
  d: "M3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3ZM2 12a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 18a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z",
  fill: "#4A4954"
}, null, -1), ju = [
  Vu
];
function Hu(e, t) {
  return E(), A("svg", Bu, ju);
}
const zu = { render: Hu }, Yu = {
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Zu = /* @__PURE__ */ x("path", {
  d: "M12.079 3.47a6.001 6.001 0 1 0 2.495 9.102c.224-.303.638-.418.964-.23.392.226.529.73.262 1.095a7.501 7.501 0 1 1-2.299-10.93.75.75 0 0 1 .275 1.024l-2.725 4.72a1.5 1.5 0 1 1-1.3-.75l.804-1.391a3.001 3.001 0 1 0 1.39 4.939c.257-.276.669-.395.995-.207.391.226.53.733.238 1.077a4.501 4.501 0 1 1-1.857-7.136l.758-1.313Z",
  fill: "currentColor"
}, null, -1), Wu = [
  Zu
];
function qu(e, t) {
  return E(), A("svg", Yu, Wu);
}
const Hi = { render: qu }, Ju = {
  viewBox: "0 0 20 20",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, Gu = /* @__PURE__ */ Os('<g clip-path="url(#a)"><path d="M10.215 6.687a1.667 1.667 0 0 0-1.854 1.09.833.833 0 1 1-1.572-.554 3.333 3.333 0 0 1 6.478 1.111c0 1.275-.946 2.118-1.621 2.568a6.702 6.702 0 0 1-1.405.707l-.03.01-.009.003-.003.001h-.002a.833.833 0 0 1-.528-1.58l.013-.005a4.83 4.83 0 0 0 .303-.123c.206-.09.474-.225.736-.4.575-.383.879-.79.879-1.182a1.666 1.666 0 0 0-1.385-1.646ZM10 13.333A.833.833 0 1 0 10 15h.008a.833.833 0 0 0 0-1.667H10Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M.833 10a9.167 9.167 0 1 1 18.334 0A9.167 9.167 0 0 1 .833 10ZM10 2.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Z"></path></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"></path></clipPath></defs>', 2), Ku = [
  Gu
];
function Xu(e, t) {
  return E(), A("svg", Ju, Ku);
}
const Qu = { render: Xu }, eh = {
  viewBox: "0 0 16 16",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, th = /* @__PURE__ */ x("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M4.7 2.033a4.667 4.667 0 0 1 7.967 3.3c0 2.235.478 3.623.918 4.431.222.406.437.672.587.83a1.995 1.995 0 0 0 .204.188l.002.002A.667.667 0 0 1 14 12H2a.667.667 0 0 1-.377-1.216l.002-.002a1.997 1.997 0 0 0 .204-.189c.15-.157.365-.423.586-.829.44-.808.919-2.196.919-4.43 0-1.238.491-2.425 1.366-3.3Zm-1.267 8.634h9.134a6.262 6.262 0 0 1-.152-.264c-.56-1.026-1.081-2.638-1.081-5.07a3.333 3.333 0 1 0-6.667 0c0 2.432-.522 4.044-1.082 5.07-.05.092-.101.18-.152.264ZM6.512 13.423a.667.667 0 0 1 .912.242.666.666 0 0 0 1.153 0 .667.667 0 0 1 1.153.67 2 2 0 0 1-3.46 0 .667.667 0 0 1 .242-.912Z"
}, null, -1), nh = [
  th
];
function sh(e, t) {
  return E(), A("svg", eh, nh);
}
const rh = { render: sh };
var Bs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, zi = { exports: {} };
(function(e, t) {
  (function(n, s) {
    e.exports = s();
  })(Bs, function() {
    var n = 1e3, s = 6e4, r = 36e5, i = "millisecond", o = "second", a = "minute", l = "hour", d = "day", h = "week", f = "month", w = "quarter", v = "year", p = "date", N = "Invalid Date", M = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, F = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, K = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, Z = function(H, L, $) {
      var P = String(H);
      return !P || P.length >= L ? H : "" + Array(L + 1 - P.length).join($) + H;
    }, X = { s: Z, z: function(H) {
      var L = -H.utcOffset(), $ = Math.abs(L), P = Math.floor($ / 60), T = $ % 60;
      return (L <= 0 ? "+" : "-") + Z(P, 2, "0") + ":" + Z(T, 2, "0");
    }, m: function H(L, $) {
      if (L.date() < $.date())
        return -H($, L);
      var P = 12 * ($.year() - L.year()) + ($.month() - L.month()), T = L.clone().add(P, f), D = $ - T < 0, V = L.clone().add(P + (D ? -1 : 1), f);
      return +(-(P + ($ - T) / (D ? T - V : V - T)) || 0);
    }, a: function(H) {
      return H < 0 ? Math.ceil(H) || 0 : Math.floor(H);
    }, p: function(H) {
      return { M: f, y: v, w: h, d, D: p, h: l, m: a, s: o, ms: i, Q: w }[H] || String(H || "").toLowerCase().replace(/s$/, "");
    }, u: function(H) {
      return H === void 0;
    } }, ne = "en", ge = {};
    ge[ne] = K;
    var Pe = function(H) {
      return H instanceof We;
    }, ke = function H(L, $, P) {
      var T;
      if (!L)
        return ne;
      if (typeof L == "string") {
        var D = L.toLowerCase();
        ge[D] && (T = D), $ && (ge[D] = $, T = D);
        var V = L.split("-");
        if (!T && V.length > 1)
          return H(V[0]);
      } else {
        var se = L.name;
        ge[se] = L, T = se;
      }
      return !P && T && (ne = T), T || !P && ne;
    }, pe = function(H, L) {
      if (Pe(H))
        return H.clone();
      var $ = typeof L == "object" ? L : {};
      return $.date = H, $.args = arguments, new We($);
    }, Q = X;
    Q.l = ke, Q.i = Pe, Q.w = function(H, L) {
      return pe(H, { locale: L.$L, utc: L.$u, x: L.$x, $offset: L.$offset });
    };
    var We = function() {
      function H($) {
        this.$L = ke($.locale, null, !0), this.parse($);
      }
      var L = H.prototype;
      return L.parse = function($) {
        this.$d = function(P) {
          var T = P.date, D = P.utc;
          if (T === null)
            return new Date(NaN);
          if (Q.u(T))
            return new Date();
          if (T instanceof Date)
            return new Date(T);
          if (typeof T == "string" && !/Z$/i.test(T)) {
            var V = T.match(M);
            if (V) {
              var se = V[2] - 1 || 0, ae = (V[7] || "0").substring(0, 3);
              return D ? new Date(Date.UTC(V[1], se, V[3] || 1, V[4] || 0, V[5] || 0, V[6] || 0, ae)) : new Date(V[1], se, V[3] || 1, V[4] || 0, V[5] || 0, V[6] || 0, ae);
            }
          }
          return new Date(T);
        }($), this.$x = $.x || {}, this.init();
      }, L.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, L.$utils = function() {
        return Q;
      }, L.isValid = function() {
        return this.$d.toString() !== N;
      }, L.isSame = function($, P) {
        var T = pe($);
        return this.startOf(P) <= T && T <= this.endOf(P);
      }, L.isAfter = function($, P) {
        return pe($) < this.startOf(P);
      }, L.isBefore = function($, P) {
        return this.endOf(P) < pe($);
      }, L.$g = function($, P, T) {
        return Q.u($) ? this[P] : this.set(T, $);
      }, L.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, L.valueOf = function() {
        return this.$d.getTime();
      }, L.startOf = function($, P) {
        var T = this, D = !!Q.u(P) || P, V = Q.p($), se = function(st, me) {
          var Ue = Q.w(T.$u ? Date.UTC(T.$y, me, st) : new Date(T.$y, me, st), T);
          return D ? Ue : Ue.endOf(d);
        }, ae = function(st, me) {
          return Q.w(T.toDate()[st].apply(T.toDate("s"), (D ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(me)), T);
        }, re = this.$W, xe = this.$M, qe = this.$D, Be = "set" + (this.$u ? "UTC" : "");
        switch (V) {
          case v:
            return D ? se(1, 0) : se(31, 11);
          case f:
            return D ? se(1, xe) : se(0, xe + 1);
          case h:
            var Ce = this.$locale().weekStart || 0, Je = (re < Ce ? re + 7 : re) - Ce;
            return se(D ? qe - Je : qe + (6 - Je), xe);
          case d:
          case p:
            return ae(Be + "Hours", 0);
          case l:
            return ae(Be + "Minutes", 1);
          case a:
            return ae(Be + "Seconds", 2);
          case o:
            return ae(Be + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, L.endOf = function($) {
        return this.startOf($, !1);
      }, L.$set = function($, P) {
        var T, D = Q.p($), V = "set" + (this.$u ? "UTC" : ""), se = (T = {}, T[d] = V + "Date", T[p] = V + "Date", T[f] = V + "Month", T[v] = V + "FullYear", T[l] = V + "Hours", T[a] = V + "Minutes", T[o] = V + "Seconds", T[i] = V + "Milliseconds", T)[D], ae = D === d ? this.$D + (P - this.$W) : P;
        if (D === f || D === v) {
          var re = this.clone().set(p, 1);
          re.$d[se](ae), re.init(), this.$d = re.set(p, Math.min(this.$D, re.daysInMonth())).$d;
        } else
          se && this.$d[se](ae);
        return this.init(), this;
      }, L.set = function($, P) {
        return this.clone().$set($, P);
      }, L.get = function($) {
        return this[Q.p($)]();
      }, L.add = function($, P) {
        var T, D = this;
        $ = Number($);
        var V = Q.p(P), se = function(xe) {
          var qe = pe(D);
          return Q.w(qe.date(qe.date() + Math.round(xe * $)), D);
        };
        if (V === f)
          return this.set(f, this.$M + $);
        if (V === v)
          return this.set(v, this.$y + $);
        if (V === d)
          return se(1);
        if (V === h)
          return se(7);
        var ae = (T = {}, T[a] = s, T[l] = r, T[o] = n, T)[V] || 1, re = this.$d.getTime() + $ * ae;
        return Q.w(re, this);
      }, L.subtract = function($, P) {
        return this.add(-1 * $, P);
      }, L.format = function($) {
        var P = this, T = this.$locale();
        if (!this.isValid())
          return T.invalidDate || N;
        var D = $ || "YYYY-MM-DDTHH:mm:ssZ", V = Q.z(this), se = this.$H, ae = this.$m, re = this.$M, xe = T.weekdays, qe = T.months, Be = function(me, Ue, gt, c) {
          return me && (me[Ue] || me(P, D)) || gt[Ue].slice(0, c);
        }, Ce = function(me) {
          return Q.s(se % 12 || 12, me, "0");
        }, Je = T.meridiem || function(me, Ue, gt) {
          var c = me < 12 ? "AM" : "PM";
          return gt ? c.toLowerCase() : c;
        }, st = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: re + 1, MM: Q.s(re + 1, 2, "0"), MMM: Be(T.monthsShort, re, qe, 3), MMMM: Be(qe, re), D: this.$D, DD: Q.s(this.$D, 2, "0"), d: String(this.$W), dd: Be(T.weekdaysMin, this.$W, xe, 2), ddd: Be(T.weekdaysShort, this.$W, xe, 3), dddd: xe[this.$W], H: String(se), HH: Q.s(se, 2, "0"), h: Ce(1), hh: Ce(2), a: Je(se, ae, !0), A: Je(se, ae, !1), m: String(ae), mm: Q.s(ae, 2, "0"), s: String(this.$s), ss: Q.s(this.$s, 2, "0"), SSS: Q.s(this.$ms, 3, "0"), Z: V };
        return D.replace(F, function(me, Ue) {
          return Ue || st[me] || V.replace(":", "");
        });
      }, L.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, L.diff = function($, P, T) {
        var D, V = Q.p(P), se = pe($), ae = (se.utcOffset() - this.utcOffset()) * s, re = this - se, xe = Q.m(this, se);
        return xe = (D = {}, D[v] = xe / 12, D[f] = xe, D[w] = xe / 3, D[h] = (re - ae) / 6048e5, D[d] = (re - ae) / 864e5, D[l] = re / r, D[a] = re / s, D[o] = re / n, D)[V] || re, T ? xe : Q.a(xe);
      }, L.daysInMonth = function() {
        return this.endOf(f).$D;
      }, L.$locale = function() {
        return ge[this.$L];
      }, L.locale = function($, P) {
        if (!$)
          return this.$L;
        var T = this.clone(), D = ke($, P, !0);
        return D && (T.$L = D), T;
      }, L.clone = function() {
        return Q.w(this.$d, this);
      }, L.toDate = function() {
        return new Date(this.valueOf());
      }, L.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, L.toISOString = function() {
        return this.$d.toISOString();
      }, L.toString = function() {
        return this.$d.toUTCString();
      }, H;
    }(), mt = We.prototype;
    return pe.prototype = mt, [["$ms", i], ["$s", o], ["$m", a], ["$H", l], ["$W", d], ["$M", f], ["$y", v], ["$D", p]].forEach(function(H) {
      mt[H[1]] = function(L) {
        return this.$g(L, H[0], H[1]);
      };
    }), pe.extend = function(H, L) {
      return H.$i || (H(L, We, pe), H.$i = !0), pe;
    }, pe.locale = ke, pe.isDayjs = Pe, pe.unix = function(H) {
      return pe(1e3 * H);
    }, pe.en = ge[ne], pe.Ls = ge, pe.p = {}, pe;
  });
})(zi);
const Yt = zi.exports;
var Yi = { exports: {} };
(function(e, t) {
  (function(n, s) {
    e.exports = s();
  })(Bs, function() {
    return function(n, s, r) {
      n = n || {};
      var i = s.prototype, o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function a(d, h, f, w) {
        return i.fromToBase(d, h, f, w);
      }
      r.en.relativeTime = o, i.fromToBase = function(d, h, f, w, v) {
        for (var p, N, M, F = f.$locale().relativeTime || o, K = n.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], Z = K.length, X = 0; X < Z; X += 1) {
          var ne = K[X];
          ne.d && (p = w ? r(d).diff(f, ne.d, !0) : f.diff(d, ne.d, !0));
          var ge = (n.rounding || Math.round)(Math.abs(p));
          if (M = p > 0, ge <= ne.r || !ne.r) {
            ge <= 1 && X > 0 && (ne = K[X - 1]);
            var Pe = F[ne.l];
            v && (ge = v("" + ge)), N = typeof Pe == "string" ? Pe.replace("%d", ge) : Pe(ge, h, ne.l, M);
            break;
          }
        }
        if (h)
          return N;
        var ke = M ? F.future : F.past;
        return typeof ke == "function" ? ke(N) : ke.replace("%s", N);
      }, i.to = function(d, h) {
        return a(d, h, this, !0);
      }, i.from = function(d, h) {
        return a(d, h, this);
      };
      var l = function(d) {
        return d.$u ? r.utc() : r();
      };
      i.toNow = function(d) {
        return this.to(l(this), d);
      }, i.fromNow = function(d) {
        return this.from(l(this), d);
      };
    };
  });
})(Yi);
const ih = Yi.exports;
var Zi = { exports: {} };
(function(e, t) {
  (function(n, s) {
    e.exports = s();
  })(Bs, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(s, r, i) {
      var o = r.prototype, a = o.format;
      i.en.formats = n, o.format = function(l) {
        l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
        var d = this.$locale().formats, h = function(f, w) {
          return f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(v, p, N) {
            var M = N && N.toUpperCase();
            return p || w[N] || n[N] || w[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(F, K, Z) {
              return K || Z.slice(1);
            });
          });
        }(l, d === void 0 ? {} : d);
        return a.call(this, h);
      };
    };
  });
})(Zi);
const oh = Zi.exports, ah = (e, t) => {
  switch (e) {
    case tt.SCAN:
      return ["#/scans/" + t];
    case tt.TARGET:
      return ["#/targets/" + t];
    case tt.REPORT:
      return ["#/reports"];
    case tt.VULNERABILITY:
      return ["#/vulnerabilities/" + t];
    case tt.WORKER:
      return ["#/engines"];
    default:
      return ["#/targets"];
  }
}, lh = {
  205: "Target not Responsive",
  208: "Target Verification Failed",
  209: "Target Continuous Mode Disabled",
  601: "Report Created",
  604: "Report Failed",
  605: "Export Failed",
  400: "Scan Scheduled",
  401: "Scan Modified",
  402: "Scan Deleted",
  403: "Scan Started",
  404: "Scan Done",
  405: "Scan Failed",
  406: "Scan User Aborted",
  407: "Scan Recurrence Suspended",
  410: "Scan Job Starting",
  411: "Scan Job Completed",
  412: "Scan Job Failed",
  413: "Scan Job Aborted",
  415: "Scan Paused",
  420: "Scan Scanner Event",
  430: "Scan Crawler Memory Limited Reached",
  431: "Scan Aborted By Scanner",
  432: "Scan AcuSensor Found",
  433: "Scan AcuSensor Not Found",
  434: "Scan Automatic Login Failed",
  435: "Scan Invalid HTTP LoginDto",
  436: "Scan Login Sequence Required",
  437: "Scan Crawling",
  438: "Scan Deepscan",
  439: "Scan Started",
  440: "Scan Finished",
  441: "Scan Manual Intervention",
  442: "Scan Resumed",
  443: "Initial Request",
  444: "Importer Failed",
  445: "Target not responsive",
  446: "LSR/Autologin not configured",
  502: "Vulnerability discovered by AcuMonitor",
  801: "Engine is not responding",
  802: "Engine is offline",
  803: "Engine is back online"
};
var tt = /* @__PURE__ */ ((e) => (e[e.USER = 1] = "USER", e[e.CHILD_USER = 2] = "CHILD_USER", e[e.TARGET = 3] = "TARGET", e[e.GROUP = 4] = "GROUP", e[e.SCAN = 5] = "SCAN", e[e.SCAN_SESSION = 6] = "SCAN_SESSION", e[e.REPORT = 7] = "REPORT", e[e.WORKER = 8] = "WORKER", e[e.VULNERABILITY = 9] = "VULNERABILITY", e[e.EXPORT = 10] = "EXPORT", e))(tt || {});
const ch = (e) => {
  let t = "";
  return e.target_desc ? e.target_desc[0] && (t = e.target_desc[0]) : e.source && (t = e.source), t;
}, dh = (e) => {
  var s, r;
  const t = e, n = JSON.parse(e.data || "{}");
  return t.targetUrl = ch(n), t.workerDescription = (s = n.worker_decription) != null ? s : "", t.workerName = (r = n.worker_name) != null ? r : "", t;
}, Ar = (e, t) => e.getFullYear() === t.getFullYear() && e.getDate() === t.getDate() && e.getMonth() === t.getMonth(), uh = (e) => {
  const t = {
    today: [],
    yesterday: [],
    older: []
  }, n = new Date(), s = new Date();
  return s.setDate(s.getDate() - 1), e.length ? e.reduce((r, i) => {
    const o = dh(i);
    return Ar(n, new Date(i.created)) ? r.today.push(o) : Ar(s, new Date(i.created)) ? r.yesterday.push(o) : r.older.push(o), r;
  }, t) : t;
};
var vt = /* @__PURE__ */ ((e) => (e.WAITING_FOR_SCANS = "waiting_for_scans", e.RESTARTING = "restarting", e.WAITING_FOR_USER = "waiting_for_user", e))(vt || {});
const ln = (e, t) => {
  const n = new CustomEvent("shd-events", {
    detail: {
      type: e,
      data: t
    }
  });
  document.dispatchEvent(n);
}, ds = (e) => {
  e && ln("toast", {
    type: "error",
    message: e
  });
}, hh = {
  key: 0,
  class: "shd-text-12 shd-my-3 shd-px-4 shd-text-titleDark shd-uppercase"
}, fh = ["onClick"], ph = { class: "shd-flex-1 shd-ml-2" }, mh = { class: "shd-m-0 shd-text-black" }, gh = { class: "shd-text-12 shd-text-regularAlt" }, wh = {
  key: 0,
  class: "shd-text-surface-600 shd-m-0 shd-leading-[15px] lg:shd-w-[300px] lg:shd-overflow-hidden lg:shd-overflow-ellipsis lg:shd-whitespace-nowrap"
}, bh = {
  key: 1,
  class: "shd-text-surface-600 shd-m-0 shd-leading-[15px] lg:shd-w-[259px] lg:shd-overflow-hidden lg:shd-overflow-ellipsis lg:shd-whitespace-nowrap"
}, xh = ["onClick"], vh = ["id"], _h = Te`
    fragment AppNotificationFragment on AppNotification {
      appNotifications {
        totalCount
        nodes {
          id
          resourceId
          resourceType
          eventTypeId
          consumed
          created
          data
        }
      }
      unreadNotificationsCount
    }
  `, yh = (e) => Te`mutation {
      notificationConsume(id: "${e}")
    }
  `, Eh = (e) => Te`query {
         report(id: "${e}"){
          pdf
         }
       }
   `, Ih = /* @__PURE__ */ Ne({
  __name: "TheAppNotification",
  props: {
    notifications: null
  },
  emits: ["notificationConsume"],
  setup(e, { emit: t }) {
    const n = e, { t: s } = Vt();
    Yt.extend(ih), Yt.extend(oh);
    const r = _e(() => uh(n.notifications || [])), i = async (h) => {
      var p;
      if (h.consumed == !0)
        return;
      const f = yh(h.id), { result: w, error: v } = await Tn((p = f == null ? void 0 : f.loc) == null ? void 0 : p.source.body);
      w != null && w.notificationConsume && (t("notificationConsume", h), h.consumed = !0), ds(v);
    }, o = (h) => {
      var v;
      const f = ah(
        h.resourceType || 0,
        h.resourceId || ""
      ), w = new CustomEvent("navigate", {
        detail: f
      });
      (v = document == null ? void 0 : document.querySelector("the-main-layout-wc")) == null || v.dispatchEvent(w), i(h);
    }, a = async (h) => {
      var N, M;
      const f = (h == null ? void 0 : h.resourceId) || "", w = Eh(f), { result: v, error: p } = await Tn(
        (N = w == null ? void 0 : w.loc) == null ? void 0 : N.source.body
      );
      if ((M = v == null ? void 0 : v.report) != null && M.pdf) {
        const F = document.createElement("a");
        F.href = v.report.pdf, F.target = "_self", F.type = "application/pdf", F.click(), F.remove(), await i(h);
      }
      ds(p);
    }, l = (h, f) => {
      h.stopPropagation(), a(f);
    }, d = (h) => Yt().diff(h, "day") < 3 ? Yt(h).fromNow() : Yt(h).format("ll");
    return (h, f) => (E(!0), A(te, null, He(b(r), (w, v) => (E(), A(te, { key: v }, [
      w.length > 0 ? (E(), A("h5", hh, W(b(s)(`${v.charAt(0).toUpperCase()}${v.slice(1)}`)), 1)) : ce("", !0),
      (E(!0), A(te, null, He(w, (p, N) => (E(), A("div", {
        key: N,
        class: "notification-item hover:shd-bg-surface-50 shd-flex shd-cursor-pointer shd-items-center shd-justify-around shd-px-4 shd-py-2.5 shd-text-sm shd-transition-all shd-duration-200",
        onClick: (M) => o(p)
      }, [
        p.resourceType !== b(tt).REPORT ? (E(), Le(b(Hi), {
          key: 0,
          height: 22,
          width: 22,
          class: "shd-text-gray-800 shd-mt-[-9px]"
        })) : ce("", !0),
        p.resourceType === b(tt).REPORT ? (E(), Le(b(Ni), {
          key: 1,
          height: 22,
          width: 22,
          class: "shd-text-gray-800 shd-mt-[-9px]"
        })) : ce("", !0),
        x("div", ph, [
          x("p", mh, [
            De(W(b(s)(b(lh)[p.eventTypeId])) + " ", 1),
            x("span", gh, W(d(p.created)), 1)
          ]),
          p.resourceType == b(tt).WORKER ? (E(), A("p", wh, [
            p.eventTypeId === 802 || p.eventTypeId === 803 ? (E(), A(te, { key: 0 }, [
              De(W(p.workerName), 1)
            ], 64)) : ce("", !0),
            p.eventTypeId === 801 ? (E(), A(te, { key: 1 }, [
              De(W(p == null ? void 0 : p.workerDescription), 1)
            ], 64)) : ce("", !0)
          ])) : (E(), A("p", bh, W(p.targetUrl), 1))
        ]),
        p.resourceType === b(tt).REPORT ? (E(), A("button", {
          key: 2,
          type: "button",
          "tooltip-wrapper": "",
          class: "shd-top shd-cursor-pointer shd-border-none shd-bg-transparent shd-py-2 shd-text-sm",
          onClick: (M) => l(M, p)
        }, [
          De(W(b(s)("PDF")) + " ", 1),
          x("span", {
            id: "tooltip-" + N,
            role: "tooltip"
          }, W(b(s)("Download")), 9, vh)
        ], 8, xh)) : ce("", !0),
        x("span", {
          class: ie(["shd-ml-3 shd-self-baseline shd-rounded-full shd-p-1 shd-mt-[6px]", {
            "shd-bg-warning": !p.consumed
          }])
        }, null, 2)
      ], 8, fh))), 128))
    ], 64))), 128));
  }
}), Nh = { class: "shd-text-12 shd-my-3 shd-px-4 shd-text-titleDark shd-uppercase" }, Th = { class: "shd-flex-1 shd-ml-2" }, kh = { class: "shd-w shd-m-0 shd-text-black lg:shd-overflow-hidden lg:shd-overflow-ellipsis lg:shd-whitespace-nowrap" }, Ah = { class: "shd-text-surface-600 shd-m-0 shd-leading-[15px]" }, Sh = { key: 0 }, Ch = { key: 1 }, Mh = {
  key: 2,
  class: "shd-acx-accent shd-pointer"
}, $h = Te`
    fragment SystemUpdateInfoFragment on SystemUpdateInfo {
      majorVersion
      minorVersion
      buildNumber
      updateStatus
      newUpdate
    }
  `, Zn = Te`
    mutation {
      systemUpdateEnable
    }
  `, Oh = /* @__PURE__ */ Ne({
  __name: "SystemUpdateNotification",
  props: {
    updateInfo: null
  },
  emits: ["systemUpdateEnable"],
  setup(e, { emit: t }) {
    const n = e, { t: s } = Vt(), r = he(!1), i = async () => {
      var o;
      if (n.updateInfo.newUpdate && n.updateInfo.updateStatus === vt.WAITING_FOR_USER) {
        const { result: a, error: l } = await Tn((o = Zn == null ? void 0 : Zn.loc) == null ? void 0 : o.source.body);
        a != null && a.systemUpdateEnable ? (t("systemUpdateEnable"), ln("toast", {
          type: "success",
          message: "Updating..."
        }), r.value = !0) : ln("toast", {
          type: "error",
          message: "Error updating"
        });
      }
    };
    return (o, a) => (E(), A(te, null, [
      x("h5", Nh, W(b(s)("Version")), 1),
      x("div", {
        class: ie(["notification-item hover:shd-bg-surface-50 shd-cursor shd-flex shd-items-center shd-justify-around shd-px-4 shd-py-2.5 shd-text-sm shd-transition-all shd-duration-200", {
          "shd-cursor-pointer": e.updateInfo.updateStatus === b(vt).WAITING_FOR_USER,
          "shd-cursor-default": e.updateInfo.updateStatus !== b(vt).WAITING_FOR_USER
        }]),
        onClick: i
      }, [
        G(b(Rs), {
          height: 22,
          width: 22,
          class: "shd-text-gray-800 shd-p-0.5 shd-mt-[-9px]"
        }),
        x("div", Th, [
          x("p", kh, [
            De(W(b(s)("Version")) + " ", 1),
            x("strong", null, W([
              e.updateInfo.majorVersion,
              e.updateInfo.minorVersion,
              e.updateInfo.buildNumber
            ].join(".")), 1),
            De(" " + W(b(s)("is available")), 1)
          ]),
          x("p", Ah, [
            e.updateInfo.updateStatus === b(vt).WAITING_FOR_SCANS ? (E(), A("span", Sh, W(b(s)("Engine is checking for active scans...")), 1)) : ce("", !0),
            e.updateInfo.updateStatus === b(vt).RESTARTING ? (E(), A("span", Ch, W(b(s)("The service is restarting...")), 1)) : ce("", !0),
            e.updateInfo.updateStatus === b(vt).WAITING_FOR_USER ? (E(), A("span", Mh, [
              x("strong", null, W(b(s)("Update")), 1)
            ])) : ce("", !0)
          ])
        ]),
        x("span", {
          class: ie(["shd-ml-3 shd-self-baseline shd-rounded-full shd-p-1 shd-mt-[6px]", {
            "shd-bg-warning": !r.value
          }])
        }, null, 2)
      ], 2)
    ], 64));
  }
}), Dh = { class: "shd-text-12 shd-my-3 shd-px-4 shd-text-titleDark shd-uppercase" }, Lh = ["onClick"], Fh = { class: "shd-flex-1 shd-ml-2" }, Rh = { class: "shd-w shd-m-0 shd-text-black lg:shd-w-[290px] lg:shd-overflow-hidden lg:shd-overflow-ellipsis lg:shd-whitespace-nowrap" }, Ph = { class: "shd-text-12 shd-text-regularAlt" }, Uh = { class: "shd-text-surface-600 shd-m-0 shd-leading-[15px]" }, Bh = Te`
    fragment ManualInterventionFragment on ManualIntervention {
      address
      miSessionId
      targetId
    }
  `, Vh = /* @__PURE__ */ Ne({
  __name: "ManualInterventionNotification",
  props: {
    manualInterventions: null
  },
  emits: ["manualInterventionConsume"],
  setup(e, { emit: t }) {
    const n = e, { t: s } = Vt(), r = he(
      Array(n.manualInterventions.length).fill(!1)
    ), i = (o) => {
      ln("manualInterventionOpenDialog", {
        target_id: o.targetId,
        address: o.address,
        mi_session_id: o.miSessionId
      });
      const a = n.manualInterventions.findIndex((l) => l == o);
      t("manualInterventionConsume", r.value[a]), r.value[a] = !0;
    };
    return (o, a) => (E(), A(te, null, [
      x("h5", Dh, W(b(s)("Manual Interventions")), 1),
      (E(!0), A(te, null, He(e.manualInterventions, (l, d) => (E(), A(te, { key: d }, [
        l ? (E(), A("div", {
          key: 0,
          class: "notification-item hover:shd-bg-surface-50 shd-flex shd-cursor-pointer shd-items-center shd-justify-around shd-px-4 shd-py-2.5 shd-text-sm shd-transition-all shd-duration-200",
          onClick: (h) => i(l)
        }, [
          G(b(Rs), {
            height: 22,
            width: 22,
            class: "shd-text-gray-800 shd-p-0.5 shd-mt-[-9px]"
          }),
          x("div", Fh, [
            x("p", Rh, [
              De(W(b(s)("Manual intervention for :")) + " ", 1),
              x("span", Ph, W(l.address), 1)
            ]),
            x("p", Uh, W(b(s)("Resolve this issue")), 1)
          ]),
          x("span", {
            class: ie(["shd-ml-3 shd-self-baseline shd-rounded-full shd-p-1 shd-mt-[6px]", { "shd-bg-warning": !r.value[d] }])
          }, null, 2)
        ], 8, Lh)) : ce("", !0)
      ], 64))), 128))
    ], 64));
  }
}), jh = ["data-test", "aria-expanded"], Hh = {
  key: 0,
  class: "shd-absolute shd-left-5 shd-bottom-5"
}, zh = {
  key: 1,
  class: "shd-bg-primary shd-text-13 shd-text-primaryText shd-absolute shd-left-5 shd-bottom-5 shd-flex shd-items-center shd-justify-center shd-rounded-[69px] shd-px-[6px] shd-py-0 shd-font-semibold shd-leading-5 shd-tracking-wider"
}, Yh = ["data-test"], Zh = { class: "shd-border-b-divider-border shd-flex shd-items-center shd-justify-between shd-border-b shd-border-t-0 shd-border-r-0 shd-border-l-0 shd-border-solid shd-px-4 shd-pb-2.5" }, Wh = { class: "shd-m-0 shd-text-base shd-font-bold shd-text-titleDark" }, qh = { key: 0 }, Jh = ["data-test"], Gh = ["data-test"], Kh = { class: "shd-py-1.5 shd-flex shd-items-centershd-w-full" }, Xh = {
  key: 2,
  class: "shd-text-surface-600 shd-mb-2 shd-text-center shd-text-sm shd-font-semibold"
}, Qh = {
  key: 3,
  class: "shd-text-surface-600 shd-text-12 shd-mb-2 shd-text-center shd-font-semibold"
}, e0 = Te`
    query getNotificationData {
      manualInterventions {
        ...ManualInterventionFragment
      }
      systemUpdateInfo {
        ...SystemUpdateInfoFragment
      }
      appNotification {
        ...AppNotificationFragment
      }
    }
    ${$h}
    ${Bh}
    ${_h}
  `, t0 = Te`
    mutation {
      notificationConsumeAll
    }
  `, n0 = /* @__PURE__ */ Ne({
  __name: "MainNotification",
  props: {
    showNotificationDropdown: { type: Boolean }
  },
  emits: ["toggleNotification"],
  setup(e, { emit: t }) {
    const { t: n } = Vt(), s = 5e3, r = he(0), i = he(!0);
    let o = null;
    const { result: a, loading: l, error: d, refetch: h } = Vi(e0);
    ut([a, d], () => {
      o && clearInterval(o), o = setTimeout(() => {
        i.value = !1, h();
      }, s);
    });
    const f = _e(() => {
      if (!(l.value && i.value))
        return a.value;
    });
    ut(f, (K) => {
      r.value = 0, ln("manualInterventionNotificationInit", {
        manualInterventionCount: K == null ? void 0 : K.manualInterventions.length
      });
    });
    const w = (K) => {
      t("toggleNotification");
    }, v = (K) => {
      t("toggleNotification"), K || r.value++;
    }, p = () => {
      t("toggleNotification"), r.value++;
    }, N = _e(() => {
      var Z, X, ne;
      const K = (((Z = f.value) == null ? void 0 : Z.appNotification.unreadNotificationsCount) || 0) + (((X = f.value) == null ? void 0 : X.manualInterventions.length) || 0) + ((ne = f.value) != null && ne.systemUpdateInfo.newUpdate ? 1 : 0) - r.value;
      return K > 9 ? "9+" : K;
    }), M = _e(() => {
      var Z, X, ne;
      return (((Z = f.value) == null ? void 0 : Z.appNotification.appNotifications.totalCount) || 0) + (((X = f.value) == null ? void 0 : X.manualInterventions.length) || 0) + ((ne = f.value) != null && ne.systemUpdateInfo.newUpdate ? 1 : 0);
    }), F = async () => {
      var X, ne;
      const { result: K, error: Z } = await Tn((X = t0.loc) == null ? void 0 : X.source.body);
      K != null && K.notificationConsumeAll && ((ne = f.value) == null || ne.appNotification.appNotifications.nodes.map(
        (ge) => {
          ge.consumed = !0;
        }
      )), ds(Z);
    };
    return (K, Z) => {
      var X;
      return E(), A(te, null, [
        x("a", {
          href: "javascript:;",
          class: ie([
            "notify-toggle shd-bg-surface-50 hover:shd-bg-surface-100 group shd-relative shd-flex shd-h-10 shd-w-10 shd-items-center shd-justify-center shd-rounded-full shd-text-center shd-text-regular shd-no-underline focus:shd-border active:shd-text-primaryText active:shd-bg-surface-900",
            e.showNotificationDropdown ? "active shd-text-primaryText shd-bg-surface-900 hover:shd-text-primaryText hover:shd-bg-surface-900" : "disabled"
          ]),
          title: "Notifications",
          "data-toggle": "dropdown",
          "data-test": b(md),
          "aria-expanded": e.showNotificationDropdown,
          "aria-controls": "notification-area",
          onClick: Z[0] || (Z[0] = Kt((ne) => K.$emit("toggleNotification", b(Wi).Notification), ["stop"]))
        }, [
          G(b(rh), {
            height: 24,
            width: 24
          }),
          !b(f) && i.value ? (E(), A("span", Hh, [
            G(Nt, {
              size: "20px",
              shape: "circle",
              background: "shd-bg-primary"
            })
          ])) : ce("", !0),
          b(N) !== 0 && (b(f) || !i.value) ? (E(), A("span", zh, W(b(N)), 1)) : ce("", !0)
        ], 10, jh),
        x("div", {
          id: "notification-area",
          "data-test": b(gd),
          class: ie(["shd-shadow-default shd-notification-width shd-border-lightBlue shd-absolute shd-left-2.5 shd-right-2.5 shd-top-[116px] shd-z-50 shd-max-h-[75vh] shd-overflow-auto shd-rounded shd-border shd-border-solid shd-bg-white shd-py-4 shd-leading-none lg:shd-left-auto lg:shd-right-0 lg:shd-top-16 lg:shd-w-[25rem]", e.showNotificationDropdown ? "show" : "hidden"]),
          onClick: Z[1] || (Z[1] = Kt(() => {
          }, ["stop"]))
        }, [
          x("div", Zh, [
            x("h3", Wh, [
              De(W(b(n)("Notifications")) + " ", 1),
              b(M) > 0 ? (E(), A("span", qh, " (" + W(b(M)) + ") ", 1)) : ce("", !0)
            ]),
            b(f) ? (E(), A(te, { key: 1 }, [
              ((X = b(f).appNotification.appNotifications.totalCount) != null ? X : 0) > 0 ? (E(), A("button", {
                key: 0,
                type: "button",
                class: "hover:shd-bg-surface-100 shd-cursor-pointer shd-border-none shd-bg-transparent shd-p-2 shd-text-sm shd-text-black hover:shd-rounded-md",
                onClick: F
              }, W(b(n)("Mark All Notifications as Read")), 1)) : ce("", !0)
            ], 64)) : (E(), A("span", {
              key: 0,
              "data-test": b(pd),
              class: "shd-skeleton shd-relative shd-w-56 shd-rounded shd-h-4 shd-overflow-hidden shd-bg-surface-100 group-active:shd-bg-surface-900"
            }, null, 8, Jh))
          ]),
          b(f) ? (E(), A(te, { key: 1 }, [
            b(f).systemUpdateInfo.newUpdate ? (E(), Le(Oh, {
              key: 0,
              "update-info": b(f).systemUpdateInfo,
              onSystemUpdateEnable: p
            }, null, 8, ["update-info"])) : ce("", !0),
            b(f).manualInterventions.length ? (E(), Le(Vh, {
              key: 1,
              "manual-interventions": b(f).manualInterventions,
              onManualInterventionConsume: v
            }, null, 8, ["manual-interventions"])) : ce("", !0),
            G(Ih, {
              notifications: b(f).appNotification.appNotifications.nodes,
              onNotificationConsume: w
            }, null, 8, ["notifications"])
          ], 64)) : (E(), A("ul", {
            key: 0,
            "data-test": b(fd)
          }, [
            (E(), A(te, null, He(2, (ne) => x("li", { key: ne }, [
              x("div", Kh, [
                G(Nt, {
                  width: "1.5rem",
                  height: "1rem",
                  class: "shd-mx-3 shd-my-1"
                }),
                G(Nt, { class: "shd-my-1 shd-mr-4" })
              ])
            ])), 64))
          ], 8, Gh)),
          b(M) < 1 && b(f) ? (E(), A("p", Xh, W(b(n)("没有通知")), 1)) : ce("", !0),
          b(M) > 0 ? (E(), A("p", Qh, W(b(n)("That\u2019s all for the last 30 days")), 1)) : ce("", !0)
        ], 10, Yh)
      ], 64);
    };
  }
}), s0 = { class: "shd-flex shd-items-center shd-justify-around" }, r0 = { class: "shd-mt-3.5 shd-ml-3.5 shd-mb-3.5" }, i0 = {
  href: "/",
  title: "Go to Invicti Enterprise Home",
  rel: "noreferrer"
}, o0 = { class: "shd-mr-3.5 shd-flex shd-items-center shd-justify-around" }, a0 = { key: 0 }, l0 = {
  title: "New Scan",
  class: "shd-bg-primary shd-hidden shd-h-10 shd-w-28 shd-cursor-pointer shd-items-center shd-justify-center shd-gap-1 shd-rounded shd-border-0 shd-border-none shd-p-0 shd-text-base shd-font-semibold shd-text-white shd-no-underline md:shd-visible lg:shd-flex",
  "data-test": "new-scan",
  href: "/#/scans/targets"
}, c0 = { class: "shd-static shd-ml-3.5 lg:shd-relative" }, d0 = ["title", "aria-expanded"], u0 = { class: "shd-py-1.5 shd-flex shd-items-centershd-w-full" }, h0 = ["onClick"], f0 = { clas: "" }, p0 = { class: "shd-static shd-ml-3.5 lg:shd-relative" }, m0 = ["href"], g0 = { class: "shd-static shd-mx-3.5 lg:shd-relative" };
var Wi = /* @__PURE__ */ ((e) => (e[e.Notification = 0] = "Notification", e[e.UserMenu = 1] = "UserMenu", e[e.SideNavBar = 2] = "SideNavBar", e))(Wi || {});
const w0 = Te`
    fragment UserProfile on MenuItem {
      id
      name
      url
      slug
    }
  `, b0 = Te`
    fragment LoginUser on User {
      firstName
      lastName
    }
  `, x0 = Te`
    fragment Header on Query {
      navigation {
        userProfile: userProfileMenu {
          ...UserProfile
        }
      }
      user {
        ...LoginUser
      }
    }
    ${b0},
    ${w0}
  `, v0 = /* @__PURE__ */ Ne({
  __name: "TheHeader",
  props: {
    headerData: null,
    helpLink: null,
    showNewScan: { type: Boolean }
  },
  emits: ["toggleSideNavBar", "navigate"],
  setup(e, { emit: t }) {
    const n = e, { t: s } = Vt(), r = tn(n, "headerData"), i = tn(n, "helpLink"), o = he(!1), a = he(!1), l = _e(
      () => {
        var v, p;
        return (p = (v = r.value) == null ? void 0 : v.navigation) == null ? void 0 : p.userProfile;
      }
    ), d = _e(
      () => {
        var v, p, N;
        return ((v = r.value) == null ? void 0 : v.user) && ((N = (p = r.value) == null ? void 0 : p.user) == null ? void 0 : N.firstName) ? `${r.value.user.firstName}${r.value.user.lastName ? ` ${r.value.user.lastName}` : ""}` : void 0;
      }
    ), h = (v) => {
      switch (v) {
        case 0:
          o.value = !o.value, a.value = !1;
          break;
        case 1:
          o.value = !1, a.value = !a.value;
          break;
        case 2:
          t("toggleSideNavBar");
          break;
        default:
          o.value = !1, a.value = !1;
          break;
      }
    }, f = () => {
      h();
    }, w = (v) => {
      v && t("navigate", v), h(1);
    };
    return cn(() => {
      document.addEventListener("click", f);
    }), ks(() => {
      document.removeEventListener("click", f);
    }), (v, p) => (E(), A("div", {
      "data-test": "header-area",
      class: ie([
        "shd-h-20 shd-bg-white shd-shadow-[1px_0_rgb(218,218,218)]",
        "grid-header shd-border-lightGray shd-flex shd-flex-wrap shd-justify-between shd-border-t-0 shd-border-r-0 shd-border-l-0 shd-border-b shd-border-solid"
      ])
    }, [
      x("div", s0, [
        x("a", {
          href: "javascript:;",
          title: "Menu",
          class: "sidenav-toggle shd-bg-lighterGray shd-sidenav-height shd-flex shd-w-16 shd-items-center shd-justify-center",
          "data-test": "sidenav-toggle",
          onClick: p[0] || (p[0] = (N) => h(2))
        }, [
          G(b(zu))
        ]),
        x("div", r0, [
          x("a", i0, [
            G(b(Uu), {
              width: 134,
              height: 40,
              "data-test": "logo-desktop"
            })
          ])
        ])
      ]),
      x("div", o0, [
        e.showNewScan ? (E(), A("div", a0, [
          x("a", l0, [
            G(b(Hi), {
              width: 18,
              height: 18
            }),
            x("span", null, W(b(s)("New Scan")), 1)
          ])
        ])) : ce("", !0),
        x("div", null, [
          x("div", c0, [
            x("a", {
              href: "javascript:;",
              title: b(d),
              class: ie([
                "shd-group shd-bg-surface-50 hover:shd-bg-surface-100 shd-text-regular shd-leading-50 active:shd-text-primaryText active:shd-bg-surface-900 shd-flex shd-h-10 shd-items-center shd-justify-center shd-rounded-full shd-pl-3 shd-pr-3 shd-text-base shd-no-underline focus:shd-border",
                a.value ? "active shd-text-primaryText shd-bg-surface-900 hover:shd-text-primaryText hover:shd-bg-surface-900" : "disabled"
              ]),
              "data-toggle": "dropdown",
              "data-test": "usermenu-toggle",
              "aria-expanded": !!a.value,
              "aria-controls": "user-menu-area",
              onClick: p[1] || (p[1] = Kt((N) => h(1), ["stop"]))
            }, [
              b(d) ? ce("", !0) : (E(), A("span", {
                key: 0,
                class: ie([
                  "shd-skeleton shd-relative shd-w-24 shd-rounded shd-h-4 shd-overflow-hidden group-active:shd-bg-surface-900",
                  a.value ? "shd-bg-surface-900" : "shd-bg-surface-100"
                ])
              }, null, 2)),
              De(" " + W(b(d)), 1)
            ], 10, d0),
            x("ul", {
              id: "user-menu-area",
              class: ie([
                "lg:shd-top-11",
                "shd-border-lightBlue shd-shadow-default shd-top-16 shd-absolute shd-z-50 shd-m-0 shd-w-56 shd-rounded shd-border shd-border-solid shd-bg-white shd-p-2 shd-leading-none",
                a.value ? "show" : "shd-hidden"
              ]),
              role: "menu",
              "data-test": "user-menu-area",
              onClick: p[2] || (p[2] = Kt(() => {
              }, ["stop"]))
            }, [
              b(l) ? (E(!0), A(te, { key: 1 }, He(b(l), (N, M) => (E(), A("li", {
                key: M,
                class: ""
              }, [
                x("a", {
                  href: "#",
                  class: ie([
                    "shd-py-1.5 shd-rounded hover:shd-text-regular",
                    "shd-text-dark shd-flex shd-items-center shd-leading-5 shd-no-underline shd-w-full",
                    "shd-text-regular hover:shd-text-regular hover:shd-bg-surface-50 focus:shd-bg-surface-50"
                  ]),
                  onClick: Kt(() => w(N), ["stop", "prevent"])
                }, [
                  G(Ti, {
                    name: N.slug,
                    class: "shd-mx-3 shd-my-1 shd-w-4 iconBlack"
                  }, null, 8, ["name"]),
                  x("span", f0, W(N.name), 1)
                ], 10, h0)
              ]))), 128)) : (E(), A(te, { key: 0 }, He(2, (N) => x("li", { key: N }, [
                x("div", u0, [
                  G(Nt, {
                    width: "1.5rem",
                    height: "1rem",
                    class: "shd-mx-3 shd-my-1"
                  }),
                  G(Nt, { class: "shd-my-1 shd-mr-4" })
                ])
              ])), 64))
            ], 2)
          ])
        ]),
        x("div", null, [
          x("div", p0, [
            x("a", {
              href: b(i),
              target: "_blank",
              title: "Help",
              class: ie(["shd-bg-surface-50 hover:shd-bg-surface-100 shd-text-regular shd-leading-50 active:shd-text-primaryText active:shd-bg-surface-900 shd-flex shd-h-10 shd-w-10 shd-items-center shd-justify-center shd-rounded-full shd-text-base shd-no-underline focus:shd-border", a.value ? "active" : "disabled"])
            }, [
              G(b(Qu), {
                height: 24,
                width: 24,
                class: "mobile-icon"
              })
            ], 10, m0)
          ])
        ]),
        x("div", g0, [
          G(n0, {
            "show-notification-dropdown": o.value,
            onToggleNotification: h
          }, null, 8, ["show-notification-dropdown"])
        ])
      ])
    ], 2));
  }
}), _0 = {
  key: 0,
  class: "shd-bg-surface-50 shd-h-[64px] shd-min-w-[700px] shd-px-5"
}, y0 = { class: "shd-m-0 shd-p-[16px] shd-pl-0 shd-text-2xl" }, E0 = Te`
    fragment MainLayout on Query {
      license {
        ...LicenseWarning
      }
    }
    ${Mu},
  `, I0 = Te`
    query getSharedUIData {
      ...Header
      ...SideNavBar
      ...MainLayout
    }
    ${E0},
    ${fu},
    ${x0},
  `, N0 = /* @__PURE__ */ Ne({
  __name: "TheMainLayout",
  props: {
    title: null,
    showNewScan: { type: Boolean },
    lang: null
  },
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const n = e, s = he(), r = "menuOpen", i = he(!1), o = tn(n, "lang"), a = (M) => {
      t("navigate", M.url), h.value = String(M.helpLink), p.value = M.url;
    }, l = (M) => {
      d.value = M;
      try {
        M ? window.localStorage.setItem(r, "1") : window.localStorage.removeItem(r);
      } catch {
      }
    }, d = he(window.localStorage.getItem(r) == "1"), h = he("https://www.acunetix.com/support/"), { result: f, refetch: w } = Vi(I0), v = _e(() => f.value);
    ut(o, (M) => {
      ji.setLanguage(M), w();
    });
    const p = he(""), N = () => p.value = window.location.href;
    return cn(() => {
      N(), s.value.parentNode.querySelectorAll("slot").forEach((F) => {
        F.addEventListener("slotchange", N);
      });
    }), ks(() => {
      s.value.parentNode.querySelectorAll("slot").forEach((F) => {
        F.removeEventListener("slotchange", N);
      });
    }), (M, F) => {
      var K;
      return E(), A("div", {
        ref_key: "mainContent",
        ref: s,
        class: "main-layout shd-text-defaultGray shd-grid shd-h-screen shd-w-full shd-bg-white"
      }, [
        G($u, {
          "license-data": (K = b(v)) == null ? void 0 : K.license,
          onToggle: F[0] || (F[0] = (Z) => i.value = Z)
        }, null, 8, ["license-data"]),
        G(v0, {
          "header-data": b(v),
          "help-link": h.value,
          "show-new-scan": e.showNewScan,
          onToggleSideNavBar: F[1] || (F[1] = (Z) => l(!d.value)),
          onNavigate: a
        }, null, 8, ["header-data", "help-link", "show-new-scan"]),
        G(pu, {
          "is-expanded-by-toggle": d.value,
          "side-nav-bar-data": b(v),
          "warning-width-compensation": i.value,
          "current-path": p.value,
          onOnCollapse: F[2] || (F[2] = (Z) => l(!1)),
          onOnExpand: F[3] || (F[3] = (Z) => l(!0)),
          onOnNavigate: a
        }, null, 8, ["is-expanded-by-toggle", "side-nav-bar-data", "warning-width-compensation", "current-path"]),
        x("div", {
          id: "main-content",
          class: ie([
            "grid-content shd-overflow-auto shd-duration-200 shd-ease-in-out shd-bg-container",
            d.value ? "shd-ml-56" : "shd-ml-16"
          ])
        }, [
          e.title ? (E(), A("div", _0, [
            x("h1", y0, W(e.title), 1)
          ])) : ce("", !0),
          Ss(M.$slots, "default")
        ], 2)
      ], 512);
    };
  }
}), T0 = `li{list-style-type:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::-webkit-backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.shd-static{position:static}.shd-fixed{position:fixed}.shd-absolute{position:absolute}.shd-relative{position:relative}.shd-inset-x-0{left:0px;right:0px}.shd-top-16{top:4rem}.shd-top-20{top:5rem}.shd-top-28{top:7rem}.shd-bottom-0{bottom:0px}.shd-left-5{left:1.25rem}.shd-bottom-5{bottom:1.25rem}.shd-left-2\\.5{left:.625rem}.shd-right-2\\.5{right:.625rem}.shd-top-\\[116px\\]{top:116px}.shd-left-2{left:.5rem}.shd-right-2{right:.5rem}.shd-isolate{isolation:isolate}.shd-z-50{z-index:50}.shd-z-20{z-index:20}.shd-row-span-2{grid-row:span 2 / span 2}.shd-m-0{margin:0}.shd-mx-3{margin-left:.75rem;margin-right:.75rem}.shd-my-1{margin-top:.25rem;margin-bottom:.25rem}.shd-mx-3\\.5{margin-left:.875rem;margin-right:.875rem}.shd-my-auto{margin-top:auto;margin-bottom:auto}.shd-my-3{margin-top:.75rem;margin-bottom:.75rem}.shd-mx-2\\.5{margin-left:.625rem;margin-right:.625rem}.shd-mx-2{margin-left:.5rem;margin-right:.5rem}.shd-mt-3\\.5{margin-top:.875rem}.shd-ml-3\\.5{margin-left:.875rem}.shd-mb-3\\.5{margin-bottom:.875rem}.shd-mt-3{margin-top:.75rem}.shd-ml-3{margin-left:.75rem}.shd-mb-3{margin-bottom:.75rem}.shd-mr-3\\.5{margin-right:.875rem}.shd-mr-3{margin-right:.75rem}.shd-mr-4{margin-right:1rem}.shd-ml-56{margin-left:14rem}.shd-ml-16{margin-left:4rem}.shd-mb-2\\.5{margin-bottom:.625rem}.shd-mb-2{margin-bottom:.5rem}.shd-mt-auto{margin-top:auto}.shd-mt-8{margin-top:2rem}.shd-mb-4{margin-bottom:1rem}.shd-mb-auto{margin-bottom:auto}.shd-mt-0{margin-top:0}.shd-mr-auto{margin-right:auto}.shd-mr-1{margin-right:.25rem}.shd-mt-\\[-9px\\]{margin-top:-9px}.shd-ml-2{margin-left:.5rem}.shd-mt-\\[6px\\]{margin-top:6px}.shd-ml-auto{margin-left:auto}.shd-mr-6{margin-right:1.5rem}.shd-block{display:block}.shd-inline-block{display:inline-block}.shd-flex{display:flex}.shd-inline-flex{display:inline-flex}.shd-grid{display:grid}.shd-hidden{display:none}.shd-h-20{height:5rem}.shd-h-10{height:2.5rem}.shd-h-4{height:1rem}.shd-h-screen{height:100vh}.shd-h-\\[64px\\]{height:64px}.shd-h-11{height:2.75rem}.shd-h-64{height:16rem}.shd-h-8{height:2rem}.shd-h-0{height:0px}.shd-max-h-\\[75vh\\]{max-height:75vh}.shd-w-16{width:4rem}.shd-w-28{width:7rem}.shd-w-24{width:6rem}.shd-w-56{width:14rem}.shd-w-full{width:100%}.shd-w-4{width:1rem}.shd-w-10{width:2.5rem}.shd-w-screen{width:100vw}.shd-w-40{width:10rem}.shd-w-64{width:16rem}.shd-w-auto{width:auto}.shd-w-6{width:1.5rem}.shd-min-w-\\[700px\\]{min-width:700px}.shd-min-w-min{min-width:-webkit-min-content;min-width:-moz-min-content;min-width:min-content}.shd-flex-1{flex:1 1 0%}.shd-flex-shrink-0{flex-shrink:0}.shd-translate-x-\\[-100\\%\\]{--tw-translate-x: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.shd-cursor-pointer{cursor:pointer}.shd-cursor-default{cursor:default}.shd-flex-row{flex-direction:row}.shd-flex-col{flex-direction:column}.shd-flex-wrap{flex-wrap:wrap}.shd-flex-nowrap{flex-wrap:nowrap}.shd-items-start{align-items:flex-start}.shd-items-center{align-items:center}.shd-justify-center{justify-content:center}.shd-justify-between{justify-content:space-between}.shd-justify-around{justify-content:space-around}.shd-gap-1{gap:.25rem}.shd-self-baseline{align-self:baseline}.shd-overflow-auto{overflow:auto}.shd-overflow-hidden{overflow:hidden}.shd-overflow-y-auto{overflow-y:auto}.shd-whitespace-nowrap{white-space:nowrap}.shd-rounded{border-radius:.25rem}.shd-rounded-full{border-radius:9999px}.shd-rounded-md{border-radius:.375rem}.shd-rounded-\\[69px\\]{border-radius:69px}.shd-rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.shd-rounded-bl{border-bottom-left-radius:.25rem}.shd-rounded-br{border-bottom-right-radius:.25rem}.shd-border-0{border-width:0px}.shd-border,.shd-border-\\[1px\\]{border-width:1px}.shd-border-t-0{border-top-width:0px}.shd-border-r-0{border-right-width:0px}.shd-border-l-0{border-left-width:0px}.shd-border-b{border-bottom-width:1px}.shd-border-solid{border-style:solid}.shd-border-none{border-style:none}.shd-border-primary{--tw-border-opacity: 1;border-color:rgb(217 51 11 / var(--tw-border-opacity))}.shd-border-b-divider-border{--tw-border-opacity: 1;border-bottom-color:rgb(222 226 230 / var(--tw-border-opacity))}.shd-bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.shd-bg-primary{--tw-bg-opacity: 1;background-color:rgb(217 51 11 / var(--tw-bg-opacity))}.shd-bg-surface-50{--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity))}.shd-bg-surface-900{--tw-bg-opacity: 1;background-color:rgb(2 2 3 / var(--tw-bg-opacity))}.shd-bg-surface-100{--tw-bg-opacity: 1;background-color:rgb(227 227 227 / var(--tw-bg-opacity))}.shd-bg-container{--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity))}.shd-bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.shd-bg-transparent{background-color:transparent}.shd-bg-warning{--tw-bg-opacity: 1;background-color:rgb(244 67 54 / var(--tw-bg-opacity))}.shd-bg-divider-border{--tw-bg-opacity: 1;background-color:rgb(222 226 230 / var(--tw-bg-opacity))}.shd-bg-black{--tw-bg-opacity: 1;background-color:rgb(29 28 41 / var(--tw-bg-opacity))}.shd-fill-primary{fill:#d9330b}.shd-p-0{padding:0}.shd-p-2{padding:.5rem}.shd-p-\\[16px\\]{padding:16px}.shd-p-2\\.5{padding:.625rem}.shd-p-0\\.5{padding:.125rem}.shd-p-1{padding:.25rem}.shd-py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.shd-py-1{padding-top:.25rem;padding-bottom:.25rem}.shd-px-5{padding-left:1.25rem;padding-right:1.25rem}.shd-px-6{padding-left:1.5rem;padding-right:1.5rem}.shd-py-8{padding-top:2rem;padding-bottom:2rem}.shd-px-2{padding-left:.5rem;padding-right:.5rem}.shd-px-3{padding-left:.75rem;padding-right:.75rem}.shd-py-2{padding-top:.5rem;padding-bottom:.5rem}.shd-px-\\[6px\\]{padding-left:6px;padding-right:6px}.shd-py-0{padding-top:0;padding-bottom:0}.shd-py-4{padding-top:1rem;padding-bottom:1rem}.shd-px-4{padding-left:1rem;padding-right:1rem}.shd-py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.shd-pl-3{padding-left:.75rem}.shd-pr-3{padding-right:.75rem}.shd-pl-0{padding-left:0}.shd-pb-2\\.5{padding-bottom:.625rem}.shd-pb-2{padding-bottom:.5rem}.shd-pl-1{padding-left:.25rem}.shd-text-center{text-align:center}.shd-align-middle{vertical-align:middle}.shd-align-bottom{vertical-align:bottom}.shd-text-base{font-size:1rem;line-height:1.5rem}.shd-text-2xl{font-size:1.5rem;line-height:2rem}.shd-text-3xl{font-size:1.875rem;line-height:2.25rem}.shd-text-lg{font-size:1.125rem;line-height:1.75rem}.shd-text-sm{font-size:.875rem;line-height:1.25rem}.shd-text-13{font-size:13px}.shd-text-12{font-size:12px}.shd-font-semibold{font-weight:600}.shd-font-light{font-weight:300}.shd-font-bold{font-weight:700}.shd-uppercase{text-transform:uppercase}.shd-capitalize{text-transform:capitalize}.shd-leading-none{line-height:1}.shd-leading-5{line-height:1.25rem}.shd-leading-8{line-height:2rem}.shd-leading-\\[15px\\]{line-height:15px}.shd-tracking-wider{letter-spacing:.05em}.shd-text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.shd-text-regular{--tw-text-opacity: 1;color:rgb(29 28 40 / var(--tw-text-opacity))}.shd-text-primaryText{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.shd-text-primaryLight{--tw-text-opacity: 1;color:rgb(191 219 254 / var(--tw-text-opacity))}.shd-text-primary{--tw-text-opacity: 1;color:rgb(217 51 11 / var(--tw-text-opacity))}.shd-text-warningText{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.shd-text-titleDark{--tw-text-opacity: 1;color:rgb(73 80 87 / var(--tw-text-opacity))}.shd-text-black{--tw-text-opacity: 1;color:rgb(29 28 41 / var(--tw-text-opacity))}.shd-text-surface-600{--tw-text-opacity: 1;color:rgb(74 80 86 / var(--tw-text-opacity))}.shd-text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.shd-text-regularAlt{--tw-text-opacity: 1;color:rgb(119 119 127 / var(--tw-text-opacity))}.shd-no-underline{-webkit-text-decoration-line:none;text-decoration-line:none}.shd-shadow-\\[1px_0_rgb\\(218\\,218\\,218\\)\\]{--tw-shadow: 1px 0 rgb(218,218,218);--tw-shadow-colored: 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shd-transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.shd-duration-200{transition-duration:.2s}.shd-ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.shd-content-\\[\\"\\"\\]{--tw-content: "";content:var(--tw-content)}.grid-header-warning{grid-area:header-warning}.grid-header{grid-area:header}.grid-content{grid-area:content}.shd-w-stretch{width:stretch;width:-webkit-fill-available;width:-moz-available}.shd-w-inherit{width:inherit}body{margin:0}@font-face{font-family:Source Sans Pro;src:url(/app/fonts/SourceSansPro-Regular.woff2) format("woff2"),url(/app/fonts/SourceSansPro-Regular.woff) format("woff");font-weight:400;font-style:normal}.iconBlack path{fill:#1d1c29}.iconWhite path{fill:#fff}.iconPrimary path{fill:#d9330b}[tooltip-wrapper]{position:relative}[tooltip-wrapper] [role=tooltip]{pointer-events:none;position:absolute;left:50%;bottom:100%;--tw-translate-y: 0px;--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:.375rem;--tw-bg-opacity: 1;background-color:rgb(56 55 66 / var(--tw-bg-opacity));padding:.5rem;text-align:center;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity));opacity:0;--tw-shadow: 0px 2px 12px rgba(0, 0, 0, .1);--tw-shadow-colored: 0px 2px 12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1)}[tooltip-wrapper]:hover:after{--tw-translate-x: -50%;--tw-translate-y: -8px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}[tooltip-wrapper]:hover [role=tooltip]{pointer-events:auto;--tw-translate-x: -50%;--tw-translate-y: -8px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}[tooltip-wrapper]:after{position:absolute;bottom:0px;left:50%;margin-bottom:30px;--tw-translate-y: 0px;--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-top-width:3px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(56 55 66 / var(--tw-border-opacity));border-bottom-color:transparent;border-left-color:transparent;border-right-color:transparent;opacity:0;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);--tw-content: "";content:var(--tw-content)}.collapsible{max-height:0px;transition:max-height .3s cubic-bezier(0,1,0,1) -.1s;overflow:hidden}.collapsible.open{max-height:9999px;transition-timing-function:cubic-bezier(.5,0,1,0);transition-delay:0s}.shd-scrollbar{scrollbar-width:thin;scrollbar-color:#1d1c29 #dee2e6}.shd-scrollbar::-webkit-scrollbar{height:.375rem;width:.375rem;--tw-bg-opacity: 1;background-color:rgb(222 226 230 / var(--tw-bg-opacity))}.shd-scrollbar::-webkit-scrollbar-track{--tw-bg-opacity: 1;background-color:rgb(222 226 230 / var(--tw-bg-opacity))}.shd-scrollbar::-webkit-scrollbar-thumb{--tw-bg-opacity: 1;background-color:rgb(29 28 41 / var(--tw-bg-opacity));border-radius:.25rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(29 28 41 / var(--tw-border-opacity))}@layer component{.notify-toggle[aria-expanded=false]+div{display:none}.usermenu-toggle[aria-expanded=false]+ul{display:none}.notify-toggle[aria-expanded=true]+div{display:block}.usermenu-toggle[aria-expanded=true]+ul{display:block}}*{box-sizing:border-box}.main-layout{grid-template-columns:auto 1fr;grid-template-rows:auto auto auto 1fr;grid-template-areas:"header-warning  header-warning" "header  header" "sidebar title" "sidebar content";font-family:Source Sans Pro}.hover\\:shd-rounded-md:hover{border-radius:.375rem}.hover\\:shd-bg-surface-100:hover{--tw-bg-opacity: 1;background-color:rgb(227 227 227 / var(--tw-bg-opacity))}.hover\\:shd-bg-surface-900:hover{--tw-bg-opacity: 1;background-color:rgb(2 2 3 / var(--tw-bg-opacity))}.hover\\:shd-bg-surface-50:hover{--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity))}.hover\\:shd-text-primaryText:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.hover\\:shd-text-regular:hover{--tw-text-opacity: 1;color:rgb(29 28 40 / var(--tw-text-opacity))}.focus\\:shd-border:focus{border-width:1px}.focus\\:shd-bg-surface-50:focus{--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity))}.active\\:shd-bg-surface-900:active{--tw-bg-opacity: 1;background-color:rgb(2 2 3 / var(--tw-bg-opacity))}.active\\:shd-text-primaryText:active{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.shd-group:active .group-active\\:shd-bg-surface-900{--tw-bg-opacity: 1;background-color:rgb(2 2 3 / var(--tw-bg-opacity))}@media (min-width: 640px){.sm\\:shd-mx-auto{margin-left:auto;margin-right:auto}.sm\\:shd-max-w-4xl{max-width:56rem}.sm\\:shd-rounded{border-radius:.25rem}}@media (min-width: 768px){.md\\:shd-visible{visibility:visible}}@media (min-width: 1024px){.lg\\:shd-relative{position:relative}.lg\\:shd-top-11{top:2.75rem}.lg\\:shd-left-auto{left:auto}.lg\\:shd-right-0{right:0px}.lg\\:shd-top-16{top:4rem}.lg\\:shd-flex{display:flex}.lg\\:shd-w-\\[25rem\\]{width:25rem}.lg\\:shd-w-\\[290px\\]{width:290px}.lg\\:shd-w-\\[300px\\]{width:300px}.lg\\:shd-w-\\[259px\\]{width:259px}.lg\\:shd-overflow-hidden{overflow:hidden}.lg\\:shd-overflow-ellipsis{text-overflow:ellipsis}.lg\\:shd-whitespace-nowrap{white-space:nowrap}}
`, k0 = /* @__PURE__ */ Ps(N0, [["styles", [T0]]]);
const A0 = { class: "iconBase shd-fill-primary shd-inline-block" }, S0 = ["src", "alt"], C0 = /* @__PURE__ */ Ne({
  __name: "BaseIcon",
  props: {
    iconName: null,
    width: { default: 24 },
    height: { default: 24 }
  },
  setup(e) {
    const t = e;
    ll((i) => ({
      "2e9fa9ba": b(s),
      "13863f6a": b(r)
    }));
    const n = _e(
      () => "/app/images/icons/" + t.iconName + ".svg?component"
    ), s = _e(() => t.width + "px"), r = _e(() => t.height + "px");
    return (i, o) => (E(), A("div", A0, [
      x("img", {
        class: "shd-w-inherit",
        src: b(n),
        alt: e.iconName
      }, null, 8, S0)
    ]));
  }
}), M0 = `.iconBase[data-v-ce163006]{width:var(--2e9fa9ba);height:var(--13863f6a)}
`, $0 = /* @__PURE__ */ Ps(C0, [["styles", [M0]], ["__scopeId", "data-v-ce163006"]]), O0 = { class: "shd-text-sm shd-font-semibold" }, D0 = /* @__PURE__ */ Ne({
  __name: "ButtonComponent",
  props: {
    icon: null,
    iconWidth: null,
    iconHeight: null,
    label: null,
    className: null
  },
  setup(e) {
    return (t, n) => (E(), A("button", {
      class: ie(["shd-border-primary shd-text-primary shd-inline-flex shd-cursor-pointer shd-items-center shd-rounded shd-border shd-bg-transparent shd-px-3 shd-py-2 shd-align-bottom", e.className]),
      type: "button"
    }, [
      Ss(t.$slots, "icon"),
      e.icon ? (E(), Le($0, {
        key: 0,
        "icon-name": e.icon,
        width: e.iconWidth,
        height: e.iconHeight,
        class: "shd-my-auto shd-mr-1"
      }, null, 8, ["icon-name", "width", "height"])) : ce("", !0),
      x("span", O0, W(e.label), 1)
    ], 2));
  }
}), L0 = "/app/images/acunetix-logo.svg?component", F0 = { class: "shd-bg-primary shd-flex shd-h-screen shd-w-screen shd-flex-col shd-justify-center" }, R0 = { class: "shd-relative shd-w-full shd-bg-white shd-px-6 shd-py-8 sm:shd-mx-auto sm:shd-max-w-4xl sm:shd-rounded" }, P0 = { class: "shd-flex shd-flex-row shd-justify-between" }, U0 = { class: "shd-flex shd-flex-col shd-justify-between" }, B0 = /* @__PURE__ */ x("img", {
  src: L0,
  class: "shd-h-11 shd-w-40",
  alt: "Invicti logo"
}, null, -1), V0 = {
  key: 0,
  class: "shd-flex shd-flex-col"
}, j0 = ["src"], H0 = /* @__PURE__ */ Ne({
  __name: "ErrorPageBase",
  props: {
    icon: null
  },
  setup(e) {
    return (t, n) => (E(), A("div", F0, [
      x("div", R0, [
        x("div", P0, [
          x("div", U0, [
            B0,
            Ss(t.$slots, "default")
          ]),
          e.icon ? (E(), A("div", V0, [
            x("img", {
              src: `/images/icons/error/${e.icon}.svg`,
              class: "shd-h-64 shd-w-64",
              alt: "Not found 404 logo"
            }, null, 8, j0)
          ])) : ce("", !0)
        ])
      ])
    ]));
  }
}), z0 = {
  width: "18",
  height: "18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Y0 = /* @__PURE__ */ x("path", {
  d: "M9.53 4.28a.75.75 0 0 0-1.06-1.06L3.22 8.47a.75.75 0 0 0 0 1.06l5.25 5.25a.75.75 0 0 0 1.06-1.06L4.81 9l4.72-4.72Z",
  fill: "#1D1C29"
}, null, -1), Z0 = /* @__PURE__ */ x("path", {
  d: "M9.53 4.28a.75.75 0 0 0-1.06-1.06L3.22 8.47a.75.75 0 0 0 0 1.06l5.25 5.25a.75.75 0 0 0 1.06-1.06L4.81 9l4.72-4.72Z",
  fill: "#020203"
}, null, -1), W0 = /* @__PURE__ */ x("path", {
  d: "M3.75 8.25a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H3.75Z",
  fill: "#1D1C29"
}, null, -1), q0 = /* @__PURE__ */ x("path", {
  d: "M3.75 8.25a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H3.75Z",
  fill: "#020203"
}, null, -1), J0 = [
  Y0,
  Z0,
  W0,
  q0
];
function G0(e, t) {
  return E(), A("svg", z0, J0);
}
const K0 = { render: G0 }, X0 = /* @__PURE__ */ x("h1", { class: "shd-text-dark shd-mt-8 shd-mb-4 shd-text-3xl" }, " 404 Page Not Found ", -1), Q0 = /* @__PURE__ */ x("h2", { class: "shd-text-primaryLight shd-mb-4 shd-mt-0 shd-text-lg shd-font-light" }, " Something went wrong. ", -1), ef = /* @__PURE__ */ x("span", { class: "shd-mb-4 shd-text-sm" }, " The page you requested does not exist. ", -1), tf = /* @__PURE__ */ Ne({
  __name: "PageNotFound",
  setup(e) {
    const t = () => window.history.back();
    return (n, s) => (E(), Le(H0, { icon: "not-found" }, {
      default: Qn(() => [
        X0,
        Q0,
        ef,
        G(D0, {
          label: "Back",
          "icon-height": 16,
          "icon-width": 16,
          class: "shd-mr-auto",
          onClick: t
        }, {
          icon: Qn(() => [
            G(b(K0), { class: "shd-icon-blue shd-mr-1 shd-w-4 shd-align-middle" })
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
customElements.define("the-main-layout-wc", ol(k0));
export {
  tf as PageNotFound,
  k0 as TheMainLayout
};
