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

// All Shadcn UI components from https://ui.shadcn.com/docs/components
const allShadcnComponents = [
  { name: "accordion", category: "layout", description: "A vertically stacked set of interactive headings" },
  { name: "alert-dialog", category: "overlay", description: "A modal dialog that interrupts the user" },
  { name: "alert", category: "feedback", description: "Displays a callout for user attention" },
  { name: "aspect-ratio", category: "layout", description: "Displays content within a desired ratio" },
  { name: "avatar", category: "display", description: "An image element with a fallback for representing the user" },
  { name: "badge", category: "display", description: "Displays a badge or a component that looks like a badge" },
  { name: "breadcrumb", category: "navigation", description: "Displays the path to the current resource" },
  { name: "button-group", category: "form", description: "A group of buttons" },
  { name: "button", category: "form", description: "Displays a button or a component that looks like a button" },
  { name: "calendar", category: "form", description: "A date field component" },
  { name: "card", category: "layout", description: "Displays a card with header, content, and footer" },
  { name: "carousel", category: "display", description: "A carousel with motion and swipe built using Embla" },
  { name: "chart", category: "display", description: "Chart components built with Recharts" },
  { name: "checkbox", category: "form", description: "A control that allows the user to toggle between checked and not checked" },
  { name: "collapsible", category: "layout", description: "An interactive component which expands/collapses a panel" },
  { name: "combobox", category: "form", description: "Combobox component for autocomplete" },
  { name: "command", category: "navigation", description: "Command palette component" },
  { name: "context-menu", category: "overlay", description: "Displays a menu to the user" },
  { name: "data-table", category: "display", description: "A data table component with sorting and filtering" },
  { name: "date-picker", category: "form", description: "A date picker component" },
  { name: "dialog", category: "overlay", description: "A window overlaid on either the primary window or another dialog" },
  { name: "drawer", category: "overlay", description: "A drawer component for mobile" },
  { name: "dropdown-menu", category: "overlay", description: "Displays a menu to the user — such as a set of actions or functions" },
  { name: "empty", category: "display", description: "Displays an empty state" },
  { name: "field", category: "form", description: "A form field component" },
  { name: "form", category: "form", description: "Form component built on top of React Hook Form" },
  { name: "hover-card", category: "overlay", description: "For sighted users to preview content available behind a link" },
  { name: "input-group", category: "form", description: "A group of inputs" },
  { name: "input-otp", category: "form", description: "Input component for one-time passwords" },
  { name: "input", category: "form", description: "Displays a form input field or a component that looks like an input field" },
  { name: "item", category: "display", description: "Item component" },
  { name: "kbd", category: "display", description: "Keyboard key component" },
  { name: "label", category: "form", description: "Renders an accessible label associated with controls" },
  { name: "menubar", category: "navigation", description: "A visually persistent menu common in desktop applications" },
  { name: "native-select", category: "form", description: "A native select component" },
  { name: "navigation-menu", category: "navigation", description: "A collection of links for navigating websites" },
  { name: "pagination", category: "navigation", description: "Pagination component" },
  { name: "popover", category: "overlay", description: "Displays rich content in a portal" },
  { name: "progress", category: "feedback", description: "Displays an indicator showing the completion progress of a task" },
  { name: "radio-group", category: "form", description: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked" },
  { name: "resizable", category: "layout", description: "Accessible resizable panel groups and layouts" },
  { name: "scroll-area", category: "layout", description: "Augments native scroll functionality for custom styling" },
  { name: "select", category: "form", description: "Displays a list of options for the user to pick from" },
  { name: "separator", category: "layout", description: "Visually or semantically separates content" },
  { name: "sheet", category: "overlay", description: "Extends the Dialog component to display content that complements the main content" },
  { name: "sidebar", category: "layout", description: "Sidebar component" },
  { name: "skeleton", category: "feedback", description: "Use to show a placeholder while content is loading" },
  { name: "slider", category: "form", description: "An input where the user selects a value from within a given range" },
  { name: "sonner", category: "feedback", description: "Toast notifications (Sonner)" },
  { name: "spinner", category: "feedback", description: "Spinner loading component" },
  { name: "switch", category: "form", description: "A control that allows the user to toggle between checked and not checked" },
  { name: "table", category: "display", description: "A responsive table component" },
  { name: "tabs", category: "layout", description: "A set of layered sections of content—known as tab panels—that are displayed one at a time" },
  { name: "textarea", category: "form", description: "Displays a form textarea or a component that looks like a textarea" },
  { name: "toast", category: "feedback", description: "A succinct message that is displayed temporarily" },
  { name: "toggle-group", category: "form", description: "A set of two-state buttons that can be toggled on or off" },
  { name: "toggle", category: "form", description: "A two-state button that can be either on or off" },
  { name: "tooltip", category: "overlay", description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it" },
  { name: "typography", category: "display", description: "Typography component" }
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
      const results = allShadcnComponents.filter(c => 
        c.name.toLowerCase().includes(query) || 
        c.category.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query)
      );
      
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

