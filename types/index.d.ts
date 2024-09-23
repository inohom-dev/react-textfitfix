declare module "react-textfitfix" {
  import { ComponentType } from "react";

  export interface TextfitProps {
    mode?: "single" | "multi";
    forceSingleModeWidth?: boolean;
    min?: number;
    max?: number;
    throttle?: number;
    autoResize?: boolean;
    onReady?: () => void;
  }

  export const Textfit: ComponentType<TextfitProps>;
  export default Textfit;
}
