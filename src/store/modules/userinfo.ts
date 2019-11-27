import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from "vuex-module-decorators";
import store from "@/store";

@Module({ dynamic: true, store, name: "userInfo" })
class userInfo extends VuexModule {
  public username: string = "";
  public nickname: string = "";

  @Mutation
  private SAVE_USERNAME(username: string) {
    this.username = username;
  }

  @Mutation
  private SAVE_NICKNAME(nickname: string) {
    this.nickname = nickname;
  }

  @Action
  public saveUsername(username: string) {
    this.SAVE_USERNAME(username);
  }

  @Action
  public saveNickname(nickname: string) {
    this.SAVE_NICKNAME(nickname);
  }
}

export const userInfoModoule = getModule(userInfo);
