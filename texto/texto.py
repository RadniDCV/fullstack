import cv2
import pytesseract

#hay problema de brew
# Configura la ruta de Tesseract si es necesario
# Por ejemplo, en macOS (usando Homebrew):
pytesseract.pytesseract.tesseract_cmd = '/usr/local/bin/tesseract'

def detect_text_from_frame(frame):
    # Convertir la imagen a escala de grises
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Aplicar algún preprocesamiento, como desenfoque o umbral (opcional)
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)
    
    # Realizar OCR con Tesseract
    text = pytesseract.image_to_string(blurred, lang='eng')

    return text

def main():
    # Abrir la cámara
    cap = cv2.VideoCapture(0)

    if not cap.isOpened():
        print("No se pudo abrir la cámara.")
        return

    print("Presiona 'q' para salir.")

    try:
        while True:
            # Capturar el fotograma de la cámara
            ret, frame = cap.read()

            if not ret:
                print("Error al capturar el fotograma.")
                break

            # Detectar texto en el fotograma
            text = detect_text_from_frame(frame)

            # Mostrar el texto detectado en la consola
            print("Texto detectado:\n", text)

            # Mostrar el fotograma en una ventana
            cv2.imshow('Captura de Cámara', frame)

            # Salir al presionar 'q'
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
    except KeyboardInterrupt:
        print("Programa detenido por el usuario.")
    finally:
        # Liberar recursos
        cap.release()
        cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
