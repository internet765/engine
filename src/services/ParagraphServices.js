import api from "../http";

export default class ParagraphServices {
  static async addParagraph(data) {
    return api.post("/paragraphs", data);
  }
}
