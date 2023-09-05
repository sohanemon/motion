import { MotionProps } from 'framer-motion';
import { createContext, useContext } from 'react';
const props: MotionProps | undefined = {
  variants: {},
  transition: {},
  whileInView: {},
};
const Motion = createContext(props);
export const useMotion = () => useContext(Motion);

export default function MotionProvider({
  children,
  defaultValue,
}: {
  children: React.ReactNode;
  defaultValue: typeof props;
}) {
  return <Motion.Provider value={defaultValue}>{children}</Motion.Provider>;
}
