import { Helper } from "gd-sprest";
import { Components } from "gd-sprest-bs";

/**
 * Menu
 */
export const Menu = () => {
    // Create the ribbon button
    let elMenu = Helper.RibbonLink({
        id: "menu",
        title: "Menu"
    });

    // Render the popover menu
    Components.Popover({
        // Target the menu ribbon element
        target: elMenu,
        // Display the popover under the element
        type: Components.PopoverTypes.Bottom,
        // Reference the Bootstrap popover for additional details of popover options
        options: {
            // Must set this flag, since we are rendering html
            html: true,
            // Hide the menu when clicking outside of it
            trigger: "focus",
            content: () => {
                // Create the menu
                let menu = Components.Dropdown({
                    className: "ribbon-menu",
                    menuOnly: true,
                    items: [
                        {
                            text: "My First Link",
                            href: "#"
                        },
                        {
                            isDivider: true
                        },
                        {
                            isHeader: true,
                            text: "Click Events"
                        },
                        {
                            text: "Alert",
                            onClick: () => {
                                alert("This is an alert");
                            }
                        }
                    ]
                });

                // Return the menu element
                return menu.el;
            }
        }
    });
}