/// <reference types="react" />
import { MotionProps } from 'framer-motion';
declare const props: MotionProps | undefined;
export declare const useMotion: () => MotionProps;
export default function MotionProvider({ children, defaultValue, }: {
    children: React.ReactNode;
    defaultValue: typeof props;
}): import("react/jsx-runtime").JSX.Element;
export {};
