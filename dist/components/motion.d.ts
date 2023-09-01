import { Variants } from 'framer-motion';
import { ComponentPropsWithRef, ElementType } from 'react';
interface MotionProps extends ComponentPropsWithRef<'div'> {
    as?: ElementType;
    asChild?: boolean;
    variants?: Variants;
    always?: boolean;
}
declare const Motion: import("framer-motion").CustomDomComponent<Omit<MotionProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default Motion;
