# Expo320
Projeto para adição de bibliotecas com vulnerabilidade removidas para uso no eVir

## Exemplo de execucao:
	$ npx expo run:ios

### Obs para desenvolvimento em Windows: 
- Se for desenvolver esse projeto em Windows com as bibliotecas , vai ser necessario comentar/remover a linha em "package.json -> Scripts -> postinstall", pois o Scan Sonatype detectou vulnerabilidades(apenas para windows) respectivamente do Hermes e NewtonsoftJson. 
- Dessa forma o deploy para produção(do Android e do iOS) serão feitos a partir de um Mac, com essa linha de postinstall ativa.
- Para mais detalhes sobre isso, ler descrição do commit: 1a4dbc4df88fe8a022e2b134fd426089b1599387

## A criação, bem como a execução de testes, se deram com as seguintes especificações:
	create-expo 3.2.0
	MacOS 15.0 Apple Silicon
 	Xcode 16.2
	iOS Simulator iPhone 16 Pro iOS 18.2
	Node 18.20.5
	npm/npx 10.8.2
	react 18.3.1
	react-native 0.76.6
	expo 52.0.28
	expo-camera 16.0.14
 	expo-notifications 0.29.13
	react-native-vector-icons 10.2.0
	biomejs/biome 1.9.4

	@types/react-native 0.72.7
	expo-constants 17.0.5
	expo-device 7.0.2
	expo-font 13.0.3
	expo-splash-screen 0.29.21
	expo-status-bar 2.0.1
	react-native 0.76.7
	react-native-gesture-handler 2.23.1
	react-native-screens 4.6.0
	axios 1.7.4
	react-native-fs 2.20.0
	react-native-share 12.0.9

### Todas as versões são as estáveis mais recente


