//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function e(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var t = {}, n = [], r = () => {}, i = () => !1, a = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), o = (e) => e.startsWith("onUpdate:"), s = Object.assign, c = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), ee = (e) => x(e).slice(8, -1), S = (e) => x(e) === "[object Object]", C = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, te = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ne = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, re = /-\w/g, w = ne((e) => e.replace(re, (e) => e.slice(1).toUpperCase())), ie = /\B([A-Z])/g, ae = ne((e) => e.replace(ie, "-$1").toLowerCase()), oe = ne((e) => e.charAt(0).toUpperCase() + e.slice(1)), se = ne((e) => e ? `on${oe(e)}` : ""), ce = (e, t) => !Object.is(e, t), le = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, T = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, ue = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, de, fe = () => de ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function E(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? ge(r) : E(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (g(e) || v(e)) return e;
}
var pe = /;(?![^(]*\))/g, me = /:([^]+)/, he = /\/\*[^]*?\*\//g;
function ge(e) {
	let t = {};
	return e.replace(he, "").split(pe).forEach((e) => {
		if (e) {
			let n = e.split(me);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function D(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = D(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var _e = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ve = /* @__PURE__ */ e(_e);
_e + "";
function ye(e) {
	return !!e || e === "";
}
function be(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = xe(e[r], t[r]);
	return n;
}
function xe(e, t) {
	if (e === t) return !0;
	let n = m(e), r = m(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = _(e), r = _(t), n || r) return e === t;
	if (n = d(e), r = d(t), n || r) return n && r ? be(e, t) : !1;
	if (n = v(e), r = v(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !xe(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
var Se = (e) => !!(e && e.__v_isRef === !0), O = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? Se(e) ? O(e.value) : JSON.stringify(e, Ce, 2) : String(e), Ce = (e, t) => Se(t) ? Ce(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[we(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => we(e)) } : _(t) ? we(t) : v(t) && !d(t) && !S(t) ? String(t) : t, we = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, k, Te = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && k && (k.active ? (this.parent = k, this.index = (k.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = k;
			try {
				return k = this, e();
			} finally {
				k = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = k, k = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (k === this) k = this.prevScope;
			else {
				let e = k;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Ee(e) {
	return new Te(e);
}
function De() {
	return k;
}
function Oe(e, t = !1) {
	k && k.cleanups.push(e);
}
var A, ke = /* @__PURE__ */ new WeakSet(), Ae = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, k && (k.active ? k.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, ke.has(this) && (ke.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Pe(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, qe(this), Le(this);
		let e = A, t = Ue;
		A = this, Ue = !0;
		try {
			return this.fn();
		} finally {
			Re(this), A = e, Ue = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ve(e);
			this.deps = this.depsTail = void 0, qe(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? ke.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		ze(this) && this.run();
	}
	get dirty() {
		return ze(this);
	}
}, je = 0, Me, Ne;
function Pe(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Ne, Ne = e;
		return;
	}
	e.next = Me, Me = e;
}
function Fe() {
	je++;
}
function Ie() {
	if (--je > 0) return;
	if (Ne) {
		let e = Ne;
		for (Ne = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Me;) {
		let t = Me;
		for (Me = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Le(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Re(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ve(r), He(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function ze(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Be(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Be(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Je) || (e.globalVersion = Je, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ze(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = A, r = Ue;
	A = e, Ue = !0;
	try {
		Le(e);
		let n = e.fn(e._value);
		(t.version === 0 || ce(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		A = n, Ue = r, Re(e), e.flags &= -3;
	}
}
function Ve(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ve(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function He(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Ue = !0, We = [];
function Ge() {
	We.push(Ue), Ue = !1;
}
function Ke() {
	let e = We.pop();
	Ue = e === void 0 ? !0 : e;
}
function qe(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = A;
		A = void 0;
		try {
			t();
		} finally {
			A = e;
		}
	}
}
var Je = 0, Ye = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Xe = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!A || !Ue || A === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== A) t = this.activeLink = new Ye(A, this), A.deps ? (t.prevDep = A.depsTail, A.depsTail.nextDep = t, A.depsTail = t) : A.deps = A.depsTail = t, Ze(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = A.depsTail, t.nextDep = void 0, A.depsTail.nextDep = t, A.depsTail = t, A.deps === t && (A.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Je++, this.notify(e);
	}
	notify(e) {
		Fe();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ie();
		}
	}
};
function Ze(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Ze(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var Qe = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ Symbol(""), et = /* @__PURE__ */ Symbol(""), tt = /* @__PURE__ */ Symbol("");
function j(e, t, n) {
	if (Ue && A) {
		let t = Qe.get(e);
		t || Qe.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Xe()), r.map = t, r.key = n), r.track();
	}
}
function nt(e, t, n, r, i, a) {
	let o = Qe.get(e);
	if (!o) {
		Je++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Fe(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && C(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === tt || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(tt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get($e)), f(e) && s(o.get(et)));
				break;
			case "delete":
				i || (s(o.get($e)), f(e) && s(o.get(et)));
				break;
			case "set":
				f(e) && s(o.get($e));
				break;
		}
	}
	Ie();
}
function rt(e, t) {
	let n = Qe.get(e);
	return n && n.get(t);
}
function it(e) {
	let t = /* @__PURE__ */ M(e);
	return t === e ? t : (j(t, "iterate", tt), /* @__PURE__ */ Ut(e) ? t : t.map(Kt));
}
function at(e) {
	return j(e = /* @__PURE__ */ M(e), "iterate", tt), e;
}
function ot(e, t) {
	return /* @__PURE__ */ Ht(e) ? qt(/* @__PURE__ */ Vt(e) ? Kt(t) : t) : Kt(t);
}
var st = {
	__proto__: null,
	[Symbol.iterator]() {
		return ct(this, Symbol.iterator, (e) => ot(this, e));
	},
	concat(...e) {
		return it(this).concat(...e.map((e) => d(e) ? it(e) : e));
	},
	entries() {
		return ct(this, "entries", (e) => (e[1] = ot(this, e[1]), e));
	},
	every(e, t) {
		return ut(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return ut(this, "filter", e, t, (e) => e.map((e) => ot(this, e)), arguments);
	},
	find(e, t) {
		return ut(this, "find", e, t, (e) => ot(this, e), arguments);
	},
	findIndex(e, t) {
		return ut(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return ut(this, "findLast", e, t, (e) => ot(this, e), arguments);
	},
	findLastIndex(e, t) {
		return ut(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return ut(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return ft(this, "includes", e);
	},
	indexOf(...e) {
		return ft(this, "indexOf", e);
	},
	join(e) {
		return it(this).join(e);
	},
	lastIndexOf(...e) {
		return ft(this, "lastIndexOf", e);
	},
	map(e, t) {
		return ut(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return pt(this, "pop");
	},
	push(...e) {
		return pt(this, "push", e);
	},
	reduce(e, ...t) {
		return dt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return dt(this, "reduceRight", e, t);
	},
	shift() {
		return pt(this, "shift");
	},
	some(e, t) {
		return ut(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return pt(this, "splice", e);
	},
	toReversed() {
		return it(this).toReversed();
	},
	toSorted(e) {
		return it(this).toSorted(e);
	},
	toSpliced(...e) {
		return it(this).toSpliced(...e);
	},
	unshift(...e) {
		return pt(this, "unshift", e);
	},
	values() {
		return ct(this, "values", (e) => ot(this, e));
	}
};
function ct(e, t, n) {
	let r = at(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ Ut(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var lt = Array.prototype;
function ut(e, t, n, r, i, a) {
	let o = at(e), s = o !== e && !/* @__PURE__ */ Ut(e), c = o[t];
	if (c !== lt[t]) {
		let t = c.apply(e, a);
		return s ? Kt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, ot(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function dt(e, t, n, r) {
	let i = at(e), a = i !== e && !/* @__PURE__ */ Ut(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = ot(e, t)), n.call(this, t, ot(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? ot(e, c) : c;
}
function ft(e, t, n) {
	let r = /* @__PURE__ */ M(e);
	j(r, "iterate", tt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Wt(n[0]) ? (n[0] = /* @__PURE__ */ M(n[0]), r[t](...n)) : i;
}
function pt(e, t, n = []) {
	Ge(), Fe();
	let r = (/* @__PURE__ */ M(e))[t].apply(e, n);
	return Ie(), Ke(), r;
}
var mt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), ht = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function gt(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ M(this);
	return j(t, "has", e), t.hasOwnProperty(e);
}
var _t = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Ft : Pt : i ? Nt : Mt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = st[t])) return e;
			if (t === "hasOwnProperty") return gt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ N(e) ? e : n);
		if ((_(t) ? ht.has(t) : mt(t)) || (r || j(e, "get", t), i)) return o;
		if (/* @__PURE__ */ N(o)) {
			let e = a && C(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ zt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ zt(o) : /* @__PURE__ */ Lt(o) : o;
	}
}, vt = class extends _t {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && C(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Ht(i);
			if (!/* @__PURE__ */ Ut(n) && !/* @__PURE__ */ Ht(n) && (i = /* @__PURE__ */ M(i), n = /* @__PURE__ */ M(n)), !a && /* @__PURE__ */ N(i) && !/* @__PURE__ */ N(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ N(e) ? e : r);
		return e === /* @__PURE__ */ M(r) && (o ? ce(n, i) && nt(e, "set", t, n, i) : nt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && nt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!_(t) || !ht.has(t)) && j(e, "has", t), n;
	}
	ownKeys(e) {
		return j(e, "iterate", d(e) ? "length" : $e), Reflect.ownKeys(e);
	}
}, yt = class extends _t {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, bt = /* @__PURE__ */ new vt(), xt = /* @__PURE__ */ new yt(), St = /* @__PURE__ */ new vt(!0), Ct = (e) => e, wt = (e) => Reflect.getPrototypeOf(e);
function Tt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ M(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? Ct : t ? qt : Kt;
		return !t && j(a, "iterate", l ? et : $e), s(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: c ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function Et(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Dt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ M(r), a = /* @__PURE__ */ M(n);
			e || (ce(n, a) && j(i, "get", n), j(i, "get", a));
			let { has: o } = wt(i), s = t ? Ct : e ? qt : Kt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && j(/* @__PURE__ */ M(t), "iterate", $e), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ M(n), i = /* @__PURE__ */ M(t);
			return e || (ce(t, i) && j(r, "has", t), j(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ M(a), s = t ? Ct : e ? qt : Kt;
			return !e && j(o, "iterate", $e), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: Et("add"),
		set: Et("set"),
		delete: Et("delete"),
		clear: Et("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ M(this), r = wt(n), i = /* @__PURE__ */ M(e), a = !t && !/* @__PURE__ */ Ut(e) && !/* @__PURE__ */ Ht(e) ? i : e;
			return r.has.call(n, a) || ce(e, a) && r.has.call(n, e) || ce(i, a) && r.has.call(n, i) || (n.add(a), nt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Ut(n) && !/* @__PURE__ */ Ht(n) && (n = /* @__PURE__ */ M(n));
			let r = /* @__PURE__ */ M(this), { has: i, get: a } = wt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ M(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? ce(n, s) && nt(r, "set", e, n, s) : nt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ M(this), { has: n, get: r } = wt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ M(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && nt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ M(this), t = e.size !== 0, n = e.clear();
			return t && nt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Tt(r, e, t);
	}), n;
}
function Ot(e, t) {
	let n = Dt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(u(n, r) && r in t ? n : t, r, i);
}
var kt = { get: /* @__PURE__ */ Ot(!1, !1) }, At = { get: /* @__PURE__ */ Ot(!1, !0) }, jt = { get: /* @__PURE__ */ Ot(!0, !1) }, Mt = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap();
function It(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
	return /* @__PURE__ */ Ht(e) ? e : Bt(e, !1, bt, kt, Mt);
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
	return Bt(e, !1, St, At, Nt);
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
	return Bt(e, !0, xt, jt, Pt);
}
function Bt(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = It(ee(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
	return /* @__PURE__ */ Ht(e) ? /* @__PURE__ */ Vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function M(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ M(t) : e;
}
function Gt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && T(e, "__v_skip", !0), e;
}
var Kt = (e) => v(e) ? /* @__PURE__ */ Lt(e) : e, qt = (e) => v(e) ? /* @__PURE__ */ zt(e) : e;
// @__NO_SIDE_EFFECTS__
function N(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function P(e) {
	return Yt(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return Yt(e, !0);
}
function Yt(e, t) {
	return /* @__PURE__ */ N(e) ? e : new Xt(e, t);
}
var Xt = class {
	constructor(e, t) {
		this.dep = new Xe(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ M(e), this._value = t ? e : Kt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ut(e) || /* @__PURE__ */ Ht(e);
		e = n ? e : /* @__PURE__ */ M(e), ce(e, t) && (this._rawValue = e, this._value = n ? e : Kt(e), this.dep.trigger());
	}
};
function F(e) {
	return /* @__PURE__ */ N(e) ? e.value : e;
}
var Zt = {
	get: (e, t, n) => t === "__v_raw" ? e : F(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ N(i) && !/* @__PURE__ */ N(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Qt(e) {
	return /* @__PURE__ */ Vt(e) ? e : new Proxy(e, Zt);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
	let t = d(e) ? Array(e.length) : {};
	for (let n in e) t[n] = tn(e, n);
	return t;
}
var en = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _(t) ? t : String(t), this._raw = /* @__PURE__ */ M(e);
		let r = !0, i = e;
		if (!d(e) || _(this._key) || !C(this._key)) do
			r = !/* @__PURE__ */ Wt(i) || /* @__PURE__ */ Ut(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = F(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ N(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ N(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return rt(this._raw, this._key);
	}
};
function tn(e, t, n) {
	return new en(e, t, n);
}
var nn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Xe(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Je - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && A !== this) return Pe(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Be(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function rn(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new nn(r, i, n);
}
var an = {}, on = /* @__PURE__ */ new WeakMap(), sn = void 0;
function cn(e, t = !1, n = sn) {
	if (n) {
		let t = on.get(n);
		t || on.set(n, t = []), t.push(e);
	}
}
function ln(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ Ut(e) || o === !1 || o === 0 ? un(e, 1) : un(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ N(e) ? (g = () => e.value, y = /* @__PURE__ */ Ut(e)) : /* @__PURE__ */ Vt(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Vt(e) || /* @__PURE__ */ Ut(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ N(e)) return e.value;
		if (/* @__PURE__ */ Vt(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			Ge();
			try {
				_();
			} finally {
				Ke();
			}
		}
		let t = sn;
		sn = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			sn = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => un(e(), t);
	}
	let x = De(), ee = () => {
		m.stop(), x && x.active && c(x.effects, m);
	};
	if (s && n) {
		let e = n;
		n = (...t) => {
			let n = e(...t);
			return ee(), n;
		};
	}
	let S = b ? Array(e.length).fill(an) : an, C = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (n) {
			let t = m.run();
			if (e || o || y || (b ? t.some((e, t) => ce(e, S[t])) : ce(t, S))) {
				_ && _();
				let e = sn;
				sn = m;
				try {
					let e = [
						t,
						S === an ? void 0 : b && S[0] === an ? [] : S,
						v
					];
					S = t, f ? f(n, 3, e) : n(...e);
				} finally {
					sn = e;
				}
			}
		} else m.run();
	};
	return u && u(C), m = new Ae(g), m.scheduler = l ? () => l(C, !1) : C, v = (e) => cn(e, !1, m), _ = m.onStop = () => {
		let e = on.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			on.delete(m);
		}
	}, n ? a ? C(!0) : S = m.run() : l ? l(C.bind(null, !0), !0) : m.run(), ee.pause = m.pause.bind(m), ee.resume = m.resume.bind(m), ee.stop = ee, ee;
}
function un(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ N(e)) un(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) un(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		un(e, t, n);
	});
	else if (S(e)) {
		for (let r in e) un(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && un(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function dn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		pn(e, t, n);
	}
}
function fn(e, t, n, r) {
	if (h(e)) {
		let i = dn(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			pn(e, t, n);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(fn(e[a], t, n, r));
		return i;
	}
}
function pn(e, n, r, i = !0) {
	let a = n ? n.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = n && n.appContext.config || t;
	if (n) {
		let t = n.parent, i = n.proxy, a = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; t;) {
			let n = t.ec;
			if (n) {
				for (let t = 0; t < n.length; t++) if (n[t](e, i, a) === !1) return;
			}
			t = t.parent;
		}
		if (o) {
			Ge(), dn(o, null, 10, [
				e,
				i,
				a
			]), Ke();
			return;
		}
	}
	mn(e, r, a, i, s);
}
function mn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var I = [], hn = -1, gn = [], _n = null, vn = 0, yn = /* @__PURE__ */ Promise.resolve(), bn = null;
function xn(e) {
	let t = bn || yn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Sn(e) {
	let t = hn + 1, n = I.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = I[r], a = On(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Cn(e) {
	if (!(e.flags & 1)) {
		let t = On(e), n = I[I.length - 1];
		!n || !(e.flags & 2) && t >= On(n) ? I.push(e) : I.splice(Sn(t), 0, e), e.flags |= 1, wn();
	}
}
function wn() {
	bn ||= yn.then(kn);
}
function Tn(e) {
	d(e) ? gn.push(...e) : _n && e.id === -1 ? _n.splice(vn + 1, 0, e) : e.flags & 1 || (gn.push(e), e.flags |= 1), wn();
}
function En(e, t, n = hn + 1) {
	for (; n < I.length; n++) {
		let t = I[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			I.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Dn(e) {
	if (gn.length) {
		let e = [...new Set(gn)].sort((e, t) => On(e) - On(t));
		if (gn.length = 0, _n) {
			_n.push(...e);
			return;
		}
		for (_n = e, vn = 0; vn < _n.length; vn++) {
			let e = _n[vn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		_n = null, vn = 0;
	}
}
var On = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function kn(e) {
	try {
		for (hn = 0; hn < I.length; hn++) {
			let e = I[hn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), dn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; hn < I.length; hn++) {
			let e = I[hn];
			e && (e.flags &= -2);
		}
		hn = -1, I.length = 0, Dn(e), bn = null, (I.length || gn.length) && kn(e);
	}
}
var An = null, jn = null;
function Mn(e) {
	let t = An;
	return An = e, jn = e && e.type.__scopeId || null, t;
}
function Nn(e, t = An, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && zi(-1);
		let i = Mn(t), a;
		try {
			a = e(...n);
		} finally {
			Mn(i), r._d && zi(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Pn(e, n) {
	if (An === null) return e;
	let r = ya(An), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && un(o), i.push({
			dir: a,
			instance: r,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function Fn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Ge(), fn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ke());
	}
}
function In(e, t) {
	if (K) {
		let n = K.provides, r = K.parent && K.parent.provides;
		r === n && (n = K.provides = Object.create(r)), n[e] = t;
	}
}
function Ln(e, t, n = !1) {
	let r = ia();
	if (r || Hr) {
		let i = Hr ? Hr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
function Rn() {
	return !!(ia() || Hr);
}
var zn = /* @__PURE__ */ Symbol.for("v-scx"), Bn = () => Ln(zn);
function Vn(e, t, n) {
	return Hn(e, t, n);
}
function Hn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (ua) {
		if (c === "sync") {
			let e = Bn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = K;
	u.call = (e, t, n) => fn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		z(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Cn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = ln(e, n, u);
	return ua && (f ? f.push(h) : d && h()), h;
}
function Un(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Wn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = sa(this), s = Hn(i, a.bind(r), n);
	return o(), s;
}
function Wn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Gn = /* @__PURE__ */ Symbol("_vte"), Kn = (e) => e.__isTeleport, qn = /* @__PURE__ */ Symbol("_leaveCb");
function Jn(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, Jn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Yn(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function Xn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Zn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Qn = /* @__PURE__ */ new WeakMap();
function $n(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => $n(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (tr(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && $n(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? ya(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ M(v), b = v === t ? i : (e) => Zn(_, e) ? !1 : u(y, e), x = (e, t) => !(t && Zn(_, t));
	if (m != null && m !== p) {
		if (er(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ N(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) dn(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ N(p);
		if (t || n) {
			let i = () => {
				if (e.f) {
					let n = t ? b(p) ? v[p] : _[p] : x(p) || !e.k ? p.value : _[e.k];
					if (o) d(n) && c(n, s);
					else if (d(n)) n.includes(s) || n.push(s);
					else if (t) _[p] = [s], b(p) && (v[p] = _[p]);
					else {
						let t = [s];
						x(p, e.k) && (p.value = t), e.k && (_[e.k] = t);
					}
				} else t ? (_[p] = l, b(p) && (v[p] = l)) : n && (x(p, e.k) && (p.value = l), e.k && (_[e.k] = l));
			};
			if (l) {
				let t = () => {
					i(), Qn.delete(e);
				};
				t.id = -1, Qn.set(e, t), z(t, r);
			} else er(e), i();
		}
	}
}
function er(e) {
	let t = Qn.get(e);
	t && (t.flags |= 8, Qn.delete(e));
}
fe().requestIdleCallback, fe().cancelIdleCallback;
var tr = (e) => !!e.type.__asyncLoader, nr = (e) => e.type.__isKeepAlive;
function rr(e, t) {
	ar(e, "a", t);
}
function ir(e, t) {
	ar(e, "da", t);
}
function ar(e, t, n = K) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (sr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) nr(e.parent.vnode) && or(r, t, n, e), e = e.parent;
	}
}
function or(e, t, n, r) {
	let i = sr(t, e, r, !0);
	mr(() => {
		c(r[t], i);
	}, n);
}
function sr(e, t, n = K, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ge();
			let i = sa(n), a = fn(t, n, e, r);
			return i(), Ke(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var cr = (e) => (t, n = K) => {
	(!ua || e === "sp") && sr(e, (...e) => t(...e), n);
}, lr = cr("bm"), ur = cr("m"), dr = cr("bu"), fr = cr("u"), pr = cr("bum"), mr = cr("um"), hr = cr("sp"), gr = cr("rtg"), _r = cr("rtc");
function vr(e, t = K) {
	sr("ec", e, t);
}
var yr = /* @__PURE__ */ Symbol.for("v-ndc");
function L(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Vt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Ut(e), s = /* @__PURE__ */ Ht(e), e = at(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? qt(Kt(e[n])) : Kt(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (v(e)) if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
	else {
		let n = Object.keys(e);
		i = Array(n.length);
		for (let r = 0, o = n.length; r < o; r++) {
			let o = n[r];
			i[r] = t(e[o], o, r, a && a[r]);
		}
	}
	else i = [];
	return n && (n[r] = i), i;
}
var br = (e) => e ? la(e) ? ya(e) : br(e.parent) : null, xr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => br(e.parent),
	$root: (e) => br(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Ar(e),
	$forceUpdate: (e) => e.f ||= () => {
		Cn(e.update);
	},
	$nextTick: (e) => e.n ||= xn.bind(e.proxy),
	$watch: (e) => Un.bind(e)
}), Sr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Cr = {
	get({ _: e }, n) {
		if (n === "__v_skip") return !0;
		let { ctx: r, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (n[0] !== "$") {
			let e = s[n];
			if (e !== void 0) switch (e) {
				case 1: return i[n];
				case 2: return a[n];
				case 4: return r[n];
				case 3: return o[n];
			}
			else if (Sr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Tr && (s[n] = 0);
		}
		let d = xr[n], f, p;
		if (d) return n === "$attrs" && j(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Sr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Sr(n, c) || u(o, c) || u(i, c) || u(xr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function wr(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Tr = !0;
function Er(e) {
	let t = Ar(e), n = e.proxy, i = e.ctx;
	Tr = !1, t.beforeCreate && Or(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: ee, destroyed: S, unmounted: C, render: te, renderTracked: ne, renderTriggered: re, errorCaptured: w, serverPrefetch: ie, expose: ae, inheritAttrs: oe, components: se, directives: ce, filters: le } = t;
	if (u && Dr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ Lt(t));
	}
	if (Tr = !0, o) for (let e in o) {
		let t = o[e], a = q({
			get: h(t) ? t.bind(n, n) : h(t.get) ? t.get.bind(n, n) : r,
			set: !h(t) && h(t.set) ? t.set.bind(n) : r
		});
		Object.defineProperty(i, e, {
			enumerable: !0,
			configurable: !0,
			get: () => a.value,
			set: (e) => a.value = e
		});
	}
	if (c) for (let e in c) kr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			In(t, e[t]);
		});
	}
	f && Or(f, e, "c");
	function T(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (T(lr, p), T(ur, m), T(dr, g), T(fr, _), T(rr, y), T(ir, b), T(vr, w), T(_r, ne), T(gr, re), T(pr, ee), T(mr, C), T(hr, ie), d(ae)) if (ae.length) {
		let t = e.exposed ||= {};
		ae.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	te && e.render === r && (e.render = te), oe != null && (e.inheritAttrs = oe), se && (e.components = se), ce && (e.directives = ce), ie && Xn(e);
}
function Dr(e, t, n = r) {
	d(e) && (e = Fr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Ln(r.from || n, r.default, !0) : Ln(r.from || n) : Ln(r), /* @__PURE__ */ N(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Or(e, t, n) {
	fn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function kr(e, t, n, r) {
	let i = r.includes(".") ? Wn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && Vn(i, n);
	} else if (h(e)) Vn(i, e.bind(n));
	else if (v(e)) if (d(e)) e.forEach((e) => kr(e, t, n, r));
	else {
		let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
		h(r) && Vn(i, r, e);
	}
}
function Ar(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => jr(c, e, o, !0)), jr(c, t, o)), v(t) && a.set(t, c), c;
}
function jr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && jr(e, a, n, !0), i && i.forEach((t) => jr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Mr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Mr = {
	data: Nr,
	props: Lr,
	emits: Lr,
	methods: Ir,
	computed: Ir,
	beforeCreate: R,
	created: R,
	beforeMount: R,
	mounted: R,
	beforeUpdate: R,
	updated: R,
	beforeDestroy: R,
	beforeUnmount: R,
	destroyed: R,
	unmounted: R,
	activated: R,
	deactivated: R,
	errorCaptured: R,
	serverPrefetch: R,
	components: Ir,
	directives: Ir,
	watch: Rr,
	provide: Nr,
	inject: Pr
};
function Nr(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Pr(e, t) {
	return Ir(Fr(e), Fr(t));
}
function Fr(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function R(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Ir(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Lr(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), wr(e), wr(t ?? {})) : t;
}
function Rr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = R(e[r], t[r]);
	return n;
}
function zr() {
	return {
		app: null,
		config: {
			isNativeTag: i,
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
var Br = 0;
function Vr(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = zr(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: Br++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: xa,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && h(e.install) ? (a.add(e), e.install(l, ...t)) : h(e) && (a.add(e), e(l, ...t))), l;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), l;
			},
			component(e, t) {
				return t ? (i.components[e] = t, l) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, l) : i.directives[e];
			},
			mount(a, o, s) {
				if (!c) {
					let u = l._ceVNode || W(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, ya(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (fn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = Hr;
				Hr = l;
				try {
					return e();
				} finally {
					Hr = t;
				}
			}
		};
		return l;
	};
}
var Hr = null, Ur = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${w(t)}Modifiers`] || e[`${ae(t)}Modifiers`];
function Wr(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && Ur(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = r.map(ue)));
	let c, l = i[c = se(n)] || i[c = se(w(n))];
	!l && o && (l = i[c = se(ae(n))]), l && fn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, fn(u, e, 6, a);
	}
}
var Gr = /* @__PURE__ */ new WeakMap();
function Kr(e, t, n = !1) {
	let r = n ? Gr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = Kr(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function qr(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, ae(t)) || u(e, t));
}
function Jr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Mn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Xi(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = Xi(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : Yr(c);
		}
	} catch (t) {
		Fi.length = 0, pn(t, e, 1), v = W(Ni);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = Xr(y, a)), b = Ji(b, y, !1, !0));
	}
	return n.dirs && (b = Ji(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Jn(b, n.transition), v = b, Mn(_), v;
}
var Yr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Xr = (e, t) => {
	let n = {};
	for (let r in e) (!o(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Zr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Qr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if ($r(o, r, n) && !qr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? Qr(r, o, l) : !0 : !!o;
	return !1;
}
function Qr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if ($r(t, e, a) && !qr(n, a)) return !0;
	}
	return !1;
}
function $r(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !xe(r, i) : r !== i;
}
function ei({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var ti = {}, ni = () => Object.create(ti), ri = (e) => Object.getPrototypeOf(e) === ti;
function ii(e, t, n, r = !1) {
	let i = {}, a = ni();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), oi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Rt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function ai(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ M(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (qr(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
				else {
					let t = w(o);
					i[t] = si(c, s, t, d, e, !1);
				}
				else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		oi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !u(t, a) && ((r = ae(a)) === a || !u(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = si(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !u(t, e)) && (delete a[e], l = !0);
	}
	l && nt(e.attrs, "set", "");
}
function oi(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (te(t)) continue;
		let l = n[t], d;
		a && u(a, d = w(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : qr(e.emitsOptions, t) || (!(t in i) || l !== i[t]) && (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ M(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = si(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function si(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = sa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ae(n)) && (r = !0));
	}
	return r;
}
var ci = /* @__PURE__ */ new WeakMap();
function li(e, r, i = !1) {
	let a = i ? ci : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = li(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = w(c[e]);
		di(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = w(e);
		if (di(t)) {
			let n = c[e], r = l[t] = d(n) || h(n) ? { type: n } : s({}, n), i = r.type, a = !1, o = !0;
			if (d(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = h(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				} else n === "String" && (o = !1);
			}
			else a = h(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || u(r, "default")) && f.push(t);
		}
	}
	let m = [l, f];
	return v(e) && a.set(e, m), m;
}
function di(e) {
	return e[0] !== "$" && !te(e);
}
var fi = (e) => e === "_" || e === "_ctx" || e === "$stable", pi = (e) => d(e) ? e.map(Xi) : [Xi(e)], mi = (e, t, n) => {
	if (t._n) return t;
	let r = Nn((...e) => pi(t(...e)), n);
	return r._c = !1, r;
}, hi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (fi(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = mi(n, i, r);
		else if (i != null) {
			let e = pi(i);
			t[n] = () => e;
		}
	}
}, gi = (e, t) => {
	let n = pi(t);
	e.slots.default = () => n;
}, _i = (e, t, n) => {
	for (let r in t) (n || !fi(r)) && (e[r] = t[r]);
}, vi = (e, t, n) => {
	let r = e.slots = ni();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (_i(r, t, n), n && T(r, "_", e, !0)) : hi(t, r);
	} else t && gi(e, t);
}, yi = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : _i(a, n, r) : (o = !n.$stable, hi(n, a)), s = n;
	} else n && (gi(e, n), s = { default: 1 });
	if (o) for (let e in a) !fi(e) && s[e] == null && delete a[e];
}, z = ji;
function bi(e) {
	return xi(e);
}
function xi(e, i) {
	let a = fe();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Ui(e, t) && (r = xe(e), D(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Mi:
				y(e, t, n, r);
				break;
			case Ni:
				b(e, t, n, r);
				break;
			case Pi:
				e ?? x(t, n, r, o);
				break;
			case B:
				se(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? C(e, t, n, r, i, a, o, s, c) : d & 6 ? ce(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Ce);
		}
		u != null && i ? $n(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && $n(e.ref, null, a, e, !0);
	}, y = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, ee = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, S = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, C = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) ne(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), ie(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, ne = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && w(e.children, d, null, r, i, Si(e, a), s, u), _ && Fn(e, null, r, "created"), re(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !te(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ea(f, r, e);
		}
		_ && Fn(e, null, r, "beforeMount");
		let v = wi(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && z(() => {
			try {
				f && ea(f, r, e), v && g.enter(d), _ && Fn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, re = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Ai(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				re(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, w = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? Zi(e[l]) : Xi(e[l]), t, n, r, i, a, o, s);
	}, ie = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Ci(r, !1), (g = h.onVnodeBeforeUpdate) && ea(g, r, n, e), f && Fn(n, e, r, "beforeUpdate"), r && Ci(r, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ae(e.dynamicChildren, d, l, r, i, Si(n, a), o) : s || pe(e, n, l, null, r, i, Si(n, a), o, !1), u > 0) {
			if (u & 16) oe(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && oe(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && z(() => {
			g && ea(g, r, n, e), f && Fn(n, e, r, "updated");
		}, i);
	}, ae = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === B || !Ui(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, oe = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !te(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (te(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, se = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), w(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ae(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Ti(e, t, !0)) : pe(e, t, n, f, i, a, s, c, l);
	}, ce = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : T(t, n, r, i, a, o, c) : ue(e, t, c);
	}, T = (e, t, n, r, i, a, o) => {
		let s = e.component = ra(e, r, i);
		if (nr(e) && (s.ctx.renderer = Ce), da(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, de, o), !e.el) {
				let r = s.subTree = W(Ni);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else de(s, e, t, n, i, a, o);
	}, ue = (e, t, n) => {
		let r = t.component = e.component;
		if (Zr(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			E(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, de = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Di(e);
					if (n) {
						t && (t.el = c.el, E(e, t, o)), n.asyncDep.then(() => {
							z(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Ci(e, !1), t ? (t.el = c.el, E(e, t, o)) : t = c, n && le(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ea(d, s, t, c), Ci(e, !0);
				let f = Jr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), xe(p), e, i, a), t.el = f.el, u === null && ei(e, f.el), r && z(r, i), (d = t.props && t.props.onVnodeUpdated) && z(() => ea(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = tr(t);
				if (Ci(e, !1), l && le(l), !m && (o = c && c.onVnodeBeforeMount) && ea(o, d, t), Ci(e, !0), s && k) {
					let t = () => {
						e.subTree = Jr(e), k(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Jr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && z(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					z(() => ea(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && tr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && z(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ae(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Cn(u), Ci(e, !0), l();
	}, E = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ai(e, t.props, r, n), yi(e, t.children, n), Ge(), En(e), Ke();
	}, pe = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				he(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				me(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && be(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? he(l, d, n, r, i, a, o, s, c) : be(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && w(d, n, r, i, a, o, s, c));
	}, me = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let n = t[p] = l ? Zi(t[p]) : Xi(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? be(e, a, o, !0, !1, f) : w(t, r, i, a, o, s, c, l, f);
	}, he = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? Zi(t[u]) : Xi(t[u]);
			if (Ui(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? Zi(t[p]) : Xi(t[p]);
			if (Ui(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? Zi(t[u]) : Xi(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) D(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Zi(t[u]) : Xi(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, ee = 0, S = Array(b);
			for (u = 0; u < b; u++) S[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					D(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (S[_ - h] === 0 && Ui(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? D(n, a, o, !0) : (S[i - h] = u + 1, i >= ee ? ee = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let C = x ? Ei(S) : n;
			for (_ = C.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || ki(f) : i;
				S[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== C[_] ? ge(n, r, p, 2) : _--);
			}
		}
	}, ge = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			ge(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, Ce);
			return;
		}
		if (c === B) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) ge(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === Pi) {
			ee(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.persisted && !a[qn] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), z(() => l.enter(a), i));
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				let e = a._isLeaving || !!a[qn];
				a._isLeaving && a[qn](!0), l.persisted && !e ? u() : r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, D = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Ge(), $n(s, null, n, e, !0), Ke()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !tr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ea(_, t, e), u & 6) ye(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Fn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Ce, r) : l && !l.hasOnce && (a !== B || d > 0 && d & 64) ? be(l, t, n, !1, !0) : (a === B && d & 384 || !i && u & 16) && be(c, t, n), r && _e(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && z(() => {
			_ && ea(_, t, e), h && Fn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, _e = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === B) {
			ve(n, r);
			return;
		}
		if (t === Pi) {
			S(e);
			return;
		}
		let a = () => {
			s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (e.shapeFlag & 1 && i && !i.persisted) {
			let { leave: t, delayLeave: r } = i, o = () => t(n, a);
			r ? r(e.el, a, o) : o();
		} else a();
	}, ve = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ye = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Oi(c), Oi(l), r && le(r), i.stop(), a && (a.flags |= 8, D(o, e, t, n)), s && z(s, t), z(() => {
			e.isUnmounted = !0;
		}, t);
	}, be = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) D(e[o], t, n, r, i);
	}, xe = (e) => {
		if (e.shapeFlag & 6) return xe(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Gn];
		return n ? h(n) : t;
	}, Se = !1, O = (e, t, n) => {
		let r;
		e == null ? t._vnode && (D(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, Se ||= (Se = !0, En(r), Dn(), !1);
	}, Ce = {
		p: v,
		um: D,
		m: ge,
		r: _e,
		mt: T,
		mc: w,
		pc: pe,
		pbc: ae,
		n: xe,
		o: e
	}, we, k;
	return i && ([we, k] = i(Ce)), {
		render: O,
		hydrate: we,
		createApp: Vr(O, we)
	};
}
function Si({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ci({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function wi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ti(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Zi(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Ti(t, a)), a.type === Mi && (a.patchFlag === -1 && (a = i[e] = Zi(a)), a.el = t.el), a.type === Ni && !a.el && (a.el = t.el);
	}
}
function Ei(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function Di(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Di(t);
}
function Oi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function ki(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? ki(t.subTree) : null;
}
var Ai = (e) => e.__isSuspense;
function ji(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : Tn(e);
}
var B = /* @__PURE__ */ Symbol.for("v-fgt"), Mi = /* @__PURE__ */ Symbol.for("v-txt"), Ni = /* @__PURE__ */ Symbol.for("v-cmt"), Pi = /* @__PURE__ */ Symbol.for("v-stc"), Fi = [], Ii = null;
function V(e = !1) {
	Fi.push(Ii = e ? null : []);
}
function Li() {
	Fi.pop(), Ii = Fi[Fi.length - 1] || null;
}
var Ri = 1;
function zi(e, t = !1) {
	Ri += e, e < 0 && Ii && t && (Ii.hasOnce = !0);
}
function Bi(e) {
	return e.dynamicChildren = Ri > 0 ? Ii || n : null, Li(), Ri > 0 && Ii && Ii.push(e), e;
}
function H(e, t, n, r, i, a) {
	return Bi(U(e, t, n, r, i, a, !0));
}
function Vi(e, t, n, r, i) {
	return Bi(W(e, t, n, r, i, !0));
}
function Hi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Ui(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Wi = ({ key: e }) => e ?? null, Gi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ N(e) || h(e) ? {
	i: An,
	r: e,
	k: t,
	f: !!n
} : e);
function U(e, t = null, n = null, r = 0, i = null, a = e === B ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Wi(t),
		ref: t && Gi(t),
		scopeId: jn,
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
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: An
	};
	return s ? (Qi(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), Ri > 0 && !o && Ii && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Ii.push(c), c;
}
var W = Ki;
function Ki(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === yr) && (e = Ni), Hi(e)) {
		let r = Ji(e, t, !0);
		return n && Qi(r, n), Ri > 0 && !a && Ii && (r.shapeFlag & 6 ? Ii[Ii.indexOf(e)] = r : Ii.push(r)), r.patchFlag = -2, r;
	}
	if (ba(e) && (e = e.__vccOpts), t) {
		t = qi(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = D(e)), v(n) && (/* @__PURE__ */ Wt(n) && !d(n) && (n = s({}, n)), t.style = E(n));
	}
	let o = g(e) ? 1 : Ai(e) ? 128 : Kn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return U(e, t, n, r, i, o, a, !0);
}
function qi(e) {
	return e ? /* @__PURE__ */ Wt(e) || ri(e) ? s({}, e) : e : null;
}
function Ji(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? $i(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Wi(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(Gi(t)) : [a, Gi(t)] : Gi(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== B ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Ji(e.ssContent),
		ssFallback: e.ssFallback && Ji(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && Jn(u, c.clone(u)), u;
}
function Yi(e = " ", t = 0) {
	return W(Mi, null, e, t);
}
function G(e = "", t = !1) {
	return t ? (V(), Vi(Ni, null, e)) : W(Ni, null, e);
}
function Xi(e) {
	return e == null || typeof e == "boolean" ? W(Ni) : d(e) ? W(B, null, e.slice()) : Hi(e) ? Zi(e) : W(Mi, null, String(e));
}
function Zi(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ji(e);
}
function Qi(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), Qi(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !ri(t) ? t._ctx = An : r === 3 && An && (An.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else h(t) ? (t = {
		default: t,
		_ctx: An
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Yi(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function $i(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = D([t.class, r.class]));
		else if (e === "style") t.style = E([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function ea(e, t, n, r = null) {
	fn(e, t, 7, [n, r]);
}
var ta = zr(), na = 0;
function ra(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || ta, o = {
		uid: na++,
		vnode: e,
		type: i,
		parent: n,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new Te(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: n ? n.provides : Object.create(a.provides),
		ids: n ? n.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: li(i, a),
		emitsOptions: Kr(i, a),
		emit: null,
		emitted: null,
		propsDefaults: t,
		inheritAttrs: i.inheritAttrs,
		ctx: t,
		data: t,
		props: t,
		attrs: t,
		slots: t,
		refs: t,
		setupState: t,
		setupContext: null,
		suspense: r,
		suspenseId: r ? r.pendingId : 0,
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = Wr.bind(null, o), e.ce && e.ce(o), o;
}
var K = null, ia = () => K || An, aa, oa;
{
	let e = fe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	aa = t("__VUE_INSTANCE_SETTERS__", (e) => K = e), oa = t("__VUE_SSR_SETTERS__", (e) => ua = e);
}
var sa = (e) => {
	let t = K;
	return aa(e), e.scope.on(), () => {
		e.scope.off(), aa(t);
	};
}, ca = () => {
	K && K.scope.off(), aa(null);
};
function la(e) {
	return e.vnode.shapeFlag & 4;
}
var ua = !1;
function da(e, t = !1, n = !1) {
	t && oa(t);
	let { props: r, children: i } = e.vnode, a = la(e);
	ii(e, r, a, t), vi(e, i, n || t);
	let o = a ? fa(e, t) : void 0;
	return t && oa(!1), o;
}
function fa(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Cr);
	let { setup: r } = n;
	if (r) {
		Ge();
		let n = e.setupContext = r.length > 1 ? va(e) : null, i = sa(e), a = dn(r, e, 0, [e.props, n]), o = y(a);
		if (Ke(), i(), (o || e.sp) && !tr(e) && Xn(e), o) {
			if (a.then(ca, ca), t) return a.then((n) => {
				pa(e, n, t);
			}).catch((t) => {
				pn(t, e, 0);
			});
			e.asyncDep = a;
		} else pa(e, a, t);
	} else ga(e, t);
}
function pa(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = Qt(t)), ga(e, n);
}
var ma, ha;
function ga(e, t, n) {
	let i = e.type;
	if (!e.render) {
		if (!t && ma && !i.render) {
			let t = i.template || Ar(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: r } = e.appContext.config, { delimiters: a, compilerOptions: o } = i;
				i.render = ma(t, s(s({
					isCustomElement: n,
					delimiters: a
				}, r), o));
			}
		}
		e.render = i.render || r, ha && ha(e);
	}
	{
		let t = sa(e);
		Ge();
		try {
			Er(e);
		} finally {
			Ke(), t();
		}
	}
}
var _a = { get(e, t) {
	return j(e, "get", ""), e[t];
} };
function va(e) {
	return {
		attrs: new Proxy(e.attrs, _a),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function ya(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(Qt(Gt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in xr) return xr[n](e);
		},
		has(e, t) {
			return t in e || t in xr;
		}
	}) : e.proxy;
}
function ba(e) {
	return h(e) && "__vccOpts" in e;
}
var q = (e, t) => /* @__PURE__ */ rn(e, t, ua), xa = "3.5.38", Sa = void 0, Ca = typeof window < "u" && window.trustedTypes;
if (Ca) try {
	Sa = /* @__PURE__ */ Ca.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var wa = Sa ? (e) => Sa.createHTML(e) : (e) => e, Ta = "http://www.w3.org/2000/svg", Ea = "http://www.w3.org/1998/Math/MathML", Da = typeof document < "u" ? document : null, Oa = Da && /* @__PURE__ */ Da.createElement("template"), ka = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Da.createElementNS(Ta, e) : t === "mathml" ? Da.createElementNS(Ea, e) : n ? Da.createElement(e, { is: n }) : Da.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Da.createTextNode(e),
	createComment: (e) => Da.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Da.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Oa.innerHTML = wa(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Oa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Aa = /* @__PURE__ */ Symbol("_vtc");
function ja(e, t, n) {
	let r = e[Aa];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Ma = /* @__PURE__ */ Symbol("_vod"), Na = /* @__PURE__ */ Symbol("_vsh"), Pa = /* @__PURE__ */ Symbol(""), Fa = /(?:^|;)\s*display\s*:/;
function Ia(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) if (g(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Ra(r, t, "");
		}
		else for (let e in t) n[e] ?? Ra(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Ra(r, i, "") : Ha(e, i, !g(t) && t ? t[i] : void 0, o) || Ra(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Pa];
			e && (n += ";" + e), r.cssText = n, a = Fa.test(n);
		}
	} else t && e.removeAttribute("style");
	Ma in e && (e[Ma] = a ? r.display : "", e[Na] && (r.display = "none"));
}
var La = /\s*!important$/;
function Ra(e, t, n) {
	if (d(n)) n.forEach((n) => Ra(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Va(e, t);
		La.test(n) ? e.setProperty(ae(r), n.replace(La, ""), "important") : e[r] = n;
	}
}
var za = [
	"Webkit",
	"Moz",
	"ms"
], Ba = {};
function Va(e, t) {
	let n = Ba[t];
	if (n) return n;
	let r = w(t);
	if (r !== "filter" && r in e) return Ba[t] = r;
	r = oe(r);
	for (let n = 0; n < za.length; n++) {
		let i = za[n] + r;
		if (i in e) return Ba[t] = i;
	}
	return t;
}
function Ha(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var Ua = "http://www.w3.org/1999/xlink";
function Wa(e, t, n, r, i, a = ve(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ua, t.slice(6, t.length)) : e.setAttributeNS(Ua, t, n) : n == null || a && !ye(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function Ga(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? wa(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = ye(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Ka(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function qa(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Ja = /* @__PURE__ */ Symbol("_vei");
function Ya(e, t, n, r, i = null) {
	let a = e[Ja] || (e[Ja] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Za(t);
		r ? Ka(e, n, a[t] = to(r, i), s) : o && (qa(e, n, o, s), a[t] = void 0);
	}
}
var Xa = /(?:Once|Passive|Capture)$/;
function Za(e) {
	let t;
	if (Xa.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Xa);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : ae(e.slice(2)), t];
}
var Qa = 0, $a = /* @__PURE__ */ Promise.resolve(), eo = () => Qa ||= ($a.then(() => Qa = 0), Date.now());
function to(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (d(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && fn(e, t, 5, a);
			}
		} else fn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = eo(), n;
}
var no = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ro = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? ja(e, r, c) : t === "style" ? Ia(e, n, r) : a(t) ? o(t) || Ya(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : io(e, t, r, c)) ? (Ga(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Wa(e, t, r, c, s, t !== "value")) : e._isVueCE && (ao(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? Ga(e, w(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Wa(e, t, r, c));
};
function io(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && no(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return no(t) && g(n) ? !1 : t in e;
}
function ao(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = w(t);
	return Array.isArray(n) ? n.some((e) => w(e) === r) : Object.keys(n).some((e) => w(e) === r);
}
var oo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => le(t, e) : t;
};
function so(e) {
	e.target.composing = !0;
}
function co(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var lo = /* @__PURE__ */ Symbol("_assign");
function uo(e, t, n) {
	return t && (e = e.trim()), n && (e = ue(e)), e;
}
var fo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[lo] = oo(i);
		let a = r || i.props && i.props.type === "number";
		Ka(e, t ? "change" : "input", (t) => {
			t.target.composing || e[lo](uo(e.value, n, a));
		}), (n || a) && Ka(e, "change", () => {
			e.value = uo(e.value, n, a);
		}), t || (Ka(e, "compositionstart", so), Ka(e, "compositionend", co), Ka(e, "change", co));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[lo] = oo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ue(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, po = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], mo = {
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
	exact: (e, t) => po.some((n) => e[`${n}Key`] && !t.includes(n))
}, ho = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = mo[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, go = /* @__PURE__ */ s({ patchProp: ro }, ka), _o;
function vo() {
	return _o ||= bi(go);
}
var yo = ((...e) => {
	let t = vo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = xo(e);
		if (!r) return;
		let i = t._component;
		!h(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, bo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function bo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function xo(e) {
	return g(e) ? document.querySelector(e) : e;
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var So = typeof window < "u", Co, wo = (e) => Co = e, To = Symbol();
function Eo(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Do;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Do ||= {});
var Oo = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function ko(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Ao(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Fo(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function jo(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Mo(e) {
	try {
		e.dispatchEvent(new MouseEvent("click"));
	} catch {
		let t = new MouseEvent("click", {
			bubbles: !0,
			cancelable: !0,
			view: window,
			detail: 0,
			screenX: 80,
			screenY: 20,
			clientX: 80,
			clientY: 20,
			ctrlKey: !1,
			altKey: !1,
			shiftKey: !1,
			metaKey: !1,
			button: 0,
			relatedTarget: null
		});
		e.dispatchEvent(t);
	}
}
var No = typeof navigator == "object" ? navigator : { userAgent: "" }, Po = /Macintosh/.test(No.userAgent) && /AppleWebKit/.test(No.userAgent) && !/Safari/.test(No.userAgent), Fo = So ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Po ? Io : "msSaveOrOpenBlob" in No ? Lo : Ro : () => {};
function Io(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Mo(r) : jo(r.href) ? Ao(e, t, n) : (r.target = "_blank", Mo(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Mo(r);
	}, 0));
}
function Lo(e, t = "download", n) {
	if (typeof e == "string") if (jo(e)) Ao(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			Mo(t);
		});
	}
	else navigator.msSaveOrOpenBlob(ko(e, n), t);
}
function Ro(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Ao(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Oo.HTMLElement)) || "safari" in Oo, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Po) && typeof FileReader < "u") {
		let t = new FileReader();
		t.onloadend = function() {
			let e = t.result;
			if (typeof e != "string") throw r = null, Error("Wrong reader.result type");
			e = o ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = e : location.assign(e), r = null;
		}, t.readAsDataURL(e);
	} else {
		let t = URL.createObjectURL(e);
		r ? r.location.assign(t) : location.href = t, r = null, setTimeout(function() {
			URL.revokeObjectURL(t);
		}, 4e4);
	}
}
var { assign: zo } = Object;
function Bo() {
	let e = Ee(!0), t = e.run(() => /* @__PURE__ */ P({})), n = [], r = [], i = Gt({
		install(e) {
			wo(i), i._a = e, e.provide(To, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
		},
		use(e) {
			return this._a ? n.push(e) : r.push(e), this;
		},
		_p: n,
		_a: null,
		_e: e,
		_s: /* @__PURE__ */ new Map(),
		state: t
	});
	return i;
}
var Vo = () => {};
function Ho(e, t, n, r = Vo) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && De() && Oe(i), i;
}
function Uo(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Wo = (e) => e(), Go = Symbol(), Ko = Symbol();
function qo(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		Eo(i) && Eo(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ N(r) && !/* @__PURE__ */ Vt(r) ? e[n] = qo(i, r) : e[n] = r;
	}
	return e;
}
var Jo = Symbol();
function Yo(e) {
	return !Eo(e) || !Object.prototype.hasOwnProperty.call(e, Jo);
}
var { assign: Xo } = Object;
function Zo(e) {
	return !!(/* @__PURE__ */ N(e) && e.effect);
}
function Qo(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), Xo(/* @__PURE__ */ $t(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Gt(q(() => {
			wo(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = $o(e, l, t, n, r, !0), c;
}
function $o(e, t, n = {}, r, i, a) {
	let o, s = Xo({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: Do.patchFunction,
			storeId: e,
			events: void 0
		}) : (qo(r.state.value[e], t), n = {
			type: Do.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		xn().then(() => {
			m === i && (l = !0);
		}), u = !0, Uo(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Xo(e, t);
		});
	} : Vo;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (Go in t) return t[Ko] = n, t;
		let i = function() {
			wo(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Uo(f, {
				args: n,
				name: i[Ko],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw Uo(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Uo(a, e), e)).catch((e) => (Uo(o, e), Promise.reject(e))) : (Uo(a, l), l);
		};
		return i[Go] = !0, i[Ko] = n, i;
	}, y = /* @__PURE__ */ Lt({
		_p: r,
		$id: e,
		$onAction: Ho.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = Ho(d, t, n.detached, () => a()), a = o.run(() => Vn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: Do.direct,
					events: void 0
				}, r);
			}, Xo({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || Wo)(() => r._e.run(() => (o = Ee()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ N(n) && !Zo(n) || /* @__PURE__ */ Vt(n) ? a || (p && Yo(n) && (/* @__PURE__ */ N(n) ? n.value = p[t] : qo(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return Xo(y, b), Xo(/* @__PURE__ */ M(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				Xo(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Xo(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function es(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Rn();
		return n ||= o ? Ln(To, null) : null, n && wo(n), n = Co, n._s.has(e) || (i ? $o(e, t, r, n) : Qo(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
//#endregion
//#region src/functions/scene-merger/defaults.ts
var ts = {
	edgeThreshold: 16,
	gridSize: 100,
	mode: "edge",
	pixelInterval: 50
};
function ns(e) {
	return {
		content: {
			backgrounds: !0,
			drawings: !0,
			lights: !0,
			notes: !0,
			regions: !0,
			sounds: !0,
			templates: !1,
			tiles: !0,
			tokens: !1,
			walls: !0
		},
		destination: {
			activateAfterMerge: !1,
			folderId: null,
			lockBackgroundTiles: !0,
			name: e,
			navigation: !1,
			openAfterMerge: !0
		},
		outputGrid: {
			distance: 5,
			size: 100,
			type: 1,
			units: "ft"
		}
	};
}
//#endregion
//#region src/functions/scene-merger/cleanup.ts
function rs(e) {
	return e.cleanupEnabled && e.destinationCreated && e.stage !== "finalizing";
}
//#endregion
//#region src/functions/scene-merger/content.ts
var is = {
	drawings: "Drawing",
	lights: "AmbientLight",
	notes: "Note",
	regions: "Region",
	sounds: "AmbientSound",
	tiles: "Tile",
	tokens: "Token",
	walls: "Wall"
};
function as(e) {
	return Object.entries(is).flatMap(([t, n]) => e[t] && n ? [n] : []);
}
var os = {
	backgrounds: !1,
	drawings: !1,
	lights: !1,
	notes: !1,
	regions: !1,
	sounds: !1,
	templates: !1,
	tiles: !1,
	tokens: !1,
	walls: !1
};
function ss(e) {
	return e === "none" ? { ...os } : e === "all" ? {
		backgrounds: !0,
		drawings: !0,
		lights: !0,
		notes: !0,
		regions: !0,
		sounds: !0,
		templates: !1,
		tiles: !0,
		tokens: !0,
		walls: !0
	} : e === "encounter" ? {
		...os,
		drawings: !0,
		lights: !0,
		sounds: !0,
		tokens: !0
	} : {
		...os,
		backgrounds: !0,
		notes: !0,
		regions: !0,
		tiles: !0,
		walls: !0
	};
}
function cs(e, t) {
	return e?.content ?? t;
}
//#endregion
//#region src/functions/scene-merger/layout/bounds.ts
function ls(e, t, n, r) {
	return {
		height: Math.max(0, r - t),
		maxX: n,
		maxY: r,
		minX: e,
		minY: t,
		width: Math.max(0, n - e)
	};
}
function us(e) {
	return e.length === 0 ? ls(0, 0, 0, 0) : ls(Math.min(...e.map((e) => e.x)), Math.min(...e.map((e) => e.y)), Math.max(...e.map((e) => e.x + e.width)), Math.max(...e.map((e) => e.y + e.height)));
}
//#endregion
//#region src/functions/scene-merger/layout/normalize.ts
var ds = {
	x: 0,
	y: 0
};
function fs(e, t = ds) {
	let n = us(e), r = {
		x: t.x - n.minX,
		y: t.y - n.minY
	}, i = e.map((e) => ({
		...e,
		x: e.x + r.x,
		y: e.y + r.y
	}));
	return {
		bounds: ls(t.x, t.y, t.x + n.width, t.y + n.height),
		height: n.height,
		placements: i,
		shift: r,
		sourceBounds: n,
		width: n.width
	};
}
//#endregion
//#region src/functions/scene-merger/layout/overlaps.ts
function ps(e, t) {
	let n = Math.max(e.x, t.x), r = Math.max(e.y, t.y), i = Math.min(e.x + e.width, t.x + t.width), a = Math.min(e.y + e.height, t.y + t.height);
	return i > n && a > r ? ls(n, r, i, a) : null;
}
function ms(e) {
	let t = [];
	for (let n = 0; n < e.length; n += 1) {
		let r = e[n];
		if (r) for (let i = n + 1; i < e.length; i += 1) {
			let n = e[i];
			if (!n) continue;
			let a = ps(r, n);
			a && t.push({
				firstSceneId: r.sceneId,
				intersection: a,
				secondSceneId: n.sceneId
			});
		}
	}
	return t;
}
//#endregion
//#region src/functions/scene-merger/layout/snap.ts
function hs(e, t) {
	let n = t > 0 ? Math.round(e / t) * t : e;
	return Object.is(n, -0) ? 0 : n;
}
function gs(e, t, n) {
	let r = e, i = n + 2 ** -52;
	for (let n of t) {
		let t = Math.abs(n - e);
		t < i && (r = n, i = t);
	}
	return i <= n ? r : e;
}
function _s(e, t) {
	let n = [], r = [];
	for (let i of t) n.push(i.x, i.x + i.width, i.x - e.width, i.x + i.width - e.width), r.push(i.y, i.y + i.height, i.y - e.height, i.y + i.height - e.height);
	return {
		x: n,
		y: r
	};
}
function vs(e, t, n = []) {
	if (t.mode === "pixel") return {
		x: hs(e.x, t.pixelInterval),
		y: hs(e.y, t.pixelInterval)
	};
	if (t.mode === "grid") return {
		x: hs(e.x, t.gridSize),
		y: hs(e.y, t.gridSize)
	};
	if (t.mode === "edge") {
		let r = _s(e, n);
		return {
			x: gs(e.x, r.x, t.edgeThreshold),
			y: gs(e.y, r.y, t.edgeThreshold)
		};
	}
	return {
		x: e.x,
		y: e.y
	};
}
function ys(e, t, n, r = 1) {
	let i = t.mode === "edge" && Number.isFinite(r) && r > 0 ? {
		...t,
		edgeThreshold: t.edgeThreshold / r
	} : t;
	return {
		...e,
		...vs(e, i, n)
	};
}
//#endregion
//#region src/functions/scene-merger/layout/staging.ts
function bs(e) {
	return Math.round(e * 1e6) / 1e6;
}
function xs(e, t, n, r) {
	let i = n.size / t.grid.size, a = us(e), o = e.length === 0;
	return [...e, {
		content: { ...r },
		height: bs(t.dimensions.sceneHeight * i),
		order: e.length,
		sceneId: t.id,
		width: bs(t.dimensions.sceneWidth * i),
		x: o ? 0 : a.maxX + Math.max(50, n.size),
		y: o ? 0 : a.minY
	}];
}
function Ss(e, t, n) {
	return e.map((e) => e.sceneId === t.id ? {
		...e,
		height: bs(t.dimensions.sceneHeight * n),
		width: bs(t.dimensions.sceneWidth * n)
	} : e);
}
function Cs(e, t) {
	return e.map((e) => ({
		...e,
		height: bs(e.height * t),
		width: bs(e.width * t),
		x: bs(e.x * t),
		y: bs(e.y * t)
	}));
}
//#endregion
//#region src/functions/scene-merger/layout/viewport.ts
var ws = .02;
function Ts(e, t = ws, n = 8) {
	return Math.min(n, Math.max(t, e));
}
function Es(e, t, n = 32) {
	let r = Math.max(1, t.width - n * 2), i = Math.max(1, t.height - n * 2), a = e.width > 0 ? r / e.width : 1, o = e.height > 0 ? i / e.height : 1, s = Ts(Math.min(a, o, 1));
	return {
		panX: (t.width - e.width * s) / 2 - e.minX * s,
		panY: (t.height - e.height * s) / 2 - e.minY * s,
		zoom: s
	};
}
function Ds(e, t, n) {
	let r = Ts(t), i = (n.x - e.panX) / e.zoom, a = (n.y - e.panY) / e.zoom;
	return {
		panX: n.x - i * r,
		panY: n.y - a * r,
		zoom: r
	};
}
//#endregion
//#region src/functions/scene-merger/references/keys.ts
function Os(e) {
	return JSON.stringify([
		e.sceneId,
		e.documentType,
		...e.parentIds ?? [],
		e.documentId
	]);
}
function ks(e, t, n, r = []) {
	return Os({
		documentId: n,
		documentType: t,
		parentIds: r,
		sceneId: e
	});
}
//#endregion
//#region src/functions/scene-merger/transforms/clone.ts
function J(e) {
	return Array.isArray(e) ? e.map((e) => J(e)) : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, J(t)])) : e;
}
//#endregion
//#region src/functions/scene-merger/references/uuid.ts
var As = new Set([
	"Level",
	"Tile",
	"Wall",
	"AmbientLight",
	"AmbientSound",
	"Drawing",
	"Note",
	"Region",
	"RegionBehavior",
	"Token"
]);
function js(e) {
	return As.has(e);
}
function Ms(e, t, n, r = [], i = e.sourceSceneId) {
	return e.idMap.get(ks(i, t, n, r));
}
function Ns(e, t) {
	let n = e.split("."), r = n[1];
	if (n[0] !== "Scene" || !r || !t.sourceSceneIds.includes(r)) return {
		rewritten: 0,
		unresolved: [],
		value: e
	};
	if (n.length === 2) return {
		rewritten: 1,
		unresolved: [],
		value: `Scene.${t.destinationSceneId}`
	};
	let i = ["Scene", t.destinationSceneId], a = [], o = 1;
	for (let s = 2; s < n.length; s += 2) {
		let c = n[s], l = n[s + 1];
		if (!c || !l || !js(c)) return {
			rewritten: 0,
			unresolved: [e],
			value: e
		};
		let u = Ms(t, c, l, a, r);
		if (!u) return {
			rewritten: 0,
			unresolved: [e],
			value: e
		};
		i.push(c, u), a.push(l), o += 1;
	}
	return {
		rewritten: o,
		unresolved: [],
		value: i.join(".")
	};
}
//#endregion
//#region src/functions/scene-merger/references/rewrite.ts
function Ps(e, t, n) {
	if (typeof e.level == "string") {
		let r = e.level, i = Ms(t, "Level", r);
		i ? (e.level = i, n.rewritten += 1) : n.unresolved.push(`Level.${r}`);
	}
	Array.isArray(e.levels) && (e.levels = e.levels.map((e) => {
		if (typeof e != "string") return e;
		let r = Ms(t, "Level", e);
		return r ? (n.rewritten += 1, r) : (n.unresolved.push(`Level.${e}`), e);
	}));
}
function Fs(e, t, n) {
	if (typeof e != "string") return e;
	let r = Ns(e, t);
	return n.rewritten += r.rewritten, n.unresolved.push(...r.unresolved), r.value;
}
function Is(e, t, n, r) {
	let i = e[t];
	if (typeof i != "string") return;
	let a = Ms(n, "Token", i);
	a ? (e[t] = a, r.rewritten += 1) : r.unresolved.push(`Token.${i}`);
}
function Ls(e, t, n) {
	if (typeof e == "string") return Fs(e, t, n);
	if (!e || typeof e != "object" || Array.isArray(e)) return e;
	let r = J(e);
	typeof r.uuid == "string" && (r.uuid = Fs(r.uuid, t, n));
	let i = r.scene;
	if (typeof i == "string" && t.sourceSceneIds.includes(i) && typeof r.region == "string") {
		let e = Ms(t, "Region", r.region, [], i);
		e ? (r.scene = t.destinationSceneId, r.region = e, n.rewritten += 2) : n.unresolved.push(`Region.${String(r.region)}`);
	}
	return r;
}
function Rs(e, t, n, r) {
	if (!e || typeof e != "object" || Array.isArray(e)) return e;
	let i = J(e), a = i.system;
	if (!a || typeof a != "object" || Array.isArray(a)) return i;
	let o = { ...a }, s = typeof i.type == "string" ? i.type.toLowerCase() : "";
	if (s.includes("teleport") && Array.isArray(o.destinations) && (o.destinations = o.destinations.map((e) => Ls(e, n, r))), s.includes("toggle") && t) for (let e of ["enable", "disable"]) Array.isArray(o[e]) && (o[e] = o[e].map((e) => {
		if (typeof e != "string") return e;
		if (e.startsWith("Scene.")) return Fs(e, n, r);
		let i = Ms(n, "RegionBehavior", e, [t]);
		return i ? (r.rewritten += 1, i) : (r.unresolved.push(`Region.${t}.RegionBehavior.${e}`), e);
	}));
	return i.system = o, i;
}
function zs(e, t, n) {
	let r = e.attachment;
	if (r && typeof r == "object" && !Array.isArray(r)) {
		let i = J(r);
		Is(i, "token", t, n), e.attachment = i;
	}
	Array.isArray(e.shapes) && (e.shapes = e.shapes.map((e) => {
		if (!e || typeof e != "object" || Array.isArray(e)) return e;
		let r = J(e);
		return Is(r, "token", t, n), r;
	}));
	let i = typeof e._id == "string" ? e._id : void 0;
	Array.isArray(e.behaviors) && (e.behaviors = e.behaviors.map((e) => Rs(e, i, t, n)));
}
function Bs(e, t, n) {
	let r = J(t), i = {
		rewritten: 0,
		unresolved: []
	};
	return Ps(r, n, i), e === "Region" && zs(r, n, i), {
		rewritten: i.rewritten,
		unresolved: i.unresolved,
		value: r
	};
}
//#endregion
//#region src/functions/scene-merger/transforms/coordinates.ts
function Vs(e, t, n, r, i) {
	let a = i.width / e.sceneWidth, o = {
		x: n.sceneX + i.x,
		y: n.sceneY + i.y
	}, s = {
		x: e.sceneX,
		y: e.sceneY
	}, c = t.size * a / r.size, l = t.size * a * r.distance / (t.distance * r.size);
	return {
		delta: {
			x: o.x - s.x,
			y: o.y - s.y
		},
		destinationOrigin: o,
		distanceScale: l,
		gridScale: c,
		pixelScale: a,
		sourceOrigin: s
	};
}
function Hs(e, t) {
	return {
		x: t.destinationOrigin.x + (e.x - t.sourceOrigin.x) * t.pixelScale,
		y: t.destinationOrigin.y + (e.y - t.sourceOrigin.y) * t.pixelScale
	};
}
function Us(e, t) {
	return e * t.pixelScale;
}
function Ws(e, t) {
	return e * t.distanceScale;
}
function Gs(e, t) {
	return e * t.gridScale;
}
function Ks(e, t) {
	return {
		x: t.width / e.sceneWidth,
		y: t.height / e.sceneHeight
	};
}
function qs(e, t) {
	let n = Ks(e, t), r = Math.max(1, Math.abs(n.x), Math.abs(n.y)) * 1e-7;
	return Number.isFinite(n.x) && Number.isFinite(n.y) && Math.abs(n.x - n.y) < r;
}
function Js(e, t) {
	if (!Number.isFinite(t) || t <= 0) return !1;
	let n = 1e-7, r = e.x / t, i = e.y / t;
	return Math.abs(r - Math.round(r)) < n && Math.abs(i - Math.round(i)) < n;
}
//#endregion
//#region src/functions/scene-merger/transforms/documents.ts
function Ys(e, t, n) {
	let r = { ...J(e) };
	for (let i of t) {
		let t = e[i];
		typeof t == "number" && Number.isFinite(t) && (r[i] = t * n);
	}
	return r;
}
function Xs(e, t, n, r) {
	let i = e[t];
	i && typeof i == "object" && !Array.isArray(i) && (e[t] = Ys(i, n, r));
}
function Zs(e, t) {
	return {
		...J(e),
		...Hs(e, t)
	};
}
function Qs(e, t) {
	return {
		...Zs(e, t),
		height: Us(e.height, t),
		width: Us(e.width, t)
	};
}
function $s(e, t) {
	let n = J(e), r = Hs({
		x: e.c[0],
		y: e.c[1]
	}, t), i = Hs({
		x: e.c[2],
		y: e.c[3]
	}, t);
	return {
		...n,
		c: [
			r.x,
			r.y,
			i.x,
			i.y
		]
	};
}
function ec(e, t) {
	let n = Zs(e, t);
	if (e.shape) {
		let r = Ys(e.shape, ["height", "width"], t.pixelScale);
		Array.isArray(e.shape.points) && (r.points = e.shape.points.map((e) => Us(e, t))), n.shape = r;
	}
	for (let r of ["fontSize", "strokeWidth"]) {
		let i = e[r];
		typeof i == "number" && Number.isFinite(i) && (n[r] = Us(i, t));
	}
	return n;
}
function tc(e, t) {
	let n = Zs(e, t);
	return Xs(n, "config", ["bright", "dim"], t.distanceScale), n;
}
function nc(e, t) {
	let n = Zs(e, t);
	return typeof e.radius == "number" && (n.radius = Ws(e.radius, t)), n;
}
function rc(e, t) {
	let n = Zs(e, t);
	for (let r of ["height", "width"]) {
		let i = e[r];
		typeof i == "number" && Number.isFinite(i) && (n[r] = Gs(i, t));
	}
	return Xs(n, "light", ["bright", "dim"], t.distanceScale), Xs(n, "sight", ["range"], t.distanceScale), Array.isArray(e.detectionModes) && (n.detectionModes = e.detectionModes.map((e) => e && typeof e == "object" && !Array.isArray(e) ? Ys(e, ["range"], t.distanceScale) : J(e))), n._movementHistory = [], n._regions = [], n;
}
function ic(e, t) {
	let n = { ...J(e) };
	return typeof e.level == "string" && (n.level = t.get(e.level) ?? e.level), Array.isArray(e.levels) && (n.levels = e.levels.map((e) => t.get(e) ?? e)), n;
}
//#endregion
//#region src/functions/scene-merger/transforms/regions.ts
var ac = new Set([
	"circle",
	"cone",
	"ellipse",
	"line",
	"rectangle",
	"ring"
]);
function oc(e, t) {
	let n = { ...J(e) };
	return typeof e.x == "number" && typeof e.y == "number" && Object.assign(n, Hs({
		x: e.x,
		y: e.y
	}, t)), n;
}
function sc(e, t) {
	let n = [];
	for (let r = 0; r < e.length; r += 2) {
		let i = Hs({
			x: e[r] ?? 0,
			y: e[r + 1] ?? 0
		}, t);
		n.push(i.x, i.y);
	}
	return n;
}
function cc(e, t, n) {
	let r = n?.outputSize ?? n?.size ?? 0, i = n?.outputType ?? n?.type;
	if (!n || n.type !== 1 || i !== 1 || n.size <= 0 || r <= 0) throw Error("Grid Region shapes can currently be transformed only on a square grid.");
	return e.map((e) => {
		let i = Hs({
			x: e.j * n.size,
			y: e.i * n.size
		}, t), a = i.y / r, o = i.x / r;
		if (!Number.isInteger(a) || !Number.isInteger(o)) throw Error("Grid Region shape transformation must align to complete grid cells.");
		return {
			...J(e),
			i: a,
			j: o
		};
	});
}
function lc(e, t) {
	let n = { ...J(e) };
	for (let r of [
		"height",
		"innerRadius",
		"outerRadius",
		"radius",
		"radiusX",
		"radiusY",
		"width"
	]) {
		let i = e[r];
		typeof i == "number" && Number.isFinite(i) && (n[r] = i * t.pixelScale);
	}
	if (typeof e.x2 == "number" && typeof e.y2 == "number" && Number.isFinite(e.x2) && Number.isFinite(e.y2)) {
		let r = Hs({
			x: e.x2,
			y: e.y2
		}, t);
		n.x2 = r.x, n.y2 = r.y;
	}
	return n;
}
function uc(e, t, n) {
	let r = lc(e, t);
	if (ac.has(e.type)) return oc(r, t);
	if (e.type === "polygon") return r.points = sc(e.points ?? [], t), r;
	if (e.type === "emanation") return e.base && (r.base = oc(e.base, t)), r;
	if (e.type === "grid") return r.offsets = cc(e.offsets ?? [], t, n), r;
	throw e.type === "token" ? Error("Token-linked Region shapes cannot currently be merged safely.") : Error(`Unsupported Region shape type: ${e.type}`);
}
function dc(e, t, n) {
	let r = e.attachment?.token;
	if (typeof r == "string" && r.length > 0) throw Error("Attached Regions cannot currently be merged safely.");
	return {
		...J(e),
		_shapeConstraints: null,
		shapes: e.shapes?.map((e) => uc(e, t, n)) ?? []
	};
}
//#endregion
//#region src/functions/scene-merger/validation/compatibility.ts
function Y(e, t, n, r = {}, i = t !== "error") {
	return {
		code: e,
		details: r,
		overridable: i,
		sceneIds: n,
		severity: t
	};
}
function fc(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let r of e) t.has(r) && n.add(r), t.add(r);
	return [...n];
}
function pc(e) {
	return !Number.isFinite(e.x) || !Number.isFinite(e.y) || !Number.isFinite(e.width) || !Number.isFinite(e.height) || !Number.isFinite(e.x + e.width) || !Number.isFinite(e.y + e.height) || e.width <= 0 || e.height <= 0;
}
function mc(e, t, n) {
	let r = [], i = e.background, a = cs(t, n.content);
	return a.backgrounds && i && (i.x !== 0 || i.y !== 0 || i.rotation !== 0 || i.scaleX !== 1 || i.scaleY !== 1) && r.push(Y("background.transform", "warning", [e.id])), e.metrics.crossSceneReferences > 0 && r.push(Y("references.crossScene", "warning", [e.id], { count: e.metrics.crossSceneReferences })), e.metrics.moduleFlagDocuments > 0 && r.push(Y("flags.moduleData", "warning", [e.id], { count: e.metrics.moduleFlagDocuments })), a.regions && e.metrics.unsupportedRegionBehaviors > 0 && r.push(Y("regions.unsupportedBehavior", "warning", [e.id], { count: e.metrics.unsupportedRegionBehaviors })), a.regions && e.metrics.attachedRegions > 0 && r.push(Y("regions.attachedUnsupported", "error", [e.id], { count: e.metrics.attachedRegions })), a.regions && e.metrics.unsupportedRegionShapes > 0 && r.push(Y("regions.unsupportedShape", "error", [e.id], { count: e.metrics.unsupportedRegionShapes })), a.regions && e.metrics.tokenRegionShapes > 0 && r.push(Y("regions.tokenShapeUnsupported", "error", [e.id], { count: e.metrics.tokenRegionShapes })), a.regions && e.metrics.gridRegionShapes > 0 && (e.grid.type !== 1 || n.outputGrid.type !== 1) && r.push(Y("grid.regionShapeUnsupported", "error", [e.id])), a.regions && t && e.metrics.gridRegionShapes > 0 && e.grid.type === 1 && n.outputGrid.type === 1 && n.outputGrid.size > 0 && (Math.abs(Ks(e.dimensions, t).x * e.grid.size - n.outputGrid.size) > 1e-7 || t.x % n.outputGrid.size !== 0 || t.y % n.outputGrid.size !== 0) && r.push(Y("grid.regionAlignment", "error", [e.id])), e.grid.type !== n.outputGrid.type && r.push(Y("grid.typeMismatch", "error", [e.id])), e.grid.units !== n.outputGrid.units && r.push(Y("grid.unitsMismatch", "info", [e.id], {
		outputUnits: n.outputGrid.units,
		sourceUnits: e.grid.units
	})), r;
}
function hc(e, t, n) {
	return e.filter((e) => cs(t.get(e.id), n).backgrounds);
}
function gc(e, t, n) {
	let r = cs(e, n), i = cs(t, n);
	return Object.keys(r).some((e) => r[e] && i[e]);
}
function _c(e, t, n) {
	let r = [], i = new Map(t.map((e) => [e.sceneId, e]));
	n.destination.name.trim() || r.push(Y("destination.nameRequired", "error", [])), (!Number.isFinite(n.outputGrid.size) || n.outputGrid.size <= 0 || !Number.isFinite(n.outputGrid.distance) || n.outputGrid.distance <= 0 || !Number.isInteger(n.outputGrid.type) || n.outputGrid.type < 0 || n.outputGrid.type > 5) && r.push(Y("grid.outputInvalid", "error", [])), e.length < 2 && r.push(Y("selection.tooFew", "error", e.map((e) => e.id)));
	let a = fc(e.map((e) => e.id));
	a.length > 0 && r.push(Y("selection.duplicate", "error", a));
	let o = fc(t.map((e) => e.sceneId));
	o.length > 0 && r.push(Y("layout.duplicate", "error", o));
	let s = new Set(e.map((e) => e.id)), c = [...new Set(t.map((e) => e.sceneId).filter((e) => !s.has(e)))];
	c.length > 0 && r.push(Y("layout.unknown", "error", c));
	for (let t of e) {
		let e = i.get(t.id);
		t.canMerge || r.push(Y("selection.unavailable", "error", [t.id])), e ? pc(e) ? r.push(Y("layout.invalidDimensions", "error", [t.id], {
			actualHeight: e.height,
			actualWidth: e.width,
			expectedHeight: t.dimensions.sceneHeight,
			expectedWidth: t.dimensions.sceneWidth
		})) : qs(t.dimensions, e) || r.push(Y("layout.nonUniformScale", "error", [t.id])) : r.push(Y("layout.missing", "error", [t.id])), t.levels.length !== 1 && r.push(Y("levels.multiple", "error", [t.id], { count: t.levels.length })), r.push(...mc(t, e, n));
	}
	let l = hc(e, i, n.content);
	l.length > 0 && new Set(l.map((e) => String(e.background?.color ?? "none"))).size > 1 && r.push(Y("background.colorMismatch", "warning", l.map((e) => e.id)));
	for (let e of ms(t)) {
		let t = i.get(e.firstSceneId), a = i.get(e.secondSceneId);
		!t || !a || !gc(t, a, n.content) || r.push(Y("layout.overlap", "warning", [e.firstSceneId, e.secondSceneId], {
			height: e.intersection.height,
			width: e.intersection.width
		}));
	}
	return (t.some((e) => cs(e, n.content).templates) || t.length === 0 && n.content.templates) && r.push(Y("content.templatesUnavailable", "error", [])), r;
}
//#endregion
//#region src/functions/scene-merger/validation/performance.ts
var vc = {
	animatedAssets: 12,
	area: 15e7,
	backgrounds: 20,
	dimension: 16384,
	lights: 500,
	regions: 500,
	sounds: 500,
	texturePixels: 25e7,
	tiles: 1e3,
	tokens: 1e3,
	walls: 5e3
};
function yc(e, t) {
	return e[t] ?? 0;
}
function bc(e, t, n, r = []) {
	let i = {}, a = new Map(r.map((e) => [e.sceneId, e])), o = 0, s = 0, c = 0;
	for (let t of e) {
		let e = n ? cs(a.get(t.id), n) : void 0, r = xc(e);
		for (let [e, n] of Object.entries(t.metrics.documents)) r && !r.has(e) || (i[e] = (i[e] ?? 0) + (n ?? 0));
		(!e || e.backgrounds || e.tiles) && (o += t.metrics.animatedAssets, c += t.metrics.texturePixels), (!e || e.backgrounds) && (s += t.metrics.backgroundImages);
	}
	return {
		animatedAssets: o,
		backgrounds: s,
		bounds: t,
		documents: i,
		sourceCount: e.length,
		texturePixels: c
	};
}
function xc(e) {
	return e ? new Set(Object.entries(is).flatMap(([t, n]) => n && e[t] ? [n] : [])) : null;
}
function Sc(e, t, n) {
	return {
		code: e,
		details: {
			threshold: n,
			value: t
		},
		overridable: !0,
		sceneIds: [],
		severity: "warning"
	};
}
function Cc(e, t = vc) {
	let n = [], r = Math.max(e.bounds.width, e.bounds.height), i = e.bounds.width * e.bounds.height, a = [
		[
			"performance.dimension",
			r,
			t.dimension
		],
		[
			"performance.area",
			i,
			t.area
		],
		[
			"performance.textures",
			e.texturePixels,
			t.texturePixels
		],
		[
			"performance.backgrounds",
			e.backgrounds,
			t.backgrounds
		],
		[
			"performance.tiles",
			yc(e.documents, "Tile") + e.backgrounds,
			t.tiles
		],
		[
			"performance.animatedAssets",
			e.animatedAssets,
			t.animatedAssets
		],
		[
			"performance.walls",
			yc(e.documents, "Wall"),
			t.walls
		],
		[
			"performance.lights",
			yc(e.documents, "AmbientLight"),
			t.lights
		],
		[
			"performance.sounds",
			yc(e.documents, "AmbientSound"),
			t.sounds
		],
		[
			"performance.tokens",
			yc(e.documents, "Token"),
			t.tokens
		],
		[
			"performance.regions",
			yc(e.documents, "Region"),
			t.regions
		]
	];
	for (let [e, t, r] of a) t > r && n.push(Sc(e, t, r));
	return n;
}
//#endregion
//#region src/functions/scene-merger/validation/report.ts
function wc(e) {
	let t = e.filter((e) => e.severity === "error"), n = e.filter((e) => e.severity !== "error");
	return {
		blocking: t,
		canMerge: t.length === 0,
		warnings: n
	};
}
function Tc(e, t, n, r = vc) {
	let i = bc(e, us(t), n.content, t);
	return wc([..._c(e, t, n), ...Cc(i, r)]);
}
//#endregion
//#region src/types/scene-merger/options.ts
var Ec = {
	backgrounds: "available",
	drawings: "available",
	lights: "available",
	notes: "available",
	regions: "available",
	sounds: "available",
	templates: "unavailable",
	tiles: "available",
	tokens: "available",
	walls: "available"
};
//#endregion
//#region src/state/scene-merger/derivations.ts
function Dc(e) {
	let t = q(() => {
		let t = new Map(e.availableScenes.value.map((e) => [e.id, e]));
		return e.placements.value.flatMap((e) => {
			let n = t.get(e.sceneId);
			return n ? [n] : [];
		});
	}), n = q(() => e.placements.value.map(({ sceneId: e }) => e)), r = q(() => us(e.placements.value)), i = q(() => ms(e.placements.value)), a = q(() => [...e.sceneFolders.value].sort((e, t) => e.name.localeCompare(t.name))), o = q(() => ({
		content: { ...e.content },
		destination: { ...e.destination },
		outputGrid: { ...e.outputGrid }
	}));
	return {
		arrangementBounds: r,
		currentRequest: q(() => ({
			acknowledgedWarnings: e.warningsAcknowledged.value ? [...new Set(e.validation.value?.warnings.map(({ code: e }) => e) ?? [])] : [],
			options: o.value,
			placements: e.placements.value.map((e) => ({
				...e,
				...e.content ? { content: { ...e.content } } : {}
			})),
			sourceSceneIds: n.value
		})),
		folderChoices: a,
		overlaps: i,
		selectedSceneIds: n,
		selectedScenes: t
	};
}
//#endregion
//#region src/state/scene-merger/errors.ts
var Oc = new Set([
	"beforeDestination",
	"calculatingBounds",
	"copyingDrawings",
	"copyingLights",
	"copyingNotes",
	"copyingRegions",
	"copyingSounds",
	"copyingTiles",
	"copyingTokens",
	"copyingWalls",
	"creatingBackgrounds",
	"creatingScene",
	"finalizing",
	"rewritingReferences",
	"validating"
]);
function kc(e, t) {
	if (typeof e != "object" || !e || !("stage" in e)) return t;
	let n = e.stage;
	return typeof n == "string" && Oc.has(n) ? n : t;
}
//#endregion
//#region src/state/scene-merger/staging.ts
function Ac(e) {
	let t = /* @__PURE__ */ P([]), n = /* @__PURE__ */ Lt({ ...e.defaultGrid });
	function r(r) {
		if (!e.canMutate() || t.value.some((e) => e.sceneId === r)) return;
		let i = e.availableScenes.value.find(({ id: e }) => e === r);
		i && (t.value.length === 0 && Object.assign(n, i.grid), t.value = xs(t.value, i, n, e.defaultContent), e.changed());
	}
	function i(n) {
		e.canMutate() && (t.value = t.value.filter((e) => e.sceneId !== n).map((e, t) => ({
			...e,
			order: t
		})), e.changed());
	}
	function a() {
		e.canMutate() && (t.value = [], e.changed());
	}
	function o(n, r) {
		if (!e.canMutate()) return;
		let i = [...t.value], a = i.findIndex((e) => e.sceneId === n), o = a + r;
		a < 0 || o < 0 || o >= i.length || ([i[a], i[o]] = [i[o], i[a]], t.value = i.map((e, t) => ({
			...e,
			order: t
		})), e.changed());
	}
	function s(n, r, i) {
		e.canMutate() && (t.value = t.value.map((t) => t.sceneId === n ? {
			...t,
			content: {
				...t.content ?? e.defaultContent,
				[r]: i
			}
		} : t), e.changed());
	}
	function c(n, r) {
		e.canMutate() && (t.value = t.value.map((e) => e.sceneId === n ? {
			...e,
			content: ss(r)
		} : e), e.changed());
	}
	function l(n, r) {
		if (!e.canMutate() || !Number.isFinite(r) || r <= 0) return;
		let i = e.availableScenes.value.find(({ id: e }) => e === n);
		i && (t.value = Ss(t.value, i, r), e.changed());
	}
	function u(t) {
		let r = e.availableScenes.value.find(({ id: e }) => e === t);
		r && l(t, n.size / r.grid.size);
	}
	function d(r, i) {
		if (e.canMutate()) {
			if (r === "size") {
				if (typeof i != "number" || !Number.isFinite(i) || i <= 0) return;
				let e = i / n.size;
				t.value = Cs(t.value, e);
			}
			n[r] = i, e.changed();
		}
	}
	return {
		addScene: r,
		clearScenes: a,
		matchSceneGrid: u,
		outputGrid: n,
		placements: t,
		removeScene: i,
		reorderScene: o,
		setOutputGrid: d,
		setSceneContent: s,
		setSceneContentPreset: c,
		setSceneScale: l
	};
}
//#endregion
//#region src/state/scene-merger/workspace.ts
function jc(e, t, n = () => !0) {
	let r = /* @__PURE__ */ P({
		panX: 24,
		panY: 24,
		zoom: .1
	}), i = /* @__PURE__ */ Lt({
		...ts,
		mode: ts.mode
	});
	function a(e, t) {
		n() && (i.mode = e, t !== void 0 && Number.isFinite(t) && t > 0 && (i.pixelInterval = t));
	}
	function o(e) {
		n() && (r.value = e);
	}
	function s(e, t) {
		n() && (r.value = Ds(r.value, e, t));
	}
	function c(e) {
		n() && (r.value = Es(t.value, e, 36));
	}
	function l() {
		n() && (r.value = {
			panX: 24,
			panY: 24,
			zoom: .1
		});
	}
	function u(t, i) {
		if (!n()) return;
		let a = e.value.find((e) => e.sceneId === t);
		a && (r.value = {
			...r.value,
			panX: i.width / 2 - (a.x + a.width / 2) * r.value.zoom,
			panY: i.height / 2 - (a.y + a.height / 2) * r.value.zoom
		});
	}
	return {
		fitView: c,
		locateScene: u,
		resetView: l,
		setSnap: a,
		setView: o,
		snap: i,
		view: r,
		zoomAt: s
	};
}
//#endregion
//#region src/state/scene-merger/store.ts
var Mc = es("scene-merger", () => {
	let e = ns("Merged Scene"), t = /* @__PURE__ */ Jt(null), n = /* @__PURE__ */ P([]), r = /* @__PURE__ */ P([]), i = /* @__PURE__ */ Lt({ ...e.content }), a = /* @__PURE__ */ Lt({ ...e.destination }), o = /* @__PURE__ */ P("loading"), s = /* @__PURE__ */ P(null), c = /* @__PURE__ */ P(!1), l = /* @__PURE__ */ P(!1), u = /* @__PURE__ */ P(null), d = /* @__PURE__ */ P(null), f = /* @__PURE__ */ P(""), p = /* @__PURE__ */ P("beforeDestination"), m = /* @__PURE__ */ P(!1), h = 0, g = q(() => o.value === "ready"), { addScene: _, clearScenes: v, matchSceneGrid: y, outputGrid: b, placements: x, removeScene: ee, reorderScene: S, setOutputGrid: C, setSceneContent: te, setSceneContentPreset: ne, setSceneScale: re } = Ac({
		availableScenes: n,
		canMutate: () => g.value,
		changed: () => {
			Ee(), Se();
		},
		defaultContent: i,
		defaultGrid: e.outputGrid
	}), { arrangementBounds: w, currentRequest: ie, folderChoices: ae, overlaps: oe, selectedSceneIds: se, selectedScenes: ce } = Dc({
		availableScenes: n,
		content: i,
		destination: a,
		outputGrid: b,
		placements: x,
		sceneFolders: r,
		validation: s,
		warningsAcknowledged: l
	}), { fitView: le, locateScene: T, resetView: ue, setSnap: de, setView: fe, snap: E, view: pe, zoomAt: me } = jc(x, w, () => g.value), he = q(() => g.value && !c.value && !!s.value?.canMerge && (!s.value?.warnings.some(({ severity: e }) => e === "warning") || l.value)), ge = q(() => o.value === "merging" && !m.value && !!t.value?.cancelActiveMerge && (!u.value || u.value.stage === "validating" || u.value.stage === "calculatingBounds"));
	async function D(e, i) {
		t.value = e, a.name = i, o.value = "loading";
		try {
			[n.value, r.value] = await Promise.all([e.listScenes(), e.listSceneFolders()]), o.value = "ready", await Se();
		} catch (e) {
			De(e, "beforeDestination");
		}
	}
	function _e(e) {
		_(e), E.gridSize = b.size;
	}
	function ve(e, t) {
		C(e, t), e === "size" && (E.gridSize = b.size);
	}
	function ye(e, t, n, r = !0) {
		if (!g.value) return;
		let i = x.value.find((t) => t.sceneId === e);
		if (!i) return;
		let a = {
			...i,
			x: Math.round(t),
			y: Math.round(n)
		}, o = r ? ys(a, E, x.value.filter((t) => t.sceneId !== e), pe.value.zoom) : a;
		x.value = x.value.map((t) => t.sceneId === e ? o : t), Ee();
	}
	function be(e, t) {
		!g.value || Ec[e] === "unavailable" || (i[e] = t, Ee(), Se());
	}
	function xe(e, t) {
		g.value && (a[e] = t, Ee(), Se());
	}
	async function Se() {
		if (!t.value || !g.value) return;
		let e = ++h;
		c.value = !0;
		try {
			let n = await t.value.validate(ie.value);
			e === h && (s.value = n);
		} catch (t) {
			e === h && De(t, "beforeDestination");
		} finally {
			e === h && (c.value = !1);
		}
	}
	async function O() {
		if (!(!t.value || !g.value) && (await Se(), he.value)) {
			o.value = "merging", u.value = null, m.value = !1;
			try {
				d.value = await t.value.merge(ie.value, (e) => {
					u.value = e;
				}), o.value = "success";
			} catch (e) {
				De(e, kc(e, u.value?.stage ?? "beforeDestination"));
			}
		}
	}
	async function Ce() {
		ge.value && (m.value = !0, await t.value?.cancelActiveMerge?.());
	}
	async function we() {
		d.value && t.value && await t.value.openScene(d.value.destinationSceneId);
	}
	function k(e) {
		g.value && (l.value = e);
	}
	function Te() {
		o.value = "ready", u.value = null, m.value = !1, f.value = "", Se();
	}
	function Ee() {
		l.value = !1, d.value = null;
	}
	function De(e, t) {
		f.value = e instanceof Error ? e.message : String(e), p.value = t, o.value = "failure";
	}
	return {
		arrangementBounds: w,
		availableScenes: n,
		canCancel: ge,
		canMerge: he,
		cancelMerge: Ce,
		cancelRequested: m,
		clearScenes: v,
		content: i,
		destination: a,
		failureMessage: f,
		failureStage: p,
		fitView: le,
		folderChoices: ae,
		initialize: D,
		locateScene: T,
		merge: O,
		moveScene: ye,
		openDestination: we,
		outputGrid: b,
		overlaps: oe,
		placements: x,
		progress: u,
		removeScene: ee,
		reorderScene: S,
		resetView: ue,
		returnToEditing: Te,
		selectedSceneIds: se,
		selectedScenes: ce,
		setContent: be,
		setDestination: xe,
		setOutputGrid: ve,
		setSceneContent: te,
		setSceneContentPreset: ne,
		setSceneScale: re,
		setSnap: de,
		setView: fe,
		setWarningsAcknowledged: k,
		setupEditable: g,
		snap: E,
		status: o,
		summary: d,
		validateNow: Se,
		validating: c,
		validation: s,
		view: pe,
		warningsAcknowledged: l,
		zoomAt: me,
		addScene: _e,
		matchSceneGrid: y
	};
}), Nc = { class: "tw:dui-card tw:dui-card-border tw:bg-base-200" }, Pc = {
	key: 0,
	class: "tw:dui-card-body tw:flex-row tw:flex-wrap tw:items-center tw:justify-between tw:gap-3 tw:p-3"
}, Fc = { class: "tw:dui-card-title tw:text-base" }, Ic = { class: "tw:m-0 tw:text-xs tw:opacity-65" }, Lc = { class: "tw:flex tw:items-center tw:gap-2" }, Rc = {
	key: 0,
	class: "tw:max-w-72 tw:text-right tw:text-xs tw:opacity-65"
}, zc = ["disabled"], Bc = {
	key: 1,
	class: "tw:dui-card-body tw:gap-3 tw:p-3"
}, Vc = { class: "tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-2" }, Hc = { class: "tw:dui-card-title tw:text-base" }, Uc = { class: "tw:m-0 tw:text-xs tw:opacity-70" }, Wc = { key: 0 }, Gc = {
	key: 1,
	class: "tw:dui-badge tw:dui-badge-ghost tw:dui-badge-sm"
}, Kc = ["value"], qc = { class: "tw:flex tw:justify-between tw:text-[0.68rem] tw:opacity-65" }, Jc = {
	key: 2,
	class: "tw:dui-card-body tw:gap-3 tw:p-3"
}, Yc = {
	role: "alert",
	class: "tw:dui-alert tw:dui-alert-success tw:dui-alert-soft"
}, Xc = { class: "tw:min-w-0 tw:flex-1" }, Zc = { class: "tw:m-0 tw:font-semibold" }, Qc = { class: "tw:m-0 tw:text-sm" }, $c = { class: "tw:grid tw:gap-3 tw:md:grid-cols-2 tw:xl:grid-cols-4" }, el = { class: "tw:rounded-box tw:bg-base-300/50 tw:p-3" }, tl = { class: "tw:mt-0 tw:mb-2 tw:text-sm tw:font-semibold" }, nl = { class: "tw:m-0 tw:grid tw:list-none tw:gap-1 tw:p-0 tw:text-xs" }, rl = {
	key: 0,
	class: "tw:opacity-60"
}, il = { class: "tw:rounded-box tw:bg-base-300/50 tw:p-3" }, al = { class: "tw:mt-0 tw:mb-2 tw:text-sm tw:font-semibold" }, ol = { class: "tw:m-0 tw:grid tw:list-none tw:gap-1 tw:p-0 tw:text-xs" }, sl = {
	key: 0,
	class: "tw:opacity-60"
}, cl = { class: "tw:rounded-box tw:bg-base-300/50 tw:p-3" }, ll = { class: "tw:mt-0 tw:mb-2 tw:text-sm tw:font-semibold" }, ul = { class: "tw:m-0 tw:grid tw:grid-cols-[1fr_auto] tw:gap-x-3 tw:gap-y-1 tw:text-xs" }, dl = { class: "tw:m-0 tw:font-semibold" }, fl = { class: "tw:m-0 tw:font-semibold" }, pl = { class: "tw:m-0 tw:font-semibold" }, ml = { class: "tw:rounded-box tw:bg-base-300/50 tw:p-3" }, hl = { class: "tw:mt-0 tw:mb-2 tw:text-sm tw:font-semibold" }, gl = { class: "tw:m-0 tw:max-h-24 tw:overflow-auto tw:pl-4 tw:text-xs" }, _l = {
	key: 0,
	class: "tw:list-none tw:opacity-60"
}, vl = { class: "tw:dui-card-actions tw:justify-end" }, yl = {
	key: 3,
	class: "tw:dui-card-body tw:gap-3 tw:p-3"
}, bl = {
	role: "alert",
	class: "tw:dui-alert tw:dui-alert-error tw:dui-alert-soft"
}, xl = { class: "tw:min-w-0 tw:flex-1" }, Sl = { class: "tw:m-0 tw:font-semibold" }, Cl = { class: "tw:m-0 tw:text-sm" }, wl = { class: "tw:mt-1 tw:block tw:break-words tw:text-xs" }, Tl = { class: "tw:mt-2 tw:mb-0 tw:text-xs" }, El = /* @__PURE__ */ Yn({
	__name: "ExecutionPanel",
	props: { t: { type: Function } },
	setup(e) {
		let t = e, n = Mc(), r = q(() => {
			let e = n.progress;
			return e && e.total > 0 ? Math.round(e.completed / e.total * 100) : 0;
		}), i = q(() => o(n.summary?.copied)), a = q(() => o(n.summary?.skipped));
		function o(e) {
			return Object.entries(e ?? {}).filter((e) => typeof e[1] == "number" && e[1] > 0).sort(([e], [t]) => e.localeCompare(t));
		}
		function s(e) {
			let n = e.indexOf(":"), r = n < 0 ? e : e.slice(0, n), i = n < 0 ? "" : e.slice(n + 1), a = `FVTT_SCENE_MERGER.Validation.Issues.${r.replace(".", "_")}`, o = t.t(a);
			return o === a ? e : i ? `${o} — ${i}` : o;
		}
		return (t, o) => (V(), H("footer", Nc, [F(n).status === "ready" ? (V(), H("div", Pc, [U("div", null, [U("h2", Fc, O(e.t("FVTT_SCENE_MERGER.Execution.Title")), 1), U("p", Ic, O(e.t("FVTT_SCENE_MERGER.Execution.ReadySummary", {
			count: F(n).selectedScenes.length,
			width: Math.round(F(n).arrangementBounds.width),
			height: Math.round(F(n).arrangementBounds.height)
		})), 1)]), U("div", Lc, [F(n).canMerge ? G("", !0) : (V(), H("span", Rc, O(e.t("FVTT_SCENE_MERGER.Execution.ResolveIssues")), 1)), U("button", {
			class: "tw:dui-btn tw:dui-btn-primary",
			type: "button",
			disabled: !F(n).canMerge,
			onClick: o[0] ||= (e) => F(n).merge()
		}, O(e.t("FVTT_SCENE_MERGER.Actions.Merge")), 9, zc)])])) : F(n).status === "merging" ? (V(), H("div", Bc, [
			U("div", Vc, [U("div", null, [U("h2", Hc, O(e.t("FVTT_SCENE_MERGER.Execution.Merging")), 1), U("p", Uc, [Yi(O(F(n).progress ? e.t(`FVTT_SCENE_MERGER.MergeStage.${F(n).progress.stage}`) : e.t("FVTT_SCENE_MERGER.MergeStage.validating")) + " ", 1), F(n).progress?.detail ? (V(), H("span", Wc, " · " + O(F(n).progress.detail), 1)) : G("", !0)])]), F(n).canCancel ? (V(), H("button", {
				key: 0,
				class: "tw:dui-btn tw:dui-btn-warning tw:dui-btn-outline tw:dui-btn-sm",
				type: "button",
				onClick: o[1] ||= (e) => F(n).cancelMerge()
			}, O(F(n).cancelRequested ? e.t("FVTT_SCENE_MERGER.Actions.Cancelling") : e.t("FVTT_SCENE_MERGER.Actions.Cancel")), 1)) : (V(), H("span", Gc, O(e.t("FVTT_SCENE_MERGER.Execution.CancellationClosed")), 1))]),
			U("progress", {
				class: "tw:dui-progress tw:w-full",
				value: r.value,
				max: "100"
			}, null, 8, Kc),
			U("div", qc, [U("span", null, O(e.t("FVTT_SCENE_MERGER.Execution.SourceSafety")), 1), U("span", null, O(r.value) + "%", 1)])
		])) : F(n).status === "success" && F(n).summary ? (V(), H("div", Jc, [
			U("div", Yc, [
				o[5] ||= U("span", { "aria-hidden": "true" }, "✓", -1),
				U("div", Xc, [U("h2", Zc, O(e.t("FVTT_SCENE_MERGER.Results.SuccessTitle", { name: F(n).summary.destinationSceneName })), 1), U("p", Qc, O(e.t("FVTT_SCENE_MERGER.Results.SuccessDimensions", {
					width: F(n).summary.destinationWidth,
					height: F(n).summary.destinationHeight,
					count: F(n).summary.sourceCount
				})), 1)]),
				U("button", {
					class: "tw:dui-btn tw:dui-btn-sm",
					type: "button",
					onClick: o[2] ||= (e) => F(n).openDestination()
				}, O(e.t("FVTT_SCENE_MERGER.Actions.OpenScene")), 1)
			]),
			U("div", $c, [
				U("section", el, [U("h3", tl, O(e.t("FVTT_SCENE_MERGER.Results.Copied")), 1), U("ul", nl, [(V(!0), H(B, null, L(i.value, ([t, n]) => (V(), H("li", {
					key: t,
					class: "tw:flex tw:justify-between tw:gap-2"
				}, [U("span", null, O(e.t(`FVTT_SCENE_MERGER.Documents.${t}`)), 1), U("strong", null, O(n), 1)]))), 128)), i.value.length === 0 ? (V(), H("li", rl, O(e.t("FVTT_SCENE_MERGER.Results.None")), 1)) : G("", !0)])]),
				U("section", il, [U("h3", al, O(e.t("FVTT_SCENE_MERGER.Results.Skipped")), 1), U("ul", ol, [(V(!0), H(B, null, L(a.value, ([t, n]) => (V(), H("li", {
					key: t,
					class: "tw:flex tw:justify-between tw:gap-2"
				}, [U("span", null, O(e.t(`FVTT_SCENE_MERGER.Documents.${t}`)), 1), U("strong", null, O(n), 1)]))), 128)), a.value.length === 0 ? (V(), H("li", sl, O(e.t("FVTT_SCENE_MERGER.Results.NoneSkipped")), 1)) : G("", !0)])]),
				U("section", cl, [U("h3", ll, O(e.t("FVTT_SCENE_MERGER.Results.Diagnostics")), 1), U("dl", ul, [
					U("dt", null, O(e.t("FVTT_SCENE_MERGER.Results.Rewritten")), 1),
					U("dd", dl, O(F(n).summary.referencesRewritten), 1),
					U("dt", null, O(e.t("FVTT_SCENE_MERGER.Results.Unresolved")), 1),
					U("dd", fl, O(F(n).summary.unresolvedReferences.length), 1),
					U("dt", null, O(e.t("FVTT_SCENE_MERGER.Results.Warnings")), 1),
					U("dd", pl, O(F(n).summary.warnings.length), 1)
				])]),
				U("section", ml, [U("h3", hl, O(e.t("FVTT_SCENE_MERGER.Results.Review")), 1), U("ul", gl, [
					(V(!0), H(B, null, L(F(n).summary.warnings, (e) => (V(), H("li", { key: e }, O(s(e)), 1))), 128)),
					(V(!0), H(B, null, L(F(n).summary.unresolvedReferences, (e) => (V(), H("li", { key: e }, O(e), 1))), 128)),
					!F(n).summary.warnings.length && !F(n).summary.unresolvedReferences.length ? (V(), H("li", _l, O(e.t("FVTT_SCENE_MERGER.Results.NoReviewItems")), 1)) : G("", !0)
				])])
			]),
			U("div", vl, [U("button", {
				class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-sm",
				type: "button",
				onClick: o[3] ||= (e) => F(n).returnToEditing()
			}, O(e.t("FVTT_SCENE_MERGER.Actions.MergeAnother")), 1)])
		])) : F(n).status === "failure" ? (V(), H("div", yl, [U("div", bl, [
			o[6] ||= U("span", { "aria-hidden": "true" }, "×", -1),
			U("div", xl, [
				U("h2", Sl, O(e.t("FVTT_SCENE_MERGER.Results.FailureTitle")), 1),
				U("p", Cl, O(e.t("FVTT_SCENE_MERGER.Results.FailureStage", { stage: e.t(`FVTT_SCENE_MERGER.MergeStage.${F(n).failureStage}`) })), 1),
				U("code", wl, O(F(n).failureMessage), 1),
				U("p", Tl, O(e.t("FVTT_SCENE_MERGER.Results.FailureSafety")), 1)
			]),
			U("button", {
				class: "tw:dui-btn tw:dui-btn-sm",
				type: "button",
				onClick: o[4] ||= (e) => F(n).returnToEditing()
			}, O(e.t("FVTT_SCENE_MERGER.Actions.BackToSetup")), 1)
		])])) : G("", !0)]));
	}
}), Dl = { class: "tw:flex tw:flex-wrap tw:items-end tw:justify-between tw:gap-2" }, Ol = { class: "tw:flex tw:flex-wrap tw:items-end tw:gap-2" }, kl = { class: "tw:dui-fieldset tw:m-0! tw:border-0! tw:p-0!" }, Al = {
	class: "tw:dui-fieldset-legend tw:py-0 tw:text-[0.68rem]",
	for: "scene-merger-snap-mode"
}, jl = ["value", "disabled"], Ml = { value: "none" }, Nl = { value: "pixel" }, Pl = { value: "grid" }, Fl = { value: "edge" }, Il = {
	key: 0,
	class: "tw:dui-fieldset tw:m-0! tw:w-24 tw:border-0! tw:p-0!"
}, Ll = {
	class: "tw:dui-fieldset-legend tw:py-0 tw:text-[0.68rem]",
	for: "scene-merger-snap-interval"
}, Rl = ["value", "disabled"], zl = {
	key: 1,
	class: "tw:dui-badge tw:dui-badge-outline tw:dui-badge-sm tw:mb-1.5"
}, Bl = { class: "tw:flex tw:items-center tw:gap-1" }, Vl = ["disabled", "aria-label"], Hl = { class: "tw:dui-badge tw:dui-badge-ghost tw:min-w-16 tw:justify-center" }, Ul = ["disabled", "aria-label"], Wl = ["disabled"], Gl = ["disabled"], Kl = /* @__PURE__ */ Yn({
	__name: "LayoutToolbar",
	props: { t: { type: Function } },
	emits: [
		"fit",
		"reset",
		"zoom"
	],
	setup(e, { emit: t }) {
		let n = t, r = Mc();
		function i(e) {
			r.setSnap(e.currentTarget.value);
		}
		function a(e) {
			r.setSnap(r.snap.mode, Number(e.currentTarget.value));
		}
		return (t, o) => (V(), H("div", Dl, [U("div", Ol, [
			U("fieldset", kl, [U("label", Al, O(e.t("FVTT_SCENE_MERGER.Layout.SnapMode")), 1), U("select", {
				id: "scene-merger-snap-mode",
				class: "tw:dui-select tw:dui-select-sm",
				value: F(r).snap.mode,
				disabled: !F(r).setupEditable,
				onChange: i
			}, [
				U("option", Ml, O(e.t("FVTT_SCENE_MERGER.Layout.Snap.none")), 1),
				U("option", Nl, O(e.t("FVTT_SCENE_MERGER.Layout.Snap.pixel")), 1),
				U("option", Pl, O(e.t("FVTT_SCENE_MERGER.Layout.Snap.grid")), 1),
				U("option", Fl, O(e.t("FVTT_SCENE_MERGER.Layout.Snap.edge")), 1)
			], 40, jl)]),
			F(r).snap.mode === "pixel" ? (V(), H("fieldset", Il, [U("label", Ll, O(e.t("FVTT_SCENE_MERGER.Layout.Interval")), 1), U("input", {
				id: "scene-merger-snap-interval",
				class: "tw:dui-input tw:dui-input-sm tw:w-full",
				type: "number",
				min: "1",
				step: "1",
				value: F(r).snap.pixelInterval,
				disabled: !F(r).setupEditable,
				onChange: a
			}, null, 40, Rl)])) : G("", !0),
			F(r).snap.mode === "grid" ? (V(), H("span", zl, O(e.t("FVTT_SCENE_MERGER.Layout.GridSize", { size: F(r).snap.gridSize })), 1)) : G("", !0)
		]), U("div", Bl, [
			U("button", {
				class: "tw:dui-btn tw:dui-btn-sm tw:dui-btn-square",
				type: "button",
				disabled: !F(r).setupEditable,
				"aria-label": e.t("FVTT_SCENE_MERGER.Layout.ZoomOut"),
				onClick: o[0] ||= (e) => n("zoom", .8)
			}, " − ", 8, Vl),
			U("span", Hl, O(Math.round(F(r).view.zoom * 100)) + "%", 1),
			U("button", {
				class: "tw:dui-btn tw:dui-btn-sm tw:dui-btn-square",
				type: "button",
				disabled: !F(r).setupEditable,
				"aria-label": e.t("FVTT_SCENE_MERGER.Layout.ZoomIn"),
				onClick: o[1] ||= (e) => n("zoom", 1.25)
			}, " + ", 8, Ul),
			U("button", {
				class: "tw:dui-btn tw:dui-btn-sm",
				type: "button",
				disabled: !F(r).setupEditable,
				onClick: o[2] ||= (e) => n("fit")
			}, O(e.t("FVTT_SCENE_MERGER.Layout.ZoomFit")), 9, Wl),
			U("button", {
				class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-sm",
				type: "button",
				disabled: !F(r).setupEditable,
				onClick: o[3] ||= (e) => n("reset")
			}, O(e.t("FVTT_SCENE_MERGER.Layout.ResetView")), 9, Gl)
		])]));
	}
}), ql = ["aria-disabled"], Jl = { class: "tw:absolute tw:-top-6 tw:left-0 tw:whitespace-nowrap tw:text-[0.68rem] tw:text-accent" }, Yl = [
	"disabled",
	"aria-describedby",
	"aria-label",
	"onPointerdown",
	"onKeydown"
], Xl = ["src"], Zl = { class: "tw:absolute tw:inset-x-2 tw:top-1.5 tw:min-w-0" }, Ql = { class: "tw:block tw:truncate tw:text-xs" }, $l = { class: "tw:block tw:truncate tw:text-[0.65rem] tw:opacity-80" }, eu = { class: "tw:absolute tw:right-1.5 tw:bottom-1 tw:rounded-field tw:bg-neutral/80 tw:px-1.5 tw:py-0.5 tw:text-[0.62rem]" }, tu = ["id"], nu = {
	key: 1,
	class: "tw:pointer-events-none tw:absolute tw:inset-0 tw:flex tw:items-center tw:justify-center tw:p-8 tw:text-center tw:text-sm tw:opacity-60"
}, ru = { class: "tw:pointer-events-none tw:absolute tw:right-2 tw:bottom-2 tw:rounded-field tw:bg-base-300/85 tw:px-2 tw:py-1 tw:text-[0.65rem] tw:opacity-75" }, iu = /* @__PURE__ */ Yn({
	__name: "WorkspaceCanvas",
	props: { t: { type: Function } },
	setup(e, { expose: t }) {
		let n = Mc(), r = /* @__PURE__ */ P(null), i = /* @__PURE__ */ P(null), a = q(() => new Map(n.availableScenes.map((e) => [e.id, e]))), o = q(() => new Set(n.overlaps.flatMap((e) => [e.firstSceneId, e.secondSceneId]))), s = q(() => {
			let e = /* @__PURE__ */ new Set(), t = n.placements, r = (e, t) => Math.abs(e - t) < .01, i = (e, t, n, r) => Math.min(t, r) > Math.max(e, n);
			for (let [n, a] of t.entries()) for (let o of t.slice(n + 1)) {
				let t = (r(a.x + a.width, o.x) || r(o.x + o.width, a.x)) && i(a.y, a.y + a.height, o.y, o.y + o.height), n = (r(a.y + a.height, o.y) || r(o.y + o.height, a.y)) && i(a.x, a.x + a.width, o.x, o.x + o.width);
				(t || n) && (e.add(a.sceneId), e.add(o.sceneId));
			}
			return e;
		}), c = q(() => ({
			height: r.value?.clientHeight ?? 480,
			width: r.value?.clientWidth ?? 800
		}));
		function l(e) {
			return {
				height: `${Math.max(8, e.height * n.view.zoom)}px`,
				left: `${n.view.panX + e.x * n.view.zoom}px`,
				top: `${n.view.panY + e.y * n.view.zoom}px`,
				width: `${Math.max(8, e.width * n.view.zoom)}px`,
				zIndex: e.order + 2
			};
		}
		let u = q(() => ({
			height: `${n.arrangementBounds.height * n.view.zoom}px`,
			left: `${n.view.panX + n.arrangementBounds.minX * n.view.zoom}px`,
			top: `${n.view.panY + n.arrangementBounds.minY * n.view.zoom}px`,
			width: `${n.arrangementBounds.width * n.view.zoom}px`
		})), d = q(() => ({
			backgroundPosition: `${n.view.panX}px ${n.view.panY}px`,
			backgroundSize: `${Math.max(12, 100 * n.view.zoom)}px ${Math.max(12, 100 * n.view.zoom)}px`
		}));
		function f(e) {
			e.currentTarget.setPointerCapture(e.pointerId);
		}
		function p(e) {
			e.button === 0 && (f(e), i.value = {
				kind: "pan",
				panX: n.view.panX,
				panY: n.view.panY,
				pointerId: e.pointerId,
				startX: e.clientX,
				startY: e.clientY
			});
		}
		function m(e, t) {
			e.button === 0 && (e.stopPropagation(), f(e), i.value = {
				kind: "scene",
				originX: t.x,
				originY: t.y,
				pointerId: e.pointerId,
				sceneId: t.sceneId,
				startX: e.clientX,
				startY: e.clientY
			});
		}
		function h(e) {
			let t = i.value;
			if (!t || t.pointerId !== e.pointerId) return;
			let r = e.clientX - t.startX, a = e.clientY - t.startY;
			t.kind === "pan" ? n.setView({
				zoom: n.view.zoom,
				panX: t.panX + r,
				panY: t.panY + a
			}) : n.moveScene(t.sceneId, t.originX + r / n.view.zoom, t.originY + a / n.view.zoom, !0);
		}
		function g(e) {
			let t = i.value;
			if (!(!t || t.pointerId !== e.pointerId)) {
				if (t.kind === "scene") {
					let e = n.placements.find(({ sceneId: e }) => e === t.sceneId);
					e && n.moveScene(t.sceneId, e.x, e.y, !0), n.validateNow();
				}
				i.value = null;
			}
		}
		function _(e) {
			let t = r.value?.getBoundingClientRect();
			t && n.zoomAt(n.view.zoom * (e.deltaY < 0 ? 1.14 : .88), {
				x: e.clientX - t.left,
				y: e.clientY - t.top
			});
		}
		function v(e, t) {
			let r = e.shiftKey ? 50 : 10, i = {
				ArrowDown: [0, r],
				ArrowLeft: [-r, 0],
				ArrowRight: [r, 0],
				ArrowUp: [0, -r]
			}[e.key];
			i && (e.preventDefault(), n.moveScene(t.sceneId, t.x + i[0], t.y + i[1], !0), n.validateNow());
		}
		function y() {
			n.fitView(c.value);
		}
		function b() {
			n.resetView();
		}
		function x(e) {
			n.locateScene(e, c.value);
		}
		function ee(e) {
			n.zoomAt(n.view.zoom * e, {
				x: c.value.width / 2,
				y: c.value.height / 2
			});
		}
		return t({
			fit: y,
			locate: x,
			reset: b,
			zoom: ee
		}), (t, i) => (V(), H("div", {
			ref_key: "workspace",
			ref: r,
			class: D(["layout-workspace tw:relative tw:min-h-[440px] tw:touch-none tw:overflow-hidden tw:rounded-box tw:border tw:border-base-300 tw:bg-base-100 tw:select-none", { "tw:pointer-events-none tw:opacity-70": !F(n).setupEditable }]),
			"aria-disabled": !F(n).setupEditable,
			style: E(d.value),
			onPointerdown: p,
			onPointermove: h,
			onPointerup: g,
			onPointercancel: g,
			onWheel: ho(_, ["prevent"])
		}, [
			F(n).placements.length ? (V(), H("div", {
				key: 0,
				class: "layout-total-bounds tw:pointer-events-none tw:absolute tw:border tw:border-dashed tw:border-accent/70",
				style: E(u.value)
			}, [U("span", Jl, O(e.t("FVTT_SCENE_MERGER.Layout.TotalBounds")), 1)], 4)) : G("", !0),
			(V(!0), H(B, null, L(F(n).placements, (t) => (V(), H("button", {
				key: t.sceneId,
				class: D(["layout-scene tw:absolute tw:overflow-hidden tw:rounded-field tw:border-2 tw:border-secondary tw:bg-neutral tw:p-0 tw:text-left tw:text-neutral-content tw:shadow-lg tw:focus:outline-2 tw:focus:outline-accent", {
					"layout-scene-overlap": o.value.has(t.sceneId),
					"tw:outline-2 tw:outline-offset-2 tw:outline-success": s.value.has(t.sceneId)
				}]),
				style: E(l(t)),
				type: "button",
				disabled: !F(n).setupEditable,
				"aria-describedby": s.value.has(t.sceneId) ? `scene-alignment-${t.sceneId}` : void 0,
				"aria-label": e.t("FVTT_SCENE_MERGER.Layout.DragScene", { name: a.value.get(t.sceneId)?.name ?? t.sceneId }),
				onPointerdown: (e) => m(e, t),
				onKeydown: (e) => v(e, t)
			}, [
				a.value.get(t.sceneId)?.thumbnail ? (V(), H("img", {
					key: 0,
					class: "tw:absolute tw:inset-0 tw:h-full tw:w-full tw:object-cover tw:opacity-45",
					src: a.value.get(t.sceneId)?.thumbnail ?? "",
					alt: "",
					draggable: "false"
				}, null, 8, Xl)) : G("", !0),
				i[0] ||= U("span", { class: "tw:absolute tw:inset-0 tw:bg-neutral/30" }, null, -1),
				U("span", Zl, [U("strong", Ql, O(a.value.get(t.sceneId)?.name), 1), U("small", $l, O(t.width) + " × " + O(t.height), 1)]),
				U("span", eu, O(Math.round(t.x)) + ", " + O(Math.round(t.y)), 1),
				s.value.has(t.sceneId) ? (V(), H("span", {
					key: 1,
					id: `scene-alignment-${t.sceneId}`,
					class: "tw:dui-badge tw:dui-badge-success tw:dui-badge-xs tw:pointer-events-none tw:absolute tw:bottom-1 tw:left-1.5"
				}, O(e.t("FVTT_SCENE_MERGER.Layout.EdgesAligned")), 9, tu)) : G("", !0)
			], 46, Yl))), 128)),
			F(n).placements.length === 0 ? (V(), H("div", nu, O(e.t("FVTT_SCENE_MERGER.Layout.Empty")), 1)) : G("", !0),
			U("div", ru, O(e.t("FVTT_SCENE_MERGER.Layout.PanZoomHint")), 1)
		], 46, ql));
	}
}), au = { class: "tw:dui-card tw:dui-card-border tw:min-w-0 tw:bg-base-200" }, ou = { class: "tw:dui-card-body tw:gap-3 tw:p-3" }, su = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-2" }, cu = { class: "tw:dui-card-title tw:text-base" }, lu = { class: "tw:m-0 tw:text-xs tw:opacity-65" }, uu = { class: "tw:flex tw:flex-wrap tw:gap-1" }, du = { class: "tw:dui-badge tw:dui-badge-outline tw:dui-badge-sm" }, fu = { class: "tw:dui-badge tw:dui-badge-outline tw:dui-badge-sm" }, pu = { class: "tw:dui-badge tw:dui-badge-secondary tw:dui-badge-sm" }, mu = {
	key: 0,
	role: "alert",
	class: "tw:dui-alert tw:dui-alert-warning tw:dui-alert-soft tw:py-2 tw:text-sm"
}, hu = /* @__PURE__ */ Yn({
	__name: "LayoutPanel",
	props: { t: { type: Function } },
	setup(e, { expose: t }) {
		let n = Mc(), r = /* @__PURE__ */ P(null);
		Vn(() => n.placements.length, async (e, t) => {
			e > 0 && t === 0 && (await xn(), r.value?.fit());
		});
		function i(e) {
			r.value?.locate(e);
		}
		return t({ locateScene: i }), (t, i) => (V(), H("section", au, [U("div", ou, [
			U("div", su, [U("div", null, [U("h2", cu, O(e.t("FVTT_SCENE_MERGER.Layout.Title")), 1), U("p", lu, O(e.t("FVTT_SCENE_MERGER.Layout.Help")), 1)]), U("div", uu, [
				U("span", du, "X " + O(Math.round(F(n).arrangementBounds.minX)) + " → " + O(Math.round(F(n).arrangementBounds.maxX)), 1),
				U("span", fu, "Y " + O(Math.round(F(n).arrangementBounds.minY)) + " → " + O(Math.round(F(n).arrangementBounds.maxY)), 1),
				U("span", pu, O(Math.round(F(n).arrangementBounds.width).toLocaleString()) + " × " + O(Math.round(F(n).arrangementBounds.height).toLocaleString()), 1)
			])]),
			W(Kl, {
				t: e.t,
				onFit: i[0] ||= (e) => r.value?.fit(),
				onReset: i[1] ||= (e) => r.value?.reset(),
				onZoom: i[2] ||= (e) => r.value?.zoom(e)
			}, null, 8, ["t"]),
			W(iu, {
				ref_key: "workspaceComponent",
				ref: r,
				t: e.t
			}, null, 8, ["t"]),
			F(n).overlaps.length ? (V(), H("div", mu, [i[3] ||= U("span", { "aria-hidden": "true" }, "△", -1), U("span", null, O(e.t("FVTT_SCENE_MERGER.Layout.OverlapWarning", { count: F(n).overlaps.length })), 1)])) : G("", !0)
		])]));
	}
}), gu = { class: "tw:dui-card tw:dui-card-border tw:bg-base-200" }, _u = { class: "tw:dui-card-body tw:@container tw:gap-4 tw:p-3" }, vu = { class: "tw:dui-card-title tw:text-base" }, yu = { class: "tw:m-0 tw:text-xs tw:opacity-65" }, bu = { class: "tw:grid tw:gap-4" }, xu = { class: "tw:dui-fieldset tw:min-w-0 tw:rounded-box tw:border tw:border-base-300 tw:bg-base-300/50 tw:p-3" }, Su = { class: "tw:dui-fieldset-legend" }, Cu = { class: "tw:grid tw:gap-2 tw:@4xl:grid-cols-2" }, wu = { class: "tw:min-w-0" }, Tu = { class: "tw:block tw:text-sm tw:font-medium" }, Eu = { class: "tw:block tw:text-[0.68rem] tw:opacity-60" }, Du = {
	key: 0,
	class: "tw:dui-badge tw:dui-badge-warning tw:dui-badge-soft tw:dui-badge-xs tw:mt-1"
}, Ou = [
	"checked",
	"disabled",
	"onChange"
], ku = { class: "tw:grid tw:items-start tw:gap-4 tw:@4xl:grid-cols-2" }, Au = { class: "tw:dui-fieldset tw:min-w-0 tw:rounded-box tw:border tw:border-base-300 tw:bg-base-300/50 tw:p-3" }, ju = { class: "tw:dui-fieldset-legend" }, Mu = { class: "tw:mt-0 tw:mb-2 tw:text-[0.68rem] tw:opacity-65" }, Nu = { class: "tw:grid tw:gap-3" }, Pu = { class: "tw:grid tw:min-w-0 tw:gap-1" }, Fu = {
	class: "tw:dui-label tw:text-xs",
	for: "scene-merger-grid-type"
}, Iu = ["value", "disabled"], Lu = ["value"], Ru = { class: "tw:grid tw:gap-3 tw:@xl:grid-cols-2" }, zu = { class: "tw:grid tw:min-w-0 tw:gap-1" }, Bu = {
	class: "tw:dui-label tw:text-xs",
	for: "scene-merger-grid-size"
}, Vu = ["value", "disabled"], Hu = { class: "tw:grid tw:min-w-0 tw:gap-1" }, Uu = {
	class: "tw:dui-label tw:text-xs",
	for: "scene-merger-grid-distance"
}, Wu = ["value", "disabled"], Gu = { class: "tw:grid tw:min-w-0 tw:gap-1" }, Ku = {
	class: "tw:dui-label tw:text-xs",
	for: "scene-merger-grid-units"
}, qu = ["value", "disabled"], Ju = { class: "tw:dui-fieldset tw:min-w-0 tw:rounded-box tw:border tw:border-base-300 tw:bg-base-300/50 tw:p-3" }, Yu = { class: "tw:dui-fieldset-legend" }, Xu = { class: "tw:grid tw:gap-3 tw:@xl:grid-cols-2" }, Zu = { class: "tw:grid tw:min-w-0 tw:gap-1" }, Qu = {
	class: "tw:dui-label tw:text-xs",
	for: "scene-merger-name"
}, $u = ["value", "disabled"], ed = { class: "tw:grid tw:min-w-0 tw:gap-1" }, td = {
	class: "tw:dui-label tw:text-xs",
	for: "scene-merger-folder"
}, nd = ["value", "disabled"], rd = { value: "" }, id = ["value"], ad = { class: "tw:mt-3 tw:grid tw:gap-2" }, od = { class: "tw:min-w-0" }, sd = { class: "tw:block tw:text-sm" }, cd = { class: "tw:block tw:text-[0.68rem] tw:opacity-60" }, ld = [
	"checked",
	"disabled",
	"onChange"
], ud = /* @__PURE__ */ Yn({
	__name: "MergeOptionsPanel",
	props: { t: { type: Function } },
	setup(e) {
		let t = Mc(), n = [
			"backgrounds",
			"tiles",
			"walls",
			"lights",
			"sounds",
			"drawings",
			"notes",
			"regions",
			"tokens",
			"templates"
		], r = [
			0,
			1,
			2,
			3,
			4,
			5
		];
		function i(e, n) {
			t.setContent(e, n.currentTarget.checked);
		}
		function a(e) {
			t.setDestination("name", e.currentTarget.value.trim());
		}
		function o(e) {
			t.setDestination("folderId", e.currentTarget.value || null);
		}
		function s(e, n) {
			t.setDestination(e, n.currentTarget.checked);
		}
		function c(e, n) {
			let r = n.currentTarget;
			t.setOutputGrid(e, Number(r.value)), r.value = String(t.outputGrid[e]);
		}
		function l(e) {
			let n = e.currentTarget;
			t.setOutputGrid("units", n.value.trim()), n.value = t.outputGrid.units;
		}
		return (u, d) => (V(), H("section", gu, [U("div", _u, [U("div", null, [U("h2", vu, O(e.t("FVTT_SCENE_MERGER.Options.Title")), 1), U("p", yu, O(e.t("FVTT_SCENE_MERGER.Options.Help")), 1)]), U("div", bu, [U("fieldset", xu, [U("legend", Su, O(e.t("FVTT_SCENE_MERGER.Options.ContentTitle")), 1), U("div", Cu, [(V(), H(B, null, L(n, (n) => U("label", {
			key: n,
			class: "tw:grid tw:min-h-16 tw:min-w-0 tw:grid-cols-[minmax(0,1fr)_auto] tw:items-center tw:gap-3 tw:rounded-field tw:bg-base-200 tw:px-3 tw:py-2"
		}, [U("span", wu, [
			U("span", Tu, O(e.t(`FVTT_SCENE_MERGER.Options.Content.${n}.Label`)), 1),
			U("span", Eu, O(e.t(`FVTT_SCENE_MERGER.Options.Content.${n}.Help`)), 1),
			F(Ec)[n] === "unavailable" ? (V(), H("span", Du, O(e.t("FVTT_SCENE_MERGER.Options.UnavailableV14")), 1)) : G("", !0)
		]), U("input", {
			class: "tw:dui-toggle tw:dui-toggle-sm tw:m-0! tw:shrink-0 tw:before:relative! tw:before:h-full! tw:before:w-full! tw:before:rounded-selector! tw:before:text-inherit! tw:before:content-['']! tw:after:content-none! tw:focus-visible:before:outline-none!",
			type: "checkbox",
			checked: F(t).content[n],
			disabled: F(Ec)[n] === "unavailable" || !F(t).setupEditable,
			onChange: (e) => i(n, e)
		}, null, 40, Ou)])), 64))])]), U("div", ku, [U("fieldset", Au, [
			U("legend", ju, O(e.t("FVTT_SCENE_MERGER.Options.OutputGrid.Title")), 1),
			U("p", Mu, O(e.t("FVTT_SCENE_MERGER.Options.OutputGrid.Help")), 1),
			U("div", Nu, [
				U("div", Pu, [U("label", Fu, O(e.t("FVTT_SCENE_MERGER.Options.OutputGrid.Type")), 1), U("select", {
					id: "scene-merger-grid-type",
					class: "tw:dui-select tw:dui-select-sm tw:w-full",
					value: F(t).outputGrid.type,
					disabled: !F(t).setupEditable,
					onChange: d[0] ||= (e) => c("type", e)
				}, [(V(), H(B, null, L(r, (t) => U("option", {
					key: t,
					value: t
				}, O(e.t(`FVTT_SCENE_MERGER.Options.OutputGrid.Types.${t}`)), 9, Lu)), 64))], 40, Iu)]),
				U("div", Ru, [U("div", zu, [U("label", Bu, O(e.t("FVTT_SCENE_MERGER.Options.OutputGrid.Size")), 1), U("input", {
					id: "scene-merger-grid-size",
					class: "tw:dui-input tw:dui-input-sm tw:w-full",
					type: "number",
					min: "1",
					step: "1",
					value: F(t).outputGrid.size,
					disabled: !F(t).setupEditable,
					onChange: d[1] ||= (e) => c("size", e)
				}, null, 40, Vu)]), U("div", Hu, [U("label", Uu, O(e.t("FVTT_SCENE_MERGER.Options.OutputGrid.Distance")), 1), U("input", {
					id: "scene-merger-grid-distance",
					class: "tw:dui-input tw:dui-input-sm tw:w-full",
					type: "number",
					min: "0.01",
					step: "any",
					value: F(t).outputGrid.distance,
					disabled: !F(t).setupEditable,
					onChange: d[2] ||= (e) => c("distance", e)
				}, null, 40, Wu)])]),
				U("div", Gu, [U("label", Ku, O(e.t("FVTT_SCENE_MERGER.Options.OutputGrid.Units")), 1), U("input", {
					id: "scene-merger-grid-units",
					class: "tw:dui-input tw:dui-input-sm tw:w-full",
					type: "text",
					value: F(t).outputGrid.units,
					disabled: !F(t).setupEditable,
					onChange: l
				}, null, 40, qu)])
			])
		]), U("fieldset", Ju, [
			U("legend", Yu, O(e.t("FVTT_SCENE_MERGER.Options.DestinationTitle")), 1),
			U("div", Xu, [U("div", Zu, [U("label", Qu, O(e.t("FVTT_SCENE_MERGER.Options.Name")), 1), U("input", {
				id: "scene-merger-name",
				class: "tw:dui-input tw:dui-input-sm tw:w-full",
				type: "text",
				value: F(t).destination.name,
				disabled: !F(t).setupEditable,
				onChange: a
			}, null, 40, $u)]), U("div", ed, [U("label", td, O(e.t("FVTT_SCENE_MERGER.Options.Folder")), 1), U("select", {
				id: "scene-merger-folder",
				class: "tw:dui-select tw:dui-select-sm tw:w-full",
				value: F(t).destination.folderId ?? "",
				disabled: !F(t).setupEditable,
				onChange: o
			}, [U("option", rd, O(e.t("FVTT_SCENE_MERGER.Selection.RootFolder")), 1), (V(!0), H(B, null, L(F(t).folderChoices, (e) => (V(), H("option", {
				key: e.id,
				value: e.id
			}, O(e.name), 9, id))), 128))], 40, nd)])]),
			U("div", ad, [(V(), H(B, null, L([
				"navigation",
				"openAfterMerge",
				"activateAfterMerge",
				"lockBackgroundTiles"
			], (n) => U("label", {
				key: n,
				class: "tw:grid tw:min-h-14 tw:grid-cols-[minmax(0,1fr)_auto] tw:items-center tw:gap-3 tw:rounded-field tw:bg-base-200 tw:px-3 tw:py-2"
			}, [U("span", od, [U("span", sd, O(e.t(`FVTT_SCENE_MERGER.Options.Destination.${n}.Label`)), 1), U("span", cd, O(e.t(`FVTT_SCENE_MERGER.Options.Destination.${n}.Help`)), 1)]), U("input", {
				class: "tw:dui-checkbox tw:dui-checkbox-sm tw:m-0! tw:shrink-0 tw:before:relative! tw:before:block! tw:before:h-full! tw:before:w-full! tw:before:content-['']! tw:after:content-none!",
				type: "checkbox",
				checked: F(t).destination[n],
				disabled: !F(t).setupEditable,
				onChange: (e) => s(n, e)
			}, null, 40, ld)])), 64))])
		])])])])]));
	}
}), dd = { class: "tw:dui-collapse tw:dui-collapse-arrow tw:mt-1 tw:border tw:border-base-300" }, fd = { class: "tw:dui-collapse-title tw:min-h-0 tw:px-2 tw:py-1 tw:text-[0.7rem] tw:font-medium" }, pd = { class: "tw:dui-collapse-content tw:grid tw:gap-2 tw:px-2 tw:pb-2" }, md = { class: "tw:flex tw:flex-wrap tw:gap-1" }, hd = ["disabled", "onClick"], gd = { class: "tw:dui-fieldset tw:m-0! tw:min-w-0 tw:border-0! tw:p-0!" }, _d = ["for"], vd = { class: "tw:flex tw:min-w-0 tw:gap-1" }, yd = { class: "tw:dui-input tw:dui-input-xs tw:min-w-0 tw:flex-1" }, bd = [
	"id",
	"value",
	"disabled"
], xd = ["disabled"], Sd = { class: "tw:dui-fieldset tw:m-0! tw:min-w-0 tw:border-0! tw:p-0!" }, Cd = { class: "tw:dui-fieldset-legend tw:text-[0.68rem]" }, wd = { class: "tw:grid tw:grid-cols-2 tw:gap-x-3 tw:gap-y-2" }, Td = [
	"checked",
	"disabled",
	"onChange"
], Ed = { class: "tw:min-w-0 tw:break-words" }, Dd = /* @__PURE__ */ Yn({
	__name: "StagedSceneControls",
	props: {
		scene: {},
		t: { type: Function }
	},
	setup(e) {
		let t = e, n = Mc(), r = [
			"backgrounds",
			"tiles",
			"walls",
			"lights",
			"sounds",
			"drawings",
			"notes",
			"regions",
			"tokens",
			"templates"
		], i = [
			"map",
			"encounter",
			"all",
			"none"
		], a = q(() => n.placements.find(({ sceneId: e }) => e === t.scene.id)), o = q(() => a.value ? Math.round(a.value.width / t.scene.dimensions.sceneWidth * 1e4) / 100 : 100);
		function s(e) {
			let r = e.currentTarget;
			n.setSceneScale(t.scene.id, Number(r.value) / 100), r.value = String(o.value);
		}
		function c(e, r) {
			n.setSceneContent(t.scene.id, e, r.currentTarget.checked);
		}
		return (t, l) => (V(), H("details", dd, [U("summary", fd, O(e.t("FVTT_SCENE_MERGER.Selection.SourceSettings")) + " · " + O(o.value) + "% ", 1), U("div", pd, [
			U("div", md, [(V(), H(B, null, L(i, (t) => U("button", {
				key: t,
				class: "tw:dui-btn tw:dui-btn-xs",
				type: "button",
				disabled: !F(n).setupEditable,
				onClick: (r) => F(n).setSceneContentPreset(e.scene.id, t)
			}, O(e.t(`FVTT_SCENE_MERGER.Selection.Presets.${t}`)), 9, hd)), 64))]),
			U("fieldset", gd, [U("label", {
				class: "tw:dui-label tw:pb-0 tw:text-[0.68rem]",
				for: `scene-merger-scale-${e.scene.id}`
			}, O(e.t("FVTT_SCENE_MERGER.Selection.Scale")), 9, _d), U("div", vd, [U("label", yd, [U("input", {
				id: `scene-merger-scale-${e.scene.id}`,
				class: "tw:min-w-0",
				type: "number",
				min: "1",
				step: "0.01",
				value: o.value,
				disabled: !F(n).setupEditable,
				onChange: s
			}, null, 40, bd), l[1] ||= U("span", { "aria-hidden": "true" }, "%", -1)]), U("button", {
				class: "tw:dui-btn tw:dui-btn-xs",
				type: "button",
				disabled: !F(n).setupEditable,
				onClick: l[0] ||= (t) => F(n).matchSceneGrid(e.scene.id)
			}, O(e.t("FVTT_SCENE_MERGER.Selection.MatchGrid")), 9, xd)])]),
			U("fieldset", Sd, [U("legend", Cd, O(e.t("FVTT_SCENE_MERGER.Selection.ContentFromSource")), 1), U("div", wd, [(V(), H(B, null, L(r, (t) => U("label", {
				key: t,
				class: "tw:dui-label tw:min-w-0 tw:justify-start tw:gap-2 tw:text-xs"
			}, [U("input", {
				class: "tw:dui-checkbox tw:dui-checkbox-sm tw:m-0! tw:shrink-0 tw:before:relative! tw:before:block! tw:before:h-full! tw:before:w-full! tw:before:content-['']! tw:after:content-none!",
				type: "checkbox",
				checked: a.value?.content?.[t] ?? F(n).content[t],
				disabled: !F(n).setupEditable || F(Ec)[t] === "unavailable",
				onChange: (e) => c(t, e)
			}, null, 40, Td), U("span", Ed, O(e.t(`FVTT_SCENE_MERGER.Options.Content.${t}.Label`)), 1)])), 64))])])
		])]));
	}
}), Od = { class: "tw:dui-card tw:dui-card-border tw:min-h-0 tw:bg-base-200" }, kd = { class: "tw:dui-card-body tw:min-h-0 tw:gap-3 tw:p-3" }, Ad = { class: "tw:flex tw:items-center tw:justify-between tw:gap-2" }, jd = { class: "tw:dui-card-title tw:text-base" }, Md = { class: "tw:m-0 tw:text-xs tw:opacity-65" }, Nd = { class: "tw:dui-badge tw:dui-badge-neutral tw:dui-badge-sm" }, Pd = { class: "tw:dui-input tw:dui-input-sm tw:flex tw:w-full tw:items-center tw:gap-2" }, Fd = ["disabled", "placeholder"], Id = { class: "scene-list-scroll tw:min-h-32 tw:flex-1 tw:overflow-auto tw:rounded-box tw:bg-base-300/60 tw:p-1" }, Ld = {
	key: 0,
	class: "tw:m-0 tw:flex tw:[list-style:none] tw:flex-col tw:gap-1 tw:p-0"
}, Rd = { class: "tw:h-10 tw:w-12 tw:overflow-hidden tw:rounded-field tw:bg-neutral" }, zd = ["src"], Bd = {
	key: 1,
	class: "tw:flex tw:h-full tw:items-center tw:justify-center tw:text-xs tw:opacity-50",
	"aria-hidden": "true"
}, Vd = { class: "tw:min-w-0" }, Hd = { class: "tw:truncate tw:text-sm tw:font-semibold" }, Ud = { class: "tw:truncate tw:text-[0.7rem] tw:opacity-65" }, Wd = { class: "tw:text-[0.7rem] tw:opacity-65" }, Gd = { class: "tw:text-[0.68rem] tw:opacity-60" }, Kd = [
	"disabled",
	"aria-label",
	"onClick"
], qd = {
	key: 1,
	class: "tw:m-3 tw:text-center tw:text-sm tw:opacity-60"
}, Jd = { class: "tw:flex tw:items-center tw:justify-between tw:gap-2" }, Yd = { class: "tw:m-0 tw:text-sm tw:font-semibold" }, Xd = ["disabled"], Zd = { class: "tw:m-0 tw:flex tw:max-h-96 tw:[list-style:none] tw:flex-col tw:overflow-auto tw:p-0" }, Qd = { class: "tw:dui-badge tw:dui-badge-ghost tw:dui-badge-xs" }, $d = { class: "tw:min-w-0" }, ef = { class: "tw:truncate tw:text-sm tw:font-medium" }, tf = { class: "tw:text-[0.68rem] tw:opacity-60" }, nf = { class: "tw:flex tw:gap-0.5" }, rf = [
	"disabled",
	"aria-label",
	"onClick"
], af = [
	"disabled",
	"aria-label",
	"onClick"
], of = [
	"disabled",
	"aria-label",
	"onClick"
], sf = [
	"disabled",
	"aria-label",
	"onClick"
], cf = /* @__PURE__ */ Yn({
	__name: "SceneSelectionPanel",
	props: { t: { type: Function } },
	emits: ["locate"],
	setup(e, { emit: t }) {
		let n = t, r = Mc(), i = /* @__PURE__ */ P(""), a = q(() => {
			let e = i.value.trim().toLocaleLowerCase();
			return r.availableScenes.filter((t) => r.selectedSceneIds.includes(t.id) ? !1 : e ? `${t.name} ${t.folderName ?? ""}`.toLocaleLowerCase().includes(e) : !0);
		});
		function o(e, t) {
			return `${e.toLocaleString()} × ${t.toLocaleString()}`;
		}
		return (t, s) => (V(), H("aside", Od, [U("div", kd, [
			U("div", Ad, [U("div", null, [U("h2", jd, O(e.t("FVTT_SCENE_MERGER.Selection.Title")), 1), U("p", Md, O(e.t("FVTT_SCENE_MERGER.Selection.Help")), 1)]), U("span", Nd, O(F(r).selectedScenes.length), 1)]),
			U("label", Pd, [s[2] ||= U("span", { "aria-hidden": "true" }, "⌕", -1), Pn(U("input", {
				"onUpdate:modelValue": s[0] ||= (e) => i.value = e,
				class: "tw:min-w-0 tw:flex-1",
				type: "search",
				disabled: !F(r).setupEditable,
				placeholder: e.t("FVTT_SCENE_MERGER.Selection.Search")
			}, null, 8, Fd), [[fo, i.value]])]),
			U("div", Id, [a.value.length ? (V(), H("ul", Ld, [(V(!0), H(B, null, L(a.value, (t) => (V(), H("li", {
				key: t.id,
				class: "tw:grid tw:grid-cols-[3rem_minmax(0,1fr)_auto] tw:items-center tw:gap-2 tw:border-b tw:border-base-300 tw:bg-base-200 tw:p-2"
			}, [
				U("div", Rd, [t.thumbnail ? (V(), H("img", {
					key: 0,
					class: "tw:h-full tw:w-full tw:object-cover",
					src: t.thumbnail,
					alt: "",
					decoding: "async",
					loading: "lazy"
				}, null, 8, zd)) : (V(), H("span", Bd, "▧"))]),
				U("div", Vd, [
					U("div", Hd, O(t.name), 1),
					U("div", Ud, O(t.folderName ?? e.t("FVTT_SCENE_MERGER.Selection.RootFolder")), 1),
					U("div", Wd, O(o(t.dimensions.sceneWidth, t.dimensions.sceneHeight)), 1),
					U("div", Gd, O(e.t("FVTT_SCENE_MERGER.Selection.GridDetails", {
						type: t.grid.type,
						size: t.grid.size,
						distance: t.grid.distance,
						units: t.grid.units
					})), 1)
				]),
				U("button", {
					class: "tw:dui-btn tw:dui-btn-sm tw:dui-btn-square",
					type: "button",
					disabled: !F(r).setupEditable || !t.canMerge,
					"aria-label": e.t("FVTT_SCENE_MERGER.Selection.AddNamed", { name: t.name }),
					onClick: (e) => F(r).addScene(t.id)
				}, " + ", 8, Kd)
			]))), 128))])) : (V(), H("p", qd, O(e.t("FVTT_SCENE_MERGER.Selection.NoMatches")), 1))]),
			U("div", Jd, [U("h3", Yd, O(e.t("FVTT_SCENE_MERGER.Selection.Selected")), 1), U("button", {
				class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-xs",
				type: "button",
				disabled: !F(r).setupEditable || F(r).selectedScenes.length === 0,
				onClick: s[1] ||= (e) => F(r).clearScenes()
			}, O(e.t("FVTT_SCENE_MERGER.Actions.Clear")), 9, Xd)]),
			U("ol", Zd, [(V(!0), H(B, null, L(F(r).selectedScenes, (t, i) => (V(), H("li", {
				key: t.id,
				class: "tw:grid tw:grid-cols-[1.5rem_minmax(0,1fr)_auto] tw:items-start tw:gap-1 tw:border-b tw:border-base-300 tw:px-2 tw:py-1.5"
			}, [
				U("span", Qd, O(i + 1), 1),
				U("div", $d, [U("div", ef, O(t.name), 1), U("div", tf, O(o(t.dimensions.sceneWidth, t.dimensions.sceneHeight)), 1)]),
				U("div", nf, [
					U("button", {
						class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-xs tw:dui-btn-square",
						type: "button",
						disabled: !F(r).setupEditable || i === 0,
						"aria-label": e.t("FVTT_SCENE_MERGER.Actions.MoveUp"),
						onClick: (e) => F(r).reorderScene(t.id, -1)
					}, " ↑ ", 8, rf),
					U("button", {
						class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-xs tw:dui-btn-square",
						type: "button",
						disabled: !F(r).setupEditable || i === F(r).selectedScenes.length - 1,
						"aria-label": e.t("FVTT_SCENE_MERGER.Actions.MoveDown"),
						onClick: (e) => F(r).reorderScene(t.id, 1)
					}, " ↓ ", 8, af),
					U("button", {
						class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-xs tw:dui-btn-square",
						type: "button",
						disabled: !F(r).setupEditable,
						"aria-label": e.t("FVTT_SCENE_MERGER.Actions.Locate"),
						onClick: (e) => n("locate", t.id)
					}, " ◎ ", 8, of),
					U("button", {
						class: "tw:dui-btn tw:dui-btn-ghost tw:dui-btn-xs tw:dui-btn-square",
						type: "button",
						disabled: !F(r).setupEditable,
						"aria-label": e.t("FVTT_SCENE_MERGER.Selection.RemoveNamed", { name: t.name }),
						onClick: (e) => F(r).removeScene(t.id)
					}, " × ", 8, sf)
				]),
				W(Dd, {
					class: "tw:col-span-3",
					scene: t,
					t: e.t
				}, null, 8, ["scene", "t"])
			]))), 128))])
		])]));
	}
}), lf = { class: "tw:dui-card tw:dui-card-border tw:bg-base-200" }, uf = { class: "tw:dui-card-body tw:gap-3 tw:p-3" }, df = { class: "tw:flex tw:items-start tw:justify-between tw:gap-2" }, ff = { class: "tw:dui-card-title tw:text-base" }, pf = { class: "tw:m-0 tw:text-xs tw:opacity-65" }, mf = {
	key: 0,
	class: "tw:dui-loading tw:dui-loading-spinner tw:dui-loading-sm"
}, hf = {
	key: 1,
	class: "tw:dui-badge tw:dui-badge-success tw:dui-badge-soft"
}, gf = {
	key: 2,
	class: "tw:dui-badge tw:dui-badge-error tw:dui-badge-soft"
}, _f = { class: "tw:flex tw:flex-wrap tw:gap-1" }, vf = { class: "tw:dui-badge tw:dui-badge-outline tw:dui-badge-sm" }, yf = { class: "tw:dui-badge tw:dui-badge-outline tw:dui-badge-sm" }, bf = { class: "tw:dui-badge tw:dui-badge-outline tw:dui-badge-sm" }, xf = { class: "tw:dui-badge tw:dui-badge-outline tw:dui-badge-sm" }, Sf = {
	key: 0,
	class: "tw:dui-badge tw:dui-badge-warning tw:dui-badge-soft tw:dui-badge-sm"
}, Cf = {
	key: 0,
	class: "tw:grid tw:gap-2"
}, wf = { class: "tw:block" }, Tf = {
	key: 0,
	class: "tw:opacity-70"
}, Ef = {
	key: 1,
	class: "tw:grid tw:gap-2"
}, Df = { class: "tw:block" }, Of = {
	key: 0,
	class: "tw:opacity-70"
}, kf = { class: "tw:flex tw:items-start tw:gap-2 tw:rounded-box tw:bg-warning/10 tw:p-2 tw:text-sm" }, Af = ["checked", "disabled"], jf = { class: "tw:block" }, Mf = { class: "tw:opacity-70" }, Nf = {
	key: 2,
	class: "tw:grid tw:gap-2"
}, Pf = { class: "tw:block" }, Ff = {
	key: 0,
	class: "tw:opacity-70"
}, If = {
	key: 3,
	role: "alert",
	class: "tw:dui-alert tw:dui-alert-success tw:dui-alert-soft tw:py-2 tw:text-sm"
}, Lf = /* @__PURE__ */ Yn({
	__name: "ValidationPanel",
	props: { t: { type: Function } },
	setup(e) {
		let t = Mc(), n = q(() => bc(t.selectedScenes, t.arrangementBounds, { ...t.content }, t.placements)), r = q(() => t.validation?.warnings.filter(({ severity: e }) => e === "warning") ?? []), i = q(() => t.validation?.warnings.filter(({ severity: e }) => e === "info") ?? []);
		function a(e) {
			return `FVTT_SCENE_MERGER.Validation.Issues.${e.code.replace(".", "_")}`;
		}
		function o(e) {
			return Object.entries(e.details).map(([e, t]) => `${e}: ${t}`).join(" · ");
		}
		function s(e) {
			return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e.toLocaleString();
		}
		function c(e) {
			t.setWarningsAcknowledged(e.currentTarget.checked);
		}
		return (l, u) => (V(), H("section", lf, [U("div", uf, [
			U("div", df, [U("div", null, [U("h2", ff, O(e.t("FVTT_SCENE_MERGER.Validation.Title")), 1), U("p", pf, O(e.t("FVTT_SCENE_MERGER.Validation.Help")), 1)]), F(t).validating ? (V(), H("span", mf)) : F(t).validation?.canMerge ? (V(), H("span", hf, O(e.t("FVTT_SCENE_MERGER.Validation.Ready")), 1)) : (V(), H("span", gf, O(e.t("FVTT_SCENE_MERGER.Validation.Blocked")), 1))]),
			U("div", _f, [
				U("span", vf, O(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Area", { value: s(F(t).arrangementBounds.width * F(t).arrangementBounds.height) })), 1),
				U("span", yf, O(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Textures", { value: s(n.value.texturePixels) })), 1),
				U("span", bf, O(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Walls", { value: n.value.documents.Wall ?? 0 })), 1),
				U("span", xf, O(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Tokens", { value: n.value.documents.Token ?? 0 })), 1),
				n.value.animatedAssets ? (V(), H("span", Sf, O(e.t("FVTT_SCENE_MERGER.Validation.Estimate.Animated", { value: n.value.animatedAssets })), 1)) : G("", !0)
			]),
			F(t).validation?.blocking.length ? (V(), H("div", Cf, [(V(!0), H(B, null, L(F(t).validation.blocking, (t, n) => (V(), H("div", {
				key: `${t.code}-${n}`,
				role: "alert",
				class: "tw:dui-alert tw:dui-alert-error tw:dui-alert-soft tw:items-start tw:py-2 tw:text-sm"
			}, [u[0] ||= U("span", { "aria-hidden": "true" }, "×", -1), U("span", null, [U("strong", wf, O(e.t(a(t), t.details)), 1), Object.keys(t.details).length ? (V(), H("small", Tf, O(o(t)), 1)) : G("", !0)])]))), 128))])) : G("", !0),
			r.value.length ? (V(), H("div", Ef, [(V(!0), H(B, null, L(r.value, (t, n) => (V(), H("div", {
				key: `${t.code}-${n}`,
				role: "alert",
				class: "tw:dui-alert tw:dui-alert-warning tw:dui-alert-soft tw:items-start tw:py-2 tw:text-sm"
			}, [u[1] ||= U("span", { "aria-hidden": "true" }, "!", -1), U("span", null, [U("strong", Df, O(e.t(a(t), t.details)), 1), Object.keys(t.details).length ? (V(), H("small", Of, O(o(t)), 1)) : G("", !0)])]))), 128)), U("label", kf, [U("input", {
				class: "tw:dui-checkbox tw:dui-checkbox-warning tw:dui-checkbox-sm tw:mt-0.5 tw:shrink-0 tw:before:relative! tw:before:block! tw:before:h-full! tw:before:w-full! tw:before:content-['']! tw:after:content-none!",
				type: "checkbox",
				checked: F(t).warningsAcknowledged,
				disabled: !F(t).setupEditable,
				onChange: c
			}, null, 40, Af), U("span", null, [U("strong", jf, O(e.t("FVTT_SCENE_MERGER.Validation.Acknowledge")), 1), U("small", Mf, O(e.t("FVTT_SCENE_MERGER.Validation.AcknowledgeHelp")), 1)])])])) : G("", !0),
			i.value.length ? (V(), H("div", Nf, [(V(!0), H(B, null, L(i.value, (t, n) => (V(), H("div", {
				key: `${t.code}-${n}`,
				role: "status",
				class: "tw:dui-alert tw:dui-alert-info tw:dui-alert-soft tw:items-start tw:py-2 tw:text-sm"
			}, [u[2] ||= U("span", { "aria-hidden": "true" }, "i", -1), U("span", null, [U("strong", Pf, O(e.t(a(t), t.details)), 1), Object.keys(t.details).length ? (V(), H("small", Ff, O(o(t)), 1)) : G("", !0)])]))), 128))])) : G("", !0),
			F(t).validation && !F(t).validation.blocking.length && !F(t).validation.warnings.length ? (V(), H("div", If, [u[3] ||= U("span", { "aria-hidden": "true" }, "✓", -1), U("span", null, O(e.t("FVTT_SCENE_MERGER.Validation.NoIssues")), 1)])) : G("", !0)
		])]));
	}
}), Rf = { class: "scene-merger-shell tw:@container tw:flex tw:min-h-[720px] tw:flex-col tw:gap-3 tw:p-3 tw:text-base-content" }, zf = { class: "tw:flex tw:flex-wrap tw:items-start tw:justify-between tw:gap-3" }, Bf = { class: "tw:flex tw:items-center tw:gap-2" }, Vf = { class: "tw:dui-badge tw:dui-badge-neutral tw:dui-badge-sm" }, Hf = { class: "tw:m-0 tw:text-xl tw:font-semibold" }, Uf = { class: "tw:mt-1 tw:mb-0 tw:text-sm tw:opacity-70" }, Wf = { class: "tw:dui-badge tw:dui-badge-outline tw:gap-2" }, Gf = {
	key: 0,
	class: "tw:dui-loading tw:dui-loading-spinner tw:dui-loading-xs"
}, Kf = {
	key: 0,
	class: "tw:dui-card tw:dui-card-border tw:flex-1 tw:bg-base-200"
}, qf = { class: "tw:dui-card-body tw:items-center tw:justify-center tw:text-center" }, Jf = { class: "tw:dui-card-title" }, Yf = [
	"aria-label",
	"aria-valuemax",
	"aria-valuenow",
	"title"
], Xf = { class: "tw:grid tw:gap-3 tw:xl:grid-cols-[minmax(0,1fr)_minmax(22rem,0.72fr)]" }, Zf = 448, Qf = 384, $f = 512, ep = 12, tp = /* @__PURE__ */ Yn({
	__name: "SceneMergerApp",
	props: {
		services: {},
		t: { type: Function }
	},
	setup(e) {
		let t = e, n = Mc(), r = /* @__PURE__ */ P(null), i = /* @__PURE__ */ P(null), a = /* @__PURE__ */ P(448), o = /* @__PURE__ */ P(null), s = q(() => ({ "--scene-merger-source-width": `${a.value}px` })), c = q(() => u());
		ur(() => {
			n.initialize(t.services, t.t("FVTT_SCENE_MERGER.Defaults.DestinationName"));
		}), pr(h);
		function l(e) {
			r.value?.locateScene(e);
		}
		function u() {
			let e = i.value?.clientWidth ?? 0;
			return Math.max(Qf, e - $f - ep);
		}
		function d(e) {
			return Math.min(u(), Math.max(Qf, Math.round(e)));
		}
		function f(e) {
			e.button === 0 && (e.preventDefault(), h(), o.value = { pointerId: e.pointerId }, window.addEventListener("pointermove", p), window.addEventListener("pointerup", m), window.addEventListener("pointercancel", m));
		}
		function p(e) {
			if (o.value?.pointerId !== e.pointerId || !i.value) return;
			let t = i.value.getBoundingClientRect();
			a.value = d(e.clientX - t.left);
		}
		function m(e) {
			o.value?.pointerId === e.pointerId && h();
		}
		function h() {
			o.value = null, window.removeEventListener("pointermove", p), window.removeEventListener("pointerup", m), window.removeEventListener("pointercancel", m);
		}
		function g(e) {
			let t = e.shiftKey ? 48 : 24, n = {
				ArrowLeft: a.value - t,
				ArrowRight: a.value + t,
				End: u(),
				Home: Qf
			}[e.key];
			n !== void 0 && (e.preventDefault(), a.value = d(n));
		}
		function _() {
			a.value = d(Zf);
		}
		return (t, o) => (V(), H("main", Rf, [U("header", zf, [U("div", null, [U("div", Bf, [U("span", Vf, O(e.t("FVTT_SCENE_MERGER.App.GmBadge")), 1), U("h1", Hf, O(e.t("FVTT_SCENE_MERGER.App.Title")), 1)]), U("p", Uf, O(e.t("FVTT_SCENE_MERGER.App.Subtitle")), 1)]), U("span", Wf, [F(n).status === "loading" ? (V(), H("span", Gf)) : G("", !0), Yi(" " + O(e.t(`FVTT_SCENE_MERGER.Status.${F(n).status}`)), 1)])]), F(n).status === "loading" ? (V(), H("div", Kf, [U("div", qf, [
			o[0] ||= U("span", { class: "tw:dui-loading tw:dui-loading-ring tw:dui-loading-lg" }, null, -1),
			U("h2", Jf, O(e.t("FVTT_SCENE_MERGER.Loading.Title")), 1),
			U("p", null, O(e.t("FVTT_SCENE_MERGER.Loading.Body")), 1)
		])])) : (V(), H(B, { key: 1 }, [
			U("section", {
				ref_key: "sourceLayout",
				ref: i,
				class: "tw:grid tw:min-h-0 tw:flex-1 tw:grid-cols-1 tw:gap-3 tw:@5xl:grid-cols-[var(--scene-merger-source-width)_0.75rem_minmax(0,1fr)] tw:@5xl:gap-0",
				style: E(s.value)
			}, [
				W(cf, {
					t: e.t,
					onLocate: l
				}, null, 8, ["t"]),
				U("div", {
					class: "tw:group tw:hidden tw:touch-none tw:cursor-col-resize tw:items-stretch tw:justify-center tw:[user-select:none] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-2 tw:focus-visible:outline-accent tw:@5xl:flex",
					role: "separator",
					tabindex: "0",
					"aria-orientation": "vertical",
					"aria-label": e.t("FVTT_SCENE_MERGER.Selection.ResizePanel"),
					"aria-valuemin": Qf,
					"aria-valuemax": c.value,
					"aria-valuenow": a.value,
					title: e.t("FVTT_SCENE_MERGER.Selection.ResizePanel"),
					onDblclick: _,
					onKeydown: g,
					onPointerdown: f
				}, [...o[1] ||= [U("span", {
					class: "tw:my-3 tw:w-1 tw:rounded-field tw:bg-base-300 tw:group-hover:bg-accent",
					"aria-hidden": "true"
				}, null, -1)]], 40, Yf),
				W(hu, {
					ref_key: "layoutPanel",
					ref: r,
					t: e.t
				}, null, 8, ["t"])
			], 4),
			U("section", Xf, [W(ud, { t: e.t }, null, 8, ["t"]), W(Lf, { t: e.t }, null, 8, ["t"])]),
			W(El, { t: e.t }, null, 8, ["t"])
		], 64))]));
	}
}), X = "fvtt-scene-merger", np = "Foundry VTT Scene Merger", rp = "FVTT_SCENE_MERGER";
//#endregion
//#region src/module/logging/logger.ts
function ip() {
	try {
		return game?.settings.get(X, "debugLogging") === !0;
	} catch {
		return !1;
	}
}
var ap = {
	debug(e, t) {
		ip() && console.debug(`${np} | ${e}`, t ?? "");
	},
	error(e, t) {
		console.error(`${np} | ${e}`, t ?? "");
	},
	info(e, t) {
		console.info(`${np} | ${e}`, t ?? "");
	},
	warn(e, t) {
		console.warn(`${np} | ${e}`, t ?? "");
	}
};
//#endregion
//#region src/module/runtime/runtime-utils.ts
function op() {
	if (!game) throw Error("Foundry game data is not available yet.");
	return game;
}
function sp(e) {
	let t = op().scenes.get(e);
	if (!t) throw Error(`Source Scene ${e} is unavailable.`);
	return t;
}
function Z(e) {
	return lp(e);
}
function cp(e) {
	return Z(e.toObject(!0));
}
function lp(e) {
	if (Array.isArray(e)) return e.map(lp);
	if (e instanceof Set) return [...e].map(lp);
	if (e && typeof e == "object") {
		let t = {};
		for (let [n, r] of Object.entries(e)) t[n] = lp(r);
		return t;
	}
	return e;
}
function Q(e) {
	if (!(!e || typeof e != "object" || Array.isArray(e))) return e;
}
function up(e) {
	return Array.isArray(e) ? e.map(Q).filter((e) => !!e) : [];
}
function $(e, t = 0) {
	return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function dp(e, t = "") {
	return typeof e == "string" ? e : t;
}
function fp(e) {
	let t = e._id;
	return typeof t == "string" && t.length > 0 ? t : void 0;
}
function pp(e) {
	return e instanceof Error ? e.message : String(e);
}
function mp(e) {
	return typeof e == "string" && /\.(?:m4v|mp4|ogg|ogv|webm)(?:[?#].*)?$/i.test(e);
}
async function hp() {
	await new Promise((e) => {
		setTimeout(e, 0);
	});
}
function gp(e) {
	return e.replace(/([a-z])([A-Z])/g, "$1 $2").replaceAll(".", ": ").replace(/^./, (e) => e.toUpperCase());
}
//#endregion
//#region src/module/settings/settings-values.ts
function _p() {
	return op().settings.get(X, "cleanupPartialDestination") !== !1;
}
//#endregion
//#region src/module/runtime/merge/errors.ts
var vp = class extends Error {
	constructor() {
		super("Scene merge cancelled."), this.name = "MergeCancelledError";
	}
}, yp = class extends Error {
	cleanupError;
	destinationSceneId;
	originalError;
	stage;
	constructor(e) {
		let t = e.cleanupError ? ` Cleanup also failed: ${pp(e.cleanupError)}` : "", n = e.destinationSceneId ? ` Partial destination Scene: ${e.destinationSceneId}.` : "";
		super(`Scene merge failed during ${e.stage}: ${pp(e.error)}.${t}${n}`), this.name = "SceneMergeError", this.cleanupError = e.cleanupError ? pp(e.cleanupError) : null, this.destinationSceneId = e.destinationSceneId ?? null, this.originalError = e.error, this.stage = e.stage;
	}
}, bp = class {
	#e = !1;
	cancel() {
		this.#e = !0;
	}
	throwIfCancelled() {
		if (this.#e) throw new vp();
	}
}, xp = class {
	#e;
	constructor(e) {
		let t = e.id, n = e.levels.contents[0]?.id;
		if (!t || !n || e.levels.size !== 1) throw Error("Foundry did not create the expected destination Scene and Level.");
		this.#e = e, this.id = t, this.levelId = n;
	}
	get dimensions() {
		return this.#e.dimensions;
	}
	get name() {
		return this.#e.name ?? "Merged Scene";
	}
	id;
	levelId;
	async activate() {
		await this.#e.activate({ pullUsers: !1 });
	}
	async createDocuments(e, t) {
		return this.#e.createEmbeddedDocuments(e, t);
	}
	async delete() {
		await this.#e.delete();
	}
	async open() {
		await this.#e.view();
	}
	async updateDocuments(e, t) {
		return this.#e.updateEmbeddedDocuments(e, t, {
			diff: !0,
			recursive: !0
		});
	}
};
async function Sp(e, t = (e) => Scene.implementation.create(e)) {
	let n = await t(e);
	if (!n) throw Error("Foundry did not return a destination Scene after creation.");
	try {
		return new xp(n);
	} catch (e) {
		try {
			await n.delete();
		} catch (t) {
			throw Error(`${pp(e)} Cleanup of the invalid Scene${n.id ? ` ${n.id}` : ""} also failed: ${pp(t)}`, { cause: t });
		}
		throw e;
	}
}
var Cp = {
	callHook(e, ...t) {
		Hooks.callAll(e, ...t);
	},
	createDestination: Sp,
	notifyError(e) {
		ui?.notifications?.error(e);
	},
	notifyInfo(e) {
		ui?.notifications?.info(e);
	}
}, wp = /* @__PURE__ */ new Map();
function Tp(e) {
	if (!e.id.trim()) throw Error("A Scene Merger extension must have a non-empty id.");
	if (wp.has(e.id)) throw Error(`A Scene Merger extension with id ${e.id} is already registered.`);
	return wp.set(e.id, e), () => wp.delete(e.id);
}
function Ep() {
	return [...wp.values()];
}
function Dp(e, t, n) {
	return Tp({
		documentTransformers: { [t]: n },
		id: e
	});
}
function Op(e, t) {
	return Tp({
		id: e,
		validate: t
	});
}
function kp(e, t) {
	return Tp({
		id: e,
		referenceRewriter: t
	});
}
async function Ap(e) {
	for (let t of Ep()) await t.preMerge?.(e);
}
async function jp(e) {
	for (let t of Ep()) await t.postMerge?.(e);
}
//#endregion
//#region src/module/runtime/background-tiles.ts
function Mp(e, t, n, r) {
	let i = new Map(t.map((e) => [e.sceneId, e])), a = new Map([...t].sort((e, t) => e.order - t.order).map((e, t) => [e.sceneId, t])), o = Math.max(1, ...e.map((e) => e.documents.Tile?.length ?? 0)) + 1, s = Pp(e), c = [];
	for (let l of e) {
		let e = i.get(l.id), u = a.get(l.id) ?? 0, d = l.documents.Level?.[0];
		if (!e || !d) continue;
		let f = Q(d.textures) ?? {};
		Np(c, "background", Q(d.background), f, l, e, n, r, s.background, -(t.length * 2) + u), Np(c, "foreground", Q(d.foreground), f, l, e, n, r, s.foreground, (t.length + 1) * o + u);
	}
	return c;
}
function Np(e, t, n, r, i, a, o, s, c, l) {
	if (typeof n?.src != "string" || n.src.length === 0) return;
	let u = {
		...Z(r),
		...Z(n)
	}, d = $(u.anchorX, .5), f = $(u.anchorY, .5);
	u.anchorX = d, u.anchorY = f, delete u.color, e.push({
		alpha: 1,
		elevation: c,
		flags: { [X]: { importedLevelTexture: {
			layer: t,
			sourceLevelId: i.levels[0]?.id ?? null,
			sourceSceneId: i.id
		} } },
		height: a.height,
		hidden: !1,
		levels: [o.levelId],
		locked: s,
		name: `${i.name} — ${t}`,
		rotation: 0,
		sort: l,
		texture: u,
		width: a.width,
		x: o.sceneX + a.x + a.width * d,
		y: o.sceneY + a.y + a.height * f
	});
}
function Pp(e) {
	let t = 0, n = 0, r = (e) => {
		typeof e != "number" || !Number.isFinite(e) || (t = Math.min(t, e), n = Math.max(n, e));
	};
	for (let t of e) {
		for (let e of t.levels) r(e.elevation.bottom), r(e.elevation.top);
		for (let e of Object.values(t.documents)) for (let t of e ?? []) r(t.elevation);
	}
	return {
		background: Math.max(-Number.MAX_VALUE, t - 1),
		foreground: Math.min(Number.MAX_VALUE, n + 1)
	};
}
//#endregion
//#region src/module/runtime/provenance.ts
var Fp = "_temporaryProvenance";
function Ip(e, t) {
	let n = Z(e), r = Z(Q(n.flags) ?? {}), i = Z(Q(r["fvtt-scene-merger"]) ?? {}), a = Object.hasOwn(i, Fp), o = i[Fp];
	return i[Fp] = {
		documentId: t.documentId,
		documentType: t.documentType,
		parentIds: [...t.parentIds ?? []],
		sceneId: t.sceneId,
		sourceKey: Os(t),
		hadPrevious: a,
		previousValue: o
	}, r[X] = i, n.flags = r, n;
}
function Lp(e) {
	let t = Z(e), n = Q(t.flags), r = Q(n?.[X]), i = Q(r?.[Fp]);
	return n && r && i && (i.hadPrevious === !0 ? r[Fp] = Rp(i.previousValue) : delete r[Fp], Object.keys(r).length === 0 && delete n[X], t.flags = n), delete t._stats, Array.isArray(t.behaviors) && (t.behaviors = up(t.behaviors).map(Lp)), t;
}
function Rp(e) {
	return e && typeof e == "object" ? Z(e) : e;
}
function zp(e) {
	let t = Q(Q(Q(e.flags)?.[X])?.[Fp]);
	if (!t) return;
	let n = t?.documentId, r = t?.documentType, i = t?.sceneId;
	if (!(typeof n != "string" || typeof r != "string" || typeof i != "string")) return {
		documentId: n,
		documentType: r,
		parentIds: Array.isArray(t.parentIds) ? t.parentIds.filter((e) => typeof e == "string") : [],
		sceneId: i
	};
}
function Bp(e, t) {
	let n = [];
	for (let r of e) {
		let e = cp(r);
		Vp(e, t, n);
		for (let r of up(e.behaviors)) Vp(r, t, n);
	}
	return n;
}
function Vp(e, t, n) {
	let r = zp(e), i = fp(e);
	if (!r || !i) {
		n.push("A created document could not be associated with its source provenance.");
		return;
	}
	t.set(Os(r), i);
}
//#endregion
//#region src/module/runtime/merge/batches.ts
async function Hp(e, t, n, r, i, a, o) {
	await Jp(n, o, a, async (a, o) => {
		let s = await e.createDocuments(t, a);
		if (s.length !== a.length) throw Error(`Foundry created ${s.length} of ${a.length} requested ${t} documents.`);
		qp(i, r, o, n.length, `Created ${t} documents`);
	});
}
async function Up(e, t, n, r, i, a, o, s, c) {
	let l = 0;
	return await Jp(n, c, s, async (s, c) => {
		let u = await e.createDocuments(t, s);
		if (u.length !== s.length) throw Error(`Foundry created ${u.length} of ${s.length} requested ${t} documents.`);
		l += u.length;
		let d = Bp(u, r);
		if (d.length > 0) throw i.push(...d), Error(`Foundry created ${t} documents without the provenance needed for safe ID mapping.`);
		qp(o, a, c, n.length, `Created ${t} documents`);
	}), l;
}
async function Wp(e, t, n, r, i, a, o) {
	await Jp(n, o, a, async (a, o) => {
		let s = a.map((e) => Gp(e, r));
		ap.debug("Updating embedded document references", {
			requested: s,
			type: t
		});
		let c = await e.updateDocuments(t, a);
		if (c.length !== a.length) {
			let e = c.flatMap((e) => e.id ? [e.id] : []), n = new Set(e), r = s.filter(({ id: e }) => !n.has(e)), i = {
				missing: r,
				rejectedUpdates: a.filter((e) => {
					let t = fp(e);
					return !t || !n.has(t);
				}),
				requested: s,
				returnedIds: e,
				type: t
			};
			throw ap.error("Foundry rejected embedded document reference updates", i), Error(`Foundry accepted ${c.length} of ${a.length} ${t} reference updates. ${Kp(r)} A validation rule or preUpdate${t} hook may have rejected them; see the console for the rejected update patches.`);
		}
		ap.debug("Embedded document references updated", {
			returnedIds: c.flatMap((e) => e.id ? [e.id] : []),
			type: t
		}), qp(i, "rewritingReferences", o, n.length, `Finalized ${t} references`);
	});
}
function Gp(e, t) {
	let n = fp(e) ?? "(missing ID)";
	return {
		id: n,
		name: t.get(n) ?? dp(e.name, "(unnamed)")
	};
}
function Kp(e) {
	if (e.length === 0) return "Foundry did not identify which updates were omitted.";
	let t = e.slice(0, 10).map(({ id: e, name: t }) => `${t} [${e}]`), n = e.length - t.length;
	return `Rejected: ${t.join(", ")}${n > 0 ? `, and ${n} more` : ""}.`;
}
function qp(e, t, n, r, i) {
	ap.debug("Merge progress", {
		completed: n,
		detail: i,
		stage: t,
		total: r
	}), e.onProgress?.({
		completed: n,
		detail: i,
		stage: t,
		total: r
	});
}
async function Jp(e, t, n, r) {
	for (let i = 0; i < e.length; i += t) {
		n.throwIfCancelled();
		let a = e.slice(i, i + t);
		await r(a, Math.min(i + a.length, e.length)), n.throwIfCancelled(), await hp();
	}
}
//#endregion
//#region src/module/runtime/merge/workflow-data.ts
function Yp(e, t, n, r) {
	let i = new Map(t.map((e) => [e.sceneId, e]));
	for (let t of e) {
		if (t.metrics.gridRegionShapes === 0) continue;
		let e = i.get(t.id);
		if (!cs(e, r.options.content).regions || !e) continue;
		let a = Vs(t.dimensions, t.grid, n.dimensions, r.options.outputGrid, e), o = Hs({
			x: 0,
			y: 0
		}, a);
		if (Math.abs(a.gridScale - 1) > 1e-7 || !Js(o, r.options.outputGrid.size)) throw Error(`Scene ${t.name} has grid Region geometry which is not aligned after destination insets.`);
	}
}
function Xp(e, t, n) {
	let r = { ...n }, i = new Map(t.placements.map((e) => [e.sceneId, e]));
	for (let [n, a] of Object.entries(is)) if (a) for (let o of e) cs(i.get(o.id), t.options.content)[n] || (r[a] = (r[a] ?? 0) + (o.documents[a]?.length ?? 0));
	return r;
}
function Zp(e) {
	return e.reduce((e, t) => e + up(t.behaviors).length, 0);
}
function Qp(e, t, n, r, i, a, o) {
	let s = [...new Set(a)], c = [...o];
	return s.length > 0 && c.push(`${s.length} reference or provenance entries require manual review.`), {
		copied: n,
		destinationHeight: t.dimensions.sceneHeight,
		destinationSceneId: t.id,
		destinationSceneName: t.name,
		destinationWidth: t.dimensions.sceneWidth,
		referencesRewritten: i,
		skipped: r,
		sourceCount: e.length,
		unresolvedReferences: s,
		warnings: c
	};
}
//#endregion
//#region src/module/runtime/prepare-documents.ts
function $p(e, t, n, r, i) {
	let a = new Map(t.map((e) => [e.sceneId, e])), o = new Map([...t].sort((e, t) => e.order - t.order).map((e, t) => [e.sceneId, t])), s = Math.max(1, ...e.map((e) => e.documents.Tile?.length ?? 0)) + 1, c = /* @__PURE__ */ new Map(), l = {};
	for (let t of e) {
		let e = a.get(t.id);
		if (!e) continue;
		let u = Vs(t.dimensions, t.grid, n, r.options.outputGrid, e), d = as(cs(e, r.options.content)), f = t.levels[0]?.id, p = o.get(t.id) ?? 0;
		if (!f) continue;
		let m = new Map([[f, n.levelId]]);
		for (let e of d) {
			let a = [...t.documents[e] ?? []];
			e === "Tile" && a.sort((e, t) => $(e.sort) - $(t.sort));
			for (let [o, d] of a.entries()) {
				let a = em(Z(d), e, t.id, u, t.grid, r.options.outputGrid, m, p, s, o, n.id, i);
				if (!a) {
					l[e] = (l[e] ?? 0) + 1;
					continue;
				}
				let f = c.get(e) ?? [];
				f.push(a), c.set(e, f);
			}
		}
	}
	return {
		batches: c,
		skipped: l
	};
}
function em(e, t, n, r, i, a, o, s, c, l, u, d) {
	let f = fp(e);
	if (!f) return;
	let p = {
		documentId: f,
		documentType: t,
		sceneId: n
	}, m = {
		delta: r.delta,
		destinationSceneId: u,
		distanceScale: r.distanceScale,
		documentType: t,
		gridScale: r.gridScale,
		pixelScale: r.pixelScale,
		sourceSceneId: n,
		spatial: r
	}, h = tm(e, t, r, i, a);
	t === "Tile" && (h.sort = (s + 1) * c + l), h = rm(h, p), h = nm(h, m), d?.(h, m), h = Ip(h, p);
	let g = ic(Z(h), o);
	return delete g._id, delete g._stats, im(g), {
		creationData: g,
		data: h,
		identity: p,
		type: t
	};
}
function tm(e, t, n, r, i) {
	let a = {
		...e,
		x: $(e.x),
		y: $(e.y)
	};
	if (t === "Wall") {
		let t = Array.isArray(e.c) ? e.c : [
			0,
			0,
			0,
			0
		];
		return $s({
			...e,
			c: [
				$(t[0]),
				$(t[1]),
				$(t[2]),
				$(t[3])
			]
		}, n);
	}
	return t === "Drawing" ? ec(a, n) : t === "Region" ? dc(e, n, {
		outputSize: i.size,
		outputType: i.type,
		size: r.size,
		type: r.type
	}) : t === "Token" ? rc(a, n) : t === "Tile" ? Qs({
		...a,
		height: $(e.height),
		width: $(e.width)
	}, n) : t === "AmbientLight" ? tc(a, n) : t === "AmbientSound" ? nc(a, n) : Zs(a, n);
}
function nm(e, t) {
	let n = e;
	for (let e of Ep()) {
		let r = e.documentTransformers?.[t.documentType];
		r && (n = Z(r(n, t)));
	}
	return n;
}
function rm(e, t) {
	return t.documentType === "Region" && (e.behaviors = up(e.behaviors).map((e) => {
		let n = fp(e);
		return n ? Ip(e, {
			documentId: n,
			documentType: "RegionBehavior",
			parentIds: [t.documentId],
			sceneId: t.sceneId
		}) : e;
	})), e;
}
function im(e) {
	let t = up(e.behaviors);
	t.length !== 0 && (e.behaviors = t.map((e) => {
		let t = Z(e);
		return delete t._id, delete t._stats, t;
	}));
}
//#endregion
//#region src/module/runtime/reference-updates.ts
function am(e, t, n, r, i) {
	let a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = [], c = 0;
	for (let [l, u] of e) for (let e of u) {
		let u = {
			destinationSceneId: n,
			idMap: t,
			sourceSceneId: e.identity.sceneId,
			sourceSceneIds: r
		}, d = t.get(ks(e.identity.sceneId, l, e.identity.documentId));
		if (!d) {
			s.push(`${l}.${e.identity.documentId}`);
			continue;
		}
		let f = Bs(l, e.data, u), p = Z(f.value);
		c += f.rewritten, s.push(...f.unresolved);
		for (let e of Ep()) {
			if (!e.referenceRewriter) continue;
			let t = e.referenceRewriter(p, u);
			p = Z(t.value), c += t.rewritten, s.push(...t.unresolved);
		}
		i?.(p, u), p._id = d, l === "Region" && um(p, e.identity.documentId, u, s), s.push(...dm(p, r, l)), p = Lp(p), o.set(d, dp(p.name, `${l} from ${e.identity.sceneId}.${e.identity.documentId}`));
		let m = {
			...e.creationData,
			_id: d
		}, h = a.get(l) ?? [];
		h.push(om(m, p)), a.set(l, h);
	}
	return {
		labels: o,
		referencesRewritten: c,
		unresolved: [...new Set(s)],
		updates: a
	};
}
function om(e, t) {
	let n = sm(e, t);
	return n._id = t._id, n;
}
function sm(e, t) {
	let n = {};
	for (let [r, i] of Object.entries(t)) {
		let t = cm(e[r], i);
		t.changed && (n[r] = t.value);
	}
	for (let r of Object.keys(e)) Object.hasOwn(t, r) || (n[`-=${r}`] = null);
	return n;
}
function cm(e, t) {
	if (Object.is(e, t)) return { changed: !1 };
	if (Array.isArray(e) && Array.isArray(t)) return lm(e, t) ? { changed: !1 } : {
		changed: !0,
		value: lp(t)
	};
	let n = Q(e), r = Q(t);
	if (n && r) {
		let e = sm(n, r);
		return Object.keys(e).length === 0 ? { changed: !1 } : {
			changed: !0,
			value: e
		};
	}
	return {
		changed: !0,
		value: lp(t)
	};
}
function lm(e, t) {
	return e.length === t.length ? e.every((e, n) => !cm(e, t[n]).changed) : !1;
}
function um(e, t, n, r) {
	e.behaviors = up(e.behaviors).map((e) => {
		let i = fp(e);
		if (!i) return e;
		let a = n.idMap.get(ks(n.sourceSceneId, "RegionBehavior", i, [t]));
		return a ? {
			...e,
			_id: a
		} : (r.push(`Region.${t}.RegionBehavior.${i}`), e);
	});
}
function dm(e, t, n) {
	let r = Q(e.flags);
	if (!r) return [];
	let i = [];
	return fm(r, "flags", t, (t) => {
		i.push(`${n}.${fp(e) ?? "unknown"}:${t}`);
	}), i;
}
function fm(e, t, n, r) {
	if (typeof e == "string") {
		n.some((t) => e.includes(`Scene.${t}.`)) && r(t);
		return;
	}
	if (Array.isArray(e)) {
		e.forEach((e, i) => fm(e, `${t}[${i}]`, n, r));
		return;
	}
	let i = Q(e);
	if (i) for (let [e, a] of Object.entries(i)) fm(a, `${t}.${e}`, n, r);
}
//#endregion
//#region src/module/runtime/merge/workflow.ts
var pm = 200, mm = [
	["Tile", "copyingTiles"],
	["Wall", "copyingWalls"],
	["AmbientLight", "copyingLights"],
	["AmbientSound", "copyingSounds"],
	["Drawing", "copyingDrawings"],
	["Note", "copyingNotes"],
	["Region", "copyingRegions"],
	["Token", "copyingTokens"]
];
async function hm(e, t, n) {
	let r = n.cancellation ?? new bp(), i = Math.max(1, n.batchSize ?? pm), a, o = "beforeDestination";
	try {
		r.throwIfCancelled(), await Ap(e), n.runtime.callHook("fvttSceneMergerPreMerge", e, t), o = "calculatingBounds", qp(n, o, 0, 1, "Calculating normalized destination bounds");
		let s = fs(e.placements);
		r.throwIfCancelled(), o = "creatingScene", qp(n, o, 0, 1, "Creating destination Scene and Level"), a = await n.runtime.createDestination(gm(e, t, s.width, s.height)), qp(n, o, 1, 1, a.name), r.throwIfCancelled(), Yp(t, s.placements, a, e);
		let c = _m(t, a.levelId), l = { Level: 1 }, u = [];
		o = "creatingBackgrounds", qp(n, o, 0, 0, "Preparing background and foreground Tiles");
		let d = s.placements.filter((t) => cs(t, e.options.content).backgrounds);
		if (d.length > 0) {
			let s = Mp(t, d, {
				...a.dimensions,
				levelId: a.levelId
			}, e.options.destination.lockBackgroundTiles);
			await Hp(a, "Tile", s, o, n, r, i), l.Tile = s.length;
		}
		let f = $p(t, s.placements, {
			...a.dimensions,
			id: a.id,
			levelId: a.levelId
		}, e, (e, t) => n.runtime.callHook("fvttSceneMergerTransformDocument", e, t)), p = Xp(t, e, f.skipped);
		for (let [e, t] of mm) {
			o = t;
			let s = f.batches.get(e) ?? [];
			qp(n, o, 0, s.length, `Preparing ${e} documents`);
			let d = await Up(a, e, s.map((e) => e.creationData), c, u, o, n, r, i);
			l[e] = (l[e] ?? 0) + d, e === "Region" && (l.RegionBehavior = Zp(s.map((e) => e.data)));
		}
		o = "rewritingReferences", qp(n, o, 0, 0, "Rewriting supported internal references");
		let m = am(f.batches, c, a.id, e.sourceSceneIds, (e, t) => n.runtime.callHook("fvttSceneMergerRewriteReferences", e, t));
		u.push(...m.unresolved);
		for (let [e, t] of m.updates) await Wp(a, e, t, m.labels, n, r, i);
		o = "finalizing", qp(n, o, 0, 1, "Finalizing destination Scene");
		let h = Qp(t, a, l, p, m.referencesRewritten, u, n.validationWarnings ?? []);
		return e.options.destination.activateAfterMerge && await a.activate(), e.options.destination.openAfterMerge && await a.open(), await jp(h), n.runtime.callHook("fvttSceneMergerPostMerge", h), qp(n, o, 1, 1, a.name), h;
	} catch (e) {
		let t, r = !!a;
		if (a && rs({
			cleanupEnabled: n.cleanupPartial,
			destinationCreated: !0,
			stage: o
		})) try {
			await a.delete(), r = !1;
		} catch (e) {
			t = e;
		}
		throw new yp({
			...t ? { cleanupError: t } : {},
			...a && r ? { destinationSceneId: a.id } : {},
			error: e,
			stage: o
		});
	}
}
function gm(e, t, n, r) {
	let i = t[0];
	if (!i) throw Error("No source Scene is available for destination settings.");
	let a = {
		bottom: Math.min(...t.map((e) => e.levels[0]?.elevation.bottom ?? 0)),
		top: Math.max(...t.map((e) => e.levels[0]?.elevation.top ?? 0))
	};
	return {
		active: !1,
		backgroundColor: i.source.backgroundColor ?? null,
		environment: Z(Q(i.source.environment) ?? {}),
		flags: { "fvtt-scene-merger": { sourceSceneIds: [...e.sourceSceneIds] } },
		folder: e.options.destination.folderId,
		grid: {
			...Z(Q(i.source.grid) ?? {}),
			...e.options.outputGrid
		},
		height: r,
		levels: [{
			elevation: a,
			name: "Merged Level"
		}],
		name: e.options.destination.name.trim() || "Merged Scene",
		navigation: e.options.destination.navigation,
		padding: 0,
		shiftX: 0,
		shiftY: 0,
		thumb: null,
		tokenVision: i.source.tokenVision ?? !0,
		width: n
	};
}
function _m(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		let e = r.levels[0]?.id;
		if (!e) continue;
		let i = ks(r.id, "Level", e);
		n.set(i, t);
	}
	return n;
}
//#endregion
//#region src/module/runtime/scene-snapshots.ts
var vm = [
	"Tile",
	"Wall",
	"AmbientLight",
	"AmbientSound",
	"Drawing",
	"Note",
	"Region",
	"Token"
], ym = new Set([
	"circle",
	"cone",
	"ellipse",
	"emanation",
	"grid",
	"line",
	"polygon",
	"rectangle",
	"ring",
	"token"
]);
async function bm() {
	return op().scenes.contents.map((e) => Cm(e, !1));
}
async function xm() {
	return op().folders.contents.filter((e) => e.id && e.type === "Scene").map((e) => ({
		id: e.id ?? "",
		name: e.name
	}));
}
function Sm(e) {
	return e.map((e) => Cm(sp(e), !0));
}
function Cm(e, t) {
	let n = op(), r = wm(e), i = e.levels.contents.map((e) => ({
		elevation: {
			bottom: $(e.elevation?.bottom),
			top: $(e.elevation?.top)
		},
		id: e.id ?? "",
		name: e.name ?? "Level"
	})), a = {
		background: Tm(e),
		canMerge: n.user.isGM && Scene.implementation.canUserCreate(n.user) && e.canUserModify(n.user, "update"),
		dimensions: {
			height: e.dimensions.height,
			sceneHeight: e.dimensions.sceneHeight,
			sceneWidth: e.dimensions.sceneWidth,
			sceneX: e.dimensions.sceneX,
			sceneY: e.dimensions.sceneY,
			width: e.dimensions.width
		},
		folderId: e.folder?.id ?? null,
		folderName: e.folder?.name ?? null,
		grid: {
			distance: e.grid.distance,
			size: e.grid.size,
			type: e.grid.type,
			units: e.grid.units
		},
		id: e.id ?? "",
		levels: i,
		metrics: Em(e, r),
		name: e.name ?? "Untitled Scene",
		thumbnail: e.thumbnail
	};
	return t ? {
		...a,
		documents: r,
		source: cp(e)
	} : a;
}
function wm(e) {
	let t = { Level: e.levels.contents.map(cp) };
	for (let n of vm) t[n] = e.getEmbeddedCollection(n).contents.map(cp);
	return t;
}
function Tm(e) {
	let t = e.levels.contents[0], n = Q((t ? cp(t) : void 0)?.background), r = n?.src, i = n?.color, a = typeof r == "string" && r.length > 0, o = typeof i == "string" && i.length > 0 || typeof i == "number" && Number.isFinite(i);
	return !a && !o ? null : {
		animated: a && mp(r),
		color: o ? i : null,
		height: e.dimensions.sceneHeight,
		rotation: 0,
		scaleX: 1,
		scaleY: 1,
		src: a ? r : null,
		width: e.dimensions.sceneWidth,
		x: 0,
		y: 0
	};
}
function Em(e, t) {
	let n = {}, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0, u = 0, d = 0, f = 0;
	c += +!!Om(cp(e));
	for (let t of e.levels.contents) {
		let n = cp(t);
		for (let t of [Q(n.background), Q(n.foreground)]) t?.src && (a += 1, i += +!!mp(t.src), l += e.dimensions.sceneWidth * e.dimensions.sceneHeight);
	}
	for (let [a, p] of Object.entries(t)) {
		n[a] = p.length;
		for (let t of p) {
			let n = Dm(t, e.id ?? "");
			i += n.animated, r += n.attachedRegion, o += n.crossReferences, s += n.gridShapes, c += n.moduleFlags, l += n.texturePixels, u += n.tokenRegionShapes, d += n.regionBehaviors, f += n.unsupportedRegionShapes;
		}
	}
	return n.RegionBehavior = (t.Region ?? []).reduce((e, t) => e + up(t.behaviors).length, 0), {
		attachedRegions: r,
		animatedAssets: i,
		backgroundImages: a,
		crossSceneReferences: o,
		documents: n,
		gridRegionShapes: s,
		moduleFlagDocuments: c,
		texturePixels: l,
		tokenRegionShapes: u,
		unsupportedRegionBehaviors: d,
		unsupportedRegionShapes: f
	};
}
function Dm(e, t) {
	let n = Q(e.texture), r = n?.src, i = Q(e.attachment), a = up(e.shapes), o = up(e.behaviors);
	return {
		animated: +!!mp(r),
		attachedRegion: +(typeof i?.token == "string" && i.token.length > 0),
		crossReferences: km(e, t),
		gridShapes: a.filter((e) => dp(e.type) === "grid").length,
		moduleFlags: +!!Om(e),
		regionBehaviors: o.filter((e) => Am(e) || dp(e.type).toLowerCase().includes("changelevel")).length,
		texturePixels: n ? $(e.width) * $(e.height) : 0,
		tokenRegionShapes: a.filter((e) => dp(e.type) === "token").length,
		unsupportedRegionShapes: a.filter((e) => !ym.has(dp(e.type))).length
	};
}
function Om(e) {
	let t = Q(e.flags);
	return !!(t && Object.keys(t).some((e) => e !== "core" && e !== "fvtt-scene-merger"));
}
function km(e, t) {
	if (typeof e == "string") return [...e.matchAll(/Scene\.([A-Za-z0-9_-]+)/g)].filter((e) => e[1] !== t).length;
	if (Array.isArray(e)) return e.reduce((e, n) => e + km(n, t), 0);
	let n = Q(e);
	return n ? Object.values(n).reduce((e, n) => e + km(n, t), 0) : 0;
}
function Am(e) {
	if (typeof e == "string") return /(?:Scene|Region|Token)\./.test(e);
	if (Array.isArray(e)) return e.some(Am);
	let t = Q(e);
	return t ? Object.entries(t).some(([e, t]) => /^(?:destination|region|scene|token|uuid)/i.test(e) ? !0 : Am(t)) : !1;
}
//#endregion
//#region src/module/runtime/asset-validation.ts
var jm = 64, Mm = 4e3, Nm = /* @__PURE__ */ new Map();
async function Pm(e, t) {
	return (await Promise.all(e.map(async (e) => {
		let n = [], r = Fm(e, t), i = r.slice(0, jm), a = await Promise.all(i.map(Lm)), o = a.filter((e) => e === "missing").length, s = a.filter((e) => e === "unverified").length + Math.max(0, r.length - i.length);
		return o > 0 && n.push(zm("assets.unavailable", e.id, o)), s > 0 && n.push(zm("assets.unverified", e.id, s)), n;
	}))).flat();
}
function Fm(e, t) {
	let n = /* @__PURE__ */ new Set();
	if (t.backgrounds) for (let t of e.documents.Level ?? []) Im(n, Q(t.background)), Im(n, Q(t.foreground));
	if (t.tiles) for (let t of e.documents.Tile ?? []) Im(n, Q(t.texture));
	return [...n];
}
function Im(e, t) {
	let n = t?.src;
	typeof n == "string" && n.trim().length > 0 && e.add(n);
}
function Lm(e) {
	let t = Nm.get(e);
	if (t) return t;
	let n = Rm(e);
	return Nm.set(e, n), n;
}
async function Rm(e) {
	if (/^(?:data|blob):/i.test(e)) return "available";
	let t = new AbortController(), n = globalThis.setTimeout(() => t.abort(), Mm);
	try {
		let n = await fetch(e, {
			credentials: "same-origin",
			method: "HEAD",
			signal: t.signal
		});
		return n.ok ? "available" : n.status === 404 || n.status === 410 ? "missing" : "unverified";
	} catch {
		return "unverified";
	} finally {
		globalThis.clearTimeout(n);
	}
}
function zm(e, t, n) {
	return {
		code: e,
		details: { count: n },
		overridable: !0,
		sceneIds: [t],
		severity: "warning"
	};
}
//#endregion
//#region src/module/runtime/validation-service.ts
async function Bm(e) {
	return (await Vm(e)).report;
}
async function Vm(e) {
	let t = op(), n = e.sourceSceneIds.filter((e) => !t.scenes.get(e)), r = Sm(e.sourceSceneIds.filter((e) => t.scenes.get(e))), i = fs(e.placements).placements, a = new Map(i.map((e) => [e.sceneId, e])), o = Tc(r, i, e.options), s = await Promise.all(r.map((t) => Pm([t], cs(a.get(t.id), e.options.content)))), c = [
		...o.blocking,
		...o.warnings,
		...s.flat(),
		...n.map((e) => Wm(e))
	], l = e.options.destination.folderId, u = l ? t.folders.get(l) : void 0;
	l && (!u || u.type !== "Scene") && c.push({
		code: "destination.folderUnavailable",
		details: { folderId: l },
		overridable: !1,
		sceneIds: [],
		severity: "error"
	});
	for (let n of r) if (cs(a.get(n.id), e.options.content).tokens) for (let e of n.documents.Token ?? []) {
		let r = e.actorId;
		typeof r == "string" && r && !t.actors.get(r) && c.push({
			code: "tokens.missingActor",
			details: { actorId: r },
			overridable: !0,
			sceneIds: [n.id],
			severity: "warning"
		});
	}
	(!t.user.isGM || !Scene.implementation.canUserCreate(t.user)) && c.push(Wm("destination"));
	for (let t of Ep()) t.validate && c.push(...t.validate(r, e));
	return {
		report: wc(c),
		scenes: r
	};
}
function Hm(e, t) {
	let n = new Set(e.acknowledgedWarnings);
	return t.warnings.filter((e) => e.severity === "warning" && !n.has(e.code) && !n.has(Um(e)));
}
function Um(e) {
	return `${e.code}:${[...e.sceneIds].sort().join(",")}`;
}
function Wm(e) {
	return {
		code: "selection.unavailable",
		details: {},
		overridable: !1,
		sceneIds: [e],
		severity: "error"
	};
}
//#endregion
//#region src/module/runtime/scene-merger-service.ts
var Gm;
async function Km(e, t) {
	if (Gm) throw Error("Another Scene merge is already in progress on this client.");
	let n = new bp();
	Gm = n;
	try {
		t?.({
			completed: 0,
			detail: "Validating source Scenes",
			stage: "validating",
			total: 1
		});
		let r = await Vm(e);
		if (ap.debug("Scene merge request validated", {
			acknowledgedWarnings: e.acknowledgedWarnings.length,
			blocking: r.report.blocking.map((e) => e.code),
			enabledContent: Object.entries(e.options.content).flatMap(([e, t]) => t ? [e] : []),
			placementCount: e.placements.length,
			sourceCount: r.scenes.length,
			warnings: r.report.warnings.map((e) => e.code)
		}), r.report.blocking.length > 0) throw Error(`Scene merge is blocked: ${r.report.blocking.map((e) => gp(e.code)).join(", ")}.`);
		let i = Hm(e, r.report);
		if (i.length > 0) throw Error(`Review and acknowledge ${i.length} merge warning(s) before continuing.`);
		t?.({
			completed: 1,
			detail: "Source Scenes validated",
			stage: "validating",
			total: 1
		}), n.throwIfCancelled();
		let a = await hm(e, r.scenes, {
			cancellation: n,
			cleanupPartial: _p(),
			...t ? { onProgress: t } : {},
			runtime: Cp,
			validationWarnings: r.report.warnings.map(Um)
		});
		return ap.info("Scene merge completed", a), Cp.notifyInfo(`Created Scene “${a.destinationSceneName}”.`), a;
	} catch (e) {
		throw ap.error("Scene merge failed", e), Cp.notifyError(e instanceof Error ? e.message : String(e)), e;
	} finally {
		Gm = void 0;
	}
}
var qm = {
	cancelActiveMerge() {
		Gm?.cancel();
	},
	listSceneFolders: xm,
	listScenes: bm,
	merge: Km,
	async openScene(e) {
		await sp(e).view();
	},
	validate(e) {
		return Bm(e);
	}
}, Jm = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("fvtt-scene-merger-root"), n.dataset.theme = "fvtt-scene-merger", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("fvtt-scene-merger-app"), t.replaceChildren(e), this.#e = yo(this.getVueComponent(), this.getVueProps() ?? {}), this.#e.use(Bo()), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, Ym = class e extends Jm {
	static DEFAULT_OPTIONS = {
		id: `${X}-application`,
		position: {
			height: 900,
			width: 1240
		},
		tag: "section",
		window: {
			icon: "fa-solid fa-object-group",
			resizable: !0,
			title: `${rp}.App.Title`
		}
	};
	static async open() {
		let t = foundry.applications.instances.get(`${X}-application`);
		if (t instanceof e) {
			if (t.rendered) {
				t.bringToFront();
				return;
			}
			await t.render({ force: !0 });
			return;
		}
		await new e().render({ force: !0 });
	}
	getVueComponent() {
		return tp;
	}
	getVueProps() {
		return {
			services: qm,
			t: (e, t) => {
				let n = op().i18n;
				return t ? n.format(e, t) : n.localize(e);
			}
		};
	}
};
async function Xm() {
	await Ym.open();
}
//#endregion
//#region src/module/api/create-module-api.ts
function Zm() {
	return {
		cancelActiveMerge: qm.cancelActiveMerge,
		listSceneFolders: qm.listSceneFolders,
		listScenes: qm.listScenes,
		merge: qm.merge,
		open: Xm,
		openScene: qm.openScene,
		registerDocumentTransformer: Dp,
		registerExtension: Tp,
		registerReferenceRewriter: kp,
		registerValidator: Op,
		validate: qm.validate
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function Qm() {
	if (!game) throw Error("Foundry game global is unavailable during module API registration.");
	let e = game.modules.get(X);
	if (!e) throw Error(`Foundry module registry entry was not found for ${X}.`);
	e.api = Zm();
}
//#endregion
//#region src/module/settings/register-settings.ts
function $m() {
	let e = op().settings;
	e.register(X, "cleanupPartialDestination", {
		config: !0,
		default: !0,
		hint: `${rp}.Settings.CleanupPartial.Hint`,
		name: `${rp}.Settings.CleanupPartial.Name`,
		scope: "world",
		type: Boolean
	}), e.register(X, "debugLogging", {
		config: !0,
		default: !1,
		hint: `${rp}.Settings.DebugLogging.Hint`,
		name: `${rp}.Settings.DebugLogging.Name`,
		scope: "client",
		type: Boolean
	}), e.registerMenu(X, "sceneMerger", {
		icon: "fa-solid fa-object-group",
		label: `${rp}.Settings.Open.Label`,
		name: `${rp}.Settings.Open.Name`,
		restricted: !0,
		type: Ym
	});
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function eh() {
	Hooks.once("init", () => {
		$m(), Qm();
	}), Hooks.once("ready", () => {
		let e = nh();
		Hooks.callAll("fvttSceneMergerRegisterExtensions", e), Hooks.callAll("fvttSceneMergerReady", e);
	}), Hooks.on("getSceneControlButtons", (...e) => {
		th(e[0]);
	});
}
function th(e) {
	if (!op().user.isGM) return;
	let t = e.tiles ?? e.tokens;
	t && (t.tools[`${X}-open`] = {
		button: !0,
		icon: "fa-solid fa-object-group",
		name: `${X}-open`,
		onChange: () => {
			Xm();
		},
		order: Object.keys(t.tools).length,
		title: `${rp}.Controls.Open`,
		visible: !0
	});
}
function nh() {
	let e = op().modules.get(X)?.api;
	if (!e) throw Error("Scene Merger API is unavailable after initialization.");
	return e;
}
//#endregion
//#region src/main.ts
eh();
//#endregion

//# sourceMappingURL=fvtt-scene-merger.mjs.map