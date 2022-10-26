import { useCallback } from "react";
import { Linking, Pressable } from "react-native";

export default OpenURLButton = ({ url, style, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    await Linking.openURL(url);

  }, [url]);

  return <Pressable onPress={handlePress}>{children}</Pressable>;
};