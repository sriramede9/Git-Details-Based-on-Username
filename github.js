class GitHub {
  constructor() {
    this.client_id = "67149bacf3ce69a12ec6";
    this.client_secret = "dde6b997455da7b72c9ab42528a87daeccc56bc7";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
