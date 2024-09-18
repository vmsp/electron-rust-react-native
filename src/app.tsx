import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export function App() {
  const [message, setMessage] = useState<string>(null);

  useEffect(() => {
    window.rust.hello().then((r) => setMessage(r));
  }, []);

  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}
