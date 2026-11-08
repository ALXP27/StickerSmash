import { Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

const AppIcon = require('@/assets/images/icon.png');

const DETAILS = [
  { label: 'Estudiante', value: 'Angel A. Avila Andreu' },
  { label: 'Materia', value: 'Desarrollo de Aplicaciones para Smartphone' },
  { label: 'Facultad', value: 'Informática y Ciencias Exactas' },
  { label: 'Año', value: '3er año' },
  { label: 'Curso', value: '2026-2027' },
];

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={AppIcon} style={styles.icon} />
        <Text style={styles.title}>StickerSmash</Text>
        <Text style={styles.subtitle}>
          Decora tus fotos con stickers y guárdalas en tu galería.
        </Text>

        <View style={styles.card}>
          {DETAILS.map((detail) => (
            <View key={detail.label} style={styles.row}>
              <Text style={styles.label}>{detail.label}</Text>
              <Text style={styles.value}>{detail.value}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.footer}>Basado en el tutorial oficial de Expo</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    paddingTop: Platform.select({ web: 96, default: 20 }),
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  icon: {
    width: 96,
    height: 96,
    borderRadius: 24,
    marginBottom: 16,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    color: '#c7c7c7',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
    maxWidth: 320,
    lineHeight: 21,
  },
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#353a40',
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
    paddingVertical: 10,
  },
  label: {
    color: '#ffd33d',
    fontSize: 13,
    fontWeight: '600',
  },
  value: {
    color: '#fff',
    fontSize: 13,
    flexShrink: 1,
    textAlign: 'right',
  },
  footer: {
    color: '#8a8f98',
    fontSize: 12,
    marginTop: 24,
  },
});
