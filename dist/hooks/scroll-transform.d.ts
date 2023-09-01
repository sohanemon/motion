declare const useScrollTransform: ({ target, inputRange, outputRange, offset, }: {
    target: any;
    inputRange?: [number, number];
    outputRange: [any, any];
    offset?: [string, string];
}) => import("framer-motion").MotionValue<any>;
export default useScrollTransform;
