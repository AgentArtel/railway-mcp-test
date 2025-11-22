/**
 * Shadcn UI MCP Server Provider
 * Integrates shadcn/ui components into the unified MCP server
 */

// Shadcn UI component tools and resources
export const shadcnTools = [
  {
    name: "shadcn_get_component",
    description: "Get a shadcn/ui component by name (e.g., 'button', 'card', 'dialog', 'dropdown-menu')",
    inputSchema: {
      type: "object",
      properties: {
        componentName: {
          type: "string",
          description: "Name of the shadcn/ui component to retrieve"
        }
      },
      required: ["componentName"]
    }
  },
  {
    name: "shadcn_list_components",
    description: "List all available shadcn/ui components",
    inputSchema: {
      type: "object",
      properties: {
        category: {
          type: "string",
          description: "Optional category filter (e.g., 'form', 'overlay', 'layout', 'feedback')"
        }
      }
    }
  },
  {
    name: "shadcn_search_components",
    description: "Search shadcn/ui components by keyword",
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
    name: "shadcn_get_component_code",
    description: "Get the full source code for a shadcn/ui component",
    inputSchema: {
      type: "object",
      properties: {
        componentName: {
          type: "string",
          description: "Name of the component"
        },
        variant: {
          type: "string",
          description: "Optional variant name"
        }
      },
      required: ["componentName"]
    }
  },
  {
    name: "shadcn_get_installation_command",
    description: "Get the CLI command to install a shadcn/ui component",
    inputSchema: {
      type: "object",
      properties: {
        componentName: {
          type: "string",
          description: "Name of the component to install"
        }
      },
      required: ["componentName"]
    }
  },
  {
    name: "shadcn_get_component_context",
    description: "Get full context and use cases for a shadcn/ui component including when to use, patterns, and examples",
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

// All Shadcn UI components from https://ui.shadcn.com/docs/components
// Enhanced with use cases, patterns, and context
const allShadcnComponents = [
  { 
    name: "accordion", 
    category: "layout", 
    description: "A vertically stacked set of interactive headings",
    useCases: ["FAQ sections", "Collapsible content sections", "Settings panels", "Product details"],
    commonPatterns: ["FAQ accordion", "Settings accordion", "Multi-section content"],
    whenToUse: ["Organizing related content", "Space-efficient content display", "Progressive disclosure"],
    whenNotToUse: ["Simple lists (use List)", "Navigation (use Tabs)", "Single expandable (use Collapsible)"],
    examples: ["FAQ page with questions", "Settings page with grouped options", "Product specifications"],
    relatedComponents: ["collapsible", "tabs", "card"]
  },
  { 
    name: "alert-dialog", 
    category: "overlay", 
    description: "A modal dialog that interrupts the user",
    useCases: ["Confirm destructive actions", "Critical confirmations", "Important decisions"],
    commonPatterns: ["Delete confirmation", "Unsaved changes warning", "Action confirmation"],
    whenToUse: ["User must confirm before proceeding", "Destructive actions", "Critical decisions"],
    whenNotToUse: ["Simple notifications (use Toast)", "Non-blocking info (use Alert)", "Quick actions (use Dialog)"],
    examples: ["Delete item confirmation", "Logout confirmation", "Discard changes warning"],
    relatedComponents: ["dialog", "alert", "toast"]
  },
  { 
    name: "alert", 
    category: "feedback", 
    description: "Displays a callout for user attention",
    useCases: ["Success messages", "Error notifications", "Warning messages", "Info callouts"],
    commonPatterns: ["Form validation errors", "Success confirmations", "Warning banners", "Info notices"],
    whenToUse: ["Non-blocking notifications", "Form feedback", "Status messages"],
    whenNotToUse: ["Temporary messages (use Toast)", "Blocking dialogs (use Alert Dialog)", "Tooltips (use Tooltip)"],
    examples: ["Form submission success", "Validation error display", "Warning message"],
    relatedComponents: ["toast", "alert-dialog", "badge"]
  },
  { 
    name: "aspect-ratio", 
    category: "layout", 
    description: "Displays content within a desired ratio",
    useCases: ["Image galleries", "Video embeds", "Responsive media", "Card layouts"],
    commonPatterns: ["16:9 video containers", "1:1 image grids", "4:3 photo galleries"],
    whenToUse: ["Maintaining consistent aspect ratios", "Responsive media containers"],
    whenNotToUse: ["Flexible layouts (use regular divs)", "Text content"],
    examples: ["Video player container", "Image gallery grid", "Product image display"],
    relatedComponents: ["card", "image"]
  },
  { 
    name: "avatar", 
    category: "display", 
    description: "An image element with a fallback for representing the user",
    useCases: ["User profiles", "Comment authors", "Team members", "User lists"],
    commonPatterns: ["Profile picture", "User avatar with fallback", "Avatar groups"],
    whenToUse: ["Displaying user identity", "Profile pictures", "User representation"],
    whenNotToUse: ["General images (use Image)", "Icons (use Icon component)"],
    examples: ["User profile header", "Comment thread avatars", "Team member list"],
    relatedComponents: ["badge", "dropdown-menu"]
  },
  { 
    name: "badge", 
    category: "display", 
    description: "Displays a badge or a component that looks like a badge",
    useCases: ["Status indicators", "Count badges", "Labels", "Tags"],
    commonPatterns: ["Notification badges", "Status badges", "Category tags", "Count indicators"],
    whenToUse: ["Status indicators", "Count displays", "Category labels"],
    whenNotToUse: ["Buttons (use Button)", "Links (use Link with badge)"],
    examples: ["Unread message count", "Status indicator", "Category tag"],
    relatedComponents: ["button", "avatar"]
  },
  { 
    name: "breadcrumb", 
    category: "navigation", 
    description: "Displays the path to the current resource",
    useCases: ["Site navigation", "File paths", "Category navigation", "Hierarchical navigation"],
    commonPatterns: ["Page hierarchy", "Category breadcrumbs", "File path display"],
    whenToUse: ["Showing navigation hierarchy", "Deep page structures", "Category navigation"],
    whenNotToUse: ["Shallow navigation (use Tabs)", "Simple links (use Navigation Menu)"],
    examples: ["Home > Products > Category > Item", "File browser path", "Category navigation"],
    relatedComponents: ["navigation-menu", "tabs"]
  },
  { 
    name: "button-group", 
    category: "form", 
    description: "A group of buttons",
    useCases: ["Related actions", "Toggle groups", "Action sets", "Toolbars"],
    commonPatterns: ["Save/Cancel buttons", "View toggle buttons", "Action toolbar"],
    whenToUse: ["Grouping related buttons", "Toolbar actions", "Toggle groups"],
    whenNotToUse: ["Single buttons (use Button)", "Navigation (use Navigation Menu)"],
    examples: ["Form action buttons", "View mode toggle", "Toolbar button group"],
    relatedComponents: ["button", "toggle-group"]
  },
  { 
    name: "button", 
    category: "form", 
    description: "Displays a button or a component that looks like a button",
    useCases: ["Submit forms", "Trigger actions", "Navigate to pages", "Confirm or cancel operations"],
    commonPatterns: ["Primary action buttons (solid, prominent)", "Secondary buttons (outline style)", "Destructive actions (red variant)", "Icon buttons (icon-only)"],
    whenToUse: ["User needs to trigger an action", "Form submission", "Navigation to another page", "Opening modals or dialogs"],
    whenNotToUse: ["For navigation links (use Link component instead)", "For toggle states (use Switch or Toggle)", "For simple text actions (use clickable text)"],
    examples: ["Login form submit button", "Delete confirmation button", "Add to cart button", "Save changes button"],
    relatedComponents: ["link", "toggle", "switch", "icon-button"]
  },
  { 
    name: "calendar", 
    category: "form", 
    description: "A date field component",
    useCases: ["Date selection", "Date range pickers", "Event scheduling", "Booking systems"],
    commonPatterns: ["Single date picker", "Date range selector", "Event calendar"],
    whenToUse: ["Date input", "Scheduling", "Date-based filtering"],
    whenNotToUse: ["Time selection only (use TimePicker)", "Simple text input"],
    examples: ["Appointment booking", "Date range filter", "Event date selection"],
    relatedComponents: ["date-picker", "popover"]
  },
  { 
    name: "card", 
    category: "layout", 
    description: "Displays a card with header, content, and footer",
    useCases: ["Product cards", "Content containers", "Dashboard widgets", "Article previews"],
    commonPatterns: ["Product card", "Article card", "Dashboard card", "Profile card"],
    whenToUse: ["Grouping related content", "Content containers", "Dashboard layouts"],
    whenNotToUse: ["Simple containers (use div)", "Lists (use List component)"],
    examples: ["Product listing card", "Blog post preview", "Dashboard widget"],
    relatedComponents: ["separator", "badge", "button"]
  },
  { 
    name: "carousel", 
    category: "display", 
    description: "A carousel with motion and swipe built using Embla",
    useCases: ["Image galleries", "Testimonials", "Product showcases", "Feature highlights"],
    commonPatterns: ["Image carousel", "Testimonial slider", "Product carousel"],
    whenToUse: ["Multiple items in limited space", "Image galleries", "Content sliders"],
    whenNotToUse: ["Static content (use Grid)", "Simple lists (use List)"],
    examples: ["Product image gallery", "Customer testimonials", "Feature showcase"],
    relatedComponents: ["tabs", "scroll-area"]
  },
  { 
    name: "chart", 
    category: "display", 
    description: "Chart components built with Recharts",
    useCases: ["Data visualization", "Analytics dashboards", "Reports", "Statistics"],
    commonPatterns: ["Line charts", "Bar charts", "Pie charts", "Area charts"],
    whenToUse: ["Data visualization", "Analytics", "Reporting"],
    whenNotToUse: ["Simple numbers (use Text)", "Tables (use Table)"],
    examples: ["Sales analytics chart", "User growth graph", "Revenue report"],
    relatedComponents: ["table", "card"]
  },
  { 
    name: "checkbox", 
    category: "form", 
    description: "A control that allows the user to toggle between checked and not checked",
    useCases: ["Multiple selections", "Agreement checkboxes", "Feature toggles", "Filter options"],
    commonPatterns: ["Multi-select lists", "Terms agreement", "Feature checklist", "Filter checkboxes"],
    whenToUse: ["Multiple selections", "Binary options", "Agreements"],
    whenNotToUse: ["Single selection (use Radio)", "Toggle switches (use Switch)"],
    examples: ["Terms and conditions checkbox", "Multi-select list", "Filter options"],
    relatedComponents: ["radio-group", "switch", "form"]
  },
  { 
    name: "collapsible", 
    category: "layout", 
    description: "An interactive component which expands/collapses a panel",
    useCases: ["Expandable sections", "Hide/show content", "Mobile menus", "Details sections"],
    commonPatterns: ["Expandable content", "Mobile navigation", "Details panel"],
    whenToUse: ["Expandable content", "Space-saving layouts"],
    whenNotToUse: ["Multiple sections (use Accordion)", "Navigation (use Navigation Menu)"],
    examples: ["Expandable FAQ item", "Mobile menu", "Details section"],
    relatedComponents: ["accordion", "sheet"]
  },
  { 
    name: "combobox", 
    category: "form", 
    description: "Combobox component for autocomplete",
    useCases: ["Searchable selects", "Autocomplete inputs", "Tag selection", "Search with suggestions"],
    commonPatterns: ["Searchable dropdown", "Autocomplete search", "Tag input"],
    whenToUse: ["Searchable selection", "Autocomplete", "Large option lists"],
    whenNotToUse: ["Simple selects (use Select)", "Text input (use Input)"],
    examples: ["Country selector with search", "Tag autocomplete", "Product search"],
    relatedComponents: ["select", "input", "command"]
  },
  { 
    name: "command", 
    category: "navigation", 
    description: "Command palette component",
    useCases: ["Keyboard navigation", "Quick actions", "Search interface", "Command palette"],
    commonPatterns: ["Cmd+K palette", "Quick search", "Action palette"],
    whenToUse: ["Keyboard-driven navigation", "Quick actions", "Search interface"],
    whenNotToUse: ["Simple search (use Input)", "Menus (use Menu)"],
    examples: ["VS Code command palette", "Quick action menu", "Search interface"],
    relatedComponents: ["popover", "dialog"]
  },
  { 
    name: "context-menu", 
    category: "overlay", 
    description: "Displays a menu to the user",
    useCases: ["Right-click menus", "Context actions", "Item actions", "Row actions"],
    commonPatterns: ["Right-click menu", "Table row menu", "Item context menu"],
    whenToUse: ["Context-specific actions", "Right-click menus"],
    whenNotToUse: ["Primary navigation (use Navigation Menu)", "Dropdowns (use Dropdown Menu)"],
    examples: ["Table row right-click menu", "File context menu", "Item actions"],
    relatedComponents: ["dropdown-menu", "menubar"]
  },
  { 
    name: "data-table", 
    category: "display", 
    description: "A data table component with sorting and filtering",
    useCases: ["Data grids", "Admin tables", "Sortable lists", "Filterable data"],
    commonPatterns: ["Sortable table", "Filterable table", "Paginated table"],
    whenToUse: ["Tabular data", "Sortable/filterable data", "Data grids"],
    whenNotToUse: ["Simple lists (use List)", "Simple tables (use Table)"],
    examples: ["User management table", "Product inventory", "Order history"],
    relatedComponents: ["table", "pagination", "select"]
  },
  { 
    name: "date-picker", 
    category: "form", 
    description: "A date picker component",
    useCases: ["Date selection", "Date inputs", "Scheduling", "Booking"],
    commonPatterns: ["Single date picker", "Date range picker", "Calendar popup"],
    whenToUse: ["Date input", "Date selection"],
    whenNotToUse: ["Time only (use TimePicker)", "Simple date (use Input)"],
    examples: ["Appointment date", "Birthday picker", "Date range filter"],
    relatedComponents: ["calendar", "popover", "input"]
  },
  { 
    name: "dialog", 
    category: "overlay", 
    description: "A window overlaid on either the primary window or another dialog",
    useCases: ["Confirm destructive actions", "Display detailed information", "Collect user input in a focused context", "Show alerts or notifications"],
    commonPatterns: ["Confirmation dialogs (Yes/No)", "Form dialogs (collect data)", "Information dialogs (read-only)", "Multi-step wizards"],
    whenToUse: ["User needs to confirm an action", "Displaying critical information", "Collecting focused input", "Interrupting workflow for attention"],
    whenNotToUse: ["Simple notifications (use Toast)", "Non-blocking information (use Popover)", "Navigation (use Sheet or Drawer)", "Quick actions (use Dropdown Menu)"],
    examples: ["Delete confirmation: 'Are you sure you want to delete this item?'", "Edit form: Modal with form fields", "Error display: 'Something went wrong'", "Image preview: Full-screen image viewer"],
    relatedComponents: ["alert-dialog", "sheet", "drawer", "popover"]
  },
  { 
    name: "drawer", 
    category: "overlay", 
    description: "A drawer component for mobile",
    useCases: ["Mobile navigation", "Side panels", "Mobile menus", "Slide-out content"],
    commonPatterns: ["Mobile navigation drawer", "Settings drawer", "Cart drawer"],
    whenToUse: ["Mobile interfaces", "Slide-out panels", "Mobile navigation"],
    whenNotToUse: ["Desktop modals (use Dialog)", "Desktop sidebars (use Sheet)"],
    examples: ["Mobile navigation menu", "Shopping cart drawer", "Settings panel"],
    relatedComponents: ["sheet", "dialog", "sidebar"]
  },
  { 
    name: "dropdown-menu", 
    category: "overlay", 
    description: "Displays a menu to the user — such as a set of actions or functions",
    useCases: ["Action menus", "User menus", "Item actions", "Toolbar menus"],
    commonPatterns: ["User account menu", "Action dropdown", "Toolbar menu"],
    whenToUse: ["Action menus", "User menus", "Dropdown actions"],
    whenNotToUse: ["Navigation (use Navigation Menu)", "Context menus (use Context Menu)"],
    examples: ["User profile menu", "Action button dropdown", "Toolbar menu"],
    relatedComponents: ["context-menu", "menubar", "popover"]
  },
  { 
    name: "empty", 
    category: "display", 
    description: "Displays an empty state",
    useCases: ["Empty lists", "No results", "Empty states", "Placeholder content"],
    commonPatterns: ["Empty list state", "No search results", "Empty cart"],
    whenToUse: ["Empty data states", "No results", "Placeholder content"],
    whenNotToUse: ["Loading states (use Skeleton)", "Error states (use Alert)"],
    examples: ["Empty shopping cart", "No search results", "Empty inbox"],
    relatedComponents: ["skeleton", "alert"]
  },
  { 
    name: "field", 
    category: "form", 
    description: "A form field component",
    useCases: ["Form inputs", "Form validation", "Field groups", "Form sections"],
    commonPatterns: ["Form field with label", "Validated field", "Field group"],
    whenToUse: ["Form inputs", "Field validation"],
    whenNotToUse: ["Simple inputs (use Input)", "Standalone fields"],
    examples: ["Email input field", "Password field", "Form section"],
    relatedComponents: ["input", "label", "form"]
  },
  { 
    name: "form", 
    category: "form", 
    description: "Form component built on top of React Hook Form",
    useCases: ["User registration", "Contact forms", "Settings forms", "Data entry"],
    commonPatterns: ["Registration form", "Contact form", "Settings form"],
    whenToUse: ["Form submissions", "Data collection", "User input"],
    whenNotToUse: ["Simple inputs (use Input)", "Search (use Input)"],
    examples: ["Login form", "Contact form", "User settings"],
    relatedComponents: ["input", "button", "select", "checkbox"]
  },
  { 
    name: "hover-card", 
    category: "overlay", 
    description: "For sighted users to preview content available behind a link",
    useCases: ["User previews", "Link previews", "Hover information", "Quick details"],
    commonPatterns: ["User profile preview", "Link preview card", "Hover details"],
    whenToUse: ["Hover information", "Preview content", "Non-blocking details"],
    whenNotToUse: ["Click actions (use Popover)", "Persistent info (use Card)"],
    examples: ["User profile hover", "Link preview", "Product hover card"],
    relatedComponents: ["popover", "card", "tooltip"]
  },
  { 
    name: "input-group", 
    category: "form", 
    description: "A group of inputs",
    useCases: ["Related inputs", "Input combinations", "Form sections", "Input groups"],
    commonPatterns: ["Search with button", "Input with icon", "Grouped fields"],
    whenToUse: ["Grouping related inputs", "Input combinations"],
    whenNotToUse: ["Single inputs (use Input)", "Separate fields"],
    examples: ["Search bar with button", "Currency input", "Input with icon"],
    relatedComponents: ["input", "button"]
  },
  { 
    name: "input-otp", 
    category: "form", 
    description: "Input component for one-time passwords",
    useCases: ["2FA codes", "Verification codes", "OTP input", "PIN entry"],
    commonPatterns: ["2FA code input", "Verification code", "PIN pad"],
    whenToUse: ["OTP codes", "Verification", "PIN entry"],
    whenNotToUse: ["Regular text (use Input)", "Passwords (use Input type password)"],
    examples: ["2FA code input", "Email verification", "PIN entry"],
    relatedComponents: ["input", "form"]
  },
  { 
    name: "input", 
    category: "form", 
    description: "Displays a form input field or a component that looks like an input field",
    useCases: ["Text input", "Form fields", "Search inputs", "Data entry"],
    commonPatterns: ["Text input", "Email input", "Password input", "Search input"],
    whenToUse: ["Text input", "Form fields", "Data entry"],
    whenNotToUse: ["Rich text (use Textarea)", "Selection (use Select)", "Dates (use Date Picker)"],
    examples: ["Email input", "Search bar", "Name input"],
    relatedComponents: ["textarea", "select", "label"]
  },
  { 
    name: "item", 
    category: "display", 
    description: "Item component",
    useCases: ["List items", "Menu items", "Selectable items", "Item containers"],
    commonPatterns: ["List item", "Menu item", "Selectable item"],
    whenToUse: ["List items", "Menu items"],
    whenNotToUse: ["Standalone content (use Card)", "Simple divs"],
    examples: ["Navigation item", "List item", "Menu option"],
    relatedComponents: ["list", "menu"]
  },
  { 
    name: "kbd", 
    category: "display", 
    description: "Keyboard key component",
    useCases: ["Keyboard shortcuts", "Key indicators", "Shortcut display", "Help text"],
    commonPatterns: ["Keyboard shortcut display", "Key combination", "Shortcut help"],
    whenToUse: ["Keyboard shortcuts", "Key indicators"],
    whenNotToUse: ["Regular text", "Buttons"],
    examples: ["Ctrl+K shortcut", "Keyboard help", "Shortcut indicator"],
    relatedComponents: ["tooltip", "command"]
  },
  { 
    name: "label", 
    category: "form", 
    description: "Renders an accessible label associated with controls",
    useCases: ["Form labels", "Input labels", "Accessible forms", "Field labels"],
    commonPatterns: ["Input label", "Form field label", "Required field label"],
    whenToUse: ["Form labels", "Input labels", "Accessibility"],
    whenNotToUse: ["Headings (use Heading)", "Text (use Text)"],
    examples: ["Email label", "Password label", "Form field label"],
    relatedComponents: ["input", "form", "field"]
  },
  { 
    name: "menubar", 
    category: "navigation", 
    description: "A visually persistent menu common in desktop applications",
    useCases: ["Desktop menus", "Application menus", "Menu bars", "Persistent navigation"],
    commonPatterns: ["Desktop app menu", "Application menu bar", "Persistent menu"],
    whenToUse: ["Desktop applications", "Persistent menus"],
    whenNotToUse: ["Web navigation (use Navigation Menu)", "Mobile (use Drawer)"],
    examples: ["Desktop app menu", "Application menu bar"],
    relatedComponents: ["navigation-menu", "dropdown-menu"]
  },
  { 
    name: "native-select", 
    category: "form", 
    description: "A native select component",
    useCases: ["Simple selects", "Native dropdowns", "Basic selection"],
    commonPatterns: ["Simple dropdown", "Native select"],
    whenToUse: ["Simple selection", "Native behavior"],
    whenNotToUse: ["Searchable (use Select or Combobox)", "Custom styling needed"],
    examples: ["Country selector", "Simple dropdown"],
    relatedComponents: ["select", "combobox"]
  },
  { 
    name: "navigation-menu", 
    category: "navigation", 
    description: "A collection of links for navigating websites",
    useCases: ["Site navigation", "Main menus", "Header navigation", "Navigation bars"],
    commonPatterns: ["Header navigation", "Main menu", "Site navigation"],
    whenToUse: ["Primary navigation", "Site menus"],
    whenNotToUse: ["Action menus (use Dropdown Menu)", "Mobile (use Drawer)"],
    examples: ["Header navigation", "Main site menu", "Navigation bar"],
    relatedComponents: ["menubar", "breadcrumb"]
  },
  { 
    name: "pagination", 
    category: "navigation", 
    description: "Pagination component",
    useCases: ["Page navigation", "List pagination", "Table pagination", "Content pagination"],
    commonPatterns: ["Page numbers", "Previous/Next", "Table pagination"],
    whenToUse: ["Paginated content", "Large lists", "Table navigation"],
    whenNotToUse: ["Infinite scroll", "Small lists"],
    examples: ["Blog pagination", "Table pagination", "List pagination"],
    relatedComponents: ["table", "data-table"]
  },
  { 
    name: "popover", 
    category: "overlay", 
    description: "Displays rich content in a portal",
    useCases: ["Non-blocking information", "Additional details", "Contextual help", "Rich tooltips"],
    commonPatterns: ["Info popover", "Help popover", "Details popover"],
    whenToUse: ["Non-blocking information", "Contextual help"],
    whenNotToUse: ["Blocking dialogs (use Dialog)", "Simple tooltips (use Tooltip)"],
    examples: ["Help information", "Additional details", "Contextual help"],
    relatedComponents: ["tooltip", "dialog", "hover-card"]
  },
  { 
    name: "progress", 
    category: "feedback", 
    description: "Displays an indicator showing the completion progress of a task",
    useCases: ["Upload progress", "Form completion", "Loading progress", "Task progress"],
    commonPatterns: ["Progress bar", "Circular progress", "Step progress"],
    whenToUse: ["Progress indication", "Loading states", "Task completion"],
    whenNotToUse: ["Indeterminate loading (use Spinner)", "Simple loading (use Skeleton)"],
    examples: ["File upload progress", "Form completion", "Task progress"],
    relatedComponents: ["skeleton", "spinner"]
  },
  { 
    name: "radio-group", 
    category: "form", 
    description: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked",
    useCases: ["Single selection", "Option groups", "Settings selection", "Choice selection"],
    commonPatterns: ["Single choice", "Option group", "Settings radio"],
    whenToUse: ["Single selection", "Mutually exclusive options"],
    whenNotToUse: ["Multiple selection (use Checkbox)", "Toggle (use Switch)"],
    examples: ["Payment method selection", "Theme selection", "Option choice"],
    relatedComponents: ["checkbox", "select", "toggle"]
  },
  { 
    name: "resizable", 
    category: "layout", 
    description: "Accessible resizable panel groups and layouts",
    useCases: ["Resizable panels", "Split views", "Adjustable layouts", "Panel groups"],
    commonPatterns: ["Split pane", "Resizable sidebar", "Adjustable panels"],
    whenToUse: ["Resizable layouts", "Split views"],
    whenNotToUse: ["Fixed layouts", "Simple containers"],
    examples: ["Code editor split view", "Resizable sidebar", "Panel layout"],
    relatedComponents: ["sidebar", "separator"]
  },
  { 
    name: "scroll-area", 
    category: "layout", 
    description: "Augments native scroll functionality for custom styling",
    useCases: ["Custom scrollbars", "Scrollable containers", "Styled scrolling", "Scroll areas"],
    commonPatterns: ["Custom scrollbar", "Scrollable container", "Styled scroll"],
    whenToUse: ["Custom scroll styling", "Scrollable areas"],
    whenNotToUse: ["Native scroll is fine", "Simple containers"],
    examples: ["Custom scrollbar", "Scrollable content area"],
    relatedComponents: ["card", "separator"]
  },
  { 
    name: "select", 
    category: "form", 
    description: "Displays a list of options for the user to pick from",
    useCases: ["Dropdown selection", "Option selection", "Form dropdowns", "Choice selection"],
    commonPatterns: ["Dropdown select", "Form select", "Option dropdown"],
    whenToUse: ["Selection from options", "Form dropdowns"],
    whenNotToUse: ["Searchable (use Combobox)", "Single toggle (use Switch)"],
    examples: ["Country selector", "Category dropdown", "Form select"],
    relatedComponents: ["combobox", "radio-group", "native-select"]
  },
  { 
    name: "separator", 
    category: "layout", 
    description: "Visually or semantically separates content",
    useCases: ["Content separation", "Visual dividers", "Section dividers", "List separators"],
    commonPatterns: ["Horizontal divider", "Vertical separator", "Section divider"],
    whenToUse: ["Content separation", "Visual organization"],
    whenNotToUse: ["Spacing (use margin/padding)", "Borders (use border)"],
    examples: ["Section divider", "List separator", "Content divider"],
    relatedComponents: ["card", "divider"]
  },
  { 
    name: "sheet", 
    category: "overlay", 
    description: "Extends the Dialog component to display content that complements the main content",
    useCases: ["Side panels", "Mobile sheets", "Slide-out panels", "Side navigation"],
    commonPatterns: ["Side panel", "Mobile sheet", "Settings panel"],
    whenToUse: ["Side panels", "Mobile interfaces", "Slide-out content"],
    whenNotToUse: ["Center modals (use Dialog)", "Mobile drawers (use Drawer)"],
    examples: ["Settings side panel", "Mobile menu sheet", "Side navigation"],
    relatedComponents: ["dialog", "drawer", "sidebar"]
  },
  { 
    name: "sidebar", 
    category: "layout", 
    description: "Sidebar component",
    useCases: ["Navigation sidebar", "Dashboard sidebar", "Persistent sidebar", "App sidebar"],
    commonPatterns: ["Navigation sidebar", "Dashboard sidebar", "App sidebar"],
    whenToUse: ["Persistent side navigation", "Dashboard layouts"],
    whenNotToUse: ["Temporary panels (use Sheet)", "Mobile (use Drawer)"],
    examples: ["Dashboard sidebar", "App navigation", "Settings sidebar"],
    relatedComponents: ["sheet", "navigation-menu"]
  },
  { 
    name: "skeleton", 
    category: "feedback", 
    description: "Use to show a placeholder while content is loading",
    useCases: ["Loading states", "Content placeholders", "Loading indicators", "Placeholder content"],
    commonPatterns: ["Card skeleton", "List skeleton", "Text skeleton"],
    whenToUse: ["Loading states", "Content placeholders"],
    whenNotToUse: ["Progress (use Progress)", "Spinners (use Spinner)"],
    examples: ["Card loading skeleton", "List placeholder", "Content skeleton"],
    relatedComponents: ["spinner", "progress"]
  },
  { 
    name: "slider", 
    category: "form", 
    description: "An input where the user selects a value from within a given range",
    useCases: ["Range selection", "Volume control", "Price filters", "Numeric input"],
    commonPatterns: ["Range slider", "Volume slider", "Price range"],
    whenToUse: ["Range selection", "Numeric input", "Filters"],
    whenNotToUse: ["Discrete values (use Select)", "Text input (use Input)"],
    examples: ["Price range filter", "Volume control", "Range selector"],
    relatedComponents: ["input", "select"]
  },
  { 
    name: "sonner", 
    category: "feedback", 
    description: "Toast notifications (Sonner)",
    useCases: ["Success notifications", "Error messages", "Temporary alerts", "Toast messages"],
    commonPatterns: ["Success toast", "Error toast", "Info toast"],
    whenToUse: ["Temporary notifications", "Non-blocking messages"],
    whenNotToUse: ["Persistent alerts (use Alert)", "Blocking (use Dialog)"],
    examples: ["Success message", "Error notification", "Info toast"],
    relatedComponents: ["toast", "alert"]
  },
  { 
    name: "spinner", 
    category: "feedback", 
    description: "Spinner loading component",
    useCases: ["Loading indicators", "Async operations", "Button loading", "Page loading"],
    commonPatterns: ["Button spinner", "Page spinner", "Loading spinner"],
    whenToUse: ["Loading states", "Async operations"],
    whenNotToUse: ["Progress (use Progress)", "Skeletons (use Skeleton)"],
    examples: ["Button loading", "Page loading", "Async operation"],
    relatedComponents: ["skeleton", "progress"]
  },
  { 
    name: "switch", 
    category: "form", 
    description: "A control that allows the user to toggle between checked and not checked",
    useCases: ["Toggle settings", "Feature toggles", "On/off switches", "Boolean inputs"],
    commonPatterns: ["Settings toggle", "Feature switch", "On/off control"],
    whenToUse: ["Toggle states", "On/off controls", "Boolean settings"],
    whenNotToUse: ["Multiple options (use Select)", "Single choice (use Radio)"],
    examples: ["Dark mode toggle", "Notification switch", "Feature toggle"],
    relatedComponents: ["checkbox", "toggle", "radio-group"]
  },
  { 
    name: "table", 
    category: "display", 
    description: "A responsive table component",
    useCases: ["Data display", "Tabular data", "Data grids", "Information tables"],
    commonPatterns: ["Data table", "Info table", "Simple table"],
    whenToUse: ["Tabular data", "Data display"],
    whenNotToUse: ["Complex data (use Data Table)", "Lists (use List)"],
    examples: ["User table", "Product table", "Data display"],
    relatedComponents: ["data-table", "pagination"]
  },
  { 
    name: "tabs", 
    category: "layout", 
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time",
    useCases: ["Content organization", "Section navigation", "Tabbed interfaces", "Multi-section content"],
    commonPatterns: ["Tabbed content", "Section tabs", "Navigation tabs"],
    whenToUse: ["Organizing content", "Section navigation"],
    whenNotToUse: ["Accordions (use Accordion)", "Simple navigation (use Navigation Menu)"],
    examples: ["Settings tabs", "Content tabs", "Section navigation"],
    relatedComponents: ["accordion", "navigation-menu"]
  },
  { 
    name: "textarea", 
    category: "form", 
    description: "Displays a form textarea or a component that looks like a textarea",
    useCases: ["Multi-line text input", "Comments", "Descriptions", "Long text input"],
    commonPatterns: ["Comment textarea", "Description field", "Multi-line input"],
    whenToUse: ["Multi-line text", "Long text input"],
    whenNotToUse: ["Single line (use Input)", "Rich text (use Rich Text Editor)"],
    examples: ["Comment box", "Description field", "Message input"],
    relatedComponents: ["input", "form"]
  },
  { 
    name: "toast", 
    category: "feedback", 
    description: "A succinct message that is displayed temporarily",
    useCases: ["Success messages", "Error notifications", "Temporary alerts", "Action feedback"],
    commonPatterns: ["Success toast", "Error toast", "Info notification"],
    whenToUse: ["Temporary notifications", "Action feedback"],
    whenNotToUse: ["Persistent alerts (use Alert)", "Blocking (use Dialog)"],
    examples: ["Save success", "Error message", "Action confirmation"],
    relatedComponents: ["alert", "sonner"]
  },
  { 
    name: "toggle-group", 
    category: "form", 
    description: "A set of two-state buttons that can be toggled on or off",
    useCases: ["View toggles", "Option groups", "Multi-toggle", "Toggle sets"],
    commonPatterns: ["View mode toggle", "Option toggle group", "Multi-select toggle"],
    whenToUse: ["Toggle groups", "Multiple toggles"],
    whenNotToUse: ["Single toggle (use Toggle)", "Radio selection (use Radio Group)"],
    examples: ["View mode toggle", "Filter toggle group", "Option toggles"],
    relatedComponents: ["toggle", "radio-group", "button-group"]
  },
  { 
    name: "toggle", 
    category: "form", 
    description: "A two-state button that can be either on or off",
    useCases: ["Toggle buttons", "State toggles", "Option toggles", "Button toggles"],
    commonPatterns: ["Toggle button", "State toggle", "Option toggle"],
    whenToUse: ["Toggle states", "Button toggles"],
    whenNotToUse: ["Switches (use Switch)", "Checkboxes (use Checkbox)"],
    examples: ["Bold toggle", "View toggle", "Option toggle"],
    relatedComponents: ["switch", "button", "toggle-group"]
  },
  { 
    name: "tooltip", 
    category: "overlay", 
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it",
    useCases: ["Help text", "Additional information", "Hover hints", "Contextual help"],
    commonPatterns: ["Help tooltip", "Info tooltip", "Hover hint"],
    whenToUse: ["Additional information", "Help text", "Hover hints"],
    whenNotToUse: ["Rich content (use Popover)", "Click actions (use Popover)"],
    examples: ["Button help text", "Icon explanation", "Field hint"],
    relatedComponents: ["popover", "hover-card"]
  },
  { 
    name: "typography", 
    category: "display", 
    description: "Typography component",
    useCases: ["Text styling", "Headings", "Body text", "Text components"],
    commonPatterns: ["Heading styles", "Body text", "Text variants"],
    whenToUse: ["Text styling", "Typography"],
    whenNotToUse: ["Simple text (use regular elements)", "Rich text (use Rich Text)"],
    examples: ["Page headings", "Body text", "Text styling"],
    relatedComponents: ["text", "heading"]
  }
];

// Generate resources from all components
export const shadcnResources = allShadcnComponents.map(comp => ({
  uri: `shadcn://${comp.name}`,
  name: comp.name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
  description: comp.description,
  mimeType: "text/plain"
}));

// Shadcn components organized by category (for backward compatibility)
const shadcnComponents = {
  form: allShadcnComponents.filter(c => c.category === "form").map(c => ({ name: c.name, description: c.description })),
  overlay: allShadcnComponents.filter(c => c.category === "overlay").map(c => ({ name: c.name, description: c.description })),
  layout: allShadcnComponents.filter(c => c.category === "layout").map(c => ({ name: c.name, description: c.description })),
  feedback: allShadcnComponents.filter(c => c.category === "feedback").map(c => ({ name: c.name, description: c.description })),
  display: allShadcnComponents.filter(c => c.category === "display").map(c => ({ name: c.name, description: c.description })),
  navigation: allShadcnComponents.filter(c => c.category === "navigation").map(c => ({ name: c.name, description: c.description }))
};

/**
 * Handle Shadcn UI tool calls
 */
export async function handleShadcnTool(name, args) {
  switch (name) {
    case "shadcn_get_component": {
      const componentName = args?.componentName;
      if (!componentName) {
        throw new Error("componentName is required");
      }
      
      // In production, fetch from shadcn's actual component library
      return {
        content: [
          {
            type: "text",
            text: `// Shadcn UI Component: ${componentName}\n` +
                  `// This component is available from shadcn/ui\n` +
                  `// Visit https://ui.shadcn.com/docs/components/${componentName} for documentation\n\n` +
                  `// Installation: npx shadcn@latest add ${componentName}\n` +
                  `// Usage: import { ${componentName.charAt(0).toUpperCase() + componentName.slice(1)} } from '@/components/ui/${componentName}'`
          }
        ]
      };
    }
    
    case "shadcn_list_components": {
      const category = args?.category;
      const filtered = category 
        ? allShadcnComponents.filter(c => c.category === category)
        : allShadcnComponents;
      
      const categories = [...new Set(allShadcnComponents.map(c => c.category))];
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ 
              components: filtered,
              total: allShadcnComponents.length,
              categories: categories,
              filtered: filtered.length
            }, null, 2)
          }
        ]
      };
    }
    
    case "shadcn_search_components": {
      const query = args?.query?.toLowerCase() || "";
      const results = allShadcnComponents.filter(c => {
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
              total: allShadcnComponents.length
            }, null, 2)
          }
        ]
      };
    }
    
    case "shadcn_get_component_context": {
      const componentName = args?.componentName;
      if (!componentName) {
        throw new Error("componentName is required");
      }
      
      const component = allShadcnComponents.find(c => c.name === componentName);
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
    
    case "shadcn_get_component_code": {
      const componentName = args?.componentName;
      if (!componentName) {
        throw new Error("componentName is required");
      }
      
      // In production, fetch actual component code from shadcn
      return {
        content: [
          {
            type: "text",
            text: `// Shadcn UI Component: ${componentName}\n` +
                  `// Full source code available at: https://ui.shadcn.com/docs/components/${componentName}\n\n` +
                  `// To get the actual code, run: npx shadcn@latest add ${componentName}\n` +
                  `// Or visit: https://ui.shadcn.com/docs/components/${componentName}\n\n` +
                  `// This will add the component to your components/ui directory`
          }
        ]
      };
    }
    
    case "shadcn_get_installation_command": {
      const componentName = args?.componentName;
      if (!componentName) {
        throw new Error("componentName is required");
      }
      
      return {
        content: [
          {
            type: "text",
            text: `To install the ${componentName} component from shadcn/ui, run:\n\n` +
                  `npx shadcn@latest add ${componentName}\n\n` +
                  `This will add the component to your project's components/ui directory.`
          }
        ]
      };
    }
    
    default:
      throw new Error(`Unknown Shadcn UI tool: ${name}`);
  }
}

/**
 * Handle Shadcn UI resource reads
 */
export async function handleShadcnResource(uri) {
  if (!uri.startsWith("shadcn://")) {
    return null;
  }
  
  const componentName = uri.replace("shadcn://", "");
  const component = allShadcnComponents.find(c => c.name === componentName);
  
  let contextText = "";
  if (component) {
    contextText = `\n\n// Use Cases:\n${(component.useCases || []).map(uc => `// - ${uc}`).join("\n")}` +
                  `\n\n// Common Patterns:\n${(component.commonPatterns || []).map(p => `// - ${p}`).join("\n")}` +
                  `\n\n// When to Use:\n${(component.whenToUse || []).map(w => `// - ${w}`).join("\n")}` +
                  `\n\n// When NOT to Use:\n${(component.whenNotToUse || []).map(w => `// - ${w}`).join("\n")}` +
                  `\n\n// Examples:\n${(component.examples || []).map(e => `// - ${e}`).join("\n")}` +
                  `\n\n// Related Components: ${(component.relatedComponents || []).join(", ")}`;
  }
  
  // In production, fetch actual component code from shadcn
  return {
    contents: [
      {
        uri,
        mimeType: "text/plain",
        text: `// Shadcn UI Component: ${componentName}\n` +
              `// Documentation: https://ui.shadcn.com/docs/components/${componentName}\n` +
              `// Installation: npx shadcn@latest add ${componentName}\n\n` +
              `// The component will be added to: components/ui/${componentName}.tsx\n` +
              `// Import it with: import { ${componentName.charAt(0).toUpperCase() + componentName.slice(1)} } from '@/components/ui/${componentName}'` +
              contextText
      }
    ]
  };
}

