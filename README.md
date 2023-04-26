# Framer Motion Kick Start

- Use `motion` keyword with the element you want to animate
```js
<motion.div>...</motion.div>
```
- To add with UI libraries like Chakra or MUI
```js
<Box as={motion.div}>...</Box>
```

- States or arguements basics:
  initial={{}} // introduced initial state
  animate={{}} // introduced animation state, cons: it animates on page load
  whileInView={{}} // introduced animation state, pros: it animates on component did mount
  exit={{}} // introduced exit state, it required to wrapped with  `AnimatePresence` component to work
  ```js
  <AnimatePresence>
  { open && <Box as={motion.div}>...</Box> }
  </AnimatePresence>
  ```

## `motion.ts` file
```ts
export const transition = { type: 'spring', duration: 0.8 };

export const slideAnimation = (direction: string) => {
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
