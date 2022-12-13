module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off', // console.log()の使用を許可する
    semi: ['error', 'never'], // 文末にセミコロンを付けない
  },
}
