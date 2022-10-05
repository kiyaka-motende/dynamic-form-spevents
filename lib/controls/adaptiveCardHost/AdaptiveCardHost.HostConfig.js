import { Text } from '@microsoft/sp-core-library';
import { fluentUITeamsDarkTheme, fluentUITeamsDefaultTheme, fluentUITeamsHighContrastTheme } from '../../common/fluentUIThemes';
import { setFluentUIThemeAsHostCapability } from './fluentUI/HostCapability';
import { createDarkTeamsHostConfig, createDefaultTeamsHostConfig, createHighContrastTeamsHostConfig, createSharePointHostConfig } from './fluentUI/HostConfig';
import { applyAdaptiveCardHostStyles } from './fluentUI/Styles';
import { AdaptiveCardHostThemeType } from './models/AdaptiveCardHostThemeType';
export var initializeAdaptiveCardHost = function (themeType, currentTheme) {
    var hostConfigResult;
    switch (themeType) {
        case AdaptiveCardHostThemeType.SharePoint:
            {
                hostConfigResult = {
                    theme: currentTheme,
                    hostConfig: createSharePointHostConfig(currentTheme)
                };
            }
            break;
        case AdaptiveCardHostThemeType.Teams:
            {
                var theme = fluentUITeamsDefaultTheme;
                hostConfigResult = {
                    theme: theme,
                    hostConfig: createDefaultTeamsHostConfig(theme)
                };
            }
            break;
        case AdaptiveCardHostThemeType.TeamsDark:
            {
                var theme = fluentUITeamsDarkTheme;
                hostConfigResult = {
                    theme: theme,
                    hostConfig: createDarkTeamsHostConfig(theme)
                };
            }
            break;
        case AdaptiveCardHostThemeType.TeamsHighContrast:
            {
                var theme = fluentUITeamsHighContrastTheme;
                hostConfigResult = {
                    theme: theme,
                    hostConfig: createHighContrastTeamsHostConfig(theme)
                };
            }
            break;
        default:
            {
                hostConfigResult = {
                    theme: currentTheme,
                    hostConfig: createSharePointHostConfig(currentTheme)
                };
            }
            break;
    }
    hostConfigResult.hostConfig.cssClassNamePrefix = "ach" + Text.replaceAll(Math.random().toString(), ".", "");
    setFluentUIThemeAsHostCapability(hostConfigResult.hostConfig, hostConfigResult.theme);
    applyAdaptiveCardHostStyles(hostConfigResult.theme, hostConfigResult.hostConfig.cssClassNamePrefix);
    return hostConfigResult;
};
//# sourceMappingURL=AdaptiveCardHost.HostConfig.js.map