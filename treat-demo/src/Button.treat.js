import { style } from 'treat';

export const button = style({
    padding: 12,
    backgroundColor: 'beige',
    fontSize: 32,
    color: 'black',
    border: 'none',
});

export const tBtn = style((theme) => ({
    padding: 12,
    backgroundColor: theme.brandColor,
    fontSize: 32,
    color: 'white',
    border: 'none',
}));
