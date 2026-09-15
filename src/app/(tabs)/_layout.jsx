import { Tabs } from "expo-router";
export default function TabsLayout() {
    return (

        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#DC97A5",
                tabBarInactiveTintColor: "#F2E9E6",
                tabBarStyle: {
                    height: 70,
                    borderTopRightRadius: 5,
                    borderTopLeftRadius: 5,
                    backgroundColor: "#B83556",
                },
                tabBarIconStyle: {
                    marginBottom: 2,
                },
                tabBarLabelStyle: {
                    fontSize: 10,
                },
            }}>

            <Tabs.Screen
                name="login"
                options={{
                    title: "login",
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
                }}
            />
            <Tabs.Screen
                name="novaPublicacao"
                options={{
                    title: "novaPublicacao",
                    href: null,
                    tabBarStyle: {
                        display: "none"
                    }
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