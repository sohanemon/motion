'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';
import { forwardRef, useId } from 'react';
import { defaultVariants } from '../constants/variants';
import { useMotion } from '../context/motion-provider';
import { isDefined } from '../utils';
const Component = forwardRef(({ variants, as, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : as || 'div';
    return _jsx(Comp, { ref: ref, ...props });
});
Component.displayName = 'Motion';
const MotionComponent = motion(Component);
MotionComponent.displayName = 'MotionComponent';
const withVariants = (Comp) => 
// eslint-disable-next-line react/display-name
// @ts-ignore
({ ref, always, whileInView = {}, variants = {}, transition = {}, ...props }) => {
    const id = useId();
    const { variants: contextVariants, transition: contextTransition, whileInView: contextWhileInView, ...defaultValue } = useMotion();
    const passingProps = {
        variants: { ...defaultVariants, ...contextVariants, ...variants },
        whileInView: !props.animate &&
            ((isDefined(whileInView) && whileInView) ||
                (isDefined(contextWhileInView) && contextWhileInView) ||
                'visible'),
        viewport: {
            once: !!always ? false : defaultValue?.viewport?.once,
        },
        transition: {
            delay: 0.1,
            duration: 0.3,
            ...contextTransition,
            ...transition,
        },
        ...defaultValue,
        ...props,
    }; // @ts-ignore
    return _jsx(Comp, { ref: ref, ...passingProps }, id);
};
// @ts-ignore
const Motion = withVariants(MotionComponent);
export default Motion;
