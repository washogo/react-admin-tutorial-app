export const authProvider = {
  // ログイン機能
  login: (username: string) => {
    localStorage.setItem("username", username);
    return Promise.resolve();
  },
  // ログアウト機能
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  // APIのレスポンスがエラーであった時の処理
  checkError: (status: number) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // ページ遷移した時の認証チェック機能
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },
  // ページ遷移した時の権限とロールのチェック機能
  getPermissions: () => Promise.resolve(),
};