import { observable, action, computed } from "mobx";
import { ListView } from "react-native";

import API from "../Services/Api";

import AppConfig from "../Config/AppConfig";

const api = API.create(AppConfig.baseApi);

export default class CoffeeStore {
  @observable shops = [];
  @observable loading = false;

  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

  @computed
  get count() {
    return this.shops.slice().length;
  }

  @computed
  get dataSource() {
    return this.ds.cloneWithRows(this.shops.slice());
  }

  @action
  getShops() {
    this.loading = true;
    api.getShops().then(response => {
      this.loading = false;
      if (response.ok && response.data) {
        this.shops = Object.keys(response.data).map(key => {
          response.data[key].id = key;
          return response.data[key];
        });
      }
    });
  }

  @action
  saveShop(shop) {
    this.loading = true;
    api.saveShop(shop).then(response => {
      this.loading = false;
      this.getShops(); //// <---- we don't like it but is just for testing
    });
  }
}
