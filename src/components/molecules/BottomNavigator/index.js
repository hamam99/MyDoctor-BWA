import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TabItem } from '../../atoms';

export const BottomNavigatyor = ({ state, descriptors, navigation }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
              <TabItem
                type={label}

              />
          );
        })}
      </View>
    );
};


{/* <TouchableOpacity
accessibilityRole="button"
accessibilityState={isFocused ? { selected: true } : {}}
accessibilityLabel={options.tabBarAccessibilityLabel}
testID={options.tabBarTestID}
onPress={onPress}
onLongPress={onLongPress}
style={{ flex: 1 }}
>
<Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
  {label}
</Text>
</TouchableOpacity> */}
