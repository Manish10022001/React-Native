import React, { useState } from "react";
import { View, Text, Button, Modal } from "react-native";

export default function ModalComponent() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="press"
        onPress={() => setIsModalVisible(true)}
        color="midnightblue"
      />

      {/* need to set state on rendering which modal will appear and close */}
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)} //triggered when user press backbutton on android or dismisses modal with gesture on ios
        animationType="fade" //by default it is none, so we ccan give fade or slide as value;
        presentationStyle="formSheet" //it is set to fullScreen by default and  is only for IOS, we can change it to formSheet or pageSheet to alter the appearance : formSHeet is narrow while pageSheet is wider
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal Content</Text>
          <Button title="close" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
