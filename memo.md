# 環境構築メモ

## 想定の構成

* Vue2
* @vue/cli

## 別途有益なライブラリ

* npm-check-updates

ncu が使えるようになる

## 初期ライブラリインストール

* npm init -y
* npm i -g @vue/cli
* cd ${workspace}
* vue create vue2

### App.vueを開くとエラー

* [サブディレクトリにプロジェクトがあるときにVSCodeのESLintを有効にする](https://zukucode.com/2020/10/eslint-vscode-subdirectory.html)
* [初投稿！Parsing error](https://qiita.com/tokuyama-shouta/items/2379a4b6639654b09569)

#### .vscode/setting.json へ設定を追加

```json
{
  "eslint.workingDirectories": [
    "./vue2"
  ],
}
```

### ./.prettierrc.yml 追加

初期状態だと、ダブルクオートが優先され、ESLint的に都合が悪い

```yaml
printWidth: 120
singleQuote: true
```

### 'state' is already declared in the upper scope への対応

* [vue.js - Eslint状態はすでに宣言されています[Vuex]](https://tutorialmore.com/questions-1404890.htm)

おそらく、宣言位置を変更するのが簡単

vue.js - Eslint状態はすでに宣言されています[Vuex]

```diff
- const state = {
-   step: 1,
-   count: 0,
- };

  const getters = {
    step: (state) => state.step,
    count: (state) => state.count,
  };

  const actions = {
    increment({ commit }) {
      commit('increment');
    },
  };

  const mutations = {
    increment(state) {
      state.count += state.step;
    },
  };

+ const state = {
+   step: 1,
+   count: 0,
+ };

  export default {
    state,
    getters,
    actions,
    mutations,
  };
```
