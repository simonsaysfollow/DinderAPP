import React, { Component } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { StyleSheet } from 'react-native';

export default class DropDownCity extends Component {
    handler = (key, type) => {
        this.props.updateChange(type)
    }
    render() {
        return (

            <ModalDropdown
                options={['Oakland', 'San Francisco', 'Hayward', 'San Jose', "Berkeley"]}
                onSelect={this.handler}
                style={{
                    content: 'center',
                    borderWidth: 1,
                    borderRadius: 3,
                    
                    backgroundColor:"#8d85e2"


                }}
                dropdownTextStyle={{
                    fontSize: 30,
                    textAlign:"center",
                    fontWeight:"bold",
                    fontFamily:"Cochin"

                }}

                dropdownStyle={{
                   
                     borderWidth: 2,
                    borderRadius: 3,

                }}
                defaultValue={'Choose a City!'}
                textStyle={styles.textBeh}
            />

        );
    }

}
const styles = StyleSheet.create({
    textBeh: {
        fontSize: 25,
        width: 200,
        textAlign: "center",
        fontWeight:"bold",
        fontFamily:"Cochin"
        
        


    },

});

