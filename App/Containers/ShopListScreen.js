import React from "react";
import { Text, View, Image, ListView } from "react-native";

import Spinner from "../Components/Spinner";

// import { Card, CardItem, Content, Body } from 'native-base';
import I18n from "react-native-i18n";
import Animatable from "react-native-animatable";

import { createIconSetFromFontello } from "react-native-vector-icons";

// import LoginForm from '../Components/LoginForm';
import { observer, inject } from "mobx-react/native";

import { Metrics, Colors, Images } from "../Themes";

import ShopRow from "../Components/ShopRow";
// Styles
import styles from "./Styles/ShopListScreenStyles";

@inject("shopStore")
@observer
class ShopListScreen extends React.Component {
  constructor(props) {
    super(props);

    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    *************************************************************/
    const dataObjects = [];

    // react-navigation is passing the params in state.params instead of props...
    const { params } = props.navigation.state;

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/

    const rowHasChanged = (r1, r2) => r1 !== r2;

    // DataSource configured
    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    };
  }

  componentDidMount() {
    const { shopStore } = this.props;

    shopStore.getShops();
  }

  componentWillReact = () => {
    const { shopStore } = this.props;
    console.log("componentWillReact ShopList");

    console.log("shops", shopStore.shops);
    if (shopStore.shops) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(shopStore.shops.slice())
      });
    }
  };

  onLike = rowData => {
    const { shopStore } = this.props;
    rowData.likes++;
    shopStore.saveShop(rowData);
  };

  renderRow = rowData => {
    return <ShopRow data={rowData} onLike={() => this.onLike(rowData)} />;
  };

  renderSeparator = (sectionId, rowId) => {
    return <View key={rowId} style={styles.separator} />;
  };

  renderList = () => {
    const { shopStore } = this.props;
    return (
      <ListView
        contentContainerStyle={styles.listContent}
        dataSource={shopStore.dataSource}
        renderRow={this.renderRow}
        enderSeparator={this.renderSeparator}
        enableEmptySections={true}
        pageSize={15}
      />
    );
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        {this.renderList()}
      </View>
    );
  }
}

export default ShopListScreen;
