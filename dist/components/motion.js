'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';
import { forwardRef, useId } from 'react';
import { defaultVariants } from '../constants/variants';
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
({ ref, always, whileInView, variants, ...props }) => {
    const id = useId();
    return (_jsx(Comp, { 
        // @ts-ignore
        ref: ref, variants: variants || defaultVariants, whileInView: !props.animate && (whileInView || 'visible'), viewport: { once: !always }, ...props }, id));
};
// @ts-ignore
const Motion = withVariants(MotionComponent);
export default Motion;
