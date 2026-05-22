---
name: Luminous Learning
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf3'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d5e3fc'
  on-surface: '#0d1c2e'
  on-surface-variant: '#434655'
  inverse-surface: '#233144'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#6d5000'
  on-tertiary: '#ffffff'
  tertiary-container: '#8b6700'
  on-tertiary-container: '#ffeed3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdf9f'
  tertiary-fixed-dim: '#f9bd22'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#f8f9ff'
  on-background: '#0d1c2e'
  surface-variant: '#d5e3fc'
typography:
  headline-lg:
    fontFamily: Quicksand
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Quicksand
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter-desktop: 24px
  margin-desktop: 48px
  gutter-mobile: 16px
  margin-mobile: 20px
---

## Brand & Style
The design system is built on the intersection of academic rigor and the joy of discovery. It targets a dual audience: parents seeking a reliable, professional partner for their child's education, and young learners who need an environment that feels welcoming and unintimidating.

The style is **Modern / Approachable**, leaning into high-quality whitespace and soft geometric forms. It avoids the clinical feel of traditional enterprise software by introducing warmth through rounded edges and vibrant accents, while maintaining a structured grid that communicates stability and institutional trust. The emotional response should be one of "supported growth"—a sense that progress is organized, achievable, and exciting.

## Colors
This design system utilizes a high-clarity palette designed for focus and positive reinforcement.

- **Smart Blue (#2563EB):** The primary anchor. Used for navigation, primary actions, and core branding to establish trust and authority.
- **Growth Green (#10B981):** The "Success" color. Applied to progress indicators, completed lesson states, and "Correct Answer" feedback to signal advancement.
- **Curiosity Yellow (#FBBF24):** The accent of energy. Used sparingly for highlights, special achievements, and "New" badges to draw attention without causing fatigue.
- **Surface & Neutrals:** Backgrounds utilize a soft off-white (#F8FAFC) to reduce eye strain, while text sits on a deep Slate (#1E293B) for maximum contrast and readability.

## Typography
The typography strategy employs a "Dual-Tone" approach. 

**Quicksand** is reserved for headlines and titles. Its rounded terminals and geometric construction feel friendly and youthful, perfectly mirroring the preschool to grade school demographic.

**Inter** is the workhorse for body copy, data, and instructional text. Its high x-height and exceptional legibility ensure that complex exam preparation materials remain easy to parse for both children and adults. 

For accessibility, never go below a 14px font size. All interactive labels should use Inter Medium or Semibold to ensure they stand out against container backgrounds.

## Layout & Spacing
The design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The spacing rhythm is strictly based on an 8px baseline grid to ensure mathematical harmony across all components.

- **Desktop:** Max-width of 1280px to prevent line lengths from becoming unreadable on ultra-wide monitors.
- **Containers:** Large content blocks (like lesson modules) should use 32px padding to create a "breathable" learning environment.
- **Grouping:** Use 8px for related elements (icon + label) and 16-24px for distinct sections within a card.

## Elevation & Depth
To maintain an approachable and soft aesthetic, this design system avoids harsh, high-contrast shadows. Instead, it uses **Ambient Blue-Tinted Shadows**.

Depth is created through three primary tiers:
1. **Flat (Level 0):** Used for the main background surface.
2. **Raised (Level 1):** Subtle 1px borders in a soft gray-blue (#E2E8F0) with a very soft blur (Y: 4px, Blur: 12px, 5% opacity primary color). This is for standard cards and inputs.
3. **Floating (Level 2):** Used for hover states and modals. The shadow becomes more diffused (Y: 8px, Blur: 24px, 10% opacity primary color) to suggest interactivity.

Avoid using pure black shadows; always tint shadows with the Primary Blue to maintain the "Luminous" brand feel.

## Shapes
The shape language is defined by significant roundedness to evoke safety and friendliness. 

- **Standard Elements:** Buttons, input fields, and small cards use a **12px (0.75rem)** radius.
- **Large Containers:** Content sections and main educational cards use a **16px (1rem)** radius.
- **Interactive Feedback:** Selection indicators (like radio buttons or checkboxes) should use a fully rounded/pill shape where appropriate to feel "bubbly" and tactile.

## Components
Consistent component styling reinforces the professional-yet-playful nature of the platform.

- **Buttons:** Primary buttons use a solid Smart Blue fill with white text and 12px corners. Secondary buttons use a 2px Growth Green outline. Use a subtle "bounce" animation (scale 0.98) on click to add tactility for younger users.
- **Cards:** Cards are the primary vessel for lessons. They should feature a top-accent border (4px) in either Blue, Green, or Yellow depending on the subject category.
- **Input Fields:** Use a 2px border in a soft neutral color. Upon focus, the border transitions to Smart Blue with a soft 4px outer glow.
- **Progress Trackers:** Horizontal bars with Growth Green fills. Use a rounded "pill" shape for the track and the indicator to keep it friendly.
- **Chips/Badges:** Small, high-radius (pill) labels for grade levels (e.g., "Grade 3") or subjects (e.g., "Math"). Use light tints of the brand colors (e.g., 10% opacity Green with 100% opacity Green text).
- **Lists:** Use custom bullet points (small Growth Green checkmarks or circles) rather than standard browser dots to increase the "engaging" feel of the content.