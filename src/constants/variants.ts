import { Variants } from 'framer-motion';

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
