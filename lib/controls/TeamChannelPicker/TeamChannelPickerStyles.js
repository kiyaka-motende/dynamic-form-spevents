import { mergeStyles, mergeStyleSets, } from "office-ui-fabric-react/lib/Styling";
var theme = window.__themeState__.theme;
export var useTeamChannelPickerStyles = function (themeVariant) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24;
    var textHeaderStyles = {
        root: { color: (_a = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette.themePrimary) !== null && _a !== void 0 ? _a : theme === null || theme === void 0 ? void 0 : theme.themePrimary },
    };
    var renderIconButtonRemoveStyles = {
        root: {
            height: 26,
            lineHeight: 26,
        },
    };
    var renderItemStylesMulti = {
        root: {
            height: 26,
            lineHeight: 26,
            paddingLeft: 10,
            marginLeft: 5,
            marginBottom: 5,
            cursor: "default",
            backgroundColor: (_c = (_b = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _b === void 0 ? void 0 : _b.themeLighterAlt) !== null && _c !== void 0 ? _c : theme.themeLighterAlt,
            ":hover": {
                backgroundColor: (_e = (_d = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _d === void 0 ? void 0 : _d.themeLighter) !== null && _e !== void 0 ? _e : theme.themeLighter,
            },
        },
    };
    var renderItemStylesSingle = {
        root: {
            height: 26,
            lineHeight: 26,
            paddingLeft: 10,
            cursor: "default",
            margin: 2,
            backgroundColor: (_g = (_f = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _f === void 0 ? void 0 : _f.themeLighterAlt) !== null && _g !== void 0 ? _g : theme.themeLighterAlt,
            ":hover": {
                backgroundColor: (_j = (_h = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _h === void 0 ? void 0 : _h.themeLighter) !== null && _j !== void 0 ? _j : theme.themeLighter,
            },
        },
    };
    var pickerStylesSingle = {
        root: {
            width: " 100%",
            borderRadius: 0,
        },
        input: {
            width: "100%",
            backgroundColor: (_l = (_k = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _k === void 0 ? void 0 : _k.white) !== null && _l !== void 0 ? _l : theme.white,
        },
        itemsWrapper: {},
        text: {
            borderStyle: "solid",
            width: "100%",
            borderWidth: 1,
            backgroundColor: (_o = (_m = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _m === void 0 ? void 0 : _m.white) !== null && _o !== void 0 ? _o : theme.white,
            borderRadius: 0,
            borderColor: (_q = (_p = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _p === void 0 ? void 0 : _p.neutralQuaternaryAlt) !== null && _q !== void 0 ? _q : theme.neutralQuaternaryAlt,
            ":focus": {
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: (_s = (_r = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _r === void 0 ? void 0 : _r.themePrimary) !== null && _s !== void 0 ? _s : theme.themePrimary,
            },
            ":hover": {
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: (_u = (_t = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _t === void 0 ? void 0 : _t.themePrimary) !== null && _u !== void 0 ? _u : theme.themePrimary,
            },
            ":after": {
                borderWidth: 0,
                borderRadius: 0,
            },
        },
    };
    var pickerStylesMulti = {
        root: {
            width: " 100%",
            borderRadius: 0,
        },
        input: {
            width: "100%",
            backgroundColor: (_w = (_v = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _v === void 0 ? void 0 : _v.white) !== null && _w !== void 0 ? _w : theme.white,
        },
        itemsWrapper: {
            padding: 3,
        },
        text: {
            borderStyle: "solid",
            width: "100%",
            borderWidth: 1,
            backgroundColor: (_y = (_x = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _x === void 0 ? void 0 : _x.white) !== null && _y !== void 0 ? _y : theme.white,
            borderRadius: 0,
            borderColor: (_0 = (_z = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _z === void 0 ? void 0 : _z.neutralQuaternaryAlt) !== null && _0 !== void 0 ? _0 : theme.neutralQuaternaryAlt,
            ":focus": {
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: (_2 = (_1 = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _1 === void 0 ? void 0 : _1.themePrimary) !== null && _2 !== void 0 ? _2 : theme.themePrimary,
            },
            ":hover": {
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: (_4 = (_3 = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _3 === void 0 ? void 0 : _3.themePrimary) !== null && _4 !== void 0 ? _4 : theme.themePrimary,
            },
            ":after": {
                borderStyle: "solid",
                borderWidth: 1,
                // borderColor: theme.neutralQuaternaryAlt,
                borderColor: (_6 = (_5 = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _5 === void 0 ? void 0 : _5.themePrimary) !== null && _6 !== void 0 ? _6 : theme.themePrimary,
            },
        },
    };
    var pickerStyles = {
        root: {
            width: " 100%",
            borderRadius: 0,
        },
        input: {
            borderTopStyle: "solid",
            width: "100%",
            borderTopWidth: 0,
            backgroundColor: (_8 = (_7 = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _7 === void 0 ? void 0 : _7.white) !== null && _8 !== void 0 ? _8 : theme.white,
            borderRadius: 0,
        },
        itemsWrapper: {
            padding: 5,
        },
        text: {
            borderStyle: "solid",
            width: "100%",
            borderWidth: 1,
            backgroundColor: (_10 = (_9 = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _9 === void 0 ? void 0 : _9.white) !== null && _10 !== void 0 ? _10 : theme.white,
            borderRadius: 0,
            borderColor: (_12 = (_11 = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _11 === void 0 ? void 0 : _11.neutralQuaternaryAlt) !== null && _12 !== void 0 ? _12 : theme.neutralQuaternaryAlt,
            ":focus": {
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: (_14 = (_13 = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _13 === void 0 ? void 0 : _13.themePrimary) !== null && _14 !== void 0 ? _14 : theme.themePrimary,
            },
            ":hover": {
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: (_16 = (_15 = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _15 === void 0 ? void 0 : _15.themePrimary) !== null && _16 !== void 0 ? _16 : theme.themePrimary,
            },
            ":after": {
                borderStyle: "solid",
                borderWidth: 1,
                // borderColor: theme.neutralQuaternaryAlt,
                borderColor: (_18 = (_17 = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _17 === void 0 ? void 0 : _17.themePrimary) !== null && _18 !== void 0 ? _18 : theme.themePrimary,
            },
        },
    };
    var componentClasses = mergeStyleSets({
        separator: mergeStyles({
            marginTop: 25,
            marginLeft: 20,
            marginRight: 20,
            borderBottomWidth: 1,
            borderBottomColor: (_20 = (_19 = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _19 === void 0 ? void 0 : _19.neutralQuaternaryAlt) !== null && _20 !== void 0 ? _20 : theme === null || theme === void 0 ? void 0 : theme.neutralQuaternaryAlt,
            borderBottomStyle: "solid",
        }),
        iconChannelItemStyles: {
            fontSize: 14,
            color: (_22 = (_21 = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _21 === void 0 ? void 0 : _21.themePrimary) !== null && _22 !== void 0 ? _22 : theme.themePrimary
        },
        iconChannelInfoStyles: {
            fontSize: 12,
            color: (_24 = (_23 = themeVariant === null || themeVariant === void 0 ? void 0 : themeVariant.palette) === null || _23 === void 0 ? void 0 : _23.themePrimary) !== null && _24 !== void 0 ? _24 : theme.themePrimary
        },
    });
    return {
        renderIconButtonRemoveStyles: renderIconButtonRemoveStyles,
        pickerStyles: pickerStyles,
        renderItemStylesSingle: renderItemStylesSingle,
        renderItemStylesMulti: renderItemStylesMulti,
        pickerStylesMulti: pickerStylesMulti,
        pickerStylesSingle: pickerStylesSingle,
        componentClasses: componentClasses
    };
};
//# sourceMappingURL=TeamChannelPickerStyles.js.map