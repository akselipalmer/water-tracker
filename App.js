import { View } from "react-native-ui-lib";
import PlantCard from "./components/PlantCard";

import { plants } from "./data/plants";
import { FlatList } from "react-native";
import ItemSeparator from "./components/ItemSeparator";

export default function App() {
  return (
    <View flex paddingV-20>
      <FlatList
        data={plants}
        renderItem={({ item }) => <PlantCard item={item} />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
}
