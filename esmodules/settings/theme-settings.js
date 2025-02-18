import { SettingsMenuDorakoUI } from "./menu.js";
import { refreshChat } from "./settings.js";

export class ThemeSettings extends SettingsMenuDorakoUI {
  static namespace = "theme";

  static SETTINGS = [
    "app-theme",
    "window-app-theme",
    "sheet-theme-color",
    "chat-message-standard-theme",
    "chat-message-opposition-theme",
    "chat-message-header-style",
    "border-radius",
  ];

  static get settings() {
    return {
      "app-theme": {
        name: "pf2e-dorako-ui.settings.theme.app-theme.name",
        hint: "pf2e-dorako-ui.settings.theme.app-theme.hint",
        scope: "client",
        config: true,
        default: "crb",
        type: String,
        choices: {
          "no-theme": "pf2e-dorako-ui.text.no-theme",
          crb: "pf2e-dorako-ui.text.glass",
          foundry2: "pf2e-dorako-ui.text.foundry2",
          bg3: "pf2e-dorako-ui.text.bg3",
          discord: "pf2e-dorako-ui.text.discord",
          opaque: "pf2e-dorako-ui.text.opaque",
          custom: "pf2e-dorako-ui.text.custom",
        },
        requiresReload: true, // re-render all windows
        onChange: (choice) => {},
      },
      "window-app-theme": {
        name: "pf2e-dorako-ui.settings.theme.window-app-theme.name",
        hint: "pf2e-dorako-ui.settings.theme.window-app-theme.hint",
        scope: "client",
        config: true,
        default: "crb-light",
        type: String,
        choices: {
          "no-theme": "pf2e-dorako-ui.text.no-theme",
          "crb-light": "pf2e-dorako-ui.text.crb-light",
          "crb-dark": "pf2e-dorako-ui.text.crb-dark",
          foundry2: "pf2e-dorako-ui.text.foundry2",
          bg3: "pf2e-dorako-ui.text.bg3",
          "discord-light": `pf2e-dorako-ui.text.discord-light`,
          "discord-dark": "pf2e-dorako-ui.text.discord-dark",
          "custom-light": "pf2e-dorako-ui.text.custom-light",
          "custom-dark": "pf2e-dorako-ui.text.custom-dark",
        },
        requiresReload: true, // re-render all windows
        onChange: (choice) => {},
      },
      "sheet-theme-color": {
        name: "pf2e-dorako-ui.settings.theme.sheet-theme-color.name",
        hint: "pf2e-dorako-ui.settings.theme.sheet-theme-color.hint",
        scope: "client",
        config: true,
        default: "default",
        type: String,
        choices: {
          default: "pf2e-dorako-ui.text.default",
          red: "pf2e-dorako-ui.text.colors.red",
          green: "pf2e-dorako-ui.text.colors.green",
          blue: "pf2e-dorako-ui.text.colors.blue",
          purple: "pf2e-dorako-ui.text.colors.purple",
          black: "pf2e-dorako-ui.text.colors.black",
        },
        requiresReload: false,
        onChange: () => {
          const apps = Object.values(ui.windows).filter((w) => w instanceof Application);
          for (const app of apps) {
            app.render();
          }
        },
      },
      "chat-message-standard-theme": {
        name: "pf2e-dorako-ui.settings.theme.chat-message-standard-theme.name",
        hint: "pf2e-dorako-ui.settings.theme.chat-message-standard-theme.hint",
        scope: "client",
        config: true,
        default: "crb-light",
        type: String,
        choices: {
          "no-theme": "pf2e-dorako-ui.text.no-theme",
          "crb-light": "pf2e-dorako-ui.text.crb-light",
          "crb-dark": "pf2e-dorako-ui.text.crb-dark",
          foundry2: "pf2e-dorako-ui.text.foundry2",
          "bg3-brown": "pf2e-dorako-ui.text.bg3-brown",
          "bg3-blue": "pf2e-dorako-ui.text.bg3-blue",
          "discord-light": `pf2e-dorako-ui.text.discord-light`,
          "discord-dark": "pf2e-dorako-ui.text.discord-dark",
          "custom-light": "pf2e-dorako-ui.text.custom-light",
          "custom-dark": "pf2e-dorako-ui.text.custom-dark",
        },
        requiresReload: true, // re-render all windows
        onChange: (choice) => {},
      },
      "chat-message-opposition-theme": {
        name: "pf2e-dorako-ui.settings.theme.chat-message-opposition-theme.name",
        hint: "pf2e-dorako-ui.settings.theme.chat-message-opposition-theme.hint",
        scope: "client",
        config: true,
        default: "bg3-brown",
        type: String,
        choices: {
          "no-theme": "pf2e-dorako-ui.text.no-theme",
          "crb-light": "pf2e-dorako-ui.text.crb-light",
          "crb-dark": "pf2e-dorako-ui.text.crb-dark",
          foundry2: "pf2e-dorako-ui.text.foundry2",
          "bg3-brown": "pf2e-dorako-ui.text.bg3-brown",
          "bg3-blue": "pf2e-dorako-ui.text.bg3-blue",
          "discord-light": `pf2e-dorako-ui.text.discord-light`,
          "discord-dark": "pf2e-dorako-ui.text.discord-dark",
          "custom-light": "pf2e-dorako-ui.text.custom-light",
          "custom-dark": "pf2e-dorako-ui.text.custom-dark",
        },
        requiresReload: true, // re-render all windows
        onChange: (choice) => {},
      },
      "chat-message-header-style": {
        name: "pf2e-dorako-ui.settings.theme.chat-message-header-style.name",
        hint: "pf2e-dorako-ui.settings.theme.chat-message-header-style.hint",
        scope: "client",
        config: true,
        default: "none",
        type: String,
        choices: {
          tint: "pf2e-dorako-ui.text.colors.player",
          red: "pf2e-dorako-ui.text.colors.red",
          green: "pf2e-dorako-ui.text.colors.green",
          blue: "pf2e-dorako-ui.text.colors.blue",
          none: "pf2e-dorako-ui.text.disabled",
        },
        requiresReload: false,
        onChange: refreshChat,
      },
      "border-radius": {
        name: "pf2e-dorako-ui.settings.theme.border-radius.name",
        hint: "pf2e-dorako-ui.settings.theme.border-radius.hint",
        scope: "client",
        type: Number,
        default: 3,
        range: {
          min: 0,
          max: 48,
          step: 1,
        },
        config: true,
        requiresReload: false,
        onChange: (value) => {
          const root = document.querySelector(":root").style;
          root.setProperty("--border-radius", `${value}px`);
        },
      },
    };
  }
}
