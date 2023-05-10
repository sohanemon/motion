# Framer Motion Kickstart

- Use `motion` keyword with the element you want to animate
```js
<motion.div>...</motion.div>
```
- To add with UI libraries like Chakra or MUI
```js
<Box as={motion.div}>...</Box>
```

States or arguements basics:
  initial={{}} // introduced initial state
  animate={{}} // introduced animation state, cons: it animates on page load
  whileInView={{}} // introduced animation state, pros: it animates on component did mount
  exit={{}} // introduced exit state, it required to wrapped with  `AnimatePresence` component to work
  ```js
  <AnimatePresence>
  { open && <Box as={motion.div}>...</Box> }
  </AnimatePresence>
  ```

### Codemon

```tsx
 // #note don't forget to add React when you catch the type by hovering for typescript
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log(e.pageX);
  }

  return (
    <div onMouseMove={(e) => handleMouseMove(e)}/>
```

### useTransform

```ts
const mouseX = useMotionValue(0);
const width = useTransform(mouseX, [0, 300], [40, 100]);
//   #note when mouseX = 0 then width = 40
// and when mouseX = 300 then width = 100
```

### useAnimate: OnClick / Custom animation action

```ts
import { useAnimate } from 'framer-motion';
```

Then call this hook on top of the code it will return a tuple

```tsx
const [scope, animate] = useAnimate();
```

Then use `scope` as `ref` on any element.

```tsx
<div ref={scope}>{children}</div>
```

Then use `animate` function inside `useEffect` on any function to trigger the animation.

```ts
function startAnimation() {
  animate('#image', { opacity: 0.5, x: -100 });
  //   first param is the querySelector
}
```

> you can only animate children, not the parent
To animate parent
```ts
animate(scope.current, { opacity: 1 }, { duration: 1 })
```

## `motion.ts` file
```ts
export const transition = { type: 'spring', duration: 0.8 };

export const slideAnimation = (direction: 'left' | 'up' | 'right' | 'down') => {
  return {
    initial: {
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      transition: { type: 'spring', duration: 0.3, delay: 0 },
      opacity: 0,
    },
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};
```
