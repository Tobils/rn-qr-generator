import {
  Dimensions,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import QRCode from "react-native-qrcode-svg";
import useViewModel from "./view.model";
import { QrScannerStyles } from "./qr.scanner.style";

var { width, height } = Dimensions.get("window");

const QrGeneratorPage = () => {
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
    setOutput,
  } = useViewModel();

  return (
    <View style={[QrScannerStyles.container]}>
      <ScrollView style={QrScannerStyles.mainCard}>
        <View style={QrScannerStyles.logo}>
          <Text style={{ textAlign: "center", color: "grey" }}>LOGO</Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <View style={QrScannerStyles.list}>
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#3D8DA6" }}>
              Collaborative Growth
            </Text>
          </View>
          <View style={QrScannerStyles.list}>
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#3D8DA6" }}>
              Openness & Trustworthy
            </Text>
          </View>
          <View style={QrScannerStyles.list}>
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#3D8DA6" }}>
              Excelent
            </Text>
          </View>
        </View>
        <View style={QrScannerStyles.qrcodeWrapper}>
          <View style={QrScannerStyles.qrcode}>
            {name ? (
              <QRCode
                getRef={(c) => {
                  setOutput(c);
                }}
                size={250}
                value={vCard}
              />
            ) : (
              <QRCode
                size={250}
                getRef={(c) => {
                  setOutput(c);
                }}
                value={" "}
              />
            )}
          </View>
        </View>

        <Text
          style={{
            textAlign: "center",
            marginTop: 10,
            textTransform: "capitalize",
            borderBottomWidth: 1,
            paddingVertical: 5,
            color: "black",
          }}
        >
          {name}
        </Text>

        <View
          style={{
            marginTop: 25,
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TouchableOpacity
            style={[QrScannerStyles.button, QrScannerStyles.buttonPrimary]}
            onPress={() => setShowModal(true)}
          >
            <Text
              style={{
                color: "white",
                justifyContent: "center",
                textAlign: "center",
                textTransform: "uppercase",
                paddingVertical: 5,
              }}
            >
              Input Data
            </Text>
          </TouchableOpacity>
          <View style={{ height: 10 }} />
          <TouchableOpacity
            style={[QrScannerStyles.button, QrScannerStyles.buttonOutline]}
            onPress={() => {
              saveQrToDisk();
            }}
          >
            <Text style={QrScannerStyles.buttonText}>SAVE QR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal transparent={true} visible={showModal}>
        <View style={[QrScannerStyles.overlay]} />
        <View style={QrScannerStyles.cardInput}>
          <TextInput
            style={QrScannerStyles.input}
            onChangeText={setName}
            value={name}
            placeholder={"name"}
            placeholderTextColor={"grey"}
          />
          <TextInput
            style={QrScannerStyles.input}
            onChangeText={setEmail}
            value={email}
            placeholder={"email"}
            keyboardType={"email-address"}
            placeholderTextColor={"grey"}
          />
          <TextInput
            style={QrScannerStyles.input}
            onChangeText={setRole}
            value={role}
            placeholder={"jabatan"}
            placeholderTextColor={"grey"}
          />
          <TextInput
            style={QrScannerStyles.input}
            onChangeText={setPosition}
            value={position}
            placeholder={"posisi"}
            placeholderTextColor={"grey"}
          />
          <TextInput
            style={QrScannerStyles.input}
            onChangeText={setDepartemen}
            value={departemen}
            placeholder={"departemen"}
            placeholderTextColor={"grey"}
          />
          <TextInput
            style={QrScannerStyles.input}
            onChangeText={setPhone}
            value={phone}
            placeholder={"nomor hp"}
            keyboardType={"phone-pad"}
            placeholderTextColor={"grey"}
          />
          <TextInput
            style={QrScannerStyles.input}
            onChangeText={setAddress}
            value={address}
            placeholder={"address"}
            placeholderTextColor={"grey"}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={[QrScannerStyles.button, QrScannerStyles.buttonOutline]}
              onPress={() => {
                setAddress("");
                setPhone("");
                setDepartemen("");
                setPosition("");
                setRole("");
                setEmail("");
                setName("");
              }}
            >
              <Text style={QrScannerStyles.buttonText}>CLEAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[QrScannerStyles.button, QrScannerStyles.buttonPrimary]}
              onPress={() => setShowModal(!showModal)}
            >
              <Text
                style={{
                  color: "white",
                  justifyContent: "center",
                  marginVertical: 5,
                  textTransform: "uppercase",
                }}
              >
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default QrGeneratorPage;
