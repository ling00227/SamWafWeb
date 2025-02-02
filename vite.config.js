import { loadEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import { createVuePlugin } from 'vite-plugin-vue2';
import { createSvgPlugin } from 'vite-plugin-vue2-svg';
import requireTransform from 'vite-plugin-require-transform';

import path from 'path';

const CWD = process.cwd();

export default ({ mode }) => {
  const { VITE_BASE_URL } = loadEnv(mode, CWD);

  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, './src'),
      },
    },

    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
        },
      },
    },

    plugins: [
      createVuePlugin({
        jsx: true,
      }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: true,
      }),
      createSvgPlugin(),
      requireTransform(
        {
        fileRegex: /.vue$/
        }
      ),
    ],

    build: {
      cssCodeSplit: false,
      emptyOutDir:true,
      minify: 'terser',
      terserOptions: {
        compress: {
          //生产环境时移除console.log()
          drop_console: true,
          drop_debugger: true,
        },
      },
    },

    server: {
      host: '::',
      port: 3001,
      proxy: {
        '/api': {
          // 用于开发环境下的转发请求
          // 更多请参考：https://vitejs.dev/config/#server-proxy
          target: 'https://127.0.0.1',
          changeOrigin: true,
        },
      },
    },
  };
};
