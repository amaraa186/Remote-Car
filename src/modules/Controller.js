import React from 'react';
import {
    View,
    TouchableOpacity,
    TouchableHighlight
  } from 'react-native';
import { forward, back, right, left, stop } from './ControllerApi'

const Controller = () => {

    const onForward = () => {
        forward()
    }
    
    const onBack = () => {
        back()
    }
    
    const onCancel = () => {
        stop()
    }
    
    const onRight = () => {
        right()
    }
    
    const onLeft = () => {
        left()
    }

    return (
        <View style={{flex: 1}}>
            <View>
                
            </View>
            <View style={{ alignItems: 'flex-end', flex: 1, justifyContent: 'space-between' }}>
                <View style={{ padding: 10, flexDirection: 'row' }}>
                    <TouchableHighlight onLongPress={() => onForward()} onPressOut={() => onCancel()}>
                        <View style={{backgroundColor: 'blue', height: 70, width: 70}} />
                    </TouchableHighlight>
                    <View style={{ width: 10 }} />
                    <TouchableHighlight onLongPress={() => onBack()} onPressOut={() => onCancel()}>
                        <View style={{backgroundColor: 'blue', height: 70, width: 70}} />
                    </TouchableHighlight>
                </View>
                <View style={{ padding: 20, flex: 1, maxHeight: 190, justifyContent: 'space-between' }}>
                    <TouchableHighlight onLongPress={() => onRight()} onPressOut={() => onCancel()}>
                        <View style={{backgroundColor: 'blue', height: 70, width: 70}} />
                    </TouchableHighlight>

                    <TouchableHighlight onLongPress={() => onLeft()} onPressOut={() => onCancel()}>
                        <View style={{backgroundColor: 'blue', height: 70, width: 70}} />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

export default Controller