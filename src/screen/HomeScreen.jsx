import { View } from "react-native";
import { Paragraph, Surface } from "react-native-paper";
import { useEffect } from "react";
import { db } from "../config/firebase";
import styles from "../config/styles";
import { collection, getDocs } from "firebase/firestore";

export default function HomeScreen() {
  useEffect(() => {
    // aqui
    const buscaDados = async () => {
      // aqui eu referencio a coleção usuários dentro de colRef
      const colRef = collection(db, "usuarios");
      // buscar todos os resultados de colRef que é a coleção usuários
      const querySnapshot = await getDocs(colRef); // faz esperar a busca dos dados
      // para cada documento dentro de querySnapshot, eu imprimo o id e os dados
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    };
    // fecha aqui
    buscaDados(); // não esqueça de chamar a função

  }, []);

  return (
    <Surface style={styles.container}>
      <View>
        <Paragraph>Bem vindx</Paragraph>
      </View>
    </Surface>
  );
}
