import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
const props = {
    variants: {},
    transition: {},
    whileInView: {},
};
const Motion = createContext(props);
export const useMotion = () => useContext(Motion);
export default function MotionProvider({ children, defaultValue, }) {
    return _jsx(Motion.Provider, { value: defaultValue, children: children });
}
