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
// Enhanced with use cases, patterns, and context
const allAceternityComponents = [
  // Backgrounds & Effects
  { name: "dotted-glow-background", category: "backgrounds", description: "A background effect with opacity animation, glow effect and more", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Glow background", "Animated background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Decorative elements"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Premium page background", "Animated background"], relatedComponents: ["background-gradient", "glowing-effect"] },
  { name: "background-ripple-effect", category: "backgrounds", description: "A grid of cells that ripple when clicked", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Interactive backgrounds"], commonPatterns: ["Ripple background", "Interactive background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Interactive elements"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Interactive background", "Premium background"], relatedComponents: ["background-gradient", "ripple"] },
  { name: "sparkles", category: "backgrounds", description: "A configurable sparkles component that can be used as a background", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Sparkles background", "Animated background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Decorative elements"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Premium page background", "Animated background"], relatedComponents: ["background-gradient", "glowing-stars"] },
  { name: "background-gradient", category: "backgrounds", description: "An animated gradient that sits at the background", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Gradient background", "Animated background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Decorative elements"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Premium page background", "Animated background"], relatedComponents: ["gradient-animation", "dotted-glow-background"] },
  { name: "gradient-animation", category: "backgrounds", description: "A smooth and elegant background gradient animation", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Gradient animation", "Animated background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Decorative elements"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Premium page background", "Animated background"], relatedComponents: ["background-gradient", "wavy-background"] },
  { name: "wavy-background", category: "backgrounds", description: "A cool background effect with waves that move", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Wavy background", "Animated background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Decorative elements"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Premium page background", "Animated background"], relatedComponents: ["background-lines", "gradient-animation"] },
  { name: "background-boxes", category: "backgrounds", description: "A full width background box container that highlights on hover", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Interactive backgrounds"], commonPatterns: ["Box background", "Interactive background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Interactive elements"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Interactive background", "Premium background"], relatedComponents: ["background-gradient", "canvas-reveal-effect"] },
  { name: "background-beams", category: "backgrounds", description: "Multiple background beams that follow a path of SVG", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Beam background", "Animated background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Decorative elements"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Premium page background", "Animated background"], relatedComponents: ["tracing-beam", "background-beams-with-collision"] },
  { name: "background-beams-with-collision", category: "backgrounds", description: "Exploding beams in the background", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Exploding beams", "Animated background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Decorative elements"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Premium page background", "Animated background"], relatedComponents: ["background-beams", "meteors"] },
  { name: "background-lines", category: "backgrounds", description: "A set of svg paths that animate in a wave pattern", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Line background", "Animated background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Decorative elements"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Premium page background", "Animated background"], relatedComponents: ["wavy-background", "tracing-beam"] },
  { name: "aurora-background", category: "backgrounds", description: "A subtle Aurora or Southern Lights background", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Aurora background", "Animated background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Decorative elements"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Premium page background", "Animated background"], relatedComponents: ["background-gradient", "glowing-stars"] },
  { name: "meteors", category: "backgrounds", description: "A group of beams in the background of a container", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Meteor background", "Animated background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Decorative elements"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Premium page background", "Animated background"], relatedComponents: ["shooting-stars", "background-beams-with-collision"] },
  { name: "glowing-stars", category: "backgrounds", description: "Card background stars that animate on hover", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Card backgrounds"], commonPatterns: ["Star background", "Animated background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Card backgrounds"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Card background", "Animated background"], relatedComponents: ["shooting-stars", "aurora-background"] },
  { name: "shooting-stars", category: "backgrounds", description: "A shooting star animation on top of a starry background", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Shooting star background", "Animated background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Decorative elements"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Premium page background", "Animated background"], relatedComponents: ["meteors", "glowing-stars"] },
  { name: "vortex", category: "backgrounds", description: "A wavy, swirly, vortex background ideal for CTAs", useCases: ["Hero sections", "Background effects", "CTA backgrounds", "Visual effects"], commonPatterns: ["Vortex background", "CTA background", "Premium background"], whenToUse: ["Premium backgrounds", "CTA sections", "Animated effects"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["CTA section background", "Hero section background", "Premium background"], relatedComponents: ["background-gradient", "wavy-background"] },
  { name: "spotlight", category: "backgrounds", description: "A spotlight effect with Tailwind CSS", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Spotlight background", "Animated background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Decorative elements"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Premium page background", "Animated background"], relatedComponents: ["spotlight-new", "lamp-effect"] },
  { name: "spotlight-new", category: "backgrounds", description: "A new spotlight component with left and right spotlight", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Spotlight background", "Animated background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Decorative elements"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Premium page background", "Animated background"], relatedComponents: ["spotlight", "lamp-effect"] },
  { name: "canvas-reveal-effect", category: "backgrounds", description: "A dot background that expands on hover", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Interactive backgrounds"], commonPatterns: ["Reveal background", "Interactive background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Interactive elements"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Interactive background", "Premium background"], relatedComponents: ["background-boxes", "svg-mask-effect"] },
  { name: "svg-mask-effect", category: "backgrounds", description: "A mask reveal effect, hover the cursor over a container", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Interactive backgrounds"], commonPatterns: ["Mask background", "Interactive background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Interactive elements"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Interactive background", "Premium background"], relatedComponents: ["canvas-reveal-effect", "tracing-beam"] },
  { name: "tracing-beam", category: "backgrounds", description: "A Beam that follows the path of an SVG as the user scrolls", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Scroll effects"], commonPatterns: ["Tracing beam", "Scroll background", "Premium background"], whenToUse: ["Premium backgrounds", "Scroll effects", "Animated effects"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Scroll background", "Premium background"], relatedComponents: ["background-beams", "background-lines"] },
  { name: "lamp-effect", category: "backgrounds", description: "A lamp effect as seen on linear, great for section headers", useCases: ["Hero sections", "Section headers", "Background effects", "Visual effects"], commonPatterns: ["Lamp background", "Section header", "Premium background"], whenToUse: ["Premium backgrounds", "Section headers", "Animated effects"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Section header background", "Hero section background", "Premium background"], relatedComponents: ["spotlight", "glowing-effect"] },
  { name: "grid-and-dot-backgrounds", category: "backgrounds", description: "A simple grid and dots background", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Grid background", "Animated background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Decorative elements"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Premium page background", "Animated background"], relatedComponents: ["canvas-reveal-effect", "background-boxes"] },
  { name: "glowing-effect", category: "backgrounds", description: "A border glowing effect that adapts to any container", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Border effects"], commonPatterns: ["Glow background", "Border effect", "Premium background"], whenToUse: ["Premium backgrounds", "Border effects", "Animated effects"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Border effect", "Premium background"], relatedComponents: ["dotted-glow-background", "lamp-effect"] },
  { name: "google-gemini-effect", category: "backgrounds", description: "An effect of SVGs as seen on the Google Gemini Website", useCases: ["Hero sections", "Background effects", "Decorative backgrounds", "Visual effects"], commonPatterns: ["Gemini background", "Animated background", "Premium background"], whenToUse: ["Premium backgrounds", "Animated effects", "Decorative elements"], whenNotToUse: ["Simple backgrounds", "Static content", "Performance-critical pages"], examples: ["Hero section background", "Premium page background", "Animated background"], relatedComponents: ["background-beams", "svg-mask-effect"] },
  
  // Card Components
  { name: "tooltip-card", category: "cards", description: "A tooltip card container that follows mouse pointer when hovered", useCases: ["Interactive cards", "Hover effects", "Card animations", "Tooltip cards"], commonPatterns: ["Tooltip card", "Interactive card", "Premium card"], whenToUse: ["Interactive cards", "Hover effects", "Tooltip displays"], whenNotToUse: ["Static cards", "Simple displays", "Basic layouts"], examples: ["Interactive card", "Tooltip card", "Premium card"], relatedComponents: ["hover-card", "card-hover-effect"] },
  { name: "pixelated-canvas", category: "cards", description: "Convert any image to a pixelated canvas mouse distortion effects", useCases: ["Interactive cards", "Image effects", "Card animations", "Distortion effects"], commonPatterns: ["Pixelated card", "Interactive card", "Premium card"], whenToUse: ["Interactive cards", "Image effects", "Distortion effects"], whenNotToUse: ["Static cards", "Simple displays", "Basic layouts"], examples: ["Interactive card", "Image effect card", "Premium card"], relatedComponents: ["3d-card-effect", "wobble-card"] },
  { name: "3d-card-effect", category: "cards", description: "A card perspective effect, hover over the card to elevate card elements", useCases: ["Interactive cards", "Hover effects", "Card animations", "3D cards"], commonPatterns: ["3D card", "Interactive card", "Premium card"], whenToUse: ["Interactive cards", "Hover effects", "3D effects"], whenNotToUse: ["Static cards", "Simple displays", "Basic layouts"], examples: ["Interactive card", "3D card", "Premium card"], relatedComponents: ["comet-card", "pixelated-canvas"] },
  { name: "evervault-card", category: "cards", description: "A cool card with amazing hover effect, reveals encrypted text", useCases: ["Interactive cards", "Hover effects", "Card animations", "Premium cards"], commonPatterns: ["Encrypted card", "Interactive card", "Premium card"], whenToUse: ["Interactive cards", "Hover effects", "Text reveals"], whenNotToUse: ["Static cards", "Simple displays", "Basic layouts"], examples: ["Interactive card", "Encrypted text card", "Premium card"], relatedComponents: ["card-hover-effect", "text-reveal-card"] },
  { name: "card-stack", category: "cards", description: "Cards stack on top of each other after some interval", useCases: ["Interactive cards", "Card animations", "Stacking cards", "Card displays"], commonPatterns: ["Stacked cards", "Animated card", "Premium card"], whenToUse: ["Card stacks", "Animated cards", "Card displays"], whenNotToUse: ["Static cards", "Simple displays", "Basic layouts"], examples: ["Stacked card display", "Animated card", "Premium card"], relatedComponents: ["infinite-moving-cards", "card-hover-effect"] },
  { name: "card-hover-effect", category: "cards", description: "Hover over the cards and the effect slides to the currently hovered card", useCases: ["Interactive cards", "Hover effects", "Card animations", "Premium cards"], commonPatterns: ["Hover card", "Interactive card", "Premium card"], whenToUse: ["Interactive cards", "Hover effects", "Card animations"], whenNotToUse: ["Static cards", "Simple displays", "Basic layouts"], examples: ["Interactive card", "Hover effect card", "Premium card"], relatedComponents: ["tooltip-card", "focus-cards"] },
  { name: "wobble-card", category: "cards", description: "A card effect that translates and scales on mousemove", useCases: ["Interactive cards", "Hover effects", "Card animations", "Wobble effects"], commonPatterns: ["Wobble card", "Interactive card", "Premium card"], whenToUse: ["Interactive cards", "Hover effects", "Wobble effects"], whenNotToUse: ["Static cards", "Simple displays", "Basic layouts"], examples: ["Interactive card", "Wobble effect card", "Premium card"], relatedComponents: ["3d-card-effect", "draggable-card"] },
  { name: "expandable-card", category: "cards", description: "Click cards to expand them and show additional information", useCases: ["Interactive cards", "Expandable content", "Card animations", "Premium cards"], commonPatterns: ["Expandable card", "Interactive card", "Premium card"], whenToUse: ["Expandable content", "Interactive cards", "Card animations"], whenNotToUse: ["Static cards", "Simple displays", "Basic layouts"], examples: ["Expandable card", "Interactive card", "Premium card"], relatedComponents: ["collapsible", "card-hover-effect"] },
  { name: "card-spotlight", category: "cards", description: "A card component with a spotlight effect revealing a radial gradient", useCases: ["Interactive cards", "Hover effects", "Card animations", "Spotlight effects"], commonPatterns: ["Spotlight card", "Interactive card", "Premium card"], whenToUse: ["Interactive cards", "Hover effects", "Spotlight effects"], whenNotToUse: ["Static cards", "Simple displays", "Basic layouts"], examples: ["Interactive card", "Spotlight effect card", "Premium card"], relatedComponents: ["glare-card", "card-hover-effect"] },
  { name: "focus-cards", category: "cards", description: "Hover over the card to focus on it, blurring the rest", useCases: ["Interactive cards", "Hover effects", "Card animations", "Focus effects"], commonPatterns: ["Focus card", "Interactive card", "Premium card"], whenToUse: ["Interactive cards", "Hover effects", "Focus effects"], whenNotToUse: ["Static cards", "Simple displays", "Basic layouts"], examples: ["Interactive card", "Focus effect card", "Premium card"], relatedComponents: ["card-hover-effect", "expandable-card"] },
  { name: "infinite-moving-cards", category: "cards", description: "A customizable group of cards that move infinitely in a loop", useCases: ["Interactive cards", "Card animations", "Moving cards", "Carousel cards"], commonPatterns: ["Moving cards", "Animated card", "Premium card"], whenToUse: ["Card carousels", "Animated cards", "Moving displays"], whenNotToUse: ["Static cards", "Simple displays", "Basic layouts"], examples: ["Moving card display", "Animated card", "Premium card"], relatedComponents: ["card-stack", "carousel"] },
  { name: "draggable-card", category: "cards", description: "A tiltable, draggable card component that jumps on bounds", useCases: ["Interactive cards", "Draggable content", "Card animations", "Premium cards"], commonPatterns: ["Draggable card", "Interactive card", "Premium card"], whenToUse: ["Draggable content", "Interactive cards", "Card animations"], whenNotToUse: ["Static cards", "Simple displays", "Basic layouts"], examples: ["Draggable card", "Interactive card", "Premium card"], relatedComponents: ["wobble-card", "3d-card-effect"] },
  { name: "comet-card", category: "cards", description: "A perspective, 3D, Tilt card as seen on Perplexity Comet's website", useCases: ["Interactive cards", "Hover effects", "Card animations", "3D cards"], commonPatterns: ["3D card", "Interactive card", "Premium card"], whenToUse: ["Interactive cards", "Hover effects", "3D effects"], whenNotToUse: ["Static cards", "Simple displays", "Basic layouts"], examples: ["Interactive card", "3D card", "Premium card"], relatedComponents: ["3d-card-effect", "glare-card"] },
  { name: "glare-card", category: "cards", description: "A glare effect that happens on hover, as seen on Linear's website", useCases: ["Interactive cards", "Hover effects", "Card animations", "Glare effects"], commonPatterns: ["Glare card", "Interactive card", "Premium card"], whenToUse: ["Interactive cards", "Hover effects", "Glare effects"], whenNotToUse: ["Static cards", "Simple displays", "Basic layouts"], examples: ["Interactive card", "Glare effect card", "Premium card"], relatedComponents: ["card-spotlight", "comet-card"] },
  { name: "direction-aware-hover", category: "cards", description: "A direction aware hover effect using Framer Motion", useCases: ["Interactive cards", "Hover effects", "Card animations", "Direction effects"], commonPatterns: ["Direction card", "Interactive card", "Premium card"], whenToUse: ["Interactive cards", "Hover effects", "Direction effects"], whenNotToUse: ["Static cards", "Simple displays", "Basic layouts"], examples: ["Interactive card", "Direction effect card", "Premium card"], relatedComponents: ["card-hover-effect", "wobble-card"] },
  
  // Scroll & Parallax
  { name: "parallax-scroll", category: "scroll", description: "Parallax scroll effect", useCases: ["Scroll animations", "Parallax effects", "Scroll reveals", "Interactive scrolling"], commonPatterns: ["Parallax scroll", "Scroll animation", "Parallax effect"], whenToUse: ["Scroll animations", "Parallax effects", "Scroll reveals"], whenNotToUse: ["Simple scrolling", "Static content", "Basic pages"], examples: ["Parallax scroll example", "Scroll animation", "Parallax effect"], relatedComponents: ["hero-parallax", "sticky-scroll-reveal"] },
  { name: "sticky-scroll-reveal", category: "scroll", description: "A sticky container that sticks while scrolling, text reveals on scroll", useCases: ["Scroll animations", "Parallax effects", "Scroll reveals", "Sticky content"], commonPatterns: ["Sticky scroll", "Scroll reveal", "Parallax effect"], whenToUse: ["Scroll animations", "Sticky content", "Scroll reveals"], whenNotToUse: ["Simple scrolling", "Static content", "Basic pages"], examples: ["Sticky scroll example", "Scroll reveal", "Parallax effect"], relatedComponents: ["parallax-scroll", "text-reveal-card"] },
  { name: "macbook-scroll", category: "scroll", description: "Scroll through the page and see the image come out of the screen", useCases: ["Scroll animations", "Parallax effects", "Scroll reveals", "Device showcases"], commonPatterns: ["Macbook scroll", "Scroll animation", "Parallax effect"], whenToUse: ["Scroll animations", "Device showcases", "Parallax effects"], whenNotToUse: ["Simple scrolling", "Static content", "Basic pages"], examples: ["Macbook scroll example", "Scroll animation", "Parallax effect"], relatedComponents: ["parallax-scroll", "container-scroll-animation"] },
  { name: "container-scroll-animation", category: "scroll", description: "A scroll animation that rotates in 3d on scroll", useCases: ["Scroll animations", "Parallax effects", "Scroll reveals", "3D scroll"], commonPatterns: ["3D scroll", "Scroll animation", "Parallax effect"], whenToUse: ["Scroll animations", "3D effects", "Parallax effects"], whenNotToUse: ["Simple scrolling", "Static content", "Basic pages"], examples: ["3D scroll example", "Scroll animation", "Parallax effect"], relatedComponents: ["hero-parallax", "macbook-scroll"] },
  { name: "hero-parallax", category: "scroll", description: "A scroll effect with rotation, translation and opacity animations", useCases: ["Scroll animations", "Parallax effects", "Scroll reveals", "Hero sections"], commonPatterns: ["Hero parallax", "Scroll animation", "Parallax effect"], whenToUse: ["Scroll animations", "Hero sections", "Parallax effects"], whenNotToUse: ["Simple scrolling", "Static content", "Basic pages"], examples: ["Hero parallax example", "Scroll animation", "Parallax effect"], relatedComponents: ["parallax-scroll", "container-scroll-animation"] },
  { name: "parallax-grid-scroll", category: "scroll", description: "A grid where two columns scroll in opposite directions", useCases: ["Scroll animations", "Parallax effects", "Scroll reveals", "Grid scroll"], commonPatterns: ["Grid parallax", "Scroll animation", "Parallax effect"], whenToUse: ["Scroll animations", "Grid layouts", "Parallax effects"], whenNotToUse: ["Simple scrolling", "Static content", "Basic pages"], examples: ["Grid parallax example", "Scroll animation", "Parallax effect"], relatedComponents: ["parallax-scroll", "layout-grid"] },
  
  // Text Components
  { name: "encrypted-text", category: "text", description: "A text component that reveals the text gradually, gibberish effect", useCases: ["Text animations", "Text effects", "Dynamic text", "Text reveals"], commonPatterns: ["Encrypted text", "Text animation", "Dynamic text"], whenToUse: ["Text animations", "Text effects", "Text reveals"], whenNotToUse: ["Static text", "Simple displays", "Plain text"], examples: ["Encrypted text example", "Text animation", "Dynamic text"], relatedComponents: ["text-generate-effect", "text-reveal-card"] },
  { name: "layout-text-flip", category: "text", description: "A text flip effect that changes the layout of surrounding text", useCases: ["Text animations", "Text effects", "Dynamic text", "Text flips"], commonPatterns: ["Text flip", "Text animation", "Dynamic text"], whenToUse: ["Text animations", "Text effects", "Text flips"], whenNotToUse: ["Static text", "Simple displays", "Plain text"], examples: ["Text flip example", "Text animation", "Dynamic text"], relatedComponents: ["container-text-flip", "flip-words"] },
  { name: "colourful-text", category: "text", description: "A text component with various colours, filter and scale effects", useCases: ["Text animations", "Text effects", "Dynamic text", "Colorful text"], commonPatterns: ["Colorful text", "Text animation", "Dynamic text"], whenToUse: ["Text animations", "Text effects", "Colorful displays"], whenNotToUse: ["Static text", "Simple displays", "Plain text"], examples: ["Colorful text example", "Text animation", "Dynamic text"], relatedComponents: ["text-hover-effect", "hero-highlight"] },
  { name: "text-generate-effect", category: "text", description: "A cool text effect that fades in text on page load, one by one", useCases: ["Text animations", "Text effects", "Dynamic text", "Text reveals"], commonPatterns: ["Text generate", "Text animation", "Dynamic text"], whenToUse: ["Text animations", "Text effects", "Text reveals"], whenNotToUse: ["Static text", "Simple displays", "Plain text"], examples: ["Text generate example", "Text animation", "Dynamic text"], relatedComponents: ["typewriter-effect", "encrypted-text"] },
  { name: "typewriter-effect", category: "text", description: "Text generates as if it is being typed on the screen", useCases: ["Text animations", "Text effects", "Dynamic text", "Typewriter text"], commonPatterns: ["Typewriter text", "Text animation", "Dynamic text"], whenToUse: ["Text animations", "Text effects", "Typewriter displays"], whenNotToUse: ["Static text", "Simple displays", "Plain text"], examples: ["Typewriter text example", "Text animation", "Dynamic text"], relatedComponents: ["text-generate-effect", "flip-words"] },
  { name: "flip-words", category: "text", description: "A component that flips through a list of words", useCases: ["Text animations", "Text effects", "Dynamic text", "Word flips"], commonPatterns: ["Word flip", "Text animation", "Dynamic text"], whenToUse: ["Text animations", "Text effects", "Word displays"], whenNotToUse: ["Static text", "Simple displays", "Plain text"], examples: ["Word flip example", "Text animation", "Dynamic text"], relatedComponents: ["container-text-flip", "layout-text-flip"] },
  { name: "text-hover-effect", category: "text", description: "A text hover effect that animates and outlines gradient on hover", useCases: ["Text animations", "Text effects", "Dynamic text", "Hover text"], commonPatterns: ["Hover text", "Text animation", "Dynamic text"], whenToUse: ["Text animations", "Text effects", "Hover effects"], whenNotToUse: ["Static text", "Simple displays", "Plain text"], examples: ["Hover text example", "Text animation", "Dynamic text"], relatedComponents: ["colourful-text", "hero-highlight"] },
  { name: "container-text-flip", category: "text", description: "A container that flips through words, animating the width", useCases: ["Text animations", "Text effects", "Dynamic text", "Text flips"], commonPatterns: ["Text flip", "Text animation", "Dynamic text"], whenToUse: ["Text animations", "Text effects", "Text flips"], whenNotToUse: ["Static text", "Simple displays", "Plain text"], examples: ["Text flip example", "Text animation", "Dynamic text"], relatedComponents: ["flip-words", "layout-text-flip"] },
  { name: "hero-highlight", category: "text", description: "A background effect with a text highlight component", useCases: ["Text animations", "Text effects", "Dynamic text", "Hero text"], commonPatterns: ["Hero text", "Text animation", "Dynamic text"], whenToUse: ["Text animations", "Hero sections", "Text highlights"], whenNotToUse: ["Static text", "Simple displays", "Plain text"], examples: ["Hero text example", "Text animation", "Dynamic text"], relatedComponents: ["colourful-text", "text-hover-effect"] },
  { name: "text-reveal-card", category: "text", description: "Mousemove effect to reveal text content at the bottom of the card", useCases: ["Text animations", "Text effects", "Dynamic text", "Text reveals"], commonPatterns: ["Text reveal", "Text animation", "Dynamic text"], whenToUse: ["Text animations", "Text effects", "Text reveals"], whenNotToUse: ["Static text", "Simple displays", "Plain text"], examples: ["Text reveal example", "Text animation", "Dynamic text"], relatedComponents: ["encrypted-text", "sticky-scroll-reveal"] },
  
  // Buttons
  { name: "tailwind-css-buttons", category: "buttons", description: "A curated list of awesome, battle tested Tailwind CSS buttons", useCases: ["Premium buttons", "Animated buttons", "Interactive buttons", "Button collections"], commonPatterns: ["Button collection", "Animated button", "Premium button"], whenToUse: ["Premium buttons", "Animated buttons", "Button collections"], whenNotToUse: ["Simple buttons", "Standard actions", "Basic forms"], examples: ["Button collection example", "Animated button", "Premium button"], relatedComponents: ["hover-border-gradient", "moving-border"] },
  { name: "hover-border-gradient", category: "buttons", description: "A hover effect that expands to the entire container with a gradient border", useCases: ["Premium buttons", "Animated buttons", "Interactive buttons", "Gradient buttons"], commonPatterns: ["Gradient button", "Animated button", "Premium button"], whenToUse: ["Premium buttons", "Animated buttons", "Gradient effects"], whenNotToUse: ["Simple buttons", "Standard actions", "Basic forms"], examples: ["Gradient button example", "Animated button", "Premium button"], relatedComponents: ["moving-border", "stateful-button"] },
  { name: "moving-border", category: "buttons", description: "A border that moves around the container", useCases: ["Premium buttons", "Animated buttons", "Interactive buttons", "Border buttons"], commonPatterns: ["Moving border button", "Animated button", "Premium button"], whenToUse: ["Premium buttons", "Animated buttons", "Border effects"], whenNotToUse: ["Simple buttons", "Standard actions", "Basic forms"], examples: ["Moving border button example", "Animated button", "Premium button"], relatedComponents: ["hover-border-gradient", "stateful-button"] },
  { name: "stateful-button", category: "buttons", description: "A button that shows a loading state when clicked", useCases: ["Premium buttons", "Animated buttons", "Interactive buttons", "Loading buttons"], commonPatterns: ["Loading button", "Animated button", "Premium button"], whenToUse: ["Premium buttons", "Loading states", "Interactive buttons"], whenNotToUse: ["Simple buttons", "Standard actions", "Basic forms"], examples: ["Loading button example", "Animated button", "Premium button"], relatedComponents: ["multi-step-loader", "loader"] },
  
  // Loaders
  { name: "multi-step-loader", category: "loaders", description: "A step loader for screens that take a lot of time to load", useCases: ["Loading states", "Progress indicators", "Async operations", "Multi-step loading"], commonPatterns: ["Multi-step loader", "Loading animation", "Progress indicator"], whenToUse: ["Loading states", "Multi-step processes", "Progress indicators"], whenNotToUse: ["Simple loading", "Static content", "Instant actions"], examples: ["Multi-step loader example", "Loading animation", "Progress indicator"], relatedComponents: ["loader", "stateful-button"] },
  { name: "loader", category: "loaders", description: "A set of simple and minimal loaders", useCases: ["Loading states", "Progress indicators", "Async operations", "Loading animations"], commonPatterns: ["Loader", "Loading animation", "Progress indicator"], whenToUse: ["Loading states", "Progress indicators", "Async operations"], whenNotToUse: ["Simple loading", "Static content", "Instant actions"], examples: ["Loader example", "Loading animation", "Progress indicator"], relatedComponents: ["multi-step-loader", "spinner"] },
  
  // Navigation
  { name: "floating-navbar", category: "navigation", description: "A sticky Navbar that hides on scroll, reveals when scrolled up", useCases: ["Navigation bars", "Menus", "Sidebars", "Sticky navigation"], commonPatterns: ["Floating navbar", "Navigation component", "Menu component"], whenToUse: ["Navigation bars", "Sticky navigation", "Menus"], whenNotToUse: ["Simple links", "Static navigation", "Basic menus"], examples: ["Floating navbar example", "Navigation component", "Menu component"], relatedComponents: ["navbar-menu", "resizable-navbar"] },
  { name: "navbar-menu", category: "navigation", description: "A navbar menu that animates its children on hover", useCases: ["Navigation bars", "Menus", "Sidebars", "Animated menus"], commonPatterns: ["Navbar menu", "Navigation component", "Menu component"], whenToUse: ["Navigation bars", "Animated menus", "Menus"], whenNotToUse: ["Simple links", "Static navigation", "Basic menus"], examples: ["Navbar menu example", "Navigation component", "Menu component"], relatedComponents: ["floating-navbar", "sidebar"] },
  { name: "sidebar", category: "navigation", description: "Expandable sidebar that expands on hover", useCases: ["Navigation bars", "Menus", "Sidebars", "Expandable navigation"], commonPatterns: ["Sidebar", "Navigation component", "Menu component"], whenToUse: ["Navigation bars", "Sidebars", "Expandable menus"], whenNotToUse: ["Simple links", "Static navigation", "Basic menus"], examples: ["Sidebar example", "Navigation component", "Menu component"], relatedComponents: ["navbar-menu", "floating-dock"] },
  { name: "floating-dock", category: "navigation", description: "A floating dock mac os style component", useCases: ["Navigation bars", "Menus", "Sidebars", "Dock navigation"], commonPatterns: ["Floating dock", "Navigation component", "Menu component"], whenToUse: ["Navigation bars", "Dock navigation", "Menus"], whenNotToUse: ["Simple links", "Static navigation", "Basic menus"], examples: ["Floating dock example", "Navigation component", "Menu component"], relatedComponents: ["sidebar", "tabs"] },
  { name: "tabs", category: "navigation", description: "Tabs to switch content, click on a tab to check background animation", useCases: ["Navigation bars", "Menus", "Sidebars", "Tab navigation"], commonPatterns: ["Tabs", "Navigation component", "Menu component"], whenToUse: ["Navigation bars", "Tab navigation", "Menus"], whenNotToUse: ["Simple links", "Static navigation", "Basic menus"], examples: ["Tabs example", "Navigation component", "Menu component"], relatedComponents: ["floating-dock", "navbar-menu"] },
  { name: "resizable-navbar", category: "navigation", description: "A navbar that changes width on scroll", useCases: ["Navigation bars", "Menus", "Sidebars", "Resizable navigation"], commonPatterns: ["Resizable navbar", "Navigation component", "Menu component"], whenToUse: ["Navigation bars", "Resizable navigation", "Menus"], whenNotToUse: ["Simple links", "Static navigation", "Basic menus"], examples: ["Resizable navbar example", "Navigation component", "Menu component"], relatedComponents: ["floating-navbar", "sticky-banner"] },
  { name: "sticky-banner", category: "navigation", description: "A banner component that sticks to top, hides when user scrolls down", useCases: ["Navigation bars", "Menus", "Sidebars", "Sticky banners"], commonPatterns: ["Sticky banner", "Navigation component", "Menu component"], whenToUse: ["Navigation bars", "Sticky banners", "Menus"], whenNotToUse: ["Simple links", "Static navigation", "Basic menus"], examples: ["Sticky banner example", "Navigation component", "Menu component"], relatedComponents: ["floating-navbar", "resizable-navbar"] },
  
  // Inputs & Forms
  { name: "signup-form", category: "forms", description: "A customizable form built on top of shadcn's input and label", useCases: ["Form inputs", "Form animations", "Interactive forms", "Signup forms"], commonPatterns: ["Signup form", "Form component", "Interactive form"], whenToUse: ["Form inputs", "Signup forms", "Interactive forms"], whenNotToUse: ["Simple inputs", "Basic forms", "Static forms"], examples: ["Signup form example", "Form component", "Interactive form"], relatedComponents: ["placeholders-and-vanish-input", "file-upload"] },
  { name: "placeholders-and-vanish-input", category: "forms", description: "Sliding in placeholders and vanish effect of input on submit", useCases: ["Form inputs", "Form animations", "Interactive forms", "Input effects"], commonPatterns: ["Animated input", "Form component", "Interactive form"], whenToUse: ["Form inputs", "Input animations", "Interactive forms"], whenNotToUse: ["Simple inputs", "Basic forms", "Static forms"], examples: ["Animated input example", "Form component", "Interactive form"], relatedComponents: ["signup-form", "file-upload"] },
  { name: "file-upload", category: "forms", description: "A minimal file upload form with background grid", useCases: ["Form inputs", "Form animations", "Interactive forms", "File uploads"], commonPatterns: ["File upload", "Form component", "Interactive form"], whenToUse: ["Form inputs", "File uploads", "Interactive forms"], whenNotToUse: ["Simple inputs", "Basic forms", "Static forms"], examples: ["File upload example", "Form component", "Interactive form"], relatedComponents: ["signup-form", "placeholders-and-vanish-input"] },
  
  // Overlays & Popovers
  { name: "animated-modal", category: "overlays", description: "A customizable, compound modal component with animated transitions", useCases: ["Modals", "Tooltips", "Popovers", "Animated modals"], commonPatterns: ["Animated modal", "Overlay component", "Modal component"], whenToUse: ["Modals", "Animated overlays", "Popovers"], whenNotToUse: ["Simple dialogs", "Basic tooltips", "Static overlays"], examples: ["Animated modal example", "Overlay component", "Modal component"], relatedComponents: ["animated-tooltip", "link-preview"] },
  { name: "animated-tooltip", category: "overlays", description: "A cool tooltip that reveals on hover, follows mouse pointer", useCases: ["Modals", "Tooltips", "Popovers", "Animated tooltips"], commonPatterns: ["Animated tooltip", "Overlay component", "Modal component"], whenToUse: ["Tooltips", "Animated overlays", "Popovers"], whenNotToUse: ["Simple dialogs", "Basic tooltips", "Static overlays"], examples: ["Animated tooltip example", "Overlay component", "Modal component"], relatedComponents: ["animated-modal", "link-preview"] },
  { name: "link-preview", category: "overlays", description: "Dynamic link previews for your anchor tags", useCases: ["Modals", "Tooltips", "Popovers", "Link previews"], commonPatterns: ["Link preview", "Overlay component", "Modal component"], whenToUse: ["Link previews", "Animated overlays", "Popovers"], whenNotToUse: ["Simple dialogs", "Basic tooltips", "Static overlays"], examples: ["Link preview example", "Overlay component", "Modal component"], relatedComponents: ["animated-modal", "animated-tooltip"] },
  
  // Carousels & Sliders
  { name: "images-slider", category: "carousels", description: "A full page slider with images that can be navigated with the keyboard", useCases: ["Image sliders", "Content carousels", "Testimonials", "Image displays"], commonPatterns: ["Image slider", "Carousel component", "Slider component"], whenToUse: ["Image sliders", "Content carousels", "Image displays"], whenNotToUse: ["Simple lists", "Static content", "Basic displays"], examples: ["Image slider example", "Carousel component", "Slider component"], relatedComponents: ["carousel", "apple-cards-carousel"] },
  { name: "carousel", category: "carousels", description: "A customizable carousel with microinteractions and slider", useCases: ["Image sliders", "Content carousels", "Testimonials", "Carousel displays"], commonPatterns: ["Carousel", "Carousel component", "Slider component"], whenToUse: ["Image sliders", "Content carousels", "Testimonials"], whenNotToUse: ["Simple lists", "Static content", "Basic displays"], examples: ["Carousel example", "Carousel component", "Slider component"], relatedComponents: ["images-slider", "testimonials"] },
  { name: "apple-cards-carousel", category: "carousels", description: "A sleek and minimal carousel implementation", useCases: ["Image sliders", "Content carousels", "Testimonials", "Card carousels"], commonPatterns: ["Apple carousel", "Carousel component", "Slider component"], whenToUse: ["Image sliders", "Card carousels", "Testimonials"], whenNotToUse: ["Simple lists", "Static content", "Basic displays"], examples: ["Apple carousel example", "Carousel component", "Slider component"], relatedComponents: ["images-slider", "carousel"] },
  { name: "testimonials", category: "carousels", description: "Minimal testimonials sections with image and quote", useCases: ["Image sliders", "Content carousels", "Testimonials", "Testimonial displays"], commonPatterns: ["Testimonials", "Carousel component", "Slider component"], whenToUse: ["Testimonials", "Content carousels", "Testimonial displays"], whenNotToUse: ["Simple lists", "Static content", "Basic displays"], examples: ["Testimonials example", "Carousel component", "Slider component"], relatedComponents: ["carousel", "animated-testimonials"] },
  { name: "animated-testimonials", category: "carousels", description: "Minimal testimonials sections with image and quote", useCases: ["Image sliders", "Content carousels", "Testimonials", "Animated testimonials"], commonPatterns: ["Animated testimonials", "Carousel component", "Slider component"], whenToUse: ["Testimonials", "Animated carousels", "Testimonial displays"], whenNotToUse: ["Simple lists", "Static content", "Basic displays"], examples: ["Animated testimonials example", "Carousel component", "Slider component"], relatedComponents: ["testimonials", "carousel"] },
  
  // Layout & Grid
  { name: "layout-grid", category: "layout", description: "A layout effect that animates the grid item on click", useCases: ["Layout grids", "Grid animations", "Layout effects", "Grid displays"], commonPatterns: ["Layout grid", "Layout component", "Grid component"], whenToUse: ["Layout grids", "Grid animations", "Layout effects"], whenNotToUse: ["Simple grids", "Static layouts", "Basic containers"], examples: ["Layout grid example", "Layout component", "Grid component"], relatedComponents: ["bento-grid", "container-cover"] },
  { name: "bento-grid", category: "layout", description: "A skewed grid layout with Title, description and a header component", useCases: ["Layout grids", "Grid animations", "Layout effects", "Bento grids"], commonPatterns: ["Bento grid", "Layout component", "Grid component"], whenToUse: ["Layout grids", "Bento layouts", "Layout effects"], whenNotToUse: ["Simple grids", "Static layouts", "Basic containers"], examples: ["Bento grid example", "Layout component", "Grid component"], relatedComponents: ["layout-grid", "container-cover"] },
  { name: "container-cover", category: "layout", description: "A Cover component that wraps any children, providing beams and space effect", useCases: ["Layout grids", "Grid animations", "Layout effects", "Container layouts"], commonPatterns: ["Container cover", "Layout component", "Grid component"], whenToUse: ["Layout grids", "Container layouts", "Layout effects"], whenNotToUse: ["Simple grids", "Static layouts", "Basic containers"], examples: ["Container cover example", "Layout component", "Grid component"], relatedComponents: ["layout-grid", "bento-grid"] },
  
  // Data & Visualization
  { name: "github-globe", category: "data", description: "A globe animation as seen on GitHub's homepage", useCases: ["Data visualization", "Charts", "Timelines", "Globe displays"], commonPatterns: ["GitHub globe", "Data visualization", "Chart component"], whenToUse: ["Data visualization", "Globe displays", "Charts"], whenNotToUse: ["Simple data", "Static displays", "Basic tables"], examples: ["GitHub globe example", "Data visualization", "Chart component"], relatedComponents: ["world-map", "timeline"] },
  { name: "world-map", category: "data", description: "A world map with animated lines and dots", useCases: ["Data visualization", "Charts", "Timelines", "Map displays"], commonPatterns: ["World map", "Data visualization", "Chart component"], whenToUse: ["Data visualization", "Map displays", "Charts"], whenNotToUse: ["Simple data", "Static displays", "Basic tables"], examples: ["World map example", "Data visualization", "Chart component"], relatedComponents: ["github-globe", "timeline"] },
  { name: "timeline", category: "data", description: "A timeline component with sticky header and scroll beam follow", useCases: ["Data visualization", "Charts", "Timelines", "Timeline displays"], commonPatterns: ["Timeline", "Data visualization", "Chart component"], whenToUse: ["Data visualization", "Timelines", "Charts"], whenNotToUse: ["Simple data", "Static displays", "Basic tables"], examples: ["Timeline example", "Data visualization", "Chart component"], relatedComponents: ["github-globe", "world-map"] },
  { name: "compare", category: "data", description: "A comparison component between two images", useCases: ["Data visualization", "Charts", "Timelines", "Comparison displays"], commonPatterns: ["Compare", "Data visualization", "Chart component"], whenToUse: ["Data visualization", "Comparisons", "Charts"], whenNotToUse: ["Simple data", "Static displays", "Basic tables"], examples: ["Compare example", "Data visualization", "Chart component"], relatedComponents: ["codeblock", "timeline"] },
  { name: "codeblock", category: "data", description: "A configurable code block component", useCases: ["Data visualization", "Charts", "Timelines", "Code displays"], commonPatterns: ["Codeblock", "Data visualization", "Chart component"], whenToUse: ["Data visualization", "Code displays", "Charts"], whenNotToUse: ["Simple data", "Static displays", "Basic tables"], examples: ["Codeblock example", "Data visualization", "Chart component"], relatedComponents: ["compare", "timeline"] },
  
  // Cursor & Pointer
  { name: "following-pointer", category: "cursor", description: "A custom pointer that follows mouse arrow and animates", useCases: ["Custom cursors", "Cursor effects", "Interactive cursors", "Pointer animations"], commonPatterns: ["Following pointer", "Cursor component", "Pointer component"], whenToUse: ["Custom cursors", "Cursor effects", "Pointer animations"], whenNotToUse: ["Standard cursors", "Simple interactions", "Basic pointers"], examples: ["Following pointer example", "Cursor component", "Pointer component"], relatedComponents: ["pointer-highlight", "lens"] },
  { name: "pointer-highlight", category: "cursor", description: "A component that highlights text when it's in view", useCases: ["Custom cursors", "Cursor effects", "Interactive cursors", "Text highlights"], commonPatterns: ["Pointer highlight", "Cursor component", "Pointer component"], whenToUse: ["Custom cursors", "Text highlights", "Cursor effects"], whenNotToUse: ["Standard cursors", "Simple interactions", "Basic pointers"], examples: ["Pointer highlight example", "Cursor component", "Pointer component"], relatedComponents: ["following-pointer", "lens"] },
  { name: "lens", category: "cursor", description: "A lens component to zoom into images, videos, or practically anything", useCases: ["Custom cursors", "Cursor effects", "Interactive cursors", "Zoom effects"], commonPatterns: ["Lens", "Cursor component", "Pointer component"], whenToUse: ["Custom cursors", "Zoom effects", "Cursor effects"], whenNotToUse: ["Standard cursors", "Simple interactions", "Basic pointers"], examples: ["Lens example", "Cursor component", "Pointer component"], relatedComponents: ["following-pointer", "pointer-highlight"] },
  
  // 3D
  { name: "3d-pin", category: "3d", description: "A gradient pin that animates on hover", useCases: ["3D effects", "3D animations", "3D displays", "Pin effects"], commonPatterns: ["3D pin", "3D component", "3D effect"], whenToUse: ["3D effects", "Pin displays", "3D animations"], whenNotToUse: ["2D displays", "Simple layouts", "Basic components"], examples: ["3D pin example", "3D component", "3D effect"], relatedComponents: ["3d-animated-pin", "3d-marquee"] },
  { name: "3d-marquee", category: "3d", description: "A 3D Marquee effect with grid", useCases: ["3D effects", "3D animations", "3D displays", "Marquee effects"], commonPatterns: ["3D marquee", "3D component", "3D effect"], whenToUse: ["3D effects", "Marquee displays", "3D animations"], whenNotToUse: ["2D displays", "Simple layouts", "Basic components"], examples: ["3D marquee example", "3D component", "3D effect"], relatedComponents: ["3d-pin", "3d-animated-pin"] },
  { name: "3d-animated-pin", category: "3d", description: "A gradient pin that animates on hover", useCases: ["3D effects", "3D animations", "3D displays", "Animated pins"], commonPatterns: ["3D animated pin", "3D component", "3D effect"], whenToUse: ["3D effects", "Animated pins", "3D animations"], whenNotToUse: ["2D displays", "Simple layouts", "Basic components"], examples: ["3D animated pin example", "3D component", "3D effect"], relatedComponents: ["3d-pin", "3d-marquee"] },
  
  // Sections and Blocks
  { name: "feature-sections", category: "sections", description: "A set of feature sections ranging from bento grids to simple layouts", useCases: ["Hero sections", "Feature sections", "Section layouts", "Feature displays"], commonPatterns: ["Feature sections", "Section component", "Layout component"], whenToUse: ["Hero sections", "Feature sections", "Section layouts"], whenNotToUse: ["Simple sections", "Static content", "Basic layouts"], examples: ["Feature sections example", "Section component", "Layout component"], relatedComponents: ["hero-sections", "cards-sections"] },
  { name: "cards-sections", category: "sections", description: "A set of cards that can be used for different use cases", useCases: ["Hero sections", "Feature sections", "Section layouts", "Card sections"], commonPatterns: ["Cards sections", "Section component", "Layout component"], whenToUse: ["Hero sections", "Card sections", "Section layouts"], whenNotToUse: ["Simple sections", "Static content", "Basic layouts"], examples: ["Cards sections example", "Section component", "Layout component"], relatedComponents: ["feature-sections", "hero-sections"] },
  { name: "hero-sections", category: "sections", description: "A set of hero sections ranging from simple to complex layouts", useCases: ["Hero sections", "Feature sections", "Section layouts", "Hero displays"], commonPatterns: ["Hero sections", "Section component", "Layout component"], whenToUse: ["Hero sections", "Feature sections", "Section layouts"], whenNotToUse: ["Simple sections", "Static content", "Basic layouts"], examples: ["Hero sections example", "Section component", "Layout component"], relatedComponents: ["feature-sections", "cards-sections"] }
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
  },
  {
    name: "aceternity_get_component_context",
    description: "Get full context and use cases for an Aceternity UI component including when to use, patterns, and examples",
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
      const results = allAceternityComponents.filter(c => {
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
              total: allAceternityComponents.length
            }, null, 2)
          }
        ]
      };
    }
    
    case "aceternity_get_component_context": {
      const componentName = args?.componentName;
      if (!componentName) {
        throw new Error("componentName is required");
      }
      
      const component = allAceternityComponents.find(c => c.name === componentName);
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
  const component = allAceternityComponents.find(c => c.name === componentName);
  
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
        text: `// Aceternity UI Component: ${componentName}\n` +
              `// Documentation: https://ui.aceternity.com/components/${componentName}\n` +
              `// Premium animated Tailwind component` +
              contextText
      }
    ]
  };
}
