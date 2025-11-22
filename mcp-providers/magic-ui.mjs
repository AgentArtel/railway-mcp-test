/**
 * Magic UI MCP Server Provider
 * Integrates Magic UI components into the unified MCP server
 */

// Magic UI component tools and resources
export const magicUITools = [
  {
    name: "magicui_get_component",
    description: "Get a Magic UI component by name (e.g., 'marquee', 'blur-fade', 'grid-background')",
    inputSchema: {
      type: "object",
      properties: {
        componentName: {
          type: "string",
          description: "Name of the Magic UI component to retrieve"
        }
      },
      required: ["componentName"]
    }
  },
  {
    name: "magicui_list_components",
    description: "List all available Magic UI components",
    inputSchema: {
      type: "object",
      properties: {
        category: {
          type: "string",
          description: "Optional category filter (e.g., 'animations', 'effects', 'layouts')"
        }
      }
    }
  },
  {
    name: "magicui_search_components",
    description: "Search Magic UI components by keyword",
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
    name: "magicui_get_component_context",
    description: "Get full context and use cases for a Magic UI component including when to use, patterns, and examples",
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

// All Magic UI components organized by category
// Source: https://magicui.design/docs/components
// Enhanced with use cases, patterns, and context
export const allMagicUIComponents = [
  // Components (General)
  { name: "marquee", category: "components", description: "Animated marquee component for logos or text", useCases: ["Logo carousels", "Scrolling testimonials", "Partner showcases", "Animated banners"], commonPatterns: ["Logo marquee", "Testimonial scroll", "Partner showcase"], whenToUse: ["Continuous scrolling content", "Logo displays", "Testimonial carousels"], whenNotToUse: ["Static content", "Simple lists"], examples: ["Partner logos scrolling", "Customer testimonials", "Feature highlights"], relatedComponents: ["carousel", "animated-list"] },
  { name: "terminal", category: "components", description: "Terminal component with command line interface", useCases: ["Code demos", "CLI showcases", "Documentation", "Developer tools"], commonPatterns: ["Code terminal", "CLI demo", "Command showcase"], whenToUse: ["CLI demonstrations", "Code examples", "Developer tools"], whenNotToUse: ["User input", "Production forms"], examples: ["Installation instructions", "CLI tool demo", "Code documentation"], relatedComponents: ["code-comparison"] },
  { name: "hero-video-dialog", category: "components", description: "Hero section with video dialog", useCases: ["Product demos", "Hero sections", "Video showcases", "Landing pages"], commonPatterns: ["Hero video", "Product demo", "Video modal"], whenToUse: ["Hero sections", "Video showcases", "Product demos"], whenNotToUse: ["Simple images", "Text-only hero"], examples: ["Landing page hero", "Product demo", "Video showcase"], relatedComponents: ["dialog", "video"] },
  { name: "bento-grid", category: "components", description: "Bento grid layout component", useCases: ["Dashboard layouts", "Feature showcases", "Content grids", "Card layouts"], commonPatterns: ["Dashboard grid", "Feature grid", "Content showcase"], whenToUse: ["Dashboard layouts", "Feature displays", "Content grids"], whenNotToUse: ["Simple lists", "Uniform grids"], examples: ["Dashboard widgets", "Feature showcase", "Content grid"], relatedComponents: ["card", "grid"] },
  { name: "animated-list", category: "components", description: "Animated list component", useCases: ["Feature lists", "Animated content", "Staggered animations", "List reveals"], commonPatterns: ["Staggered list", "Animated features", "Reveal animation"], whenToUse: ["Animated lists", "Staggered reveals", "Feature lists"], whenNotToUse: ["Simple lists", "Static content"], examples: ["Feature list", "Animated content", "Staggered reveal"], relatedComponents: ["list", "marquee"] },
  { name: "dock", category: "components", description: "Dock navigation component", useCases: ["Navigation docks", "Quick actions", "App launchers", "Toolbars"], commonPatterns: ["Mac-style dock", "Quick action dock", "Navigation dock"], whenToUse: ["Quick navigation", "Action docks", "Toolbars"], whenNotToUse: ["Full navigation", "Mobile menus"], examples: ["Mac-style dock", "Quick actions", "Toolbar"], relatedComponents: ["navigation-menu", "button-group"] },
  { name: "globe", category: "components", description: "3D globe component", useCases: ["Location displays", "Global data", "Interactive maps", "Visualizations"], commonPatterns: ["3D globe", "Location display", "Data visualization"], whenToUse: ["Global data", "Location displays", "3D visualizations"], whenNotToUse: ["Simple maps", "2D displays"], examples: ["User locations", "Global stats", "Interactive globe"], relatedComponents: ["dotted-map", "chart"] },
  { name: "tweet-card", category: "components", description: "Twitter/X tweet card component", useCases: ["Social proof", "Testimonials", "Tweet displays", "Social feeds"], commonPatterns: ["Tweet embed", "Social proof", "Testimonial card"], whenToUse: ["Social proof", "Tweet displays", "Testimonials"], whenNotToUse: ["Custom cards", "Generic content"], examples: ["Customer testimonials", "Social proof", "Tweet showcase"], relatedComponents: ["card", "avatar"] },
  { name: "orbiting-circles", category: "components", description: "Orbiting circles animation", useCases: ["Loading states", "Decorative elements", "Feature highlights", "Animated backgrounds"], commonPatterns: ["Orbiting animation", "Decorative circles", "Loading animation"], whenToUse: ["Decorative animations", "Loading states", "Feature highlights"], whenNotToUse: ["Static content", "Simple loading"], examples: ["Loading animation", "Decorative element", "Feature highlight"], relatedComponents: ["spinner", "animated-beam"] },
  { name: "avatar-circles", category: "components", description: "Avatar circles component", useCases: ["Team displays", "User groups", "Avatar stacks", "Collaboration displays"], commonPatterns: ["Team avatars", "User stack", "Collaboration display"], whenToUse: ["Team displays", "User groups", "Avatar stacks"], whenNotToUse: ["Single avatars", "Simple lists"], examples: ["Team members", "Collaborators", "User group"], relatedComponents: ["avatar", "badge"] },
  { name: "icon-cloud", category: "components", description: "Icon cloud visualization", useCases: ["Technology stacks", "Skill displays", "Tag clouds", "Icon showcases"], commonPatterns: ["Tech stack", "Skill cloud", "Icon showcase"], whenToUse: ["Technology displays", "Skill showcases", "Icon collections"], whenNotToUse: ["Simple icon lists", "Static displays"], examples: ["Tech stack display", "Skills showcase", "Icon collection"], relatedComponents: ["badge", "tag"] },
  { name: "lens", category: "components", description: "Lens/magnifying glass effect", useCases: ["Image zoom", "Detail views", "Magnification", "Interactive images"], commonPatterns: ["Image zoom", "Magnifying glass", "Detail view"], whenToUse: ["Image zoom", "Detail views", "Magnification"], whenNotToUse: ["Simple images", "Static displays"], examples: ["Product image zoom", "Detail view", "Image magnification"], relatedComponents: ["image", "popover"] },
  { name: "pointer", category: "components", description: "Custom pointer component", useCases: ["Custom cursors", "Interactive elements", "Cursor effects", "Pointer customization"], commonPatterns: ["Custom cursor", "Interactive pointer", "Cursor effect"], whenToUse: ["Custom cursors", "Interactive elements", "Pointer effects"], whenNotToUse: ["Standard cursors", "Simple interactions"], examples: ["Custom cursor", "Interactive pointer", "Cursor effect"], relatedComponents: ["smooth-cursor", "hover-card"] },
  { name: "smooth-cursor", category: "components", description: "Smooth cursor animation", useCases: ["Smooth cursor effects", "Cursor animations", "Interactive cursors", "Custom pointers"], commonPatterns: ["Smooth cursor", "Animated cursor", "Custom pointer"], whenToUse: ["Smooth cursor effects", "Cursor animations"], whenNotToUse: ["Standard cursors", "Simple interactions"], examples: ["Smooth cursor effect", "Animated cursor", "Custom pointer"], relatedComponents: ["pointer", "hover-card"] },
  { name: "progressive-blur", category: "components", description: "Progressive blur effect", useCases: ["Depth effects", "Focus effects", "Blur transitions", "Visual hierarchy"], commonPatterns: ["Progressive blur", "Depth effect", "Focus blur"], whenToUse: ["Depth effects", "Focus transitions", "Visual hierarchy"], whenNotToUse: ["Clear content", "Simple displays"], examples: ["Depth effect", "Focus transition", "Visual hierarchy"], relatedComponents: ["blur-fade", "card"] },
  { name: "dotted-map", category: "components", description: "Dotted map visualization", useCases: ["Location displays", "Data visualization", "Map displays", "Geographic data"], commonPatterns: ["Dotted map", "Location display", "Data map"], whenToUse: ["Location displays", "Data visualization", "Map displays"], whenNotToUse: ["Detailed maps", "Simple locations"], examples: ["User locations", "Data visualization", "Map display"], relatedComponents: ["globe", "chart"] },
  
  // Special Effects
  { name: "animated-beam", category: "special-effects", description: "Animated beam connecting elements", useCases: ["Connecting elements", "Visual connections", "Flow diagrams", "Relationship displays"], commonPatterns: ["Connecting beam", "Visual connection", "Flow display"], whenToUse: ["Connecting elements", "Visual connections", "Flow diagrams"], whenNotToUse: ["Static content", "Simple layouts"], examples: ["Element connection", "Flow diagram", "Visual link"], relatedComponents: ["orbiting-circles", "border-beam"] },
  { name: "border-beam", category: "special-effects", description: "Animated border beam effect", useCases: ["Card highlights", "Border animations", "Focus indicators", "Animated borders"], commonPatterns: ["Animated border", "Card highlight", "Focus border"], whenToUse: ["Card highlights", "Border animations", "Focus indicators"], whenNotToUse: ["Static borders", "Simple cards"], examples: ["Card highlight", "Animated border", "Focus indicator"], relatedComponents: ["magic-card", "shine-border"] },
  { name: "shine-border", category: "special-effects", description: "Shine border animation", useCases: ["Premium effects", "Card highlights", "Border animations", "Shine effects"], commonPatterns: ["Shine border", "Premium card", "Animated border"], whenToUse: ["Premium effects", "Card highlights", "Shine animations"], whenNotToUse: ["Simple borders", "Static cards"], examples: ["Premium card", "Shine effect", "Animated border"], relatedComponents: ["border-beam", "magic-card"] },
  { name: "magic-card", category: "special-effects", description: "Magic card with hover effects", useCases: ["Interactive cards", "Hover effects", "Card animations", "Premium cards"], commonPatterns: ["Magic card", "Hover card", "Animated card"], whenToUse: ["Interactive cards", "Hover effects", "Card animations"], whenNotToUse: ["Static cards", "Simple displays"], examples: ["Interactive card", "Hover effect", "Animated card"], relatedComponents: ["card", "border-beam"] },
  { name: "meteors", category: "special-effects", description: "Meteor shower animation", useCases: ["Background effects", "Decorative animations", "Hero sections", "Visual effects"], commonPatterns: ["Meteor background", "Decorative effect", "Hero animation"], whenToUse: ["Background effects", "Decorative animations", "Hero sections"], whenNotToUse: ["Simple backgrounds", "Static content"], examples: ["Hero background", "Decorative effect", "Animated background"], relatedComponents: ["particles", "confetti"] },
  { name: "confetti", category: "special-effects", description: "Confetti animation", useCases: ["Celebrations", "Success effects", "Achievement displays", "Event animations"], commonPatterns: ["Success confetti", "Celebration effect", "Achievement animation"], whenToUse: ["Celebrations", "Success effects", "Achievement displays"], whenNotToUse: ["Simple notifications", "Static content"], examples: ["Success celebration", "Achievement display", "Event animation"], relatedComponents: ["meteors", "particles"] },
  { name: "particles", category: "special-effects", description: "Particle effects", useCases: ["Background effects", "Decorative animations", "Interactive particles", "Visual effects"], commonPatterns: ["Particle background", "Interactive particles", "Decorative effect"], whenToUse: ["Background effects", "Decorative animations", "Interactive particles"], whenNotToUse: ["Simple backgrounds", "Static content"], examples: ["Particle background", "Interactive effect", "Decorative animation"], relatedComponents: ["meteors", "confetti"] },
  { name: "animated-theme-toggler", category: "special-effects", description: "Animated theme toggle component", useCases: ["Theme switching", "Dark mode toggle", "Animated toggles", "Theme controls"], commonPatterns: ["Theme toggle", "Dark mode switch", "Animated toggle"], whenToUse: ["Theme switching", "Dark mode toggle", "Animated toggles"], whenNotToUse: ["Simple toggles", "Static controls"], examples: ["Theme switcher", "Dark mode toggle", "Animated switch"], relatedComponents: ["switch", "toggle"] },
  
  // Animations
  { name: "blur-fade", category: "animations", description: "Blur fade text animation", useCases: ["Text reveals", "Fade animations", "Text effects", "Reveal animations"], commonPatterns: ["Blur fade text", "Text reveal", "Fade animation"], whenToUse: ["Text reveals", "Fade animations", "Text effects"], whenNotToUse: ["Static text", "Simple displays"], examples: ["Text reveal", "Fade animation", "Text effect"], relatedComponents: ["text-reveal", "text-animate"] },
  
  // Text Animations
  { name: "text-animate", category: "text-animations", description: "Text animation component", useCases: ["Animated text", "Text effects", "Text reveals", "Dynamic text"], commonPatterns: ["Animated text", "Text effect", "Dynamic text"], whenToUse: ["Animated text", "Text effects", "Dynamic text"], whenNotToUse: ["Static text", "Simple displays"], examples: ["Animated heading", "Text effect", "Dynamic text"], relatedComponents: ["typing-animation", "text-reveal"] },
  { name: "typing-animation", category: "text-animations", description: "Typing animation effect", useCases: ["Typewriter effects", "Code displays", "Terminal text", "Typing effects"], commonPatterns: ["Typewriter effect", "Typing text", "Code animation"], whenToUse: ["Typewriter effects", "Code displays", "Typing effects"], whenNotToUse: ["Static text", "Simple displays"], examples: ["Typewriter effect", "Code display", "Typing animation"], relatedComponents: ["terminal", "text-animate"] },
  { name: "line-shadow-text", category: "text-animations", description: "Line shadow text effect", useCases: ["Text effects", "Shadow effects", "Text styling", "Visual text"], commonPatterns: ["Shadow text", "Line shadow", "Text effect"], whenToUse: ["Text effects", "Shadow effects", "Visual text"], whenNotToUse: ["Simple text", "Plain displays"], examples: ["Shadow text", "Text effect", "Visual text"], relatedComponents: ["text-animate", "animated-shiny-text"] },
  { name: "aurora-text", category: "text-animations", description: "Aurora text animation", useCases: ["Premium text", "Aurora effects", "Text animations", "Visual text"], commonPatterns: ["Aurora text", "Premium effect", "Text animation"], whenToUse: ["Premium text", "Aurora effects", "Text animations"], whenNotToUse: ["Simple text", "Plain displays"], examples: ["Premium heading", "Aurora effect", "Text animation"], relatedComponents: ["animated-gradient-text", "animated-shiny-text"] },
  { name: "video-text", category: "text-animations", description: "Video text effect", useCases: ["Video text", "Dynamic text", "Text effects", "Video backgrounds"], commonPatterns: ["Video text", "Dynamic effect", "Text with video"], whenToUse: ["Video text", "Dynamic text", "Video backgrounds"], whenNotToUse: ["Simple text", "Static displays"], examples: ["Video heading", "Dynamic text", "Video effect"], relatedComponents: ["video", "text-animate"] },
  { name: "number-ticker", category: "text-animations", description: "Number ticker animation", useCases: ["Counter animations", "Number displays", "Statistics", "Counters"], commonPatterns: ["Number counter", "Animated number", "Ticker display"], whenToUse: ["Counter animations", "Number displays", "Statistics"], whenNotToUse: ["Static numbers", "Simple displays"], examples: ["Statistics counter", "Animated number", "Ticker display"], relatedComponents: ["chart", "progress"] },
  { name: "animated-shiny-text", category: "text-animations", description: "Animated shiny text", useCases: ["Premium text", "Shine effects", "Text animations", "Visual text"], commonPatterns: ["Shiny text", "Premium effect", "Text animation"], whenToUse: ["Premium text", "Shine effects", "Text animations"], whenNotToUse: ["Simple text", "Plain displays"], examples: ["Premium heading", "Shine effect", "Text animation"], relatedComponents: ["aurora-text", "animated-gradient-text"] },
  { name: "animated-gradient-text", category: "text-animations", description: "Animated gradient text", useCases: ["Gradient text", "Animated text", "Text effects", "Visual text"], commonPatterns: ["Gradient text", "Animated gradient", "Text effect"], whenToUse: ["Gradient text", "Animated text", "Text effects"], whenNotToUse: ["Simple text", "Plain displays"], examples: ["Gradient heading", "Animated text", "Text effect"], relatedComponents: ["aurora-text", "animated-shiny-text"] },
  { name: "text-reveal", category: "text-animations", description: "Text reveal animation", useCases: ["Text reveals", "Reveal animations", "Text effects", "Scroll reveals"], commonPatterns: ["Text reveal", "Reveal animation", "Scroll reveal"], whenToUse: ["Text reveals", "Reveal animations", "Scroll reveals"], whenNotToUse: ["Static text", "Simple displays"], examples: ["Text reveal", "Scroll reveal", "Reveal animation"], relatedComponents: ["blur-fade", "text-animate"] },
  { name: "hyper-text", category: "text-animations", description: "Hyper text effect", useCases: ["Hyper text", "Text effects", "Dynamic text", "Visual text"], commonPatterns: ["Hyper text", "Text effect", "Dynamic text"], whenToUse: ["Hyper text", "Text effects", "Dynamic text"], whenNotToUse: ["Simple text", "Plain displays"], examples: ["Hyper heading", "Text effect", "Dynamic text"], relatedComponents: ["text-animate", "animated-gradient-text"] },
  { name: "word-rotate", category: "text-animations", description: "Word rotation animation", useCases: ["Rotating text", "Word animations", "Text effects", "Dynamic text"], commonPatterns: ["Word rotation", "Rotating text", "Text animation"], whenToUse: ["Rotating text", "Word animations", "Text effects"], whenNotToUse: ["Static text", "Simple displays"], examples: ["Rotating words", "Text animation", "Dynamic text"], relatedComponents: ["text-animate", "morphing-text"] },
  { name: "scroll-based-velocity", category: "text-animations", description: "Scroll-based velocity text", useCases: ["Scroll animations", "Velocity text", "Text effects", "Scroll effects"], commonPatterns: ["Scroll text", "Velocity effect", "Scroll animation"], whenToUse: ["Scroll animations", "Velocity text", "Scroll effects"], whenNotToUse: ["Static text", "Simple displays"], examples: ["Scroll text", "Velocity effect", "Scroll animation"], relatedComponents: ["text-reveal", "scroll-progress"] },
  { name: "sparkles-text", category: "text-animations", description: "Sparkles text effect", useCases: ["Sparkle effects", "Text animations", "Visual text", "Decorative text"], commonPatterns: ["Sparkle text", "Text effect", "Decorative text"], whenToUse: ["Sparkle effects", "Text animations", "Decorative text"], whenNotToUse: ["Simple text", "Plain displays"], examples: ["Sparkle heading", "Text effect", "Decorative text"], relatedComponents: ["animated-shiny-text", "aurora-text"] },
  { name: "morphing-text", category: "text-animations", description: "Morphing text animation", useCases: ["Morphing text", "Text transitions", "Text effects", "Dynamic text"], commonPatterns: ["Morphing text", "Text transition", "Text effect"], whenToUse: ["Morphing text", "Text transitions", "Text effects"], whenNotToUse: ["Static text", "Simple displays"], examples: ["Morphing heading", "Text transition", "Text effect"], relatedComponents: ["word-rotate", "text-animate"] },
  { name: "spinning-text", category: "text-animations", description: "Spinning text animation", useCases: ["Spinning text", "Text animations", "Text effects", "Rotating text"], commonPatterns: ["Spinning text", "Text animation", "Rotating text"], whenToUse: ["Spinning text", "Text animations", "Rotating text"], whenNotToUse: ["Static text", "Simple displays"], examples: ["Spinning heading", "Text animation", "Rotating text"], relatedComponents: ["word-rotate", "morphing-text"] },
  { name: "text-highlighter", category: "text-animations", description: "Text highlighter effect", useCases: ["Text highlighting", "Highlight effects", "Text emphasis", "Visual text"], commonPatterns: ["Text highlight", "Highlight effect", "Text emphasis"], whenToUse: ["Text highlighting", "Highlight effects", "Text emphasis"], whenNotToUse: ["Simple text", "Plain displays"], examples: ["Highlighted text", "Text emphasis", "Highlight effect"], relatedComponents: ["text-animate", "animated-shiny-text"] },
  
  // Device Mocks
  { name: "safari", category: "device-mocks", description: "Safari browser mock", useCases: ["Browser showcases", "Screenshot displays", "Product demos", "Device mocks"], commonPatterns: ["Browser mock", "Screenshot display", "Product demo"], whenToUse: ["Browser showcases", "Screenshot displays", "Product demos"], whenNotToUse: ["Simple images", "Static displays"], examples: ["Browser showcase", "Screenshot display", "Product demo"], relatedComponents: ["iphone", "android"] },
  { name: "iphone", category: "device-mocks", description: "iPhone device mock", useCases: ["Mobile showcases", "App displays", "Device mocks", "Product demos"], commonPatterns: ["iPhone mock", "Mobile display", "App showcase"], whenToUse: ["Mobile showcases", "App displays", "Device mocks"], whenNotToUse: ["Simple images", "Static displays"], examples: ["Mobile showcase", "App display", "Device mock"], relatedComponents: ["android", "safari"] },
  { name: "android", category: "device-mocks", description: "Android device mock", useCases: ["Mobile showcases", "App displays", "Device mocks", "Product demos"], commonPatterns: ["Android mock", "Mobile display", "App showcase"], whenToUse: ["Mobile showcases", "App displays", "Device mocks"], whenNotToUse: ["Simple images", "Static displays"], examples: ["Mobile showcase", "App display", "Device mock"], relatedComponents: ["iphone", "safari"] },
  
  // Buttons
  { name: "rainbow-button", category: "buttons", description: "Rainbow button component", useCases: ["Premium buttons", "Colorful buttons", "Special actions", "Eye-catching buttons"], commonPatterns: ["Rainbow button", "Colorful button", "Premium button"], whenToUse: ["Premium buttons", "Colorful buttons", "Special actions"], whenNotToUse: ["Simple buttons", "Standard actions"], examples: ["Premium CTA", "Colorful button", "Special action"], relatedComponents: ["shimmer-button", "ripple-button"] },
  { name: "shimmer-button", category: "buttons", description: "Shimmer button effect", useCases: ["Premium buttons", "Shimmer effects", "Animated buttons", "Eye-catching buttons"], commonPatterns: ["Shimmer button", "Animated button", "Premium button"], whenToUse: ["Premium buttons", "Shimmer effects", "Animated buttons"], whenNotToUse: ["Simple buttons", "Standard actions"], examples: ["Premium CTA", "Animated button", "Shimmer effect"], relatedComponents: ["rainbow-button", "ripple-button"] },
  { name: "ripple-button", category: "buttons", description: "Ripple button effect", useCases: ["Interactive buttons", "Ripple effects", "Material design", "Touch feedback"], commonPatterns: ["Ripple button", "Interactive button", "Material button"], whenToUse: ["Interactive buttons", "Ripple effects", "Touch feedback"], whenNotToUse: ["Simple buttons", "Standard actions"], examples: ["Interactive button", "Ripple effect", "Touch feedback"], relatedComponents: ["rainbow-button", "shimmer-button"] },
  
  // Backgrounds
  { name: "flickering-grid", category: "backgrounds", description: "Flickering grid background", useCases: ["Background effects", "Grid backgrounds", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Flickering grid", "Grid background", "Decorative effect"], whenToUse: ["Background effects", "Grid backgrounds", "Decorative backgrounds"], whenNotToUse: ["Simple backgrounds", "Static content"], examples: ["Grid background", "Decorative effect", "Background animation"], relatedComponents: ["animated-grid-pattern", "grid-pattern"] },
  { name: "animated-grid-pattern", category: "backgrounds", description: "Animated grid pattern", useCases: ["Background effects", "Grid backgrounds", "Animated backgrounds", "Visual effects"], commonPatterns: ["Animated grid", "Grid background", "Background effect"], whenToUse: ["Background effects", "Grid backgrounds", "Animated backgrounds"], whenNotToUse: ["Simple backgrounds", "Static content"], examples: ["Grid background", "Animated effect", "Background pattern"], relatedComponents: ["flickering-grid", "grid-pattern"] },
  { name: "retro-grid", category: "backgrounds", description: "Retro grid background", useCases: ["Retro designs", "Grid backgrounds", "Nostalgic designs", "Retro aesthetics"], commonPatterns: ["Retro grid", "Nostalgic background", "Retro design"], whenToUse: ["Retro designs", "Grid backgrounds", "Nostalgic designs"], whenNotToUse: ["Modern designs", "Simple backgrounds"], examples: ["Retro background", "Nostalgic design", "Retro grid"], relatedComponents: ["grid-pattern", "flickering-grid"] },
  { name: "ripple", category: "backgrounds", description: "Ripple background effect", useCases: ["Background effects", "Ripple effects", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Ripple background", "Decorative effect", "Background animation"], whenToUse: ["Background effects", "Ripple effects", "Decorative backgrounds"], whenNotToUse: ["Simple backgrounds", "Static content"], examples: ["Ripple background", "Decorative effect", "Background animation"], relatedComponents: ["ripple-button", "particles"] },
  { name: "dot-pattern", category: "backgrounds", description: "Dot pattern background", useCases: ["Background effects", "Dot patterns", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Dot pattern", "Background effect", "Decorative background"], whenToUse: ["Background effects", "Dot patterns", "Decorative backgrounds"], whenNotToUse: ["Simple backgrounds", "Static content"], examples: ["Dot background", "Pattern effect", "Decorative background"], relatedComponents: ["grid-pattern", "striped-pattern"] },
  { name: "grid-pattern", category: "backgrounds", description: "Grid pattern background", useCases: ["Background effects", "Grid patterns", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Grid pattern", "Background effect", "Decorative background"], whenToUse: ["Background effects", "Grid patterns", "Decorative backgrounds"], whenNotToUse: ["Simple backgrounds", "Static content"], examples: ["Grid background", "Pattern effect", "Decorative background"], relatedComponents: ["dot-pattern", "striped-pattern"] },
  { name: "striped-pattern", category: "backgrounds", description: "Striped pattern background", useCases: ["Background effects", "Striped patterns", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Striped pattern", "Background effect", "Decorative background"], whenToUse: ["Background effects", "Striped patterns", "Decorative backgrounds"], whenNotToUse: ["Simple backgrounds", "Static content"], examples: ["Striped background", "Pattern effect", "Decorative background"], relatedComponents: ["dot-pattern", "grid-pattern"] },
  { name: "interactive-grid-pattern", category: "backgrounds", description: "Interactive grid pattern", useCases: ["Interactive backgrounds", "Grid patterns", "Interactive effects", "Visual effects"], commonPatterns: ["Interactive grid", "Interactive background", "Grid effect"], whenToUse: ["Interactive backgrounds", "Grid patterns", "Interactive effects"], whenNotToUse: ["Simple backgrounds", "Static content"], examples: ["Interactive grid", "Interactive background", "Grid effect"], relatedComponents: ["animated-grid-pattern", "grid-pattern"] },
  { name: "light-rays", category: "backgrounds", description: "Light rays background", useCases: ["Background effects", "Light effects", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Light rays", "Background effect", "Decorative background"], whenToUse: ["Background effects", "Light effects", "Decorative backgrounds"], whenNotToUse: ["Simple backgrounds", "Static content"], examples: ["Light background", "Decorative effect", "Background animation"], relatedComponents: ["meteors", "particles"] },
  
  // Community Components
  { name: "shiny-button", category: "community", description: "Shiny button component", useCases: ["Premium buttons", "Shiny effects", "Animated buttons", "Eye-catching buttons"], commonPatterns: ["Shiny button", "Animated button", "Premium button"], whenToUse: ["Premium buttons", "Shiny effects", "Animated buttons"], whenNotToUse: ["Simple buttons", "Standard actions"], examples: ["Premium CTA", "Animated button", "Shiny effect"], relatedComponents: ["shimmer-button", "rainbow-button"] },
  { name: "file-tree", category: "community", description: "File tree component", useCases: ["File browsers", "Code explorers", "Directory displays", "File navigation"], commonPatterns: ["File tree", "Directory display", "File browser"], whenToUse: ["File browsers", "Code explorers", "Directory displays"], whenNotToUse: ["Simple lists", "Static displays"], examples: ["File browser", "Code explorer", "Directory display"], relatedComponents: ["terminal", "code-comparison"] },
  { name: "code-comparison", category: "community", description: "Code comparison component", useCases: ["Code diffs", "Before/after displays", "Code comparisons", "Documentation"], commonPatterns: ["Code diff", "Before/after", "Code comparison"], whenToUse: ["Code diffs", "Before/after displays", "Code comparisons"], whenNotToUse: ["Simple code", "Static displays"], examples: ["Code diff", "Before/after display", "Code comparison"], relatedComponents: ["terminal", "file-tree"] },
  { name: "scroll-progress", category: "community", description: "Scroll progress indicator", useCases: ["Scroll indicators", "Progress bars", "Reading progress", "Scroll feedback"], commonPatterns: ["Scroll progress", "Reading indicator", "Progress bar"], whenToUse: ["Scroll indicators", "Progress bars", "Reading progress"], whenNotToUse: ["Simple scrolling", "Static content"], examples: ["Reading progress", "Scroll indicator", "Progress bar"], relatedComponents: ["progress", "scroll-area"] },
  { name: "neon-gradient-card", category: "community", description: "Neon gradient card", useCases: ["Premium cards", "Neon effects", "Gradient cards", "Eye-catching cards"], commonPatterns: ["Neon card", "Premium card", "Gradient card"], whenToUse: ["Premium cards", "Neon effects", "Gradient cards"], whenNotToUse: ["Simple cards", "Static displays"], examples: ["Premium card", "Neon effect", "Gradient card"], relatedComponents: ["magic-card", "card"] },
  { name: "comic-text", category: "community", description: "Comic text effect", useCases: ["Comic styles", "Playful text", "Text effects", "Decorative text"], commonPatterns: ["Comic text", "Playful effect", "Text style"], whenToUse: ["Comic styles", "Playful text", "Text effects"], whenNotToUse: ["Formal text", "Simple displays"], examples: ["Comic heading", "Playful text", "Text effect"], relatedComponents: ["text-animate", "comic-text"] },
  { name: "cool-mode", category: "community", description: "Cool mode effect", useCases: ["Cool effects", "Interactive effects", "Visual effects", "Decorative effects"], commonPatterns: ["Cool effect", "Interactive mode", "Visual effect"], whenToUse: ["Cool effects", "Interactive effects", "Visual effects"], whenNotToUse: ["Simple displays", "Static content"], examples: ["Cool effect", "Interactive mode", "Visual effect"], relatedComponents: ["particles", "meteors"] },
  { name: "pixel-image", category: "community", description: "Pixel image effect", useCases: ["Pixel art", "Retro images", "Image effects", "Nostalgic designs"], commonPatterns: ["Pixel image", "Retro effect", "Image style"], whenToUse: ["Pixel art", "Retro images", "Image effects"], whenNotToUse: ["High-res images", "Simple displays"], examples: ["Pixel art", "Retro image", "Image effect"], relatedComponents: ["image", "retro-grid"] },
  { name: "pulsating-button", category: "community", description: "Pulsating button", useCases: ["Pulsating buttons", "Animated buttons", "Attention-grabbing buttons", "Button effects"], commonPatterns: ["Pulsating button", "Animated button", "Button effect"], whenToUse: ["Pulsating buttons", "Animated buttons", "Attention-grabbing buttons"], whenNotToUse: ["Simple buttons", "Standard actions"], examples: ["Pulsating CTA", "Animated button", "Button effect"], relatedComponents: ["ripple-button", "shimmer-button"] },
  { name: "warp-background", category: "community", description: "Warp background effect", useCases: ["Background effects", "Warp effects", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Warp background", "Decorative effect", "Background animation"], whenToUse: ["Background effects", "Warp effects", "Decorative backgrounds"], whenNotToUse: ["Simple backgrounds", "Static content"], examples: ["Warp background", "Decorative effect", "Background animation"], relatedComponents: ["particles", "meteors"] },
  { name: "interactive-hover-button", category: "community", description: "Interactive hover button", useCases: ["Interactive buttons", "Hover effects", "Button animations", "Interactive elements"], commonPatterns: ["Interactive button", "Hover effect", "Button animation"], whenToUse: ["Interactive buttons", "Hover effects", "Button animations"], whenNotToUse: ["Simple buttons", "Standard actions"], examples: ["Interactive button", "Hover effect", "Button animation"], relatedComponents: ["ripple-button", "shimmer-button"] },
  { name: "animated-circular-progress-bar", category: "community", description: "Animated circular progress bar", useCases: ["Progress indicators", "Circular progress", "Loading states", "Progress displays"], commonPatterns: ["Circular progress", "Progress indicator", "Loading state"], whenToUse: ["Progress indicators", "Circular progress", "Loading states"], whenNotToUse: ["Simple progress", "Static displays"], examples: ["Circular progress", "Progress indicator", "Loading state"], relatedComponents: ["progress", "spinner"] }
];

// Generate resources from all components
export const magicUIResources = allMagicUIComponents.map(comp => ({
  uri: `magicui://${comp.name}`,
  name: comp.name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
  description: comp.description,
  mimeType: "text/plain"
}));

/**
 * Handle Magic UI tool calls
 */
export async function handleMagicUITool(name, args) {
  switch (name) {
    case "magicui_get_component": {
      const componentName = args?.componentName;
      if (!componentName) {
        throw new Error("componentName is required");
      }
      
      // In production, fetch from Magic UI's actual component library
      // For now, return a placeholder that indicates Magic UI integration
      return {
        content: [
          {
            type: "text",
            text: `// Magic UI Component: ${componentName}\n` +
                  `// This component is available from Magic UI\n` +
                  `// Visit https://magicui.design to see the full component\n\n` +
                  `// To get the actual component code, integrate with Magic UI's API or component library\n` +
                  `// Example usage: import { ${componentName} } from '@magicui/react'`
          }
        ]
      };
    }
    
    case "magicui_list_components": {
      const category = args?.category;
      
      const filtered = category 
        ? allMagicUIComponents.filter(c => c.category === category)
        : allMagicUIComponents;
      
      // Also include available categories
      const categories = [...new Set(allMagicUIComponents.map(c => c.category))];
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ 
              components: filtered,
              total: allMagicUIComponents.length,
              categories: categories,
              filtered: filtered.length
            }, null, 2)
          }
        ]
      };
    }
    
    case "magicui_search_components": {
      const query = args?.query?.toLowerCase() || "";
      
      const results = allMagicUIComponents.filter(c => {
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
              total: allMagicUIComponents.length
            }, null, 2)
          }
        ]
      };
    }
    
    case "magicui_get_component_context": {
      const componentName = args?.componentName;
      if (!componentName) {
        throw new Error("componentName is required");
      }
      
      const component = allMagicUIComponents.find(c => c.name === componentName);
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
      throw new Error(`Unknown Magic UI tool: ${name}`);
  }
}

/**
 * Handle Magic UI resource reads
 */
export async function handleMagicUIResource(uri) {
  if (!uri.startsWith("magicui://")) {
    return null;
  }
  
  const componentName = uri.replace("magicui://", "");
  const component = allMagicUIComponents.find(c => c.name === componentName);
  
  let contextText = "";
  if (component) {
    contextText = `\n\n// Use Cases:\n${(component.useCases || []).map(uc => `// - ${uc}`).join("\n")}` +
                  `\n\n// Common Patterns:\n${(component.commonPatterns || []).map(p => `// - ${p}`).join("\n")}` +
                  `\n\n// When to Use:\n${(component.whenToUse || []).map(w => `// - ${w}`).join("\n")}` +
                  `\n\n// When NOT to Use:\n${(component.whenNotToUse || []).map(w => `// - ${w}`).join("\n")}` +
                  `\n\n// Examples:\n${(component.examples || []).map(e => `// - ${e}`).join("\n")}` +
                  `\n\n// Related Components: ${(component.relatedComponents || []).join(", ")}`;
  }
  
  // In production, fetch actual component code from Magic UI
  return {
    contents: [
      {
        uri,
        mimeType: "text/plain",
        text: `// Magic UI Component: ${componentName}\n` +
              `// Full component code available at https://magicui.design/components/${componentName}\n` +
              `// Install: npm install @magicui/react\n` +
              `// Usage: import { ${componentName} } from '@magicui/react'` +
              contextText
      }
    ]
  };
}

