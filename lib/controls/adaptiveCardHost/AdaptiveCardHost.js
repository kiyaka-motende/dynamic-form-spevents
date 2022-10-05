var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { ThemeProvider } from '@fluentui/react-theme-provider';
import { mergeThemes } from '@fluentui/theme/lib/mergeThemes';
import { AdaptiveCard, CardObjectRegistry, ExecuteAction, GlobalRegistry, OpenUrlAction, SerializationContext, SubmitAction } from 'adaptivecards';
import { Template } from 'adaptivecards-templating';
import { CustomizerContext } from 'office-ui-fabric-react/lib/Utilities';
import * as React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import { fluentUIDefaultTheme } from '../../common/fluentUIThemes/FluentUIDefaultTheme';
import { initializeAdaptiveCardHost } from './AdaptiveCardHost.HostConfig';
import { initProcessMarkdown, injectContextProperty } from './AdaptiveCardHost.Utilities';
import { registerFluentUIActions, registerFluentUIElements } from './fluentUI';
import { AdaptiveCardHostThemeType } from './models/AdaptiveCardHostThemeType';
export var AdaptiveCardHost = function (props) {
    var renderElementRef = useRef(null);
    var adaptiveCardInstanceRef = useRef(null);
    var serializationContextInstanceRef = useRef(null);
    var fluentUIThemeInstanceRef = useRef(null);
    var fluentUICustomizerContext = React.useContext(CustomizerContext);
    var adaptiveCardInstanceRefDependencies = [props.card, props.onSetCustomElements, props.onSetCustomActions, props.onUpdateHostCapabilities];
    // Init Process Markdown
    useEffect(function () {
        initProcessMarkdown();
    }, []);
    // *****
    // create the instance of AdaptiveCard & SerializationContext
    useEffect(function () {
        adaptiveCardInstanceRef.current = new AdaptiveCard();
        serializationContextInstanceRef.current = new SerializationContext();
    }, __spreadArrays(adaptiveCardInstanceRefDependencies));
    // *****
    // create executeAction
    var invokeAction = useCallback(function (action) {
        if (props.onInvokeAction) {
            var actionResult = void 0;
            var type = action.getJsonTypeName();
            switch (type) {
                case OpenUrlAction.JsonTypeName:
                    {
                        var typedAction = action;
                        actionResult = { type: type, title: typedAction.title, url: typedAction.url };
                    }
                    break;
                case SubmitAction.JsonTypeName:
                    {
                        var typedAction = action;
                        actionResult = { type: type, title: typedAction.title, data: typedAction.data };
                    }
                    break;
                case ExecuteAction.JsonTypeName:
                    {
                        var typedAction = action;
                        actionResult = { type: type, title: typedAction.title, data: typedAction.data, verb: typedAction.verb };
                    }
                    break;
            }
            props.onInvokeAction(actionResult);
        }
    }, [props.onInvokeAction]);
    // *****
    // set hostConfig
    useEffect(function () {
        // set the input Fluent UI Theme
        var inputFluentUITheme;
        var inputThemeType = props.themeType;
        if (!inputThemeType) {
            inputThemeType = AdaptiveCardHostThemeType.SharePoint;
        }
        // if this control is wrapped on "ThemeProvider" take the theme from the context
        var contextTheme = fluentUICustomizerContext.customizations.settings["theme"];
        // *****
        if (props.theme) {
            inputFluentUITheme = props.theme;
        }
        else if (contextTheme) {
            inputFluentUITheme = contextTheme;
        }
        else {
            inputFluentUITheme = fluentUIDefaultTheme();
        }
        // **********
        var hostConfigResult = initializeAdaptiveCardHost(inputThemeType, mergeThemes(fluentUIDefaultTheme(), inputFluentUITheme));
        var currentHostConfig = hostConfigResult.hostConfig;
        fluentUIThemeInstanceRef.current = hostConfigResult.theme;
        adaptiveCardInstanceRef.current.hostConfig = hostConfigResult.hostConfig;
        if (props.onUpdateHostCapabilities) {
            props.onUpdateHostCapabilities(currentHostConfig.hostCapabilities);
        }
    }, __spreadArrays(adaptiveCardInstanceRefDependencies, [fluentUICustomizerContext, props.theme, props.themeType, props.hostConfig]));
    // *****
    // set invokeAction
    useEffect(function () {
        adaptiveCardInstanceRef.current.onExecuteAction = invokeAction;
    }, __spreadArrays(adaptiveCardInstanceRefDependencies, [invokeAction]));
    // *****
    // set elements & actions registry
    useEffect(function () {
        var elementRegistry = new CardObjectRegistry();
        var actionRegistry = new CardObjectRegistry();
        GlobalRegistry.populateWithDefaultElements(elementRegistry);
        GlobalRegistry.populateWithDefaultActions(actionRegistry);
        registerFluentUIElements(elementRegistry);
        registerFluentUIActions(actionRegistry);
        if (props.onSetCustomElements) {
            props.onSetCustomElements(elementRegistry);
        }
        if (props.onSetCustomActions) {
            props.onSetCustomActions(actionRegistry);
        }
        var currentSerializationContext = serializationContextInstanceRef.current;
        currentSerializationContext.setElementRegistry(elementRegistry);
        currentSerializationContext.setActionRegistry(actionRegistry);
    }, __spreadArrays(adaptiveCardInstanceRefDependencies));
    // *****
    // set Adaptive Card
    useEffect(function () {
        var currentRenderElement = renderElementRef.current;
        if (!currentRenderElement) {
            return;
        }
        var currentAdaptiveCard = adaptiveCardInstanceRef.current;
        try {
            var template = new Template(props.card);
            var evaluationContext = injectContextProperty(props.data, fluentUIThemeInstanceRef.current, props.context);
            var cardPayload = template.expand(evaluationContext);
            currentAdaptiveCard.parse(cardPayload, serializationContextInstanceRef.current);
            var renderedElement = currentAdaptiveCard.render();
            currentRenderElement.innerHTML = "";
            currentRenderElement.appendChild(renderedElement);
            // just for debugging pourpouse
            console.log(evaluationContext);
            // *****
        }
        catch (cardRenderError) {
            if (props.onError) {
                props.onError(cardRenderError);
            }
        }
    }, __spreadArrays(adaptiveCardInstanceRefDependencies, [props.data, props.hostConfig, props.onError]));
    // *****
    return (React.createElement(ThemeProvider, { theme: (fluentUIThemeInstanceRef.current) ? fluentUIThemeInstanceRef.current : fluentUIDefaultTheme() },
        React.createElement("div", { ref: renderElementRef, className: "" + ((props.className) ? props.className : ""), style: props.style })));
};
//# sourceMappingURL=AdaptiveCardHost.js.map