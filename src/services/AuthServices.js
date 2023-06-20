import api from "../http";

export default class AuthServices {
  static async login(data) {
    return api.post("/auth/login", {
      email: data.email,
      password: data.password,
    });
  }

  static async logout(token) {
    return api.post("/auth/logout", {
      refreshToken: token,
    });
  }

  static async refreshToken(token) {
    return api.post("/auth/refresh", {
      refreshToken: token,
    });
  }

  static async sendCode(email) {
    return api.post("/auth/send-code", {
      email: email,
    });
  }

  static async resetPassword(data) {
    return api.post("/auth/reset-password", data);
  }

  static async changePassword(data) {
    return api.put("/auth/change-password", {
      password: data.password,
      newPassword: data.newPassword,
    });
  }

  static async changeEmail(email) {
    return api.post("/auth/change-email", {
      email: email,
    });
  }

  static async approveChangeEmail(code) {
    return api.post("/auth/approve-change-email", {
      code: code,
    });
  }

  static async setCurrentUser() {
    return api.get("/auth/my");
  }
}
