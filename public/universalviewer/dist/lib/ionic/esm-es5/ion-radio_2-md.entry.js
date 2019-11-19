import { r as registerInstance, c as createEvent, d as getIonMode, h, H as Host, e as getElement } from './chunk-d0403a2f.js';
import './chunk-1074393c.js';
import { c as createColorClasses, h as hostContext } from './chunk-353a032e.js';
import { f as findItemLabel } from './chunk-c90aaa66.js';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
var Radio = /** @class */ (function () {
    function Radio(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.inputId = "ion-rb-" + radioButtonIds++;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the user cannot interact with the radio.
         */
        this.disabled = false;
        /**
         * If `true`, the radio is selected.
         */
        this.checked = false;
        this.onFocus = function () {
            _this.ionFocus.emit();
        };
        this.onBlur = function () {
            _this.ionBlur.emit();
        };
        this.onClick = function () {
            if (_this.checked) {
                _this.ionDeselect.emit();
            }
            else {
                _this.checked = true;
            }
        };
        this.ionRadioDidLoad = createEvent(this, "ionRadioDidLoad", 7);
        this.ionRadioDidUnload = createEvent(this, "ionRadioDidUnload", 7);
        this.ionStyle = createEvent(this, "ionStyle", 7);
        this.ionSelect = createEvent(this, "ionSelect", 7);
        this.ionDeselect = createEvent(this, "ionDeselect", 7);
        this.ionFocus = createEvent(this, "ionFocus", 7);
        this.ionBlur = createEvent(this, "ionBlur", 7);
    }
    Radio.prototype.colorChanged = function () {
        this.emitStyle();
    };
    Radio.prototype.checkedChanged = function (isChecked) {
        if (isChecked) {
            this.ionSelect.emit({
                checked: true,
                value: this.value
            });
        }
        this.emitStyle();
    };
    Radio.prototype.disabledChanged = function () {
        this.emitStyle();
    };
    Radio.prototype.componentWillLoad = function () {
        if (this.value === undefined) {
            this.value = this.inputId;
        }
        this.emitStyle();
    };
    Radio.prototype.componentDidLoad = function () {
        this.ionRadioDidLoad.emit();
    };
    Radio.prototype.componentDidUnload = function () {
        this.ionRadioDidUnload.emit();
    };
    Radio.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'radio-checked': this.checked,
            'interactive-disabled': this.disabled,
        });
    };
    Radio.prototype.render = function () {
        var _a;
        var _b = this, inputId = _b.inputId, disabled = _b.disabled, checked = _b.checked, color = _b.color, el = _b.el;
        var mode = getIonMode(this);
        var labelId = inputId + '-lbl';
        var label = findItemLabel(el);
        if (label) {
            label.id = labelId;
        }
        return (h(Host, { onClick: this.onClick, role: "radio", "aria-disabled": disabled ? 'true' : null, "aria-checked": "" + checked, "aria-labelledby": labelId, class: Object.assign({}, createColorClasses(color), (_a = {}, _a[mode] = true, _a['in-item'] = hostContext('ion-item', el), _a['interactive'] = true, _a['radio-checked'] = checked, _a['radio-disabled'] = disabled, _a)) }, h("div", { class: "radio-icon" }, h("div", { class: "radio-inner" })), h("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: disabled })));
    };
    Object.defineProperty(Radio.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Radio, "watchers", {
        get: function () {
            return {
                "color": ["colorChanged"],
                "checked": ["checkedChanged"],
                "disabled": ["disabledChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Radio, "style", {
        get: function () { return ":host{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:layout size style}.radio-icon,button{width:100%;height:100%}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color:var(--ion-color-step-400,#999);--color-checked:var(--ion-color-primary,#3880ff);--border-width:2px;--border-style:solid;width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:50%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:50%;width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}:host(.radio-disabled){opacity:.3}:host(.ion-focused) .radio-icon:after{border-radius:50%;left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}:host-context([dir=rtl]).ion-focused .radio-icon:after,:host-context([dir=rtl]):host(.ion-focused) .radio-icon:after{left:unset;right:unset;right:-12px}:host(.in-item){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:11px;margin-bottom:10px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}"; },
        enumerable: true,
        configurable: true
    });
    return Radio;
}());
var radioButtonIds = 0;
var RadioGroup = /** @class */ (function () {
    function RadioGroup(hostRef) {
        registerInstance(this, hostRef);
        this.inputId = "ion-rg-" + radioGroupIds++;
        this.labelId = this.inputId + "-lbl";
        this.radios = [];
        /**
         * If `true`, the radios can be deselected.
         */
        this.allowEmptySelection = false;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        this.ionChange = createEvent(this, "ionChange", 7);
    }
    RadioGroup.prototype.valueChanged = function (value) {
        this.updateRadios();
        this.ionChange.emit({ value: value });
    };
    RadioGroup.prototype.onRadioDidLoad = function (ev) {
        var radio = ev.target;
        radio.name = this.name;
        // add radio to internal list
        this.radios.push(radio);
        // this radio-group does not have a value
        // but this radio is checked, so let's set the
        // radio-group's value from the checked radio
        if (this.value == null && radio.checked) {
            this.value = radio.value;
        }
        else {
            this.updateRadios();
        }
    };
    RadioGroup.prototype.onRadioDidUnload = function (ev) {
        var index = this.radios.indexOf(ev.target);
        if (index > -1) {
            this.radios.splice(index, 1);
        }
    };
    RadioGroup.prototype.onRadioSelect = function (ev) {
        var selectedRadio = ev.target;
        if (selectedRadio) {
            this.value = selectedRadio.value;
        }
    };
    RadioGroup.prototype.onRadioDeselect = function (ev) {
        if (this.allowEmptySelection) {
            var selectedRadio = ev.target;
            if (selectedRadio) {
                selectedRadio.checked = false;
                this.value = undefined;
            }
        }
    };
    RadioGroup.prototype.componentDidLoad = function () {
        // Get the list header if it exists and set the id
        // this is used to set aria-labelledby
        var header = this.el.querySelector('ion-list-header');
        if (!header) {
            header = this.el.querySelector('ion-item-divider');
        }
        if (header) {
            var label = header.querySelector('ion-label');
            if (label) {
                this.labelId = label.id = this.name + '-lbl';
            }
        }
        this.updateRadios();
    };
    RadioGroup.prototype.updateRadios = function () {
        var value = this.value;
        var hasChecked = false;
        for (var _i = 0, _a = this.radios; _i < _a.length; _i++) {
            var radio = _a[_i];
            if (!hasChecked && radio.value === value) {
                // correct value for this radio
                // but this radio isn't checked yet
                // and we haven't found a checked yet
                hasChecked = true;
                radio.checked = true;
            }
            else {
                // this radio doesn't have the correct value
                // or the radio group has been already checked
                radio.checked = false;
            }
        }
    };
    RadioGroup.prototype.render = function () {
        return (h(Host, { role: "radiogroup", "aria-labelledby": this.labelId, class: getIonMode(this) }));
    };
    Object.defineProperty(RadioGroup.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroup, "watchers", {
        get: function () {
            return {
                "value": ["valueChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return RadioGroup;
}());
var radioGroupIds = 0;
export { Radio as ion_radio, RadioGroup as ion_radio_group };