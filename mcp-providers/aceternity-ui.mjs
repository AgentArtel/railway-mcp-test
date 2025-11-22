/**
 * Aceternity UI Provider
 * 
 * Premium animated Tailwind component provider.
 * Source: https://ui.aceternity.com/components
 * 
 * Style Domain: web_premium
 * Preferred Theme: default
 */

// All Aceternity UI components from https://ui.aceternity.com/components
const allAceternityComponents = [
  // Backgrounds & Effects
  { name: "dotted-glow-background", category: "backgrounds", description: "A background effect with opacity animation, glow effect and more" },
  { name: "background-ripple-effect", category: "backgrounds", description: "A grid of cells that ripple when clicked" },
  { name: "sparkles", category: "backgrounds", description: "A configurable sparkles component that can be used as a background" },
  { name: "background-gradient", category: "backgrounds", description: "An animated gradient that sits at the background" },
  { name: "gradient-animation", category: "backgrounds", description: "A smooth and elegant background gradient animation" },
  { name: "wavy-background", category: "backgrounds", description: "A cool background effect with waves that move" },
  { name: "background-boxes", category: "backgrounds", description: "A full width background box container that highlights on hover" },
  { name: "background-beams", category: "backgrounds", description: "Multiple background beams that follow a path of SVG" },
  { name: "background-beams-with-collision", category: "backgrounds", description: "Exploding beams in the background" },
  { name: "background-lines", category: "backgrounds", description: "A set of svg paths that animate in a wave pattern" },
  { name: "aurora-background", category: "backgrounds", description: "A subtle Aurora or Southern Lights background" },
  { name: "meteors", category: "backgrounds", description: "A group of beams in the background of a container" },
  { name: "glowing-stars", category: "backgrounds", description: "Card background stars that animate on hover" },
  { name: "shooting-stars", category: "backgrounds", description: "A shooting star animation on top of a starry background" },
  { name: "vortex", category: "backgrounds", description: "A wavy, swirly, vortex background ideal for CTAs" },
  { name: "spotlight", category: "backgrounds", description: "A spotlight effect with Tailwind CSS" },
  { name: "spotlight-new", category: "backgrounds", description: "A new spotlight component with left and right spotlight" },
  { name: "canvas-reveal-effect", category: "backgrounds", description: "A dot background that expands on hover" },
  { name: "svg-mask-effect", category: "backgrounds", description: "A mask reveal effect, hover the cursor over a container" },
  { name: "tracing-beam", category: "backgrounds", description: "A Beam that follows the path of an SVG as the user scrolls" },
  { name: "lamp-effect", category: "backgrounds", description: "A lamp effect as seen on linear, great for section headers" },
  { name: "grid-and-dot-backgrounds", category: "backgrounds", description: "A simple grid and dots background" },
  { name: "glowing-effect", category: "backgrounds", description: "A border glowing effect that adapts to any container" },
  { name: "google-gemini-effect", category: "backgrounds", description: "An effect of SVGs as seen on the Google Gemini Website" },
  
  // Card Components
  { name: "tooltip-card", category: "cards", description: "A tooltip card container that follows mouse pointer when hovered" },
  { name: "pixelated-canvas", category: "cards", description: "Convert any image to a pixelated canvas mouse distortion effects" },
  { name: "3d-card-effect", category: "cards", description: "A card perspective effect, hover over the card to elevate card elements" },
  { name: "evervault-card", category: "cards", description: "A cool card with amazing hover effect, reveals encrypted text" },
  { name: "card-stack", category: "cards", description: "Cards stack on top of each other after some interval" },
  { name: "card-hover-effect", category: "cards", description: "Hover over the cards and the effect slides to the currently hovered card" },
  { name: "wobble-card", category: "cards", description: "A card effect that translates and scales on mousemove" },
  { name: "expandable-card", category: "cards", description: "Click cards to expand them and show additional information" },
  { name: "card-spotlight", category: "cards", description: "A card component with a spotlight effect revealing a radial gradient" },
  { name: "focus-cards", category: "cards", description: "Hover over the card to focus on it, blurring the rest" },
  { name: "infinite-moving-cards", category: "cards", description: "A customizable group of cards that move infinitely in a loop" },
  { name: "draggable-card", category: "cards", description: "A tiltable, draggable card component that jumps on bounds" },
  { name: "comet-card", category: "cards", description: "A perspective, 3D, Tilt card as seen on Perplexity Comet's website" },
  { name: "glare-card", category: "cards", description: "A glare effect that happens on hover, as seen on Linear's website" },
  { name: "direction-aware-hover", category: "cards", description: "A direction aware hover effect using Framer Motion" },
  
  // Scroll & Parallax
  { name: "parallax-scroll", category: "scroll", description: "Parallax scroll effect" },
  { name: "sticky-scroll-reveal", category: "scroll", description: "A sticky container that sticks while scrolling, text reveals on scroll" },
  { name: "macbook-scroll", category: "scroll", description: "Scroll through the page and see the image come out of the screen" },
  { name: "container-scroll-animation", category: "scroll", description: "A scroll animation that rotates in 3d on scroll" },
  { name: "hero-parallax", category: "scroll", description: "A scroll effect with rotation, translation and opacity animations" },
  { name: "parallax-grid-scroll", category: "scroll", description: "A grid where two columns scroll in opposite directions" },
  
  // Text Components
  { name: "encrypted-text", category: "text", description: "A text component that reveals the text gradually, gibberish effect" },
  { name: "layout-text-flip", category: "text", description: "A text flip effect that changes the layout of surrounding text" },
  { name: "colourful-text", category: "text", description: "A text component with various colours, filter and scale effects" },
  { name: "text-generate-effect", category: "text", description: "A cool text effect that fades in text on page load, one by one" },
  { name: "typewriter-effect", category: "text", description: "Text generates as if it is being typed on the screen" },
  { name: "flip-words", category: "text", description: "A component that flips through a list of words" },
  { name: "text-hover-effect", category: "text", description: "A text hover effect that animates and outlines gradient on hover" },
  { name: "container-text-flip", category: "text", description: "A container that flips through words, animating the width" },
  { name: "hero-highlight", category: "text", description: "A background effect with a text highlight component" },
  { name: "text-reveal-card", category: "text", description: "Mousemove effect to reveal text content at the bottom of the card" },
  
  // Buttons
  { name: "tailwind-css-buttons", category: "buttons", description: "A curated list of awesome, battle tested Tailwind CSS buttons" },
  { name: "hover-border-gradient", category: "buttons", description: "A hover effect that expands to the entire container with a gradient border" },
  { name: "moving-border", category: "buttons", description: "A border that moves around the container" },
  { name: "stateful-button", category: "buttons", description: "A button that shows a loading state when clicked" },
  
  // Loaders
  { name: "multi-step-loader", category: "loaders", description: "A step loader for screens that take a lot of time to load" },
  { name: "loader", category: "loaders", description: "A set of simple and minimal loaders" },
  
  // Navigation
  { name: "floating-navbar", category: "navigation", description: "A sticky Navbar that hides on scroll, reveals when scrolled up" },
  { name: "navbar-menu", category: "navigation", description: "A navbar menu that animates its children on hover" },
  { name: "sidebar", category: "navigation", description: "Expandable sidebar that expands on hover" },
  { name: "floating-dock", category: "navigation", description: "A floating dock mac os style component" },
  { name: "tabs", category: "navigation", description: "Tabs to switch content, click on a tab to check background animation" },
  { name: "resizable-navbar", category: "navigation", description: "A navbar that changes width on scroll" },
  { name: "sticky-banner", category: "navigation", description: "A banner component that sticks to top, hides when user scrolls down" },
  
  // Inputs & Forms
  { name: "signup-form", category: "forms", description: "A customizable form built on top of shadcn's input and label" },
  { name: "placeholders-and-vanish-input", category: "forms", description: "Sliding in placeholders and vanish effect of input on submit" },
  { name: "file-upload", category: "forms", description: "A minimal file upload form with background grid" },
  
  // Overlays & Popovers
  { name: "animated-modal", category: "overlays", description: "A customizable, compound modal component with animated transitions" },
  { name: "animated-tooltip", category: "overlays", description: "A cool tooltip that reveals on hover, follows mouse pointer" },
  { name: "link-preview", category: "overlays", description: "Dynamic link previews for your anchor tags" },
  
  // Carousels & Sliders
  { name: "images-slider", category: "carousels", description: "A full page slider with images that can be navigated with the keyboard" },
  { name: "carousel", category: "carousels", description: "A customizable carousel with microinteractions and slider" },
  { name: "apple-cards-carousel", category: "carousels", description: "A sleek and minimal carousel implementation" },
  { name: "testimonials", category: "carousels", description: "Minimal testimonials sections with image and quote" },
  { name: "animated-testimonials", category: "carousels", description: "Minimal testimonials sections with image and quote" },
  
  // Layout & Grid
  { name: "layout-grid", category: "layout", description: "A layout effect that animates the grid item on click" },
  { name: "bento-grid", category: "layout", description: "A skewed grid layout with Title, description and a header component" },
  { name: "container-cover", category: "layout", description: "A Cover component that wraps any children, providing beams and space effect" },
  
  // Data & Visualization
  { name: "github-globe", category: "data", description: "A globe animation as seen on GitHub's homepage" },
  { name: "world-map", category: "data", description: "A world map with animated lines and dots" },
  { name: "timeline", category: "data", description: "A timeline component with sticky header and scroll beam follow" },
  { name: "compare", category: "data", description: "A comparison component between two images" },
  { name: "codeblock", category: "data", description: "A configurable code block component" },
  
  // Cursor & Pointer
  { name: "following-pointer", category: "cursor", description: "A custom pointer that follows mouse arrow and animates" },
  { name: "pointer-highlight", category: "cursor", description: "A component that highlights text when it's in view" },
  { name: "lens", category: "cursor", description: "A lens component to zoom into images, videos, or practically anything" },
  
  // 3D
  { name: "3d-pin", category: "3d", description: "A gradient pin that animates on hover" },
  { name: "3d-marquee", category: "3d", description: "A 3D Marquee effect with grid" },
  { name: "3d-animated-pin", category: "3d", description: "A gradient pin that animates on hover" },
  
  // Sections and Blocks
  { name: "feature-sections", category: "sections", description: "A set of feature sections ranging from bento grids to simple layouts" },
  { name: "cards-sections", category: "sections", description: "A set of cards that can be used for different use cases" },
  { name: "hero-sections", category: "sections", description: "A set of hero sections ranging from simple to complex layouts" }
];

// Generate resources from all components
export const aceternityUIResources = allAceternityComponents.map(comp => ({
  uri: `aceternity://${comp.name}`,
  name: comp.name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
  description: comp.description,
  mimeType: "text/plain"
}));

// Aceternity UI component tools
export const aceternityUITools = [
  {
    name: "aceternity_get_component",
    description: "Get an Aceternity UI component by name",
    inputSchema: {
      type: "object",
      properties: {
        componentName: {
          type: "string",
          description: "Name of the Aceternity UI component to retrieve"
        }
      },
      required: ["componentName"]
    }
  },
  {
    name: "aceternity_list_components",
    description: "List all available Aceternity UI components",
    inputSchema: {
      type: "object",
      properties: {
        category: {
          type: "string",
          description: "Optional category filter (backgrounds, cards, scroll, text, buttons, loaders, navigation, forms, overlays, carousels, layout, data, cursor, 3d, sections)"
        }
      }
    }
  },
  {
    name: "aceternity_search_components",
    description: "Search Aceternity UI components by keyword",
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
  }
];

/**
 * Handle Aceternity UI tool calls
 */
export async function handleAceternityUITool(name, args) {
  switch (name) {
    case "aceternity_get_component": {
      const componentName = args?.componentName;
      if (!componentName) {
        throw new Error("componentName is required");
      }
      
      return {
        content: [
          {
            type: "text",
            text: `// Aceternity UI Component: ${componentName}\n` +
                  `// This component is available from Aceternity UI\n` +
                  `// Visit https://ui.aceternity.com/components/${componentName} for documentation\n\n` +
                  `// Premium animated Tailwind component`
          }
        ]
      };
    }
    
    case "aceternity_list_components": {
      const category = args?.category;
      const filtered = category 
        ? allAceternityComponents.filter(c => c.category === category)
        : allAceternityComponents;
      
      const categories = [...new Set(allAceternityComponents.map(c => c.category))];
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ 
              components: filtered,
              total: allAceternityComponents.length,
              categories: categories,
              filtered: filtered.length
            }, null, 2)
          }
        ]
      };
    }
    
    case "aceternity_search_components": {
      const query = args?.query?.toLowerCase() || "";
      const results = allAceternityComponents.filter(c => 
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
              total: allAceternityComponents.length
            }, null, 2)
          }
        ]
      };
    }
    
    default:
      throw new Error(`Unknown Aceternity UI tool: ${name}`);
  }
}

/**
 * Handle Aceternity UI resource reads
 */
export async function handleAceternityUIResource(uri) {
  if (!uri.startsWith("aceternity://")) {
    return null;
  }
  
  const componentName = uri.replace("aceternity://", "");
  
  return {
    contents: [
      {
        uri,
        mimeType: "text/plain",
        text: `// Aceternity UI Component: ${componentName}\n` +
              `// Documentation: https://ui.aceternity.com/components/${componentName}\n` +
              `// Premium animated Tailwind component`
      }
    ]
  };
}
