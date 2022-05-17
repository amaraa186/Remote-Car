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

    const handleMove = () => {
        console.log()
    }

    const handleStop = () => {
        console.log()
    }

    return (
        <View>
            
        </View>
        // <View style={{flex: 1, flexDirection: 'row'}}>
        //     <View style={{flex: 1, paddingLeft: 100, backgroundColor: 'blue'}}>
        //         <Video 
        //             ref={video}
        //             source={{
        //                 uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        //             }}
        //             style={{ alignSelf: 'center', width: 320, height: 200 }}
        //         />
        //     </View>
        //     <View style={{ alignItems: 'flex-end', flex: 1, justifyContent: 'space-between' }}>
        //         <View style={{ padding: 10, flexDirection: 'row' }}>
        //             <TouchableHighlight onLongPress={() => onForward()} onPressOut={() => onCancel()}>
        //                 <View style={{backgroundColor: 'blue', height: 60, width: 60}} />
        //             </TouchableHighlight>
        //             <View style={{ width: 10 }} />
        //             <TouchableHighlight onLongPress={() => onBack()} onPressOut={() => onCancel()}>
        //                 <View style={{backgroundColor: 'blue', height: 60, width: 60}} />
        //             </TouchableHighlight>
        //         </View>
        //         <View style={{ padding: 20, flex: 1, maxHeight: 190, justifyContent: 'space-between' }}>
        //             <TouchableHighlight onLongPress={() => onRight()} onPressOut={() => onCancel()}>
        //                 <View style={{backgroundColor: 'blue', height: 60, width: 60}} />
        //             </TouchableHighlight>

        //             <TouchableHighlight onLongPress={() => onLeft()} onPressOut={() => onCancel()}>
        //                 <View style={{backgroundColor: 'blue', height: 60, width: 60}} />
        //             </TouchableHighlight>
        //         </View>
        //     </View>
        // </View>
    )
}

export default Controller