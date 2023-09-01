import 'framer-motion';

declare module 'framer-motion' {
  export type VariantLabels =
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'hidden'
    | 'visible'
    | 'scale1'
    | 'scale0'
    | 'height0'
    | 'height1';
}
