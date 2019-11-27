import {
  VuexModule,
  Module,
  Mutation,
  getModule,
  Action
} from "vuex-module-decorators";
import store from "@/store";

@Module({ dynamic: true, store, name: "app" })
class App extends VuexModule {
  public billMode: string = "watch";

  @Mutation
  private ON_WATCH_MODE() {
    this.billMode = "watch";
  }

  @Mutation
  private ON_EDIT_MODE() {
    this.billMode = "edit";
  }

  @Action
  public OnWatchMode() {
    this.ON_WATCH_MODE();
  }

  @Action
  public OnEditMode() {
    this.ON_EDIT_MODE();
  }
}

export const AppModule = getModule(App);
