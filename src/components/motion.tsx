'use client';

import { Slot } from '@radix-ui/react-slot';
import { Variants, motion } from 'framer-motion';
import { ComponentPropsWithRef, ElementType, forwardRef, useId } from 'react';

import { defaultVariants } from '../constants/variants';
import { useMotion } from '../context/motion-provider';
import { isDefined } from '../utils';

interface MotionProps extends ComponentPropsWithRef<'div'> {
  as?: ElementType;
  asChild?: boolean;
  variants?: Variants;
  always?: boolean;
}

const Component = forwardRef<HTMLDivElement, MotionProps>(
  ({ variants, as, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : as || 'div';
    return <Comp ref={ref} {...props} />;
  }
);

Component.displayName = 'Motion';
const MotionComponent = motion(Component);
MotionComponent.displayName = 'MotionComponent';

const withVariants =
  (Comp: typeof Component): typeof MotionComponent =>
  // eslint-disable-next-line react/display-name
  // @ts-ignore
  ({
    ref,
    always,
    whileInView = {},
    variants = {},
    transition = {},
    ...props
  }: ComponentPropsWithRef<typeof MotionComponent>) => {
    const id = useId();
    const {
      variants: contextVariants,
      transition: contextTransition,
      whileInView: contextWhileInView,
      ...defaultValue
    } = useMotion();
    const passingProps = {
      variants: { ...defaultVariants, ...contextVariants, ...variants },
      whileInView:
        !props.animate &&
        ((isDefined(whileInView) && whileInView) ||
          (isDefined(contextWhileInView) && contextWhileInView) ||
          'visible'),
      viewport: {
        once: always ? false : defaultValue?.viewport?.once,
      },
      transition: {
        delay: 0.1,
        duration: 0.3,
        type: 'tween',
        ...contextTransition,
        ...transition,
      },
      ...defaultValue,
      ...props,
    }; // @ts-ignore
    return <Comp key={id} ref={ref} {...passingProps} />;
  };
// @ts-ignore
const Motion = withVariants(MotionComponent);

export default Motion;
