import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB, Portal, Dialog, Button, Text, PaperProvider } from 'react-native-paper';

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <PaperProvider>
      <View style={styles.container}>
        Hello from Rich
        <Portal>
          <Dialog visible={visible} onDismiss={() => setVisible(false)}>
            <Dialog.Title>Vite + Web Dialog</Dialog.Title>
            <Dialog.Content>
              <Text>This dialog is rendered via a Portal, ensuring it floats above the FAB.</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setVisible(false)}>Dismiss</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => setVisible(true)}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, minHeight: '100vh' },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
