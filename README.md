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
