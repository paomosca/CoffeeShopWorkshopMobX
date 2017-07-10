// @flow

import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { observer } from "mobx-react/native";

import { Colors, Metrics } from "../Themes";

import styles from "./Styles/ShopRowStyle";

const MAX_LIKE = 50;

@observer
export default class ShopRow extends React.Component {
  constructor(props) {
    super(props);
  }

  addLike = () => {
    const { onLike } = this.props;
    onLike();
  };

  render() {
    const { data } = this.props;
    //console.log("data", data);
    return (
      <View style={styles.container}>
        <Image source={{ uri: data.image }} style={styles.image} />
        <Text style={styles.likes}>
          {data.likes}
        </Text>
        <View style={styles.dataWrapper}>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.location}>
              {data.location}
            </Text>
            <Text style={styles.author}>
              {data.author}
            </Text>
          </View>

          {data.likes < MAX_LIKE &&
            <TouchableOpacity onPress={this.addLike}>
              <Text style={styles.likeButton}>Like!</Text>
            </TouchableOpacity>}
        </View>
      </View>
    );
  }
}
