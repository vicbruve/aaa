import {
  VuexModule,
  Module,
  Mutation,
  getModule,
  Action
} from "vuex-module-decorators";
import store from "@/store";

@Module({ dynamic: true, store, name: "token" })
class Token extends VuexModule {
  public usertoken = "";

  @Mutation
  private SAVE_USER_TOKEN(token: string) {
    this.usertoken = token;
  }

  @Action
  public saveUserToken(token: string) {
    this.SAVE_USER_TOKEN(token);
  }
}

export const TokenModule = getModule(Token);
