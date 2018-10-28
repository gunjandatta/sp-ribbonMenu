import { Configuration } from "./cfg";
import { Menu } from "./menu";
import "./styles.scss";

// Create a global variable for the configuration
window["DemoRibbonMenu"] = { Configuration };

// Wait for the page to be loaded
window.addEventListener("load", () => {
    // Create an instance of the ribbon menu
    Menu();
});