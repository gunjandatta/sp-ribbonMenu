import { Helper } from "gd-sprest-bs";

/**
 * Configuration
 */
export const Configuration = Helper.SPConfig({
    // Custom Action Configuration
    CustomActionCfg: {
        // Target the Web
        Web: [
            {
                Location: "ScriptLink",
                Name: "Menu",
                Title: "Menu",
                Description: "Displays a 'Menu' in the top ribbon row.",
                ScriptSrc: "~site/siteassets/sp-examples/demoRibbonMenu.js"
            }
        ]
    }
});
