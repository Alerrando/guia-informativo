import { Pressable, StyleSheet, Text, View } from "react-native";

export function CustomTabBar({ state, descriptors, navigation }) {
    return (
      <View style={style.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const Icon = options.tabBarIcon;

          const onPress = () => {
            if (!isFocused) {
              navigation.navigate(route.name);
            }
          };
  
          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              onPress={onPress}
              style={style.menu}
            >
              <Icon color={isFocused ? '#F2F2F2' : '#eee'} />
              <Text style={{ color: '#fff', opacity: isFocused ? '1' : '0.60' }}>
                {options.title}
              </Text>
            </Pressable>
          );
        })}
      </View>
    );
}

const style = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        paddingVertical: 8,
        backgroundColor: "#1D1F24",
        borderColor: "transparent",
        borderWidth: 0,
    },

    menu: {
        alignItems: "center",
        backgroundColor: "#539DF3",
        borderRadius: 100,
        borderWidth: 0,
        color: "#fff",
        flexDirection: "row",
        height: 'auto',
        justifyContent: "center",
        gap: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        width: "auto"
      },
})