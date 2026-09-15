import { Tabs } from "expo-router";
export default function TabsLayout() {
    return (

        <Tabs>
            <Tabs.Screen
                name="login"
                options={{
                    title: "login",
                    headerShown: false,
                    href: null,
                    tabBarStyle: {
                        display: "none"
                    }
                }}
            />
            <Tabs.Screen
                name="login/perfilStyles"
                options={{
                    href: null,
                }}
            />
            <Tabs.Screen
                name="feedtela"
                options={{
                    title: "feed",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="feedtela/feedtelaStyles"
                options={{
                    href: null,
                }}
            />
            <Tabs.Screen
                name="editarperfil"
                options={{
                    title: "editar perfil",
                    headerShown: false,
                    href: null,
                }}
            />
            <Tabs.Screen
                name="editarperfil/editarperfilStyles"
                options={{
                    href: null,
                }}
            />
            <Tabs.Screen
                name="notificacoes"
                options={{
                    title: "notificacoes",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="novaPublicacao"
                options={{
                    title: "novaPublicacao",
                    headerShown: false,
                    href: null,
                }}
            />
            <Tabs.Screen
                name="novaPublicacao/novaPublicacaoStyles"
                options={{
                    href: null,
                }}
            />
            <Tabs.Screen
                name="perfilusuario"
                options={{
                    title: "perfilusuario",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="perfilusuario/perfilusuarioStyles"
                options={{
                    href: null,
                }}
            />
            <Tabs.Screen
                name="detalhes"
                options={{
                    title: "detalhes",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="detalhes/detalhesStyles"
                options={{
                    href: null,
                }}
            />
            <Tabs.Screen
                name="cadastro"
                options={{
                    title: "cadastro",
                    headerShown: false,
                    href: null,
                    tabBarStyle: {
                        display: "none"
                    }
                }}
            />
            <Tabs.Screen
                name="cadastro/cadastroStyles"
                options={{
                    href: null,
                }}
            />
        </Tabs>
    );
}