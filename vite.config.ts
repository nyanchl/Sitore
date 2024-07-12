import { defineConfig } from 'vite'
import {crx, defineManifest} from '@crxjs/vite-plugin'

const manifest = defineManifest({
  "manifest_version": 3,
  "name": "Sitore",
  "description": "Store your favorite sites in Notion.",
  "version": "1.0.0",
  "action": {
    "default_icon": "nyanchl.PNG",
    "default_popup": "popup.html",
  },
  "background": {
		"service_worker": "src/background.ts",
		"type": "module"
	},
	"permissions": [
    "tabs",
    "activeTab",
		"background",
		"storage"
	],
})

export default defineConfig({
  plugins: [
    crx({
      manifest,
    }),
  ],
})