/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/a.ts":
/*!*****************************!*\
  !*** ./src/components/a.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IkaA)
/* harmony export */ });
class IkaA extends HTMLElement {
    constructor() {
        super();
        this.onclick = handleClick.bind(this);
        function handleClick() {
            const resourcePath = this.getAttribute('href');
            const target = document.getElementById(this.getAttribute('target'));
            if (target) {
                // TODO: Test memory management taking removeChild vs setting innerHTML methods
                // const nodesToRemove = Array.from(target.childNodes)
                // while (target.firstChild) { target.removeChild(target.lastChild) }
                target.innerHTML = `<ika-import src="${resourcePath}"></ika-import>`;
                // nodesToRemove.forEach(n => console.log(n))
            }
        }
    }
}


/***/ }),

/***/ "./src/components/ab.ts":
/*!******************************!*\
  !*** ./src/components/ab.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IkaAB)
/* harmony export */ });
/* harmony import */ var _ika__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ika */ "./src/ika.ts");
/* harmony import */ var _types_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/buffer */ "./src/types/buffer.ts");
/* harmony import */ var _core_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/bind */ "./src/core/bind.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _IkaAB_attrBinds, _IkaAB_childIds;



class IkaAB extends _core_bind__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super();
        _IkaAB_attrBinds.set(this, []);
        _IkaAB_childIds.set(this, {});
        this.processBinds.bind(this)();
    }
    async processBinds() {
        const contextAttribute = this.getAttribute('context');
        const context = contextAttribute != null
            ? (await (0,_core_bind__WEBPACK_IMPORTED_MODULE_2__.getParentIkaComponent)(this, true)).getState(contextAttribute)
            : null;
        __classPrivateFieldSet(this, _IkaAB_attrBinds, Object.entries(this.dataset).map(([attr, bind]) => [
            attr,
            context != null ? `${bind}_${context}` : bind
        ]), "f");
    }
    getRegistrationTargets() {
        return [this, ...this.children];
    }
    registeredCallback(id, n, r) {
        if (n.isSameNode(r)) {
            r.setNodeId(id);
            r.registerBindsWithParentComponent.bind(r)();
        }
        else {
            r.setChildId.bind(r)(id, n);
        }
    }
    setChildId(id, n) {
        __classPrivateFieldGet(this, _IkaAB_childIds, "f")[id] = n;
    }
    registerBindsWithParentComponent() {
        __classPrivateFieldGet(this, _IkaAB_attrBinds, "f").forEach(([attr, bind]) => {
            (0,_core_bind__WEBPACK_IMPORTED_MODULE_2__.registerBind)({
                requester: this,
                bind: bind,
                global: this.getAttribute('global') != null
            });
        });
    }
    bindValueChanged(update) {
        // Multiple attributes could be bound to a single state key
        const targetAttributes = __classPrivateFieldGet(this, _IkaAB_attrBinds, "f").filter(([attr, bind]) => bind == update.k).map(([attr, bind]) => attr);
        // const context = this.getAttribute('context')
        _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(`%c<ika-ab>%c received binding update. Updating ${targetAttributes.length} attributes across ${this.children.length} elements`, [_ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.ComponentName, _ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.Unset]);
        Array.from(this.children).length != Object.keys(__classPrivateFieldGet(this, _IkaAB_childIds, "f")).length && console.warn('<ika-ab>');
        targetAttributes.forEach(attr => {
            Object.keys(__classPrivateFieldGet(this, _IkaAB_childIds, "f")).forEach(id => {
                const isProp = attr.charAt(0) == '.';
                _ika__WEBPACK_IMPORTED_MODULE_0__.ika.buffer.push({
                    n: id,
                    type: isProp ? _types_buffer__WEBPACK_IMPORTED_MODULE_1__.UpdateType.PROP : _types_buffer__WEBPACK_IMPORTED_MODULE_1__.UpdateType.ATTR,
                    k: isProp ? attr.substring(1) : attr,
                    v: update.v
                });
            });
        });
    }
}
_IkaAB_attrBinds = new WeakMap(), _IkaAB_childIds = new WeakMap();


/***/ }),

/***/ "./src/components/b.ts":
/*!*****************************!*\
  !*** ./src/components/b.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IkaB)
/* harmony export */ });
/* harmony import */ var _ika__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ika */ "./src/ika.ts");
/* harmony import */ var _types_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/buffer */ "./src/types/buffer.ts");
/* harmony import */ var _core_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/bind */ "./src/core/bind.ts");



class IkaB extends _core_bind__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super();
    }
    bindValueChanged(update) {
        _ika__WEBPACK_IMPORTED_MODULE_0__.ika.buffer.push({
            n: this.getNodeId(),
            type: _types_buffer__WEBPACK_IMPORTED_MODULE_1__.UpdateType.PROP,
            k: 'textContent',
            v: update.v
        });
    }
}


/***/ }),

/***/ "./src/components/bf.ts":
/*!******************************!*\
  !*** ./src/components/bf.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IkaBindToFunction)
/* harmony export */ });
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/events */ "./src/types/events.ts");

class IkaBindToFunction extends HTMLElement {
    constructor() {
        super();
        const eventBinds = Object.entries(this.dataset);
        const childElements = Array.from(this.children);
        const preventDefault = this.getAttribute('preventDefault') != null;
        eventBinds.forEach(([type, bind]) => {
            this.addEventListener(type, (e) => {
                if (preventDefault) {
                    e.cancelable
                        ? e.preventDefault()
                        : console.warn(`<ika-bf> was instructed to cancel an uncancelabe event of type "${e.type}".`);
                }
                sendEventToComponent.bind(this)(e, bind);
            });
        });
        function sendEventToComponent(e, bind) {
            const eventDetails = {
                type: _types_events__WEBPACK_IMPORTED_MODULE_0__.ComponentCall.EventType.InvokeFunction,
                invocationEvent: e,
                key: bind
            };
            const componentCall = new CustomEvent(_types_events__WEBPACK_IMPORTED_MODULE_0__.CustomEventTypes.ComponentCall, {
                detail: eventDetails,
                bubbles: true,
                cancelable: true,
                composed: true
            });
            this.dispatchEvent(componentCall);
        }
    }
}


/***/ }),

/***/ "./src/components/import.ts":
/*!**********************************!*\
  !*** ./src/components/import.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IkaImport)
/* harmony export */ });
/* harmony import */ var _ika__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ika */ "./src/ika.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _IkaImport_src;

class IkaImport extends HTMLElement {
    constructor() {
        super();
        _IkaImport_src.set(this, this.getAttribute('src'));
        fetch(__classPrivateFieldGet(this, _IkaImport_src, "f"))
            .then(r => processResponse.bind(this)(r));
        async function processResponse(r) {
            ([200, 304].includes(r.status) && r.headers.get('content-type').includes('text/html'))
                ? processHTMLImport.bind(this)(await r.text())
                : console.error(`Status ${r.status}: Could not load resource from ${r.url}`);
        }
        function processHTMLImport(content) {
            this.innerHTML = content;
            const path = this.getAttribute('src');
            if (!_ika__WEBPACK_IMPORTED_MODULE_0__.ika.reg.hasImport(path)) {
                _ika__WEBPACK_IMPORTED_MODULE_0__.ika.reg.registerImport(path);
            }
            processTemplates.bind(this)();
            function processTemplates() {
                const templatesTag = 'ika:templates';
                const templatesElement = this.getElementsByTagName(templatesTag)[0];
                if (!templatesElement) {
                    return;
                }
                const templates = templatesElement.children;
                const target = document.getElementsByTagName(templatesTag)[0];
                if (!target) {
                    console.error(`Error importing templates from '${__classPrivateFieldGet(this, _IkaImport_src, "f")}':\nDOM did not contain a ${templatesTag} element.`);
                    return;
                }
                Array.from(templates).forEach(n => {
                    target.appendChild(n);
                    _ika__WEBPACK_IMPORTED_MODULE_0__.ika.reg.addTemplateNode(path, n);
                });
                this.removeChild(templatesElement);
            }
            const scriptElements = Array.from(this.getElementsByTagName('script'));
            scriptElements.forEach(s => {
                // Reinsert the script element so it's executed.
                const parent = s.parentNode || this;
                parent.removeChild(s);
                const newScriptElement = document.createElement('script');
                newScriptElement.type = "module";
                newScriptElement.textContent = s.textContent;
                parent.appendChild(newScriptElement);
            });
            _ika__WEBPACK_IMPORTED_MODULE_0__.ika.reg.addNodes(path, this.childNodes);
            const registryEntry = _ika__WEBPACK_IMPORTED_MODULE_0__.ika.reg.getImportRegisterByPath(path);
            const observer = new MutationObserver(processMut.bind(registryEntry));
            this.replaceWith(...this.childNodes);
            observer.observe(registryEntry.n[0].parentNode, { childList: true });
            // Array.from(this.childNodes).forEach(n => observer.observe(n, { childList: true, characterData: true, attributes: true }))
            // Import is complete, unwrap the content from the placeholder <ika:import> tag
            _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(`Loaded HTML from ${path}, registered nodes as follows:`);
            _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(registryEntry);
            function processMut(mutList, observer) {
                const removeMuts = mutList.filter(m => m.removedNodes.length > 0);
                _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug('<ika-import> detected mutation');
                for (const mut of removeMuts) {
                    mut.removedNodes.forEach(n => {
                        const i = this.n.findIndex(m => m.isSameNode(n));
                        i != -1 && this.n.splice(i, 1);
                    });
                }
                if (this.n.length == 0) {
                    this.t.forEach(templateElement => {
                        templateElement.parentNode.removeChild(templateElement);
                    });
                    this.t = [];
                    observer.disconnect();
                }
            }
        }
    }
}
_IkaImport_src = new WeakMap();


/***/ }),

/***/ "./src/components/me.ts":
/*!******************************!*\
  !*** ./src/components/me.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IkaME)
/* harmony export */ });
/* harmony import */ var _ika__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ika */ "./src/ika.ts");
/* harmony import */ var _core_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/bind */ "./src/core/bind.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _IkaME_nodeId;
function dce(n) { return document.createElement(n); }
function oefe(n, f) { Object.entries(n).forEach(e => f(e)); }


class IkaME extends HTMLElement {
    constructor() {
        super();
        _IkaME_nodeId.set(this, null);
        const mf = this.getAttribute('mf');
        const is = this.getAttribute('ika:is');
        const cn = this.getAttribute('cn');
        if (!mf || !is || !cn) {
            console.error('<ika-me> must have "ika:is", "cn", and "mf" attributes.');
            return;
        }
        //@ts-ignore
        _ika__WEBPACK_IMPORTED_MODULE_0__.ika.reg.registerNode(this, this, setIDandRegisterBind);
        function setIDandRegisterBind(id, n, r) {
            r.setNodeId(id, n, r);
            r.bindValueChanged({
                k: `ika-me:${is}`,
                v: _ika__WEBPACK_IMPORTED_MODULE_0__.ika.reg.getBindValue(`ika-me:${is}`, r.getNodeId())
            });
            (0,_core_bind__WEBPACK_IMPORTED_MODULE_1__.registerBind)({
                //@ts-ignore
                requester: r,
                bind: `ika-me:${is}`,
                global: true
            });
        }
    }
    bindValueChanged(update) {
        var _a;
        const mf = this.getAttribute('mf');
        const cn = this.getAttribute('cn');
        const bd = (_a = update.v) === null || _a === void 0 ? void 0 : _a.bd;
        const mapArray = update.v ? update.v[mf] : null;
        if (mapArray == null) {
            this.replaceChildren();
            return;
        }
        if (!Array.isArray(mapArray)) {
            throw `<ika-me> is asked to map from a value that is not an array, received ${typeof mapArray}.`;
        }
        constructFragment.bind(this)(bd, mapArray);
        async function constructFragment(bd, mapArray) {
            const fragment = new DocumentFragment();
            const repetition = this.getAttribute("n") || mapArray.length;
            !cn.includes('-') || await customElements.whenDefined(cn);
            _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(`Creating ${repetition} <${cn}> elements...`);
            const mappedElements = [];
            for (let i = 0; i < repetition; i++) {
                mappedElements.push(dce(cn));
            }
            if (mappedElements[0].shadowRoot) {
                // If the element has a shadowRoot, will need to process any <slots> contained inside so that 
                // slots can be filled by child elements of <ika-me>, instead of having to go inside each mapped
                // element and adding child elements there.
                _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(`Instantiated. Processing subtree slots for ${cn}`);
                // TODO: This select does not penetrate shadow DOM boundaries
                const slots = mappedElements[0].shadowRoot.querySelectorAll("slot");
                const slotNames = Array.from(slots).map((s) => s.getAttribute("name"));
                for (let i = 0; i < repetition; i++) {
                    slotNames.forEach((name) => processSlot.bind(this)(name, mappedElements[i], i));
                }
            }
            _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(`Applying attributes to each element "${cn}"`);
            for (let i = 0; i < repetition; i++) {
                applyAttributesAndAppend.bind(this)(mappedElements[i], fragment, mapArray[i]);
            }
            this.appendChild(fragment);
        }
        function generateIkaXElement(slotName, value) {
            // TODO Investigate assigning slots to TextNode
            const e = dce("ika:x");
            e.setAttribute("slot", slotName);
            e.innerHTML = value;
            return e;
        }
        function processSlot(name, mappedElement, i) {
            // TODO: Review how data is mapped in different configurations for the <ika-me> component
            _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(`Processing slot "${name}" for component ${mappedElement.tagName.toLowerCase()}, cycle ${i}`);
            if (name in this.dataset) {
                // Apply a value statically to some slot in all instances
                mappedElement.appendChild(generateIkaXElement(name, this.dataset[name]));
            }
            else if (bd && name in bd) {
                const bindValue = bd[name];
                const bindTransform = Array.isArray(bindValue) ? bindValue[1] : null;
                const slotValue = bindTransform
                    ? bindTransform(mapArray[i][bindValue[0]])
                    : null; // ERROR HERE!
                //@ts-ignor
                // : mapArray[i][bindVars[name]]
                mappedElement.appendChild(generateIkaXElement(name, slotValue));
            }
            else {
                const nestedSlot = dce("slot");
                nestedSlot.setAttribute("slot", name);
                nestedSlot.setAttribute("name", `${name}-${i}`);
                nestedSlot.textContent = mapArray[i][name];
                mappedElement.appendChild(nestedSlot);
            }
        }
        function applyAttributesAndAppend(mappedElement, fragment, data) {
            if (bd && '#attr' in bd) {
                const attributeSet = bd['#attr'](data);
                oefe(attributeSet, ([attr, val]) => mappedElement.setAttribute(attr, val));
            }
            if (bd && '#prop' in bd) {
                const propSet = bd['#prop'](data);
                oefe(propSet, ([prop, val]) => mappedElement[prop] = val);
            }
            fragment.append(mappedElement);
        }
    }
    setNodeId(id, n, r) { __classPrivateFieldSet(this, _IkaME_nodeId, id, "f"); }
    getNodeId() { return __classPrivateFieldGet(this, _IkaME_nodeId, "f"); }
    connectedCallback() {
        if (this.getAttribute('unwrap') != null) {
            this.replaceWith(...this.childNodes);
        }
    }
}
_IkaME_nodeId = new WeakMap();


/***/ }),

/***/ "./src/components/sdc.ts":
/*!*******************************!*\
  !*** ./src/components/sdc.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IkaSDC)
/* harmony export */ });
/* harmony import */ var _ika__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ika */ "./src/ika.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/events */ "./src/types/events.ts");
/* harmony import */ var _core_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/bind */ "./src/core/bind.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _IkaSDC_instances, _IkaSDC_chain, _IkaSDC_dependents, _IkaSDC_attachSDT;



class IkaSDC extends _core_bind__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super();
        _IkaSDC_instances.add(this);
        _IkaSDC_chain.set(this, []);
        _IkaSDC_dependents.set(this, []);
        //@ts-ignore
        this.addEventListener(_types_events__WEBPACK_IMPORTED_MODULE_1__.CustomEventTypes.ComponentCall, this.addDependentSDC);
    }
    bindValueChanged(update) {
        const isChildSdcOfAffectedSdc = __classPrivateFieldGet(this, _IkaSDC_chain, "f").some(b => b == update.k);
        const hasDependentSdcs = __classPrivateFieldGet(this, _IkaSDC_dependents, "f").length > 0;
        if (!isChildSdcOfAffectedSdc && hasDependentSdcs) {
            _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(`The <ika-sdc> has affected child`);
            // Dependent SDCs in this SDC's child nodes and their node trees are removed from the component's binding callbacks.
            __classPrivateFieldGet(this, _IkaSDC_dependents, "f").forEach(c => c.deregisterBindsWithParentComponent());
            __classPrivateFieldSet(this, _IkaSDC_dependents, [], "f");
        }
        __classPrivateFieldGet(this, _IkaSDC_instances, "m", _IkaSDC_attachSDT).call(this);
    }
    addDependentSDC(e) {
        if (e.detail.type == _types_events__WEBPACK_IMPORTED_MODULE_1__.ComponentCall.EventType.EstablishChain && !e.composedPath()[0].isSameNode(this)) {
            const dependentElement = e.detail.payload.issuer;
            _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(`<ika-sdc> received an EstablishChain event, adding a <${dependentElement.tagName.toLowerCase()}> to depedents`);
            __classPrivateFieldGet(this, _IkaSDC_dependents, "f").push(dependentElement);
        }
    }
    establishChainCb(path, component) {
        this.setComponent(component);
        path.forEach((n, i) => {
            if (n instanceof IkaSDC && i != 0) {
                __classPrivateFieldGet(this, _IkaSDC_chain, "f").unshift(n.getAttribute('b'));
            }
        });
        __classPrivateFieldGet(this, _IkaSDC_chain, "f").length > 0 && _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(`<ika-sdc> registered a SDC dependency chain of [${__classPrivateFieldGet(this, _IkaSDC_chain, "f").join(', ')}]`);
    }
    onParentComponentLoaded() {
        const detail = {
            type: _types_events__WEBPACK_IMPORTED_MODULE_1__.ComponentCall.EventType.EstablishChain,
            nodeId: this.getNodeId(),
            payload: { issuer: this }
        };
        const establishChainEvent = new CustomEvent(_types_events__WEBPACK_IMPORTED_MODULE_1__.CustomEventTypes.ComponentCall, {
            bubbles: true,
            composed: true,
            cancelable: true,
            detail: detail
        });
        _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(`%c<${this.tagName.toLowerCase()}>%c component triggering establish chain event.`, [_ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.ComponentName, 'color: unset']);
        this.dispatchEvent(establishChainEvent);
    }
}
_IkaSDC_chain = new WeakMap(), _IkaSDC_dependents = new WeakMap(), _IkaSDC_instances = new WeakSet(), _IkaSDC_attachSDT = function _IkaSDC_attachSDT() {
    const componentName = this.getComponent().tagName.toLowerCase();
    const bind = this.getAttribute('b');
    const ikaTemplatesChildren = document.getElementsByTagName('ika:templates')[0].children;
    const sdt = getElement('sdt', ikaTemplatesChildren, sdt => sdt.getAttribute('cn') && sdt.getAttribute('cn').toLowerCase() == componentName);
    const stc = getElement('stc', sdt.children, stc => stc.getAttribute('b') == bind);
    const tamc = getElement('tamc', stc.children, tamc => tamc.getAttribute('ts') == this.getAttribute('ts'));
    const template = getElement('template', tamc.children, template => template instanceof HTMLElement && template.dataset.a == this.getComponent().getState(bind));
    if (!template) {
        // No template matches the state value, display nothing for the SDC.
        this.replaceChildren();
    }
    else {
        // Adding SDC children will trigger their constructors firing off EstablishChain events, which will be listend to by this component.
        // No need to register them here.
        if (!(template instanceof HTMLTemplateElement)) {
            console.error(`Retrieved template arm match element isn't a template.`);
            return;
        }
        const clonedNode = template.content.cloneNode(true);
        this.replaceChildren(...clonedNode.childNodes);
    }
    function getElement(type, collection, filter) {
        const result = Array.from(collection).filter(filter);
        checkIfMoreThanOne(type, result);
        return result[0];
    }
    function checkIfMoreThanOne(type, arr) {
        const tag = type == 'template' ? '<template>' : `<ika:${type}>`;
        if (tag == '<template>') {
            arr.length == 0 && _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(`No ${tag} is a match for the current state.`);
        }
        else {
            if (arr.length > 1) {
                console.error(`More than one ${tag} is defined for component "${componentName}"`);
            }
            else if (arr.length == 0) {
                console.error(`No ${tag} is defined for component "${componentName}"`);
            }
        }
    }
};


/***/ }),

/***/ "./src/core/bind.ts":
/*!**************************!*\
  !*** ./src/core/bind.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BindingComponent),
/* harmony export */   "deregisterBind": () => (/* binding */ deregisterBind),
/* harmony export */   "getParentIkaComponent": () => (/* binding */ getParentIkaComponent),
/* harmony export */   "registerBind": () => (/* binding */ registerBind)
/* harmony export */ });
/* harmony import */ var _ika__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ika */ "./src/ika.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/events */ "./src/types/events.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BindingComponent_nodeId, _BindingComponent_component;


class BindingComponent extends HTMLElement {
    constructor() {
        super();
        _BindingComponent_nodeId.set(this, null);
        _BindingComponent_component.set(this, null);
        const regTargets = this.getRegistrationTargets();
        regTargets.forEach(n => _ika__WEBPACK_IMPORTED_MODULE_0__.ika.reg.registerNode(this, n, this.registeredCallback));
    }
    getRegistrationTargets() {
        return [this];
    }
    registeredCallback(id, n, requestor) {
        // requestor.setComponent(requestor)
        requestor.setNodeId(id);
        requestor.registerBindsWithParentComponent.bind(requestor)();
    }
    setComponent(t) { __classPrivateFieldSet(this, _BindingComponent_component, t, "f"); }
    getComponent() { return __classPrivateFieldGet(this, _BindingComponent_component, "f"); }
    setNodeId(id) { __classPrivateFieldSet(this, _BindingComponent_nodeId, id, "f"); }
    getNodeId() { return __classPrivateFieldGet(this, _BindingComponent_nodeId, "f"); }
    registerBindsWithParentComponent() {
        registerBind({
            requester: this,
            bind: this.getAttribute('b'),
            global: this.getAttribute('global') != null,
        });
    }
    deregisterBindsWithParentComponent() {
        deregisterBind({
            requester: this,
            bind: this.getAttribute('b'),
            global: this.getAttribute('global') != null,
        });
    }
    onParentComponentLoaded() { }
    bindValueChanged(update) {
        console.warn(`Component %c<${this.tagName.toLowerCase()}>%c did not implement state change callback.`, [_ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.ComponentName, 'color: unset']);
    }
}
_BindingComponent_nodeId = new WeakMap(), _BindingComponent_component = new WeakMap();
async function registerBind(prop) {
    _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(`Registering binding to %c"${prop.bind}"%c by component %c<${prop.requester.tagName.toLowerCase()}>`, [_ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.VariableValue, 'color: unset', _ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.ComponentName]);
    if (!prop.global) {
        let parentComponent = await getParentIkaComponent(prop.requester);
        // no parent will result in unresolving get parent promise since callback will never be called to resolve. 
        const parentComponentName = parentComponent ? parentComponent.tagName.toLowerCase() : null;
        parentComponent
            ? customElements.whenDefined(parentComponentName).then(() => sendMsgAndInit(prop.requester, parentComponent))
            : console.warn(`Registration failed for %c<${prop.requester.tagName.toLowerCase()}>%c: no parent component found.`, [_ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.ComponentName, 'color: unset']);
    }
    else {
        _ika__WEBPACK_IMPORTED_MODULE_0__.ika.reg.subscribeToBind(prop.bind, prop.requester.getNodeId(), prop.requester.bindValueChanged.bind(prop.requester));
    }
    function sendMsgAndInit(requester, parentComponent) {
        try {
            _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(`Component %c<${prop.requester.tagName.toLowerCase()}>%c is sending bind registration to parent %c<${parentComponent.tagName.toLowerCase()}>`, [_ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.ComponentName, _ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.Unset, _ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.ComponentName]);
            requester.dispatchEvent(getRegistrationEvent(true, requester, prop.bind));
            requester.onParentComponentLoaded();
            const initState = parentComponent.getState(prop.bind);
            initState && prop.requester.bindValueChanged({ k: prop.bind, v: initState });
        }
        catch (e) {
            console.error(`Ika error - Could not send registration`);
            console.log({ requester: requester, parentComponent: parentComponent });
            throw e;
        }
    }
}
async function deregisterBind(prop) {
    _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(`Deregistering binding to %c"${prop.bind}"%c by component %c<${prop.requester.tagName.toLowerCase()}>`, [_ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.VariableValue, 'color: unset', _ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.ComponentName]);
    if (!prop.global) {
        const parentComponent = await getParentIkaComponent(prop.requester);
        parentComponent
            ? prop.requester.dispatchEvent(getRegistrationEvent(false, prop.requester, prop.bind))
            : console.warn(`Registration failed for <${prop.requester.tagName.toLowerCase()}>: no parent component found.`);
    }
}
function getRegistrationEvent(register, requester, bind) {
    const leap = Number.parseInt(requester.getAttribute('leap'));
    const detail = {
        type: register ? _types_events__WEBPACK_IMPORTED_MODULE_1__.ComponentCall.EventType.RegisterBind : _types_events__WEBPACK_IMPORTED_MODULE_1__.ComponentCall.EventType.DeregisterBind,
        nodeId: requester.getNodeId(),
        payload: {
            bind: bind,
            issuer: requester,
            leap: Number.isNaN(leap) ? null : leap
        }
    };
    return new CustomEvent(_types_events__WEBPACK_IMPORTED_MODULE_1__.CustomEventTypes.ComponentCall, {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: detail
    });
}
function getParentIkaComponent(c, ignoreLeap) {
    const promise = new Promise((res, rej) => {
        const detail = {
            type: _types_events__WEBPACK_IMPORTED_MODULE_1__.ComponentCall.EventType.GetComponent,
            nodeId: c.getNodeId(),
            payload: {
                cb: res,
                leap: ignoreLeap ? null : Number.parseInt(c.getAttribute('leap'))
            }
        };
        const evt = new CustomEvent(_types_events__WEBPACK_IMPORTED_MODULE_1__.CustomEventTypes.ComponentCall, {
            detail: detail,
            bubbles: true,
            cancelable: true,
            composed: true
        });
        c.dispatchEvent(evt);
    });
    return promise;
    // let parent = e, isCustomComponent = false, hasParent = true;
    // do {
    //     parent = parent.parentElement || (parent.parentNode as ShadowRoot).host
    //     if (!parent) {
    //         hasParent = false
    //     } else {
    //         isCustomComponent = parent.tagName.includes('-') && !(['IKA-B', 'IKA-AB', 'IKA-SDC'].includes(parent.tagName))
    //     }
    // } while (!isCustomComponent && hasParent)
    // return isCustomComponent ? parent : null
}


/***/ }),

/***/ "./src/core/buf.ts":
/*!*************************!*\
  !*** ./src/core/buf.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IkaBuffer": () => (/* binding */ IkaBuffer),
/* harmony export */   "processBuffer": () => (/* binding */ processBuffer)
/* harmony export */ });
/* harmony import */ var _ika__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ika */ "./src/ika.ts");
/* harmony import */ var _types_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/buffer */ "./src/types/buffer.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _IkaBuffer_buffer;


class IkaBuffer {
    constructor() {
        _IkaBuffer_buffer.set(this, {});
    }
    debug() {
        return {
            buffer: __classPrivateFieldGet(this, _IkaBuffer_buffer, "f")
        };
    }
    push(update) {
        if (!['string', 'number', 'boolean'].includes(typeof update.v)) {
            console.warn(`Unexpected data type being pushed to Ika Buffer. Push rejected`);
            console.log(update);
            return;
        }
        const buf = __classPrivateFieldGet(this, _IkaBuffer_buffer, "f");
        function checkAndInit(o, k, i) {
            if (!o[k]) {
                o[k] = i;
            }
        }
        checkAndInit(buf, update.n, {});
        checkAndInit(buf[update.n], update.type, {});
        checkAndInit(buf[update.n][update.type], update.k, []);
        buf[update.n][update.type][update.k].push(update.v);
    }
    getBuffer() {
        optimiseBuffer();
        return cloneBuffer(__classPrivateFieldGet(this, _IkaBuffer_buffer, "f"));
        function cloneBuffer(cloneFrom) {
            const buffer = {};
            Object.entries(cloneFrom).forEach(([nodeId, typeGrouping]) => {
                buffer[nodeId] = {};
                Object.entries(typeGrouping).forEach(([type, keyArr]) => {
                    buffer[nodeId][type] = {};
                    Object.entries(keyArr).forEach(([k, v]) => {
                        buffer[nodeId][type][k] = [...v];
                    });
                });
            });
            return buffer;
        }
        function optimiseBuffer() {
        }
    }
    resetBuffer() { __classPrivateFieldSet(this, _IkaBuffer_buffer, {}, "f"); }
}
_IkaBuffer_buffer = new WeakMap();
function processBuffer() {
    // if (Object.entries(ika.buffer.getBuffer()).length > 0) {
    //     console.log(JSON.stringify(Object.entries(ika.buffer.getBuffer())))
    // }
    document.getElementById('ups').textContent = IKA_UPS.toString();
    Object.entries(_ika__WEBPACK_IMPORTED_MODULE_0__.ika.buffer.getBuffer()).forEach(([nodeId, updates]) => {
        const target = _ika__WEBPACK_IMPORTED_MODULE_0__.ika.reg.getNodeFromId(nodeId);
        // This passed Buffer is without any optimisation - should receive val as a single value only. 
        _types_buffer__WEBPACK_IMPORTED_MODULE_1__.UpdateType.PROP in updates
            && Object.entries(updates[_types_buffer__WEBPACK_IMPORTED_MODULE_1__.UpdateType.PROP]).forEach(([key, val]) => {
                target[key] = val.pop();
            });
        _types_buffer__WEBPACK_IMPORTED_MODULE_1__.UpdateType.ATTR in updates && target.nodeType == Node.ELEMENT_NODE
            && Object.entries(updates[_types_buffer__WEBPACK_IMPORTED_MODULE_1__.UpdateType.ATTR]).forEach(([key, val]) => {
                target.setAttribute(key, val.pop().toString());
            });
    });
    _ika__WEBPACK_IMPORTED_MODULE_0__.ika.buffer.resetBuffer();
}


/***/ }),

/***/ "./src/core/init.ts":
/*!**************************!*\
  !*** ./src/core/init.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitBundle": () => (/* binding */ InitBundle)
/* harmony export */ });
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _InitBundle_data;
class InitBundle {
    constructor() {
        _InitBundle_data.set(this, {});
    }
    add(cn, bundle) {
        if (typeof cn != 'string') {
            throw 'Initialisation bundle object must have a string component name.';
        }
        __classPrivateFieldGet(this, _InitBundle_data, "f")[cn] = bundle;
    }
    get(cn) {
        // Not deep cloned! For safety, should be copied.
        return __classPrivateFieldGet(this, _InitBundle_data, "f")[cn];
    }
}
_InitBundle_data = new WeakMap();


/***/ }),

/***/ "./src/core/reg.ts":
/*!*************************!*\
  !*** ./src/core/reg.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IkaRegistry)
/* harmony export */ });
/* harmony import */ var _ika__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ika */ "./src/ika.ts");
/* harmony import */ var _sbr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sbr */ "./src/core/sbr.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _IkaRegistry_imports, _IkaRegistry_nodeIds, _IkaRegistry_binds;


class IkaRegistry {
    constructor() {
        _IkaRegistry_imports.set(this, {});
        _IkaRegistry_nodeIds.set(this, {});
        _IkaRegistry_binds.set(this, new _sbr__WEBPACK_IMPORTED_MODULE_1__["default"]());
    }
    hasImport(path) {
        return path in __classPrivateFieldGet(this, _IkaRegistry_imports, "f");
    }
    registerImport(path) {
        __classPrivateFieldGet(this, _IkaRegistry_imports, "f")[path] = { t: [], n: [] };
    }
    addTemplateNode(path, node) {
        __classPrivateFieldGet(this, _IkaRegistry_imports, "f")[path].t.push(node);
    }
    addNodes(path, nodes) {
        __classPrivateFieldGet(this, _IkaRegistry_imports, "f")[path].n.push(...nodes);
    }
    getImportRegisterByPath(p) {
        return __classPrivateFieldGet(this, _IkaRegistry_imports, "f")[p];
    }
    // Pass StateBindRegisters class methods available through this.#binds as IkaRegistry class methods
    subscribeToBind(k, nodeId, cb) { __classPrivateFieldGet(this, _IkaRegistry_binds, "f").subscribeToBind(k, nodeId, cb); }
    unsubscribeToBind(nodeId, k) { __classPrivateFieldGet(this, _IkaRegistry_binds, "f").unsubscribeToBind(nodeId, k); }
    setBindValue(k, v, nodeId, p) {
        __classPrivateFieldGet(this, _IkaRegistry_binds, "f").setValue(k, v, nodeId, p);
    }
    getBindValue(k, nodeId) {
        const v = __classPrivateFieldGet(this, _IkaRegistry_binds, "f").getValue(k, nodeId);
        return v;
    }
    registerNode(requester, n, cb) {
        // This checks if a node has already been registered. Not entirely necessary to normal functioning?
        if (!requester || !n) {
            console.error(`Could not register node - requester and element must be supplied.`);
        }
        const existingRegistration = Object.entries(__classPrivateFieldGet(this, _IkaRegistry_nodeIds, "f")).find(entry => entry[1].isSameNode(n));
        if (existingRegistration) {
            console.warn(`Another registration request is made for a node. It's currently registered as %c${existingRegistration[0]}`, 'color: #999');
            return;
        }
        this.getNewId(cb)
            .then(([id, cb]) => {
            _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(`Registered node %c<${n === null || n === void 0 ? void 0 : n.tagName.toLowerCase()}>%c with ID %c${id}`, [_ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.ComponentName, 'color: unset', 'color: #999']);
            __classPrivateFieldGet(this, _IkaRegistry_nodeIds, "f")[id] = n;
            cb(id, n, requester);
        });
    }
    getNodeFromId(id) {
        if (!(id in __classPrivateFieldGet(this, _IkaRegistry_nodeIds, "f"))) {
            console.warn(`A query is made for node id %c${id} %c, and the ID was not registered.`, 'color: #999', 'color: unset');
        }
        return __classPrivateFieldGet(this, _IkaRegistry_nodeIds, "f")[id];
    }
    deregisterNode(n, id) {
        if (!(__classPrivateFieldGet(this, _IkaRegistry_nodeIds, "f")[id])) {
            console.warn(`Trying to deregister node ID %c${id}%c, but the ID was not registered.`, 'color: #999', 'color: unset');
        }
        else if (!__classPrivateFieldGet(this, _IkaRegistry_nodeIds, "f")[id].isSameNode(n)) {
            console.warn(`Trying to deregister node ID %c${id}%c, but the supplied node was not the same as records.`, 'color: #999', 'color: unset');
        }
        else {
            delete __classPrivateFieldGet(this, _IkaRegistry_nodeIds, "f")[id];
            __classPrivateFieldGet(this, _IkaRegistry_binds, "f").clearDeregisteredNode(id);
            _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(`Node ID %c${id}%c is deregistered`, ['color: #999', 'color: unset']);
        }
    }
    async getNewId(cb) {
        let newId;
        do {
            newId = await generateIdString();
        } while (newId in __classPrivateFieldGet(this, _IkaRegistry_nodeIds, "f"));
        __classPrivateFieldGet(this, _IkaRegistry_nodeIds, "f")[newId] = null;
        return [newId, cb];
    }
}
_IkaRegistry_imports = new WeakMap(), _IkaRegistry_nodeIds = new WeakMap(), _IkaRegistry_binds = new WeakMap();
async function generateIdString() {
    const threads = [], parts = 4, length = 6;
    for (let i = 0; i < 4; i++) {
        threads.push(new Promise((res) => {
            let str = '';
            for (let j = 0; j < length; j++) {
                const base = Math.floor(Math.random() * 26) + 65;
                const bump = 32 * Math.round(Math.random());
                str += String.fromCharCode(base + bump);
            }
            res(str);
        }));
    }
    const res = await Promise.all(threads);
    return res.join('-');
}


/***/ }),

/***/ "./src/core/sbr.ts":
/*!*************************!*\
  !*** ./src/core/sbr.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StateBindRegister)
/* harmony export */ });
/* harmony import */ var _ika__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ika */ "./src/ika.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _StateBindRegister_binds;

class StateBindRegister {
    constructor() {
        _StateBindRegister_binds.set(this, {});
    }
    subscribeToBind(k, nodeId, cb) {
        if (!nodeId || !k || !cb) {
            console.error(`Subscribing to bind must specify bind key, node ID, and a callback function.`);
            console.log({ k: k, nodeId: nodeId, cb: cb });
            return;
        }
        const newCbRecord = { nodeId: nodeId, cb: cb };
        if (!(k in __classPrivateFieldGet(this, _StateBindRegister_binds, "f"))) {
            // Subscribing to a global bind is allowed before it's been set a value. This defaults to a permissionless bind var.
            __classPrivateFieldGet(this, _StateBindRegister_binds, "f")[k] = { v: null, cb: [newCbRecord] };
        }
        else {
            const bindRecord = __classPrivateFieldGet(this, _StateBindRegister_binds, "f")[k];
            if (bindRecord.p && !bindRecord.p.rw.includes(nodeId) && bindRecord.p.r && !bindRecord.p.r.includes(nodeId)) {
                _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(`Bind by node %c${nodeId} onto key "%c${k}%c" failed as this node is not permissioned.`, ['color: #999', 'color: unset', _ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.VariableValue, 'color: unset']);
                return;
            }
            bindRecord.cb.push(newCbRecord);
        }
        _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(`Node %c${nodeId}%c is subscribed to bind key %c"${k}"%c`, [_ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.NodeID, _ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.Unset, _ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.VariableValue, _ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.Unset]);
    }
    unsubscribeToBind(nodeId, k) {
        if (k && !(k in __classPrivateFieldGet(this, _StateBindRegister_binds, "f"))) {
            console.warn(`"%c${k}%c" is not a registered bind key.`, _ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.VariableValue, 'color: unset');
            return;
        }
        const scope = [k] || 0;
        scope.forEach(bind => {
            __classPrivateFieldGet(this, _StateBindRegister_binds, "f")[bind].cb = __classPrivateFieldGet(this, _StateBindRegister_binds, "f")[bind].cb.filter(entry => entry.nodeId != nodeId);
        });
    }
    clearDeregisteredNode(nodeId) {
        performance.mark('registry-deregister-node-from-binds-start', {
            detail: { nodeId: nodeId }
        });
        const bindEntries = Object.entries(__classPrivateFieldGet(this, _StateBindRegister_binds, "f"));
        bindEntries.forEach(([k, bind]) => bind.cb = bind.cb.filter(record => record.nodeId != nodeId));
        performance.measure('registry-deregister-node-from-binds-end', {
            start: 'registry-deregister-node-from-binds-start',
            detail: { nodeId: nodeId, bindsCount: bindEntries.length }
        });
    }
    getValue(k, nodeId) {
        if (!__classPrivateFieldGet(this, _StateBindRegister_binds, "f")[k]) {
            console.warn(`Tried reading state ${k}, but it's not defined.`);
            return null;
        }
        const p = __classPrivateFieldGet(this, _StateBindRegister_binds, "f")[k].p;
        const nodeIdHasReadPermission = p && nodeId && (p.rw.includes(nodeId) || (p.r && p.r.includes(nodeId)));
        if (!p || nodeIdHasReadPermission) {
            return __classPrivateFieldGet(this, _StateBindRegister_binds, "f")[k].v;
        }
        else {
            console.warn(`Node ID ${nodeId} tried reading state ${k}, but it has no permission to read.`);
        }
    }
    deleteNodeFromBindRecords(node, id) {
        this.clearDeregisteredNode(id);
        _ika__WEBPACK_IMPORTED_MODULE_0__.ika.reg.deregisterNode(node, id);
    }
    setValue(k, v, nodeId, p) {
        if (k in __classPrivateFieldGet(this, _StateBindRegister_binds, "f")) {
            const bindRecord = __classPrivateFieldGet(this, _StateBindRegister_binds, "f")[k];
            const hasPermission = checkIfPermissionedForRW(bindRecord);
            if (!hasPermission) {
                return;
            }
            Object.assign(bindRecord, { v: v });
            p && setPermissions(nodeId, p, bindRecord);
            _ika__WEBPACK_IMPORTED_MODULE_0__.ika.debug(`Bind "%c${k}%c" has changed to "%c${v}%c", triggering ${__classPrivateFieldGet(this, _StateBindRegister_binds, "f")[k].cb.length} callbacks.`, [_ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.VariableValue, _ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.Unset, _ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.VariableValue, _ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.Unset]);
            cleanInvokeCbs.bind(this)(bindRecord.cb, { k: k, v: v });
        }
        else {
            __classPrivateFieldGet(this, _StateBindRegister_binds, "f")[k] = {
                v: v,
                cb: []
            };
            p && setPermissions(nodeId, p, __classPrivateFieldGet(this, _StateBindRegister_binds, "f")[k]);
        }
        function cleanInvokeCbs(ar, u) {
            ar.forEach(entry => {
                const node = _ika__WEBPACK_IMPORTED_MODULE_0__.ika.reg.getNodeFromId(entry.nodeId);
                (node === null || node === void 0 ? void 0 : node.isConnected)
                    ? entry.cb(u)
                    : this.deleteNodeFromBindRecords(node, entry.nodeId);
            });
        }
        function copyPermissionObject(p) {
            // Permission is copied from arrays so that they cannot be changed outside IkaRegistry class methods.
            const out = { rw: [] };
            if (Array.isArray(p.rw)) {
                out.rw = [...p.rw];
            }
            if (Array.isArray(p.r)) {
                out.r = [...p.r];
            }
            return out;
        }
        function checkIfPermissionedForRW(bindRecord) {
            if (bindRecord.p && !nodeId) {
                console.error(`Error setting bind value "${k}": a node ID must be provided as the binding key is permissioned.`);
                return false;
            }
            if (bindRecord.p && !bindRecord.p.rw.includes(nodeId)) {
                console.warn(`"%c${k}%c" is already registered as a permissioned bind, and this node ID is not permissioned for Read/Write.
                If you meant to register a bind for the first time, nodes with Read/Write permission must unregister it first.`, _ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.VariableValue, 'color: unset');
                return false;
            }
            return true;
        }
        function setPermissions(nodeId, p, bindRecord) {
            if (!nodeId) {
                console.warn(`Permissions on bind key "%c${k}%c" is not set, as no node ID was provided.`, _ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.VariableValue, 'color: unset');
            }
            else {
                if (bindRecord.p && !bindRecord.p.rw.includes(nodeId)) {
                    console.warn(`Setting permissions on bind key "%c${k}%c" is denied. The provided node ID does not have RW permission.`, _ika__WEBPACK_IMPORTED_MODULE_0__.IkaDebugStyles.VariableValue, 'color: unset');
                    return;
                }
                // Automatically giving the node setting permissions RW privilege.
                const permissions = copyPermissionObject(p);
                permissions.rw.push(nodeId);
                Object.assign(bindRecord, { p: permissions });
            }
        }
    }
}
_StateBindRegister_binds = new WeakMap();


/***/ }),

/***/ "./src/ika.ts":
/*!********************!*\
  !*** ./src/ika.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IkaComponent": () => (/* binding */ IkaComponent),
/* harmony export */   "IkaDebugStyles": () => (/* binding */ IkaDebugStyles),
/* harmony export */   "createIkaComponent": () => (/* binding */ createIkaComponent),
/* harmony export */   "ika": () => (/* binding */ ika),
/* harmony export */   "initaliseStateFromBundle": () => (/* binding */ initaliseStateFromBundle)
/* harmony export */ });
/* harmony import */ var _core_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/bind */ "./src/core/bind.ts");
/* harmony import */ var _core_buf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/buf */ "./src/core/buf.ts");
/* harmony import */ var _core_sbr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/sbr */ "./src/core/sbr.ts");
/* harmony import */ var _components_sdc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sdc */ "./src/components/sdc.ts");
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/init */ "./src/core/init.ts");
/* harmony import */ var _core_reg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/reg */ "./src/core/reg.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/events */ "./src/types/events.ts");
/* harmony import */ var _components_a__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/a */ "./src/components/a.ts");
/* harmony import */ var _components_ab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ab */ "./src/components/ab.ts");
/* harmony import */ var _components_bf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/bf */ "./src/components/bf.ts");
/* harmony import */ var _components_me__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/me */ "./src/components/me.ts");
/* harmony import */ var _components_import__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/import */ "./src/components/import.ts");
/* harmony import */ var _components_b__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/b */ "./src/components/b.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
performance.mark('ika-init');













const componentImports = [
    new _components_a__WEBPACK_IMPORTED_MODULE_7__["default"](),
    new _components_ab__WEBPACK_IMPORTED_MODULE_8__["default"](),
    new _components_bf__WEBPACK_IMPORTED_MODULE_9__["default"](),
    new _components_me__WEBPACK_IMPORTED_MODULE_10__["default"](),
    new _components_import__WEBPACK_IMPORTED_MODULE_11__["default"](),
    new _components_b__WEBPACK_IMPORTED_MODULE_12__["default"](),
    new _components_sdc__WEBPACK_IMPORTED_MODULE_3__["default"](),
];
const ika = {
    debug: (s, o) => {
        if (TESTING_FLAGS.verbose) {
            if (typeof s == 'object') {
                console.debug(s);
            }
            else {
                const op = ['color: #6aaff8; font-weight: 600', 'color: unset; font-weight: unset'];
                Array.isArray(o) && op.push(...o);
                console.debug(`%c‹debug› %c` + s, ...op);
            }
        }
    },
    buffer: new _core_buf__WEBPACK_IMPORTED_MODULE_1__.IkaBuffer(),
    reg: new _core_reg__WEBPACK_IMPORTED_MODULE_5__["default"](),
    data: new _core_init__WEBPACK_IMPORTED_MODULE_4__.InitBundle()
};
initIka();
function initIka() {
    ika.debug('Ika initialising...');
    importIkaComponents();
    startBufferProcessing();
    // attachMutationObserver()
    performance.measure('ika-init-complete', 'ika-init');
    // function attachMutationObserver() {
    //     const ob = new MutationObserver(findRemovals)
    //     ob.observe(window.document, { subtree: true, childList: true })
    //     function findRemovals(ra: Array<MutationRecord>, ob: MutationObserver) {
    //         // Currenly only monitoring removed Element nodes and not document fragments
    //         const removedElementNodes = ra
    //             .filter(r => r.removedNodes.length > 0 && Array.from(r.removedNodes).some(n => n.nodeType == 1))
    //             .map(r => Array.from(r.removedNodes).filter(n => n instanceof HTMLElement && n.tagName.includes('-')))
    //             .flat()
    //         if (removedElementNodes.length > 0) {
    //             console.log('Removed: ')
    //             console.log(removedElementNodes)
    //             console.log(ra)
    //         }
    //         const addedNodes = ra
    //             .filter(r => r.addedNodes.length > 0 && Array.from(r.addedNodes).some(n => n.nodeType == 1))
    //             .map(r => Array.from(r.addedNodes).filter(n => n.nodeType == 1))
    //             .flat()
    //         if (addedNodes.length > 0) {
    //             console.log('Added: ')
    //             console.log(addedNodes)
    //             console.log(ra)
    //         }
    //     }
    // }
    async function importIkaComponents() {
        if (!Array.isArray(componentImports)) {
            return;
        }
        const importPromises = [];
        componentImports.forEach(c => {
            importPromises.push(__webpack_require__("./src/components lazy recursive ^\\.\\/.*\\.js$")(`./${c}.js`));
        });
        const imports = await Promise.all(importPromises);
        imports.forEach((i, index) => {
            customElements.define(`ika-${componentImports[index]}`, i.default);
        });
    }
    function startBufferProcessing() {
        document.addEventListener('DOMContentLoaded', (e) => {
            setInterval(_core_buf__WEBPACK_IMPORTED_MODULE_1__.processBuffer, 1000 / IKA_UPS);
        });
        ika.debug('Buffer processing started at ' + Math.round(performance.measure('ika-buf-started', 'ika-init').duration) + ' ms');
    }
}
class IkaComponent extends HTMLElement {
}
function createIkaComponent(componentName, options) {
    var _instances, _stateBinds, _methods, _nodeId, _onStateChange, _construct, _processEvent, _a;
    try {
        (options === null || options === void 0 ? void 0 : options.bundle) && ika.data.add(componentName, options.bundle);
        customElements.define(componentName, (_a = class extends HTMLElement {
                constructor() {
                    var _a;
                    super();
                    _instances.add(this);
                    _stateBinds.set(this, new _core_sbr__WEBPACK_IMPORTED_MODULE_2__["default"]());
                    _methods.set(this, {});
                    _nodeId.set(this, null);
                    _onStateChange.set(this, {});
                    __classPrivateFieldSet(this, _methods, (_a = ika.data.get(componentName)) === null || _a === void 0 ? void 0 : _a.m, "f");
                    addEventListeners.bind(this)();
                    this.getAttribute('ika:b') != null && bindToParentStates.bind(this)();
                    __classPrivateFieldGet(this, _instances, "m", _construct).bind(this)();
                    (options === null || options === void 0 ? void 0 : options.construct) && options.construct(this);
                    function addEventListeners() {
                        const types = [_types_events__WEBPACK_IMPORTED_MODULE_6__.CustomEventTypes.ComponentCall, 'click'];
                        Array.isArray(options === null || options === void 0 ? void 0 : options.eventBinds) && types.push(...options.eventBinds);
                        types.forEach(t => {
                            this.addEventListener(t, __classPrivateFieldGet(this, _instances, "m", _processEvent).bind(this));
                        });
                    }
                    function bindToParentStates() {
                        ika.reg.registerNode(this, this, this.registeredCallback);
                    }
                }
                registeredCallback(id, n, requestor) {
                    requestor.setNodeId(id);
                    requestor.registerBindsWithParentComponent.bind(requestor)();
                }
                registerBindsWithParentComponent() {
                    const isGlobalBind = this.getAttribute('global') != null;
                    Object.values(this.dataset).forEach(bind => {
                        (0,_core_bind__WEBPACK_IMPORTED_MODULE_0__.registerBind)({
                            requester: this,
                            bind: bind,
                            global: isGlobalBind,
                        });
                    });
                }
                onParentComponentLoaded() { }
                bindValueChanged(update) {
                    const statesToUpdate = Object.entries(this.dataset).filter(([state, bind]) => update.k == bind);
                    // States to update should only be 1 entry, since it does not make sense to bind multiple states to the same parent state
                    statesToUpdate.forEach(([state, bind]) => this.setState(state, update.v));
                }
                getNodeId() { return __classPrivateFieldGet(this, _nodeId, "f"); }
                setNodeId(id) { __classPrivateFieldSet(this, _nodeId, id, "f"); }
                subscribeToBind(k, id, cb) {
                    __classPrivateFieldGet(this, _stateBinds, "f").subscribeToBind(k, id, cb);
                }
                unsubscribeToBind(id, k) { __classPrivateFieldGet(this, _stateBinds, "f").unsubscribeToBind(this.getNodeId(), k); }
                getState(key) { return __classPrivateFieldGet(this, _stateBinds, "f").getValue(key); }
                setState(key, val) {
                    __classPrivateFieldGet(this, _stateBinds, "f").setValue(key, val);
                    if (typeof __classPrivateFieldGet(this, _onStateChange, "f")[key] == 'function') {
                        // State change is not integrated into the bind register callbacks. May be better to located there.
                        __classPrivateFieldGet(this, _onStateChange, "f")[key](this, { k: key, v: val });
                    }
                }
                onStateChange(k, func) {
                    __classPrivateFieldGet(this, _onStateChange, "f")[k] = func;
                }
            },
            _stateBinds = new WeakMap(),
            _methods = new WeakMap(),
            _nodeId = new WeakMap(),
            _onStateChange = new WeakMap(),
            _instances = new WeakSet(),
            _construct = function _construct() {
                setComponentTemplate(componentName, (options === null || options === void 0 ? void 0 : options.templateId) ? options.templateId : componentName, this);
                ika.debug(`Component %c<${componentName}>%c is constructed.`, [IkaDebugStyles.ComponentName, 'color: unset']);
                function setComponentTemplate(componentName, id, comp) {
                    const templateRef = document.getElementById(id);
                    if (!templateRef || !(templateRef instanceof HTMLTemplateElement)) {
                        console.error(`Error creating component ${componentName}:\n A template with ID ${(id)} is not found.`);
                        return;
                    }
                    else {
                        ika.debug(`Building component %c<${componentName}>`, [IkaDebugStyles.ComponentName]);
                    }
                    const clonedNode = templateRef.content.cloneNode(true);
                    attachDebugButton();
                    initaliseStateFromBundle(comp);
                    comp.attachShadow({ mode: 'open' }).appendChild(clonedNode);
                    function attachDebugButton() {
                        if (TESTING_FLAGS.debugPrintBtn) {
                            const debugBox = document.createElement('div');
                            const btn = document.createElement('button');
                            btn.innerHTML = 'Debug Print';
                            btn.setAttribute('class', 'debugBtn');
                            btn.setAttribute('style', `margin: 0.5rem 0; background: #333; color: #eee; padding: 0.25rem; border: 1px solid #222`);
                            btn.onclick = (e) => { e.stopPropagation(); this.debugPrint(); };
                            debugBox.append(btn);
                            clonedNode.append(debugBox);
                        }
                    }
                }
            },
            _processEvent = function _processEvent(e) {
                const eventSource = e.composedPath()[0];
                const shouldHandle = checkIfShouldHandle.bind(this)(e);
                if (!shouldHandle) {
                    return;
                }
                e.stopPropagation();
                if (!(eventSource instanceof HTMLElement)) {
                    ika.debug(`Received an event that did not originate from an HTMLElement. No action taken.`);
                    ika.debug(eventSource);
                    return;
                }
                else {
                    ika.debug(`Component %c<${componentName}>%c received event %c${e.type}%c, from %c<${eventSource.tagName.toLowerCase()}>`, [IkaDebugStyles.ComponentName, 'color: unset', IkaDebugStyles.VariableValue, 'color: unset', IkaDebugStyles.ComponentName]);
                }
                switch (e.type) {
                    case _types_events__WEBPACK_IMPORTED_MODULE_6__.CustomEventTypes.ComponentCall:
                        if ('detail' in e) {
                            processComponentCall.bind(this)(e);
                        }
                        else {
                            ika.debug(`%c<${componentName}>%c received component call from %c<${componentName}>%c but it did not contain detail.`);
                        }
                        break;
                    default: processStandardEvent.bind(this)(e);
                }
                function checkIfShouldHandle(e) {
                    // Ignore events fired off from this node
                    if (eventSource instanceof HTMLElement && eventSource.isSameNode(this)) {
                        return false;
                    }
                    // If the event is a component call and has non-zero leaps, it should go to a higher level component.
                    const leapTypes = [_types_events__WEBPACK_IMPORTED_MODULE_6__.ComponentCall.EventType.RegisterBind, _types_events__WEBPACK_IMPORTED_MODULE_6__.ComponentCall.EventType.DeregisterBind, _types_events__WEBPACK_IMPORTED_MODULE_6__.ComponentCall.EventType.GetComponent];
                    if (e.type == _types_events__WEBPACK_IMPORTED_MODULE_6__.CustomEventTypes.ComponentCall && e instanceof CustomEvent && leapTypes.includes(e.detail.type)) {
                        const detail = e.detail;
                        const leaps = detail.payload.leap;
                        if (Number.isInteger(leaps) && leaps > 0) {
                            detail.payload.leap--;
                            return false;
                        }
                    }
                    return true;
                }
                function processComponentCall(e) {
                    const d = e.detail;
                    ika.debug(`The component call is of type %c${d.type}`, [IkaDebugStyles.VariableValue]);
                    switch (e.detail.type) {
                        case _types_events__WEBPACK_IMPORTED_MODULE_6__.ComponentCall.EventType.RegisterBind: {
                            const payload = e.detail.payload;
                            const bind = payload.bind;
                            const issuer = payload.issuer;
                            // if (['IKA-B', 'IKA-AB', 'IKA-SDC'].includes(issuer.tagName)) {
                            this.subscribeToBind(bind, issuer.getNodeId(), issuer.bindValueChanged.bind(issuer));
                            // } else {
                            //     console.warn(`<${payload.issuer.tagName.toLowerCase()}> fired a register bind event, and there's no handler implemented.`)
                            // }
                            break;
                        }
                        case _types_events__WEBPACK_IMPORTED_MODULE_6__.ComponentCall.EventType.DeregisterBind: {
                            const payload = e.detail.payload;
                            this.unsubscribeToBind(payload.issuer.getNodeId());
                            break;
                        }
                        case _types_events__WEBPACK_IMPORTED_MODULE_6__.ComponentCall.EventType.EstablishChain: {
                            const payload = e.detail.payload;
                            if (['IKA-SDC'].includes(payload.issuer.tagName)) {
                                // @ts-ignore
                                d.payload.issuer.establishChainCb(e.composedPath(), this);
                            }
                            break;
                        }
                        case _types_events__WEBPACK_IMPORTED_MODULE_6__.ComponentCall.EventType.GetComponent: {
                            const payload = e.detail.payload;
                            payload.cb(this);
                            break;
                        }
                        case _types_events__WEBPACK_IMPORTED_MODULE_6__.ComponentCall.EventType.InvokeFunction: {
                            __classPrivateFieldGet(this, _methods, "f")[e.detail.key](__classPrivateFieldGet(this, _methods, "f"), this, e.detail.invocationEvent, e.detail.params);
                            break;
                        }
                        default: console.error(`Unrecognised component call type ${d.type}.`);
                    }
                }
                function processStandardEvent(e) {
                    const bindFn = validateAndGetBindFn.bind(this)();
                    if (!bindFn) {
                        return;
                    }
                    try {
                        __classPrivateFieldGet(this, _methods, "f")[bindFn](__classPrivateFieldGet(this, _methods, "f"), this);
                    }
                    catch (error) {
                        console.warn(`Error while executing requested function ${bindFn}.`);
                        throw error;
                    }
                    function validateAndGetBindFn() {
                        let se;
                        function hasIkaBfAttr(element) {
                            return element.getAttribute('ika:bf') != null;
                        }
                        for (const element of e.composedPath()) {
                            if (element instanceof HTMLElement && hasIkaBfAttr(element)) {
                                se = element;
                                break;
                            }
                        }
                        if (!se) {
                            return;
                        }
                        if (!se.dataset || Object.entries(se.dataset).length == 0) {
                            console.warn(`Element <${se.tagName.toLowerCase()}> implemented ika:bf attribute but did not bind to a function.`);
                            return;
                        }
                        const bindFn = se.dataset[e.type];
                        if (!bindFn) {
                            ika.debug(`No bind function is specified for event type %c${e.type}%c in element %c<${se.tagName.toLowerCase()}>`, [IkaDebugStyles.VariableValue, 'color: unset', IkaDebugStyles.ComponentName]);
                            return;
                        }
                        if (!__classPrivateFieldGet(this, _methods, "f") || !__classPrivateFieldGet(this, _methods, "f")[bindFn]) {
                            console.warn(`Check that the function binding "${bindFn}" is correct, as it is not found for the component.`);
                            return;
                        }
                        return bindFn;
                    }
                }
            },
            _a));
    }
    catch (e) {
        if (e.code == 9) { // DOMException: NotSupportedError
            ika.debug(`Element %c${componentName}%c is already defined. Now potentially using a new template.`, [IkaDebugStyles.ComponentName, 'color: unset']);
        }
        else {
            throw e;
        }
    }
}
function findElementInShadowRoot(root, tag, attribute, value) {
    const children = Array.from(root.children);
    const target = children.filter(c => c.tagName == tag.toUpperCase()).find(e => (attribute && e[attribute] == value) || true);
    return target;
}
function initaliseStateFromBundle(component) {
    const componentName = component.tagName.toLowerCase();
    const is = component.getAttribute('ika:is') || '_default';
    if (!ika.data.get(componentName) || !ika.data.get(componentName).s) {
        return;
    }
    const stateAtConstruct = ika.data.get(componentName).s[is];
    stateAtConstruct &&
        Object.entries(stateAtConstruct).forEach(([key, value]) => component.setState(key, value));
}
var IkaDebugStyles;
(function (IkaDebugStyles) {
    IkaDebugStyles["ComponentName"] = "color: #60d38e";
    IkaDebugStyles["VariableValue"] = "color: #ab49f5";
    IkaDebugStyles["NodeID"] = "color: #999";
    IkaDebugStyles["Unset"] = "color: unset";
})(IkaDebugStyles || (IkaDebugStyles = {}));


/***/ }),

/***/ "./src/types/buffer.ts":
/*!*****************************!*\
  !*** ./src/types/buffer.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateType": () => (/* binding */ UpdateType)
/* harmony export */ });
var UpdateType;
(function (UpdateType) {
    UpdateType[UpdateType["PROP"] = 0] = "PROP";
    UpdateType[UpdateType["ATTR"] = 1] = "ATTR";
})(UpdateType || (UpdateType = {}));


/***/ }),

/***/ "./src/types/events.ts":
/*!*****************************!*\
  !*** ./src/types/events.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentCall": () => (/* binding */ ComponentCall),
/* harmony export */   "CustomEventTypes": () => (/* binding */ CustomEventTypes)
/* harmony export */ });
var CustomEventTypes;
(function (CustomEventTypes) {
    CustomEventTypes["ComponentCall"] = "ika-component-call";
})(CustomEventTypes || (CustomEventTypes = {}));
var ComponentCall;
(function (ComponentCall) {
    let EventType;
    (function (EventType) {
        EventType["RegisterBind"] = "REGISTER_BIND";
        EventType["DeregisterBind"] = "DEREGISTER_BIND";
        EventType["EstablishChain"] = "ESTABLISH_CHAIN";
        EventType["GetComponent"] = "GET_PARENT";
        EventType["InvokeFunction"] = "INVOKE_FUNCTION";
    })(EventType = ComponentCall.EventType || (ComponentCall.EventType = {}));
})(ComponentCall || (ComponentCall = {}));


/***/ }),

/***/ "./src/components lazy recursive ^\\.\\/.*\\.js$":
/*!************************************************************!*\
  !*** ./src/components/ lazy ^\.\/.*\.js$ namespace object ***!
  \************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/components lazy recursive ^\\.\\/.*\\.js$";
module.exports = webpackEmptyAsyncContext;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ika.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2lrYWpzLy4vc3JjL2NvbXBvbmVudHMvYS50cyIsIndlYnBhY2s6Ly9pa2Fqcy8uL3NyYy9jb21wb25lbnRzL2FiLnRzIiwid2VicGFjazovL2lrYWpzLy4vc3JjL2NvbXBvbmVudHMvYi50cyIsIndlYnBhY2s6Ly9pa2Fqcy8uL3NyYy9jb21wb25lbnRzL2JmLnRzIiwid2VicGFjazovL2lrYWpzLy4vc3JjL2NvbXBvbmVudHMvaW1wb3J0LnRzIiwid2VicGFjazovL2lrYWpzLy4vc3JjL2NvbXBvbmVudHMvbWUudHMiLCJ3ZWJwYWNrOi8vaWthanMvLi9zcmMvY29tcG9uZW50cy9zZGMudHMiLCJ3ZWJwYWNrOi8vaWthanMvLi9zcmMvY29yZS9iaW5kLnRzIiwid2VicGFjazovL2lrYWpzLy4vc3JjL2NvcmUvYnVmLnRzIiwid2VicGFjazovL2lrYWpzLy4vc3JjL2NvcmUvaW5pdC50cyIsIndlYnBhY2s6Ly9pa2Fqcy8uL3NyYy9jb3JlL3JlZy50cyIsIndlYnBhY2s6Ly9pa2Fqcy8uL3NyYy9jb3JlL3Nici50cyIsIndlYnBhY2s6Ly9pa2Fqcy8uL3NyYy9pa2EudHMiLCJ3ZWJwYWNrOi8vaWthanMvLi9zcmMvdHlwZXMvYnVmZmVyLnRzIiwid2VicGFjazovL2lrYWpzLy4vc3JjL3R5cGVzL2V2ZW50cy50cyIsIndlYnBhY2s6Ly9pa2Fqcy8uL3NyYy9jb21wb25lbnRzLyBsYXp5IF5cXC5cXC8uKlxcLmpzJCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2lrYWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2lrYWpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pa2Fqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2lrYWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaWthanMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9pa2Fqcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vaWthanMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIElrYUEgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5vbmNsaWNrID0gaGFuZGxlQ2xpY2suYmluZCh0aGlzKVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2VQYXRoID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5nZXRBdHRyaWJ1dGUoJ3RhcmdldCcpKVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVGVzdCBtZW1vcnkgbWFuYWdlbWVudCB0YWtpbmcgcmVtb3ZlQ2hpbGQgdnMgc2V0dGluZyBpbm5lckhUTUwgbWV0aG9kc1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG5vZGVzVG9SZW1vdmUgPSBBcnJheS5mcm9tKHRhcmdldC5jaGlsZE5vZGVzKVxuICAgICAgICAgICAgICAgIC8vIHdoaWxlICh0YXJnZXQuZmlyc3RDaGlsZCkgeyB0YXJnZXQucmVtb3ZlQ2hpbGQodGFyZ2V0Lmxhc3RDaGlsZCkgfVxuICAgICAgICAgICAgICAgIHRhcmdldC5pbm5lckhUTUwgPSBgPGlrYS1pbXBvcnQgc3JjPVwiJHtyZXNvdXJjZVBhdGh9XCI+PC9pa2EtaW1wb3J0PmBcbiAgICAgICAgICAgICAgICAvLyBub2Rlc1RvUmVtb3ZlLmZvckVhY2gobiA9PiBjb25zb2xlLmxvZyhuKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IGlrYSwgSWthRGVidWdTdHlsZXMgfSBmcm9tIFwiLi4vaWthXCI7XG5pbXBvcnQgeyBVcGRhdGVUeXBlIH0gZnJvbSBcIi4uL3R5cGVzL2J1ZmZlclwiO1xuaW1wb3J0IHsgQmluZGluZ0V2ZW50IH0gZnJvbSBcIi4uL3R5cGVzL2V2ZW50c1wiO1xuaW1wb3J0IEJpbmRpbmdDb21wb25lbnQsIHsgZ2V0UGFyZW50SWthQ29tcG9uZW50LCByZWdpc3RlckJpbmQgfSBmcm9tIFwiLi4vY29yZS9iaW5kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElrYUFCIGV4dGVuZHMgQmluZGluZ0NvbXBvbmVudCB7XG4gICAgI2F0dHJCaW5kczogQXJyYXk8W2F0dHI6IHN0cmluZywgYmluZDogc3RyaW5nXT4gPSBbXVxuICAgICNjaGlsZElkczogeyBbaWQ6IHN0cmluZ106IEVsZW1lbnQgfSA9IHt9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzQmluZHMuYmluZCh0aGlzKSgpXG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc0JpbmRzKCkge1xuICAgICAgICBjb25zdCBjb250ZXh0QXR0cmlidXRlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2NvbnRleHQnKVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gY29udGV4dEF0dHJpYnV0ZSAhPSBudWxsXG4gICAgICAgICAgICA/IChhd2FpdCBnZXRQYXJlbnRJa2FDb21wb25lbnQodGhpcywgdHJ1ZSkpLmdldFN0YXRlKGNvbnRleHRBdHRyaWJ1dGUpXG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgdGhpcy4jYXR0ckJpbmRzID0gT2JqZWN0LmVudHJpZXModGhpcy5kYXRhc2V0KS5tYXAoKFthdHRyLCBiaW5kXSkgPT4gW1xuICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgIGNvbnRleHQgIT0gbnVsbCA/IGAke2JpbmR9XyR7Y29udGV4dH1gIDogYmluZFxuICAgICAgICBdKVxuICAgIH1cblxuICAgIGdldFJlZ2lzdHJhdGlvblRhcmdldHMoKTogQXJyYXk8RWxlbWVudD4ge1xuICAgICAgICByZXR1cm4gW3RoaXMsIC4uLnRoaXMuY2hpbGRyZW5dXG4gICAgfVxuXG4gICAgcmVnaXN0ZXJlZENhbGxiYWNrKGlkOiBzdHJpbmcsIG46IEVsZW1lbnQsIHI6IElrYUFCKSB7XG4gICAgICAgIGlmIChuLmlzU2FtZU5vZGUocikpIHtcbiAgICAgICAgICAgIHIuc2V0Tm9kZUlkKGlkKVxuICAgICAgICAgICAgci5yZWdpc3RlckJpbmRzV2l0aFBhcmVudENvbXBvbmVudC5iaW5kKHIpKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIuc2V0Q2hpbGRJZC5iaW5kKHIpKGlkLCBuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENoaWxkSWQoaWQ6IHN0cmluZywgbjogRWxlbWVudCkge1xuICAgICAgICB0aGlzLiNjaGlsZElkc1tpZF0gPSBuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQmluZHNXaXRoUGFyZW50Q29tcG9uZW50KCkge1xuICAgICAgICB0aGlzLiNhdHRyQmluZHMuZm9yRWFjaCgoW2F0dHIsIGJpbmRdKSA9PiB7XG4gICAgICAgICAgICByZWdpc3RlckJpbmQoe1xuICAgICAgICAgICAgICAgIHJlcXVlc3RlcjogdGhpcyxcbiAgICAgICAgICAgICAgICBiaW5kOiBiaW5kLFxuICAgICAgICAgICAgICAgIGdsb2JhbDogdGhpcy5nZXRBdHRyaWJ1dGUoJ2dsb2JhbCcpICE9IG51bGxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYmluZFZhbHVlQ2hhbmdlZCh1cGRhdGU6IEJpbmRpbmdFdmVudC5WYWx1ZVVwZGF0ZSkge1xuICAgICAgICAvLyBNdWx0aXBsZSBhdHRyaWJ1dGVzIGNvdWxkIGJlIGJvdW5kIHRvIGEgc2luZ2xlIHN0YXRlIGtleVxuICAgICAgICBjb25zdCB0YXJnZXRBdHRyaWJ1dGVzID0gdGhpcy4jYXR0ckJpbmRzLmZpbHRlcigoW2F0dHIsIGJpbmRdKSA9PiBiaW5kID09IHVwZGF0ZS5rKS5tYXAoKFthdHRyLCBiaW5kXSkgPT4gYXR0cilcbiAgICAgICAgLy8gY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdjb250ZXh0JylcblxuICAgICAgICBpa2EuZGVidWcoYCVjPGlrYS1hYj4lYyByZWNlaXZlZCBiaW5kaW5nIHVwZGF0ZS4gVXBkYXRpbmcgJHt0YXJnZXRBdHRyaWJ1dGVzLmxlbmd0aH0gYXR0cmlidXRlcyBhY3Jvc3MgJHt0aGlzLmNoaWxkcmVuLmxlbmd0aH0gZWxlbWVudHNgLFxuICAgICAgICAgICAgW0lrYURlYnVnU3R5bGVzLkNvbXBvbmVudE5hbWUsIElrYURlYnVnU3R5bGVzLlVuc2V0XSlcblxuICAgICAgICBBcnJheS5mcm9tKHRoaXMuY2hpbGRyZW4pLmxlbmd0aCAhPSBPYmplY3Qua2V5cyh0aGlzLiNjaGlsZElkcykubGVuZ3RoICYmIGNvbnNvbGUud2FybignPGlrYS1hYj4nKVxuXG4gICAgICAgIHRhcmdldEF0dHJpYnV0ZXMuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuI2NoaWxkSWRzKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1Byb3AgPSBhdHRyLmNoYXJBdCgwKSA9PSAnLidcbiAgICAgICAgICAgICAgICBpa2EuYnVmZmVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogIGlzUHJvcD8gVXBkYXRlVHlwZS5QUk9QOiAgVXBkYXRlVHlwZS5BVFRSLFxuICAgICAgICAgICAgICAgICAgICBrOiBpc1Byb3A/IGF0dHIuc3Vic3RyaW5nKDEpIDogYXR0cixcbiAgICAgICAgICAgICAgICAgICAgdjogdXBkYXRlLnZcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgIH1cbn0iLCJcbmltcG9ydCB7IGlrYSB9IGZyb20gJy4uL2lrYSdcbmltcG9ydCB7IFVwZGF0ZVR5cGUgfSBmcm9tICcuLi90eXBlcy9idWZmZXInO1xuaW1wb3J0IHsgQmluZGluZ0V2ZW50IH0gZnJvbSAnLi4vdHlwZXMvZXZlbnRzJ1xuaW1wb3J0IEJpbmRpbmdDb21wb25lbnQgZnJvbSAnLi4vY29yZS9iaW5kJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWthQiBleHRlbmRzIEJpbmRpbmdDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGJpbmRWYWx1ZUNoYW5nZWQodXBkYXRlOiBCaW5kaW5nRXZlbnQuVmFsdWVVcGRhdGUpIHtcbiAgICAgICAgaWthLmJ1ZmZlci5wdXNoKHtcbiAgICAgICAgICAgIG46IHRoaXMuZ2V0Tm9kZUlkKCksXG4gICAgICAgICAgICB0eXBlOiBVcGRhdGVUeXBlLlBST1AsXG4gICAgICAgICAgICBrOiAndGV4dENvbnRlbnQnLFxuICAgICAgICAgICAgdjogdXBkYXRlLnZcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRDYWxsLCBDdXN0b21FdmVudFR5cGVzIH0gZnJvbSBcIi4uL3R5cGVzL2V2ZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJa2FCaW5kVG9GdW5jdGlvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc3QgZXZlbnRCaW5kcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMuZGF0YXNldClcbiAgICAgICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IEFycmF5LmZyb20odGhpcy5jaGlsZHJlbilcbiAgICAgICAgY29uc3QgcHJldmVudERlZmF1bHQgPSB0aGlzLmdldEF0dHJpYnV0ZSgncHJldmVudERlZmF1bHQnKSAhPSBudWxsXG5cbiAgICAgICAgZXZlbnRCaW5kcy5mb3JFYWNoKChbdHlwZSwgYmluZF0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICBlLmNhbmNlbGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNvbnNvbGUud2FybihgPGlrYS1iZj4gd2FzIGluc3RydWN0ZWQgdG8gY2FuY2VsIGFuIHVuY2FuY2VsYWJlIGV2ZW50IG9mIHR5cGUgXCIke2UudHlwZX1cIi5gKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZW5kRXZlbnRUb0NvbXBvbmVudC5iaW5kKHRoaXMpKGUsIGJpbmQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGZ1bmN0aW9uIHNlbmRFdmVudFRvQ29tcG9uZW50KGU6IEV2ZW50LCBiaW5kOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RGV0YWlsczogQ29tcG9uZW50Q2FsbC5FdmVudERldGFpbC5JbnZva2VGdW5jdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBDb21wb25lbnRDYWxsLkV2ZW50VHlwZS5JbnZva2VGdW5jdGlvbixcbiAgICAgICAgICAgICAgICBpbnZvY2F0aW9uRXZlbnQ6IGUsXG4gICAgICAgICAgICAgICAga2V5OiBiaW5kXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRDYWxsID0gbmV3IEN1c3RvbUV2ZW50KEN1c3RvbUV2ZW50VHlwZXMuQ29tcG9uZW50Q2FsbCwge1xuICAgICAgICAgICAgICAgIGRldGFpbDogZXZlbnREZXRhaWxzLFxuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogdHJ1ZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudENhbGwpXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgaWthIH0gZnJvbSAnLi4vaWthJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJa2FJbXBvcnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgI3NyYyA9IHRoaXMuZ2V0QXR0cmlidXRlKCdzcmMnKVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGZldGNoKHRoaXMuI3NyYylcbiAgICAgICAgICAgIC50aGVuKHIgPT4gcHJvY2Vzc1Jlc3BvbnNlLmJpbmQodGhpcykocikpXG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc1Jlc3BvbnNlKHIpIHtcbiAgICAgICAgICAgIChbMjAwLCAzMDRdLmluY2x1ZGVzKHIuc3RhdHVzKSAmJiByLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKS5pbmNsdWRlcygndGV4dC9odG1sJykpXG4gICAgICAgICAgICAgICAgPyBwcm9jZXNzSFRNTEltcG9ydC5iaW5kKHRoaXMpKGF3YWl0IHIudGV4dCgpKVxuICAgICAgICAgICAgICAgIDogY29uc29sZS5lcnJvcihgU3RhdHVzICR7ci5zdGF0dXN9OiBDb3VsZCBub3QgbG9hZCByZXNvdXJjZSBmcm9tICR7ci51cmx9YClcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NIVE1MSW1wb3J0KGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gY29udGVudFxuXG4gICAgICAgICAgICBjb25zdCBwYXRoOiBzdHJpbmcgPSB0aGlzLmdldEF0dHJpYnV0ZSgnc3JjJylcbiAgICAgICAgICAgIGlmICghaWthLnJlZy5oYXNJbXBvcnQocGF0aCkpIHtcbiAgICAgICAgICAgICAgICBpa2EucmVnLnJlZ2lzdGVySW1wb3J0KHBhdGgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9jZXNzVGVtcGxhdGVzLmJpbmQodGhpcykoKVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBwcm9jZXNzVGVtcGxhdGVzKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlc1RhZyA9ICdpa2E6dGVtcGxhdGVzJ1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlc0VsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSh0ZW1wbGF0ZXNUYWcpWzBdXG4gICAgICAgICAgICAgICAgaWYgKCF0ZW1wbGF0ZXNFbGVtZW50KSB7IHJldHVybiB9XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcGxhdGVzID0gdGVtcGxhdGVzRWxlbWVudC5jaGlsZHJlblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRlbXBsYXRlc1RhZylbMF1cbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBpbXBvcnRpbmcgdGVtcGxhdGVzIGZyb20gJyR7dGhpcy4jc3JjfSc6XFxuRE9NIGRpZCBub3QgY29udGFpbiBhICR7dGVtcGxhdGVzVGFnfSBlbGVtZW50LmApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0ZW1wbGF0ZXMpLmZvckVhY2gobiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChuKVxuICAgICAgICAgICAgICAgICAgICBpa2EucmVnLmFkZFRlbXBsYXRlTm9kZShwYXRoLCBuKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0ZW1wbGF0ZXNFbGVtZW50KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzY3JpcHRFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IEFycmF5LmZyb20odGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JykpXG4gICAgICAgICAgICBzY3JpcHRFbGVtZW50cy5mb3JFYWNoKHMgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFJlaW5zZXJ0IHRoZSBzY3JpcHQgZWxlbWVudCBzbyBpdCdzIGV4ZWN1dGVkLlxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHMucGFyZW50Tm9kZSB8fCB0aGlzXG4gICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHMpXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U2NyaXB0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgbmV3U2NyaXB0RWxlbWVudC50eXBlID0gXCJtb2R1bGVcIlxuICAgICAgICAgICAgICAgIG5ld1NjcmlwdEVsZW1lbnQudGV4dENvbnRlbnQgPSBzLnRleHRDb250ZW50XG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5ld1NjcmlwdEVsZW1lbnQpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpa2EucmVnLmFkZE5vZGVzKHBhdGgsIHRoaXMuY2hpbGROb2RlcylcblxuICAgICAgICAgICAgY29uc3QgcmVnaXN0cnlFbnRyeSA9IGlrYS5yZWcuZ2V0SW1wb3J0UmVnaXN0ZXJCeVBhdGgocGF0aClcbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIocHJvY2Vzc011dC5iaW5kKHJlZ2lzdHJ5RW50cnkpKVxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlV2l0aCguLi50aGlzLmNoaWxkTm9kZXMpXG5cbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUocmVnaXN0cnlFbnRyeS5uWzBdLnBhcmVudE5vZGUsIHsgY2hpbGRMaXN0OiB0cnVlIH0pXG4gICAgICAgICAgICAvLyBBcnJheS5mcm9tKHRoaXMuY2hpbGROb2RlcykuZm9yRWFjaChuID0+IG9ic2VydmVyLm9ic2VydmUobiwgeyBjaGlsZExpc3Q6IHRydWUsIGNoYXJhY3RlckRhdGE6IHRydWUsIGF0dHJpYnV0ZXM6IHRydWUgfSkpXG4gICAgICAgICAgICAvLyBJbXBvcnQgaXMgY29tcGxldGUsIHVud3JhcCB0aGUgY29udGVudCBmcm9tIHRoZSBwbGFjZWhvbGRlciA8aWthOmltcG9ydD4gdGFnXG5cbiAgICAgICAgICAgIGlrYS5kZWJ1ZyhgTG9hZGVkIEhUTUwgZnJvbSAke3BhdGh9LCByZWdpc3RlcmVkIG5vZGVzIGFzIGZvbGxvd3M6YClcbiAgICAgICAgICAgIGlrYS5kZWJ1ZyhyZWdpc3RyeUVudHJ5KVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBwcm9jZXNzTXV0KG11dExpc3Q6IE11dGF0aW9uUmVjb3JkW10sIG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlTXV0cyA9IG11dExpc3QuZmlsdGVyKG0gPT4gbS5yZW1vdmVkTm9kZXMubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICBpa2EuZGVidWcoJzxpa2EtaW1wb3J0PiBkZXRlY3RlZCBtdXRhdGlvbicpXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBtdXQgb2YgcmVtb3ZlTXV0cykge1xuICAgICAgICAgICAgICAgICAgICBtdXQucmVtb3ZlZE5vZGVzLmZvckVhY2gobiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpID0gdGhpcy5uLmZpbmRJbmRleChtID0+IG0uaXNTYW1lTm9kZShuKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgIT0gLTEgJiYgdGhpcy5uLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudC5mb3JFYWNoKHRlbXBsYXRlRWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wbGF0ZUVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudCA9IFtdXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJmdW5jdGlvbiBkY2Uobik6IEhUTUxFbGVtZW50IHsgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobikgfVxuZnVuY3Rpb24gb2VmZShuLCBmKSB7IE9iamVjdC5lbnRyaWVzKG4pLmZvckVhY2goZSA9PiBmKGUpKSB9XG5cbmltcG9ydCB7IGlrYSB9IGZyb20gJy4uL2lrYSdcbmltcG9ydCB7IEJpbmRpbmdFdmVudCB9IGZyb20gJy4uL3R5cGVzL2V2ZW50cyc7XG5pbXBvcnQgeyByZWdpc3RlckJpbmQgfSBmcm9tICcuLi9jb3JlL2JpbmQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElrYU1FIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICNub2RlSWQ6IHN0cmluZyA9IG51bGxcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGNvbnN0IG1mID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ21mJylcbiAgICAgICAgY29uc3QgaXMgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaWthOmlzJylcbiAgICAgICAgY29uc3QgY24gPSB0aGlzLmdldEF0dHJpYnV0ZSgnY24nKVxuXG4gICAgICAgIGlmICghbWYgfHwgIWlzIHx8ICFjbikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignPGlrYS1tZT4gbXVzdCBoYXZlIFwiaWthOmlzXCIsIFwiY25cIiwgYW5kIFwibWZcIiBhdHRyaWJ1dGVzLicpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgaWthLnJlZy5yZWdpc3Rlck5vZGUodGhpcywgdGhpcywgc2V0SURhbmRSZWdpc3RlckJpbmQpXG5cbiAgICAgICAgZnVuY3Rpb24gc2V0SURhbmRSZWdpc3RlckJpbmQoaWQsIG4sIHIpIHtcbiAgICAgICAgICAgIHIuc2V0Tm9kZUlkKGlkLCBuLCByKVxuICAgICAgICAgICAgci5iaW5kVmFsdWVDaGFuZ2VkKHtcbiAgICAgICAgICAgICAgICBrOiBgaWthLW1lOiR7aXN9YCxcbiAgICAgICAgICAgICAgICB2OiBpa2EucmVnLmdldEJpbmRWYWx1ZShgaWthLW1lOiR7aXN9YCwgci5nZXROb2RlSWQoKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZWdpc3RlckJpbmQoe1xuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHJlcXVlc3RlcjogcixcbiAgICAgICAgICAgICAgICBiaW5kOiBgaWthLW1lOiR7aXN9YCxcbiAgICAgICAgICAgICAgICBnbG9iYWw6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kVmFsdWVDaGFuZ2VkKHVwZGF0ZTogQmluZGluZ0V2ZW50LlZhbHVlVXBkYXRlKSB7XG4gICAgICAgIGNvbnN0IG1mID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ21mJylcbiAgICAgICAgY29uc3QgY24gPSB0aGlzLmdldEF0dHJpYnV0ZSgnY24nKVxuICAgICAgICBjb25zdCBiZCA9IHVwZGF0ZS52Py5iZFxuICAgICAgICBjb25zdCBtYXBBcnJheSA9IHVwZGF0ZS52ID8gdXBkYXRlLnZbbWZdIDogbnVsbFxuXG4gICAgICAgIGlmIChtYXBBcnJheSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2VDaGlsZHJlbigpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobWFwQXJyYXkpKSB7IHRocm93IGA8aWthLW1lPiBpcyBhc2tlZCB0byBtYXAgZnJvbSBhIHZhbHVlIHRoYXQgaXMgbm90IGFuIGFycmF5LCByZWNlaXZlZCAke3R5cGVvZiBtYXBBcnJheX0uYCB9XG5cbiAgICAgICAgY29uc3RydWN0RnJhZ21lbnQuYmluZCh0aGlzKShiZCwgbWFwQXJyYXkpO1xuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGNvbnN0cnVjdEZyYWdtZW50KGJkLCBtYXBBcnJheTogQXJyYXk8YW55Pikge1xuICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgY29uc3QgcmVwZXRpdGlvbiA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiblwiKSB8fCBtYXBBcnJheS5sZW5ndGg7XG5cbiAgICAgICAgICAgICFjbi5pbmNsdWRlcygnLScpIHx8IGF3YWl0IGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKGNuKVxuXG4gICAgICAgICAgICBpa2EuZGVidWcoYENyZWF0aW5nICR7cmVwZXRpdGlvbn0gPCR7Y259PiBlbGVtZW50cy4uLmApXG4gICAgICAgICAgICBjb25zdCBtYXBwZWRFbGVtZW50czogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gW11cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVwZXRpdGlvbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbWFwcGVkRWxlbWVudHMucHVzaChkY2UoY24pKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWFwcGVkRWxlbWVudHNbMF0uc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBlbGVtZW50IGhhcyBhIHNoYWRvd1Jvb3QsIHdpbGwgbmVlZCB0byBwcm9jZXNzIGFueSA8c2xvdHM+IGNvbnRhaW5lZCBpbnNpZGUgc28gdGhhdCBcbiAgICAgICAgICAgICAgICAvLyBzbG90cyBjYW4gYmUgZmlsbGVkIGJ5IGNoaWxkIGVsZW1lbnRzIG9mIDxpa2EtbWU+LCBpbnN0ZWFkIG9mIGhhdmluZyB0byBnbyBpbnNpZGUgZWFjaCBtYXBwZWRcbiAgICAgICAgICAgICAgICAvLyBlbGVtZW50IGFuZCBhZGRpbmcgY2hpbGQgZWxlbWVudHMgdGhlcmUuXG5cbiAgICAgICAgICAgICAgICBpa2EuZGVidWcoYEluc3RhbnRpYXRlZC4gUHJvY2Vzc2luZyBzdWJ0cmVlIHNsb3RzIGZvciAke2NufWApXG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBUaGlzIHNlbGVjdCBkb2VzIG5vdCBwZW5ldHJhdGUgc2hhZG93IERPTSBib3VuZGFyaWVzXG4gICAgICAgICAgICAgICAgY29uc3Qgc2xvdHMgPSBtYXBwZWRFbGVtZW50c1swXS5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzbG90XCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsb3ROYW1lcyA9IEFycmF5LmZyb20oc2xvdHMpLm1hcCgocykgPT4gcy5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVwZXRpdGlvbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3ROYW1lcy5mb3JFYWNoKChuYW1lKSA9PiBwcm9jZXNzU2xvdC5iaW5kKHRoaXMpKG5hbWUsIG1hcHBlZEVsZW1lbnRzW2ldLCBpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpa2EuZGVidWcoYEFwcGx5aW5nIGF0dHJpYnV0ZXMgdG8gZWFjaCBlbGVtZW50IFwiJHtjbn1cImApXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcGV0aXRpb247IGkrKykge1xuICAgICAgICAgICAgICAgIGFwcGx5QXR0cmlidXRlc0FuZEFwcGVuZC5iaW5kKHRoaXMpKG1hcHBlZEVsZW1lbnRzW2ldLCBmcmFnbWVudCwgbWFwQXJyYXlbaV0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVJa2FYRWxlbWVudChzbG90TmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gSW52ZXN0aWdhdGUgYXNzaWduaW5nIHNsb3RzIHRvIFRleHROb2RlXG4gICAgICAgICAgICBjb25zdCBlID0gZGNlKFwiaWthOnhcIik7XG4gICAgICAgICAgICBlLnNldEF0dHJpYnV0ZShcInNsb3RcIiwgc2xvdE5hbWUpO1xuICAgICAgICAgICAgZS5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcHJvY2Vzc1Nsb3QobmFtZSwgbWFwcGVkRWxlbWVudCwgaSkge1xuICAgICAgICAgICAgLy8gVE9ETzogUmV2aWV3IGhvdyBkYXRhIGlzIG1hcHBlZCBpbiBkaWZmZXJlbnQgY29uZmlndXJhdGlvbnMgZm9yIHRoZSA8aWthLW1lPiBjb21wb25lbnRcblxuICAgICAgICAgICAgaWthLmRlYnVnKGBQcm9jZXNzaW5nIHNsb3QgXCIke25hbWV9XCIgZm9yIGNvbXBvbmVudCAke21hcHBlZEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpfSwgY3ljbGUgJHtpfWApXG4gICAgICAgICAgICBpZiAobmFtZSBpbiB0aGlzLmRhdGFzZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBBcHBseSBhIHZhbHVlIHN0YXRpY2FsbHkgdG8gc29tZSBzbG90IGluIGFsbCBpbnN0YW5jZXNcbiAgICAgICAgICAgICAgICBtYXBwZWRFbGVtZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlSWthWEVsZW1lbnQobmFtZSwgdGhpcy5kYXRhc2V0W25hbWVdKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJkICYmIG5hbWUgaW4gYmQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBiaW5kVmFsdWUgPSBiZFtuYW1lXTtcbiAgICAgICAgICAgICAgICBjb25zdCBiaW5kVHJhbnNmb3JtID0gQXJyYXkuaXNBcnJheShiaW5kVmFsdWUpID8gYmluZFZhbHVlWzFdIDogbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90VmFsdWUgPSBiaW5kVHJhbnNmb3JtXG4gICAgICAgICAgICAgICAgICAgID8gYmluZFRyYW5zZm9ybShtYXBBcnJheVtpXVtiaW5kVmFsdWVbMF1dKVxuICAgICAgICAgICAgICAgICAgICA6IG51bGwgLy8gRVJST1IgSEVSRSFcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vclxuICAgICAgICAgICAgICAgIC8vIDogbWFwQXJyYXlbaV1bYmluZFZhcnNbbmFtZV1dXG4gICAgICAgICAgICAgICAgbWFwcGVkRWxlbWVudC5hcHBlbmRDaGlsZChnZW5lcmF0ZUlrYVhFbGVtZW50KG5hbWUsIHNsb3RWYWx1ZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRTbG90ID0gZGNlKFwic2xvdFwiKTtcbiAgICAgICAgICAgICAgICBuZXN0ZWRTbG90LnNldEF0dHJpYnV0ZShcInNsb3RcIiwgbmFtZSk7XG4gICAgICAgICAgICAgICAgbmVzdGVkU2xvdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGAke25hbWV9LSR7aX1gKTtcbiAgICAgICAgICAgICAgICBuZXN0ZWRTbG90LnRleHRDb250ZW50ID0gbWFwQXJyYXlbaV1bbmFtZV1cbiAgICAgICAgICAgICAgICBtYXBwZWRFbGVtZW50LmFwcGVuZENoaWxkKG5lc3RlZFNsb3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYXBwbHlBdHRyaWJ1dGVzQW5kQXBwZW5kKG1hcHBlZEVsZW1lbnQsIGZyYWdtZW50LCBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoYmQgJiYgJyNhdHRyJyBpbiBiZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVNldCA9IGJkWycjYXR0ciddKGRhdGEpXG4gICAgICAgICAgICAgICAgb2VmZShhdHRyaWJ1dGVTZXQsIChbYXR0ciwgdmFsXSkgPT4gbWFwcGVkRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiZCAmJiAnI3Byb3AnIGluIGJkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcFNldCA9IGJkWycjcHJvcCddKGRhdGEpXG4gICAgICAgICAgICAgICAgb2VmZShwcm9wU2V0LCAoW3Byb3AsIHZhbF0pID0+IG1hcHBlZEVsZW1lbnRbcHJvcF0gPSB2YWwpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZChtYXBwZWRFbGVtZW50KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Tm9kZUlkKGlkLCBuLCByKSB7IHRoaXMuI25vZGVJZCA9IGlkIH1cbiAgICBnZXROb2RlSWQoKSB7IHJldHVybiB0aGlzLiNub2RlSWQgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgndW53cmFwJykgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yZXBsYWNlV2l0aCguLi50aGlzLmNoaWxkTm9kZXMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZXRCRChiZCkgeyB0aGlzLiNiZCA9IGJkIH1cbiAgICAvLyBzZXREYXRhc2V0KGQpIHtcbiAgICAvLyAgICAgQXJyYXkuaXNBcnJheShkKVxuICAgIC8vICAgICAgICAgPyB0aGlzLiNzdGF0ZXMuZGF0YXNldCA9IGRcbiAgICAvLyAgICAgICAgIDogY29uc29sZS53YXJuKGBVbmV4cGVjdGVkOiB0cnlpbmcgdG8gYXNzaWduIGEgbm9uLWFycmF5IHRvIDxpa2EtbWU+IGRhdGFzZXQuYClcbiAgICAvLyB9XG59XG4iLCJpbXBvcnQgeyBpa2EsIElrYUNvbXBvbmVudCwgSWthRGVidWdTdHlsZXMgfSBmcm9tIFwiLi4vaWthXCI7XG5pbXBvcnQgeyBCaW5kaW5nRXZlbnQsIENvbXBvbmVudENhbGwsIEN1c3RvbUV2ZW50VHlwZXMgfSBmcm9tIFwiLi4vdHlwZXMvZXZlbnRzXCI7XG5pbXBvcnQgQmluZGluZ0NvbXBvbmVudCBmcm9tIFwiLi4vY29yZS9iaW5kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElrYVNEQyBleHRlbmRzIEJpbmRpbmdDb21wb25lbnQge1xuICAgICNjaGFpbjogQXJyYXk8c3RyaW5nPiA9IFtdXG4gICAgI2RlcGVuZGVudHM6IEFycmF5PElrYVNEQz4gPSBbXVxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ3VzdG9tRXZlbnRUeXBlcy5Db21wb25lbnRDYWxsLCB0aGlzLmFkZERlcGVuZGVudFNEQylcbiAgICB9XG5cbiAgICBiaW5kVmFsdWVDaGFuZ2VkKHVwZGF0ZTogQmluZGluZ0V2ZW50LlZhbHVlVXBkYXRlKSB7XG4gICAgICAgIGNvbnN0IGlzQ2hpbGRTZGNPZkFmZmVjdGVkU2RjID0gdGhpcy4jY2hhaW4uc29tZShiID0+IGIgPT0gdXBkYXRlLmspXG4gICAgICAgIGNvbnN0IGhhc0RlcGVuZGVudFNkY3MgPSB0aGlzLiNkZXBlbmRlbnRzLmxlbmd0aCA+IDBcblxuICAgICAgICBpZiAoIWlzQ2hpbGRTZGNPZkFmZmVjdGVkU2RjICYmIGhhc0RlcGVuZGVudFNkY3MpIHtcbiAgICAgICAgICAgIGlrYS5kZWJ1ZyhgVGhlIDxpa2Etc2RjPiBoYXMgYWZmZWN0ZWQgY2hpbGRgKVxuICAgICAgICAgICAgLy8gRGVwZW5kZW50IFNEQ3MgaW4gdGhpcyBTREMncyBjaGlsZCBub2RlcyBhbmQgdGhlaXIgbm9kZSB0cmVlcyBhcmUgcmVtb3ZlZCBmcm9tIHRoZSBjb21wb25lbnQncyBiaW5kaW5nIGNhbGxiYWNrcy5cbiAgICAgICAgICAgIHRoaXMuI2RlcGVuZGVudHMuZm9yRWFjaChjID0+IGMuZGVyZWdpc3RlckJpbmRzV2l0aFBhcmVudENvbXBvbmVudCgpKVxuICAgICAgICAgICAgdGhpcy4jZGVwZW5kZW50cyA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNhdHRhY2hTRFQoKVxuICAgIH1cblxuICAgIGFkZERlcGVuZGVudFNEQyhlOiBDdXN0b21FdmVudDxDb21wb25lbnRDYWxsLkV2ZW50RGV0YWlscz4pIHtcbiAgICAgICAgaWYgKGUuZGV0YWlsLnR5cGUgPT0gQ29tcG9uZW50Q2FsbC5FdmVudFR5cGUuRXN0YWJsaXNoQ2hhaW4gJiYgIShlLmNvbXBvc2VkUGF0aCgpWzBdIGFzIE5vZGUpLmlzU2FtZU5vZGUodGhpcykpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlcGVuZGVudEVsZW1lbnQgPSBlLmRldGFpbC5wYXlsb2FkLmlzc3VlclxuICAgICAgICAgICAgaWthLmRlYnVnKGA8aWthLXNkYz4gcmVjZWl2ZWQgYW4gRXN0YWJsaXNoQ2hhaW4gZXZlbnQsIGFkZGluZyBhIDwke2RlcGVuZGVudEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpfT4gdG8gZGVwZWRlbnRzYClcbiAgICAgICAgICAgIHRoaXMuI2RlcGVuZGVudHMucHVzaChkZXBlbmRlbnRFbGVtZW50KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXN0YWJsaXNoQ2hhaW5DYihwYXRoOiBFdmVudFRhcmdldFtdLCBjb21wb25lbnQ6IElrYUNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnNldENvbXBvbmVudChjb21wb25lbnQpXG4gICAgICAgIHBhdGguZm9yRWFjaCgobiwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKG4gaW5zdGFuY2VvZiBJa2FTREMgJiYgaSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jY2hhaW4udW5zaGlmdChuLmdldEF0dHJpYnV0ZSgnYicpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuI2NoYWluLmxlbmd0aCA+IDAgJiYgaWthLmRlYnVnKGA8aWthLXNkYz4gcmVnaXN0ZXJlZCBhIFNEQyBkZXBlbmRlbmN5IGNoYWluIG9mIFske3RoaXMuI2NoYWluLmpvaW4oJywgJyl9XWApXG4gICAgfVxuXG4gICAgb25QYXJlbnRDb21wb25lbnRMb2FkZWQoKSB7XG4gICAgICAgIGNvbnN0IGRldGFpbDogQ29tcG9uZW50Q2FsbC5FdmVudERldGFpbC5Fc3RhYmxpc2hDaGFpbiA9IHtcbiAgICAgICAgICAgIHR5cGU6IENvbXBvbmVudENhbGwuRXZlbnRUeXBlLkVzdGFibGlzaENoYWluLFxuICAgICAgICAgICAgbm9kZUlkOiB0aGlzLmdldE5vZGVJZCgpLFxuICAgICAgICAgICAgcGF5bG9hZDogeyBpc3N1ZXI6IHRoaXMgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVzdGFibGlzaENoYWluRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoQ3VzdG9tRXZlbnRUeXBlcy5Db21wb25lbnRDYWxsLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiBkZXRhaWxcbiAgICAgICAgfSlcblxuICAgICAgICBpa2EuZGVidWcoYCVjPCR7dGhpcy50YWdOYW1lLnRvTG93ZXJDYXNlKCl9PiVjIGNvbXBvbmVudCB0cmlnZ2VyaW5nIGVzdGFibGlzaCBjaGFpbiBldmVudC5gLCBbSWthRGVidWdTdHlsZXMuQ29tcG9uZW50TmFtZSwgJ2NvbG9yOiB1bnNldCddKVxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXN0YWJsaXNoQ2hhaW5FdmVudClcbiAgICB9XG5cbiAgICAjYXR0YWNoU0RUKCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnROYW1lID0gdGhpcy5nZXRDb21wb25lbnQoKS50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICAgY29uc3QgYmluZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdiJylcbiAgICAgICAgY29uc3QgaWthVGVtcGxhdGVzQ2hpbGRyZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaWthOnRlbXBsYXRlcycpWzBdLmNoaWxkcmVuXG5cbiAgICAgICAgY29uc3Qgc2R0ID0gZ2V0RWxlbWVudCgnc2R0JywgaWthVGVtcGxhdGVzQ2hpbGRyZW4sIHNkdCA9PiBzZHQuZ2V0QXR0cmlidXRlKCdjbicpICYmIHNkdC5nZXRBdHRyaWJ1dGUoJ2NuJykudG9Mb3dlckNhc2UoKSA9PSBjb21wb25lbnROYW1lKTtcbiAgICAgICAgY29uc3Qgc3RjID0gZ2V0RWxlbWVudCgnc3RjJywgc2R0LmNoaWxkcmVuLCBzdGMgPT4gc3RjLmdldEF0dHJpYnV0ZSgnYicpID09IGJpbmQpXG4gICAgICAgIGNvbnN0IHRhbWMgPSBnZXRFbGVtZW50KCd0YW1jJywgc3RjLmNoaWxkcmVuLCB0YW1jID0+IHRhbWMuZ2V0QXR0cmlidXRlKCd0cycpID09IHRoaXMuZ2V0QXR0cmlidXRlKCd0cycpKVxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGdldEVsZW1lbnQoJ3RlbXBsYXRlJywgdGFtYy5jaGlsZHJlbixcbiAgICAgICAgICAgIHRlbXBsYXRlID0+IHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdGVtcGxhdGUuZGF0YXNldC5hID09IHRoaXMuZ2V0Q29tcG9uZW50KCkuZ2V0U3RhdGUoYmluZCkpXG5cbiAgICAgICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgLy8gTm8gdGVtcGxhdGUgbWF0Y2hlcyB0aGUgc3RhdGUgdmFsdWUsIGRpc3BsYXkgbm90aGluZyBmb3IgdGhlIFNEQy5cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZUNoaWxkcmVuKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFkZGluZyBTREMgY2hpbGRyZW4gd2lsbCB0cmlnZ2VyIHRoZWlyIGNvbnN0cnVjdG9ycyBmaXJpbmcgb2ZmIEVzdGFibGlzaENoYWluIGV2ZW50cywgd2hpY2ggd2lsbCBiZSBsaXN0ZW5kIHRvIGJ5IHRoaXMgY29tcG9uZW50LlxuICAgICAgICAgICAgLy8gTm8gbmVlZCB0byByZWdpc3RlciB0aGVtIGhlcmUuXG4gICAgICAgICAgICBpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgUmV0cmlldmVkIHRlbXBsYXRlIGFybSBtYXRjaCBlbGVtZW50IGlzbid0IGEgdGVtcGxhdGUuYCk7IHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNsb25lZE5vZGUgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlQ2hpbGRyZW4oLi4uY2xvbmVkTm9kZS5jaGlsZE5vZGVzKVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0RWxlbWVudCh0eXBlOiAndGVtcGxhdGUnIHwgJ3NkdCcgfCAnc3RjJyB8ICd0YW1jJywgY29sbGVjdGlvbjogSFRNTENvbGxlY3Rpb24sIGZpbHRlcjogKGU6IEVsZW1lbnQpID0+IGJvb2xlYW4pIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb20oY29sbGVjdGlvbikuZmlsdGVyKGZpbHRlcilcbiAgICAgICAgICAgIGNoZWNrSWZNb3JlVGhhbk9uZSh0eXBlLCByZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFswXVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tJZk1vcmVUaGFuT25lKHR5cGUsIGFycikge1xuICAgICAgICAgICAgY29uc3QgdGFnID0gdHlwZSA9PSAndGVtcGxhdGUnID8gJzx0ZW1wbGF0ZT4nIDogYDxpa2E6JHt0eXBlfT5gXG4gICAgICAgICAgICBpZiAodGFnID09ICc8dGVtcGxhdGU+Jykge1xuICAgICAgICAgICAgICAgIGFyci5sZW5ndGggPT0gMCAmJiBpa2EuZGVidWcoYE5vICR7dGFnfSBpcyBhIG1hdGNoIGZvciB0aGUgY3VycmVudCBzdGF0ZS5gKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgTW9yZSB0aGFuIG9uZSAke3RhZ30gaXMgZGVmaW5lZCBmb3IgY29tcG9uZW50IFwiJHtjb21wb25lbnROYW1lfVwiYClcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFyci5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBObyAke3RhZ30gaXMgZGVmaW5lZCBmb3IgY29tcG9uZW50IFwiJHtjb21wb25lbnROYW1lfVwiYClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgaWthLCBJa2FDb21wb25lbnQsIElrYURlYnVnU3R5bGVzIH0gZnJvbSBcIi4uL2lrYVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50Q2FsbCwgQ3VzdG9tRXZlbnRUeXBlcywgQmluZGluZ0V2ZW50IH0gZnJvbSBcIi4uL3R5cGVzL2V2ZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaW5kaW5nQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICNub2RlSWQgPSBudWxsXG4gICAgI2NvbXBvbmVudDogSWthQ29tcG9uZW50ID0gbnVsbFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IHJlZ1RhcmdldHMgPSB0aGlzLmdldFJlZ2lzdHJhdGlvblRhcmdldHMoKVxuICAgICAgICByZWdUYXJnZXRzLmZvckVhY2gobiA9PlxuICAgICAgICAgICAgaWthLnJlZy5yZWdpc3Rlck5vZGUodGhpcywgbiwgdGhpcy5yZWdpc3RlcmVkQ2FsbGJhY2spXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBnZXRSZWdpc3RyYXRpb25UYXJnZXRzKCk6IEFycmF5PEVsZW1lbnQ+IHtcbiAgICAgICAgcmV0dXJuIFt0aGlzXVxuICAgIH1cblxuICAgIHJlZ2lzdGVyZWRDYWxsYmFjayhpZDogc3RyaW5nLCBuOiBFbGVtZW50LCByZXF1ZXN0b3I6IEJpbmRpbmdDb21wb25lbnQpIHtcbiAgICAgICAgLy8gcmVxdWVzdG9yLnNldENvbXBvbmVudChyZXF1ZXN0b3IpXG4gICAgICAgIHJlcXVlc3Rvci5zZXROb2RlSWQoaWQpXG4gICAgICAgIHJlcXVlc3Rvci5yZWdpc3RlckJpbmRzV2l0aFBhcmVudENvbXBvbmVudC5iaW5kKHJlcXVlc3RvcikoKVxuICAgIH1cblxuICAgIHNldENvbXBvbmVudCh0OiBJa2FDb21wb25lbnQpIHsgdGhpcy4jY29tcG9uZW50ID0gdCB9XG4gICAgZ2V0Q29tcG9uZW50KCkgeyByZXR1cm4gdGhpcy4jY29tcG9uZW50IH1cblxuICAgIHNldE5vZGVJZChpZDogc3RyaW5nKSB7IHRoaXMuI25vZGVJZCA9IGlkOyB9XG4gICAgZ2V0Tm9kZUlkKCkgeyByZXR1cm4gdGhpcy4jbm9kZUlkIH1cblxuICAgIHJlZ2lzdGVyQmluZHNXaXRoUGFyZW50Q29tcG9uZW50KCkge1xuICAgICAgICByZWdpc3RlckJpbmQoe1xuICAgICAgICAgICAgcmVxdWVzdGVyOiB0aGlzLFxuICAgICAgICAgICAgYmluZDogdGhpcy5nZXRBdHRyaWJ1dGUoJ2InKSxcbiAgICAgICAgICAgIGdsb2JhbDogdGhpcy5nZXRBdHRyaWJ1dGUoJ2dsb2JhbCcpICE9IG51bGwsXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGRlcmVnaXN0ZXJCaW5kc1dpdGhQYXJlbnRDb21wb25lbnQoKSB7XG4gICAgICAgIGRlcmVnaXN0ZXJCaW5kKHtcbiAgICAgICAgICAgIHJlcXVlc3RlcjogdGhpcyxcbiAgICAgICAgICAgIGJpbmQ6IHRoaXMuZ2V0QXR0cmlidXRlKCdiJyksXG4gICAgICAgICAgICBnbG9iYWw6IHRoaXMuZ2V0QXR0cmlidXRlKCdnbG9iYWwnKSAhPSBudWxsLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9uUGFyZW50Q29tcG9uZW50TG9hZGVkKCkgeyB9XG5cbiAgICBiaW5kVmFsdWVDaGFuZ2VkKHVwZGF0ZTogQmluZGluZ0V2ZW50LlZhbHVlVXBkYXRlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgQ29tcG9uZW50ICVjPCR7dGhpcy50YWdOYW1lLnRvTG93ZXJDYXNlKCl9PiVjIGRpZCBub3QgaW1wbGVtZW50IHN0YXRlIGNoYW5nZSBjYWxsYmFjay5gLCBbSWthRGVidWdTdHlsZXMuQ29tcG9uZW50TmFtZSwgJ2NvbG9yOiB1bnNldCddKVxuICAgIH1cbn1cblxudHlwZSBSZWdpc3RlckJpbmRQcm9wcyA9IHtcbiAgICByZXF1ZXN0ZXI6IEJpbmRpbmdDb21wb25lbnQsXG4gICAgYmluZDogc3RyaW5nLFxuICAgIGdsb2JhbD86IGJvb2xlYW4sXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlckJpbmQocHJvcDogUmVnaXN0ZXJCaW5kUHJvcHMpIHtcbiAgICBpa2EuZGVidWcoYFJlZ2lzdGVyaW5nIGJpbmRpbmcgdG8gJWNcIiR7cHJvcC5iaW5kfVwiJWMgYnkgY29tcG9uZW50ICVjPCR7cHJvcC5yZXF1ZXN0ZXIudGFnTmFtZS50b0xvd2VyQ2FzZSgpfT5gLCBbSWthRGVidWdTdHlsZXMuVmFyaWFibGVWYWx1ZSwgJ2NvbG9yOiB1bnNldCcsIElrYURlYnVnU3R5bGVzLkNvbXBvbmVudE5hbWVdKVxuXG4gICAgaWYgKCFwcm9wLmdsb2JhbCkge1xuICAgICAgICBsZXQgcGFyZW50Q29tcG9uZW50ID0gYXdhaXQgZ2V0UGFyZW50SWthQ29tcG9uZW50KHByb3AucmVxdWVzdGVyKVxuICAgICAgICAvLyBubyBwYXJlbnQgd2lsbCByZXN1bHQgaW4gdW5yZXNvbHZpbmcgZ2V0IHBhcmVudCBwcm9taXNlIHNpbmNlIGNhbGxiYWNrIHdpbGwgbmV2ZXIgYmUgY2FsbGVkIHRvIHJlc29sdmUuIFxuXG4gICAgICAgIGNvbnN0IHBhcmVudENvbXBvbmVudE5hbWUgPSBwYXJlbnRDb21wb25lbnQgPyBwYXJlbnRDb21wb25lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpIDogbnVsbFxuICAgICAgICBwYXJlbnRDb21wb25lbnRcbiAgICAgICAgICAgID8gY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQocGFyZW50Q29tcG9uZW50TmFtZSkudGhlbigoKSA9PiBzZW5kTXNnQW5kSW5pdChwcm9wLnJlcXVlc3RlciwgcGFyZW50Q29tcG9uZW50KSlcbiAgICAgICAgICAgIDogY29uc29sZS53YXJuKGBSZWdpc3RyYXRpb24gZmFpbGVkIGZvciAlYzwke3Byb3AucmVxdWVzdGVyLnRhZ05hbWUudG9Mb3dlckNhc2UoKX0+JWM6IG5vIHBhcmVudCBjb21wb25lbnQgZm91bmQuYCwgW0lrYURlYnVnU3R5bGVzLkNvbXBvbmVudE5hbWUsICdjb2xvcjogdW5zZXQnXSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBpa2EucmVnLnN1YnNjcmliZVRvQmluZChwcm9wLmJpbmQsIHByb3AucmVxdWVzdGVyLmdldE5vZGVJZCgpLCBwcm9wLnJlcXVlc3Rlci5iaW5kVmFsdWVDaGFuZ2VkLmJpbmQocHJvcC5yZXF1ZXN0ZXIpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbmRNc2dBbmRJbml0KHJlcXVlc3RlcjogQmluZGluZ0NvbXBvbmVudCwgcGFyZW50Q29tcG9uZW50OiBJa2FDb21wb25lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlrYS5kZWJ1ZyhgQ29tcG9uZW50ICVjPCR7cHJvcC5yZXF1ZXN0ZXIudGFnTmFtZS50b0xvd2VyQ2FzZSgpfT4lYyBpcyBzZW5kaW5nIGJpbmQgcmVnaXN0cmF0aW9uIHRvIHBhcmVudCAlYzwke3BhcmVudENvbXBvbmVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCl9PmAsXG4gICAgICAgICAgICAgICAgW0lrYURlYnVnU3R5bGVzLkNvbXBvbmVudE5hbWUsIElrYURlYnVnU3R5bGVzLlVuc2V0LCBJa2FEZWJ1Z1N0eWxlcy5Db21wb25lbnROYW1lXSk7XG4gICAgICAgICAgICByZXF1ZXN0ZXIuZGlzcGF0Y2hFdmVudChnZXRSZWdpc3RyYXRpb25FdmVudCh0cnVlLCByZXF1ZXN0ZXIsIHByb3AuYmluZCkpXG5cbiAgICAgICAgICAgIHJlcXVlc3Rlci5vblBhcmVudENvbXBvbmVudExvYWRlZCgpXG4gICAgICAgICAgICBjb25zdCBpbml0U3RhdGUgPSBwYXJlbnRDb21wb25lbnQuZ2V0U3RhdGUocHJvcC5iaW5kKVxuICAgICAgICAgICAgaW5pdFN0YXRlICYmIHByb3AucmVxdWVzdGVyLmJpbmRWYWx1ZUNoYW5nZWQoeyBrOiBwcm9wLmJpbmQsIHY6IGluaXRTdGF0ZSB9KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBJa2EgZXJyb3IgLSBDb3VsZCBub3Qgc2VuZCByZWdpc3RyYXRpb25gKVxuICAgICAgICAgICAgY29uc29sZS5sb2coeyByZXF1ZXN0ZXI6IHJlcXVlc3RlciwgcGFyZW50Q29tcG9uZW50OiBwYXJlbnRDb21wb25lbnQgfSlcbiAgICAgICAgICAgIHRocm93IGVcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlcmVnaXN0ZXJCaW5kKHByb3A6IFJlZ2lzdGVyQmluZFByb3BzKSB7XG4gICAgaWthLmRlYnVnKGBEZXJlZ2lzdGVyaW5nIGJpbmRpbmcgdG8gJWNcIiR7cHJvcC5iaW5kfVwiJWMgYnkgY29tcG9uZW50ICVjPCR7cHJvcC5yZXF1ZXN0ZXIudGFnTmFtZS50b0xvd2VyQ2FzZSgpfT5gLCBbSWthRGVidWdTdHlsZXMuVmFyaWFibGVWYWx1ZSwgJ2NvbG9yOiB1bnNldCcsIElrYURlYnVnU3R5bGVzLkNvbXBvbmVudE5hbWVdKVxuICAgIGlmICghcHJvcC5nbG9iYWwpIHtcbiAgICAgICAgY29uc3QgcGFyZW50Q29tcG9uZW50ID0gYXdhaXQgZ2V0UGFyZW50SWthQ29tcG9uZW50KHByb3AucmVxdWVzdGVyKSBhcyBJa2FDb21wb25lbnRcbiAgICAgICAgcGFyZW50Q29tcG9uZW50XG4gICAgICAgICAgICA/IHByb3AucmVxdWVzdGVyLmRpc3BhdGNoRXZlbnQoZ2V0UmVnaXN0cmF0aW9uRXZlbnQoZmFsc2UsIHByb3AucmVxdWVzdGVyLCBwcm9wLmJpbmQpKVxuICAgICAgICAgICAgOiBjb25zb2xlLndhcm4oYFJlZ2lzdHJhdGlvbiBmYWlsZWQgZm9yIDwke3Byb3AucmVxdWVzdGVyLnRhZ05hbWUudG9Mb3dlckNhc2UoKX0+OiBubyBwYXJlbnQgY29tcG9uZW50IGZvdW5kLmApXG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZWdpc3RyYXRpb25FdmVudChyZWdpc3RlcjogYm9vbGVhbiwgcmVxdWVzdGVyOiBCaW5kaW5nQ29tcG9uZW50LCBiaW5kOiBzdHJpbmcpIHtcbiAgICBjb25zdCBsZWFwID0gTnVtYmVyLnBhcnNlSW50KHJlcXVlc3Rlci5nZXRBdHRyaWJ1dGUoJ2xlYXAnKSlcbiAgICBjb25zdCBkZXRhaWw6IENvbXBvbmVudENhbGwuRXZlbnREZXRhaWwuUmVnaXN0ZXJCaW5kIHwgQ29tcG9uZW50Q2FsbC5FdmVudERldGFpbC5EZXJlZ2lzdGVyQmluZCA9IHtcbiAgICAgICAgdHlwZTogcmVnaXN0ZXIgPyBDb21wb25lbnRDYWxsLkV2ZW50VHlwZS5SZWdpc3RlckJpbmQgOiBDb21wb25lbnRDYWxsLkV2ZW50VHlwZS5EZXJlZ2lzdGVyQmluZCxcbiAgICAgICAgbm9kZUlkOiByZXF1ZXN0ZXIuZ2V0Tm9kZUlkKCksXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGJpbmQ6IGJpbmQsXG4gICAgICAgICAgICBpc3N1ZXI6IHJlcXVlc3RlcixcbiAgICAgICAgICAgIGxlYXA6IE51bWJlci5pc05hTihsZWFwKSA/IG51bGwgOiBsZWFwXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDdXN0b21FdmVudChDdXN0b21FdmVudFR5cGVzLkNvbXBvbmVudENhbGwsIHtcbiAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgIGRldGFpbDogZGV0YWlsXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudElrYUNvbXBvbmVudChjOiBCaW5kaW5nQ29tcG9uZW50LCBpZ25vcmVMZWFwPzogYm9vbGVhbikge1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxJa2FDb21wb25lbnQ+KChyZXMsIHJlaikgPT4ge1xuICAgICAgICBjb25zdCBkZXRhaWw6IENvbXBvbmVudENhbGwuRXZlbnREZXRhaWwuR2V0Q29tcG9uZW50ID0ge1xuICAgICAgICAgICAgdHlwZTogQ29tcG9uZW50Q2FsbC5FdmVudFR5cGUuR2V0Q29tcG9uZW50LFxuICAgICAgICAgICAgbm9kZUlkOiBjLmdldE5vZGVJZCgpLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGNiOiByZXMsXG4gICAgICAgICAgICAgICAgbGVhcDogaWdub3JlTGVhcCA/IG51bGwgOiBOdW1iZXIucGFyc2VJbnQoYy5nZXRBdHRyaWJ1dGUoJ2xlYXAnKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoQ3VzdG9tRXZlbnRUeXBlcy5Db21wb25lbnRDYWxsLCB7XG4gICAgICAgICAgICBkZXRhaWw6IGRldGFpbCxcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgYy5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHByb21pc2VcblxuXG4gICAgLy8gbGV0IHBhcmVudCA9IGUsIGlzQ3VzdG9tQ29tcG9uZW50ID0gZmFsc2UsIGhhc1BhcmVudCA9IHRydWU7XG5cbiAgICAvLyBkbyB7XG4gICAgLy8gICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50IHx8IChwYXJlbnQucGFyZW50Tm9kZSBhcyBTaGFkb3dSb290KS5ob3N0XG4gICAgLy8gICAgIGlmICghcGFyZW50KSB7XG4gICAgLy8gICAgICAgICBoYXNQYXJlbnQgPSBmYWxzZVxuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgaXNDdXN0b21Db21wb25lbnQgPSBwYXJlbnQudGFnTmFtZS5pbmNsdWRlcygnLScpICYmICEoWydJS0EtQicsICdJS0EtQUInLCAnSUtBLVNEQyddLmluY2x1ZGVzKHBhcmVudC50YWdOYW1lKSlcbiAgICAvLyAgICAgfVxuICAgIC8vIH0gd2hpbGUgKCFpc0N1c3RvbUNvbXBvbmVudCAmJiBoYXNQYXJlbnQpXG5cbiAgICAvLyByZXR1cm4gaXNDdXN0b21Db21wb25lbnQgPyBwYXJlbnQgOiBudWxsXG59IiwiaW1wb3J0IHsgaWthIH0gZnJvbSAnLi4vaWthJ1xuaW1wb3J0IHsgQnVmZmVyT2JqZWN0LCBCdWZmZXJVcGRhdGUsIFVwZGF0ZVR5cGUgfSBmcm9tICcuLi90eXBlcy9idWZmZXInXG5cbmV4cG9ydCBjbGFzcyBJa2FCdWZmZXIge1xuICAgICNidWZmZXI6IEJ1ZmZlck9iamVjdCA9IHt9XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGRlYnVnKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLiNidWZmZXJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1c2godXBkYXRlOiBCdWZmZXJVcGRhdGUpIHtcbiAgICAgICAgaWYgKCFbJ3N0cmluZycsICdudW1iZXInLCAnYm9vbGVhbiddLmluY2x1ZGVzKHR5cGVvZiB1cGRhdGUudikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5leHBlY3RlZCBkYXRhIHR5cGUgYmVpbmcgcHVzaGVkIHRvIElrYSBCdWZmZXIuIFB1c2ggcmVqZWN0ZWRgKVxuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnVmID0gdGhpcy4jYnVmZmVyXG5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tBbmRJbml0KG8sIGs6IHN0cmluZyB8IG51bWJlciwgaSkge1xuICAgICAgICAgICAgaWYgKCFvW2tdKSB7IG9ba10gPSBpIH1cbiAgICAgICAgfVxuICAgICAgICBjaGVja0FuZEluaXQoYnVmLCB1cGRhdGUubiwge30pXG4gICAgICAgIGNoZWNrQW5kSW5pdChidWZbdXBkYXRlLm5dLCB1cGRhdGUudHlwZSwge30pXG4gICAgICAgIGNoZWNrQW5kSW5pdChidWZbdXBkYXRlLm5dW3VwZGF0ZS50eXBlXSwgdXBkYXRlLmssIFtdKVxuXG4gICAgICAgIGJ1Zlt1cGRhdGUubl1bdXBkYXRlLnR5cGVdW3VwZGF0ZS5rXS5wdXNoKHVwZGF0ZS52KVxuICAgIH1cblxuXG5cbiAgICBnZXRCdWZmZXIoKSB7XG4gICAgICAgIG9wdGltaXNlQnVmZmVyKClcbiAgICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHRoaXMuI2J1ZmZlcilcblxuICAgICAgICBmdW5jdGlvbiBjbG9uZUJ1ZmZlcihjbG9uZUZyb206IEJ1ZmZlck9iamVjdCkge1xuICAgICAgICAgICAgY29uc3QgYnVmZmVyOiBCdWZmZXJPYmplY3QgPSB7fVxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2xvbmVGcm9tKS5mb3JFYWNoKChbbm9kZUlkLCB0eXBlR3JvdXBpbmddKSA9PiB7XG4gICAgICAgICAgICAgICAgYnVmZmVyW25vZGVJZF0gPSB7fSBhcyB7IFt0eXBlIGluIFVwZGF0ZVR5cGVdOiB7fSB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModHlwZUdyb3VwaW5nKS5mb3JFYWNoKChbdHlwZSwga2V5QXJyXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBidWZmZXJbbm9kZUlkXVt0eXBlXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhrZXlBcnIpLmZvckVhY2goKFtrLCB2XSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyW25vZGVJZF1bdHlwZV1ba10gPSBbLi4udl1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBidWZmZXJcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9wdGltaXNlQnVmZmVyKCkge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldEJ1ZmZlcigpIHsgdGhpcy4jYnVmZmVyID0ge30gfVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NCdWZmZXIoKSB7XG4gICAgLy8gaWYgKE9iamVjdC5lbnRyaWVzKGlrYS5idWZmZXIuZ2V0QnVmZmVyKCkpLmxlbmd0aCA+IDApIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmVudHJpZXMoaWthLmJ1ZmZlci5nZXRCdWZmZXIoKSkpKVxuICAgIC8vIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBzJykudGV4dENvbnRlbnQgPSBJS0FfVVBTLnRvU3RyaW5nKCk7XG5cbiAgICBPYmplY3QuZW50cmllcyhpa2EuYnVmZmVyLmdldEJ1ZmZlcigpKS5mb3JFYWNoKChbbm9kZUlkLCB1cGRhdGVzXSkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBpa2EucmVnLmdldE5vZGVGcm9tSWQobm9kZUlkKVxuXG4gICAgICAgIC8vIFRoaXMgcGFzc2VkIEJ1ZmZlciBpcyB3aXRob3V0IGFueSBvcHRpbWlzYXRpb24gLSBzaG91bGQgcmVjZWl2ZSB2YWwgYXMgYSBzaW5nbGUgdmFsdWUgb25seS4gXG4gICAgICAgIFVwZGF0ZVR5cGUuUFJPUCBpbiB1cGRhdGVzXG4gICAgICAgICAgICAmJiBPYmplY3QuZW50cmllcyh1cGRhdGVzW1VwZGF0ZVR5cGUuUFJPUF0pLmZvckVhY2goKFtrZXksIHZhbF0pID0+IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbC5wb3AoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgVXBkYXRlVHlwZS5BVFRSIGluIHVwZGF0ZXMgJiYgdGFyZ2V0Lm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFXG4gICAgICAgICAgICAmJiBPYmplY3QuZW50cmllcyh1cGRhdGVzW1VwZGF0ZVR5cGUuQVRUUl0pLmZvckVhY2goKFtrZXksIHZhbF0pID0+IHtcbiAgICAgICAgICAgICAgICAodGFyZ2V0IGFzIEVsZW1lbnQpLnNldEF0dHJpYnV0ZShrZXksIHZhbC5wb3AoKS50b1N0cmluZygpKVxuICAgICAgICAgICAgfSlcblxuICAgIH0pXG5cbiAgICBpa2EuYnVmZmVyLnJlc2V0QnVmZmVyKClcbn1cbiIsImV4cG9ydCBjbGFzcyBJbml0QnVuZGxlIHtcbiAgICAjZGF0YSA9IHt9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgIGFkZChjbjogc3RyaW5nLCBidW5kbGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbiAhPSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgJ0luaXRpYWxpc2F0aW9uIGJ1bmRsZSBvYmplY3QgbXVzdCBoYXZlIGEgc3RyaW5nIGNvbXBvbmVudCBuYW1lLic7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jZGF0YVtjbl0gPSBidW5kbGU7XG4gICAgfVxuICAgIGdldChjbjogc3RyaW5nKSB7XG4gICAgICAgIC8vIE5vdCBkZWVwIGNsb25lZCEgRm9yIHNhZmV0eSwgc2hvdWxkIGJlIGNvcGllZC5cbiAgICAgICAgcmV0dXJuIHRoaXMuI2RhdGFbY25dO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGlrYSwgSWthRGVidWdTdHlsZXMgfSBmcm9tIFwiLi4vaWthXCJcbmltcG9ydCB7IEJpbmRDYWxsYmFjaywgQmluZENhbGxiYWNrQXJyYXkgfSBmcm9tIFwiLi4vdHlwZXMvYmluZHNcIlxuaW1wb3J0IEJpbmRpbmdDb21wb25lbnQgZnJvbSBcIi4vYmluZFwiXG5pbXBvcnQgU3RhdGVCaW5kUmVnaXN0ZXIgZnJvbSBcIi4vc2JyXCJcblxudHlwZSBJbXBvcnRSZWdpc3RyeSA9IHtcbiAgICBbcDogc3RyaW5nXToge1xuICAgICAgICB0OiBOb2RlW10sIC8vIFRlbXBsYXRlIG5vZGVzXG4gICAgICAgIG46IE5vZGVbXSAgLy8gT3RoZXIgbm9kZXNcbiAgICB9XG59XG5cbmV4cG9ydCB0eXBlIEJpbmRSZWNvcmRzID0ge1xuICAgIFtiaW5kOiBzdHJpbmddOiBCaW5kUmVjb3JkXG59XG5leHBvcnQgdHlwZSBCaW5kUmVjb3JkID0ge1xuICAgIHY6IGFueSxcbiAgICBjYjogQmluZENhbGxiYWNrQXJyYXlcbiAgICBwPzogR2xvYmFsQmluZFBlcm1pc3Npb25zXG59XG5cbmV4cG9ydCB0eXBlIEdsb2JhbEJpbmRQZXJtaXNzaW9ucyA9IHtcbiAgICBydzogQXJyYXk8c3RyaW5nPixcbiAgICByPzogQXJyYXk8c3RyaW5nPlxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJa2FSZWdpc3RyeSB7XG4gICAgI2ltcG9ydHM6IEltcG9ydFJlZ2lzdHJ5ID0ge31cbiAgICAjbm9kZUlkczogeyBbaWQ6IHN0cmluZ106IE5vZGUgfSA9IHt9XG4gICAgI2JpbmRzID0gbmV3IFN0YXRlQmluZFJlZ2lzdGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgaGFzSW1wb3J0KHBhdGg6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gcGF0aCBpbiB0aGlzLiNpbXBvcnRzXG4gICAgfVxuICAgIHJlZ2lzdGVySW1wb3J0KHBhdGg6IHN0cmluZykge1xuICAgICAgICB0aGlzLiNpbXBvcnRzW3BhdGhdID0geyB0OiBbXSwgbjogW10gfVxuICAgIH1cbiAgICBhZGRUZW1wbGF0ZU5vZGUocGF0aDogc3RyaW5nLCBub2RlOiBOb2RlKSB7XG4gICAgICAgIHRoaXMuI2ltcG9ydHNbcGF0aF0udC5wdXNoKG5vZGUpXG4gICAgfVxuICAgIGFkZE5vZGVzKHBhdGg6IHN0cmluZywgbm9kZXM6IE5vZGVMaXN0KSB7XG4gICAgICAgIHRoaXMuI2ltcG9ydHNbcGF0aF0ubi5wdXNoKC4uLm5vZGVzKVxuICAgIH1cbiAgICBnZXRJbXBvcnRSZWdpc3RlckJ5UGF0aChwOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2ltcG9ydHNbcF1cbiAgICB9XG5cbiAgICAvLyBQYXNzIFN0YXRlQmluZFJlZ2lzdGVycyBjbGFzcyBtZXRob2RzIGF2YWlsYWJsZSB0aHJvdWdoIHRoaXMuI2JpbmRzIGFzIElrYVJlZ2lzdHJ5IGNsYXNzIG1ldGhvZHNcbiAgICBzdWJzY3JpYmVUb0JpbmQoazogc3RyaW5nLCBub2RlSWQ6IHN0cmluZywgY2I6IEJpbmRDYWxsYmFjaykgeyB0aGlzLiNiaW5kcy5zdWJzY3JpYmVUb0JpbmQoaywgbm9kZUlkLCBjYikgfVxuICAgIHVuc3Vic2NyaWJlVG9CaW5kKG5vZGVJZDogc3RyaW5nLCBrOiBzdHJpbmcpIHsgdGhpcy4jYmluZHMudW5zdWJzY3JpYmVUb0JpbmQobm9kZUlkLCBrKSB9XG4gICAgc2V0QmluZFZhbHVlKGs6IHN0cmluZywgdjogYW55LCBub2RlSWQ/OiBzdHJpbmcsIHA/OiBHbG9iYWxCaW5kUGVybWlzc2lvbnMpIHtcbiAgICAgICAgdGhpcy4jYmluZHMuc2V0VmFsdWUoaywgdiwgbm9kZUlkLCBwKVxuICAgIH1cbiAgICBnZXRCaW5kVmFsdWUoazogc3RyaW5nLCBub2RlSWQ/OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgdiA9IHRoaXMuI2JpbmRzLmdldFZhbHVlKGssIG5vZGVJZClcbiAgICAgICAgcmV0dXJuIHZcbiAgICB9XG5cbiAgICByZWdpc3Rlck5vZGUocmVxdWVzdGVyOiBCaW5kaW5nQ29tcG9uZW50LCBuOiBFbGVtZW50LCBjYjogKGlkOiBzdHJpbmcsIG46IEVsZW1lbnQsIHI6IEJpbmRpbmdDb21wb25lbnQpID0+IHZvaWQpIHtcbiAgICAgICAgLy8gVGhpcyBjaGVja3MgaWYgYSBub2RlIGhhcyBhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZC4gTm90IGVudGlyZWx5IG5lY2Vzc2FyeSB0byBub3JtYWwgZnVuY3Rpb25pbmc/XG4gICAgICAgIGlmICghcmVxdWVzdGVyIHx8ICFuKSB7IGNvbnNvbGUuZXJyb3IoYENvdWxkIG5vdCByZWdpc3RlciBub2RlIC0gcmVxdWVzdGVyIGFuZCBlbGVtZW50IG11c3QgYmUgc3VwcGxpZWQuYCkgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nUmVnaXN0cmF0aW9uID0gT2JqZWN0LmVudHJpZXModGhpcy4jbm9kZUlkcykuZmluZChlbnRyeSA9PiBlbnRyeVsxXS5pc1NhbWVOb2RlKG4pKVxuICAgICAgICBpZiAoZXhpc3RpbmdSZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQW5vdGhlciByZWdpc3RyYXRpb24gcmVxdWVzdCBpcyBtYWRlIGZvciBhIG5vZGUuIEl0J3MgY3VycmVudGx5IHJlZ2lzdGVyZWQgYXMgJWMke2V4aXN0aW5nUmVnaXN0cmF0aW9uWzBdfWAsICdjb2xvcjogIzk5OScpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldE5ld0lkKGNiKVxuICAgICAgICAgICAgLnRoZW4oKFtpZCwgY2JdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWthLmRlYnVnKGBSZWdpc3RlcmVkIG5vZGUgJWM8JHtuPy50YWdOYW1lLnRvTG93ZXJDYXNlKCl9PiVjIHdpdGggSUQgJWMke2lkfWAsIFtJa2FEZWJ1Z1N0eWxlcy5Db21wb25lbnROYW1lLCAnY29sb3I6IHVuc2V0JywgJ2NvbG9yOiAjOTk5J10pXG5cbiAgICAgICAgICAgICAgICB0aGlzLiNub2RlSWRzW2lkXSA9IG5cbiAgICAgICAgICAgICAgICBjYihpZCwgbiwgcmVxdWVzdGVyKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXROb2RlRnJvbUlkKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCEoaWQgaW4gdGhpcy4jbm9kZUlkcykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQSBxdWVyeSBpcyBtYWRlIGZvciBub2RlIGlkICVjJHtpZH0gJWMsIGFuZCB0aGUgSUQgd2FzIG5vdCByZWdpc3RlcmVkLmAsICdjb2xvcjogIzk5OScsICdjb2xvcjogdW5zZXQnKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLiNub2RlSWRzW2lkXVxuICAgIH1cblxuICAgIGRlcmVnaXN0ZXJOb2RlKG46IEVsZW1lbnQsIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCEodGhpcy4jbm9kZUlkc1tpZF0pKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFRyeWluZyB0byBkZXJlZ2lzdGVyIG5vZGUgSUQgJWMke2lkfSVjLCBidXQgdGhlIElEIHdhcyBub3QgcmVnaXN0ZXJlZC5gLCAnY29sb3I6ICM5OTknLCAnY29sb3I6IHVuc2V0JylcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy4jbm9kZUlkc1tpZF0uaXNTYW1lTm9kZShuKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBUcnlpbmcgdG8gZGVyZWdpc3RlciBub2RlIElEICVjJHtpZH0lYywgYnV0IHRoZSBzdXBwbGllZCBub2RlIHdhcyBub3QgdGhlIHNhbWUgYXMgcmVjb3Jkcy5gLCAnY29sb3I6ICM5OTknLCAnY29sb3I6IHVuc2V0JylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLiNub2RlSWRzW2lkXVxuICAgICAgICAgICAgdGhpcy4jYmluZHMuY2xlYXJEZXJlZ2lzdGVyZWROb2RlKGlkKVxuICAgICAgICAgICAgaWthLmRlYnVnKGBOb2RlIElEICVjJHtpZH0lYyBpcyBkZXJlZ2lzdGVyZWRgLCBbJ2NvbG9yOiAjOTk5JywgJ2NvbG9yOiB1bnNldCddKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TmV3SWQoY2IpIHtcbiAgICAgICAgbGV0IG5ld0lkO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBuZXdJZCA9IGF3YWl0IGdlbmVyYXRlSWRTdHJpbmcoKVxuICAgICAgICB9IHdoaWxlIChuZXdJZCBpbiB0aGlzLiNub2RlSWRzKVxuICAgICAgICB0aGlzLiNub2RlSWRzW25ld0lkXSA9IG51bGxcbiAgICAgICAgcmV0dXJuIFtuZXdJZCwgY2JdXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUlkU3RyaW5nKCkge1xuICAgIGNvbnN0IHRocmVhZHMgPSBbXSwgcGFydHMgPSA0LCBsZW5ndGggPSA2XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgdGhyZWFkcy5wdXNoKG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICAgICAgICAgIGxldCBzdHIgPSAnJ1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNikgKyA2NVxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1bXAgPSAzMiAqIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSlcbiAgICAgICAgICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShiYXNlICsgYnVtcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcyhzdHIpXG4gICAgICAgIH0pKVxuICAgIH1cbiAgICBjb25zdCByZXMgPSBhd2FpdCBQcm9taXNlLmFsbCh0aHJlYWRzKVxuICAgIHJldHVybiByZXMuam9pbignLScpXG59IiwiaW1wb3J0IHsgaWthLCBJa2FEZWJ1Z1N0eWxlcyB9IGZyb20gXCIuLi9pa2FcIjtcbmltcG9ydCB7IEJpbmRDYWxsYmFjaywgQmluZENhbGxiYWNrQXJyYXkgfSBmcm9tIFwiLi4vdHlwZXMvYmluZHNcIjtcbmltcG9ydCB7IEJpbmRpbmdFdmVudCB9IGZyb20gXCIuLi90eXBlcy9ldmVudHNcIjtcbmltcG9ydCB7IEJpbmRSZWNvcmRzLCBHbG9iYWxCaW5kUGVybWlzc2lvbnMgfSBmcm9tIFwiLi9yZWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVCaW5kUmVnaXN0ZXIge1xuICAgICNiaW5kczogQmluZFJlY29yZHMgPSB7fVxuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHN1YnNjcmliZVRvQmluZChrOiBzdHJpbmcsIG5vZGVJZDogc3RyaW5nLCBjYjogQmluZENhbGxiYWNrKSB7XG4gICAgICAgIGlmICghbm9kZUlkIHx8ICFrIHx8ICFjYikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgU3Vic2NyaWJpbmcgdG8gYmluZCBtdXN0IHNwZWNpZnkgYmluZCBrZXksIG5vZGUgSUQsIGFuZCBhIGNhbGxiYWNrIGZ1bmN0aW9uLmApXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7IGs6IGssIG5vZGVJZDogbm9kZUlkLCBjYjogY2IgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld0NiUmVjb3JkID0geyBub2RlSWQ6IG5vZGVJZCwgY2I6IGNiIH1cbiAgICAgICAgaWYgKCEoayBpbiB0aGlzLiNiaW5kcykpIHtcbiAgICAgICAgICAgIC8vIFN1YnNjcmliaW5nIHRvIGEgZ2xvYmFsIGJpbmQgaXMgYWxsb3dlZCBiZWZvcmUgaXQncyBiZWVuIHNldCBhIHZhbHVlLiBUaGlzIGRlZmF1bHRzIHRvIGEgcGVybWlzc2lvbmxlc3MgYmluZCB2YXIuXG4gICAgICAgICAgICB0aGlzLiNiaW5kc1trXSA9IHsgdjogbnVsbCwgY2I6IFtuZXdDYlJlY29yZF0gfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYmluZFJlY29yZCA9IHRoaXMuI2JpbmRzW2tdXG4gICAgICAgICAgICBpZiAoYmluZFJlY29yZC5wICYmICFiaW5kUmVjb3JkLnAucncuaW5jbHVkZXMobm9kZUlkKSAmJiBiaW5kUmVjb3JkLnAuciAmJiAhYmluZFJlY29yZC5wLnIuaW5jbHVkZXMobm9kZUlkKSkge1xuICAgICAgICAgICAgICAgIGlrYS5kZWJ1ZyhgQmluZCBieSBub2RlICVjJHtub2RlSWR9IG9udG8ga2V5IFwiJWMke2t9JWNcIiBmYWlsZWQgYXMgdGhpcyBub2RlIGlzIG5vdCBwZXJtaXNzaW9uZWQuYCxcbiAgICAgICAgICAgICAgICAgICAgWydjb2xvcjogIzk5OScsICdjb2xvcjogdW5zZXQnLCBJa2FEZWJ1Z1N0eWxlcy5WYXJpYWJsZVZhbHVlLCAnY29sb3I6IHVuc2V0J10pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJpbmRSZWNvcmQuY2IucHVzaChuZXdDYlJlY29yZClcbiAgICAgICAgfVxuXG4gICAgICAgIGlrYS5kZWJ1ZyhgTm9kZSAlYyR7bm9kZUlkfSVjIGlzIHN1YnNjcmliZWQgdG8gYmluZCBrZXkgJWNcIiR7a31cIiVjYCxcbiAgICAgICAgICAgIFtJa2FEZWJ1Z1N0eWxlcy5Ob2RlSUQsIElrYURlYnVnU3R5bGVzLlVuc2V0LCBJa2FEZWJ1Z1N0eWxlcy5WYXJpYWJsZVZhbHVlLCBJa2FEZWJ1Z1N0eWxlcy5VbnNldF0pXG4gICAgfVxuXG4gICAgdW5zdWJzY3JpYmVUb0JpbmQobm9kZUlkOiBzdHJpbmcsIGs/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGsgJiYgIShrIGluIHRoaXMuI2JpbmRzKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBcIiVjJHtrfSVjXCIgaXMgbm90IGEgcmVnaXN0ZXJlZCBiaW5kIGtleS5gLCBJa2FEZWJ1Z1N0eWxlcy5WYXJpYWJsZVZhbHVlLCAnY29sb3I6IHVuc2V0Jyk7IHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjb3BlID0gW2tdIHx8IE9iamVjdC5rZXlzKHRoaXMuI2JpbmRzKVxuXG4gICAgICAgIHNjb3BlLmZvckVhY2goYmluZCA9PiB7XG4gICAgICAgICAgICB0aGlzLiNiaW5kc1tiaW5kXS5jYiA9IHRoaXMuI2JpbmRzW2JpbmRdLmNiLmZpbHRlcihlbnRyeSA9PiBlbnRyeS5ub2RlSWQgIT0gbm9kZUlkKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNsZWFyRGVyZWdpc3RlcmVkTm9kZShub2RlSWQ6IHN0cmluZykge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyZWdpc3RyeS1kZXJlZ2lzdGVyLW5vZGUtZnJvbS1iaW5kcy1zdGFydCcsIHtcbiAgICAgICAgICAgIGRldGFpbDogeyBub2RlSWQ6IG5vZGVJZCB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgYmluZEVudHJpZXMgPSBPYmplY3QuZW50cmllcyh0aGlzLiNiaW5kcylcbiAgICAgICAgYmluZEVudHJpZXMuZm9yRWFjaCgoW2ssIGJpbmRdKSA9PlxuICAgICAgICAgICAgYmluZC5jYiA9IGJpbmQuY2IuZmlsdGVyKHJlY29yZCA9PiByZWNvcmQubm9kZUlkICE9IG5vZGVJZClcbiAgICAgICAgKVxuXG4gICAgICAgIHBlcmZvcm1hbmNlLm1lYXN1cmUoJ3JlZ2lzdHJ5LWRlcmVnaXN0ZXItbm9kZS1mcm9tLWJpbmRzLWVuZCcsIHtcbiAgICAgICAgICAgIHN0YXJ0OiAncmVnaXN0cnktZGVyZWdpc3Rlci1ub2RlLWZyb20tYmluZHMtc3RhcnQnLFxuICAgICAgICAgICAgZGV0YWlsOiB7IG5vZGVJZDogbm9kZUlkLCBiaW5kc0NvdW50OiBiaW5kRW50cmllcy5sZW5ndGggfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBnZXRWYWx1ZShrOiBzdHJpbmcsIG5vZGVJZD86IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMuI2JpbmRzW2tdKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFRyaWVkIHJlYWRpbmcgc3RhdGUgJHtrfSwgYnV0IGl0J3Mgbm90IGRlZmluZWQuYClcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwID0gdGhpcy4jYmluZHNba10ucFxuICAgICAgICBjb25zdCBub2RlSWRIYXNSZWFkUGVybWlzc2lvbiA9IHAgJiYgbm9kZUlkICYmIChwLnJ3LmluY2x1ZGVzKG5vZGVJZCkgfHwgKHAuciAmJiBwLnIuaW5jbHVkZXMobm9kZUlkKSkpXG4gICAgICAgIGlmICghcCB8fCBub2RlSWRIYXNSZWFkUGVybWlzc2lvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI2JpbmRzW2tdLnZcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgTm9kZSBJRCAke25vZGVJZH0gdHJpZWQgcmVhZGluZyBzdGF0ZSAke2t9LCBidXQgaXQgaGFzIG5vIHBlcm1pc3Npb24gdG8gcmVhZC5gKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBkZWxldGVOb2RlRnJvbUJpbmRSZWNvcmRzKG5vZGU6IEhUTUxFbGVtZW50LCBpZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY2xlYXJEZXJlZ2lzdGVyZWROb2RlKGlkKVxuICAgICAgICBpa2EucmVnLmRlcmVnaXN0ZXJOb2RlKG5vZGUsIGlkKVxuICAgIH1cblxuICAgIHNldFZhbHVlKGs6IHN0cmluZywgdjogYW55LCBub2RlSWQ/OiBzdHJpbmcsIHA/OiBHbG9iYWxCaW5kUGVybWlzc2lvbnMpIHtcbiAgICAgICAgaWYgKGsgaW4gdGhpcy4jYmluZHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGJpbmRSZWNvcmQgPSB0aGlzLiNiaW5kc1trXVxuICAgICAgICAgICAgY29uc3QgaGFzUGVybWlzc2lvbiA9IGNoZWNrSWZQZXJtaXNzaW9uZWRGb3JSVyhiaW5kUmVjb3JkKVxuICAgICAgICAgICAgaWYgKCFoYXNQZXJtaXNzaW9uKSB7IHJldHVybiB9XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYmluZFJlY29yZCwgeyB2OiB2IH0pXG4gICAgICAgICAgICBwICYmIHNldFBlcm1pc3Npb25zKG5vZGVJZCwgcCwgYmluZFJlY29yZClcblxuICAgICAgICAgICAgaWthLmRlYnVnKGBCaW5kIFwiJWMke2t9JWNcIiBoYXMgY2hhbmdlZCB0byBcIiVjJHt2fSVjXCIsIHRyaWdnZXJpbmcgJHt0aGlzLiNiaW5kc1trXS5jYi5sZW5ndGh9IGNhbGxiYWNrcy5gLFxuICAgICAgICAgICAgICAgIFtJa2FEZWJ1Z1N0eWxlcy5WYXJpYWJsZVZhbHVlLCBJa2FEZWJ1Z1N0eWxlcy5VbnNldCwgSWthRGVidWdTdHlsZXMuVmFyaWFibGVWYWx1ZSwgSWthRGVidWdTdHlsZXMuVW5zZXRdKVxuXG4gICAgICAgICAgICBjbGVhbkludm9rZUNicy5iaW5kKHRoaXMpKGJpbmRSZWNvcmQuY2IsIHsgazogaywgdjogdiB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4jYmluZHNba10gPSB7XG4gICAgICAgICAgICAgICAgdjogdixcbiAgICAgICAgICAgICAgICBjYjogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAgJiYgc2V0UGVybWlzc2lvbnMobm9kZUlkLCBwLCB0aGlzLiNiaW5kc1trXSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFuSW52b2tlQ2JzKGFyOiBCaW5kQ2FsbGJhY2tBcnJheSwgdTogQmluZGluZ0V2ZW50LlZhbHVlVXBkYXRlKSB7XG4gICAgICAgICAgICBhci5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gaWthLnJlZy5nZXROb2RlRnJvbUlkKGVudHJ5Lm5vZGVJZCkgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICBub2RlPy5pc0Nvbm5lY3RlZFxuICAgICAgICAgICAgICAgICAgICA/IGVudHJ5LmNiKHUpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5kZWxldGVOb2RlRnJvbUJpbmRSZWNvcmRzKG5vZGUsIGVudHJ5Lm5vZGVJZClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjb3B5UGVybWlzc2lvbk9iamVjdChwOiBHbG9iYWxCaW5kUGVybWlzc2lvbnMpIHtcbiAgICAgICAgICAgIC8vIFBlcm1pc3Npb24gaXMgY29waWVkIGZyb20gYXJyYXlzIHNvIHRoYXQgdGhleSBjYW5ub3QgYmUgY2hhbmdlZCBvdXRzaWRlIElrYVJlZ2lzdHJ5IGNsYXNzIG1ldGhvZHMuXG4gICAgICAgICAgICBjb25zdCBvdXQ6IEdsb2JhbEJpbmRQZXJtaXNzaW9ucyA9IHsgcnc6IFtdIH1cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHAucncpKSB7IG91dC5ydyA9IFsuLi5wLnJ3XSB9XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwLnIpKSB7IG91dC5yID0gWy4uLnAucl0gfVxuXG4gICAgICAgICAgICByZXR1cm4gb3V0XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjaGVja0lmUGVybWlzc2lvbmVkRm9yUlcoYmluZFJlY29yZDogQmluZFJlY29yZHNbbnVtYmVyXSkge1xuICAgICAgICAgICAgaWYgKGJpbmRSZWNvcmQucCAmJiAhbm9kZUlkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igc2V0dGluZyBiaW5kIHZhbHVlIFwiJHtrfVwiOiBhIG5vZGUgSUQgbXVzdCBiZSBwcm92aWRlZCBhcyB0aGUgYmluZGluZyBrZXkgaXMgcGVybWlzc2lvbmVkLmApO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJpbmRSZWNvcmQucCAmJiAhYmluZFJlY29yZC5wLnJ3LmluY2x1ZGVzKG5vZGVJZCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFwiJWMke2t9JWNcIiBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQgYXMgYSBwZXJtaXNzaW9uZWQgYmluZCwgYW5kIHRoaXMgbm9kZSBJRCBpcyBub3QgcGVybWlzc2lvbmVkIGZvciBSZWFkL1dyaXRlLlxuICAgICAgICAgICAgICAgIElmIHlvdSBtZWFudCB0byByZWdpc3RlciBhIGJpbmQgZm9yIHRoZSBmaXJzdCB0aW1lLCBub2RlcyB3aXRoIFJlYWQvV3JpdGUgcGVybWlzc2lvbiBtdXN0IHVucmVnaXN0ZXIgaXQgZmlyc3QuYCxcbiAgICAgICAgICAgICAgICAgICAgSWthRGVidWdTdHlsZXMuVmFyaWFibGVWYWx1ZSwgJ2NvbG9yOiB1bnNldCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0UGVybWlzc2lvbnMobm9kZUlkOiBzdHJpbmcsIHA6IEdsb2JhbEJpbmRQZXJtaXNzaW9ucywgYmluZFJlY29yZDogQmluZFJlY29yZHNbbnVtYmVyXSkge1xuICAgICAgICAgICAgaWYgKCFub2RlSWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFBlcm1pc3Npb25zIG9uIGJpbmQga2V5IFwiJWMke2t9JWNcIiBpcyBub3Qgc2V0LCBhcyBubyBub2RlIElEIHdhcyBwcm92aWRlZC5gLCBJa2FEZWJ1Z1N0eWxlcy5WYXJpYWJsZVZhbHVlLCAnY29sb3I6IHVuc2V0JylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGJpbmRSZWNvcmQucCAmJiAhYmluZFJlY29yZC5wLnJ3LmluY2x1ZGVzKG5vZGVJZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBTZXR0aW5nIHBlcm1pc3Npb25zIG9uIGJpbmQga2V5IFwiJWMke2t9JWNcIiBpcyBkZW5pZWQuIFRoZSBwcm92aWRlZCBub2RlIElEIGRvZXMgbm90IGhhdmUgUlcgcGVybWlzc2lvbi5gLCBJa2FEZWJ1Z1N0eWxlcy5WYXJpYWJsZVZhbHVlLCAnY29sb3I6IHVuc2V0JylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBdXRvbWF0aWNhbGx5IGdpdmluZyB0aGUgbm9kZSBzZXR0aW5nIHBlcm1pc3Npb25zIFJXIHByaXZpbGVnZS5cbiAgICAgICAgICAgICAgICBjb25zdCBwZXJtaXNzaW9uczogR2xvYmFsQmluZFBlcm1pc3Npb25zID0gY29weVBlcm1pc3Npb25PYmplY3QocClcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9ucy5ydy5wdXNoKG5vZGVJZClcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGJpbmRSZWNvcmQsIHsgcDogcGVybWlzc2lvbnMgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJwZXJmb3JtYW5jZS5tYXJrKCdpa2EtaW5pdCcpXG5cbmltcG9ydCBCaW5kaW5nQ29tcG9uZW50LCB7IHJlZ2lzdGVyQmluZCB9IGZyb20gJy4vY29yZS9iaW5kJztcbmltcG9ydCB7IElrYUJ1ZmZlciwgcHJvY2Vzc0J1ZmZlciB9IGZyb20gJy4vY29yZS9idWYnXG5pbXBvcnQgU3RhdGVCaW5kUmVnaXN0ZXIgZnJvbSAnLi9jb3JlL3Nicic7XG5pbXBvcnQgSWthU0RDIGZyb20gJy4vY29tcG9uZW50cy9zZGMnO1xuaW1wb3J0IHsgSW5pdEJ1bmRsZSB9IGZyb20gJy4vY29yZS9pbml0JztcbmltcG9ydCBJa2FSZWdpc3RyeSBmcm9tICcuL2NvcmUvcmVnJztcbmltcG9ydCB7IEJpbmRDYWxsYmFjayB9IGZyb20gJy4vdHlwZXMvYmluZHMnO1xuaW1wb3J0IHsgQmluZGluZ0V2ZW50LCBDb21wb25lbnRDYWxsLCBDdXN0b21FdmVudFR5cGVzIH0gZnJvbSAnLi90eXBlcy9ldmVudHMnO1xuaW1wb3J0IHsgSWthSW5pdE9iamVjdCB9IGZyb20gJy4vdHlwZXMvaW5pdCc7XG5pbXBvcnQgSWthQSBmcm9tICcuL2NvbXBvbmVudHMvYSc7XG5pbXBvcnQgSWthQUIgZnJvbSAnLi9jb21wb25lbnRzL2FiJztcbmltcG9ydCBJa2FCaW5kVG9GdW5jdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvYmYnO1xuaW1wb3J0IElrYU1FIGZyb20gJy4vY29tcG9uZW50cy9tZSc7XG5pbXBvcnQgSWthSW1wb3J0IGZyb20gJy4vY29tcG9uZW50cy9pbXBvcnQnO1xuaW1wb3J0IElrYUIgZnJvbSAnLi9jb21wb25lbnRzL2InO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgY29uc3QgSUtBX1VQUzogbnVtYmVyXG4gICAgY29uc3QgVEVTVElOR19GTEFHUzogYW55XG4gICAgLy8gY29uc3QgY29tcG9uZW50SW1wb3J0czogQXJyYXk8YW55PlxufVxuXG5jb25zdCBjb21wb25lbnRJbXBvcnRzID0gW1xuICAgIG5ldyBJa2FBKCksXG4gICAgbmV3IElrYUFCKCksXG4gICAgbmV3IElrYUJpbmRUb0Z1bmN0aW9uKCksXG4gICAgbmV3IElrYU1FKCksIFxuICAgIG5ldyBJa2FJbXBvcnQoKSxcbiAgICBuZXcgSWthQigpLFxuICAgIG5ldyBJa2FTREMoKSxcbl1cblxuZXhwb3J0IGNvbnN0IGlrYSA9IHtcbiAgICBkZWJ1ZzogKHMsIG8/OiBBcnJheTxzdHJpbmc+KSA9PiB7XG4gICAgICAgIGlmIChURVNUSU5HX0ZMQUdTLnZlcmJvc2UpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcyA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcocylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3AgPSBbJ2NvbG9yOiAjNmFhZmY4OyBmb250LXdlaWdodDogNjAwJywgJ2NvbG9yOiB1bnNldDsgZm9udC13ZWlnaHQ6IHVuc2V0J11cbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KG8pICYmIG9wLnB1c2goLi4ubylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGAlY+KAuWRlYnVn4oC6ICVjYCArIHMsIC4uLm9wKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBidWZmZXI6IG5ldyBJa2FCdWZmZXIoKSxcbiAgICByZWc6IG5ldyBJa2FSZWdpc3RyeSgpLFxuICAgIGRhdGE6IG5ldyBJbml0QnVuZGxlKClcbn1cblxuaW5pdElrYSgpXG5cbmZ1bmN0aW9uIGluaXRJa2EoKSB7XG4gICAgaWthLmRlYnVnKCdJa2EgaW5pdGlhbGlzaW5nLi4uJylcblxuICAgIGltcG9ydElrYUNvbXBvbmVudHMoKVxuICAgIHN0YXJ0QnVmZmVyUHJvY2Vzc2luZygpXG4gICAgLy8gYXR0YWNoTXV0YXRpb25PYnNlcnZlcigpXG5cbiAgICBwZXJmb3JtYW5jZS5tZWFzdXJlKCdpa2EtaW5pdC1jb21wbGV0ZScsICdpa2EtaW5pdCcpXG5cbiAgICAvLyBmdW5jdGlvbiBhdHRhY2hNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgIC8vICAgICBjb25zdCBvYiA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZpbmRSZW1vdmFscylcbiAgICAvLyAgICAgb2Iub2JzZXJ2ZSh3aW5kb3cuZG9jdW1lbnQsIHsgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlIH0pXG4gICAgLy8gICAgIGZ1bmN0aW9uIGZpbmRSZW1vdmFscyhyYTogQXJyYXk8TXV0YXRpb25SZWNvcmQ+LCBvYjogTXV0YXRpb25PYnNlcnZlcikge1xuICAgIC8vICAgICAgICAgLy8gQ3VycmVubHkgb25seSBtb25pdG9yaW5nIHJlbW92ZWQgRWxlbWVudCBub2RlcyBhbmQgbm90IGRvY3VtZW50IGZyYWdtZW50c1xuICAgIC8vICAgICAgICAgY29uc3QgcmVtb3ZlZEVsZW1lbnROb2RlcyA9IHJhXG4gICAgLy8gICAgICAgICAgICAgLmZpbHRlcihyID0+IHIucmVtb3ZlZE5vZGVzLmxlbmd0aCA+IDAgJiYgQXJyYXkuZnJvbShyLnJlbW92ZWROb2Rlcykuc29tZShuID0+IG4ubm9kZVR5cGUgPT0gMSkpXG4gICAgLy8gICAgICAgICAgICAgLm1hcChyID0+IEFycmF5LmZyb20oci5yZW1vdmVkTm9kZXMpLmZpbHRlcihuID0+IG4gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBuLnRhZ05hbWUuaW5jbHVkZXMoJy0nKSkpXG4gICAgLy8gICAgICAgICAgICAgLmZsYXQoKVxuICAgIC8vICAgICAgICAgaWYgKHJlbW92ZWRFbGVtZW50Tm9kZXMubGVuZ3RoID4gMCkge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdmVkOiAnKVxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlbW92ZWRFbGVtZW50Tm9kZXMpXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmEpXG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIGNvbnN0IGFkZGVkTm9kZXMgPSByYVxuICAgIC8vICAgICAgICAgICAgIC5maWx0ZXIociA9PiByLmFkZGVkTm9kZXMubGVuZ3RoID4gMCAmJiBBcnJheS5mcm9tKHIuYWRkZWROb2Rlcykuc29tZShuID0+IG4ubm9kZVR5cGUgPT0gMSkpXG4gICAgLy8gICAgICAgICAgICAgLm1hcChyID0+IEFycmF5LmZyb20oci5hZGRlZE5vZGVzKS5maWx0ZXIobiA9PiBuLm5vZGVUeXBlID09IDEpKVxuICAgIC8vICAgICAgICAgICAgIC5mbGF0KClcbiAgICAvLyAgICAgICAgIGlmIChhZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkZWQ6ICcpXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coYWRkZWROb2RlcylcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhyYSlcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGltcG9ydElrYUNvbXBvbmVudHMoKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjb21wb25lbnRJbXBvcnRzKSkgeyByZXR1cm4gfVxuXG4gICAgICAgIGNvbnN0IGltcG9ydFByb21pc2VzID0gW11cbiAgICAgICAgY29tcG9uZW50SW1wb3J0cy5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgaW1wb3J0UHJvbWlzZXMucHVzaChpbXBvcnQoYC4vY29tcG9uZW50cy8ke2N9LmpzYCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgaW1wb3J0cyA9IGF3YWl0IFByb21pc2UuYWxsKGltcG9ydFByb21pc2VzKVxuICAgICAgICBpbXBvcnRzLmZvckVhY2goKGksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoYGlrYS0ke2NvbXBvbmVudEltcG9ydHNbaW5kZXhdfWAsIGkuZGVmYXVsdClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydEJ1ZmZlclByb2Nlc3NpbmcoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgc2V0SW50ZXJ2YWwocHJvY2Vzc0J1ZmZlciwgMTAwMCAvIElLQV9VUFMpO1xuICAgICAgICB9KVxuICAgICAgICBpa2EuZGVidWcoJ0J1ZmZlciBwcm9jZXNzaW5nIHN0YXJ0ZWQgYXQgJyArIE1hdGgucm91bmQocGVyZm9ybWFuY2UubWVhc3VyZSgnaWthLWJ1Zi1zdGFydGVkJywgJ2lrYS1pbml0JykuZHVyYXRpb24pICsgJyBtcycpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBJa2FDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgZ2V0U3RhdGU6IChrOiBzdHJpbmcpID0+IGFueVxuICAgIHNldFN0YXRlOiAoazogc3RyaW5nLCB2OiBhbnkpID0+IHZvaWRcbn1cblxudHlwZSBDcmVhdGVJa2FDb21wb25lbnRPcHRpb25zID0ge1xuICAgIHRlbXBsYXRlSWQ/OiBzdHJpbmcsXG4gICAgY29uc3RydWN0PzogKGM6IElrYUNvbXBvbmVudCkgPT4gdm9pZCxcbiAgICBldmVudEJpbmRzPzogQXJyYXk8c3RyaW5nPixcbiAgICBidW5kbGU6IElrYUluaXRPYmplY3Rbc3RyaW5nXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSWthQ29tcG9uZW50KGNvbXBvbmVudE5hbWU6IHN0cmluZywgb3B0aW9ucz86IENyZWF0ZUlrYUNvbXBvbmVudE9wdGlvbnMpIHtcbiAgICB0cnkge1xuICAgICAgICBvcHRpb25zPy5idW5kbGUgJiYgaWthLmRhdGEuYWRkKGNvbXBvbmVudE5hbWUsIG9wdGlvbnMuYnVuZGxlKVxuXG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZShjb21wb25lbnROYW1lLCBjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICAgICAgICAgICNzdGF0ZUJpbmRzID0gbmV3IFN0YXRlQmluZFJlZ2lzdGVyKClcbiAgICAgICAgICAgICNtZXRob2RzID0ge31cbiAgICAgICAgICAgICNub2RlSWQgPSBudWxsXG4gICAgICAgICAgICAjb25TdGF0ZUNoYW5nZSA9IHt9XG5cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jbWV0aG9kcyA9IGlrYS5kYXRhLmdldChjb21wb25lbnROYW1lKT8ubVxuICAgICAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzLmJpbmQodGhpcykoKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXR0cmlidXRlKCdpa2E6YicpICE9IG51bGwgJiYgYmluZFRvUGFyZW50U3RhdGVzLmJpbmQodGhpcykoKVxuICAgICAgICAgICAgICAgIHRoaXMuI2NvbnN0cnVjdC5iaW5kKHRoaXMpKClcbiAgICAgICAgICAgICAgICBvcHRpb25zPy5jb25zdHJ1Y3QgJiYgb3B0aW9ucy5jb25zdHJ1Y3QodGhpcylcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlcyA9IFtDdXN0b21FdmVudFR5cGVzLkNvbXBvbmVudENhbGwsICdjbGljayddXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkob3B0aW9ucz8uZXZlbnRCaW5kcykgJiYgdHlwZXMucHVzaCguLi5vcHRpb25zLmV2ZW50QmluZHMpXG4gICAgICAgICAgICAgICAgICAgIHR5cGVzLmZvckVhY2godCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodCwgdGhpcy4jcHJvY2Vzc0V2ZW50LmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGJpbmRUb1BhcmVudFN0YXRlcygpIHtcbiAgICAgICAgICAgICAgICAgICAgaWthLnJlZy5yZWdpc3Rlck5vZGUodGhpcywgdGhpcywgdGhpcy5yZWdpc3RlcmVkQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWdpc3RlcmVkQ2FsbGJhY2soaWQ6IHN0cmluZywgbjogRWxlbWVudCwgcmVxdWVzdG9yOiBCaW5kaW5nQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdG9yLnNldE5vZGVJZChpZClcbiAgICAgICAgICAgICAgICByZXF1ZXN0b3IucmVnaXN0ZXJCaW5kc1dpdGhQYXJlbnRDb21wb25lbnQuYmluZChyZXF1ZXN0b3IpKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVnaXN0ZXJCaW5kc1dpdGhQYXJlbnRDb21wb25lbnQoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNHbG9iYWxCaW5kID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2dsb2JhbCcpICE9IG51bGxcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuZGF0YXNldCkuZm9yRWFjaChiaW5kID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJCaW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RlcjogdGhpcyBhcyBhbnksXG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5kOiBiaW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsOiBpc0dsb2JhbEJpbmQsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uUGFyZW50Q29tcG9uZW50TG9hZGVkKCkgeyB9XG5cbiAgICAgICAgICAgIGJpbmRWYWx1ZUNoYW5nZWQodXBkYXRlOiBCaW5kaW5nRXZlbnQuVmFsdWVVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZXNUb1VwZGF0ZSA9IE9iamVjdC5lbnRyaWVzKHRoaXMuZGF0YXNldCkuZmlsdGVyKChbc3RhdGUsIGJpbmRdKSA9PiB1cGRhdGUuayA9PSBiaW5kKVxuICAgICAgICAgICAgICAgIC8vIFN0YXRlcyB0byB1cGRhdGUgc2hvdWxkIG9ubHkgYmUgMSBlbnRyeSwgc2luY2UgaXQgZG9lcyBub3QgbWFrZSBzZW5zZSB0byBiaW5kIG11bHRpcGxlIHN0YXRlcyB0byB0aGUgc2FtZSBwYXJlbnQgc3RhdGVcbiAgICAgICAgICAgICAgICBzdGF0ZXNUb1VwZGF0ZS5mb3JFYWNoKChbc3RhdGUsIGJpbmRdKSA9PiB0aGlzLnNldFN0YXRlKHN0YXRlLCB1cGRhdGUudikpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdldE5vZGVJZCgpIHsgcmV0dXJuIHRoaXMuI25vZGVJZCB9XG4gICAgICAgICAgICBzZXROb2RlSWQoaWQpIHsgdGhpcy4jbm9kZUlkID0gaWQgfVxuXG4gICAgICAgICAgICBzdWJzY3JpYmVUb0JpbmQoazogc3RyaW5nLCBpZDogc3RyaW5nLCBjYjogQmluZENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jc3RhdGVCaW5kcy5zdWJzY3JpYmVUb0JpbmQoaywgaWQsIGNiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdW5zdWJzY3JpYmVUb0JpbmQoaWQ6IHN0cmluZywgaz86IHN0cmluZykgeyB0aGlzLiNzdGF0ZUJpbmRzLnVuc3Vic2NyaWJlVG9CaW5kKHRoaXMuZ2V0Tm9kZUlkKCksIGspIH1cbiAgICAgICAgICAgIGdldFN0YXRlKGtleTogc3RyaW5nKSB7IHJldHVybiB0aGlzLiNzdGF0ZUJpbmRzLmdldFZhbHVlKGtleSkgfVxuICAgICAgICAgICAgc2V0U3RhdGUoa2V5OiBzdHJpbmcsIHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuI3N0YXRlQmluZHMuc2V0VmFsdWUoa2V5LCB2YWwpXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLiNvblN0YXRlQ2hhbmdlW2tleV0gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdGF0ZSBjaGFuZ2UgaXMgbm90IGludGVncmF0ZWQgaW50byB0aGUgYmluZCByZWdpc3RlciBjYWxsYmFja3MuIE1heSBiZSBiZXR0ZXIgdG8gbG9jYXRlZCB0aGVyZS5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jb25TdGF0ZUNoYW5nZVtrZXldKHRoaXMsIHsgazoga2V5LCB2OiB2YWwgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9uU3RhdGVDaGFuZ2Uoazogc3RyaW5nLCBmdW5jOiAoYzogSWthQ29tcG9uZW50LCB1OiB7IGs6IHN0cmluZywgdiB9KSA9PiB2b2lkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jb25TdGF0ZUNoYW5nZVtrXSA9IGZ1bmNcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI2NvbnN0cnVjdCgpIHtcbiAgICAgICAgICAgICAgICBzZXRDb21wb25lbnRUZW1wbGF0ZShjb21wb25lbnROYW1lLCBvcHRpb25zPy50ZW1wbGF0ZUlkID8gb3B0aW9ucy50ZW1wbGF0ZUlkIDogY29tcG9uZW50TmFtZSwgdGhpcylcblxuICAgICAgICAgICAgICAgIGlrYS5kZWJ1ZyhgQ29tcG9uZW50ICVjPCR7Y29tcG9uZW50TmFtZX0+JWMgaXMgY29uc3RydWN0ZWQuYCwgW0lrYURlYnVnU3R5bGVzLkNvbXBvbmVudE5hbWUsICdjb2xvcjogdW5zZXQnXSlcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNldENvbXBvbmVudFRlbXBsYXRlKGNvbXBvbmVudE5hbWU6IHN0cmluZywgaWQ6IHN0cmluZywgY29tcCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZVJlZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0ZW1wbGF0ZVJlZiB8fCAhKHRlbXBsYXRlUmVmIGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGNyZWF0aW5nIGNvbXBvbmVudCAke2NvbXBvbmVudE5hbWV9OlxcbiBBIHRlbXBsYXRlIHdpdGggSUQgJHsoaWQpfSBpcyBub3QgZm91bmQuYClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlrYS5kZWJ1ZyhgQnVpbGRpbmcgY29tcG9uZW50ICVjPCR7Y29tcG9uZW50TmFtZX0+YCwgW0lrYURlYnVnU3R5bGVzLkNvbXBvbmVudE5hbWVdKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvbmVkTm9kZSA9IHRlbXBsYXRlUmVmLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIERvY3VtZW50RnJhZ21lbnRcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNoRGVidWdCdXR0b24oKVxuICAgICAgICAgICAgICAgICAgICBpbml0YWxpc2VTdGF0ZUZyb21CdW5kbGUoY29tcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29tcC5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSkuYXBwZW5kQ2hpbGQoY2xvbmVkTm9kZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gYXR0YWNoRGVidWdCdXR0b24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVEVTVElOR19GTEFHUy5kZWJ1Z1ByaW50QnRuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVidWdCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSAnRGVidWcgUHJpbnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVidWdCdG4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYG1hcmdpbjogMC41cmVtIDA7IGJhY2tncm91bmQ6ICMzMzM7IGNvbG9yOiAjZWVlOyBwYWRkaW5nOiAwLjI1cmVtOyBib3JkZXI6IDFweCBzb2xpZCAjMjIyYClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4ub25jbGljayA9IChlKSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IHRoaXMuZGVidWdQcmludCgpIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdCb3guYXBwZW5kKGJ0bilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9uZWROb2RlLmFwcGVuZChkZWJ1Z0JveClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI3Byb2Nlc3NFdmVudChlOiBFdmVudCB8IEN1c3RvbUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnRTb3VyY2UgPSBlLmNvbXBvc2VkUGF0aCgpWzBdXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkSGFuZGxlID0gY2hlY2tJZlNob3VsZEhhbmRsZS5iaW5kKHRoaXMpKGUpXG5cbiAgICAgICAgICAgICAgICBpZiAoIXNob3VsZEhhbmRsZSkgeyByZXR1cm4gfVxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblxuICAgICAgICAgICAgICAgIGlmICghKGV2ZW50U291cmNlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlrYS5kZWJ1ZyhgUmVjZWl2ZWQgYW4gZXZlbnQgdGhhdCBkaWQgbm90IG9yaWdpbmF0ZSBmcm9tIGFuIEhUTUxFbGVtZW50LiBObyBhY3Rpb24gdGFrZW4uYClcbiAgICAgICAgICAgICAgICAgICAgaWthLmRlYnVnKGV2ZW50U291cmNlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWthLmRlYnVnKFxuICAgICAgICAgICAgICAgICAgICAgICAgYENvbXBvbmVudCAlYzwke2NvbXBvbmVudE5hbWV9PiVjIHJlY2VpdmVkIGV2ZW50ICVjJHtlLnR5cGV9JWMsIGZyb20gJWM8JHtldmVudFNvdXJjZS50YWdOYW1lLnRvTG93ZXJDYXNlKCl9PmAsXG4gICAgICAgICAgICAgICAgICAgICAgICBbSWthRGVidWdTdHlsZXMuQ29tcG9uZW50TmFtZSwgJ2NvbG9yOiB1bnNldCcsIElrYURlYnVnU3R5bGVzLlZhcmlhYmxlVmFsdWUsICdjb2xvcjogdW5zZXQnLCBJa2FEZWJ1Z1N0eWxlcy5Db21wb25lbnROYW1lXSlcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ3VzdG9tRXZlbnRUeXBlcy5Db21wb25lbnRDYWxsOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdkZXRhaWwnIGluIGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzQ29tcG9uZW50Q2FsbC5iaW5kKHRoaXMpKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlrYS5kZWJ1ZyhgJWM8JHtjb21wb25lbnROYW1lfT4lYyByZWNlaXZlZCBjb21wb25lbnQgY2FsbCBmcm9tICVjPCR7Y29tcG9uZW50TmFtZX0+JWMgYnV0IGl0IGRpZCBub3QgY29udGFpbiBkZXRhaWwuYClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBwcm9jZXNzU3RhbmRhcmRFdmVudC5iaW5kKHRoaXMpKGUpXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGVja0lmU2hvdWxkSGFuZGxlKGU6IEV2ZW50IHwgQ3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIGV2ZW50cyBmaXJlZCBvZmYgZnJvbSB0aGlzIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50U291cmNlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgZXZlbnRTb3VyY2UuaXNTYW1lTm9kZSh0aGlzKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZXZlbnQgaXMgYSBjb21wb25lbnQgY2FsbCBhbmQgaGFzIG5vbi16ZXJvIGxlYXBzLCBpdCBzaG91bGQgZ28gdG8gYSBoaWdoZXIgbGV2ZWwgY29tcG9uZW50LlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZWFwVHlwZXMgPSBbQ29tcG9uZW50Q2FsbC5FdmVudFR5cGUuUmVnaXN0ZXJCaW5kLCBDb21wb25lbnRDYWxsLkV2ZW50VHlwZS5EZXJlZ2lzdGVyQmluZCwgQ29tcG9uZW50Q2FsbC5FdmVudFR5cGUuR2V0Q29tcG9uZW50XVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gQ3VzdG9tRXZlbnRUeXBlcy5Db21wb25lbnRDYWxsICYmIGUgaW5zdGFuY2VvZiBDdXN0b21FdmVudCAmJiBsZWFwVHlwZXMuaW5jbHVkZXMoZS5kZXRhaWwudHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbDogQ29tcG9uZW50Q2FsbC5FdmVudERldGFpbC5SZWdpc3RlckJpbmQgfCBDb21wb25lbnRDYWxsLkV2ZW50RGV0YWlsLkRlcmVnaXN0ZXJCaW5kID0gZS5kZXRhaWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlYXBzID0gZGV0YWlsLnBheWxvYWQubGVhcFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihsZWFwcykgJiYgbGVhcHMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsLnBheWxvYWQubGVhcC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwcm9jZXNzQ29tcG9uZW50Q2FsbChlOiBDdXN0b21FdmVudDxDb21wb25lbnRDYWxsLkV2ZW50RGV0YWlscz4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZCA9IGUuZGV0YWlsXG5cbiAgICAgICAgICAgICAgICAgICAgaWthLmRlYnVnKGBUaGUgY29tcG9uZW50IGNhbGwgaXMgb2YgdHlwZSAlYyR7ZC50eXBlfWAsIFtJa2FEZWJ1Z1N0eWxlcy5WYXJpYWJsZVZhbHVlXSlcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLmRldGFpbC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENvbXBvbmVudENhbGwuRXZlbnRUeXBlLlJlZ2lzdGVyQmluZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSBlLmRldGFpbC5wYXlsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmluZCA9IHBheWxvYWQuYmluZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzc3VlciA9IHBheWxvYWQuaXNzdWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKFsnSUtBLUInLCAnSUtBLUFCJywgJ0lLQS1TREMnXS5pbmNsdWRlcyhpc3N1ZXIudGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZVRvQmluZChiaW5kLCBpc3N1ZXIuZ2V0Tm9kZUlkKCksIGlzc3Vlci5iaW5kVmFsdWVDaGFuZ2VkLmJpbmQoaXNzdWVyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLndhcm4oYDwke3BheWxvYWQuaXNzdWVyLnRhZ05hbWUudG9Mb3dlckNhc2UoKX0+IGZpcmVkIGEgcmVnaXN0ZXIgYmluZCBldmVudCwgYW5kIHRoZXJlJ3Mgbm8gaGFuZGxlciBpbXBsZW1lbnRlZC5gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ29tcG9uZW50Q2FsbC5FdmVudFR5cGUuRGVyZWdpc3RlckJpbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gZS5kZXRhaWwucGF5bG9hZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmVUb0JpbmQocGF5bG9hZC5pc3N1ZXIuZ2V0Tm9kZUlkKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENvbXBvbmVudENhbGwuRXZlbnRUeXBlLkVzdGFibGlzaENoYWluOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IGUuZGV0YWlsLnBheWxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoWydJS0EtU0RDJ10uaW5jbHVkZXMocGF5bG9hZC5pc3N1ZXIudGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZC5wYXlsb2FkLmlzc3VlciBhcyBJa2FTREMpLmVzdGFibGlzaENoYWluQ2IoZS5jb21wb3NlZFBhdGgoKSwgdGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIENvbXBvbmVudENhbGwuRXZlbnRUeXBlLkdldENvbXBvbmVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSBlLmRldGFpbC5wYXlsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZC5jYih0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ29tcG9uZW50Q2FsbC5FdmVudFR5cGUuSW52b2tlRnVuY3Rpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNtZXRob2RzW2UuZGV0YWlsLmtleV0odGhpcy4jbWV0aG9kcywgdGhpcywgZS5kZXRhaWwuaW52b2NhdGlvbkV2ZW50LCBlLmRldGFpbC5wYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBjb25zb2xlLmVycm9yKGBVbnJlY29nbmlzZWQgY29tcG9uZW50IGNhbGwgdHlwZSAke2QudHlwZX0uYClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NTdGFuZGFyZEV2ZW50KGU6IEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpbmRGbiA9IHZhbGlkYXRlQW5kR2V0QmluZEZuLmJpbmQodGhpcykoKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWJpbmRGbikgeyByZXR1cm4gfVxuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNtZXRob2RzW2JpbmRGbl0odGhpcy4jbWV0aG9kcywgdGhpcylcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgRXJyb3Igd2hpbGUgZXhlY3V0aW5nIHJlcXVlc3RlZCBmdW5jdGlvbiAke2JpbmRGbn0uYClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZUFuZEdldEJpbmRGbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZTogSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhc0lrYUJmQXR0cihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWthOmJmJykgIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZS5jb21wb3NlZFBhdGgoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaGFzSWthQmZBdHRyKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlKSB7IHJldHVybiB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2UuZGF0YXNldCB8fCBPYmplY3QuZW50cmllcyhzZS5kYXRhc2V0KS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgRWxlbWVudCA8JHtzZS50YWdOYW1lLnRvTG93ZXJDYXNlKCl9PiBpbXBsZW1lbnRlZCBpa2E6YmYgYXR0cmlidXRlIGJ1dCBkaWQgbm90IGJpbmQgdG8gYSBmdW5jdGlvbi5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpbmRGbiA9IHNlLmRhdGFzZXRbZS50eXBlXVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFiaW5kRm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpa2EuZGVidWcoYE5vIGJpbmQgZnVuY3Rpb24gaXMgc3BlY2lmaWVkIGZvciBldmVudCB0eXBlICVjJHtlLnR5cGV9JWMgaW4gZWxlbWVudCAlYzwke3NlLnRhZ05hbWUudG9Mb3dlckNhc2UoKX0+YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW0lrYURlYnVnU3R5bGVzLlZhcmlhYmxlVmFsdWUsICdjb2xvcjogdW5zZXQnLCBJa2FEZWJ1Z1N0eWxlcy5Db21wb25lbnROYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy4jbWV0aG9kcyB8fCAhdGhpcy4jbWV0aG9kc1tiaW5kRm5dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBDaGVjayB0aGF0IHRoZSBmdW5jdGlvbiBiaW5kaW5nIFwiJHtiaW5kRm59XCIgaXMgY29ycmVjdCwgYXMgaXQgaXMgbm90IGZvdW5kIGZvciB0aGUgY29tcG9uZW50LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5kRm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlLmNvZGUgPT0gOSkgeyAvLyBET01FeGNlcHRpb246IE5vdFN1cHBvcnRlZEVycm9yXG4gICAgICAgICAgICBpa2EuZGVidWcoYEVsZW1lbnQgJWMke2NvbXBvbmVudE5hbWV9JWMgaXMgYWxyZWFkeSBkZWZpbmVkLiBOb3cgcG90ZW50aWFsbHkgdXNpbmcgYSBuZXcgdGVtcGxhdGUuYCxcbiAgICAgICAgICAgICAgICBbSWthRGVidWdTdHlsZXMuQ29tcG9uZW50TmFtZSwgJ2NvbG9yOiB1bnNldCddKVxuICAgICAgICB9IGVsc2UgeyB0aHJvdyBlIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRFbGVtZW50SW5TaGFkb3dSb290KHJvb3Q6IEhUTUxFbGVtZW50LCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IEFycmF5LmZyb20ocm9vdC5jaGlsZHJlbilcbiAgICBjb25zdCB0YXJnZXQgPSBjaGlsZHJlbi5maWx0ZXIoYyA9PiBjLnRhZ05hbWUgPT0gdGFnLnRvVXBwZXJDYXNlKCkpLmZpbmQoZSA9PiAoYXR0cmlidXRlICYmIGVbYXR0cmlidXRlXSA9PSB2YWx1ZSkgfHwgdHJ1ZSlcbiAgICByZXR1cm4gdGFyZ2V0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0YWxpc2VTdGF0ZUZyb21CdW5kbGUoY29tcG9uZW50OiBJa2FDb21wb25lbnQpIHtcbiAgICBjb25zdCBjb21wb25lbnROYW1lID0gY29tcG9uZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGlzID0gY29tcG9uZW50LmdldEF0dHJpYnV0ZSgnaWthOmlzJykgfHwgJ19kZWZhdWx0J1xuXG4gICAgaWYgKCFpa2EuZGF0YS5nZXQoY29tcG9uZW50TmFtZSkgfHwgIWlrYS5kYXRhLmdldChjb21wb25lbnROYW1lKS5zKSB7IHJldHVybiB9XG4gICAgY29uc3Qgc3RhdGVBdENvbnN0cnVjdCA9IGlrYS5kYXRhLmdldChjb21wb25lbnROYW1lKS5zW2lzXVxuICAgIHN0YXRlQXRDb25zdHJ1Y3QgJiZcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3RhdGVBdENvbnN0cnVjdCkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiBjb21wb25lbnQuc2V0U3RhdGUoa2V5LCB2YWx1ZSkpXG59XG5cbmV4cG9ydCBlbnVtIElrYURlYnVnU3R5bGVzIHtcbiAgICBDb21wb25lbnROYW1lID0gJ2NvbG9yOiAjNjBkMzhlJyxcbiAgICBWYXJpYWJsZVZhbHVlID0gJ2NvbG9yOiAjYWI0OWY1JyxcbiAgICBOb2RlSUQgPSAnY29sb3I6ICM5OTknLFxuICAgIFVuc2V0ID0gJ2NvbG9yOiB1bnNldCdcbn1cbiIsImV4cG9ydCB0eXBlIEJ1ZmZlclVwZGF0ZSA9IHtcbiAgICBuOiBzdHJpbmcsIC8vIE5vZGUgSURcbiAgICB0eXBlOiBVcGRhdGVUeXBlLlBST1AgfCBVcGRhdGVUeXBlLkFUVFIsIC8vIFxuICAgIGs6IHN0cmluZyxcbiAgICB2OiBzdHJpbmcgfCBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgQnVmZmVyT2JqZWN0ID0ge1xuICAgIFtub2RlSWQ6IHN0cmluZ106IHtcbiAgICAgICAgW3R5cGUgaW4gVXBkYXRlVHlwZV06IHtcbiAgICAgICAgICAgIFtrZXk6IHN0cmluZ106IEFycmF5PHN0cmluZyB8IG51bWJlcj5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gVXBkYXRlVHlwZSB7XG4gICAgJ1BST1AnLFxuICAgICdBVFRSJ1xufSIsImltcG9ydCB7IElrYUNvbXBvbmVudCB9IGZyb20gXCIuLi9pa2FcIjtcbmltcG9ydCBCaW5kaW5nQ29tcG9uZW50IGZyb20gXCIuLi9jb3JlL2JpbmRcIlxuaW1wb3J0IElrYVNEQyBmcm9tIFwiLi4vY29tcG9uZW50cy9zZGNcIjtcblxuZXhwb3J0IGVudW0gQ3VzdG9tRXZlbnRUeXBlcyB7XG4gICAgQ29tcG9uZW50Q2FsbCA9ICdpa2EtY29tcG9uZW50LWNhbGwnXG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgQ29tcG9uZW50Q2FsbCB7XG4gICAgZXhwb3J0IGVudW0gRXZlbnRUeXBlIHtcbiAgICAgICAgUmVnaXN0ZXJCaW5kID0gJ1JFR0lTVEVSX0JJTkQnLFxuICAgICAgICBEZXJlZ2lzdGVyQmluZCA9ICdERVJFR0lTVEVSX0JJTkQnLFxuICAgICAgICBFc3RhYmxpc2hDaGFpbiA9ICdFU1RBQkxJU0hfQ0hBSU4nLFxuICAgICAgICBHZXRDb21wb25lbnQgPSAnR0VUX1BBUkVOVCcsXG4gICAgICAgIEludm9rZUZ1bmN0aW9uID0gJ0lOVk9LRV9GVU5DVElPTidcbiAgICB9XG5cbiAgICBleHBvcnQgdHlwZSBFdmVudERldGFpbHMgPVxuICAgICAgICBFdmVudERldGFpbC5EZXJlZ2lzdGVyQmluZCB8IEV2ZW50RGV0YWlsLlJlZ2lzdGVyQmluZCB8IEV2ZW50RGV0YWlsLkVzdGFibGlzaENoYWluIHwgRXZlbnREZXRhaWwuR2V0Q29tcG9uZW50IHwgRXZlbnREZXRhaWwuSW52b2tlRnVuY3Rpb247XG5cbiAgICBleHBvcnQgbmFtZXNwYWNlIEV2ZW50RGV0YWlsIHtcbiAgICAgICAgdHlwZSBCYXNlRXZlbnREZXRhaWxzID0ge1xuICAgICAgICAgICAgdHlwZTogRXZlbnRUeXBlLFxuICAgICAgICAgICAgbm9kZUlkOiBzdHJpbmcsXG4gICAgICAgIH1cblxuICAgICAgICBleHBvcnQgdHlwZSBFc3RhYmxpc2hDaGFpbiA9IEJhc2VFdmVudERldGFpbHMgJiB7XG4gICAgICAgICAgICB0eXBlOiBFdmVudFR5cGUuRXN0YWJsaXNoQ2hhaW5cbiAgICAgICAgICAgIHBheWxvYWQ6IHsgaXNzdWVyOiBJa2FTREMgfVxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydCB0eXBlIEdldENvbXBvbmVudCA9IEJhc2VFdmVudERldGFpbHMgJiB7XG4gICAgICAgICAgICB0eXBlOiBFdmVudFR5cGUuR2V0Q29tcG9uZW50LFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGNiOiAoYzogSWthQ29tcG9uZW50KSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgIGxlYXA/OiBudW1iZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGV4cG9ydCB0eXBlIFJlZ2lzdGVyQmluZCA9IEJhc2VFdmVudERldGFpbHMgJiB7XG4gICAgICAgICAgICB0eXBlOiBFdmVudFR5cGUuUmVnaXN0ZXJCaW5kLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGJpbmQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBpc3N1ZXI6IEJpbmRpbmdDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgbGVhcD86IG51bWJlclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydCB0eXBlIERlcmVnaXN0ZXJCaW5kID0gT21pdDxSZWdpc3RlckJpbmQsICd0eXBlJz4gJiB7IHR5cGU6IEV2ZW50VHlwZS5EZXJlZ2lzdGVyQmluZCB9XG5cbiAgICAgICAgZXhwb3J0IHR5cGUgSW52b2tlRnVuY3Rpb24gPSB7XG4gICAgICAgICAgICB0eXBlOiBFdmVudFR5cGUuSW52b2tlRnVuY3Rpb24sXG4gICAgICAgICAgICBpbnZvY2F0aW9uRXZlbnQ6IEV2ZW50LFxuICAgICAgICAgICAga2V5OiBzdHJpbmcsXG4gICAgICAgICAgICBwYXJhbXM/XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgQmluZGluZ0V2ZW50IHtcbiAgICBleHBvcnQgdHlwZSBWYWx1ZVVwZGF0ZSA9IHsgazogc3RyaW5nLCB2OiBhbnkgfVxufSIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuL3NyYy9jb21wb25lbnRzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmpzJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pa2EudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=