# Free eCommerce Template for Next.js - NextMerce (Static Frontend Edition)

100% Static Frontend with Zustand & localStorage - No Backend Required!

This is a customized version of NextMerce designed as a pure frontend eCommerce template with:
- ✅ 100% Static Site (HTML/CSS/JS only)
- ✅ No Backend or Database
- ✅ Data persistence via Browser localStorage
- ✅ State management with Zustand
- ✅ Fake authentication for demo purposes
- ✅ Shopping cart, wishlist, and quick view modal

![NextMerce](https://github.com/user-attachments/assets/57155689-a756-4222-8af7-134e556acae2)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📦 What's Inside

### Technology Stack
- **Next.js 16.1.6** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5.2.2** - Type safety
- **Tailwind CSS 3.3.3** - Utility-first CSS
- **Zustand** - Lightweight state management
- **Swiper** - Touch slider carousel
- **React Hot Toast** - Toast notifications

### Removed (No Backend/Database)
- ❌ next-auth (use `authStore` instead)
- ❌ Sanity CMS (add your own content)
- ❌ nodemailer (no email backend)
- ❌ Redux (replaced with Zustand)

---

## 🗂️ Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # React components
│   ├── Examples/       # Sample components using Zustand
│   └── [other components]
├── store/              # Zustand stores (state management)
│   ├── cartStore.ts
│   ├── authStore.ts
│   ├── quickViewStore.ts
│   └── wishlistStore.ts
├── types/              # TypeScript type definitions
└── css/                # Global styles
```

---

## 🎯 Key Features

### 1. **Shopping Cart** (`useCartStore`)
- Add/remove items
- Update quantities
- Calculate totals
- Persists in localStorage

### 2. **Authentication** (`useAuthStore`)
- Fake login/signup (no validation needed)
- User profile management
- Persists in localStorage

### 3. **Wishlist** (`useWishlistStore`)
- Add/remove items
- Check if item in wishlist
- Persists in localStorage

### 4. **Quick View Modal** (`useQuickViewStore`)
- View product details in modal
- Non-persistent (closes on refresh)

### 5. **Cart Sidebar** (`useCartSidebarModal`)
- Toggle cart sidebar
- Show/hide on demand

---

## 💾 Data Storage

All data is stored in browser **localStorage**:
- `cart-storage` - Shopping cart
- `auth-storage` - User login
- `wishlist-storage` - Wishlist items

**Important**: 
- ✅ Data persists when browser tab closes
- ✅ Data persists when page refreshes
- ❌ Data is lost when browser cache is cleared
- ❌ Data is lost when changing devices
- ❌ Data is lost in Incognito/Private mode

---

## 🔧 Using Zustand Stores

### Cart Example
```typescript
import { useCartStore } from '@/store';

export function MyComponent() {
  const { items, addItem, removeItem, getTotal } = useCartStore();
  
  return (
    <div>
      <button onClick={() => addItem(product)}>
        Add to Cart
      </button>
      <p>Total: ${getTotal()}</p>
    </div>
  );
}
```

### Auth Example
```typescript
import { useAuthStore } from '@/store';

export function MyComponent() {
  const { user, isLoggedIn, login, logout } = useAuthStore();
  
  return isLoggedIn ? (
    <p>Welcome, {user?.name}!</p>
  ) : (
    <button onClick={() => login('email@test.com', 'pass')}>
      Login
    </button>
  );
}
```

See [ZUSTAND_MIGRATION_GUIDE.md](./ZUSTAND_MIGRATION_GUIDE.md) for complete documentation.

---

## 🎨 Components

Pre-built components include:
- ✅ Product Grid & List
- ✅ Product Details Page
- ✅ Shopping Cart
- ✅ Checkout Form
- ✅ User Account/Profile
- ✅ Wishlist
- ✅ Blog & Blog Details
- ✅ Search & Filters
- ✅ Header with Navigation
- ✅ Footer

---

## 📝 Example Components

Sample components using Zustand are available in `src/components/Examples/`:
- `SampleProductCard.tsx` - Product card with cart integration
- `SampleAuthForm.tsx` - Login/signup form

---

## ⚙️ Configuration

### Static Export
The `next.config.js` includes:
```javascript
output: 'export'
```

This converts Next.js to a 100% static site (no server-side rendering).

### Limitations
- ❌ No API routes (`/api/*`)
- ❌ No server-side rendering
- ❌ No dynamic routes with `[id]`
- ❌ No real authentication
- ❌ No real database

---

## 🚢 Deployment

The `npm run build` command creates a `out/` folder with static files.

Deploy to any static hosting:
- **Vercel** - `vercel deploy`
- **Netlify** - Drag & drop `out/` folder
- **GitHub Pages** - Push to `gh-pages` branch
- **AWS S3 + CloudFront**
- **Any web server** (Apache, Nginx)

---

## 📚 Migration from Redux

If you have existing components using Redux, migrate to Zustand:

**Before (Redux):**
```typescript
import { useSelector, useDispatch } from 'react-redux';
const dispatch = useDispatch();
const items = useSelector(state => state.cart.items);
dispatch(addToCart(product));
```

**After (Zustand):**
```typescript
import { useCartStore } from '@/store';
const { items, addItem } = useCartStore();
addItem(product);
```

---

## 🤔 FAQ

**Q: How do I add a real backend later?**  
A: Remove `output: 'export'` from `next.config.js` and add your backend API routes.

**Q: Can I use a real database?**  
A: Yes, but you'll need to replace localStorage calls with API calls to your backend.

**Q: How do I implement real authentication?**  
A: Replace `authStore` with calls to a real authentication service (Firebase, Auth0, etc).

**Q: Can I host static files on GitHub Pages?**  
A: Yes! See [Deployment](#-deployment) section.

---

## 📖 Documentation

- [Zustand Store Guide](./ZUSTAND_MIGRATION_GUIDE.md) - Complete store documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## 📄 License

Free to use and modify for personal and commercial projects.

---

## 🎯 Next Steps

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Explore example components in `src/components/Examples/`
4. Review [ZUSTAND_MIGRATION_GUIDE.md](./ZUSTAND_MIGRATION_GUIDE.md)
5. Update existing components to use Zustand stores
6. Add your product data
7. Deploy to static hosting

---

**Version**: 0.1.2-static (May 2026)  
**Base**: NextMerce Free  
**Frontend Only**: ✅ Complete