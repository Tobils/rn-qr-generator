import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import RNFS from "react-native-fs"
import { ToastAndroid } from "react-native"
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { PermissionsAndroid, Platform } from "react-native";



const QRScannerViewModel = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [role, setRole] = useState<string>('')
  const [departemen, setDepartemen] = useState<string>('')
  const [position, setPosition] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [showModal, setShowModal] = useState<boolean>(false)
  const [vCard, setVCard] = useState<string>('')
  const [output, setOutput] = useState<any>()

  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
  
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }
  
    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  const saveQrToDisk = () => {
    output.toDataURL(callback)
    setName('')
 }

 const callback = (dataURL:any) => {
  console.log({dataURL});
  RNFS.writeFile(RNFS.CachesDirectoryPath+`/${name}-${email}.png`, dataURL, 'base64')
    .then((success) => {
      CameraRoll.save(dataURL, {'type':'photo'})
      return CameraRoll.saveToCameraRoll(RNFS.CachesDirectoryPath+`/${name}-${email}.png`, 'photo')

    })
    .then(() => {
      ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT)
    })
    .catch((e) => {
      console.log({e});
      
    })
  }

  useEffect(() => {
    hasAndroidPermission()
  },[])


  useEffect(() => {
    setVCard(`START:VCARD \n NAMA:${name} \n EMAIL: ${email} \n PHONE:${phone}\n JABATAN:${role} \n POSISI:${position} \n DEPARTEMENT:${departemen} \n ADDRESS:${address} \nEND:VCARD`)
  }, [email, name, phone, position, role, departemen, address])

  return ({
    saveQrToDisk,
    output,
    setOutput,
    setName, 
    name, 
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

  })
}

export default QRScannerViewModel

const styles = StyleSheet.create({})