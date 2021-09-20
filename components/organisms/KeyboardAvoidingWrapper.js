import { KeyboardAvoidingView, keyboard, ScrollView,
            TouchableWithoutFeedback} from "react-native";

const KeyboardAvoidingWrapper = (props) => {
    return (
        <KeyboardAvoidingView>
            <ScrollView>
                <TouchableWithoutFeedback onPress={keyboard.dismiss}>
                    {props.children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}