/**
 * 8bitcn Provider
 * 
 * Retro 8-bit pixel-art components for RPG UI projects.
 * Source: https://www.8bitcn.com/docs/components
 * 
 * Style Domain: rpg_8bit
 * Preferred Theme: rpg_8bit
 */

// All 8bitcn components from https://www.8bitcn.com/docs/components
// Enhanced with use cases, patterns, and context for RPG/8-bit style projects
const allEightbitComponents = [
  { name: "accordion", category: "layout", description: "A vertically stacked set of interactive headings", useCases: ["RPG menus", "Game settings", "Collapsible content", "8-bit UI sections"], commonPatterns: ["RPG menu accordion", "Game settings", "8-bit accordion"], whenToUse: ["RPG interfaces", "8-bit UI", "Game menus"], whenNotToUse: ["Modern web UI", "Simple lists", "Non-retro designs"], examples: ["RPG inventory menu", "Game settings panel", "8-bit FAQ section"], relatedComponents: ["collapsible", "tabs"] },
  { name: "alert", category: "feedback", description: "Displays a callout for user attention", useCases: ["Game notifications", "RPG alerts", "8-bit messages", "Game feedback"], commonPatterns: ["RPG alert", "Game notification", "8-bit message"], whenToUse: ["RPG interfaces", "8-bit UI", "Game notifications"], whenNotToUse: ["Modern web UI", "Simple notifications", "Non-retro designs"], examples: ["RPG quest alert", "Game notification", "8-bit message"], relatedComponents: ["toast", "alert-dialog"] },
  { name: "alert-dialog", category: "overlay", description: "A modal dialog that interrupts the user", useCases: ["Game confirmations", "RPG dialogs", "8-bit modals", "Game decisions"], commonPatterns: ["RPG dialog", "Game confirmation", "8-bit modal"], whenToUse: ["RPG interfaces", "8-bit UI", "Game confirmations"], whenNotToUse: ["Modern web UI", "Simple dialogs", "Non-retro designs"], examples: ["RPG confirmation dialog", "Game decision modal", "8-bit alert"], relatedComponents: ["dialog", "alert"] },
  { name: "avatar", category: "display", description: "An image element with a fallback", useCases: ["Player avatars", "Character displays", "RPG characters", "8-bit portraits"], commonPatterns: ["Player avatar", "Character portrait", "8-bit avatar"], whenToUse: ["RPG interfaces", "8-bit UI", "Character displays"], whenNotToUse: ["Modern web UI", "Simple images", "Non-retro designs"], examples: ["RPG character avatar", "Player portrait", "8-bit avatar"], relatedComponents: ["badge", "item"] },
  { name: "badge", category: "display", description: "Displays a badge or a component that looks like a badge", useCases: ["Game badges", "RPG status", "8-bit labels", "Game indicators"], commonPatterns: ["RPG badge", "Game status", "8-bit label"], whenToUse: ["RPG interfaces", "8-bit UI", "Status indicators"], whenNotToUse: ["Modern web UI", "Simple badges", "Non-retro designs"], examples: ["RPG status badge", "Game achievement", "8-bit label"], relatedComponents: ["avatar", "item"] },
  { name: "breadcrumb", category: "navigation", description: "Displays the path to the current resource", useCases: ["Game navigation", "RPG paths", "8-bit navigation", "Game hierarchy"], commonPatterns: ["RPG breadcrumb", "Game navigation", "8-bit path"], whenToUse: ["RPG interfaces", "8-bit UI", "Game navigation"], whenNotToUse: ["Modern web UI", "Simple navigation", "Non-retro designs"], examples: ["RPG location path", "Game menu path", "8-bit navigation"], relatedComponents: ["navigation-menu", "tabs"] },
  { name: "button", category: "form", description: "Displays a button or a component that looks like a button", useCases: ["Game buttons", "RPG actions", "8-bit buttons", "Game controls"], commonPatterns: ["RPG button", "Game action", "8-bit button"], whenToUse: ["RPG interfaces", "8-bit UI", "Game controls"], whenNotToUse: ["Modern web UI", "Simple buttons", "Non-retro designs"], examples: ["RPG action button", "Game control", "8-bit button"], relatedComponents: ["toggle", "retro-switcher"] },
  { name: "calendar", category: "form", description: "A date field component", useCases: ["Game calendars", "RPG date selection", "8-bit calendars", "Game scheduling"], commonPatterns: ["RPG calendar", "Game date picker", "8-bit calendar"], whenToUse: ["RPG interfaces", "8-bit UI", "Date selection"], whenNotToUse: ["Modern web UI", "Simple date inputs", "Non-retro designs"], examples: ["RPG event calendar", "Game date picker", "8-bit calendar"], relatedComponents: ["date-picker", "input"] },
  { name: "card", category: "layout", description: "Displays a card with header, content, and footer", useCases: ["Game cards", "RPG cards", "8-bit cards", "Game displays"], commonPatterns: ["RPG card", "Game card", "8-bit card"], whenToUse: ["RPG interfaces", "8-bit UI", "Card displays"], whenNotToUse: ["Modern web UI", "Simple cards", "Non-retro designs"], examples: ["RPG item card", "Game card", "8-bit card"], relatedComponents: ["item", "badge"] },
  { name: "carousel", category: "display", description: "A carousel with motion and swipe built using Embla", useCases: ["Game carousels", "RPG displays", "8-bit carousels", "Game galleries"], commonPatterns: ["RPG carousel", "Game gallery", "8-bit carousel"], whenToUse: ["RPG interfaces", "8-bit UI", "Image galleries"], whenNotToUse: ["Modern web UI", "Simple lists", "Non-retro designs"], examples: ["RPG item carousel", "Game gallery", "8-bit carousel"], relatedComponents: ["tabs", "scroll-area"] },
  { name: "chart", category: "display", description: "Chart components built with Recharts", useCases: ["Game stats", "RPG charts", "8-bit charts", "Game data"], commonPatterns: ["RPG chart", "Game stats", "8-bit chart"], whenToUse: ["RPG interfaces", "8-bit UI", "Data visualization"], whenNotToUse: ["Modern web UI", "Simple charts", "Non-retro designs"], examples: ["RPG stats chart", "Game data visualization", "8-bit chart"], relatedComponents: ["progress", "health-bar"] },
  { name: "checkbox", category: "form", description: "A control that allows the user to toggle between checked and not checked", useCases: ["Game checkboxes", "RPG options", "8-bit checkboxes", "Game settings"], commonPatterns: ["RPG checkbox", "Game option", "8-bit checkbox"], whenToUse: ["RPG interfaces", "8-bit UI", "Multiple selections"], whenNotToUse: ["Modern web UI", "Simple checkboxes", "Non-retro designs"], examples: ["RPG option checkbox", "Game setting", "8-bit checkbox"], relatedComponents: ["radio-group", "switch"] },
  { name: "collapsible", category: "layout", description: "An interactive component which expands/collapses a panel", useCases: ["Game panels", "RPG sections", "8-bit collapsibles", "Game menus"], commonPatterns: ["RPG collapsible", "Game panel", "8-bit collapsible"], whenToUse: ["RPG interfaces", "8-bit UI", "Expandable content"], whenNotToUse: ["Modern web UI", "Simple panels", "Non-retro designs"], examples: ["RPG menu panel", "Game section", "8-bit collapsible"], relatedComponents: ["accordion", "sheet"] },
  { name: "combo-box", category: "form", description: "Combobox component for autocomplete", useCases: ["Game search", "RPG autocomplete", "8-bit combobox", "Game selection"], commonPatterns: ["RPG combobox", "Game search", "8-bit combobox"], whenToUse: ["RPG interfaces", "8-bit UI", "Searchable selection"], whenNotToUse: ["Modern web UI", "Simple selects", "Non-retro designs"], examples: ["RPG item search", "Game selection", "8-bit combobox"], relatedComponents: ["select", "input"] },
  { name: "command", category: "navigation", description: "Command palette component", useCases: ["Game commands", "RPG palettes", "8-bit commands", "Game shortcuts"], commonPatterns: ["RPG command", "Game palette", "8-bit command"], whenToUse: ["RPG interfaces", "8-bit UI", "Command palettes"], whenNotToUse: ["Modern web UI", "Simple menus", "Non-retro designs"], examples: ["RPG command palette", "Game shortcut", "8-bit command"], relatedComponents: ["popover", "dialog"] },
  { name: "context-menu", category: "overlay", description: "Displays a menu to the user", useCases: ["Game menus", "RPG context menus", "8-bit menus", "Game actions"], commonPatterns: ["RPG context menu", "Game menu", "8-bit menu"], whenToUse: ["RPG interfaces", "8-bit UI", "Context actions"], whenNotToUse: ["Modern web UI", "Simple menus", "Non-retro designs"], examples: ["RPG right-click menu", "Game action menu", "8-bit menu"], relatedComponents: ["dropdown-menu", "menubar"] },
  { name: "date-picker", category: "form", description: "A date picker component", useCases: ["Game dates", "RPG date selection", "8-bit date picker", "Game scheduling"], commonPatterns: ["RPG date picker", "Game date", "8-bit date picker"], whenToUse: ["RPG interfaces", "8-bit UI", "Date selection"], whenNotToUse: ["Modern web UI", "Simple date inputs", "Non-retro designs"], examples: ["RPG event date", "Game date picker", "8-bit date picker"], relatedComponents: ["calendar", "popover"] },
  { name: "dialog", category: "overlay", description: "A window overlaid on either the primary window", useCases: ["Game dialogs", "RPG modals", "8-bit dialogs", "Game windows"], commonPatterns: ["RPG dialog", "Game modal", "8-bit dialog"], whenToUse: ["RPG interfaces", "8-bit UI", "Modal dialogs"], whenNotToUse: ["Modern web UI", "Simple dialogs", "Non-retro designs"], examples: ["RPG dialog window", "Game modal", "8-bit dialog"], relatedComponents: ["alert-dialog", "sheet"] },
  { name: "drawer", category: "overlay", description: "A drawer component for mobile", useCases: ["Game drawers", "RPG side panels", "8-bit drawers", "Game mobile UI"], commonPatterns: ["RPG drawer", "Game panel", "8-bit drawer"], whenToUse: ["RPG interfaces", "8-bit UI", "Mobile panels"], whenNotToUse: ["Modern web UI", "Simple drawers", "Non-retro designs"], examples: ["RPG mobile menu", "Game drawer", "8-bit drawer"], relatedComponents: ["sheet", "sidebar"] },
  { name: "dropdown-menu", category: "overlay", description: "Displays a menu to the user", useCases: ["Game menus", "RPG dropdowns", "8-bit menus", "Game actions"], commonPatterns: ["RPG dropdown", "Game menu", "8-bit menu"], whenToUse: ["RPG interfaces", "8-bit UI", "Action menus"], whenNotToUse: ["Modern web UI", "Simple menus", "Non-retro designs"], examples: ["RPG action menu", "Game dropdown", "8-bit menu"], relatedComponents: ["context-menu", "menubar"] },
  { name: "empty", category: "display", description: "Displays an empty state", useCases: ["Game empty states", "RPG empty displays", "8-bit empty states", "Game placeholders"], commonPatterns: ["RPG empty", "Game placeholder", "8-bit empty"], whenToUse: ["RPG interfaces", "8-bit UI", "Empty states"], whenNotToUse: ["Modern web UI", "Simple empty states", "Non-retro designs"], examples: ["RPG empty inventory", "Game placeholder", "8-bit empty"], relatedComponents: ["skeleton", "alert"] },
  { name: "enemy-health", category: "rpg", description: "Enemy health bar component for RPG games", useCases: ["RPG combat", "Game health bars", "Enemy displays", "Battle UI"], commonPatterns: ["Enemy health bar", "RPG combat", "Battle UI"], whenToUse: ["RPG games", "Combat interfaces", "Enemy displays"], whenNotToUse: ["Non-RPG games", "Simple displays", "Modern web UI"], examples: ["RPG enemy health", "Combat display", "Battle UI"], relatedComponents: ["health-bar", "mana-bar", "progress"] },
  { name: "health-bar", category: "rpg", description: "Health bar component for RPG games", useCases: ["RPG combat", "Game health bars", "Player health", "Battle UI"], commonPatterns: ["Health bar", "RPG combat", "Battle UI"], whenToUse: ["RPG games", "Combat interfaces", "Health displays"], whenNotToUse: ["Non-RPG games", "Simple displays", "Modern web UI"], examples: ["RPG player health", "Combat display", "Battle UI"], relatedComponents: ["enemy-health", "mana-bar", "progress"] },
  { name: "hover-card", category: "overlay", description: "For sighted users to preview content available behind a link", useCases: ["Game tooltips", "RPG previews", "8-bit hover cards", "Game information"], commonPatterns: ["RPG hover card", "Game tooltip", "8-bit hover"], whenToUse: ["RPG interfaces", "8-bit UI", "Hover information"], whenNotToUse: ["Modern web UI", "Simple tooltips", "Non-retro designs"], examples: ["RPG item preview", "Game tooltip", "8-bit hover"], relatedComponents: ["popover", "tooltip"] },
  { name: "input", category: "form", description: "Displays a form input field", useCases: ["Game inputs", "RPG forms", "8-bit inputs", "Game text fields"], commonPatterns: ["RPG input", "Game field", "8-bit input"], whenToUse: ["RPG interfaces", "8-bit UI", "Text input"], whenNotToUse: ["Modern web UI", "Simple inputs", "Non-retro designs"], examples: ["RPG text input", "Game field", "8-bit input"], relatedComponents: ["textarea", "label"] },
  { name: "input-otp", category: "form", description: "Input component for one-time passwords", useCases: ["Game codes", "RPG verification", "8-bit OTP", "Game authentication"], commonPatterns: ["RPG OTP", "Game code", "8-bit OTP"], whenToUse: ["RPG interfaces", "8-bit UI", "OTP codes"], whenNotToUse: ["Modern web UI", "Simple inputs", "Non-retro designs"], examples: ["RPG verification code", "Game OTP", "8-bit OTP"], relatedComponents: ["input", "form"] },
  { name: "item", category: "display", description: "Item component", useCases: ["Game items", "RPG items", "8-bit items", "Game inventory"], commonPatterns: ["RPG item", "Game item", "8-bit item"], whenToUse: ["RPG interfaces", "8-bit UI", "Item displays"], whenNotToUse: ["Modern web UI", "Simple items", "Non-retro designs"], examples: ["RPG inventory item", "Game item", "8-bit item"], relatedComponents: ["card", "badge"] },
  { name: "kbd", category: "display", description: "Keyboard key component", useCases: ["Game shortcuts", "RPG key displays", "8-bit keyboard", "Game controls"], commonPatterns: ["RPG keyboard", "Game shortcut", "8-bit key"], whenToUse: ["RPG interfaces", "8-bit UI", "Keyboard shortcuts"], whenNotToUse: ["Modern web UI", "Simple keys", "Non-retro designs"], examples: ["RPG shortcut key", "Game control", "8-bit key"], relatedComponents: ["tooltip", "command"] },
  { name: "label", category: "form", description: "Renders an accessible label associated with controls", useCases: ["Game labels", "RPG form labels", "8-bit labels", "Game forms"], commonPatterns: ["RPG label", "Game label", "8-bit label"], whenToUse: ["RPG interfaces", "8-bit UI", "Form labels"], whenNotToUse: ["Modern web UI", "Simple labels", "Non-retro designs"], examples: ["RPG form label", "Game label", "8-bit label"], relatedComponents: ["input", "form"] },
  { name: "mana-bar", category: "rpg", description: "Mana bar component for RPG games", useCases: ["RPG combat", "Game mana bars", "Magic displays", "Battle UI"], commonPatterns: ["Mana bar", "RPG combat", "Battle UI"], whenToUse: ["RPG games", "Combat interfaces", "Magic displays"], whenNotToUse: ["Non-RPG games", "Simple displays", "Modern web UI"], examples: ["RPG player mana", "Combat display", "Battle UI"], relatedComponents: ["health-bar", "enemy-health", "progress"] },
  { name: "menubar", category: "navigation", description: "A visually persistent menu common in desktop applications", useCases: ["Game menus", "RPG menubars", "8-bit menus", "Game navigation"], commonPatterns: ["RPG menubar", "Game menu", "8-bit menubar"], whenToUse: ["RPG interfaces", "8-bit UI", "Persistent menus"], whenNotToUse: ["Modern web UI", "Simple menus", "Non-retro designs"], examples: ["RPG desktop menu", "Game menubar", "8-bit menubar"], relatedComponents: ["navigation-menu", "dropdown-menu"] },
  { name: "navigation-menu", category: "navigation", description: "A collection of links for navigating websites", useCases: ["Game navigation", "RPG menus", "8-bit navigation", "Game links"], commonPatterns: ["RPG navigation", "Game menu", "8-bit navigation"], whenToUse: ["RPG interfaces", "8-bit UI", "Site navigation"], whenNotToUse: ["Modern web UI", "Simple navigation", "Non-retro designs"], examples: ["RPG site menu", "Game navigation", "8-bit navigation"], relatedComponents: ["menubar", "breadcrumb"] },
  { name: "pagination", category: "navigation", description: "Pagination component", useCases: ["Game pagination", "RPG pages", "8-bit pagination", "Game lists"], commonPatterns: ["RPG pagination", "Game page", "8-bit pagination"], whenToUse: ["RPG interfaces", "8-bit UI", "Paginated content"], whenNotToUse: ["Modern web UI", "Simple pagination", "Non-retro designs"], examples: ["RPG list pagination", "Game page", "8-bit pagination"], relatedComponents: ["table", "data-table"] },
  { name: "popover", category: "overlay", description: "Displays rich content in a portal", useCases: ["Game popovers", "RPG overlays", "8-bit popovers", "Game information"], commonPatterns: ["RPG popover", "Game overlay", "8-bit popover"], whenToUse: ["RPG interfaces", "8-bit UI", "Non-blocking information"], whenNotToUse: ["Modern web UI", "Simple popovers", "Non-retro designs"], examples: ["RPG info popover", "Game overlay", "8-bit popover"], relatedComponents: ["tooltip", "dialog"] },
  { name: "progress", category: "feedback", description: "Displays an indicator showing the completion progress of a task", useCases: ["Game progress", "RPG progress bars", "8-bit progress", "Game loading"], commonPatterns: ["RPG progress", "Game progress bar", "8-bit progress"], whenToUse: ["RPG interfaces", "8-bit UI", "Progress indicators"], whenNotToUse: ["Modern web UI", "Simple progress", "Non-retro designs"], examples: ["RPG loading progress", "Game progress bar", "8-bit progress"], relatedComponents: ["health-bar", "mana-bar", "spinner"] },
  { name: "radio-group", category: "form", description: "A set of checkable buttons—known as radio buttons", useCases: ["Game options", "RPG radio groups", "8-bit radio", "Game selection"], commonPatterns: ["RPG radio", "Game option", "8-bit radio"], whenToUse: ["RPG interfaces", "8-bit UI", "Single selection"], whenNotToUse: ["Modern web UI", "Simple radio", "Non-retro designs"], examples: ["RPG option radio", "Game selection", "8-bit radio"], relatedComponents: ["checkbox", "select"] },
  { name: "resizable", category: "layout", description: "Accessible resizable panel groups and layouts", useCases: ["Game panels", "RPG resizable", "8-bit panels", "Game layouts"], commonPatterns: ["RPG resizable", "Game panel", "8-bit resizable"], whenToUse: ["RPG interfaces", "8-bit UI", "Resizable layouts"], whenNotToUse: ["Modern web UI", "Simple layouts", "Non-retro designs"], examples: ["RPG resizable panel", "Game layout", "8-bit resizable"], relatedComponents: ["sidebar", "separator"] },
  { name: "retro-switcher", category: "form", description: "Retro-style switch component", useCases: ["Game switches", "RPG toggles", "8-bit switches", "Game settings"], commonPatterns: ["RPG switch", "Game toggle", "8-bit switch"], whenToUse: ["RPG interfaces", "8-bit UI", "Toggle switches"], whenNotToUse: ["Modern web UI", "Simple switches", "Non-retro designs"], examples: ["RPG setting switch", "Game toggle", "8-bit switch"], relatedComponents: ["switch", "toggle"] },
  { name: "scroll-area", category: "layout", description: "Augments native scroll functionality for custom styling", useCases: ["Game scroll areas", "RPG scroll", "8-bit scroll", "Game content"], commonPatterns: ["RPG scroll", "Game scroll area", "8-bit scroll"], whenToUse: ["RPG interfaces", "8-bit UI", "Scrollable areas"], whenNotToUse: ["Modern web UI", "Simple scroll", "Non-retro designs"], examples: ["RPG scroll area", "Game content", "8-bit scroll"], relatedComponents: ["card", "separator"] },
  { name: "select", category: "form", description: "Displays a list of options for the user to pick from", useCases: ["Game selects", "RPG dropdowns", "8-bit selects", "Game selection"], commonPatterns: ["RPG select", "Game dropdown", "8-bit select"], whenToUse: ["RPG interfaces", "8-bit UI", "Option selection"], whenNotToUse: ["Modern web UI", "Simple selects", "Non-retro designs"], examples: ["RPG option select", "Game dropdown", "8-bit select"], relatedComponents: ["combo-box", "radio-group"] },
  { name: "separator", category: "layout", description: "Visually or semantically separates content", useCases: ["Game separators", "RPG dividers", "8-bit separators", "Game layouts"], commonPatterns: ["RPG separator", "Game divider", "8-bit separator"], whenToUse: ["RPG interfaces", "8-bit UI", "Content separation"], whenNotToUse: ["Modern web UI", "Simple separators", "Non-retro designs"], examples: ["RPG content separator", "Game divider", "8-bit separator"], relatedComponents: ["card", "divider"] },
  { name: "sheet", category: "overlay", description: "Extends the Dialog component to display content that complements the main content", useCases: ["Game sheets", "RPG side panels", "8-bit sheets", "Game panels"], commonPatterns: ["RPG sheet", "Game panel", "8-bit sheet"], whenToUse: ["RPG interfaces", "8-bit UI", "Side panels"], whenNotToUse: ["Modern web UI", "Simple sheets", "Non-retro designs"], examples: ["RPG side panel", "Game sheet", "8-bit sheet"], relatedComponents: ["dialog", "drawer"] },
  { name: "sidebar", category: "layout", description: "Sidebar component", useCases: ["Game sidebars", "RPG sidebars", "8-bit sidebars", "Game navigation"], commonPatterns: ["RPG sidebar", "Game sidebar", "8-bit sidebar"], whenToUse: ["RPG interfaces", "8-bit UI", "Side navigation"], whenNotToUse: ["Modern web UI", "Simple sidebars", "Non-retro designs"], examples: ["RPG navigation sidebar", "Game sidebar", "8-bit sidebar"], relatedComponents: ["sheet", "navigation-menu"] },
  { name: "skeleton", category: "feedback", description: "Use to show a placeholder while content is loading", useCases: ["Game loading", "RPG skeletons", "8-bit loading", "Game placeholders"], commonPatterns: ["RPG skeleton", "Game loading", "8-bit skeleton"], whenToUse: ["RPG interfaces", "8-bit UI", "Loading states"], whenNotToUse: ["Modern web UI", "Simple loading", "Non-retro designs"], examples: ["RPG loading skeleton", "Game placeholder", "8-bit skeleton"], relatedComponents: ["spinner", "progress"] },
  { name: "slider", category: "form", description: "An input where the user selects a value from within a given range", useCases: ["Game sliders", "RPG sliders", "8-bit sliders", "Game controls"], commonPatterns: ["RPG slider", "Game control", "8-bit slider"], whenToUse: ["RPG interfaces", "8-bit UI", "Range selection"], whenNotToUse: ["Modern web UI", "Simple sliders", "Non-retro designs"], examples: ["RPG volume slider", "Game control", "8-bit slider"], relatedComponents: ["input", "select"] },
  { name: "spinner", category: "feedback", description: "Spinner loading component", useCases: ["Game loading", "RPG spinners", "8-bit loading", "Game indicators"], commonPatterns: ["RPG spinner", "Game loading", "8-bit spinner"], whenToUse: ["RPG interfaces", "8-bit UI", "Loading states"], whenNotToUse: ["Modern web UI", "Simple loading", "Non-retro designs"], examples: ["RPG loading spinner", "Game indicator", "8-bit spinner"], relatedComponents: ["skeleton", "progress"] },
  { name: "switch", category: "form", description: "A control that allows the user to toggle between checked and not checked", useCases: ["Game switches", "RPG toggles", "8-bit switches", "Game settings"], commonPatterns: ["RPG switch", "Game toggle", "8-bit switch"], whenToUse: ["RPG interfaces", "8-bit UI", "Toggle switches"], whenNotToUse: ["Modern web UI", "Simple switches", "Non-retro designs"], examples: ["RPG setting switch", "Game toggle", "8-bit switch"], relatedComponents: ["retro-switcher", "toggle"] },
  { name: "table", category: "display", description: "A responsive table component", useCases: ["Game tables", "RPG tables", "8-bit tables", "Game data"], commonPatterns: ["RPG table", "Game data table", "8-bit table"], whenToUse: ["RPG interfaces", "8-bit UI", "Tabular data"], whenNotToUse: ["Modern web UI", "Simple tables", "Non-retro designs"], examples: ["RPG data table", "Game table", "8-bit table"], relatedComponents: ["data-table", "pagination"] },
  { name: "tabs", category: "layout", description: "A set of layered sections of content", useCases: ["Game tabs", "RPG tabs", "8-bit tabs", "Game navigation"], commonPatterns: ["RPG tabs", "Game navigation", "8-bit tabs"], whenToUse: ["RPG interfaces", "8-bit UI", "Tab navigation"], whenNotToUse: ["Modern web UI", "Simple tabs", "Non-retro designs"], examples: ["RPG menu tabs", "Game navigation", "8-bit tabs"], relatedComponents: ["accordion", "navigation-menu"] },
  { name: "textarea", category: "form", description: "Displays a form textarea", useCases: ["Game textareas", "RPG text areas", "8-bit textareas", "Game text input"], commonPatterns: ["RPG textarea", "Game text area", "8-bit textarea"], whenToUse: ["RPG interfaces", "8-bit UI", "Multi-line text"], whenNotToUse: ["Modern web UI", "Simple textareas", "Non-retro designs"], examples: ["RPG text input", "Game textarea", "8-bit textarea"], relatedComponents: ["input", "form"] },
  { name: "theme-selector", category: "form", description: "Theme selector component", useCases: ["Game themes", "RPG theme selection", "8-bit themes", "Game customization"], commonPatterns: ["RPG theme selector", "Game theme", "8-bit theme"], whenToUse: ["RPG interfaces", "8-bit UI", "Theme selection"], whenNotToUse: ["Modern web UI", "Simple selectors", "Non-retro designs"], examples: ["RPG theme picker", "Game theme selector", "8-bit theme"], relatedComponents: ["select", "toggle"] },
  { name: "toast", category: "feedback", description: "A succinct message that is displayed temporarily", useCases: ["Game notifications", "RPG toasts", "8-bit notifications", "Game messages"], commonPatterns: ["RPG toast", "Game notification", "8-bit toast"], whenToUse: ["RPG interfaces", "8-bit UI", "Temporary notifications"], whenNotToUse: ["Modern web UI", "Simple toasts", "Non-retro designs"], examples: ["RPG notification toast", "Game message", "8-bit toast"], relatedComponents: ["alert", "sonner"] },
  { name: "toggle", category: "form", description: "A two-state button that can be either on or off", useCases: ["Game toggles", "RPG toggles", "8-bit toggles", "Game switches"], commonPatterns: ["RPG toggle", "Game switch", "8-bit toggle"], whenToUse: ["RPG interfaces", "8-bit UI", "Toggle states"], whenNotToUse: ["Modern web UI", "Simple toggles", "Non-retro designs"], examples: ["RPG option toggle", "Game switch", "8-bit toggle"], relatedComponents: ["switch", "retro-switcher"] },
  { name: "toggle-group", category: "form", description: "A set of two-state buttons that can be toggled on or off", useCases: ["Game toggle groups", "RPG toggle groups", "8-bit toggles", "Game options"], commonPatterns: ["RPG toggle group", "Game option group", "8-bit toggle group"], whenToUse: ["RPG interfaces", "8-bit UI", "Toggle groups"], whenNotToUse: ["Modern web UI", "Simple toggles", "Non-retro designs"], examples: ["RPG option group", "Game toggle group", "8-bit toggle group"], relatedComponents: ["toggle", "button-group"] },
  { name: "tooltip", category: "overlay", description: "A popup that displays information related to an element", useCases: ["Game tooltips", "RPG tooltips", "8-bit tooltips", "Game information"], commonPatterns: ["RPG tooltip", "Game tooltip", "8-bit tooltip"], whenToUse: ["RPG interfaces", "8-bit UI", "Help text"], whenNotToUse: ["Modern web UI", "Simple tooltips", "Non-retro designs"], examples: ["RPG help tooltip", "Game tooltip", "8-bit tooltip"], relatedComponents: ["popover", "hover-card"] }
];

// Generate resources from all components
export const eightbitResources = allEightbitComponents.map(comp => ({
  uri: `8bit://${comp.name}`,
  name: comp.name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
  description: comp.description,
  mimeType: "text/plain"
}));

// 8bitcn component tools
export const eightbitTools = [
  {
    name: "eightbit_get_component",
    description: "Get an 8bitcn component by name",
    inputSchema: {
      type: "object",
      properties: {
        componentName: {
          type: "string",
          description: "Name of the 8bitcn component to retrieve"
        }
      },
      required: ["componentName"]
    }
  },
  {
    name: "eightbit_list_components",
    description: "List all available 8bitcn components",
    inputSchema: {
      type: "object",
      properties: {
        category: {
          type: "string",
          description: "Optional category filter (form, layout, overlay, display, feedback, navigation, rpg)"
        }
      }
    }
  },
  {
    name: "eightbit_search_components",
    description: "Search 8bitcn components by keyword",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Search query to find components"
        }
      },
      required: ["query"]
    }
  },
  {
    name: "eightbit_get_component_context",
    description: "Get full context and use cases for an 8bitcn component including when to use, patterns, and examples",
    inputSchema: {
      type: "object",
      properties: {
        componentName: {
          type: "string",
          description: "Name of the component to get context for"
        }
      },
      required: ["componentName"]
    }
  }
];

/**
 * Handle 8bitcn tool calls
 */
export async function handleEightbitTool(name, args) {
  switch (name) {
    case "eightbit_get_component": {
      const componentName = args?.componentName;
      if (!componentName) {
        throw new Error("componentName is required");
      }
      
      return {
        content: [
          {
            type: "text",
            text: `// 8bitcn Component: ${componentName}\n` +
                  `// This component is available from 8bitcn\n` +
                  `// Visit https://www.8bitcn.com/docs/components/${componentName} for documentation\n\n` +
                  `// Style Domain: rpg_8bit\n` +
                  `// Preferred Theme: rpg_8bit\n\n` +
                  `// Installation: pnpm dlx shadcn@latest add @8bitcn/${componentName}@8bitcn/${componentName}`
          }
        ]
      };
    }
    
    case "eightbit_list_components": {
      const category = args?.category;
      const filtered = category 
        ? allEightbitComponents.filter(c => c.category === category)
        : allEightbitComponents;
      
      const categories = [...new Set(allEightbitComponents.map(c => c.category))];
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ 
              components: filtered,
              total: allEightbitComponents.length,
              categories: categories,
              filtered: filtered.length,
              styleDomain: "rpg_8bit",
              preferredTheme: "rpg_8bit"
            }, null, 2)
          }
        ]
      };
    }
    
    case "eightbit_search_components": {
      const query = args?.query?.toLowerCase() || "";
      const results = allEightbitComponents.filter(c => {
        const searchText = [
          c.name,
          c.category,
          c.description,
          ...(c.useCases || []),
          ...(c.commonPatterns || []),
          ...(c.examples || [])
        ].join(" ").toLowerCase();
        return searchText.includes(query);
      });
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ 
              results,
              query,
              count: results.length,
              total: allEightbitComponents.length
            }, null, 2)
          }
        ]
      };
    }
    
    case "eightbit_get_component_context": {
      const componentName = args?.componentName;
      if (!componentName) {
        throw new Error("componentName is required");
      }
      
      const component = allEightbitComponents.find(c => c.name === componentName);
      if (!component) {
        throw new Error(`Component ${componentName} not found`);
      }
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              name: component.name,
              category: component.category,
              description: component.description,
              useCases: component.useCases || [],
              commonPatterns: component.commonPatterns || [],
              whenToUse: component.whenToUse || [],
              whenNotToUse: component.whenNotToUse || [],
              examples: component.examples || [],
              relatedComponents: component.relatedComponents || []
            }, null, 2)
          }
        ]
      };
    }
    
    default:
      throw new Error(`Unknown 8bitcn tool: ${name}`);
  }
}

/**
 * Handle 8bitcn resource reads
 */
export async function handleEightbitResource(uri) {
  if (!uri.startsWith("8bit://")) {
    return null;
  }
  
  const componentName = uri.replace("8bit://", "");
  const component = allEightbitComponents.find(c => c.name === componentName);
  
  let contextText = "";
  if (component) {
    contextText = `\n\n// Use Cases:\n${(component.useCases || []).map(uc => `// - ${uc}`).join("\n")}` +
                  `\n\n// Common Patterns:\n${(component.commonPatterns || []).map(p => `// - ${p}`).join("\n")}` +
                  `\n\n// When to Use:\n${(component.whenToUse || []).map(w => `// - ${w}`).join("\n")}` +
                  `\n\n// When NOT to Use:\n${(component.whenNotToUse || []).map(w => `// - ${w}`).join("\n")}` +
                  `\n\n// Examples:\n${(component.examples || []).map(e => `// - ${e}`).join("\n")}` +
                  `\n\n// Related Components: ${(component.relatedComponents || []).join(", ")}`;
  }
  
  return {
    contents: [
      {
        uri,
        mimeType: "text/plain",
        text: `// 8bitcn Component: ${componentName}\n` +
              `// Documentation: https://www.8bitcn.com/docs/components/${componentName}\n` +
              `// Style Domain: rpg_8bit\n` +
              `// Preferred Theme: rpg_8bit\n\n` +
              `// Installation: pnpm dlx shadcn@latest add @8bitcn/${componentName}@8bitcn/${componentName}` +
              contextText
      }
    ]
  };
}
