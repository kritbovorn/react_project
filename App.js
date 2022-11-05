import React, { useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar, Text, TextInput, View, TouchableHighlight } from 'react-native'
import TextTitle from "./src/components/text_component/text_title";

const red = "#EC1B25";
const grey = "#F7F7F7";
const checkBoxColor = "#DEDEDE";

const App = () => {

  const [count, increaseCount] = useState(0);
  const onPress = () => increaseCount(count + 1);
  return (


    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 0, backgroundColor: red }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: grey }}>
        <StatusBar barStyle={"light-content"} />

        <View style={{ flex: 1, backgroundColor: "white" }}>
          <View style={{ flex: 6 }}>

            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 1, backgroundColor: "pink" }}></View>
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1 }}></View>
              <View style={{ flex: 12 }}>
                <View style={{ flex: 3 }}>
                  <TextInput placeholder="รหัสตัวแทนคู่ค้า" style={styles.textInputStyle} />

                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 3 }}>
                  <TextInput placeholder="รหัสผ่าน" style={styles.textInputStyle} />

                </View>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ flex: 2, paddingHorizontal: 20, flexDirection: "row", alignItems: 'flex-end' }}>
                <View style={styles.checkBoxStyle}></View>
                <TextTitle text="Remember me." />
              </View>
              <View style={{ flex: 1 }}></View>
              <View style={{ flex: 2, marginHorizontal: 20, backgroundColor: red, borderRadius: 3 }}>
                <TouchableHighlight style={[styles.alignCenter, { flex: 1 }]} onPress={onPress}>
                  <Text style={styles.textButtonStyle}>LOG IN</Text>
                </TouchableHighlight>
              </View>

            </View>

          </View>
          <View style={{ flex: 2 }}>
            <View style={{ flex: 8 }}>
              <View style={{ flex: 1 }}></View>
              <View style={[styles.spaceBetweenContent, { flex: 5 }]}>
                <TextTitle text="ลืมรหัสผ่าน" />
                <Text style={{ fontSize: 38, color: "blue" }}>{count}</Text>
                <TextTitle text="เปลี่ยนรหัสผ่าน" />
              </View>
            </View>
            <View style={[styles.spaceBetweenContent, { flex: 7, backgroundColor: grey }]}>
              <TextTitle text="เข้าสู่ระบบครั้งแรก" />
              <TextTitle text="ติดต่อเรา" />
            </View>
          </View>

        </View>

      </SafeAreaView>
    </View>

  );
}

const styles = StyleSheet.create({
  alignCenter: {
    justifyContent: "center",
    alignItems: "center"
  },
  spaceBetweenContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  },
  textButtonStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  textInputStyle: {
    flex: 1,
    fontSize: 18,
    borderRadius: 8,
    borderColor: "#BDBDBD",
    borderWidth: 1,
    marginHorizontal: 20,
    paddingHorizontal: 20
  },
  checkBoxStyle: {
    width: 20,
    height: 20,
    backgroundColor: checkBoxColor,
    borderRadius: 2,
    marginRight: 12
  }
});

export default App;