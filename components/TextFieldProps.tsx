import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface TextFieldProps {
  title: string;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  
}

const TextField: React.FC<TextFieldProps> = ({
  title,
  placeholder,
  value,
  onChangeText,
  
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        
        placeholderTextColor="#A0A0A0"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: '#525252',
    marginBottom: 8,
  },
  input: {
    width: 340,
    height: 52,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000000',

  },
});

export default TextField;