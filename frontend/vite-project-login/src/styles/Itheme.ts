import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            BACKGROUND_900: string,
            BACKGROUND_800: string,
            BACKGROUND_700: string,
        
            WHITE: string,
            ORANGE: string,
        
            GRAY_100: string,
            GRAY_300: string,
        
            RED: string
        }
    }
}