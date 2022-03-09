import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import  Mission from './MissionComponent';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
//import { PARTNERS } from '../shared/partners';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        partners: state.partners
    }
}  

class About extends Component {

  static navigationOptions = {
    title: "About"
  };

  render() {

    const renderPartner = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: {uri: baseUrl + item.image}}}
            />
        );
    };

    if (this.props.partners.isLoading) {
        return (
            <ScrollView>
                <Mission />
                <Card
                    title='Community Partners'>
                    <Loading />
                </Card>
            </ScrollView>
        );
    }
    if (this.props.partners.errMess) {
        return (
            <ScrollView>
                <Mission />
                <Card
                    title='Community Partners'>
                    <Text>{this.props.partners.errMess}</Text>
                </Card>
            </ScrollView>
        );
    }


    return (
        <ScrollView>
            <Mission />
            <Card
                title= 'Community Partners' 
                wrapperStyle={{margin: 10}}
            >
                <FlatList  style={{ marginTop : 0, borderColor:'grey '}}
                    data={this.props.partners.partners}
                    renderItem={renderPartner}
                    keyExtractor={item => item.id.toString()}
                />
            </Card>
        </ScrollView>
    )
  }
}

export default connect(mapStateToProps)(About);
