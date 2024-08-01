import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.xxxxxxx.app',
  appName: 'my-app',
  webDir: 'out',
  server: {
		url: `http://192.168.xxx.xxx:3000`,
		cleartext: true
	}
};

export default config;
