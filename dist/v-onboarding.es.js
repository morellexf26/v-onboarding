import { ref, onUnmounted, defineComponent, inject, computed, watch, onMounted, withDirectives, openBlock, createElementBlock, createElementVNode, renderSlot, toDisplayString, createCommentVNode, vShow, provide, resolveComponent, createBlock } from "vue";
import { createPopper } from "@popperjs/core";
function useGetElement(element) {
  if (typeof element === "string") {
    return document.querySelector(element);
  } else if (typeof element === "function") {
    return element();
  }
  return null;
}
const defaultVOnboardingWrapperOptions = {
  popper: {},
  overlay: {
    enabled: true,
    padding: 0,
    borderRadius: 0
  },
  scrollToStep: {
    enabled: true,
    options: {
      behavior: "smooth",
      block: "center",
      inline: "center"
    }
  }
};
function useSvgOverlay() {
  var _a, _b, _c, _d;
  const path = ref("");
  const target = ref(null);
  const paddingRef = ref((_b = (_a = defaultVOnboardingWrapperOptions.overlay) == null ? void 0 : _a.padding) != null ? _b : 0);
  const borderRadiusRef = ref((_d = (_c = defaultVOnboardingWrapperOptions.overlay) == null ? void 0 : _c.borderRadius) != null ? _d : 0);
  const onScroll = () => {
    updatePath(target.value, {
      padding: paddingRef.value,
      borderRadius: borderRadiusRef.value
    });
  };
  const updatePath = async (element, options = defaultVOnboardingWrapperOptions.overlay) => {
    var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j, _k, _l;
    if (!element)
      return;
    const { innerWidth, innerHeight } = window;
    const { left, top, width, height } = element.getBoundingClientRect();
    const padding = typeof options.padding === "number" ? {
      top: options.padding,
      right: options.padding,
      bottom: options.padding,
      left: options.padding
    } : options.padding;
    const radius = typeof options.borderRadius === "number" ? {
      leftTop: options.borderRadius,
      rightTop: options.borderRadius,
      rightBottom: options.borderRadius,
      leftBottom: options.borderRadius
    } : options.borderRadius;
    const edges = {
      top: top - ((_a2 = padding == null ? void 0 : padding.top) != null ? _a2 : 0),
      right: left + width + ((_b2 = padding == null ? void 0 : padding.right) != null ? _b2 : 0),
      bottom: top + height + ((_c2 = padding == null ? void 0 : padding.bottom) != null ? _c2 : 0),
      left: left - ((_d2 = padding == null ? void 0 : padding.left) != null ? _d2 : 0)
    };
    const pointsPath = {
      leftTop: `M${edges.left + ((_e = radius == null ? void 0 : radius.leftTop) != null ? _e : 0)},${edges.top} Q${edges.left},${edges.top} ${edges.left},${edges.top + ((_f = radius == null ? void 0 : radius.leftTop) != null ? _f : 0)}`,
      rightTop: `V${edges.top + ((_g = radius == null ? void 0 : radius.rightTop) != null ? _g : 0)} Q${edges.right},${edges.top} ${edges.right - ((_h = radius == null ? void 0 : radius.rightTop) != null ? _h : 0)},${edges.top}`,
      rightBottom: `H${edges.right - ((_i = radius == null ? void 0 : radius.rightBottom) != null ? _i : 0)} Q${edges.right},${edges.bottom} ${edges.right},${edges.bottom - ((_j = radius == null ? void 0 : radius.rightBottom) != null ? _j : 0)}`,
      leftBottom: `V${edges.bottom - ((_k = radius == null ? void 0 : radius.leftBottom) != null ? _k : 0)} Q${edges.left},${edges.bottom} ${edges.left + ((_l = radius == null ? void 0 : radius.leftBottom) != null ? _l : 0)},${edges.bottom}`
    };
    path.value = `
      M${innerWidth},${innerHeight}
      H0V0
      H${innerWidth}V${innerHeight}
      Z
      ${pointsPath.leftTop}
      ${pointsPath.leftBottom}
      ${pointsPath.rightBottom}
      ${pointsPath.rightTop}
      Z
    `;
    target.value = element;
    paddingRef.value = padding;
    borderRadiusRef.value = radius;
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
  };
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
  });
  return {
    path,
    updatePath
  };
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var lodash_merge = { exports: {} };
(function(module, exports) {
  var LARGE_ARRAY_SIZE = 200;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var HOT_COUNT = 800, HOT_SPAN = 16;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal.process;
  var nodeUtil = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
  var coreJsData = root["__core-js_shared__"];
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  var nativeObjectToString = objectProto.toString;
  var objectCtorString = funcToString.call(Object);
  var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  var Buffer = moduleExports ? root.Buffer : void 0, Symbol = root.Symbol, Uint8Array = root.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol ? Symbol.toStringTag : void 0;
  var defineProperty = function() {
    try {
      var func = getNative(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {
    }
  }();
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0, nativeMax = Math.max, nativeNow = Date.now;
  var Map = getNative(root, "Map"), nativeCreate = getNative(Object, "create");
  var baseCreate = function() {
    function object() {
    }
    return function(proto) {
      if (!isObject(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = void 0;
      return result;
    };
  }();
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : void 0;
  }
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
  }
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map || ListCache)(),
      "string": new Hash()
    };
  }
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  function stackGet(key) {
    return this.__data__.get(key);
  }
  function stackHas(key) {
    return this.__data__.has(key);
  }
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  function assignMergeValue(object, key, value) {
    if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty) {
      defineProperty(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object[key] = value;
    }
  }
  var baseFor = createBaseFor();
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor(source, function(srcValue, key) {
      stack || (stack = new Stack());
      if (isObject(srcValue)) {
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
        if (newValue === void 0) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    }, keysIn);
  }
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
    var isCommon = newValue === void 0;
    if (isCommon) {
      var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        newValue = objValue;
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject(objValue) || isFunction(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack["delete"](srcValue);
    }
    assignMergeValue(object, key, newValue);
  }
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + "");
  }
  var baseSetToString = !defineProperty ? identity : function(func, string) {
    return defineProperty(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant(string),
      "writable": true
    });
  };
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }
  function createAssigner(assigner) {
    return baseRest(function(object, sources) {
      var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? void 0 : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
      return eq(object[index], value);
    }
    return false;
  }
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  function overRest(func, start, transform) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }
  function safeGet(object, key) {
    if (key === "constructor" && typeof object[key] === "function") {
      return;
    }
    if (key == "__proto__") {
      return;
    }
    return object[key];
  }
  var setToString = shortOut(baseSetToString);
  function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var isArguments = baseIsArguments(function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArray = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  var isBuffer = nativeIsBuffer || stubFalse;
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  function toPlainObject(value) {
    return copyObject(value, keysIn(value));
  }
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }
  var merge2 = createAssigner(function(object, source, srcIndex) {
    baseMerge(object, source, srcIndex);
  });
  function constant(value) {
    return function() {
      return value;
    };
  }
  function identity(value) {
    return value;
  }
  function stubFalse() {
    return false;
  }
  module.exports = merge2;
})(lodash_merge, lodash_merge.exports);
var merge = lodash_merge.exports;
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = defineComponent({
  name: "VOnboardingStep",
  setup(_, { slots }) {
    const show = ref(false);
    const nextStep = inject("next-step", () => {
    });
    const previousStep = inject("previous-step", () => {
    });
    const exit = inject("exit", () => {
    });
    const options = inject("options");
    const mergedOptions = computed(() => merge({}, options == null ? void 0 : options.value, step.value.options));
    const isFirst = inject("is-first-step");
    const isLast = inject("is-last-step");
    const step = inject("step", {});
    const onNext = () => {
      beforeStepEnd();
      nextStep();
    };
    const onPrevious = () => {
      beforeStepEnd();
      previousStep();
    };
    watch(() => step.value, (_2, oldStep) => {
      var _a;
      if (!((_a = slots.default) == null ? void 0 : _a.call(slots)))
        return;
      beforeStepEnd(oldStep);
    });
    const stepElement = ref(null);
    const { updatePath, path } = useSvgOverlay();
    const attachElement = () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const element = useGetElement((_b = (_a = step == null ? void 0 : step.value) == null ? void 0 : _a.attachTo) == null ? void 0 : _b.element);
      if (element && stepElement.value) {
        show.value = true;
        if ((_d = (_c = mergedOptions.value) == null ? void 0 : _c.scrollToStep) == null ? void 0 : _d.enabled) {
          element.scrollIntoView((_f = (_e = mergedOptions.value) == null ? void 0 : _e.scrollToStep) == null ? void 0 : _f.options);
        }
        createPopper(element, stepElement.value, mergedOptions.value.popper);
        if ((_h = (_g = mergedOptions.value) == null ? void 0 : _g.overlay) == null ? void 0 : _h.enabled) {
          updatePath(element, {
            padding: (_j = (_i = mergedOptions.value) == null ? void 0 : _i.overlay) == null ? void 0 : _j.padding,
            borderRadius: (_l = (_k = mergedOptions.value) == null ? void 0 : _k.overlay) == null ? void 0 : _l.borderRadius
          });
        }
        setTargetElementClassName(element);
      }
    };
    const beforeStepStart = async () => {
      var _a, _b, _c;
      await ((_c = (_b = (_a = step == null ? void 0 : step.value) == null ? void 0 : _a.on) == null ? void 0 : _b.beforeStep) == null ? void 0 : _c.call(_b));
      attachElement();
    };
    const beforeStepEnd = (stepObj = step.value) => {
      var _a, _b, _c, _d;
      (_b = (_a = stepObj == null ? void 0 : stepObj.on) == null ? void 0 : _a.afterStep) == null ? void 0 : _b.call(_a);
      unsetTargetElementClassName(useGetElement((_c = stepObj == null ? void 0 : stepObj.attachTo) == null ? void 0 : _c.element), (_d = stepObj.attachTo) == null ? void 0 : _d.classList);
    };
    const setTargetElementClassName = (element = useGetElement(step.value.attachTo.element)) => {
      const classList = step.value.attachTo.classList;
      if (!classList || !element)
        return;
      element.classList.add(...classList);
    };
    const unsetTargetElementClassName = (element = useGetElement(step.value.attachTo.element), classList) => {
      if (!classList || !element)
        return;
      element.classList.remove(...classList);
    };
    onMounted(beforeStepStart);
    return {
      stepElement,
      onNext,
      onPrevious,
      path,
      show,
      step,
      isFirst,
      isLast,
      exit
    };
  }
});
const _hoisted_1$1 = { style: { "width": "100%", "height": "100%", "position": "fixed", "top": "0", "left": "0", "opacity": "0.5", "z-index": "var(--v-onboarding-overlay-z, 10)", "pointer-events": "none" } };
const _hoisted_2 = ["d"];
const _hoisted_3 = {
  ref: "stepElement",
  style: { "position": "relative", "z-index": "var(--v-onboarding-step-z, 20)" }
};
const _hoisted_4 = { class: "v-onboarding-item" };
const _hoisted_5 = { class: "v-onboarding-item__header" };
const _hoisted_6 = {
  key: 0,
  class: "v-onboarding-item__header-title"
};
const _hoisted_7 = ["innerHTML"];
const _hoisted_8 = { class: "v-onboarding-item__actions" };
const _hoisted_9 = /* @__PURE__ */ createElementVNode("div", { "data-popper-arrow": "" }, null, -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", null, [
    (openBlock(), createElementBlock("svg", _hoisted_1$1, [
      createElementVNode("path", { d: _ctx.path }, null, 8, _hoisted_2)
    ])),
    createElementVNode("div", _hoisted_3, [
      _ctx.step ? renderSlot(_ctx.$slots, "default", { key: 0 }, () => [
        createElementVNode("div", _hoisted_4, [
          createElementVNode("div", _hoisted_5, [
            _ctx.step.content.title ? (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(_ctx.step.content.title), 1)) : createCommentVNode("", true)
          ]),
          _ctx.step.content.description ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: "v-onboarding-item__description",
            innerHTML: _ctx.step.content.description
          }, null, 8, _hoisted_7)) : createCommentVNode("", true),
          createElementVNode("div", _hoisted_8, [
            !_ctx.isFirst ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onPrevious && _ctx.onPrevious(...args)),
              class: "v-onboarding-btn-secondary"
            }, " Previous ")) : createCommentVNode("", true),
            createElementVNode("button", {
              onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onNext && _ctx.onNext(...args)),
              type: "button",
              class: "v-onboarding-btn-primary"
            }, toDisplayString(_ctx.isLast ? "Accept" : "Next"), 1)
          ])
        ])
      ]) : createCommentVNode("", true),
      _hoisted_9
    ], 512)
  ], 512)), [
    [vShow, _ctx.show]
  ]);
}
var VOnboardingStep = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = defineComponent({
  name: "VOnboardingWrapper",
  components: {
    VOnboardingStep
  },
  props: {
    steps: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { expose }) {
    const index = ref(-1);
    const setIndex = (value) => {
      if (typeof value === "function") {
        index.value = value(index.value);
      } else {
        index.value = value;
      }
    };
    const activeStep = computed(() => {
      var _a;
      return ((_a = props.steps) == null ? void 0 : _a[index.value]) || null;
    });
    const toPreviousStep = () => {
      setIndex((current) => current - 1);
    };
    const toNextStep = () => {
      setIndex((current) => current + 1);
    };
    const isFinished = computed(() => {
      return index.value >= props.steps.length || index.value < 0;
    });
    const start = () => {
      setIndex(0);
    };
    const finish = () => {
      setIndex(-1);
    };
    expose({
      start,
      finish,
      goToStep: setIndex
    });
    const mergedOptions = computed(() => merge({}, defaultVOnboardingWrapperOptions, props.options));
    provide("options", mergedOptions);
    provide("step", activeStep);
    provide("next-step", toNextStep);
    provide("previous-step", toPreviousStep);
    provide("exit", () => finish());
    const isFirstStep = computed(() => index.value === 0);
    const isLastStep = computed(() => index.value === props.steps.length - 1);
    provide("is-first-step", isFirstStep);
    provide("is-last-step", isLastStep);
    return {
      index,
      activeStep,
      toPreviousStep,
      toNextStep,
      isFinished,
      setIndex,
      isFirstStep,
      isLastStep,
      finish
    };
  }
});
const _hoisted_1 = {
  key: 0,
  "data-v-onboarding-wrapper": ""
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VOnboardingStep = resolveComponent("VOnboardingStep");
  return !_ctx.isFinished ? (openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default", {
      key: _ctx.index,
      step: _ctx.activeStep,
      next: () => _ctx.toNextStep(),
      previous: () => _ctx.toPreviousStep(),
      exit: () => _ctx.finish(),
      isFirst: _ctx.isFirstStep,
      isLast: _ctx.isLastStep,
      index: _ctx.index
    }, () => [
      (openBlock(), createBlock(_component_VOnboardingStep, { key: _ctx.index }))
    ])
  ])) : createCommentVNode("", true);
}
var VOnboardingWrapper = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
function useVOnboarding(wrapperRef) {
  const start = () => {
    var _a;
    return (_a = wrapperRef == null ? void 0 : wrapperRef.value) == null ? void 0 : _a.start();
  };
  const finish = () => {
    var _a;
    return (_a = wrapperRef == null ? void 0 : wrapperRef.value) == null ? void 0 : _a.finish();
  };
  const goToStep = (newStepNumber) => {
    var _a;
    return (_a = wrapperRef == null ? void 0 : wrapperRef.value) == null ? void 0 : _a.goToStep(newStepNumber);
  };
  return {
    start,
    finish,
    goToStep
  };
}
var vOnboarding = "";
export { VOnboardingStep, VOnboardingWrapper, useVOnboarding };
