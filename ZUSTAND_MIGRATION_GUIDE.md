# Static Frontend Setup - Migration Guide

## 🎯 Project Configuration

### Next.js Configuration
✅ **Enabled**: `output: 'export'` in `next.config.js`
- Converts Next.js to 100% static HTML/CSS/JS
- No server-side rendering
- No API routes support
- No dynamic routes with `[param]` (must use static pages)

### State Management
✅ **Replaced**: Redux → Zustand with localStorage persistence
- Lightweight (2.5KB vs Redux 50KB+)
- No boilerplate required
- Built-in localStorage middleware
- Client-side only (perfect for static sites)

---

## 📦 Dependencies

### Removed:
- `@reduxjs/toolkit`
- `react-redux`
- `next-auth`
- `next-sanity`
- `nodemailer`
- `sanity`

### Added:
- `zustand` (state management with persistence)

---

## 🗂️ Store Structure

All stores located in `src/store/`:

### 1. **cartStore.ts** - Shopping Cart
```typescript
import { useCartStore } from '@/store';

const { items, addItem, removeItem, getTotal } = useCartStore();
```

**Methods**:
- `addItem(item)` - Add or update cart item
- `removeItem(id)` - Remove item by ID
- `updateQuantity(id, qty)` - Update quantity
- `clearCart()` - Empty cart
- `getTotal()` - Calculate total price
- `getItemCount()` - Get number of items

---

### 2. **authStore.ts** - Fake Authentication
```typescript
import { useAuthStore } from '@/store';

const { user, isLoggedIn, login, signup, logout } = useAuthStore();
```

**Methods**:
- `login(email, password)` - Fake login (no validation)
- `signup(email, password, name)` - Fake signup
- `logout()` - Clear user session
- `updateProfile(userData)` - Update user info

**User Data** (persisted in localStorage):
```typescript
interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}
```

---

### 3. **quickViewStore.ts** - Product Quick View Modal
```typescript
import { useQuickViewStore } from '@/store';

const { isOpen, product, openQuickView, closeQuickView } = useQuickViewStore();
```

**Methods**:
- `openQuickView(product)` - Show modal with product
- `closeQuickView()` - Hide modal

---

### 4. **wishlistStore.ts** - Wishlist
```typescript
import { useWishlistStore } from '@/store';

const { items, addItem, removeItem, isInWishlist } = useWishlistStore();
```

**Methods**:
- `addItem(item)` - Add to wishlist
- `removeItem(id)` - Remove from wishlist
- `isInWishlist(id)` - Check if item in wishlist
- `getItemCount()` - Get wishlist size
- `clearWishlist()` - Clear all items

---

### 5. **cartSidebarModalStore.ts** - Cart Sidebar Toggle
```typescript
import { useCartSidebarModal } from '@/store';

const { isOpen, openModal, closeModal, toggleModal } = useCartSidebarModal();
```

---

## 💾 Data Persistence

### localStorage Keys:
- `cart-storage` - Shopping cart data
- `auth-storage` - User login data
- `wishlist-storage` - Wishlist items

### Storage Behavior:
✅ **Persists** when browser tab closes  
✅ **Persists** when page refreshes  
❌ **Lost** when browser cache is cleared  
❌ **Lost** when changing device/computer  
❌ **Lost** when using Incognito mode  

---

## 🔧 Component Migration

### Before (Redux):
```typescript
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cart-slice';

export function ProductCard() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);
  
  const handleAdd = () => {
    dispatch(addToCart(product));
  };
}
```

### After (Zustand):
```typescript
import { useCartStore } from '@/store';

export function ProductCard() {
  const { items, addItem } = useCartStore();
  
  const handleAdd = () => {
    addItem(product);
  };
}
```

---

## 🚀 Build & Deploy

### Local Development:
```bash
npm install
npm run dev
```

### Production Build:
```bash
npm run build
npm run start
```

The build creates a static `out/` folder with pure HTML/CSS/JS files.

### Deploy:
Upload `out/` folder to any static hosting:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any web server (Apache, Nginx)

---

## ⚠️ Limitations & Notes

1. **No API Routes**: Can't use `/api/*` routes
2. **No Database**: All data is temporary (localStorage only)
3. **No Server Logic**: All logic must be client-side
4. **No Dynamic Routes**: Can't use `[id]` dynamic routes (use static pages)
5. **No Image Optimization**: `next/image` won't work in static export
6. **Login is Fake**: No actual authentication

---

## ✅ Ready Components

The project already includes:
- ✅ Shopping Cart UI
- ✅ Product Grid & Details
- ✅ Blog & Blog Details
- ✅ Checkout Form (localStorage only)
- ✅ User Profile (localStorage)
- ✅ Wishlist
- ✅ Quick View Modal
- ✅ Search & Filters

---

## 📝 Next Steps

1. ✅ Install dependencies: `npm install`
2. Update components to use Zustand stores instead of Redux
3. Populate product data (static data in components)
4. Test localStorage persistence
5. Build and deploy

---

## 🎨 Example: Complete Cart Component

```typescript
'use client';

import { useCartStore } from '@/store';

export function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore();
  
  return (
    <div>
      <h1>Shopping Cart ({items.length})</h1>
      
      {items.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <input 
            type="number" 
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, +e.target.value)}
          />
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      
      <h2>Total: ${getTotal()}</h2>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}
```

---

## 🤔 FAQ

**Q: Where is my data stored?**
A: In browser localStorage. Close browser = data persists. Change device = data lost.

**Q: Can I add a real backend later?**
A: Yes, but you'll need to remove `output: 'export'` and add API routes.

**Q: How do I implement real authentication?**
A: Add a real backend API and replace the fake `authStore` with actual API calls.

**Q: Can I use images?**
A: Yes, store them in `public/` folder and use `<img src="/image.jpg" />`.

---

Generated: 2026-05-20
