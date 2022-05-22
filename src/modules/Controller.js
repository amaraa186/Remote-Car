import React, { useEffect, useState } from 'react';
import {
    View,
    TouchableHighlight,
    StyleSheet,
    Modal
} from 'react-native';
import { forward, back, right, left, stop } from './ControllerApi'

const Controller = () => {
    const [modalShow, setModalShow] = useState(true)

    useEffect(() => {

    }, [])

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
        <View style={styles.container}>
            <View style={styles.rightButtons}>
                <TouchableHighlight onLongPress={onForward} onPressOut={onCancel}>
                    <View style={styles.button} />
                </TouchableHighlight>
                <View style={{ width: 10 }} />
                <TouchableHighlight onLongPress={onBack} onPressOut={onCancel}>
                    <View style={styles.button} />
                </TouchableHighlight>
            </View>
            <View style={styles.leftButtons}>
                <TouchableHighlight onLongPress={onRight} onPressOut={onCancel}>
                    <View style={styles.button} />
                </TouchableHighlight>
                <TouchableHighlight onLongPress={onLeft} onPressOut={onCancel}>
                    <View style={styles.button} />
                </TouchableHighlight>
            </View>
            <Modal
                visible={modalShow}
                onRequestClose={() => setModalShow(!modalShow)}
            >
                <View>
                    
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end', 
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: 'blue',
        height: 80,
        width: 80
    },
    rightButtons: {
        padding: 10, 
        flexDirection: 'row'
    },
    leftButtons: {
        padding: 10, 
        flex: 1, 
        maxHeight: 190, 
        justifyContent: 'space-between'
    }
})

export default Controller