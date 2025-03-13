import React from 'react';
import { View, Text, Image ,StyleSheet, TouchableOpacity, Linking } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
const Settings = () => {
  const handleLinkPress = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error('Failed to open link:', err)
    );
  };

  return (
    <View style={styles.container}>
      {/* UI Section */}
      <Text style={styles.sectionTitle}>UI</Text>
      <View style={styles.sectionContent}>
        <View style={styles.row}>
        <Text style={[styles.text, {width: 200} , {marginLeft: 4}]}>Language : English</Text>
        <AntDesign name="arrowright" size={24} color="#CCCCCC" style={{marginLeft: 64}}  />
        </View>
        
      </View>

      {/* General Section */}
      <Text style={styles.sectionTitle}>General</Text>
      <View style={styles.sectionContent}>
        <TouchableOpacity style={styles.item}>
            <View style={styles.row}>
                <View style={[styles.row, {width: 200}]}>
                    <Feather name="share-2" size={24} color="#737373" />
                    <Text style={styles.text}>Share</Text>
                </View>
                    <AntDesign name="arrowright" size={24} color="#CCCCCC" style={{marginLeft: 67}} />
            </View>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
            <View style={styles.row}>
            <View style={[styles.row, {width: 200}]}>
                <Feather name="star" size={24} color="#737373" />
                <Text style={styles.text}>Rate</Text>
            </View>
            
            <AntDesign name="arrowright" size={24} color="#CCCCCC" style={{marginLeft: 67}} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
            <View style={styles.row}>
            <View style={[styles.row, {width: 200}]}>
                <AntDesign name="hearto" size={24} color="#737373" />
                <Text style={styles.text}>Support</Text>
            </View>
            
                <AntDesign name="arrowright" size={24} color="#CCCCCC" style={{marginLeft: 67}} />
            </View>
        </TouchableOpacity>
      </View>

      {/* Links Section */}
      <Text style={styles.sectionTitle}>Links</Text>
      <View style={styles.sectionContent}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleLinkPress('https://github.com')}
        >
            <View style={styles.row}>
                <View style={[styles.row, {width: 200}]}>
                    <SimpleLineIcons name="social-github" size={24} color="#737373" />
                    <Text style={styles.text}>Github</Text>
                </View>
                <AntDesign name="arrowright" size={24} color="#CCCCCC" style={{marginLeft: 67}} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleLinkPress('https://obytes.com')}
        >
            <View style={styles.row}>
                <View style={[styles.row, {width: 200}]}>
                    <AntDesign name="earth" size={24} color="#737373" />
                    <Text style={styles.text}>Website</Text>
                </View>
                <AntDesign name="arrowright" size={24} color="#CCCCCC" style={{marginLeft: 67}} />
            </View>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.avatarContainer} >
            <Image source={require('../../../assets/footer.png')} style={styles.avatar} />
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 10,
  },
  sectionContent: {
    borderWidth: 1,
    borderColor: '#F0EFEE',
    borderRadius: 10,
    padding: 13,
    paddingLeft: 20,
    marginBottom: 40,
    
    
  },
  text: {
    fontSize: 14,
    color: '#000000',
    marginLeft: -10,
  },
  item: {
    paddingVertical: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#A0A0A0',
    textAlign: 'center',
    marginTop: -20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    width: '100%',
  },
  avatar: {
    width: 150,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,

  },
});

export default Settings;
