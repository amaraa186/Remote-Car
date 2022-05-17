import React from 'react';
import {
    View,
    TouchableHighlight, 
    Text
  } from 'react-native';
import localhost from 'react-native-localhost';
import { forward, back, right, left, stop } from './ControllerApi'
<<<<<<< HEAD

=======
>>>>>>> e3e4477ab8fd0f638992ed87a3931f51b74378b6

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
<<<<<<< HEAD
        <View>
            
=======
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, paddingLeft: 100, backgroundColor: 'blue'}}>
                <Text>${localhost}</Text>
            </View>
            <View style={{ alignItems: 'flex-end', flex: 1, justifyContent: 'space-between' }}>
                <View style={{ padding: 10, flexDirection: 'row' }}>
                    <TouchableHighlight onLongPress={() => onForward()} onPress={() => onForward()} onPressOut={() => onCancel()}>
                        <View style={{backgroundColor: 'blue', height: 60, width: 60}} />
                    </TouchableHighlight>
                    <View style={{ width: 10 }} />
                    <TouchableHighlight onLongPress={() => onBack()} onPress={() => onBack()} onPressOut={() => onCancel()}>
                        <View style={{backgroundColor: 'blue', height: 60, width: 60}} />
                    </TouchableHighlight>
                </View>
                <View style={{ padding: 10, flex: 1, maxHeight: 150, justifyContent: 'space-between' }}>
                    <TouchableHighlight onLongPress={() => onRight()} onPress={() => onRight()} onPressOut={() => onCancel()}>
                        <View style={{backgroundColor: 'blue', height: 60, width: 60}} />
                    </TouchableHighlight>

                    <TouchableHighlight onLongPress={() => onLeft()} onPress={() => onLeft()} onPressOut={() => onCancel()}>
                        <View style={{backgroundColor: 'blue', height: 60, width: 60}} />
                    </TouchableHighlight>
                </View>
            </View>
>>>>>>> e3e4477ab8fd0f638992ed87a3931f51b74378b6
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