import { Stack } from "expo-router";
import { UsuarioProvider } from "../context/UsuarioProvider";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function Layout() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <UsuarioProvider>

                    <Stack>
                        <Stack.Screen
                            name="index"
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="(tabs)"
                            options={{
                                headerShown: false,
                            }}
                        />
                    </Stack>
                </UsuarioProvider>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}