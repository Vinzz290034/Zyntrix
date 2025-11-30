## Project Overview

**Zyntrix** - A React-based Single Page Application (SPA) e-commerce website for selling premium tech gadgets online with a colorful, flyer-style design aesthetic. The site uses Philippine Peso (₱) as currency and features real product images from Unsplash.

## Project Status

- **Project Type**: React 18 + TypeScript + Vite SPA
- **Framework**: React 18.3.1 with React Router DOM 6.30.1
- **State Management**: Zustand 4.4.7 with persist middleware
- **Styling**: Tailwind CSS 3.4.17 via PostCSS
- **Build Tool**: Vite 7.0.0
- **Currency**: Philippine Peso (₱)
- **Cart Persistence**: Zustand with localStorage

## Build Commands

- **Install dependencies**: `npm install`
- **Development server**: `npm run dev` (Do not use in production)
- **Production build**: `npm run build` (Always run after code changes)
- **Preview build**: `npm run preview` (Do not use in production)

**IMPORTANT**: This is a React/Vite project. Always run `npm run build` after making code changes to ensure production readiness.

## Design Theme

### Color Palette
- **Primary Violet**: `#6A0DAD` (zyntrix-violet)
- **Secondary Blue**: `#1E90FF` (zyntrix-blue)
- **Background**: White `#FFFFFF` and light gray `#F9FAFB`

### Design Philosophy
- Playful, flyer-style aesthetic with vibrant gradients
- Captivating CSS animations throughout the app
- Responsive design optimized for mobile, tablet, and desktop
- Smooth page transitions using React Router
- Modern card-based layouts with elevated shadows

## Application Architecture

### Routing Structure (React Router)

All pages are client-side routes handled by React Router DOM:

- `/` - HomePage (promotions and hero section with tech-vibes animation)
- `/products` - ProductsPage (product catalog with cart)
- `/about` - AboutPage (company information)
- `/contact` - ContactPage (contact form and details)
- `/register` - RegisterPage (user registration with validation)
- `/login` - LoginPage (user authentication)

**Navigation**: Uses React Router's `<Link>` components for client-side navigation - no full page reloads.

### Component Structure

```
src/
├── App.tsx                 # Main app with Router setup
├── components/
│   ├── Header.tsx         # Shared header with navigation and cart icon
│   ├── Footer.tsx         # Shared footer
│   ├── DotGrid.tsx        # Tech-vibes animated dot grid (Reactbits)
│   └── DotGrid.css        # Dot grid styles
├── pages/
│   ├── HomePage.tsx       # Home page with tech animations
│   ├── ProductsPage.tsx   # Products catalog and cart
│   ├── AboutPage.tsx      # About us page
│   ├── ContactPage.tsx    # Contact page
│   ├── RegisterPage.tsx   # User registration page
│   └── LoginPage.tsx      # User login page
├── store/
│   └── cartStore.ts       # Zustand cart store with persistence
└── index.css              # Global Tailwind CSS imports
```

### State Management (Zustand)

**Cart Store** (`src/store/cartStore.ts`):
- Global shopping cart state
- Persisted to localStorage as `zyntrix-cart-storage`
- Methods: `addItem`, `removeItem`, `updateQuantity`, `getTotal`, `getItemCount`, `clearCart`
- Automatically syncs across all page navigations

**Cart Item Interface**:
```typescript
interface CartItem {
  id: number;
  name: string;
  price: number; // in PHP
  image: string;
  description: string;
  stock: number;
  quantity: number;
}
```

### Page Descriptions

#### 1. HomePage (`/`)
**Purpose**: Catch visitor attention with tech-vibes animations and promotions

**Key Sections**:
- **Hero Section**: Tech-themed animated background with DotGrid component, glitch text effect, circuit lines
- **Featured Promotions**:
  - Mega Holiday Sale (50% off, save up to ₱8,000)
  - Free Nationwide Delivery (orders over ₱5,000)
  - Complete Setup Bundle (20% off + free mouse pad worth ₱1,200)
- **Why Choose Us**: Quality, Payment, Delivery highlights
- **CTA Section**: Final push to view products

**Tech-Vibes Animations**:
- **DotGrid Component** (Reactbits): Interactive dot grid with mouse tracking, click ripple effects
- **Glitch Text Effect**: RGB splitting animation on hero title with glow
- **Circuit Lines**: Animated flowing lines simulating tech circuitry
- **Cyber Button**: Gradient button with scanning light effect
- **CSS Animations**: float, sparkle, slideInLeft, slideInRight, fadeInUp, pulse-glow
- **Text Glow**: Neon-style text shadow effects
- **Background**: Dark tech gradient (navy/purple tones)

#### 2. ProductsPage (`/products`)
**Purpose**: Display product catalog with shopping functionality

**Features**:
- **Product Grid**: 6 gadgets with real Unsplash images
- **Product Cards**: Hover effects, click to view details
- **Product Modal**: Detailed view with stock info and add-to-cart
- **Shopping Cart Modal**: View cart, adjust quantities, remove items
- **Cart Badge**: Shows item count in header (visible only on products page)
- **Toast Notifications**: Success messages on cart actions

**Products with PHP Pricing**:
1. Zyntrix Complete Set - ₱16,799
2. RGB Mechanical Keyboard - ₱8,399
3. Wireless Gaming Mouse - ₱4,479
4. Premium Wireless Headset - ₱11,199
5. USB-C Hub 7-in-1 - ₱3,359
6. Fast Wireless Charger - ₱2,239

#### 3. AboutPage (`/about`)
**Purpose**: Build trust and share company story

**Sections**:
- **Our Story**: Company founding (2020) and mission
- **Our Values**: 100% Authentic, Best Prices, Customer First
- **Why Choose Us**: Fast Shipping, Secure Payment, Warranty Protection, Expert Support
- **CTA Section**: Link to products page

#### 4. ContactPage (`/contact`)
**Purpose**: Provide multiple ways to reach the company

**Features**:
- **Contact Form** (React controlled components):
  - Full name, email, phone
  - Subject dropdown
  - Message textarea
  - Form validation
  - Success notification on submit
- **Contact Information**:
  - Office address (Makati City)
  - Email addresses (support, sales, tech)
  - Phone numbers
  - Business hours
- **FAQ Section**: Accordion-style details elements
- **Social Media Links**: Facebook, Twitter, Instagram, LinkedIn

#### 5. RegisterPage (`/register`)
**Purpose**: User registration with form validation

**Features**:
- **Form Fields**: Full name, email, username (optional), password, confirm password
- **Client-side Validation**: Email format, password length (min 8 chars), password match
- **Error Messages**: Real-time validation feedback
- **Success Flow**: Toast notification → redirect to login page
- **Navigation Links**: Link to login page for existing users

#### 6. LoginPage (`/login`)
**Purpose**: User authentication

**Features**:
- **Form Fields**: Email, password, remember me checkbox
- **Client-side Validation**: Email format, required fields
- **Forgot Password**: Link for password recovery (placeholder)
- **Success Flow**: Toast notification → redirect to products page
- **Social Login**: Google and Facebook login buttons (UI only)
- **Navigation Links**: Link to registration page for new users

### Shared Components

#### Header (`src/components/Header.tsx`)
- Sticky navigation bar
- Active route highlighting (underline on current page)
- **Cart Icon**: Click handler passed from App.tsx to open cart modal (only on `/products`)
- Cart badge with item count (Zustand store)
- Responsive hamburger menu icon (functionality pending)
- Glow animation on logo

#### Footer (`src/components/Footer.tsx`)
- Quick links to all pages
- Contact information
- Social media links
- Copyright notice
- Consistent across all pages

#### DotGrid (`src/components/DotGrid.tsx`)
- Interactive animated dot grid from Reactbits library
- **Tech Effects**: Mouse proximity detection, click ripple effects, elastic return animation
- **Dependencies**: GSAP (GreenSock Animation Platform) with InertiaPlugin
- **Props**: dotSize, gap, baseColor, activeColor, proximity, shockRadius, shockStrength, resistance, returnDuration
- **Usage**: Background animation on HomePage hero section

## Real Product Images

All product images sourced from Unsplash with optimized URLs:
- Images cached by Unsplash CDN
- Crop parameters for consistent sizing (800x600)
- Direct loading from Unsplash servers (no local storage)

## Technical Details

### React Router Configuration

Using `BrowserRouter` for clean URLs (no hash routing).

**Route Setup**:
```tsx
<Router>
  <Header onCartClick={() => setShowCart(true)} />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage showCart={showCart} setShowCart={setShowCart} />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
  <Footer />
</Router>
```

**Cart State Management**:
- Cart modal state (`showCart`) is lifted to App.tsx
- Header receives `onCartClick` callback to trigger cart modal
- ProductsPage receives `showCart` and `setShowCart` props to control cart modal visibility
- This architecture allows cart button in Header to open modal in ProductsPage

### Tailwind CSS Configuration

Custom colors added to Tailwind config:
```javascript
theme: {
  extend: {
    colors: {
      'zyntrix-violet': '#6A0DAD',
      'zyntrix-blue': '#1E90FF',
    }
  }
}
```

### Animation Implementation

**CSS Animations** (defined in component styles):
- Float animation (3s ease-in-out infinite)
- Sparkle animation (1.5s ease-in-out infinite)
- Slide-in animations (0.8s ease-out)
- Fade-in-up animations (1s-1.4s ease-out)
- Pulse-glow animation (2s ease-in-out infinite)
- Glitch animation (RGB split effect)
- Circuit flow animation (4s linear infinite)
- Text glow animation (2s ease-in-out infinite)

**GSAP Animations** (DotGrid component):
- Inertia plugin for physics-based dot movement
- Elastic easing for smooth return animations
- Mouse tracking for proximity-based interactions
- Click ripple effects with falloff calculation

## Development Notes

### Vite Build Process
- **Development**: Vite dev server with HMR
- **Production**: Optimized build with code splitting
- **Output**: `dist/` directory
- **Build time**: ~4 seconds

### State Persistence
- Cart state automatically persists to localStorage
- Data survives page reloads
- localStorage key: `zyntrix-cart-storage`

### TypeScript Strict Mode
- Full TypeScript support
- Strict type checking enabled
- Interface definitions for all data structures

## User Experience Flow

**Main Shopping Flow**:
1. User lands on homepage with tech-vibes animations (DotGrid, glitch text)
2. Sees promotional offers and deals
3. Clicks "Explore Products" → navigates to `/products` (React Router, no page reload)
4. Browses 6 featured gadgets
5. Clicks product card → opens modal
6. Adds items to cart → sees toast notification
7. Cart badge updates immediately (Zustand state)
8. Clicks cart icon in header → opens cart modal
9. Adjusts quantities or removes items in cart
10. Can proceed to checkout or continue shopping

**Authentication Flow**:
1. User clicks "Sign up" link → navigates to `/register`
2. Fills registration form with validation
3. Submits → sees success toast → redirects to `/login`
4. Enters credentials → logs in → redirects to `/products`
5. Can access "Forgot password" link from login page

**Navigation**:
- Header links for smooth navigation (Home, Products, About, Contact)
- Footer links for additional navigation options
- All transitions use React Router (no page reloads)

## Browser Compatibility

- Modern browsers with ES6+ support
- React 18 concurrent features
- LocalStorage API for cart persistence
- CSS Grid and Flexbox layouts
- Responsive breakpoints: mobile (< 768px), tablet (768-1024px), desktop (> 1024px)

## Philippine Market Localization

- Currency: Philippine Peso (₱)
- Contact: Philippine phone format (+63)
- Location: Makati City, Metro Manila
- Shipping: Nationwide Philippines coverage
- Business hours: Philippine timezone (Mon-Fri 9AM-6PM, Sat 10AM-4PM)
- Domain: .ph extension (support@zyntrix.ph)

## Dependencies

### Production Dependencies
- **react**: ^18.3.1 - Core React library
- **react-dom**: ^18.3.1 - React DOM renderer
- **react-router-dom**: ^6.30.1 - Client-side routing
- **zustand**: ^4.4.7 - State management for shopping cart
- **gsap**: Latest - Animation library for DotGrid component

### Dev Dependencies
- **vite**: ^7.0.0 - Build tool and dev server
- **@vitejs/plugin-react**: ^4.3.4 - React plugin for Vite
- **typescript**: ~5.6.2 - TypeScript compiler
- **tailwindcss**: ^3.4.17 - Utility-first CSS framework
- **postcss**: ^8.4.49 - CSS processor
- **autoprefixer**: ^10.4.20 - PostCSS plugin for vendor prefixes

## Future Enhancement Ideas

- Implement mobile hamburger menu functionality
- Add product search and filter on products page
- Integrate real payment gateway (GCash, PayMaya)
- Connect to backend API for real inventory management
- Implement persistent user authentication (currently frontend-only)
- Add product reviews and ratings
- Implement order history and tracking
- Add live chat support widget
- Email newsletter subscription
- Wishlist functionality
- Admin dashboard for product management
