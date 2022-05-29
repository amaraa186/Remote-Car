import React, { useEffect, useState, useContext } from 'react';
import {
    View,
    TouchableHighlight,
    StyleSheet,
    Modal,
    TextInput, 
    TouchableOpacity,
    Text
} from 'react-native';
import { forward, back, right, left, stop } from './ControllerApi';

const Controller = () => {
    const [modalShow, setModalShow] = useState(false)
    const [value, setValue] = useState()

    const onForward = () => {
        if(value != null && value != ''){
            forward(value)
        } else {
            alert("IP хаягаа оруулна уу")
        }
    }
    
    const onBack = () => {
        if(value != null && value != ''){
            back(value)
        } else {
            alert("IP хаягаа оруулна уу")
        }
    }
    
    const onCancel = () => {
        if(value != null && value != ''){
            stop(value)
        } else {
            alert("IP хаягаа оруулна уу")
        }
    }
    
    const onRight = () => {
        if(value != null && value != ''){
            right(value)
        } else {
            alert("IP хаягаа оруулна уу")
        }
    }
    
    const onLeft = () => {
        if(value != null && value != ''){
            left(value)
        } else {
            alert("IP хаягаа оруулна уу")
        }
    }

    const onChange = () => {
        setModalShow(false)
    }

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <View style={{marginEnd: 170, marginTop: 10}}>
                    <TouchableOpacity onPress={() => setModalShow(true)}>
                        <View style={styles.dots}>
                            <View style={styles.dot}/>
                            <View style={styles.dot}/>
                            <View style={styles.dot}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rightButtons}>
                    <TouchableHighlight onLongPress={onForward} onPressOut={onCancel}>
                        <View style={styles.button} />
                    </TouchableHighlight>
                    <View style={{ width: 10 }} />
                    <TouchableHighlight onLongPress={onBack} onPressOut={onCancel}>
                        <View style={styles.button} />
                    </TouchableHighlight>
                </View>
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
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <View style={{paddingStart: 125}}>
                            <TouchableOpacity onPress={() => setModalShow(false)}>
                                <Text style={{fontWeight: 'bold'}}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput 
                            value={value}
                            onChangeText={setValue}
                            placeholder='IP хаягаа оруулна уу'
                            keyboardType="numeric" 
                        />
                        <TouchableOpacity onPress={onChange}>
                            <View style={{
                                padding: 10,
                                backgroundColor: 'red'
                            }}>
                                <Text style={{textAlign: 'center', color: 'white'}}>Өөрчлөх</Text>
                            </View>
                        </TouchableOpacity>
                    </View> 
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
    modalContainer: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },  
    dot: {
        backgroundColor: 'black', 
        width: 10,
        height: 10
    },
    dots: {
        flexDirection: 'row', 
        width: 40, 
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