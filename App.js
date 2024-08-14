import { useState } from "react";
import { Paragraph, Surface, TextInput } from "react-native-paper";

export default function InserirNotaScreen() {
  const [nota, setNota] = useState(0);

  return (
    <Surface>
      <View>
        <Paragraph>Insira sua nota</Paragraph>
        <TextInput value={nota} onChangeText={(text) => setNota(text)} />
      </View>
    </Surface>
  );
}
