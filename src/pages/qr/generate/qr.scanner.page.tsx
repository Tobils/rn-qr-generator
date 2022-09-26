import { Dimensions, KeyboardAvoidingView, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import QRCode from 'react-native-qrcode-svg'
import useViewModel from './view.model'

var {width, height} = Dimensions.get('window');


const QrScannerPage = () => {
  const {
    saveQrToDisk,
    name, 
    setName, 
    email, 
    setEmail, 
    vCard,
    phone,
    setPhone,
    role,
    setRole,
    departemen,
    setDepartemen,
    address,
    setAddress,
    position,
    setPosition,
    showModal,
    setShowModal,
    setOutput
  } = useViewModel()

  return (
    <View style={[styles.container]}>
      <ScrollView style={styles.mainCard}>
        <View style={styles.logo}>
          <Text style={{textAlign: 'center', color:'grey'}}>LOGO</Text>
        </View>
        <View style={{marginVertical: 10}}>
          <View style={styles.list}>
            <Text style={{ fontSize: 20, fontWeight: '600', color:'#3D8DA6' }}>Collaborative Growth</Text>
          </View>
          <View style={styles.list}>
            <Text style={{ fontSize: 20, fontWeight: '600', color:'#3D8DA6' }}>Openness & Trustworthy</Text>
          </View>
          <View style={styles.list}>
            <Text style={{ fontSize: 20, fontWeight: '600', color:'#3D8DA6' }}>Excelent</Text>
          </View>
        </View>
        <View style={styles.qrcodeWrapper}>
          <View style={styles.qrcode}>
          {
              name ? 
              <QRCode
                getRef={(c) => {setOutput(c)}}
                size={250}
                value={vCard}
              /> : 
              <QRCode
                size={250}
                getRef={(c) => {setOutput(c)}}
                value={' '}
              />
            }
          </View>
        </View>

        <Text style={{ textAlign: 'center', marginTop: 10, textTransform:'capitalize', borderBottomWidth: 1, paddingVertical: 5, color:'black' }}>{name}</Text>
        
        <View style={{marginTop: 25, justifyContent: 'center', flexDirection:'column'}}>
          <TouchableOpacity
            style={[styles.button, styles.buttonPrimary]}
            onPress={() => setShowModal(true)}
            >
            <Text style={{color:'white', justifyContent:'center', textAlign: 'center', textTransform: 'uppercase', paddingVertical: 5}}>Input Data</Text>
          </TouchableOpacity>
          <View style={{height: 10}} />
          <TouchableOpacity
            style={[styles.button, styles.buttonOutline]}
            onPress={() => {
              saveQrToDisk()
            }}
            >
            <Text style={styles.buttonText}>SAVE QR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>


      <Modal 
        transparent={true}
        visible={showModal}
      >
          <View style={[styles.overlay, {height: height}]} />
          <View style={styles.cardInput}>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
              placeholder={'name'}
              placeholderTextColor={'grey'}
            />
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder={'email'}
              keyboardType={'email-address'}
              placeholderTextColor={'grey'}
            />
            <TextInput
              style={styles.input}
              onChangeText={setRole}
              value={role}
              placeholder={'jabatan'}
              placeholderTextColor={'grey'}
            />
            <TextInput
              style={styles.input}
              onChangeText={setPosition}
              value={position}
              placeholder={'posisi'}
              placeholderTextColor={'grey'}
            />
            <TextInput
              style={styles.input}
              onChangeText={setDepartemen}
              value={departemen}
              placeholder={'departemen'}
              placeholderTextColor={'grey'}
            />
            <TextInput
              style={styles.input}
              onChangeText={setPhone}
              value={phone}
              placeholder={'nomor hp'}
              keyboardType={'phone-pad'}
              placeholderTextColor={'grey'}
            />
            <TextInput
              style={styles.input}
              onChangeText={setAddress}
              value={address}
              placeholder={'address'}
              placeholderTextColor={'grey'}
            />

            <View style={{flexDirection:'row', justifyContent:'center', marginTop: 20}}>
              <TouchableOpacity
                style={[styles.button, styles.buttonOutline]}
                onPress={() => {
                  setAddress('')
                  setPhone('')
                  setDepartemen('')
                  setPosition('')
                  setRole('')
                  setEmail('')
                  setName('')
                }}
                >
                  <Text style={styles.buttonText}>CLEAR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonPrimary]}
                onPress={() => setShowModal(!showModal)}
               >
                <Text style={{color:'white', justifyContent:'center', marginVertical: 5, textTransform: 'uppercase'}}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
      </Modal>
    </View>
  )
}

export default QrScannerPage

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  mainCard:{
    backgroundColor: 'white', 
    padding: 35, 
    borderRadius: 20,  
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 15,
  },
  logo:{
    borderWidth: 1, 
    marginTop: 10,
    marginBottom: 25, 
    justifyContent: 'center', 
    padding: 20, 
    borderRadius: 10
  },
  list:{
    marginVertical: 2,
    justifyContent: 'center',
    paddingLeft: 5
  },
  qrcodeWrapper:{
    alignItems: "center",
  },
  qrcode:{
    padding: 15, 
    borderWidth: 1,
    borderRadius: 15
  },
  cardInput:{
    justifyContent: 'flex-end',
    alignContent:'flex-end',
    padding: 20,
    borderRadius: 20,
    flexDirection: 'column', 
    margin: 10,
    backgroundColor: 'white'
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginVertical: 3,
    borderRadius: 8,
    color:'black'
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: width,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 50,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  buttonPrimary: {
    backgroundColor: '#3D8DA6',
  },
  buttonOutline: {
    borderWidth: 3,
    borderColor: '#F49838',
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#F49838',
    textAlign:'center',
    textTransform:'uppercase'
  },
})