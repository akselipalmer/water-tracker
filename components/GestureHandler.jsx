import { Colors, Drawer, View } from "react-native-ui-lib";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

export default function GestureHandler({
  children,
  handleEdit,
  handleWatered,
}) {
  const Handler = gestureHandlerRootHOC(() => (
    <View>
      <Drawer
        rightItems={[
          {
            text: "Watered",
            background: Colors.green30,
            onPress: handleWatered,
          },
        ]}
        leftItem={{
          text: "Edit",
          background: Colors.blue30,
          onPress: handleEdit,
        }}
        fullRightThreshold={0.3}
        fullSwipeRight
        onFullSwipeRight={handleWatered}
        fullLeftThreshold={0.6}
        fullSwipeLeft
        onFullSwipeLeft={handleEdit}
      >
        {children}
      </Drawer>
    </View>
  ));
  return <Handler />;
}
