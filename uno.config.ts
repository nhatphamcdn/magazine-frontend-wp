import process from 'node:process'
import type { Variant } from 'unocss'
import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { variantParentMatcher } from '@unocss/preset-mini/utils'

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno({
      attributifyPseudo: true,
    }),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: 'var(--c-primary)',
        active: 'var(--c-primary-active)',
      },
      danger: {
        DEFAULT: 'var(--c-danger)',
        active: 'var(--c-danger-active)',
      },
    },
  },
})