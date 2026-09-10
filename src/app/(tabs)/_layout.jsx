import { Tabs } from "expo-router";
export default function TabsLayout() {
    return (

        <Tabs>
            <Tabs.Screen
                name="perfil"
                options={{
                    title: "Início",
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}