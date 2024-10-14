import { View, Text, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity} from 'react-native';
// import axios from 'axios';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // const response = await axios.post('http://localhost:8080/api/login', {
      //   email,
      //   password,
      // });

      router.navigate('/home'); 
    } catch (err) {
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Image
          source={require('../../assets/images/hinhlogo.jpg')}
          style={styles.reactLogo}
        />
      <Text style={styles.header} >Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title="Login" onPress={handleLogin} />
        <Text style={styles.registerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => router.navigate('/register')}>
          <Text style={styles.registerLink}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
    color: 'red',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    marginHorizontal: 50,
  },
  reactLogo: {
    width: 200,  // Adjust width to make the image smaller
    height: 150, // Adjust height to make the image smaller
    resizeMode: 'contain', // Maintain aspect ratio
    alignSelf: 'center', // Center the image horizontally
    marginBottom: 20, // Space below the image
  },
  button: {
    marginHorizontal: 100,
    padding: 5,
  },
  registerText: {
    marginTop: 200,
    // textAlign: 'center',
    width: 300,
  },
  registerLink: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
  }
});

export default Login;