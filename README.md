# @sohanemon/motion - Declarative Framer Motion Helper

A delightful package for [Framer Motion](https://www.framer.com/motion/) animations. 🌟

<p align="center">
  <a href="https://github.com/sohanemon/motion">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/sohanemon/motion/Node.js%20CI">
  </a>
  <a href="https://www.npmjs.com/package/@sohanemon/motion">
    <img alt="npm" src="https://img.shields.io/npm/v/@sohanemon/motion">
  </a>
  <a href="https://github.com/sohanemon/motion/blob/main/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/sohanemon/motion">
  </a>
</p>

## 🚀 Installation

Get started quickly by installing this package:

```bash
npm install @sohanemon/motion
```

or using yarn:

```bash
yarn add @sohanemon/motion
```

## 📖 Usage

### Basic Animation

Animate any component with a simple `animate` prop:

```jsx
import Motion from '@sohanemon/motion';

<Motion animate='visible'>Your Content Here</Motion>;
```

### Variants

Define and use animation variants easily:

```jsx
import Motion from '@sohanemon/motion';

// Define your variants
const customVariants = {
  custom: { scale: 1.2, rotate: 360 },
};

// Use the variant in your component
<Motion animate='custom' variants={customVariants}>
  Your Content Here
</Motion>;
```

### Scroll Animation

Create scroll-triggered animations effortlessly:

```jsx
import Motion, { useScrollTransform } from '@sohanemon/motion';

// Create a scroll-triggered animation
const AnimatedComponent = () => {
  const scrollY = useScrollTransform({
    outputRange: [0, 100],
  });

  return (
    <Motion animate={{ y: scrollY }}>Scroll down to see the animation</Motion>
  );
};
```

### Default Variant

Some default variants are added for simplicity.

```tsx
export const defaultVariants: Variants = {
  left: { x: -300, opacity: 0 },
  right: { x: 300, opacity: 0 },
  top: { y: -300, opacity: 0 },
  bottom: { y: 100, opacity: 0 },
  hidden: { opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1, scale: 1 },
  scale1: { opacity: 1, scale: 1 },
  scale0: { opacity: 0, scale: 0.1 },
  height0: { height: 0 },
  height1: { height: '100%' },
};
```

```jsx
import Motion from '@sohanemon/motion';

<Motion initial='top'>Your Content Here</Motion>;
```

> `whileInView` will be auto triggered. More than Simple.

## 🎨 Features

- **SSR**: Works with [Next.js](https://github.com/vercel/next.js) server components.
- **Scroll Animation**: Craft scroll-triggered animations effortlessly.
- **Custom Hook**: Additional custom hooks.
- **Full Framer Motion**: All [Framer Motion](https://github.com/framer/motion) properties are available (re-exported).
- **Variants**: Easily define and apply animation variants.

## 📚 Documentation

For comprehensive usage instructions and more examples, visit the [documentation](https://github.com/sohanemon/motion#readme).

## 🙌 Contributions

We welcome contributions! Feel free to open issues and pull requests on [GitHub](https://github.com/sohanemon/motion).

## 📄 License

This package is released under the [ISC License](https://github.com/sohanemon/motion/blob/main/LICENSE).

## 🚀 Connect with Us

- [GitHub Repository](https://github.com/sohanemon/motion)
- [Report Issues](https://github.com/sohanemon/motion/issues)

Let's bring your web animations to life together! 🌟🚀

---

Crafted with ❤️ by [@sohanemon](https://github.com/sohanemon)

✨ Happy Animating! ✨
