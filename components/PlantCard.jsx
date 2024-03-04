import { Card, Colors, Drawer, Image, Text, View } from "react-native-ui-lib";
import GestureHandler from "./GestureHandler";

export default function PlantCard({ item }) {
  const handleEdit = () => {
    console.log("handling edit");
  };

  const handleWatered = () => {
    console.log("handling watered");
  };

  return (
    <GestureHandler handleEdit={handleEdit} handleWatered={handleWatered}>
      <Card bg-green60 row borderRadius={0} paddingH-10>
        <Card.Image
          aspectRatio={1}
          borderRadius={7}
          source={{
            uri: item.imgUri,
          }}
        />
        <Card.Section
          content={[
            { text: item.name, text60: true },
            { text: `Water every ${item.waterInterval} days`, text70: true },
          ]}
          contentStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}
        />
      </Card>
    </GestureHandler>
  );
}
