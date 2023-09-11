import React, { useState } from "react";
import {
  SafeAreaView, ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity,
} from "react-native"

export default function App() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // Function to check if all fields are filled
  const areAllFieldsFilled = () => {
    return (
      firstName !== '' && lastName !== '' && email !== '' &&
      phoneNumber !== '' && password !== '' && confirmPassword !== ''
    )
  }


  const submitButtonTapped = () => {
    if(areAllFieldsFilled()) {
    // Save the data
      const formData = {
        firstName, lastName, email, phoneNumber, password, confirmPassword,
      }

      console.log('Form Data:', formData)
    
      // Clear the data
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhoneNumber('')
      setPassword('')
      setConfirmPassword('')
    } else {
      console.log('Please fill all the fields.')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.titleStyle}>Sign Up</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputStyle}
              placeholder="First Name"
              autoCorrect={false}
              autoFocus={true}
              keyboardType="default"
              onChangeText={(text) => setFirstName(text)}
              value={firstName}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Last Name"
              autoCorrect={false}
              autoFocus={true}
              keyboardType="default"
              onChangeText={(text) => setLastName(text)}
              value={lastName}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Email"
              autoCorrect={false}
              autoFocus={true}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Phone Number"
              autoCorrect={false}
              autoFocus={true}
              keyboardType="number-pad"
              onChangeText={(text) => setPhoneNumber(text)}
              value={phoneNumber}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Password"
              secureTextEntry
              autoCorrect={false}
              autoFocus={true}
              keyboardType="default"
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Confirm Password"
              secureTextEntry
              autoCorrect={false}
              autoFocus={true}
              keyboardType="default"
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
            />
          </View>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={submitButtonTapped}
            disabled={!areAllFieldsFilled()} // Disable if not all fields are filled
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // Set the background color here
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  contentContainer: {
    alignItems: "center",
    padding: 20,
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 10,
  },
  inputStyle: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
    width: "50%",
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
})