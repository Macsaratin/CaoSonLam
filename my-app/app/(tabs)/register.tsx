import { View, Text, TextInput, Button, StyleSheet, Alert, Image} from 'react-native';
// import axios from 'axios';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const Register: React.FC = () => {
  const [address, setAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstname, setFName] = useState<string>('');
  const [lastname, setLName] = useState<string>('');
  const [user, setUser] = useState<string>('');
  const router = useRouter();

  const handlButtom = async () => {
    try {
    //   const response = await axios.post('http://localhost:8080/api/login', {
    //     email,
    //     password,
    //   });

      router.navigate('/login'); // dùng để chuyển đổi các trang
    } catch (err) {
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      {/* <Image
          source={require('../../assets/images/download.jpg')}
          style={styles.reactLogo}
        /> */}
      <Text style={styles.header} >Register</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstname}
        onChangeText={setFName}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastname}
        onChangeText={setLName}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="User Name"
        value={user}
        onChangeText={setUser}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={address}
        onChangeText={setAddress}
        secureTextEntry
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
        <Button title="Đăng Ký" onPress={handlButtom} />
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
    marginBottom: 32,
    textAlign: 'center',
    color: 'red',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    marginHorizontal: 20,
  },
  reactLogo: {
    width: '100%',  // Chiều rộng bằng 100% màn hình
    height: 250,    // Chiều cao có thể tuỳ chỉnh, ở đây đặt là 250
    resizeMode: 'cover', // Giữ tỉ lệ và lấp đầy khung hình
    marginBottom: 20,  // Khoảng cách phía dưới hình ảnh
  },
  button: {
    marginHorizontal: 100,
  }
});

export default Register;