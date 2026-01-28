import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SafeAreaContainer(props) {
  const { children, edges, noSafeArea } = props;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
      edges={
        edges ? edges : noSafeArea ? [] : ['left', 'right', 'top', 'bottom']
      }
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        keyboardVerticalOffset={-20}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          {children}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
