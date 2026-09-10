import { Tabs } from "expo-router";
export default function TabsLayout() {
    return (

        <Tabs>
            <Tabs.Screen
                name="login"
                options={{
                    title: "Início",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="feedtela"
                options={{
                    title: "Início",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="editarperfil"
                options={{
                    title: "Início",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="notificacoes"
                options={{
                    title: "Início",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="novaPublicacao"
                options={{
                    title: "Início",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="perfilusuario"
                options={{
                    title: "Início",
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}