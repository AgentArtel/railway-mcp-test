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
  }
];

// Shadcn UI component resources
export const shadcnResources = [
  {
    uri: "shadcn://button",
    name: "Button Component",
    description: "Displays a button or a component that looks like a button",
    mimeType: "text/plain"
  },
  {
    uri: "shadcn://card",
    name: "Card Component",
    description: "Displays a card with header, content, and footer",
    mimeType: "text/plain"
  },
  {
    uri: "shadcn://dialog",
    name: "Dialog Component",
    description: "A window overlaid on either the primary window or another dialog",
    mimeType: "text/plain"
  },
  {
    uri: "shadcn://dropdown-menu",
    name: "Dropdown Menu",
    description: "Displays a menu to the user — such as a set of actions or functions",
    mimeType: "text/plain"
  },
  {
    uri: "shadcn://input",
    name: "Input Component",
    description: "Displays a form input field or a component that looks like an input field",
    mimeType: "text/plain"
  },
  {
    uri: "shadcn://label",
    name: "Label Component",
    description: "Renders an accessible label associated with controls",
    mimeType: "text/plain"
  },
  {
    uri: "shadcn://select",
    name: "Select Component",
    description: "Displays a list of options for the user to pick from",
    mimeType: "text/plain"
  },
  {
    uri: "shadcn://textarea",
    name: "Textarea Component",
    description: "Displays a form textarea or a component that looks like a textarea",
    mimeType: "text/plain"
  },
  {
    uri: "shadcn://checkbox",
    name: "Checkbox Component",
    description: "A control that allows the user to toggle between checked and not checked",
    mimeType: "text/plain"
  },
  {
    uri: "shadcn://radio-group",
    name: "Radio Group",
    description: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked",
    mimeType: "text/plain"
  },
  {
    uri: "shadcn://switch",
    name: "Switch Component",
    description: "A control that allows the user to toggle between checked and not checked",
    mimeType: "text/plain"
  },
  {
    uri: "shadcn://table",
    name: "Table Component",
    description: "A responsive table component",
    mimeType: "text/plain"
  },
  {
    uri: "shadcn://tabs",
    name: "Tabs Component",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time",
    mimeType: "text/plain"
  },
  {
    uri: "shadcn://accordion",
    name: "Accordion Component",
    description: "A vertically stacked set of interactive headings that each reveal a section of content",
    mimeType: "text/plain"
  },
  {
    uri: "shadcn://alert",
    name: "Alert Component",
    description: "Displays a callout for user attention",
    mimeType: "text/plain"
  },
  {
    uri: "shadcn://badge",
    name: "Badge Component",
    description: "Displays a badge or a component that looks like a badge",
    mimeType: "text/plain"
  },
  {
    uri: "shadcn://avatar",
    name: "Avatar Component",
    description: "An image element with a fallback for representing the user",
    mimeType: "text/plain"
  },
  {
    uri: "shadcn://skeleton",
    name: "Skeleton Component",
    description: "Use to show a placeholder while content is loading",
    mimeType: "text/plain"
  },
  {
    uri: "shadcn://toast",
    name: "Toast Component",
    description: "A succinct message that is displayed temporarily",
    mimeType: "text/plain"
  },
  {
    uri: "shadcn://tooltip",
    name: "Tooltip Component",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it",
    mimeType: "text/plain"
  }
];

// Common shadcn components organized by category
const shadcnComponents = {
  form: [
    { name: "button", description: "Button component" },
    { name: "input", description: "Input field component" },
    { name: "label", description: "Label component" },
    { name: "select", description: "Select dropdown component" },
    { name: "textarea", description: "Textarea component" },
    { name: "checkbox", description: "Checkbox component" },
    { name: "radio-group", description: "Radio group component" },
    { name: "switch", description: "Switch toggle component" },
    { name: "form", description: "Form component" },
    { name: "slider", description: "Slider input component" }
  ],
  overlay: [
    { name: "dialog", description: "Modal dialog component" },
    { name: "dropdown-menu", description: "Dropdown menu component" },
    { name: "popover", description: "Popover component" },
    { name: "sheet", description: "Sheet/sidebar component" },
    { name: "context-menu", description: "Context menu component" },
    { name: "hover-card", description: "Hover card component" },
    { name: "menubar", description: "Menubar component" },
    { name: "navigation-menu", description: "Navigation menu component" }
  ],
  layout: [
    { name: "card", description: "Card container component" },
    { name: "tabs", description: "Tabs component" },
    { name: "accordion", description: "Accordion component" },
    { name: "separator", description: "Separator line component" },
    { name: "scroll-area", description: "Scrollable area component" },
    { name: "aspect-ratio", description: "Aspect ratio component" },
    { name: "resizable", description: "Resizable panel component" }
  ],
  feedback: [
    { name: "alert", description: "Alert message component" },
    { name: "toast", description: "Toast notification component" },
    { name: "progress", description: "Progress bar component" },
    { name: "skeleton", description: "Loading skeleton component" },
    { name: "sonner", description: "Toast notifications (Sonner)" }
  ],
  display: [
    { name: "avatar", description: "Avatar image component" },
    { name: "badge", description: "Badge component" },
    { name: "table", description: "Table component" },
    { name: "calendar", description: "Calendar component" },
    { name: "chart", description: "Chart component" }
  ],
  navigation: [
    { name: "breadcrumb", description: "Breadcrumb navigation" },
    { name: "pagination", description: "Pagination component" },
    { name: "command", description: "Command palette component" }
  ]
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
      let components = [];
      
      if (category) {
        // Filter by category
        if (shadcnComponents[category]) {
          components = shadcnComponents[category];
        }
      } else {
        // Return all components
        Object.values(shadcnComponents).forEach(catComponents => {
          components.push(...catComponents);
        });
      }
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ 
              components,
              categories: Object.keys(shadcnComponents)
            }, null, 2)
          }
        ]
      };
    }
    
    case "shadcn_search_components": {
      const query = args?.query?.toLowerCase() || "";
      const results = [];
      
      Object.entries(shadcnComponents).forEach(([cat, comps]) => {
        comps.forEach(comp => {
          if (comp.name.toLowerCase().includes(query) || 
              comp.description.toLowerCase().includes(query) ||
              cat.toLowerCase().includes(query)) {
            results.push({ ...comp, category: cat });
          }
        });
      });
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ results }, null, 2)
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
              `// Import it with: import { ${componentName.charAt(0).toUpperCase() + componentName.slice(1)} } from '@/components/ui/${componentName}'`
      }
    ]
  };
}

