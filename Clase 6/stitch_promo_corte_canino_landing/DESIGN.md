---
name: Paws & Polish
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#414754'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#717785'
  outline-variant: '#c1c6d6'
  surface-tint: '#005cb9'
  primary: '#005ab5'
  on-primary: '#ffffff'
  primary-container: '#0072e2'
  on-primary-container: '#fefcff'
  inverse-primary: '#aac7ff'
  secondary: '#7c5800'
  on-secondary: '#ffffff'
  secondary-container: '#feb700'
  on-secondary-container: '#6b4b00'
  tertiary: '#525d68'
  on-tertiary: '#ffffff'
  tertiary-container: '#6a7681'
  on-tertiary-container: '#fcfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e3ff'
  primary-fixed-dim: '#aac7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#00458e'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#ffba20'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#d8e4f1'
  tertiary-fixed-dim: '#bcc8d4'
  on-tertiary-fixed: '#111d26'
  on-tertiary-fixed-variant: '#3d4852'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The brand personality is defined by a "care-first" philosophy, blending the clinical reliability of professional grooming with the warmth of a beloved neighborhood pet shop. It targets pet owners who view their animals as family members, necessitating a UI that feels safe, hygienic, and joyful.

The design system adopts a **Modern Soft-Minimalist** style. It utilizes generous white space to evoke a sense of cleanliness (crucial for grooming services) while softening the interface with rounded geometry and gentle transitions. The emotional goal is to reduce "service anxiety" for the owner and project an image of a calm, expert environment.

## Colors

The palette is anchored in **Soft Blue (#2D89FF)**, representing trust and water-based hygiene. This is complemented by a **Warm Amber (#FFB800)** accent, used sparingly to draw attention to primary actions and evoke the playfulness of pets. 

- **Primary**: Used for brand markers, primary buttons, and active states.
- **Secondary (Accent)**: Reserved for high-conversion CTAs (e.g., "Book Now") and "New" badges.
- **Tertiary (Surface)**: A very light blue tint used for large background sections to prevent the "starkness" of pure white while maintaining a clean look.
- **Neutral**: A soft charcoal-blue used for typography to ensure high legibility without the harshness of pure black.

## Typography

This design system utilizes **Plus Jakarta Sans** for headings and interactive labels. Its rounded terminals and open apertures provide a friendly, modern character that aligns with the "joyful" brand pillar. For long-form text and secondary data, **Be Vietnam Pro** is used to maintain high readability with a slightly more contemporary, systematic feel.

All headlines should use a tighter letter-spacing to feel more cohesive, while body text maintains standard tracking to ensure accessibility for users of all ages.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a maximum container width of 1200px. On desktop, a 12-column system is used with 24px gutters to allow for "airy" content arrangement. On mobile, the system collapses to a single column with 16px side margins.

Spacing follows an 8px base unit. Vertical rhythm should prioritize "stack" variables to create clear separation between service categories and pet profiles. Use `stack-lg` to separate distinct logical sections (e.g., Service List vs. Gallery) and `stack-sm` for internal component grouping (e.g., Label to Input field).

## Elevation & Depth

To maintain a clean, hygienic aesthetic, this design system avoids heavy shadows. Depth is achieved through **Tonal Layers** and **Soft Ambient Shadows**.

- **Surface Level 0**: Background color (Tertiary/White).
- **Surface Level 1**: Card containers using a 1px border of `Primary` at 10% opacity, with a subtle 4px blur shadow (#2D89FF at 5% opacity).
- **Surface Level 2**: Modals and dropdowns, featuring a more pronounced but still diffused shadow to simulate floating above the interface.

Avoid dark, grey shadows; always tint shadows with the Primary color to maintain the "Soft Blue" atmosphere.

## Shapes

The shape language is consistently **Rounded**. This eliminates "sharpness" and clinical coldness, replacing it with a safe, approachable feel. 

- **Standard Elements**: Buttons and input fields use a 0.5rem (8px) radius.
- **Large Containers**: Cards and content sections use a 1.5rem (24px) radius to create a soft, friendly framing for pet photography.
- **Interactive Icons**: Icon backgrounds should always be circular or use maximum roundedness to mimic paw-pad shapes.

## Components

- **Buttons**: Primary buttons are solid Soft Blue with white text. Secondary buttons use a Soft Blue outline. The "Book" action should always use the Warm Amber accent. All buttons have a subtle "squish" animation on click (scale: 0.98).
- **Cards**: Used for pet profiles and service descriptions. Cards should feature a top-aligned image with a 24px corner radius on the top corners only.
- **Chips**: Used for grooming status (e.g., "Ready for Pickup"). These are pill-shaped with low-opacity background fills matching the status color (Success/Blue, Warning/Amber).
- **Input Fields**: Large, easy-to-tap targets (min-height: 48px). Use a 1px Soft Blue border that thickens to 2px on focus.
- **Progress Steppers**: For the booking flow, use rounded bubbles connected by thick, soft-colored lines to make the multi-step process feel like a simple journey.
- **Pet Profile Avatar**: Always use a circular mask with a 2px Soft Blue border to differentiate pet images from general UI icons.