import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import  Mission from './MissionComponent';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partners:PARTNERS
        };
    }
  static navigationOptions = {
    title: "About"
  };

  render() {

    const renderPartner = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
            />
        );
    };


    return (
        <ScrollView>
            <Mission />
            <Card
                title= 'Community Partners' 
                wrapperStyle={{margin: 10}}
            >
                <FlatList  style={{ marginTop : 0, borderColor:'grey '}}
                    data={this.state.partners}
                    renderItem={renderPartner}
                    keyExtractor={item => item.id.toString()}
                />
            </Card>
        </ScrollView>
    )
  }
}

export default About;
