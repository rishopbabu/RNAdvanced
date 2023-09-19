import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import { incrementCounterAction, decrementCounterAction } from "../Redux/Counter/counterAction";

function ReduxComponent(props: any) {

    const counter = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();

    const increaseCounter = (params: any) => {
        dispatch(incrementCounterAction(params));
    };

    const decreaseCounter = (params: any) => {
        dispatch(decrementCounterAction(params))
    }


    return (
        <View style={
            {justifyContent: 'center', 
            alignContent: 'center'}
            }>
                <View style={{marginVertical: 50}}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold'}}> counter value = {counter} </Text>
                </View>

                <View>
                    <TouchableOpacity style= {styles.buttonContainer} onPress={() => {increaseCounter(1)}}>
                        <Text>Increment + 1 </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style= {styles.buttonContainer} onPress={() => {increaseCounter(5)}}>
                        <Text>Increment + 5 </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style= {styles.buttonContainer} onPress={() => {decreaseCounter(5)}}>
                        <Text>Increment - 5 </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style= {styles.buttonContainer} onPress={() => {decreaseCounter(1)}}>
                        <Text style={{alignContent: 'center', justifyContent: 'center'}}>Decrement - 1 </Text>
                    </TouchableOpacity>
                </View>

        </View>
    )
}


const styles = StyleSheet.create(
    {
        buttonContainer: {
            backgroundColor: '#007AFF',
            borderRadius: 5,
            paddingVertical: 10,
            paddingHorizontal: 20,
            alignItems: 'center',
            marginBottom: 5,
        }
    }
)

export default ReduxComponent;