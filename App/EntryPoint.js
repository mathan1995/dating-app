import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import Button from './components/button'
export class EntryPoint extends Component {
    render() {
        return (
            <View style={Styles.align}>
                <Button />
            </View>
        )
    }
}

export default EntryPoint

const Styles = StyleSheet.create({
    align:{
        alignItems:'center',
        marginTop:40
    }
})