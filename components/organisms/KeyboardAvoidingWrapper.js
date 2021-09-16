import React from "react";
import { KeyboardAvoidingView, Keyboard, ScrollView, TouchableWithoutFeedback } from "react-native"

const KeyboardAvoidingWrapper = (props) => {
    return(
        <KeyboardAvoidingView>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {props.children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default KeyboardAvoidingWrapper;