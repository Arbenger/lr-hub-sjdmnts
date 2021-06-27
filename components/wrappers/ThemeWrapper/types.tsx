import { CSSProperties } from '@material-ui/styles';

export type AppPaletteKey =
   | 'black'
   | 'blue'
   | 'indigo'
   | 'red'
   | 'maroon'
   | 'green'
   | 'lime'
   | 'brown'
   | 'purple'
   | 'pink'
   | 'orange'
   | 'yellow';

export interface AppPaletteProperties {
   light: CSSProperties['color'];
   main: CSSProperties['color'];
   dark: CSSProperties['color'];
   contrastText: CSSProperties['color'];
}

export interface AppPaletteObject {
   key: AppPaletteKey;
   properties: AppPaletteProperties;
}

export interface AppPalette {
   current: AppPaletteKey;
   black?: AppPaletteProperties;
   red?: AppPaletteProperties;
   blue?: AppPaletteProperties;
   indigo?: AppPaletteProperties;
   green?: AppPaletteProperties;
   purple?: AppPaletteProperties;
   pink?: AppPaletteProperties;
   orange?: AppPaletteProperties;
   yellow?: AppPaletteProperties;
}
